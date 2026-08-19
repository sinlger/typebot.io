import { useTranslate } from "@tolgee/react";
import { TextLink } from "@/components/TextLink";
import type { WorkspaceInApp } from "@/features/workspace/WorkspaceProvider";

type Props = {
  workspace: WorkspaceInApp;
  currentUserMode?: "guest" | "read" | "write";
  excludedPlans?: ("STARTER" | "PRO")[];
};

// Stripe-backed self-serve plan changes were removed. To change the plan, the
// user contacts the admin who updates the workspace row via the admin script.
export const ChangePlanForm = ({
  workspace,
  currentUserMode,
  excludedPlans: _excludedPlans,
}: Props) => {
  const { t } = useTranslate();
  const adminEmail = "qinglbot@139.com";

  if (currentUserMode !== "write")
    return (
      <p>
        只有工作区管理员可以更改订阅方案。如需更改方案，请联系管理员：
        <a href={`mailto:${adminEmail}`}>{adminEmail}</a>。
      </p>
    );

  return (
    <div className="flex flex-col gap-6">
      <p>
        目前方案升级由管理员手动处理。如需将您的工作区从{" "}
        <strong>{workspace.plan}</strong> 方案升级，请联系管理员：
        <a href={`mailto:${adminEmail}`}>{adminEmail}</a>。
      </p>
      <p>
        {t("billing.customLimit.preLink")}{" "}
        <TextLink href={`mailto:${adminEmail}`} isExternal>
          {t("billing.customLimit.link")}
        </TextLink>
      </p>
    </div>
  );
};
