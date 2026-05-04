import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  ExternalLink,
  Globe,
  ShoppingCart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "European Accessibility Act (EAA) — What It Means For Your Site | TheWCAG",
  description:
    "The European Accessibility Act (Directive (EU) 2019/882) became enforceable on June 28, 2025. It sets a single accessibility baseline (EN 301 549, which references WCAG 2.1 AA) for e-commerce, banking, transport, e-books, and consumer software sold into the EU — regardless of where the seller is based.",
  keywords: [
    "European Accessibility Act",
    "EAA",
    "EAA deadline",
    "EN 301 549",
    "EU accessibility law",
    "WCAG 2.1 EU",
    "EAA compliance",
    "Directive 2019/882",
  ],
  openGraph: {
    title: "European Accessibility Act — Enforcement live since June 2025",
    description:
      "Single EU-wide accessibility baseline for e-commerce, banking, transport, e-books, and consumer software. WCAG 2.1 AA via EN 301 549.",
    url: "https://thewcag.com/european-accessibility-act",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "European Accessibility Act | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/european-accessibility-act" },
  robots: { index: true, follow: true },
}

export default function EuropeanAccessibilityActPage() {
  const json = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "European Accessibility Act — what it means for your site",
    description:
      "Plain-English overview of the EAA's scope, the EN 301 549 technical standard, and what extraterritorial sellers need to do.",
    url: "https://thewcag.com/european-accessibility-act",
    datePublished: "2026-05-04",
    author: { "@type": "Organization", name: "TheWCAG.com" },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      logo: { "@type": "ImageObject", url: "https://thewcag.com/Logo.png" },
    },
  }

  return (
    <>
      <StructuredData data={json} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "European Accessibility Act", href: "/european-accessibility-act" }]} />

            <header className="mb-8 mt-6">
              <Badge className="mb-3 bg-blue-500/15 text-blue-700 dark:text-blue-300 border-none uppercase tracking-wide text-[10px]">
                EU · Directive 2019/882 · Enforceable since June 28, 2025
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                The European Accessibility Act
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Directive (EU) 2019/882, the European Accessibility Act, sets a single accessibility
                baseline across the EU for the products and services that disabled consumers rely
                on most — banking, e-commerce, transport, e-books, and consumer-facing software.
                It applies to any business selling those services into the EU, regardless of where
                the business itself is based.
              </p>
            </header>

            {/* Key dates */}
            <Card className="border-2 mb-8">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CalendarClock className="w-5 h-5 text-primary" aria-hidden="true" />
                  Key dates
                </h2>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li>
                    <strong>17 April 2019</strong> — Directive (EU) 2019/882 adopted.
                  </li>
                  <li>
                    <strong>28 June 2022</strong> — Member states' transposition deadline; each
                    EU country incorporates the directive into national law.
                  </li>
                  <li>
                    <strong>28 June 2025</strong> — General application date. Products and services
                    placed on the market or provided to consumers from this date must comply.
                  </li>
                  <li>
                    <strong>28 June 2030</strong> — End of the transition period for self-service
                    terminals already in use before the application date.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Who is covered */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Who and what is covered?</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                The EAA is sectoral — it doesn't blanket the whole web. It targets specific
                products and services that, between them, account for the vast majority of
                everyday digital interactions:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["E-commerce websites and apps", "Any consumer-facing online shop, regardless of seller location, if it serves EU consumers."],
                  ["Banking and payment services", "Online banking, payment-account websites, mobile banking apps, payment terminals."],
                  ["Transport services", "Passenger transport websites, mobile apps, e-ticketing, real-time travel info."],
                  ["E-books and reading software", "EPUB content, dedicated e-reader apps, the software platforms that deliver them."],
                  ["Telecom services and end-user equipment", "Phones, smart TVs, set-top boxes, voice/video communication services, emergency communications (112)."],
                  ["Consumer-facing computers and OSs", "Operating systems and general-purpose hardware sold to consumers."],
                  ["Self-service terminals", "ATMs, ticketing kiosks, check-in kiosks, vending."],
                  ["Audiovisual media services", "VOD platforms, streaming apps, EPGs that interact with TV broadcasts."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl border-2 p-3">
                    <p className="font-semibold mb-1">{title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Out of scope */}
            <section className="mb-8 rounded-2xl border-2 bg-muted/30 p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2">What's NOT directly covered</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The EAA does not, on its own, require accessibility for:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>B2B-only websites and software</li>
                <li>Static brochure / marketing sites that don't sell goods or services</li>
                <li>Pre-recorded time-based media that supports a transactional service (limited carve-out)</li>
                <li>Office productivity software inside a workplace (covered by employment law instead)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Microenterprises providing services (under 10 employees and ≤ €2 million turnover)
                are exempted from the services obligations, though they're still encouraged to
                comply.
              </p>
            </section>

            {/* Standard */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Technical standard: EN 301 549 (≈ WCAG 2.1 AA)</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Compliance with the harmonized European standard{" "}
                <strong>EN 301 549</strong> creates a presumption of conformity. EN 301 549's web
                requirements directly reference WCAG 2.1 Level AA, so a WCAG 2.1 AA program is the
                practical baseline. EN 301 549 also adds requirements EN-specific requirements for
                hardware, software, ICT-based documents, and assistive-technology compatibility
                that go beyond the WCAG content rules.
              </p>
            </section>

            {/* What to do */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">What you need to do</h2>
              <ol className="space-y-3 text-sm sm:text-base list-decimal pl-5">
                <li>
                  <strong>Confirm scope.</strong> If you sell goods or services to EU consumers
                  online, you're almost certainly in scope — even if your company is based outside
                  the EU.
                </li>
                <li>
                  <strong>Map your touchpoints.</strong> Website, mobile app, checkout, account
                  area, terms PDFs, customer-service chat, transactional emails.
                </li>
                <li>
                  <strong>Assess against EN 301 549 / WCAG 2.1 AA.</strong> A combined automated +
                  manual + assistive-tech audit. Try our{" "}
                  <Link className="text-primary hover:underline" href="/scan">
                    free axe-core scanner
                  </Link>{" "}
                  for the first pass.
                </li>
                <li>
                  <strong>Publish an accessibility statement.</strong> The directive expects
                  service providers to maintain a conformance declaration. Use our{" "}
                  <Link className="text-primary hover:underline" href="/accessibility-statement-template">
                    statement template
                  </Link>
                  .
                </li>
                <li>
                  <strong>Set up a complaints channel.</strong> Each member state has a market
                  surveillance authority that can act on consumer complaints — make it easy for
                  users to report problems before regulators do.
                </li>
                <li>
                  <strong>Make accessibility part of the SDLC.</strong> Bake checks into design
                  reviews, PR templates, and release gates so new features ship compliant.
                </li>
              </ol>
            </section>

            {/* Penalties */}
            <section className="mb-8 rounded-2xl border-2 border-amber-500/40 bg-amber-500/5 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2">Penalties and enforcement</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Penalties are set by each member state and vary widely — France, Germany,
                    Italy, Spain, and the Netherlands have all implemented their own enforcement
                    regimes, with fines that can reach hundreds of thousands of euros per
                    violation in some jurisdictions, plus orders to remove non-compliant products
                    from the market.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cross-border consumers can complain to the authority in either the seller's
                    or the buyer's member state.
                  </p>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Official resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directive (EU) 2019/882 — full text on EUR-Lex
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    href="https://ec.europa.eu/social/main.jsp?catId=1202"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    European Commission — EAA overview
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EN 301 549 — current versions on ETSI
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border-2 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
                Already serving EU customers?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                The deadline has passed. Run a baseline scan, fix the high-impact violations on
                checkout and account flows first, and publish a public conformance statement so
                regulators see good-faith effort.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/scan">
                    Run a free scan
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/checklist">
                    <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
                    WCAG 2.2 checklist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
