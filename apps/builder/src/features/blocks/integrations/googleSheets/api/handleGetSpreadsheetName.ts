import { ORPCError } from "@orpc/server";
import { getGoogleSpreadsheet } from "@typebot.io/credentials/getGoogleSpreadsheet";
import prisma from "@typebot.io/prisma";
import type { User } from "@typebot.io/user/schemas";
import { z } from "zod";
import { isReadWorkspaceFobidden } from "@/features/workspace/helpers/isReadWorkspaceFobidden";

export const getSpreadsheetNameInputSchema = z.object({
  workspaceId: z.string(),
  credentialsId: z.string(),
  spreadsheetId: z.string(),
});

export const handleGetSpreadsheetName = async ({
  input: { workspaceId, credentialsId, spreadsheetId },
  context: { user },
}: {
  input: z.infer<typeof getSpreadsheetNameInputSchema>;
  context: { user: Pick<User, "id" | "email"> };
}) => {
  const workspace = await prisma.workspace.findFirst({
    where: {
      id: workspaceId,
    },
    select: {
      id: true,
      members: true,
      credentials: {
        where: {
          id: credentialsId,
        },
        select: {
          id: true,
          data: true,
          iv: true,
        },
      },
    },
  });
  if (!workspace || isReadWorkspaceFobidden(workspace, user))
    throw new ORPCError("NOT_FOUND", { message: "未找到工作区" });

  const credentials = workspace.credentials[0];
  if (!credentials) throw new ORPCError("NOT_FOUND", { message: "未找到凭据" });

  try {
    const googleSheetResponse = await getGoogleSpreadsheet({
      credentialsId: credentials.id,
      spreadsheetId,
      workspaceId,
    });

    if (googleSheetResponse.type === "error")
      throw new ORPCError("BAD_REQUEST", {
        message: googleSheetResponse.log.description,
      });

    await googleSheetResponse.spreadsheet.loadInfo();

    return { name: googleSheetResponse.spreadsheet.title };
  } catch (_e) {
    return { name: "" };
  }
};
