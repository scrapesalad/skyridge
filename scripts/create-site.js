#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { execSync } = require('child_process');

// --------- CONFIG: TEMPLATES & COLOR SCHEMES -----------------

// Load vertical presets
let verticals = {};
try {
  const verticalsPath = path.join(__dirname, '..', 'verticals.json');
  verticals = JSON.parse(fs.readFileSync(verticalsPath, 'utf-8'));
} catch (err) {
  console.warn('⚠️  Warning: Could not load verticals.json, using fallback');
  verticals = {
    'custom': {
      primaryService: 'Custom Service',
      serviceType: 'custom',
      homeDescription: 'Professional services',
      keywords: ['service', 'professional'],
      defaultServices: ['Service 1', 'Service 2']
    }
  };
}

const TEMPLATES = [
  { name: 'King Tut Classic – Service Business', folder: 'kingtut-classic' },
  { name: 'Corporate Split – Split-screen Hero & Icon Boxes', folder: 'corporate-split' },
  { name: 'One Page Parallax – Single-page Scrolling', folder: 'onepage-parallax' },
  { name: 'Portfolio Grid – Masonry Grid & Case Studies', folder: 'portfolio-grid' },
  { name: 'Agency Modern – Full-width Slider & Overlapping Cards', folder: 'agency-modern' }
];

const COLOR_SCHEMES = {
  Gold: {
    primary: '#C8A860',
    secondary: '#1A1A1A',
    accent: '#F5E1A4',
    background: '#FFFFFF',
    text: '#222222'
  },
  Ocean: {
    primary: '#0077B6',
    secondary: '#001f3f',
    accent: '#90E0EF',
    background: '#FFFFFF',
    text: '#111111'
  },
  Forest: {
    primary: '#2B7A0B',
    secondary: '#0B3D02',
    accent: '#A3EBB1',
    background: '#FFFFFF',
    text: '#1F2933'
  },
  Rose: {
    primary: '#E11D48',
    secondary: '#111827',
    accent: '#F9A8D4',
    background: '#FFFFFF',
    text: '#111827'
  }
};

// --------- UTILS ------------------------------------------------

