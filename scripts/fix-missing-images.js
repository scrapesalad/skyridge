/**
 * Fix Missing Images Script
 * 
 * Replaces references to non-existent images with actual images from the images folder.
 * 
 * Usage: node scripts/fix-missing-images.js
 */

const fs = require('fs');
const path = require('path');

// Available images
const AVAILABLE_IMAGES = [
  'Gemini_Generated_Image_3171973171973171.png',
  'Gemini_Generated_Image_6xm42n6xm42n6xm4.png',
  'Gemini_Generated_Image_7uiph7uiph7uiph7.png',
  'Gemini_Generated_Image_8c0h358c0h358c0h.png',
  'Gemini_Generated_Image_f836zcf836zcf836.png',
  'Gemini_Generated_Image_fbz66qfbz66qfbz6.png',
  'Gemini_Generated_Image_lub51dlub51dlub5.png',
  'Gemini_Generated_Image_poyl1bpoyl1bpoyl.png',
  'Gemini_Generated_Image_r8t8ter8t8ter8t8.png',
  'Gemini_Generated_Image_slp0zwslp0zwslp0.png',
  'Gemini_Generated_Image_v51x1fv51x1fv51x.png',
  'Gemini_Generated_Image_y2bfrzy2bfrzy2bf.png'
];

// Track which image index we're on (for cycling through available images)
let imageIndex = 0;

function getNextImage() {
  const image = AVAILABLE_IMAGES[imageIndex % AVAILABLE_IMAGES.length];
  imageIndex++;
  return image;
}

/**
 * Check if image file exists
 */
function imageExists(imagePath) {
  const fullPath = path.join(__dirname, '..', imagePath);
  return fs.existsSync(fullPath);
}

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Reset image index for each file
  imageIndex = 0;
  
  // Find all image src attributes
  const imageSrcRegex = /src=["']([^"']*images[^"']*\.(jpg|jpeg|png))["']/gi;
  const matches = [...content.matchAll(imageSrcRegex)];
  
  matches.forEach(match => {
    const fullMatch = match[0];
    let imagePath = match[1];
    
    // Skip if it's already a valid path (logo, favicon, etc.)
    if (imagePath.includes('logo/') || imagePath.includes('favicon') || imagePath.includes('Gemini_Generated')) {
      return;
    }
    
    // Normalize path for checking (remove ../ if present for existence check)
    const normalizedPath = imagePath.replace(/^\.\.\//, '');
    const checkPath = normalizedPath.startsWith('images/') ? normalizedPath : `images/${normalizedPath.split('images/').pop()}`;
    
    // Check if image exists
    if (!imageExists(checkPath)) {
      // Replace with next available image
      const newImage = getNextImage();
      
      // Determine correct path prefix based on file location
      let prefix = '';
      if (relativePath.startsWith('pages/')) {
        // For pages in pages/ directory, need ../images/
        const depth = relativePath.split('/').length - 1; // pages/ = 1, pages/services/ = 2
        prefix = '../'.repeat(depth);
      }
      
      const newPath = `${prefix}images/${newImage}`;
      const newSrc = fullMatch.replace(imagePath, newPath);
      content = content.replace(fullMatch, newSrc);
      updated = true;
      console.log(`    Replaced: ${imagePath} → ${newPath}`);
    }
  });
  
  // Also check background-image URLs in style attributes
  const bgImageRegex = /url\(['"]?([^"')]*images[^"')]*\.(jpg|jpeg|png))['"]?\)/gi;
  const bgMatches = [...content.matchAll(bgImageRegex)];
  
  bgMatches.forEach(match => {
    const fullMatch = match[0];
    const imagePath = match[1];
    
    // Skip if it's already a valid path
    if (imagePath.includes('logo/') || imagePath.includes('favicon')) {
      return;
    }
    
    // Check if image exists
    if (!imageExists(imagePath)) {
      // Replace with next available image
      const newImage = getNextImage();
      
      // Determine correct path prefix
      let prefix = '';
      if (relativePath.startsWith('pages/')) {
        // For pages in pages/ directory, need ../images/
        const depth = relativePath.split('/').length - 1; // pages/ = 1, pages/services/ = 2
        prefix = '../'.repeat(depth);
      }
      
      const newPath = `${prefix}images/${newImage}`;
      const newUrl = fullMatch.replace(imagePath, newPath);
      content = content.replace(fullMatch, newUrl);
      updated = true;
      console.log(`    Replaced background: ${imagePath} → ${newPath}`);
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Fixed images in: ${relativePath}`);
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
function fixMissingImages() {
  console.log('🔍 Finding and fixing missing images...\n');
  
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = findHtmlFiles(rootDir, rootDir);
  
  let fixedCount = 0;
  
  htmlFiles.forEach(({ filePath, relativePath }) => {
    console.log(`Checking: ${relativePath}`);
    if (processFile(filePath, relativePath)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✅ Fixed images in ${fixedCount} file(s)!`);
}

// Run
try {
  fixMissingImages();
} catch (error) {
  console.error('❌ Error fixing images:', error.message);
  process.exit(1);
}

