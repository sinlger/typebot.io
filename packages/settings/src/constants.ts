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
      "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
    favIconUrl: (viewerBaseUrl: string) => `${viewerBaseUrl}/favicon.svg`,
    imageUrl: (viewerBaseUrl: string) => `${viewerBaseUrl}/site-preview.jpeg`,
  },
} as const;

export const maxTypingEmulationMaxDelay = 5;

export const defaultSystemMessages = {
  invalidMessage: "消息无效，请重试.",
  botClosed: "该机器人已关闭",
  networkErrorTitle: "网络错误",
  networkErrorMessage: "请检查网络连接后重试",
  popupBlockedTitle: "弹窗已拦截",
  popupBlockedDescription:
    "机器人尝试新建标签页，已被浏览器阻止，需手动允许.",
  popupBlockedButtonLabel: "在新标签页继续",
  fileUploadError: "文件上传出现错误",
  fileUploadSizeError: "[[file]] 超出 [[limit]]MB 大小限制",
  whatsAppPictureChoiceSelectLabel: "Select",
} as const satisfies NonNullable<Settings["general"]>["systemMessages"];

export const defaultSessionExpiryTimeout = 4;

export const rememberUserStorages = ["session", "local"] as const;
