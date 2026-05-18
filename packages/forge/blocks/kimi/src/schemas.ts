import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { auth } from "./auth";
import { kimiBlock } from "./index";

export const kimiBlockSchema = parseBlockSchema(kimiBlock);

export const kimiCredentialsSchema = parseBlockCredentials(kimiBlock.id, auth);
