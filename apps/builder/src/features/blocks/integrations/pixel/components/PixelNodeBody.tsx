import type { PixelBlock } from "@typebot.io/blocks-integrations/pixel/schema";
import { useTranslate } from "@tolgee/react";
import { cx } from "@typebot.io/ui/lib/cva";

type Props = {
  options: PixelBlock["options"];
};

export const PixelNodeBody = ({ options }: Props) => {
  const { t } = useTranslate();
  return (
    <p
      className={cx(
        "truncate",
        options?.eventType || options?.pixelId ? "text-gray-12" : "text-gray-9",
      )}
    >
      {options?.eventType
        ? `${t("blocks.integrations.pixel.nodeBody.track.label")} "${options.eventType}"`
        : options?.pixelId
          ? t("blocks.integrations.pixel.nodeBody.init.label")
          : t("configure")}
    </p>
  );
};
