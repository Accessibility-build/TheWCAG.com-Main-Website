import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ArrowRight,
  Code,
  Eye,
  Keyboard,
  MousePointer,
  FileText,
  Shield,
  Zap,
  Target,
  AlertCircle,
  Lightbulb,
  Search,
  BookOpen,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function HowToMakeWebsiteAccessiblePage() {
  // HowTo structured data will be created after steps array is defined
  // This will be done below after the steps array

  const steps = [
    {
      number: 1,
      title: "Audit Your Current Website",
      icon: Search,
      description: "Identify existing accessibility issues before making changes",
      actions: [
        "Run automated testing tools (axe DevTools, WAVE, Lighthouse)",
        "Test keyboard navigation (Tab through all interactive elements)",
        "Test with a screen reader (NVDA, VoiceOver, or Narrator)",
        "Check color contrast ratios using our contrast checker",
        "Review form labels and error messages",
        "Check heading hierarchy (H1 → H2 → H3)",
      ],
      tools: [
        { name: "axe DevTools", href: "/tools" },
        { name: "WAVE", href: "/compare" },
        { name: "Contrast Checker", href: "/tools/contrast-checker" },
      ],
      time: "1-2 hours",
      priority: "High",
    },
    {
      number: 2,
      title: "Fix Critical Issues First",
      icon: AlertCircle,
      description: "Address the most impactful issues that affect the most users",
      actions: [
        "Add alt text to all images (descriptive, not decorative)",
        "Fix color contrast (minimum 4.5:1 for normal text, 3:1 for large)",
        "Ensure all interactive elements are keyboard accessible",
        "Add visible focus indicators",
        "Fix form labels (every input needs a label)",
        "Add skip links for main content",
      ],
      tools: [
        { name: "SC 1.1.1 - Alt Text", href: "/criteria/1.1.1" },
        { name: "SC 1.4.3 - Contrast", href: "/criteria/1.4.3" },
        { name: "SC 2.1.1 - Keyboard", href: "/criteria/2.1.1" },
      ],
      time: "2-4 hours",
      priority: "Critical",
    },
    {
      number: 3,
      title: "Implement Semantic HTML",
      icon: Code,
      description: "Use proper HTML elements to convey meaning and structure",
      actions: [
        "Use proper heading hierarchy (H1 for main title, H2 for sections, etc.)",
        "Use semantic elements (nav, main, article, section, aside, footer)",
        "Use button for buttons, not div or span",
        "Use label elements for form inputs",
        "Use list elements (ul, ol) for lists",
        "Ensure proper form structure",
      ],
      example: `<button>Click me</button>
<!-- Not: <div onclick="...">Click me</div> -->

<label for="email">Email</label>
<input type="email" id="email" name="email" />
<!-- Not: <input type="email" placeholder="Email" /> -->`,
      tools: [
        { name: "SC 4.1.2 - Name, Role, Value", href: "/criteria/4.1.2" },
        { name: "SC 2.4.6 - Headings", href: "/criteria/2.4.6" },
      ],
      time: "3-5 hours",
      priority: "High",
    },
    {
      number: 4,
      title: "Enhance Keyboard Navigation",
      icon: Keyboard,
      description: "Ensure all functionality is accessible via keyboard",
      actions: [
        "Test Tab order (should follow visual order)",
        "Ensure focus is visible (add focus styles)",
        "Remove keyboard traps (users can navigate away)",
        "Add keyboard shortcuts for common actions",
        "Ensure dropdowns work with keyboard",
        "Test modal dialogs with keyboard only",
      ],
      example: `/* Add visible focus styles */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Ensure focusable elements are in tab order */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
}
.skip-link:focus {
  top: 0;
}`,
      tools: [
        { name: "SC 2.1.1 - Keyboard", href: "/criteria/2.1.1" },
        { name: "SC 2.1.2 - No Keyboard Trap", href: "/criteria/2.1.2" },
        { name: "SC 2.4.7 - Focus Visible", href: "/criteria/2.4.7" },
      ],
      time: "4-6 hours",
      priority: "High",
    },
    {
      number: 5,
      title: "Improve Forms and Inputs",
      icon: FileText,
      description: "Make forms accessible and user-friendly",
      actions: [
        "Add labels to all form inputs (use label element)",
        "Associate error messages with inputs (use aria-describedby)",
        "Provide clear instructions and examples",
        "Mark required fields clearly",
        "Group related fields (use fieldset and legend)",
        "Provide helpful error messages",
      ],
      example: `<label for="email">Email Address <span aria-label="required">*</span></label>
<input 
  type="email" 
  id="email" 
  name="email"
  aria-required="true"
  aria-describedby="email-error email-help"
/>
<span id="email-help">We'll never share your email</span>
<span id="email-error" role="alert" aria-live="polite"></span>`,
      tools: [
        { name: "SC 3.3.2 - Labels", href: "/criteria/3.3.2" },
        { name: "SC 3.3.1 - Error Identification", href: "/criteria/3.3.1" },
        { name: "SC 3.3.3 - Error Suggestion", href: "/criteria/3.3.3" },
      ],
      time: "3-5 hours",
      priority: "High",
    },
    {
      number: 6,
      title: "Add ARIA Where Needed",
      icon: Shield,
      description: "Use ARIA to enhance accessibility for dynamic content",
      actions: [
        "Use ARIA labels for icon-only buttons",
        "Use ARIA live regions for dynamic content",
        "Use ARIA roles for custom components",
        "Use aria-expanded for collapsible content",
        "Use aria-hidden for decorative content",
        "Test ARIA with screen readers",
      ],
      example: `<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

<div role="alert" aria-live="polite">
  Form submitted successfully
</div>

<button aria-expanded="false" aria-controls="menu">
  Menu
</button>`,
      tools: [
        { name: "SC 4.1.2 - Name, Role, Value", href: "/criteria/4.1.2" },
        { name: "ARIA Guide", href: "/learn" },
      ],
      time: "2-4 hours",
      priority: "Medium",
    },
    {
      number: 7,
      title: "Test and Validate",
      icon: CheckCircle2,
      description: "Comprehensive testing to ensure accessibility",
      actions: [
        "Run automated tests again (compare before/after)",
        "Test with multiple screen readers",
        "Test with keyboard only (unplug mouse)",
        "Test with browser zoom (200%)",
        "Test with high contrast mode",
        "Get feedback from users with disabilities",
      ],
      tools: [
        { name: "Testing Guide", href: "/testing-guide" },
        { name: "WCAG Checklist", href: "/checklist" },
      ],
      time: "4-6 hours",
      priority: "High",
    },
    {
      number: 8,
      title: "Maintain and Monitor",
      icon: Target,
      description: "Keep accessibility in mind for all future updates",
      actions: [
        "Include accessibility in your development workflow",
        "Train your team on accessibility best practices",
        "Conduct regular accessibility audits (quarterly)",
        "Monitor for new issues when adding content",
        "Stay updated with WCAG guidelines",
        "Create an accessibility statement",
      ],
      tools: [
        { name: "Best Practices", href: "/best-practices" },
        { name: "Accessibility Statement", href: "/accessibility-statement-template" },
      ],
      time: "Ongoing",
      priority: "High",
    },
  ]

  const quickWins = [
    {
      title: "Add Alt Text to Images",
      impact: "Affects all screen reader users",
      time: "5 min per image",
      link: "/criteria/1.1.1",
    },
    {
      title: "Fix Color Contrast",
      impact: "Affects users with low vision",
      time: "15-30 min",
      link: "/criteria/1.4.3",
    },
    {
      title: "Add Form Labels",
      impact: "Affects all form users",
      time: "10 min per form",
      link: "/criteria/3.3.2",
    },
    {
      title: "Fix Heading Hierarchy",
      impact: "Affects screen reader navigation",
      time: "20-30 min",
      link: "/criteria/2.4.6",
    },
    {
      title: "Add Skip Links",
      impact: "Improves keyboard navigation",
      time: "10 min",
      link: "/criteria/2.4.1",
    },
  ]

  // Create HowTo structured data from steps
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make a Website Accessible - Complete Step-by-Step Guide",
    description:
      "Complete step-by-step guide to making your website accessible and WCAG 2.2 compliant. Follow these 8 actionable steps to improve accessibility for all users.",
    url: "https://thewcag.com/how-to-make-website-accessible",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/logo.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    totalTime: "PT20H", // Estimated 20 hours total
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
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
          name: "How to Make Website Accessible",
          item: "https://thewcag.com/how-to-make-website-accessible",
        },
      ],
    },
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: step.number,
      name: step.title,
      text: `${step.description}. ${step.actions.join(". ")}`,
      url: `https://thewcag.com/how-to-make-website-accessible#step-${step.number}`,
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
        name: "Screen Reader",
      },
      {
        "@type": "HowToTool",
        name: "WCAG 2.2 Checklist",
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
            <Breadcrumb items={[{ label: "How to Make Website Accessible", href: "/how-to-make-website-accessible" }]} />
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">How to Make a Website Accessible</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                A comprehensive, step-by-step guide to making your website accessible and WCAG 2.2 compliant. Follow
                these actionable steps to improve accessibility for all users.
              </p>
            </div>

            {/* Quick Wins */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Quick Wins (Start Here)
                </CardTitle>
                <CardDescription>
                  These fixes have the highest impact and can be done quickly. Start with these if you're new to
                  accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickWins.map((win, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{win.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{win.impact}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {win.time}
                          </Badge>
                          <Link
                            href={win.link}
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            Learn more <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Step-by-Step Implementation Guide</h2>
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              {index < steps.length - 1 && (
                                <div className="w-0.5 h-16 bg-primary/20 my-2" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="text-sm">
                                  Step {step.number}
                                </Badge>
                                <Badge
                                  variant={step.priority === "Critical" ? "destructive" : "secondary"}
                                  className="text-xs"
                                >
                                  {step.priority} Priority
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {step.time}
                                </Badge>
                              </div>
                              <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                              <CardDescription className="text-base">{step.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            Actions to Take:
                          </h3>
                          <ul className="space-y-2">
                            {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {step.example && (
                          <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <Code className="h-4 w-4 text-primary" />
                              Code Example:
                            </h3>
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{step.example}</code>
                            </pre>
                          </div>
                        )}

                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Related Resources:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, toolIndex) => (
                              <Button key={toolIndex} asChild variant="outline" size="sm">
                                <Link href={tool.href}>{tool.name}</Link>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Tips */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Start small:</strong> Don't try to fix everything at once.
                      Focus on one area at a time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Test as you go:</strong> Test each change before moving to
                      the next step.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Involve users:</strong> Get feedback from people with
                      disabilities throughout the process.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Document changes:</strong> Keep track of what you've fixed
                      and what still needs work.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Make it part of your workflow:</strong> Include
                      accessibility checks in your development process, not as an afterthought.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Your Accessibility Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/best-practices">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Best Practices</div>
                        <div className="text-xs text-muted-foreground">Accessibility best practices guide</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Complete compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <Search className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">Comprehensive testing methods</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Tools</div>
                        <div className="text-xs text-muted-foreground">Testing and development tools</div>
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

