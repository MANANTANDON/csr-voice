/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dev.csrvoice.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.csrvoice.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dev.csrvoice.com/wp-json/custom/v1/:path*',
      },
    ];
  },
}

module.exports = nextConfig