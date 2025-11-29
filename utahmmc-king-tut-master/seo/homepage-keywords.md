You are an expert on-page SEO + web engineer working inside the codebase for tntdump.com.
Goal: Insert targeted copy and structured data across existing pages WITHOUT changing top-level navigation.

CONSTRAINTS & GUARANTEES
- DO NOT create or edit nav/menu items or routes. Only edit in-place sections on existing pages.
- Keep reading level ~Grade 8–9, contractor-friendly voice.
- Avoid keyword stuffing: keep exact-match density ~1–2% per edited section.
- De-duplicate the phrase "same day bin rental": allow it ONCE sitewide total.
- City/service area: "Salt Lake & Utah County"
- Phone: "(801) 209-9013"
- Use US English. Prefer “dumpster” but mix in “bin” naturally where it fits.
- Keep all edits idempotent (safe to re-run). Create lightweight HTML anchors, not new pages.
- Emit a final summary: files touched, anchors added, FAQs inserted, schema added, and a short diffstat.

PREP & DISCOVERY
1) Detect stack and file layout:
   - Identify the main entry for the homepage and any Services/Pricing/FAQ sections (e.g., index.html, layouts, partials, components).
   - If React/Vite/Next: find the page/component files rendering the homepage/service sections.
   - If static HTML: locate the homepage file and any included partials.
   - Locate the <head> area to insert <title>, meta description, and JSON-LD scripts.
   - Find image assets folder(s) to update filenames and alt text where applicable.
2) Create a safety branch and backups:
   - Create a new git branch: `seo/content-refresh-{date-yyyymmdd}`
   - Before modifying any file, write a sibling backup with `.bak` appended the first time you touch it.

WHAT TO ADD (NO NAV CHANGES)
A) Homepage intro + secondary blurb (below H1, above primary CTA)
   - Two short paragraphs (90–120 words total) that naturally include ~6–8 of:
     ["dumpster rental", "roll off dumpster rental", "same day dumpster rental", 
      "dumpster rental cost", "dumpster rental price", "dumpster rental quote",
      "delivery dumpster rental", "construction dumpster rental", "local dumpster rental",
      "job site dumpster rental"]
   - Mention “serving Salt Lake & Utah County and nearby communities” once.
   - Include ONE internal anchor link to pricing: <a href="#pricing">dumpster rental cost</a>
   - Output as two <p> blocks inserted in the appropriate section.

B) Pricing / “How it works” accordion (insert into Pricing area or create a small subsection inside the existing page content — NOT a new page)
   - Semantic HTML using <section> with appropriately styled <details><summary>.
   - 4–6 Q&As. Must include these questions verbatim:
     1) How much is a dumpster rental?
     2) What affects dumpster rental cost?
     3) Do you offer same day dumpster rental?
     4) How do delivery and pick-up work?
   - Keep answers 60–90 words each. Include "dumpster rental price", "dumpster rental quote", "delivery dumpster rental", "roll off dumpster" naturally.

C) Services mini-subsections (inside the existing Services block)
   1) “Same-Day & Delivery” (70–100 words) — include: same day dumpster rental, delivery dumpster rental, roll off dumpster, local dumpster rental.
   2) “Contractors & Job Sites” (70–100 words) — include: construction dumpster rental, job site dumpster rental, swaps/haul-offs, roofing, demo.
   - Use <h3> and <p>.
   - Also generate 30–40 word microcopy variants (for cards/grids), but only insert if there is an existing card/grid component.

D) Use-case bullets (two lists in Services block; do not create a new page)
   - “Cleanouts & Moves” intro sentence + <ul> bullets with these exact phrases once each:
     bin rental for attic cleanout, bin rental for basement cleanout, bin rental for garage cleanout, 
     bin rental for estate cleanout, bin rental for foreclosure cleanout, bin rental for hoarder cleanup, 
     bin rental for home cleanout, bin rental for moving, bin rental for spring cleaning, 
     bin rental for storm cleanup
   - “Remodels & Projects” intro + <ul> bullets:
     bin rental for kitchen remodel, bin rental for bathroom remodel, bin rental for remodel, 
     bin rental for renovation, bin rental for roof replacement, bin rental for landscaping
   - Add short helper notes in parentheses like “(typical size: 10–20 yd)”.

E) “What we take” grid (materials)
   - Insert a responsive 3–4 column HTML grid listing (title + 1 sentence caption 10–16 words):
     appliances, cardboard, concrete, construction debris, demolition debris, dirt, drywall, furniture, 
     green waste, household junk, mattress, metal, recycling, roofing, shingles, soil, wood, yard waste
   - Each caption uses “dumpster rental for …” once.
   - Use existing utility classes if present; otherwise simple class names like: .materials-grid, .materials-item

