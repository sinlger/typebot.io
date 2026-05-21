import type { SendEmailBlock } from "@typebot.io/blocks-integrations/sendEmail/schema";
import { useTranslate } from "@tolgee/react";
import { Badge } from "@typebot.io/ui/components/Badge";

type Props = {
  block: SendEmailBlock;
};

export const SendEmailContent = ({ block }: Props) => {
  const { t } = useTranslate();
  if ((block.options?.recipients?.length ?? 0) === 0)
    return <p color="gray.500">{t("configure")}</p>;
  return (
    <div className="flex flex-wrap pr-6 line-clamp-2">
      <div>
        <p>{t("blocks.integrations.sendEmail.nodeContent.sendEmail.label")}</p>
      </div>
      {block.options?.recipients?.map((to) => (
        <div key={to}>
          <Badge>{to}</Badge>
        </div>
      ))}
    </div>
  );
};
