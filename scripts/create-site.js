#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { execSync, spawn } = require('child_process');

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

// High-level site types shown in the first prompt
const SITE_TYPE_KEYS = ['personal', 'services', 'corporate', 'local-business', 'custom'];

const siteTypeChoices = SITE_TYPE_KEYS
  .filter(key => verticals[key]) // only show ones that exist in verticals.json
  .map(key => ({
    name: verticals[key].label || verticals[key].primaryService,
    value: key
  }));

// Helper to get the selected vertical given the answers
function getVerticalFromAnswers(ans) {
  // If they picked "services", use the detailed vertical they chose (landscaping, roofing, etc.)
  const key =
    ans.siteType === 'services' && ans.verticalKey
      ? ans.verticalKey
      : ans.siteType || ans.verticalKey; // fallback for older runs

  return verticals[key];
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
  
  // Convert image paths to Next.js format (/images/ -> /images/)
  // Note: Next.js serves from public/, so /images/ is correct
  
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

async function replaceTokensInFile(filePath, replacements) {
  let content = await fsp.readFile(filePath, 'utf-8');

  // Replace new token format: {{TOKEN_NAME}}
  // Escape special regex characters in token names
  for (const [token, value] of Object.entries(replacements)) {
    // Escape special regex characters in the token name
    const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\{\\{${escapedToken}\\}\\}`, 'g');
    
    // Special handling for KEYWORDS_ARRAY - don't escape quotes in JSON
    if (token === 'KEYWORDS_ARRAY') {
      content = content.replace(regex, value);
    } else {
      // For URL values, ensure they're properly formatted
      let replacementValue = value;
      if (typeof value === 'string' && (token.includes('URL') || token.includes('Url') || token === 'siteUrl' || token === 'WEBSITE_URL' || token === 'FULL_URL')) {
        // Ensure the URL is properly formatted (should already be, but double-check)
        if (!replacementValue.match(/^https?:\/\//)) {
          replacementValue = `https://${replacementValue}`;
        }
      }
      // Replace all occurrences
      content = content.replace(regex, replacementValue);
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

  // Check for any remaining unreplaced tokens (warn but don't fail)
  const remainingTokens = content.match(/\{\{[A-Z_]+\}\}/g);
  if (remainingTokens && remainingTokens.length > 0) {
    const uniqueTokens = [...new Set(remainingTokens)];
    // Only warn if it's a .tsx or .ts file (Next.js files that need tokens)
    if (/\.(tsx|ts|jsx|js)$/i.test(filePath)) {
      console.warn(`   ⚠️  Unreplaced tokens in ${path.relative(process.cwd(), filePath)}: ${uniqueTokens.join(', ')}`);
    }
  }

  await fsp.writeFile(filePath, content, 'utf-8');
}

// Global counter for progress tracking
let tokenReplacementCount = 0;

