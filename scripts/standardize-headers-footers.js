/**
 * Standardize Headers and Footers
 * Ensures all pages use consistent header and footer structure
 * 
 * Usage: node scripts/standardize-headers-footers.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');

// Standard header HTML (for pages in pages/ directory)
const STANDARD_HEADER = `  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="logo" aria-label="Go to homepage">
        <img src="/images/logo/kingtutlogo.png" alt="PUT YOUR SITE NAME HERE" class="logo-img" />
      </a>

      <!-- Mobile nav toggle -->
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>

      <nav id="main-nav" class="main-nav" aria-label="Primary navigation">
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="locations.html">Locations</a>
        <a href="how-it-works.html">How It Works</a>
        <a href="about.html">About</a>
        <a href="book.html" class="btn btn-primary">PUT YOUR MAIN CTA TEXT HERE</a>
      </nav>
    </div>
  </header>`;

// Standard footer HTML (for pages in pages/ directory)
const STANDARD_FOOTER = `  <footer class="site-footer">
    <div class="container footer-inner">
      <p>&copy; 2025 PUT YOUR SITE NAME HERE (Place-website-domain-here). All rights reserved.</p>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="gallery.html">Gallery</a>
        <a href="locations.html">Locations</a>
        <a href="faq.html">FAQ</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </footer>`;

// Mobile nav script (to add before </body>)
const MOBILE_NAV_SCRIPT = `  <!-- ======================================================================
       MOBILE NAVIGATION SCRIPT
       ====================================================================== -->
  <script>
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('#main-nav');
    
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('nav-open');
      });
      
      // Close nav when clicking outside
      document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !mainNav.contains(event.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('nav-open');
        }
      });
    }
  </script>`;

/**
 * Extract header section from HTML
 */
function extractHeader(html) {
  const headerMatch = html.match(/<header[^>]*>[\s\S]*?<\/header>/i);
  return headerMatch ? headerMatch[0] : null;
}

/**
 * Extract footer section from HTML
 */
function extractFooter(html) {
  const footerMatch = html.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
  return footerMatch ? footerMatch[0] : null;
}

/**
 * Replace header in HTML
 */
function replaceHeader(html, newHeader) {
  const headerPattern = /<header[^>]*>[\s\S]*?<\/header>/i;
  if (headerPattern.test(html)) {
    return html.replace(headerPattern, newHeader);
  }
  // If no header found, try to insert after <body>
  const bodyMatch = html.match(/<body[^>]*>/i);
  if (bodyMatch) {
    return html.replace(bodyMatch[0], bodyMatch[0] + '\n' + newHeader);
  }
  return html;
}

/**
 * Replace footer in HTML
 */
function replaceFooter(html, newFooter) {
  const footerPattern = /<footer[^>]*>[\s\S]*?<\/footer>/i;
  if (footerPattern.test(html)) {
    return html.replace(footerPattern, newFooter);
  }
  // If no footer found, try to insert before </body>
  const bodyCloseMatch = html.match(/<\/body>/i);
  if (bodyCloseMatch) {
    return html.replace('</body>', newFooter + '\n</body>');
  }
  return html;
}

/**
 * Add mobile nav script if not present
 */
function addMobileNavScript(html) {
  if (html.includes('nav-toggle') && !html.includes('Mobile navigation toggle')) {
    // Insert before </body>
    return html.replace('</body>', MOBILE_NAV_SCRIPT + '\n</body>');
  }
  return html;
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Skip template files
    if (path.basename(filePath).startsWith('_TEMPLATE')) {
      return { processed: false, reason: 'template file' };
    }
    
    // Skip index.html (it's in root, has different paths)
    if (path.basename(filePath) === 'index.html' && !filePath.includes('pages')) {
      return { processed: false, reason: 'root index.html' };
    }
    
    // Determine if this is a page in pages/ directory
    const relativePath = path.relative(ROOT, filePath);
    const isInPagesDir = relativePath.startsWith('pages') && !relativePath.includes('pages/cities') && !relativePath.includes('pages/services') && !relativePath.includes('pages/examples');
    
    if (isInPagesDir) {
      // Replace header
      const oldHeader = extractHeader(content);
      if (oldHeader && oldHeader !== STANDARD_HEADER.trim()) {
        content = replaceHeader(content, STANDARD_HEADER);
        modified = true;
      } else if (!oldHeader) {
        // No header found, add it
        content = content.replace(/<body[^>]*>/i, (match) => match + '\n' + STANDARD_HEADER);
        modified = true;
      }
      
      // Replace footer
      const oldFooter = extractFooter(content);
      if (oldFooter && oldFooter !== STANDARD_FOOTER.trim()) {
        content = replaceFooter(content, STANDARD_FOOTER);
        modified = true;
      } else if (!oldFooter) {
        // No footer found, add it
        content = content.replace('</body>', STANDARD_FOOTER + '\n</body>');
        modified = true;
      }
      
      // Add mobile nav script if needed
      if (content.includes('nav-toggle') && !content.includes('Mobile navigation toggle')) {
        content = addMobileNavScript(content);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { processed: true, modified: true };
    }
    
    return { processed: true, modified: false };
  } catch (error) {
    return { processed: false, reason: error.message };
  }
}

/**
 * Find all HTML files in pages directory
 */
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'utahmmc-king-tut-master', 'public'].includes(file)) {
        findHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Standardizing headers and footers...\n');
  
  const files = findHtmlFiles(PAGES_DIR);
  let processed = 0;
  let modified = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of files) {
    const result = processFile(file);
    
    if (!result.processed) {
      skipped++;
      if (result.reason && result.reason !== 'template file' && result.reason !== 'root index.html') {
        console.log(`⚠️  Error processing ${path.relative(ROOT, file)}: ${result.reason}`);
        errors++;
      }
    } else {
      processed++;
      if (result.modified) {
        modified++;
        console.log(`✓ Updated: ${path.relative(ROOT, file)}`);
      }
    }
  }
  
  console.log(`\n✅ Complete!`);
  console.log(`   Processed: ${processed} files`);
  console.log(`   Modified: ${modified} files`);
  console.log(`   Skipped: ${skipped} files`);
  if (errors > 0) {
    console.log(`   Errors: ${errors} files`);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { processFile, findHtmlFiles };

