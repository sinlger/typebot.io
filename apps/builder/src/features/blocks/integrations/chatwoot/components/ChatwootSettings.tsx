import {
  chatwootTasks,
  defaultChatwootOptions,
} from "@typebot.io/blocks-integrations/chatwoot/constants";
import type { ChatwootBlock } from "@typebot.io/blocks-integrations/chatwoot/schema";
import { useTranslate } from "@tolgee/react";
import { Accordion } from "@typebot.io/ui/components/Accordion";
import { DebouncedTextInput } from "@typebot.io/ui/components/DebouncedTextInput";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { DebouncedTextInputWithVariablesButton } from "@/components/inputs/DebouncedTextInput";

type Props = {
  options: ChatwootBlock["options"];
  onOptionsChange: (options: ChatwootBlock["options"]) => void;
};

export const ChatwootSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate();
  const updateTask = (task: (typeof chatwootTasks)[number] | undefined) => {
    onOptionsChange({ ...options, task });
  };

  const task = options?.task ?? defaultChatwootOptions.task;

  return (
    <div className="flex flex-col gap-4">
      <BasicSelect
        className="w-full"
        value={options?.task}
        defaultValue={defaultChatwootOptions.task}
        onChange={updateTask}
        items={chatwootTasks}
      />
      {task === "Show widget" && (
        <>
          <Field.Root>
            <Field.Label>{t("blocks.integrations.chatwoot.settings.baseUrl.label")}</Field.Label>
            <DebouncedTextInput
              defaultValue={options?.baseUrl ?? defaultChatwootOptions.baseUrl}
              onValueChange={(baseUrl: string) => {
                onOptionsChange({ ...options, baseUrl });
              }}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>
              {t("blocks.integrations.chatwoot.settings.websiteToken.label")}
              <MoreInfoTooltip>
                {t("blocks.integrations.chatwoot.settings.websiteToken.tooltip")}
              </MoreInfoTooltip>
            </Field.Label>
            <DebouncedTextInputWithVariablesButton
              defaultValue={options?.websiteToken}
              onValueChange={(websiteToken) =>
                onOptionsChange({ ...options, websiteToken })
              }
            />
          </Field.Root>
          <Accordion.Root>
            <Accordion.Item>
              <Accordion.Trigger>{t("blocks.integrations.chatwoot.settings.setUserDetails.label")}</Accordion.Trigger>
              <Accordion.Panel>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.chatwoot.settings.id.label")}</Field.Label>
                  <DebouncedTextInputWithVariablesButton
                    defaultValue={options?.user?.id}
                    onValueChange={(id: string) => {
                      onOptionsChange({
                        ...options,
                        user: { ...options?.user, id },
                      });
                    }}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.chatwoot.settings.name.label")}</Field.Label>
                  <DebouncedTextInputWithVariablesButton
                    defaultValue={options?.user?.name}
                    onValueChange={(name: string) => {
                      onOptionsChange({
                        ...options,
                        user: { ...options?.user, name },
                      });
                    }}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.chatwoot.settings.email.label")}</Field.Label>
                  <DebouncedTextInputWithVariablesButton
                    defaultValue={options?.user?.email}
                    onValueChange={(email: string) => {
                      onOptionsChange({
                        ...options,
                        user: { ...options?.user, email },
                      });
                    }}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.chatwoot.settings.avatarUrl.label")}</Field.Label>
                  <DebouncedTextInputWithVariablesButton
                    defaultValue={options?.user?.avatarUrl}
                    onValueChange={(avatarUrl: string) => {
                      onOptionsChange({
                        ...options,
                        user: { ...options?.user, avatarUrl },
                      });
                    }}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>{t("blocks.integrations.chatwoot.settings.phoneNumber.label")}</Field.Label>
                  <DebouncedTextInputWithVariablesButton
                    defaultValue={options?.user?.phoneNumber}
                    onValueChange={(phoneNumber: string) => {
                      onOptionsChange({
                        ...options,
                        user: { ...options?.user, phoneNumber },
                      });
                    }}
                  />
                </Field.Root>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </>
      )}
    </div>
  );
};
