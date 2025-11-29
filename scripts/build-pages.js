/**
 * Build Pages Script
 * 
 * Merges component files into HTML pages using component placeholders.
 * 
 * Usage: node scripts/build-pages.js
 * 
 * Component Placeholders:
 * <!-- COMPONENT: global-head -->
 * <!-- COMPONENT: skip-link -->
 * <!-- COMPONENT: header -->
 * <!-- COMPONENT: hero -->
 * <!-- COMPONENT: footer -->
 * <!-- COMPONENT: scripts -->
 */

const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const PAGES_DIR = path.join(__dirname, '..', 'pages');
const ROOT_PAGES = ['index.html'];

// Component mapping
const COMPONENTS = {
  'global-head': 'global-head.html',
  'skip-link': 'skip-link.html',
  'header': 'header.html',
  'hero': 'hero.html',
  'footer': 'footer.html',
  'scripts': 'scripts.html'
};

/**
 * Load a component file
 */
function loadComponent(componentName) {
  const componentFile = COMPONENTS[componentName];
  if (!componentFile) {
    throw new Error(`Unknown component: ${componentName}`);
  }
  
  const componentPath = path.join(COMPONENTS_DIR, componentFile);
  if (!fs.existsSync(componentPath)) {
    throw new Error(`Component file not found: ${componentPath}`);
  }
  
  return fs.readFileSync(componentPath, 'utf8');
}

/**
 * Replace component placeholders in HTML content
 */
function replaceComponents(content, basePath = '') {
  // Match component placeholders: <!-- COMPONENT: component-name -->
  const componentRegex = /<!--\s*COMPONENT:\s*([\w-]+)\s*-->/g;
  
  return content.replace(componentRegex, (match, componentName) => {
    try {
      let componentContent = loadComponent(componentName);
      
      // Adjust relative paths for nested pages
      if (basePath && basePath !== '.') {
        const depth = basePath.split(path.sep).length;
        const prefix = '../'.repeat(depth);
        
        // Fix image paths
        componentContent = componentContent.replace(
          /src="images\//g,
          `src="${prefix}images/`
        );
        
        // Fix CSS paths
        componentContent = componentContent.replace(
          /href="css\//g,
          `href="${prefix}css/`
        );
        
        // Fix link paths (but not absolute URLs)
        componentContent = componentContent.replace(
          /href="(pages|images)\//g,
          `href="${prefix}$1/`
        );
      }
      
      return componentContent;
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error.message);
      return `<!-- ERROR: Could not load component ${componentName} -->`;
    }
  });
}

/**
 * Process a single HTML file
 */
function processFile(filePath, relativePath) {
  console.log(`Processing: ${relativePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const basePath = path.dirname(relativePath);
  const processedContent = replaceComponents(content, basePath);
  
  fs.writeFileSync(filePath, processedContent, 'utf8');
  console.log(`  ✓ Updated: ${relativePath}`);
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
 * Main build function
 */
function build() {
  console.log('🚀 Building pages with components...\n');
  
  // Process root pages
  ROOT_PAGES.forEach(page => {
    const filePath = path.join(__dirname, '..', page);
    if (fs.existsSync(filePath)) {
      processFile(filePath, page);
    }
  });
  
  // Process pages directory
  if (fs.existsSync(PAGES_DIR)) {
    const htmlFiles = findHtmlFiles(PAGES_DIR, path.join(__dirname, '..'));
    
    htmlFiles.forEach(({ filePath, relativePath }) => {
      processFile(filePath, relativePath);
    });
  }
  
  console.log('\n✅ Build complete!');
}

// Run build
try {
  build();
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

