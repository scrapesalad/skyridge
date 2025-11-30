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
  { name: 'Agency Modern – Full-width Slider & Overlapping Cards', folder: 'agency-modern' },
  { name: 'Marketing Landing – Next.js & Tailwind CSS', folder: 'king-tut-templates/marketing-landing' }
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
    'PUT YOUR SERVICE TYPE HERE': replacements.PRIMARY_SERVICE, // Use PRIMARY_SERVICE for better consistency
    'PUT PRIMARY SERVICE HERE': replacements.PRIMARY_SERVICE,
    'PUT YOUR PRIMARY SERVICE HERE': replacements.PRIMARY_SERVICE,
    'YOUR PRIMARY SERVICE': replacements.PRIMARY_SERVICE,
    'PRIMARY SERVICE': replacements.PRIMARY_SERVICE,
    '{{PRIMARY_SERVICE}}': replacements.PRIMARY_SERVICE, // Also handle token format
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
  // Also fix invalid patterns like /../css/ or /css/ that should be relative
  const cssHrefPattern = /href=["']\/\.\.\/css\//g;
  if (cssHrefPattern.test(content)) {
    content = content.replace(cssHrefPattern, `href="${relativePrefix}css/`);
    modified = true;
  }
  const cssHrefPattern2 = /href=["']\/css\//g;
  if (cssHrefPattern2.test(content)) {
    content = content.replace(cssHrefPattern2, `href="${relativePrefix}css/`);
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
    // Reject social media icons, logos, and small images - be very aggressive
    const rejectPatterns = [
      'icon', 'logo', 'favicon', 'thumbnail', 'thumb', 'small', 'avatar',
      'instagram', 'facebook', 'twitter', 'linkedin', 'pinterest', 'social', 'share',
      'sprite', 'button', 'badge', 'widget', 'emoji', 'smiley', 'cdninstagram',
      'static.cdninstagram', 'wixstatic', 'rsrc.php', 'index.html', '.tmp',
      'VsNE', 'lam-', 'aM-g', 'H1l_', '-7Z_', 'De-Dw', 'base_logo'
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
    
    // Patterns to identify social media icons, logos, and non-content images - be very aggressive
    const socialIconPatterns = [
      /instagram/i, /facebook/i, /twitter/i, /linkedin/i, /pinterest/i,
      /social/i, /share/i, /icon/i, /logo/i, /favicon/i, /avatar/i,
      /sprite/i, /button/i, /badge/i, /widget/i, /emoji/i, /smiley/i,
      /cdninstagram/i, /static\.cdninstagram/i, /wixstatic/i, // CDN patterns
      /^[a-z0-9]{1,2}[_-]/i,  // Very short filenames (often icons)
      /^[A-Z][a-z]-[A-Z]/i,   // Pattern like "De-Dwpd5CHc.png" (social icons)
      /^[a-z]+-[a-z]+-[a-z]+/i, // Pattern like "lam-fZmwmvn.png"
      /^-[A-Z]/i,              // Pattern like "-7Z_RkdLJUX.png" (Instagram)
      /^[A-Z][a-z]-[A-Z][a-z]/i, // Pattern like "De-Dwpd5CHc.png"
      /rsrc\.php/i,            // Instagram resource URLs
      /\.tmp$/i,               // Temporary files
      /^VsNE/i, /^lam-/i, /^aM-g/i, /^H1l_/i, /^-7Z_/i, /^De-Dw/i, // Specific Instagram patterns
      /base_logo/i,            // Logo files
      /index\.html/i           // HTML files that shouldn't be images
    ];
    
    // First pass: Remove all non-image files (HTML, CSS, JS, etc.)
    for (const file of scrapedFiles) {
      const filePath = path.join(destDir, file);
      try {
        // Remove HTML files, CSS, JS, and other non-image files
        if (/\.(html|htm|css|js|json|txt|xml|svg)$/i.test(file) || file.includes('index') || file.includes('.tmp')) {
          await fsp.unlink(filePath);
          continue;
        }
      } catch (err) {
        // Skip if file can't be accessed
      }
    }
    
    // Re-read directory after cleanup
    const cleanedFiles = await fsp.readdir(destDir);
    
    // Collect all image files with their sizes
    for (const file of cleanedFiles) {
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

// Load nationwide cities list
function loadNationwideCities() {
  try {
    const citiesPath = path.join(__dirname, '..', 'nationwide-cities.json');
    const citiesData = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));
    return citiesData;
  } catch (err) {
    console.warn('⚠️  Warning: Could not load nationwide-cities.json, using fallback list');
    return [
      'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
      'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA',
      'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL'
    ];
  }
}

// Convert city name to slug
function slugifyCity(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Parse city, state from string like "Denver, CO"
function parseCityState(cityStateStr) {
  const parts = cityStateStr.split(',').map(s => s.trim());
  if (parts.length >= 2) {
    return { cityName: parts[0], stateAbbr: parts[1] };
  }
  return { cityName: parts[0] || '', stateAbbr: '' };
}

// Get state name from abbreviation
function getStateName(abbr) {
  const states = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
    'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
    'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
    'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
    'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
    'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
    'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
    'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
    'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
    'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
    'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'District of Columbia'
  };
  return states[abbr.toUpperCase()] || abbr;
}

// Generate SEO content for a city
/**
 * Build SEO-optimized content for a city page
 * @param {Object} cityData - City information {cityName, stateAbbr, stateName, citySlug, countyName?}
 * @param {Object} vertical - Vertical/service type info from verticals.json
 * @param {Object} business - Business information {name, phone, email, url, serviceAreaLabel?, yearsInBusiness?}
 * @returns {Object} SEO content {title, metaDescription, h1, heroText, faq, serviceSlug, citySlug}
 */
function buildSeoForCity(cityData, vertical, business) {
  const { cityName, stateAbbr, stateName, citySlug, countyName } = cityData;
  const state = stateAbbr.toUpperCase();
  const cityState = `${cityName}, ${state}`;
  
  // Service information
  const serviceLabel = vertical.primaryService;
  const serviceType = vertical.serviceType || vertical.primaryService.toLowerCase();
  
  // Build SEO descriptor from vertical data
  const seoDescriptor = vertical.homeDescription 
    ? vertical.homeDescription.toLowerCase()
    : `reliable ${serviceType} for local customers`;
  
  // Phone formatting
  const phoneDisplay = business.phone || '';
  const phoneShort = phoneDisplay.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  const phoneSentence = phoneDisplay
    ? ` Call ${phoneShort || phoneDisplay} for a free quote.`
    : '';
  
  // Years in business / experience sentence
  const yearsInBusiness = business.yearsInBusiness || null;
  const serviceAreaLabel = business.serviceAreaLabel || countyName || cityState;
  const yearsSentence = yearsInBusiness
    ? ` With over ${yearsInBusiness}+ years of experience in the ${serviceAreaLabel} area,`
    : ` As a local provider in ${serviceAreaLabel},`;
  
  // Benefit hook - use first service or generic benefit
  const firstService = vertical.services && vertical.services.length > 0 
    ? vertical.services[0].toLowerCase()
    : serviceType;
  const benefitHook = `We focus on quality workmanship, clear communication, and dependable scheduling.`;
  
  // Audience phrase (can be customized per vertical)
  const audiencePhrase = ''; // Can be extended with vertical.audience if needed
  
  // Title: Service in City, State | Business Name
  const title = `${serviceLabel} in ${cityState} | ${business.name}`;
  
  // Meta description: Business provides service in City, State. Description. Call for quote.
  const metaDescription = `${business.name} provides ${serviceLabel.toLowerCase()} in ${cityState}. ${seoDescriptor}.${phoneSentence}`.trim();
  
  // H1: Service in City, State
  const h1 = `${serviceLabel} in ${cityState}`;
  
  // Hero text: Experience sentence + business delivers service + benefit hook
  const heroText = `${yearsSentence} ${business.name} delivers ${serviceType} in ${cityName}${audiencePhrase}. ${benefitHook}`.replace(/\s+/g, ' ').trim();
  
  // FAQ - 4 questions optimized for local SEO
  const faq = [
    {
      q: `Do you offer free estimates for ${serviceType} in ${cityName}?`,
      a: `Yes. ${business.name} offers free, no-obligation estimates for ${serviceType} in ${cityName} and surrounding ${state} communities.${phoneSentence}`
    },
    {
      q: `Which areas around ${cityName} do you serve?`,
      a: `We primarily serve ${cityState}${serviceAreaLabel && serviceAreaLabel !== cityState ? ` and the wider ${serviceAreaLabel}` : ''}, along with nearby neighborhoods. If you're not sure whether we cover your area, contact us and we'll confirm.`
    },
    {
      q: `How soon can you schedule ${serviceType} in ${cityName}?`,
      a: `Scheduling depends on the season and demand, but we work hard to provide fast turnaround times for customers in ${cityState}. Let us know your preferred dates and we'll do our best to accommodate you.`
    },
    {
      q: `Why choose ${business.name} for ${serviceType} in ${cityName}?`,
      a: `${business.name} combines local expertise with professional service. We focus on clear communication, fair pricing, and delivering consistent results for every ${serviceType} project in ${cityName}.`
    }
  ];
  
  // Service slug for URLs
  const serviceSlug = vertical.primaryService.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    title,
    metaDescription,
    h1,
    heroText,
    faq,
    serviceSlug,
    citySlug
  };
}

// Build city data entries based on service area mode
function buildCityEntries(answers, vertical, business) {
  const cities = {};
  const stateName = getStateName(answers.stateAbbr || answers.state);
  
  if (answers.serviceAreaMode === 'city') {
    // Single city mode
    const cityName = answers.cityName || answers.city;
    const stateAbbr = answers.stateAbbr || answers.state;
    const citySlug = slugifyCity(cityName);
    
    cities[citySlug] = {
      cityName,
      citySlug,
      stateAbbr: stateAbbr.toUpperCase(),
      stateName,
      businessName: business.name,
      primaryService: vertical.primaryService,
      phoneNumber: business.phone,
      email: business.email,
      baseUrl: business.url,
      ...buildSeoForCity({ cityName, citySlug, stateAbbr, stateName }, vertical, business)
    };
    
  } else if (answers.serviceAreaMode === 'county') {
    // County/metro mode - parse top cities
    const cityNames = answers.countyTopCities
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    
    const stateAbbr = answers.stateAbbr || answers.state;
    
    for (const cityName of cityNames) {
      const citySlug = slugifyCity(cityName);
      
      cities[citySlug] = {
        cityName,
        citySlug,
        countyName: answers.countyName,
        stateAbbr: stateAbbr.toUpperCase(),
        stateName,
        businessName: business.name,
        primaryService: vertical.primaryService,
        phoneNumber: business.phone,
        email: business.email,
        baseUrl: business.url,
        ...buildSeoForCity({ cityName, citySlug, stateAbbr, stateName, countyName: answers.countyName }, vertical, business)
      };
    }
    
  } else if (answers.serviceAreaMode === 'nationwide') {
    // Nationwide mode - use nationwide cities list
    const nationwideCities = loadNationwideCities();
    
    for (const cityStateStr of nationwideCities) {
      const { cityName, stateAbbr } = parseCityState(cityStateStr);
      if (!cityName || !stateAbbr) continue;
      
      const citySlug = slugifyCity(cityName);
      const stateName = getStateName(stateAbbr);
      
      cities[citySlug] = {
        cityName,
        citySlug,
        stateAbbr: stateAbbr.toUpperCase(),
        stateName,
        businessName: business.name,
        primaryService: vertical.primaryService,
        phoneNumber: business.phone,
        email: business.email,
        baseUrl: business.url,
        ...buildSeoForCity({ cityName, citySlug, stateAbbr, stateName }, vertical, business)
      };
    }
  }
  
  return cities;
}

// Generate city pages from city data
async function generateCityPages(destDir, cityData, templateDir, replacements) {
  const citiesDir = path.join(destDir, 'pages', 'cities');
  
  // Remove old city pages if they exist (we'll generate new ones)
  if (fs.existsSync(citiesDir)) {
    const oldFiles = await fsp.readdir(citiesDir);
    for (const file of oldFiles) {
      if (file.endsWith('.html') && file !== 'index.html') {
        await fsp.unlink(path.join(citiesDir, file));
      }
    }
  }
  
  await fsp.mkdir(citiesDir, { recursive: true });
  
  const cityTemplatePath = path.join(templateDir, 'pages', 'cities', 'salt-lake-city-ut.html');
  let cityTemplate = '';
  
  if (fs.existsSync(cityTemplatePath)) {
    cityTemplate = await fsp.readFile(cityTemplatePath, 'utf-8');
  } else {
    // Fallback: use _TEMPLATE-CITY.html if available
    const fallbackTemplate = path.join(templateDir, 'pages', '_TEMPLATE-CITY.html');
    if (fs.existsSync(fallbackTemplate)) {
      cityTemplate = await fsp.readFile(fallbackTemplate, 'utf-8');
    } else {
      console.warn('   ⚠️  No city template found, skipping city page generation');
      return;
    }
  }
  
  let generatedCount = 0;
  for (const [citySlug, city] of Object.entries(cityData)) {
    const cityReplacements = {
      ...replacements,
      // City-specific tokens (both old and new format)
      'PUT CITY NAME HERE': city.cityName,
      'PUT CITY NAME 1': city.cityName,
      'PUT-CITY-SLUG-HERE': citySlug,
      'PUT STATE CODE HERE': city.stateAbbr,
      'PUT STATE HERE': city.stateAbbr,
      'PUT STATE NAME HERE': city.stateName,
      'PUT SERVICES HERE': city.primaryService,
      'PUT YOUR CITY-SPECIFIC DESCRIPTION HERE': city.metaDescription,
      'PUT SERVICE KEYWORD HERE': city.primaryService.toLowerCase(),
      'PUT YOUR BUSINESS NAME HERE - PUT CITY NAME HERE': `${city.businessName} - ${city.cityName}`,
      // SEO tokens (new format)
      '{{CITY_NAME}}': city.cityName,
      '{{CITY_SLUG}}': citySlug,
      '{{STATE_ABBR}}': city.stateAbbr,
      '{{STATE_NAME}}': city.stateName,
      '{{CITY_TITLE}}': city.title,
      '{{CITY_META_DESCRIPTION}}': city.metaDescription,
      '{{CITY_H1}}': city.h1,
      '{{CITY_HERO_TEXT}}': city.heroText,
      '{{SERVICE_SLUG}}': city.serviceSlug,
      '{{CANONICAL_URL}}': `${city.baseUrl}/pages/cities/${citySlug}-${city.stateAbbr.toLowerCase()}.html`,
      // FAQ section (generate HTML)
      '{{CITY_FAQ}}': city.faq && city.faq.length > 0 ? city.faq.map(item => 
        `<div class="faq-item" style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); background: var(--color-bg-light); border-radius: var(--border-radius);">
          <h3 style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-xs); color: var(--color-primary);">${item.q}</h3>
          <p style="margin: 0;">${item.a}</p>
        </div>`
      ).join('\n') : '<p>Have questions about ' + city.primaryService + ' in ' + city.cityName + '? <a href="../contact.html">Contact us</a> for more information.</p>'
    };
    
    // Replace tokens in city template
    let cityPageContent = cityTemplate;
    for (const [token, value] of Object.entries(cityReplacements)) {
      const regex = new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      cityPageContent = cityPageContent.replace(regex, value);
    }
    
    // Also replace {{TOKEN}} format
    for (const [token, value] of Object.entries(cityReplacements)) {
      const regex = new RegExp(`{{${token}}}`, 'g');
      cityPageContent = cityPageContent.replace(regex, value);
    }
    
    // Write city page
    const cityPagePath = path.join(citiesDir, `${citySlug}-${city.stateAbbr.toLowerCase()}.html`);
    await fsp.writeFile(cityPagePath, cityPageContent, 'utf-8');
    generatedCount++;
  }
  
  console.log(`   ✅ Generated ${generatedCount} city pages`);
}

// Generate cities list HTML organized by region for locations page
function generateCitiesListHTML(cityData) {
  if (!cityData || Object.keys(cityData).length === 0) {
    return '<p>No cities available at this time.</p>';
  }
  
  // Organize cities by region
  const regions = {
    'West Coast': ['CA', 'WA', 'OR', 'AZ', 'NV'],
    'Southwest & Texas': ['TX', 'NM', 'OK'],
    'Midwest': ['IL', 'CO', 'MN', 'MO', 'IN', 'WI', 'MI', 'OH', 'IA', 'KS', 'NE', 'ND', 'SD'],
    'Southeast': ['GA', 'FL', 'NC', 'TN', 'SC', 'AL', 'MS', 'LA', 'AR', 'KY', 'WV', 'VA'],
    'Northeast': ['NY', 'MA', 'PA', 'DC', 'MD', 'CT', 'RI', 'VT', 'NH', 'ME', 'NJ', 'DE']
  };
  
  const citiesByRegion = {};
  for (const [region, states] of Object.entries(regions)) {
    citiesByRegion[region] = [];
  }
  citiesByRegion['More Cities'] = [];
  
  // Sort cities into regions
  for (const [citySlug, city] of Object.entries(cityData)) {
    const stateAbbr = city.stateAbbr.toUpperCase();
    let assigned = false;
    
    for (const [region, states] of Object.entries(regions)) {
      if (states.includes(stateAbbr)) {
        citiesByRegion[region].push(city);
        assigned = true;
        break;
      }
    }
    
    if (!assigned) {
      citiesByRegion['More Cities'].push(city);
    }
  }
  
  // Sort cities within each region by city name
  for (const region in citiesByRegion) {
    citiesByRegion[region].sort((a, b) => a.cityName.localeCompare(b.cityName));
  }
  
  // Generate HTML
  let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">';
  
  for (const [region, cities] of Object.entries(citiesByRegion)) {
    if (cities.length === 0) continue;
    
    html += '<div>';
    html += `<h3>${region}</h3>`;
    html += '<ul class="services-list">';
    
    for (const city of cities) {
      const citySlug = city.citySlug || slugifyCity(city.cityName);
      const stateLower = city.stateAbbr.toLowerCase();
      html += `<li><a href="cities/${citySlug}-${stateLower}.html">${city.cityName}, ${city.stateAbbr}</a></li>`;
    }
    
    html += '</ul>';
    html += '</div>';
  }
  
  // Add "View all cities" link if there are many cities
  if (Object.keys(cityData).length > 20) {
    html += '<div>';
    html += '<h3>More Cities</h3>';
    html += '<ul class="services-list">';
    html += '<li><a href="cities/index.html">View all cities →</a></li>';
    html += '</ul>';
    html += '</div>';
  }
  
  html += '</div>';
  
  return html;
}

// Update locations page with generated cities list
async function updateLocationsPage(destDir, cityData) {
  const locationsPath = path.join(destDir, 'pages', 'locations.html');
  
  if (!fs.existsSync(locationsPath)) {
    return; // Locations page doesn't exist, skip
  }
  
  let content = await fsp.readFile(locationsPath, 'utf-8');
  
  // Generate cities list HTML
  const citiesListHTML = generateCitiesListHTML(cityData);
  
  // Replace the cities list section - look for the "Areas We Serve" section
  // Pattern: <h2>Areas We Serve</h2> followed by a div with grid, ending before next section or </main>
  const areasWeServePattern = /(<h2>Areas We Serve<\/h2>\s*<div[^>]*>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;
  
  if (areasWeServePattern.test(content)) {
    content = content.replace(
      areasWeServePattern,
      `$1\n${citiesListHTML}\n$2`
    );
  } else {
    // Fallback: try to find a token placeholder
    content = content.replace(/{{CITIES_LIST}}/g, citiesListHTML);
    
    // If still no match, try a simpler pattern - replace the entire grid div
    const simplePattern = /(<h2>Areas We Serve<\/h2>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;
    if (simplePattern.test(content)) {
      content = content.replace(
        simplePattern,
        `$1\n        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">\n${citiesListHTML}\n        </div>\n      </div>\n    </section>`
      );
    }
  }
  
  await fsp.writeFile(locationsPath, content, 'utf-8');
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

// --------- SEO & STRUCTURED DATA HELPERS -----------------------

/**
 * Generate sitemap.xml and robots.txt based on generated HTML files
 * @param {string} destSiteDir - root output directory
 * @param {string} fullUrl - canonical site URL (e.g. https://example.com)
 * @param {string[]} htmlFiles - absolute paths to all generated HTML files
 */
async function generateSitemapAndRobots(destSiteDir, fullUrl, htmlFiles) {
  try {
    // Normalize domain (no trailing slash)
    const baseUrl = fullUrl.replace(/\/+$/, '');

    // Build URL list from htmlFiles
    const urls = htmlFiles
      .map((filePath) => {
        const rel = path.relative(destSiteDir, filePath).replace(/\\/g, '/');
        return rel;
      })
      // ignore partials or template-like files if any
      .filter((rel) => !rel.startsWith('_') && rel.toLowerCase().endsWith('.html'));

    const now = new Date().toISOString();

    const sitemapEntries = urls
      .map((rel) => {
        // index.html at root → /
        // pages/about.html → /pages/about.html
        let loc = `${baseUrl}/${rel}`;
        // Normalize index.html to trailing slash
        if (rel === 'index.html') {
          loc = `${baseUrl}/`;
        }
        return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${rel === 'index.html' ? '1.0' : '0.7'}</priority>
  </url>`;
      })
      .join('\n');

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

    const sitemapPath = path.join(destSiteDir, 'sitemap.xml');
    await fsp.writeFile(sitemapPath, sitemapXml.trim() + '\n', 'utf-8');

    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

    const robotsPath = path.join(destSiteDir, 'robots.txt');
    await fsp.writeFile(robotsPath, robotsTxt, 'utf-8');

    console.log('   ✅ Generated sitemap.xml and robots.txt');
  } catch (err) {
    console.warn('   ⚠️  Failed to generate sitemap/robots:', err.message);
  }
}

/**
 * Inject a JSON-LD <script> into an HTML file (before </head> if possible)
 * If </head> is not found, inject before </body>.
 */
async function injectJsonLdScript(htmlPath, jsonLdObjectOrArray) {
  if (!fs.existsSync(htmlPath)) return;

  let html = await fsp.readFile(htmlPath, 'utf-8');
  const jsonLd = JSON.stringify(jsonLdObjectOrArray, null, 2);
  const scriptTag = `\n<script type="application/ld+json">\n${jsonLd}\n</script>\n`;

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}</head>`);
  } else if (html.includes('</HEAD>')) {
    html = html.replace('</HEAD>', `${scriptTag}</HEAD>`);
  } else if (html.includes('</body>')) {
    html = html.replace('</body>', `${scriptTag}</body>`);
  } else if (html.includes('</BODY>')) {
    html = html.replace('</BODY>', `${scriptTag}</BODY>`);
  } else {
    // Fallback: just append
    html += scriptTag;
  }

  await fsp.writeFile(htmlPath, html, 'utf-8');
}

/**
 * Add LocalBusiness structured data to the home page (index.html)
 */
async function addHomeStructuredData(destSiteDir, answers, vertical, fullUrl) {
  try {
    const homePath = path.join(destSiteDir, 'index.html');
    if (!fs.existsSync(homePath)) {
      return;
    }

    const domain = answers.domain.trim();
    const baseUrl = fullUrl.replace(/\/+$/, '');

    const phoneDigits = (answers.phone || '').replace(/[^\d]/g, '');
    const telephone = phoneDigits ? `+1${phoneDigits}` : undefined;

    const localBusinessLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}#localbusiness`,
      name: answers.businessName,
      url: baseUrl,
      telephone,
      email: answers.email || undefined,
      description:
        vertical.homeDescription ||
        `Professional ${vertical.primaryService} services in ${answers.serviceArea}.`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: answers.street,
        addressLocality: answers.city,
        addressRegion: answers.state,
        postalCode: answers.zip,
        addressCountry: answers.country || 'USA'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: answers.serviceArea
      },
      sameAs: [
        `https://facebook.com/${domain.replace(/\./g, '-')}`,
        `https://instagram.com/${domain.replace(/\./g, '-')}`,
        `https://linkedin.com/company/${domain.replace(/\./g, '-')}`
      ]
    };

    await injectJsonLdScript(homePath, localBusinessLd);
    console.log('   ✅ Added LocalBusiness JSON-LD to index.html');
  } catch (err) {
    console.warn('   ⚠️  Failed to add home structured data:', err.message);
  }
}

/**
 * Add LocalBusiness + FAQPage JSON-LD to each generated city page
 */
async function addCityStructuredData(destSiteDir, cityData) {
  try {
    const pagesDir = path.join(destSiteDir, 'pages', 'cities');

    for (const [citySlug, city] of Object.entries(cityData)) {
      const cityFileName = `${citySlug}-${city.stateAbbr.toLowerCase()}.html`;
      const cityPath = path.join(pagesDir, cityFileName);
      if (!fs.existsSync(cityPath)) continue;

      const telephoneDigits = (city.phoneNumber || '').replace(/[^\d]/g, '');
      const cityTelephone = telephoneDigits ? `+1${telephoneDigits}` : undefined;

      const localBusinessLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${city.baseUrl}/pages/cities/${citySlug}-${city.stateAbbr.toLowerCase()}.html#localbusiness`,
        name: city.businessName,
        url: `${city.baseUrl}/pages/cities/${citySlug}-${city.stateAbbr.toLowerCase()}.html`,
        telephone: cityTelephone,
        email: city.email || undefined,
        description: city.metaDescription || city.heroText,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.cityName,
          addressRegion: city.stateAbbr,
          addressCountry: 'USA'
        },
        areaServed: {
          '@type': 'City',
          name: `${city.cityName}, ${city.stateAbbr}`
        }
      };

      const faqEntities =
        (city.faq || []).map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        })) || [];

      const faqLd =
        faqEntities.length > 0
          ? {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqEntities
            }
          : null;

      const jsonLd = faqLd ? [localBusinessLd, faqLd] : localBusinessLd;

      await injectJsonLdScript(cityPath, jsonLd);
    }

    console.log('   ✅ Added structured data to city pages');
  } catch (err) {
    console.warn('   ⚠️  Failed to add city structured data:', err.message);
  }
}

