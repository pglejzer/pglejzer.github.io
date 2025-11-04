import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  basePath: "/cv-pglejzer",
  assetPrefix: "/cv-pglejzer/",
};

export default nextConfig;
