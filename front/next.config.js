/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    formats: ['image/avif', 'image/webp'],
    domains: ['https://i.ytimg.com'],
    remotePatterns: [ {
      protocol: 'https',
      hostname: 'i.ytimg.com'
    }]
  },
  trailingSlash: true,
  headers: [
      {
          key: 'Cache-Control',
          value: 'public, max-age=3153600, immutable',
      },
  ],
}

module.exports = nextConfig