async function copyDir(src, dest) {
  await fsp.mkdir(dest, { recursive: true });

  const entries = await fsp.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function replaceTokensInFile(filePath, replacements) {
  let content = await fsp.readFile(filePath, 'utf-8');

  // Replace new token format: {{TOKEN_NAME}}
  for (const [token, value] of Object.entries(replacements)) {
    const regex = new RegExp(`{{${token}}}`, 'g');
    // Special handling for KEYWORDS_ARRAY - don't escape quotes in JSON
    if (token === 'KEYWORDS_ARRAY') {
      content = content.replace(regex, value);
    } else {
      content = content.replace(regex, value);
    }
  }

  // Replace old placeholder format: PUT YOUR SITE NAME HERE, etc.
  const oldPlaceholders = {
    'PUT YOUR SITE NAME HERE': replacements.SITE_NAME,
    'PUT SITE NAME HERE': replacements.SITE_NAME,
    'PUT YOUR BUSINESS NAME HERE': replacements.BUSINESS_NAME,
    'PUT YOUR SERVICE TYPE HERE': replacements.SERVICE_TYPE,
    'PUT PRIMARY SERVICE HERE': replacements.PRIMARY_SERVICE,
    'PUT YOUR SERVICE AREA HERE': replacements.SERVICE_AREA,
    'PUT YOUR REGION HERE': replacements.REGION,
    'PUT YOUR AREA HERE': replacements.SERVICE_AREA,
    'PUT YOUR CITY HERE': replacements.CITY,
    'PUT CITY HERE': replacements.CITY,
    'PUT YEAR': replacements.YEAR_STARTED,
    'Place-website-domain-here': replacements.WEBSITE_URL.replace('https://', '').replace('http://', ''),
    'Place-website-domain-here/': replacements.WEBSITE_URL + '/',
    'https://Place-website-domain-here': replacements.WEBSITE_URL,
    'PUT YOUR HOME PAGE DESCRIPTION HERE': replacements.HOME_PAGE_DESCRIPTION,
    'PUT YOUR PAGE DESCRIPTION HERE': replacements.HOME_PAGE_DESCRIPTION,
    'PUT YOUR PAGE TITLE HERE': `About ${replacements.BUSINESS_NAME}`,
    'PUT PAGE TITLE HERE': `About ${replacements.BUSINESS_NAME}`,
    'PUT-PAGE-PATH-HERE': 'about.html',
    'PUT YOUR MAIN CTA TEXT HERE': 'GET FREE QUOTE',
    'PUT YOUR COMPANY DESCRIPTION HERE': replacements.BUSINESS_DESCRIPTION,
    'PUT YOUR COMPANY MISSION STATEMENT HERE': `delivering exceptional ${replacements.SERVICE_TYPE} services`,
    'PUT YOUR SERVICE PROVIDER TYPE HERE': replacements.SERVICE_TYPE.replace(/s$/, '') + ' provider',
    'PUT YOUR TARGET MARKET HERE': 'your needs',
    'PUT YOUR SERVICE DESCRIPTION HERE': `Professional ${replacements.SERVICE_TYPE} services`,
    'PUT YOUR SERVICE OPTION 1 HERE': replacements.SERVICE_TYPE,
    'PUT YOUR SERVICE OPTION 2 HERE': replacements.SERVICE_TYPE,
    'PUT-YOUR-GOOGLE-ANALYTICS-ID-HERE': replacements.GOOGLE_ANALYTICS_ID,
    'G-R7MX5CJ43F': replacements.GOOGLE_ANALYTICS_ID,
    // Additional common placeholders
    'PUT YOUR BENEFIT TITLE HERE': 'Professional Service',
    'PUT YOUR BENEFIT DESCRIPTION HERE': `Expert ${replacements.SERVICE_TYPE} solutions`,
    'PUT YOUR COMPANY STORY HERE': `${replacements.BUSINESS_NAME} has been providing exceptional ${replacements.SERVICE_TYPE} services in ${replacements.SERVICE_AREA} since ${replacements.YEAR_STARTED}. We are committed to delivering quality results and exceptional customer service.`,
    'PUT YOUR CTA HEADING HERE': 'Ready to Get Started?',
    'PUT YOUR CTA DESCRIPTION HERE': `Contact ${replacements.BUSINESS_NAME} today for a free quote on ${replacements.SERVICE_TYPE} services.`,
    // City page specific placeholders (will be replaced with actual city data if available)
    'PUT CITY NAME 1': replacements.CITY,
    'PUT CITY NAME 2': replacements.CITY,
    'PUT CITY NAME 3': replacements.CITY,
    'PUT CITY NAME 4': replacements.CITY,
    'PUT-CITY-SLUG-1': replacements.CITY.toLowerCase().replace(/\s+/g, '-'),
    'PUT-CITY-SLUG-2': replacements.CITY.toLowerCase().replace(/\s+/g, '-'),
    'PUT-CITY-SLUG-3': replacements.CITY.toLowerCase().replace(/\s+/g, '-'),
    'PUT-CITY-SLUG-4': replacements.CITY.toLowerCase().replace(/\s+/g, '-'),
  };

  for (const [placeholder, value] of Object.entries(oldPlaceholders)) {
    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, value);
  }

  await fsp.writeFile(filePath, content, 'utf-8');
}

async function replaceTokensRecursively(rootDir, replacements) {
  const entries = await fsp.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await replaceTokensRecursively(fullPath, replacements);
    } else if (entry.isFile()) {
      // Only replace in text-like files (including templates)
      if (/\.(html|htm|css|js|json|txt|md|template)$/i.test(entry.name)) {
        await replaceTokensInFile(fullPath, replacements);
      }
    }
  }
}

