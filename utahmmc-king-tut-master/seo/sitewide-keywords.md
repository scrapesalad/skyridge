You are working in the tntdump.com repo. Perform a SITEWIDE SEO CONTENT SWEEP that expands the on-page work (already merged on the homepage) to all applicable pages WITHOUT changing the top-level navigation or routes.

CONSTANTS
- Phone: (801) 209-9013
- Service area: Salt Lake & Utah County
- Reading level: Grade 8–9, contractor-friendly
- Voice: plain, helpful, no hype
- Exact phrase "same day bin rental" may appear ONCE sitewide total (already on homepage; do not add elsewhere)
- Avoid keyword stuffing: aim ~1–2% per section edited; vary phrasing

PRIMARY KEYWORD BUCKETS (use only where relevant)
- Head terms: dumpster rental, roll off dumpster rental, dumpster rental near me, delivery dumpster rental, local dumpster rental, construction dumpster rental, job site dumpster rental, dumpster rental cost/price/quote, same day dumpster rental, rent dumpster
- Use-case longtails (cleanouts/remodels): attic/basement/garage/estate/foreclosure/hoarder/home cleanouts; kitchen/bathroom remodel; roof replacement; landscaping; moving; spring cleaning; storm cleanup; renovation/remodel
- Materials: appliances, cardboard, concrete, construction debris, demolition debris, dirt, drywall, furniture, green waste, household junk, mattress, metal, recycling, roofing, shingles, soil, wood, yard waste

SCOPE & RULES
- DO NOT create new pages or menu items. Only edit existing pages/components/partials.
- Only add content that fits the page’s intent. If a page is specialized (e.g., “Roofing Dumpster Rentals”), bias keywords toward roofing/remodel/construction, not cleanouts.
- LocalBusiness JSON-LD MUST remain on the homepage only. Other pages may use Service JSON-LD or FAQPage where appropriate.
- If a page already has sections you added on the homepage (e.g., Pricing accordion), don’t duplicate; adapt a shorter version or link to the homepage anchors.
- Never break existing styles/components; reuse utilities/classes already present.

GIT SAFETY
1) Create branch: `seo/sitewide-sweep-{date-yyyymmdd}`.
2) Before first write to any file, create a `.bak` of its original.
3) At end, commit with a clear message.

DISCOVERY & CLASSIFICATION
- Enumerate all pages/templates/components that render routes. For React/Next/Vite: scan `/pages`, `/app`, `/src/pages`, `/components`, `/layouts`. For static: scan `*.html`.
- For each page, infer PAGE INTENT from title/H1/URL path/content:
  - Service/Core: services, pricing, delivery, areas we serve, sizes, contractors, contact
  - Use-case: cleanouts, remodels, roofing, landscaping, moving, storm/spring cleaning, estate/foreclosure
  - Materials: concrete, dirt/soil, roofing/shingles, drywall, metal/wood, appliances, furniture, yard/green waste, cardboard/recycling
  - General/Blog (if present)
- Build a map: {path, title/H1, intent, existing sections (hero, intro, services bullets, pricing, faq, form, materials grid, testimonials), image tags present?, head tags present?}

PAGEWISE EDIT PLAN (apply selectively)
1) INTRO PARAGRAPH(S)
   - If page has a hero/intro area, insert or refine 1–2 short <p> blocks (70–120 words total) using ONLY relevant bucket terms.
   - Mention “serving Salt Lake & Utah County and nearby communities” once per page (max).

2) INLINE ANCHORS (no nav changes)
   - If the page references pricing, add an inline link to `#pricing` (on homepage) with anchor text “dumpster rental cost”.
   - If the page references rapid turnaround, add “same day dumpster rental” → `#same-day`.
   - If the page is contractor-oriented, add “construction dumpster rental” → `#contractors`.
   - Ensure anchors point cross-page correctly (absolute/relative as your router requires). If sections only exist on homepage, link to the homepage with those hash IDs (e.g., `/` + `#pricing`).

