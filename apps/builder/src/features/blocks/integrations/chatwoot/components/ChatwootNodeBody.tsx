import type { ChatwootBlock } from "@typebot.io/blocks-integrations/chatwoot/schema";
import { useTranslate } from "@tolgee/react";

type Props = {
  block: ChatwootBlock;
};

export const ChatwootNodeBody = ({ block }: Props) => {
  const { t } = useTranslate();
  return block.options?.task === "Close widget" ? (
    <p>{t("blocks.integrations.chatwoot.nodeBody.close.label")}</p>
  ) : (block.options?.websiteToken?.length ?? 0) === 0 ? (
    <p color="gray.500">{t("configure")}</p>
  ) : (
    <p>{t("blocks.integrations.chatwoot.nodeBody.open.label")}</p>
  );
};
