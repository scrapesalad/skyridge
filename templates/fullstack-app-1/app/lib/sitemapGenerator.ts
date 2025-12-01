import { MetadataRoute } from 'next';

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// City data for sitemap generation
const cities = [
  'salt-lake-city', 'west-valley-city', 'provo', 'west-jordan', 'orem', 'sandy', 'ogden',
  'layton', 'taylorsville', 'millcreek', 'south-jordan', 'lehi', 'riverton',
  'murray', 'draper', 'bountiful', 'midvale', 'herriman', 'spanish-fork', 'roy', 'cottonwood-heights',
  'kearns', 'tooele', 'clearfield', 'kaysville', 'holladay', 'american-fork', 'syracuse',
  'magna', 'saratoga-springs', 'south-salt-lake', 'pleasant-grove', 'farmington', 'north-salt-lake',
  'eagle-mountain', 'clinton', 'west-bountiful', 'woods-cross', 'centerville', 'park-city',
  'heber-city', 'logan', 'brigham-city', 'cedar-city', 'price', 'vernal', 'richfield',
  'nephi', 'moab', 'bluffdale', 'alpine', 'highland', 'lindon', 'mapleton', 'payson',
  'santaquin', 'springville', 'vineyard', 'woodland-hills', 'genola', 'cedar-hills'
];

const serviceTypes = ['residential', 'commercial'];

export function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://icondumpsters.com';
  const sitemap: SitemapEntry[] = [];

  // Main pages
  const mainPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/dumpster-sizes', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/dumpster-prices', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/free-quote', priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  // Calculator and utility pages
  const utilityPages = [
    { url: '/dumpster-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/dumpster-size-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/dumpster-volume-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/concrete-debris-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/demolition-dumpster-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/roofing-dumpster-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/tonnage-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Blog and guide pages
  const blogPages = [
    { url: '/dumpster-rental-guide-2025', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/complete-dumpster-rental-guide-2025', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/construction-waste-management-2025', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/home-renovation-waste-disposal-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/utah-dumpster-permits-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/rolloff-dumpster-guide-2025', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/park-renovation-projects', priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  // Add main pages
  mainPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Add utility pages
  utilityPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Add blog pages
  blogPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Add city pages
  cities.forEach(city => {
    // Main city page
    sitemap.push({
      url: `${baseUrl}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // City dumpster rental page
    sitemap.push({
      url: `${baseUrl}/dumpster-rental-${city}-ut`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // City dumpster rentals page
    sitemap.push({
      url: `${baseUrl}/${city}-dumpster-rentals`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // City guide page
    sitemap.push({
      url: `${baseUrl}/${city}-dumpster-rental-guide-2025`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });

    // Service pages for each city
    serviceTypes.forEach(serviceType => {
      sitemap.push({
        url: `${baseUrl}/services/${serviceType}-dumpster-rental-${city}-ut`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Add county pages
  const counties = [
    'salt-lake-county', 'utah-county', 'davis-county', 'weber-county', 'summit-county',
    'tooele-county', 'wasatch-county', 'cache-county'
  ];

  counties.forEach(county => {
    sitemap.push({
      url: `${baseUrl}/dumpster-rental-${county}-ut`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemap;
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://icondumpsters.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /inventory/
Disallow: /kpi-dashboard/
Disallow: /api-test/
Disallow: /test/
Disallow: /test-*/
Disallow: /simple-test/

# Allow important pages
Allow: /services/
Allow: /dumpster-*/
Allow: /*-dumpster-*/
Allow: /contact
Allow: /faq
Allow: /reviews
Allow: /locations
Allow: /free-quote

# Crawl delay (optional)
Crawl-delay: 1`;
}
