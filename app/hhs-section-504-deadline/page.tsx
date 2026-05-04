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
  CheckCircle2,
  ExternalLink,
  Hospital,
  Stethoscope,
} from "lucide-react"

export const metadata: Metadata = {
  title: "HHS Section 504 Web Accessibility Deadline (May 2026) | TheWCAG",
  description:
    "The HHS Office for Civil Rights' final rule under Section 504 of the Rehabilitation Act requires healthcare providers receiving federal funding to make their websites, mobile apps, and kiosks WCAG 2.1 Level AA accessible. Compliance deadline: May 11, 2026 for entities with 15+ employees, May 10, 2027 for smaller entities.",
  keywords: [
    "HHS Section 504",
    "Section 504 web accessibility",
    "healthcare ADA compliance",
    "patient portal accessibility",
    "WCAG 2.1 healthcare",
    "May 2026 deadline",
    "OCR final rule",
    "Rehabilitation Act Section 504",
  ],
  openGraph: {
    title: "HHS Section 504 Web Accessibility Deadline — May 2026",
    description:
      "Healthcare providers receiving federal funding must make websites, mobile apps, and kiosks WCAG 2.1 AA accessible by May 11, 2026.",
    url: "https://thewcag.com/hhs-section-504-deadline",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "HHS Section 504 Deadline | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/hhs-section-504-deadline" },
  robots: { index: true, follow: true },
}

