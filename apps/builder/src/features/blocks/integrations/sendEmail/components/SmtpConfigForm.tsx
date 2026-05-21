import type { SmtpCredentials } from "@typebot.io/credentials/schemas";
import { isDefined } from "@typebot.io/lib/utils";
import { useTranslate } from "@tolgee/react";
import { DebouncedTextInput } from "@typebot.io/ui/components/DebouncedTextInput";
import { Field } from "@typebot.io/ui/components/Field";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { Switch } from "@typebot.io/ui/components/Switch";
import { BasicNumberInput } from "@/components/inputs/BasicNumberInput";

type Props = {
  config: SmtpCredentials["data"] | undefined;
  onConfigChange: (config: SmtpCredentials["data"]) => void;
};

export const SmtpConfigForm = ({ config, onConfigChange }: Props) => {
  const { t } = useTranslate();
  const handleFromEmailChange = (email: string) =>
    config && onConfigChange({ ...config, from: { ...config.from, email } });

  const handleFromNameChange = (name: string) =>
    config && onConfigChange({ ...config, from: { ...config.from, name } });

  const handleHostChange = (host: string) =>
    config && onConfigChange({ ...config, host });

  const handleUsernameChange = (username: string) =>
    config && onConfigChange({ ...config, username });

  const handlePasswordChange = (password: string) =>
    config && onConfigChange({ ...config, password });

  const handleTlsCheck = (isTlsEnabled: boolean) =>
    config && onConfigChange({ ...config, isTlsEnabled });

  const handlePortNumberChange = (port?: number) =>
    config && isDefined(port) && onConfigChange({ ...config, port });

  return (
    <div className="flex flex-col gap-4">
      <Field.Root>
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.fromEmail.label")}</Field.Label>
        <DebouncedTextInput
          defaultValue={config?.from.email}
          onValueChange={handleFromEmailChange}
          placeholder={t("blocks.integrations.sendEmail.smtp.fromEmail.placeholder")}
          disabled={!config}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.fromName.label")}</Field.Label>
        <DebouncedTextInput
          defaultValue={config?.from.name}
          onValueChange={handleFromNameChange}
          placeholder={t("blocks.integrations.sendEmail.smtp.fromName.placeholder")}
          disabled={!config}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.host.label")}</Field.Label>
        <DebouncedTextInput
          defaultValue={config?.host}
          onValueChange={handleHostChange}
          placeholder={t("blocks.integrations.sendEmail.smtp.host.placeholder")}
          disabled={!config}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.username.label")}</Field.Label>
        <DebouncedTextInput
          defaultValue={config?.username}
          onValueChange={handleUsernameChange}
          disabled={!config}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.password.label")}</Field.Label>
        <DebouncedTextInput
          type="password"
          defaultValue={config?.password}
          onValueChange={handlePasswordChange}
          disabled={!config}
        />
      </Field.Root>
      <Field.Root className="flex-row items-center">
        <Switch
          checked={config?.isTlsEnabled}
          onCheckedChange={handleTlsCheck}
        />
        <Field.Label>
          {t("blocks.integrations.sendEmail.smtp.secure.label")}{" "}
          <MoreInfoTooltip>
            {t("blocks.integrations.sendEmail.smtp.secure.tooltip")}
          </MoreInfoTooltip>
        </Field.Label>
      </Field.Root>
      <Field.Root className="flex-row">
        <Field.Label>{t("blocks.integrations.sendEmail.smtp.portNumber.label")}</Field.Label>
        <BasicNumberInput
          defaultValue={config?.port}
          onValueChange={handlePortNumberChange}
          withVariableButton={false}
          disabled={!config}
        />
      </Field.Root>
    </div>
  );
};
