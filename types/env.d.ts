interface ImportMetaEnv {
  /** 项目初始化页面 */
  readonly VITE_APP_REDIRECT_URL: string;
  /** 项目图标引用前缀 */
  readonly VITE_ICON_LOCAL_PREFIX: string;
  [key: string]: any;
}

interface ImportMeta {
  __: unknown;
  readonly env: ImportMetaEnv;
}
