import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/portofolio" : "",
  assetPrefix: isProd ? "/portofolio/" : "",
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
