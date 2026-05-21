import type { GoogleAnalyticsBlock } from "@typebot.io/blocks-integrations/googleAnalytics/schema";
import { Accordion } from "@typebot.io/ui/components/Accordion";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { BasicNumberInput } from "@/components/inputs/BasicNumberInput";
import { useTranslate } from "@tolgee/react";
import { DebouncedTextInputWithVariablesButton } from "@/components/inputs/DebouncedTextInput";

type Props = {
  options?: GoogleAnalyticsBlock["options"];
  onOptionsChange: (options: GoogleAnalyticsBlock["options"]) => void;
};

export const GoogleAnalyticsSettings = ({
  options,
  onOptionsChange,
}: Props) => {
  const { t } = useTranslate();
  const updateTrackingId = (trackingId: string) =>
    onOptionsChange({ ...options, trackingId });

  const updateCategory = (category: string) =>
    onOptionsChange({ ...options, category });

  const updateAction = (action: string) =>
    onOptionsChange({ ...options, action });

  const updateLabel = (label: string) => onOptionsChange({ ...options, label });

  const updateValue = (value: number | `{{${string}}}` | undefined) =>
    onOptionsChange({
      ...options,
      value,
    });

  const updateSendTo = (sendTo?: string) =>
    onOptionsChange({
      ...options,
      sendTo,
    });

  return (
    <div className="flex flex-col gap-4">
      <Field.Root>
        <Field.Label>
          {t("blocks.integrations.googleAnalytics.settings.measurementId.label")}
          <MoreInfoTooltip>
            {t("blocks.integrations.googleAnalytics.settings.measurementId.tooltip")}
          </MoreInfoTooltip>
        </Field.Label>
        <DebouncedTextInputWithVariablesButton
          defaultValue={options?.trackingId}
          placeholder={t("blocks.integrations.googleAnalytics.settings.measurementId.placeholder")}
          onValueChange={updateTrackingId}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.googleAnalytics.settings.eventAction.label")}</Field.Label>
        <DebouncedTextInputWithVariablesButton
          defaultValue={options?.action}
          placeholder={t("blocks.integrations.googleAnalytics.settings.eventAction.placeholder")}
          onValueChange={updateAction}
        />
      </Field.Root>
      <Accordion.Root>
        <Accordion.Item>
          <Accordion.Trigger>
            <div className="flex-1 text-left">{t("blocks.integrations.googleAnalytics.settings.advanced.label")}</div>
          </Accordion.Trigger>
          <Accordion.Panel>
            <Field.Root>
              <Field.Label>{t("blocks.integrations.googleAnalytics.settings.eventCategory.label")}</Field.Label>
              <DebouncedTextInputWithVariablesButton
                defaultValue={options?.category}
                placeholder={t("blocks.integrations.googleAnalytics.settings.eventCategory.placeholder")}
                onValueChange={updateCategory}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>{t("blocks.integrations.googleAnalytics.settings.eventLabel.label")}</Field.Label>
              <DebouncedTextInputWithVariablesButton
                defaultValue={options?.label}
                placeholder={t("blocks.integrations.googleAnalytics.settings.eventLabel.placeholder")}
                onValueChange={updateLabel}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>{t("blocks.integrations.googleAnalytics.settings.eventValue.label")}</Field.Label>
              <BasicNumberInput
                defaultValue={options?.value}
                onValueChange={updateValue}
                placeholder={t("blocks.integrations.googleAnalytics.settings.eventValue.placeholder")}
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>
                {t("blocks.integrations.googleAnalytics.settings.sendTo.label")}
                <MoreInfoTooltip>
                  {t("blocks.integrations.googleAnalytics.settings.sendTo.tooltip")}
                </MoreInfoTooltip>
              </Field.Label>
              <DebouncedTextInputWithVariablesButton
                defaultValue={options?.sendTo?.toString()}
                placeholder={t("blocks.integrations.googleAnalytics.settings.sendTo.placeholder")}
                onValueChange={updateSendTo}
              />
            </Field.Root>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};
