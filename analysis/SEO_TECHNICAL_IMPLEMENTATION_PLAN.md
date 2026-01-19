# SEO Technical Implementation Plan

**Detailed step-by-step guide with exact file paths and code changes**

---

## 📋 Table of Contents

1. [Priority 1: Critical Fixes](#priority-1-critical-fixes)
2. [Priority 2: High-Impact Improvements](#priority-2-high-impact-improvements)
3. [Priority 3: Medium-Term Improvements](#priority-3-medium-term-improvements)
4. [Schema Markup Implementation](#schema-markup-implementation)
5. [Component Creation](#component-creation)

---

## 🔴 Priority 1: Critical Fixes

### 1.1 Homepage Optimization

#### File: `app/page.tsx`
**Current Code (lines 50-104):**
```typescript
export const metadata: Metadata = {
  title: "TheWCAG - An Accessibility Guide",
  description: "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
  // ... rest
}
```

**Change To:**
```typescript
export const metadata: Metadata = {
  title: "WCAG 2.2 Compliance Guide 2025 | Complete Accessibility Checklist & Tools",
  description: "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources. Achieve ADA compliance today.",
  keywords: [
    "WCAG 2.2",
    "WCAG compliance",
    "accessibility checklist",
    "WCAG 2.2 guide",
    "web accessibility",
    "ADA compliance",
    "accessibility tools",
    "WCAG 2.2 checklist",
    "accessibility standards",
    "WCAG 2.2 AA",
    "Section 508",
    "a11y",
  ],
  openGraph: {
    title: "WCAG 2.2 Compliance Guide 2025 | Complete Accessibility Checklist & Tools",
    description: "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources. Achieve ADA compliance today.",
    url: "https://thewcag.com",
    siteName: "TheWCAG - An accessibility Guide",
    type: "website",
    images: [
      {
        url: ogImages.home(),
        width: 1200,
        height: 630,
        alt: "WCAG 2.2 Compliance Guide 2025 - Complete Accessibility Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 Compliance Guide 2025 | Complete Accessibility Checklist & Tools",
    description: "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources.",
    images: [ogImages.home()],
  },
  // ... rest stays the same
}
```

#### File: `app/page.tsx` (Add FAQ Schema)
**Add after line 158 (after StructuredData components):**

```typescript
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 (Web Content Accessibility Guidelines 2.2) is the latest version of accessibility standards published by the W3C. It includes 86 success criteria across four principles: Perceivable, Operable, Understandable, and Robust (POUR)."
        }
      },
      {
        "@type": "Question",
        name: "How do I check WCAG compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check WCAG compliance using our free accessibility checker tool, manual testing with our interactive checklist, and by reviewing each success criterion. We provide code examples and testing methods for each criterion."
        }
      },
      {
        "@type": "Question",
        name: "What are WCAG 2.2 success criteria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria organized under four principles. Each criterion has three conformance levels: A (minimum), AA (standard), and AAA (enhanced). Most organizations aim for AA compliance."
        }
      },
      {
        "@type": "Question",
        name: "What's new in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 adds 9 new success criteria including focus appearance (2.4.13), dragging movements (2.5.7), target size (2.5.8), and fixed reference points (1.4.12). These address mobile accessibility and improved focus visibility."
        }
      },
      {
        "@type": "Question",
        name: "Is WCAG 2.2 required for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While ADA doesn't explicitly require WCAG 2.2, courts have consistently recognized WCAG 2.0/2.1 Level AA as the standard for web accessibility compliance. WCAG 2.2 is the current best practice and recommended standard."
        }
      },
      {
        "@type": "Question",
        name: "How many success criteria are in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria across four principles: Perceivable (29 criteria), Operable (29 criteria), Understandable (17 criteria), and Robust (2 criteria)."
        }
      }
    ]
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationData} />
      <StructuredData data={faqData} />
      {/* ... rest of component */}
```

---

### 1.2 Checklist Page Optimization

#### File: `app/checklist/layout.tsx`
**Current Code (lines 3-56):**
```typescript
export const metadata: Metadata = {
  title: "WCAG 2.2 Checklist - Interactive Accessibility Compliance Checklist | TheWCAG",
  description: "Free interactive WCAG 2.2 compliance checklist. Track your accessibility progress with all 87+ success criteria. Filter by level, save progress, and achieve WCAG 2.2 AA compliance today!",
  // ... rest
}
```

**Change To:**
```typescript
export const metadata: Metadata = {
  title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF | TheWCAG",
  description: "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF, use interactive checklist, track progress, and achieve accessibility compliance. Filter by level, save your progress.",
  keywords: [
    "WCAG 2.2 checklist",
    "WCAG AA checklist",
    "accessibility checklist",
    "WCAG compliance checklist",
    "WCAG 2.2 AA checklist",
    "free WCAG checklist",
    "download WCAG checklist",
    "accessibility compliance checklist",
    "WCAG audit checklist",
    "web accessibility checklist",
    "a11y checklist",
    "ADA compliance checklist",
  ],
  openGraph: {
    title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF",
    description: "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF, use interactive checklist, and achieve accessibility compliance.",
    type: "website",
    url: "https://thewcag.com/checklist",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free WCAG 2.2 AA Compliance Checklist 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free WCAG 2.2 AA Compliance Checklist 2025 | Download PDF",
    description: "Complete WCAG 2.2 AA compliance checklist with all 86 success criteria. Download free PDF and use interactive checklist.",
    images: ["https://thewcag.com/Logo.png"],
  },
  // ... rest stays the same
}
```

#### File: `app/checklist/layout.tsx` (Add FAQ Schema)
**Add new function before the default export:**

```typescript
function getChecklistFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I use the WCAG 2.2 checklist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our interactive checklist to track your WCAG 2.2 compliance progress. Check off each success criterion as you implement it, filter by level (A, AA, AAA) or principle, and save your progress. You can also download a PDF version for offline use."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between WCAG A, AA, and AAA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG has three conformance levels: Level A (minimum requirements), Level AA (standard compliance - most common target), and Level AAA (enhanced accessibility). Most organizations aim for Level AA compliance as it's the standard for legal compliance."
        }
      },
      {
        "@type": "Question",
        name: "Can I download the WCAG 2.2 checklist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can download a free PDF version of our WCAG 2.2 checklist. The PDF includes all 86 success criteria organized by principle and level, making it easy to use offline or share with your team."
        }
      },
      {
        "@type": "Question",
        name: "How many success criteria are in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria: 29 under Perceivable, 29 under Operable, 17 under Understandable, and 2 under Robust. For AA compliance, you need to meet all Level A and Level AA criteria."
        }
      }
    ]
  }
}

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = getChecklistFAQSchema()
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
```

---

### 1.3 Criteria Pages Optimization

#### File: `app/criteria/[id]/layout.tsx`
**Current Code (lines 32-34):**
```typescript
  const title = `${criterion.number} ${criterion.title} - WCAG ${criterion.level} | TheWCAG`
  const description = `${criterion.summary} Learn about ${criterion.number} ${criterion.title}, a WCAG ${criterion.level} success criterion under ${principleName}. ${criterion.whyItMatters}`
```

**Change To:**
```typescript
  const title = `WCAG 2.2 ${criterion.number} ${criterion.title} - Complete Guide with Examples | TheWCAG`
  const description = `Learn WCAG 2.2 success criterion ${criterion.number} ${criterion.title}. ${criterion.summary} Includes examples, testing methods, implementation guide, and code snippets for ${criterion.level} compliance.`
```

**Also update keywords (lines 38-48):**
```typescript
    keywords: [
      `WCAG 2.2 ${criterion.number}`,
      `WCAG ${criterion.number}`,
      `${criterion.number} ${criterion.title}`,
      `WCAG ${criterion.level}`,
      "WCAG 2.2",
      "web accessibility",
      "accessibility guidelines",
      "success criterion",
      criterion.title.toLowerCase(),
      principleName.toLowerCase(),
      "a11y",
      "accessibility compliance",
    ],
```

#### File: `app/criteria/[id]/page.tsx`
**Current Code (lines 44-45):**
```typescript
    title: `${criterion.number} ${criterion.title} - WCAG 2.2 Guide | TheWCAG`,
    description: criterion.summary,
```

**Change To:**
```typescript
    title: `WCAG 2.2 ${criterion.number} ${criterion.title} - Complete Guide with Examples | TheWCAG`,
    description: `Learn WCAG 2.2 success criterion ${criterion.number} ${criterion.title}. ${criterion.summary} Includes examples, testing methods, and implementation guide for ${criterion.level} compliance.`,
```

#### File: `app/criteria/[id]/layout.tsx` (Add FAQ Schema)
**Add this function before the default export (around line 85):**

```typescript
function getCriterionFAQSchema(criterion: any, principleName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is WCAG 2.2 ${criterion.number} ${criterion.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${criterion.summary} This is a Level ${criterion.level} success criterion under the ${principleName} principle. ${criterion.whyItMatters || ''}`
        }
      },
      {
        "@type": "Question",
        name: `How do I test for ${criterion.number} compliance?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `To test for ${criterion.number} compliance, ${criterion.testingMethods || 'review the success criterion requirements, test with assistive technologies, and verify that your implementation meets all the requirements.'}`
        }
      },
      {
        "@type": "Question",
        name: `What level is ${criterion.number}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${criterion.number} ${criterion.title} is a Level ${criterion.level} success criterion. ${criterion.level === 'A' ? 'This is a minimum requirement for all WCAG compliance.' : criterion.level === 'AA' ? 'This is required for standard WCAG AA compliance, which is the most common target for organizations.' : 'This is an enhanced requirement for WCAG AAA compliance.'}`
        }
      }
    ]
  }
}
```

**Then update the default export to include FAQ schema (around line 87):**

```typescript
export default async function CriteriaLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const criterionId = id.replace(/\./g, "-")
  const criterion = getCriterionById(criterionId)

  if (!criterion) {
    return <>{children}</>
  }

  const principleName = criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)
  const faqSchema = getCriterionFAQSchema(criterion, principleName)

  // ... existing structuredData code ...

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
```

---

### 1.4 Add Breadcrumb Schema to All Pages

#### Create New Component: `components/breadcrumb-schema.tsx`

**File:** `components/breadcrumb-schema.tsx` (NEW FILE)

```typescript
import { StructuredData } from "@/components/structured-data"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <StructuredData data={breadcrumbData} />
}
```

#### Update Homepage: `app/page.tsx`
**Add after line 158:**

```typescript
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewcag.com",
      },
    ],
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationData} />
      <StructuredData data={faqData} />
      <StructuredData data={breadcrumbData} />
      {/* ... rest */}
```

#### Update Checklist Page: `app/checklist/layout.tsx`
**Add breadcrumb schema:**

```typescript
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewcag.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "WCAG 2.2 Checklist",
        item: "https://thewcag.com/checklist",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
```

**Note:** Criteria pages already have breadcrumb schema in the Article schema (lines 127-155 in `app/criteria/[id]/layout.tsx`), so no changes needed there.

---

## 🟡 Priority 2: High-Impact Improvements

### 2.1 Add "Quick Answer" Box Component

#### Create Component: `components/quick-answer-box.tsx` (NEW FILE)

```typescript
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface QuickAnswerBoxProps {
  question: string
  answer: string
  criterionNumber?: string
}

export function QuickAnswerBox({ question, answer, criterionNumber }: QuickAnswerBoxProps) {
  return (
    <Card className="border-primary/20 bg-primary/5 mb-6">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Quick Answer</h3>
            <p className="font-medium mb-2">{question}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
            {criterionNumber && (
              <p className="text-xs text-muted-foreground mt-2">
                WCAG 2.2 {criterionNumber}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
```

#### Update Criteria Pages: `app/criteria/[id]/page.tsx`
**Import at top:**
```typescript
import { QuickAnswerBox } from "@/components/quick-answer-box"
```

**Add after the main heading (find where the criterion title is displayed, around line 150-200):**

```typescript
<QuickAnswerBox
  question={`What is WCAG 2.2 ${criterion.number} ${criterion.title}?`}
  answer={criterion.summary}
  criterionNumber={criterion.number}
/>
```

---

### 2.2 Tools Page Optimization

#### File: `app/tools/page.tsx`
**Find the metadata export and update:**

```typescript
export const metadata: Metadata = {
  title: "Free WCAG Compliance Tools 2025 | Accessibility Checker & Generators | TheWCAG",
  description: "Free WCAG 2.2 compliance tools: accessibility checker, contrast analyzer, code generators, and more. Test and fix accessibility issues instantly. All tools are free and work in your browser.",
  keywords: [
    "WCAG compliance tools",
    "accessibility checker",
    "WCAG testing tools",
    "contrast checker",
    "accessibility tools",
    "free WCAG tools",
    "a11y tools",
    "web accessibility tools",
    "WCAG 2.2 tools",
    "accessibility testing",
  ],
  openGraph: {
    title: "Free WCAG Compliance Tools 2025 | Accessibility Checker & Generators",
    description: "Free WCAG 2.2 compliance tools: accessibility checker, contrast analyzer, code generators, and more. Test and fix accessibility issues instantly.",
    url: "https://thewcag.com/tools",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free WCAG Compliance Tools 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free WCAG Compliance Tools 2025 | Accessibility Checker & Generators",
    description: "Free WCAG 2.2 compliance tools: accessibility checker, contrast analyzer, code generators, and more.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools",
  },
}
```

---

### 2.3 Internal Linking Improvements

#### Create Component: `components/related-content.tsx` (NEW FILE)

```typescript
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RelatedItem {
  title: string
  description: string
  href: string
}

interface RelatedContentProps {
  title?: string
  items: RelatedItem[]
}

export function RelatedContent({ title = "Related Content", items }: RelatedContentProps) {
  if (items.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary text-sm font-medium">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

#### Update Criteria Pages: `app/criteria/[id]/page.tsx`
**Add at the end of the page (before closing tags):**

```typescript
import { RelatedContent } from "@/components/related-content"
import { getCriterionById, getCriteriaByPrinciple } from "@/lib/wcag-data"

// In the component, before the return statement:
const relatedCriteria = getCriteriaByPrinciple(criterion.principle)
  .filter(c => c.id !== criterion.id)
  .slice(0, 6)
  .map(c => ({
    title: `${c.number} ${c.title}`,
    description: c.summary.substring(0, 100) + '...',
    href: `/criteria/${c.number}`,
  }))

// In the JSX, before closing main tag:
<RelatedContent 
  title="Related Success Criteria"
  items={relatedCriteria}
/>
```

---

## 🟢 Priority 3: Medium-Term Improvements

### 3.1 Create Downloadable PDF Checklist

#### Create API Route: `app/api/checklist/pdf/route.ts` (NEW FILE)

```typescript
import { NextResponse } from 'next/server'
import { successCriteria } from '@/lib/wcag-data'

export async function GET() {
  // This is a placeholder - you'll need to implement actual PDF generation
  // Consider using libraries like pdfkit, jsPDF, or puppeteer
  
  const checklistData = {
    title: "WCAG 2.2 Compliance Checklist",
    date: new Date().toISOString().split('T')[0],
    criteria: successCriteria.map(c => ({
      number: c.number,
      title: c.title,
      level: c.level,
      principle: c.principle,
    })),
  }

  // For now, return JSON. You'll need to implement PDF generation
  // Example with a PDF library:
  // const pdf = generatePDF(checklistData)
  // return new NextResponse(pdf, {
  //   headers: {
  //     'Content-Type': 'application/pdf',
  //     'Content-Disposition': 'attachment; filename="wcag-2.2-checklist.pdf"',
  //   },
  // })

  return NextResponse.json({ message: "PDF generation not yet implemented" })
}
```

#### Update Checklist Page: `app/checklist/page.tsx`
**Add download button (find a good location, maybe near the top):**

```typescript
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

// In the component JSX:
<Button
  onClick={() => {
    window.open('/api/checklist/pdf', '_blank')
  }}
  className="mb-6"
>
  <Download className="mr-2 h-4 w-4" />
  Download PDF Checklist
</Button>
```

**Note:** You'll need to implement actual PDF generation. Consider using:
- `pdfkit` (Node.js)
- `jsPDF` (browser)
- `puppeteer` (server-side rendering)

---

### 3.2 Image Optimization

#### Update Next.js Config: `next.config.mjs`
**Already has image optimization, but ensure these settings:**

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
},
```

#### Create Image Optimization Script: `scripts/optimize-images.js` (NEW FILE)

```javascript
// This is a placeholder script
// You'll need to implement actual image optimization
// Consider using: sharp, imagemin, or similar

const fs = require('fs')
const path = require('path')

async function optimizeImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  // Implement image optimization logic here
  console.log('Image optimization not yet implemented')
}

optimizeImages()
```

---

### 3.3 Add HowTo Schema

#### Update "How to Make Website Accessible" Page: `app/how-to-make-website-accessible/page.tsx`

**Add HowTo schema at the top of the component:**

```typescript
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Make Your Website Accessible",
  description: "Step-by-step guide to making your website WCAG 2.2 compliant",
  step: [
    {
      "@type": "HowToStep",
      name: "Understand WCAG Principles",
      text: "Learn the four POUR principles: Perceivable, Operable, Understandable, and Robust.",
      url: "https://thewcag.com/principles",
    },
    {
      "@type": "HowToStep",
      name: "Use the Checklist",
      text: "Use our interactive WCAG 2.2 checklist to track your compliance progress.",
      url: "https://thewcag.com/checklist",
    },
    {
      "@type": "HowToStep",
      name: "Test Your Site",
      text: "Use our accessibility testing tools to identify and fix issues.",
      url: "https://thewcag.com/tools",
    },
    {
      "@type": "HowToStep",
      name: "Review Examples",
      text: "Review code examples for each success criterion to understand implementation.",
      url: "https://thewcag.com/examples",
    },
  ],
}

// In the component return:
<>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
  />
  {/* rest of component */}
</>
```

---

## 📊 Schema Markup Implementation

### Create Reusable Schema Component: `components/schema-wrapper.tsx` (NEW FILE)

```typescript
interface SchemaWrapperProps {
  schemas: Array<Record<string, any>>
}

export function SchemaWrapper({ schemas }: SchemaWrapperProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
```

**Usage example:**
```typescript
<SchemaWrapper
  schemas={[
    faqSchema,
    breadcrumbSchema,
    articleSchema,
  ]}
/>
```

---

## 🔧 Component Creation Summary

### New Components to Create:

1. **`components/breadcrumb-schema.tsx`** - Breadcrumb schema component
2. **`components/quick-answer-box.tsx`** - Quick answer box for criteria pages
3. **`components/related-content.tsx`** - Related content section
4. **`components/schema-wrapper.tsx`** - Reusable schema wrapper

### Files to Modify:

1. **`app/page.tsx`** - Homepage metadata and FAQ schema
2. **`app/checklist/layout.tsx`** - Checklist metadata and FAQ schema
3. **`app/criteria/[id]/layout.tsx`** - Criteria metadata and FAQ schema
4. **`app/criteria/[id]/page.tsx`** - Criteria page title and quick answer box
5. **`app/tools/page.tsx`** - Tools page metadata
6. **`app/how-to-make-website-accessible/page.tsx`** - HowTo schema

---

## ✅ Implementation Checklist

### Week 1:
- [ ] Update homepage metadata (`app/page.tsx`)
- [ ] Add FAQ schema to homepage
- [ ] Update checklist page metadata (`app/checklist/layout.tsx`)
- [ ] Add FAQ schema to checklist page
- [ ] Update top 10 criteria pages metadata
- [ ] Add FAQ schema to criteria pages
- [ ] Add breadcrumb schema to all pages

### Week 2:
- [ ] Create QuickAnswerBox component
- [ ] Add QuickAnswerBox to criteria pages
- [ ] Create RelatedContent component
- [ ] Add RelatedContent to criteria pages
- [ ] Update tools page metadata
- [ ] Add HowTo schema to "How to Make Website Accessible" page

### Week 3-4:
- [ ] Implement PDF checklist download
- [ ] Optimize images
- [ ] Improve internal linking throughout site
- [ ] Add schema markup to remaining pages
- [ ] Test all schema with Google Rich Results Test

---

## 🧪 Testing

### After Each Change:

1. **Test Schema Markup:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Validate JSON-LD syntax

2. **Test Metadata:**
   - View page source
   - Check title and description tags
   - Verify Open Graph tags

3. **Test Performance:**
   - Use PageSpeed Insights
   - Check Core Web Vitals
   - Verify mobile-friendliness

4. **Monitor Search Console:**
   - Check for errors
   - Monitor impressions and clicks
   - Track position changes

---

## 📝 Notes

- All schema markup should be valid JSON-LD
- Test with Google's Rich Results Test before deploying
- Monitor Search Console for any errors
- Update sitemap after adding new pages
- Keep metadata descriptions under 160 characters
- Keep titles under 60 characters

---

*Last Updated: January 2025*  
*Review this plan before starting implementation*
