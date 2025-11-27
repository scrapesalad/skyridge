const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BASE_URL = 'https://nationalpondservice.com';
const TARGET_DOMAIN = 'pondauthority.com';
const OUTPUT_DIR = path.resolve(__dirname, 'nationalpondservice.com');
const visited = new Set();
const toDownload = new Set();

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': '*/*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Connection': 'keep-alive',
};

function extractAssets(html, baseUrl) {
  const assets = new Set();
  
  // Extract images
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if ((url.includes('pondauthority.com') || url.includes('nationalpondservice.com')) && !url.includes('data:')) {
        assets.add(url);
      }
    } catch (e) {}
  }
  
  // Extract srcset images
  const srcsetRegex = /srcset=["']([^"']+)["']/gi;
  while ((match = srcsetRegex.exec(html)) !== null) {
    const srcset = match[1];
    srcset.split(',').forEach(item => {
      const url = item.trim().split(' ')[0];
      try {
        const fullUrl = new URL(url, baseUrl).href;
        if (fullUrl.includes('pondauthority.com')) {
          assets.add(fullUrl);
        }
      } catch (e) {}
    });
  }
  
  // Extract CSS files
  const cssRegex = /<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi;
  while ((match = cssRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if (url.includes('pondauthority.com')) {
        assets.add(url);
      }
    } catch (e) {}
  }
  
  // Extract JS files
  const jsRegex = /<script[^>]+src=["']([^"']+\.js[^"']*)["']/gi;
  while ((match = jsRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if (url.includes('pondauthority.com')) {
        assets.add(url);
      }
    } catch (e) {}
  }
  
  // Extract background images from style attributes
  const styleRegex = /style=["'][^"']*url\(["']?([^"')]+)["']?\)/gi;
  while ((match = styleRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if ((url.includes('pondauthority.com') || url.includes('nationalpondservice.com')) && !url.includes('data:')) {
        assets.add(url);
      }
    } catch (e) {}
  }
  
  // Extract CSS url() references
  const cssUrlRegex = /url\(["']?([^"')]+)["']?\)/gi;
  while ((match = cssUrlRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if ((url.includes('pondauthority.com') || url.includes('nationalpondservice.com')) && !url.includes('data:')) {
        assets.add(url);
      }
    } catch (e) {}
  }
  
  return assets;
}

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    
    // Remove query strings for file path
    const cleanUrl = url.split('?')[0];
    const cleanParsed = new URL(cleanUrl);
    
    const options = {
      hostname: cleanParsed.hostname,
      port: cleanParsed.port || (cleanParsed.protocol === 'https:' ? 443 : 80),
      path: cleanParsed.pathname + (cleanParsed.search || ''),
      method: 'GET',
      headers: headers
    };

    const req = client.request(options, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      
      let data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
    req.end();
  });
}

function saveFile(url, content) {
  const parsed = new URL(url.split('?')[0]); // Remove query strings
  let filepath = parsed.pathname;
  
  if (!filepath || filepath === '/') {
    return; // Skip root
  }
  
  // Remove leading slash
  filepath = filepath.substring(1);
  
  const fullPath = path.join(OUTPUT_DIR, filepath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, content);
  console.log(`✓ Saved: ${filepath}`);
}

async function processAsset(url) {
  if (visited.has(url)) {
    return;
  }
  
  visited.add(url);
  
  try {
    // Convert pondauthority.com back to nationalpondservice.com for actual download
    const downloadUrl = url.replace(TARGET_DOMAIN, 'nationalpondservice.com');
    console.log(`Downloading: ${downloadUrl}`);
    const content = await downloadFile(downloadUrl);
    // Save with pondauthority.com path
    saveFile(url, content);
    
    // If it's a CSS file, extract more assets from it
    if (url.endsWith('.css')) {
      const css = content.toString('utf-8');
      const cssAssets = extractAssets(css, url);
      cssAssets.forEach(asset => {
        if (!visited.has(asset)) {
          toDownload.add(asset);
        }
      });
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
  } catch (error) {
    console.error(`✗ Error: ${url} - ${error.message}`);
  }
}

async function main() {
  console.log('Extracting assets from all HTML files...\n');
  
  // Find all HTML files
  function findHtmlFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findHtmlFiles(fullPath));
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
  
  const htmlFiles = findHtmlFiles(OUTPUT_DIR);
  console.log(`Found ${htmlFiles.length} HTML files\n`);
  
  // Extract assets from each HTML file
  for (const htmlFile of htmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf-8');
    const relativePath = path.relative(OUTPUT_DIR, htmlFile);
    // Replace pondauthority.com with nationalpondservice.com for downloading
    const htmlForExtraction = html.replace(/pondauthority\.com/g, 'nationalpondservice.com');
    const baseUrl = new URL(relativePath.replace(/\\/g, '/'), BASE_URL).href;
    const assets = extractAssets(htmlForExtraction, baseUrl);
    assets.forEach(asset => {
      // Convert back to pondauthority.com for file paths
      const targetAsset = asset.replace('nationalpondservice.com', TARGET_DOMAIN);
      toDownload.add(targetAsset);
    });
  }
  
  console.log(`Found ${toDownload.size} assets to download\n`);
  
  // Download all assets
  let count = 0;
  const total = toDownload.size;
  for (const url of toDownload) {
    await processAsset(url);
    count++;
    if (count % 10 === 0) {
      console.log(`Progress: ${count}/${total} (${Math.round(count/total*100)}%)\n`);
    }
  }
  
  console.log(`\n✓ Asset download complete! Processed ${count} assets`);
}

main().catch(console.error);

