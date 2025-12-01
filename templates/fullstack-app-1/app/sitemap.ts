import type { MetadataRoute } from 'next'
import { getAllCitySlugs } from './config/cityData'

// Sitemap with only /dumpster-rental-{city}-ut city pages
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://icondumpsters.com'
  const now = new Date().toISOString()

  // Get all cities from cityData
  const cities = getAllCitySlugs();

  const counties = [
    'salt-lake-county', 'utah-county', 'davis-county', 'weber-county', 'summit-county',
    'tooele-county', 'wasatch-county', 'cache-county'
  ];

  const dumpsterSizes = ['10-yard', '15-yard', '20-yard', '30-yard', '40-yard'];

  const urls: MetadataRoute.Sitemap = [
    // ===== HOMEPAGE & CORE PAGES =====
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/book`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/free-quote`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    // ===== SERVICES =====
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/services/residential-dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/commercial-dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/construction-dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/roll-off-dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/industrial-dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/garbage-junk-bin-rentals`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/yard-waste-debris-bin-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/construction-waste-management`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/demolition-waste-disposal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/garage-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/junk-removal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/same-day-dumpster-delivery`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/yard-waste-removal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/downsizing-dumpster-rentals`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/condo-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/disaster-cleanup`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/eviction-cleanup`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/event-cleanup`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/mobile-home-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/mold-remediation`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/restaurant-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/retail-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/rv-cleanout`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/services/electronic-waste-disposal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    
    // ===== PRICING PAGES =====
    { url: `${base}/pricing/dumpster-prices`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/pricing/competitive-pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/pricing/dumpster-rental-costs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/pricing/no-hidden-fees`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/pricing/transparent-pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    
    // ===== GUIDES & RESOURCES =====
    { url: `${base}/dumpster-rental-101`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dumpster-rental-faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/dumpster-sizes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/dumpster-rental-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/dumpster-size-guide-utah`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/construction-waste-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/home-renovation`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/retail-renovation-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/rolloff-dumpster-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guides/utah-permits`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    
    // ===== CALCULATORS =====
    { url: `${base}/dumpster-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dumpster-calculator/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/calculators/cost-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/demolition-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/dumpster-size-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/roofing-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/tonnage-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/concrete-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/calculators/volume-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/dumpster-calculator-for-concrete`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    
    // ===== ADDITIONAL RESOURCES =====
    { url: `${base}/choose-dumpster-size`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/dumpster-sizes-1`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/accurate-weight-based-billing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/friendly-live-help`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/multiple-sizes-available`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/on-time-dumpster-delivery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/professional-waste-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/property-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/utah-waste-management-regulations`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/home-renovation-waste-disposal-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/home-renovation-waste-disposal-complete-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/construction-waste-management-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/demolition-dumpster`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    
    // ===== PRICING RESOURCES =====
    { url: `${base}/fees`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    
    // ===== LEGAL PAGES =====
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    
    // ===== BLOG =====
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Add ONLY /dumpster-rental-{city}-ut pages for all cities
  // Only include cities that exist and are indexable (not noindex)
  cities.forEach(city => {
    // Only add cities that are valid and indexable
    // Invalid cities are already filtered out by getAllCitySlugs()
    urls.push({
      url: `${base}/dumpster-rental-${city}-ut`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Add size pages (main only)
  dumpsterSizes.forEach(size => {
    urls.push({
      url: `${base}/${size}-dumpster-rental`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Removed county pages - they are redirects (308) and should not be in sitemap
  // County pages redirect to city pages, so they don't need to be indexed

  // Removed old/outdated service pages that no longer exist
  // Removed old guide pages that no longer exist
  // Removed old city program pages that no longer exist
  // Removed old weight information pages that no longer exist
  // Removed old location-specific pages that no longer exist
  // Removed old calculator pages that no longer exist

  // No console.log in production sitemap
  return urls
}







