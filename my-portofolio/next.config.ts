import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/YesiaPlorina.github.io" : "",
  assetPrefix: isProd ? "/YesiaPlorina.github.io/" : "",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