export default function HHSSection504DeadlinePage() {
  const json = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "HHS Section 504 Web Accessibility Deadline (May 2026)",
    description:
      "Final rule from HHS OCR requiring healthcare providers receiving federal funding to make websites, mobile apps, and kiosks WCAG 2.1 AA accessible.",
    url: "https://thewcag.com/hhs-section-504-deadline",
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
            <Breadcrumb items={[{ label: "HHS Section 504 Deadline", href: "/hhs-section-504-deadline" }]} />

            <header className="mb-8 mt-6">
              <Badge className="mb-3 bg-rose-500/15 text-rose-700 dark:text-rose-300 border-none uppercase tracking-wide text-[10px]">
                Healthcare · Federal funding · Final rule
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                HHS Section 504 web accessibility deadline
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                On May 9, 2024, the U.S. Department of Health and Human Services Office for Civil
                Rights published a final rule updating Section 504 of the Rehabilitation Act of
                1973. The rule requires every recipient of HHS federal financial assistance to
                make its websites, mobile applications, and self-service kiosks accessible — and
                bakes WCAG 2.1 Level AA in as the technical standard.
              </p>
            </header>

            {/* Key dates */}
            <Card className="border-2 mb-8">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CalendarClock className="w-5 h-5 text-primary" aria-hidden="true" />
                  Compliance deadlines
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Hospital className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Recipients with 15 or more employees</p>
                      <p className="text-sm text-muted-foreground">
                        Compliance required by{" "}
                        <span className="font-semibold text-foreground">May 11, 2026</span> — three
                        years after the final rule's effective date.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Stethoscope className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Recipients with fewer than 15 employees</p>
                      <p className="text-sm text-muted-foreground">
                        Compliance required by{" "}
                        <span className="font-semibold text-foreground">May 10, 2027</span> — four
                        years after the final rule's effective date.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Who is covered */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Who is covered?</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Section 504 reaches anyone receiving federal financial assistance from HHS. In
                practice that means most of the U.S. healthcare system, including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Hospitals and health systems billing Medicare or Medicaid",
                  "Federally qualified health centers (FQHCs)",
                  "Community mental health and substance-use programs",
                  "State and local public health agencies",
                  "Universities and medical schools with HHS grants",
                  "Children's hospitals and pediatric programs",
                  "Long-term care facilities receiving HHS funding",
                  "HHS-funded telehealth platforms and EHR vendors (when acting as a recipient)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What's covered */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">What digital surfaces are covered?</h2>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Websites</strong> — public marketing sites and authenticated patient
                    portals.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Mobile applications</strong> — native iOS / Android apps the recipient
                    publishes or contracts for.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Self-service kiosks</strong> — registration kiosks, pharmacy kiosks,
                    payment kiosks, and digital wayfinding terminals.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>PDFs and embedded documents</strong> served from any of the above.
                  </span>
                </li>
              </ul>
            </section>

            {/* Technical standard */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Technical standard: WCAG 2.1 AA</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                The rule incorporates the W3C's Web Content Accessibility Guidelines version 2.1,
                Level AA, by reference. There are limited exceptions for archived content,
                pre-existing electronic documents, third-party content not posted by the recipient,
                and password-protected content not used by people with disabilities — but the
                exceptions are narrow and most provider-published content does not qualify.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The matching DOJ Title II rule uses the same standard, so a single accessibility
                program can typically satisfy both — see our{" "}
                <Link className="text-primary hover:underline" href="/ada-title-ii-deadline-extension">
                  Title II deadline coverage
                </Link>
                .
              </p>
            </section>

            {/* What to do now */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">What to do right now</h2>
              <ol className="space-y-3 text-sm sm:text-base list-decimal pl-5">
                <li>
                  <strong>Inventory.</strong> List every website, app, kiosk, and patient-facing
                  PDF the organization publishes — including third-party tools embedded into your
                  domains.
                </li>
                <li>
                  <strong>Audit against WCAG 2.1 AA.</strong> Use both automated tooling and a
                  small panel of screen-reader and keyboard-only manual testers. Our{" "}
                  <Link className="text-primary hover:underline" href="/scan">
                    free axe-core scanner
                  </Link>{" "}
                  is a fast first-pass.
                </li>
                <li>
                  <strong>Triage.</strong> Prioritize the patient-portal, scheduling, billing,
                  and telehealth flows — the surfaces a patient cannot avoid.
                </li>
                <li>
                  <strong>Vendor accountability.</strong> Get written conformance commitments from
                  EHR, scheduling, kiosk, and telehealth vendors. Include them in contracts.
                </li>
                <li>
                  <strong>Publish an accessibility statement and feedback channel.</strong> Use our{" "}
                  <Link className="text-primary hover:underline" href="/accessibility-statement-template">
                    free template
                  </Link>
                  .
                </li>
                <li>
                  <strong>Train.</strong> Train designers, developers, and content authors. The
                  rule applies to content you publish going forward, not just legacy material.
                </li>
              </ol>
            </section>

            {/* Risks */}
            <section className="mb-8 rounded-2xl border-2 border-amber-500/40 bg-amber-500/5 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2">Don&apos;t wait for the deadline</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Healthcare websites are already being targeted in private litigation under
                    Title III of the ADA — well before the Section 504 deadline. Hospitals,
                    pharmacies, and insurers have settled multi-million-dollar class actions in the
                    past 24 months. See our{" "}
                    <Link className="text-primary hover:underline" href="/lawsuits/category/healthcare">
                      healthcare accessibility lawsuit hub
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A complaint filed under Section 504 can also lead to a loss of federal funding
                    — a far steeper consequence than statutory damages.
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
                    href="https://www.hhs.gov/civil-rights/for-individuals/disability/section-504-rehabilitation-act-of-1973/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HHS OCR — Section 504 of the Rehabilitation Act
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    href="https://www.federalregister.gov/documents/2024/05/09/2024-09237/nondiscrimination-on-the-basis-of-disability-in-programs-or-activities-receiving-federal-financial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Federal Register — final rule (May 9, 2024)
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary hover:underline inline-flex items-center gap-1"
                    href="https://www.w3.org/TR/WCAG21/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W3C WCAG 2.1 Recommendation
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border-2 bg-gradient-to-br from-rose-500/10 to-amber-500/10 p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Get started today</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Run a baseline scan of your patient portal, then walk it with a screen reader.
                Most providers find their first 50 critical issues in under a day.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/scan">
                    Run a free scan
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/checklist">View the WCAG 2.2 checklist</Link>
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