/**
 * High-level helper to add all SEO enhancements
 */
async function addSeoEnhancements(destSiteDir, fullUrl, htmlFiles, answers, vertical, cityData) {
  console.log('🧩 Adding SEO enhancements (sitemap, robots, structured data)...');
  await generateSitemapAndRobots(destSiteDir, fullUrl, htmlFiles);
  await addHomeStructuredData(destSiteDir, answers, vertical, fullUrl);
  await addCityStructuredData(destSiteDir, cityData);
  console.log('   ✅ SEO enhancements complete');
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
      type: 'list',
      name: 'serviceAreaMode',
      message: 'What is your primary service area?',
      choices: [
        { name: 'Single City', value: 'city' },
        { name: 'County / Metro Area', value: 'county' },
        { name: 'Nationwide', value: 'nationwide' }
      ]
    },
    {
      type: 'input',
      name: 'cityName',
      message: 'City name (e.g. Denver):',
      when: (ans) => ans.serviceAreaMode === 'city',
      validate: (v, ans) => {
        if (ans.serviceAreaMode === 'city' && !v.trim()) {
          return 'Please enter a city name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'stateAbbr',
      message: 'State abbreviation (e.g. CO):',
      when: (ans) => ans.serviceAreaMode !== 'nationwide',
      validate: (v, ans) => {
        if (ans.serviceAreaMode !== 'nationwide' && !v.trim()) {
          return 'Please enter a state abbreviation.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'countyName',
      message: 'County / metro name (e.g. Denver County):',
      when: (ans) => ans.serviceAreaMode === 'county',
      default: (ans) => ans.cityName ? `${ans.cityName} County` : ''
    },
    {
      type: 'input',
      name: 'countyTopCities',
      message: 'Top cities in this county/metro (comma separated, e.g. Denver, Aurora, Lakewood):',
      when: (ans) => ans.serviceAreaMode === 'county',
      default: (ans) => ans.cityName || '',
      validate: (v, ans) => {
        if (ans.serviceAreaMode === 'county' && !v.trim()) {
          return 'Please enter at least one city name.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'serviceArea',
      message: 'Service area description (for display, e.g. Denver Metro Area):',
      default: (ans) => {
        if (ans.serviceAreaMode === 'city') {
          return `${ans.cityName || 'Your City'}, ${ans.stateAbbr || 'ST'}`;
        } else if (ans.serviceAreaMode === 'county') {
          return `${ans.countyName || 'Your County'}, ${ans.stateAbbr || 'ST'}`;
        }
        return 'Nationwide';
      }
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
      // First, replace template images with scraped images (use template image names so HTML references work)
      const imagesToCopy = Math.min(imageFiles.length, existingImageNames.length);
      for (let i = 0; i < imagesToCopy; i++) {
        const scrapedFile = path.join(imagesScrapedDest, imageFiles[i]);
        const destFile = path.join(mainImagesDir, existingImageNames[i]);
        try {
          await fsp.copyFile(scrapedFile, destFile);
          console.log(`   📸 Replaced ${existingImageNames[i]} with scraped image`);
        } catch (err) {
          console.warn(`   ⚠️  Could not replace ${existingImageNames[i]}: ${err.message}`);
        }
      }
      
      // Copy remaining scraped images with their original names (for gallery pages)
      for (let i = imagesToCopy; i < imageFiles.length; i++) {
        const scrapedFile = path.join(imagesScrapedDest, imageFiles[i]);
        const destFile = path.join(mainImagesDir, imageFiles[i]);
        try {
          await fsp.copyFile(scrapedFile, destFile);
        } catch (err) {
          // Skip if file already exists or can't be copied
        }
      }
      
      console.log(`   ✅ Copied ${imagesToCopy} scraped images to main images folder`);
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

  // Generate city pages based on service area mode
  console.log('🏙️  Generating city pages...');
  const business = {
    name: answers.businessName,
    phone: answers.phone,
    email: answers.email,
    url: fullUrl
  };
  
  const cityData = buildCityEntries(answers, vertical, business);
  const cityCount = Object.keys(cityData).length;
  await generateCityPages(destSiteDir, cityData, srcTemplateDir, replacements);
  
  // Fix paths in newly generated city pages (they're 2 levels deep: pages/cities/)
  console.log('🔧 Fixing CSS paths in city pages...');
  const citiesDir = path.join(destSiteDir, 'pages', 'cities');
  if (fs.existsSync(citiesDir)) {
    await fixPathsRecursively(citiesDir, destSiteDir);
  }
  console.log('   ✅ Fixed CSS paths in city pages');
  
  // Generate city data JSON file for reference
  const cityDataPath = path.join(destSiteDir, 'city-data.json');
  await fsp.writeFile(cityDataPath, JSON.stringify(cityData, null, 2), 'utf-8');
  console.log('   ✅ Generated city-data.json');
  
  // Update locations page with generated cities list
  console.log('📍 Updating locations page with city data...');
  await updateLocationsPage(destSiteDir, cityData);
  console.log('   ✅ Updated locations page with city list');

  // SEO enhancements (sitemap, robots.txt, JSON-LD)
  await addSeoEnhancements(destSiteDir, fullUrl, htmlFiles, answers, vertical, cityData);

  console.log('\n✅ Done! Generated site at:', answers.outputFolder);
  console.log(`   Generated ${htmlFiles.length} pages with all tokens replaced.`);
  console.log(`   Generated ${cityCount} city pages (${answers.serviceAreaMode} mode)`);
  console.log(`   Vertical: ${vertical.primaryService}`);
  console.log(`   Domain: ${fullUrl}`);
  console.log('   Open index.html in your browser or serve the folder with any static server.\n');
}

run().catch((err) => {
  console.error('❌ Error running King Tut wizard:', err);
  process.exit(1);
});

