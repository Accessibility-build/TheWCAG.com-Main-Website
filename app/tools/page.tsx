import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Palette, Eye, Focus, Ruler, Type, Zap } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      icon: Palette,
      title: "Color Contrast Checker",
      description: "Test color combinations for WCAG compliance with real-time contrast ratio calculations",
      href: "/tools/contrast-checker",
      criteria: ["1.4.3", "1.4.6", "1.4.11"],
    },
    {
      icon: Focus,
      title: "Focus Indicator Tester",
      description: "Evaluate focus visibility and measure contrast ratios of focus indicators",
      href: "/tools/focus-tester",
      criteria: ["2.4.7", "2.4.11", "2.4.13"],
    },
    {
      icon: Ruler,
      title: "Target Size Calculator",
      description: "Check if interactive elements meet minimum touch target size requirements",
      href: "/tools/target-size",
      criteria: ["2.5.5", "2.5.8"],
    },
    {
      icon: Type,
      title: "Text Spacing Tester",
      description: "Test text spacing adjustments for readability compliance",
      href: "/tools/text-spacing",
      criteria: ["1.4.12"],
    },
    {
      icon: Eye,
      title: "Heading Structure Analyzer",
      description: "Validate heading hierarchy and document structure",
      href: "/tools/heading-analyzer",
      criteria: ["1.3.1", "2.4.6"],
    },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Tools</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Interactive tools to help you test and validate accessibility compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Link key={tool.href} href={tool.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-2">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="group-hover:text-primary">{tool.title}</CardTitle>
                            <CardDescription className="mt-2 leading-relaxed">{tool.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 flex-wrap">
                            {tool.criteria.map((criterion) => (
                              <span key={criterion} className="text-xs bg-muted px-2 py-1 rounded">
                                {criterion}
                              </span>
                            ))}
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* External Tools */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Recommended External Tools</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Zap className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>Browser Extensions</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          <ul className="space-y-2 mt-3">
                            <li>
                              <strong>axe DevTools:</strong> Comprehensive accessibility testing in your browser
                            </li>
                            <li>
                              <strong>WAVE:</strong> Visual feedback about accessibility issues
                            </li>
                            <li>
                              <strong>Lighthouse:</strong> Built into Chrome DevTools for automated audits
                            </li>
                          </ul>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Eye className="h-6 w-6 text-secondary shrink-0 mt-1" aria-hidden="true" />
                      <div className="flex-1">
                        <CardTitle>Screen Readers</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          <ul className="space-y-2 mt-3">
                            <li>
                              <strong>NVDA (Windows):</strong> Free, open-source screen reader
                            </li>
                            <li>
                              <strong>JAWS (Windows):</strong> Professional screen reader software
                            </li>
                            <li>
                              <strong>VoiceOver (Mac/iOS):</strong> Built-in Apple accessibility tool
                            </li>
                            <li>
                              <strong>TalkBack (Android):</strong> Built-in Android screen reader
                            </li>
                          </ul>
                        </CardDescription>
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
