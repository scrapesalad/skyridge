/**
 * Revamp Pages to Training Template
 * 
 * This script updates all HTML pages to follow the King Tut Template training structure:
 * - Adds instructional comments
 * - Replaces old content with generic placeholders
 * - Ensures consistent structure across all pages
 * 
 * Usage: node scripts/revamp-pages-to-template.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'pages');

/**
 * Find all HTML files recursively
 */
function findHTMLFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'utahmmc-king-tut-master'].includes(entry.name)) {
        continue;
      }
      files.push(...findHTMLFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('_TEMPLATE')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Replace pond-specific content with generic placeholders
 */
function replacePondContent(content) {
  // Replace pond-specific text
  content = content.replace(/Pond Cleanup/gi, 'PUT YOUR SITE NAME HERE');
  content = content.replace(/pondcleanup\.com/gi, 'Place-website-domain-here');
  content = content.replace(/PUT PRIMARY SERVICE HERE/gi, 'PUT YOUR PRIMARY SERVICE HERE');
  content = content.replace(/PUT PRIMARY SERVICE HERE/gi, 'PUT YOUR PRIMARY SERVICE HERE');
  content = content.replace(/PUT PRIMARY SERVICE HERE/gi, 'PUT YOUR PRIMARY SERVICE HERE');
  content = content.replace(/pond owners/gi, 'PUT YOUR TARGET AUDIENCE HERE');
  content = content.replace(/Pond Owners/gi, 'PUT YOUR TARGET AUDIENCE HERE');
  content = content.replace(/pond specialist/gi, 'PUT YOUR SERVICE PROVIDER TYPE HERE');
  content = content.replace(/pond tech/gi, 'PUT YOUR SERVICE PROVIDER TYPE HERE');
  content = content.replace(/water garden/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/koi pond/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/muck removal/gi, 'PUT YOUR SERVICE TYPE HERE');
  content = content.replace(/Book a Cleaning/gi, 'PUT YOUR CTA TEXT HERE');
  content = content.replace(/Book a PUT PRIMARY SERVICE HERE/gi, 'PUT YOUR CTA TEXT HERE');
  content = content.replace(/Get a Free Quote/gi, 'PUT YOUR CTA TEXT HERE');
  
  // Replace specific phrases
  content = content.replace(/Nationwide PUT PRIMARY SERVICE HERE &amp; Maintenance/gi, 'PUT YOUR MAIN HEADLINE HERE');
  content = content.replace(/Professional PUT PRIMARY SERVICE HERE, muck removal, and seasonal maintenance/gi, 'PUT YOUR SERVICE DESCRIPTION HERE');
  content = content.replace(/Serving residential and small commercial ponds nationwide/gi, 'PUT YOUR SERVICE AREA DESCRIPTION HERE');
  
  // Replace form labels
  content = content.replace(/Your City or ZIP/gi, 'PUT YOUR LOCATION FIELD LABEL HERE');
  content = content.replace(/Pond Type/gi, 'PUT YOUR FIELD LABEL HERE');
  content = content.replace(/Service Needed/gi, 'PUT YOUR FIELD LABEL HERE');
  content = content.replace(/Select pond type/gi, 'PUT YOUR DROPDOWN PLACEHOLDER HERE');
  content = content.replace(/PUT PRIMARY SERVICE HERE \/ muck removal/gi, 'PUT YOUR OPTION TEXT HERE');
  
  // Replace testimonials
  content = content.replace(/They turned our murky pond/gi, 'PUT YOUR TESTIMONIAL TEXT HERE');
  content = content.replace(/Professional, on time/gi, 'PUT YOUR TESTIMONIAL TEXT HERE');
  
  // Replace footer copyright
  content = content.replace(/&copy; 2025 Pond Cleanup \(pondcleanup\.com\)/gi, '&copy; 2025 PUT YOUR SITE NAME HERE. All rights reserved.');
  
  return content;
}

/**
 * Add instructional comments to header section
 */
function addHeaderComments(content) {
  // Check if header comments already exist
  if (content.includes('STEP 9: HEADER')) {
    return content;
  }
  
  // Find the header tag and add comments before it
  const headerPattern = /(<header class="site-header">)/;
  if (headerPattern.test(content)) {
    content = content.replace(
      headerPattern,
      `  <!-- ======================================================================
       STEP 9: HEADER / NAVIGATION
       ======================================================================
       The header is consistent across all pages. Update:
       - Logo alt text (already set to placeholder)
       - Navigation links (update hrefs and text)
       - CTA button text/url
       ====================================================================== -->
$1`
    );
  }
  
  return content;
}

/**
 * Add instructional comments to main content
 */
function addMainComments(content) {
  // Check if main comments already exist
  if (content.includes('STEP 10: MAIN CONTENT')) {
    return content;
  }
  
  // Find the main tag and add comments before it
  const mainPattern = /(<main>)/;
  if (mainPattern.test(content)) {
    content = content.replace(
      mainPattern,
      `  <!-- ======================================================================
       STEP 10: MAIN CONTENT
       ======================================================================
       This is where your page content goes. Use semantic HTML and CSS
       classes from styles.css. See KING-TUT-TEMPLATE-GUIDE.md for
       component examples.
       ====================================================================== -->
$1`
    );
  }
  
  return content;
}

/**
 * Add instructional comments to footer
 */
function addFooterComments(content) {
  // Check if footer comments already exist
  if (content.includes('STEP 11: FOOTER')) {
    return content;
  }
  
  // Find the footer tag and add comments before it
  const footerPattern = /(<footer class="site-footer">)/;
  if (footerPattern.test(content)) {
    content = content.replace(
      footerPattern,
      `  <!-- ======================================================================
       STEP 11: FOOTER
       ======================================================================
       Footer is consistent across pages. Update:
       - Copyright year and site name
       - Footer navigation links
       ====================================================================== -->
$1`
    );
  }
  
  return content;
}

/**
 * Update a single file
 */
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Replace pond content
    content = replacePondContent(content);
    
    // Add instructional comments
    content = addHeaderComments(content);
    content = addMainComments(content);
    content = addFooterComments(content);
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      return { updated: true, file: filePath };
    }
    
    return { updated: false, file: filePath };
  } catch (error) {
    return { updated: false, file: filePath, error: error.message };
  }
}

/**
 * Main function
 */
function main() {
  console.log('🔄 Revamping all pages to follow training template structure...\n');
  
  const files = [
    path.join(ROOT, 'index.html'),
    ...findHTMLFiles(PAGES_DIR)
  ].filter(f => fs.existsSync(f));
  
  console.log(`Found ${files.length} HTML files to update\n`);
  
  const results = files.map(updateFile);
  const updated = results.filter(r => r.updated);
  const errors = results.filter(r => r.error);
  
  if (updated.length > 0) {
    console.log(`✅ Updated ${updated.length} files:`);
    updated.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}`);
    });
  }
  
  if (errors.length > 0) {
    console.log(`\n⚠️  Errors in ${errors.length} files:`);
    errors.forEach(r => {
      const relPath = path.relative(ROOT, r.file);
      console.log(`   - ${relPath}: ${r.error}`);
    });
  }
  
  console.log('\n✅ Done! All pages have been revamped to follow the training template.');
  console.log('📝 Note: You may need to manually review and update specific content sections.');
}

if (require.main === module) {
  main();
}

module.exports = { replacePondContent, updateFile };