F) Quote form microcopy (labels only; do not change form logic)
   - Headline: “Get a dumpster rental quote”
   - Subhead (12–18 words) mentioning delivery dumpster rental + local service.
   - One-line size help text referencing kitchen remodel / garage cleanout.
   - Optional checkbox labels if the UI supports tags: “same day dumpster rental”, “roll off dumpster”, “construction dumpster”
   - Use minimal HTML (<label>, <small>) consistent with existing form markup.

G) Testimonials (if a testimonials area exists)
   - Add 4 short <blockquote> (20–28 words each). ONE keyword phrase per testimonial:
     (roll off dumpster) | (local dumpster rental) | (bathroom remodel) | (roof replacement)
   - Use first names and city examples from Salt Lake & Utah County.

H) Image alt text & filenames
   - Propose alt text for 10 common images and suggest SEO-friendly filenames.
   - Cover: driveway placement, construction site, roof tear-off, kitchen remodel debris, landscaping, appliance haul, concrete load, yard waste, garage cleanout, same-day delivery.
   - If filenames are centralized in code, prepare a comment block with old->new mapping but DO NOT break existing references; only update filenames if trivial and referenced in one place. Otherwise, keep current filenames and only update alt attributes.

I) Internal anchors (within-page links ONLY)
   - Add anchor targets (ids) if missing:
     #pricing, #same-day, #contractors, #quote
   - Add 5 inline links in existing paragraphs (not nav), including REQUIRED:
     “dumpster rental cost” → #pricing
     “same day dumpster rental” → #same-day
     “construction dumpster rental” → #contractors
   - Provide 2 additional helpful anchors that point to existing sections you’re adding.

J) Footer FAQ block (or bottom of homepage if no dedicated footer FAQ)
   - 6–8 concise FAQs (40–60 words each). Must include:
     - Do you offer roll off dumpster rental near me?
     - Can I get same day dumpster rental?
     - How much is a dumpster rental?
   - Include “local dumpster rental”, “dumpster rental price/quote” naturally.
   - Use <dl><dt><dd> markup.

K) SEO <title>, meta, and JSON-LD (insert into <head> of homepage)
   1) <title> (60–65 chars): 
      Dumpster Rental & Roll Off Dumpster Rental | TNT Dump
   2) <meta name="description"> (145–160 chars) mentioning same day, delivery, prices/quote, construction dumpster rental, local.
   3) Two <script type="application/ld+json"> blocks:
      - FAQPage (3–4 of our FAQs)
      - LocalBusiness with:
        name: "TNT Dump"
        url: "https://tntdump.com"
        telephone: "(801) 209-9013"
        areaServed: "Salt Lake & Utah County"
        openingHours: Mo-Fr 07:00-19:00, Sa 08:00-17:00 (adjust if different in code)
        sameAs: (leave array empty if unknown or add official profiles if present)
   - Validate JSON; keep it compact.

L) Same-day ribbon / CTA strip
   - Add a short, unobtrusive line near the hero or sticky bar if such a component already exists.
   - Provide 3 variants (≤12 words each) referencing “same day dumpster rental” once.
   - Link button to #quote.

CLEANUP & QUALITY PASS
- Ensure “same day bin rental” appears only once across the whole repo after edits.
- If exact-match phrases repeat too closely in the same section, vary them (e.g., “local dumpster options”).
- Preserve existing classes and styles; do NOT introduce frameworks.
- Keep anchors and IDs unique; avoid collisions.
- Do not alter routing or directory structure.

GITHUB SYNC & OUTPUT
1) If this terminal has repo access, run a quick inventory (pseudo):
   - list key files changed with line ranges
   - show a brief unified diff per file (trimmed to context)
2) After edits:
   - `npm run build` or project build script if present; otherwise skip.
   - `git add -A && git commit -m "SEO: homepage/services content, FAQs, materials grid, schema, anchors (no nav changes)"`

FINAL REPORT (print to console)
- Files edited (paths)
- Anchors added
- FAQs count added
- Schema blocks added
- Any filenames changed (or note “names unchanged; alt text only”)
- Diffstat summary

BEGIN NOW:
1) Detect stack and locate insertion points.
2) Create branch and backups.
3) Perform edits A–L in order.
4) Run cleanup & quality pass.
5) Emit FINAL REPORT with trimmed diffs.
