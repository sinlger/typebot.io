import { getChatCompletionSetVarIds } from "@typebot.io/ai/getChatCompletionSetVarIds";
import { getChatCompletionStreamVarId } from "@typebot.io/ai/getChatCompletionStreamVarId";
import { parseChatCompletionOptions } from "@typebot.io/ai/parseChatCompletionOptions";
import { createAction } from "@typebot.io/forge";
import { auth } from "../auth";

export const modelsFetcher = {
  id: "fetchModels",
} as const;

export const createChatCompletion = createAction({
  name: "Create chat completion",
  auth,
  options: parseChatCompletionOptions({
    models: {
      type: "fetcher",
      id: modelsFetcher.id,
    },
  }),
  getSetVariableIds: getChatCompletionSetVarIds,
  fetchers: [modelsFetcher],
  turnableInto: [
    {
      blockId: "open-router",
    },
    {
      blockId: "together-ai",
    },
    {
      blockId: "groq",
      transform: (opts) => ({
        ...opts,
        model: undefined,
      }),
    },
    {
      blockId: "perplexity",
      transform: (options) => ({ ...options, model: undefined }),
    },
    {
      blockId: "anthropic",
      transform: (options) => ({
        ...options,
        model: undefined,
        action: "Create Chat Message",
      }),
    },
    {
      blockId: "openai",
      transform: (opts) => ({
        ...opts,
        model: undefined,
      }),
    },
    {
      blockId: "deepseek",
      transform: (opts) => ({
        ...opts,
        model: undefined,
      }),
    },
    {
      blockId: "mistral",
      transform: (opts) => ({
        ...opts,
        model: undefined,
      }),
    },
  ],
  getStreamVariableId: getChatCompletionStreamVarId,
});
