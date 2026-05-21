import { useTranslate } from "@tolgee/react";
import { Dialog } from "@typebot.io/ui/components/Dialog";
import { ButtonLink } from "@/components/ButtonLink";
import { GoogleLogo } from "@/components/GoogleLogo";
import { useWorkspace } from "@/features/workspace/WorkspaceProvider";
import { getGoogleSheetsConsentScreenUrlQuery } from "../queries/getGoogleSheetsConsentScreenUrlQuery";

type Props = {
  isOpen: boolean;
  typebotId?: string;
  blockId?: string;
  onClose: () => void;
};

export const GoogleSheetConnectDialog = ({
  typebotId,
  blockId,
  isOpen,
  onClose,
}: Props) => {
  return (
    <Dialog.Root isOpen={isOpen} onClose={onClose}>
      <GoogleSheetConnectDialogBody typebotId={typebotId} blockId={blockId} />
    </Dialog.Root>
  );
};

export const GoogleSheetConnectDialogBody = ({
  typebotId,
  blockId,
}: {
  typebotId?: string;
  blockId?: string;
}) => {
  const { t } = useTranslate();
  const { workspace } = useWorkspace();

  return (
    <Dialog.Popup>
      <Dialog.Title>{t("blocks.integrations.googleSheets.connectDialog.title")}</Dialog.Title>
      <p>
        {t("blocks.integrations.googleSheets.connectDialog.description")}
      </p>
      <img
        className="rounded-md"
        src="/images/google-spreadsheets-scopes.png"
        alt={t("blocks.integrations.googleSheets.connectDialog.imageAlt")}
      />
      <Dialog.Footer>
        {workspace?.id && (
          <ButtonLink
            data-testid="google"
            disabled={["loading", "authenticated"].includes(status)}
            variant="outline-secondary"
            href={getGoogleSheetsConsentScreenUrlQuery(
              window.location.href,
              workspace.id,
              blockId,
              typebotId,
            )}
            className="mx-auto"
          >
            <GoogleLogo />
            {t("blocks.integrations.googleSheets.connectDialog.continueWithGoogle.label")}
          </ButtonLink>
        )}
      </Dialog.Footer>
    </Dialog.Popup>
  );
};
