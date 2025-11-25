import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog/storage'
import { StructuredData } from '@/components/structured-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || !post.isPublished) {
    notFound()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `https://thewcag.com/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'TheWCAG.com',
      url: 'https://thewcag.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheWCAG.com',
      url: 'https://thewcag.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thewcag.com/Logo.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.generatedAt,
    articleSection: 'Accessibility News',
    keywords: ['accessibility', 'WCAG', 'web accessibility', ...post.tags],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://thewcag.com/blog/${post.slug}`,
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
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://thewcag.com/blog/${post.slug}`,
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
            {post.factCheckStatus === 'needs_review' && (
              <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-300 shrink-0">
                <AlertCircle className="h-3 w-3 mr-1" />
                Needs Review
              </Badge>
            )}
            {post.factCheckStatus === 'verified' && (
              <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300 shrink-0">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </time>
            </div>
          </div>

          {post.factCheckStatus === 'needs_review' && post.factCheckNotes && (
            <Card className="border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-amber-900 dark:text-amber-100">
                  <AlertCircle className="h-5 w-5" />
                  Review Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-800 dark:text-amber-200">{post.factCheckNotes}</p>
              </CardContent>
            </Card>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Sources */}
        {post.sources && post.sources.length > 0 && (
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {post.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {source.source}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </article>
    </>
  )
}

