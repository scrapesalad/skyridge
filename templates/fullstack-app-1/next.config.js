/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root detection warning
  outputFileTracingRoot: __dirname,
  
  // Optimize for large numbers of static pages
  experimental: {
    // Enable optimizations for static generation
    optimizePackageImports: ['@next/font', 'lucide-react'],
    // Enable partial prerendering for faster initial loads
    ppr: false, // Disable for now, can enable if needed
  },

  // SWC minification is enabled by default in Next.js 15 (no need to specify)

  // Turbopack configuration (replaces deprecated experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Allow builds to proceed despite type or ESLint warnings (temporary until metadata is normalized)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optimize images with advanced formats and lazy loading
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    // Enable image optimization
    unoptimized: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://vercel.live; script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; manifest-src 'self'; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com; frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://vercel.live; object-src 'none'; base-uri 'self';",
    // Configure local patterns to handle query strings
    // Note: localPatterns only supports pathname patterns, not protocol/hostname
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icondumpsters.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'icondumpsters-gpuw1okyv-scrapesalads-projects.vercel.app',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
    qualities: [75, 85, 100], // Use an array for quality levels (default: 75)
    // Allow local images - permissive for all local files
    localPatterns: [
      { pathname: '/**' },
    ],
  },

  // Webpack configuration: optimize bundle splitting and performance
  webpack: (config, { dev, isServer }) => {
    // Optional: bundle analyzer in production
    if (!dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, reportFilename: 'bundle-analysis.html' }));
    }
    
    // Optimize bundle splitting for production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 15, // Further reduced to limit initial JS parsing
          minSize: 20000,
          maxSize: 150000, // Reduced chunk size limit to reduce parse/compile time (150KB)
          cacheGroups: {
            default: false,
            vendors: false,
            // React and React-DOM in separate chunk (high priority, frequently used)
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
              maxSize: 200000, // Limit React chunk size (200KB)
            },
            // Stripe in separate chunk (only needed on payment pages)
            stripe: {
              name: 'stripe',
              test: /[\\/]node_modules[\\/]@stripe[\\/]/,
              chunks: 'async', // Only load when needed
              priority: 25,
              reuseExistingChunk: true,
            },
            // Next.js framework chunk - split into smaller chunks to reduce parse time
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](next|@next)[\\/]/,
              chunks: 'async', // Load asynchronously to reduce initial JS execution
              priority: 22,
              reuseExistingChunk: true,
              maxSize: 150000, // Limit framework chunk size (150KB)
            },
            // Other vendor dependencies - stricter minChunks to reduce unused code
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 20,
              minChunks: 3, // Increased from 2 to reduce unused code in vendor bundle
              minSize: 30000, // Only create chunk if >= 30KB
              reuseExistingChunk: true,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    
    // SVG loader support
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },

  // Static generation optimizations
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },

  // Compress static assets
  compress: true,

  // Optimize static generation - increased timeout for 132 blog posts
  staticPageGenerationTimeout: 300, // 5 minutes to ensure all blog posts are pre-generated
  
  // SWC minification is enabled by default in Next.js 13+
  // Removed swcMinify as it's deprecated and always enabled
  
  // Optimize production builds
  productionBrowserSourceMaps: false, // Disable source maps in production for faster builds
  
  // Increase memory limit for large builds
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Optimize output
  output: 'standalone',

  // Enable modern JavaScript features
  transpilePackages: ['canvas'],

  // Performance monitoring
  
  // Redirects for broken links, domain migration, and SEO consolidation
  async redirects() {
    return [
      // ===== GSC COVERAGE FIXES (2025-11-10) =====
      // Redirect test page to homepage
      {
        source: '/test-og',
        destination: '/',
        permanent: true,
      },
      // Redirect feed URLs to homepage (legacy WordPress feeds)
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*/feed/',
        destination: '/',
        permanent: true,
      },
      // Redirect search parameter URLs to homepage
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 's',
          },
        ],
        destination: '/',
        permanent: true,
      },
      // ===== END GSC COVERAGE FIXES =====
      // 301: services subpaths to new contractor intent routes
      { source: '/salt-lake-city-dumpster-rentals/services', destination: '/dumpster-rentals-salt-lake-city', permanent: true },
      { source: '/west-jordan-dumpster-rentals/services', destination: '/dumpster-rentals-west-jordan', permanent: true },
      { source: '/sandy-dumpster-rentals/services', destination: '/dumpster-rentals-sandy', permanent: true },
      { source: '/south-jordan-dumpster-rentals/services', destination: '/dumpster-rentals-south-jordan', permanent: true },
      { source: '/murray-dumpster-rentals/services', destination: '/dumpster-rentals-murray', permanent: true },
      // NOTE: HTTPS, www, and trailing slash redirects are handled by middleware.ts (uses 301)
      // Redirect common broken links to correct pages
      {
        source: '/Link',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/complete',
        destination: '/complete-dumpster-rental-guide-2025',
        permanent: true,
      },
      {
        source: '/construction-waste-management',
        destination: '/complete-dumpster-rental-guide-2025',
        permanent: true,
      },
      {
        source: '/how-to-choose-dumpster-size',
        destination: '/dumpster-sizes',
        permanent: true,
      },
      // Redirect city guide pages that might be missing
      // Redirect service pages to main services page
      {
        source: '/services/residential-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/commercial-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/construction-dumpster-rentals',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/utah-dumpster-rental-locations',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/cities/:city/dumpster-rental',
        destination: '/:city',
        permanent: true,
      },
      {
        source: '/2024/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/2025/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/utahlocations',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/utahlocations-dumpster-rental-guide-2025',
        destination: '/locations-dumpster-rental-guide-2025',
        permanent: true,
      },
      {
        source: '/Link-3',
        destination: '/contact',
        permanent: true,
      },
      // Redirects for reorganized structure
      {
        source: '/tonnage-calculator-1',
        destination: '/tonnage-calculator',
        permanent: true,
      },
      {
        source: '/how-to-choose-dumpster-size-3',
        destination: '/dumpster-sizes',
        permanent: true,
      },
      {
        source: '/utah-dumpster-permits-guide-1',
        destination: '/utah-dumpster-permits-guide',
        permanent: true,
      },
      {
        source: '/dumpster-rental-sizes',
        destination: '/dumpster-sizes',
        permanent: true,
      },
      {
        source: '/dumpster-rental-calculator',
        destination: '/dumpster-rental-calculator',
        permanent: true,
      },
      {
        source: '/dumpster-calculator-1',
        destination: '/dumpster-calculator',
        permanent: true,
      },
      {
        source: '/dumpster-rental-guide',
        destination: '/dumpster-rental-guide',
        permanent: true,
      },
      {
        source: '/dumpster-rental-tips',
        destination: '/dumpster-sizes',
        permanent: true,
      },
      {
        source: '/dumpster-rental-process',
        destination: '/schedule-delivery-pickup',
        permanent: true,
      },
      {
        source: '/privacy-and-legal-info',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/locations-1',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/freequote-3',
        destination: '/free-quote',
        permanent: true,
      },
      {
        source: '/freequote',
        destination: '/free-quote',
        permanent: true,
      },
      {
        source: '/rental-dumpsters-near-me-prices',
        destination: '/dumpster-rentals-near-me-prices',
        permanent: true,
      },
      {
        source: '/cheap-rental-dumpsters-near-me',
        destination: '/cheap-dumpster-rentals-near-me',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/free-quote',
        permanent: true,
      },
      // Note: Size pages exist at these URLs, so no redirects needed
      // Removed self-referencing redirects that were causing unnecessary 307/308 redirects
      {
        source: '/30-yard-dumpster-rental-White%20City-ut',
        destination: '/30-yard-dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-West%20Jordan-ut',
        destination: '/30-yard-dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-West%20Valley%20City-ut',
        destination: '/30-yard-dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-South%20Salt%20Lake-ut',
        destination: '/30-yard-dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Cottonwood%20Heights-ut',
        destination: '/30-yard-dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Emigration%20Canyon-ut',
        destination: '/30-yard-dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-Salt%20Lake%20City-ut',
        destination: '/30-yard-dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-West%20Valley%20City',
        destination: '/roll-off-dumpster-rental-west-valley-city',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-South%20Salt%20Lake',
        destination: '/roll-off-dumpster-rental-south-salt-lake',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-West%20Jordan',
        destination: '/roll-off-dumpster-rental-west-jordan',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Salt%20Lake%20City',
        destination: '/roll-off-dumpster-rental-salt-lake-city',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Cottonwood%20Heights',
        destination: '/roll-off-dumpster-rental-cottonwood-heights',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-South%20Jordan',
        destination: '/roll-off-dumpster-rental-south-jordan',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-Emigration%20Canyon',
        destination: '/roll-off-dumpster-rental-emigration-canyon',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-White%20City',
        destination: '/roll-off-dumpster-rental-white-city',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-White%20City-ut',
        destination: '/rolloff-dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-South%20Salt%20Lake-ut',
        destination: '/rolloff-dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Emigration%20Canyon-ut',
        destination: '/rolloff-dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-West%20Jordan-ut',
        destination: '/rolloff-dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Salt%20Lake%20City-ut',
        destination: '/rolloff-dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-Cottonwood%20Heights-ut',
        destination: '/rolloff-dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-West%20Valley%20City-ut',
        destination: '/rolloff-dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-South%20Jordan-ut',
        destination: '/rolloff-dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-South%20Salt%20Lake-ut',
        destination: '/dumpster-rental-near-me-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-West%20Valley%20City-ut',
        destination: '/dumpster-rental-near-me-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Emigration%20Canyon-ut',
        destination: '/dumpster-rental-near-me-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Cottonwood%20Heights-ut',
        destination: '/dumpster-rental-near-me-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-West%20Jordan-ut',
        destination: '/dumpster-rental-near-me-west-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-White%20City-ut',
        destination: '/dumpster-rental-near-me-white-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-Salt%20Lake%20City-ut',
        destination: '/dumpster-rental-near-me-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/terms-of-service/',
        destination: '/terms-of-service',
        permanent: true
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy-policy',
        permanent: true
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/admin-dashboard',
        destination: '/admin',
        permanent: true
      },
      // Redirect invalid city pages to proper pages
      {
        source: '/dumpster-rental-complete-ut',
        destination: '/dumpster-rental-guide-2025',
        permanent: true
      },
      {
        source: '/dumpster-rental-utahlocations-ut',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/dumpster-rental-utah-ut',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/dumpster-rental-commercial-dumpster-rental-business-solutions-ut',
        destination: '/services/commercial-dumpster-rental',
        permanent: true
      },
      {
        source: '/dumpster-rental-cheapestsalt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-tooel-ut',
        destination: '/dumpster-rental-tooele-ut',
        permanent: true
      },
      // Fix broken redirects: dumpster-rental-near-me-[city]-ut -> [city] page
      {
        source: '/dumpster-rental-near-me-sandy-ut',
        destination: '/sandy',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-murray-ut',
        destination: '/murray',
        permanent: true
      },
      // Redirect old /blog/blog/ URLs to correct category URLs
      // The /blog/[slug] route will handle the actual redirect to /blog/category/slug
      
      // ===== GUIDE PAGE REDIRECTS =====
      {
        source: '/dumpster-sizes',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/dumpster-size-guide-utah',
        destination: '/guides/dumpster-size-guide-utah',
        permanent: true
      },
      {
        source: '/home-renovation-dumpster-guide',
        destination: '/guides/home-renovation',
        permanent: true
      },
      {
        source: '/utah-dumpster-permits-guide',
        destination: '/guides/utah-permits',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-guide-2025',
        destination: '/guides/rolloff-dumpster-guide',
        permanent: true
      },
      {
        source: '/construction-waste-management-guide',
        destination: '/guides/construction-waste-management',
        permanent: true
      },
      {
        source: '/retail-renovation-dumpster-guide',
        destination: '/guides/retail-renovation-guide',
        permanent: true
      },
      {
        source: '/complete-dumpster-rental-guide-2025',
        destination: '/dumpster-rental-guide-2025',
        permanent: true
      },
      
      // ===== PRICING PAGE REDIRECTS =====
      {
        source: '/transparent-pricing',
        destination: '/pricing/transparent-pricing',
        permanent: true
      },
      {
        source: '/dumpster-prices',
        destination: '/pricing/dumpster-prices',
        permanent: true
      },
      {
        source: '/dumpster-rental-costs',
        destination: '/pricing/dumpster-rental-costs',
        permanent: true
      },
      {
        source: '/no-hidden-fees',
        destination: '/pricing/no-hidden-fees',
        permanent: true
      },
      {
        source: '/competitive-pricing',
        destination: '/pricing/competitive-pricing',
        permanent: true
      },
      
      // ===== CALCULATOR PAGE REDIRECTS =====
      {
        source: '/dumpster-rental-cost-calculator',
        destination: '/calculators/cost-calculator',
        permanent: true
      },
      {
        source: '/demolition-dumpster-calculator',
        destination: '/calculators/demolition-calculator',
        permanent: true
      },
      {
        source: '/demolition-calculator',
        destination: '/calculators/demolition-calculator',
        permanent: true
      },
      {
        source: '/tonnage-calculator',
        destination: '/calculators/tonnage-calculator',
        permanent: true
      },
      {
        source: '/dumpster-size-calculator',
        destination: '/calculators/dumpster-size-calculator',
        permanent: true
      },
      {
        source: '/roofing-dumpster-calculator',
        destination: '/calculators/roofing-calculator',
        permanent: true
      },
      {
        source: '/roofing-calculator',
        destination: '/calculators/roofing-calculator',
        permanent: true
      },
      {
        source: '/concrete-debris-calculator',
        destination: '/calculators/concrete-calculator',
        permanent: true
      },
      {
        source: '/dumpster-volume-calculator',
        destination: '/calculators/volume-calculator',
        permanent: true
      },
      {
        source: '/30-yard-dumpster-rental-calculator',
        destination: '/calculators/cost-calculator',
        permanent: true
      },
      
      // ===== SERVICE PAGE REDIRECTS =====
      {
        source: '/estate-cleanout',
        destination: '/services/junk-removal',
        permanent: true
      },
      {
        source: '/services/yard-waste-dumpster-rental',
        destination: '/services/yard-waste-debris-bin-rental',
        permanent: true
      },
      {
        source: '/services/roofing-dumpster-rental',
        destination: '/services/construction-dumpster-rental',
        permanent: true
      },
      {
        source: '/services/concrete-dumpster-rental',
        destination: '/services/construction-dumpster-rental',
        permanent: true
      },
      
      // ===== BLOG POST REDIRECTS (fix double /blog/blog/) =====
      // Note: These redirects are for old URLs without category. Posts with correct URLs should not be redirected.
      // Removed redirects that cause loops for posts that already have correct URL structure.
      {
        source: '/blog/what-size-dumpster-for-a-roof',
        destination: '/blog',
        permanent: true
      },
      // Note: what-size-dumpster-for-a-roof post doesn't exist, redirecting to blog listing
      {
        source: '/blog/7-great-places-to-donate-your-household-clutter',
        destination: '/blog/decluttering-cleanouts/7-great-places-to-donate-your-household-clutter',
        permanent: true
      },
      {
        source: '/blog/things-you-can-do-to-celebrate-earth-day-virtually-in-2020',
        destination: '/blog/seasonal-projects/things-you-can-do-to-celebrate-earth-day-virtually-in-2020',
        permanent: true
      },
      {
        source: '/blog/green-ways-to-keep-your-house-cool',
        destination: '/blog/home-improvement/green-ways-to-keep-your-house-cool',
        permanent: true
      },
      {
        source: '/blog/guide-how-to-get-rid-of-concrete-fast-easy-and-affordable-concrete-removal',
        destination: '/blog/yard-landscaping/guide-how-to-get-rid-of-concrete-fast-easy-and-affordable-concrete-removal',
        permanent: true
      },
      {
        source: '/blog/how-to-create-an-eco-friendly-bedroom-in-9-simple-ways',
        destination: '/blog/home-improvement/how-to-create-an-eco-friendly-bedroom-in-9-simple-ways',
        permanent: true
      },
      {
        source: '/blog/what-to-do-with-old-tires-heres-5-useful-things-you-should-know',
        destination: '/blog/dumpster-services/what-to-do-with-old-tires-heres-5-useful-things-you-should-know',
        permanent: true
      },
      {
        source: '/blog/office-moving-checklist-tips-to-keep-in-mind',
        destination: '/blog/decluttering-cleanouts/office-moving-checklist-tips-to-keep-in-mind',
        permanent: true
      },
      {
        source: '/blog/recycling-guide-how-to-recycle-at-home-the-right-way',
        destination: '/blog/home-improvement/recycling-guide-how-to-recycle-at-home-the-right-way',
        permanent: true
      },
      {
        source: '/blog/6-things-you-need-to-know-about-homeowner-associations',
        destination: '/blog/home-improvement/6-things-you-need-to-know-about-homeowner-associations',
        permanent: true
      },
      {
        source: '/blog/15-cleaning-tips-to-make-your-new-home-move-in-ready',
        destination: '/blog/home-improvement/15-cleaning-tips-to-make-your-new-home-move-in-ready',
        permanent: true
      },
      {
        source: '/blog/guide-to-clean-out-the-home-of-a-deceased-parent',
        destination: '/blog/decluttering-cleanouts/guide-to-clean-out-the-home-of-a-deceased-parent',
        permanent: true
      },
      {
        source: '/blog/how-to-dispose-of-rubber-tires',
        destination: '/blog/dumpster-services/how-to-dispose-of-rubber-tires',
        permanent: true
      },
      {
        source: '/blog/8-creative-ways-to-upcycle-old-furniture',
        destination: '/blog/home-improvement/8-creative-ways-to-upcycle-old-furniture',
        permanent: true
      },
      {
        source: '/blog/homeadvisor-recognizes-residential-friendly-experience',
        destination: '/blog/home-improvement/homeadvisor-recognizes-residential-friendly-experience',
        permanent: true
      },
      {
        source: '/blog/update-your-kitchen-like-an-expert-with-8-impressive-tips',
        destination: '/blog/home-renovations/update-your-kitchen-like-an-expert-with-8-impressive-tips',
        permanent: true
      },
      {
        source: '/blog/what-you-need-to-know-about-these-30-things-you-shouldnt-donate',
        destination: '/blog/decluttering-cleanouts/what-you-need-to-know-about-these-30-things-you-shouldnt-donate',
        permanent: true
      },
      {
        source: '/blog/relocating-to-another-country-everything-you-need-to-know-before-moving',
        destination: '/blog/decluttering-cleanouts/relocating-to-another-country-everything-you-need-to-know-before-moving',
        permanent: true
      },
      {
        source: '/blog/9-tips-for-toy-organization-creating-a-better-and-safe-playing-environment',
        destination: '/blog/decluttering-cleanouts/9-tips-for-toy-organization-creating-a-better-and-safe-playing-environment',
        permanent: true
      },
      {
        source: '/blog/where-can-i-rent-a-dumpster',
        destination: '/blog/dumpster-services/where-can-i-rent-a-dumpster',
        permanent: true
      },
      {
        source: '/blog/complete-vacation-rental-guide-impress-every-guest-with-this-vacation-rental-cleaning-checklist',
        destination: '/blog/home-improvement/complete-vacation-rental-guide-impress-every-guest-with-this-vacation-rental-cleaning-checklist',
        permanent: true
      },
      {
        source: '/blog/how-to-create-the-home-office-of-your-dreams',
        destination: '/blog/decluttering-cleanouts/how-to-create-the-home-office-of-your-dreams',
        permanent: true
      },
      {
        source: '/blog/the-top-eco-friendly-places-to-live-in-the-u-s',
        destination: '/blog/home-improvement/the-top-eco-friendly-places-to-live-in-the-u-s',
        permanent: true
      },
      {
        source: '/blog/5-tips-to-mix-modern-and-traditional-styles-for-your-kitchen',
        destination: '/blog/home-renovations/5-tips-to-mix-modern-and-traditional-styles-for-your-kitchen',
        permanent: true
      },
      {
        source: '/blog/smart-disposal-tips-how-to-create-and-use-compost',
        destination: '/blog/home-improvement/smart-disposal-tips-how-to-create-and-use-compost',
        permanent: true
      },
      {
        source: '/blog/how-to-properly-dispose-of-cooking-oil-and-grease',
        destination: '/blog/dumpster-services/how-to-properly-dispose-of-cooking-oil-and-grease',
        permanent: true
      },
      {
        source: '/blog/5-reasons-you-should-stop-paying-for-a-storage-locker',
        destination: '/blog/decluttering-cleanouts/5-reasons-you-should-stop-paying-for-a-storage-locker',
        permanent: true
      },
      {
        source: '/blog/how-to-sustainably-dispose-of-electronics-properly-and-safely',
        destination: '/blog/dumpster-services/how-to-sustainably-dispose-of-electronics-properly-and-safely',
        permanent: true
      },
      {
        source: '/blog/relocation-should-you-sell-keep-or-toss-it',
        destination: '/blog/decluttering-cleanouts/relocation-should-you-sell-keep-or-toss-it',
        permanent: true
      },
      {
        source: '/blog/inspiring-stories-from-diverse-entrepreneurs-at-bin-there-dump-that',
        destination: '/blog/dumpster-services/inspiring-stories-from-diverse-entrepreneurs-at-bin-there-dump-that',
        permanent: true
      },
      {
        source: '/blog/bin-there-dump-that-wins-4-top-franchise-awards-franchise-business-review',
        destination: '/blog/dumpster-services/bin-there-dump-that-wins-4-top-franchise-awards-franchise-business-review',
        permanent: true
      },
      {
        source: '/blog/20-exciting-ways-to-make-a-big-impact-with-small-spaces',
        destination: '/blog/home-improvement/20-exciting-ways-to-make-a-big-impact-with-small-spaces',
        permanent: true
      },
      {
        source: '/blog/10-signs-you-need-gutter-repair-and-how-to-fix-it-yourself',
        destination: '/blog/yard-landscaping/10-signs-you-need-gutter-repair-and-how-to-fix-it-yourself',
        permanent: true
      },
      {
        source: '/blog/5-helpful-tips-to-avoid-a-kitchen-plumbing-disaster',
        destination: '/blog/home-renovations/5-helpful-tips-to-avoid-a-kitchen-plumbing-disaster',
        permanent: true
      },
      {
        source: '/blog/6-ways-to-create-your-own-peaceful-sanctuary-at-home',
        destination: '/blog/home-improvement/6-ways-to-create-your-own-peaceful-sanctuary-at-home',
        permanent: true
      },
      {
        source: '/blog/maintain-a-green-lifestyle-10-reusable-items-to-switch-to-in-your-home',
        destination: '/blog/home-improvement/maintain-a-green-lifestyle-10-reusable-items-to-switch-to-in-your-home',
        permanent: true
      },
      {
        source: '/blog/10-great-ways-to-use-solar-lighting-for-exterior-designs',
        destination: '/blog/yard-landscaping/10-great-ways-to-use-solar-lighting-for-exterior-designs',
        permanent: true
      },
      {
        source: '/blog/how-to-prevent-ice-and-snow-damage-on-a-roof',
        destination: '/blog/home-renovations/how-to-prevent-ice-and-snow-damage-on-a-roof',
        permanent: true
      },
      {
        source: '/blog/top-home-office-organization-tips-that-will-help-your-productivity',
        destination: '/blog/home-improvement/top-home-office-organization-tips-that-will-help-your-productivity',
        permanent: true
      },
      {
        source: '/blog/resources',
        destination: '/blog/home-improvement/resources',
        permanent: true
      },
      {
        source: '/blog/equipment-you-need-to-think-about-when-renovating-your-house',
        destination: '/blog/home-renovations/equipment-you-need-to-think-about-when-renovating-your-house',
        permanent: true
      },
      {
        source: '/blog/renovating-during-covid-19-mistakes-to-avoid',
        destination: '/blog/home-renovations/renovating-during-covid-19-mistakes-to-avoid',
        permanent: true
      },
      {
        source: '/blog/how-to-dispose-of-paint-properly-and-safely',
        destination: '/blog/dumpster-services/how-to-dispose-of-paint-properly-and-safely',
        permanent: true
      },
      {
        source: '/blog/how-to-load-a-dumpster-for-fast-simple-and-safe-waste-disposal',
        destination: '/blog/dumpster-services/how-to-load-a-dumpster-for-fast-simple-and-safe-waste-disposal',
        permanent: true
      },
      {
        source: '/blog/compare-the-best-waste-disposal-solutions-near-you-bin-there-dump-that-vs-waste-management-vs-junk-king',
        destination: '/blog/dumpster-services/compare-the-best-waste-disposal-solutions-near-you-bin-there-dump-that-vs-waste-management-vs-junk-king',
        permanent: true
      },
      {
        source: '/blog/the-absolute-best-mudroom-ideas-for-you-and-your-busy-family',
        destination: '/blog/home-improvement/the-absolute-best-mudroom-ideas-for-you-and-your-busy-family',
        permanent: true
      },
      {
        source: '/blog/dont-make-these-6-mistakes-while-installing-your-kitchen-cabinets',
        destination: '/blog/home-renovations/dont-make-these-6-mistakes-while-installing-your-kitchen-cabinets',
        permanent: true
      },
      {
        source: '/blog/how-to-save-time-and-money-removing-old-wallpaper',
        destination: '/blog/home-renovations/how-to-save-time-and-money-removing-old-wallpaper',
        permanent: true
      },
      {
        source: '/blog/how-to-responsibly-dispose-of-your-christmas-tree',
        destination: '/blog/seasonal-projects/how-to-responsibly-dispose-of-your-christmas-tree',
        permanent: true
      },
      {
        source: '/blog/6-tricks-to-make-your-bathroom-look-expensive',
        destination: '/blog/home-renovations/6-tricks-to-make-your-bathroom-look-expensive',
        permanent: true
      },
      {
        source: '/blog/how-building-sustainable-communities-actually-makes-a-difference',
        destination: '/blog/home-improvement/how-building-sustainable-communities-actually-makes-a-difference',
        permanent: true
      },
      {
        source: '/blog/maintain-a-green-lifestyle-why-we-should-avoid-food-waste',
        destination: '/blog/home-improvement/maintain-a-green-lifestyle-why-we-should-avoid-food-waste',
        permanent: true
      },
      {
        source: '/blog/how-to-properly-remove-old-appliances-in-an-easy-way',
        destination: '/blog/dumpster-services/how-to-properly-remove-old-appliances-in-an-easy-way',
        permanent: true
      },
      {
        source: '/blog/how-to-tile-your-bathroom-from-top-to-bottom',
        destination: '/blog/home-improvement/how-to-tile-your-bathroom-from-top-to-bottom',
        permanent: true
      },
      {
        source: '/blog/4-helpful-reasons-cleaning-services-benefit-from-using-bin-there-dump-that',
        destination: '/blog/dumpster-services/4-helpful-reasons-cleaning-services-benefit-from-using-bin-there-dump-that',
        permanent: true
      },
      {
        source: '/blog/from-water-damage-to-restoration-step-by-step-guide',
        destination: '/blog/home-renovations/from-water-damage-to-restoration-step-by-step-guide',
        permanent: true
      },
      {
        source: '/blog/6-easy-ways-to-update-your-home-on-a-budget',
        destination: '/blog/home-improvement/6-easy-ways-to-update-your-home-on-a-budget',
        permanent: true
      },
      
      // ===== OTHER PAGE REDIRECTS =====
      {
        source: '/dumpster-rentals-near-me',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/dumpster-rentals-near-me-2025',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/dumpster-rentals-near-me-prices',
        destination: '/pricing/dumpster-prices',
        permanent: true
      },
      {
        source: '/garbage-bin-rentals-near-me',
        destination: '/blog',
        permanent: true
      },
      // Note: garbage-bin-rentals-near-me post doesn't exist, redirecting to blog listing
      {
        source: '/rent-garbage-bins',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-garbage-bins post doesn't exist, redirecting to blog listing
      {
        source: '/rent-a-junk-dumpster',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-a-junk-dumpster post doesn't exist, redirecting to blog listing
      {
        source: '/trash-bin-rental-near-me',
        destination: '/blog',
        permanent: true
      },
      // Note: trash-bin-rental-near-me post doesn't exist, redirecting to blog listing
      {
        source: '/rent-a-dumpster-utah',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-a-dumpster-utah post doesn't exist, redirecting to blog listing
      {
        source: '/dumpster-rental-salt-lake-city',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      
      // ===== CITY PLURAL FORM REDIRECTS =====
      // Redirect plural form {city}-dumpster-rentals to canonical dumpster-rental-{city}-ut
      // Auto-generated: 2025-11-08
      {
        source: '/midvale-dumpster-rentals',
        destination: '/dumpster-rental-midvale-ut',
        permanent: true
      },
      {
        source: '/salt-lake-city-dumpster-rentals',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/murray-dumpster-rentals',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/sandy-dumpster-rentals',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/west-jordan-dumpster-rentals',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/south-jordan-dumpster-rentals',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/draper-dumpster-rentals',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/taylorsville-dumpster-rentals',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/west-valley-city-dumpster-rentals',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/millcreek-dumpster-rentals',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/provo-dumpster-rentals',
        destination: '/dumpster-rental-provo-ut',
        permanent: true
      },
      {
        source: '/orem-dumpster-rentals',
        destination: '/dumpster-rental-orem-ut',
        permanent: true
      },
      {
        source: '/ogden-dumpster-rentals',
        destination: '/dumpster-rental-ogden-ut',
        permanent: true
      },
      {
        source: '/layton-dumpster-rentals',
        destination: '/dumpster-rental-layton-ut',
        permanent: true
      },
      {
        source: '/bountiful-dumpster-rentals',
        destination: '/dumpster-rental-bountiful-ut',
        permanent: true
      },
      {
        source: '/herriman-dumpster-rentals',
        destination: '/dumpster-rental-herriman-ut',
        permanent: true
      },
      {
        source: '/riverton-dumpster-rentals',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/holladay-dumpster-rentals',
        destination: '/dumpster-rental-holladay-ut',
        permanent: true
      },
      {
        source: '/kearns-dumpster-rentals',
        destination: '/dumpster-rental-kearns-ut',
        permanent: true
      },
      {
        source: '/south-salt-lake-dumpster-rentals',
        destination: '/dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/north-salt-lake-dumpster-rentals',
        destination: '/dumpster-rental-north-salt-lake-ut',
        permanent: true
      },
      {
        source: '/cottonwood-heights-dumpster-rentals',
        destination: '/dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/park-city-dumpster-rentals',
        destination: '/dumpster-rental-park-city-ut',
        permanent: true
      },
      {
        source: '/lehi-dumpster-rentals',
        destination: '/dumpster-rental-lehi-ut',
        permanent: true
      },
      {
        source: '/american-fork-dumpster-rentals',
        destination: '/dumpster-rental-american-fork-ut',
        permanent: true
      },
      {
        source: '/spanish-fork-dumpster-rentals',
        destination: '/dumpster-rental-spanish-fork-ut',
        permanent: true
      },
      {
        source: '/springville-dumpster-rentals',
        destination: '/dumpster-rental-springville-ut',
        permanent: true
      },
      {
        source: '/roy-dumpster-rentals',
        destination: '/dumpster-rental-roy-ut',
        permanent: true
      },
      {
        source: '/syracuse-dumpster-rentals',
        destination: '/dumpster-rental-syracuse-ut',
        permanent: true
      },
      {
        source: '/woods-cross-dumpster-rentals',
        destination: '/dumpster-rental-woods-cross-ut',
        permanent: true
      },
      {
        source: '/saratoga-springs-dumpster-rentals',
        destination: '/dumpster-rental-saratoga-springs-ut',
        permanent: true
      },
      {
        source: '/centerville-dumpster-rentals',
        destination: '/dumpster-rental-centerville-ut',
        permanent: true
      },
      {
        source: '/clearfield-dumpster-rentals',
        destination: '/dumpster-rental-clearfield-ut',
        permanent: true
      },
      {
        source: '/farmington-dumpster-rentals',
        destination: '/dumpster-rental-farmington-ut',
        permanent: true
      },
      {
        source: '/kaysville-dumpster-rentals',
        destination: '/dumpster-rental-kaysville-ut',
        permanent: true
      },
      {
        source: '/magna-dumpster-rentals',
        destination: '/dumpster-rental-magna-ut',
        permanent: true
      },
      {
        source: '/sugar-house-dumpster-rentals',
        destination: '/dumpster-rental-sugar-house-ut',
        permanent: true
      },
      {
        source: '/downtown-salt-lake-dumpster-rentals',
        destination: '/dumpster-rental-downtown-salt-lake-ut',
        permanent: true
      },
      {
        source: '/fairpark-dumpster-rentals',
        destination: '/dumpster-rental-fairpark-ut',
        permanent: true
      },
      {
        source: '/glendale-dumpster-rentals',
        destination: '/dumpster-rental-glendale-ut',
        permanent: true
      },
      {
        source: '/poplar-grove-dumpster-rentals',
        destination: '/dumpster-rental-poplar-grove-ut',
        permanent: true
      },
      {
        source: '/rose-park-dumpster-rentals',
        destination: '/dumpster-rental-rose-park-ut',
        permanent: true
      },
      {
        source: '/emigration-canyon-dumpster-rentals',
        destination: '/dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/white-city-dumpster-rentals',
        destination: '/dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/cedar-hills-dumpster-rentals',
        destination: '/dumpster-rental-cedar-hills-ut',
        permanent: true
      },
      {
        source: '/woodland-hills-dumpster-rentals',
        destination: '/dumpster-rental-woodland-hills-ut',
        permanent: true
      },
      {
        source: '/eagle-mountain-dumpster-rentals',
        destination: '/dumpster-rental-eagle-mountain-ut',
        permanent: true
      },
      {
        source: '/bluffdale-dumpster-rentals',
        destination: '/dumpster-rental-bluffdale-ut',
        permanent: true
      },
      {
        source: '/brighton-dumpster-rentals',
        destination: '/dumpster-rental-brighton-ut',
        permanent: true
      },
      {
        source: '/west-haven-dumpster-rentals',
        destination: '/dumpster-rental-west-haven-ut',
        permanent: true
      },
      {
        source: '/copperton-dumpster-rentals',
        destination: '/dumpster-rental-copperton-ut',
        permanent: true
      },
      {
        source: '/clearfield-dumpster-rentals',
        destination: '/dumpster-rental-clearfield-ut',
        permanent: true
      },
      {
        source: '/price-dumpster-rentals',
        destination: '/dumpster-rental-price-ut',
        permanent: true
      },
      {
        source: '/nephi-dumpster-rentals',
        destination: '/dumpster-rental-nephi-ut',
        permanent: true
      },
      {
        source: '/heber-city-dumpster-rentals',
        destination: '/dumpster-rental-heber-city-ut',
        permanent: true
      },
      {
        source: '/highland-dumpster-rentals',
        destination: '/dumpster-rental-highland-ut',
        permanent: true
      },
      {
        source: '/pleasant-grove-dumpster-rentals',
        destination: '/dumpster-rental-pleasant-grove-ut',
        permanent: true
      },
      {
        source: '/alta-dumpster-rentals',
        destination: '/dumpster-rental-alta-ut',
        permanent: true
      },
      {
        source: '/payson-dumpster-rentals',
        destination: '/dumpster-rental-payson-ut',
        permanent: true
      },
      {
        source: '/logan-dumpster-rentals',
        destination: '/dumpster-rental-logan-ut',
        permanent: true
      },
      {
        source: '/vernal-dumpster-rentals',
        destination: '/dumpster-rental-vernal-ut',
        permanent: true
      },
      {
        source: '/genola-dumpster-rentals',
        destination: '/dumpster-rental-genola-ut',
        permanent: true
      },
      {
        source: '/west-bountiful-dumpster-rentals',
        destination: '/dumpster-rental-west-bountiful-ut',
        permanent: true
      },
      {
        source: '/clinton-dumpster-rentals',
        destination: '/dumpster-rental-clinton-ut',
        permanent: true
      },
      {
        source: '/cedar-city-dumpster-rentals',
        destination: '/dumpster-rental-cedar-city-ut',
        permanent: true
      },
      {
        source: '/mapleton-dumpster-rentals',
        destination: '/dumpster-rental-mapleton-ut',
        permanent: true
      },
      {
        source: '/alpine-dumpster-rentals',
        destination: '/dumpster-rental-alpine-ut',
        permanent: true
      },
      {
        source: '/tooele-dumpster-rentals',
        destination: '/dumpster-rental-tooele-ut',
        permanent: true
      },
      {
        source: '/richfield-dumpster-rentals',
        destination: '/dumpster-rental-richfield-ut',
        permanent: true
      },
      {
        source: '/lindon-dumpster-rentals',
        destination: '/dumpster-rental-lindon-ut',
        permanent: true
      },
      {
        source: '/moab-dumpster-rentals',
        destination: '/dumpster-rental-moab-ut',
        permanent: true
      },
      {
        source: '/st-george-dumpster-rentals',
        destination: '/dumpster-rental-st-george-ut',
        permanent: true
      },
      {
        source: '/vineyard-dumpster-rentals',
        destination: '/dumpster-rental-vineyard-ut',
        permanent: true
      },
      {
        source: '/santaquin-dumpster-rentals',
        destination: '/dumpster-rental-santaquin-ut',
        permanent: true
      },
      {
        source: '/granger-dumpster-rentals',
        destination: '/dumpster-rental-granger-ut',
        permanent: true
      },
      {
        source: '/brigham-city-dumpster-rentals',
        destination: '/dumpster-rental-brigham-city-ut',
        permanent: true
      },
      // Also redirect dumpster-rentals-{city} format
      {
        source: '/dumpster-rentals-midvale',
        destination: '/dumpster-rental-midvale-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-salt-lake-city',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-murray',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-sandy',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-west-jordan',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-south-jordan',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-draper',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-taylorsville',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-west-valley-city',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-west-valley',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-millcreek',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-provo',
        destination: '/dumpster-rental-provo-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-orem',
        destination: '/dumpster-rental-orem-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-ogden',
        destination: '/dumpster-rental-ogden-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-layton',
        destination: '/dumpster-rental-layton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-bountiful',
        destination: '/dumpster-rental-bountiful-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-herriman',
        destination: '/dumpster-rental-herriman-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-riverton',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-holladay',
        destination: '/dumpster-rental-holladay-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-kearns',
        destination: '/dumpster-rental-kearns-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-south-salt-lake',
        destination: '/dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-north-salt-lake',
        destination: '/dumpster-rental-north-salt-lake-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-cottonwood-heights',
        destination: '/dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-park-city',
        destination: '/dumpster-rental-park-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-lehi',
        destination: '/dumpster-rental-lehi-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-american-fork',
        destination: '/dumpster-rental-american-fork-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-spanish-fork',
        destination: '/dumpster-rental-spanish-fork-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-springville',
        destination: '/dumpster-rental-springville-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-roy',
        destination: '/dumpster-rental-roy-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-syracuse',
        destination: '/dumpster-rental-syracuse-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-woods-cross',
        destination: '/dumpster-rental-woods-cross-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-saratoga-springs',
        destination: '/dumpster-rental-saratoga-springs-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-centerville',
        destination: '/dumpster-rental-centerville-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-clearfield',
        destination: '/dumpster-rental-clearfield-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-farmington',
        destination: '/dumpster-rental-farmington-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-kaysville',
        destination: '/dumpster-rental-kaysville-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-magna',
        destination: '/dumpster-rental-magna-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-sugar-house',
        destination: '/dumpster-rental-sugar-house-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-downtown-salt-lake',
        destination: '/dumpster-rental-downtown-salt-lake-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-fairpark',
        destination: '/dumpster-rental-fairpark-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-glendale',
        destination: '/dumpster-rental-glendale-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-poplar-grove',
        destination: '/dumpster-rental-poplar-grove-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-rose-park',
        destination: '/dumpster-rental-rose-park-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-emigration-canyon',
        destination: '/dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-white-city',
        destination: '/dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-cedar-hills',
        destination: '/dumpster-rental-cedar-hills-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-woodland-hills',
        destination: '/dumpster-rental-woodland-hills-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-eagle-mountain',
        destination: '/dumpster-rental-eagle-mountain-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-bluffdale',
        destination: '/dumpster-rental-bluffdale-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-brighton',
        destination: '/dumpster-rental-brighton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-west-haven',
        destination: '/dumpster-rental-west-haven-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-copperton',
        destination: '/dumpster-rental-copperton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-price',
        destination: '/dumpster-rental-price-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-nephi',
        destination: '/dumpster-rental-nephi-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-heber-city',
        destination: '/dumpster-rental-heber-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-highland',
        destination: '/dumpster-rental-highland-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-pleasant-grove',
        destination: '/dumpster-rental-pleasant-grove-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-alta',
        destination: '/dumpster-rental-alta-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-payson',
        destination: '/dumpster-rental-payson-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-logan',
        destination: '/dumpster-rental-logan-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-vernal',
        destination: '/dumpster-rental-vernal-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-genola',
        destination: '/dumpster-rental-genola-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-west-bountiful',
        destination: '/dumpster-rental-west-bountiful-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-clinton',
        destination: '/dumpster-rental-clinton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-cedar-city',
        destination: '/dumpster-rental-cedar-city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-mapleton',
        destination: '/dumpster-rental-mapleton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-alpine',
        destination: '/dumpster-rental-alpine-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-tooele',
        destination: '/dumpster-rental-tooele-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-richfield',
        destination: '/dumpster-rental-richfield-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-lindon',
        destination: '/dumpster-rental-lindon-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-moab',
        destination: '/dumpster-rental-moab-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-st-george',
        destination: '/dumpster-rental-st-george-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-vineyard',
        destination: '/dumpster-rental-vineyard-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-santaquin',
        destination: '/dumpster-rental-santaquin-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-granger',
        destination: '/dumpster-rental-granger-ut',
        permanent: true
      },
      {
        source: '/dumpster-rentals-brigham-city',
        destination: '/dumpster-rental-brigham-city-ut',
        permanent: true
      },
      {
        source: '/what-size-dumpster-for-a-roof',
        destination: '/blog/dumpster-services/what-size-dumpster-for-a-roof',
        permanent: true
      },
      {
        source: '/utah-wide-coverage',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/salt-lake-county-dumpster-rental',
        destination: '/locations',
        permanent: true
      },
      {
        source: '/rating',
        destination: '/',
        permanent: true
      },
      {
        source: '/construction-dumpster-rental-guide-2025',
        destination: '/blog',
        permanent: true
      },
      // Note: construction-dumpster-rental-guide-2025 post exists in BlogClient but not in posts-metadata.json, redirecting to blog listing
      {
        source: '/commercial-dumpster-rental-business-solutions',
        destination: '/blog/commercial-dumpster-rental-business-solutions',
        permanent: true
      },
      
      // ===== CITY-SPECIFIC SERVICE PAGE REDIRECTS =====
      // Redirect city-specific service pages to main city pages
      {
        source: '/services/residential-dumpster-rental-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/services/residential-dumpster-rental-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/services/residential-dumpster-rental-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/services/residential-dumpster-rental-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/services/residential-dumpster-rental-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/services/residential-dumpster-rental-orem-ut',
        destination: '/dumpster-rental-orem-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-orem-ut',
        destination: '/dumpster-rental-orem-ut',
        permanent: true
      },
      {
        source: '/services/commercial-dumpster-rental-provo-ut',
        destination: '/dumpster-rental-provo-ut',
        permanent: true
      },
      
      // ===== SERVICE-SPECIFIC CITY PAGE REDIRECTS =====
      // Redirect service-specific city pages to main city pages
      {
        source: '/same-day-dumpster-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-west-valley-city-ut',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-taylorsville-ut',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-millcreek-ut',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-draper-ut',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-riverton-ut',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-west-valley-city-ut',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-taylorsville-ut',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-millcreek-ut',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-draper-ut',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/restaurant-cleanout-riverton-ut',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-west-valley-city-ut',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-taylorsville-ut',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-millcreek-ut',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-draper-ut',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/rv-cleanout-riverton-ut',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-salt-lake-city-ut',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-west-jordan-ut',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-sandy-ut',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-murray-ut',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-west-valley-city-ut',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-taylorsville-ut',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-millcreek-ut',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-draper-ut',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/disaster-cleanup-riverton-ut',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-taylorsville-ut',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-draper-ut',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-millcreek-ut',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-riverton-ut',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-near-me-west-valley-city-ut',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      
      // ===== CITY PAGES WITHOUT PREFIX (HIGH PRIORITY - 8-28 ORGANIC TRAFFIC) =====
      {
        source: '/sandy',
        destination: '/dumpster-rental-sandy-ut',
        permanent: true
      },
      {
        source: '/salt-lake-city',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/murray',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/murray-city-dumpster-program',
        destination: '/dumpster-rental-murray-ut',
        permanent: true
      },
      {
        source: '/west-jordan',
        destination: '/dumpster-rental-west-jordan-ut',
        permanent: true
      },
      {
        source: '/south-jordan',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/millcreek',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      {
        source: '/alta',
        destination: '/dumpster-rental-alta-ut',
        permanent: true
      },
      {
        source: '/american-fork',
        destination: '/dumpster-rental-american-fork-ut',
        permanent: true
      },
      {
        source: '/bluffdale',
        destination: '/dumpster-rental-bluffdale-ut',
        permanent: true
      },
      {
        source: '/bountiful',
        destination: '/dumpster-rental-bountiful-ut',
        permanent: true
      },
      {
        source: '/brighton',
        destination: '/dumpster-rental-brighton-ut',
        permanent: true
      },
      {
        source: '/cedar-city',
        destination: '/dumpster-rental-cedar-city-ut',
        permanent: true
      },
      {
        source: '/centerville',
        destination: '/dumpster-rental-centerville-ut',
        permanent: true
      },
      {
        source: '/clearfield',
        destination: '/dumpster-rental-clearfield-ut',
        permanent: true
      },
      {
        source: '/copperton',
        destination: '/dumpster-rental-copperton-ut',
        permanent: true
      },
      {
        source: '/cottonwood-heights',
        destination: '/dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/downtown-salt-lake',
        destination: '/dumpster-rental-downtown-salt-lake-ut',
        permanent: true
      },
      {
        source: '/draper',
        destination: '/dumpster-rental-draper-ut',
        permanent: true
      },
      {
        source: '/eagle-mountain',
        destination: '/dumpster-rental-eagle-mountain-ut',
        permanent: true
      },
      {
        source: '/emigration-canyon',
        destination: '/dumpster-rental-emigration-canyon-ut',
        permanent: true
      },
      {
        source: '/fairpark',
        destination: '/dumpster-rental-fairpark-ut',
        permanent: true
      },
      {
        source: '/farmington',
        destination: '/dumpster-rental-farmington-ut',
        permanent: true
      },
      {
        source: '/genola',
        destination: '/dumpster-rental-genola-ut',
        permanent: true
      },
      {
        source: '/glendale',
        destination: '/dumpster-rental-glendale-ut',
        permanent: true
      },
      {
        source: '/granger',
        destination: '/dumpster-rental-granger-ut',
        permanent: true
      },
      {
        source: '/heber-city',
        destination: '/dumpster-rental-heber-city-ut',
        permanent: true
      },
      {
        source: '/herriman',
        destination: '/dumpster-rental-herriman-ut',
        permanent: true
      },
      {
        source: '/highland',
        destination: '/dumpster-rental-highland-ut',
        permanent: true
      },
      {
        source: '/holladay',
        destination: '/dumpster-rental-holladay-ut',
        permanent: true
      },
      {
        source: '/kaysville',
        destination: '/dumpster-rental-kaysville-ut',
        permanent: true
      },
      {
        source: '/kearns',
        destination: '/dumpster-rental-kearns-ut',
        permanent: true
      },
      {
        source: '/layton',
        destination: '/dumpster-rental-layton-ut',
        permanent: true
      },
      {
        source: '/lehi',
        destination: '/dumpster-rental-lehi-ut',
        permanent: true
      },
      {
        source: '/lindon',
        destination: '/dumpster-rental-lindon-ut',
        permanent: true
      },
      {
        source: '/logan',
        destination: '/dumpster-rental-logan-ut',
        permanent: true
      },
      {
        source: '/magna',
        destination: '/dumpster-rental-magna-ut',
        permanent: true
      },
      {
        source: '/midvale',
        destination: '/dumpster-rental-midvale-ut',
        permanent: true
      },
      {
        source: '/north-salt-lake',
        destination: '/dumpster-rental-north-salt-lake-ut',
        permanent: true
      },
      {
        source: '/ogden',
        destination: '/dumpster-rental-ogden-ut',
        permanent: true
      },
      {
        source: '/orem',
        destination: '/dumpster-rental-orem-ut',
        permanent: true
      },
      {
        source: '/park-city',
        destination: '/dumpster-rental-park-city-ut',
        permanent: true
      },
      {
        source: '/pleasant-grove',
        destination: '/dumpster-rental-pleasant-grove-ut',
        permanent: true
      },
      {
        source: '/poplar-grove',
        destination: '/dumpster-rental-poplar-grove-ut',
        permanent: true
      },
      {
        source: '/price',
        destination: '/dumpster-rental-price-ut',
        permanent: true
      },
      {
        source: '/provo',
        destination: '/dumpster-rental-provo-ut',
        permanent: true
      },
      {
        source: '/riverton',
        destination: '/dumpster-rental-riverton-ut',
        permanent: true
      },
      {
        source: '/roy',
        destination: '/dumpster-rental-roy-ut',
        permanent: true
      },
      {
        source: '/saratoga-springs',
        destination: '/dumpster-rental-saratoga-springs-ut',
        permanent: true
      },
      {
        source: '/south-salt-lake',
        destination: '/dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      {
        source: '/spanish-fork',
        destination: '/dumpster-rental-spanish-fork-ut',
        permanent: true
      },
      {
        source: '/springville',
        destination: '/dumpster-rental-springville-ut',
        permanent: true
      },
      {
        source: '/sugar-house',
        destination: '/dumpster-rental-sugar-house-ut',
        permanent: true
      },
      {
        source: '/syracuse',
        destination: '/dumpster-rental-syracuse-ut',
        permanent: true
      },
      {
        source: '/taylorsville',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/tooel',
        destination: '/dumpster-rental-tooel-ut',
        permanent: true
      },
      {
        source: '/tooele',
        destination: '/dumpster-rental-tooele-ut',
        permanent: true
      },
      {
        source: '/vernal',
        destination: '/dumpster-rental-vernal-ut',
        permanent: true
      },
      {
        source: '/west-bountiful',
        destination: '/dumpster-rental-west-bountiful-ut',
        permanent: true
      },
      {
        source: '/west-valley-city',
        destination: '/dumpster-rental-west-valley-city-ut',
        permanent: true
      },
      {
        source: '/white-city',
        destination: '/dumpster-rental-white-city-ut',
        permanent: true
      },
      {
        source: '/woods-cross',
        destination: '/dumpster-rental-woods-cross-ut',
        permanent: true
      },
      
      // ===== BLOG POSTS WITH INCORRECT URLS - REDIRECT TO CORRECT LOCATIONS =====
      // City pages incorrectly in blog
      {
        source: '/blog/dumpster-services/dumpster-rental-south-jordan-ut',
        destination: '/dumpster-rental-south-jordan-ut',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/dumpster-rental-alpine-ut',
        destination: '/dumpster-rental-alpine-ut',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/dumpster-rental-salt-lake-city',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/dumpster-rental-south-salt-lake-ut',
        destination: '/dumpster-rental-south-salt-lake-ut',
        permanent: true
      },
      
      // Calculator pages incorrectly in blog
      {
        source: '/blog/dumpster-volume-calculator',
        destination: '/calculators/volume-calculator',
        permanent: true
      },
      {
        source: '/blog/roofing-dumpster-calculator',
        destination: '/calculators/roofing-calculator',
        permanent: true
      },
      {
        source: '/blog/demolition-dumpster-calculator',
        destination: '/calculators/demolition-calculator',
        permanent: true
      },
      {
        source: '/blog/concrete-debris-calculator',
        destination: '/calculators/concrete-calculator',
        permanent: true
      },
      {
        source: '/blog/dumpster-calculator-for-concrete',
        destination: '/dumpster-calculator-for-concrete',
        permanent: true
      },
      {
        source: '/blog/yard-landscaping/30-yard-dumpster-rental-calculator',
        destination: '/calculators/dumpster-size-calculator',
        permanent: true
      },
      
      // Guide pages incorrectly in blog
      {
        source: '/blog/dumpster-services/rolloff-dumpster-guide-2025',
        destination: '/guides/rolloff-dumpster-guide',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/construction-dumpster-rental-guide-2025',
        destination: '/blog',
        permanent: true
      },
      // Note: This post exists in BlogClient but not in posts-metadata.json, redirecting to blog listing
      {
        source: '/blog/construction-waste-management-guide',
        destination: '/guides/construction-waste-management',
        permanent: true
      },
      
      // Blog posts with incorrect category paths
      {
        source: '/blog/decluttering-cleanouts/estimate-right-dumpster-size-home-cleanout',
        destination: '/estimate-right-dumpster-size-home-cleanout',
        permanent: true
      },
      {
        source: '/blog/home-renovations/home-renovation-waste-disposal-complete-guide',
        destination: '/home-renovation-waste-disposal-complete-guide',
        permanent: true
      },
      {
        source: '/blog/home-renovations/home-renovation-waste-disposal-guide',
        destination: '/home-renovation-waste-disposal-guide',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/commercial-dumpster-rental-business-solutions-2025',
        destination: '/commercial-dumpster-rental-business-solutions-2025',
        permanent: true
      },
      {
        source: '/blog/salt-lake-county-dumpster-program',
        destination: '/blog',
        permanent: true
      },
      // Note: salt-lake-county-dumpster-program post doesn't exist, redirecting to blog listing
      {
        source: '/blog/garbage-bin-rentals-near-me',
        destination: '/blog',
        permanent: true
      },
      // Note: garbage-bin-rentals-near-me post doesn't exist, redirecting to blog listing
      {
        source: '/blog/trash-bin-rental-near-me',
        destination: '/blog',
        permanent: true
      },
      // Note: trash-bin-rental-near-me post doesn't exist, redirecting to blog listing
      {
        source: '/blog/rent-a-junk-dumpster',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-a-junk-dumpster post doesn't exist, redirecting to blog listing
      {
        source: '/blog/rent-a-dumpster-utah',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-a-dumpster-utah post doesn't exist, redirecting to blog listing
      // Note: what-size-dumpster-for-a-roof - redirect removed as it redirects to itself
      // If this post doesn't exist, it should be added to posts-metadata.json or redirected to /blog
      {
        source: '/blog/dumpster-services/commercial-dumpster-rental-business-solutions',
        destination: '/blog',
        permanent: true
      },
      // Note: commercial-dumpster-rental-business-solutions post doesn't exist, redirecting to blog listing
      {
        source: '/blog/roll-off-dumpster-business-profit-margin',
        destination: '/roll-off-dumpster-business-profit-margin',
        permanent: true
      },
      {
        source: '/blog/waste-management-dumpster-prohibited-items',
        destination: '/waste-management-dumpster-prohibited-items',
        permanent: true
      },
      {
        source: '/blog/rent-garbage-bins',
        destination: '/blog',
        permanent: true
      },
      // Note: rent-garbage-bins post doesn't exist, redirecting to blog listing
      {
        source: '/blog/dumpster-services/dumpster-rental-for-residential-use',
        destination: '/dumpster-rental-for-residential-use',
        permanent: true
      },
      {
        source: '/blog/dumpster-services/bin-dumpster-rental',
        destination: '/bin-dumpster-rental',
        permanent: true
      },
      
      // Weight pages incorrectly in blog
      {
        source: '/blog/yard-landscaping/how-much-does-a-15-yard-dumpster-weight-empty',
        destination: '/how-much-does-a-15-yard-dumpster-weight-empty',
        permanent: true
      },
      {
        source: '/blog/yard-landscaping/how-much-does-a-20-yard-dumpster-weight-empty',
        destination: '/how-much-does-a-20-yard-dumpster-weight-empty',
        permanent: true
      },
      {
        source: '/blog/yard-landscaping/how-much-does-a-30-yard-dumpster-weight-empty',
        destination: '/how-much-does-a-30-yard-dumpster-weight-empty',
        permanent: true
      },
      
      // ===== 404 FIXES - SIZE-SPECIFIC CITY PAGES =====
      // Redirect size-specific city pages to main city page
      {
        source: '/:size(15|20|30|40)-yard-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD URL PATTERNS =====
      // Redirect old utah-dumpster-rental-* patterns
      {
        source: '/utah-dumpster-rental-:city',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect old slc-dumpster-rental-* patterns (case-insensitive)
      {
        source: '/slc-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect roll-off-dumpster-rental-* patterns (without -ut)
      {
        source: '/roll-off-dumpster-rental-:city',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect roll-off-dumpster-rental-* patterns (with -ut)
      {
        source: '/roll-off-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect rolloff-dumpster-rental-* patterns
      {
        source: '/rolloff-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/rolloff-dumpster-rental-:city',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - SERVICE-SPECIFIC CITY PAGES =====
      // Redirect service-specific city pages to main city page
      {
        source: '/junk-removal-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/garage-cleanout-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/basement-cleanout-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/furniture-disposal-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/moving-cleanup-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/emergency-cleanup-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/same-day-dumpster-delivery-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/demolition-waste-disposal-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/construction-waste-management-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/yard-waste-removal-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - COUNTY/CITY NESTED PAGES =====
      // Redirect county/city nested pages to main city page
      {
        source: '/dumpster-rental-salt-lake-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-davis-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-weber-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-utah-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-summit-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-wasatch-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-cache-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-tooele-county-ut/:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - CITIES WITH /SERVICES SUFFIX =====
      {
        source: '/:city-dumpster-rentals/services',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect {city}-dumpster-rental-guide-2025 to dumpster-rental-{city}-ut
      // Note: This pattern matches paths like /midvale-dumpster-rental-guide-2025
      // The :city parameter will capture the city name (e.g., "midvale")
      {
        source: '/:city-dumpster-rental-guide-2025',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - DUMPSTER-RENTAL-NEAR-ME VARIATIONS =====
      // Redirect dumpster-rental-near-* (without -me) to main city page
      {
        source: '/dumpster-rental-near-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD DUMPSTER-RENTALS PATTERNS =====
      {
        source: '/dumpster-rentals-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD GUIDE PATTERNS =====
      {
        source: '/:city-ut-dumpster-rental-guide',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - INVALID URLs =====
      {
        source: '/&',
        destination: '/',
        permanent: true
      },
      {
        source: '/$',
        destination: '/',
        permanent: true
      },
      {
        source: '/config',
        destination: '/',
        permanent: true
      },
      {
        source: '/lib',
        destination: '/',
        permanent: true
      },
      {
        source: '/api-test',
        destination: '/',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD RESOURCE URLs =====
      {
        source: '/icon-dumpsters-articles',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/company-resources',
        destination: '/',
        permanent: true
      },
      {
        source: '/residential-dumpsters',
        destination: '/services/residential-dumpster-rental',
        permanent: true
      },
      {
        source: '/what-size-dumpster-for-a-roof',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/midvale-city-dumpster-program',
        destination: '/dumpster-rental-midvale-ut',
        permanent: true
      },
      {
        source: '/dumpster-rental-sizes',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/dumpster-rental-guide',
        destination: '/dumpster-rental-101',
        permanent: true
      },
      {
        source: '/dumpster-rental-tips',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/dumpster-rental-process',
        destination: '/schedule-delivery-pickup',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD COUNTY PATTERNS =====
      {
        source: '/wasatch-county-dumpster-rentals',
        destination: '/dumpster-rental-heber-city-ut',
        permanent: true
      },
      {
        source: '/utah-county-dumpster-rentals',
        destination: '/dumpster-rental-provo-ut',
        permanent: true
      },
      {
        source: '/salt-lake-county-dumpster-rentals',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/summit-county-dumpster-rentals',
        destination: '/dumpster-rental-park-city-ut',
        permanent: true
      },
      {
        source: '/brighton-dumpster-rentals',
        destination: '/dumpster-rental-brighton-ut',
        permanent: true
      },
      {
        source: '/cottonwood-heights-dumpster-rentals',
        destination: '/dumpster-rental-cottonwood-heights-ut',
        permanent: true
      },
      {
        source: '/heber-city-dumpster-rentals',
        destination: '/dumpster-rental-heber-city-ut',
        permanent: true
      },
      {
        source: '/highland-dumpster-rentals',
        destination: '/dumpster-rental-highland-ut',
        permanent: true
      },
      {
        source: '/cedar-hills-dumpster-rentals',
        destination: '/dumpster-rental-cedar-hills-ut',
        permanent: true
      },
      {
        source: '/clinton-dumpster-rentals',
        destination: '/dumpster-rental-clinton-ut',
        permanent: true
      },
      {
        source: '/richfield-dumpster-rentals',
        destination: '/dumpster-rental-richfield-ut',
        permanent: true
      },
      {
        source: '/rose-park-dumpster-rentals',
        destination: '/dumpster-rental-rose-park-ut',
        permanent: true
      },
      {
        source: '/vernal-dumpster-rentals',
        destination: '/dumpster-rental-vernal-ut',
        permanent: true
      },
      {
        source: '/moab-dumpster-rentals',
        destination: '/dumpster-rental-moab-ut',
        permanent: true
      },
      {
        source: '/price-dumpster-rentals',
        destination: '/dumpster-rental-price-ut',
        permanent: true
      },
      {
        source: '/logan-dumpster-rentals',
        destination: '/dumpster-rental-logan-ut',
        permanent: true
      },
      {
        source: '/cedar-city-dumpster-rentals',
        destination: '/dumpster-rental-cedar-city-ut',
        permanent: true
      },
      {
        source: '/nephi-dumpster-rentals',
        destination: '/dumpster-rental-nephi-ut',
        permanent: true
      },
      {
        source: '/alta-dumpster-rentals',
        destination: '/dumpster-rental-alta-ut',
        permanent: true
      },
      {
        source: '/bluffdale-dumpster-rentals',
        destination: '/dumpster-rental-bluffdale-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD CITY PATTERNS (simple city names) =====
      // These are handled by middleware, but adding explicit redirects for redundancy
      {
        source: '/payson',
        destination: '/dumpster-rental-payson-ut',
        permanent: true
      },
      {
        source: '/brigham-city',
        destination: '/dumpster-rental-brigham-city-ut',
        permanent: true
      },
      {
        source: '/vineyard',
        destination: '/dumpster-rental-vineyard-ut',
        permanent: true
      },
      {
        source: '/nephi',
        destination: '/dumpster-rental-nephi-ut',
        permanent: true
      },
      {
        source: '/moab',
        destination: '/dumpster-rental-moab-ut',
        permanent: true
      },
      {
        source: '/clinton',
        destination: '/dumpster-rental-clinton-ut',
        permanent: true
      },
      {
        source: '/alpine',
        destination: '/dumpster-rental-alpine-ut',
        permanent: true
      },
      {
        source: '/cedar-hills',
        destination: '/dumpster-rental-cedar-hills-ut',
        permanent: true
      },
      {
        source: '/woodland-hills',
        destination: '/dumpster-rental-woodland-hills-ut',
        permanent: true
      },
      {
        source: '/santaquin',
        destination: '/dumpster-rental-santaquin-ut',
        permanent: true
      },
      {
        source: '/mapleton',
        destination: '/dumpster-rental-mapleton-ut',
        permanent: true
      },
      
      // ===== 404 FIXES - OLD ROLL-OFF PATTERNS (without -ut) =====
      {
        source: '/roll-off-dumpster-rental-brighton',
        destination: '/dumpster-rental-brighton-ut',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-taylorsville',
        destination: '/dumpster-rental-taylorsville-ut',
        permanent: true
      },
      {
        source: '/roll-off-dumpster-rental-millcreek',
        destination: '/dumpster-rental-millcreek-ut',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - CITIES ROUTES =====
      // Redirect /cities/{city}/dumpster-rental to canonical /dumpster-rental-{city}-ut
      // Note: There's already a redirect at line 279, but this ensures it works for all cities
      {
        source: '/cities/:city/dumpster-rental',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect /cities/{city} (without dumpster-rental) to canonical city page
      {
        source: '/cities/:city',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - SERVICE-SPECIFIC CITY PAGES =====
      // Redirect all residential service city pages to canonical city page
      {
        source: '/services/residential-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      // Redirect all commercial service city pages to canonical city page
      {
        source: '/services/commercial-dumpster-rental-:city-ut',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - GUIDE PAGES =====
      // Redirect city guide pages to canonical city page
      {
        source: '/:city-dumpster-rental-guide-2025',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      {
        source: '/:city-ut-dumpster-rental-guide',
        destination: '/dumpster-rental-:city-ut',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - TEST/INVALID URLs =====
      {
        source: '/test-email',
        destination: '/',
        permanent: true
      },
      {
        source: '/simple-test',
        destination: '/',
        permanent: true
      },
      {
        source: '/test-route',
        destination: '/',
        permanent: true
      },
      {
        source: '/load-dumpster-and-schedule-pickup',
        destination: '/schedule-delivery-pickup',
        permanent: true
      },
      {
        source: '/dumpster-calculator/quote',
        destination: '/free-quote',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - QUERY PARAMETER URLs =====
      // Redirect URLs with search query parameters to homepage
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'q',
          },
        ],
        destination: '/',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - OLD FEATURE PAGES =====
      {
        source: '/on-time-dumpster-delivery',
        destination: '/services',
        permanent: true
      },
      {
        source: '/friendly-live-help',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/accurate-weight-based-billing',
        destination: '/pricing',
        permanent: true
      },
      {
        source: '/sell-house',
        destination: '/services',
        permanent: true
      },
      {
        source: '/choose-dumpster-size',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/multiple-sizes-available',
        destination: '/guides/dumpster-sizes',
        permanent: true
      },
      {
        source: '/expert-customer-service',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/property-protection',
        destination: '/services',
        permanent: true
      },
      {
        source: '/professional-waste-removal',
        destination: '/services',
        permanent: true
      },
      {
        source: '/utah-wide-coverage',
        destination: '/locations',
        permanent: true
      },
      
      // ===== CANONICAL FIXES - OLD RESOURCE PAGES =====
      {
        source: '/smart-disposal-tips-how-to-create-and-use-compost',
        destination: '/blog/home-improvement/smart-disposal-tips-how-to-create-and-use-compost',
        permanent: true
      },
      {
        source: '/15-winter-home-improvement-projects-you-can-actually-do-this-season',
        destination: '/blog/seasonal-projects/15-winter-home-improvement-projects-you-can-actually-do-this-season',
        permanent: true
      },
      {
        source: '/retail-renovation-dumpster-guide',
        destination: '/guides/retail-renovation-guide',
        permanent: true
      },
      {
        source: '/park-renovation-projects',
        destination: '/services',
        permanent: true
      },
      {
        source: '/salt-lake-county-dumpster-rental',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/downtown-salt-lake-dumpster-rental-guide-2025',
        destination: '/dumpster-rental-salt-lake-city-ut',
        permanent: true
      },
      {
        source: '/tooel-dumpster-rental-guide-2025',
        destination: '/dumpster-rental-tooele-ut',
        permanent: true
      },
      {
        source: '/freequote',
        destination: '/free-quote',
        permanent: true
      },
      ];
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(self)'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://js.stripe.com https://js.stripe.com/v3 https://vercel.live; script-src-elem 'self' 'unsafe-inline' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://js.stripe.com https://js.stripe.com/v3 https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: https://www.google-analytics.com https://www.google.com https://analytics.ahrefs.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://api.stripe.com; frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://js.stripe.com https://hooks.stripe.com https://vercel.live; object-src 'none'; base-uri 'self';"
          }
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        // Performance: Cache blog posts for 1 hour with stale-while-revalidate
        source: '/blog/:category/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          }
        ],
      }
    ];
  },
};

module.exports = nextConfig;

