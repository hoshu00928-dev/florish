import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  // tw-animate-css only exposes its CSS via the "style" export condition,
  // which Turbopack's CSS resolver doesn't consult for bare specifiers.
  turbopack: {
    resolveAlias: {
      'tw-animate-css': './node_modules/tw-animate-css/dist/tw-animate.css',
    },
  },
};

export default nextConfig;
