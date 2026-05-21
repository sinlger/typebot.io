import { GoogleSheetsAction } from "@typebot.io/blocks-integrations/googleSheets/constants";
import type { GoogleSheetsBlock } from "@typebot.io/blocks-integrations/googleSheets/schema";
import { useTranslate } from "@tolgee/react";
import { cx } from "@typebot.io/ui/lib/cva";
import { SetVariableLabel } from "@/components/SetVariableLabel";
import { useTypebot } from "@/features/editor/providers/TypebotProvider";

type Props = {
  options?: GoogleSheetsBlock["options"];
};

export const GoogleSheetsNodeContent = ({ options }: Props) => {
  const { t } = useTranslate();
  const { typebot } = useTypebot();
  const cellsToExtract =
    options?.action === GoogleSheetsAction.GET
      ? (options?.cellsToExtract ?? [])
      : [];
  return (
    <div className="flex flex-col gap-2">
      <p
        className={cx(
          "truncate",
          options?.action ? "text-gray-12" : "text-gray-9",
        )}
      >
        {options?.action ?? t("configure")}
      </p>
      {typebot &&
        options?.action === GoogleSheetsAction.GET &&
        cellsToExtract
          .filter((cell) => cell.variableId)
          .map((cell) => (
            <SetVariableLabel
              key={cell.id}
              variables={typebot.variables}
              variableId={cell.variableId!}
            />
          ))}
    </div>
  );
};
