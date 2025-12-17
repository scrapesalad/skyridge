/**
 * ============================================================================
 * PREPARE FOR VERCEL DEPLOYMENT
 * ============================================================================
 * 
 * This script prepares the site for Vercel deployment by:
 * 1. Creating a public folder structure
 * 2. Copying images to public/images
 * 3. Updating all image paths to absolute paths (/images/...)
 * 4. Ensuring all static assets are in the right place
 * 
 * Usage: node scripts/prepare-vercel.js
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const IMAGES_DIR = path.join(ROOT_DIR, 'images');
const PUBLIC_IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Directories to copy to public
const STATIC_DIRS = [
  { src: 'images', dest: 'images' },
  { src: 'css', dest: 'css' },
  { src: 'js', dest: 'js' },
  { src: 'components', dest: 'components' }
];

// Files to copy to public root
const STATIC_FILES = [
  'robots.txt',
  'sitemap.xml'
];

/**
 * Create directory if it doesn't exist
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Created directory: ${path.relative(ROOT_DIR, dirPath)}`);
  }
}

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠ Skipping ${src} (doesn't exist)`);
    return;
  }

  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Copy file
 */
function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠ Skipping ${src} (doesn't exist)`);
    return;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`✓ Copied: ${path.relative(ROOT_DIR, src)} → ${path.relative(ROOT_DIR, dest)}`);
}

/**
 * Get depth of file from root
 */
function getFileDepth(filePath) {
  const relative = path.relative(ROOT_DIR, filePath);
  return relative.split(path.sep).length - 1;
}

/**
 * Convert relative image path to absolute path
 */
function convertToAbsolutePath(imagePath, filePath) {
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

  // If it's just a filename in images/, add the path
  if (!cleanPath.includes('/')) {
    return '/images/' + cleanPath;
  }

  return '/' + cleanPath;
}

/**
 * Process HTML file to update image paths
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
    
    const absolutePath = convertToAbsolutePath(imagePath, filePath);
    updated = true;
    return match.replace(imagePath, absolutePath);
  });

  // Pattern 2: url('images/...') or url("../images/...")
  const urlPattern = /url\(['"]?([^"')]*images\/[^"')]+)['"]?\)/gi;
  content = content.replace(urlPattern, (match, imagePath) => {
    // Skip if already absolute or external
    if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(imagePath, filePath);
    updated = true;
    return match.replace(imagePath, absolutePath);
  });

  // Pattern 3: href="css/..." or href="../css/..."
  const cssPattern = /href=["']([^"']*css\/[^"']+)["']/gi;
  content = content.replace(cssPattern, (match, cssPath) => {
    // Skip if already absolute or external
    if (cssPath.startsWith('/') || cssPath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(cssPath, filePath);
    updated = true;
    return match.replace(cssPath, absolutePath);
  });

  // Pattern 4: src="js/..." or href="js/..."
  const jsPattern = /(src|href)=["']([^"']*js\/[^"']+)["']/gi;
  content = content.replace(jsPattern, (match, attr, jsPath) => {
    // Skip if already absolute or external
    if (jsPath.startsWith('/') || jsPath.startsWith('http')) {
      return match;
    }
    
    const absolutePath = convertToAbsolutePath(jsPath, filePath);
    updated = true;
    return match.replace(jsPath, absolutePath);
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
      if (['node_modules', '.git', 'public', 'dist', 'utahmmc-king-tut-master'].includes(file)) {
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
  console.log('🚀 Preparing for Vercel Deployment');
  console.log('=' .repeat(60));
  console.log('');

  // Step 1: Create public directory
  console.log('📁 Step 1: Creating public directory structure...');
  ensureDir(PUBLIC_DIR);
  console.log('');

  // Step 2: Copy static directories
  console.log('📦 Step 2: Copying static assets to public/...');
  for (const { src, dest } of STATIC_DIRS) {
    const srcPath = path.join(ROOT_DIR, src);
    const destPath = path.join(PUBLIC_DIR, dest);
    if (fs.existsSync(srcPath)) {
      copyDir(srcPath, destPath);
      console.log(`✓ Copied ${src}/ → public/${dest}/`);
    }
  }
  console.log('');

  // Step 3: Copy static files
  console.log('📄 Step 3: Copying static files to public/...');
  for (const file of STATIC_FILES) {
    const srcPath = path.join(ROOT_DIR, file);
    const destPath = path.join(PUBLIC_DIR, file);
    copyFile(srcPath, destPath);
  }
  console.log('');

  // Step 4: Copy HTML files to public
  console.log('📝 Step 4: Copying HTML files to public/...');
  
  // Copy root HTML files
  const rootHtmlFiles = ['index.html', 'theme-demo.html', 'theme-customizer.html'];
  for (const file of rootHtmlFiles) {
    const srcPath = path.join(ROOT_DIR, file);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(PUBLIC_DIR, file);
      copyFile(srcPath, destPath);
    }
  }

  // Copy pages directory
  const pagesSrc = path.join(ROOT_DIR, 'pages');
  const pagesDest = path.join(PUBLIC_DIR, 'pages');
  if (fs.existsSync(pagesSrc)) {
    copyDir(pagesSrc, pagesDest);
    console.log(`✓ Copied pages/ → public/pages/`);
  }
  console.log('');

  // Step 5: Update image paths in all HTML files
  console.log('🔧 Step 5: Updating image paths to absolute paths...');
  const htmlFiles = findHtmlFiles(PUBLIC_DIR);
  let updatedCount = 0;

  htmlFiles.forEach(filePath => {
    if (processHtmlFile(filePath)) {
      updatedCount++;
      const relative = path.relative(PUBLIC_DIR, filePath);
      console.log(`  ✓ Updated: ${relative}`);
    }
  });

  console.log(`\n✓ Updated ${updatedCount} HTML files`);
  console.log('');

  // Step 6: Create vercel.json
  console.log('⚙️  Step 6: Creating vercel.json configuration...');
  const vercelConfig = {
    "version": 2,
    "builds": [
      {
        "src": "package.json",
        "use": "@vercel/static"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/$1"
      }
    ],
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      },
      {
        "source": "/images/(.*)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "/css/(.*)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  };

  const vercelPath = path.join(ROOT_DIR, 'vercel.json');
  fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2));
  console.log('✓ Created vercel.json');
  console.log('');

  // Step 7: Create .vercelignore
  console.log('📋 Step 7: Creating .vercelignore...');
  const vercelIgnore = `# Development files
node_modules/
.git/
.idea/
.vscode/

# Documentation
Start Here/
utahmmc-king-tut-master/
qa/

# Scripts (not needed in deployment)
scripts/
*.ps1
*.js
!public/**/*.js

# Config files (keep site.config.json for reference)
package-lock.json

# Build artifacts
dist/
*.log
`;

  const vercelIgnorePath = path.join(ROOT_DIR, '.vercelignore');
  fs.writeFileSync(vercelIgnorePath, vercelIgnore);
  console.log('✓ Created .vercelignore');
  console.log('');

  console.log('=' .repeat(60));
  console.log('✨ Vercel preparation complete!');
  console.log('');
  console.log('📁 Your public folder is ready at: public/');
  console.log('🚀 Deploy to Vercel:');
  console.log('   1. Install Vercel CLI: npm i -g vercel');
  console.log('   2. Run: vercel');
  console.log('   3. Or connect your GitHub repo at vercel.com');
  console.log('');
  console.log('📝 Note: All image paths are now absolute (/images/...)');
  console.log('   This ensures they work correctly on Vercel!');
  console.log('');
}

// Run the script
main();


