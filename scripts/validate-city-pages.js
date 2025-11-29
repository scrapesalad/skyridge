/**
 * City Page Validator for Pond Cleanup
 * Validates city pages meet quality standards
 * 
 * Usage: node scripts/validate-city-pages.js
 */

const fs = require('fs');
const path = require('path');

const { loadConfig } = require('./config-loader');

const config = loadConfig();
const CITIES_DIR = path.join(__dirname, '..', config.features.cityPages.path || 'pages/cities');
const MIN_TOTAL_WORDS = config.validation.cityPages.minWords || 600;
const MIN_CITY_UNIQUE_WORDS = config.validation.cityPages.minCityUniqueWords || 250;
const MIN_IMAGES = config.validation.cityPages.minImages || 3;

// Brand information from config
const BRAND = {
  name: config.site.name || 'Your Site Name',
  url: config.site.url || 'https://Place-website-domain-here',
  phone: config.contact.phone || '(varies by location)'
};

/**
 * Count words in text
 */
function wordCount(text) {
  if (!text) return 0;
  return text.match(/[A-Za-z0-9'\-]+/g)?.length || 0;
}

/**
 * Extract city-specific content from HTML
 */
function extractCityContent(html, cityName) {
  const content = {
    text: '',
    images: [],
    jsonld: [],
    links: [],
    hasCanonical: false,
    hasTitle: false,
    hasDescription: false
  };

  // Extract text content (remove script and style tags)
  let textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  content.text = textContent;

  // Extract images
  const imgMatches = html.matchAll(/<img[^>]+alt=["']([^"']+)["'][^>]*>/gi);
  for (const match of imgMatches) {
    content.images.push({
      alt: match[1],
      hasCityName: match[1].toLowerCase().includes(cityName.toLowerCase())
    });
  }

  // Extract JSON-LD
  const jsonldMatches = html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const match of jsonldMatches) {
    try {
      const json = JSON.parse(match[1]);
      content.jsonld.push(json);
    } catch (e) {
      // Invalid JSON, skip
    }
  }

  // Extract links
  const linkMatches = html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi);
  for (const match of linkMatches) {
    content.links.push(match[1]);
  }

  // Check for canonical
  content.hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
  
  // Check for title
  content.hasTitle = /<title>([^<]+)<\/title>/i.test(html);
  
  // Check for meta description
  content.hasDescription = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);

  return content;
}

/**
 * Count city-unique words
 */
