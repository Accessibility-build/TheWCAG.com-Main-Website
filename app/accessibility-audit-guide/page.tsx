import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileSearch,
  CheckCircle2,
  AlertCircle,
  Zap,
  Eye,
  Keyboard,
  Users,
  Clock,
  Target,
  ArrowRight,
  BookOpen,
  Code,
  Search,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function AccessibilityAuditGuidePage() {
  // HowTo structured data will be created after auditSteps array

  const auditSteps = [
    {
      step: 1,
      title: "Planning and Preparation",
      icon: Target,
      description: "Define scope, goals, and methodology",
      tasks: [
        "Define audit scope (entire site, specific pages, or features)",
        "Set compliance target (WCAG 2.2 Level AA recommended)",
        "Choose testing methods (automated, manual, user testing)",
        "Gather necessary tools and resources",
        "Create audit checklist based on WCAG criteria",
        "Set timeline and assign responsibilities",
      ],
      time: "1-2 hours",
    },
    {
      step: 2,
      title: "Automated Testing",
      icon: Zap,
      description: "Run automated accessibility scanners",
      tasks: [
        "Use axe DevTools browser extension",
        "Run WAVE evaluation tool",
        "Test with Lighthouse accessibility audit",
        "Use AI Audit Helper for comprehensive scanning",
        "Document all automated findings",
        "Prioritize issues by severity",
      ],
      tools: ["axe DevTools", "WAVE", "Lighthouse", "AI Audit Helper"],
      time: "2-4 hours",
    },
    {
      step: 3,
      title: "Manual Keyboard Testing",
      icon: Keyboard,
      description: "Test all functionality with keyboard only",
      tasks: [
        "Unplug mouse and navigate entire site with Tab key",
        "Test all interactive elements (buttons, links, forms)",
        "Verify focus indicators are visible",
        "Check for keyboard traps",
        "Test skip links functionality",
        "Verify logical tab order",
      ],
      time: "3-5 hours",
    },
    {
      step: 4,
      title: "Screen Reader Testing",
      icon: Eye,
      description: "Test with assistive technologies",
      tasks: [
        "Test with NVDA (Windows) or VoiceOver (Mac)",
        "Navigate through all pages and features",
        "Verify content is announced correctly",
        "Check ARIA labels and roles",
        "Test form interactions",
        "Verify heading structure navigation",
      ],
      tools: ["NVDA", "VoiceOver", "JAWS", "Narrator"],
      time: "4-6 hours",
    },
    {
      step: 5,
      title: "Visual and Design Review",
      icon: Search,
      description: "Review visual accessibility aspects",
      tasks: [
        "Check color contrast ratios (use contrast checker)",
        "Test with browser zoom (200%)",
        "Test with high contrast mode",
        "Verify text is resizable",
        "Check for color-only information",
        "Review focus indicators visibility",
      ],
      time: "2-3 hours",
    },
    {
      step: 6,
      title: "User Testing (Optional but Recommended)",
      icon: Users,
      description: "Get feedback from users with disabilities",
      tasks: [
        "Recruit users with various disabilities",
        "Conduct usability testing sessions",
        "Observe real-world usage patterns",
        "Collect feedback on barriers",
        "Document user-reported issues",
        "Prioritize based on user impact",
      ],
      time: "8-16 hours",
    },
    {
      step: 7,
      title: "Documentation and Reporting",
      icon: FileSearch,
      description: "Create comprehensive audit report",
      tasks: [
        "Compile all findings into report",
        "Categorize issues by WCAG criteria",
        "Prioritize by severity and impact",
        "Provide remediation recommendations",
        "Include screenshots and examples",
        "Set compliance timeline",
      ],
      time: "4-6 hours",
    },
  ]

  const auditChecklist = [
    { category: "Perceivable", criteria: 25, link: "/principles/perceivable" },
    { category: "Operable", criteria: 23, link: "/principles/operable" },
    { category: "Understandable", criteria: 20, link: "/principles/understandable" },
    { category: "Robust", criteria: 3, link: "/principles/robust" },
  ]

  // Create HowTo structured data from auditSteps
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Conduct an Accessibility Audit",
    description:
      "Complete 7-step guide to conducting comprehensive accessibility audits. Learn how to systematically evaluate your website for WCAG 2.2 compliance using automated tools, manual testing, and user testing methods.",
    url: "https://thewcag.com/accessibility-audit-guide",
    dateModified: "2025-01-15",
    totalTime: "PT30H", // Estimated 30 hours total
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: auditSteps.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: `${step.description}. ${step.tasks.join(". ")}`,
      url: `https://thewcag.com/accessibility-audit-guide#step-${step.step}`,
      ...(step.time && {
        totalTime: step.time.includes("hour") ? `PT${step.time.match(/\d+/)?.[0] || "1"}H` : undefined,
      }),
    })),
    tool: [
      {
        "@type": "HowToTool",
        name: "axe DevTools",
      },
      {
        "@type": "HowToTool",
        name: "WAVE",
      },
      {
        "@type": "HowToTool",
        name: "Lighthouse",
      },
      {
        "@type": "HowToTool",
        name: "Screen Reader",
      },
    ],
  }

  return (
    <>
      <StructuredData data={howToStructuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Accessibility Audit Guide", href: "/accessibility-audit-guide" }]} />
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FileSearch className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Audit Guide</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground">
                Complete guide to conducting comprehensive accessibility audits. Learn how to systematically evaluate
                your website for WCAG 2.2 compliance.
              </p>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>What is an Accessibility Audit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An accessibility audit is a systematic evaluation of your website to identify barriers that prevent
                  people with disabilities from accessing and using your content. A comprehensive audit combines
                  automated testing, manual testing, and user feedback.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Automated tools catch ~30-40%</h4>
                      <p className="text-sm text-muted-foreground">Manual testing is essential for comprehensive audits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Regular audits are crucial</h4>
                      <p className="text-sm text-muted-foreground">Conduct audits quarterly or after major updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7-Step Audit Process</h2>
              <div className="space-y-6">
                {auditSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline">Step {step.step}</Badge>
                                <Badge variant="outline" className="text-xs">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {step.time}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                              <CardDescription>{step.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Tasks:</h4>
                          <ul className="space-y-2">
                            {step.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {step.tools && (
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-sm">Tools:</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.tools.map((tool, toolIndex) => (
                                <Badge key={toolIndex} variant="outline" className="text-xs">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>WCAG 2.2 Audit Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Use this checklist to ensure you're testing all WCAG 2.2 success criteria:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {auditChecklist.map((item, index) => (
                    <Button key={index} asChild variant="outline" className="justify-start h-auto py-4">
                      <Link href={item.link}>
                        <BookOpen className="h-5 w-5 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">{item.category}</div>
                          <div className="text-xs text-muted-foreground">{item.criteria} success criteria</div>
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/checklist">
                      View Complete WCAG Checklist <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">Detailed testing methods</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Zap className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Tools</div>
                        <div className="text-xs text-muted-foreground">Accessibility testing tools</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/how-to-make-website-accessible">
                      <Target className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Implementation Guide</div>
                        <div className="text-xs text-muted-foreground">Fix issues found in audit</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/best-practices">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Best Practices</div>
                        <div className="text-xs text-muted-foreground">Prevent issues proactively</div>
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
