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
import { ChecklistCTA } from "@/components/checklist-cta"
import { StructuredData } from "@/components/structured-data"
import { getLatestLawsuits } from "@/lib/lawsuits-data"
import { ogImages } from "@/lib/og-image"
import {
  Search,
  Eye,
  Hand,
  Keyboard,
  Lightbulb,
  Wrench,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CheckCircle,
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
  GraduationCap,
  FileCheck,
  FlaskConical,
  Zap,
  Code2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "WCAG 2.2 Compliance Guide 2026 | Complete Accessibility Checklist & Tools",
  description:
    "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources. Achieve ADA compliance today.",
  keywords: [
    "WCAG 2.2",
    "WCAG compliance",
    "accessibility checklist",
    "WCAG 2.2 guide",
    "web accessibility",
    "ADA compliance",
    "accessibility tools",
    "WCAG 2.2 checklist",
    "accessibility standards",
    "WCAG 2.2 AA",
    "Section 508",
    "a11y",
    "WCAG",
    "accessibility guidelines",
    "web accessibility tools",
  ],
  openGraph: {
    title: "WCAG 2.2 Compliance Guide 2026 | Complete Accessibility Checklist & Tools",
    description:
      "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources. Achieve ADA compliance today.",
    url: "https://thewcag.com",
    siteName: "TheWCAG - An accessibility Guide",
    type: "website",
    images: [
      {
        url: ogImages.home(),
        width: 1200,
        height: 630,
        alt: "WCAG 2.2 Compliance Guide 2026 - Complete Accessibility Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 Compliance Guide 2026 | Complete Accessibility Checklist & Tools",
    description:
      "Master WCAG 2.2 accessibility standards with our complete guide. Free tools, code examples, interactive checklist, and expert resources.",
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
    name: "TheWCAG",
    alternateName: "TheWCAG - An accessibility Guide",
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
      name: "TheWCAG",
      alternateName: "TheWCAG - An accessibility Guide",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
      },
    },
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheWCAG",
    alternateName: "TheWCAG - An accessibility Guide",
    url: "https://thewcag.com",
    description: "Comprehensive WCAG 2.2 accessibility guidelines and resources",
    logo: {
      "@type": "ImageObject",
      url: "https://thewcag.com/Logo.png",
      width: 1200,
      height: 630,
    },
    sameAs: [
      // Add social media links when available
    ],
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 (Web Content Accessibility Guidelines 2.2) is the latest version of accessibility standards published by the W3C. It includes 86 success criteria across four principles: Perceivable, Operable, Understandable, and Robust (POUR)."
        }
      },
      {
        "@type": "Question",
        name: "How do I check WCAG compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check WCAG compliance using our free accessibility checker tool, manual testing with our interactive checklist, and by reviewing each success criterion. We provide code examples and testing methods for each criterion."
        }
      },
      {
        "@type": "Question",
        name: "What are WCAG 2.2 success criteria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria organized under four principles. Each criterion has three conformance levels: A (minimum), AA (standard), and AAA (enhanced). Most organizations aim for AA compliance."
        }
      },
      {
        "@type": "Question",
        name: "What's new in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 adds 9 new success criteria including focus appearance (2.4.13), dragging movements (2.5.7), target size (2.5.8), and fixed reference points (1.4.12). These address mobile accessibility and improved focus visibility."
        }
      },
      {
        "@type": "Question",
        name: "Is WCAG 2.2 required for ADA compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While ADA doesn't explicitly require WCAG 2.2, courts have consistently recognized WCAG 2.0/2.1 Level AA as the standard for web accessibility compliance. WCAG 2.2 is the current best practice and recommended standard."
        }
      },
      {
        "@type": "Question",
        name: "How many success criteria are in WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 has 86 success criteria across four principles: Perceivable (29 criteria), Operable (29 criteria), Understandable (17 criteria), and Robust (2 criteria)."
        }
      }
    ]
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewcag.com",
      },
    ],
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationData} />
      <StructuredData data={faqData} />
      <StructuredData data={breadcrumbData} />
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
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full sm:w-auto"
                    >
                      <Link href="/checklist">View Checklist</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full sm:w-auto"
                    >
                      <Link href="/resources">Explore Resources</Link>
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
          <section className="container relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              <ScrollAnimation>
                <div className="text-center mb-12 md:mb-20">
                  {/* Main heading with decorative 4 */}
                  <div className="relative inline-block mb-8">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-0 tracking-tighter">
                      <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        The Four
                      </span>
                      <br />
                      <span className="relative inline-block">
                        <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          Principles
                        </span>
                        {/* Decorative large 4 behind "Principles" */}
                        <span
                          className="absolute -top-4 -right-12 md:-right-16 text-[10rem] md:text-[12rem] font-black opacity-[0.04] select-none leading-none pointer-events-none"
                          aria-hidden="true"
                        >
                          4
                        </span>
                      </span>
                    </h2>
                  </div>
                  {/* Divider line */}
                  <div
                    className="w-20 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-6"
                    aria-hidden="true"
                  />
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-light">
                    WCAG is organized around <span className="font-semibold text-foreground">four principles</span> that form
                    the foundation of web accessibility
                  </p>
                </div>
              </ScrollAnimation>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <ScrollAnimation className="h-full" threshold={0.1}>
                  <div className="group h-full">
                    <div className="bg-card border-2 border-border flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full p-8 relative overflow-hidden">
                      <div
                        className="absolute -top-8 -right-8 text-[14rem] font-black opacity-[0.06] select-none leading-none text-foreground pointer-events-none"
                        aria-hidden="true"
                      >
                        1
                      </div>
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Eye className="h-8 w-8 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Perceivable</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                          Information and user interface components must be presentable to users in ways they can perceive.
                        </p>
                        <Link
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center group/link mt-auto"
                          href="/principles/perceivable"
                        >
                          Explore 29 criteria
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation className="h-full" threshold={0.2}>
                  <div className="group h-full">
                    <div className="bg-card border-2 border-border flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full p-8 relative overflow-hidden">
                      <div
                        className="absolute -top-8 -right-8 text-[14rem] font-black opacity-[0.06] select-none leading-none text-foreground pointer-events-none"
                        aria-hidden="true"
                      >
                        2
                      </div>
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Hand className="h-8 w-8 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Operable</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                          User interface components and navigation must be operable by all users
                        </p>
                        <Link
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center group/link mt-auto"
                          href="/principles/operable"
                        >
                          View 29 criteria
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation className="h-full" threshold={0.3}>
                  <div className="group h-full">
                    <div className="bg-card border-2 border-border flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full p-8 relative overflow-hidden">
                      <div
                        className="absolute -top-8 -right-8 text-[14rem] font-black opacity-[0.06] select-none leading-none text-foreground pointer-events-none"
                        aria-hidden="true"
                      >
                        3
                      </div>
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Lightbulb className="h-8 w-8 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Understandable</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                          Information and the operation of user interface must be understandable
                        </p>
                        <Link
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center group/link mt-auto"
                          href="/principles/understandable"
                        >
                          See 17 criteria
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation className="h-full" threshold={0.4}>
                  <div className="group h-full">
                    <div className="bg-card border-2 border-border flex flex-col rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full p-8 relative overflow-hidden">
                      <div
                        className="absolute -top-8 -right-8 text-[14rem] font-black opacity-[0.06] select-none leading-none text-foreground pointer-events-none"
                        aria-hidden="true"
                      >
                        4
                      </div>
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Robust</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                          Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies
                        </p>
                        <Link
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center group/link mt-auto"
                          href="/principles/robust"
                        >
                          Review 2 criteria
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="container px-4 sm:px-6 lg:px-8 relative">
              <ScrollAnimation>
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full text-xs font-medium uppercase tracking-wider text-primary">
                    Complete Toolkit
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">Everything You Need</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                    Interactive tools, real code examples, and comprehensive resources to master web accessibility
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollAnimation threshold={0.1}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        01
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <BookOpen className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Interactive Guide</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Every criterion explained with clear definitions, examples, and practical guidance</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.2}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        02
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Code2 className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Code Examples</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Real-world code snippets showing both accessible and inaccessible patterns</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.3}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        03
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Accessibility Checker</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Test your websites against WCAG criteria with instant feedback</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.4}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        04
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Lightbulb className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Best Practices</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Learn from common mistakes and discover proven solutions</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.5}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        05
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <FileText className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Quick Reference</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Downloadable checklists and reference guides for your team</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.6}>
                  <div className="group relative">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background number */}
                      <div className="absolute top-6 right-6 text-[140px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                        06
                      </div>
                      {/* Icon with modern treatment */}
                      <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="w-7 h-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">Regular Updates</h3>
                      <p className="relative text-muted-foreground leading-relaxed">Stay current with the latest WCAG guidelines and industry standards</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>

          {/* Why Accessibility Matters Section */}
          <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            </div>
            <div className="container px-4 sm:px-6 lg:px-8 relative">
              <ScrollAnimation>
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full text-xs font-medium uppercase tracking-wider text-primary">
                    The Impact
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">Why Accessibility Matters</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                    Accessibility isn't just the right thing to do — it's good business and affects everyone
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid lg:grid-cols-12 gap-8">
                <ScrollAnimation className="lg:col-span-4">
                  <div className="group relative h-full">
                    {/* Shadow layers */}
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative h-full bg-card border-2 border-border rounded-3xl p-8 md:p-10 group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                      {/* Background icon */}
                      <div className="absolute top-8 right-8 opacity-[0.03]">
                        <Users className="w-40 h-40 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <Users className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                          </div>
                          By the Numbers
                        </h3>
                        <div className="space-y-10">
                          <div>
                            <div className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                              1.3B
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">People worldwide with disabilities</p>
                          </div>
                          <div>
                            <div className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                              26%
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">Of US adults have a disability</p>
                          </div>
                          <div>
                            <div className="text-5xl md:text-6xl font-bold mb-3 bg-linear-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                              $13T
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">Global spending power of people with disabilities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                  <ScrollAnimation threshold={0.1}>
                    <div className="group relative">
                      {/* Shadow layers */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative bg-card border-2 border-border rounded-3xl p-7 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <TrendingUp className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Better Business</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Accessible websites reach 26% more potential customers and see improved conversion rates</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.2}>
                    <div className="group relative">
                      {/* Shadow layers */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative bg-card border-2 border-border rounded-3xl p-7 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Scale className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Legal Compliance</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Meet ADA, Section 508, and international accessibility requirements to avoid lawsuits</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.3}>
                    <div className="group relative">
                      {/* Shadow layers */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative bg-card border-2 border-border rounded-3xl p-7 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Heart className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Social Impact</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Create an inclusive web that works for everyone, regardless of ability</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.4}>
                    <div className="group relative">
                      {/* Shadow layers */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative bg-card border-2 border-border rounded-3xl p-7 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Globe className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Better SEO</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Accessible websites rank higher in search engines and reach wider audiences</p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.5}>
                    <div className="group relative">
                      {/* Shadow layers */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative bg-card border-2 border-border rounded-3xl p-7 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Zap className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Improved UX</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Accessibility improvements benefit all users with clearer navigation and better usability</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <ScrollAnimation>
                  <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter leading-none">Services</h2>
                    <p className="text-xl text-muted-foreground">Six ways we help you build accessible digital experiences</p>
                  </div>
                </ScrollAnimation>

                <div className="space-y-8">
                  <ScrollAnimation threshold={0.1}>
                    <Link href="/services/accessibility-audit" className="group relative block md:translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-0 right-8 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            1
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <Search className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 01</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">Accessibility Audits</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Comprehensive WCAG 2.2 compliance audits with detailed reporting</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.2}>
                    <Link href="/services/accessibility-remediation" className="group relative block md:-translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-8 right-0 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            2
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <Wrench className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 02</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">Remediation</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Expert fixes for accessibility issues to ensure WCAG compliance</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.3}>
                    <Link href="/services" className="group relative block md:translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-0 right-8 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            3
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <GraduationCap className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 03</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">Training</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Empower your team with accessibility knowledge</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.4}>
                    <Link href="/services" className="group relative block md:-translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-8 right-0 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            4
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <FileCheck className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 04</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">VPAT Reports</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Documentation for procurement and compliance needs</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.5}>
                    <Link href="/services" className="group relative block md:translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-0 right-8 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            5
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <Lightbulb className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 05</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">Consulting</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Strategic guidance for embedding accessibility</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>

                  <ScrollAnimation threshold={0.6}>
                    <Link href="/services" className="group relative block md:-translate-x-12 transition-transform hover:translate-x-0">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-foreground/5 rounded-3xl translate-y-3 translate-x-3" />
                      <div className="absolute inset-0 bg-foreground/10 rounded-3xl translate-y-2 translate-x-2" />
                      <div className="relative bg-card border-2 border-border rounded-3xl p-10 hover:border-foreground/40 hover:shadow-2xl transition-all duration-300">
                        {/* Large Number - Split diagonal positioning */}
                        <div className="absolute top-8 right-0 w-32 h-32 flex items-center justify-center pointer-events-none">
                          <span className="text-9xl font-black text-foreground/4 group-hover:text-foreground/8 transition-colors leading-none">
                            6
                          </span>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                          <div className="shrink-0">
                            <div className="w-20 h-20 bg-foreground/5 rounded-2xl flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:rotate-6">
                              <FlaskConical className="w-10 h-10" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-4">
                              <span className="text-xs font-mono text-muted-foreground tracking-wider">SERVICE 06</span>
                              <h3 className="text-3xl md:text-4xl font-black mt-1">Testing</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">Rigorous testing with assistive technologies</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Accessibility Lawsuits Section */}
          <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="container px-4 sm:px-6 lg:px-8 relative">
              <ScrollAnimation>
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full text-xs font-medium uppercase tracking-wider text-primary">
                    Legal Updates
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">Latest Lawsuits</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                    Stay informed about recent accessibility legal cases and their implications
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {latestLawsuits.map((lawsuit, index) => (
                  <ScrollAnimation key={lawsuit.slug} threshold={0.1 + index * 0.1}>
                    <Link href={`/lawsuits/${lawsuit.slug}`} className="group relative block h-full">
                      {/* Shadow layers for depth */}
                      <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                      {/* Main card */}
                      <div className="relative h-full bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                        {/* Background number */}
                        <div className="absolute top-6 right-6 text-[100px] font-bold text-primary/5 leading-none select-none pointer-events-none">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="relative">
                          {/* Header with icon and status */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <Scale className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                              </div>
                              <Badge
                                variant={lawsuit.status === 'settled' ? 'default' : lawsuit.status === 'ongoing' ? 'secondary' : 'outline'}
                                className="text-xs font-medium"
                              >
                                {lawsuit.status.charAt(0).toUpperCase() + lawsuit.status.slice(1)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(lawsuit.dateResolved || lawsuit.dateFiled).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short'
                                })}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                            {lawsuit.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                            {lawsuit.summary}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">Defendant:</span> {lawsuit.defendant}
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                              Read more
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation>
                <div className="text-center">
                  <Link
                    href="/lawsuits"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                  >
                    View All Lawsuits
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Latest Blog Posts Section */}
          <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="container px-4 sm:px-6 lg:px-8 relative">
              <ScrollAnimation>
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-block mb-3 px-4 py-1.5 bg-secondary/10 rounded-full text-xs font-medium uppercase tracking-wider text-secondary">
                    From the Blog
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance">Latest Insights</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
                    Insights, discussions, and analysis from the accessibility community
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <ScrollAnimation threshold={0.1}>
                  <Link href="/blog/is-accessibility-work-safe-from-ai-in-the-near-future" className="group relative block h-full">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-secondary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative h-full bg-card border-2 border-border rounded-3xl p-8 hover:border-secondary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      {/* Background decoration */}
                      <div className="absolute top-6 right-6 text-[80px] font-bold text-secondary/5 leading-none select-none pointer-events-none">
                        01
                      </div>

                      <div className="relative">
                        {/* Header with icon and date */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                            <FileText className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" strokeWidth={1.5} />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                            <Calendar className="h-4 w-4" />
                            <span>Jan 26, 2025</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                          Is Accessibility Work Safe from AI in the Near Future?
                        </h3>

                        {/* Summary */}
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          With AI advancing rapidly, accessibility professionals are questioning their career futures. We analyze the Reddit discussion that&apos;s sparking debate: Can AI replace human expertise in making digital content accessible?
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-end pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-secondary font-medium text-sm">
                            Read article
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>

                <ScrollAnimation threshold={0.2}>
                  <Link href="/blog/why-is-accessibility-being-delinked-from-disability" className="group relative block h-full">
                    {/* Shadow layers for depth */}
                    <div className="absolute inset-0 bg-secondary/5 rounded-3xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-secondary/3 rounded-3xl transform translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Main card */}
                    <div className="relative h-full bg-card border-2 border-border rounded-3xl p-8 hover:border-secondary/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      {/* Background decoration */}
                      <div className="absolute top-6 right-6 text-[80px] font-bold text-secondary/5 leading-none select-none pointer-events-none">
                        02
                      </div>

                      <div className="relative">
                        {/* Header with icon and date */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                            <FileText className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" strokeWidth={1.5} />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                            <Calendar className="h-4 w-4" />
                            <span>Jan 27, 2025</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                          Why Is Accessibility Being De-Linked from Disability?
                        </h3>

                        {/* Summary */}
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          A critical examination of how accessibility messaging is shifting away from disability. We explore a Reddit discussion about why &quot;it helps everyone&quot; has replaced &quot;it helps disabled people&quot; as the primary accessibility argument.
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-end pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-secondary font-medium text-sm">
                            Read article
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              </div>

              <ScrollAnimation>
                <div className="text-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5"
                  >
                    View All Blog Posts
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Primary CTA Section */}
          <ChecklistCTA />

        </main>
        <Footer />
      </div>
    </>
  )
}
