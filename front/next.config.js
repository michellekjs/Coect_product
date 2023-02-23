/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}

module.exports = nextConfig