/**
 * Sitemap URL Validator for Pond Cleanup
 * Checks all URLs in sitemap.xml return valid status codes
 * 
 * Usage: node scripts/check-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const { loadConfig } = require('./config-loader');

const config = loadConfig();
const SITEMAP_PATH = path.join(__dirname, '..', config.seo.sitemap.path || 'sitemap.xml');
const TIMEOUT = 10000; // 10 seconds

/**
 * Extract URLs from sitemap.xml
 */
function extractUrls() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap not found: ${SITEMAP_PATH}`);
  }
  
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urlMatches = content.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi);
  
  const urls = [];
  for (const match of urlMatches) {
    urls.push(match[1].trim());
  }
  
  return urls;
}

/**
 * Check URL status (simplified - just validates format)
 * Note: For production, you'd want to actually HTTP request each URL
 * This is a basic validator that checks sitemap structure
 */
function validateSitemap() {
  console.log('🔍 Validating sitemap.xml...\n');
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ Sitemap not found: ${SITEMAP_PATH}`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const urls = extractUrls();
  
  console.log(`Found ${urls.length} URLs in sitemap\n`);
  
  const issues = [];
  
  // Check for correct domain
  const siteUrl = config.site.url || 'https://Place-website-domain-here';
  const wrongDomain = urls.filter(url => !url.startsWith(siteUrl));
  if (wrongDomain.length > 0) {
    issues.push({
      type: 'wrong_domain',
      count: wrongDomain.length,
      examples: wrongDomain.slice(0, 3)
    });
  }
  
  // Check for duplicate URLs
  const seen = new Set();
  const duplicates = [];
  urls.forEach(url => {
    if (seen.has(url)) {
      duplicates.push(url);
    }
    seen.add(url);
  });
  
  if (duplicates.length > 0) {
    issues.push({
      type: 'duplicates',
      count: duplicates.length,
      examples: duplicates.slice(0, 3)
    });
  }
  
  // Check URL format
  const malformed = urls.filter(url => {
    try {
      new URL(url);
      return false;
    } catch {
      return true;
    }
  });
  
  if (malformed.length > 0) {
    issues.push({
      type: 'malformed',
      count: malformed.length,
      examples: malformed.slice(0, 3)
    });
  }
  
  // Report results
  if (issues.length === 0) {
    const siteDomain = config.site.domain || 'yoursite.com';
    console.log('✅ Sitemap validation passed!');
    console.log(`   - ${urls.length} URLs found`);
    console.log(`   - All URLs use correct domain (${siteDomain})`);
    console.log(`   - No duplicate URLs`);
    console.log(`   - All URLs are properly formatted`);
    console.log('\n⚠️  Note: This script validates sitemap structure only.');
    console.log('   For full URL validation (HTTP status codes), use a tool like:');
    console.log('   - Screaming Frog SEO Spider');
    console.log('   - Google Search Console');
    console.log('   - Or implement HTTP checking (see script comments)');
    return true;
  } else {
    console.log('❌ Sitemap validation found issues:\n');
    issues.forEach(issue => {
      console.log(`   ${issue.type}: ${issue.count} issue(s)`);
      if (issue.examples && issue.examples.length > 0) {
        issue.examples.forEach(ex => console.log(`     - ${ex}`));
      }
    });
    return false;
  }
}

/**
 * Main function
 */
function main() {
  try {
    const isValid = validateSitemap();
    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { extractUrls, validateSitemap };

