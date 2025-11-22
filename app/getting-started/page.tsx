import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Code,
  Shield,
  Zap,
  Target,
  FileText,
  Search,
  TestTube,
  Lightbulb,
} from "lucide-react"

export default function GettingStartedPage() {
  const steps = [
    {
      number: 1,
      title: "Understand the Basics",
      description: "Learn what web accessibility means and why it matters",
      icon: BookOpen,
      details: [
        "Read about the four POUR principles (Perceivable, Operable, Understandable, Robust)",
        "Understand WCAG compliance levels (A, AA, AAA)",
        "Learn about assistive technologies (screen readers, keyboard navigation)",
        "Explore our glossary for accessibility terminology",
      ],
      links: [
        { href: "/overview", label: "WCAG Overview" },
        { href: "/principles", label: "POUR Principles" },
        { href: "/glossary", label: "Glossary" },
      ],
    },
    {
      number: 2,
      title: "Audit Your Current Site",
      description: "Identify existing accessibility issues",
      icon: Search,
      details: [
        "Run automated accessibility testing tools (axe DevTools, WAVE, Lighthouse)",
        "Test keyboard navigation (Tab, Enter, Escape keys)",
        "Test with a screen reader (NVDA, VoiceOver, or Narrator)",
        "Check color contrast ratios",
        "Review form labels and error messages",
      ],
      links: [
        { href: "/tools", label: "Testing Tools" },
        { href: "/compare", label: "Tool Comparison" },
      ],
    },
    {
      number: 3,
      title: "Fix Critical Issues First",
      description: "Address Level A violations before moving to AA",
      icon: Target,
      details: [
        "Add alt text to all informative images",
        "Ensure proper heading hierarchy (h1-h6)",
        "Fix keyboard navigation issues",
        "Add form labels to all inputs",
        "Ensure color is not the only means of conveying information",
        "Fix focus indicators",
      ],
      links: [
        { href: "/checklist", label: "WCAG Checklist" },
        { href: "/criteria/1.1.1", label: "Non-text Content" },
      ],
    },
    {
      number: 4,
      title: "Implement Best Practices",
      description: "Follow accessibility best practices in your code",
      icon: Code,
      details: [
        "Use semantic HTML elements (<nav>, <main>, <article>, etc.)",
        "Ensure proper ARIA labels when needed",
        "Maintain logical focus order",
        "Provide skip links for navigation",
        "Ensure sufficient color contrast (4.5:1 for normal text)",
        "Make touch targets at least 44x44px",
      ],
      links: [
        { href: "/examples", label: "Code Examples" },
        { href: "/learn", label: "Learn More" },
      ],
    },
    {
      number: 5,
      title: "Test and Validate",
      description: "Verify your improvements work correctly",
      icon: CheckCircle2,
      details: [
        "Re-run automated tests to verify fixes",
        "Test with multiple screen readers",
        "Test on different devices (desktop, mobile, tablet)",
        "Get feedback from users with disabilities",
        "Validate HTML and ARIA usage",
      ],
      links: [
        { href: "/tools", label: "Testing Tools" },
        { href: "/checklist", label: "Checklist" },
      ],
    },
    {
      number: 6,
      title: "Maintain Accessibility",
      description: "Keep accessibility in mind for all future updates",
      icon: Shield,
      details: [
        "Include accessibility in your development workflow",
        "Train your team on accessibility best practices",
        "Conduct regular accessibility audits",
        "Monitor for new issues when adding content",
        "Stay updated with WCAG guidelines",
      ],
      links: [
        { href: "/compliance", label: "Compliance Info" },
        { href: "/faq", label: "FAQ" },
      ],
    },
  ]

  const quickWins = [
    {
      title: "Add Alt Text to Images",
      impact: "High",
      time: "5 minutes",
      link: "/criteria/1.1.1",
    },
    {
      title: "Improve Color Contrast",
      impact: "High",
      time: "15 minutes",
      link: "/criteria/1.4.3",
    },
    {
      title: "Add Form Labels",
      impact: "High",
      time: "10 minutes",
      link: "/criteria/3.3.2",
    },
    {
      title: "Fix Heading Hierarchy",
      impact: "Medium",
      time: "20 minutes",
      link: "/criteria/2.4.6",
    },
    {
      title: "Add Skip Links",
      impact: "Medium",
      time: "10 minutes",
      link: "/criteria/2.4.1",
    },
    {
      title: "Ensure Keyboard Navigation",
      impact: "High",
      time: "30 minutes",
      link: "/criteria/2.1.1",
    },
  ]

  // Create HowTo structured data from steps
  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Getting Started with Web Accessibility",
    description:
      "A beginner-friendly 6-step guide to understanding and implementing web accessibility. Learn the basics, audit your site, fix issues, and test your improvements.",
    url: "https://thewcag.com/getting-started",
    dateModified: "2025-01-15",
    totalTime: "PT10H", // Estimated 10 hours total
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.number,
      name: step.title,
      text: `${step.description}. ${step.details.join(". ")}`,
      url: `https://thewcag.com/getting-started#step-${step.number}`,
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
        name: "WCAG Checklist",
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
          <div className="container py-8 md:py-12 max-w-5xl">
            <Breadcrumb items={[{ label: "Getting Started", href: "/getting-started" }]} />
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Getting Started with Web Accessibility</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground">
                A step-by-step guide to making your website accessible and WCAG compliant. Perfect for beginners,
                developers, and designers.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Start with Accessibility?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Web accessibility ensures that your website can be used by everyone, including people with
                  disabilities. It's not just the right thing to do—it's often required by law and makes good business
                  sense.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Legal Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Meet ADA, Section 508, and other accessibility requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Better SEO</h4>
                      <p className="text-sm text-muted-foreground">
                        Accessible websites often rank better in search engines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Larger Audience</h4>
                      <p className="text-sm text-muted-foreground">
                        Reach more users, including 15% of the world's population with disabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Better UX</h4>
                      <p className="text-sm text-muted-foreground">
                        Accessible design improves the experience for all users
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Steps */}
            <div className="space-y-8 mb-12">
              <h2 className="text-3xl font-bold">6 Steps to Accessibility</h2>
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.number} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-2xl">{step.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pl-16">
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {step.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t">
                          {step.links.map((link) => (
                            <Button key={link.href} asChild variant="outline" size="sm">
                              <Link href={link.href}>
                                {link.label}
                                <ArrowRight className="h-4 w-4 ml-1" />
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Wins */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Quick Wins - Start Here
                </CardTitle>
                <CardDescription>
                  These high-impact fixes can be implemented quickly and will significantly improve your site's
                  accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {quickWins.map((win, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg">{win.title}</CardTitle>
                          <Badge variant={win.impact === "High" ? "default" : "secondary"}>{win.impact}</Badge>
                        </div>
                        <CardDescription className="text-sm">Time: {win.time}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={win.link}>
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Interactive compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Tools</div>
                        <div className="text-xs text-muted-foreground">Accessibility testing resources</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/faq">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">FAQ</div>
                        <div className="text-xs text-muted-foreground">Common questions answered</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/learn">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Learn More</div>
                        <div className="text-xs text-muted-foreground">Educational resources</div>
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

