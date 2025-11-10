/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig