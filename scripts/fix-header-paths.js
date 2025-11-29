/**
 * Fix Header Paths for Subdirectories
 * Updates header logo links for pages in cities/ and services/ subdirectories
 * 
 * Usage: node scripts/fix-header-paths.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');

/**
 * Fix header paths in a file
 */
function fixHeaderPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const relativePath = path.relative(PAGES_DIR, filePath);
    const depth = relativePath.split(path.sep).length - 1;
    
    // Determine correct path to index.html
    let indexPath;
    if (depth === 0) {
      // In pages/ root
      indexPath = '../index.html';
    } else if (depth === 1) {
      // In pages/cities/ or pages/services/
      indexPath = '../../index.html';
    } else {
      // Deeper nesting
      indexPath = '../'.repeat(depth) + 'index.html';
    }
    
    // Fix logo link
    const logoPattern = /<a href="[^"]*index\.html"[^>]*class="logo"/i;
    if (logoPattern.test(content)) {
      content = content.replace(/<a href="[^"]*index\.html"[^>]*class="logo"/i, `<a href="${indexPath}" class="logo"`);
      modified = true;
    }
    
    // Fix navigation links for subdirectories
    if (depth > 0) {
      // Pages in subdirectories need ../ prefix for navigation
      const navLinks = [
        { pattern: /href="services\.html"/g, replacement: 'href="../services.html"' },
        { pattern: /href="gallery\.html"/g, replacement: 'href="../gallery.html"' },
        { pattern: /href="locations\.html"/g, replacement: 'href="../locations.html"' },
        { pattern: /href="how-it-works\.html"/g, replacement: 'href="../how-it-works.html"' },
        { pattern: /href="about\.html"/g, replacement: 'href="../about.html"' },
        { pattern: /href="book\.html"/g, replacement: 'href="../book.html"' },
        { pattern: /href="contact\.html"/g, replacement: 'href="../contact.html"' },
        { pattern: /href="faq\.html"/g, replacement: 'href="../faq.html"' }
      ];
      
      for (const { pattern, replacement } of navLinks) {
        if (pattern.test(content)) {
          content = content.replace(pattern, replacement);
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { modified: true };
    }
    
    return { modified: false };
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * Find all HTML files
 */
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'utahmmc-king-tut-master', 'public'].includes(file)) {
        findHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && !file.startsWith('_TEMPLATE')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Fixing header paths for subdirectories...\n');
  
  const files = findHtmlFiles(PAGES_DIR);
  let modified = 0;
  let errors = 0;
  
  for (const file of files) {
    const result = fixHeaderPaths(file);
    
    if (result.error) {
      console.log(`⚠️  Error: ${path.relative(ROOT, file)} - ${result.error}`);
      errors++;
    } else if (result.modified) {
      modified++;
      console.log(`✓ Fixed: ${path.relative(ROOT, file)}`);
    }
  }
  
  console.log(`\n✅ Complete!`);
  console.log(`   Modified: ${modified} files`);
  if (errors > 0) {
    console.log(`   Errors: ${errors} files`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixHeaderPaths };

