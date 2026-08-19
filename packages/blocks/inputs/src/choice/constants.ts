import { defaultButtonLabel } from "../constants";
import type { ChoiceInputBlock } from "./schema";

export const defaultChoiceInputOptions = {
  buttonLabel: defaultButtonLabel,
  searchInputPlaceholder: "筛选选项...",
  isMultipleChoice: false,
  isSearchable: false,
  areInitialSearchButtonsVisible: true,
} as const satisfies ChoiceInputBlock["options"];