function countCityUniqueWords(content, cityName) {
  const cityLower = cityName.toLowerCase();
  const words = content.text.toLowerCase().match(/[a-z0-9'\-]+/g) || [];
  
  // Count words that appear with city name context or are city-specific
  let uniqueCount = 0;
  const cityWords = new Set();
  
  // Look for city name mentions and nearby words
  const cityNameRegex = new RegExp(cityName.replace(/\s+/g, '\\s+'), 'gi');
  const sentences = content.text.split(/[.!?]+/);
  
  for (const sentence of sentences) {
    if (cityNameRegex.test(sentence)) {
      const sentenceWords = sentence.toLowerCase().match(/[a-z0-9'\-]+/g) || [];
      sentenceWords.forEach(word => {
        if (word.length > 3 && !['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'its', 'let', 'put', 'say', 'she', 'too', 'use'].includes(word)) {
          cityWords.add(word);
        }
      });
    }
  }
  
  // Also count neighborhood mentions, local references
  const localIndicators = ['neighborhood', 'area', 'local', 'nearby', 'serving', 'service', 'pond', 'cleaning', 'maintenance'];
  localIndicators.forEach(indicator => {
    if (content.text.toLowerCase().includes(indicator)) {
      cityWords.add(indicator);
    }
  });

  return cityWords.size * 5; // Estimate: each unique word represents ~5 words of content
}

/**
 * Validate a single city page
 */
function validateCityPage(filePath) {
  const fileName = path.basename(filePath, '.html');
  const cityName = fileName.split('-').slice(0, -2).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const html = fs.readFileSync(filePath, 'utf8');
  const content = extractCityContent(html, cityName);
  
  const errors = [];
  const warnings = [];
  
  // Word count check
  const totalWords = wordCount(content.text);
  if (totalWords < MIN_TOTAL_WORDS) {
    errors.push(`Total words too low: ${totalWords} (minimum: ${MIN_TOTAL_WORDS})`);
  }
  
  // City-unique word count
  const uniqueWords = countCityUniqueWords(content, cityName);
  if (uniqueWords < MIN_CITY_UNIQUE_WORDS) {
    warnings.push(`City-unique words may be low: estimated ${uniqueWords} (target: ${MIN_CITY_UNIQUE_WORDS})`);
  }
  
  // Image check
  if (content.images.length < MIN_IMAGES) {
    errors.push(`Too few images: ${content.images.length} (minimum: ${MIN_IMAGES})`);
  }
  
  // Image alt text check
  const imagesWithoutCityName = content.images.filter(img => !img.hasCityName);
  if (imagesWithoutCityName.length > 0) {
    warnings.push(`${imagesWithoutCityName.length} image(s) missing city name in alt text`);
  }
  
  // JSON-LD check
  const jsonldTypes = content.jsonld.map(ld => ld['@type']).filter(Boolean);
  if (!jsonldTypes.includes('LocalBusiness')) {
    errors.push('Missing LocalBusiness JSON-LD');
  }
  
  // Canonical URL check
  if (!content.hasCanonical) {
    errors.push('Missing canonical URL');
  }
  
  // Title check
  if (!content.hasTitle) {
    errors.push('Missing title tag');
  }
  
  // Meta description check
  if (!content.hasDescription) {
    errors.push('Missing meta description');
  }
  
  // Internal links check (should link to cities index)
  const hasCitiesLink = content.links.some(link => 
    link.includes('cities/index.html') || link.includes('/cities')
  );
  if (!hasCitiesLink) {
    warnings.push('Missing link to cities index page');
  }
  
  return {
    file: fileName,
    city: cityName,
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalWords,
      uniqueWords,
      images: content.images.length,
      jsonldTypes: [...new Set(jsonldTypes)],
      links: content.links.length
    }
  };
}

/**
 * Main validation function
 */
function main() {
  console.log('🔍 Validating City Pages for Pond Cleanup\n');
  
  if (!fs.existsSync(CITIES_DIR)) {
    console.error(`❌ Cities directory not found: ${CITIES_DIR}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(CITIES_DIR)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .map(f => path.join(CITIES_DIR, f));
  
  if (files.length === 0) {
    console.error('❌ No city pages found');
    process.exit(1);
  }
  
  console.log(`Found ${files.length} city pages to validate\n`);
  
  const results = files.map(validateCityPage);
  let hasErrors = false;
  
  for (const result of results) {
    const status = result.ok ? '✅' : '❌';
    console.log(`${status} ${result.file}`);
    console.log(`   City: ${result.city}`);
    console.log(`   Words: ${result.stats.totalWords} total, ~${result.stats.uniqueWords} city-unique`);
    console.log(`   Images: ${result.stats.images}`);
    console.log(`   JSON-LD: ${result.stats.jsonldTypes.join(', ') || 'None'}`);
    
    if (result.errors.length > 0) {
      hasErrors = true;
      result.errors.forEach(err => console.log(`   ❌ ${err}`));
    }
    
    if (result.warnings.length > 0) {
      result.warnings.forEach(warn => console.log(`   ⚠️  ${warn}`));
    }
    
    console.log('');
  }
  
  // Summary
  const passed = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok).length;
  
  console.log('\n=== Summary ===');
  console.log(`Total: ${results.length}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (hasErrors) {
    console.log('\n❌ Validation failed. Please fix the errors above.');
    process.exit(1);
  } else {
    console.log('\n✅ All city pages passed validation!');
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { validateCityPage, wordCount, countCityUniqueWords };

