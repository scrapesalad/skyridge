type SitemapUrl = {
  loc: string;
  lastmod?: Date;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: string[];
};

type SitemapIndexEntry = {
  loc: string;
  lastmod?: Date;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatLastmod(date?: Date): string | null {
  if (!date) return null;
  // W3C datetime; match Yoast-style (no milliseconds, explicit offset).
  // Example: 2025-08-13T18:38:00+00:00
  return date
    .toISOString()
    .replace(/\.\d{3}Z$/, 'Z')
    .replace(/Z$/, '+00:00');
}

export function buildUrlSet(urls: SitemapUrl[]): string {
  const includeImages = urls.some((u) => (u.images?.length ?? 0) > 0);

  const entries = urls
    .map((u) => {
      const lastmod = formatLastmod(u.lastmod);
      const changefreq = u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : '';
      const priority =
        typeof u.priority === 'number' ? `<priority>${u.priority.toFixed(1)}</priority>` : '';
      const images = (u.images ?? [])
        .filter(Boolean)
        .map((img) => `<image:image><image:loc>${escapeXml(img)}</image:loc></image:image>`)
        .join('');

      return (
        `<url>` +
        `<loc>${escapeXml(u.loc)}</loc>` +
        (lastmod ? `<lastmod>${lastmod}</lastmod>` : '') +
        changefreq +
        priority +
        images +
        `</url>`
      );
    })
    .join('');

  const imageNs = includeImages ? ` xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"` : '';

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${imageNs}>` +
    entries +
    `</urlset>`
  );
}

export function buildSitemapIndex(sitemaps: SitemapIndexEntry[]): string {
  const entries = sitemaps
    .map((s) => {
      const lastmod = formatLastmod(s.lastmod);
      return (
        `<sitemap>` +
        `<loc>${escapeXml(s.loc)}</loc>` +
        (lastmod ? `<lastmod>${lastmod}</lastmod>` : '') +
        `</sitemap>`
      );
    })
    .join('');

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    entries +
    `</sitemapindex>`
  );
}
