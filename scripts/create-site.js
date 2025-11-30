#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

// --------- CONFIG: TEMPLATES & COLOR SCHEMES -----------------

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
    content = content.replace(regex, value);
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
      // Only replace in text-like files
      if (/\.(html|htm|css|js|json|txt)$/i.test(entry.name)) {
        await replaceTokensInFile(fullPath, replacements);
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
      type: 'input',
      name: 'serviceType',
      message: 'Primary Service / Website Type (e.g. Pressure Washing, Dental Clinic, Agency):',
      validate: (v) => v.trim() ? true : 'Please enter a service type.'
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
      name: 'outputFolder',
      message: 'Output folder name (where to generate the site):',
      default: (ans) =>
        ans.businessName.trim().toLowerCase().replace(/\s+/g, '-')
    }
  ]);

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
  const replacements = {
    BUSINESS_NAME: answers.businessName,
    SITE_NAME: siteName,
    SERVICE_TYPE: answers.serviceType,
    PRIMARY_SERVICE: answers.serviceType,      // in case you use both
    SERVICE_AREA: answers.serviceArea,
    REGION: answers.serviceArea,
    YEAR_STARTED: answers.yearStarted,
    CURRENT_YEAR: currentYear,
    // Default values for optional tokens
    TARGET_AUDIENCE: 'your needs',
    CITY: answers.serviceArea.split(',')[0] || answers.serviceArea,
    CITY_1: answers.serviceArea.split(',')[0] || 'City 1',
    CITY_2: answers.serviceArea.split(',')[1]?.trim() || 'City 2',
    CITY_3: answers.serviceArea.split(',')[2]?.trim() || 'City 3',
    CITY_4: answers.serviceArea.split(',')[3]?.trim() || 'City 4',
    CITY_SLUG_1: (answers.serviceArea.split(',')[0] || 'city-1').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_2: (answers.serviceArea.split(',')[1]?.trim() || 'city-2').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_3: (answers.serviceArea.split(',')[2]?.trim() || 'city-3').toLowerCase().replace(/\s+/g, '-'),
    CITY_SLUG_4: (answers.serviceArea.split(',')[3]?.trim() || 'city-4').toLowerCase().replace(/\s+/g, '-'),
    HOME_PAGE_DESCRIPTION: `Professional ${answers.serviceType} services in ${answers.serviceArea}. Quality service, competitive pricing, guaranteed results.`,
    KEYWORDS: `${answers.serviceType}, ${answers.businessName}, ${answers.serviceArea}`,
    WEBSITE_URL: `https://${answers.outputFolder}.com`,
    BUSINESS_DESCRIPTION: `Professional ${answers.serviceType} services in ${answers.serviceArea}`,
    PHONE_NUMBER: '(555) 123-4567',
    PHONE: '(555) 123-4567',
    EMAIL: `info@${answers.outputFolder}.com`,
    STREET_ADDRESS: '123 Main Street',
    POSTAL_CODE: '12345',
    COUNTRY: 'USA',
    FACEBOOK_URL: `https://facebook.com/${answers.outputFolder}`,
    INSTAGRAM_URL: `https://instagram.com/${answers.outputFolder}`,
    LINKEDIN_URL: `https://linkedin.com/company/${answers.outputFolder}`,
    GOOGLE_ANALYTICS_ID: 'UA-XXXXX-Y',
    PRIMARY_COLOR: scheme.primary
  };

  console.log('\n📂 Creating site at:', destSiteDir);
  await copyDir(srcTemplateDir, destSiteDir);

  console.log('🎨 Applying color scheme...');
  const cssTokensFile = path.join(destSiteDir, 'css', 'design-tokens-override.css');
  await writeColorTokens(cssTokensFile, scheme);

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

  console.log('\n✅ Done! Generated site at:', answers.outputFolder);
  console.log(`   Generated ${htmlFiles.length} pages with all tokens replaced.`);
  console.log('   Open index.html in your browser or serve the folder with any static server.\n');
}

run().catch((err) => {
  console.error('❌ Error running King Tut wizard:', err);
  process.exit(1);
});

