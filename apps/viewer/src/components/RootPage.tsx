import { t } from "@/lib/i18n";

export const RootPage = ({ dashboardUrl }: { dashboardUrl: string }) => (
  <div
    style={{
      height: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div>
      <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
        {t("rootPage.welcomeHeading")}
      </h1>
      <p>{t("rootPage.intro")}</p>
      <p>
        <a href={dashboardUrl}>{t("rootPage.goToDashboard")}</a>
      </p>
    </div>
  </div>
);
