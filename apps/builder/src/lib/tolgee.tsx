import { FormatIcu } from "@tolgee/format-icu";
import { Tolgee } from "@tolgee/react";
import { env } from "@typebot.io/env";
import en from "../i18n/en.json";
import zhCN from "../i18n/zh-CN.json";

export const tolgee = Tolgee()
  .use(FormatIcu())
  .init({
    apiKey: env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: env.NEXT_PUBLIC_TOLGEE_API_URL,
    defaultLanguage: "zh-CN",
    availableLanguages: ["zh-CN", "en"],
    fallbackLanguage: "en",
    staticData: {
      "zh-CN": zhCN,
      en,
    },
  });
