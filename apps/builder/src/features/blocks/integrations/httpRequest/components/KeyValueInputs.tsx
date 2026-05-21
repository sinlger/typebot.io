import type { KeyValue } from "@typebot.io/blocks-integrations/httpRequest/schema";
import { useTranslate } from "@tolgee/react";
import { Field } from "@typebot.io/ui/components/Field";
import { DebouncedTextInputWithVariablesButton } from "@/components/inputs/DebouncedTextInput";
import type { TableListItemProps } from "@/components/TableList";

export const QueryParamsInputs = (props: TableListItemProps<KeyValue>) => {
  const { t } = useTranslate();
  return (
    <KeyValueInputs
      {...props}
      keyPlaceholder={t("blocks.integrations.httpRequest.keyValue.key.placeholder")}
      valuePlaceholder={t("blocks.integrations.httpRequest.keyValue.value.placeholder")}
    />
  );
};

export const HeadersInputs = (props: TableListItemProps<KeyValue>) => {
  const { t } = useTranslate();
  return (
    <KeyValueInputs
      {...props}
      keyPlaceholder={t("blocks.integrations.httpRequest.keyValue.keyHeader.placeholder")}
      valuePlaceholder={t("blocks.integrations.httpRequest.keyValue.valueHeader.placeholder")}
    />
  );
};

export const KeyValueInputs = ({
  item,
  onItemChange,
  keyPlaceholder,
  valuePlaceholder,
}: TableListItemProps<KeyValue> & {
  keyPlaceholder?: string;
  valuePlaceholder?: string;
}) => {
  const { t } = useTranslate();
  const handleKeyChange = (key: string) => {
    if (key === item.key) return;
    onItemChange({ ...item, key });
  };
  const handleValueChange = (value: string) => {
    if (value === item.value) return;
    onItemChange({ ...item, value });
  };
  return (
    <div className="flex flex-col gap-2 p-4 rounded-md flex-1 border">
      <Field.Root>
        <Field.Label>{t("blocks.integrations.keyValue.key.label")}</Field.Label>
        <DebouncedTextInputWithVariablesButton
          defaultValue={item.key ?? ""}
          onValueChange={handleKeyChange}
          placeholder={keyPlaceholder}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.keyValue.value.label")}</Field.Label>
        <DebouncedTextInputWithVariablesButton
          defaultValue={item.value ?? ""}
          onValueChange={handleValueChange}
          placeholder={valuePlaceholder}
        />
      </Field.Root>
    </div>
  );
};
