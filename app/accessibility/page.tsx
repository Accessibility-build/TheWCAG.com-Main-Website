import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accessibility, CheckCircle2, AlertCircle, ExternalLink, Keyboard, Eye, Volume2 } from "lucide-react"

export default function AccessibilityStatementPage() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Accessibility className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  WCAG 2.2 AA Compliant
                </Badge>
              </div>
            </div>

            {/* Commitment */}
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  TheWCAG.com is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve these goals.
                </p>
                <p>
                  Our goal is to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2</strong> at the <strong>AA level</strong>. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
                </p>
              </CardContent>
            </Card>

            {/* Conformance Status */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Conformance Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      TheWCAG.com strives to conform to WCAG 2.2 Level AA. This means that our website content should be:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground"><strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground"><strong>Operable</strong> - User interface components and navigation must be operable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground"><strong>Understandable</strong> - Information and the operation of user interface must be understandable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground"><strong>Robust</strong> - Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility Features */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    TheWCAG.com includes the following accessibility features:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Keyboard className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Keyboard Navigation</h3>
                        <p className="text-sm text-muted-foreground">All functionality is accessible via keyboard without requiring mouse use</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Screen Reader Support</h3>
                        <p className="text-sm text-muted-foreground">Proper ARIA labels and semantic HTML for screen reader compatibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Volume2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Text Alternatives</h3>
                        <p className="text-sm text-muted-foreground">All images and non-text content have appropriate alt text</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Accessibility className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Skip Links</h3>
                        <p className="text-sm text-muted-foreground">Skip to main content links for efficient navigation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Color Contrast</h3>
                        <p className="text-sm text-muted-foreground">Text meets WCAG AA contrast ratio requirements (4.5:1 for normal text)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Responsive Design</h3>
                        <p className="text-sm text-muted-foreground">Website is fully responsive and works on all device sizes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Focus Indicators</h3>
                        <p className="text-sm text-muted-foreground">Clear visible focus indicators for keyboard navigation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Semantic HTML</h3>
                        <p className="text-sm text-muted-foreground">Proper heading hierarchy and semantic markup throughout</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Known Issues */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Known Issues and Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While we strive to ensure accessibility, we are aware of some limitations and are working to address them:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Some third-party content or embedded resources may not fully meet accessibility standards</li>
                    <li>Older content may not have been created with current accessibility standards in mind</li>
                    <li>Some interactive features may require additional testing with assistive technologies</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We are committed to addressing these issues and improving accessibility continuously.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Feedback */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback and Reporting Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We welcome your feedback on the accessibility of TheWCAG.com. If you encounter accessibility barriers, please let us know:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Website:</strong> <Link href="/contact" className="text-primary hover:underline">Contact Us Page</Link>
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:accessibility@thewcag.com" className="text-primary hover:underline">accessibility@thewcag.com</a>
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    When reporting an issue, please include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                    <li>The URL of the page where you encountered the issue</li>
                    <li>A description of the accessibility barrier</li>
                    <li>Your assistive technology (if applicable)</li>
                    <li>Your browser and operating system</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Testing */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We regularly test our website for accessibility using:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Automated accessibility testing tools (axe DevTools, WAVE)</li>
                    <li>Manual testing with keyboard-only navigation</li>
                    <li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
                    <li>Browser accessibility inspection tools</li>
                    <li>User feedback and reports</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Standards */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Standards and Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This website aims to conform to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-muted-foreground">
                          <strong>WCAG 2.2 Level AA</strong> -{" "}
                          <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Web Content Accessibility Guidelines 2.2
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-muted-foreground">
                          <strong>Section 508</strong> - U.S. federal accessibility standards
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <ExternalLink className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-muted-foreground">
                          <strong>EN 301 549</strong> - European accessibility standards
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Updates */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Improvements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Accessibility is an ongoing effort. We regularly review and update our website to improve accessibility. This statement will be updated as we make improvements and address any identified issues.
                  </p>
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

