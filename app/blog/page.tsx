import Link from 'next/link'
import { StructuredData } from '@/components/structured-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Calendar, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

// Manual blog posts data
const manualBlogPosts = [
  {
    slug: 'is-accessibility-work-safe-from-ai-in-the-near-future',
    title: 'Is Accessibility Work Safe from AI in the Near Future?',
    excerpt: 'With AI advancing rapidly, accessibility professionals are questioning their career futures. We analyze the Reddit discussion that\'s sparking debate: Can AI replace human expertise in making digital content accessible?',
    publishedAt: '2025-01-26',
    factCheckStatus: 'verified' as const,
    isPublished: true,
  },
  {
    slug: 'why-is-accessibility-being-delinked-from-disability',
    title: 'Why Is Accessibility Being De-Linked from Disability?',
    excerpt: 'A critical examination of how accessibility messaging is shifting away from disability. We explore a Reddit discussion about why "it helps everyone" has replaced "it helps disabled people" as the primary accessibility argument.',
    publishedAt: '2025-01-27',
    factCheckStatus: 'needs_review' as const,
    isPublished: true,
  },
]

export default function BlogPage() {
  const publishedPosts = manualBlogPosts.filter((post) => post.isPublished)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Accessibility Blog - Latest News & Insights',
    description:
      'Stay updated with the latest accessibility news, WCAG updates, and insights from the accessibility community.',
    url: 'https://thewcag.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'TheWCAG.com',
      url: 'https://thewcag.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thewcag.com/Logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Accessibility Blog Posts',
      description: 'Collection of accessibility news and insights',
      numberOfItems: publishedPosts.length,
      itemListElement: publishedPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: post.title,
          url: `https://thewcag.com/blog/${post.slug}`,
        },
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://thewcag.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://thewcag.com/blog',
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Blog</h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Stay updated with the latest accessibility news, WCAG updates, and insights from the accessibility community.
          Curated articles from top accessibility sources.
        </p>
      </div>

      {publishedPosts.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground py-8">
              No blog posts available yet. Check back soon for the latest accessibility news and insights!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {publishedPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.publishedAt}>
                      {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

