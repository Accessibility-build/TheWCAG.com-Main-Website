import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SkipLink } from '@/components/skip-link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Accessibility Blog - Latest News & Insights',
  description:
    'Stay updated with the latest accessibility news, WCAG updates, and insights from the accessibility community. Curated articles from top accessibility sources.',
  keywords: [
    'accessibility blog',
    'WCAG news',
    'accessibility updates',
    'web accessibility',
    'a11y blog',
    'accessibility insights',
  ],
  openGraph: {
    title: 'Accessibility Blog - Latest News & Insights | TheWCAG',
    description:
      'Stay updated with the latest accessibility news, WCAG updates, and insights from the accessibility community.',
    type: 'website',
    url: 'https://thewcag.com/blog',
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

  return (
    <>
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

