import type { FileInputBlock } from "./schema";

export const defaultFileInputOptions = {
  isRequired: true,
  isMultipleAllowed: false,
  visibility: "Auto",
  labels: {
    placeholder: `<strong>
      点击上传
    </strong> 或拖拽文件到此处<br>
    （大小限制：10MB）`,
    button: "上传",
    clear: "清空",
    skip: "跳过",
    success: {
      single: "文件已上传",
      multiple: "已上传 {total} 个文件",
    },
  },
} as const satisfies FileInputBlock["options"];

export const fileVisibilityOptions = ["Auto", "Public", "Private"] as const;
