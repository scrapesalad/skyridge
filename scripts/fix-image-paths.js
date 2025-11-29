/**
 * Fix Image Paths Script
 * 
 * Fixes image paths in pages/ directory to use correct relative paths (../images/)
 * 
 * Usage: node scripts/fix-image-paths.js
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
  if (relativePath.startsWith('pages/')) {
    const depth = relativePath.split('/').length - 1; // pages/ = 1, pages/services/ = 2
    prefix = '../'.repeat(depth);
  }
  
  // Fix image src paths that are missing ../ prefix in pages/
  if (relativePath.startsWith('pages/') && !relativePath.includes('Start Here')) {
    // Pattern: src="images/... (should be src="../images/...)
    const srcPattern = /src=["']images\/([^"']+)["']/g;
    content = content.replace(srcPattern, (match, imagePath) => {
      // Skip if already has ../ or is absolute or is logo/favicon
      if (imagePath.startsWith('../') || imagePath.startsWith('http') || imagePath.includes('logo/') || imagePath.includes('favicon')) {
        return match;
      }
      updated = true;
      return match.replace('images/', `${prefix}images/`);
    });
    
    // Pattern: url('images/... (should be url('../images/...)
    const urlPattern = /url\(['"]?images\/([^"')]+)['"]?\)/g;
    content = content.replace(urlPattern, (match, imagePath) => {
      // Skip if already has ../ or is absolute or is logo/favicon
      if (imagePath.startsWith('../') || imagePath.startsWith('http') || imagePath.includes('logo/') || imagePath.includes('favicon')) {
        return match;
      }
      updated = true;
      return match.replace('images/', `${prefix}images/`);
    });
    
    // Also fix ../../images/logo paths that should be ../../../images/logo for pages/services/
    if (relativePath.startsWith('pages/services/')) {
      const logoPattern = /src=["']\.\.\/\.\.\/images\/(logo\/[^"']+)["']/g;
      content = content.replace(logoPattern, (match, logoPath) => {
        updated = true;
        return match.replace('../../images/', '../../../images/');
      });
    }
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Fixed paths in: ${relativePath}`);
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
function fixImagePaths() {
  console.log('🔧 Fixing image paths in pages directory...\n');
  
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
  fixImagePaths();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

