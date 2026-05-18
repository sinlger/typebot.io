import { createBlock } from "@typebot.io/forge";
import { createChatCompletion } from "./actions/createChatCompletions";
import { auth } from "./auth";
import { KimiLogo } from "./logo";

export const kimiBlock = createBlock({
  id: "kimi",
  name: "Kimi",
  tags: ["ai", "chat", "completion", "kimi", "moonshot"],
  LightLogo: KimiLogo,
  auth,
  actions: [createChatCompletion],
});
