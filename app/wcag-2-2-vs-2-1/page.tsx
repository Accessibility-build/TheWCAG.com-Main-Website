import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GitCompare,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Info,
  Sparkles,
  BookOpen,
  Rocket,
} from "lucide-react"

export default function WCAGComparisonPage() {
  const newCriteria = [
    {
      id: "2.4.11",
      title: "Focus Not Obscured (Minimum)",
      level: "AA",
      description:
        "When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.",
      category: "Navigation",
    },
    {
      id: "2.4.12",
      title: "Focus Not Obscured (Enhanced)",
      level: "AAA",
      description:
        "When a user interface component receives keyboard focus, no part of the component is hidden by author-created content.",
      category: "Navigation",
    },
    {
      id: "2.4.13",
      title: "Focus Appearance",
      level: "AAA",
      description:
        "When the keyboard focus indicator is visible, an area of the focus indicator meets specific size and contrast requirements.",
      category: "Navigation",
    },
    {
      id: "2.5.7",
      title: "Dragging Movements",
      level: "AA",
      description:
        "All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential.",
      category: "Input",
    },
    {
      id: "2.5.8",
      title: "Target Size (Minimum)",
      level: "AA",
      description:
        "Targets have a size of at least 24 by 24 CSS pixels, except where the target is available through an equivalent link or control on the same page that is at least 24 by 24 CSS pixels.",
      category: "Input",
    },
    {
      id: "3.2.6",
      title: "Consistent Help",
      level: "A",
      description:
        "If a Web page contains any of the following help mechanisms, and those mechanisms are repeated on multiple Web pages within a set of Web pages, they occur in the same relative order on each page.",
      category: "Consistency",
    },
    {
      id: "3.3.7",
      title: "Redundant Entry",
      level: "A",
      description:
        "Information previously entered by or provided to the user that is required to be entered again in the same process is either auto-populated or available for the user to select.",
      category: "Forms",
    },
    {
      id: "3.3.8",
      title: "Accessible Authentication (Minimum)",
      level: "AA",
      description:
        "A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of: a mechanism to assist the user, an alternative authentication method, or a mechanism is available to turn off the cognitive function test.",
      category: "Forms",
    },
    {
      id: "3.3.9",
      title: "Accessible Authentication (Enhanced)",
      level: "AAA",
      description:
        "A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of: a mechanism to assist the user, an alternative authentication method, or a mechanism is available to turn off the cognitive function test.",
      category: "Forms",
    },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "WCAG 2.2 vs 2.1", href: "/wcag-2-2-vs-2-1" }]} />
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <GitCompare className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">WCAG 2.2 vs 2.1</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground">
                Learn what's new in WCAG 2.2, how it differs from WCAG 2.1, and what you need to know to upgrade.
              </p>
            </div>

            {/* Key Points */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong>Backward Compatible:</strong> WCAG 2.2 builds on 2.1 and maintains all existing criteria
                      (except one deprecated criterion)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong>9 New Success Criteria:</strong> WCAG 2.2 adds 9 new criteria focusing on mobile
                      accessibility, low vision, and cognitive disabilities
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong>Same Structure:</strong> Still organized into four POUR principles with the same three
                      conformance levels (A, AA, AAA)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <strong>Published October 2023:</strong> WCAG 2.2 is the current recommended version
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* New Criteria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="h-7 w-7 text-primary" />
                New Success Criteria in WCAG 2.2
              </h2>
              <p className="text-muted-foreground mb-6">
                WCAG 2.2 introduces 9 new success criteria addressing mobile accessibility, focus visibility, and
                cognitive accessibility.
              </p>

              <div className="space-y-4">
                {newCriteria.map((criterion) => (
                  <Card key={criterion.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {criterion.id} - {criterion.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant={criterion.level === "AAA" ? "secondary" : "default"}>
                              Level {criterion.level}
                            </Badge>
                            <Badge variant="outline">{criterion.category}</Badge>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/criteria/${criterion.id}`}>
                            View Details
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{criterion.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Deprecated Criteria */}
            <Card className="mb-12 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Deprecated Success Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4.1.1 - Parsing (Deprecated)</h3>
                    <p className="text-muted-foreground mb-3">
                      <strong className="text-foreground">Status:</strong> This success criterion has been deprecated in WCAG 2.2 and is no longer required for conformance.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong className="text-foreground">Why it was deprecated:</strong> Modern HTML parsers automatically handle well-formed markup, making this criterion obsolete. The requirement was originally intended to ensure that assistive technologies could parse content correctly, but modern browsers and assistive technologies handle malformed HTML gracefully.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong className="text-foreground">What this means:</strong> You no longer need to ensure that HTML elements have complete start and end tags, are nested according to their specifications, and don't contain duplicate attributes. However, it's still good practice to write valid HTML for maintainability and performance.
                    </p>
                    <div className="bg-background/50 p-4 rounded-lg border border-border mt-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> While 4.1.1 is deprecated, you should still follow HTML best practices. Valid HTML improves code maintainability, performance, and reduces potential issues with assistive technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Quick Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left p-3 font-semibold">Feature</th>
                        <th className="text-left p-3 font-semibold">WCAG 2.1</th>
                        <th className="text-left p-3 font-semibold">WCAG 2.2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">Total Success Criteria</td>
                        <td className="p-3">78</td>
                        <td className="p-3">87 (9 new, 1 deprecated)</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">New Criteria</td>
                        <td className="p-3">-</td>
                        <td className="p-3">9 new criteria</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">Deprecated Criteria</td>
                        <td className="p-3">-</td>
                        <td className="p-3">4.1.1 (Parsing)</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">Focus Areas</td>
                        <td className="p-3">Desktop, keyboard, screen readers</td>
                        <td className="p-3">+ Mobile, low vision, cognitive</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">Backward Compatible</td>
                        <td className="p-3">Yes (with 2.0)</td>
                        <td className="p-3">Yes (with 2.1)</td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">Published</td>
                        <td className="p-3">June 2018</td>
                        <td className="p-3">October 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Migration Guide */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Upgrading from WCAG 2.1 to 2.2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If your site is already WCAG 2.1 compliant, here's what you need to do:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Review new criteria:</strong> Check the 9 new success criteria
                    and assess your site against them
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Test focus visibility:</strong> Ensure focus indicators aren't
                    obscured (2.4.11, 2.4.12)
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Check touch targets:</strong> Verify all interactive elements
                    meet the 24x24px minimum (2.5.8)
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Review forms:</strong> Implement redundant entry prevention
                    (3.3.7) and accessible authentication (3.3.8, 3.3.9)
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Test dragging interactions:</strong> Ensure alternatives exist
                    for dragging movements (2.5.7)
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Update documentation:</strong> Update your accessibility
                    statement to reflect WCAG 2.2 compliance
                  </li>
                </ol>
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
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Complete compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/whats-new">
                      <Sparkles className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">What's New in 2.2</div>
                        <div className="text-xs text-muted-foreground">Detailed changes</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Beginner's guide</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/wcag-3-0">
                      <Rocket className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG 3.0</div>
                        <div className="text-xs text-muted-foreground">The future of accessibility</div>
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

