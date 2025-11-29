## DCALL - this is pretty much a one time scripts for any site. Make I used it to test two cities, so make sure you replace those with the cities you want to add. 


You are an elite full-stack SEO engineer. Implement a scalable, white-hat local SEO system for TNT Dump (tntdump.com) that creates high-quality, unique city pages and avoids doorway/spun content. Do ALL tasks below in one end-to-end change with clean commits.

# High-level goals
- Rank for queries like “dumpster rental {city} utah” with unique, useful city pages.
- Avoid black-hat pitfalls (no doorway pages, no spun text, no fake addresses).
- Make it data-driven (CSV/YAML) + templatized, yet with substantial city-unique content.
- Ship two production-ready pages now: Midvale, UT and Herriman, UT.
- Add a “Service Areas” hub and internal cross-links.
- Add JSON-LD (LocalBusiness, Service, Product for dumpster sizes, FAQPage).
- Add GA4 event tracking for CTAs (tel, SMS, quote).
- Keep Core Web Vitals in mind (fast, compressed images, lazyload).

# Guardrails (MUST follow)
- Each city page must include ≥ 600–900 words total, with ≥ 250–300 words that are city-unique beyond just the city name.
- Include city-specific: permit rules/links, landfill/transfer station info, neighborhoods/ZIPs, delivery ETA/cutoffs, seasonal notes (snow/steep driveways where relevant), 1–2 city-specific testimonials (placeholder OK if real ones unavailable), and at least 3 locally shot/representative photos (use placeholders if needed, but name and alt are city-specific).
- No keyword stuffing. No hidden text. No fabricated addresses or GBPs.
- Use one legitimate GBP (service-area business). Do not create fake “offices”.

# Detect stack & branch
- Inspect repo for Next.js (package.json with next, app/ or pages/), Astro, Nuxt, Remix, WordPress theme (wp-content), or plain static site.
- Branch logic:
  - **Next.js (app or pages router)** → implement as described below.
  - **Astro / Nuxt / Remix** → mirror structure idiomatically (layouts, routes, data).
  - **WordPress** → create a custom page template + ACF fields or block pattern; also generate two pages programmatically. Keep code in a minimal plugin or theme child.
  - **Static** → generate HTML from templates + a build script; wire a simple site generator in Node.

If uncertain, prefer **Next.js (app router)** conventions; create files but no-op for other stacks.

# Data model (for all stacks)
Create /data/cities/ with both a CSV and per-city YAMLs:
- /data/cities/cities.csv with headings:
  city,state_code,county,primary_zips,avg_delivery_eta_hours,cutoff_time,permit_required,permit_url,permit_notes,transfer_station_name,transfer_station_address,transfer_station_hours,disallowed_items_deltas,busy_seasons_events,neighborhoods_served,real_job_examples,local_testimonials,price_notes,winter_notes,hoa_common_rule,adjacent_cities,latitude,longitude,phone_cta, sms_cta, quote_url
- Also allow per-city YAMLs under /data/cities/{state}/{city}.yml with same fields for overrides.
- Add schema helpers to compute areaServed from zips and geo coords.

Seed **two cities** with realistic South Salt Lake County info (verify and insert correct official links):
1) Midvale, UT
   - Likely permit: right-of-way/street placement via City of Midvale Public Works/Engineering. Find the official permit/ROW link and insert as permit_url. If driveway placement requires no permit, note it.
   - Landfill/transfer: Salt Lake Valley Landfill (6030 W 1300 S, Salt Lake County) OR Trans-Jordan Landfill (10473 S Bacchus Hwy, South Jordan). Confirm the primary site you use; insert correct name, address, hours.
   - Neighborhoods/ZIPs: 84047 (and any overlapping).
   - Adjacent: Murray, Sandy, Cottonwood Heights.
2) Herriman, UT
   - Permit: Check Herriman City right-of-way/encroachment permit for street placement; add official URL.
   - Landfill/transfer: Trans-Jordan Landfill (serves south valley) – add address/hours.
   - ZIPs: 84096.
   - Adjacent: Riverton, South Jordan, Bluffdale.

If any official data cannot be verified, insert a clear TODO comment and keep the field blank so we can fill manually.

# Content template (rendered per city)
Create a reusable page template with these sections (each backed by data fields + optional manual content):
1) H1: “Dumpster Rentals in {City, Utah}”
   Subhead with main benefit (flat-rate, same-day before cutoff, no hidden fees).
2) Trust badges row (licensed/insured, years in UT).
3) Sizes & Pricing table: 10/20/30/40-yard with tonnage, typical projects, price range, overage/day fees; include any city-specific notes.
4) “How it works” (3 steps).
5) City-specific **Permits & Placement** (use permit_* fields; external link).
6) **Disposal & Landfill/Transfer** info (name, address, typical hours; what can/can’t go—include disallowed deltas).
7) **Neighborhoods & ZIPs we serve** (bulleted) and candid coverage notes (out-of-range honesty).
8) **Local photos** (3+) with alt like “{City} {job-type} – 20-yard roll-off on driveway”.
9) **Local testimonials** (1–2).
10) **FAQ** (4–6 Q&As relevant to the city: permits timing, alley placement, HOA rules, winter/slope tips). Mark up with FAQPage schema.
11) **CTA bar** (Call tel:, SMS sms:, Get a Quote link). Mention same-day by cutoff where applicable.

# Routing & URLs
- Canonical path format: /ut/{city}/dumpster-rental/ (lowercase; hyphenate).
- Create a **Service Areas hub** at /ut/service-areas/ listing all UT cities, grouped by county; each entry links to its city page with a one-sentence local blurb.
- From each city page, link to 2–3 adjacent cities (from `adjacent_cities`).
- Ensure sitemap includes the hub and all city pages; update robots if needed.

