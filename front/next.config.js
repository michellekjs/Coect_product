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
          value: 'no-cache, max-age=31536000, stale-while-revalidate',
      },
  ],
}

module.exports = nextConfig