async function replaceTokensRecursively(rootDir, replacements, showProgress = false) {
  // Directories to skip (common build/cache/dependency folders)
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
    // Skip hidden files/directories starting with . (except specific ones we want)
    if (entry.name.startsWith('.') && !['.env', '.gitignore', '.eslintrc', '.prettierrc'].includes(entry.name)) {
      continue;
    }

    // Skip common directories that shouldn't be processed
    if (entry.isDirectory() && skipDirs.has(entry.name.toLowerCase())) {
      continue;
    }

    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await replaceTokensRecursively(fullPath, replacements, showProgress);
    } else if (entry.isFile()) {
      // Only replace in text-like files (including templates and Next.js files)
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

// Fix absolute paths to relative paths based on file depth
async function fixAbsolutePaths(filePath, siteRootDir) {
  let content = await fsp.readFile(filePath, 'utf-8');
  let modified = false;

  // Calculate depth: how many directories deep from site root
  const relativePath = path.relative(siteRootDir, path.dirname(filePath));
  const depth = relativePath === '.' ? 0 : relativePath.split(path.sep).length;
  
  // Build relative path prefix (e.g., "" for root, "../" for depth 1, "../../" for depth 2)
  const relativePrefix = depth > 0 ? '../'.repeat(depth) : '';

  if (depth === 0) {
    // Root level files are fine
    return;
  }

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

  const imageSrcPattern = /src=["']\/images\//g;
  if (imageSrcPattern.test(content)) {
    content = content.replace(imageSrcPattern, `src="${relativePrefix}images/`);
    modified = true;
  }

  const imageUrlPattern = /url\(["']?\/images\//g;
  if (imageUrlPattern.test(content)) {
    content = content.replace(imageUrlPattern, `url(${relativePrefix}images/`);
    modified = true;
  }

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

/**
 * Recursively list all image files under a directory.
 * Returns [{ name, path }]
 */
async function listImageFilesRecursive(rootDir) {
  const results = [];

  async function walk(currentDir) {
    let entries;
    try {
      entries = await fsp.readdir(currentDir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (
        entry.isFile() &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name)
      ) {
        results.push({ name: entry.name, path: fullPath });
      }
    }
  }

  await walk(rootDir);
  return results;
}

// Fetch images for a single/high-value page with wget (no full-site mirror)
async function fetchImagesWithWget(sourceUrl, destDir) {
  try {
    console.log(`📸 Downloading images from: ${sourceUrl}`);
    console.log('   (Single-page mode: only this URL and its direct image assets)');
    console.log('   Note: Ensure you have rights to download assets from this URL.');

    // Ensure destination directory exists (this SHOULD be images/scraped)
    await fsp.mkdir(destDir, { recursive: true });

    // Detect wget
    let wgetPath = 'wget';
    let wgetFound = false;

    try {
      if (process.platform === 'win32') {
        const possiblePaths = [
          'wget.exe',
          'wget',
          path.join(process.env.ProgramFiles || 'C:\\Program Files', 'Git', 'usr', 'bin', 'wget.exe'),
          path.join(process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)', 'Git', 'usr', 'bin', 'wget.exe'),
          path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Git', 'usr', 'bin', 'wget.exe')
        ];

        for (const testPath of possiblePaths) {
          try {
            execSync(`"${testPath}" --version`, {
              stdio: 'ignore',
              timeout: 5000,
              shell: true
            });
            wgetPath = testPath;
            wgetFound = true;
            console.log(`   ✅ Found wget at: ${wgetPath}`);
            break;
          } catch (_) {
            // try next
          }
        }

        if (!wgetFound) {
          try {
            const wgetCheck = execSync('where.exe wget', {
              encoding: 'utf-8',
              timeout: 5000,
              shell: true
            }).trim();
            if (wgetCheck && !wgetCheck.includes('not found')) {
              wgetPath = wgetCheck.split('\n')[0].trim();
              wgetFound = true;
              console.log(`   ✅ Found wget via where.exe: ${wgetPath}`);
            }
          } catch (_) {
            // ignore
          }
        }
      } else {
        try {
          execSync('wget --version', {
            stdio: 'ignore',
            timeout: 5000
          });
          wgetFound = true;
          console.log('   ✅ Found wget');
        } catch (_) {
          // ignore
        }
      }

      if (wgetFound) {
        execSync(`"${wgetPath}" --version`, {
          stdio: 'ignore',
          timeout: 5000,
          shell: process.platform === 'win32'
        });
      }
    } catch (_) {
      wgetFound = false;
    }

    if (!wgetFound) {
      console.warn('   ⚠️  wget not found. Skipping image fetch.');
      console.warn('   Install wget:');
      console.warn('     Windows: choco install wget  (or install Git for Windows which includes wget)');
      console.warn('     macOS: brew install wget');
      console.warn('     Linux: apt-get install wget  (or yum install wget)');
      return;
    }

    // Try to parse domain (we no longer clamp wget to this domain,
    // so CDN/asset hosts are allowed)
    let sourceDomain = '';
    try {
      const urlObj = sourceUrl.startsWith('http') ? new URL(sourceUrl) : new URL(`https://${sourceUrl}`);
      sourceDomain = urlObj.hostname;
    } catch (_) {
      // If URL parsing fails, continue without domain info
    }

    // Test connection first with a simple HEAD/spider request
    console.log('   🔍 Testing connection to source URL...');
    try {
      const testArgs = [
        '--spider',
        '--timeout=10',
        '--tries=1',
        '--no-check-certificate',
        sourceUrl
      ];

      execSync(`"${wgetPath}" ${testArgs.join(' ')}`, {
        stdio: 'ignore',
        shell: process.platform === 'win32',
        timeout: 15000
      });
      console.log('   ✅ Connection test successful');
    } catch (testErr) {
      console.warn('   ⚠️  Connection test failed, but continuing anyway...');
      console.warn('   The URL might require authentication or have restrictions.');
    }

    // Multi-level image scraping: get images from the page and linked pages
    // Prioritize webp and larger images, exclude generic icons and gradients
    let wgetArgs = [
      '--page-requisites',                // grab assets needed for pages
      '--adjust-extension',
      '--convert-links',
      '--no-parent',
      '--no-check-certificate',
      '--no-directories',                // put files directly in destDir (no deep tree)
      '--level=3',                       // follow links up to 3 levels deep to get more images
      '--recursive',                     // enable recursion
      '--accept=webp,jpg,jpeg,png,gif',  // prioritize webp, then other formats (exclude SVG to avoid icons)
      '--reject=favicon.ico,favicon.png,apple-touch-icon.png,googleg_gradient*.png,standard_*dp.png,icon_*.png', // reject common icon patterns
      '--reject-regex=.*(?:favicon|apple-touch|googleg|standard_\\d+dp|icon_\\d+x\\d+|\\d+x\\d+\\.png|gradient).*', // reject icon patterns via regex
      '--span-hosts',                    // allow CDN/asset hosts
      '-e', 'robots=off',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      '--timeout=30',
      '--tries=3',
      '--wait=1',                        // wait 1 second between requests to be polite
      '--random-wait',                   // randomize wait time
      '--directory-prefix', destDir,
      sourceUrl
    ];

    // IMPORTANT: we do NOT add "--domains" now so CDN/asset hosts will be included.
    // If you want to partially restrict domains, you can manually add a small whitelist here.

    console.log('   🔍 Running wget (single-page image mode)...');
    console.log(`   Destination root: ${destDir}`);

    try {
      const wgetProcess = spawn(wgetPath, wgetArgs, {
        shell: false,
        stdio: 'inherit',
        cwd: process.cwd()
      });

      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          wgetProcess.kill();
          reject(new Error('Wget operation timed out after 10 minutes'));
        }, 600000); // 10 minutes

        wgetProcess.on('close', (code) => {
          clearTimeout(timeout);
          if (code === 0) {
            resolve();
          } else {
            console.warn(`   ⚠️  wget exited with code ${code}, continuing (files may still have been downloaded).`);
            resolve();
          }
        });

        wgetProcess.on('error', (err) => {
          clearTimeout(timeout);
          reject(err);
        });
      });

      console.log('   ✅ wget download completed');
    } catch (execErr) {
      console.warn(`   ⚠️  Wget encountered errors: ${execErr.message}`);
    }

    // Filter out small images, generic icons, gradients, and other unimportant images
    const allImages = await listImageFilesRecursive(destDir);
    const MIN_IMAGE_SIZE = 20 * 1024; // 20KB minimum - filters out most small icons and favicons
    const goodImages = [];
    const rejectedImages = [];

    // Patterns to reject (generic icons, gradients, small dimension indicators)
    const rejectPatterns = [
      /favicon/i,
      /apple-touch/i,
      /googleg[_-]?gradient/i,
      /standard[_-]?\d+dp/i,
      /icon[_-]?\d+x\d+/i,
      /\d+x\d+\.(png|jpg|jpeg|gif|webp)$/i, // dimension-based filenames like "16x16.png"
      /gradient/i,
      /^icon[_-]/i,
      /^logo[_-]?small/i,
      /^small[_-]?icon/i,
      /^tiny[_-]?icon/i
    ];

    for (const img of allImages) {
      const fileName = img.name.toLowerCase();
      const filePath = img.path;

      // Check against rejection patterns
      const shouldReject = rejectPatterns.some(pattern => pattern.test(fileName));
      
      if (shouldReject) {
        rejectedImages.push(img);
        try {
          await fsp.unlink(filePath);
        } catch (_) {
          // ignore deletion errors
        }
        continue;
      }

      // Check file size - reject small files (likely icons/favicons)
      try {
        const stats = await fsp.stat(filePath);
        if (stats.size < MIN_IMAGE_SIZE) {
          rejectedImages.push(img);
          await fsp.unlink(filePath);
          continue;
        }
        
        // Prefer webp files, but accept all formats that pass size check
        goodImages.push(img);
      } catch (_) {
        // If we can't stat the file, skip it
        rejectedImages.push(img);
      }
    }

    console.log('   📊 Image scrape summary:');
    console.log(`      ✅ Found ${goodImages.length} good image(s) (${rejectedImages.length} rejected: icons/gradients/small files)`);
    if (goodImages.length > 0) {
      const webpCount = goodImages.filter(img => img.name.toLowerCase().endsWith('.webp')).length;
      if (webpCount > 0) {
        console.log(`      📸 Including ${webpCount} WebP image(s) (preferred format)`);
      }
    }

    // If we don't have enough images, try a deeper scrape
    if (goodImages.length < 20) {
      console.log(`   ⚠️  Only ${goodImages.length} images found, attempting deeper scrape...`);

      // Try scraping with even more depth and broader acceptance
      const deeperArgs = [
        '--page-requisites',
        '--adjust-extension',
        '--convert-links',
        '--no-parent',
        '--no-check-certificate',
        '--no-directories',
        '--level=5',                      // go deeper
        '--recursive',
        '--accept=webp,jpg,jpeg,png,gif',  // prioritize webp
        '--reject=favicon.ico,favicon.png,apple-touch-icon.png,googleg_gradient*.png,standard_*dp.png,icon_*.png',
        '--reject-regex=.*(?:favicon|apple-touch|googleg|standard_\\d+dp|icon_\\d+x\\d+|\\d+x\\d+\\.png|gradient).*',
        '--span-hosts',
        '-e', 'robots=off',
        '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        '--timeout=30',
        '--tries=2',
        '--wait=0.5',
        '--random-wait',
        '--directory-prefix', destDir,
        sourceUrl
      ];

      try {
        const deeperProcess = spawn(wgetPath, deeperArgs, {
          shell: false,
          stdio: 'inherit',
          cwd: process.cwd()
        });

        await new Promise((resolve) => {
          const timeout = setTimeout(() => {
            deeperProcess.kill();
            resolve();
          }, 300000); // 5 minutes for deeper scrape

          deeperProcess.on('close', () => {
            clearTimeout(timeout);
            resolve();
          });

          deeperProcess.on('error', () => {
            clearTimeout(timeout);
            resolve();
          });
        });

        // Re-filter after deeper scrape using the same improved patterns
        const allImagesAfter = await listImageFilesRecursive(destDir);
        const finalGoodImages = [];
        
        const rejectPatternsAfter = [
          /favicon/i,
          /apple-touch/i,
          /googleg[_-]?gradient/i,
          /standard[_-]?\d+dp/i,
          /icon[_-]?\d+x\d+/i,
          /\d+x\d+\.(png|jpg|jpeg|gif|webp)$/i,
          /gradient/i,
          /^icon[_-]/i,
          /^logo[_-]?small/i,
          /^small[_-]?icon/i,
          /^tiny[_-]?icon/i
        ];

        for (const img of allImagesAfter) {
          const fileName = img.name.toLowerCase();
          const filePath = img.path;

          // Check against rejection patterns
          const shouldReject = rejectPatternsAfter.some(pattern => pattern.test(fileName));
          
          if (shouldReject) {
            try {
              await fsp.unlink(filePath);
            } catch (_) {}
            continue;
          }

          try {
            const stats = await fsp.stat(filePath);
            if (stats.size >= MIN_IMAGE_SIZE) {
              finalGoodImages.push(img);
            } else {
              await fsp.unlink(filePath);
            }
          } catch (_) {}
        }

        console.log(`   📊 After deeper scrape: ${finalGoodImages.length} good image(s) found`);
      } catch (err) {
        console.warn(`   ⚠️  Deeper scrape failed: ${err.message}`);
      }
    }

    const finalImages = await listImageFilesRecursive(destDir);
    const finalCount = finalImages.length;
    console.log(`   ✅ Final count: ${finalCount} image file(s) ready to use`);

    if (finalCount < 10) {
      console.warn(`   ⚠️  Warning: Only ${finalCount} images found. Consider providing a gallery/media page URL instead of the homepage.`);
    }
  } catch (err) {
    console.warn('   ⚠️  Error downloading images with wget:', err.message);
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

// Get common county/metro names for a state
function getCountiesForState(stateAbbr) {
  const state = stateAbbr ? stateAbbr.toUpperCase() : '';
  const countiesByState = {
    'UT': ['Salt Lake County', 'Utah County', 'Davis County', 'Weber County', 'Cache County', 'Washington County'],
    'CO': ['Denver County', 'Arapahoe County', 'Jefferson County', 'Adams County', 'El Paso County', 'Boulder County'],
    'CA': ['Los Angeles County', 'San Diego County', 'Orange County', 'Riverside County', 'San Bernardino County', 'Santa Clara County'],
    'TX': ['Harris County', 'Dallas County', 'Tarrant County', 'Bexar County', 'Travis County', 'Collin County'],
    'FL': ['Miami-Dade County', 'Broward County', 'Palm Beach County', 'Hillsborough County', 'Orange County', 'Pinellas County'],
    'NY': ['New York County', 'Kings County', 'Queens County', 'Suffolk County', 'Nassau County', 'Westchester County'],
    'IL': ['Cook County', 'DuPage County', 'Lake County', 'Will County', 'Kane County', 'McHenry County'],
    'PA': ['Philadelphia County', 'Allegheny County', 'Montgomery County', 'Bucks County', 'Delaware County', 'Chester County'],
    'OH': ['Cuyahoga County', 'Franklin County', 'Hamilton County', 'Summit County', 'Montgomery County', 'Lucas County'],
    'NC': ['Mecklenburg County', 'Wake County', 'Guilford County', 'Forsyth County', 'Durham County', 'Cumberland County'],
    'GA': ['Fulton County', 'Gwinnett County', 'Cobb County', 'DeKalb County', 'Clayton County', 'Chatham County'],
    'MI': ['Wayne County', 'Oakland County', 'Macomb County', 'Kent County', 'Genesee County', 'Washtenaw County'],
    'NJ': ['Bergen County', 'Middlesex County', 'Essex County', 'Hudson County', 'Monmouth County', 'Ocean County'],
    'VA': ['Fairfax County', 'Prince William County', 'Loudoun County', 'Chesterfield County', 'Henrico County', 'Arlington County'],
    'WA': ['King County', 'Pierce County', 'Snohomish County', 'Spokane County', 'Clark County', 'Thurston County'],
    'AZ': ['Maricopa County', 'Pima County', 'Pinal County', 'Yavapai County', 'Yuma County', 'Coconino County'],
    'MA': ['Middlesex County', 'Worcester County', 'Suffolk County', 'Essex County', 'Norfolk County', 'Bristol County'],
    'TN': ['Davidson County', 'Shelby County', 'Knox County', 'Hamilton County', 'Rutherford County', 'Williamson County'],
    'IN': ['Marion County', 'Lake County', 'Allen County', 'Hamilton County', 'St. Joseph County', 'Elkhart County'],
    'MO': ['St. Louis County', 'Jackson County', 'St. Charles County', 'Greene County', 'Clay County', 'Platte County'],
    'MD': ['Montgomery County', 'Prince George\'s County', 'Baltimore County', 'Anne Arundel County', 'Howard County', 'Baltimore City'],
    'WI': ['Milwaukee County', 'Dane County', 'Waukesha County', 'Brown County', 'Racine County', 'Outagamie County'],
    'MN': ['Hennepin County', 'Ramsey County', 'Dakota County', 'Anoka County', 'Washington County', 'Olmsted County'],
    'OR': ['Multnomah County', 'Washington County', 'Clackamas County', 'Lane County', 'Marion County', 'Jackson County'],
    'LA': ['Orleans Parish', 'Jefferson Parish', 'East Baton Rouge Parish', 'St. Tammany Parish', 'Lafayette Parish', 'Calcasieu Parish'],
    'AL': ['Jefferson County', 'Mobile County', 'Madison County', 'Montgomery County', 'Shelby County', 'Tuscaloosa County'],
    'KY': ['Jefferson County', 'Fayette County', 'Kenton County', 'Boone County', 'Warren County', 'Hardin County'],
    'OK': ['Oklahoma County', 'Tulsa County', 'Cleveland County', 'Canadian County', 'Rogers County', 'Comanche County'],
    'CT': ['Fairfield County', 'Hartford County', 'New Haven County', 'Middlesex County', 'New London County', 'Litchfield County'],
    'IA': ['Polk County', 'Linn County', 'Scott County', 'Johnson County', 'Black Hawk County', 'Dubuque County'],
    'SC': ['Greenville County', 'Richland County', 'Charleston County', 'Spartanburg County', 'York County', 'Lexington County'],
    'NV': ['Clark County', 'Washoe County', 'Carson City', 'Elko County', 'Douglas County', 'Lyon County'],
    'AR': ['Pulaski County', 'Benton County', 'Washington County', 'Sebastian County', 'Craighead County', 'Saline County'],
    'MS': ['Hinds County', 'Harrison County', 'DeSoto County', 'Rankin County', 'Madison County', 'Jackson County'],
    'KS': ['Johnson County', 'Sedgwick County', 'Shawnee County', 'Wyandotte County', 'Douglas County', 'Riley County'],
    'NM': ['Bernalillo County', 'Dona Ana County', 'Santa Fe County', 'Sandoval County', 'San Juan County', 'Valencia County'],
    'NE': ['Douglas County', 'Lancaster County', 'Sarpy County', 'Hall County', 'Buffalo County', 'Platte County'],
    'WV': ['Kanawha County', 'Berkeley County', 'Cabell County', 'Monongalia County', 'Raleigh County', 'Jefferson County'],
    'ID': ['Ada County', 'Canyon County', 'Kootenai County', 'Bannock County', 'Bonner County', 'Twin Falls County'],
    'HI': ['Honolulu County', 'Hawaii County', 'Maui County', 'Kauai County'],
    'NH': ['Hillsborough County', 'Rockingham County', 'Merrimack County', 'Strafford County', 'Grafton County', 'Belknap County'],
    'ME': ['Cumberland County', 'York County', 'Penobscot County', 'Kennebec County', 'Androscoggin County', 'Aroostook County'],
    'RI': ['Providence County', 'Kent County', 'Washington County', 'Newport County', 'Bristol County'],
    'MT': ['Yellowstone County', 'Missoula County', 'Gallatin County', 'Flathead County', 'Cascade County', 'Lewis and Clark County'],
    'DE': ['New Castle County', 'Kent County', 'Sussex County'],
    'SD': ['Minnehaha County', 'Pennington County', 'Lincoln County', 'Brown County', 'Brookings County', 'Codington County'],
    'ND': ['Cass County', 'Burleigh County', 'Grand Forks County', 'Ward County', 'Morton County', 'Stark County'],
    'AK': ['Anchorage Municipality', 'Fairbanks North Star Borough', 'Matanuska-Susitna Borough', 'Kenai Peninsula Borough'],
    'VT': ['Chittenden County', 'Rutland County', 'Washington County', 'Windham County', 'Windsor County', 'Franklin County'],
    'WY': ['Laramie County', 'Natrona County', 'Campbell County', 'Sweetwater County', 'Fremont County', 'Albany County'],
    'DC': ['District of Columbia']
  };
  
  return countiesByState[state] || [];
}

// Get common cities for a state (and optionally filter by county)
function getCitiesForState(stateAbbr, countyName = null) {
  const state = stateAbbr ? stateAbbr.toUpperCase() : '';
  const citiesByState = {
    'UT': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville', 'Murray', 'Draper', 'Lehi', 'Logan', 'Spanish Fork'],
    'CO': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Centennial', 'Boulder', 'Greeley', 'Longmont', 'Loveland', 'Grand Junction'],
    'CA': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine', 'Chula Vista'],
    'TX': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo', 'Lubbock', 'Garland', 'Irving', 'Amarillo', 'Grand Prairie'],
    'FL': ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Port St. Lucie', 'Cape Coral', 'Pembroke Pines', 'Hollywood', 'Miramar', 'Gainesville', 'Coral Springs'],
    'NY': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'Mount Vernon', 'Schenectady', 'Utica', 'White Plains', 'Hempstead', 'Troy', 'Niagara Falls', 'Binghamton'],
    'IL': ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin', 'Peoria', 'Champaign', 'Waukegan', 'Cicero', 'Bloomington', 'Arlington Heights', 'Evanston', 'Schaumburg'],
    'PA': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg', 'Altoona', 'York', 'State College', 'Wilkes-Barre', 'Chester', 'Williamsport'],
    'OH': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Springfield', 'Kettering', 'Elyria', 'Lakewood'],
    'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Concord', 'Asheville', 'Gastonia', 'Jacksonville', 'Chapel Hill', 'Rocky Mount'],
    'GA': ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Macon', 'Johns Creek', 'Albany', 'Warner Robins', 'Alpharetta', 'Marietta', 'Valdosta', 'Smyrna'],
    'MI': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Dearborn', 'Livonia', 'Troy', 'Westland', 'Farmington Hills', 'Kalamazoo', 'Wyoming', 'Southfield'],
    'NJ': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Lakewood', 'Toms River', 'Hamilton', 'Trenton', 'Clifton', 'Camden', 'Brick', 'Cherry Hill', 'Passaic'],
    'VA': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Portsmouth', 'Suffolk', 'Roanoke', 'Lynchburg', 'Harrisonburg', 'Leesburg', 'Charlottesville', 'Danville'],
    'WA': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Yakima', 'Federal Way', 'Spokane Valley', 'Bellingham', 'Kennewick', 'Auburn', 'Pasco'],
    'AZ': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Yuma', 'Avondale', 'Goodyear', 'Flagstaff', 'Buckeye'],
    'MA': ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford', 'Brockton', 'Quincy', 'Lynn', 'Fall River', 'Newton', 'Lawrence', 'Somerville', 'Framingham', 'Haverhill'],
    'TN': ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City', 'Bartlett', 'Hendersonville', 'Kingsport', 'Collierville', 'Smyrna', 'Cleveland'],
    'IN': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond', 'Gary', 'Muncie', 'Terre Haute', 'Kokomo', 'Anderson', 'Noblesville', 'Greenwood'],
    'MO': ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit', 'O\'Fallon', 'St. Joseph', 'St. Charles', 'St. Peters', 'Blue Springs', 'Florissant', 'Joplin', 'Chesterfield', 'Jefferson City'],
    'MD': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Annapolis', 'College Park', 'Salisbury', 'Laurel', 'Greenbelt', 'Cumberland', 'Westminster', 'Hagerstown', 'Hyattsville', 'Takoma Park'],
    'WI': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Oshkosh', 'Eau Claire', 'Janesville', 'West Allis', 'La Crosse', 'Sheboygan', 'Wauwatosa', 'Fond du Lac'],
    'MN': ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'St. Cloud', 'Eagan', 'Woodbury', 'Maple Grove', 'Eden Prairie', 'Coon Rapids', 'Burnsville', 'Mankato'],
    'OR': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Bend', 'Beaverton', 'Medford', 'Springfield', 'Corvallis', 'Albany', 'Tigard', 'Lake Oswego', 'Keizer', 'Grants Pass'],
    'LA': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Kenner', 'Bossier City', 'Monroe', 'Alexandria', 'Houma', 'Marrero', 'Central', 'Laplace', 'Prairieville', 'Metairie'],
    'AL': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Hoover', 'Dothan', 'Auburn', 'Decatur', 'Madison', 'Florence', 'Gadsden', 'Vestavia Hills', 'Prattville', 'Opelika'],
    'KY': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Hopkinsville', 'Richmond', 'Florence', 'Georgetown', 'Henderson', 'Elizabethtown', 'Nicholasville', 'Jeffersontown', 'Frankfort', 'Paducah'],
    'OK': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City', 'Enid', 'Stillwater', 'Muskogee', 'Bartlesville', 'Owasso', 'Shawnee', 'Ponca City'],
    'CT': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain', 'West Hartford', 'Greenwich', 'Hamden', 'West Haven', 'Bristol', 'Meriden', 'Milford'],
    'IA': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo', 'Council Bluffs', 'Ames', 'West Des Moines', 'Cedar Falls', 'Marion', 'Bettendorf', 'Mason City', 'Marshalltown', 'Ottumwa'],
    'SC': ['Columbia', 'Charleston', 'North Charleston', 'Greenville', 'Rock Hill', 'Mount Pleasant', 'Spartanburg', 'Sumter', 'Hilton Head Island', 'Summerville', 'Florence', 'Aiken', 'Myrtle Beach', 'Greer', 'Anderson'],
    'NV': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City', 'Fernley', 'Elko', 'Mesquite', 'Boulder City', 'Fallon', 'Winnemucca', 'West Wendover', 'Ely', 'Yerington'],
    'AR': ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro', 'North Little Rock', 'Conway', 'Rogers', 'Pine Bluff', 'Bentonville', 'Hot Springs', 'Texarkana', 'Sherwood', 'Jacksonville', 'Russellville'],
    'MS': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Greenville', 'Olive Branch', 'Horn Lake', 'Clinton', 'Madison', 'Pearl', 'Ridgeland', 'Starkville'],
    'KS': ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa', 'Salina', 'Hutchinson', 'Leavenworth', 'Leawood', 'Dodge City', 'Garden City'],
    'NM': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington', 'Clovis', 'Hobbs', 'Alamogordo', 'Carlsbad', 'Gallup', 'Deming', 'Los Lunas', 'Chaparral', 'Sunland Park'],
    'NE': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'North Platte', 'Norfolk', 'Columbus', 'Papillion', 'La Vista', 'Scottsbluff', 'South Sioux City', 'Beatrice'],
    'WV': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown', 'Wheeling', 'Martinsburg', 'Fairmont', 'Beckley', 'Clarksburg', 'South Charleston', 'St. Albans', 'Vienna', 'Hurricane', 'Bridgeport', 'Martinsburg'],
    'ID': ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls', 'Lewiston', 'Post Falls', 'Rexburg', 'Chubbuck', 'Moscow', 'Eagle', 'Ammon'],
    'HI': ['Honolulu', 'Hilo', 'Kailua', 'Kaneohe', 'Kahului', 'Ewa Beach', 'Mililani', 'Pearl City', 'Waipahu', 'Kihei', 'Makawao', 'Lahaina', 'Kailua-Kona', 'Kapaa', 'Wailuku'],
    'NH': ['Manchester', 'Nashua', 'Concord', 'Derry', 'Rochester', 'Dover', 'Salem', 'Merrimack', 'Londonderry', 'Hudson', 'Keene', 'Bedford', 'Portsmouth', 'Goffstown', 'Laconia'],
    'ME': ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Saco', 'Sanford', 'Augusta', 'Scarborough', 'Westbrook', 'Waterville', 'Gorham', 'Windham', 'York'],
    'RI': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket', 'Newport', 'Central Falls', 'Westerly', 'Cumberland', 'North Providence', 'South Kingstown', 'Barrington', 'Portsmouth', 'Middletown'],
    'MT': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena', 'Kalispell', 'Havre', 'Anaconda', 'Miles City', 'Livingston', 'Laurel', 'Whitefish', 'Sidney', 'Glendive'],
    'DE': ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna', 'Milford', 'Seaford', 'Georgetown', 'Elsmere', 'Laurel', 'Harrington', 'Camden', 'Clayton', 'Lewes', 'Rehoboth Beach'],
    'SD': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre', 'Huron', 'Vermillion', 'Spearfish', 'Madison', 'Sturgis', 'Lead', 'Hot Springs'],
    'ND': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston', 'Dickinson', 'Mandan', 'Jamestown', 'Wahpeton', 'Devils Lake', 'Valley City', 'Grafton', 'Beulah', 'Rugby'],
    'AK': ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla', 'Sitka', 'Ketchikan', 'Kenai', 'Kodiak', 'Bethel', 'Palmer', 'Homer', 'Barrow', 'Nome', 'Unalaska', 'Soldotna'],
    'VT': ['Burlington', 'Essex', 'South Burlington', 'Colchester', 'Rutland', 'Montpelier', 'Barre', 'St. Albans', 'Winooski', 'Brattleboro', 'Milton', 'Hartford', 'Williston', 'Middlebury', 'Bennington'],
    'WY': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Green River', 'Evanston', 'Riverton', 'Jackson', 'Cody', 'Rawlins', 'Lander', 'Torrington', 'Douglas'],
    'DC': ['Washington']
  };
  
  let cities = citiesByState[state] || [];
  
  // If county name is provided, try to filter or prioritize cities in that county
  // This is a simple heuristic - in a real implementation, you'd have a proper city-to-county mapping
  if (countyName && cities.length > 0) {
    // Extract county name without "County" suffix for matching
    const countyBase = countyName.replace(/\s+County$/, '').toLowerCase();
    
    // Try to find cities that might be in this county (simple name matching)
    const countyCities = cities.filter(city => {
      const cityLower = city.toLowerCase();
      // Check if city name appears in county name or vice versa
      return countyBase.includes(cityLower) || cityLower.includes(countyBase);
    });
    
    // If we found matches, prioritize them, otherwise return all cities
    if (countyCities.length > 0) {
      // Put county cities first, then add others
      const otherCities = cities.filter(c => !countyCities.includes(c));
      return [...countyCities, ...otherCities];
    }
  }
  
  return cities;
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
  
  // Benefit hook
  const benefitHook = `We focus on quality workmanship, clear communication, and dependable scheduling.`;
  
  const audiencePhrase = '';
  
  const title = `${serviceLabel} in ${cityState} | ${business.name}`;
  
  const metaDescription = `${business.name} provides ${serviceLabel.toLowerCase()} in ${cityState}. ${seoDescriptor}.${phoneSentence}`.trim();
  
  const h1 = `${serviceLabel} in ${cityState}`;
  
  const heroText = `${yearsSentence} ${business.name} delivers ${serviceType} in ${cityName}${audiencePhrase}. ${benefitHook}`.replace(/\s+/g, ' ').trim();
  
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
    const nationwideCities = loadNationwideCities();
    
    for (const cityStateStr of nationwideCities) {
      const { cityName, stateAbbr } = parseCityState(cityStateStr);
      if (!cityName || !stateAbbr) continue;
      
      const citySlug = slugifyCity(cityName);
      const stateNameInner = getStateName(stateAbbr);
      
      cities[citySlug] = {
        cityName,
        citySlug,
        stateAbbr: stateAbbr.toUpperCase(),
        stateName: stateNameInner,
        businessName: business.name,
        primaryService: vertical.primaryService,
        phoneNumber: business.phone,
        email: business.email,
        baseUrl: business.url,
        ...buildSeoForCity({ cityName, citySlug, stateAbbr, stateName: stateNameInner }, vertical, business)
      };
    }
  }
  
  return cities;
}

