// Node 18+ (fetch built-in)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import slugify from "slugify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- CONFIG ----------------
const CITIES = [
  "American Fork, Utah",
  "Bountiful, Utah",
  "Centerville, Utah",
  "Clearfield, Utah",
  "Clinton, Utah",
  "Draper, Utah",
  "Farmington, Utah",
  "Herriman, Utah",
  "Hooper, Utah",
  "Kaysville, Utah",
  "Layton, Utah",
  "Lehi, Utah",
  "Midvale, Utah",
  "Murray, Utah",
  "North Salt Lake, Utah",
  "Ogden, Utah",
  "Orem, Utah",
  "Pleasant Grove, Utah",
  "Provo, Utah",
  "Riverdale, Utah",
  "Riverton, Utah",
  "Roy, Utah",
  "Salt Lake City, Utah",
  "Sandy, Utah",
  "South Jordan, Utah",
  "Syracuse, Utah",
  "Taylorsville, Utah",
  "West Jordan, Utah",
  "West Point, Utah",
  "West Valley City, Utah",
  "Woods Cross, Utah"
];

// Where to save everything
const OUTPUT_DIR = path.resolve(__dirname, "../public/images/cities");

// Target: 4 images per city (resumable if re-run)
const IMAGES_PER_CITY = 4;

// Preferred source order
const PROVIDERS = ["wikimedia", "openverse"];

// polite crawling
const REQUEST_DELAY_MS = 350;

// Maximum bytes per image (skip huge originals). Set null for unlimited.
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

// ---------------- UTILITIES ----------------
const slug = (s) => slugify(s, { lower: true, strict: true, trim: true });
const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url, init = {}, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      headers: { "User-Agent": "tntdump-city-image-fetcher/1.1" },
      ...init,
    });
    if (res.ok) return res.json();
    if (attempt === retries) throw new Error(`HTTP ${res.status} for ${url}`);
    await sleep(300 * attempt);
  }
}

async function head(url, retries = 2) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, { method: "HEAD" });
    if (res.ok) return res;
    if (attempt === retries) return null;
    await sleep(200 * attempt);
  }
  return null;
}

