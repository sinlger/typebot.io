import { ORPCError } from "@orpc/server";
import prisma from "@typebot.io/prisma";
import type { User } from "@typebot.io/user/schemas";
import { z } from "zod";
import { isWriteTypebotForbidden } from "../helpers/isWriteTypebotForbidden";

export const unpublishTypebotInputSchema = z.object({
  typebotId: z
    .string()
    .describe(
      "[Where to find my bot's ID?](../how-to#how-to-find-my-typebotid)",
    ),
});

export const handleUnpublishTypebot = async ({
  input: { typebotId },
  context: { user },
}: {
  input: z.infer<typeof unpublishTypebotInputSchema>;
  context: { user: Pick<User, "id"> };
}) => {
  const existingTypebot = await prisma.typebot.findFirst({
    where: {
      id: typebotId,
    },
    include: {
      collaborators: true,
      publishedTypebot: true,
      workspace: {
        select: {
          isSuspended: true,
          isPastDue: true,
          members: {
            select: {
              userId: true,
              role: true,
            },
          },
        },
      },
    },
  });
  if (!existingTypebot?.publishedTypebot)
    throw new ORPCError("NOT_FOUND", {
      message: "未找到已发布的机器人",
    });

  if (
    !existingTypebot.id ||
    (await isWriteTypebotForbidden(existingTypebot, user))
  )
    throw new ORPCError("NOT_FOUND", { message: "QinglBot not found" });

  await prisma.publicTypebot.deleteMany({
    where: {
      id: existingTypebot.publishedTypebot.id,
    },
  });

  return { message: "success" as const };
};
