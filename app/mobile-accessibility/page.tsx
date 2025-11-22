import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  CheckCircle2,
  AlertCircle,
  MousePointer,
  Eye,
  Volume2,
  Target,
  ArrowRight,
  BookOpen,
  Code,
  Shield,
  Zap,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function MobileAccessibilityPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mobile Accessibility Guide - Making Mobile Apps & Websites Accessible",
    description: "Complete guide to mobile accessibility with touch targets, gestures, screen readers, and WCAG 2.2 mobile requirements",
    url: "https://thewcag.com/mobile-accessibility",
    dateModified: "2025-01-15",
  }

  const mobileRequirements = [
    {
      title: "Touch Target Size",
      icon: MousePointer,
      description: "All interactive elements must be at least 24x24 CSS pixels",
      requirement: "WCAG 2.5.8 (Level AA)",
      details: [
        "Minimum 24x24px for touch targets",
        "44x44px recommended for better usability",
        "Spacing between targets (at least 8px)",
        "Targets should be easy to tap with one hand",
      ],
      example: `/* Good: Large touch target */
button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

/* Bad: Too small */
button {
  width: 20px;
  height: 20px;
}`,
      link: "/criteria/2.5.8",
    },
    {
      title: "Touch Gestures",
      icon: Target,
      description: "Provide alternatives for complex gestures",
      requirement: "WCAG 2.5.1 (Level A)",
      details: [
        "Avoid requiring multi-point gestures",
        "Provide single-tap alternatives",
        "Support standard gestures (swipe, pinch)",
        "Allow gesture customization when possible",
      ],
      example: `/* Good: Provide button alternative */
<div class="swipeable" aria-label="Swipe or tap button to navigate">
  <button onclick="next()">Next</button>
</div>

/* Bad: Only gesture */
<div class="swipeable" onswipe="next()"></div>`,
      link: "/criteria/2.5.1",
    },
    {
      title: "Orientation Support",
      icon: Smartphone,
      description: "Support both portrait and landscape orientations",
      requirement: "WCAG 1.3.4 (Level AA)",
      details: [
        "Content should work in both orientations",
        "Avoid locking orientation",
        "Test in both portrait and landscape",
        "Ensure content doesn't overflow",
      ],
      example: `/* Good: Responsive design */
.container {
  max-width: 100%;
  padding: 1rem;
}

@media (orientation: landscape) {
  .container {
    padding: 1.5rem;
  }
}`,
      link: "/criteria/1.3.4",
    },
    {
      title: "Mobile Screen Readers",
      icon: Eye,
      description: "Ensure compatibility with mobile screen readers",
      requirement: "WCAG 4.1.2 (Level A)",
      details: [
        "Test with VoiceOver (iOS) and TalkBack (Android)",
        "Ensure all content is announced",
        "Test gesture navigation",
        "Verify ARIA labels work correctly",
      ],
      tools: ["VoiceOver (iOS)", "TalkBack (Android)", "NVDA Mobile"],
      link: "/criteria/4.1.2",
    },
  ]

  const mobileBestPractices = [
    {
      practice: "Use native mobile controls",
      description: "Native iOS and Android controls are accessible by default",
      icon: Code,
    },
    {
      practice: "Test on real devices",
      description: "Emulators don't accurately represent touch interactions",
      icon: Smartphone,
    },
    {
      practice: "Consider one-handed use",
      description: "Place important actions within thumb reach zone",
      icon: MousePointer,
    },
    {
      practice: "Optimize for slow connections",
      description: "Many mobile users have limited bandwidth",
      icon: Zap,
    },
    {
      practice: "Test with mobile screen readers",
      description: "VoiceOver and TalkBack work differently than desktop",
      icon: Volume2,
    },
    {
      practice: "Avoid hover-only interactions",
      description: "Touch devices don't have hover states",
      icon: AlertCircle,
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
            <Breadcrumb items={[{ label: "Mobile Accessibility", href: "/mobile-accessibility" }]} />
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Mobile Accessibility Guide</h1>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Last Updated: January 2025</p>
              <p className="text-lg text-muted-foreground">
                Complete guide to making mobile websites and apps accessible. Learn about touch targets, gestures,
                screen readers, and WCAG 2.2 mobile-specific requirements.
              </p>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Mobile Accessibility Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Over 60% of web traffic comes from mobile devices. Mobile accessibility is crucial because:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>People with disabilities use mobile devices extensively</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Mobile screen readers (VoiceOver, TalkBack) work differently than desktop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Touch interactions require larger targets and different patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>WCAG 2.2 includes mobile-specific success criteria</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Mobile-Specific WCAG Requirements</h2>
              <div className="space-y-6">
                {mobileRequirements.map((req, index) => {
                  const Icon = req.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Icon className="h-6 w-6 text-primary mt-1 shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{req.title}</CardTitle>
                              <Badge variant="outline" className="text-xs">
                                {req.requirement}
                              </Badge>
                            </div>
                            <CardDescription>{req.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {req.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {req.example && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Code Example:</h4>
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{req.example}</code>
                            </pre>
                          </div>
                        )}
                        {req.tools && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Testing Tools:</h4>
                            <div className="flex flex-wrap gap-2">
                              {req.tools.map((tool, toolIndex) => (
                                <Badge key={toolIndex} variant="outline" className="text-xs">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <div>
                          <Button asChild variant="outline" size="sm">
                            <Link href={req.link}>
                              Learn More <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Mobile Accessibility Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mobileBestPractices.map((practice, index) => {
                    const Icon = practice.icon
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                        <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">{practice.practice}</h3>
                          <p className="text-sm text-muted-foreground">{practice.description}</p>
                        </div>
                      </div>
                    )
                  })}
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
                    <Link href="/criteria/2.5.8">
                      <Target className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Target Size (2.5.8)</div>
                        <div className="text-xs text-muted-foreground">Touch target requirements</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">Mobile testing methods</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/best-practices">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Best Practices</div>
                        <div className="text-xs text-muted-foreground">Accessibility best practices</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Zap className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Mobile Testing Tools</div>
                        <div className="text-xs text-muted-foreground">Tools for mobile accessibility</div>
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
