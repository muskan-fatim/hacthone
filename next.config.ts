/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
