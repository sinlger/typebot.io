import type { ResponseVariableMapping } from "@typebot.io/blocks-integrations/httpRequest/schema";
import { useTranslate } from "@tolgee/react";
import { Field } from "@typebot.io/ui/components/Field";
import type { Variable } from "@typebot.io/variables/schemas";
import { BasicAutocompleteInputWithVariableButton } from "@/components/inputs/BasicAutocompleteInput";
import { VariablesCombobox } from "@/components/inputs/VariablesCombobox";
import type { TableListItemProps } from "@/components/TableList";

export const DataVariableInputs = ({
  item,
  onItemChange,
  dataItems,
}: TableListItemProps<ResponseVariableMapping> & { dataItems: string[] }) => {
  const { t } = useTranslate();
  const handleBodyPathChange = (bodyPath: string | undefined) =>
    onItemChange({ ...item, bodyPath });
  const handleVariableChange = (variable?: Variable) =>
    onItemChange({ ...item, variableId: variable?.id });

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md flex-1 border">
      <Field.Root>
        <Field.Label>{t("blocks.integrations.data.label")}</Field.Label>
        <BasicAutocompleteInputWithVariableButton
          items={dataItems}
          defaultValue={item.bodyPath}
          onChange={handleBodyPathChange}
          placeholder={t("blocks.integrations.httpRequest.responseMapping.data.placeholder")}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.setVariable.label")}</Field.Label>
        <VariablesCombobox
          onSelectVariable={handleVariableChange}
          placeholder="Search for a variable"
          initialVariableId={item.variableId}
        />
      </Field.Root>
    </div>
  );
};
