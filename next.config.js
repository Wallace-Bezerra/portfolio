/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  },
}

module.exports = nextConfig
