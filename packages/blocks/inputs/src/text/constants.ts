import { defaultButtonLabel } from "../constants";
import type { TextInputBlock } from "./schema";

export const defaultTextInputOptions = {
  isLong: false,
  labels: { button: defaultButtonLabel, placeholder: "请输入您的回答..." },
  audioClip: {
    isEnabled: false,
    visibility: "Auto",
  },
  attachments: {
    isEnabled: false,
    visibility: "Auto",
  },
} as const satisfies TextInputBlock["options"];
