import { TypebotLogo } from "@/components/TypebotLogo";
import { t } from "@/lib/i18n";
import "../assets/styles.css";

export default function NotFound() {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "center",
        }}
      >
        <a href="https://typebot.io" style={{ color: "inherit" }}>
          <TypebotLogo style={{ fontSize: "32px" }} />
        </a>

        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "normal" }}>
          {t("notFoundPage.title")}
        </h1>
      </div>
    </div>
  );
}
