import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Info,
  FileText,
  GitCompare,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function WCAG10Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 1.0 - The First Web Accessibility Guidelines",
    description:
      "WCAG 1.0 was the first version of Web Content Accessibility Guidelines, published in May 1999 by the W3C.",
    url: "https://thewcag.com/wcag-1-0",
    datePublished: "1999-05-05",
  }

  const guidelines = [
    {
      number: 1,
      title: "Provide equivalent alternatives to auditory and visual content",
      description: "Ensure that content conveyed through images, audio, or video has text alternatives.",
    },
    {
      number: 2,
      title: "Don't rely on color alone",
      description: "Ensure that information conveyed through color is also available through other means.",
    },
    {
      number: 3,
      title: "Use markup and style sheets and do so properly",
      description: "Use HTML and CSS correctly to separate structure from presentation.",
    },
    {
      number: 4,
      title: "Clarify natural language usage",
      description: "Identify changes in the natural language of text.",
    },
    {
      number: 5,
      title: "Create tables that transform gracefully",
      description: "Ensure tables are properly structured and have headers.",
    },
    {
      number: 6,
      title: "Ensure that pages featuring new technologies transform gracefully",
      description: "Ensure pages work even when newer technologies are disabled or not supported.",
    },
    {
      number: 7,
      title: "Ensure user control of time-sensitive content changes",
      description: "Allow users to control blinking, moving, or auto-updating content.",
    },
    {
      number: 8,
      title: "Ensure direct accessibility of embedded user interfaces",
      description: "Make embedded interfaces accessible or provide accessible alternatives.",
    },
    {
      number: 9,
      title: "Design for device-independence",
      description: "Ensure functionality is accessible via keyboard and other input methods.",
    },
    {
      number: 10,
      title: "Use interim solutions",
      description: "Use accessibility features that were available at the time.",
    },
    {
      number: 11,
      title: "Use W3C technologies and guidelines",
      description: "Follow W3C specifications and accessibility guidelines.",
    },
    {
      number: 12,
      title: "Provide context and orientation information",
      description: "Help users understand where they are and navigate effectively.",
    },
    {
      number: 13,
      title: "Provide clear navigation mechanisms",
      description: "Ensure clear and consistent navigation throughout the site.",
    },
    {
      number: 14,
      title: "Ensure that documents are clear and simple",
      description: "Write content that is clear and easy to understand.",
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">WCAG 1.0</h1>
                <Badge variant="outline" className="text-sm">
                  Legacy
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                The first version of Web Content Accessibility Guidelines, published in May 1999. This version
                established the foundation for web accessibility standards.
              </p>
            </div>

            <Card className="mb-12 bg-orange-500/5 border-orange-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Legacy Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">WCAG 1.0 is now obsolete.</strong> It was superseded by WCAG 2.0
                  in December 2008. For current compliance, use WCAG 2.2 (or 2.1).
                </p>
                <p className="text-sm text-muted-foreground">
                  This page is provided for historical reference. Modern websites should follow WCAG 2.2 guidelines.
                </p>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Publication Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Published</p>
                        <p className="text-sm text-muted-foreground">May 5, 1999</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Guidelines</p>
                        <p className="text-sm text-muted-foreground">14 guidelines</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Status</p>
                        <p className="text-sm text-muted-foreground">Superseded by WCAG 2.0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Historical Significance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>First international web accessibility standard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Established foundation for modern accessibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Influenced accessibility laws worldwide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Paved the way for WCAG 2.0 and beyond</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The 14 Guidelines</h2>
              <p className="text-muted-foreground mb-6">
                WCAG 1.0 organized accessibility requirements into 14 guidelines, each with multiple checkpoints:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {guidelines.map((guideline) => (
                  <Card key={guideline.number} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-primary font-bold">Guideline {guideline.number}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold mb-2">{guideline.title}</p>
                      <p className="text-sm text-muted-foreground">{guideline.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Why WCAG 2.0 Replaced 1.0</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  WCAG 1.0 had several limitations that led to the development of WCAG 2.0:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Technology-specific:</strong> Focused heavily on HTML, making
                      it difficult to apply to newer technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Less testable:</strong> Guidelines were more subjective and
                      harder to test objectively
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">Limited scope:</strong> Didn't address emerging technologies
                      and mobile devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">No clear structure:</strong> Lacked the POUR principles that
                      make WCAG 2.x easier to understand
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-0">
                      <GitCompare className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.0</div>
                        <div className="text-xs text-muted-foreground">Next version (2008)</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/overview">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Overview</div>
                        <div className="text-xs text-muted-foreground">Version history</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-2-vs-2-1">
                      <Info className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2 vs 2.1</div>
                        <div className="text-xs text-muted-foreground">Current version comparison</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Begin with WCAG 2.2</div>
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

