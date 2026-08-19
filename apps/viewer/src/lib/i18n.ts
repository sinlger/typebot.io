/**
 * Viewer 仅用于渲染公开的 typebot，本身几乎无可翻译的用户文案。
 * 这里不引入 Tolgee（会复制 builder 的 619 个 key，得不偿失），
 * 而是采用一个极简的本地中文字典 + t() 取值函数。
 * 默认语言为简体中文（zh），与全站默认语言保持一致。
 */
const dict = {
  zh: {
    "rootPage.welcomeHeading": "欢迎使用 QinglBot",
    "rootPage.intro":
      "QinglBot 是一个无代码平台，让您能够轻松创建高级聊天机器人，并将其集成到网站以及 WhatsApp 等聊天平台中。",
    "rootPage.goToDashboard": "前往控制台",
    "errorPage.viewerUrlMissing": "缺少 NEXT_PUBLIC_VIEWER_URL",
    "errorPage.configureHint": "请确保正确配置了该应用（",
    "errorPage.configureHint.documentation": "https://qinglbot.com",
    "errorPage.configureHint.closing": "）",
    "notFoundPage.title": "您要查找的机器人不存在",
  },
  en: {
    "rootPage.welcomeHeading": "Welcome to QinglBot",
    "rootPage.intro":
      "QinglBot is a no-code platform that enables you to effortlessly create and integrate advanced chatbots into websites and chat platforms like WhatsApp.",
    "rootPage.goToDashboard": "Go to the dashboard",
    "errorPage.viewerUrlMissing": "NEXT_PUBLIC_VIEWER_URL is missing",
    "errorPage.configureHint": "Make sure to configure the app properly (",
    "errorPage.configureHint.documentation": "https://qinglbot.com",
    "errorPage.configureHint.closing": ")",
    "notFoundPage.title": "The bot you're looking for doesn't exist",
  },
} as const;

type Locale = keyof typeof dict;
type Key = keyof (typeof dict)["zh"];

const currentLocale: Locale = "zh";

export const t = (key: Key): string => dict[currentLocale][key] ?? dict.en[key];
