/**
 * Remove All Pond References
 * 
 * This script removes all remaining pond references from the entire site
 * and replaces them with generic placeholders.
 * 
 * Usage: node scripts/remove-pond-references.js
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
 * Remove pond references from content
 */
function removePondReferences(content) {
  // Replace all variations of pond references
  content = content.replace(/pond/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/Pond/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/POND/gi, 'PUT YOUR SERVICE TYPE HERE');
  
  // Fix common phrases
  content = content.replace(/PUT YOUR SERVICE TYPE HERE cleaning/gi, 'PUT YOUR PRIMARY SERVICE HERE');
  content = content.replace(/PUT YOUR SERVICE TYPE HERE with/gi, 'PUT YOUR SERVICE TYPE HERE with');
  content = content.replace(/PUT YOUR SERVICE TYPE HEREs/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/PUT YOUR SERVICE TYPE HERE specialist/gi, 'PUT YOUR SERVICE PROVIDER TYPE HERE');
  content = content.replace(/PUT YOUR SERVICE TYPE HERE tech/gi, 'PUT YOUR SERVICE PROVIDER TYPE HERE');
  content = content.replace(/PUT YOUR SERVICE TYPE HERE owner/gi, 'PUT YOUR TARGET AUDIENCE HERE');
  content = content.replace(/PUT YOUR SERVICE TYPE HERE owners/gi, 'PUT YOUR TARGET AUDIENCE HERE');
  
  // Fix CSS class names (but keep the class attribute)
  content = content.replace(/class="pond-gallery"/gi, 'class="gallery"');
  content = content.replace(/\.pond-gallery/gi, '.gallery');
  
  // Fix alt text
  content = content.replace(/alt="[^"]*pond[^"]*"/gi, (match) => {
    return match.replace(/pond/gi, 'PUT YOUR SERVICE TYPE HERE');
  });
  
  // Fix image alt text specifically
  content = content.replace(/alt="Before: murky PUT YOUR SERVICE TYPE HERE with algae"/gi, 'alt="PUT YOUR BEFORE IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="After: crystal clear PUT YOUR SERVICE TYPE HERE"/gi, 'alt="PUT YOUR AFTER IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Clean PUT YOUR SERVICE TYPE HERE with waterfall"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Natural PUT YOUR SERVICE TYPE HERE ecosystem"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="PUT YOUR SERVICE TYPE HERE with plants"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Evening PUT YOUR SERVICE TYPE HERE lighting"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Decorative PUT YOUR SERVICE TYPE HERE feature"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Crystal clear PUT YOUR SERVICE TYPE HERE water"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Waterfall and stream"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="PUT YOUR SERVICE TYPE HERE with aquatic plants"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Professional PUT YOUR SERVICE TYPE HERE installation"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Garden PUT YOUR SERVICE TYPE HERE ecosystem"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Backyard water feature"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="PUT YOUR SERVICE TYPE HERE with natural stone"/gi, 'alt="PUT YOUR IMAGE ALT TEXT HERE"');
  content = content.replace(/alt="Beautiful clean PUT YOUR SERVICE TYPE HERE"/gi, 'alt="PUT YOUR HERO IMAGE ALT TEXT HERE"');
  
  return content;
}

/**
 * Update a single file
 */
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Remove pond references
    content = removePondReferences(content);
    
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
  console.log('🔄 Removing all pond references from the site...\n');
  
  const files = [
    path.join(ROOT, 'index.html'),
    path.join(ROOT, 'css', 'styles.css'),
    path.join(ROOT, 'package.json'),
    ...findHTMLFiles(PAGES_DIR)
  ].filter(f => fs.existsSync(f));
  
  console.log(`Found ${files.length} files to check\n`);
  
  const results = files.map(updateFile);
  const updated = results.filter(r => r.updated);
  const errors = results.filter(r => r.error);
  
  if (updated.length > 0) {
    console.log(`✅ Updated ${updated.length} files:`);
    updated.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}`);
    });
  } else {
    console.log('ℹ️  No files needed updating');
  }
  
  if (errors.length > 0) {
    console.log(`\n⚠️  Errors in ${errors.length} files:`);
    errors.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}: ${r.error}`);
    });
  }
  
  console.log('\n✅ Done! All pond references have been removed.');
}

if (require.main === module) {
  main();
}

module.exports = { removePondReferences, updateFile };

