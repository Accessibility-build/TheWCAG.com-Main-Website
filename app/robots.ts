import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/criteria/',
          '/lawsuits/',
          '/blog/',
          '/principles/',
          '/examples/',
          '/services/',
          '/tools/',
          '/wcag-*',
          '/favicon/',
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/favicon/',
        ],
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/criteria/',
          '/lawsuits/',
          '/blog/',
          '/principles/',
          '/examples/',
          '/services/',
          '/tools/',
          '/favicon/',
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/.next/',
        ],
      },
    ],
    sitemap: 'https://thewcag.com/sitemap.xml',
  }
}

