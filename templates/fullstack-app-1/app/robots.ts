import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/admin-dashboard/',
          '/api/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/simple-test/',
          '/private/'
        ],
      },
      // Explicitly allow major AI crawlers for content discovery and attribution
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'PPLX-Index', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/admin-dashboard/',
          '/api/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/simple-test/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/admin-dashboard/',
          '/api/',
          '/inventory/',
          '/kpi-dashboard/',
          '/api-test/',
          '/test/',
          '/simple-test/',
          '/private/',
        ],
      },
    ],
    sitemap: [
      'https://icondumpsters.com/sitemap.xml',
      'https://icondumpsters.com/post-sitemap.xml',
      'https://icondumpsters.com/indexnow-sitemap.xml'
    ],
  }
}
