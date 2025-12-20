import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Accessibility } from "lucide-react"
import type { Metadata } from "next"
import { getToolsByCategory } from "@/lib/tools/constants"

export const metadata: Metadata = {
  title: "Free Accessibility Testing Tools - WCAG Compliance Checker | TheWCAG",
  description:
    "Free accessibility testing tools: axe-core accessibility tester, WCAG compliance checker, and more. Test your website for accessibility issues and improve WCAG compliance.",
  keywords: [
    "accessibility tools",
    "accessibility tester",
    "WCAG compliance checker",
    "axe-core",
    "accessibility scanner",
    "a11y testing",
    "accessibility audit",
    "WCAG testing",
    "free accessibility tools",
  ],
  openGraph: {
    title: "Free Accessibility Testing Tools - WCAG Compliance Checker",
    description:
      "Test your website for accessibility issues using axe-core. Free WCAG compliance checker and accessibility testing tools.",
    url: "https://thewcag.com/tools/accessibility",
    type: "website",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free Accessibility Testing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Accessibility Testing Tools - WCAG Compliance Checker",
    description: "Test your website for accessibility issues using axe-core. Free WCAG compliance checker.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools/accessibility",
  },
}

export default function AccessibilityToolsPage() {
  const tools = getToolsByCategory("accessibility")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Tools",
    description: "Free accessibility testing tools for WCAG compliance",
    url: "https://thewcag.com/tools/accessibility",
  }

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
                { label: "Accessibility", href: "/tools/accessibility" },
              ]}
            />

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Accessibility className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Accessibility Tools</h1>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
                Test and improve your website's accessibility with our free WCAG compliance tools. 
                Use axe-core to identify accessibility issues and ensure your site meets WCAG 2.2 Level AA standards.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <Card key={tool.slug} className="flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg sm:text-xl">{tool.name}</CardTitle>
                      <Badge variant="secondary" className="shrink-0">Free</Badge>
                    </div>
                    <CardDescription className="text-sm">{tool.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-4">
                    {tool.features.length > 0 && (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                        {tool.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1" aria-hidden="true">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button asChild className="w-full min-h-[44px]">
                      <Link href={`/tools/accessibility/${tool.slug}`}>
                        Use Tool
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {tools.length === 0 && (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No accessibility tools available yet.</p>
                </CardContent>
              </Card>
            )}

            <div className="mt-12 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">About Accessibility Testing</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>
                    Accessibility testing ensures your website is usable by everyone, including people with disabilities. 
                    Our tools use axe-core, the industry-standard accessibility testing engine, to identify WCAG compliance issues.
                  </p>
                  <p>
                    Regular accessibility testing helps you:
                  </p>
                  <ul>
                    <li>Meet WCAG 2.2 Level AA compliance requirements</li>
                    <li>Improve user experience for all visitors</li>
                    <li>Reduce legal risk from accessibility lawsuits</li>
                    <li>Expand your audience reach</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

