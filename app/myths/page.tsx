import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from "lucide-react"

export default function MythsPage() {
  const myths = [
    {
      myth: "Accessibility is expensive and time-consuming",
      truth:
        "While there are costs, accessibility is often more affordable when integrated from the start. Many accessibility improvements are simple and quick to implement. Retrofitting can be expensive, but building accessible from the beginning adds minimal cost.",
      impact: "High",
    },
    {
      myth: "Accessibility only benefits a small number of users",
      truth:
        "Over 1 billion people worldwide have disabilities. Additionally, accessible design benefits everyone, mobile users, older adults, people with temporary injuries, and users in challenging environments. Good accessibility improves UX for all users.",
      impact: "High",
    },
    {
      myth: "Accessibility makes websites ugly and boring",
      truth:
        "Accessible websites can be beautiful and modern. Accessibility is about proper structure, semantic HTML, and inclusive design, not about limiting creativity. Many award-winning, beautiful websites are fully accessible.",
      impact: "Medium",
    },
    {
      myth: "Automated tools are enough for accessibility",
      truth:
        "Automated tools catch only about 30-40% of accessibility issues. Manual testing with keyboard navigation, screen readers, and user testing with people with disabilities is essential for true compliance.",
      impact: "High",
    },
    {
      myth: "Accessibility overlays make websites compliant",
      truth:
        "Accessibility overlays are controversial and often don't provide true compliance. Many experts recommend fixing issues at the code level. Overlays may not work with all assistive technologies and can create additional barriers.",
      impact: "High",
    },
    {
      myth: "WCAG compliance is optional",
      truth:
        "While WCAG itself isn't law, many countries have incorporated WCAG into legal requirements (ADA, Section 508, EN 301 549, AODA). Non-compliance can result in lawsuits, fines, and exclusion from government contracts.",
      impact: "High",
    },
    {
      myth: "Accessibility is only for blind users",
      truth:
        "Accessibility benefits users with various disabilities: visual, auditory, motor, cognitive, and speech impairments. WCAG addresses needs across all disability types, not just blindness.",
      impact: "Medium",
    },
    {
      myth: "You need to achieve Level AAA for compliance",
      truth:
        "Most organizations aim for Level AA compliance, which is the standard referenced in most laws. Level AAA is the highest level and may not be achievable for all content types. Level AA is typically sufficient for legal compliance.",
      impact: "Medium",
    },
    {
      myth: "Accessibility is a one-time fix",
      truth:
        "Accessibility requires ongoing maintenance. New content, features, and updates must be checked for accessibility. Regular audits and testing should be part of your development workflow.",
      impact: "Medium",
    },
    {
      myth: "Screen readers can read anything",
      truth:
        "Screen readers can only read properly structured, semantic content. Images need alt text, forms need labels, and interactive elements need proper ARIA attributes. Poor structure makes content inaccessible.",
      impact: "High",
    },
    {
      myth: "Color contrast doesn't matter if text is readable",
      truth:
        "WCAG has specific contrast ratio requirements (4.5:1 for normal text, Level AA). Low contrast affects users with low vision, color blindness, and those using devices in bright sunlight. It's a legal requirement, not optional.",
      impact: "High",
    },
    {
      myth: "Accessibility is only for government websites",
      truth:
        "Accessibility requirements apply to many organizations: businesses open to the public (ADA), federal contractors (Section 508), public sector (EN 301 549), and more. Many private businesses must comply.",
      impact: "High",
    },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Accessibility Myths", href: "/myths" }]} />
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Myths Debunked</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground">
                Separate fact from fiction. Learn the truth about common accessibility misconceptions and why they're
                wrong.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Debunk Myths?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Misconceptions about accessibility can prevent organizations from implementing proper accessibility
                  practices. Understanding the truth helps make informed decisions and build truly accessible websites
                  that benefit everyone.
                </p>
              </CardContent>
            </Card>

            {/* Myths */}
            <div className="space-y-6 mb-12">
              {myths.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <XCircle className="h-6 w-6 text-destructive mt-1 shrink-0" />
                          <CardTitle className="text-xl">Myth: {item.myth}</CardTitle>
                        </div>
                        <Badge variant={item.impact === "High" ? "destructive" : "secondary"}>
                          {item.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">Truth:</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.truth}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Takeaways */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Key Takeaways</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Accessibility benefits everyone,</strong> not just people with
                      disabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Building accessible from the start</strong> is more cost-effective than retrofitting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Level AA compliance</strong> is typically sufficient for most organizations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Manual testing is essential</strong>, automated tools alone aren't enough
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Accessibility is an ongoing process,</strong> not a one-time fix
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Begin your accessibility journey</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/faq">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">FAQ</div>
                        <div className="text-xs text-muted-foreground">Common questions answered</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements</div>
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

