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
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
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
        ],
      },
    ],
    sitemap: 'https://thewcag.com/sitemap.xml',
  }
}

