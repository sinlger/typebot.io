import {
  defaultPixelOptions,
  pixelEventTypes,
  pixelObjectProperties,
} from "@typebot.io/blocks-integrations/pixel/constants";
import type { PixelBlock } from "@typebot.io/blocks-integrations/pixel/schema";
import { isDefined, isEmpty } from "@typebot.io/lib/utils";
import { useTranslate } from "@tolgee/react";
import { DebouncedTextInput } from "@typebot.io/ui/components/DebouncedTextInput";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Switch } from "@typebot.io/ui/components/Switch";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { CodeEditor } from "@/components/inputs/CodeEditor";
import { DebouncedTextInputWithVariablesButton } from "@/components/inputs/DebouncedTextInput";
import { TableList } from "@/components/TableList";

type Props = {
  options?: PixelBlock["options"];
  onOptionsChange: (options: PixelBlock["options"]) => void;
};

type Item = NonNullable<NonNullable<PixelBlock["options"]>["params"]>[number];

export const PixelSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate();
  const emptyOptions = {
    eventType: undefined,
    pixelId: undefined,
    isInitSkip: undefined,
    params: undefined,
  } satisfies PixelBlock["options"];
  const baseOptions = options ?? emptyOptions;

  const updateIsInitSkipped = (isChecked: boolean) =>
    onOptionsChange({
      ...baseOptions,
      isInitSkip: isChecked,
    });

  const updatePixelId = (pixelId: string) =>
    onOptionsChange({
      ...baseOptions,
      pixelId: isEmpty(pixelId) ? undefined : pixelId,
    });

  const updateIsTrackingEventEnabled = (isChecked: boolean) =>
    onOptionsChange({
      ...baseOptions,
      params: isChecked && !options?.params ? [] : undefined,
    });

  const updateEventType = (
    eventType: (typeof pixelEventTypes)[number] | "Custom" | undefined,
  ) =>
    onOptionsChange({
      ...baseOptions,
      params: [],
      eventType,
    });

  const updateParams = (params: NonNullable<PixelBlock["options"]>["params"]) =>
    onOptionsChange({
      ...baseOptions,
      params,
    });

  const updateEventName = (name: string) => {
    if (baseOptions.eventType !== "Custom") return;
    onOptionsChange({
      ...baseOptions,
      name: isEmpty(name) ? undefined : name,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <DebouncedTextInput
        defaultValue={options?.pixelId ?? ""}
        onValueChange={updatePixelId}
        placeholder={t("blocks.integrations.pixel.settings.pixelId.placeholder")}
      />
      <Field.Root className="flex-row items-center">
        <Switch
          checked={options?.isInitSkip ?? defaultPixelOptions.isInitSkip}
          onCheckedChange={updateIsInitSkipped}
        />
        <Field.Label>
          {t("blocks.integrations.pixel.settings.skipInit.label")}{" "}
          <MoreInfoTooltip>
            {t("blocks.integrations.pixel.settings.skipInit.tooltip")}
          </MoreInfoTooltip>
        </Field.Label>
      </Field.Root>
      <Field.Container>
        <Field.Root className="flex-row items-center">
          <Switch
            checked={isDefined(options?.params)}
            onCheckedChange={updateIsTrackingEventEnabled}
          />
          <Field.Label>{t("blocks.integrations.pixel.settings.trackEvent.label")}</Field.Label>
        </Field.Root>
        {isDefined(options?.params) && (
          <>
            <p className="text-sm" color="gray.500">
              {t("blocks.integrations.pixel.settings.readReference.label")}
            </p>
            <BasicSelect
              className="w-full"
              items={["Custom", ...pixelEventTypes]}
              value={options?.eventType}
              placeholder={t("blocks.integrations.pixel.settings.selectEventType.placeholder")}
              onChange={updateEventType}
            />
            {options?.eventType === "Custom" && (
              <DebouncedTextInputWithVariablesButton
                defaultValue={options.name ?? ""}
                onValueChange={updateEventName}
                placeholder={t("blocks.integrations.pixel.settings.eventName.placeholder")}
              />
            )}
            {options?.eventType &&
              (options.eventType === "Custom" ||
                pixelObjectProperties.filter((prop) =>
                  prop.associatedEvents.includes(options.eventType),
                ).length > 0) && (
                <TableList
                  initialItems={options?.params ?? []}
                  onItemsChange={updateParams}
                  addLabel={t("blocks.integrations.pixel.settings.addParameter.label")}
                >
                  {(props) => (
                    <ParamItem {...props} eventType={options?.eventType} />
                  )}
                </TableList>
              )}
          </>
        )}
      </Field.Container>
    </div>
  );
};

type ParamItemProps = {
  item: Item;
  eventType: "Custom" | (typeof pixelEventTypes)[number] | undefined;
  onItemChange: (item: Item) => void;
};

const ParamItem = ({ item, eventType, onItemChange }: ParamItemProps) => {
  const { t } = useTranslate();
  const possibleObjectProps =
    eventType && eventType !== "Custom"
      ? pixelObjectProperties.filter((prop) =>
          prop.associatedEvents.includes(eventType),
        )
      : [];

  const currentObject = possibleObjectProps.find(
    (prop) => prop.key === item.key,
  );

  const updateKey = (key: string | undefined) =>
    onItemChange({
      ...item,
      key,
    });

  const updateValue = (value: string) =>
    onItemChange({
      ...item,
      value,
    });

  if (!eventType) return null;

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md flex-1 border">
      {eventType === "Custom" ? (
        <DebouncedTextInputWithVariablesButton
          defaultValue={item.key}
          onValueChange={updateKey}
          placeholder={t("blocks.integrations.pixel.settings.key.placeholder")}
        />
      ) : (
        <BasicSelect
          className="w-full"
          value={item.key}
          items={possibleObjectProps.map((prop) => prop.key)}
          onChange={updateKey}
          placeholder={t("blocks.integrations.pixel.settings.selectKey.placeholder")}
        />
      )}
      {currentObject?.type === "code" ? (
        <CodeEditor
          lang={"js"}
          defaultValue={item.value}
          onChange={updateValue}
        />
      ) : (
        <DebouncedTextInputWithVariablesButton
          defaultValue={item.value}
          onValueChange={updateValue}
          placeholder={t("blocks.integrations.pixel.settings.value.placeholder")}
        />
      )}
    </div>
  );
};
