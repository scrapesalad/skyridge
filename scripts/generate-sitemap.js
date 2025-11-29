/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml from filesystem scan
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const { loadConfig } = require('./config-loader');

const config = loadConfig();
const SITE = config.site.url || 'https://Place-website-domain-here';
const ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(ROOT, config.seo.sitemap.path || 'sitemap.xml');

// Directories to scan
const PAGES_DIR = path.join(ROOT, 'pages');
const CITIES_DIR = path.join(ROOT, 'pages', 'cities');
const SERVICES_DIR = path.join(ROOT, 'pages', 'services');
const CONTRACTOR_DIR = path.join(ROOT, 'pages', 'contractor');

/**
 * Get file modification date as ISO string
 */
function getLastMod(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Convert file path to URL path
 */
function pathToUrl(filePath) {
  const relative = path.relative(ROOT, filePath).replace(/\\/g, '/');
  
  // Homepage
  if (relative === 'index.html') {
    return '/';
  }
  
  // Remove .html extension and convert to URL
  let url = relative.replace(/\.html$/, '');
  
  // Ensure leading slash
  if (!url.startsWith('/')) {
    url = '/' + url;
  }
  
  return url;
}

/**
 * Determine priority based on path
 */
function getPriority(url) {
  if (url === '/') return '1.0';
  if (url.startsWith('/pages/services')) return '0.9';
  if (url.startsWith('/pages/cities/salt-lake-city-ut')) return '0.9'; // Featured city
  if (url.startsWith('/pages/cities')) return '0.8';
  if (url.startsWith('/pages')) return '0.7';
  return '0.6';
}

/**
 * Determine change frequency
 */
function getChangeFreq(url) {
  if (url === '/') return 'weekly';
  if (url.startsWith('/pages/cities')) return 'monthly';
  if (url.startsWith('/pages/services')) return 'monthly';
  if (url.startsWith('/pages/gallery')) return 'weekly';
  return 'monthly';
}

/**
 * Scan directory for HTML files
 */
function scanDirectory(dir, baseUrl = '') {
  const urls = [];
  
  if (!fs.existsSync(dir)) {
    return urls;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'utahmmc-king-tut-master'].includes(entry.name)) {
        continue;
      }
      
      // Recursively scan subdirectories
      urls.push(...scanDirectory(fullPath, baseUrl));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      // Skip certain files
      if (entry.name.endsWith('.code-workspace')) {
        continue;
      }
      
      const url = pathToUrl(fullPath);
      const lastmod = getLastMod(fullPath);
      const priority = getPriority(url);
      const changefreq = getChangeFreq(url);
      
      urls.push({
        loc: `${SITE}${url}`,
        lastmod,
        changefreq,
        priority
      });
    }
  }
  
  return urls;
}

/**
 * Generate sitemap XML
 */
function generateSitemap(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  
  const footer = `</urlset>`;
  
  const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');
  
  return [header, urlEntries, footer].join('\n');
}

/**
 * Main function
 */
function main() {
  console.log('🗺️  Generating sitemap...\n');
  
  const urls = [];
  
  // Homepage
  const indexPath = path.join(ROOT, 'index.html');
  if (fs.existsSync(indexPath)) {
    urls.push({
      loc: `${SITE}/`,
      lastmod: getLastMod(indexPath),
      changefreq: 'weekly',
      priority: '1.0'
    });
  }
  
  // Scan pages directory
  console.log('Scanning pages directory...');
  urls.push(...scanDirectory(PAGES_DIR));
  
  // Sort URLs: homepage first, then by priority, then alphabetically
  urls.sort((a, b) => {
    if (a.loc === `${SITE}/`) return -1;
    if (b.loc === `${SITE}/`) return 1;
    
    const priorityA = parseFloat(a.priority);
    const priorityB = parseFloat(b.priority);
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    
    return a.loc.localeCompare(b.loc);
  });
  
  // Generate XML
  const xml = generateSitemap(urls);
  
  // Write to file
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  
  console.log(`✅ Generated sitemap with ${urls.length} URLs`);
  console.log(`   Written to: ${OUT_FILE}`);
  console.log(`\n   Breakdown:`);
  console.log(`   - Homepage: 1`);
  console.log(`   - City pages: ${urls.filter(u => u.loc.includes('/cities/') && !u.loc.endsWith('/cities')).length}`);
  console.log(`   - Service pages: ${urls.filter(u => u.loc.includes('/services/')).length}`);
  console.log(`   - Other pages: ${urls.length - urls.filter(u => u.loc.includes('/cities/') || u.loc.includes('/services/')).length - 1}`);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, scanDirectory, pathToUrl };

