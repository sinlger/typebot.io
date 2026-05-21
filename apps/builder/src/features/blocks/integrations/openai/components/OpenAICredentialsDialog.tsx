import { useMutation } from "@tanstack/react-query";
import type { CreatableCredentials } from "@typebot.io/credentials/schemas";
import { useTranslate } from "@tolgee/react";
import { Alert } from "@typebot.io/ui/components/Alert";
import { Button } from "@typebot.io/ui/components/Button";
import { Dialog } from "@typebot.io/ui/components/Dialog";
import { Field } from "@typebot.io/ui/components/Field";
import { Input } from "@typebot.io/ui/components/Input";
import { TriangleAlertIcon } from "@typebot.io/ui/icons/TriangleAlertIcon";
import type React from "react";
import { useState } from "react";
import { useWorkspace } from "@/features/workspace/WorkspaceProvider";
import { orpc, queryClient } from "@/lib/queryClient";
import { toast } from "@/lib/toast";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onNewCredentials: (id: string) => void;
};

export const OpenAICredentialsDialog = ({
  isOpen,
  onClose,
  onNewCredentials,
}: Props) => {
  const { t } = useTranslate();
  const { workspace } = useWorkspace();
  const [apiKey, setApiKey] = useState("");
  const [name, setName] = useState("");

  const [isCreating, setIsCreating] = useState(false);

  const { mutate } = useMutation(
    orpc.credentials.createCredentials.mutationOptions({
      onMutate: () => setIsCreating(true),
      onSettled: () => setIsCreating(false),
      onError: (err) => {
        toast({
          description: err.message,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: orpc.credentials.listCredentials.key(),
        });
        onNewCredentials(data.credentialsId);
        onClose();
      },
    }),
  );

  const createOpenAICredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspace) return;
    mutate({
      scope: "workspace",
      workspaceId: workspace.id,
      credentials: {
        type: "openai",
        name,
        data: {
          apiKey,
        },
      } as CreatableCredentials,
    });
  };

  return (
    <Dialog.Root isOpen={isOpen} onClose={onClose}>
      <Dialog.Title>{t("blocks.integrations.openai.credentials.dialogTitle")}</Dialog.Title>
      <Dialog.CloseButton />
      <Dialog.Popup render={<form onSubmit={createOpenAICredentials} />}>
        <Field.Root>
          <Field.Label>{t("blocks.integrations.openai.credentials.name.label")}</Field.Label>
          <Input onValueChange={setName} placeholder={t("blocks.integrations.openai.credentials.name.placeholder")} />
        </Field.Root>
        <Field.Root>
          <Field.Label>{t("blocks.integrations.openai.credentials.apiKey.label")}</Field.Label>
          <Input
            type="password"
            onValueChange={setApiKey}
            placeholder={t("blocks.integrations.openai.credentials.apiKey.placeholder")}
          />
          <Field.Description>
            {t("blocks.integrations.openai.credentials.apiKey.description")}
          </Field.Description>
        </Field.Root>
        <Alert.Root variant="warning">
          <TriangleAlertIcon />
          <Alert.Description>
            {t("blocks.integrations.openai.credentials.paymentWarning")}
          </Alert.Description>
        </Alert.Root>

        <Dialog.Footer>
          <Button
            type="submit"
            disabled={apiKey === "" || name === "" || isCreating}
          >
            {t("create")}
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog.Root>
  );
};
