/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
