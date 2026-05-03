/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  },
};

export default nextConfig;