// Generate city pages from city data (supports both HTML and Next.js templates)
async function generateCityPages(destDir, cityData, templateDir, replacements, isNextJs = false) {
  if (isNextJs) {
    await generateNextJsCityPages(destDir, cityData, replacements);
  } else {
    const citiesDir = path.join(destDir, 'pages', 'cities');

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
      const fallbackTemplate = path.join(templateDir, 'pages', '_TEMPLATE-CITY.html');
      if (fs.existsSync(fallbackTemplate)) {
        cityTemplate = await fsp.readFile(fallbackTemplate, 'utf-8');
      } else {
        console.warn('   ⚠️  No city template found, using generic city page layout instead');

        cityTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>{{CITY_TITLE}}</title>
  <meta name="description" content="{{CITY_META_DESCRIPTION}}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1>{{CITY_H1}}</h1>
      <p>{{CITY_HERO_TEXT}}</p>
      <a href="/contact.html" class="btn-primary">GET FREE QUOTE</a>
    </div>
  </header>

  <main class="site-main">
    <section class="section">
      <div class="container">
        <h2>About Our Services in {{CITY_NAME}}, {{STATE_ABBR}}</h2>
        <p>{{CITY_HERO_TEXT}}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        {{CITY_FAQ}}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© {{CURRENT_YEAR}} {{BUSINESS_NAME}}. All Rights Reserved.</p>
    </div>
  </footer>
</body>
</html>`;
      }
    }

    let generatedCount = 0;
    for (const [citySlug, city] of Object.entries(cityData)) {
      const cityReplacements = {
        ...replacements,
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
        '{{CITY_FAQ}}': city.faq && city.faq.length > 0
          ? city.faq
              .map(
                (item) => `
          <div class="faq-item">
            <h3>${item.q}</h3>
            <p>${item.a}</p>
          </div>`
              )
              .join('\n')
          : `<p>Have questions about ${city.primaryService} in ${city.cityName}? <a href="../contact.html">Contact us</a> for more information.</p>`
      };

      let cityPageContent = cityTemplate;

      for (const [token, value] of Object.entries(cityReplacements)) {
        const regex = new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        cityPageContent = cityPageContent.replace(regex, value);
      }

      for (const [token, value] of Object.entries(cityReplacements)) {
        const bareToken = token.replace(/^\{\{|\}\}$/g, '');
        const regex = new RegExp(`{{${bareToken}}}`, 'g');
        cityPageContent = cityPageContent.replace(regex, value);
      }

      const cityPagePath = path.join(citiesDir, `${citySlug}-${city.stateAbbr.toLowerCase()}.html`);
      await fsp.writeFile(cityPagePath, cityPageContent, 'utf-8');
      generatedCount++;
    }

    console.log(`   ✅ Generated ${generatedCount} city pages`);
  }
}

// Generate Next.js city pages as React components
async function generateNextJsCityPages(destDir, cityData, replacements) {
  const citiesAppDir = path.join(destDir, 'app', 'cities');
  await fsp.mkdir(citiesAppDir, { recursive: true });
  
  let generatedCount = 0;
  for (const [citySlug, city] of Object.entries(cityData)) {
    const cityDir = path.join(citiesAppDir, `${citySlug}-${city.stateAbbr.toLowerCase()}`);
    await fsp.mkdir(cityDir, { recursive: true });
    
    const redirectDir = path.join(destDir, 'app', citySlug);
    await fsp.mkdir(redirectDir, { recursive: true });
    const redirectContent = `import { redirect } from 'next/navigation';

export default function ${citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, '')}Redirect() {
  redirect('/cities/${citySlug}-${city.stateAbbr.toLowerCase()}');
}
`;
    await fsp.writeFile(path.join(redirectDir, 'page.tsx'), redirectContent, 'utf-8');
    
    const cityPageContent = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${city.title}",
  description: "${city.metaDescription}",
  alternates: { canonical: '${city.baseUrl}/cities/${citySlug}-${city.stateAbbr.toLowerCase()}' },
  openGraph: {
    locale: 'en_US',
    siteName: '${city.businessName}',
    title: '${city.title}',
    description: '${city.metaDescription}',
    url: '${city.baseUrl}/cities/${citySlug}-${city.stateAbbr.toLowerCase()}',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function CityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ${city.h1}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ${city.heroText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
            >
              GET FREE QUOTE
            </a>
            <a
              href="tel:+1${(city.phoneNumber || '').replace(/[^\\d]/g, '')}"
              className="inline-block bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors"
            >
              Call ${city.phoneNumber || 'us'}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      ${city.faq && city.faq.length > 0 ? `
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            ${city.faq.map(item => `
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">${item.q}</h3>
              <p className="text-gray-600">${item.a}</p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>
      ` : ''}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Contact ${city.businessName} today for ${city.primaryService.toLowerCase()} in ${city.cityName}, ${city.stateAbbr}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              GET FREE QUOTE
            </a>
            <a 
              href="tel:+1${(city.phoneNumber || '').replace(/[^\\d]/g, '')}"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call ${city.phoneNumber || 'us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
    
    const cityPagePath = path.join(cityDir, 'page.tsx');
    await fsp.writeFile(cityPagePath, cityPageContent, 'utf-8');
    generatedCount++;
  }
  
  console.log(`   ✅ Generated ${generatedCount} Next.js city pages`);
  console.log(`   ✅ Generated ${generatedCount} city redirect pages`);
}

// Generate standard pages (about, services, contact) for Next.js templates
async function generateNextJsStandardPages(destDir, replacements) {
  const pages = [
    {
      slug: 'about',
      title: `About Us | ${replacements.SITE_NAME}`,
      description: `Learn about ${replacements.BUSINESS_NAME} - ${replacements.BUSINESS_DESCRIPTION}`,
      h1: `About ${replacements.BUSINESS_NAME}`,
      content: `
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About ${replacements.BUSINESS_NAME}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            ${replacements.BUSINESS_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At ${replacements.BUSINESS_NAME}, we believe in delivering exceptional ${replacements.SERVICE_TYPE} services. We're a ${replacements.SERVICE_AREA} service that connects you with professional ${replacements.SERVICE_TYPE} providers who understand quality workmanship and customer satisfaction.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-12">What We Do</h2>
          <p className="text-lg text-gray-600 mb-6">
            We provide ${replacements.BUSINESS_DESCRIPTION}. Whether you need ${replacements.SERVICE_1 || replacements.SERVICE_TYPE} or ${replacements.SERVICE_2 || replacements.SERVICE_TYPE}, we match you with experienced professionals in your area who follow our standards for quality and customer service.
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 mt-12">Why Choose ${replacements.BUSINESS_NAME}</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
            <li>Quality workmanship guaranteed</li>
            <li>Competitive pricing</li>
            <li>Experienced professionals</li>
            <li>Customer satisfaction focus</li>
            <li>Local expertise in ${replacements.SERVICE_AREA}</li>
          </ul>
        </div>
      </section>
      `
    },
    {
      slug: 'services',
      title: `Our Services | ${replacements.SITE_NAME}`,
      description: `${replacements.PRIMARY_SERVICE} services in ${replacements.SERVICE_AREA}. Get a free quote today.`,
      h1: 'Our Services',
      getContent: (repl) => {
        const services = [repl.SERVICE_1, repl.SERVICE_2, repl.SERVICE_3, repl.SERVICE_4, repl.SERVICE_5, repl.SERVICE_6].filter(s => s && s.trim());
        const servicesHtml = services.length > 0 
          ? services.map((service) => `
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">${service}</h3>
              <p className="text-gray-600">Professional ${service.toLowerCase()} services with quality workmanship and competitive pricing.</p>
            </div>
            `).join('')
          : `
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">${repl.PRIMARY_SERVICE}</h3>
              <p className="text-gray-600">Professional ${repl.PRIMARY_SERVICE.toLowerCase()} services with quality workmanship and competitive pricing.</p>
            </div>
          `;
        
        return `
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            ${repl.PRIMARY_SERVICE} services in ${repl.SERVICE_AREA}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            ${servicesHtml}
          </div>
        </div>
      </section>
      `;
      }
    },
    {
      slug: 'contact',
      title: `Contact Us | ${replacements.SITE_NAME}`,
      description: `Contact ${replacements.BUSINESS_NAME} for ${replacements.PRIMARY_SERVICE} services in ${replacements.SERVICE_AREA}. Get a free quote today.`,
      h1: 'Contact Us',
      content: `
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Have questions? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Have a question about our service? Need help with your ${replacements.SERVICE_TYPE}? Want to provide feedback? We'd love to hear from you.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p>
                  <a href="mailto:${replacements.EMAIL}" className="text-teal-600 hover:text-teal-700">
                    ${replacements.EMAIL}
                  </a>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p>
                  <a href="${replacements.PHONE_LINK || `tel:+1${replacements.PHONE.replace(/[^\\d]/g, '')}`}" className="text-teal-600 hover:text-teal-700">
                    ${replacements.PHONE}
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9am - 5pm</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  ${replacements.STREET}<br />
                  ${replacements.CITY_ADDRESS}, ${replacements.STATE} ${replacements.ZIP}<br />
                  ${replacements.COUNTRY}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `
    }
  ];
  
  for (const page of pages) {
    const pageDir = path.join(destDir, 'app', page.slug);
    await fsp.mkdir(pageDir, { recursive: true });
    
    // Get content - use getContent function if available, otherwise use content string
    const pageContentString = page.getContent ? page.getContent(replacements) : page.content;
    
    // Build phone link safely
    const phoneDigits = (replacements.PHONE || '').replace(/[^\d]/g, '');
    const phoneLink = replacements.PHONE_LINK || (phoneDigits ? `tel:+1${phoneDigits}` : '#');
    
    // Escape strings for use in template literals (only escape quotes, not template syntax)
    const escapeForJsString = (str) => {
      if (!str) return '';
      return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
    };
    
    const pageContent = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${escapeForJsString(page.title)}",
  description: "${escapeForJsString(page.description)}",
  alternates: { canonical: '${replacements.WEBSITE_URL}/${page.slug}' },
  openGraph: {
    locale: 'en_US',
    siteName: '${escapeForJsString(replacements.SITE_NAME)}',
    title: '${escapeForJsString(page.title)}',
    description: '${escapeForJsString(page.description)}',
    url: '${replacements.WEBSITE_URL}/${page.slug}',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${page.slug.charAt(0).toUpperCase() + page.slug.slice(1)}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      ${pageContentString}

      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
              ${replacements.ctaLabel || 'GET FREE QUOTE'}
            </a>
            <a 
              href="${phoneLink}"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call ${replacements.PHONE || 'us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
`;
    
    await fsp.writeFile(path.join(pageDir, 'page.tsx'), pageContent, 'utf-8');
  }
  
  console.log(`   ✅ Generated standard pages (about, services, contact)`);
}

// Generate cities list HTML organized by region for locations page
function generateCitiesListHTML(cityData) {
  if (!cityData || Object.keys(cityData).length === 0) {
    return '<p>No cities available at this time.</p>';
  }
  
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
  
  for (const region in citiesByRegion) {
    citiesByRegion[region].sort((a, b) => a.cityName.localeCompare(b.cityName));
  }
  
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
    return;
  }
  
  let content = await fsp.readFile(locationsPath, 'utf-8');
  
  const citiesListHTML = generateCitiesListHTML(cityData);
  
  const areasWeServePattern = /(<h2>Areas We Serve<\/h2>\s*<div[^>]*>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;
  
  if (areasWeServePattern.test(content)) {
    content = content.replace(
      areasWeServePattern,
      `$1\n${citiesListHTML}\n$2`
    );
  } else {
    content = content.replace(/{{CITIES_LIST}}/g, citiesListHTML);
    
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

// --------- SEO & STRUCTURED DATA HELPERS -----------------------

async function generateSitemapAndRobots(destSiteDir, fullUrl, htmlFiles) {
  try {
    const baseUrl = fullUrl.replace(/\/+$/, '');

    const urls = htmlFiles
      .map((filePath) => {
        const rel = path.relative(destSiteDir, filePath).replace(/\\/g, '/');
        return rel;
      })
      .filter((rel) => !rel.startsWith('_') && rel.toLowerCase().endsWith('.html'));

    const now = new Date().toISOString();

    const sitemapEntries = urls
      .map((rel) => {
        let loc = `${baseUrl}/${rel}`;
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
    html += scriptTag;
  }

  await fsp.writeFile(htmlPath, html, 'utf-8');
}

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
      name: 'siteType',
      message: 'What type of site is this?',
      choices: siteTypeChoices
    },
    {
      // This is your old "Landscaping / Roofing / Plumbing / …" prompt,
      // now only shown when they picked "Service Business".
      type: 'list',
      name: 'verticalKey',
      message: 'What industry is this service business in?',
      when: (ans) => ans.siteType === 'services',
      choices: Object.keys(verticals)
        // treat any non top-level key as a niche service vertical
        .filter(key => !SITE_TYPE_KEYS.includes(key))
        .map(key => ({
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
      type: 'list',
      name: 'countyName',
      message: 'County / metro name:',
      when: (ans) => ans.serviceAreaMode === 'county',
      choices: (ans) => {
        const stateAbbr = ans.stateAbbr || ans.state || '';
        const counties = getCountiesForState(stateAbbr);
        const cityBasedDefault = ans.cityName ? `${ans.cityName} County` : '';
        
        // If we have counties for this state, show them
        if (counties.length > 0) {
          const choices = [...counties];
          // Add city-based default if it's not already in the list
          if (cityBasedDefault && !counties.includes(cityBasedDefault)) {
            choices.unshift(cityBasedDefault);
          }
          choices.push('Other (enter custom name)');
          return choices;
        }
        
        // If no counties found for state, show city-based default and Other
        const choices = [];
        if (cityBasedDefault) {
          choices.push(cityBasedDefault);
        }
        choices.push('Other (enter custom name)');
        return choices;
      },
      default: (ans) => {
        const stateAbbr = ans.stateAbbr || ans.state || '';
        const counties = getCountiesForState(stateAbbr);
        const cityBasedDefault = ans.cityName ? `${ans.cityName} County` : '';
        
        // Prefer city-based default if it exists
        if (cityBasedDefault) {
          return cityBasedDefault;
        }
        // Otherwise return first county if available
        return counties.length > 0 ? counties[0] : null;
      }
    },
    {
      type: 'input',
      name: 'countyNameCustom',
      message: 'Enter custom county / metro name:',
      when: (ans) => ans.serviceAreaMode === 'county' && ans.countyName === 'Other (enter custom name)',
      validate: (v) => v.trim() ? true : 'Please enter a county or metro name.'
    },
    {
      type: 'checkbox',
      name: 'countyTopCities',
      message: 'Select top cities in this county/metro (use space to select, enter to confirm):',
      when: (ans) => ans.serviceAreaMode === 'county',
      choices: (ans) => {
        const stateAbbr = ans.stateAbbr || ans.state || '';
        const countyName = ans.countyName;
        const cities = getCitiesForState(stateAbbr, countyName);
        
        // If we have city suggestions, show them
        if (cities.length > 0) {
          return cities;
        }
        
        // Fallback: return empty array (user will need to use "Other" option)
        return [];
      },
      validate: (selected) => {
        if (!selected || selected.length === 0) {
          return 'Please select at least one city.';
        }
        return true;
      },
      default: (ans) => {
        // Pre-select the cityName if it exists in the list
        if (ans.cityName) {
          const stateAbbr = ans.stateAbbr || ans.state || '';
          const cities = getCitiesForState(stateAbbr, ans.countyName);
          if (cities.includes(ans.cityName)) {
            return [ans.cityName];
          }
        }
        return [];
      }
    },
    {
      type: 'input',
      name: 'countyTopCitiesCustom',
      message: 'Enter additional cities (comma separated, or press enter to skip):',
      when: (ans) => ans.serviceAreaMode === 'county',
      filter: (input) => {
        // Allow user to add custom cities that weren't in the list
        return input ? input.trim() : '';
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
        const vertical = getVerticalFromAnswers(ans);
        return vertical && vertical.services ? vertical.services.join(', ') : '';
      },
      when: (ans) => {
        const vertical = getVerticalFromAnswers(ans);
        return vertical && Array.isArray(vertical.services) && vertical.services.length > 0;
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

  // Normalize countyName - use custom value if "Other" was selected
  if (answers.countyName === 'Other (enter custom name)' && answers.countyNameCustom) {
    answers.countyName = answers.countyNameCustom;
  }

  // Normalize countyTopCities - combine checkbox selections with custom cities
  if (answers.serviceAreaMode === 'county' && answers.countyTopCities) {
    let cityList = [];
    
    // countyTopCities is now an array from checkbox
    if (Array.isArray(answers.countyTopCities)) {
      cityList = [...answers.countyTopCities];
    } else if (typeof answers.countyTopCities === 'string') {
      // Fallback for old format (comma-separated string)
      cityList = answers.countyTopCities.split(',').map(s => s.trim()).filter(Boolean);
    }
    
    // Add custom cities if provided
    if (answers.countyTopCitiesCustom && answers.countyTopCitiesCustom.trim()) {
      const customCities = answers.countyTopCitiesCustom
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
      cityList = [...cityList, ...customCities];
    }
    
    // Remove duplicates and convert back to comma-separated string for compatibility
    answers.countyTopCities = [...new Set(cityList)].join(', ');
  }

  // Determine the actual vertical key we're using
  const chosenVertical =
    answers.siteType === 'services' && answers.verticalKey
      ? answers.verticalKey      // niche industry (landscaping, roofing, etc.)
      : answers.siteType;        // personal, corporate, local-business, custom

  const vertical = verticals[chosenVertical];

  if (!vertical) {
    console.error(`❌ Vertical "${chosenVertical}" not found in verticals.json`);
    process.exit(1);
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
    siteUrl: fullUrl,
    siteTitle: siteName,
    metaDescription: vertical.homeDescription || `Professional ${vertical.primaryService} services in ${answers.serviceArea}. Quality service, competitive pricing, guaranteed results.`,
    metaKeywords: vertical.keywords ? vertical.keywords.join(', ') : `${vertical.serviceType}, ${answers.businessName}, ${answers.serviceArea}`,
    tagline: vertical.homeDescription || `Professional ${vertical.primaryService} services`,
    heroHeading: `Professional ${vertical.primaryService} in ${answers.serviceArea}`,
    heroSubheading: vertical.homeDescription || `Quality service, competitive pricing, guaranteed results.`,
    heroImage: '/images/hero-image.jpg',
    ctaLabel: 'GET FREE QUOTE',
    phoneNumber: answers.phone,
    phoneLink: `tel:+1${answers.phone.replace(/[^\d]/g, '')}`,
    email: answers.email,
    footerText: `© ${currentYear} ${answers.businessName}. All Rights Reserved.`,
    logoPath: '/images/logo/kingtutlogo.png',
    logoAlt: siteName,
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
      
      // Use smart merge to preserve node_modules and other important directories
      console.log('   🔄 Merging template files (preserving node_modules, .git, etc.)...');
      await mergeDir(srcTemplateDir, destSiteDir);
      
      // Check if package.json changed (simple comparison)
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
      // Fall back to regular copy
      await copyDir(srcTemplateDir, destSiteDir);
      needsInstall = true;
    }
  } else {
    // Fresh install - use regular copy
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
      if (isNextJs || framework === 'nextjs') {
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

      // SPECIAL CASE: Full Stack App template (Icon Dumpsters stack)
      // For this template we want a direct clone of the stack without King Tut
      // token replacement, static HTML generation, or component rewiring.
      if (templateFolder === 'fullstack-app-1') {
        console.log('   🧱 Full Stack App template selected – using template exactly as provided (no King Tut overrides).');
        console.log('\n✅ Done! Generated full stack app at:', answers.outputFolder);
        console.log('   This is a direct copy of the Icon Dumpsters stack template (Next.js full app).');
        console.log('\n   🚀 To run the Next.js app:');
        console.log(`      cd ${answers.outputFolder}`);
        console.log('      npm run dev');
        console.log('   Then open http://localhost:3000 in your browser\n');
        return;
      }

      // Copy and convert components from root components folder (HTML to TSX for Next.js)
      // Only convert for the two full stack Next.js templates
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
                
                // Convert filename: header.html -> Header.tsx
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
      
      // Copy components from template (works for any framework)
      // Always copy components to ensure they're up to date, even if they already exist
      const templateComponentDirs = await findComponentDirs(srcTemplateDir);
      let componentsCopied = false;
      
      if (templateComponentDirs.length > 0) {
        for (const compDir of templateComponentDirs) {
          const destCompDir = path.join(destSiteDir, compDir.path);
          try {
            // Use mergeDir to preserve any customizations, but ensure components are copied
            await mergeDir(compDir.fullPath, destCompDir, ['node_modules', '.git', '.next', 'dist', 'build', '.cache']);
            console.log(`   ✅ Copied/updated components from ${compDir.path}`);
            componentsCopied = true;
          } catch (err) {
            console.warn(`   ⚠️  Could not copy components from ${compDir.path}: ${err.message}`);
          }
        }
      } else {
        // Fallback: try common component locations within template
        const commonComponentPaths = [
          { src: path.join(srcTemplateDir, 'app', 'components'), dest: path.join(destSiteDir, 'app', 'components') },
          { src: path.join(srcTemplateDir, 'src', 'components'), dest: path.join(destSiteDir, 'src', 'components') },
          { src: path.join(srcTemplateDir, 'components'), dest: path.join(destSiteDir, 'components') },
          { src: path.join(srcTemplateDir, 'components', 'ui'), dest: path.join(destSiteDir, 'components', 'ui') },
          { src: path.join(srcTemplateDir, 'app', 'components', 'ui'), dest: path.join(destSiteDir, 'app', 'components', 'ui') }
        ];
        
        for (const compPath of commonComponentPaths) {
          if (fs.existsSync(compPath.src)) {
            const entries = await fsp.readdir(compPath.src).catch(() => []);
            if (entries.length > 0) {
              try {
                await mergeDir(compPath.src, compPath.dest, ['node_modules', '.git', '.next', 'dist', 'build', '.cache']);
                console.log(`   ✅ Copied/updated components from ${path.relative(srcTemplateDir, compPath.src)}`);
                componentsCopied = true;
                break;
              } catch (err) {
                // Try next path
              }
            }
          }
        }
      }
      
      // If no components were found in template, try marketing-landing template as fallback
      if (!componentsCopied) {
        const marketingComponentsDir = path.join(rootDir, 'templates', 'king-tut-templates', 'marketing-landing', 'app', 'components');
        if (fs.existsSync(marketingComponentsDir)) {
          const entries = await fsp.readdir(marketingComponentsDir).catch(() => []);
          if (entries.length > 0) {
            const fallbackDest = path.join(destSiteDir, 'app', 'components');
            try {
              await mergeDir(marketingComponentsDir, fallbackDest, ['node_modules', '.git', '.next', 'dist', 'build', '.cache']);
              console.log('   ✅ Copied components from marketing-landing template (fallback)');
              componentsCopied = true;
            } catch (err) {
              console.warn(`   ⚠️  Could not copy marketing-landing components: ${err.message}`);
            }
          }
        }
      }
      
      // For Next.js: Convert any HTML component files to TSX after copying
      // Only convert for the two full stack Next.js templates
      if (isNextJs && isFullStackTemplate && componentsCopied) {
        console.log('   🔄 Converting HTML components to TSX for Next.js...');
        const destComponentDirs = await findComponentDirs(destSiteDir);
        
        for (const compDir of destComponentDirs) {
          const convertedFiles = await convertHtmlComponentsToTsx(compDir.fullPath);
          if (convertedFiles.length > 0) {
            console.log(`   ✅ Converted ${convertedFiles.length} HTML component(s) to TSX in ${compDir.path}:`);
            convertedFiles.forEach(({ from, to }) => {
              console.log(`      ${from} → ${to}`);
            });
          }
        }
      }
      
      // Verify components were copied
      const destComponentDirs = await findComponentDirs(destSiteDir);
      if (destComponentDirs.length > 0) {
        console.log(`   ✅ Verified ${destComponentDirs.length} component directory(ies) exist`);
        
        // List component files for Next.js and update imports
        // Only for full stack templates
        if (isNextJs && isFullStackTemplate) {
          const appComponentsDir = path.join(destSiteDir, 'app', 'components');
          const availableComponents = [];
          
          if (fs.existsSync(appComponentsDir)) {
            try {
              const componentFiles = await fsp.readdir(appComponentsDir);
              for (const file of componentFiles) {
                if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                  const componentName = file.replace(/\.(tsx|ts)$/, '');
                  availableComponents.push(componentName);
                }
              }
            } catch (err) {
              // ignore
            }
          }
          
          if (availableComponents.length > 0) {
            console.log(`   📄 Found ${availableComponents.length} component(s): ${availableComponents.join(', ')}`);
            
            // Update layout.tsx to import Header if it exists
            const layoutPath = path.join(destSiteDir, 'app', 'layout.tsx');
            if (fs.existsSync(layoutPath) && availableComponents.some(c => /^Header$/i.test(c))) {
              try {
                let layoutContent = await fsp.readFile(layoutPath, 'utf-8');
                const headerComponent = availableComponents.find(c => /^Header$/i.test(c));
                
                // Check if Header is already imported
                const headerImportRegex = new RegExp(`import\\s+.*?\\b${headerComponent}\\b.*?from`, 'i');
                if (headerComponent && !headerImportRegex.test(layoutContent)) {
                  // Add import after other imports
                  const importMatch = layoutContent.match(/(import\s+.*?from\s+['"][^'"]+['"];?\s*\n)/);
                  if (importMatch) {
                    const lastImport = importMatch[importMatch.length - 1];
                    const importIndex = layoutContent.lastIndexOf(lastImport) + lastImport.length;
                    layoutContent = layoutContent.slice(0, importIndex) + 
                      `import ${headerComponent} from "./components/${headerComponent}";\n` + 
                      layoutContent.slice(importIndex);
                  } else {
                    // Add at the top after type imports
                    const typeImportMatch = layoutContent.match(/(import\s+type\s+.*?;?\s*\n)/);
                    if (typeImportMatch) {
                      const lastTypeImport = typeImportMatch[typeImportMatch.length - 1];
                      const importIndex = layoutContent.lastIndexOf(lastTypeImport) + lastTypeImport.length;
                      layoutContent = layoutContent.slice(0, importIndex) + 
                        `import ${headerComponent} from "./components/${headerComponent}";\n` + 
                        layoutContent.slice(importIndex);
                    } else {
                      // Add after first import line
                      const firstLineEnd = layoutContent.indexOf('\n');
                      layoutContent = layoutContent.slice(0, firstLineEnd + 1) + 
                        `import ${headerComponent} from "./components/${headerComponent}";\n` + 
                        layoutContent.slice(firstLineEnd + 1);
                    }
                  }
                  
                  // Add Header component to body if not already present
                  const headerUsageRegex = new RegExp(`<${headerComponent}[\\s/>]`, 'i');
                  if (!headerUsageRegex.test(layoutContent)) {
                    // Find the body tag and add Header after it
                    const bodyMatch = layoutContent.match(/(<body[^>]*>)/);
                    if (bodyMatch) {
                      const bodyIndex = bodyMatch.index + bodyMatch[0].length;
                      layoutContent = layoutContent.slice(0, bodyIndex) + 
                        `\n        <${headerComponent} />\n` + 
                        layoutContent.slice(bodyIndex);
                    }
                  }
                  
                  await fsp.writeFile(layoutPath, layoutContent, 'utf-8');
                  console.log(`   ✅ Updated layout.tsx to import and use ${headerComponent}`);
                }
              } catch (err) {
                console.warn(`   ⚠️  Could not update layout.tsx: ${err.message}`);
              }
            }
            
            // Update page.tsx to import Footer if it exists
            const pagePath = path.join(destSiteDir, 'app', 'page.tsx');
            if (fs.existsSync(pagePath) && availableComponents.some(c => /^Footer$/i.test(c))) {
              try {
                let pageContent = await fsp.readFile(pagePath, 'utf-8');
                const footerComponent = availableComponents.find(c => /^Footer$/i.test(c));
                
                // Check if Footer is already imported
                const footerImportRegex = new RegExp(`import\\s+.*?\\b${footerComponent}\\b.*?from`, 'i');
                if (footerComponent && !footerImportRegex.test(pageContent)) {
                  // Add import at the top
                  const firstLineEnd = pageContent.indexOf('\n');
                  pageContent = pageContent.slice(0, firstLineEnd + 1) + 
                    `import ${footerComponent} from "./components/${footerComponent}";\n` + 
                    pageContent.slice(firstLineEnd + 1);
                  
                  // Add Footer component before closing div if not already present
                  const footerUsageRegex = new RegExp(`<${footerComponent}[\\s/>]`, 'i');
                  if (!footerUsageRegex.test(pageContent)) {
                    // Find the last closing div before the function closing
                    const lastDivClose = pageContent.lastIndexOf('</div>');
                    if (lastDivClose > 0) {
                      pageContent = pageContent.slice(0, lastDivClose) + 
                        `      </div>\n      <${footerComponent} />\n    ` + 
                        pageContent.slice(lastDivClose);
                    }
                  }
                  
                  await fsp.writeFile(pagePath, pageContent, 'utf-8');
                  console.log(`   ✅ Updated page.tsx to import and use ${footerComponent}`);
                }
              } catch (err) {
                console.warn(`   ⚠️  Could not update page.tsx: ${err.message}`);
              }
            }
          }
        }
      } else {
        console.warn('   ⚠️  No component directories found after copy - components may be missing');
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
            console.warn(`      Source: ${srcFile}`);
            console.warn(`      Dest: ${destFile}`);
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

  console.log('🖼️  Handling images...');
  const imagesStockDir = path.join(rootDir, 'stock-images', chosenVertical);
  const imagesStockDest = path.join(destSiteDir, 'images', 'stock');
  
  if (fs.existsSync(imagesStockDir)) {
    await copyDir(imagesStockDir, imagesStockDest);
    console.log('   ✅ Copied stock images for', vertical.primaryService);
  } else {
    console.log('   ℹ️  No stock images found for this vertical');
  }

  // Optionally fetch images from URL using wget mirror
  if (answers.imageSourceUrl && answers.imageSourceUrl.trim()) {
    const imagesScrapedDest = path.join(destSiteDir, 'images', 'scraped');
    await fsp.mkdir(imagesScrapedDest, { recursive: true });
    console.log('   🔗 Connecting to WGET for image scraping...');
    await fetchImagesWithWget(answers.imageSourceUrl.trim(), imagesScrapedDest);
    console.log(`   📁 Scraped site mirror saved under: images/scraped/`);
    
    // Collect all image files from the mirrored tree
    const scrapedImages = await listImageFilesRecursive(imagesScrapedDest);
    
    if (scrapedImages.length > 0) {
      console.log(`   🔄 Replacing all King Tut stock images with ${scrapedImages.length} scraped images...`);
      
      const kingTutImagePatterns = [
        /Gemini_Generated_Image_/i,
        /kingtut/i,
        /heroimage/i
      ];
      
      async function findImageFiles(dir, fileList = []) {
        const entries = await fsp.readdir(dir, { withFileTypes: true }).catch(() => []);
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory()) {
            const dirName = entry.name.toLowerCase();
            if (!['node_modules', '.next', '.git', 'dist', 'build', '.cache'].includes(dirName)) {
              await findImageFiles(fullPath, fileList);
            }
          } else if (entry.isFile()) {
            if (/\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name)) {
              const isKingTutImage = kingTutImagePatterns.some(pattern => 
                pattern.test(entry.name) && !entry.name.toLowerCase().includes('logo')
              );
              
              if (isKingTutImage) {
                fileList.push({
                  name: entry.name,
                  path: fullPath,
                  dir: dir
                });
              }
            }
          }
        }
        
        return fileList;
      }
      
      const kingTutImages = await findImageFiles(destSiteDir);
      console.log(`   📋 Found ${kingTutImages.length} King Tut stock images to replace`);
      
      if (kingTutImages.length > 0) {
        let replacedCount = 0;
        
        for (let i = 0; i < kingTutImages.length; i++) {
          const kingTutImage = kingTutImages[i];
          const scrapedIndex = i % scrapedImages.length;
          const scrapedFile = scrapedImages[scrapedIndex].path;
          
          try {
            await fsp.copyFile(scrapedFile, kingTutImage.path);
            replacedCount++;
            
            if (replacedCount <= 15) {
              const relativePath = path.relative(destSiteDir, kingTutImage.path);
              console.log(`   📸 Replaced ${relativePath}`);
            }
          } catch (err) {
            console.warn(`   ⚠️  Could not replace ${kingTutImage.name}: ${err.message}`);
          }
        }
        
        console.log(`   ✅ Successfully replaced ${replacedCount} King Tut stock images with scraped images`);
      } else {
        console.log('   ℹ️  No King Tut stock images found to replace');
      }
      
      if (isNextJs) {
        const publicImagesDir = path.join(destSiteDir, 'public', 'images');
        await fsp.mkdir(publicImagesDir, { recursive: true });
        
        // Copy all scraped images into public/images (flattened by filename)
        for (const img of scrapedImages) {
          const destFile = path.join(publicImagesDir, img.name);
          try {
            await fsp.copyFile(img.path, destFile);
          } catch (_) {
            // ignore copy errors
          }
        }
        
        console.log(`   ✅ Copied scraped images to public/images/ for Next.js`);
      }
      
      console.log(`   📁 All scraped images available under: images/scraped/`);
    } else {
      console.warn('   ⚠️  No scraped images found in mirror. Check URL or permissions.');
    }
  }

  // Always copy stock images and logos to public/images for Next.js (even if no scraped images)
  if (isNextJs) {
    const publicImagesDir = path.join(destSiteDir, 'public', 'images');
    await fsp.mkdir(publicImagesDir, { recursive: true });
    
    // Copy stock images to public/images
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
    
    // Copy logo directory to public/images/logo
    const logoDir = path.join(destSiteDir, 'images', 'logo');
    const publicLogoDir = path.join(publicImagesDir, 'logo');
    if (fs.existsSync(logoDir)) {
      await copyDir(logoDir, publicLogoDir);
      console.log(`   ✅ Copied logo images to public/images/logo/ for Next.js`);
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

  console.log('🔧 Fixing CSS and image paths for local viewing...');
  await fixPathsRecursively(destSiteDir, destSiteDir);
  console.log('   ✅ Fixed absolute paths to relative paths');

  console.log('🏙️  Generating city pages...');
  const business = {
    name: answers.businessName,
    phone: answers.phone,
    email: answers.email,
    url: fullUrl
  };
  
  const cityData = buildCityEntries(answers, vertical, business);
  const cityCount = Object.keys(cityData).length;
  await generateCityPages(destSiteDir, cityData, srcTemplateDir, replacements, isNextJs);
  
  if (isNextJs) {
    console.log('📄 Generating standard pages (about, services, contact)...');
    await generateNextJsStandardPages(destSiteDir, replacements);
  }
  
  console.log('🔧 Fixing CSS paths in city pages...');
  const citiesDir = path.join(destSiteDir, 'pages', 'cities');
  if (fs.existsSync(citiesDir)) {
    await fixPathsRecursively(citiesDir, destSiteDir);
  }
  console.log('   ✅ Fixed CSS paths in city pages');
  
  const cityDataPath = path.join(destSiteDir, 'city-data.json');
  await fsp.writeFile(cityDataPath, JSON.stringify(cityData, null, 2), 'utf-8');
  console.log('   ✅ Generated city-data.json');
  
  console.log('📍 Updating locations page with city data...');
  await updateLocationsPage(destSiteDir, cityData);
  console.log('   ✅ Updated locations page with city list');

  await addSeoEnhancements(destSiteDir, fullUrl, htmlFiles, answers, vertical, cityData);

  // Note: Dependencies are installed earlier (after framework detection) to enable component processing

  console.log('\n✅ Done! Generated site at:', answers.outputFolder);
  console.log(`   Generated ${htmlFiles.length} pages with all tokens replaced.`);
  console.log(`   Generated ${cityCount} city pages (${answers.serviceAreaMode} mode)`);
  console.log(`   Vertical: ${vertical.primaryService}`);
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
