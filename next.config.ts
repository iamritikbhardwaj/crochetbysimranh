// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://ig.me/m/crochetbysimran_',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;