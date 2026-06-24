import { env } from "@typebot.io/env";
import { t } from "@/lib/i18n";

export const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 1rem",
      }}
    >
      {!env.NEXT_PUBLIC_VIEWER_URL[0] ? (
        <>
          <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
            {t("errorPage.viewerUrlMissing")}
          </h1>
          <h2>
            {t("errorPage.configureHint")}
            <a href={t("errorPage.configureHint.documentation")}>
              {t("errorPage.configureHint.documentation")}
            </a>
            {t("errorPage.configureHint.closing")}
          </h2>
        </>
      ) : (
        <p style={{ fontSize: "24px", textAlign: "center" }}>{error.message}</p>
      )}
    </div>
  );
};
