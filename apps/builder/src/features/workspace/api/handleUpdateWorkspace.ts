import { ORPCError } from "@orpc/server";
import prisma from "@typebot.io/prisma";
import type { User } from "@typebot.io/user/schemas";
import { z } from "zod";
import { isAdminWriteWorkspaceForbidden } from "../helpers/isAdminWriteWorkspaceForbidden";

export const updateWorkspaceInputSchema = z.object({
  name: z.string().optional(),
  icon: z.string().optional(),
  workspaceId: z
    .string()
    .describe(
      "[Where to find my workspace ID?](../how-to#how-to-find-my-workspaceid)",
    ),
});

export const handleUpdateWorkspace = async ({
  input: { workspaceId, icon, name },
  context: { user },
}: {
  input: z.infer<typeof updateWorkspaceInputSchema>;
  context: { user: Pick<User, "id" | "email"> };
}) => {
  const workspace = await prisma.workspace.findFirst({
    where: { members: { some: { userId: user.id } }, id: workspaceId },
    include: { members: true },
  });

  if (!workspace) throw new ORPCError("NOT_FOUND", { message: "未找到工作区" });

  if (isAdminWriteWorkspaceForbidden(workspace, user))
    throw new ORPCError("FORBIDDEN", {
      message: "您无权更新此工作区",
    });

  const updatedWorkspace = await prisma.workspace.update({
    where: { id: workspaceId },
    data: {
      name,
      icon,
    },
    include: { members: true },
  });

  return {
    workspace: updatedWorkspace,
  };
};
