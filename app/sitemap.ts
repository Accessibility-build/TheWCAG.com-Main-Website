import { MetadataRoute } from 'next'
import { successCriteria } from '@/lib/wcag-data'
import { getAllLawsuits } from '@/lib/lawsuits-data'
import { getPublishedBlogPosts } from '@/lib/blog/storage'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thewcag.com'
  
  // Content update dates
  const wcag22Published = new Date('2023-10-05') // WCAG 2.2 publication date
  const siteLaunch = new Date('2024-01-01') // Approximate site launch
  const recentUpdate = new Date('2025-01-15') // Recent major updates (best practices, lawsuits, examples)
  const january2025 = new Date('2025-01-01') // January 2025 updates
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
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/accessibility-audit`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/accessibility-remediation`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/custom-website-development`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/android-app-development`,
      lastModified: recentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/ios-app-development`,
      lastModified: recentUpdate,
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

  // Lawsuit pages
  const lawsuitPages: MetadataRoute.Sitemap = getAllLawsuits().map((lawsuit) => ({
    url: `${baseUrl}/lawsuits/${lawsuit.slug}`,
    lastModified: new Date(lawsuit.dateResolved || lawsuit.dateFiled),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  // Blog pages
  const blogPosts = await getPublishedBlogPosts()
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: recentUpdate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  return [...staticPages, ...principlePages, ...criteriaPages, ...lawsuitPages, ...blogPages]
}

