/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_SHORTNER_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}