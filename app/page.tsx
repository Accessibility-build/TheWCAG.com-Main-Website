import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSearch } from "@/components/hero-search"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { StructuredData } from "@/components/structured-data"
import { getLatestLawsuits } from "@/lib/lawsuits-data"
import { ogImages } from "@/lib/og-image"
import {
  Search,
  Eye,
  Keyboard,
  Lightbulb,
  Wrench,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Accessibility,
  ShieldCheck,
  Rocket,
  HelpCircle,
  TestTube,
  Users,
  TrendingUp,
  DollarSign,
  Globe,
  Scale,
  Monitor,
  Smartphone,
  Calendar,
  ExternalLink,
  Heart,
  FileText,
  AlertCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "TheWCAG - Complete WCAG 2.2 Accessibility Guidelines",
  description:
    "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
  keywords: [
    "WCAG",
    "WCAG 2.2",
    "web accessibility",
    "accessibility guidelines",
    "a11y",
    "WCAG compliance",
    "accessibility standards",
    "web accessibility tools",
    "accessibility checklist",
    "ADA compliance",
    "Section 508",
  ],
  openGraph: {
    title: "TheWCAG - Complete WCAG 2.2 Accessibility Guidelines",
    description:
      "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
    url: "https://thewcag.com",
    siteName: "TheWCAG - An accessibility Guide",
    type: "website",
    images: [
      {
        url: ogImages.home(),
        width: 1200,
        height: 630,
        alt: "TheWCAG - Complete WCAG 2.2 Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheWCAG - Complete WCAG 2.2 Accessibility Guidelines",
    description:
      "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
    images: [ogImages.home()],
  },
  alternates: {
    canonical: "https://thewcag.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  const latestLawsuits = getLatestLawsuits(4)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheWCAG - An accessibility Guide",
    description: "Complete WCAG 2.2 Accessibility Guidelines with interactive examples and tools",
    url: "https://thewcag.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thewcag.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG - An accessibility Guide",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheWCAG - An accessibility Guide",
    url: "https://thewcag.com",
    description: "Comprehensive WCAG 2.2 accessibility guidelines and resources",
    logo: {
      "@type": "ImageObject",
      url: "https://thewcag.com/Logo.png",
    },
    sameAs: [
      // Add social media links when available
    ],
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Header />
        <main id="main-content" className="flex-1 overflow-x-hidden">
          {/* Hero Section */}
          <section className="container py-6 md:py-12 px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 auto-rows-auto md:auto-rows-[minmax(180px,auto)]">
                {/* Main Title Card - Spans 8 cols */}
                <div className="col-span-1 md:col-span-8 md:row-span-2 rounded-2xl md:rounded-3xl bg-primary text-primary-foreground p-5 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[360px] sm:min-h-[400px] md:min-h-0">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity overflow-hidden">
                    <Accessibility className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 -mr-8 -mt-8 sm:-mr-12 sm:-mt-12 md:-mr-16 md:-mt-16" />
                  </div>
                  <div className="relative z-10">
                    <Badge className="bg-background/20 hover:bg-background/30 text-primary-foreground border-none mb-3 sm:mb-4 md:mb-6 w-fit text-xs sm:text-sm">
                      Updated for WCAG 2.2
                    </Badge>
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-4 md:mb-6 leading-[0.95] md:leading-[0.9]">
                      The WCAG
                      <br />
                      Guide
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                      Master web accessibility with our comprehensive, interactive reference for developers and
                      designers.
                    </p>
                  </div>
                  <div className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-6 sm:mt-8">
                    <Button
                      size="lg"
                      variant="secondary"
                      asChild
                      className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                    >
                      <Link href="/learn">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full sm:w-auto"
                    >
                      <Link href="/checklist">View Checklist</Link>
                    </Button>
                  </div>
                </div>

                {/* Search Card - Spans 4 cols */}
                <div className="col-span-1 md:col-span-4 bg-card text-card-foreground rounded-2xl md:rounded-3xl p-5 sm:p-6 flex flex-col justify-center border shadow-sm hover:shadow-md transition-all min-h-[180px] sm:min-h-[200px]">
                  <HeroSearch />
                </div>

                {/* New in 2.2 Card - Spans 4 cols */}
                <div className="col-span-1 md:col-span-4 bg-secondary text-secondary-foreground rounded-2xl md:rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group border-none min-h-[160px] sm:min-h-[180px]">
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-24 h-24 sm:w-32 sm:h-32" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-base sm:text-lg font-bold">New in 2.2</h2>
                      <Badge className="bg-background/20 text-secondary-foreground hover:bg-background/30 border-none text-xs">
                        9 Criteria
                      </Badge>
                    </div>
                    <p className="text-secondary-foreground/90 text-xs sm:text-sm mb-3 sm:mb-4">
                      Focus appearance, dragging movements, and target size updates.
                    </p>
                  </div>
                  <Link
                    href="/whats-new"
                    className="inline-flex items-center text-xs sm:text-sm font-semibold hover:underline decoration-2 underline-offset-4"
                  >
                    See what changed <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>

                {/* Stats/Principles Grid - Spans 12 cols (mobile) or split */}
                <div className="col-span-1 md:col-span-3 bg-accent text-accent-foreground rounded-2xl md:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group min-h-[140px] sm:min-h-[160px]">
                  <div className="mb-3 sm:mb-4">
                    <Eye className="w-7 h-7 sm:w-8 sm:h-8 mb-2 opacity-80" />
                    <div className="text-2xl sm:text-3xl font-bold">POUR</div>
                    <div className="text-xs sm:text-sm opacity-90">Core Principles</div>
                  </div>
                  <div className="text-xs opacity-75 leading-relaxed">
                    Perceivable, Operable, Understandable, Robust
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 bg-card text-card-foreground rounded-2xl md:rounded-3xl p-5 sm:p-6 border shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors min-h-[140px] sm:min-h-[160px]">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">86</div>
                    <div className="text-sm sm:text-base font-medium text-muted-foreground">Success Criteria</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Level A, AA, AAA</span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 bg-card text-card-foreground rounded-2xl md:rounded-3xl p-5 sm:p-6 border shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors min-h-[140px] sm:min-h-[160px]">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">AA</div>
                    <div className="text-sm sm:text-base font-medium text-muted-foreground">Compliance Goal</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Standard Target</span>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 bg-muted/50 rounded-2xl md:rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center text-center hover:bg-muted transition-colors cursor-pointer border border-transparent hover:border-border min-h-[140px] sm:min-h-[160px]">
                  <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-muted-foreground mb-2 sm:mb-3" />
                  <h2 className="text-sm sm:text-base font-semibold mb-1">Tools</h2>
                  <p className="text-xs text-muted-foreground">Contrast Checker & Generators</p>
                </div>
              </div>
            </ScrollAnimation>
          </section>

          {/* POUR Principles */}
          <section className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">The Four Principles</h2>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                  WCAG is organized around four principles that form the foundation of web accessibility
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimation className="h-full" threshold={0.1}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Eye className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Perceivable</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Information must be presentable in ways users can perceive
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="/principles/perceivable"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                    >
                      29 criteria
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation className="h-full" threshold={0.2}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Keyboard className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <CardTitle>Operable</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Users must be able to operate interface components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="/principles/operable"
                      className="text-sm font-medium text-secondary hover:underline inline-flex items-center"
                    >
                      29 criteria
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation className="h-full" threshold={0.3}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <CardTitle>Understandable</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Information and UI must be understandable
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="/principles/understandable"
                      className="text-sm font-medium text-accent hover:underline inline-flex items-center"
                    >
                      17 criteria
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation className="h-full" threshold={0.4}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Robust</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Content must work with current and future tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="/principles/robust"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                    >
                      2 criteria
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </section>

          {/* Features */}
          <section className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
                  Interactive tools, real code examples, and comprehensive resources
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation className="h-full" threshold={0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                      Interactive Guide
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      Every criterion explained with clear definitions, examples, and practical guidance
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation className="h-full" threshold={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-secondary" aria-hidden="true" />
                      Testing Tools
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      Built-in contrast checkers, focus testers, and other accessibility evaluation tools
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation className="h-full" threshold={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                      Progress Tracking
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      Track your compliance progress with interactive checklists and export reports
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>
          </section>

          {/* Why Accessibility Matters Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container px-4 sm:px-6 lg:px-8">
              <ScrollAnimation>
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Why Accessibility Matters</h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Accessibility isn't just the right thing to do—it's good business and affects everyone
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Statistics */}
                <ScrollAnimation className="lg:col-span-1">
                  <Card className="h-full bg-linear-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-primary text-lg">
                        <Users className="h-5 w-5" />
                        By the Numbers
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">1.3B</div>
                        <p className="text-xs sm:text-sm text-muted-foreground">People worldwide with disabilities</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">26%</div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Of US adults have a disability</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-primary">$13T</div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Annual disposable income globally</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                {/* Business Benefits */}
                <ScrollAnimation className="lg:col-span-1" threshold={0.2}>
                  <Card className="h-full bg-linear-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-secondary text-lg">
                        <TrendingUp className="h-5 w-5" />
                        Business Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2.5">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Larger Market Reach</p>
                          <p className="text-xs text-muted-foreground">Access to 1.3B+ potential customers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Search className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Better SEO</p>
                          <p className="text-xs text-muted-foreground">Improved search rankings</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Legal Compliance</p>
                          <p className="text-xs text-muted-foreground">Avoid costly lawsuits</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Better UX for All</p>
                          <p className="text-xs text-muted-foreground">Benefits everyone</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

                {/* Real User Impact */}
                <ScrollAnimation className="md:col-span-2 lg:col-span-1" threshold={0.3}>
                  <Card className="h-full bg-linear-to-br from-accent/5 to-accent/10 border-accent/20">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-accent text-lg">
                        <Heart className="h-5 w-5" />
                        Real Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <blockquote className="text-sm italic text-accent border-l-2 border-accent/30 pl-3">
                        "When websites are accessible, I can shop, work, and connect independently. It's not just convenience—it's dignity."
                      </blockquote>
                      <p className="text-xs text-muted-foreground">— Sarah, screen reader user</p>
                      
                      <blockquote className="text-sm italic text-accent border-l-2 border-accent/30 pl-3">
                        "Good contrast and clear navigation help me focus despite my ADHD. Accessible design benefits everyone."
                      </blockquote>
                      <p className="text-xs text-muted-foreground">— Marcus, cognitive disability</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 sm:py-16 md:py-24">
            <div className="container px-4 sm:px-6 lg:px-8">
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Professional accessibility solutions to help you build inclusive digital experiences
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <ScrollAnimation threshold={0.1}>
                  <Link href="/services/accessibility-audit" className="group block">
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Search className="h-6 w-6" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">Accessibility Audits</CardTitle>
                        <CardDescription>
                          Comprehensive WCAG 2.2 compliance audits with detailed reporting and recommendations
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.2}>
                  <Link href="/services/accessibility-remediation" className="group block">
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">Remediation Services</CardTitle>
                        <CardDescription>
                          Expert code fixes and design improvements to resolve accessibility issues
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.3}>
                  <Link href="/services/custom-website-development" className="group block">
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Monitor className="h-6 w-6" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">Web Development</CardTitle>
                        <CardDescription>
                          Accessible-first websites built to modern standards and WCAG compliance
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.4}>
                  <Link href="/services/android-app-development" className="group block">
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Smartphone className="h-6 w-6" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">Android Apps</CardTitle>
                        <CardDescription>
                          Native Android applications built with accessibility and Material Design principles
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.5}>
                  <Link href="/services/ios-app-development" className="group block">
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Smartphone className="h-6 w-6" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">iOS Apps</CardTitle>
                        <CardDescription>
                          Native iOS applications with VoiceOver compatibility and Apple accessibility guidelines
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>
              </div>

              <ScrollAnimation>
                <div className="text-center">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/services">
                      View All Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Latest Accessibility Lawsuits Section */}
          <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
            <div className="container px-4 sm:px-6 lg:px-8">
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Latest Accessibility Lawsuits</h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Stay informed about recent accessibility legal cases and their implications
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {latestLawsuits.map((lawsuit, index) => (
                  <ScrollAnimation key={lawsuit.slug} threshold={0.1 + index * 0.1}>
                    <Link href={`/lawsuits/${lawsuit.slug}`} className="group block h-full">
                      <Card className="h-full flex flex-col hover:shadow-lg transition-all hover:border-primary/50">
                        <CardHeader className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                              <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                              <Badge variant={lawsuit.status === 'settled' ? 'default' : lawsuit.status === 'ongoing' ? 'secondary' : 'outline'} className="text-xs whitespace-nowrap">
                                {lawsuit.status.charAt(0).toUpperCase() + lawsuit.status.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                              <Calendar className="h-3 w-3" />
                              <span className="whitespace-nowrap">
                                {new Date(lawsuit.dateResolved || lawsuit.dateFiled).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'short' 
                                })}
                              </span>
                            </div>
                          </div>
                          <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2 sm:mb-3">
                            {lawsuit.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3 text-sm sm:text-base flex-1">
                            {lawsuit.summary}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 mt-auto">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs sm:text-sm text-muted-foreground">
                              <span className="font-medium">Defendant:</span> <span className="break-words">{lawsuit.defendant}</span>
                            </div>
                            <div className="flex items-center justify-end">
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation>
                <div className="text-center">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/lawsuits">
                      View All Lawsuits
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Latest Blog Posts Section */}
          <section className="py-12 sm:py-16 md:py-24">
            <div className="container px-4 sm:px-6 lg:px-8">
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Insights, discussions, and analysis from the accessibility community
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <ScrollAnimation threshold={0.1}>
                  <Link href="/blog/is-accessibility-work-safe-from-ai-in-the-near-future" className="group block h-full">
                    <Card className="h-full flex flex-col hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                            <Calendar className="h-3 w-3" />
                            <span className="whitespace-nowrap">Jan 26, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2 sm:mb-3">
                          Is Accessibility Work Safe from AI in the Near Future?
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-sm sm:text-base flex-1">
                          With AI advancing rapidly, accessibility professionals are questioning their career futures. We analyze the Reddit discussion that&apos;s sparking debate: Can AI replace human expertise in making digital content accessible?
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 mt-auto">
                        <div className="flex items-center justify-end">
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.2}>
                  <Link href="/blog/why-is-accessibility-being-delinked-from-disability" className="group block h-full">
                    <Card className="h-full flex flex-col hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                            <Calendar className="h-3 w-3" />
                            <span className="whitespace-nowrap">Jan 27, 2025</span>
                          </div>
                        </div>
                        <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2 sm:mb-3">
                          Why Is Accessibility Being De-Linked from Disability?
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-sm sm:text-base flex-1">
                          A critical examination of how accessibility messaging is shifting away from disability. We explore a Reddit discussion about why &quot;it helps everyone&quot; has replaced &quot;it helps disabled people&quot; as the primary accessibility argument.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 mt-auto">
                        <div className="flex items-center justify-end">
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimation>
              </div>

              <ScrollAnimation>
                <div className="text-center">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                      View All Blog Posts
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Primary CTA Section */}
          <section className="border-t bg-card">
            <div className="container py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
              <ScrollAnimation>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Build Accessible Experiences?</h2>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
                  Start learning WCAG 2.2 with our beginner-friendly guides and practical examples
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/learn">Start Learning</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/checklist">View Checklist</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
