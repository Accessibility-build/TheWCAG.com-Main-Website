import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog/storage'
import { StructuredData } from '@/components/structured-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Calendar, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts()
  const publishedPosts = allPosts.filter((post) => post.isPublished)

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
      itemListElement: publishedPosts.slice(0, 10).map((post, index) => ({
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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
          <h1 className="text-4xl md:text-5xl font-bold">Accessibility Blog</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
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
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {post.factCheckStatus === 'needs_review' && (
                      <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-300">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Needs Review
                      </Badge>
                    )}
                    {post.factCheckStatus === 'verified' && (
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4" />
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

