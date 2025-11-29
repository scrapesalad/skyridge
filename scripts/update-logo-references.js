/**
 * Update Logo References Script
 * Replaces all logo references to use kingtutlogo.png
 * 
 * Usage: node scripts/update-logo-references.js
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
 * Update logo references in a file
 */
function updateLogoReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Replace logo filename
    content = content.replace(/pondcleanuplogo\.png/g, 'kingtutlogo.png');
    
    // Update alt text to be generic/training placeholder
    content = content.replace(/alt="Pond Cleanup"/g, 'alt="PUT YOUR SITE NAME HERE"');
    content = content.replace(/alt="Pond Authority"/g, 'alt="PUT YOUR SITE NAME HERE"');
    
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
  console.log('🔄 Updating logo references to kingtutlogo.png...\n');
  
  const files = [
    path.join(ROOT, 'index.html'),
    ...findHTMLFiles(PAGES_DIR)
  ].filter(f => fs.existsSync(f));
  
  console.log(`Found ${files.length} HTML files\n`);
  
  const results = files.map(updateLogoReferences);
  const updated = results.filter(r => r.updated);
  
  if (updated.length > 0) {
    console.log(`✅ Updated ${updated.length} files:`);
    updated.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}`);
    });
  } else {
    console.log('ℹ️  No files needed updating (logo references already correct)');
  }
  
  console.log('\n✅ Done!');
}

if (require.main === module) {
  main();
}

module.exports = { updateLogoReferences };

