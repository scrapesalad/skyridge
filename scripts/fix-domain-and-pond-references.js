/**
 * Fix Domain and Pond References
 * Replaces all domain placeholders and pond references with generic template placeholders
 * 
 * Usage: node scripts/fix-domain-and-pond-references.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Files to skip
const SKIP_DIRS = ['node_modules', '.git', 'public', 'utahmmc-king-tut-master', 'docs'];
const SKIP_FILES = ['.code-workspace'];

// Replacements
const REPLACEMENTS = [
  // Domain replacements - use URL-friendly format "Place-website-domain-here"
  {
    pattern: /https:\/\/Place-website-domain-here/g,
    replacement: 'https://Place-website-domain-here'
  },
  {
    pattern: /Place-website-domain-here/g,
    replacement: 'Place-website-domain-here'
  },
  {
    pattern: /https:\/\/Place-website-domain-here\.com/g,
    replacement: 'https://Place-website-domain-here'
  },
  {
    pattern: /Place-website-domain-here\.com/g,
    replacement: 'Place-website-domain-here'
  },
  {
    pattern: /Place-website-domain-here/g,
    replacement: 'Place-website-domain-here'
  },
  {
    pattern: /https:\/\/yoursite\.com/g,
    replacement: 'https://Place-website-domain-here'
  },
  {
    pattern: /https:\/\/yourdomain\.com/g,
    replacement: 'https://Place-website-domain-here'
  },
  {
    pattern: /https:\/\/pondcleanup\.com/g,
    replacement: 'https://Place-website-domain-here'
  },
  {
    pattern: /https:\/\/pondauthority\.com/g,
    replacement: 'https://Place-website-domain-here'
  },
  // Pond references in content (but keep in example filenames as they're examples)
  {
    pattern: /PUT PRIMARY SERVICE HERE/gi,
    replacement: 'PUT PRIMARY SERVICE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html'] // Keep example files
  },
  {
    pattern: /PUT PRIMARY SERVICE HERE/gi,
    replacement: 'PUT PRIMARY SERVICE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html']
  },
  {
    pattern: /PUT SERVICE TYPE HERE/gi,
    replacement: 'PUT SERVICE TYPE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html', 'utah-water-gardens.html']
  },
  {
    pattern: /PUT SERVICE TYPE HERE/gi,
    replacement: 'PUT SERVICE TYPE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html', 'utah-water-gardens.html']
  },
  {
    pattern: /PUT SERVICE TYPE HERE/gi,
    replacement: 'PUT SERVICE TYPE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html']
  },
  {
    pattern: /PUT SERVICE TYPE HERE/gi,
    replacement: 'PUT SERVICE TYPE HERE',
    skipFiles: ['pond-cleaning.html', 'bluewater-pond-garden.html']
  }
];

/**
 * Check if file should be skipped
 */
function shouldSkip(filePath) {
  const relative = path.relative(ROOT, filePath);
  const parts = relative.split(path.sep);
  
  // Check if in skip directory
  for (const part of parts) {
    if (SKIP_DIRS.includes(part)) {
      return true;
    }
  }
  
  // Check if file should be skipped
  const fileName = path.basename(filePath);
  for (const skipFile of SKIP_FILES) {
    if (fileName.includes(skipFile)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Process a single file
 */
function processFile(filePath) {
  if (shouldSkip(filePath)) {
    return { processed: false, reason: 'skipped' };
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const fileName = path.basename(filePath);
    
    // Apply replacements
    for (const replacement of REPLACEMENTS) {
      // Check if this replacement should skip this file
      if (replacement.skipFiles && replacement.skipFiles.includes(fileName)) {
        continue;
      }
      
      if (replacement.pattern.test(content)) {
        content = content.replace(replacement.pattern, replacement.replacement);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { processed: true, modified: true };
    }
    
    return { processed: true, modified: false };
  } catch (error) {
    return { processed: false, reason: error.message };
  }
}

/**
 * Find all files to process
 */
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!shouldSkip(filePath)) {
        findFiles(filePath, fileList);
      }
    } else {
      // Process HTML, JS, TXT, XML files
      if (file.endsWith('.html') || file.endsWith('.js') || 
          file.endsWith('.txt') || file.endsWith('.xml')) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Fixing domain and pond references...\n');
  
  const files = findFiles(ROOT);
  let processed = 0;
  let modified = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of files) {
    const result = processFile(file);
    
    if (!result.processed) {
      skipped++;
      if (result.reason && result.reason !== 'skipped') {
        console.log(`⚠️  Error processing ${path.relative(ROOT, file)}: ${result.reason}`);
        errors++;
      }
    } else {
      processed++;
      if (result.modified) {
        modified++;
        console.log(`✓ Updated: ${path.relative(ROOT, file)}`);
      }
    }
  }
  
  console.log(`\n✅ Complete!`);
  console.log(`   Processed: ${processed} files`);
  console.log(`   Modified: ${modified} files`);
  console.log(`   Skipped: ${skipped} files`);
  if (errors > 0) {
    console.log(`   Errors: ${errors} files`);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { processFile, findFiles };

