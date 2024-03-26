import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildPaths,
  BuldMode,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode?: BuldMode;
  port?: number;
  platform?: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };
  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
  });
  return config;
};
