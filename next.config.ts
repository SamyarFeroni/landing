/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 1000,
    pagesBufferLength: 2,
  },
  experimental: {},
};

export default nextConfig;
