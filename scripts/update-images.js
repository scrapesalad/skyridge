/**
 * Update Images Script
 * 
 * Replaces placeholder images with actual images from the images folder.
 * Ensures every image placeholder has a real image.
 * 
 * Usage: node scripts/update-images.js
 */

const fs = require('fs');
const path = require('path');

// Image mapping - maps placeholder patterns to actual images
const IMAGE_MAP = {
  // Service card images (4 needed)
  'PUT-YOUR-SERVICE-IMAGE-1-HERE': 'Gemini_Generated_Image_3171973171973171.png',
  'PUT-YOUR-SERVICE-IMAGE-2-HERE': 'Gemini_Generated_Image_6xm42n6xm42n6xm4.png',
  'PUT-YOUR-SERVICE-IMAGE-3-HERE': 'Gemini_Generated_Image_7uiph7uiph7uiph7.png',
  'PUT-YOUR-SERVICE-IMAGE-4-HERE': 'Gemini_Generated_Image_8c0h358c0h358c0h.png',
  
  // Background images (2 needed)
  'PUT-YOUR-BACKGROUND-IMAGE-HERE': 'Gemini_Generated_Image_f836zcf836zcf836.png',
  
  // Before/After images (4 needed - 2 before, 2 after)
  'PUT-YOUR-BEFORE-IMAGE-2-HERE': 'Gemini_Generated_Image_fbz66qfbz66qfbz6.png',
  'PUT-YOUR-AFTER-IMAGE-2-HERE': 'Gemini_Generated_Image_lub51dlub51dlub5.png',
  'PUT-YOUR-BEFORE-IMAGE-3-HERE': 'Gemini_Generated_Image_poyl1bpoyl1bpoyl.png',
  'PUT-YOUR-AFTER-IMAGE-3-HERE': 'Gemini_Generated_Image_r8t8ter8t8ter8t8.png',
  
  // Gallery images (6 needed)
  'PUT-YOUR-GALLERY-IMAGE-1-HERE': 'Gemini_Generated_Image_slp0zwslp0zwslp0.png',
  'PUT-YOUR-GALLERY-IMAGE-2-HERE': 'Gemini_Generated_Image_v51x1fv51x1fv51x.png',
  'PUT-YOUR-GALLERY-IMAGE-3-HERE': 'Gemini_Generated_Image_y2bfrzy2bfrzy2bf.png',
  'PUT-YOUR-GALLERY-IMAGE-4-HERE': 'Gemini_Generated_Image_3171973171973171.png', // Reuse
  'PUT-YOUR-GALLERY-IMAGE-5-HERE': 'Gemini_Generated_Image_6xm42n6xm42n6xm4.png', // Reuse
  'PUT-YOUR-GALLERY-IMAGE-6-HERE': 'Gemini_Generated_Image_7uiph7uiph7uiph7.png', // Reuse
  
  // Meta tag images (for OG and Twitter)
  'PUT-OG-IMAGE-FILENAME-HERE': 'logo/heroimage.png',
  'PUT-TWITTER-IMAGE-FILENAME-HERE': 'logo/heroimage.png',
  'PUT-LOGO-FILENAME-HERE': 'logo/kingtutlogo.png'
};

// Patterns to replace
const REPLACEMENTS = [
  // Service card background images (handle both .jpg and without extension)
  {
    pattern: /url\(['"]?images\/PUT-YOUR-SERVICE-IMAGE-(\d+)-HERE(\.jpg)?['"]?\)/gi,
    replacement: (match, num) => {
      const key = `PUT-YOUR-SERVICE-IMAGE-${num}-HERE`;
      const image = IMAGE_MAP[key] || 'Gemini_Generated_Image_3171973171973171.png';
      return `url('images/${image}')`;
    }
  },
  
  // Background images in style attributes (handle both .jpg and without extension)
  {
    pattern: /url\(['"]?images\/PUT-YOUR-BACKGROUND-IMAGE-HERE(\.jpg)?['"]?\)/gi,
    replacement: () => `url('images/${IMAGE_MAP['PUT-YOUR-BACKGROUND-IMAGE-HERE']}')`
  },
  
  // Before/After images (handle both .jpg and without extension)
  {
    pattern: /src=["']images\/PUT-YOUR-BEFORE-IMAGE-(\d+)-HERE(\.jpg)?["']/gi,
    replacement: (match, num) => {
      const key = `PUT-YOUR-BEFORE-IMAGE-${num}-HERE`;
      const image = IMAGE_MAP[key] || 'Gemini_Generated_Image_fbz66qfbz66qfbz6.png';
      return `src="images/${image}"`;
    }
  },
  {
    pattern: /src=["']images\/PUT-YOUR-AFTER-IMAGE-(\d+)-HERE(\.jpg)?["']/gi,
    replacement: (match, num) => {
      const key = `PUT-YOUR-AFTER-IMAGE-${num}-HERE`;
      const image = IMAGE_MAP[key] || 'Gemini_Generated_Image_lub51dlub51dlub5.png';
      return `src="images/${image}"`;
    }
  },
  
  // Gallery images (handle both .jpg and without extension)
  {
    pattern: /src=["']images\/PUT-YOUR-GALLERY-IMAGE-(\d+)-HERE(\.jpg)?["']/gi,
    replacement: (match, num) => {
      const key = `PUT-YOUR-GALLERY-IMAGE-${num}-HERE`;
      const image = IMAGE_MAP[key] || 'Gemini_Generated_Image_slp0zwslp0zwslp0.png';
      return `src="images/${image}"`;
    }
  },
  
  // Meta tag images (OG and Twitter)
  {
    pattern: /content=["']https:\/\/Place-website-domain-here\.com\/images\/PUT-OG-IMAGE-FILENAME-HERE\.jpg["']/gi,
    replacement: () => `content="https://Place-website-domain-here/images/${IMAGE_MAP['PUT-OG-IMAGE-FILENAME-HERE']}"`
  },
  {
    pattern: /content=["']https:\/\/Place-website-domain-here\.com\/images\/PUT-TWITTER-IMAGE-FILENAME-HERE\.jpg["']/gi,
    replacement: () => `content="https://Place-website-domain-here/images/${IMAGE_MAP['PUT-TWITTER-IMAGE-FILENAME-HERE']}"`
  },
  {
    pattern: /"logo":\s*"https:\/\/Place-website-domain-here\.com\/images\/PUT-LOGO-FILENAME-HERE\.png"/gi,
    replacement: () => `"logo": "https://Place-website-domain-here/images/${IMAGE_MAP['PUT-LOGO-FILENAME-HERE']}"`
  }
];

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Apply all replacements
  REPLACEMENTS.forEach(({ pattern, replacement }) => {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      updated = true;
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Updated images in: ${relativePath}`);
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
      // Skip node_modules, components, and other non-page directories
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
function updateImages() {
  console.log('🖼️  Updating images across all pages...\n');
  
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = findHtmlFiles(rootDir, rootDir);
  
  let updatedCount = 0;
  
  htmlFiles.forEach(({ filePath, relativePath }) => {
    if (processFile(filePath, relativePath)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Updated ${updatedCount} file(s) with new images!`);
}

// Run
try {
  updateImages();
} catch (error) {
  console.error('❌ Error updating images:', error.message);
  process.exit(1);
}

