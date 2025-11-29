// scripts/generate-type-sitemaps.mjs
// Filesystem-driven sitemap generator for Next.js (app router).
// - Scans /app for static routes with page.tsx/js/jsx/mdx
// - Reads optional /data/cities.json and /data/posts.json
// - Uses file mtime for <lastmod> when available

import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://tntdump.com';                   // <-- change if needed
const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');
const OUT_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'data');             // optional folder you can add

const PAGE_FILENAMES = new Set([
  'page.tsx', 'page.jsx', 'page.js', 'page.ts', 'page.mdx'
]);

function toISO(d) {
  try { return new Date(d).toISOString(); } catch { return new Date().toISOString(); }
}

function safeStatISO(p) {
  try {
    const st = fs.statSync(p);
    return toISO(st.mtime);
  } catch {
    return toISO(Date.now());
  }
}

function isRouteGroup(seg) {
  // Exclude "(group)" segments
  return seg.startsWith('(') && seg.endsWith(')');
}

function isDynamic(seg) {
  // Exclude [param] segments (you can include via data files instead)
  return seg.startsWith('[') && seg.endsWith(']');
}

function shouldSkipTopLevel(seg) {
  // exclude folders that shouldn't be in sitemap
  if (['api', 'admin', 'test', 'tests', 'testing', '__mocks__'].includes(seg)) {
    return true;
  }
  // Treat city pages as a separate sitemap to avoid duplicate coverage in pages
  // e.g. /dumpster-rental-salt-lake-city-ut
  if (/^dumpster-rental-.+-ut$/.test(seg)) {
    return true;
  }
  return false;
}

function shouldSkipRoute(rel) {
  // Skip test pages and other non-indexable pages
  if (rel.includes('/test') || rel.includes('/test-email') || rel.includes('/test-form')) {
    return true;
  }
  // Skip order confirmation and cart pages (transactional, should not be indexed)
  if (rel.includes('/order-confirmation') || rel.includes('/cart')) {
    return true;
  }
  // Skip blog posts (they're in sitemap-posts.xml)
  if (rel.startsWith('/blog/') && rel !== '/blog') {
    return true;
  }
  return false;
}

function collectStaticRoutes(dir = APP_DIR) {
  const out = [];

  function walk(current, rel = '') {
    let entries = [];
    try { entries = fs.readdirSync(current, { withFileTypes: true }); }
    catch { return; }

    // If this folder contains a page.* file, treat it as a route
    const pageFile = entries.find(e => e.isFile() && PAGE_FILENAMES.has(e.name));
    if (pageFile) {
      const loc = rel === '' ? '/' : '/' + rel.replace(/\\/g, '/');
      // Skip routes that shouldn't be in sitemap
      if (!shouldSkipRoute(loc)) {
        const filePath = path.join(current, pageFile.name);
        out.push({
          loc: `${SITE}${loc}`,
          lastmod: safeStatISO(filePath)
        });
      }
      // We still continue walking because nested routes may exist too.
    }

    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const seg = e.name;

      if (isRouteGroup(seg)) continue;
      if (isDynamic(seg)) continue; // add these via data files if needed
      if (rel === '' && shouldSkipTopLevel(seg)) continue;

      walk(path.join(current, seg), path.join(rel, seg));
    }
  }

  walk(dir, '');
  return out;
}

function readJsonIfExists(p) {
  try {
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8');
      return JSON.parse(raw);
    }
  } catch {}
  return null;
}

function ensureLeadingSlash(urlPath) {
  if (!urlPath.startsWith('/')) return '/' + urlPath;
  return urlPath;
}

async function getPages() {
  // Purely from filesystem
  return collectStaticRoutes();
}

