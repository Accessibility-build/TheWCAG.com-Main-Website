import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  BarChart3,
  Layers,
  BookOpen,
  GitCompare,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function WCAG30Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WCAG 3.0 - The Future of Web Accessibility Guidelines",
    description:
      "Comprehensive guide to WCAG 3.0 (W3C Accessibility Guidelines), the next generation of accessibility standards with outcomes-based approach.",
    url: "https://thewcag.com/wcag-3-0",
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  }

  const keyDifferences = [
    {
      aspect: "Structure",
      wcag22: "Success Criteria (A, AA, AAA levels)",
      wcag30: "Outcomes (Bronze, Silver, Gold levels)",
      icon: Layers,
    },
    {
      aspect: "Testing",
      wcag22: "Pass/Fail binary testing",
      wcag30: "Scoring system (0-100%)",
      icon: BarChart3,
    },
    {
      aspect: "Approach",
      wcag22: "Rule-based, technical requirements",
      wcag30: "Outcomes-based, user-focused",
      icon: Target,
    },
    {
      aspect: "Scope",
      wcag22: "Web content primarily",
      wcag30: "Web, mobile apps, PDFs, emerging tech",
      icon: Rocket,
    },
    {
      aspect: "Guidance",
      wcag22: "Fixed success criteria",
      wcag30: "Adaptive guidance with testing methods",
      icon: BookOpen,
    },
  ]

  const outcomes = [
    {
      name: "Text Alternatives",
      description: "All non-text content has text alternatives that serve the equivalent purpose",
      level: "Bronze",
    },
    {
      name: "Visual Contrast",
      description: "Text and interactive elements meet minimum contrast requirements",
      level: "Bronze",
    },
    {
      name: "Focus Visible",
      description: "Keyboard focus indicators are clearly visible",
      level: "Bronze",
    },
    {
      name: "Keyboard Accessible",
      description: "All functionality is available via keyboard",
      level: "Bronze",
    },
    {
      name: "Error Identification",
      description: "Errors are identified and described to users",
      level: "Silver",
    },
    {
      name: "Labels and Instructions",
      description: "Form inputs have clear labels and instructions",
      level: "Silver",
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">WCAG 3.0</h1>
                <Badge variant="secondary" className="text-sm">
                  In Development
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                WCAG 3.0 (also known as W3C Accessibility Guidelines) is the next generation of accessibility
                standards, currently in development. Learn about the new outcomes-based approach, scoring system, and
                how it will transform web accessibility.
              </p>
            </div>

            {/* Status Alert */}
            <Card className="mb-12 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Current Status: Working Draft
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">WCAG 3.0 is currently in active development</strong> by the W3C
                    Web Accessibility Initiative (WAI). It is not yet a W3C Recommendation and should not be used for
                    compliance purposes.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-foreground">Timeline:</strong> Expected to reach W3C Recommendation
                        status in 2025-2026 (subject to change)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-foreground">For Compliance:</strong> Continue using WCAG 2.2 (or 2.1)
                        until WCAG 3.0 is finalized
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-foreground">Stay Updated:</strong> Monitor W3C WAI for official
                        updates and changes
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* What is WCAG 3.0 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Info className="h-7 w-7 text-primary" />
                What is WCAG 3.0?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>W3C Accessibility Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      WCAG 3.0 represents a fundamental shift in how accessibility guidelines are structured and
                      measured. Instead of the binary pass/fail system in WCAG 2.x, WCAG 3.0 introduces an
                      outcomes-based approach with a scoring system that provides more nuanced accessibility
                      measurement.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Key Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Address emerging technologies (XR, voice interfaces, AI)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Provide more flexible testing methods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>Better support for mobile and native apps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>More granular accessibility measurement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Differences */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <GitCompare className="h-7 w-7 text-primary" />
                WCAG 3.0 vs WCAG 2.2: Key Differences
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2">
                          <th className="text-left p-3 font-semibold">Aspect</th>
                          <th className="text-left p-3 font-semibold">WCAG 2.2</th>
                          <th className="text-left p-3 font-semibold">WCAG 3.0</th>
                        </tr>
                      </thead>
                      <tbody>
                        {keyDifferences.map((diff, index) => {
                          const Icon = diff.icon
                          return (
                            <tr key={index} className="border-b hover:bg-muted/50">
                              <td className="p-3 font-medium">
                                <div className="flex items-center gap-2">
                                  <Icon className="h-4 w-4 text-primary" />
                                  {diff.aspect}
                                </div>
                              </td>
                              <td className="p-3 text-muted-foreground">{diff.wcag22}</td>
                              <td className="p-3 text-foreground font-medium">{diff.wcag30}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Outcomes-Based Approach */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Target className="h-7 w-7 text-primary" />
                Outcomes-Based Approach
              </h2>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>What Are Outcomes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Instead of success criteria, WCAG 3.0 uses <strong className="text-foreground">outcomes</strong>.
                    Outcomes describe what users should be able to do, rather than prescribing specific technical
                    requirements. Each outcome can be met through various methods, giving developers more flexibility.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Example:</strong> The "Text Alternatives" outcome can be met
                      through alt text, ARIA labels, captions, or other methods—as long as the user can access the
                      information.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                {outcomes.map((outcome, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{outcome.name}</CardTitle>
                        <Badge variant={outcome.level === "Bronze" ? "default" : "secondary"}>
                          {outcome.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{outcome.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Scoring System */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-7 w-7 text-primary" />
                Scoring System
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-amber-600">Bronze</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Minimum accessibility requirements. Equivalent to WCAG 2.x Level A compliance.
                    </p>
                    <div className="text-2xl font-bold text-foreground">Score: 0-50%</div>
                  </CardContent>
                </Card>
                <Card className="border-slate-500/20 bg-slate-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-slate-600">Silver</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Enhanced accessibility. Equivalent to WCAG 2.x Level AA compliance.
                    </p>
                    <div className="text-2xl font-bold text-foreground">Score: 51-80%</div>
                  </CardContent>
                </Card>
                <Card className="border-yellow-500/20 bg-yellow-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge className="bg-yellow-600">Gold</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Highest level of accessibility. Equivalent to WCAG 2.x Level AAA compliance.
                    </p>
                    <div className="text-2xl font-bold text-foreground">Score: 81-100%</div>
                  </CardContent>
                </Card>
              </div>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>How Scoring Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        Each outcome is scored based on how well it's implemented (0-100%)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        Scores are calculated using multiple testing methods (automated, manual, user testing)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        Overall conformance level is determined by the lowest-scoring critical outcome
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>
                        Provides more granular measurement than binary pass/fail
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* What Developers Should Know */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-7 w-7 text-primary" />
                What Developers Should Know
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Current Best Practice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Continue using WCAG 2.2 (or 2.1) for compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>WCAG 2.x will remain valid even after 3.0 is released</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Focus on user outcomes, not just technical compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Test with real users when possible</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Preparing for WCAG 3.0
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Stay informed about WCAG 3.0 developments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Think in terms of user outcomes, not just rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Implement multiple testing methods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Document your accessibility testing approach</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Timeline and Roadmap */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Development Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-0.5 h-16 bg-primary/30" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">2021-2023: Working Draft</h3>
                      <p className="text-sm text-muted-foreground">
                        Initial working drafts published, public feedback collected, major structural changes
                        implemented.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-0.5 h-16 bg-primary/30" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">2024-2025: Candidate Recommendation</h3>
                      <p className="text-sm text-muted-foreground">
                        Expected transition to Candidate Recommendation status. More stable specification, wider
                        implementation testing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/50" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">2025-2026: W3C Recommendation (Expected)</h3>
                      <p className="text-sm text-muted-foreground">
                        Final W3C Recommendation status. Official release for compliance use. Timeline subject to change
                        based on development progress.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-2-2-vs-2-1">
                      <GitCompare className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2 vs 2.1</div>
                        <div className="text-xs text-muted-foreground">Current version comparison</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 2.2 Checklist</div>
                        <div className="text-xs text-muted-foreground">Current compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Beginner's guide to accessibility</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements</div>
                      </div>
                    </Link>
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Official Resources:</strong> For the latest WCAG 3.0
                    developments, visit the{" "}
                    <a
                      href="https://www.w3.org/WAI/GL/WCAG3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      W3C WAI WCAG 3.0 Working Group page
                    </a>
                    .
                  </p>
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

