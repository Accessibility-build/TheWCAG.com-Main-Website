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
  Shield,
  ArrowRight,
  BookOpen,
  Info,
  FileText,
  GitCompare,
  Sparkles,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function WCAG20Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 2.0 - Web Content Accessibility Guidelines 2.0",
    description:
      "WCAG 2.0 was published in December 2008, introducing the POUR principles and testable success criteria. It became ISO/IEC 40500:2012.",
    url: "https://thewcag.com/wcag-2-0",
    datePublished: "2008-12-11",
  }

  const keyFeatures = [
    {
      title: "POUR Principles",
      description: "Introduced the four foundational principles: Perceivable, Operable, Understandable, and Robust",
      icon: Sparkles,
    },
    {
      title: "Testable Success Criteria",
      description: "Each criterion is objectively testable, making compliance verification clearer",
      icon: CheckCircle2,
    },
    {
      title: "Technology Agnostic",
      description: "Guidelines apply to any web technology, not just HTML",
      icon: Shield,
    },
    {
      title: "Three Conformance Levels",
      description: "Level A (minimum), Level AA (recommended), and Level AAA (enhanced)",
      icon: FileText,
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">WCAG 2.0</h1>
                <Badge variant="outline" className="text-sm">
                  ISO Standard
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Published in December 2008, WCAG 2.0 was a major overhaul that introduced the POUR principles and
                testable success criteria. It became ISO/IEC 40500:2012 in 2012.
              </p>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Published</p>
                        <p className="text-sm text-muted-foreground">December 11, 2008</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">ISO Standard</p>
                        <p className="text-sm text-muted-foreground">ISO/IEC 40500:2012 (2012)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Success Criteria</p>
                        <p className="text-sm text-muted-foreground">61 criteria (12 Level A, 20 Level AA, 29 Level AAA)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Status</p>
                        <p className="text-sm text-muted-foreground">Superseded by WCAG 2.1 (2018)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Still Valid</p>
                        <p className="text-sm text-muted-foreground">WCAG 2.0 remains valid for compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitCompare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Backward Compatible</p>
                        <p className="text-sm text-muted-foreground">WCAG 2.1 and 2.2 build on 2.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Major Improvements Over WCAG 1.0</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>ISO/IEC 40500:2012</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In 2012, WCAG 2.0 was adopted as an ISO/IEC international standard (ISO/IEC 40500:2012). This gave it
                  official recognition beyond the web development community and made it easier for governments and
                  organizations worldwide to reference in their policies and laws.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> While WCAG 2.0 is still valid, WCAG 2.2 (or 2.1) is
                    the current recommended version as it includes additional success criteria for mobile accessibility
                    and modern web technologies.
                  </p>
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
                    <Link href="/wcag-1-0">
                      <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 1.0</div>
                        <div className="text-xs text-muted-foreground">Previous version (1999)</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-1">
                      <GitCompare className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.1</div>
                        <div className="text-xs text-muted-foreground">Next version (2018)</div>
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
                    <Link href="/overview">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Overview</div>
                        <div className="text-xs text-muted-foreground">Version history</div>
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

