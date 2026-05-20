import type {
  BubbleProps,
  BubbleTheme,
  ButtonTheme,
  PreviewMessageTheme,
} from "@typebot.io/js";
import { Accordion } from "@typebot.io/ui/components/Accordion";
import { useTranslate } from "@tolgee/react";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { ButtonThemeSettings } from "./ButtonThemeSettings";
import { PreviewMessageThemeSettings } from "./PreviewMessageThemeSettings";

type Props = {
  isPreviewMessageEnabled: boolean;
  theme: BubbleProps["theme"];
  onChange: (newBubbleTheme: BubbleProps["theme"]) => void;
};

export const ThemeSettings = ({
  isPreviewMessageEnabled,
  theme,
  onChange,
}: Props) => {
  const { t } = useTranslate();
  const updateButtonTheme = (button?: ButtonTheme) => {
    onChange({
      ...theme,
      button,
    });
  };

  const updatePreviewMessageTheme = (previewMessage?: PreviewMessageTheme) => {
    onChange({
      ...theme,
      previewMessage,
    });
  };

  const updatePlacement = (placement: BubbleTheme["placement"]) => {
    onChange({
      ...theme,
      placement,
    });
  };

  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Trigger>{t("deploy.settings.bubble.theme.label")}</Accordion.Trigger>
        <Accordion.Panel>
          <div className="flex items-center gap-2 justify-between">
            <p>{t("deploy.settings.bubble.theme.placement.label")}</p>
            <BasicSelect
              value={theme?.placement}
              defaultValue="right"
              items={[
                { value: "right", label: t("deploy.settings.bubble.theme.placement.right") },
                { value: "left", label: t("deploy.settings.bubble.theme.placement.left") },
              ]}
              onChange={updatePlacement}
            />
          </div>
          <ButtonThemeSettings
            buttonTheme={theme?.button}
            onChange={updateButtonTheme}
          />
          {isPreviewMessageEnabled ? (
            <PreviewMessageThemeSettings
              previewMessageTheme={theme?.previewMessage}
              onChange={updatePreviewMessageTheme}
            />
          ) : null}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
};
