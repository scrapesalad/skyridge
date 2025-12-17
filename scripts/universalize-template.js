/**
 * ============================================================================
 * UNIVERSALIZE KING TUT TEMPLATE
 * ============================================================================
 * 
 * This script removes all niche-specific references (pond, contractor, etc.)
 * and replaces them with universal placeholders that work for ANY business.
 * 
 * Perfect for creating a clean starter template for trainees.
 * 
 * Usage: node scripts/universalize-template.js
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Universal replacements - converts niche-specific to generic
const REPLACEMENTS = {
  // Pond-specific terms
  'pond maintenance': 'service maintenance',
  'PUT PRIMARY SERVICE HERE': 'professional service',
  'pond repair': 'repair service',
  'pond installation': 'installation service',
  'pond restoration': 'restoration service',
  'pond opening': 'service setup',
  'pond closing': 'service completion',
  'pond service': 'professional service',
  'pond care': 'service care',
  'water garden': 'service area',
  'koi pond': 'specialty service',
  
  // Case variations
  'Pond Maintenance': 'Service Maintenance',
  'PUT PRIMARY SERVICE HERE': 'Professional Service',
  'Pond Repair': 'Repair Service',
  'Pond Installation': 'Installation Service',
  'Pond Restoration': 'Restoration Service',
  'Pond Service': 'Professional Service',
  'Pond Care': 'Service Care',
  'Water Garden': 'Service Area',
  'Koi Pond': 'Specialty Service',
  
  // ALL CAPS
  'POND MAINTENANCE': 'SERVICE MAINTENANCE',
  'PUT PRIMARY SERVICE HERE': 'PROFESSIONAL SERVICE',
  'POND SERVICE': 'PROFESSIONAL SERVICE',
  
  // Contractor-specific terms
  'find a contractor': 'find a professional',
  'contractor directory': 'professional directory',
  'local contractors': 'local professionals',
  'contractors in': 'professionals in',
  'contractor near': 'professional near',
  'contractor search': 'professional search',
  'hire a contractor': 'hire a professional',
  
  // Case variations
  'Find a Contractor': 'Find a Professional',
  'Contractor Directory': 'Professional Directory',
  'Local Contractors': 'Local Professionals',
  'Contractors in': 'Professionals in',
  'Contractor Near': 'Professional Near',
  'Contractor Search': 'Professional Search',
  'Hire a Contractor': 'Hire a Professional',
  
  // Service-specific placeholders
  'pond-maintenance.html': 'service-1.html',
  'pond-cleaning.html': 'service-2.html',
  'pond-restoration.html': 'service-3.html',
  'pond-opening-closing.html': 'service-4.html',
  
  // Generic improvements
  'cleaning and maintenance': 'service and maintenance',
  'repair and restoration': 'repair and service',
  'installation and setup': 'setup and service',
};

// Files and directories to process
const DIRECTORIES_TO_PROCESS = [
  'pages',
  'components',
  'index.html',
  'Start Here'
];

// Files to skip
const SKIP_PATTERNS = [
  'node_modules',
  '.git',
  'utahmmc-king-tut-master',
  'package-lock.json',
  'dist'
];

/**
 * Check if path should be skipped
 */
function shouldSkip(filepath) {
  return SKIP_PATTERNS.some(pattern => filepath.includes(pattern));
}

/**
 * Universalize content - replace niche-specific terms
 */
function universalizeContent(content) {
  let result = content;
  
  // Apply all replacements
  for (const [oldText, newText] of Object.entries(REPLACEMENTS)) {
    // Use regex with word boundaries for whole word replacement
    const regex = new RegExp(oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(regex, newText);
  }
  
  return result;
}

/**
 * Process a single file
 */
function processFile(filepath) {
  try {
    // Only process text files
    const ext = path.extname(filepath).toLowerCase();
    const textExtensions = ['.html', '.md', '.txt', '.js', '.css', '.json'];
    
    if (!textExtensions.includes(ext)) {
      return;
    }
    
    const content = fs.readFileSync(filepath, 'utf8');
    const universalized = universalizeContent(content);
    
    // Only write if changes were made
    if (content !== universalized) {
      fs.writeFileSync(filepath, universalized, 'utf8');
      console.log(`✅ Universalized: ${filepath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filepath}:`, error.message);
    return false;
  }
}

/**
 * Process directory recursively
 */
function processDirectory(dirPath) {
  let changedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      
      if (shouldSkip(fullPath)) {
        continue;
      }
      
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        changedCount += processDirectory(fullPath);
      } else if (stats.isFile()) {
        if (processFile(fullPath)) {
          changedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }
  
  return changedCount;
}

/**
 * Rename service files to generic names
 */
function renameServiceFiles() {
  const serviceDir = path.join(__dirname, '..', 'pages', 'services');
  
  if (!fs.existsSync(serviceDir)) {
    return;
  }
  
  const renames = [
    ['pond-maintenance.html', 'service-template-1.html'],
    ['pond-cleaning.html', 'service-template-2.html'],
    ['pond-restoration.html', 'service-template-3.html'],
    ['pond-opening-closing.html', 'service-template-4.html']
  ];
  
  for (const [oldName, newName] of renames) {
    const oldPath = path.join(serviceDir, oldName);
    const newPath = path.join(serviceDir, newName);
    
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`📝 Renamed: ${oldName} → ${newName}`);
    }
  }
}

/**
 * Rename contractor directory to professionals
 */
function renameContractorDirectory() {
  const oldDir = path.join(__dirname, '..', 'pages', 'contractor');
  const newDir = path.join(__dirname, '..', 'pages', 'examples');
  
  if (fs.existsSync(oldDir)) {
    fs.renameSync(oldDir, newDir);
    console.log(`📁 Renamed directory: contractor → examples`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 King Tut Template Universalization');
  console.log('=' .repeat(60));
  console.log('');
  console.log('Making your template work for ANY business category...');
  console.log('');
  
  let totalChanged = 0;
  
  // Process index.html
  if (fs.existsSync('index.html')) {
    if (processFile('index.html')) {
      totalChanged++;
    }
  }
  
  // Process directories
  for (const dir of DIRECTORIES_TO_PROCESS) {
    if (fs.existsSync(dir)) {
      console.log(`\n📂 Processing: ${dir}/`);
      const changed = processDirectory(dir);
      totalChanged += changed;
    }
  }
  
  // Rename files and directories
  console.log('\n📝 Renaming niche-specific files...');
  renameServiceFiles();
  renameContractorDirectory();
  
  console.log('');
  console.log('=' .repeat(60));
  console.log(`✨ Universalization complete!`);
  console.log(`📊 Files updated: ${totalChanged}`);
  console.log('');
  console.log('Your template is now ready for ANY business category!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Review changes in your files');
  console.log('2. Customize placeholders for your specific niche');
  console.log('3. See TRAINEE-CUSTOMIZATION-GUIDE.md for instructions');
  console.log('');
}

// Run the script
main();


