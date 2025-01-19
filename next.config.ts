import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.inappstory.ru',
      },
      {
        protocol: 'https',
        hostname: 'cs2.pikabu.ru',
      },
      {
        protocol: 'https',
        hostname: 'media.dodostatic.com',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dodostatic.net',
      },
    ],
  },
};

export default nextConfig;
