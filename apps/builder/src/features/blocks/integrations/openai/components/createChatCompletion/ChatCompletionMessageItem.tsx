import {
  chatCompletionMessageCustomRoles,
  chatCompletionMessageRoles,
  deprecatedRoles,
} from "@typebot.io/blocks-integrations/openai/constants";
import type { ChatCompletionOpenAIOptions } from "@typebot.io/blocks-integrations/openai/schema";
import { useTranslate } from "@tolgee/react";
import type { Variable } from "@typebot.io/variables/schemas";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { DebouncedTextareaWithVariablesButton } from "@/components/inputs/DebouncedTextarea";
import { VariablesCombobox } from "@/components/inputs/VariablesCombobox";
import type { TableListItemProps } from "@/components/TableList";

type Props = TableListItemProps<
  NonNullable<ChatCompletionOpenAIOptions["messages"]>[number]
>;

const roles = [
  ...chatCompletionMessageCustomRoles,
  ...chatCompletionMessageRoles,
];

export const ChatCompletionMessageItem = ({ item, onItemChange }: Props) => {
  const { t } = useTranslate();
  const changeRole = (role: (typeof roles)[number] | undefined) => {
    onItemChange({
      ...item,
      role,
      content: undefined,
    });
  };

  const changeSingleMessageContent = (content: string) => {
    if (item.role === "Messages sequence ✨" || item.role === "Dialogue")
      return;
    onItemChange({ ...item, content });
  };

  const updateDialogueVariableId = (
    variable: Pick<Variable, "id"> | undefined,
  ) => {
    if (item.role !== "Dialogue") return;
    onItemChange({ ...item, dialogueVariableId: variable?.id });
  };

  const updateStartsBy = (startsBy: "user" | "assistant") => {
    if (item.role !== "Dialogue") return;
    onItemChange({ ...item, startsBy });
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md flex-1 border">
      <BasicSelect
        className="w-full"
        value={item.role}
        onChange={changeRole}
        items={roles.filter(
          (role) =>
            !deprecatedRoles.includes(role as (typeof deprecatedRoles)[number]),
        )}
        placeholder={t("blocks.integrations.openai.chatCompletion.selectType.placeholder")}
      />
      <ChatCompletionMessageItemContent
        item={item}
        onChangeSingleMessageContent={changeSingleMessageContent}
        onChangeDialogueVariableId={updateDialogueVariableId}
        onStartsByChange={updateStartsBy}
      />
    </div>
  );
};

const ChatCompletionMessageItemContent = ({
  onChangeSingleMessageContent,
  onChangeDialogueVariableId,
  onStartsByChange,
  item,
}: {
  onChangeSingleMessageContent: (content: string) => void;
  onChangeDialogueVariableId: (
    variable: Pick<Variable, "id"> | undefined,
  ) => void;
  onStartsByChange: (startsBy: "user" | "assistant") => void;
  item: NonNullable<ChatCompletionOpenAIOptions["messages"]>[number];
}) => {
  const { t } = useTranslate();
  switch (item.role) {
    case undefined:
    case "assistant":
    case "user":
    case "system":
      return (
        <DebouncedTextareaWithVariablesButton
          defaultValue={item.content}
          onValueChange={onChangeSingleMessageContent}
          placeholder={t("blocks.integrations.openai.chatCompletion.content.placeholder")}
        />
      );
    case "Dialogue":
      return (
        <div className="flex flex-col gap-2 items-end">
          <VariablesCombobox
            initialVariableId={item.dialogueVariableId}
            onSelectVariable={onChangeDialogueVariableId}
            placeholder={t("blocks.integrations.openai.chatCompletion.dialogueVariable.placeholder")}
          />
          <div className="flex items-center gap-2">
            <p>{t("blocks.integrations.openai.chatCompletion.startsBy.label")}</p>
            <BasicSelect
              className="w-full"
              value={item.startsBy ?? "user"}
              onChange={onStartsByChange}
              items={["user", "assistant"]}
            />
          </div>
        </div>
      );
    case "Messages sequence ✨":
      return null;
  }
};
