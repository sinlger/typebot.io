import { defaultButtonLabel } from "../constants";
import type { UrlInputBlock } from "./schema";

export const defaultUrlInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: "请输入链接...",
  },
  retryMessageContent: "该链接似乎无效，请重新输入。",
} as const satisfies UrlInputBlock["options"];
