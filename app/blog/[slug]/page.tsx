import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/blog/storage'
import { getToolBySlug } from '@/lib/tools/constants'
import { StructuredData } from '@/components/structured-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, CheckCircle2, AlertCircle, ExternalLink, Wrench, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

// Helper to extract tool slug from blog guide slug
function getToolSlugFromBlogSlug(blogSlug: string): string | null {
  if (blogSlug.endsWith('-guide')) {
    return blogSlug.replace(/-guide$/, '')
  }
  return null
}

// Custom components for ReactMarkdown
const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-border">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
  h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <Link href={href || '#'} className="text-primary underline hover:text-primary/80">
      {children}
    </Link>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
  th: ({ children }) => (
    <th className="border border-border bg-muted p-3 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border p-3">
      {children}
    </td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className?.includes('language-')
    if (isInline) {
      return (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props}>
          {children}
        </code>
      )
    }
    return (
      <code className="block bg-muted p-4 rounded overflow-x-auto text-sm font-mono" {...props}>
        {children}
      </code>
    )
  },
  hr: () => <hr className="my-8 border-border" />,
}

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

  // Check if this is a tool guide and get the related tool
  const toolSlug = getToolSlugFromBlogSlug(slug)
  const relatedTool = toolSlug ? getToolBySlug(toolSlug) : null

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

          {/* Tool CTA for Tool Guides */}
          {relatedTool && (
            <Card className="border-primary/30 bg-primary/5 dark:bg-primary/10">
              <CardContent className="py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Wrench className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Ready to try {relatedTool.name}?</p>
                      <p className="text-sm text-muted-foreground">{relatedTool.shortDescription}</p>
                    </div>
                  </div>
                  <Button asChild className="min-h-[44px] shrink-0">
                    <Link href={`/tools/convert/${relatedTool.slug}`}>
                      Try Tool Free
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </header>

        {/* Content */}
        <div className="mb-12 max-w-none">
          <ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
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

