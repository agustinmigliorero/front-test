import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable static optimization for all pages
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
