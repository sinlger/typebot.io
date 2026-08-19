import { ORPCError } from "@orpc/server";
import { zodToSchema } from "@typebot.io/ai/zodToSchema";
import { authenticatedProcedure } from "@typebot.io/config/orpc/builder/middlewares";
import { decrypt } from "@typebot.io/credentials/decrypt";
import { forgedBlocks } from "@typebot.io/forge-repository/definitions";
import prisma from "@typebot.io/prisma";
import { defaultGroupTitleGenPrompt } from "@typebot.io/user/constants";
import { groupTitlesAutoGenerationSchema } from "@typebot.io/user/schemas";
import { generateObject } from "ai";
import { z } from "zod";
import { isWriteTypebotForbidden } from "@/features/typebot/helpers/isWriteTypebotForbidden";

export const generateGroupTitle = authenticatedProcedure
  .input(
    z.object({
      credentialsId: z.string(),
      typebotId: z.string(),
      groupContent: z.string(),
      model: z.string(),
      prompt: z.string().optional(),
    }),
  )
  .output(z.object({ title: z.string() }))
  .handler(
    async ({
      input: { credentialsId, typebotId, groupContent, model, prompt },
      context: { user },
    }) => {
      const typebot = await prisma.typebot.findUnique({
        where: { id: typebotId },
        select: {
          name: true,
          version: true,
          groups: true,
          workspace: {
            select: {
              id: true,
              isPastDue: true,
              isSuspended: true,
              members: {
                select: {
                  userId: true,
                  role: true,
                },
              },
            },
          },
          collaborators: {
            select: {
              userId: true,
              type: true,
            },
          },
        },
      });

      if (!typebot || (await isWriteTypebotForbidden(typebot, user)))
        throw new ORPCError("NOT_FOUND", { message: "QinglBot not found" });

      const groupTitlesAutoGeneration = groupTitlesAutoGenerationSchema.parse(
        user.groupTitlesAutoGeneration,
      );
      if (
        !groupTitlesAutoGeneration.isEnabled ||
        !groupTitlesAutoGeneration.provider ||
        !groupTitlesAutoGeneration.credentialsId
      ) {
        throw new ORPCError("BAD_REQUEST", {
          message: "未启用分组标题自动生成",
        });
      }

      const credentials = await prisma.userCredentials.findUnique({
        where: {
          id: credentialsId,
          userId: user.id,
        },
        select: {
          data: true,
          iv: true,
        },
      });

      if (!credentials)
        throw new ORPCError("NOT_FOUND", { message: "未找到凭据" });

      const credentialsData = await decrypt(credentials.data, credentials.iv);
      const apiKey = (credentialsData as { apiKey: string }).apiKey;

      const blockDef =
        forgedBlocks[
          groupTitlesAutoGeneration.provider as unknown as keyof typeof forgedBlocks
        ];
      if (!blockDef)
        throw new ORPCError("BAD_REQUEST", { message: "未找到提供商" });
      const action = blockDef.actions.find((a) => a.aiGenerate);
      if (!action)
        throw new ORPCError("BAD_REQUEST", {
          message: "提供商不支持 AI 生成",
        });
      const aiModel = action?.aiGenerate?.getModel?.({
        credentials: {
          apiKey,
        } as any,
        model,
      });
      if (!aiModel)
        throw new ORPCError("BAD_REQUEST", { message: "未找到模型" });
      const titleSchema = z.object({
        title: z.string(),
      });
      const {
        object: { title },
      } = await generateObject({
        model: aiModel,
        schema: zodToSchema(titleSchema),
        prompt: (prompt ?? defaultGroupTitleGenPrompt)
          .replace("[[typebotName]]", typebot.name)
          .replace("[[groupContent]]", groupContent),
      });

      return {
        title,
      };
    },
  );
