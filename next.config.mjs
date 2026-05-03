/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
          {
            key: "x-vercel-enable-rewrite-caching",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;