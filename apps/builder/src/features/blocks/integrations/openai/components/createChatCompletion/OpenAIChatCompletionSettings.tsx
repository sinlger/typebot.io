import type { ChatCompletionOpenAIOptions } from "@typebot.io/blocks-integrations/openai/schema";
import { useTranslate } from "@tolgee/react";
import { Accordion } from "@typebot.io/ui/components/Accordion";
import { Field } from "@typebot.io/ui/components/Field";
import { BasicNumberInput } from "@/components/inputs/BasicNumberInput";
import { TableList } from "@/components/TableList";
import { ModelsDropdown } from "../ModelsDropdown";
import { ChatCompletionMessageItem } from "./ChatCompletionMessageItem";
import { ChatCompletionResponseItem } from "./ChatCompletionResponseItem";

type Props = {
  options: ChatCompletionOpenAIOptions;
  onOptionsChange: (options: ChatCompletionOpenAIOptions) => void;
};

export const OpenAIChatCompletionSettings = ({
  options,
  onOptionsChange,
}: Props) => {
  const { t } = useTranslate();
  const updateModel = (model: string | undefined) => {
    if (!model) return;
    onOptionsChange({
      ...options,
      model,
    });
  };

  const updateMessages = (messages: typeof options.messages) => {
    onOptionsChange({
      ...options,
      messages,
    });
  };

  const updateTemperature = (
    temperature: number | `{{${string}}}` | undefined,
  ) => {
    onOptionsChange({
      ...options,
      advancedSettings: {
        ...options.advancedSettings,
        temperature,
      },
    });
  };

  const updateResponseMapping = (
    responseMapping: typeof options.responseMapping,
  ) => {
    onOptionsChange({
      ...options,
      responseMapping,
    });
  };

  return (
    <div className="flex flex-col gap-4 pt-2">
      <p className="text-sm" color="gray.500">
        {t("blocks.integrations.openai.chatCompletion.readReference.label")}
      </p>
      {options.credentialsId && (
        <>
          <ModelsDropdown
            credentialsId={options.credentialsId}
            defaultValue={options.model}
            baseUrl={options.baseUrl}
            apiVersion={options.apiVersion}
            type="gpt"
            onChange={updateModel}
          />
          <Accordion.Root>
            <Accordion.Item>
              <Accordion.Trigger>
                <p className="w-full text-left">{t("blocks.integrations.openai.chatCompletion.messages.label")}</p>
              </Accordion.Trigger>

              <Accordion.Panel>
                <TableList
                  initialItems={options.messages}
                  onItemsChange={updateMessages}
                  isOrdered
                  hasDefaultItem
                  addLabel={t("blocks.integrations.openai.chatCompletion.addMessage.label")}
                >
                  {(props) => <ChatCompletionMessageItem {...props} />}
                </TableList>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger>
                <p className="w-full text-left">{t("blocks.integrations.openai.chatCompletion.advancedSettings.label")}</p>
              </Accordion.Trigger>
              <Accordion.Panel>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.openai.chatCompletion.temperature.label")}</Field.Label>
                  <BasicNumberInput
                    placeholder="1"
                    max={2}
                    min={0}
                    step={0.1}
                    defaultValue={options.advancedSettings?.temperature}
                    onValueChange={updateTemperature}
                  />
                </Field.Root>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger>
                <p className="w-full text-left">{t("blocks.integrations.openai.chatCompletion.saveAnswer.label")}</p>
              </Accordion.Trigger>
              <Accordion.Panel>
                <TableList
                  initialItems={options.responseMapping}
                  onItemsChange={updateResponseMapping}
                  newItemDefaultProps={{ valueToExtract: "Message content" }}
                  hasDefaultItem
                >
                  {(props) => <ChatCompletionResponseItem {...props} />}
                </TableList>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </>
      )}
    </div>
  );
};
