import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure all routes are dynamic
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
