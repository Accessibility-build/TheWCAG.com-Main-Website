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
  AlertCircle,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function WCAG22Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 2.2 - Current Web Content Accessibility Guidelines",
    description:
      "WCAG 2.2 is the current version, published in October 2023, adding 9 new success criteria and removing 1 deprecated criterion.",
    url: "https://thewcag.com/wcag-2-2",
    datePublished: "2023-10-05",
  }

  const newCriteria = [
    { id: "2.4.11", title: "Focus Not Obscured (Minimum)", level: "AA", focus: "Keyboard" },
    { id: "2.4.12", title: "Focus Not Obscured (Enhanced)", level: "AAA", focus: "Keyboard" },
    { id: "2.4.13", title: "Focus Appearance", level: "AAA", focus: "Keyboard" },
    { id: "2.5.7", title: "Dragging Movements", level: "AA", focus: "Mobile" },
    { id: "2.5.8", title: "Target Size (Minimum)", level: "AA", focus: "Mobile" },
    { id: "3.2.6", title: "Consistent Help", level: "A", focus: "Cognitive" },
    { id: "3.3.7", title: "Redundant Entry", level: "A", focus: "Forms" },
    { id: "3.3.8", title: "Accessible Authentication (Minimum)", level: "AA", focus: "Cognitive" },
    { id: "3.3.9", title: "Accessible Authentication (Enhanced)", level: "AAA", focus: "Cognitive" },
  ]

  const improvements = [
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Enhanced requirements for touch targets, dragging, and mobile interactions",
      criteria: ["2.5.7", "2.5.8"],
    },
    {
      icon: Eye,
      title: "Low Vision",
      description: "Better focus visibility requirements to help users with low vision",
      criteria: ["2.4.11", "2.4.12"],
    },
    {
      icon: Brain,
      title: "Cognitive Disabilities",
      description: "New criteria for accessible authentication and consistent help",
      criteria: ["3.2.6", "3.3.8", "3.3.9"],
    },
    {
      icon: FileText,
      title: "Forms & Input",
      description: "Improved form accessibility with redundant entry prevention",
      criteria: ["3.3.7"],
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">WCAG 2.2</h1>
                <Badge className="bg-primary text-primary-foreground text-sm">Current</Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                Published in October 2023, WCAG 2.2 is the current recommended version. It adds 9 new success criteria
                and removes 1 deprecated criterion (4.1.1 Parsing), focusing on mobile accessibility, cognitive
                disabilities, and low vision improvements. The 9 new criteria are: 2.4.11, 2.4.12, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8, and 3.3.9.
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
                        <p className="text-sm text-muted-foreground">October 5, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">New Success Criteria</p>
                        <p className="text-sm text-muted-foreground">9 new criteria added</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Deprecated</p>
                        <p className="text-sm text-muted-foreground">1 criterion removed (4.1.1 Parsing)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Total Criteria</p>
                        <p className="text-sm text-muted-foreground">87 criteria (78 from 2.1 + 9 new - 1 deprecated)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Status</p>
                        <p className="text-sm text-muted-foreground">Current recommended version</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GitCompare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Backward Compatible</p>
                        <p className="text-sm text-muted-foreground">Includes all WCAG 2.1 criteria</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Improvements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {improvements.map((improvement, index) => {
                  const Icon = improvement.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-lg">{improvement.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{improvement.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {improvement.criteria.map((crit) => (
                            <Badge key={crit} variant="outline" className="text-xs">
                              {crit}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9 New Success Criteria</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {newCriteria.map((criterion) => (
                      <Link
                        key={criterion.id}
                        href={`/criteria/${criterion.id}`}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border hover:bg-muted transition-colors"
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
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <Card className="mb-12 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Deprecated: SC 4.1.1 (Parsing)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Success Criterion 4.1.1 (Parsing) was deprecated in WCAG 2.2 because modern HTML parsers handle
                  well-formed markup automatically. This criterion is no longer required for compliance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-1">
                      <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.1</div>
                        <div className="text-xs text-muted-foreground">Previous version (2018)</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-2-vs-2-1">
                      <GitCompare className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2 vs 2.1</div>
                        <div className="text-xs text-muted-foreground">Detailed comparison</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-3-0">
                      <Info className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 3.0</div>
                        <div className="text-xs text-muted-foreground">Future version (in development)</div>
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

