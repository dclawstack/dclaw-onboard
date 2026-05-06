/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://dclaw-onboard-backend:8129/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
