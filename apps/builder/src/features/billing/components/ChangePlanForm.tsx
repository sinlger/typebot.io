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
        Only workspace admins can change the subscription plan. Contact the
        admin at <a href={`mailto:${adminEmail}`}>{adminEmail}</a> to change the
        plan.
      </p>
    );

  return (
    <div className="flex flex-col gap-6">
      <p>
        Plan upgrades are managed manually. Please contact the admin at{" "}
        <a href={`mailto:${adminEmail}`}>{adminEmail}</a> to upgrade your
        workspace from <strong>{workspace.plan}</strong>.
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
