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
      {
        source: '/roof-installation',
        destination: '/services/roof-installation',
        permanent: true,
      },
      {
        source: '/roof-installation-utah',
        destination: '/services/roof-installation',
        permanent: true,
      },
      {
        source: '/roof-repair',
        destination: '/services/roof-repairs',
        permanent: true,
      },
      {
        source: '/roof-repair-utah',
        destination: '/services/roof-repairs',
        permanent: true,
      },
      {
        source: '/roof-repair-near-me',
        destination: '/services/roof-repairs',
        permanent: true,
      },
      {
        source: '/roof-replacement-near-me',
        destination: '/services/roof-replacement',
        permanent: true,
      },
      {
        source: '/roof-installation-near-me',
        destination: '/services/roof-installation',
        permanent: true,
      },
      {
        source: '/roofers-near-me',
        destination: '/utah-roofing-company',
        permanent: true,
      },
      {
        source: '/roofing-contractors-near-me',
        destination: '/utah-roofing-company',
        permanent: true,
      },
      {
        source: '/metal-roofing-near-me',
        destination: '/services/metal-roofing',
        permanent: true,
      },
      {
        source: '/commercial-roofing-near-me',
        destination: '/services/commercial-roofing',
        permanent: true,
      },
      {
        source: '/roof-inspection-near-me',
        destination: '/services/roof-inspection',
        permanent: true,
      },
      {
        source: '/emergency-roof-repair-near-me',
        destination: '/services/emergency-roof-repair',
        permanent: true,
      },
      {
        source: '/shingle-roofing-near-me',
        destination: '/services/shingle-roofing',
        permanent: true,
      },
      {
        source: '/flat-roofing-near-me',
        destination: '/services/flat-roofing',
        permanent: true,
      },
      {
        source: '/solar',
        destination: '/services/solar',
        permanent: true,
      },
      {
        source: '/solar-installation',
        destination: '/services/solar',
        permanent: true,
      },
      {
        source: '/solar-installation-utah',
        destination: '/services/solar',
        permanent: true,
      },
      {
        source: '/solar-near-me',
        destination: '/services/solar',
        permanent: true,
      },
      {
        source: '/services/commercial-roofing-services',
        destination: '/services/commercial-roofing',
        permanent: true,
      },
      {
        source: '/services/residential-roofing-services',
        destination: '/services/residential-roofing',
        permanent: true,
      },
      {
        source: '/roof-replacement-utah',
        destination: '/services/roof-replacement',
        permanent: true,
      },
      {
        source: '/roof-inspection',
        destination: '/services/roof-inspection',
        permanent: true,
      },
      {
        source: '/emergency-roof-repair',
        destination: '/services/emergency-roof-repair',
        permanent: true,
      },
      {
        source: '/roof-maintenance',
        destination: '/services/roof-maintenance',
        permanent: true,
      },
      {
        source: '/roof-ventilation',
        destination: '/services/roof-ventilation',
        permanent: true,
      },
      {
        source: '/roof-coatings',
        destination: '/services/roof-coatings',
        permanent: true,
      },
      {
        source: '/shingle-roofing',
        destination: '/services/shingle-roofing',
        permanent: true,
      },
      {
        source: '/flat-roofing',
        destination: '/services/flat-roofing',
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
