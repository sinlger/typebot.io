import { defaultButtonLabel } from "../constants";
import type { PictureChoiceBlock } from "./schema";

export const defaultPictureChoiceOptions = {
  buttonLabel: defaultButtonLabel,
  searchInputPlaceholder: "筛选选项...",
  isMultipleChoice: false,
  isSearchable: false,
  dynamicItems: {
    isEnabled: false,
  },
} as const satisfies PictureChoiceBlock["options"];
