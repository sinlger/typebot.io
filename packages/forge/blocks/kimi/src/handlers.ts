import { createOpenAI } from "@ai-sdk/openai";
import { runChatCompletion } from "@typebot.io/ai/runChatCompletion";
import { runChatCompletionStream } from "@typebot.io/ai/runChatCompletionStream";
import { createActionHandler, createFetcherHandler } from "@typebot.io/forge";
import { ky } from "@typebot.io/lib/ky";
import {
  createChatCompletion,
  modelsFetcher,
} from "./actions/createChatCompletions";
import { defaultBaseUrl, kimiModels } from "./constants";

export default [
  createActionHandler(createChatCompletion, {
    server: async ({
      credentials: { apiKey, baseUrl },
      options,
      variables,
      logs,
      sessionStore,
    }) => {
      if (!apiKey) return logs.add("No API key provided");
      const modelName = options.model?.trim();
      if (!modelName) return logs.add("No model provided");
      if (!options.messages) return logs.add("No messages provided");

      await runChatCompletion({
        model: createOpenAI({
          apiKey,
          baseURL: baseUrl ?? undefined,
          compatibility: "strict",
        })(modelName),
        variables,
        messages: options.messages,
        tools: options.tools,
        isVisionEnabled: false,
        temperature: options.temperature,
        logs,
        responseMapping: options.responseMapping,
        sessionStore,
      });
    },
    stream: {
      run: async ({
        credentials: { apiKey, baseUrl },
        options,
        variables,
        sessionStore,
      }) => {
        if (!apiKey)
          return {
            error: {
              description: "No API key provided",
            },
          };
        const modelName = options.model?.trim();
        if (!modelName)
          return {
            error: {
              description: "No model provided",
            },
          };
        if (!options.messages)
          return {
            error: {
              description: "No messages provided",
            },
          };

        return runChatCompletionStream({
          model: createOpenAI({
            apiKey,
            baseURL: baseUrl ?? undefined,
            compatibility: "strict",
          })(modelName),
          variables,
          messages: options.messages,
          isVisionEnabled: false,
          responseMapping: options.responseMapping,
          tools: options.tools,
          temperature: options.temperature,
          sessionStore,
        });
      },
    },
  }),
  createFetcherHandler(
    createChatCompletion,
    modelsFetcher.id,
    async ({ credentials }) => {
      if (!credentials?.apiKey)
        return {
          data: kimiModels,
        };

      try {
        const response = await ky
          .get(`${credentials.baseUrl ?? defaultBaseUrl}/models`, {
            headers: {
              authorization: `Bearer ${credentials.apiKey}`,
            },
          })
          .json<{ data: { id: string }[] }>();

        return {
          data: response.data.map((model) => model.id),
        };
      } catch {
        return {
          data: kimiModels,
        };
      }
    },
  ),
];
