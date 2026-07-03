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
  invalidMessage: "Invalid message. Please, try again.",
  botClosed: "This bot is now closed",
  networkErrorTitle: "Network Error",
  networkErrorMessage: "Please check your internet connection and try again.",
  popupBlockedTitle: "Popup blocked",
  popupBlockedDescription:
    "The bot wants to open a new tab but it was blocked by your browser. It needs a manual approval.",
  popupBlockedButtonLabel: "Continue in new tab",
  fileUploadError: "An error occured while uploading the files",
  fileUploadSizeError: "[[file]] is larger than [[limit]]MB",
  whatsAppPictureChoiceSelectLabel: "Select",
} as const satisfies NonNullable<Settings["general"]>["systemMessages"];

export const defaultSessionExpiryTimeout = 4;

export const rememberUserStorages = ["session", "local"] as const;
