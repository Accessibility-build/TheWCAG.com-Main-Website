import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, MapPin } from "lucide-react"
import {
  STATE_LAWS,
  getStateLaw,
  getStateLawSlugs,
} from "@/lib/state-accessibility-laws"

export const dynamicParams = false

interface RouteProps {
  params: Promise<{ state: string }>
}

export async function generateStaticParams() {
  return getStateLawSlugs().map((state) => ({ state }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { state } = await params
  const law = getStateLaw(state)
  if (!law) return { title: "State Not Found | TheWCAG" }
  const title = `${law.state} Web Accessibility Laws — ${law.shortName} ADA Compliance | TheWCAG`
  const description = `${law.statute}. ${law.summary}`
  return {
    title,
    description,
    keywords: [
      `${law.state} accessibility law`,
      `${law.state} ADA compliance`,
      `${law.state} website accessibility`,
      law.statute,
    ],
    openGraph: {
      title,
      description,
      url: `https://thewcag.com/compliance/state/${state}`,
      type: "article",
      siteName: "TheWCAG - An accessibility Guide",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://thewcag.com/compliance/state/${state}` },
    robots: { index: true, follow: true },
  }
}

export default async function StateAccessibilityLawPage({ params }: RouteProps) {
  const { state } = await params
  const law = getStateLaw(state)
  if (!law) notFound()

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${law.state} accessibility laws`,
    description: law.summary,
    url: `https://thewcag.com/compliance/state/${state}`,
    author: { "@type": "Organization", name: "TheWCAG.com" },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      logo: { "@type": "ImageObject", url: "https://thewcag.com/Logo.png" },
    },
  }

  const otherStates = STATE_LAWS.filter((s) => s.slug !== state)

  return (
    <>
      <StructuredData data={articleJson} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Compliance", href: "/compliance" },
                { label: law.state, href: `/compliance/state/${state}` },
              ]}
            />

            <header className="mb-8 mt-6">
              <Badge className="mb-3 bg-violet-500/15 text-violet-700 dark:text-violet-300 border-none uppercase tracking-wide text-[10px]">
                <MapPin className="w-3 h-3 mr-1" aria-hidden="true" />
                {law.state} · State law layered on the ADA
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                {law.state} web accessibility laws
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2">
                {law.summary}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Statute:</span> {law.statute}
              </p>
            </header>

            {/* Quick facts */}
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Damages</div>
                  <div className="text-base font-semibold mt-1">
                    {law.damagesAvailable ? "Yes" : "Injunctive only"}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{law.damagesNote}</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Standard</div>
                  <div className="text-base font-semibold mt-1">WCAG benchmark</div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{law.technicalStandard}</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Federal floor</div>
                  <div className="text-base font-semibold mt-1">ADA Title II / III</div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Federal ADA still applies in addition to {law.shortName} state law.
                  </p>
                </CardContent>
              </Card>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Why this law matters</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {law.whyItMatters}
              </p>
            </section>

            {law.sections.map((s) => (
              <section key={s.heading} className="mb-7">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{s.heading}</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.body}</p>
              </section>
            ))}

            {/* Resources */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Official resources</h2>
              <ul className="space-y-2 text-sm">
                {law.resources.map((r) => (
                  <li key={r.url}>
                    <a
                      className="text-primary hover:underline inline-flex items-center gap-1"
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.label}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Related</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link
                  href={`/lawsuits/category/digital`}
                  className="group rounded-2xl border-2 p-4 hover:border-primary/40 transition-colors"
                >
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Lawsuit hub
                  </p>
                  <p className="font-semibold group-hover:underline">Digital accessibility lawsuits</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Browse the cases shaping how these laws are interpreted.
                  </p>
                </Link>
                <Link
                  href="/compliance"
                  className="group rounded-2xl border-2 p-4 hover:border-primary/40 transition-colors"
                >
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Hub
                  </p>
                  <p className="font-semibold group-hover:underline">All compliance laws</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Federal, state, and international accessibility legal frameworks.
                  </p>
                </Link>
              </div>
            </section>

            {/* Other states */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Other states</h2>
              <ul className="flex flex-wrap gap-2">
                {otherStates.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/compliance/state/${s.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm font-medium hover:border-primary/50 hover:bg-muted transition-colors"
                    >
                      {s.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border-2 bg-gradient-to-br from-primary/10 to-violet-500/10 p-5 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2">Run a quick scan</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Whatever the local statute says, the technical baseline is WCAG 2.1 AA. A 60-second
                axe-core scan will tell you where you stand.
              </p>
              <Button asChild>
                <Link href="/scan">
                  Scan a URL
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
