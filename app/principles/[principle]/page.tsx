import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { LevelBadge } from "@/components/level-badge"
import { NewBadge } from "@/components/new-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Eye, Keyboard, Lightbulb, Wrench } from "lucide-react"
import { principles, getCriteriaByPrinciple } from "@/lib/wcag-data"

export const dynamicParams = false

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
    name: `${principleData.title} - WCAG 2.2`,
    description: principleData.description,
    url: `https://thewcag.com/principles/${principle}`,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-${colorMap[principle as keyof typeof colorMap]}/10 flex items-center justify-center shrink-0`}
                >
                  <Icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${colorMap[principle as keyof typeof colorMap]}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 capitalize leading-tight">{principleData.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">{principleData.description}</p>
                </div>
              </div>
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
