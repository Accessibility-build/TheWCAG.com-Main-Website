import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, BookOpen, ExternalLink, Chrome, Video, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Resources - Checklists, Templates & Tools | TheWCAG",
  description:
    "Download free WCAG checklists, accessibility statement templates, and explore browser extensions, testing tools, and official documentation. Everything you need for accessibility compliance.",
  keywords: [
    "accessibility resources",
    "WCAG checklist download",
    "accessibility templates",
    "accessibility testing tools",
    "browser extensions accessibility",
  ],
  openGraph: {
    title: "Accessibility Resources - Free Checklists, Templates & Tools",
    description:
      "Download free accessibility resources including WCAG checklists, templates, and find the best testing tools and browser extensions.",
    url: "https://thewcag.com/resources",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Resources",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/resources",
  },
}

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Resources",
    description:
      "Download WCAG accessibility checklists, templates, and explore additional resources. Find browser extensions, testing tools, documentation, and guides.",
    url: "https://thewcag.com/resources",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
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
          name: "Resources",
          item: "https://thewcag.com/resources",
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
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
              ]}
            />
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Resources</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Download checklists, templates, and explore additional accessibility resources to help you build and maintain accessible websites.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                Whether you're just starting your accessibility journey or looking to deepen your knowledge, these resources provide practical tools, guides, and references to support your work.
              </p>
            </div>

            {/* Downloadable Resources */}
            <section className="mb-16">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Downloadable Resources</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Access printable checklists, templates, and reference guides to help you track compliance and document your accessibility efforts.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                      <CardTitle>WCAG 2.2 Checklist (Excel)</CardTitle>
                    </div>
                    <CardDescription>Complete customizable checklist of all 86 success criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default" className="w-full" asChild>
                      <Link href="/checklist/download">
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        Download Checklist
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-secondary" aria-hidden="true" />
                      <CardTitle>Templates & Checklists</CardTitle>
                    </div>
                    <CardDescription>5 free professional templates for accessibility work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/resources/templates">
                        <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                        Browse Templates
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-accent" aria-hidden="true" />
                      <CardTitle>VPAT Template</CardTitle>
                    </div>
                    <CardDescription>WCAG 2.0/2.1/2.2 conformance documentation with fillable criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/resources/templates/vpat-template">
                        <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                        Fill VPAT Template
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                      <CardTitle>Quick Reference Guide</CardTitle>
                    </div>
                    <CardDescription>One-page visual summary of WCAG 2.2 requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full" asChild>
                      <Link href="/resources/templates/quick-reference">
                        <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
                        View & Print Guide
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Browser Extensions */}
            <section className="mb-16">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Browser Extensions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Install these browser extensions to quickly test accessibility during development. They provide real-time feedback and help catch issues early in your workflow.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Chrome className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>axe DevTools</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Powerful accessibility testing tool integrated into browser DevTools. Automatically detects
                          and explains accessibility issues.
                        </CardDescription>
                        <a
                          href="https://www.deque.com/axe/devtools/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium mt-3"
                        >
                          Get Extension
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Chrome className="h-6 w-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>WAVE</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Visual feedback tool that shows accessibility and WCAG errors directly on your webpage with
                          annotations and icons.
                        </CardDescription>
                        <a
                          href="https://wave.webaim.org/extension/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-secondary hover:underline font-medium mt-3"
                        >
                          Get Extension
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Chrome className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>Lighthouse</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Built into Chrome DevTools. Provides automated accessibility audits along with performance,
                          SEO, and best practices checks.
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-3">
                          Built into Chrome - Press F12 and look for the Lighthouse tab
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* External Resources */}
            <section>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">External Resources</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Explore these trusted external resources for additional learning materials, official documentation, and community-driven accessibility content.
                </p>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <BookOpen className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>W3C WCAG Quick Reference</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Official quick reference guide from W3C with customizable views and filters
                        </CardDescription>
                        <a
                          href="https://www.w3.org/WAI/WCAG22/quickref/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium mt-3"
                        >
                          Visit Resource
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <BookOpen className="h-6 w-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>WAI-ARIA Authoring Practices</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Comprehensive patterns and examples for building accessible web components with ARIA
                        </CardDescription>
                        <a
                          href="https://www.w3.org/WAI/ARIA/apg/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-secondary hover:underline font-medium mt-3"
                        >
                          Visit Resource
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Video className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>WebAIM Resources</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Articles, tutorials, and training materials on web accessibility
                        </CardDescription>
                        <a
                          href="https://webaim.org/resources/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:underline font-medium mt-3"
                        >
                          Visit Resource
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <BookOpen className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>A11y Project</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          Community-driven resource for accessibility best practices and patterns
                        </CardDescription>
                        <a
                          href="https://www.a11yproject.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium mt-3"
                        >
                          Visit Resource
                          <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Related Content */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Testing Guide</CardTitle>
                    <CardDescription>Learn how to test your website for accessibility compliance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/testing-guide">
                        Read Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Accessibility Checklist</CardTitle>
                    <CardDescription>Interactive checklist to track your WCAG compliance progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/checklist">
                        View Checklist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Code Examples</CardTitle>
                    <CardDescription>Browse accessible component examples and patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/examples">
                        View Examples
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
