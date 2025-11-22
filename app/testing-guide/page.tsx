import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TestTube,
  CheckCircle2,
  AlertCircle,
  Zap,
  Eye,
  Keyboard,
  Code,
  ArrowRight,
  BookOpen,
  Shield,
  FileText,
} from "lucide-react"

export default function TestingGuidePage() {
  const testingMethods = [
    {
      title: "Automated Testing",
      icon: Zap,
      description: "Use tools to quickly identify common accessibility issues",
      tools: ["axe DevTools", "WAVE", "Lighthouse", "AI Audit Helper"],
      pros: [
        "Fast and efficient",
        "Catches common issues quickly",
        "Can be integrated into CI/CD",
        "Good for regression testing",
      ],
      cons: [
        "Only catches ~30-40% of issues",
        "May produce false positives",
        "Can't test user experience",
        "Requires manual verification",
      ],
      whenToUse: "Use for initial scans, continuous monitoring, and catching obvious issues",
    },
    {
      title: "Manual Testing",
      icon: Keyboard,
      description: "Test with keyboard navigation and assistive technologies",
      tools: ["Keyboard only", "Screen readers", "Browser DevTools"],
      pros: [
        "Catches issues automated tools miss",
        "Tests real user experience",
        "Identifies usability problems",
        "Validates automated findings",
      ],
      cons: [
        "Time-consuming",
        "Requires knowledge and training",
        "Subjective results",
        "Can't test at scale",
      ],
      whenToUse: "Use for comprehensive audits, validating fixes, and testing complex interactions",
    },
    {
      title: "Screen Reader Testing",
      icon: Eye,
      description: "Test with actual screen reader software",
      tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack"],
      pros: [
        "Tests real assistive technology",
        "Identifies navigation issues",
        "Validates ARIA implementation",
        "Tests content structure",
      ],
      cons: [
        "Requires learning screen readers",
        "Time-intensive",
        "Different results per screen reader",
        "Steep learning curve",
      ],
      whenToUse: "Use for testing content structure, ARIA labels, and navigation flow",
    },
    {
      title: "User Testing",
      icon: CheckCircle2,
      description: "Test with people who have disabilities",
      tools: ["User interviews", "Usability testing", "Feedback sessions"],
      pros: [
        "Real-world validation",
        "Identifies usability issues",
        "Provides authentic feedback",
        "Tests edge cases",
      ],
      cons: [
        "Expensive and time-consuming",
        "Requires recruitment",
        "Limited sample size",
        "May need multiple sessions",
      ],
      whenToUse: "Use for validating major changes, new features, and getting authentic feedback",
    },
  ]

  const testingChecklist = [
    {
      category: "Keyboard Navigation",
      items: [
        "All interactive elements are keyboard accessible",
        "Focus indicators are visible and clear",
        "Tab order follows logical sequence",
        "No keyboard traps",
        "Skip links work correctly",
        "Modal dialogs trap focus properly",
      ],
    },
    {
      category: "Screen Reader",
      items: [
        "All images have appropriate alt text",
        "Headings are properly structured (h1-h6)",
        "Landmarks are properly defined",
        "Form labels are associated with inputs",
        "ARIA labels are used correctly",
        "Content is announced in logical order",
      ],
    },
    {
      category: "Visual",
      items: [
        "Color contrast meets WCAG requirements",
        "Text can be resized up to 200%",
        "Content reflows at 320px width",
        "Color is not the only means of conveying information",
        "Focus indicators are visible",
        "Text spacing can be adjusted",
      ],
    },
    {
      category: "Forms",
      items: [
        "All inputs have associated labels",
        "Error messages are clear and associated",
        "Required fields are indicated",
        "Form validation is accessible",
        "Error recovery is possible",
        "Help text is available when needed",
      ],
    },
    {
      category: "Media",
      items: [
        "Videos have captions",
        "Audio has transcripts",
        "Media controls are keyboard accessible",
        "Auto-playing media can be paused",
        "No flashing content (3 flashes per second)",
        "Alternative formats are available",
      ],
    },
  ]

  const testingWorkflow = [
    {
      step: 1,
      title: "Initial Automated Scan",
      description: "Run automated tools to identify obvious issues",
      tools: ["axe DevTools", "WAVE", "Lighthouse"],
      time: "15-30 minutes",
    },
    {
      step: 2,
      title: "Keyboard Navigation Test",
      description: "Navigate the entire site using only keyboard",
      tools: ["Keyboard (Tab, Enter, Arrow keys)", "Browser DevTools"],
      time: "30-60 minutes",
    },
    {
      step: 3,
      title: "Screen Reader Test",
      description: "Test with at least one screen reader",
      tools: ["NVDA (free)", "VoiceOver (built-in)", "JAWS"],
      time: "1-2 hours",
    },
    {
      step: 4,
      title: "Visual Inspection",
      description: "Check color contrast, text sizing, and visual issues",
      tools: ["Color contrast checker", "Browser zoom", "Responsive design mode"],
      time: "30-60 minutes",
    },
    {
      step: 5,
      title: "Form Testing",
      description: "Test all forms for accessibility",
      tools: ["Keyboard navigation", "Screen reader", "Error testing"],
      time: "30-60 minutes",
    },
    {
      step: 6,
      title: "Document and Fix",
      description: "Document findings and prioritize fixes",
      tools: ["Issue tracker", "Testing checklist"],
      time: "Ongoing",
    },
  ]

  // Create HowTo structured data from testingWorkflow
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Test Website Accessibility",
    description:
      "Complete 6-step guide to testing your website for WCAG compliance. Learn how to use automated tools, manual testing, screen readers, and user testing methods to ensure accessibility.",
    url: "https://thewcag.com/testing-guide",
    totalTime: "PT5H", // Estimated 5 hours total
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: testingWorkflow.map((workflow) => ({
      "@type": "HowToStep",
      position: workflow.step,
      name: workflow.title,
      text: workflow.description,
      url: `https://thewcag.com/testing-guide#step-${workflow.step}`,
      tool: workflow.tools.map((tool) => ({
        "@type": "HowToTool",
        name: tool,
      })),
    })),
  }

  return (
    <>
      <StructuredData data={howToStructuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Accessibility Testing Guide</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Learn how to test your website for WCAG compliance using automated tools, manual testing, screen
                readers, and user testing methods.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Test for Accessibility?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Accessibility testing ensures your website can be used by everyone, including people with
                  disabilities. A comprehensive testing approach combines automated tools, manual testing, and user
                  feedback to achieve true WCAG compliance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Automated tools catch ~30-40% of issues</h4>
                      <p className="text-sm text-muted-foreground">
                        Manual testing is essential for comprehensive compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Combined approach is best</h4>
                      <p className="text-sm text-muted-foreground">
                        Use automated + manual + user testing for best results
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testing Methods */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Testing Methods</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {testingMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">{method.title}</CardTitle>
                        </div>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Tools:</h4>
                          <div className="flex flex-wrap gap-2">
                            {method.tools.map((tool, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Pros:
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {method.pros.map((pro, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-600" />
                            Cons:
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {method.cons.map((con, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t">
                          <p className="text-sm">
                            <strong>When to use:</strong> <span className="text-muted-foreground">{method.whenToUse}</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Testing Workflow */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Recommended Testing Workflow</h2>
              <div className="space-y-6">
                {testingWorkflow.map((workflow) => (
                  <Card key={workflow.step} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                          {workflow.step}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{workflow.title}</CardTitle>
                          <CardDescription>{workflow.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{workflow.time}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-16">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {workflow.tools.map((tool, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Testing Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Testing Checklist</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {testingChecklist.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Start */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Quick Start: 5-Minute Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Don't have time for a full audit? Start with these quick checks:
                </p>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Run an automated tool:</strong> Use axe DevTools or WAVE to scan
                    your homepage
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Test keyboard navigation:</strong> Try navigating your site
                    using only Tab, Enter, and Arrow keys
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Check images:</strong> Verify all images have alt text (right-click → Inspect)
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Test color contrast:</strong> Use a contrast checker on your main text
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Check forms:</strong> Ensure all form inputs have visible labels
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Tools</div>
                        <div className="text-xs text-muted-foreground">Browse accessibility testing tools</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compare">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Tool Comparison</div>
                        <div className="text-xs text-muted-foreground">Compare testing tools</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Beginner's guide</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

