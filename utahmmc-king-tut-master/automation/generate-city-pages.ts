



/*
  Usage: ts-node scripts/generate-city-pages.ts data/cities/cities.csv
  - Ensures stub YAMLs exist for UT cities
  - Writes data/cities.json with dynamic city page paths for sitemap
*/
import siteConfig from '../../utah-mmc-site.config';
import fs from 'node:fs'
import path from 'node:path'
import Papa from 'papaparse'

type Row = { city: string; state_code: string }

function slugifyCity(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function ensureYaml(root: string, state: string, city: string) {
  const slug = slugifyCity(city)
  const dir = path.join(root, 'data', 'cities', state.toLowerCase())
  const file = path.join(dir, `${slug}.yml`)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(file)) {
    const yml = `slug: ${slug}
city: ${city}
state_code: ${state}
primary_zips: []
permit_required: false
`
    fs.writeFileSync(file, yml, 'utf8')
    console.log('Created stub', file)
  }
  return slug
}

function main() {
  const root = process.cwd()
  const csvArg = process.argv[2] || 'data/cities/cities.csv'
  const csvPath = path.join(root, csvArg)
  const text = fs.readFileSync(csvPath, 'utf8')
  const { data } = Papa.parse<Row>(text, { header: true, skipEmptyLines: true })
  const utRows = (data || []).filter((r) => String(r.state_code).toUpperCase() === 'UT')
  const paths: string[] = []
  for (const r of utRows) {
    const slug = ensureYaml(root, 'UT', r.city)
    paths.push(`/ut/${slug}/dumpster-rental`)
  }
  const outDir = path.join(root, 'data')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'cities.json'), JSON.stringify(paths, null, 2), 'utf8')
  console.log('Wrote data/cities.json with', paths.length, 'routes')
}

main()