async function downloadToFile(url, filepath) {
  if (MAX_BYTES) {
    const h = await head(url);
    if (h && h.headers.has("content-length")) {
      const size = parseInt(h.headers.get("content-length"), 10);
      if (!Number.isNaN(size) && size > MAX_BYTES) {
        throw new Error(`Skip: ${size} > MAX_BYTES for ${url}`);
      }
    }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const ab = await res.arrayBuffer();
  if (MAX_BYTES && ab.byteLength > MAX_BYTES) {
    throw new Error(`Skip: body ${ab.byteLength} > MAX_BYTES for ${url}`);
  }
  fs.writeFileSync(filepath, Buffer.from(ab));
}

function makeAlt(city, title) {
  return title ? `${title} in ${city}` : `Iconic view of ${city}`;
}

function manifestEntry({ city, title, file, width, height, sourceUrl, author, license, provider }) {
  const alt = makeAlt(city, title);
  const attribution = author ? `${author} (${provider})` : provider;
  return {
    file,            // relative path under /public
    alt,
    title: title || null,
    width: width || null,
    height: height || null,
    source: sourceUrl,
    license: license || null,
    attribution
  };
}

// ---------------- RESUME HELPERS ----------------
function loadExistingManifest(cityDir) {
  const mp = path.join(cityDir, "manifest.json");
  if (!fs.existsSync(mp)) return [];
  try {
    return JSON.parse(fs.readFileSync(mp, "utf-8")) || [];
  } catch {
    return [];
  }
}

function countExistingFiles(cityDir, citySlug) {
  if (!fs.existsSync(cityDir)) return 0;
  const files = fs.readdirSync(cityDir);
  return files.filter(f => new RegExp(`^${citySlug}-\\d{2}\\.`).test(f)).length;
}

function normalize(str) {
  return (str || "").toLowerCase().trim();
}

// ---------------- PROVIDERS ----------------
// Openverse (Creative Commons) — fallback/supplement
async function fetchOpenverse(city, n, exclude = new Set()) {
  // over-fetch to have enough after de-dup
  const pageSize = Math.min(50, Math.max(n * 6, 12));
  const q = encodeURIComponent(`${city} skyline OR landmark OR downtown OR panorama`);
  const url = `https://api.openverse.org/v1/images/?q=${q}&license_type=all-cc&page_size=${pageSize}&fields=id,title,creator,license,license_url,url,thumbnail,width,height,source,foreign_landing_url`;
  const data = await fetchJSON(url);
  const items = (data.results || [])
    .filter(i => i.width && i.height && i.url)
    .map(i => ({
      title: i.title || "",
      directUrl: i.url,
      thumbUrl: i.thumbnail || null,
      width: i.width,
      height: i.height,
      sourceUrl: i.foreign_landing_url || i.source || i.url,
      author: i.creator || null,
      license: i.license ? `CC-${String(i.license).toUpperCase()}` : null,
      provider: "Openverse"
    }));

  // Deduplicate within results and against exclude
  const seen = new Set();
  const unique = [];
  for (const it of items) {
    const key = it.directUrl || it.sourceUrl;
    const tkey = normalize(it.title);
    if (exclude.has(key) || exclude.has(tkey) || seen.has(key) || seen.has(tkey)) continue;
    seen.add(key);
    seen.add(tkey);
    unique.push(it);
    if (unique.length >= n) break;
  }
  return unique;
}

// Wikimedia Commons (Public Domain/CC) — primary
async function fetchWikimedia(city, n, exclude = new Set()) {
  const results = [];

  // Try to grab the lead image from the most relevant Wikipedia page
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(city)}&format=json&srlimit=1&srprop=`;
    const sdata = await fetchJSON(searchUrl);
    const pageTitle = sdata?.query?.search?.[0]?.title;
    if (pageTitle) {
      const leadUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages|info&inprop=url&pithumbsize=1920&format=json`;
      const ldata = await fetchJSON(leadUrl);
      const page = Object.values(ldata.query.pages || {})[0];
      if (page?.thumbnail?.source) {
        const lead = {
          title: `${pageTitle} (lead image)`,
          directUrl: page.thumbnail.source,
          width: page.thumbnail.width,
          height: page.thumbnail.height,
          sourceUrl: page.fullurl,
          author: "Wikimedia Commons contributors",
          license: "CC / PD (see source)",
          provider: "Wikimedia"
        };
        const key = lead.directUrl || lead.sourceUrl;
        const tkey = normalize(lead.title);
        if (!exclude.has(key) && !exclude.has(tkey)) {
          results.push(lead);
          exclude.add(key);
          exclude.add(tkey);
        }
      }
    }
  } catch { /* ignore lead failures */ }

  // General Commons search limited to File namespace (6)
  // Over-fetch many, then de-dup and trim to n
  const overFetch = Math.min(50, Math.max(n * 10, 20));
  const commonsUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    `${city} (skyline OR landmark OR downtown OR panorama)`
  )}&gsrnamespace=6&gsrlimit=${overFetch}&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1920&format=json`;

  try {
    const cdata = await fetchJSON(commonsUrl);
    const pages = cdata?.query?.pages || {};
    const seenLocal = new Set();
    for (const p of Object.values(pages)) {
      const ii = p.imageinfo?.[0];
      if (!ii?.thumburl && !ii?.url) continue;
      const em = ii.extmetadata || {};
      const title = (em.ObjectName?.value || p.title || "").replace(/^File:/, "");
      const authorRaw = (em.Artist?.value || "Wikimedia Commons contributors");
      const author = authorRaw.replace(/<\/?[^>]+(>|$)/g, "");
      const license = em.LicenseShortName?.value || "CC / PD (see source)";
      const directUrl = ii.thumburl || ii.url;
      const sourceUrl = ii.descriptionshorturl || ii.descriptionurl || ii.url;

      const key = directUrl || sourceUrl;
      const tkey = normalize(title);
      if (exclude.has(key) || exclude.has(tkey) || seenLocal.has(key) || seenLocal.has(tkey)) continue;

      seenLocal.add(key);
      seenLocal.add(tkey);

      results.push({
        title,
        directUrl,
        width: null,
        height: null,
        sourceUrl,
        author,
        license,
        provider: "Wikimedia"
      });

      if (results.length >= n) break;
    }
  } catch { /* ignore commons failures */ }

  return results.slice(0, n);
}

// ---------------- MAIN ----------------
async function run() {
  ensureDir(OUTPUT_DIR);
  for (const city of CITIES) {
    const citySlug = slug(city);
    const cityDir = path.join(OUTPUT_DIR, citySlug);
    ensureDir(cityDir);

    // Load previous state for resumability + de-duping
    let manifest = loadExistingManifest(cityDir);
    const existingFiles = countExistingFiles(cityDir, citySlug);
    let existingCount = Math.max(manifest.length, existingFiles);

    // Build exclusion sets from existing manifest (URLs + titles) and filenames
    const exclude = new Set();
    for (const m of manifest) {
      if (m.source) exclude.add(m.source);
      if (m.title) exclude.add(normalize(m.title));
      if (m.file) exclude.add(path.basename(m.file)); // filenames
    }

    if (existingCount >= IMAGES_PER_CITY) {
      console.log(`\nSkipping ${city}: already have ${existingCount}/${IMAGES_PER_CITY}.`);
      continue;
    }

    const need = IMAGES_PER_CITY - existingCount;
    console.log(`\nFetching images for ${city}… Need ${need} more.`);

    // Collect candidates with provider order + fallback
    let candidates = [];
    for (const prov of PROVIDERS) {
      const remaining = IMAGES_PER_CITY - (existingCount + candidates.length);
      if (remaining <= 0) break;

      try {
        const got = prov === "openverse"
          ? await fetchOpenverse(city, remaining * 2, exclude) // over-fill to ensure enough after file checks
          : await fetchWikimedia(city, remaining * 2, exclude);

        for (const g of got) {
          // Unique by URL/title per run
          const key = g.directUrl || g.sourceUrl;
          const tkey = normalize(g.title);
          if (exclude.has(key) || exclude.has(tkey)) continue;
          candidates.push(g);
          exclude.add(key);
          exclude.add(tkey);
        }
      } catch (e) {
        console.warn(`Provider ${prov} error for ${city}: ${e.message}`);
      }

      // brief politeness delay between providers
      await sleep(REQUEST_DELAY_MS);
    }

    // Start index after existing items
    let idx = existingCount + 1;

    for (const img of candidates) {
      if (manifest.length >= IMAGES_PER_CITY) break;

      // Skip if filename already exists (avoid dup files across runs)
      const extGuess = () => {
        try {
          const u = new URL(img.directUrl || img.sourceUrl);
          const last = u.pathname.split("/").pop() || "";
          const ext = (last.includes(".") ? last.split(".").pop() : "jpg").split("?")[0];
          return (ext || "jpg").slice(0, 5);
        } catch { return "jpg"; }
      };

      const ext = extGuess();
      const filename = `${citySlug}-${String(idx).padStart(2, "0")}.${ext}`;
      const filepath = path.join(cityDir, filename);
      if (fs.existsSync(filepath) || exclude.has(filename)) {
        // do not advance idx; try next candidate with same idx number
        continue;
      }

      try {
        await downloadToFile(img.directUrl || img.sourceUrl, filepath);
        manifest.push(
          manifestEntry({
            city,
            title: img.title,
            file: `images/cities/${citySlug}/${filename}`,
            width: img.width,
            height: img.height,
            sourceUrl: img.sourceUrl || img.directUrl,
            author: img.author,
            license: img.license,
            provider: img.provider,
          })
        );
        console.log(`✔ Saved ${filename}`);
        exclude.add(filename);
        idx += 1;
      } catch (e) {
        console.warn(`Skipped ${img.directUrl || img.sourceUrl}: ${e.message}`);
      }

      await sleep(REQUEST_DELAY_MS);
    }

    // If still short, try one more quick Openverse supplement pass
    if (manifest.length < IMAGES_PER_CITY) {
      const shortBy = IMAGES_PER_CITY - manifest.length;
      try {
        const topUp = await fetchOpenverse(city, shortBy * 3, exclude);
        for (const img of topUp) {
          if (manifest.length >= IMAGES_PER_CITY) break;

          const ext = "jpg";
          const filename = `${citySlug}-${String(idx).padStart(2, "0")}.${ext}`;
          const filepath = path.join(cityDir, filename);
          if (fs.existsSync(filepath) || exclude.has(filename)) continue;

          try {
            await downloadToFile(img.directUrl || img.sourceUrl, filepath);
            manifest.push(
              manifestEntry({
                city,
                title: img.title,
                file: `images/cities/${citySlug}/${filename}`,
                width: img.width,
                height: img.height,
                sourceUrl: img.sourceUrl || img.directUrl,
                author: img.author,
                license: img.license,
                provider: img.provider,
              })
            );
            console.log(`✔ Saved ${filename}`);
            exclude.add(filename);
            idx += 1;
          } catch (e) {
            console.warn(`Top-up skipped ${img.directUrl || img.sourceUrl}: ${e.message}`);
          }

          await sleep(REQUEST_DELAY_MS);
        }
      } catch (e) {
        console.warn(`Top-up provider error for ${city}: ${e.message}`);
      }
    }

    // Persist manifest (exactly up to IMAGES_PER_CITY)
    const manifestPath = path.join(cityDir, "manifest.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest.slice(0, IMAGES_PER_CITY), null, 2));
    console.log(`📝 Wrote ${manifestPath} (${manifest.slice(0, IMAGES_PER_CITY).length} items)`);
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
