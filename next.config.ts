import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.nextarea.vn',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
