/**
 * Replace All Missing Images Script
 * 
 * Replaces ALL references to non-existent images with actual Gemini images.
 * This is a more aggressive replacement that handles all cases.
 * 
 * Usage: node scripts/replace-all-missing-images.js
 */

const fs = require('fs');
const path = require('path');

// Available images to cycle through
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

let imageIndex = 0;

function getNextImage() {
  const image = AVAILABLE_IMAGES[imageIndex % AVAILABLE_IMAGES.length];
  imageIndex++;
  return image;
}

/**
 * Get correct path prefix based on file location
 */
function getPathPrefix(relativePath) {
  if (relativePath.startsWith('pages/')) {
    const depth = relativePath.split('/').length - 1; // pages/ = 1, pages/services/ = 2
    return '../'.repeat(depth);
  }
  return '';
}

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  const prefix = getPathPrefix(relativePath);
  
  // Reset image index for each file
  imageIndex = 0;
  
  // Pattern 1: Replace all non-Gemini image references in src attributes
  // Matches: src="../images/anything.jpg" or src="images/anything.jpg"
  const srcPattern = /src=["']([^"']*images\/[^"']*\.(jpg|jpeg|png))["']/gi;
  content = content.replace(srcPattern, (match, imagePath) => {
    // Skip if already using Gemini images or logo/favicon
    if (imagePath.includes('Gemini_Generated') || imagePath.includes('logo/') || imagePath.includes('favicon') || imagePath.includes('heroimage')) {
      return match;
    }
    
    // Replace with next available Gemini image
    const newImage = getNextImage();
    const newPath = `${prefix}images/${newImage}`;
    updated = true;
    return match.replace(imagePath, newPath);
  });
  
  // Pattern 2: Replace all non-Gemini image references in url() for background images
  const urlPattern = /url\(['"]?([^"')]*images\/[^"')]*\.(jpg|jpeg|png))['"]?\)/gi;
  content = content.replace(urlPattern, (match, imagePath) => {
    // Skip if already using Gemini images or logo/favicon
    if (imagePath.includes('Gemini_Generated') || imagePath.includes('logo/') || imagePath.includes('favicon') || imagePath.includes('heroimage')) {
      return match;
    }
    
    // Replace with next available Gemini image
    const newImage = getNextImage();
    const newPath = `${prefix}images/${newImage}`;
    updated = true;
    return match.replace(imagePath, newPath);
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Updated: ${relativePath}`);
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
function replaceAllMissingImages() {
  console.log('🖼️  Replacing all missing images with Gemini images...\n');
  
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = findHtmlFiles(rootDir, rootDir);
  
  let updatedCount = 0;
  
  htmlFiles.forEach(({ filePath, relativePath }) => {
    if (processFile(filePath, relativePath)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Updated ${updatedCount} file(s)!`);
}

// Run
try {
  replaceAllMissingImages();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

