/**
 * Helper functions to generate dynamic OG image URLs
 */

interface OGImageParams {
  title: string
  subtitle?: string
  type?: 'website' | 'criterion' | 'service' | 'lawsuit' | 'article'
  criterion?: string
  level?: 'A' | 'AA' | 'AAA'
}

export function generateOGImageURL(params: OGImageParams): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://thewcag.com'
  const searchParams = new URLSearchParams()

  searchParams.set('title', params.title)
  
  if (params.subtitle) {
    searchParams.set('subtitle', params.subtitle)
  }
  
  if (params.type) {
    searchParams.set('type', params.type)
  }
  
  if (params.criterion) {
    searchParams.set('criterion', params.criterion)
  }
  
  if (params.level) {
    searchParams.set('level', params.level)
  }

  return `${baseUrl}/api/og?${searchParams.toString()}`
}

// Predefined OG images for common pages
export const ogImages = {
  home: () => generateOGImageURL({
    title: 'TheWCAG',
    subtitle: 'Complete WCAG 2.2 Accessibility Guidelines - Master web accessibility with interactive guides and tools',
    type: 'website'
  }),
  
  principles: () => generateOGImageURL({
    title: 'WCAG Principles',
    subtitle: 'Perceivable, Operable, Understandable, Robust - The four foundations of web accessibility',
    type: 'article'
  }),
  
  checklist: () => generateOGImageURL({
    title: 'Accessibility Checklist',
    subtitle: 'Interactive WCAG 2.2 compliance checklist to audit your website',
    type: 'article'
  }),
  
  services: () => generateOGImageURL({
    title: 'Accessibility Services',
    subtitle: 'Professional audits, remediation, and development services',
    type: 'service'
  }),
  
  lawsuits: () => generateOGImageURL({
    title: 'Accessibility Lawsuits',
    subtitle: 'Recent legal cases and their implications for web accessibility',
    type: 'article'
  }),
  
  about: () => generateOGImageURL({
    title: 'About TheWCAG',
    subtitle: 'We are experts working to maintain accessibility standards and help others achieve the same',
    type: 'website'
  })
}

// Helper for criterion pages
export function getCriterionOGImage(number: string, title: string, level: 'A' | 'AA' | 'AAA'): string {
  return generateOGImageURL({
    title: `${number} ${title}`,
    subtitle: `WCAG 2.2 Success Criterion - Learn how to implement this accessibility requirement`,
    type: 'criterion',
    criterion: number,
    level
  })
}

// Helper for service pages
export function getServiceOGImage(title: string, description: string): string {
  return generateOGImageURL({
    title,
    subtitle: description,
    type: 'service'
  })
}

// Helper for lawsuit pages
export function getLawsuitOGImage(title: string, summary: string): string {
  return generateOGImageURL({
    title,
    subtitle: summary,
    type: 'lawsuit'
  })
}
