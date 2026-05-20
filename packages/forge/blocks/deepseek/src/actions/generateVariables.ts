import { createDeepSeek } from "@ai-sdk/deepseek";
import { parseGenerateVariablesOptions } from "@typebot.io/ai/parseGenerateVariablesOptions";
import { createAction } from "@typebot.io/forge";
import { isDefined } from "@typebot.io/lib/utils";
import { auth } from "../auth";
import { deepSeekModels } from "../constants";

export const generateVariables = createAction({
  name: "Generate variables",
  auth,
  options: parseGenerateVariablesOptions({
    models: { type: "static", models: deepSeekModels },
  }),
  aiGenerate: {
    models: { type: "static", items: deepSeekModels },
    getModel: ({ credentials, model }) =>
      createDeepSeek({
        apiKey: credentials.apiKey,
        baseURL: credentials.baseUrl,
      })(model),
  },
  getSetVariableIds: (options) =>
    options.variablesToExtract
      ?.map((variable) => (variable.type ? variable.variableId : undefined))
      .filter(isDefined) ?? [],
});
