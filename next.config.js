/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/landing-page',
        destination: 'https://landing-destakse.vercel.app',
      },
      {
        source: '/landing-page/:path*',
        destination: 'https://landing-destakse.vercel.app/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
      {
        protocol: 'https',
        hostname: 'landing-destakse.vercel.app',
      }
    ],
  },
}

module.exports = nextConfig
