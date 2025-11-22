import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Eye, Keyboard, Lightbulb, Wrench } from "lucide-react"

export default function OverviewPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WCAG Overview",
    description:
      "Learn about WCAG (Web Content Accessibility Guidelines) 2.2, the international standard for web accessibility. Understand the POUR principles, success criteria, and how to make your website accessible to everyone.",
    url: "https://thewcag.com/overview",
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
          name: "WCAG Overview",
          item: "https://thewcag.com/overview",
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
          <div className="container py-8 md:py-12 max-w-5xl">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4">WCAG Overview</h1>
              <p className="text-lg sm:text-xl md:text-xl text-muted-foreground leading-relaxed">
                Web Content Accessibility Guidelines (WCAG) is an international standard developed by the W3C to make
                web content accessible to people with disabilities.
              </p>
            </div>

            {/* What is WCAG */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">What is WCAG?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WCAG provides a single shared standard for web content accessibility that meets the needs of
                  individuals, organizations, and governments internationally. It explains how to make web content more
                  accessible to people with disabilities including blindness and low vision, deafness and hearing loss,
                  limited movement, speech disabilities, photosensitivity, and combinations of these, as well as some
                  accommodation of learning disabilities and cognitive limitations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Following WCAG guidelines makes content more usable to users in general, not just those with
                  disabilities.
                </p>
              </div>
            </section>

            {/* History Timeline */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">WCAG History</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>WCAG 1.0</CardTitle>
                        <CardDescription>May 1999</CardDescription>
                      </div>
                      <Badge variant="outline">Legacy</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      The first version of WCAG, establishing 14 guidelines focused on making web content accessible.
                    </p>
                    <Link
                      href="/wcag-1-0"
                      className="text-primary hover:underline inline-flex items-center font-medium"
                    >
                      Learn more about WCAG 1.0
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>WCAG 2.0</CardTitle>
                        <CardDescription>December 2008</CardDescription>
                      </div>
                      <Badge variant="outline">ISO Standard</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      A major overhaul introducing the POUR principles and testable success criteria. Became ISO/IEC
                      40500:2012.
                    </p>
                    <Link
                      href="/wcag-2-0"
                      className="text-primary hover:underline inline-flex items-center font-medium"
                    >
                      Learn more about WCAG 2.0
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>WCAG 2.1</CardTitle>
                        <CardDescription>June 2018</CardDescription>
                      </div>
                      <Badge variant="outline">17 New Criteria</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Added 17 new success criteria focusing on mobile accessibility, people with low vision, and people
                      with cognitive and learning disabilities.
                    </p>
                    <Link
                      href="/wcag-2-1"
                      className="text-primary hover:underline inline-flex items-center font-medium"
                    >
                      Learn more about WCAG 2.1
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>WCAG 2.2</CardTitle>
                        <CardDescription>October 2023</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">Current</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Added 9 new success criteria and removed 1 (4.1.1 Parsing). Focus on mobile accessibility,
                      cognitive disabilities, and low vision improvements.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/wcag-2-2"
                        className="text-primary hover:underline inline-flex items-center font-medium"
                      >
                        Learn more about WCAG 2.2
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                      <span className="text-muted-foreground">•</span>
                    <Link
                        href="/wcag-2-2-vs-2-1"
                      className="text-primary hover:underline inline-flex items-center font-medium"
                    >
                      See what&apos;s new
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle>WCAG 3.0</CardTitle>
                        <CardDescription>In Development</CardDescription>
                      </div>
                      <Badge variant="outline">Draft</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      The next generation of WCAG guidelines, currently in Working Draft stage with significant
                      structural changes planned.
                    </p>
                    <Link
                      href="/wcag-3-0"
                      className="text-primary hover:underline inline-flex items-center font-medium"
                    >
                      Learn more about WCAG 3.0
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* POUR Principles */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">The POUR Principles</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                WCAG 2.2 is organized around four fundamental principles that form the foundation of web accessibility:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Eye className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Perceivable</CardTitle>
                        <CardDescription className="leading-relaxed">
                          Information and user interface components must be presentable to users in ways they can
                          perceive. This means users must be able to perceive the information being presented (it
                          can&apos;t be invisible to all of their senses).
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">4 guidelines</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">29 success criteria</span>
                      <Link
                        href="/principles/perceivable"
                        className="ml-auto text-primary hover:underline inline-flex items-center font-medium"
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <Keyboard className="h-6 w-6 text-secondary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Operable</CardTitle>
                        <CardDescription className="leading-relaxed">
                          User interface components and navigation must be operable. This means users must be able to
                          operate the interface (the interface cannot require interaction that a user cannot perform).
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">5 guidelines</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">29 success criteria</span>
                      <Link
                        href="/principles/operable"
                        className="ml-auto text-secondary hover:underline inline-flex items-center font-medium"
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Lightbulb className="h-6 w-6 text-accent" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Understandable</CardTitle>
                        <CardDescription className="leading-relaxed">
                          Information and the operation of user interface must be understandable. This means users must
                          be able to understand the information as well as the operation of the user interface.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">3 guidelines</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">17 success criteria</span>
                      <Link
                        href="/principles/understandable"
                        className="ml-auto text-accent hover:underline inline-flex items-center font-medium"
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">Robust</CardTitle>
                        <CardDescription className="leading-relaxed">
                          Content must be robust enough that it can be interpreted reliably by a wide variety of user
                          agents, including assistive technologies. This means users must be able to access the content
                          as technologies advance.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">1 guideline</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">2 success criteria</span>
                      <Link
                        href="/principles/robust"
                        className="ml-auto text-primary hover:underline inline-flex items-center font-medium"
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conformance Levels */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">Conformance Levels</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each success criterion is assigned a level based on its impact on design and functionality:
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          Level A
                          <Badge className="bg-blue-600 text-white border border-blue-700">A</Badge>
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          The minimum level of conformance. Must be satisfied for basic accessibility.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">30 success criteria</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          Level AA
                          <Badge className="bg-green-600 text-white border border-green-700">
                            AA
                          </Badge>
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          The standard level. Required for many laws and policies. Includes all Level A criteria plus
                          additional requirements.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">24 success criteria (plus all Level A)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          Level AAA
                          <Badge className="bg-purple-600 text-white border border-purple-700">AAA</Badge>
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          The highest level. Provides enhanced accessibility. May not be achievable for all content.
                          Includes all Level A and AA criteria.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">32 success criteria (plus all Level A and AA)</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Requirements */}
            <section className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6">Legal Requirements</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Many countries and jurisdictions have adopted WCAG as part of their accessibility laws:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold mb-1">Americans with Disabilities Act (ADA) - USA</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Courts have interpreted the ADA to require WCAG 2.0 Level AA compliance for public and commercial
                      websites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold mb-1">Section 508 - USA Federal</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Requires federal agencies to make their electronic content accessible. Updated in 2018 to align
                      with WCAG 2.0 Level AA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold mb-1">European Accessibility Act (EAA) - EU</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Requires certain products and services to meet accessibility requirements based on WCAG 2.1 Level
                      AA by June 2025.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold mb-1">EN 301 549 - EU Standard</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      European standard for digital accessibility that incorporates WCAG 2.1 Level AA requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Explore the principles, check specific criteria, or jump into our learning resources.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/principles"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Explore Principles
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Start Learning
                  </Link>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
