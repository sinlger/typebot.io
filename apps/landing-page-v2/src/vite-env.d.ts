/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LANDING_PAGE_BASE_URL: string;
  readonly VITE_TYPEBOT_APP_BASE_URL: string;
  readonly VITE_TYPEBOT_ENTERPRISE_LEAD_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
