import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ExternalLink,
  Palette,
  FileText,
  Zap,
  Eye,
  Shield,
  Code,
  Sparkles,
  Image as ImageIcon,
  Edit,
  Search,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Testing Tools - Color Contrast, Validators & Checkers | TheWCAG",
  description:
    "Free accessibility testing tools including color contrast checker, WCAG validator, screen reader simulators, and more. Test your website for WCAG compliance with our comprehensive tool collection.",
  openGraph: {
    title: "Accessibility Testing Tools Collection",
    description:
      "Essential free tools for accessibility testing: color contrast checker, validators, screen readers, and browser extensions for WCAG compliance.",
    url: "https://thewcag.com/tools",
    type: "website",
  },
}

export default function ToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Tools",
    description:
      "Free accessibility tools and resources including color contrast checker, AI-powered audit helper, alt text generator, and more.",
    url: "https://thewcag.com/tools",
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
      icon: ImageIcon,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Tools", href: "/tools" },
              ]}
            />
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Accessibility Tools</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Professional tools and resources to help you test, validate, and improve web accessibility compliance. Use these tools throughout your development process to catch and fix issues early.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                Remember: automated tools can catch many issues, but manual testing with assistive technologies and real users is essential for true accessibility.
              </p>
            </div>

            {/* Our Tool */}
            <section className="mb-8 sm:mb-12">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Tools</h2>
                  <Badge variant="outline" className="text-sm">Built by TheWCAG</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Free accessibility tools built specifically to help you meet WCAG 2.2 requirements.
                </p>
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

            {/* Free Conversion Tools */}
            <section className="mb-8">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Free Conversion Tools</CardTitle>
                      <CardDescription>
                        40+ free online tools for converting images, PDFs, documents, and data formats
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Image Converter</Badge>
                    <Badge variant="secondary">PDF Tools</Badge>
                    <Badge variant="secondary">JSON Formatter</Badge>
                    <Badge variant="secondary">QR Generator</Badge>
                    <Badge variant="secondary">Hash Generator</Badge>
                    <Badge variant="secondary">And more...</Badge>
                  </div>
                  <Button asChild>
                    <Link href="/tools/convert">
                      Browse All Conversion Tools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Free Editing Tools */}
            <section className="mb-8">
              <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200 dark:border-green-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Edit className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Free Editing Tools</CardTitle>
                      <CardDescription>
                        Professional image and document editing tools for backgrounds, watermarks, restoration, and more
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Background Remover</Badge>
                    <Badge variant="secondary">Watermark Remover</Badge>
                    <Badge variant="secondary">Image Upscaler</Badge>
                    <Badge variant="secondary">Photo Restoration</Badge>
                    <Badge variant="secondary">PDF Editor</Badge>
                    <Badge variant="secondary">And more...</Badge>
                  </div>
                  <Button asChild>
                    <Link href="/tools/edit">
                      Browse All Editing Tools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Free SEO Tools */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Search className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Free SEO Tools</CardTitle>
                      <CardDescription>
                        Generate sitemaps, robots.txt, meta tags, schema markup, and Open Graph tags for better search rankings
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Sitemap Generator</Badge>
                    <Badge variant="secondary">Robots.txt Generator</Badge>
                    <Badge variant="secondary">Meta Tag Generator</Badge>
                    <Badge variant="secondary">Schema Markup</Badge>
                    <Badge variant="secondary">Open Graph Tags</Badge>
                  </div>
                  <Button asChild>
                    <Link href="/tools/seo">
                      Browse All SEO Tools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility.build Tools */}
            <section className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Tools from Accessibility.build</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
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
                  . These AI-powered tools provide comprehensive analysis and intelligent recommendations.
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  These tools use advanced AI to understand context and provide actionable, tailored recommendations for your specific content.
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
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Other Recommended Tools</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Explore these additional tools organized by category. Each tool serves different purposes in the accessibility testing and development workflow.
                </p>
              </div>
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

            {/* Related Content */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Testing Guide</CardTitle>
                    <CardDescription>Learn how to test your website for accessibility</CardDescription>
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
                    <CardTitle className="text-lg">Checklist</CardTitle>
                    <CardDescription>Track your WCAG compliance progress</CardDescription>
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
                    <CardTitle className="text-lg">Compare Tools</CardTitle>
                    <CardDescription>Compare different accessibility testing tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/compare">
                        Compare
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
