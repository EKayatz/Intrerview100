/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["cloudinary", "graphql-request"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your question has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
