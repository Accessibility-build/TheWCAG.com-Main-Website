import Link from 'next/link'
import { StructuredData } from '@/components/structured-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Calendar, ExternalLink, Wrench, BookOpen } from 'lucide-react'
import { format } from 'date-fns'
import { getPublishedBlogPosts } from '@/lib/blog/storage'
import { BlogPostMetadata } from '@/lib/blog/types'
import { TOOL_CATEGORIES, getToolBySlug } from '@/lib/tools/constants'

// Manual blog posts data (for static posts that don't use JSON storage)
const manualBlogPosts: BlogPostMetadata[] = [
  {
    slug: 'is-accessibility-work-safe-from-ai-in-the-near-future',
    title: 'Is Accessibility Work Safe from AI in the Near Future?',
    excerpt: 'With AI advancing rapidly, accessibility professionals are questioning their career futures. We analyze the Reddit discussion that\'s sparking debate: Can AI replace human expertise in making digital content accessible?',
    publishedAt: '2025-01-26',
    factCheckStatus: 'verified',
    isPublished: true,
    isToolGuide: false,
  },
  {
    slug: 'why-is-accessibility-being-delinked-from-disability',
    title: 'Why Is Accessibility Being De-Linked from Disability?',
    excerpt: 'A critical examination of how accessibility messaging is shifting away from disability. We explore a Reddit discussion about why "it helps everyone" has replaced "it helps disabled people" as the primary accessibility argument.',
    publishedAt: '2025-01-27',
    factCheckStatus: 'needs_review',
    isPublished: true,
    isToolGuide: false,
  },
]

export default async function BlogPage() {
  // Get posts from JSON storage
  const jsonPosts = await getPublishedBlogPosts()
  
  // Combine manual and JSON posts, removing duplicates (JSON posts take precedence)
  const manualSlugs = new Set(manualBlogPosts.map(p => p.slug))
  const uniqueJsonPosts = jsonPosts.filter(p => !manualSlugs.has(p.slug))
  
  // Merge and sort by published date (newest first)
  const allPosts = [...manualBlogPosts, ...uniqueJsonPosts]
    .filter((post) => post.isPublished)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  // Separate tool guides from general articles
  const toolGuides = allPosts.filter(post => post.isToolGuide === true)
  const generalArticles = allPosts.filter(post => !post.isToolGuide)

  // Group tool guides by category
  const toolGuidesByCategory = toolGuides.reduce((acc, guide) => {
    const tool = guide.toolSlug ? getToolBySlug(guide.toolSlug) : null
    const category = tool?.category || 'utility'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(guide)
    return acc
  }, {} as Record<string, typeof toolGuides>)

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
      numberOfItems: allPosts.length,
      itemListElement: allPosts.map((post, index) => ({
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

      {/* General Articles Section */}
      <section aria-labelledby="articles-heading" className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="articles-heading" className="text-xl sm:text-2xl font-bold">Latest Articles</h2>
        </div>

        {generalArticles.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">
                No blog posts available yet. Check back soon for the latest accessibility news and insights!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {generalArticles.map((post) => (
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
      </section>

      {/* Tool Guides Section */}
      {toolGuides.length > 0 && (
        <section aria-labelledby="tool-guides-heading">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 id="tool-guides-heading" className="text-xl sm:text-2xl font-bold">Tool Guides</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Comprehensive guides for using our free online tools. Learn how to get the most out of each tool with step-by-step instructions and best practices.
          </p>

          {Object.entries(toolGuidesByCategory).map(([category, guides]) => {
            const categoryInfo = TOOL_CATEGORIES[category as keyof typeof TOOL_CATEGORIES]
            return (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">{categoryInfo?.name || 'Other Tools'}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => {
                    const tool = guide.toolSlug ? getToolBySlug(guide.toolSlug) : null
                    return (
                      <Card key={guide.slug} className="hover:shadow-md transition-shadow h-full flex flex-col">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            <Link
                              href={`/blog/${guide.slug}`}
                              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                              {tool?.name || guide.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2 text-sm">
                            {guide.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                          <div className="flex items-center gap-3 text-sm">
                            <Link
                              href={`/blog/${guide.slug}`}
                              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                              Read Guide
                            </Link>
                            {tool && (
                              <>
                                <span className="text-muted-foreground">|</span>
                                <Link
                                  href={`/tools/convert/${tool.slug}`}
                                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                >
                                  Use Tool
                                </Link>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      )}
    </>
  )
}
