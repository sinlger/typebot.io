import type { Workspace } from "@typebot.io/workspaces/schemas";

export const parseNewName = (
  userFullName: string | undefined,
  existingWorkspaces: Pick<Workspace, "name">[],
) => {
  const workspaceName = userFullName
    ? `${userFullName}的 工作区`
    : "我的工作区";
  let newName = workspaceName;
  let i = 1;
  while (existingWorkspaces.find((w) => w.name === newName)) {
    newName = `${workspaceName} (${i})`;
    i++;
  }
  return newName;
};