// Fix absolute paths to relative paths based on file depth
async function fixAbsolutePaths(filePath, siteRootDir) {
  let content = await fsp.readFile(filePath, 'utf-8');
  let modified = false;

  // Calculate depth: how many directories deep from site root
  const relativePath = path.relative(siteRootDir, path.dirname(filePath));
  const depth = relativePath === '.' ? 0 : relativePath.split(path.sep).length;
  
  // Build relative path prefix (e.g., "" for root, "../" for depth 1, "../../" for depth 2)
  const relativePrefix = depth > 0 ? '../'.repeat(depth) : '';

  // Only fix if file is in a subdirectory (depth > 0) or if it has absolute paths
  if (depth === 0) {
    // Root level files should use relative paths without ../
    // Check if they already have relative paths, if not, they might be fine
    return; // Root files should already have correct paths
  }

  // Fix CSS paths: /css/ -> ../css/ or ../../css/ (depending on depth)
  const cssHrefPattern = /href=["']\/css\//g;
  if (cssHrefPattern.test(content)) {
    content = content.replace(cssHrefPattern, `href="${relativePrefix}css/`);
    modified = true;
  }

  // Fix image src paths: /images/ -> ../images/ or ../../images/
  const imageSrcPattern = /src=["']\/images\//g;
  if (imageSrcPattern.test(content)) {
    content = content.replace(imageSrcPattern, `src="${relativePrefix}images/`);
    modified = true;
  }

  // Fix image URLs in CSS url(): /images/ -> ../images/
  const imageUrlPattern = /url\(["']?\/images\//g;
  if (imageUrlPattern.test(content)) {
    content = content.replace(imageUrlPattern, `url(${relativePrefix}images/`);
    modified = true;
  }

  // Fix background-image URLs: url('/images/...') -> url('../images/...')
  const bgImagePattern = /background-image:\s*url\(["']?\/images\//g;
  if (bgImagePattern.test(content)) {
    content = content.replace(bgImagePattern, `background-image: url(${relativePrefix}images/`);
    modified = true;
  }

  if (modified) {
    await fsp.writeFile(filePath, content, 'utf-8');
  }
}

// Fix paths recursively in all HTML files
async function fixPathsRecursively(rootDir, siteRootDir) {
  const entries = await fsp.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await fixPathsRecursively(fullPath, siteRootDir);
    } else if (entry.isFile()) {
      // Only fix paths in HTML files
      if (/\.(html|htm)$/i.test(entry.name)) {
        await fixAbsolutePaths(fullPath, siteRootDir);
      }
    }
  }
}

async function writeColorTokens(cssFilePath, scheme) {
  const cssContent = `
:root {
  --color-primary: ${scheme.primary};
  --color-secondary: ${scheme.secondary};
  --color-accent: ${scheme.accent};
  --color-background: ${scheme.background};
  --color-text: ${scheme.text};
}
`;
  await fsp.mkdir(path.dirname(cssFilePath), { recursive: true });
  await fsp.writeFile(cssFilePath, cssContent.trim() + '\n', 'utf-8');
}

// Fetch images with wget (if URL provided)
async function fetchImagesWithWget(sourceUrl, destDir) {
  try {
    console.log(`📸 Fetching images from: ${sourceUrl}`);
    console.log('   Note: Ensure you have rights to use these images.');
    
    // Check if wget is available
    let wgetPath = 'wget';
    try {
      // Try to find wget.exe on Windows
      if (process.platform === 'win32') {
        try {
          const wgetCheck = execSync('where.exe wget', { encoding: 'utf-8' }).trim();
          if (wgetCheck) {
            wgetPath = wgetCheck.split('\n')[0].trim();
          }
        } catch (e) {
          // Fall back to just 'wget'
        }
      }
      execSync(`"${wgetPath}" --version`, { stdio: 'ignore' });
    } catch (err) {
      console.warn('   ⚠️  wget not found. Skipping image fetch.');
      console.warn('   Install wget:');
      console.warn('     Windows: choco install wget');
      console.warn('     macOS: brew install wget');
      console.warn('     Linux: apt-get install wget');
      console.warn('   Or manually add images to images/stock/');
      return;
    }

    // Improved wget command for higher quality images
    // Reject social media icons, logos, and small images
    const rejectPatterns = [
      'icon', 'logo', 'favicon', 'thumbnail', 'thumb', 'small', 'avatar',
      'instagram', 'facebook', 'twitter', 'linkedin', 'social', 'share',
      'sprite', 'button', 'badge', 'widget', 'emoji', 'smiley'
    ].join(',');

    const cmd = [
      `"${wgetPath}"`,
      '-r',               // recursive
      '-l2',              // depth 2 (increased from 1 to get more images)
      '-H',               // span hosts (follow links to other domains)
      '-t3',              // tries 3 (increased for reliability)
      '-nd',              // no directory structure (flat output)
      '-N',               // only new files
      '-np',              // no parent (don't go up directories)
      '-A', 'jpg,jpeg,png,gif,webp',  // accept image extensions
      '-R', rejectPatterns,  // reject social icons, logos, thumbnails
      '--no-check-certificate',  // skip SSL verification (for some sites)
      '-e', 'robots=off', // ignore robots.txt (use carefully)
      '--user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',  // better user agent
      '--timeout=30',     // timeout for each request
      '--tries=3',        // retry failed downloads
      '--page-requisites', // get page requisites (CSS, images, etc.)
      `"${sourceUrl}"`,
      '-P', `"${destDir}"`
    ].join(' ');

    console.log('   🔍 Scraping for high-quality images...');
    execSync(cmd, { stdio: 'inherit' });
    
    // Filter out small/blurry images, social icons, and logos by file size and filename
    console.log('   🎨 Filtering for high-quality content images (min 50KB, excluding social icons/logos)...');
    const scrapedFiles = await fsp.readdir(destDir);
    const imageFiles = [];
    
    // Patterns to identify social media icons, logos, and non-content images
    const socialIconPatterns = [
      /instagram/i, /facebook/i, /twitter/i, /linkedin/i, /pinterest/i,
      /social/i, /share/i, /icon/i, /logo/i, /favicon/i, /avatar/i,
      /sprite/i, /button/i, /badge/i, /widget/i, /emoji/i, /smiley/i,
      /^[a-z0-9]{1,2}[_-]/i,  // Very short filenames (often icons)
      /^[A-Z][a-z]-[A-Z]/i,   // Pattern like "De-Dwpd5CHc.png" (social icons)
      /^[a-z]+-[a-z]+-[a-z]+/i // Pattern like "lam-fZmwmvn.png"
    ];
    
    // Collect all image files with their sizes
    for (const file of scrapedFiles) {
      if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        const filePath = path.join(destDir, file);
        try {
          const stats = await fsp.stat(filePath);
          const fileSizeKB = stats.size / 1024;
          
          // Check if filename indicates it's a social icon or logo
          const isSocialIcon = socialIconPatterns.some(pattern => pattern.test(file));
          
          // Only keep images that are:
          // 1. Larger than 50KB (increased threshold for better quality)
          // 2. Not identified as social icons/logos by filename
          if (fileSizeKB >= 50 && !isSocialIcon) {
            imageFiles.push({ name: file, path: filePath, size: stats.size });
          } else {
            // Remove small images or social icons
            await fsp.unlink(filePath);
          }
        } catch (err) {
          // Skip if file can't be accessed
        }
      }
    }
    
    // Sort by file size (largest first) to prioritize high-quality images
    imageFiles.sort((a, b) => b.size - a.size);
    
    // Keep top 30 largest images (reduced to focus on best quality)
    const maxImages = 30;
    let removedCount = 0;
    if (imageFiles.length > maxImages) {
      for (let i = maxImages; i < imageFiles.length; i++) {
        await fsp.unlink(imageFiles[i].path);
        removedCount++;
      }
      imageFiles.splice(maxImages);
    }
    
    const keptCount = imageFiles.length;
    const totalRemoved = scrapedFiles.length - keptCount;
    
    console.log(`   ✅ Images fetched: ${keptCount} high-quality content images kept`);
    console.log(`   🗑️  Removed: ${totalRemoved} social icons, logos, and small images`);
    if (keptCount > 0) {
      const avgSize = Math.round(imageFiles.reduce((sum, img) => sum + (img.size / 1024), 0) / keptCount);
      console.log(`   📊 Average image size: ${avgSize}KB`);
    } else {
      console.warn('   ⚠️  No suitable content images found. Consider using stock images or providing a gallery/media page URL.');
    }
  } catch (err) {
    console.warn('   ⚠️  Error fetching images:', err.message);
    console.warn('   You can manually add images to images/stock/');
  }
}

// Generate setup guide from template
async function generateSetupGuide(templatePath, outputPath, replacements) {
  if (!fs.existsSync(templatePath)) {
    console.warn(`   ⚠️  Setup template not found: ${templatePath}`);
    return;
  }
  
  let content = await fsp.readFile(templatePath, 'utf-8');
  
  for (const [token, value] of Object.entries(replacements)) {
    const regex = new RegExp(`{{${token}}}`, 'g');
    content = content.replace(regex, value);
  }
  
  await fsp.writeFile(outputPath, content, 'utf-8');
  console.log('   ✅ Generated SETUP.md');
}

// Process template files (site.config.json.template, package.json.template, etc.)
async function processTemplateFiles(rootDir, destDir, replacements) {
  const templateFiles = [
    { src: 'site.config.json.template', dest: 'site.config.json' },
    { src: 'package.json.template', dest: 'package.json' }
  ];
  
  for (const template of templateFiles) {
    const srcPath = path.join(rootDir, template.src);
    const destPath = path.join(destDir, template.dest);
    
    if (fs.existsSync(srcPath)) {
      let content = await fsp.readFile(srcPath, 'utf-8');
      
      for (const [token, value] of Object.entries(replacements)) {
        const regex = new RegExp(`{{${token}}}`, 'g');
        content = content.replace(regex, value);
      }
      
      await fsp.writeFile(destPath, content, 'utf-8');
      console.log(`   ✅ Generated ${template.dest}`);
    }
  }
}

// --------- MAIN FLOW --------------------------------------------

async function run() {
  console.log('\n🟡 King Tut Site Wizard\n');

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'businessName',
      message: 'Business Name:',
      validate: (v) => v.trim() ? true : 'Please enter a business name.'
    },
    {
      type: 'input',
      name: 'siteName',
      message: 'Site Name (optional, press enter to reuse Business Name):'
    },
    {
      type: 'list',
      name: 'verticalKey',
      message: 'What type of site is this?',
      choices: Object.keys(verticals).map(key => ({
        name: verticals[key].label || verticals[key].primaryService,
        value: key
      }))
    },
    {
      type: 'input',
      name: 'domain',
      message: 'Domain (e.g. yoursite.com, without https://):',
      validate: (v) => v.trim() ? true : 'Please enter a domain.'
    },
    {
      type: 'input',
      name: 'serviceArea',
      message: 'Primary Service Area (e.g. Denver Metro Area):',
      default: 'Your Area'
    },
    {
      type: 'input',
      name: 'yearStarted',
      message: 'Year started (e.g. 2015):',
      default: '2020'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Phone number:',
      default: '(555) 123-4567'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
      default: (ans) => `info@${ans.domain || 'yoursite.com'}`
    },
    {
      type: 'input',
      name: 'street',
      message: 'Street address:',
      default: '123 Main Street'
    },
    {
      type: 'input',
      name: 'city',
      message: 'City:',
      default: 'Your City'
    },
    {
      type: 'input',
      name: 'state',
      message: 'State (2-letter code):',
      default: 'ST'
    },
    {
      type: 'input',
      name: 'zip',
      message: 'ZIP/Postal code:',
      default: '12345'
    },
    {
      type: 'input',
      name: 'country',
      message: 'Country:',
      default: 'USA'
    },
    {
      type: 'list',
      name: 'template',
      message: 'Choose a starting template:',
      choices: TEMPLATES.map((t) => t.name)
    },
    {
      type: 'list',
      name: 'colorScheme',
      message: 'Choose a color scheme:',
      choices: Object.keys(COLOR_SCHEMES).concat('Custom')
    },
    {
      type: 'input',
      name: 'customPrimary',
      message: 'Custom primary color (hex, e.g. #C8A860):',
      when: (ans) => ans.colorScheme === 'Custom',
      default: '#C8A860'
    },
    {
      type: 'input',
      name: 'customSecondary',
      message: 'Custom secondary color (hex):',
      when: (ans) => ans.colorScheme === 'Custom',
      default: '#1A1A1A'
    },
    {
      type: 'input',
      name: 'customAccent',
      message: 'Custom accent color (hex):',
      when: (ans) => ans.colorScheme === 'Custom',
      default: '#F5E1A4'
    },
    {
      type: 'input',
      name: 'customBackground',
      message: 'Custom background color (hex):',
      when: (ans) => ans.colorScheme === 'Custom',
      default: '#FFFFFF'
    },
    {
      type: 'input',
      name: 'customText',
      message: 'Custom text color (hex):',
      when: (ans) => ans.colorScheme === 'Custom',
      default: '#222222'
    },
    {
      type: 'input',
      name: 'customServices',
      message: 'List up to 6 core services (comma separated). Press enter to use defaults:',
      default: (ans) => {
        const vertical = verticals[ans.verticalKey];
        return vertical && vertical.services ? vertical.services.join(', ') : '';
      },
      when: (ans) => {
        const vertical = verticals[ans.verticalKey];
        return vertical && vertical.services && vertical.services.length > 0;
      }
    },
    {
      type: 'input',
      name: 'outputFolder',
      message: 'Output folder name (where to generate the site):',
      default: (ans) =>
        ans.businessName.trim().toLowerCase().replace(/\s+/g, '-')
    },
    {
      type: 'input',
      name: 'imageSourceUrl',
      message: 'Optional: URL to scrape images from (e.g. current site, media page). Press enter to skip:',
      default: ''
    }
  ]);

  // Get vertical preset
  const vertical = verticals[answers.verticalKey];
  if (!vertical) {
    console.error(`❌ Vertical "${answers.verticalKey}" not found in verticals.json`);
    process.exit(1);
  }

  // Parse services (use custom if provided, otherwise use vertical defaults)
  let finalServices = [];
  if (answers.customServices && answers.customServices.trim()) {
    finalServices = answers.customServices
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .slice(0, 6); // Limit to 6 services
  } else if (vertical.services && Array.isArray(vertical.services)) {
    finalServices = vertical.services.slice(0, 6); // Limit to 6 services
  }

  const siteName = answers.siteName.trim() || answers.businessName.trim();

  const templateFolder = TEMPLATES.find((t) => t.name === answers.template).folder;

  const rootDir = process.cwd();
  const srcTemplateDir = path.join(rootDir, 'templates', templateFolder);
  const destSiteDir = path.join(rootDir, answers.outputFolder);

  // Check if template exists
  if (!fs.existsSync(srcTemplateDir)) {
    console.error(`❌ Template folder not found: ${srcTemplateDir}`);
    console.error('   Available templates:', TEMPLATES.map(t => t.folder).join(', '));
    process.exit(1);
  }

  // Build color scheme
  const scheme = answers.colorScheme === 'Custom'
    ? {
        primary: answers.customPrimary,
        secondary: answers.customSecondary,
        accent: answers.customAccent,
        background: answers.customBackground,
        text: answers.customText
      }
    : COLOR_SCHEMES[answers.colorScheme];

  // Tokens to replace in templates
  const currentYear = new Date().getFullYear().toString();
  const domain = answers.domain.trim();
  const domainSlug = domain.replace(/\./g, '-');
  const fullUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  
  const replacements = {
    BUSINESS_NAME: answers.businessName,
    SITE_NAME: siteName,
    DOMAIN: domain,
    DOMAIN_SLUG: domainSlug,
    FULL_URL: fullUrl,
    SERVICE_TYPE: vertical.serviceType,
    PRIMARY_SERVICE: vertical.primaryService,
    SERVICE_AREA: answers.serviceArea,
    REGION: answers.serviceArea,
    YEAR_STARTED: answers.yearStarted,
    CURRENT_YEAR: currentYear,
    // Default values for optional tokens
    TARGET_AUDIENCE: 'your needs',
    CITY: answers.city || answers.serviceArea.split(',')[0] || answers.serviceArea,
    CITY_1: answers.serviceArea.split(',')[0] || answers.city || 'City 1',
    CITY_2: answers.serviceArea.split(',')[1]?.trim() || 'City 2',
    CITY_3: answers.serviceArea.split(',')[2]?.trim() || 'City 3',
    CITY_4: answers.serviceArea.split(',')[3]?.trim() || 'City 4',
    CITY_SLUG_1: (answers.serviceArea.split(',')[0] || answers.city || 'city-1').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_2: (answers.serviceArea.split(',')[1]?.trim() || 'city-2').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_3: (answers.serviceArea.split(',')[2]?.trim() || 'city-3').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_4: (answers.serviceArea.split(',')[3]?.trim() || 'city-4').toLowerCase().replace(/\s+/g, '-'),
    HOME_PAGE_DESCRIPTION: vertical.homeDescription || `Professional ${vertical.primaryService} services in ${answers.serviceArea}. Quality service, competitive pricing, guaranteed results.`,
    KEYWORDS: vertical.keywords ? vertical.keywords.join(', ') : `${vertical.serviceType}, ${answers.businessName}, ${answers.serviceArea}`,
    KEYWORDS_ARRAY: vertical.keywords ? `"${vertical.keywords.join('", "')}"` : `"${vertical.serviceType}", "${answers.businessName}"`,
    WEBSITE_URL: fullUrl,
    BUSINESS_DESCRIPTION: `Professional ${vertical.primaryService} services in ${answers.serviceArea}`,
    PHONE_NUMBER: answers.phone,
    PHONE: answers.phone,
    EMAIL: answers.email,
    STREET: answers.street,
    STREET_ADDRESS: answers.street,
    CITY_ADDRESS: answers.city,
    STATE: answers.state,
    ZIP: answers.zip,
    POSTAL_CODE: answers.zip,
    COUNTRY: answers.country,
    FACEBOOK_URL: `https://facebook.com/${domainSlug}`,
    INSTAGRAM_URL: `https://instagram.com/${domainSlug}`,
    LINKEDIN_URL: `https://linkedin.com/company/${domainSlug}`,
    GOOGLE_ANALYTICS_ID: 'UA-XXXXX-Y',
    PRIMARY_COLOR: scheme.primary,
    SECONDARY_COLOR: scheme.secondary,
    ACCENT_COLOR: scheme.accent,
    BACKGROUND_COLOR: scheme.background,
    TEXT_COLOR: scheme.text,
    // Service tokens (up to 6 services)
    SERVICE_1: finalServices[0] || '',
    SERVICE_2: finalServices[1] || '',
    SERVICE_3: finalServices[2] || '',
    SERVICE_4: finalServices[3] || '',
    SERVICE_5: finalServices[4] || '',
    SERVICE_6: finalServices[5] || ''
  };

  console.log('\n📂 Creating site at:', destSiteDir);
  await copyDir(srcTemplateDir, destSiteDir);

  // Copy CSS files from root directory (template CSS folder may be empty)
  const rootCssDir = path.join(rootDir, 'css');
  const destCssDir = path.join(destSiteDir, 'css');
  
  if (fs.existsSync(rootCssDir)) {
    const rootCssFiles = await fsp.readdir(rootCssDir);
    for (const file of rootCssFiles) {
      if (file.endsWith('.css') && file !== 'design-tokens-override.css') {
        // Skip design-tokens-override.css as we'll generate it
        const srcFile = path.join(rootCssDir, file);
        const destFile = path.join(destCssDir, file);
        await fsp.copyFile(srcFile, destFile);
      }
    }
    console.log('   ✅ Copied CSS files from root directory');
  }

  console.log('🎨 Applying color scheme...');
  const cssTokensFile = path.join(destSiteDir, 'css', 'design-tokens-override.css');
  await writeColorTokens(cssTokensFile, scheme);

  // Process template files (site.config.json, package.json)
  console.log('📄 Generating config files...');
  await processTemplateFiles(rootDir, destSiteDir, replacements);

  // Generate setup guide
  console.log('📖 Generating setup guide...');
  const setupTemplatePath = path.join(rootDir, 'SETUP.template.md');
  const setupOutputPath = path.join(destSiteDir, 'SETUP.md');
  await generateSetupGuide(setupTemplatePath, setupOutputPath, replacements);

  // Handle images
  console.log('🖼️  Handling images...');
  const imagesStockDir = path.join(rootDir, 'stock-images', answers.verticalKey);
  const imagesStockDest = path.join(destSiteDir, 'images', 'stock');
  
  if (fs.existsSync(imagesStockDir)) {
    await copyDir(imagesStockDir, imagesStockDest);
    console.log('   ✅ Copied stock images for', vertical.primaryService);
  } else {
    console.log('   ℹ️  No stock images found for this vertical');
  }

  // Optionally fetch images from URL
  if (answers.imageSourceUrl && answers.imageSourceUrl.trim()) {
    const imagesScrapedDest = path.join(destSiteDir, 'images', 'scraped');
    await fsp.mkdir(imagesScrapedDest, { recursive: true });
    await fetchImagesWithWget(answers.imageSourceUrl.trim(), imagesScrapedDest);
    console.log(`   📁 Scraped images saved to: images/scraped/`);
    
    // Copy scraped images to main images folder to replace template/stock images
    const mainImagesDir = path.join(destSiteDir, 'images');
    const scrapedFiles = await fsp.readdir(imagesScrapedDest);
    const imageFiles = scrapedFiles.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
    
    if (imageFiles.length > 0) {
      // Get list of images in main images folder (from template) that need to be replaced
      let existingImageNames = [];
      if (fs.existsSync(mainImagesDir)) {
        const mainFiles = await fsp.readdir(mainImagesDir, { withFileTypes: true });
        // Only get image files, exclude directories like 'logo' and 'stock'
        existingImageNames = mainFiles
          .filter(f => f.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
          .map(f => f.name);
      }
      
      // If no existing images in main folder, check stock folder
      if (existingImageNames.length === 0) {
        const stockImagesDir = path.join(destSiteDir, 'images', 'stock');
        if (fs.existsSync(stockImagesDir)) {
          const stockFiles = await fsp.readdir(stockImagesDir);
          existingImageNames = stockFiles.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        }
      }
      
      // If still no images, use default gallery image names from template
      if (existingImageNames.length === 0) {
        existingImageNames = [
          'Gemini_Generated_Image_3171973171973171.png',
          'Gemini_Generated_Image_6xm42n6xm42n6xm4.png',
          'Gemini_Generated_Image_7uiph7uiph7uiph7.png',
          'Gemini_Generated_Image_8c0h358c0h358c0h.png',
          'Gemini_Generated_Image_f836zcf836zcf836.png',
          'Gemini_Generated_Image_fbz66qfbz66qfbz6.png'
        ];
      }
      
      // Copy scraped images to main images folder, replacing existing images
      const imagesToCopy = Math.min(imageFiles.length, existingImageNames.length);
      for (let i = 0; i < imagesToCopy; i++) {
        const scrapedFile = path.join(imagesScrapedDest, imageFiles[i]);
        const destFile = path.join(mainImagesDir, existingImageNames[i]);
        await fsp.copyFile(scrapedFile, destFile);
      }
      
      // Copy remaining scraped images with their original names
      for (let i = imagesToCopy; i < imageFiles.length; i++) {
        const scrapedFile = path.join(imagesScrapedDest, imageFiles[i]);
        const destFile = path.join(mainImagesDir, imageFiles[i]);
        await fsp.copyFile(scrapedFile, destFile);
      }
      
      console.log(`   ✅ Replaced ${imagesToCopy} images in main images folder with scraped images`);
    }
  }

  console.log('✏️ Replacing template tokens in all files...');
  const htmlFiles = [];
  async function countHtmlFiles(dir) {
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await countHtmlFiles(fullPath);
      } else if (entry.isFile() && /\.(html|htm)$/i.test(entry.name)) {
        htmlFiles.push(fullPath);
      }
    }
  }
  await countHtmlFiles(destSiteDir);
  console.log(`   Processing ${htmlFiles.length} HTML files...`);
  
  await replaceTokensRecursively(destSiteDir, replacements);

  // Fix absolute paths to relative paths for local file viewing
  console.log('🔧 Fixing CSS and image paths for local viewing...');
  await fixPathsRecursively(destSiteDir, destSiteDir);
  console.log('   ✅ Fixed absolute paths to relative paths');

  console.log('\n✅ Done! Generated site at:', answers.outputFolder);
  console.log(`   Generated ${htmlFiles.length} pages with all tokens replaced.`);
  console.log(`   Vertical: ${vertical.primaryService}`);
  console.log(`   Domain: ${fullUrl}`);
  console.log('   Open index.html in your browser or serve the folder with any static server.\n');
}

run().catch((err) => {
  console.error('❌ Error running King Tut wizard:', err);
  process.exit(1);
});

