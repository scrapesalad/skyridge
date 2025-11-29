/**
 * Verify Images Script
 * 
 * Verifies that all image references point to files that actually exist.
 * 
 * Usage: node scripts/verify-images.js
 */

const fs = require('fs');
const path = require('path');

let errors = [];
let warnings = [];

/**
 * Check if image file exists
 */
function imageExists(imagePath, baseDir) {
  const fullPath = path.join(baseDir, imagePath);
  return fs.existsSync(fullPath);
}

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath, rootDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileDir = path.dirname(filePath);
  
  // Find all image src attributes
  const srcPattern = /src=["']([^"']+)["']/gi;
  const srcMatches = [...content.matchAll(srcPattern)];
  
  srcMatches.forEach(match => {
    const imagePath = match[1];
    
    // Skip external URLs
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('//')) {
      return;
    }
    
    // Skip data URIs
    if (imagePath.startsWith('data:')) {
      return;
    }
    
    // Resolve relative path
    const resolvedPath = path.resolve(fileDir, imagePath);
    const relativeToRoot = path.relative(rootDir, resolvedPath);
    
    if (!fs.existsSync(resolvedPath)) {
      errors.push({
        file: relativePath,
        image: imagePath,
        resolved: relativeToRoot
      });
    }
  });
  
  // Find all background-image URLs
  const urlPattern = /url\(['"]?([^"')]+)['"]?\)/gi;
  const urlMatches = [...content.matchAll(urlPattern)];
  
  urlMatches.forEach(match => {
    const imagePath = match[1];
    
    // Skip external URLs and data URIs
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('//') || imagePath.startsWith('data:')) {
      return;
    }
    
    // Skip gradients
    if (imagePath.includes('gradient') || imagePath.includes('linear-gradient') || imagePath.includes('radial-gradient')) {
      return;
    }
    
    // Resolve relative path
    const resolvedPath = path.resolve(fileDir, imagePath);
    const relativeToRoot = path.relative(rootDir, resolvedPath);
    
    if (!fs.existsSync(resolvedPath)) {
      errors.push({
        file: relativePath,
        image: imagePath,
        resolved: relativeToRoot,
        type: 'background-image'
      });
    }
  });
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
function verifyImages() {
  console.log('🔍 Verifying all image references...\n');
  
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = findHtmlFiles(rootDir, rootDir);
  
  htmlFiles.forEach(({ filePath, relativePath }) => {
    processFile(filePath, relativePath, rootDir);
  });
  
  if (errors.length === 0) {
    console.log('✅ All images verified! No missing images found.');
  } else {
    console.log(`❌ Found ${errors.length} missing image(s):\n`);
    errors.forEach(({ file, image, resolved, type }) => {
      console.log(`  File: ${file}`);
      console.log(`  Image: ${image}`);
      if (type) console.log(`  Type: ${type}`);
      console.log(`  Resolved: ${resolved}\n`);
    });
  }
}

// Run
try {
  verifyImages();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

