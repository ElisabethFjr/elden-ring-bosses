const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eldenring.fanapis.com',
        pathname: '/images/bosses/**',
      },
    ],
  },
};

module.exports = nextConfig;
