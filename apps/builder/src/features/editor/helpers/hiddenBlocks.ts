import { env } from "@typebot.io/env";

/**
 * Returns the set of block IDs to hide from the flow editor's left sidebar.
 * IDs come from `NEXT_PUBLIC_HIDDEN_BLOCKS` (comma-separated, case-sensitive).
 * Matches against:
 *   - native block enum values (`block.type`, e.g. "text", "payment input")
 *   - Forge block ids (`block.id`, e.g. "openai", "anthropic")
 *   - event type values (e.g. "command", "reply")
 */
export const getHiddenBlockSet = (): Set<string> =>
  new Set(env.NEXT_PUBLIC_HIDDEN_BLOCKS ?? []);
