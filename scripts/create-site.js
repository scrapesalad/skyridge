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
      services: ['Service 1', 'Service 2']
    }
  };
}

const TEMPLATES = [
  { name: 'King Tut Classic – Service Business', folder: 'kingtut-classic' },
  { name: 'Corporate Split – Split-screen Hero & Icon Boxes', folder: 'corporate-split' },
  { name: 'One Page Parallax – Single-page Scrolling', folder: 'onepage-parallax' },
  { name: 'Portfolio Grid – Masonry Grid & Case Studies', folder: 'portfolio-grid' },
  { name: 'Agency Modern – Full-width Slider & Overlapping Cards', folder: 'agency-modern' },
  { name: 'Marketing Landing – Next.js & Tailwind CSS', folder: 'king-tut-templates/marketing-landing' },
  { name: 'Full Stack App – Next.js with Admin, Payments, Email & SMS', folder: 'fullstack-app-1' }
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
  },
  Teal: {
    primary: '#14B8A6',
    secondary: '#0F766E',
    accent: '#5EEAD4',
    background: '#FFFFFF',
    text: '#0F172A'
  },
  Purple: {
    primary: '#8B5CF6',
    secondary: '#5B21B6',
    accent: '#C4B5FD',
    background: '#FFFFFF',
    text: '#1E1B4B'
  },
  Blue: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    accent: '#93C5FD',
    background: '#FFFFFF',
    text: '#1E293B'
  },
  Orange: {
    primary: '#F97316',
    secondary: '#C2410C',
    accent: '#FDBA74',
    background: '#FFFFFF',
    text: '#1C1917'
  },
  Emerald: {
    primary: '#10B981',
    secondary: '#047857',
    accent: '#6EE7B7',
    background: '#FFFFFF',
    text: '#064E3B'
  },
  Indigo: {
    primary: '#6366F1',
    secondary: '#4338CA',
    accent: '#A5B4FC',
    background: '#FFFFFF',
    text: '#312E81'
  }
};

// Map verticals to appropriate color schemes
function getColorSchemesForVertical(verticalKey) {
  const verticalLower = (verticalKey || '').toLowerCase();
  const verticalName = verticals[verticalKey]?.primaryService?.toLowerCase() || '';
  
  // Landscaping & outdoor services - greens, earth tones
  if (verticalLower.includes('landscap') || verticalLower.includes('garden') || 
      verticalLower.includes('lawn') || verticalLower.includes('outdoor')) {
    return ['Forest', 'Emerald', 'Teal', 'Gold'];
  }
  
  // Construction & dumpster - oranges, blues, teals
  if (verticalLower.includes('dumpster') || verticalLower.includes('construction') || 
      verticalLower.includes('contractor') || verticalLower.includes('removal')) {
    return ['Teal', 'Orange', 'Blue', 'Ocean'];
  }
  
  // Corporate & business - blues, purples, indigo
  if (verticalLower.includes('corporate') || verticalLower.includes('business') || 
      verticalLower.includes('professional') || verticalLower.includes('enterprise')) {
    return ['Blue', 'Indigo', 'Purple', 'Ocean'];
  }
  
  // Ecommerce & retail - purples, roses, golds
  if (verticalLower.includes('ecommerce') || verticalLower.includes('retail') || 
      verticalLower.includes('store') || verticalLower.includes('shop')) {
    return ['Purple', 'Rose', 'Gold', 'Indigo'];
  }
  
  // Health & wellness - teals, emeralds, roses
  if (verticalLower.includes('health') || verticalLower.includes('wellness') || 
      verticalLower.includes('medical') || verticalLower.includes('fitness')) {
    return ['Teal', 'Emerald', 'Rose', 'Ocean'];
  }
  
  // Food & restaurant - oranges, roses, golds
  if (verticalLower.includes('food') || verticalLower.includes('restaurant') || 
      verticalLower.includes('catering') || verticalLower.includes('dining')) {
    return ['Orange', 'Rose', 'Gold', 'Teal'];
  }
  
  // Technology & software - blues, purples, indigos
  if (verticalLower.includes('tech') || verticalLower.includes('software') || 
      verticalLower.includes('digital') || verticalLower.includes('app')) {
    return ['Blue', 'Purple', 'Indigo', 'Ocean'];
  }
  
  // Real estate - blues, teals, golds
  if (verticalLower.includes('real estate') || verticalLower.includes('property') || 
      verticalLower.includes('housing') || verticalLower.includes('realtor')) {
    return ['Blue', 'Teal', 'Gold', 'Ocean'];
  }
  
  // Automotive - oranges, blues, teals
  if (verticalLower.includes('auto') || verticalLower.includes('car') || 
      verticalLower.includes('vehicle') || verticalLower.includes('mechanic')) {
    return ['Orange', 'Blue', 'Teal', 'Ocean'];
  }
  
  // Default - mix of all
  return ['Ocean', 'Forest', 'Teal', 'Blue', 'Purple', 'Gold', 'Rose', 'Orange'];
}

// Randomly select a color scheme for a vertical
function getRandomColorSchemeForVertical(verticalKey) {
  const schemes = getColorSchemesForVertical(verticalKey);
  const randomIndex = Math.floor(Math.random() * schemes.length);
  return schemes[randomIndex];
}

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