async function getCities() {
  // Prefer explicit data file if present
  // data/cities.json = ["/ut/midvale/dumpster-rental", ...]
  const citiesPath = path.join(DATA_DIR, 'cities.json');
  const list = readJsonIfExists(citiesPath);
  if (Array.isArray(list) && list.length > 0) {
    const now = toISO(Date.now());
    return list
      .map(slugOrPath => ensureLeadingSlash(String(slugOrPath).trim()))
      .filter(p => p.startsWith('/ut/'))
      .map(p => ({ loc: `${SITE}${p}`, lastmod: now }));
  }

  // Fallback: derive from data/cities/ut/*.yml filenames
  const utDir = path.join(DATA_DIR, 'cities', 'ut');
  let entries = [];
  try { entries = fs.readdirSync(utDir, { withFileTypes: true }); } catch { entries = []; }
  const now = toISO(Date.now());
  const cities = entries
    .filter(e => e.isFile() && e.name.endsWith('.yml'))
    .map(e => e.name.replace(/\.yml$/, ''))
    .map(slug => ({ loc: `${SITE}/ut/${slug}/dumpster-rental`, lastmod: now }));
  return cities;
}

async function getPosts() {
  // Optional: data/posts.json = ["blog/how-to-choose-dumpster-size", "/blog/dumpster-permits", ...]
  const postsPath = path.join(DATA_DIR, 'posts.json');
  const list = readJsonIfExists(postsPath);
  if (!Array.isArray(list)) return [];
  const now = toISO(Date.now());
  return list.map(slugOrPath => {
    const p = ensureLeadingSlash(String(slugOrPath).trim());
    return { loc: `${SITE}${p}`, lastmod: now };
  });
}

function urlset(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>`;
  const open = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const close = `</urlset>`;
  const body = urls.map(u => {
    const loc = u.loc.replace(/(?<!:)\/{2,}/g, '/'); // normalize accidental doubles
    return [
      `<url>`,
      `  <loc>${loc}</loc>`,
      u.lastmod ? `  <lastmod>${u.lastmod}</lastmod>` : '',
      `</url>`
    ].filter(Boolean).join('\n');
  }).join('\n');
  return [header, open, body, close].join('\n');
}

function sitemapIndex(files) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>`;
  const open = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const close = `</sitemapindex>`;
  const now = toISO(Date.now());
  const body = files.map(f => [
    `<sitemap>`,
    `  <loc>${f}</loc>`,
    `  <lastmod>${now}</lastmod>`,
    `</sitemap>`
  ].join('\n')).join('\n');
  return [header, open, body, close].join('\n');
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const [pages, cities, posts] = await Promise.all([
    getPages(), getCities(), getPosts()
  ]);

  // pages: always present
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap-pages.xml'), urlset(pages));

  // cities: write if present; otherwise remove stale file to avoid empty sitemap noise
  const citiesFile = path.join(OUT_DIR, 'sitemap-cities.xml');
  if (cities.length > 0) {
    fs.writeFileSync(citiesFile, urlset(cities));
  } else if (fs.existsSync(citiesFile)) {
    try { fs.unlinkSync(citiesFile); } catch {}
  }

  // posts: write if present; otherwise keep file removed
  const postsFile = path.join(OUT_DIR, 'sitemap-posts.xml');
  if (posts.length > 0) {
    fs.writeFileSync(postsFile, urlset(posts));
  } else if (fs.existsSync(postsFile)) {
    try { fs.unlinkSync(postsFile); } catch {}
  }

  // Write a clean index that references only non-empty sitemaps
  const indexEntries = [
    `${SITE}/sitemap-pages.xml`,
    ...(cities.length > 0 ? [`${SITE}/sitemap-cities.xml`] : []),
    ...(posts.length > 0 ? [`${SITE}/sitemap-posts.xml`] : [])
  ];
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemapIndex(indexEntries));

  // Remove legacy next-sitemap file if present to prevent duplicate coverage
  const legacy = path.join(OUT_DIR, 'sitemap-0.xml');
  if (fs.existsSync(legacy)) {
    try { fs.unlinkSync(legacy); } catch {}
  }

  console.log(`SITEMAP ▶ pages=${pages.length} cities=${cities.length} posts=${posts.length} (index=${indexEntries.length})`);
}

main().catch(err => {
  console.error('SITEMAP ERROR', err);
  process.exit(1);
});
