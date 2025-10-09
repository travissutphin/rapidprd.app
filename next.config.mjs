/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use 'standalone' only for Docker deployments (detected via DOCKER env var)
  // Railway and Vercel use standard build
  output: process.env.DOCKER === 'true' ? 'standalone' : undefined,
};

export default nextConfig;
