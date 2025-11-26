import type { Metadata } from "next"
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
  Smartphone,
  Eye,
  Brain,
  ArrowRight,
  BookOpen,
  Info,
  FileText,
  GitCompare,
  Sparkles,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "WCAG 2.1 Guidelines - 17 New Mobile & Low Vision Criteria (2018) | TheWCAG",
  description:
    "Complete guide to WCAG 2.1, published June 2018. Learn about 17 new success criteria for mobile accessibility, low vision users, and cognitive disabilities. Comprehensive coverage of all 78 criteria.",
  keywords: [
    "WCAG 2.1",
    "WCAG 2.1 guidelines",
    "mobile accessibility",
    "low vision accessibility",
    "WCAG 2.1 criteria",
    "touch target size",
    "pointer gestures",
  ],
  openGraph: {
    title: "WCAG 2.1 - 17 New Accessibility Criteria for Mobile & Low Vision",
    description:
      "Comprehensive guide to WCAG 2.1 with 17 new success criteria focusing on mobile accessibility, low vision, and cognitive disabilities.",
    url: "https://thewcag.com/wcag-2-1",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "WCAG 2.1 Guidelines",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/wcag-2-1",
  },
}

export default function WCAG21Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 2.1 - Web Content Accessibility Guidelines 2.1",
    description:
      "WCAG 2.1 was published in June 2018, adding 17 new success criteria focusing on mobile accessibility, low vision, and cognitive disabilities.",
    url: "https://thewcag.com/wcag-2-1",
    datePublished: "2018-06-05",
  }

  const newCriteria = [
    { id: "1.3.4", title: "Orientation", level: "AA", focus: "Mobile" },
    { id: "1.3.5", title: "Identify Input Purpose", level: "AA", focus: "Forms" },
    { id: "1.3.6", title: "Identify Purpose", level: "AAA", focus: "Cognitive" },
    { id: "1.4.10", title: "Reflow", level: "AA", focus: "Mobile" },
    { id: "1.4.11", title: "Non-text Contrast", level: "AA", focus: "Low Vision" },
    { id: "1.4.12", title: "Text Spacing", level: "AA", focus: "Low Vision" },
    { id: "1.4.13", title: "Content on Hover or Focus", level: "AA", focus: "Low Vision" },
    { id: "2.1.4", title: "Character Key Shortcuts", level: "A", focus: "Keyboard" },
    { id: "2.2.6", title: "Timeouts", level: "AAA", focus: "Cognitive" },
    { id: "2.3.3", title: "Animation from Interactions", level: "AAA", focus: "Motion" },
    { id: "2.5.1", title: "Pointer Gestures", level: "A", focus: "Mobile" },
    { id: "2.5.2", title: "Pointer Cancellation", level: "A", focus: "Mobile" },
    { id: "2.5.3", title: "Label in Name", level: "A", focus: "Screen Readers" },
    { id: "2.5.4", title: "Motion Actuation", level: "A", focus: "Mobile" },
    { id: "2.5.5", title: "Target Size", level: "AAA", focus: "Mobile" },
    { id: "4.1.3", title: "Status Messages", level: "AA", focus: "Screen Readers" },
  ]

  const focusAreas = [
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "7 new criteria addressing touch targets, gestures, and mobile interactions",
      count: 7,
    },
    {
      icon: Eye,
      title: "Low Vision",
      description: "4 new criteria for users with low vision, including text spacing and contrast",
      count: 4,
    },
    {
      icon: Brain,
      title: "Cognitive Disabilities",
      description: "3 new criteria helping users with cognitive and learning disabilities",
      count: 3,
    },
    {
      icon: CheckCircle2,
      title: "Other Improvements",
      description: "3 additional criteria for keyboard navigation and screen readers",
      count: 3,
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
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">WCAG 2.1</h1>
                <Badge variant="outline" className="text-sm">
                  17 New Criteria
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Published in June 2018, WCAG 2.1 added 17 new success criteria focusing on mobile accessibility, people
                with low vision, and people with cognitive and learning disabilities.
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
                        <p className="text-sm text-muted-foreground">June 5, 2018</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">New Success Criteria</p>
                        <p className="text-sm text-muted-foreground">17 new criteria added</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Total Criteria</p>
                        <p className="text-sm text-muted-foreground">78 criteria (61 from 2.0 + 17 new)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Status</p>
                        <p className="text-sm text-muted-foreground">Superseded by WCAG 2.2 (2023)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Still Valid</p>
                        <p className="text-sm text-muted-foreground">WCAG 2.1 remains valid for compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitCompare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Backward Compatible</p>
                        <p className="text-sm text-muted-foreground">Includes all WCAG 2.0 criteria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-lg">{area.title}</CardTitle>
                          <Badge variant="outline" className="ml-auto">
                            {area.count}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">17 New Success Criteria</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {newCriteria.map((criterion) => (
                      <div
                        key={criterion.id}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border"
                      >
                        <div>
                          <p className="font-semibold text-sm">{criterion.id}</p>
                          <p className="text-xs text-muted-foreground">{criterion.title}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge
                            variant={criterion.level === "AAA" ? "secondary" : "default"}
                            className="text-xs"
                          >
                            {criterion.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{criterion.focus}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-0">
                      <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.0</div>
                        <div className="text-xs text-muted-foreground">Previous version (2008)</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-2-vs-2-1">
                      <GitCompare className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2 vs 2.1</div>
                        <div className="text-xs text-muted-foreground">Next version comparison</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-2">
                      <Info className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2</div>
                        <div className="text-xs text-muted-foreground">Current version (2023)</div>
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

