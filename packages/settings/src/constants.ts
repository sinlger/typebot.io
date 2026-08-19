import type { Settings } from "./schemas";

export const defaultSettings = {
  general: {
    isInputPrefillEnabled: false,
    isHideQueryParamsEnabled: true,
    isNewResultOnRefreshEnabled: true,
    rememberUser: {
      isEnabled: false,
      storage: "session",
    },
    isBrandingEnabled: false,
    isTypingEmulationEnabled: true,
  },
  typingEmulation: {
    enabled: true,
    speed: 400,
    maxDelay: 3,
    delayBetweenBubbles: 0,
    isDisabledOnFirstMessage: true,
  },
  metadata: {
    description:
      "无需编写任何代码，就能构建精美的对话式表单，并直接嵌入你的应用中。不仅能让回复率翻三倍，收集到的反馈也比传统表单更有价值。",
    favIconUrl: (viewerBaseUrl: string) => `${viewerBaseUrl}/favicon.svg`,
    imageUrl: (viewerBaseUrl: string) => `${viewerBaseUrl}/site-preview.jpeg`,
  },
} as const;

export const maxTypingEmulationMaxDelay = 5;

export const defaultSystemMessages = {
  invalidMessage: "消息无效，请重试。",
  botClosed: "该机器人已关闭",
  networkErrorTitle: "网络错误",
  networkErrorMessage: "请检查您的网络连接后重试。",
  popupBlockedTitle: "弹窗被拦截",
  popupBlockedDescription:
    "机器人想要打开一个新标签页，但被您的浏览器拦截了，需要您手动允许。",
  popupBlockedButtonLabel: "在新标签页继续",
  fileUploadError: "上传文件时出错",
  fileUploadSizeError: "[[file]] 超过 [[limit]]MB 的大小限制",
  whatsAppPictureChoiceSelectLabel: "选择",
} as const satisfies NonNullable<Settings["general"]>["systemMessages"];

export const defaultSessionExpiryTimeout = 4;

export const rememberUserStorages = ["session", "local"] as const;
