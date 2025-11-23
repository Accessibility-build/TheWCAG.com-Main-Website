import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  ExternalLink, 
  Palette, 
  Search, 
  FileText, 
  CheckCircle2,
  Zap,
  Eye,
  Shield,
  Code,
  MousePointer,
  Sparkles,
  Image
} from "lucide-react"

export default function ToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Tools",
    description:
      "Free accessibility tools and resources including color contrast checker, AI-powered audit helper, alt text generator, and more.",
    url: "https://thewcag.com/tools",
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
          name: "Accessibility Tools",
          item: "https://thewcag.com/tools",
        },
      ],
    },
  }

  const accessibilityBuildTools = [
    {
      icon: Sparkles,
      title: "AI Audit Helper",
      description: "AI-powered accessibility auditing tool that comprehensively scans your website against WCAG 2.2 guidelines. Uses advanced AI to identify accessibility issues, understand context, and provide intelligent, actionable recommendations tailored to your specific content.",
      url: "https://www.accessibility.build/tools/accessibility-audit-helper",
      criteria: ["Multiple"],
    },
    {
      icon: Image,
      title: "AI Alt Text Generator",
      description: "Intelligent alt text generator powered by AI that analyzes images with full context awareness. Generates descriptive, contextually appropriate alt text that meets WCAG 2.2 requirements. Considers surrounding content, page context, and image purpose to create meaningful descriptions that enhance accessibility.",
      url: "https://www.accessibility.build/tools/alt-text-generator",
      criteria: ["1.1.1", "1.4.5"],
    },
    {
      icon: Palette,
      title: "Color Contrast Analyzer",
      description: "Test color combinations against WCAG 2.2 contrast requirements. Get instant pass/fail results with detailed contrast ratio calculations for both normal and large text.",
      url: "https://www.accessibility.build/tools/contrast-checker",
      criteria: ["1.4.3", "1.4.6", "1.4.11"],
    },
    {
      icon: Palette,
      title: "Color Palette Generator",
      description: "Generate beautiful, accessible color palettes that meet WCAG standards. Perfect for creating inclusive designs with harmonious color schemes. All generated color combinations are tested against WCAG 2.2 contrast requirements, ensuring your designs are accessible to users with visual impairments.",
      url: "https://www.accessibility.build/tools/color-palette-generator",
      criteria: ["1.4.3", "1.4.6"],
    },
  ]

  const otherTools = [
    {
      category: "Browser Extensions",
      icon: Zap,
      tools: [
        {
          name: "axe DevTools",
          description: "Comprehensive accessibility testing extension for Chrome, Edge, and Firefox",
          url: "https://www.deque.com/axe/devtools/",
        },
        {
          name: "WAVE",
          description: "Visual feedback about accessibility issues with detailed explanations",
          url: "https://wave.webaim.org/extension/",
        },
        {
          name: "Lighthouse",
          description: "Built into Chrome DevTools for automated accessibility audits",
          url: "https://developer.chrome.com/docs/lighthouse/accessibility/",
        },
        {
          name: "Accessibility Insights",
          description: "Microsoft's free tool for finding and fixing accessibility issues",
          url: "https://accessibilityinsights.io/",
        },
      ],
    },
    {
      category: "Online Testing Tools",
      icon: Shield,
      tools: [
        {
          name: "WAVE Web Accessibility Evaluator",
          description: "Free web accessibility evaluation tool with visual feedback",
          url: "https://wave.webaim.org/",
        },
        {
          name: "AChecker",
          description: "Open-source web accessibility checker supporting WCAG 2.0, 2.1, and 2.2",
          url: "https://achecker.ca/",
        },
        {
          name: "SortSite",
          description: "Website crawler that checks accessibility, WCAG compliance, and more",
          url: "https://www.powermapper.com/products/sortsite/",
        },
        {
          name: "Tenon.io",
          description: "API-based accessibility testing with detailed WCAG compliance reports",
          url: "https://tenon.io/",
        },
      ],
    },
    {
      category: "Screen Readers",
      icon: Eye,
      tools: [
        {
          name: "NVDA (Windows)",
          description: "Free, open-source screen reader for Windows",
          url: "https://www.nvaccess.org/",
        },
        {
          name: "JAWS (Windows)",
          description: "Professional screen reader software for Windows",
          url: "https://www.freedomscientific.com/products/software/jaws/",
        },
        {
          name: "VoiceOver (Mac/iOS)",
          description: "Built-in Apple accessibility tool for macOS and iOS",
          url: "https://www.apple.com/accessibility/vision/",
        },
        {
          name: "TalkBack (Android)",
          description: "Built-in Android screen reader",
          url: "https://support.google.com/accessibility/android/answer/6283677",
        },
      ],
    },
    {
      category: "Development Tools",
      icon: Code,
      tools: [
        {
          name: "Pa11y",
          description: "Command-line interface for running accessibility tests",
          url: "https://pa11y.org/",
        },
        {
          name: "axe-core",
          description: "Open-source JavaScript library for automated accessibility testing",
          url: "https://github.com/dequelabs/axe-core",
        },
        {
          name: "Lighthouse CI",
          description: "Continuous integration for running Lighthouse audits",
          url: "https://github.com/GoogleChrome/lighthouse-ci",
        },
        {
          name: "Accessibility Testing Library",
          description: "Testing library for React, Vue, and Angular components",
          url: "https://github.com/testing-library/jest-dom",
        },
      ],
    },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Accessibility Tools</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Professional tools and resources to help you test, validate, and improve web accessibility compliance
              </p>
            </div>

            {/* Our Tool */}
            <section className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Tools</h2>
                <Badge variant="outline" className="text-sm">Built by TheWCAG</Badge>
              </div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Color Contrast Checker
                  </CardTitle>
                  <CardDescription>
                    Test color combinations for WCAG 2.2 compliance with real-time contrast ratio calculations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">1.4.3</Badge>
                      <Badge variant="outline">1.4.6</Badge>
                      <Badge variant="outline">1.4.11</Badge>
                    </div>
                    <Button asChild>
                      <Link href="/tools/contrast-checker">
                        Use Tool
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility.build Tools */}
            <section className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Tools from Accessibility.build</h2>
                <p className="text-muted-foreground">
                  Professional accessibility testing tools from{" "}
                  <a 
                    href="https://www.accessibility.build" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    accessibility.build
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {accessibilityBuildTools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <Card key={tool.title} className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-2">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="mb-2">{tool.title}</CardTitle>
                            <CardDescription className="leading-relaxed">{tool.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 flex-wrap">
                            {tool.criteria.map((criterion) => (
                              <Badge key={criterion} variant="outline" className="text-xs">
                                {criterion}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={tool.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1"
                            >
                              Visit
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Other External Tools */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Other Recommended Tools</h2>
              <div className="space-y-6">
                {otherTools.map((category) => {
                  const CategoryIcon = category.icon
                  return (
                    <Card key={category.category}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CategoryIcon className="h-5 w-5 text-primary" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.tools.map((tool) => (
                            <div
                              key={tool.name}
                              className="flex items-start justify-between gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex-1">
                                <h3 className="font-semibold mb-1">{tool.name}</h3>
                                <p className="text-sm text-muted-foreground">{tool.description}</p>
                              </div>
                              <Button variant="ghost" size="sm" asChild className="shrink-0">
                                <a 
                                  href={tool.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1"
                                >
                                  Visit
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
