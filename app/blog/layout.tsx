import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SkipLink } from '@/components/skip-link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Accessibility Blog 2026 - Latest WCAG News & Insights | TheWCAG',
  description:
    'Stay updated with the latest accessibility news, WCAG 2.2 updates, and insights from the accessibility community. Curated articles from top accessibility sources. Updated 2026.',
  keywords: [
    'accessibility blog',
    'WCAG 2.2 news',
    'accessibility updates 2026',
    'web accessibility blog',
    'a11y blog',
    'accessibility insights',
    'WCAG news',
    'accessibility articles',
  ],
  openGraph: {
    title: 'Accessibility Blog 2026 - Latest WCAG News & Insights | TheWCAG',
    description:
      'Stay updated with the latest accessibility news, WCAG 2.2 updates, and insights from the accessibility community. Updated 2026.',
    type: 'website',
    url: 'https://thewcag.com/blog',
    siteName: 'TheWCAG - An accessibility Guide',
    images: [
      {
        url: 'https://thewcag.com/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Accessibility Blog 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Blog 2026 - Latest WCAG News & Insights',
    description: 'Stay updated with the latest accessibility news, WCAG 2.2 updates, and insights.',
    images: ['https://thewcag.com/Logo.png'],
  },
  alternates: {
    canonical: 'https://thewcag.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewcag.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://thewcag.com/blog",
      },
    ],
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TheWCAG Accessibility Blog",
    description: "Latest accessibility news, WCAG updates, and insights from the accessibility community",
    url: "https://thewcag.com/blog",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div data-blog-breadcrumb="default">
              <Breadcrumb items={breadcrumbItems} className="mb-6 sm:mb-8" />
            </div>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

