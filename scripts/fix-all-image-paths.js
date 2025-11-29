/**
 * Fix All Image Paths Script
 * 
 * Aggressively fixes ALL image paths in pages/ directory.
 * 
 * Usage: node scripts/fix-all-image-paths.js
 */

const fs = require('fs');
const path = require('path');

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Determine correct prefix based on file location
  let prefix = '';
  if (relativePath.startsWith('pages/services/') || relativePath.startsWith('pages/contractor/') || relativePath.startsWith('pages/cities/')) {
    prefix = '../../';
  } else if (relativePath.startsWith('pages/')) {
    prefix = '../';
  }
  
  // Fix ALL src="images/... patterns (not ../images/)
  if (relativePath.startsWith('pages/') && !relativePath.includes('Start Here')) {
    // Pattern 1: src="images/... (should be src="../images/... or ../../images/...)
    const srcPattern1 = /src=["']images\/([^"']+)["']/g;
    content = content.replace(srcPattern1, (match, imagePath) => {
      // Skip logo/favicon paths that might be handled elsewhere
      if (imagePath.includes('logo/') || imagePath.includes('favicon')) {
        return match;
      }
      updated = true;
      return `src="${prefix}images/${imagePath}"`;
    });
    
    // Pattern 2: url('images/... (should be url('../images/... or ../../images/...)
    const urlPattern1 = /url\(['"]?images\/([^"')]+)['"]?\)/g;
    content = content.replace(urlPattern1, (match, imagePath) => {
      // Skip logo/favicon paths
      if (imagePath.includes('logo/') || imagePath.includes('favicon')) {
        return match;
      }
      updated = true;
      return `url('${prefix}images/${imagePath}')`;
    });
    
    // Pattern 3: url("images/... (should be url("../images/... or ../../images/...)
    const urlPattern2 = /url\(["']images\/([^"')]+)["']?\)/g;
    content = content.replace(urlPattern2, (match, imagePath) => {
      // Skip logo/favicon paths
      if (imagePath.includes('logo/') || imagePath.includes('favicon')) {
        return match;
      }
      updated = true;
      return `url("${prefix}images/${imagePath}")`;
    });
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Fixed: ${relativePath}`);
    return true;
  }
  
  return false;
}

/**
 * Recursively find all HTML files
 */
function findHtmlFiles(dir, baseDir = dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'components', '.git', 'utahmmc-king-tut-master'].includes(file)) {
        findHtmlFiles(filePath, baseDir, fileList);
      }
    } else if (file.endsWith('.html')) {
      const relativePath = path.relative(baseDir, filePath);
      fileList.push({ filePath, relativePath });
    }
  });
  
  return fileList;
}

/**
 * Main function
 */
function fixAllImagePaths() {
  console.log('🔧 Fixing ALL image paths in pages directory...\n');
  
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = findHtmlFiles(rootDir, rootDir);
  
  let fixedCount = 0;
  
  htmlFiles.forEach(({ filePath, relativePath }) => {
    if (processFile(filePath, relativePath)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✅ Fixed paths in ${fixedCount} file(s)!`);
}

// Run
try {
  fixAllImagePaths();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

