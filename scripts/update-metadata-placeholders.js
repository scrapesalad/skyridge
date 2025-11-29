/**
 * Update Metadata Placeholders Script
 * 
 * This script helps update all pages to use training placeholders.
 * Run this to ensure all pages have consistent training placeholders.
 * 
 * Usage: node scripts/update-metadata-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'pages');
const ROOT_HTML = path.join(__dirname, '..', 'index.html');

/**
 * Update analytics placeholder
 */
function updateAnalytics(content) {
  // Replace old analytics ID with placeholder
  return content
    .replace(/gtag\/js\?id=G-R7MX5CJ43F/g, 'gtag/js?id=PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE')
    .replace(/gtag\('config', 'G-R7MX5CJ43F'\)/g, "gtag('config', 'PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE')");
}

/**
 * Check if file needs updating
 */
function needsUpdate(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.includes('G-R7MX5CJ43F') || 
         content.includes('pondcleanup.com') ||
         content.includes('Pond Cleanup');
}

/**
 * Process a single HTML file
 */
function processFile(filePath) {
  if (!filePath.endsWith('.html')) return;
  if (filePath.includes('_TEMPLATE')) return; // Skip template files
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Only update if it needs it
    if (!needsUpdate(filePath)) {
      return { updated: false, file: filePath };
    }
    
    // Update analytics (if present)
    content = updateAnalytics(content);
    
    // Note: Title, description, and other metadata should be updated manually
    // This script just ensures analytics placeholders are consistent
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { updated: true, file: filePath };
    }
    
    return { updated: false, file: filePath };
  } catch (error) {
    return { updated: false, file: filePath, error: error.message };
  }
}

/**
 * Recursively find all HTML files
 */
function findHTMLFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'utahmmc-king-tut-master'].includes(entry.name)) {
        continue;
      }
      files.push(...findHTMLFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Checking HTML files for metadata placeholders...\n');
  
  const files = [
    ROOT_HTML,
    ...findHTMLFiles(PAGES_DIR)
  ].filter(f => fs.existsSync(f));
  
  console.log(`Found ${files.length} HTML files\n`);
  
  const results = files.map(processFile);
  const updated = results.filter(r => r.updated);
  const needsManual = results.filter(r => r.error || (r.updated === false && needsUpdate(r.file)));
  
  if (updated.length > 0) {
    console.log(`✅ Updated ${updated.length} files:`);
    updated.forEach(r => console.log(`   - ${path.relative(process.cwd(), r.file)}`));
  }
  
  if (needsManual.length > 0) {
    console.log(`\n⚠️  ${needsManual.length} files may need manual updates:`);
    needsManual.slice(0, 10).forEach(r => {
      console.log(`   - ${path.relative(process.cwd(), r.file)}`);
    });
    if (needsManual.length > 10) {
      console.log(`   ... and ${needsManual.length - 10} more`);
    }
  }
  
  console.log('\n📝 Note: This script updates analytics placeholders.');
  console.log('   Title, description, and other metadata should be updated manually');
  console.log('   using the training placeholders. See SEO-METADATA-TRAINING-GUIDE.md');
  
  console.log('\n✅ Done!');
}

if (require.main === module) {
  main();
}

module.exports = { processFile, updateAnalytics };

