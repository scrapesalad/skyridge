/**
 * Add Web Manifest Link Script
 * Adds site.webmanifest link to all HTML files that don't have it
 * 
 * Usage: node scripts/add-webmanifest.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');

/**
 * Find all HTML files recursively
 */
function findHTMLFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
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
 * Add webmanifest link to a file
 */
function addWebManifest(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Skip if already has webmanifest
    if (content.includes('site.webmanifest')) {
      return { updated: false, file: filePath, reason: 'already has webmanifest' };
    }
    
    // Determine relative path depth
    const relPath = path.relative(ROOT, filePath);
    const depth = relPath.split(path.sep).length - 1;
    const prefix = '../'.repeat(depth);
    
    // Find the last favicon/android-chrome link
    const lastFaviconPattern = /<link rel="icon" type="image\/png" sizes="512x512" href="([^"]+)" \/>/;
    const match = content.match(lastFaviconPattern);
    
    if (match) {
      // Extract the path and adjust for webmanifest
      const faviconPath = match[1];
      const webmanifestPath = faviconPath.replace(/android-chrome-512x512\.png$/, 'site.webmanifest');
      
      // Insert webmanifest link after the last favicon
      content = content.replace(
        lastFaviconPattern,
        `$&\n  <link rel="manifest" href="${webmanifestPath}" />`
      );
    } else {
      // Fallback: try to find any favicon link and add after it
      const faviconPattern = /(<link rel="icon"[^>]+>)/;
      if (faviconPattern.test(content)) {
        content = content.replace(
          faviconPattern,
          `$1\n  <link rel="manifest" href="${prefix}images/logo/site.webmanifest" />`
        );
      } else {
        return { updated: false, file: filePath, reason: 'no favicon found' };
      }
    }
    
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
 * Main function
 */
function main() {
  console.log('🔄 Adding site.webmanifest links to HTML files...\n');
  
  const files = [
    path.join(ROOT, 'index.html'),
    ...findHTMLFiles(PAGES_DIR)
  ].filter(f => fs.existsSync(f));
  
  console.log(`Found ${files.length} HTML files\n`);
  
  const results = files.map(addWebManifest);
  const updated = results.filter(r => r.updated);
  const skipped = results.filter(r => !r.updated && r.reason);
  
  if (updated.length > 0) {
    console.log(`✅ Updated ${updated.length} files:`);
    updated.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}`);
    });
  }
  
  if (skipped.length > 0) {
    console.log(`\nℹ️  Skipped ${skipped.length} files (already have webmanifest or no favicon found)`);
  }
  
  console.log('\n✅ Done!');
}

if (require.main === module) {
  main();
}

module.exports = { addWebManifest };

