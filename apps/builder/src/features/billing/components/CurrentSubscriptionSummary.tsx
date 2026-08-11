import { useQuery } from "@tanstack/react-query";
import { useTranslate } from "@tolgee/react";
import type { Workspace } from "@typebot.io/workspaces/schemas";
import { PlanBadge } from "./PlanTag";

type Props = {
  workspace: Pick<Workspace, "id" | "plan">;
};

export const CurrentSubscriptionSummary = ({ workspace }: Props) => {
  const { t } = useTranslate();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">{t("billing.currentSubscription.heading")}</h2>
      <div
        className="flex items-center gap-2"
        data-testid="current-subscription"
      >
        <p>{t("billing.currentSubscription.subheading")} </p>
        <PlanBadge plan={workspace.plan} />
      </div>
    </div>
  );
};