3) USE-CASE BULLETS (only on pages where it makes sense)
   - Cleanout pages: add a short “Cleanouts & Moves” <ul> using the bin rental cleanout longtails (each phrase once). Include brief notes in parentheses (e.g., typical size).
   - Remodel/Roofing pages: add a “Remodels & Projects” <ul> tuned to remodel/roofing keywords.
   - Materials pages: skip generic cleanout lists; instead add a compact “Accepted Materials” or “Load Types” list mapped to that material.

4) MATERIALS GRID (if the page is a general services page)
   - Insert or reuse the 3–4 column grid with one-sentence captions (“dumpster rental for …”). On pages devoted to a single material, include a 3–6 item mini-grid of closely related materials, not the full grid.

5) PRICING/FAQ ACCORDION
   - If a page naturally addresses cost/timing (e.g., sizes, service areas), add a SHORT 3–4 item <details> FAQ referencing “dumpster rental price/quote,” “delivery dumpster rental,” and page-specific concerns.
   - Do not duplicate a full pricing matrix if it already lives on homepage; link to `/#pricing`.

6) QUOTE FORM MICROCOPY
   - Where a quote/lead form appears, add:
     - H2/H3: “Get a dumpster rental quote”
     - Subhead (12–18 words) referencing delivery + local service
     - One-line size help (kitchen remodel / garage cleanout)
     - Optional checkboxes labels (if UI supports): same day dumpster rental, roll off dumpster, construction dumpster

7) TESTIMONIALS (if component exists)
   - Add up to 2 short <blockquote> items tailored to page intent (e.g., “roof replacement” on roofing page).
   - ONE keyword phrase per testimonial maximum.

8) ALT TEXT & IMAGES
   - Ensure every <img> has descriptive alt. Add or improve alt once per image with accurate phrasing; include a target term if natural (e.g., “roll off dumpster rental placed on driveway”).
   - Do NOT rename files unless single-reference and safe; if renamed, update imports/refs.

9) HEAD: TITLES, METAS, SCHEMA
   - Title pattern per page: “{Primary Intent Term} | Dumpster Rental | TNT Dump”
   - Meta description (145–160 chars) tailored to page intent; include 1–2 relevant head terms (e.g., construction dumpster rental, roll off dumpster).
   - Schema:
     - Homepage only: keep/insert LocalBusiness JSON-LD (already done).
     - Service/Use-case pages: add Service JSON-LD with `serviceType` and `areaServed: Salt Lake & Utah County`, `provider.telephone` set to (801) 209-9013.
     - Pages with an FAQ block: add FAQPage JSON-LD (3 Q&As max to avoid bloat).
   - Validate JSON.

QUALITY & DE-DUPING
- Vary repeated phrases within the same section (e.g., swap “local dumpster rental” with “local dumpster options”).
- Confirm the exact phrase “same day bin rental” appears only on the homepage; use “same day dumpster rental” elsewhere.
- Keep copy idempotent; wrap new blocks with clear comments: `<!-- SEO SWEEP START [slug] -->` / `<!-- SEO SWEEP END [slug] -->`.

GITHUB & OUTPUT
- Create branch `seo/sitewide-sweep-{date-yyyymmdd}`.
- Make `.bak` backups before first write per file.
- After edits, build if applicable; otherwise run a lint/format pass.
- Commit: `git add -A && git commit -m "SEO: sitewide content sweep (no nav changes), anchors, FAQs, titles/metas, alt text, schema"`.

FINAL REPORT (print to console)
- Table: {file path, page intent, sections added [intro | bullets | grid | faq | form | schema | anchors], Q&A count}
- Count of pages updated, images updated, FAQPage schemas added, Service schemas added.
- Anchor link checks (list any cross-page anchors created).
- Diffstat plus trimmed unified diffs for top 5 files (most changed).
- Any skips with reasons (e.g., “blog post – no relevant injection point”).

BEGIN NOW:
1) Discover and classify all pages.
2) Apply PAGEWISE EDIT PLAN conservatively by intent.
3) Run quality checks, build/lint as configured.
4) Produce FINAL REPORT.
