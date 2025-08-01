import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  assetPrefix: isProd ? '/personal-webpage' : '',
};

export default nextConfig;
