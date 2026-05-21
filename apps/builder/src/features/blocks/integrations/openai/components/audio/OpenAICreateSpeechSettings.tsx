import { openAIVoices } from "@typebot.io/blocks-integrations/openai/constants";
import type { CreateSpeechOpenAIOptions } from "@typebot.io/blocks-integrations/openai/schema";
import { Field } from "@typebot.io/ui/components/Field";
import type { Variable } from "@typebot.io/variables/schemas";
import { BasicSelect } from "@/components/inputs/BasicSelect";
import { DebouncedTextareaWithVariablesButton } from "@/components/inputs/DebouncedTextarea";
import { VariablesCombobox } from "@/components/inputs/VariablesCombobox";
import { useTranslate } from "@tolgee/react";
import { ModelsDropdown } from "../ModelsDropdown";

type Props = {
  options: CreateSpeechOpenAIOptions;
  onOptionsChange: (options: CreateSpeechOpenAIOptions) => void;
};

export const OpenAICreateSpeechSettings = ({
  options,
  onOptionsChange,
}: Props) => {
  const { t } = useTranslate();
  const updateModel = (model: string | undefined) => {
    onOptionsChange({
      ...options,
      model,
    });
  };

  const updateInput = (input: string | undefined) => {
    onOptionsChange({
      ...options,
      input,
    });
  };

  const updateVoice = (voice: (typeof openAIVoices)[number] | undefined) => {
    onOptionsChange({
      ...options,
      voice,
    });
  };

  const updateSaveUrlInVariableId = (
    variable: Pick<Variable, "id" | "name"> | undefined,
  ) => {
    onOptionsChange({
      ...options,
      saveUrlInVariableId: variable?.id,
    });
  };

  return (
    <div className="flex flex-col gap-4 pt-2">
      <p className="text-sm" color="gray.500">
        {t("blocks.integrations.openai.createSpeech.readReference.label")}
      </p>
      {options.credentialsId && (
        <>
          <ModelsDropdown
            credentialsId={options.credentialsId}
            defaultValue={options.model}
            baseUrl={options.baseUrl}
            apiVersion={options.apiVersion}
            type="tts"
            onChange={updateModel}
          />
          <Field.Root>
            <Field.Label>{t("blocks.integrations.openai.createSpeech.input.label")}</Field.Label>
            <Field.Control
              render={(props) => (
                <DebouncedTextareaWithVariablesButton
                  {...props}
                  defaultValue={options.input}
                  onValueChange={updateInput}
                />
              )}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>{t("blocks.integrations.openai.createSpeech.voice.label")}</Field.Label>
            <BasicSelect
              value={options.voice}
              onChange={updateVoice}
              items={openAIVoices}
              placeholder={t("blocks.integrations.openai.createSpeech.selectVoice.placeholder")}
              className="w-full"
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>{t("blocks.integrations.openai.createSpeech.saveUrl.label")}</Field.Label>
            <VariablesCombobox
              initialVariableId={options.saveUrlInVariableId}
              onSelectVariable={updateSaveUrlInVariableId}
            />
          </Field.Root>
        </>
      )}
    </div>
  );
};
