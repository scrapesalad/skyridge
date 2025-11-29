/**
 * ============================================================================
 * UPDATE PATHS FOR VERCEL (Root Files)
 * ============================================================================
 * 
 * Updates all HTML files in root and pages/ to use absolute paths
 * This ensures they work both locally and on Vercel
 * 
 * Usage: node scripts/update-paths-for-vercel.js
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');

/**
 * Convert relative image path to absolute path
 */
function convertToAbsolutePath(imagePath) {
  // Already absolute? Skip
  if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
    return imagePath;
  }

  // Remove relative prefixes
  let cleanPath = imagePath.replace(/^\.\.\//g, '');
  
  // If it starts with images/, make it absolute
  if (cleanPath.startsWith('images/')) {
    return '/' + cleanPath;
  }

  // If it starts with css/, make it absolute
  if (cleanPath.startsWith('css/')) {
    return '/' + cleanPath;
  }

  // If it starts with js/, make it absolute
  if (cleanPath.startsWith('js/')) {
    return '/' + cleanPath;
  }

  // If it's just a filename in images/, add the path
  if (!cleanPath.includes('/')) {
    return '/images/' + cleanPath;
  }

  return '/' + cleanPath;
}

/**
 * Process HTML file to update paths
 */
function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Pattern 1: src="images/..." or src="../images/..." or src="../../images/..."
  const srcPattern = /src=["']([^"']*images\/[^"']+)["']/gi;
  content = content.replace(srcPattern, (match, imagePath) => {
    // Skip if already absolute or external
    if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(imagePath);
    updated = true;
    return match.replace(imagePath, absolutePath);
  });

  // Pattern 2: href="css/..." or href="../css/..."
  const cssPattern = /href=["']([^"']*css\/[^"']+)["']/gi;
  content = content.replace(cssPattern, (match, cssPath) => {
    // Skip if already absolute or external
    if (cssPath.startsWith('/') || cssPath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(cssPath);
    updated = true;
    return match.replace(cssPath, absolutePath);
  });

  // Pattern 3: src="js/..." or href="js/..."
  const jsPattern = /(src|href)=["']([^"']*js\/[^"']+)["']/gi;
  content = content.replace(jsPattern, (match, attr, jsPath) => {
    // Skip if already absolute or external
    if (jsPath.startsWith('/') || jsPath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(jsPath);
    updated = true;
    return match.replace(jsPath, absolutePath);
  });

  // Pattern 4: url('images/...') or url("../images/...")
  const urlPattern = /url\(['"]?([^"')]*images\/[^"')]+)['"]?\)/gi;
  content = content.replace(urlPattern, (match, imagePath) => {
    // Skip if already absolute or external
    if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(imagePath);
    updated = true;
    return match.replace(imagePath, absolutePath);
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

/**
 * Find all HTML files
 */
function findHtmlFiles(dir, baseDir = dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'public', 'dist', 'utahmmc-king-tut-master', 'Start Here'].includes(file)) {
        return;
      }
      findHtmlFiles(filePath, baseDir, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Updating paths for Vercel (Root Files)');
  console.log('=' .repeat(60));
  console.log('');

  // Find all HTML files (excluding public folder)
  const htmlFiles = findHtmlFiles(ROOT_DIR);
  let updatedCount = 0;

  htmlFiles.forEach(filePath => {
    if (processHtmlFile(filePath)) {
      updatedCount++;
      const relative = path.relative(ROOT_DIR, filePath);
      console.log(`  ✓ Updated: ${relative}`);
    }
  });

  console.log('');
  console.log('=' .repeat(60));
  console.log(`✨ Updated ${updatedCount} HTML files`);
  console.log('');
  console.log('All paths are now absolute and ready for Vercel!');
  console.log('');
}

// Run the script
main();

