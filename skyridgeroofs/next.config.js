const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack: (config) => {
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
    return config;
  },
}

module.exports = nextConfig
