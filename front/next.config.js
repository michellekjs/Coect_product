/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    loader: 'akamai',
    path: '/',
  },
  trailingSlash: true,
  headers: [
      {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, stale-while-revalidate',
      },
  ],
}

module.exports = nextConfig