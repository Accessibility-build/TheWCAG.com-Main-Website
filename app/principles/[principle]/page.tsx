import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { LevelBadge } from "@/components/level-badge"
import { NewBadge } from "@/components/new-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Keyboard, Lightbulb, Wrench, CheckCircle2, Info, Users, Target } from "lucide-react"
import { principles, getCriteriaByPrinciple } from "@/lib/wcag-data"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ principle: string }>
}): Promise<Metadata> {
  const { principle } = await params

  if (!["perceivable", "operable", "understandable", "robust"].includes(principle)) {
    return {}
  }

  const principleData = principles[principle as keyof typeof principles]
  const criteria = getCriteriaByPrinciple(principle)

  return {
    title: `${principleData.title} Principle - Complete WCAG 2.2 Guide 2025 | TheWCAG`,
    description: `Learn about the ${principleData.title} principle in WCAG 2.2. ${principleData.detailedDescription.substring(0, 120)}... Complete guide with ${criteria.length} success criteria, examples, and implementation tips.`,
    keywords: [
      `${principleData.title} principle`,
      `WCAG ${principleData.title}`,
      `WCAG 2.2 ${principleData.title}`,
      "WCAG 2.2",
      "web accessibility",
      "accessibility principles",
      "POUR principles",
      `${principleData.title} accessibility`,
      ...principleData.guidelines.map(g => `${g.number} ${g.title}`),
    ],
    openGraph: {
      title: `${principleData.title} Principle - Complete WCAG 2.2 Guide 2025`,
      description: `Learn about the ${principleData.title} principle in WCAG 2.2. Complete guide with ${criteria.length} success criteria, examples, and implementation tips.`,
      url: `https://thewcag.com/principles/${principle}`,
      siteName: "TheWCAG - An accessibility Guide",
      type: "website",
      images: [
        {
          url: "https://thewcag.com/Logo.png",
          width: 1200,
          height: 630,
          alt: `${principleData.title} Principle - WCAG 2.2`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${principleData.title} Principle - Complete WCAG 2.2 Guide 2025`,
      description: `Learn about the ${principleData.title} principle in WCAG 2.2. Complete guide with ${criteria.length} success criteria and examples.`,
      images: ["https://thewcag.com/Logo.png"],
    },
    alternates: {
      canonical: `https://thewcag.com/principles/${principle}`,
    },
  }
}

const iconMap = {
  perceivable: Eye,
  operable: Keyboard,
  understandable: Lightbulb,
  robust: Wrench,
}

const colorMap = {
  perceivable: "primary",
  operable: "secondary",
  understandable: "accent",
  robust: "primary",
}

export function generateStaticParams() {
  return [
    { principle: "perceivable" },
    { principle: "operable" },
    { principle: "understandable" },
    { principle: "robust" },
  ]
}

export default async function PrinciplePage({
  params,
}: {
  params: Promise<{ principle: string }>
}) {
  const { principle } = await params

  if (!["perceivable", "operable", "understandable", "robust"].includes(principle)) {
    notFound()
  }

  const principleData = principles[principle as keyof typeof principles]
  const criteria = getCriteriaByPrinciple(principle)
  const Icon = iconMap[principle as keyof typeof iconMap]

  // Group criteria by guideline
  const criteriaByGuideline = criteria.reduce(
    (acc, criterion) => {
      if (!acc[criterion.guidelineNumber]) {
        acc[criterion.guidelineNumber] = {
          title: criterion.guideline,
          criteria: [],
        }
      }
      acc[criterion.guidelineNumber].criteria.push(criterion)
      return acc
    },
    {} as Record<string, { title: string; criteria: typeof criteria }>,
  )

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${principleData.title} - WCAG 2.2 Principle`,
    description: principleData.description,
    url: `https://thewcag.com/principles/${principle}`,
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    mainEntity: {
      "@type": "Thing",
      name: principleData.title,
      description: principleData.description,
      about: {
        "@type": "Thing",
        name: "Web Content Accessibility Guidelines",
        alternateName: "WCAG 2.2",
      },
    },
    breadcrumb: {
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
          name: "Principles",
          item: "https://thewcag.com/principles",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: principleData.title,
          item: `https://thewcag.com/principles/${principle}`,
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ${principleData.title} principle in WCAG 2.2?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${principleData.description} ${principleData.detailedDescription.substring(0, 100)}...`
        }
      },
      {
        "@type": "Question",
        name: `How many success criteria are in the ${principleData.title} principle?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${principleData.title} principle has ${criteria.length} success criteria organized under ${principleData.guidelines.length} guidelines in WCAG 2.2.`
        }
      },
      {
        "@type": "Question",
        name: `What are the guidelines under ${principleData.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${principleData.title} principle includes ${principleData.guidelines.length} guidelines: ${principleData.guidelines.map(g => `${g.number} ${g.title}`).join(', ')}.`
        }
      }
    ]
  }

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
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/principles" className="hover:text-foreground">
                    Principles
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium capitalize">{principle}</li>
              </ol>
            </nav>

            {/* Page Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0",
                    principle === "perceivable" && "bg-primary/10",
                    principle === "operable" && "bg-secondary/10",
                    principle === "understandable" && "bg-accent/10",
                    principle === "robust" && "bg-primary/10"
                  )}
                >
                  <Icon 
                    className={cn(
                      "h-6 w-6 sm:h-8 sm:w-8",
                      principle === "perceivable" && "text-primary",
                      principle === "operable" && "text-secondary",
                      principle === "understandable" && "text-accent",
                      principle === "robust" && "text-primary"
                    )} 
                    aria-hidden="true" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 capitalize leading-tight">{principleData.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">{principleData.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {criteria.length} Success Criteria
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {principleData.guidelines.length} Guidelines
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information Section */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              {/* Detailed Description */}
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-5 w-5 text-primary" aria-hidden="true" />
                    <CardTitle className="text-lg sm:text-xl">About This Principle</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    {principleData.detailedDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Why It Matters */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" aria-hidden="true" />
                    <CardTitle className="text-lg sm:text-xl">Why It Matters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    {principleData.whyItMatters}
                  </p>
                  {principleData.statistics && (
                    <div className="mt-4 p-3 sm:p-4 bg-background/50 rounded-lg border border-primary/10">
                      <div className="flex items-start gap-2">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/80">
                          <strong className="font-semibold">Impact:</strong> {principleData.statistics}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Key Concepts */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <CardTitle className="text-lg sm:text-xl">Key Concepts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {principleData.keyConcepts.map((concept, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm sm:text-base leading-relaxed text-foreground/90">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Examples */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Real-World Examples</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    How this principle is applied in practice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {principleData.examples.map((example, index) => (
                      <div
                        key={index}
                        className="p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border/50"
                      >
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines Overview */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Guidelines Overview</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    This principle includes {principleData.guidelines.length} guideline{principleData.guidelines.length !== 1 ? 's' : ''} covering different aspects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {principleData.guidelines.map((guideline) => {
                      const guidelineCriteria = criteria.filter(c => c.guidelineNumber === guideline.number)
                      return (
                        <Link
                          key={guideline.number}
                          href={`#${guideline.number}`}
                          className="p-3 sm:p-4 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">
                              {guideline.number} {guideline.title}
                            </h3>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {guidelineCriteria.length} success {guidelineCriteria.length === 1 ? 'criterion' : 'criteria'}
                          </p>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines and Criteria */}
            <div className="space-y-8">
              {Object.entries(criteriaByGuideline).map(([guidelineNumber, guideline]) => (
                <section key={guidelineNumber} id={guidelineNumber}>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {guidelineNumber} {guideline.title}
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {guideline.criteria.map((criterion) => (
                      <Card key={criterion.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                            <Link href={`/criteria/${criterion.number}`} className="flex-1 group min-w-0">
                              <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors mb-2">
                                {criterion.number} {criterion.title}
                              </CardTitle>
                              <CardDescription className="text-sm sm:text-base leading-relaxed">{criterion.summary}</CardDescription>
                            </Link>
                            <div className="flex items-center gap-2 shrink-0">
                              {criterion.isNew && <NewBadge />}
                              <LevelBadge level={criterion.level} />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Link
                            href={`/criteria/${criterion.number}`}
                            className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:underline"
                          >
                            View details
                            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
