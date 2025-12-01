/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for static generation
  experimental: {
    optimizePackageImports: ['@next/font'],
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
}

module.exports = nextConfig

