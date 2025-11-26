import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Eye, Keyboard, Lightbulb, Wrench } from "lucide-react"
import { principles } from "@/lib/wcag-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WCAG Principles - Perceivable, Operable, Understandable, Robust (POUR) | TheWCAG",
  description:
    "Learn the 4 foundational WCAG principles (POUR): Perceivable, Operable, Understandable, and Robust. Complete guide with guidelines, success criteria, and examples for web accessibility.",
  openGraph: {
    title: "WCAG Principles - POUR Framework Explained",
    description:
      "Master the 4 WCAG principles: Perceivable, Operable, Understandable, Robust. Comprehensive guide with 13 guidelines and 78+ success criteria.",
    url: "https://thewcag.com/principles",
    type: "website",
  },
}

export default function PrinciplesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WCAG Principles",
    description:
      "Explore the four foundational principles of WCAG 2.2: Perceivable, Operable, Understandable, and Robust (POUR).",
    url: "https://thewcag.com/principles",
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
          name: "WCAG Principles",
          item: "https://thewcag.com/principles",
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">WCAG Principles</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore the four foundational principles of web accessibility and their guidelines
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Perceivable</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {principles.perceivable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {principles.perceivable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/perceivable#${guideline.number}`}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-xs sm:text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/perceivable"
                    className="inline-flex items-center text-primary hover:underline font-semibold"
                  >
                    View all 29 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Keyboard className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Operable</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {principles.operable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {principles.operable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/operable#${guideline.number}`}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-xs sm:text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/operable"
                    className="inline-flex items-center text-secondary hover:underline font-semibold"
                  >
                    View all 29 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Understandable</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {principles.understandable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {principles.understandable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/understandable#${guideline.number}`}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-xs sm:text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/understandable"
                    className="inline-flex items-center text-accent hover:underline font-semibold"
                  >
                    View all 17 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Wrench className="h-6 w-6 sm:h-7 sm:w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Robust</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {principles.robust.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {principles.robust.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/robust#${guideline.number}`}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-xs sm:text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/robust"
                    className="inline-flex items-center text-primary hover:underline font-semibold"
                  >
                    View all 2 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
