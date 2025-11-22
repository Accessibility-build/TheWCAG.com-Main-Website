import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, BookOpen, ExternalLink, Chrome, Video } from "lucide-react"

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Resources",
    description:
      "Download WCAG accessibility checklists, templates, and explore additional resources. Find browser extensions, testing tools, documentation, and guides.",
    url: "https://thewcag.com/resources",
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
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Download checklists, templates, and explore additional accessibility resources
              </p>
            </div>

            {/* Downloadable Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Downloadable Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                      <CardTitle>WCAG 2.2 Checklist (PDF)</CardTitle>
                    </div>
                    <CardDescription>Complete printable checklist of all 86 success criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download PDF
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-secondary" aria-hidden="true" />
                      <CardTitle>Excel Compliance Tracker</CardTitle>
                    </div>
                    <CardDescription>Spreadsheet template for tracking remediation progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download Excel
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-accent" aria-hidden="true" />
                      <CardTitle>VPAT Template</CardTitle>
                    </div>
                    <CardDescription>Voluntary Product Accessibility Template for documentation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download Template
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                      <CardTitle>Quick Reference Guide</CardTitle>
                    </div>
                    <CardDescription>One-page summary of key WCAG requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download PDF
                      <span className="ml-2 text-xs">(Coming Soon)</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Browser Extensions */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Browser Extensions</h2>
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
              <h2 className="text-3xl font-bold mb-6">External Resources</h2>
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
