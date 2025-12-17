const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure CSS is properly compiled in production
  swcMinify: true,
  compiler: {
    // Remove console logs in production (optional)
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.wsimg.com',
      },
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/roofing-company-near-me',
        destination: '/utah-roofing-company',
        permanent: true,
      },
    ];
  },
  // Ensure path aliases work correctly in all build environments
  webpack: (config, { isServer }) => {
    // Get the absolute path to the project root
    const projectRoot = path.resolve(__dirname);
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': projectRoot,
    };
    // Ensure modules are resolved from the project root
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      projectRoot,
      path.join(projectRoot, 'node_modules'),
    ];
    
    // Ensure CSS is properly handled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
