export const breakpoints = {
  md: 768,
};

const getEnvUrl = (value: string | undefined, fallback: string) =>
  value && value.length > 0 ? value : fallback;

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const currentBaseDomain = trimTrailingSlash(
  getEnvUrl(import.meta.env.VITE_LANDING_PAGE_BASE_URL, "https://typebot.com"),
);
const appBaseDomain = trimTrailingSlash(
  getEnvUrl(
    import.meta.env.VITE_TYPEBOT_APP_BASE_URL,
    "https://app.typebot.com",
  ),
);
const docsBaseDomain = trimTrailingSlash(
  getEnvUrl(
    import.meta.env.VITE_TYPEBOT_DOCS_BASE_URL,
    "https://docs.typebot.com",
  ),
);

export const currentBaseUrl = currentBaseDomain;
export const signinUrl = `${appBaseDomain}/signin`;
export const registerUrl = `${appBaseDomain}/register`;
export const dashboardUrl = `${appBaseDomain}/typebots`;
export const githubRepoUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_GITHUB_REPO_URL,
  "https://github.com/baptisteArno/typebot.io",
);
export const blueskyUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_BLUESKY_URL,
  "https://bsky.app/profile/typebot.io",
);
export const linkedInUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_LINKEDIN_URL,
  "https://www.linkedin.com/company/typebot",
);
export const discordUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_DISCORD_URL,
  `${currentBaseDomain}/discord`,
);
export const docsUrl = docsBaseDomain;
export const howToGetHelpUrl = `${docsUrl}/guides/how-to-get-help`;
export const stripeClimateUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_STRIPE_CLIMATE_URL,
  "https://climate.stripe.com/5VCRAq",
);
export const enterpriseLeadTypebotUrl = getEnvUrl(
  import.meta.env.VITE_TYPEBOT_ENTERPRISE_LEAD_URL,
  "https://typebot.io/enterprise-lead-form",
);

export const legacyRedirects = {
  "/typebot-lib": "https://unpkg.com/typebot-js@2.0.21/dist/index.umd.min.js",
  "/typebot-lib/v2": "https://unpkg.com/typebot-js@2.1.3/dist/index.umd.min.js",
} as const;
