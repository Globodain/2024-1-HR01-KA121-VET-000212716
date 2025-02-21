import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'openweathermap.org',
        pathname: '/img/wn/**',
      },
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
        pathname: '/**',  // Updated to allow all paths
      }
    ],
  },
  eslint: {
    dirs: ["src"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;