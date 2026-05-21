import { useTranslate } from "@tolgee/react";
import type { PabblyConnectBlock } from "@typebot.io/blocks-integrations/pabblyConnect/schema";

type Props = {
  block: PabblyConnectBlock;
};

export const PabblyConnectContent = ({ block }: Props) => {
  const { t } = useTranslate();
  if (!block.options?.webhook?.url)
    return <p className="text-gray-9">{t("configure")}</p>;
  return <p className="pr-6 truncate">{t("blocks.integrations.pabbly.nodeContent.trigger.label")}</p>;
};