// Smart merge: copy files but preserve existing node_modules, .git, and other important directories
async function mergeDir(src, dest, preserveDirs = ['node_modules', '.git', '.next', 'dist', 'build', '.cache', '.vscode', '.idea']) {
  await fsp.mkdir(dest, { recursive: true });

  const entries = await fsp.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    const entryNameLower = entry.name.toLowerCase();

    // Skip preserved directories
    if (entry.isDirectory() && preserveDirs.some(preserve => entryNameLower === preserve.toLowerCase())) {
      continue;
    }

    if (entry.isDirectory()) {
      await mergeDir(srcPath, destPath, preserveDirs);
    } else {
      // For package.json, merge dependencies instead of overwriting
      if (entry.name === 'package.json' && fs.existsSync(destPath)) {
        try {
          const srcPackage = JSON.parse(await fsp.readFile(srcPath, 'utf-8'));
          const destPackage = JSON.parse(await fsp.readFile(destPath, 'utf-8'));
          
          // Merge dependencies and devDependencies
          const mergedPackage = {
            ...destPackage,
            ...srcPackage,
            dependencies: { ...destPackage.dependencies, ...srcPackage.dependencies },
            devDependencies: { ...destPackage.devDependencies, ...srcPackage.devDependencies },
            scripts: { ...destPackage.scripts, ...srcPackage.scripts }
          };
          
          await fsp.writeFile(destPath, JSON.stringify(mergedPackage, null, 2), 'utf-8');
          continue;
        } catch (err) {
          // If merge fails, just copy
          console.warn(`   ⚠️  Could not merge package.json, overwriting: ${err.message}`);
        }
      }
      
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

// Detect framework type from package.json
function detectFramework(packageJson) {
  if (!packageJson || !packageJson.dependencies) {
    return null;
  }
  
  const deps = { ...packageJson.dependencies, ...(packageJson.devDependencies || {}) };
  
  if (deps.next || deps['next.js']) {
    return 'nextjs';
  }
  if (deps.vite) {
    return 'vite';
  }
  if (deps.react && deps['react-scripts']) {
    return 'create-react-app';
  }
  if (deps.react) {
    return 'react';
  }
  if (deps.vue) {
    return 'vue';
  }
  if (deps.svelte) {
    return 'svelte';
  }
  
  return 'unknown';
}

// Find component directories for any framework
async function findComponentDirs(rootDir) {
  const componentDirs = [];
  const commonComponentPaths = [
    'app/components',
    'src/components',
    'components',
    'src/app/components',
    'app/src/components',
    'lib/components',
    'shared/components'
  ];
  
  for (const compPath of commonComponentPaths) {
    const fullPath = path.join(rootDir, compPath);
    if (fs.existsSync(fullPath)) {
      componentDirs.push({ path: compPath, fullPath });
    }
  }
  
  return componentDirs;
}

// Convert HTML component to TSX for Next.js
function convertHtmlToTsx(htmlContent, componentName) {
  // Remove HTML comments (but keep the content)
  let tsx = htmlContent.replace(/<!--[\s\S]*?-->/g, '');
  
  // Convert class to className
  tsx = tsx.replace(/\bclass=/g, 'className=');
  
  // Convert for to htmlFor
  tsx = tsx.replace(/\bfor=/g, 'htmlFor=');
  
  // Convert self-closing tags that need to be closed in JSX
  tsx = tsx.replace(/<img([^>]*?)>/gi, '<img$1 />');
  tsx = tsx.replace(/<input([^>]*?)>/gi, '<input$1 />');
  tsx = tsx.replace(/<br>/gi, '<br />');
  tsx = tsx.replace(/<hr>/gi, '<hr />');
  tsx = tsx.replace(/<meta([^>]*?)>/gi, '<meta$1 />');
  tsx = tsx.replace(/<link([^>]*?)>/gi, '<link$1 />');
  
  // Clean up extra whitespace
  tsx = tsx.trim();
  
  // Wrap in React component
  const componentCode = `export default function ${componentName}() {
  return (
    <>
${tsx.split('\n').map(line => line.trim() ? '      ' + line : '').filter(line => line || line === '').join('\n')}
    </>
  );
}
`;
  
  return componentCode;
}

// Convert all HTML component files to TSX in a directory (recursive)
async function convertHtmlComponentsToTsx(componentsDir) {
  const convertedFiles = [];
  
  async function processDirectory(dir) {
    let entries;
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', '.git', 'dist', 'build', '.cache'].includes(entry.name)) {
          await processDirectory(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        try {
          const htmlContent = await fsp.readFile(fullPath, 'utf-8');
          
          // Convert filename: header.html -> Header.tsx, global-head.html -> GlobalHead.tsx
          const componentName = entry.name
            .replace(/\.html$/, '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
          
          const tsxContent = convertHtmlToTsx(htmlContent, componentName);
          const tsxPath = fullPath.replace(/\.html$/, '.tsx');
          
          await fsp.writeFile(tsxPath, tsxContent, 'utf-8');
          await fsp.unlink(fullPath); // Remove original HTML file
          
          convertedFiles.push({ from: entry.name, to: `${componentName}.tsx` });
        } catch (err) {
          console.warn(`   ⚠️  Could not convert ${entry.name}: ${err.message}`);
        }
      }
    }
  }
  
  if (fs.existsSync(componentsDir)) {
    await processDirectory(componentsDir);
  }
  
  return convertedFiles;
}

// For Next.js full stack templates, remove calculator components and their usage
// so new sites don't depend on ServiceCalculator / CalculatorBanner at all.
async function removeCalculatorsFromNextTemplate(destSiteDir) {
  const appDir = path.join(destSiteDir, 'app');
  if (!fs.existsSync(appDir)) return;

  // 1) Delete calculator-related components if they exist
  const filesToDelete = [
    path.join(appDir, 'components', 'ServiceCalculator.tsx'),
    path.join(appDir, 'components', 'CalculatorBanner.tsx'),
    path.join(appDir, 'components', 'ConditionalCalculatorBanner.tsx'),
  ];

  for (const filePath of filesToDelete) {
    try {
      if (fs.existsSync(filePath)) {
        await fsp.unlink(filePath);
        console.log(`   🧹 Removed calculator component: ${path.relative(destSiteDir, filePath)}`);
      }
    } catch (err) {
      console.warn(`   ⚠️  Could not remove calculator component ${filePath}: ${err.message}`);
    }
  }

  // 2) Strip imports/usages from any TS/TSX files in the app directory
  async function cleanFile(filePath) {
    let content = await fsp.readFile(filePath, 'utf-8');
    if (
      !content.includes('ServiceCalculator') &&
      !content.includes('CalculatorBanner') &&
      !content.includes('ConditionalCalculatorBanner')
    ) {
      return;
    }

    // Remove import lines that reference calculator components (static or dynamic)
    content = content.replace(
      /^.*(ServiceCalculator|CalculatorBanner|ConditionalCalculatorBanner).*from\s+['"].*['"].*$/gm,
      ''
    );
    content = content.replace(
      /^.*dynamic\(\s*.*(ServiceCalculator|CalculatorBanner|ConditionalCalculatorBanner).*$/gm,
      ''
    );

    // Remove self-closing JSX usages like <CalculatorBanner /> or <ConditionalCalculatorBanner ... />
    content = content.replace(
      /<\s*(CalculatorBanner|ConditionalCalculatorBanner|ServiceCalculator)\b[^>]*\/>/g,
      ''
    );

    // Remove simple non-self-closing usages on a single line, if any
    content = content.replace(
      /<\s*(CalculatorBanner|ConditionalCalculatorBanner|ServiceCalculator)\b[^>]*>\s*<\/\s*\1\s*>/g,
      ''
    );

    // As a final safety net, strip any remaining lines that mention these names
    content = content.replace(
      /^.*(ServiceCalculator|CalculatorBanner|ConditionalCalculatorBanner).*$/gm,
      ''
    );

    await fsp.writeFile(filePath, content, 'utf-8');
    console.log(`   🧹 Cleaned calculator usage from: ${path.relative(destSiteDir, filePath)}`);
  }

  async function walk(dir) {
    let entries;
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && /\.(tsx?|jsx?)$/i.test(entry.name)) {
        try {
          await cleanFile(fullPath);
        } catch (err) {
          console.warn(`   ⚠️  Could not clean calculators from ${fullPath}: ${err.message}`);
        }
      }
    }
  }

  await walk(appDir);
}

async function replaceTokensInFile(filePath, replacements) {
  let content = await fsp.readFile(filePath, 'utf-8');

  // Replace new token format: {{TOKEN_NAME}}
  for (const [token, value] of Object.entries(replacements)) {
    const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\{\\{${escapedToken}\\}\\}`, 'g');
    
    // Special handling for KEYWORDS_ARRAY - don't escape quotes in JSON
    if (token === 'KEYWORDS_ARRAY') {
      content = content.replace(regex, value);
    } else {
      // For URL values, ensure they're properly formatted
      let replacementValue = value;
      if (typeof value === 'string' && (token.includes('URL') || token.includes('Url') || token === 'siteUrl' || token === 'WEBSITE_URL' || token === 'FULL_URL')) {
        if (!replacementValue.match(/^https?:\/\//)) {
          replacementValue = `https://${replacementValue}`;
        }
      }
      content = content.replace(regex, replacementValue);
    }
  }

  // Replace old placeholder format
  const oldPlaceholders = {
    'PUT YOUR SITE NAME HERE': replacements.SITE_NAME,
    'PUT YOUR BUSINESS NAME HERE': replacements.BUSINESS_NAME,
    'PUT YOUR SERVICE TYPE HERE': replacements.PRIMARY_SERVICE,
    'PUT PRIMARY SERVICE HERE': replacements.PRIMARY_SERVICE,
    'PUT YOUR PRIMARY SERVICE HERE': replacements.PRIMARY_SERVICE,
    'YOUR PRIMARY SERVICE': replacements.PRIMARY_SERVICE,
    'PRIMARY SERVICE': replacements.PRIMARY_SERVICE,
    '{{PRIMARY_SERVICE}}': replacements.PRIMARY_SERVICE,
    'PUT YOUR SERVICE AREA HERE': replacements.SERVICE_AREA,
    'PUT YOUR REGION HERE': replacements.SERVICE_AREA,
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
    // Common default contact info placeholders / hardcoded values
    'info@Place-website-domain-here': replacements.EMAIL,
    'info@icondumpsters.com': replacements.EMAIL,
    'support@icondumpsters.com': replacements.EMAIL,
    'contact@icondumpsters.com': replacements.EMAIL,
    '(801) 918-6000': replacements.PHONE,
    '801-918-6000': replacements.PHONE,
    '801 918 6000': replacements.PHONE,
    '801.918.6000': replacements.PHONE,
    'tel:+18019186000': replacements.phoneLink || replacements.PHONE_LINK || replacements.phoneLink || '',
    'tel:801-918-6000': replacements.phoneLink || replacements.PHONE_LINK || replacements.phoneLink || '',
  };

  for (const [placeholder, value] of Object.entries(oldPlaceholders)) {
    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, value);
  }

  // Replace hardcoded dumpster-specific content with vertical-specific content
  // Use case-insensitive regex to catch variations
  const dumpsterReplacements = {
    // Dumpster rental specific terms
    'dumpster rental': replacements.SERVICE_TYPE.toLowerCase(),
    'Dumpster Rental': replacements.PRIMARY_SERVICE,
    'DUMPSTER RENTAL': replacements.PRIMARY_SERVICE.toUpperCase(),
    'dumpster rentals': replacements.SERVICE_TYPE.toLowerCase(),
    'Dumpster Rentals': replacements.PRIMARY_SERVICE,
    'dumpster': replacements.SERVICE_TYPE.replace(/s$/, '').toLowerCase(),
    'Dumpster': replacements.PRIMARY_SERVICE.replace(/s$/, ''),
    'DUMPSTER': replacements.PRIMARY_SERVICE.replace(/s$/, '').toUpperCase(),
    'dumpsters': replacements.SERVICE_TYPE.toLowerCase(),
    'Dumpsters': replacements.PRIMARY_SERVICE,
    'DUMPSTERS': replacements.SERVICE_TYPE.toUpperCase(),
    'roll-off dumpster': replacements.SERVICE_TYPE.toLowerCase(),
    'Roll-Off Dumpster': replacements.PRIMARY_SERVICE,
    'roll-off dumpsters': replacements.SERVICE_TYPE.toLowerCase(),
    'Roll-Off Dumpsters': replacements.PRIMARY_SERVICE,
    'rent a dumpster': `get ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Rent a Dumpster': `Get ${replacements.PRIMARY_SERVICE}`,
    'renting a dumpster': `getting ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Renting a Dumpster': `Getting ${replacements.PRIMARY_SERVICE}`,
    'to rent a dumpster': `for ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'To Rent a Dumpster': `For ${replacements.PRIMARY_SERVICE}`,
    'Call to Rent a Dumpster': `Call for ${replacements.PRIMARY_SERVICE}`,
    'call to rent a dumpster': `call for ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'rental dumpster': replacements.SERVICE_TYPE.toLowerCase(),
    'Rental Dumpster': replacements.PRIMARY_SERVICE,
    'dumpster sizes': `${replacements.SERVICE_TYPE.toLowerCase()} options`,
    'Dumpster Sizes': `${replacements.PRIMARY_SERVICE} Options`,
    'dumpster size': `${replacements.SERVICE_TYPE.toLowerCase()} option`,
    'Dumpster Size': `${replacements.PRIMARY_SERVICE} Option`,
    'order a dumpster': `order ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Order a Dumpster': `Order ${replacements.PRIMARY_SERVICE}`,
    'Order Online': 'Get Started',
    'order online': 'get started',
    'Order Dumpster': `Get ${replacements.PRIMARY_SERVICE}`,
    'order dumpster': `get ${replacements.SERVICE_TYPE.toLowerCase()}`,
    // Business name variations that might be hardcoded
    'Icon Dumpsters': replacements.BUSINESS_NAME,
    'Icon Dumpster': replacements.BUSINESS_NAME,
    'icon dumpsters': replacements.BUSINESS_NAME,
    // Service area variations
    'Salt Lake City': replacements.CITY,
    'salt lake city': replacements.CITY.toLowerCase(),
    'Utah': replacements.STATE,
    'utah': replacements.STATE.toLowerCase(),
    // Common dumpster-related phrases
    'affordable dumpster rental': `affordable ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Affordable Dumpster Rental': `Affordable ${replacements.PRIMARY_SERVICE}`,
    'reliable dumpster service': `reliable ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Reliable Dumpster Service': `Reliable ${replacements.PRIMARY_SERVICE}`,
    'professional dumpster rental': `professional ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Professional Dumpster Rental': `Professional ${replacements.PRIMARY_SERVICE}`,
    'dumpster rental service': replacements.SERVICE_TYPE.toLowerCase(),
    'Dumpster Rental Service': replacements.PRIMARY_SERVICE,
    'dumpster rental services': replacements.SERVICE_TYPE.toLowerCase(),
    'Dumpster Rental Services': replacements.PRIMARY_SERVICE,
    'dumpster rental near me': `${replacements.SERVICE_TYPE.toLowerCase()} near me`,
    'Dumpster Rental Near Me': `${replacements.PRIMARY_SERVICE} Near Me`,
    'dumpster rental company': `${replacements.SERVICE_TYPE.toLowerCase()} company`,
    'Dumpster Rental Company': `${replacements.PRIMARY_SERVICE} Company`,
    // Alt text and descriptions
    'dumpster rental Utah': `${replacements.SERVICE_TYPE.toLowerCase()} ${replacements.STATE}`,
    'Dumpster Rental Utah': `${replacements.PRIMARY_SERVICE} ${replacements.STATE}`,
    'roll-off dumpster, dumpster rental': replacements.SERVICE_TYPE.toLowerCase(),
    'Roll-Off Dumpster, Dumpster Rental': replacements.PRIMARY_SERVICE,
    'professional roll-off dumpster': `professional ${replacements.SERVICE_TYPE.toLowerCase()}`,
    'Professional Roll-Off Dumpster': `Professional ${replacements.PRIMARY_SERVICE}`,
    // Navigation and menu items
    'Dumpster Rental 101': `${replacements.PRIMARY_SERVICE} Guide`,
    'Dumpster Rental Prices': `${replacements.PRIMARY_SERVICE} Pricing`,
    'Roll Off Dumpster Sizes': `${replacements.PRIMARY_SERVICE} Options`,
    'dumpster rental 101': `${replacements.SERVICE_TYPE.toLowerCase()} guide`,
    'dumpster rental prices': `${replacements.SERVICE_TYPE.toLowerCase()} pricing`,
    'roll off dumpster sizes': `${replacements.SERVICE_TYPE.toLowerCase()} options`,
  };

  // Apply dumpster replacements (case-insensitive where needed)
  for (const [dumpsterTerm, replacement] of Object.entries(dumpsterReplacements)) {
    // Create case-insensitive regex
    const regex = new RegExp(dumpsterTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    content = content.replace(regex, (match) => {
      // Preserve original case pattern
      if (match === match.toUpperCase()) {
        return replacement.toUpperCase();
      } else if (match === match.toLowerCase()) {
        return replacement.toLowerCase();
      } else if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }

  // Final fallback: replace any remaining standalone "dumpster" references
  // Use word boundaries to avoid replacing parts of other words
  const standaloneDumpsterRegex = /\bdumpster\b/gi;
  content = content.replace(standaloneDumpsterRegex, (match) => {
    const replacement = replacements.SERVICE_TYPE.replace(/s$/, '').toLowerCase();
    if (match === match.toUpperCase()) {
      return replacement.toUpperCase();
    } else if (match === match.toLowerCase()) {
      return replacement.toLowerCase();
    } else if (match[0] === match[0].toUpperCase()) {
      return replacement.charAt(0).toUpperCase() + replacement.slice(1);
    }
    return replacement;
  });

  // Normalize legacy image paths (logos / hero images) to King Tut assets that
  // we actually copy into each generated site.
  const imagePathReplacements = {
    // Legacy logo variants -> King Tut logo
    '/images/optimized/IconServices_Logo_Vector_Pantone266purple.webp': '/images/logo/kingtutlogo.png',
    '/images/optimized/IconDumpsters_Logo_Vector_Pantone266purple.webp': '/images/logo/kingtutlogo.png',
    '/images/optimized/IconCorporates_Logo_Vector_Pantone266purple.webp': '/images/logo/kingtutlogo.png',
    'https://icondumpsters.com/images/optimized/icondumpsters_logo_vector_pantone266purple.webp': '/images/logo/kingtutlogo.png',
    'https://icondumpsters.com/images/optimized/icondumpsters_dumpster_dumpster_with_truck_delivery.webp': '/images/Gemini_Generated_Image_poyl1bpoyl1bpoyl.png',
    // Generic hero images -> King Tut hero artwork
    '/images/hero-image.jpg': '/images/Gemini_Generated_Image_poyl1bpoyl1bpoyl.png',
    '/images/hero-couple-boxes.png': '/images/Gemini_Generated_Image_3171973171973171.png'
  };

  for (const [from, to] of Object.entries(imagePathReplacements)) {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const imgRegex = new RegExp(escaped, 'g');
    content = content.replace(imgRegex, to);
  }

  // Basic HTML metadata normalization so titles and descriptions match user input
  if (/\.(html|htm)$/i.test(filePath)) {
    // <title> tag
    const titlePattern = /<title>[\s\S]*?<\/title>/i;
    const titleValue = `${replacements.SITE_NAME} | ${replacements.PRIMARY_SERVICE} in ${replacements.SERVICE_AREA}`;
    const titleTag = `<title>${titleValue}</title>`;
    if (titlePattern.test(content)) {
      content = content.replace(titlePattern, titleTag);
    }

    // <meta name="description">
    const metaDescPattern = /<meta\s+name=["']description["'][^>]*>/i;
    const metaDescTag = `<meta name="description" content="${replacements.HOME_PAGE_DESCRIPTION}">`;
    if (metaDescPattern.test(content)) {
      content = content.replace(metaDescPattern, metaDescTag);
    }

    // <meta name="keywords">
    const metaKeywordsPattern = /<meta\s+name=["']keywords["'][^>]*>/i;
    const metaKeywordsTag = `<meta name="keywords" content="${replacements.KEYWORDS}">`;
    if (metaKeywordsPattern.test(content)) {
      content = content.replace(metaKeywordsPattern, metaKeywordsTag);
    }
  }

  // Check for any remaining unreplaced tokens (warn but don't fail)
  const remainingTokens = content.match(/\{\{[A-Z_]+\}\}/g);
  if (remainingTokens && remainingTokens.length > 0) {
    const uniqueTokens = [...new Set(remainingTokens)];
    if (/\.(tsx|ts|jsx|js)$/i.test(filePath)) {
      console.warn(`   ⚠️  Unreplaced tokens in ${path.relative(process.cwd(), filePath)}: ${uniqueTokens.join(', ')}`);
    }
  }

  await fsp.writeFile(filePath, content, 'utf-8');
}

// Global counter for progress tracking
let tokenReplacementCount = 0;

async function replaceTokensRecursively(rootDir, replacements, showProgress = false) {
  const skipDirs = new Set([
    'node_modules',
    '.next',
    '.git',
    '.vscode',
    '.idea',
    'dist',
    'build',
    '.cache',
    'coverage',
    '.nyc_output',
    '.sass-cache',
    'tmp',
    'temp',
    '__pycache__',
    '.pytest_cache',
    '.turbo'
  ]);

  const entries = await fsp.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') && !['.env', '.gitignore', '.eslintrc', '.prettierrc'].includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory() && skipDirs.has(entry.name.toLowerCase())) {
      continue;
    }

    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await replaceTokensRecursively(fullPath, replacements, showProgress);
    } else if (entry.isFile()) {
      if (/\.(html|htm|css|js|json|txt|md|template|tsx|ts|jsx)$/i.test(entry.name)) {
        await replaceTokensInFile(fullPath, replacements);
        if (showProgress) {
          tokenReplacementCount++;
          if (tokenReplacementCount % 50 === 0) {
            process.stdout.write(`   Processed ${tokenReplacementCount} files...\r`);
          }
        }
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

// Write a clean, business-focused Footer.tsx for Next.js apps so we don't
// inherit the dumpster-specific footer from the original template.
async function writeNextJsFooter(destDir, replacements, scheme) {
  const appComponentsDir = path.join(destDir, 'app', 'components');
  const footerPath = path.join(appComponentsDir, 'Footer.tsx');

  const primaryColor = (scheme && scheme.primary) || '#0F172A';
  const secondaryColor = (scheme && scheme.secondary) || '#020617';

  const businessName = (replacements.BUSINESS_NAME || '').replace(/"/g, '\\"');
  const serviceType = (replacements.PRIMARY_SERVICE || '').replace(/"/g, '\\"');
  const serviceArea = (replacements.SERVICE_AREA || '').replace(/"/g, '\\"');
  const phone = (replacements.PHONE || '').replace(/"/g, '\\"');
  const phoneLink = (replacements.phoneLink || replacements.PHONE_LINK || '').replace(/"/g, '\\"');
  const email = (replacements.EMAIL || '').replace(/"/g, '\\"');
  const websiteUrl = (replacements.WEBSITE_URL || replacements.siteUrl || '').replace(/"/g, '\\"');
  const year = (replacements.CURRENT_YEAR || '').replace(/"/g, '\\"');

  const safeServiceArea = serviceArea || 'your area';

  // Build contact list items as static JSX based on which values exist
  let phoneLi = '';
  if (phone) {
    const safePhoneHref = phoneLink || `tel:${phone.replace(/[^\\d]/g, '')}`;
    phoneLi = `
              <li>
                <a href="${safePhoneHref}" className="hover:text-white">
                  ${phone}
                </a>
              </li>`;
  }

  let emailLi = '';
  if (email) {
    emailLi = `
              <li>
                <a href="mailto:${email}" className="hover:text-white">
                  ${email}
                </a>
              </li>`;
  }

  let websiteLi = '';
  if (websiteUrl) {
    const displayUrl = websiteUrl.replace(/^https?:\/\/(www\.)?/i, '');
    websiteLi = `
              <li>
                <a href="${websiteUrl}" className="hover:text-white">
                  ${displayUrl}
                </a>
              </li>`;
  }

  const footerContent = `import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 text-slate-100" style={{ background: "linear-gradient(to right, ${primaryColor}, ${secondaryColor})" }}>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div>
            <h3 className="text-xl font-bold mb-3">${businessName}</h3>
            <p className="text-sm text-slate-100/80 mb-4">
              We provide professional ${serviceType.toLowerCase()} in ${serviceArea}. Quality work, clear communication, and dependable service on every project.
            </p>
            <p className="text-sm text-slate-100/60">
              Serving customers in ${safeServiceArea} and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-slate-100/80">Services</h4>
            <ul className="space-y-2 text-sm text-slate-100/80">
              <li>${serviceType}</li>
              <li>Custom projects</li>
              <li>Consulting & strategy</li>
              <li>Ongoing support</li>
            </ul>
          </div>

          {/* Support / Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-slate-100/80">Company</h4>
            <ul className="space-y-2 text-sm text-slate-100/80">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3 text-slate-100/80">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-100/80">
              ${phoneLi || ''}
              ${emailLi || ''}
              ${websiteLi || ''}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-100/70">
          <p>
            © ${year} ${businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

  await fsp.mkdir(appComponentsDir, { recursive: true });
  await fsp.writeFile(footerPath, footerContent, "utf-8");
  console.log("   ✅ Wrote custom Next.js footer with your business info");
}

// If both app/layout.tsx and app/page.tsx render <Footer />, remove the Footer
// import and usage from page.tsx so we don't end up with two footers.
async function removeDuplicatePageFooter(destDir) {
  const appDir = path.join(destDir, 'app');
  const layoutPath = path.join(appDir, 'layout.tsx');
  const pagePath = path.join(appDir, 'page.tsx');

  if (!fs.existsSync(layoutPath) || !fs.existsSync(pagePath)) return;

  const layoutContent = await fsp.readFile(layoutPath, 'utf-8');
  if (!layoutContent.includes('<Footer') && !layoutContent.includes('Footer')) {
    // Layout doesn't render Footer; nothing to clean.
    return;
  }

  let pageContent = await fsp.readFile(pagePath, 'utf-8');
  if (!pageContent.includes('Footer')) {
    return;
  }

  // Remove Footer import lines
  pageContent = pageContent.replace(/^.*\bFooter\b.*from\s+['"].*['"].*$/gm, '');

  // Remove JSX usages of <Footer /> or <Footer></Footer>
  pageContent = pageContent.replace(/<\s*Footer\s*\/>/g, '');
  pageContent = pageContent.replace(/<\s*Footer\s*>[\s\S]*?<\/\s*Footer\s*>/g, '');

  await fsp.writeFile(pagePath, pageContent, 'utf-8');
  console.log('   🧹 Removed duplicate Footer from app/page.tsx (layout already includes Footer)');
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
async function processTemplateFiles(rootDir, destDir, replacements, isNextJs = false) {
  const templateFiles = [
    { src: 'site.config.json.template', dest: 'site.config.json' },
    ...(isNextJs ? [] : [{ src: 'package.json.template', dest: 'package.json' }])
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
  
  if (isNextJs) {
    const packageJsonPath = path.join(destDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      let content = await fsp.readFile(packageJsonPath, 'utf-8');
      
      for (const [token, value] of Object.entries(replacements)) {
        const regex = new RegExp(`{{${token}}}`, 'g');
        content = content.replace(regex, value);
      }
      
      await fsp.writeFile(packageJsonPath, content, 'utf-8');
      console.log('   ✅ Updated package.json with tokens');
    }
  }
}

// --------- MAIN FLOW --------------------------------------------

async function run() {
  console.log('\n🟡 King Tut Site Wizard\n');

  // Get available verticals (website types)
  const verticalChoices = Object.keys(verticals)
    .filter(key => key !== 'custom') // Exclude generic custom
    .map(key => ({
      name: verticals[key].label || verticals[key].primaryService,
      value: key
    }));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Choose a starting template:',
      choices: TEMPLATES.map((t) => t.name)
    },
    {
      type: 'list',
      name: 'verticalKey',
      message: 'What type of website would you like to build?',
      choices: verticalChoices
    },
    {
      type: 'input',
      name: 'businessName',
      message: 'Business Name:',
      default: (ans) => {
        const vertical = verticals[ans.verticalKey];
        return vertical ? vertical.primaryService : 'My Business';
      },
      validate: (v) => v.trim() ? true : 'Please enter a business name.'
    },
    {
      type: 'input',
      name: 'siteName',
      message: 'Site Name (optional, press enter to reuse Business Name):'
    },
    {
      type: 'input',
      name: 'domain',
      message: 'Domain (e.g. yoursite.com, without https://):',
      default: 'yoursite.com',
      validate: (v) => v.trim() ? true : 'Please enter a domain.'
    },
    {
      type: 'input',
      name: 'serviceArea',
      message: 'Service area description (e.g. Denver Metro Area):',
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
      name: 'colorScheme',
      message: 'Choose a color scheme:',
      choices: Object.keys(COLOR_SCHEMES).concat('Custom'),
      default: (ans) => {
        // Auto-select a random color scheme based on the vertical
        return getRandomColorSchemeForVertical(ans.verticalKey);
      }
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
        return vertical && Array.isArray(vertical.services) && vertical.services.length > 0;
      }
    },
    {
      type: 'input',
      name: 'outputFolder',
      message: 'Output folder name (where to generate the site):',
      default: (ans) =>
        ans.businessName.trim().toLowerCase().replace(/\s+/g, '-')
    }
  ]);

  const vertical = verticals[answers.verticalKey];
  if (!vertical) {
    console.error(`❌ Vertical "${answers.verticalKey}" not found in verticals.json`);
    process.exit(1);
  }

  // Log the auto-selected color scheme
  const autoSelectedScheme = getRandomColorSchemeForVertical(answers.verticalKey);
  if (answers.colorScheme === autoSelectedScheme) {
    console.log(`\n🎨 Auto-selected color scheme: ${autoSelectedScheme} (based on ${vertical.primaryService})`);
  }

  let finalServices = [];
  if (answers.customServices && answers.customServices.trim()) {
    finalServices = answers.customServices
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .slice(0, 6);
  } else if (vertical.services && Array.isArray(vertical.services)) {
    finalServices = vertical.services.slice(0, 6);
  }

  const siteName = answers.siteName.trim() || answers.businessName.trim();

  const templateFolder = TEMPLATES.find((t) => t.name === answers.template).folder;

  const rootDir = path.normalize(process.cwd());
  const srcTemplateDir = path.normalize(path.join(rootDir, 'templates', templateFolder));
  const destSiteDir = path.normalize(path.join(rootDir, answers.outputFolder));

  if (!fs.existsSync(srcTemplateDir)) {
    console.error(`❌ Template folder not found: ${srcTemplateDir}`);
    console.error('   Available templates:', TEMPLATES.map(t => t.folder).join(', '));
    process.exit(1);
  }

  const scheme = answers.colorScheme === 'Custom'
    ? {
        primary: answers.customPrimary,
        secondary: answers.customSecondary,
        accent: answers.customAccent,
        background: answers.customBackground,
        text: answers.customText
      }
    : COLOR_SCHEMES[answers.colorScheme];

  const currentYear = new Date().getFullYear().toString();
  const domain = answers.domain.trim();
  const domainSlug = domain.replace(/\./g, '-');
  const fullUrl = domain.startsWith('http') ? domain : `https://${domain}`;

  // Build placement content
  const heroHeadline = `Professional ${vertical.primaryService} in ${answers.serviceArea}`;
  const heroSubheadline = vertical.homeDescription || `Professional ${vertical.primaryService} services in ${answers.serviceArea}. Quality service, competitive pricing, guaranteed results.`;
  const businessDescription = `${answers.businessName} provides ${vertical.primaryService.toLowerCase()} in ${answers.serviceArea}. ${heroSubheadline}`;
  const homeDescription = heroSubheadline;

  const replacements = {
    BUSINESS_NAME: answers.businessName,
    SITE_NAME: siteName,
    DOMAIN: domain,
    DOMAIN_SLUG: domainSlug,
    FULL_URL: fullUrl,
    SERVICE_TYPE: vertical.serviceType || vertical.primaryService.toLowerCase(),
    PRIMARY_SERVICE: vertical.primaryService,
    SERVICE_AREA: answers.serviceArea,
    REGION: answers.serviceArea,
    YEAR_STARTED: answers.yearStarted,
    CURRENT_YEAR: currentYear,
    TARGET_AUDIENCE: 'your needs',
    CITY: answers.city || answers.serviceArea.split(',')[0] || answers.serviceArea,
    HOME_PAGE_DESCRIPTION: homeDescription,
    KEYWORDS: vertical.keywords ? vertical.keywords.join(', ') : `${vertical.serviceType}, ${answers.businessName}, ${answers.serviceArea}`,
    KEYWORDS_ARRAY: vertical.keywords ? `"${vertical.keywords.join('", "')}"` : `"${vertical.serviceType}", "${answers.businessName}"`,
    WEBSITE_URL: fullUrl,
    siteUrl: fullUrl,
    siteTitle: siteName,
    metaDescription: homeDescription,
    metaKeywords: vertical.keywords ? vertical.keywords.join(', ') : `${vertical.serviceType}, ${answers.businessName}, ${answers.serviceArea}`,
    tagline: heroSubheadline,
    heroHeading: heroHeadline,
    heroSubheading: heroSubheadline,
    heroImage: '/images/hero-image.jpg',
    ctaLabel: 'GET FREE QUOTE',
    phoneNumber: answers.phone,
    phoneLink: `tel:+1${answers.phone.replace(/[^\d]/g, '')}`,
    email: answers.email,
    footerText: `© ${currentYear} ${answers.businessName}. All Rights Reserved.`,
    logoPath: '/images/logo/kingtutlogo.png',
    logoAlt: siteName,
    BUSINESS_DESCRIPTION: businessDescription,
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
    SERVICE_1: finalServices[0] || '',
    SERVICE_2: finalServices[1] || '',
    SERVICE_3: finalServices[2] || '',
    SERVICE_4: finalServices[3] || '',
    SERVICE_5: finalServices[4] || '',
    SERVICE_6: finalServices[5] || ''
  };

  console.log('\n📂 Creating site at:', destSiteDir);
  
  // Check if destination already exists
  const destExists = fs.existsSync(destSiteDir);
  const existingPackageJsonPath = path.join(destSiteDir, 'package.json');
  const hasExistingProject = destExists && fs.existsSync(existingPackageJsonPath);
  
  let existingFramework = null;
  let existingPackageJson = null;
  let needsInstall = false;
  
  if (hasExistingProject) {
    try {
      existingPackageJson = JSON.parse(await fsp.readFile(existingPackageJsonPath, 'utf-8'));
      existingFramework = detectFramework(existingPackageJson);
      const hasNodeModules = fs.existsSync(path.join(destSiteDir, 'node_modules'));
      
      console.log(`   ℹ️  Existing project detected (${existingFramework || 'unknown'} framework)`);
      console.log(`   📦 ${hasNodeModules ? 'node_modules found' : 'node_modules not found'}`);
      
      console.log('   🔄 Merging template files (preserving node_modules, .git, etc.)...');
      await mergeDir(srcTemplateDir, destSiteDir);
      
      const newPackageJsonPath = path.join(destSiteDir, 'package.json');
      if (fs.existsSync(newPackageJsonPath)) {
        try {
          const newPackageJson = JSON.parse(await fsp.readFile(newPackageJsonPath, 'utf-8'));
          const depsChanged = JSON.stringify(existingPackageJson.dependencies) !== JSON.stringify(newPackageJson.dependencies);
          const devDepsChanged = JSON.stringify(existingPackageJson.devDependencies || {}) !== JSON.stringify(newPackageJson.devDependencies || {});
          
          if (depsChanged || devDepsChanged) {
            needsInstall = true;
            console.log('   📝 package.json dependencies changed, will reinstall');
          } else if (!hasNodeModules) {
            needsInstall = true;
            console.log('   📝 node_modules missing, will install');
          } else {
            console.log('   ✅ Dependencies unchanged, skipping npm install');
          }
        } catch (err) {
          needsInstall = !hasNodeModules;
        }
      }
    } catch (err) {
      console.warn(`   ⚠️  Could not read existing package.json: ${err.message}`);
      await copyDir(srcTemplateDir, destSiteDir);
      needsInstall = true;
    }
  } else {
    await copyDir(srcTemplateDir, destSiteDir);
    needsInstall = true;
  }
  
  // Detect framework from template
  let framework = null;
  let isNextJs = false;
  const packageJsonPath = path.join(destSiteDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(await fsp.readFile(packageJsonPath, 'utf-8'));
      framework = detectFramework(packageJson);
      isNextJs = framework === 'nextjs';
      
      if (framework) {
        console.log(`⚙️  Detected ${framework} framework`);
      }
      
      // Handle framework-specific setup
      if (isNextJs) {
        const envExampleSrc = path.join(destSiteDir, 'ENV_EXAMPLE.txt');
        const envExampleDest = path.join(destSiteDir, '.env.example');
        if (fs.existsSync(envExampleSrc)) {
          try {
            await fsp.copyFile(envExampleSrc, envExampleDest);
            console.log('   ✅ Created .env.example from ENV_EXAMPLE.txt');
            await fsp.unlink(envExampleSrc);
          } catch (err) {
            console.warn(`   ⚠️  Could not copy ENV_EXAMPLE.txt: ${err.message}`);
          }
        }
        
        const publicImagesDir = path.join(destSiteDir, 'public', 'images');
        await fsp.mkdir(publicImagesDir, { recursive: true });
        console.log('   ✅ Created public/images directory for Next.js static assets');
      }
      
      // Install dependencies FIRST for Next.js so we can properly process components
      if (needsInstall && framework) {
        console.log(`⚙️  Installing ${framework} dependencies (needed for component processing)...`);
        try {
          execSync('npm install', { 
            cwd: destSiteDir, 
            stdio: 'inherit',
            shell: true
          });
          console.log('   ✅ Dependencies installed successfully');
        } catch (err) {
          console.warn('   ⚠️  Failed to install dependencies automatically.');
          console.warn('   Component conversion may not work correctly.');
        }
      } else if (framework && !needsInstall) {
        console.log(`   ✅ Dependencies already installed`);
      }

      // Copy and convert components from root components folder (HTML to TSX for Next.js)
      const fullStackTemplates = ['king-tut-templates/marketing-landing', 'fullstack-app-1'];
      const isFullStackTemplate = fullStackTemplates.includes(templateFolder);
      
      if (isNextJs && isFullStackTemplate) {
        const rootComponentsDir = path.join(rootDir, 'components');
        if (fs.existsSync(rootComponentsDir)) {
          const componentFiles = await fsp.readdir(rootComponentsDir);
          const htmlComponents = componentFiles.filter(f => f.endsWith('.html'));
          
          if (htmlComponents.length > 0) {
            const destComponentsDir = path.join(destSiteDir, 'app', 'components');
            await fsp.mkdir(destComponentsDir, { recursive: true });
            
            console.log(`   📦 Converting ${htmlComponents.length} HTML component(s) to TSX...`);
            
            for (const htmlFile of htmlComponents) {
              try {
                const htmlPath = path.join(rootComponentsDir, htmlFile);
                const htmlContent = await fsp.readFile(htmlPath, 'utf-8');
                
                const componentName = htmlFile
                  .replace(/\.html$/, '')
                  .split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join('');
                
                const tsxContent = convertHtmlToTsx(htmlContent, componentName);
                const tsxPath = path.join(destComponentsDir, `${componentName}.tsx`);
                
                await fsp.writeFile(tsxPath, tsxContent, 'utf-8');
                console.log(`   ✅ Converted ${htmlFile} → ${componentName}.tsx`);
              } catch (err) {
                console.warn(`   ⚠️  Could not convert ${htmlFile}: ${err.message}`);
              }
            }
          }
        }
      }
      
      // Copy components from template
      const templateComponentDirs = await findComponentDirs(srcTemplateDir);
      let componentsCopied = false;
      
      if (templateComponentDirs.length > 0) {
        for (const compDir of templateComponentDirs) {
          const destCompDir = path.join(destSiteDir, compDir.path);
          try {
            await mergeDir(compDir.fullPath, destCompDir, ['node_modules', '.git', '.next', 'dist', 'build', '.cache']);
            console.log(`   ✅ Copied/updated components from ${compDir.path}`);
            componentsCopied = true;
          } catch (err) {
            console.warn(`   ⚠️  Could not copy components from ${compDir.path}: ${err.message}`);
          }
        }
      }
      
      // For Next.js: Convert any HTML component files to TSX after copying
      if (isNextJs && isFullStackTemplate && componentsCopied) {
        console.log('   🔄 Converting HTML components to TSX for Next.js...');
        const destComponentDirs = await findComponentDirs(destSiteDir);
        
        for (const compDir of destComponentDirs) {
          const convertedFiles = await convertHtmlComponentsToTsx(compDir.fullPath);
          if (convertedFiles.length > 0) {
            console.log(`   ✅ Converted ${convertedFiles.length} HTML component(s) to TSX in ${compDir.path}`);
          }
        }
      }

      // For the fullstack Next.js template, remove calculator components and references,
      // and write a clean footer that uses the user's business info instead of the
      // original dumpster-specific content.
      if (isNextJs && templateFolder === 'fullstack-app-1') {
        console.log('   🧹 Removing calculator components from fullstack Next.js template...');
        await removeCalculatorsFromNextTemplate(destSiteDir);

        console.log('   🧩 Writing custom footer with your business info...');
        await writeNextJsFooter(destSiteDir, replacements, scheme);
      }

      // For any Next.js template, if both layout.tsx and page.tsx reference Footer,
      // strip Footer from page.tsx so we only render it once from the layout.
      if (isNextJs) {
        await removeDuplicatePageFooter(destSiteDir);
      }
    } catch (err) {
      console.warn('   ⚠️  Could not check for framework:', err.message);
    }
  }

  const rootCssDir = path.normalize(path.join(rootDir, 'css'));
  const destCssDir = path.normalize(path.join(destSiteDir, 'css'));
  
  if (fs.existsSync(rootCssDir)) {
    const rootCssFiles = await fsp.readdir(rootCssDir);
    let copiedCount = 0;
    for (const file of rootCssFiles) {
      if (file.endsWith('.css') && file !== 'design-tokens-override.css') {
        const srcFile = path.normalize(path.join(rootCssDir, file));
        const destFile = path.normalize(path.join(destCssDir, file));
        if (fs.existsSync(srcFile)) {
          try {
            await fsp.copyFile(srcFile, destFile);
            copiedCount++;
          } catch (err) {
            console.warn(`   ⚠️  Could not copy ${file}: ${err.message}`);
          }
        }
      }
    }
    if (copiedCount > 0) {
      console.log(`   ✅ Copied ${copiedCount} CSS file(s) from root directory`);
    }
  }

  console.log('🎨 Applying color scheme...');
  const cssTokensFile = path.join(destSiteDir, 'css', 'design-tokens-override.css');
  await writeColorTokens(cssTokensFile, scheme);

  console.log('📄 Generating config files...');
  await processTemplateFiles(rootDir, destSiteDir, replacements, isNextJs);

  console.log('📖 Generating setup guide...');
  const setupTemplatePath = path.join(rootDir, 'SETUP.template.md');
  const setupOutputPath = path.join(destSiteDir, 'SETUP.md');
  await generateSetupGuide(setupTemplatePath, setupOutputPath, replacements);

  console.log('🖼️  Copying stock images...');
  
  // Try multiple image source locations in order of preference
  const imageSourcePaths = [
    // 1. Vertical-specific stock images
    path.join(rootDir, 'stock-images', answers.verticalKey),
    // 2. Vertical-specific public/images (for Next.js projects)
    path.join(rootDir, answers.verticalKey, 'public', 'images'),
    // 3. Common folder names that might contain images (landscape, landscaping, etc.)
    path.join(rootDir, 'landscape', 'public', 'images'),
    path.join(rootDir, 'landscaping', 'public', 'images'),
    path.join(rootDir, 'dumpster', 'public', 'images'),
    path.join(rootDir, 'dumpster-rental', 'public', 'images'),
    // 4. Root public/images directory
    path.join(rootDir, 'public', 'images'),
    // 5. Root images directory
    path.join(rootDir, 'images'),
    // 6. Vertical name as folder (e.g., landscape/public/images)
    path.join(rootDir, vertical.primaryService.toLowerCase().replace(/\s+/g, '-'), 'public', 'images'),
    path.join(rootDir, answers.verticalKey, 'images'),
  ];
  
  let imagesCopied = false;
  const imagesStockDest = path.join(destSiteDir, 'images', 'stock');
        
  for (const imageSourcePath of imageSourcePaths) {
    if (fs.existsSync(imageSourcePath)) {
      try {
        const stats = await fsp.stat(imageSourcePath);
        if (!stats.isDirectory()) {
          continue; // Skip if it's not a directory
        }
        
        // Check if it's a directory with image files
        const entries = await fsp.readdir(imageSourcePath, { withFileTypes: true });
        const hasImages = entries.some(entry => 
          entry.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name)
        );
        
        if (hasImages || entries.length > 0) {
          await fsp.mkdir(imagesStockDest, { recursive: true });
          await copyDir(imageSourcePath, imagesStockDest);
          console.log(`   ✅ Copied stock images from: ${path.relative(rootDir, imageSourcePath)}`);
          imagesCopied = true;
          break;
        }
      } catch (err) {
        // Try next path
        continue;
      }
    }
  }
  
  if (!imagesCopied) {
    console.log('   ⚠️  No stock images found. Checked locations:');
    imageSourcePaths.forEach(p => {
      const relPath = path.relative(rootDir, p);
      console.log(`      - ${relPath}`);
    });
  }

  // Copy stock images and logos to public/images for Next.js
  if (isNextJs) {
    const publicImagesDir = path.join(destSiteDir, 'public', 'images');
    await fsp.mkdir(publicImagesDir, { recursive: true });
    
    // First, try to copy directly from source locations to public/images
    const directImageSources = [
      path.join(rootDir, 'stock-images', answers.verticalKey),
      path.join(rootDir, answers.verticalKey, 'public', 'images'),
      // Common folder names that might contain images
      path.join(rootDir, 'landscape', 'public', 'images'),
      path.join(rootDir, 'landscaping', 'public', 'images'),
      path.join(rootDir, 'dumpster', 'public', 'images'),
      path.join(rootDir, 'dumpster-rental', 'public', 'images'),
      path.join(rootDir, 'public', 'images'),
      path.join(rootDir, 'images'),
      path.join(rootDir, vertical.primaryService.toLowerCase().replace(/\s+/g, '-'), 'public', 'images'),
    ];
    
    let directCopied = false;
    for (const imageSource of directImageSources) {
      if (fs.existsSync(imageSource)) {
        try {
          const entries = await fsp.readdir(imageSource, { withFileTypes: true });
          const imageFiles = entries.filter(entry => 
            entry.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name)
          );
          
          if (imageFiles.length > 0) {
            let copiedCount = 0;
            for (const entry of imageFiles) {
              const srcFile = path.join(imageSource, entry.name);
              const destFile = path.join(publicImagesDir, entry.name);
          try {
                await fsp.copyFile(srcFile, destFile);
                copiedCount++;
              } catch (_) {
                // ignore
              }
            }
            if (copiedCount > 0) {
              console.log(`   ✅ Copied ${copiedCount} image(s) directly to public/images/ from: ${path.relative(rootDir, imageSource)}`);
              directCopied = true;
              break;
            }
          }
          } catch (_) {
          // Try next source
          continue;
        }
    }
  }

    // Fallback: Copy from images/stock if we already copied there
    if (!directCopied) {
    const stockImagesDir = path.join(destSiteDir, 'images', 'stock');
    if (fs.existsSync(stockImagesDir)) {
      const stockFiles = await fsp.readdir(stockImagesDir);
      let copiedCount = 0;
      for (const stockFile of stockFiles) {
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(stockFile)) {
          const srcFile = path.join(stockImagesDir, stockFile);
          const destFile = path.join(publicImagesDir, stockFile);
          try {
            await fsp.copyFile(srcFile, destFile);
            copiedCount++;
          } catch (_) {
            // ignore
          }
        }
      }
      if (copiedCount > 0) {
        console.log(`   ✅ Copied ${copiedCount} stock image(s) to public/images/ for Next.js`);
        }
      }
    }
    
    // Copy logo directory to public/images/logo
    const logoSources = [
      path.join(rootDir, 'images', 'logo'),
      path.join(rootDir, 'public', 'images', 'logo'),
      path.join(destSiteDir, 'images', 'logo'),
    ];
    
    const publicLogoDir = path.join(publicImagesDir, 'logo');
    let logoCopied = false;
    for (const logoSource of logoSources) {
      if (fs.existsSync(logoSource)) {
        try {
          await copyDir(logoSource, publicLogoDir);
          console.log(`   ✅ Copied logo images to public/images/logo/ from: ${path.relative(rootDir, logoSource)}`);
          logoCopied = true;
          break;
        } catch (_) {
          // Try next source
          continue;
        }
      }
    }
    
    // Also copy any remaining images from images directory
    const rootImagesDir = path.join(destSiteDir, 'images');
    if (fs.existsSync(rootImagesDir)) {
      const rootImageFiles = await fsp.readdir(rootImagesDir);
      for (const imgFile of rootImageFiles) {
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(imgFile)) {
          const srcFile = path.join(rootImagesDir, imgFile);
          const destFile = path.join(publicImagesDir, imgFile);
          try {
            // Only copy if it doesn't already exist
            if (!fs.existsSync(destFile)) {
              await fsp.copyFile(srcFile, destFile);
            }
          } catch (_) {
            // ignore
          }
        }
      }
    }
  }

  console.log('✏️ Replacing template tokens in all files...');
  const htmlFiles = [];
  const skipDirsForCount = new Set(['node_modules', '.next', '.git', 'dist', 'build', '.cache']);
  
  async function countHtmlFiles(dir) {
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && skipDirsForCount.has(entry.name.toLowerCase())) {
        continue;
      }
      if (entry.name.startsWith('.') && entry.isDirectory()) {
        continue;
      }
      
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
  console.log('   Replacing tokens in all template files (skipping node_modules, .next, etc.)...');
  
  tokenReplacementCount = 0;
  await replaceTokensRecursively(destSiteDir, replacements, true);
  console.log(`   ✅ Processed ${tokenReplacementCount} files`);

  console.log('\n✅ Done! Generated placement site at:', answers.outputFolder);
  console.log(`   Generated ${htmlFiles.length} pages with all tokens replaced.`);
  console.log(`   Website Type: ${vertical.primaryService}`);
  console.log(`   Domain: ${fullUrl}`);
  if (framework) {
    const frameworkName = framework === 'nextjs' ? 'Next.js' : framework === 'vite' ? 'Vite' : framework === 'create-react-app' ? 'Create React App' : framework === 'react' ? 'React' : framework;
    console.log(`\n   🚀 To run the ${frameworkName} site:`);
    console.log(`      cd ${answers.outputFolder}`);
    if (framework === 'nextjs') {
      console.log('      npm run dev');
      console.log('   Then open http://localhost:3000 in your browser\n');
    } else if (framework === 'vite') {
      console.log('      npm run dev');
      console.log('   Then open the URL shown in the terminal\n');
    } else {
      console.log('      npm start');
      console.log('   Then open the URL shown in the terminal\n');
    }
  } else {
    console.log('   Open index.html in your browser or serve the folder with any static server.\n');
  }
}

run().catch((err) => {
  console.error('❌ Error running King Tut wizard:', err);
  process.exit(1);
});
