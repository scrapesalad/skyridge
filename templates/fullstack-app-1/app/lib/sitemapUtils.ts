import fs from 'fs'
import path from 'path'

export type ClassifiedPaths = {
  pages: string[]
  services: string[]
  resources: string[]
  cities: string[]
}

const BASE_URL = 'https://icondumpsters.com'

export function collectRoutePaths(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const excluded = new Set<string>([
    'api', 'components', 'config', 'public', 'images', 'hostgator-deploy', 'scripts',
    'global-error.tsx', 'not-found.tsx', 'loading.tsx', 'error.tsx', 'test-route',
    'api-test', 'simple-test', 'test-email', 'test-og', 'test-blog-post', 'test-bulk-email',
    'test-city', 'test-email-config', 'test-email-rate', 'admin', 'admin-dashboard',
    'inventory', 'kpi-dashboard', 'sitemap', 'lib', 'utils', 'pages'
  ])

  const results = new Set<string>()

  const walk = (dir: string, baseRoute = ''): void => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
    if (hasPage) {
      const route = baseRoute || '/'
      results.add(route)
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (excluded.has(entry.name) || entry.name.startsWith('_')) continue
        const nextDir = path.join(dir, entry.name)
        const isRouteGroup = entry.name.startsWith('(') && entry.name.endsWith(')')
        const nextRoute = isRouteGroup ? baseRoute : baseRoute + '/' + entry.name
        walk(nextDir, nextRoute)
      }
    }
  }

  walk(appDir, '')

  const cleaned = Array.from(results)
    .map((r) => (r === '' ? '/' : r))
    .map((r) => r.replace(/\\/g, '/'))
    .map((r) => r.replace(/\/\/$/, ''))

  return Array.from(new Set(cleaned))
}

export function priorityFor(pathname: string): number {
  if (pathname === '/') return 1
  if (pathname.startsWith('/blog')) return 0.8
  if (pathname.includes('dumpster-sizes')) return 0.9
  if (pathname.includes('calculator')) return 0.8
  if (pathname.includes('guide-2025')) return 0.7
  if (pathname.includes('dumpster-rental-') && pathname.includes('-ut')) return 0.8
  if (pathname.includes('slc-dumpster-rental-')) return 0.8
  if (pathname.includes('services')) return 0.9
  if (pathname.includes('contact') || pathname.includes('free-quote')) return 0.9
  if (pathname.includes('test') || pathname.includes('api-test')) return 0.1
  if (pathname.includes('inventory') || pathname.includes('kpi-dashboard')) return 0.1
  return 0.6
}

export function changeFreqFor(pathname: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (pathname === '/' || pathname.startsWith('/blog')) return 'weekly'
  if (pathname.includes('dumpster-sizes') || pathname.includes('calculator')) return 'monthly'
  if (pathname.includes('slc-dumpster-rental-')) return 'monthly'
  if (pathname.includes('test') || pathname.includes('api-test')) return 'never'
  if (pathname.includes('inventory') || pathname.includes('kpi-dashboard')) return 'never'
  return 'monthly'
}

export function shouldIndex(pathname: string): boolean {
  // Exclude non-public or test/internal routes only
  if (pathname.includes('test') || pathname.includes('api-test')) return false
  if (pathname.includes('inventory') || pathname.includes('kpi-dashboard')) return false
  if (pathname.includes('admin') || pathname.includes('dashboard')) return false
  if (pathname.includes('test-route')) return false
  if (pathname.includes('simple-test')) return false
  if (pathname.includes('sitemap')) return false

  // Exclude known non-canonical aliases (city/blog duplicates with nested prefixes)
  // Examples seen in crawl: /cities/*/dumpster-rental should canonical to /dumpster-rental-<city>-ut
  if (/^\/cities\//.test(pathname)) return false
  // Blog posts should live at root or under /blog depending on project rules; avoid mismatched duplicates
  // Keep resources like calculators and guides; exclude /blog/* when a root canonical exists
  if (/^\/blog\//.test(pathname)) return false

  // Exclude dynamic pattern placeholders that may leak into route collection
  if (pathname.includes('/dumpster-rental-[city]-ut')) return false
  if (pathname.includes('/dumpster-rental-[[...slug]]')) return false

  return true
}

export function classifyPaths(paths: string[]): ClassifiedPaths {
  const filtered = paths.filter(shouldIndex)

  const services: string[] = []
  const resources: string[] = []
  const cities: string[] = []
  const pages: string[] = []

  for (const p of filtered) {
    if (p === '/') {
      pages.push(p)
      continue
    }

    const isService = p.startsWith('/services') || /residential|commercial|dumpster-rental|roll-?off/.test(p)
    const isResource = /guide|calculator|dumpster-sizes|faq|policy|privacy|terms|blog/.test(p)
    const isCity = /-dumpster-rentals|dumpster-rental-.*-ut|\/cities\//.test(p)

    if (isCity) {
      cities.push(p)
    } else if (isService) {
      services.push(p)
    } else if (isResource) {
      resources.push(p)
    } else {
      pages.push(p)
    }
  }

  // Include all qualifying entries; sort by priority descending
  const orderByPriority = (arr: string[]) =>
    arr
      .map((p) => ({ p, pr: priorityFor(p) }))
      .sort((a, b) => b.pr - a.pr)
      .map(({ p }) => p)

  return {
    pages: orderByPriority(pages),
    services: orderByPriority(services),
    resources: orderByPriority(resources),
    cities: orderByPriority(cities),
  }
}

export function toAbsoluteUrl(pathname: string): string {
  return `${BASE_URL}${pathname === '/' ? '' : pathname}`
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}


