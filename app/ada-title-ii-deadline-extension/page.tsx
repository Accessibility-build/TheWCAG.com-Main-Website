import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  AlertCircle,
  CalendarClock,
  ArrowRight,
  ArrowDown,
  Building2,
  Scale,
  Gavel,
  Megaphone,
  ShieldAlert,
  Clock,
  FileText,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Newspaper,
  Users,
  Landmark,
} from "lucide-react"

export const metadata: Metadata = {
  title: "DOJ Extends ADA Title II Web Accessibility Deadline By A Year (April 2026 Update) | TheWCAG",
  description:
    "On April 17, 2026, the Department of Justice filed an Interim Final Rule pushing the ADA Title II web and mobile accessibility compliance deadlines back by one year. Here's exactly what changed, why the DOJ says it was needed, what disability advocates are saying, and what state and local governments must still do now.",
  keywords: [
    "DOJ ADA Title II extension",
    "ADA Title II deadline delay 2026",
    "ADA Title II interim final rule",
    "WCAG 2.1 AA state local government deadline",
    "April 2026 ADA compliance extension",
    "ADA Title II web accessibility rule delay",
    "DOJ 28 CFR Part 35 interim final rule",
    "state local government web accessibility 2027",
  ],
  openGraph: {
    title: "DOJ Extends ADA Title II Web Accessibility Deadline By A Year",
    description:
      "The Department of Justice has pushed the ADA Title II web and mobile compliance dates back by a full year. What changed, why it happened, and why disability advocates are furious.",
    url: "https://thewcag.com/ada-title-ii-deadline-extension",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "DOJ ADA Title II Deadline Extension Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DOJ Extends ADA Title II Web Accessibility Deadline By A Year",
    description:
      "An Interim Final Rule from the DOJ pushes Title II compliance dates back by 12 months. Here's the breakdown — and why it's a setback for disability rights.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/ada-title-ii-deadline-extension",
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

export default function ADATitleIIExtensionPage() {
  const publishDate = "2026-04-19"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "DOJ Extends ADA Title II Web Accessibility Deadline By A Year",
    description:
      "On April 17, 2026, the Department of Justice issued an Interim Final Rule delaying the ADA Title II web and mobile accessibility compliance deadlines by one year for every covered state and local government entity.",
    url: "https://thewcag.com/ada-title-ii-deadline-extension",
    image: "https://thewcag.com/Logo.png",
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "DOJ Extends ADA Title II Deadline",
          item: "https://thewcag.com/ada-title-ii-deadline-extension",
        },
      ],
    },
  }

  const deadlineChanges = [
    {
      who: "State & local governments with population of 50,000 or more",
      old: "April 24, 2026",
      next: "April 26, 2027",
      icon: Building2,
      tone: "destructive",
    },
    {
      who: "State & local governments with population under 50,000",
      old: "April 26, 2027",
      next: "April 26, 2028",
      icon: Landmark,
      tone: "default",
    },
    {
      who: "Special district governments (any size)",
      old: "April 26, 2027",
      next: "April 26, 2028",
      icon: Landmark,
      tone: "default",
    },
  ]

  const timeline = [
    {
      date: "April 8, 2024",
      title: "Original Title II Rule Finalized",
      body:
        "The DOJ publishes the 2024 Title II web and mobile accessibility rule, requiring covered state and local government entities to meet WCAG 2.1 Level AA for web content and mobile apps.",
    },
    {
      date: "March 5, 2026",
      title: "Advocacy Groups Push Back",
      body:
        "The National Federation of the Blind and other disability rights organizations submit letters to OIRA opposing any rollback — pointing out that the rule already took 14 years of public rulemaking to produce.",
    },
    {
      date: "April 17, 2026",
      title: "Interim Final Rule Filed",
      body:
        "The DOJ files an Interim Final Rule and posts it for public inspection, signaling the one-year extension before the Federal Register publication.",
    },
    {
      date: "April 20, 2026",
      title: "Interim Final Rule Published",
      body:
        "The rule is officially published in the Federal Register as 28 CFR Part 35, extending both compliance dates by 12 months.",
    },
    {
      date: "June 19, 2026",
      title: "60-Day Public Comment Window Closes",
      body:
        "The DOJ's comment period on the Interim Final Rule — and on potential deeper revisions to the 2024 rule — is scheduled to end.",
    },
  ]

  const whyExtended = [
    {
      title: "DOJ admits it overestimated the market",
      body:
        "The Department now says it overestimated 'the advancement and availability of technology to make web content and mobile apps accessible' when it originally set the 2026 compliance date.",
      icon: AlertCircle,
    },
    {
      title: "Small entities could not resource the work in time",
      body:
        "Smaller municipalities and special districts told the DOJ they lack the staff, budget, and in-house accessibility expertise to meaningfully remediate every page, document, and mobile screen before April 24, 2026.",
      icon: Users,
    },
    {
      title: "Third-party content and legacy systems",
      body:
        "Agencies reported being blocked by vendor-supplied portals, legacy document libraries, and procurement cycles that can't realistically be replaced inside the original window.",
      icon: FileText,
    },
    {
      title: "DOJ hints at reopening the substance of the rule",
      body:
        "The extension is paired with language suggesting the DOJ may issue a new NPRM to revisit the 2024 rule itself — potentially touching the WCAG 2.1 AA baseline, the scope of coverage, and the exceptions.",
      icon: Gavel,
    },
  ]

  const whatWasNeeded = [
    "Dedicated accessibility owners inside every covered agency — not a shared duty bolted onto a webmaster role.",
    "Multi-year procurement rewrites so that every CMS, portal, form engine, and document workflow entering the stack is contractually required to meet WCAG 2.1 AA.",
    "Full inventories of web content and mobile apps, including third-party-hosted services that route through the agency's domain.",
    "Baseline automated + manual accessibility audits, with human testing from people who use assistive technology.",
    "Funded remediation plans — not aspirational memos — covering code, PDFs, videos, maps, and payment/permitting flows.",
    "Ongoing training for content authors, designers, engineers, and communications staff so regressions don't reintroduce barriers after launch.",
  ]

  const harshTakes = [
    {
      label: "For 14 years, disabled Americans were told 'soon.'",
      body:
        "The ADA became law in 1990. The Title II web rule took 14 years of rulemaking to finish. Now, two weeks before the deadline, the DOJ tells roughly 60 million disabled Americans they have to wait another full year — because the people who had four years to prepare didn't.",
    },
    {
      label: "Inaccessibility is not a technical problem. It's a political choice.",
      body:
        "The technology to build accessible websites has existed for over two decades. WCAG 2.0 was published in 2008. WCAG 2.1 shipped in 2018. Entire industries hit these bars on commercial deadlines every quarter. What the DOJ is really saying is that accessibility was never prioritized — and delay is being treated as a free lever.",
    },
    {
      label: "An extension is not an excuse.",
      body:
        "Title II still applies. Section 504 still applies. State accessibility laws still apply. Private right of action under the ADA still applies. An agency that sits on its hands for another year is not 'waiting for guidance' — it's accumulating preventable legal, financial, and reputational exposure.",
    },
  ]

  const whatAdvocatesSay = [
    {
      source: "National Federation of the Blind",
      quote:
        "Opposed any rollback of the rule, pointing out the 14-year rulemaking record and the direct harm caused every day that public services remain unusable by blind Americans.",
    },
    {
      source: "American Council of the Blind",
      quote:
        "Issued a public notice about the April 20 publication, warning members that the extension does not change the legal obligation to be accessible under existing civil rights law.",
    },
    {
      source: "Law Office of Lainey Feingold",
      quote:
        "Urged the public not to let the DOJ change Title II — calling on disabled people, families, advocates, and accessibility professionals to submit comments opposing the delay and any substantive rollback.",
    },
    {
      source: "Converge Accessibility / Deque and others",
      quote:
        "Key takeaway for agencies: 'Don't sit back.' A delayed deadline is not a paused obligation. The right posture is to keep building accessibility into every new release and every procurement right now.",
    },
  ]

  const whatToDoNow = [
    {
      title: "Treat 2026 as the internal deadline anyway",
      body:
        "Most remediation programs are already under-resourced. Using the extension to slip a year is how agencies end up in 2028 with the same gaps. Keep the 2026 targets for internal milestones.",
    },
    {
      title: "Finish the inventory",
      body:
        "You cannot fix what you have not listed. Every .gov domain, subdomain, portal, PDF library, mobile app, and vendor-hosted service that represents the agency should be catalogued with an owner.",
    },
    {
      title: "Put WCAG 2.1 AA in every contract",
      body:
        "The fastest way to stop bleeding new inaccessible content into the stack is to refuse to buy it. Bake conformance language into procurement, acceptance criteria, and renewal terms.",
    },
    {
      title: "Publish an accessibility statement and a feedback channel",
      body:
        "A real, staffed accessibility feedback inbox — not a contact form black hole — is both legally protective and the fastest way to learn what's actually broken for users.",
    },
    {
      title: "Comment on the Interim Final Rule",
      body:
        "The 60-day comment window is open. Agencies, advocates, and the public can file comments opposing rollback and asking the DOJ to hold the line on WCAG 2.1 Level AA as the baseline.",
    },
    {
      title: "Assume the private bar is not waiting",
      body:
        "Title III lawsuits and state-law claims against public-facing services have not paused. A delayed federal compliance date does not stop plaintiffs' firms, state attorneys general, or OCR investigations.",
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main id="main-content" className="flex-1 relative overflow-hidden">
          {/* Decorative background */}
          <div
            className="absolute top-0 left-0 w-full h-[520px] bg-gradient-to-b from-red-500/10 via-amber-500/5 to-transparent -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute top-40 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -z-10"
            aria-hidden="true"
          />

          <div className="container py-8 sm:py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "DOJ Extends ADA Title II Deadline", href: "/ada-title-ii-deadline-extension" },
              ]}
            />

            {/* Hero */}
            <header className="mt-4 sm:mt-6 mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-5">
                <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                Breaking — Federal Register, April 20, 2026
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                DOJ just pushed the ADA Title II web accessibility deadline back by a full year.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-4">
                On April 17, 2026 — one week before state and local governments were finally required to make their
                websites and mobile apps usable by disabled people — the Department of Justice filed an{" "}
                <strong className="text-foreground">Interim Final Rule</strong> extending every compliance deadline
                under the 2024 ADA Title II web rule by 12 months.
              </p>
              <p className="text-sm sm:text-base text-foreground/80 max-w-3xl leading-relaxed">
                The original rule took <strong>14 years of rulemaking</strong>. Covered entities had{" "}
                <strong>roughly 2 years of notice</strong>. The bar has not moved — WCAG 2.1 Level AA is still the
                standard. The only thing that moved is how long disabled Americans are expected to keep waiting for
                equal access to their own government.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="shadow-md">
                  <Link href="#what-to-do">
                    What agencies must still do <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#deadlines">
                    See the new deadlines <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </header>

            {/* Harsh pull-quote callout */}
            <Card className="mb-12 border-2 border-red-500/40 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-red-500/15 text-red-600 dark:text-red-400 shrink-0">
                    <ShieldAlert className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-foreground">
                      &ldquo;An extension is not an excuse. Title II still applies. Section 504 still applies. The ADA
                      still applies. An agency that takes a year off is not waiting for guidance — it&rsquo;s
                      accumulating preventable legal, financial, and human cost.&rdquo;
                    </p>
                    <p className="text-sm text-muted-foreground">
                      If your team reads this delay as permission to pause the work, you have misread the rule, the
                      law, and the risk.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New deadlines */}
            <section id="deadlines" aria-labelledby="deadlines-heading" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <CalendarClock className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="deadlines-heading" className="text-2xl sm:text-3xl font-bold">
                    The new compliance deadlines
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    Same standard. Different dates. Covered entities must still meet WCAG 2.1 Level AA.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5">
                {deadlineChanges.map((row) => {
                  const Icon = row.icon
                  return (
                    <Card key={row.who} className="border-2 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[1fr_auto_auto] items-center gap-4 md:gap-6 p-5 sm:p-6">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-secondary shrink-0">
                              <Icon className="h-5 w-5 text-foreground/70" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="font-semibold text-base sm:text-lg leading-snug">{row.who}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                Standard: WCAG 2.1 Level AA for web content and mobile apps
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                                Was
                              </p>
                              <p className="text-sm sm:text-base font-semibold line-through text-muted-foreground">
                                {row.old}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
                            <div className="text-center">
                              <p className="text-[10px] sm:text-xs uppercase tracking-wide text-red-600 dark:text-red-400 font-semibold">
                                Now
                              </p>
                              <p className="text-sm sm:text-base font-bold text-red-700 dark:text-red-300">
                                {row.next}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant={row.tone === "destructive" ? "destructive" : "secondary"}
                            className="justify-self-start md:justify-self-end"
                          >
                            +1 year
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mt-5 max-w-3xl">
                The Interim Final Rule appears in the Federal Register as a revision to <strong>28 CFR Part 35</strong>
                . The WCAG 2.1 Level AA conformance standard, the definition of covered entities, and the exceptions
                from the 2024 rule are — for now — unchanged. A 60-day public comment window is open.
              </p>
            </section>

            {/* Timeline */}
            <section aria-labelledby="timeline-heading" className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h2 id="timeline-heading" className="text-2xl sm:text-3xl font-bold">
                  How we got here
                </h2>
              </div>

              <ol className="relative border-l-2 border-border/70 ml-3 space-y-6">
                {timeline.map((item, idx) => (
                  <li key={idx} className="ml-6">
                    <span
                      className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background"
                      aria-hidden="true"
                    />
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
                      {item.date}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1.5 leading-relaxed max-w-3xl">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Why DOJ says it was needed */}
            <section aria-labelledby="why-heading" className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  <Gavel className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold">
                    Why the DOJ says the extension was needed
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
                    In the Interim Final Rule, the Department walks through its own admission that the original timing
                    assumptions were wrong.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {whyExtended.map((r) => {
                  const Icon = r.icon
                  return (
                    <Card key={r.title} className="border-2 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-400 shrink-0">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-base sm:text-lg leading-tight">{r.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* What was actually needed */}
            <section aria-labelledby="needed-heading" className="mb-14">
              <Card className="border-2 bg-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle id="needed-heading" className="text-2xl sm:text-3xl">
                        What agencies actually needed to have done by now
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base mt-1">
                        The DOJ&rsquo;s own reasoning is essentially: &ldquo;these groundwork items were never
                        finished.&rdquo; Here&rsquo;s what that work looks like — and what has to happen inside the
                        extended window.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {whatWasNeeded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckCircle2
                          className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-foreground/90 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Harsh takes */}
            <section aria-labelledby="harsh-heading" className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                  <Megaphone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="harsh-heading" className="text-2xl sm:text-3xl font-bold">
                    Let&rsquo;s be blunt about this delay
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
                    The legalese version of this story is easy to hide behind. The plain-English version is not.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {harshTakes.map((t, i) => (
                  <Card
                    key={i}
                    className="border-2 border-red-500/30 bg-gradient-to-r from-red-500/5 to-transparent"
                  >
                    <CardContent className="p-5 sm:p-6">
                      <p className="text-base sm:text-lg font-bold text-red-700 dark:text-red-300 mb-2">{t.label}</p>
                      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{t.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* What advocates are saying */}
            <section aria-labelledby="advocates-heading" className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="advocates-heading" className="text-2xl sm:text-3xl font-bold">
                    What disability advocates and accessibility experts are saying
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
                    Summaries of public statements. We link to primary sources below — go read them in full.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {whatAdvocatesSay.map((q, i) => (
                  <Card key={i} className="border-2 h-full">
                    <CardHeader>
                      <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                        <Scale className="h-4 w-4 text-purple-700 dark:text-purple-300 shrink-0" aria-hidden="true" />
                        {q.source}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{q.quote}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* What to do now */}
            <section id="what-to-do" aria-labelledby="action-heading" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="action-heading" className="text-2xl sm:text-3xl font-bold">
                    What state & local governments should do right now
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl">
                    You got 12 more months. Spend them like it&rsquo;s 11.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                {whatToDoNow.map((item, i) => (
                  <Card key={i} className="border-2 h-full">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <CardTitle className="text-base sm:text-lg leading-tight">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Do / Don't */}
            <section aria-labelledby="dos-donts-heading" className="mb-14">
              <h2 id="dos-donts-heading" className="sr-only">
                Do and don&rsquo;t for the extension period
              </h2>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                <Card className="border-2 border-green-500/30 bg-green-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                      Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm sm:text-base">
                      <li className="flex gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-green-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        Keep WCAG 2.1 Level AA as your internal target
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-green-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        Budget remediation into the next two fiscal cycles
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-green-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        Build WCAG conformance into procurement and renewals
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-green-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        Ship, test, and maintain — not launch and abandon
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          className="h-4 w-4 text-green-600 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        File a comment during the 60-day window
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-500/30 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <XCircle className="h-5 w-5" aria-hidden="true" />
                      Don&rsquo;t
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm sm:text-base">
                      <li className="flex gap-2">
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-1" aria-hidden="true" />
                        Treat the extension as permission to pause the program
                      </li>
                      <li className="flex gap-2">
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-1" aria-hidden="true" />
                        Assume the underlying legal duty has moved — it hasn&rsquo;t
                      </li>
                      <li className="flex gap-2">
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-1" aria-hidden="true" />
                        Wait for a future NPRM to lower the bar
                      </li>
                      <li className="flex gap-2">
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-1" aria-hidden="true" />
                        Keep signing vendors without WCAG 2.1 AA language
                      </li>
                      <li className="flex gap-2">
                        <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-1" aria-hidden="true" />
                        Ignore Section 504, state laws, and private rights of action
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <section aria-labelledby="cta-heading" className="mb-12">
              <Card className="border-2 overflow-hidden relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  aria-hidden="true"
                />
                <CardContent className="p-6 sm:p-10 relative z-10">
                  <div className="max-w-2xl">
                    <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                      Use the extra year. Don&rsquo;t burn it.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                      If your agency, vendor, or client is affected by Title II — an audit, a remediation roadmap, and
                      procurement-ready accessibility language will go much further in twelve months than hope will.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="lg">
                        <Link href="/services/accessibility-audit">
                          Start an accessibility audit <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href="/checklist">Use the WCAG 2.1 AA checklist</Link>
                      </Button>
                      <Button asChild size="lg" variant="ghost">
                        <Link href="/contact">Talk to us</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Sources */}
            <section aria-labelledby="sources-heading" className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <h2 id="sources-heading" className="text-xl sm:text-2xl font-bold">
                  Primary sources & further reading
                </h2>
              </div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a
                    href="https://public-inspection.federalregister.gov/2026-07663.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline break-all"
                  >
                    DOJ Interim Final Rule (unpublished PDF, public inspection copy)
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.acb.org/notice-title-ii-interim-final-rule-publication-april-20-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    American Council of the Blind — Notice of Title II Interim Final Rule Publication
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lflegal.com/2026/03/title-ii-action-needed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    Law Office of Lainey Feingold — Tell the federal government not to change Title II
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://statescoop.com/doj-delays-state-local-digital-accessibility-deadline-by-one-year/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    StateScoop — DOJ delays state, local digital accessibility deadline by one year
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.deque.com/blog/ada-title-ii-update-the-key-takeaway-from-the-april-20-compliance-date-extension-from-the-doj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    Deque — The key takeaway from the April 20 compliance date extension: keep going
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://convergeaccessibility.com/2026/04/17/doj-delays-t2-rule/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    Converge Accessibility — DOJ delays the Title II web accessibility deadline (don&rsquo;t sit back)
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prismrisk.gov/about-prism/news/doj-extends-digital-accessibility-compliance-deadlines-for-state-and-local-governments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    PRISM — DOJ Extends Digital Accessibility Compliance Deadlines for State and Local Governments
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://adaquickscan.com/blog/ada-title-ii-deadline-delayed-doj-interim-final-rule-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    ADA QuickScan — Is the April 2026 ADA Deadline Being Delayed? What the DOJ&rsquo;s Interim Final
                    Rule Means
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-5">
                This article was last updated on {publishDate}. Regulatory details — including the exact Federal
                Register citation and any further DOJ guidance — may be revised during the 60-day comment window.
              </p>
            </section>

            {/* Related internal links */}
            <section aria-labelledby="related-heading" className="mb-4">
              <h2 id="related-heading" className="text-lg sm:text-xl font-bold mb-3">
                Related on TheWCAG
              </h2>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/ada-compliance-risks">ADA compliance risks</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/compliance">Compliance overview</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/wcag-2-1">WCAG 2.1</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/checklist">WCAG checklist</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/lawsuits">Accessibility lawsuits</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
