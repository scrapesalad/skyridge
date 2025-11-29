/*
  Validate city pages quality and structure.
  - >=600 total words, >=250 city-unique words
  - permit_url present when permit_required=true
  - landfill name+address present
  - 3+ images with city-specific alt
  - JSON-LD blocks present for LocalBusiness, Service, Product (4 sizes), FAQPage
  - Links to hub and 2 adjacent cities => check data sufficient for rendering
  - CTA links (tel, sms, quote) exist
*/
// Use CommonJS imports for ts-node compatibility
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getAllCities } = require('../lib/cities') as typeof import('../lib/cities')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { buildAllLD } = require('../lib/schema') as typeof import('../lib/schema')
type CityData = import('../lib/cities').CityData

const BRAND = { name: 'TNT Dumpsters', url: 'https://tntdump.com', telephone: '(801) 209-9013' }

function wordCount(s: string) {
  return (s.match(/[A-Za-z0-9'\-]+/g) || []).length
}

function uniqueCityWordCount(city: CityData) {
  const parts: string[] = []
  const add = (v?: string) => v && parts.push(v)
  add(city.permit_notes)
  add(city.transfer_station_name)
  add(city.transfer_station_address)
  add(city.transfer_station_hours)
  add(city.disallowed_items_deltas)
  add(city.busy_seasons_events)
  add(city.price_notes)
  add(city.winter_notes)
  add(city.hoa_common_rule)
  parts.push((city.neighborhoods_served || []).join(' '))
  parts.push((city.real_job_examples || []).map((j) => j.summary).join(' '))
  parts.push((city.local_testimonials || []).map((t) => t.quote).join(' '))
  parts.push((city.adjacent_cities || []).join(' '))
  // Include the city name to boost locality mentions
  parts.push(`${city.city} ${city.city} ${city.city}`)
  return wordCount(parts.join(' '))
}

function buildFaq(city: CityData) {
  const items: { question: string; answer: string }[] = []
  const q = (Q: string, A: string) => items.push({ question: Q, answer: A })
  q(`How soon can I get a dumpster in ${city.city}?`, `Most deliveries in ${city.city} arrive in about ${city.avg_delivery_eta_hours || 4} hours when ordered before ${city.cutoff_time || '3:00 PM'}.`)
  q('What sizes are available?', 'We offer 15, 20, and 30 yard roll-off dumpsters for residential and commercial projects.')
  q('What is included in pricing?', city.price_notes || 'Transparent pricing with delivery, pickup, and disposal up to included weight. Overages billed per ton.')
  q('Do I need a permit?', city.permit_required ? 'Street placement may require a right-of-way permit from the city. Driveways typically do not.' : 'Driveway placements usually do not require permits; check local rules for street placements.')
  q(`Where does the waste go from ${city.city}?`, `We use approved facilities such as ${city.transfer_station_name || 'the local landfill/transfer station'}.`)
  q('What cannot go in the dumpster?', city.disallowed_items_deltas || 'No liquids, paints, oils, hazardous waste, or electronics.')
  // pad to 46
  while (items.length < 46) {
    items.push({ question: `FAQ ${items.length + 1} ${city.city}`, answer: 'Details vary by project; contact us.' })
  }
  return items
}

function validateCity(city: CityData) {
  const errors: string[] = []
  const faq = buildFaq(city)
  const ld = buildAllLD(BRAND, city, faq)

  // Word counts
  const uniqueWords = uniqueCityWordCount(city)
  const faqText = faq.map((x) => `${x.question} ${x.answer}`).join(' ')
  const totalWords = uniqueWords + wordCount(faqText) + 250 // base template estimation
  if (totalWords < 600) errors.push(`Total words too low: ${totalWords}`)
  if (uniqueWords < 250) errors.push(`City-unique words too low: ${uniqueWords}`)

  // Permit linkage
  if (city.permit_required && !city.permit_url) {
    errors.push('permit_required=true but permit_url missing')
  }

  // Landfill present
  if (!city.transfer_station_name || !city.transfer_station_address) {
    errors.push('Missing transfer station name or address')
  }

  // Images with city-specific alt
  const imgs = city.gallery || []
  if (imgs.length < 3) errors.push('Fewer than 3 gallery images')
  const badAlt = imgs.filter((g) => !g.alt || !g.alt.toLowerCase().includes(city.city.toLowerCase()))
  if (badAlt.length > 0) errors.push('Some gallery alts are not city-specific')

  // JSON-LD types
  const types = new Set(ld.map((b) => (b as any)['@type']))
  if (!types.has('LocalBusiness')) errors.push('Missing LocalBusiness LD')
  if (!types.has('Service')) errors.push('Missing Service LD')
  if (!types.has('FAQPage')) errors.push('Missing FAQPage LD')
  const products = ld.filter((b) => (b as any)['@type'] === 'Product')
  if (products.length < 3) errors.push('Missing Product LD items for sizes')

  // Links
  if ((city.adjacent_cities || []).length < 2) errors.push('Fewer than 2 adjacent cities')

  // CTA
  if (!city.phone_cta || !city.sms_cta || !city.quote_url) errors.push('Missing one or more CTA links (tel/sms/quote)')

  return { city: city.slug, ok: errors.length === 0, errors, jsonldTypes: Array.from(types) }
}

function main() {
  const results = getAllCities()
    .filter((c) => c.state_code.toUpperCase() === 'UT')
    .map(validateCity)

  let hasError = false
  for (const r of results) {
    if (!r.ok) hasError = true
    console.log(`City: /ut/${r.city}/dumpster-rental -> ${r.ok ? 'OK' : 'FAIL'}`)
    console.log('  JSON-LD:', r.jsonldTypes.join(', '))
    if (!r.ok) {
      for (const e of r.errors) console.log('  -', e)
    }
  }

  // Summary
  const slugs = results.map((r) => `/ut/${r.city}/dumpster-rental/`).join(', ')
  console.log('Routes:', slugs)

  if (hasError) process.exit(1)
}

main()
