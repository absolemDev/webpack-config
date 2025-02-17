export type BuldMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuldMode;
  platform: BuildPlatform;
  analyzer?: boolean;
}