# Structured data (JSON-LD)
For each city page:
- LocalBusiness (service-area): name, url, telephone, sameAs (if social), areaServed (city + zips), geo (lat/long), hasOfferCatalog/hasMap optional.
- Service for “Dumpster Rental”.
- Product for each dumpster size (name, description, offers priceRange, availability “InStock”).
- FAQPage with the on-page Q&A.
Implement via a small utility that merges site-wide brand details + city data. Validate with schema.org rules.

# Internal linking
- Add contextual links from relevant blog posts (if present) to their matching city page (lightweight heuristic: if post mentions city name, add a short “Serving {City}” box with a link).
- On each city page, a “Nearby cities” component that lists adjacent cities.

# Tracking
- Add GA4 event tracking for:
  - Clicks on tel: links → event name “contact_call”
  - Clicks on sms: links → “contact_sms”
  - Quote button clicks → “contact_quote”
Include event params: city, state, page_path, cta_type.

# Performance/UX
- Optimize images (next/image if Next.js; otherwise responsive img + lazy).
- Ensure CLS-safe layout for hero + table.
- Lighthouse/LCP budget: target LCP < 2.5s on mobile. If image heavy, use blur placeholders.

# Implementation details by stack

## If Next.js (app router)
- Create: /app/ut/[city]/dumpster-rental/page.tsx (or /pages if pages router).
- Create /lib/cities.ts to load CSV/YAML (use gray-matter or js-yaml; papaparse for CSV).
- Create components:
  - CityPage.tsx (composes all sections)
  - SizesTable.tsx, PermitBlock.tsx, DisposalBlock.tsx, Neighborhoods.tsx, LocalGallery.tsx, Testimonials.tsx, FAQ.tsx, CTA.tsx, NearbyCities.tsx
- Create /lib/schema.ts to output JSON-LD for LocalBusiness, Service, Product, FAQPage.
- Add /app/ut/service-areas/page.tsx listing cities from data.
- Generate static params (or getStaticPaths) from CSV to prebuild pages.
- Update next-sitemap config to include new routes (or create one if missing).

## If WordPress
- Create a minimal plugin: tnt-city-pages/tnt-city-pages.php
  - Registers a custom page template “City – Dumpster Rental”
  - Registers ACF (or native) fields matching the data model; includes JSON import.
  - Adds a shortcode [tnt_city_page] rendering the template.
  - Programmatically creates two pages (Midvale, Herriman) with correct slugs (/ut/midvale/dumpster-rental/, /ut/herriman/dumpster-rental/).
  - Injects JSON-LD in wp_head.
  - Adds a “Service Areas” page and automatically lists children.

## If Static
- Create /templates/city.hbs and a Node script /scripts/generate-city-pages.ts to read data and emit /dist/ut/{city}/dumpster-rental/index.html, plus /dist/ut/service-areas/index.html. Wire to npm “build:local-areas”.

# Data seeding for two cities (fill real links)
- For **Midvale, UT** and **Herriman, UT**, search official city sites to confirm:
  - Street/right-of-way or encroachment permit requirements and application URLs (public works / engineering).
  - Primary landfill/transfer station you use; include address & hours.
- Insert verified URLs/text into /data/cities/{state}/{city}.yml.
- If any official page is ambiguous, leave a TODO with source notes; do not invent facts.

# SEO elements
- <title>: “Dumpster Rental in {City, UT} | TNT Dump”
- Meta description (120–155 chars) including a real value prop (flat-rate, same-day by cutoff, no hidden fees).
- H1 matches intent; avoid repeating city name unnaturally.
- Add canonical tag.
- Open Graph & Twitter cards configured.

# QA checklist (enforce; fail build if missing)
Write a small script /scripts/validate-city-pages.ts that:
- Ensures each city page has ≥ 600 words and ≥ 250 city-unique words.
- Has a valid permit_url when permit_required = true.
- Has landfill name/address.
- Has at least 3 images with city-specific alt text.
- Emits JSON-LD blocks for LocalBusiness, Service, Product, FAQPage.
- Links to the hub and to ≥ 2 adjacent cities.
- Exposes CTA links (tel, sms, quote).
Run this in CI (or npm run validate:city-pages) and block commit if failing.

# Tracking wiring
- If GA4 is already installed, add event listeners to CTA buttons and tel/sms links. If not, create a small analytics wrapper accepting gtag or dataLayer if present; no hard dependency.

# Developer ergonomics
- npm scripts:
  - "generate:cities": ts-node scripts/generate-city-pages.ts data/cities/cities.csv
  - "validate:cities": ts-node scripts/validate-city-pages.ts
- README update: document data fields, how to add a city, and validation rules.

# Deliverables (create/modify files as needed)
- /data/cities/cities.csv (with Midvale + Herriman rows populated)
- /data/cities/ut/midvale.yml, /data/cities/ut/herriman.yml
- /lib/cities.ts, /lib/schema.ts, /components/* (or WP/static equivalents)
- /app/ut/[city]/dumpster-rental/page.tsx (or stack alternative)
- /app/ut/service-areas/page.tsx (or stack alternative)
- /scripts/generate-city-pages.ts
- /scripts/validate-city-pages.ts
- next-sitemap or sitemap generator config updated
- README.md additions

# After implementation
- Build locally; output a short report:
  - Confirm routes created for /ut/midvale/dumpster-rental/ and /ut/herriman/dumpster-rental/
  - Show the two JSON-LD snippets (redacted if long) and validation status.
  - List any TODOs for missing official links/details we must confirm.

Begin now. Make minimal, well-organized commits with descriptive messages.
