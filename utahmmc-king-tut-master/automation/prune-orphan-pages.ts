// Prune orphan Next.js App Router pages.
// - Discover app/**/page.(tsx|jsx|mdx)
// - Map to URL paths
// - Protect canonical city route and core pages
// - Classify orphans: legacy patterns or no inbound links
// - Dry-run by default; use --apply to delete

import fs from 'node:fs'
import path from 'node:path'

type RouteFile = {
  file: string
  route: string
}

type Orphan = {
  file: string
  route: string
  reason: 'legacy pattern' | 'no inbound links'
}

const ROOT = process.cwd()
const APP_DIR = path.join(ROOT, 'app')

const PAGE_NAMES = new Set(['page.tsx', 'page.jsx', 'page.mdx'])

function isDir(p: string) {
  try { return fs.statSync(p).isDirectory() } catch { return false }
}
function isFile(p: string) {
  try { return fs.statSync(p).isFile() } catch { return false }
}

function normalizePath(p: string) {
  return p.replace(/\\/g, '/')
}

function mapFolderToRoute(folderRelFromApp: string): string {
  // Remove ignored segments: _* and route groups (..)
  const parts = folderRelFromApp.split(/[\\/]/).filter(Boolean)
  const filtered = parts.filter(seg => !(seg.startsWith('_') || (seg.startsWith('(') && seg.endsWith(')'))))
  if (filtered.length === 0) return '/'
  return '/' + filtered.join('/')
}

function discoverPageRoutes(): RouteFile[] {
  const out: RouteFile[] = []
  function walk(dir: string, rel: string[] = []) {
    let entries: fs.Dirent[] = []
    try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return }

    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        walk(full, rel.concat(e.name))
        continue
      }
      if (!PAGE_NAMES.has(e.name)) continue
      const folder = dir
      const route = mapFolderToRoute(path.relative(APP_DIR, folder))
      out.push({ file: normalizePath(full), route })
    }
  }
  if (!isDir(APP_DIR)) return out
  walk(APP_DIR, [])
  // Ensure app/page.* resolves to '/'
  return out
}

function protectSet(routes: RouteFile[]): Set<string> {
  const set = new Set<string>()
  for (const r of routes) {
    // Always protect the dynamic canonical route folder and any concrete city paths
    if (r.route === '/ut/[city]/dumpster-rental' || /^\/ut\/.+\/dumpster-rental$/.test(r.route)) {
      set.add(r.file)
      continue
    }
    // Core root and meta
    if (['/', '/sitemap.xml', '/robots.txt'].includes(r.route)) {
      set.add(r.file)
      continue
    }
  }
  return set
}

function stripComments(src: string): string {
  // Remove /* */ and // comments; naive but effective for matching href strings
  return src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s)\/\/.*$/gm, '')
}

function collectInboundReferences(): Set<string> {
  const roots = ['app', 'components', 'lib']
  const ref = new Set<string>()
  const rxList: RegExp[] = [
    /href=("|')\/(.+?)(\1)/g,
    /Link\s+[^>]*href=("|')\/(.+?)(\1)/g,
    /router\.(push|replace)\((['"])\/(.+?)\2\)/g,
    /redirect\((['"])\/(.+?)\1\)/g,
  ]
  for (const root of roots) {
    const base = path.join(ROOT, root)
    if (!isDir(base)) continue
    const stack: string[] = [base]
    while (stack.length) {
      const cur = stack.pop()!
      let entries: fs.Dirent[] = []
      try { entries = fs.readdirSync(cur, { withFileTypes: true }) } catch { continue }
      for (const e of entries) {
        const full = path.join(cur, e.name)
        if (e.isDirectory()) {
          stack.push(full)
        } else if (/\.(tsx|jsx|ts|js|mdx)$/.test(e.name)) {
          try {
            const raw = fs.readFileSync(full, 'utf8')
            const code = stripComments(raw)
            for (const rx of rxList) {
              rx.lastIndex = 0
              let m: RegExpExecArray | null
              while ((m = rx.exec(code))) {
                const capture = m[m.length - 2] as string // the group with path without leading '/'
                const p = '/' + capture
                const normalized = p !== '/' ? p.replace(/\/$/, '') : '/'
                ref.add(normalized)
              }
            }
          } catch {}
        }
      }
    }
  }
  return ref
}

function classifyOrphans(routes: RouteFile[], protectedFiles: Set<string>, inbound: Set<string>): Orphan[] {
  const orphans: Orphan[] = []
  for (const r of routes) {
    if (protectedFiles.has(r.file)) continue
    // Legacy pattern rules
    if (r.route.startsWith('/cities/')) {
      orphans.push({ file: r.file, route: r.route, reason: 'legacy pattern' })
      continue
    }
    if (/^\/dumpster-rental-.+-ut$/.test(r.route.slice(0))) {
      orphans.push({ file: r.file, route: r.route, reason: 'legacy pattern' })
      continue
    }
    // Inbound reference check (exact match)
    const normalized = r.route !== '/' ? r.route.replace(/\/$/, '') : '/'
    if (!inbound.has(normalized)) {
      orphans.push({ file: r.file, route: r.route, reason: 'no inbound links' })
    }
  }
  return orphans
}

function removeIfEmpty(dir: string) {
  try {
    const entries = fs.readdirSync(dir)
    if (entries.length === 0) {
      fs.rmdirSync(dir)
      // Recursively try parent
      const parent = path.dirname(dir)
      if (parent.startsWith(APP_DIR)) removeIfEmpty(parent)
    }
  } catch {}
}

function applyDeletions(orphans: Orphan[]) {
  // For safety, only delete legacy pattern city routes by default
  const toDelete = orphans.filter(o => o.reason === 'legacy pattern')
  for (const o of toDelete) {
    try {
      fs.unlinkSync(o.file)
      removeIfEmpty(path.dirname(o.file))
      console.log(`deleted\t${o.route}\t${o.file}`)
    } catch (e) {
      console.warn(`failed\t${o.route}\t${o.file}: ${(e as Error).message}`)
    }
  }
}

function printTable(orphans: Orphan[]) {
  const header = ['route', 'file', 'reason']
  console.log(header.join('\t'))
  for (const o of orphans) {
    console.log([o.route, o.file, o.reason].join('\t'))
  }
}

async function main() {
  const apply = process.argv.includes('--apply')
  const routes = discoverPageRoutes()
  const protectedFiles = protectSet(routes)
  const inbound = collectInboundReferences()
  const orphans = classifyOrphans(routes, protectedFiles, inbound)

  console.log(`Found ${routes.length} routes. Protected: ${protectedFiles.size}. Candidates: ${orphans.length}.`)
  printTable(orphans)

  if (apply) {
    console.log('\nApplying deletions...')
    applyDeletions(orphans)
  } else {
    console.log('\nDry run only. Re-run with --apply to delete above files.')
  }
}

main().catch((e) => { console.error(e); process.exit(1) })
