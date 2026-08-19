import { useRouter } from "next/router";
import { useEffect } from "react";
import { TextLink } from "@/components/TextLink";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { useWorkspace } from "@/features/workspace/WorkspaceProvider";

export default function Page() {
  const { replace } = useRouter();
  const { workspace } = useWorkspace();

  useEffect(() => {
    if (!workspace || workspace.isSuspended) return;
    replace(workspace.id ? `/w/${workspace.id}/typebots` : "/typebots");
  }, [replace, workspace]);

  return (
    <>
      <DashboardHeader />
      <div className="flex flex-col items-center w-full h-[calc(100vh - 64px)] justify-center gap-4">
        <h2>您的工作区已被暂停使用.</h2>
        <p>
          我们发现您的其中一个聊天机器人不符合我们的要求{" "}
          <TextLink href="https://qinglbot.com/terms-of-service" isExternal>
            terms of service
          </TextLink>
        </p>
      </div>
    </>
  );
}
