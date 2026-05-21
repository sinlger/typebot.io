import { useTranslate } from "@tolgee/react";
import type { GoogleAnalyticsBlock } from "@typebot.io/blocks-integrations/googleAnalytics/schema";
import { cx } from "@typebot.io/ui/lib/cva";

type Props = {
  action: NonNullable<GoogleAnalyticsBlock["options"]>["action"];
};

export const GoogleAnalyticsNodeBody = ({ action }: Props) => {
  const { t } = useTranslate();
  return (
    <p className={cx("truncate", action ? "text-gray-12" : "text-gray-9")}>
      {action
        ? `${t("blocks.integrations.googleAnalytics.nodeBody.track.label")} "${action}"`
        : t("configure")}
    </p>
  );
};
