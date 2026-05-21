import type { ExtractingCell } from "@typebot.io/blocks-integrations/googleSheets/schema";
import { useTranslate } from "@tolgee/react";
import type { Variable } from "@typebot.io/variables/schemas";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { VariablesCombobox } from "@/components/inputs/VariablesCombobox";
import type { TableListItemProps } from "@/components/TableList";

export const CellWithVariableIdStack = ({
  item,
  onItemChange,
  columns,
}: TableListItemProps<ExtractingCell> & { columns: string[] }) => {
  const { t } = useTranslate();
  const handleColumnSelect = (column: string | undefined) => {
    if (item.column === column) return;
    onItemChange({ ...item, column });
  };

  const handleVariableIdChange = (variable?: Variable) => {
    if (item.variableId === variable?.id) return;
    onItemChange({ ...item, variableId: variable?.id });
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md flex-1 border">
      <BasicSelect
        className="w-full"
        value={item.column}
        onChange={handleColumnSelect}
        items={columns}
        placeholder={t("blocks.integrations.common.selectColumn.placeholder")}
      />
      <VariablesCombobox
        initialVariableId={item.variableId}
        onSelectVariable={handleVariableIdChange}
      />
    </div>
  );
};
