import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog/storage'
import { Breadcrumb } from '@/components/breadcrumb'

export const dynamicParams = false
export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  // This will be populated at build time with existing posts
  // New posts will be generated dynamically via ISR
  return []
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | TheWCAG',
      description: 'The requested blog post could not be found.',
    }
  }

  const title = `${post.title} | TheWCAG Blog`
  const description = post.excerpt || post.content.substring(0, 160)

  return {
    title,
    description,
    keywords: ['accessibility', 'WCAG', 'web accessibility', ...post.tags],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://thewcag.com/blog/${slug}`,
      siteName: 'TheWCAG - An accessibility Guide',
      images: [
        {
          url: 'https://thewcag.com/Logo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.generatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://thewcag.com/Logo.png'],
    },
    alternates: {
      canonical: `https://thewcag.com/blog/${slug}`,
    },
    robots: {
      index: post.isPublished,
      follow: post.isPublished,
      googleBot: {
        index: post.isPublished,
        follow: post.isPublished,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${slug}` },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          [data-blog-breadcrumb="default"] {
            display: none !important;
          }
        `,
      }} />
      <div className="-mt-6 sm:-mt-8 md:-mt-12 mb-6 sm:mb-8 md:mb-12">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {children}
    </>
  )
}

