import { useTranslate } from "@tolgee/react";
import type { ZapierBlock } from "@typebot.io/blocks-integrations/zapier/schema";

type Props = {
  block: ZapierBlock;
};

export const ZapierContent = ({ block }: Props) => {
  const { t } = useTranslate();
  if (!block.options?.webhook?.url)
    return <p className="text-gray-9">{t("configure")}</p>;
  return <p className="pr-6 truncate">{t("blocks.integrations.zapier.nodeContent.trigger.label")}</p>;
};
