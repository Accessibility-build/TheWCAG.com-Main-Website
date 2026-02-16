import { MetadataRoute } from 'next'
import { successCriteria } from '@/lib/wcag-data'
import { getAllLawsuits, getLawsuitBySlug } from '@/lib/lawsuits-data'
import { TOOLS } from '@/lib/tools/constants'
import { getPublishedBlogPosts, getBlogPostBySlug } from '@/lib/blog/storage'

// Manual blog posts data (matching app/blog/page.tsx)
const manualBlogPosts = [
  {
    slug: 'is-accessibility-work-safe-from-ai-in-the-near-future',
    publishedAt: '2025-01-26',
    isPublished: true,
  },
  {
    slug: 'why-is-accessibility-being-delinked-from-disability',
    publishedAt: '2025-01-27',
    isPublished: true,
  },
]

/**
 * Validate that a blog post actually exists and is published
 */
async function validateBlogPost(slug: string): Promise<boolean> {
  try {
    const post = await getBlogPostBySlug(slug)
    return post !== null && post.isPublished === true
  } catch {
    return false
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thewcag.com'

  // Content update dates
  const wcag22Published = new Date('2023-10-05') // WCAG 2.2 publication date
  const siteLaunch = new Date('2024-01-01') // Approximate site launch
  const recentUpdate = new Date('2025-01-27') // Recent major updates (blog posts, content updates)
  const wcag21Published = new Date('2018-06-05') // WCAG 2.1 publication
  const wcag20Published = new Date('2008-12-11') // WCAG 2.0 publication
  const wcag10Published = new Date('1999-05-05') // WCAG 1.0 publication

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/principles`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/checklist`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docaccessible`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/accessibility-audit`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/accessibility-remediation`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/custom-website-development`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/android-app-development`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/ios-app-development`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLaunch,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLaunch,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/getting-started`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/contrast-checker`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/whats-new`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/overview`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/examples`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/examples/accessible-input-fields`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/accordions`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/buttons-links`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/cards`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/dropdowns-selects`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/forms`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/lists`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/modals-dialogs`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/navigation`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/pagination`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/progress-indicators`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/tables`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/examples/tooltips`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: siteLaunch,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: siteLaunch,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: siteLaunch,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wcag-2-2-vs-2-1`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/myths`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testing-guide`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industry-guides`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wcag-3-0`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wcag-1-0`,
      lastModified: wcag10Published,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wcag-2-0`,
      lastModified: wcag20Published,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wcag-2-1`,
      lastModified: wcag21Published,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wcag-2-2`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-to-make-website-accessible`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-practices`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accessibility-audit-guide`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mobile-accessibility`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accessibility-statement-template`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lawsuits`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/vpat-template`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/quick-reference`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/mobile-accessibility-checklist`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/pdf-accessibility-checklist`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/templates/form-accessibility-checklist`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Principle pages
  const principlePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/principles/perceivable`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/principles/operable`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/principles/understandable`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/principles/robust`,
      lastModified: wcag22Published,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Criteria pages - use WCAG 2.2 publication date for all, or recent update for new criteria
  const criteriaPages: MetadataRoute.Sitemap = successCriteria.map((criterion) => ({
    url: `${baseUrl}/criteria/${criterion.number}`,
    lastModified: criterion.isNew ? recentUpdate : wcag22Published,
    changeFrequency: 'monthly',
    priority: criterion.level === 'A' ? 0.8 : criterion.level === 'AA' ? 0.7 : 0.6,
  }))

  // Lawsuit pages - use actual lawsuit dates, validate that lawsuit exists
  const allLawsuits = getAllLawsuits()
  const lawsuitPages: MetadataRoute.Sitemap = allLawsuits
    .filter((lawsuit) => {
      // Double-check that the lawsuit can be retrieved by slug
      const validated = getLawsuitBySlug(lawsuit.slug)
      return validated !== undefined
    })
    .map((lawsuit) => ({
      url: `${baseUrl}/lawsuits/${lawsuit.slug}`,
      lastModified: new Date(lawsuit.dateResolved || lawsuit.dateFiled),
      changeFrequency: 'yearly',
      priority: 0.7,
    }))

  // Blog pages - use actual published dates
  // Get all published blog posts from JSON storage
  const jsonBlogPosts = await getPublishedBlogPosts()

  // Combine manual and JSON posts, removing duplicates (JSON posts take precedence)
  const manualSlugs = new Set(manualBlogPosts.map(p => p.slug))
  const uniqueJsonPosts = jsonBlogPosts.filter(p => !manualSlugs.has(p.slug))

  // Merge all published blog posts
  const allPublishedBlogPosts = [
    ...manualBlogPosts.filter((post) => post.isPublished),
    ...uniqueJsonPosts,
  ]

  // Validate that each blog post actually exists and is published
  const validatedBlogPosts = await Promise.all(
    allPublishedBlogPosts.map(async (post) => {
      const isValid = await validateBlogPost(post.slug)
      return isValid ? post : null
    })
  )

  const validBlogPosts = validatedBlogPosts.filter((post): post is typeof allPublishedBlogPosts[0] => post !== null)

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: recentUpdate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...validBlogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  // Tools pages - categorize by type (convert, edit, seo)
  const convertTools = TOOLS.filter(tool => tool.category !== 'editing' && tool.category !== 'seo')
  const editingTools = TOOLS.filter(tool => tool.category === 'editing')
  const seoTools = TOOLS.filter(tool => tool.category === 'seo')

  const toolsPages: MetadataRoute.Sitemap = [
    // Main tools pages
    {
      url: `${baseUrl}/tools`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/convert`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/edit`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/seo`,
      lastModified: recentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Conversion tools
    ...convertTools.map((tool) => ({
      url: `${baseUrl}/tools/convert/${tool.slug}`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Editing tools
    ...editingTools.map((tool) => ({
      url: `${baseUrl}/tools/edit/${tool.slug}`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // SEO tools
    ...seoTools.map((tool) => ({
      url: `${baseUrl}/tools/seo/${tool.slug}`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [...staticPages, ...principlePages, ...criteriaPages, ...lawsuitPages, ...blogPages, ...toolsPages]
}
