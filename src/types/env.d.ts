declare namespace NodeJS {
  interface ProcessEnv {
    readonly ENV: 'prod' | 'dev';
    readonly ALCHEMY_API_KEY: string;
    readonly NEXT_PUBLIC_PROJECT_ID: string;
  }
}
