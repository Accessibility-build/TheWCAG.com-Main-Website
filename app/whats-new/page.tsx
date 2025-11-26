import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { LevelBadge } from "@/components/level-badge"
import { NewBadge } from "@/components/new-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, XCircle } from "lucide-react"
import { getNewCriteria } from "@/lib/wcag-data"

export const metadata: Metadata = {
  title: "What's New in WCAG 2.2 - 9 New Success Criteria (October 2023) | TheWCAG",
  description:
    "Discover what's new in WCAG 2.2. Learn about 9 new success criteria including Focus Not Obscured, Dragging Movements, Target Size (Minimum), Accessible Authentication, and Redundant Entry.",
  keywords: [
    "WCAG 2.2 new criteria",
    "what's new WCAG",
    "WCAG 2.2 changes",
    "new accessibility criteria",
    "WCAG updates",
    "focus not obscured",
    "target size minimum",
  ],
  openGraph: {
    title: "What's New in WCAG 2.2 - 9 New Accessibility Criteria",
    description:
      "Complete guide to WCAG 2.2's 9 new success criteria focusing on mobile accessibility, focus visibility, and cognitive improvements.",
    url: "https://thewcag.com/whats-new",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "What's New in WCAG 2.2",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/whats-new",
  },
}

export default function WhatsNewPage() {
  const newCriteria = getNewCriteria()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What's New in WCAG 2.2",
    description:
      "Discover the 9 new success criteria in WCAG 2.2. Learn about focus appearance, dragging movements, target size, and other new accessibility requirements.",
    url: "https://thewcag.com/whats-new",
    datePublished: "2023-10-05",
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
          name: "What's New in WCAG 2.2",
          item: "https://thewcag.com/whats-new",
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                <NewBadge />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">What&apos;s New in WCAG 2.2</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                WCAG 2.2 was published on October 5, 2023, introducing 9 new success criteria and removing 1 outdated
                criterion.
              </p>
            </div>

            {/* Summary */}
            <section className="mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Improvements</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    WCAG 2.2 focuses on three main areas of improvement:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="leading-relaxed">
                      <strong>Mobile Accessibility:</strong> Better touch target sizing and alternatives to complex
                      gestures
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="leading-relaxed">
                      <strong>Cognitive Disabilities:</strong> Reduced memory load, consistent help, and accessible
                      authentication
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="leading-relaxed">
                      <strong>Low Vision:</strong> Enhanced focus visibility to better track keyboard position
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* New Criteria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9 New Success Criteria</h2>
              <div className="space-y-4">
                {newCriteria.map((criterion) => (
                  <Card key={criterion.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Link href={`/criteria/${criterion.number}`} className="flex-1 group">
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {criterion.number} {criterion.title}
                          </CardTitle>
                        </Link>
                        <LevelBadge level={criterion.level} />
                      </div>
                      <CardDescription className="leading-relaxed">{criterion.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground capitalize">{criterion.principle}</span>
                        <Link
                          href={`/criteria/${criterion.number}`}
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Removed Criteria */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Removed Criterion</h2>
              <Card className="border-destructive/30">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <CardTitle className="mb-2">4.1.1 Parsing</CardTitle>
                      <CardDescription className="leading-relaxed">
                        This criterion has been removed from WCAG 2.2 because HTML parsing issues are now extremely rare
                        due to modern browser error handling. The requirement was historically important but is no
                        longer necessary with current web technologies.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
