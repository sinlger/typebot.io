import { createEmailMagicLink } from "@typebot.io/auth/helpers/createEmailMagicLink";
import { useTranslate } from "@tolgee/react";
import { Badge } from "@typebot.io/ui/components/Badge";
import { Button } from "@typebot.io/ui/components/Button";
import { useQueryState } from "nuqs";
import { Seo } from "@/components/Seo";
import { toast } from "@/lib/toast";

export const EmailRedirectPage = () => {
  const { t } = useTranslate();
  const [redirectPath] = useQueryState("redirectPath");
  const [email] = useQueryState("email");
  const [token] = useQueryState("token");

  const redirectToMagicLink = () => {
    if (!token || !email) {
      toast({ description: t("auth.emailRedirect.missingParams") });
      return;
    }
    window.location.assign(
      createEmailMagicLink(token, email, redirectPath ?? undefined),
    );
  };

  if (!email || !token) return null;

  return (
    <div className="flex flex-col items-center gap-2 h-screen justify-center">
      <Seo title={t("auth.emailRedirect.seoTitle")} />
      <div className="flex flex-col p-10 rounded-8 border gap-6 bg-gray-1">
        <div className="flex flex-col gap-4">
          <h2>{t("auth.emailRedirect.heading")}</h2>
          <p>
            {t("auth.emailRedirect.description")} <Badge>{email}</Badge>
          </p>
        </div>
        <Button onClick={redirectToMagicLink}>
          {t("auth.emailRedirect.button")}
        </Button>
      </div>
    </div>
  );
};
