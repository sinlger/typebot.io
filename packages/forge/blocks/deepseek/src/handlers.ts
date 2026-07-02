import { createDeepSeek } from "@ai-sdk/deepseek";
import { runChatCompletion } from "@typebot.io/ai/runChatCompletion";
import { runChatCompletionStream } from "@typebot.io/ai/runChatCompletionStream";
import { runGenerateVariables } from "@typebot.io/ai/runGenerateVariables";
import { createActionHandler } from "@typebot.io/forge";
import { createChatCompletion } from "./actions/createChatCompletions";
import { generateVariables } from "./actions/generateVariables";

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
        model: createDeepSeek({
          apiKey,
          baseURL: baseUrl ?? undefined,
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
          model: createDeepSeek({
            apiKey,
            baseURL: baseUrl ?? undefined,
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
  createActionHandler(generateVariables, {
    server: ({ credentials, options, variables, logs }) => {
      if (credentials?.apiKey === undefined)
        return logs.add("No API key provided");

      if (options.model === undefined) return logs.add("No model provided");

      return runGenerateVariables({
        model: createDeepSeek({
          apiKey: credentials.apiKey,
          baseURL: credentials.baseUrl ?? undefined,
        })(options.model),
        variablesToExtract: options.variablesToExtract,
        prompt: options.prompt,
        variables,
        logs,
      });
    },
  }),
];
