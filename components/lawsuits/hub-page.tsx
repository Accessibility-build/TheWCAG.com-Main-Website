import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Scale } from "lucide-react"
import type { Lawsuit } from "@/lib/lawsuits/types"

interface HubPageProps {
  title: string
  description: string
  /** Canonical path including leading slash, e.g. /lawsuits/year/2024 */
  canonicalPath: string
  /** Crumb label rendered after "Lawsuits" */
  breadcrumbLabel: string
  lawsuits: Lawsuit[]
}

const STATUS_VARIANT: Record<Lawsuit["status"], "default" | "secondary" | "outline" | "destructive"> = {
  settled: "default",
  ongoing: "secondary",
  dismissed: "outline",
  won: "default",
}

export function LawsuitHubPage({
  title,
  description,
  canonicalPath,
  breadcrumbLabel,
  lawsuits,
}: HubPageProps) {
  const total = lawsuits.length
  const settled = lawsuits.filter((l) => l.status === "settled").length
  const ongoing = lawsuits.filter((l) => l.status === "ongoing").length
  const dismissed = lawsuits.filter((l) => l.status === "dismissed").length

  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    numberOfItems: total,
    itemListElement: lawsuits.slice(0, 25).map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://thewcag.com/lawsuits/${l.slug}`,
      name: l.title,
    })),
  }

  return (
    <>
      <StructuredData data={itemListJson} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Lawsuits", href: "/lawsuits" },
                { label: breadcrumbLabel, href: canonicalPath },
              ]}
            />

            <header className="mb-8 sm:mb-10 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {description}
              </p>
            </header>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{total}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Cases</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-bold">{settled}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Settled</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-bold">{ongoing}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Ongoing</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-bold">{dismissed}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Dismissed</div>
                </CardContent>
              </Card>
            </div>

            {/* Cases */}
            {lawsuits.length === 0 ? (
              <p className="text-muted-foreground">No cases found in this view.</p>
            ) : (
              <ul className="space-y-3 sm:space-y-4">
                {lawsuits.map((l) => {
                  const filed = new Date(l.dateFiled).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                  return (
                    <li key={l.slug}>
                      <Link
                        href={`/lawsuits/${l.slug}`}
                        className="group block rounded-2xl border-2 bg-card p-4 sm:p-5 md:p-6 hover:border-primary/40 hover:bg-muted/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant={STATUS_VARIANT[l.status]} className="capitalize">
                                {l.status}
                              </Badge>
                              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" aria-hidden="true" />
                                <span>Filed {filed}</span>
                              </span>
                              {l.settlementAmount && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                  {l.settlementAmount}
                                </span>
                              )}
                            </div>
                            <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug mb-1.5 group-hover:underline decoration-2 underline-offset-4">
                              {l.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                              {l.summary}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium text-foreground">Defendant:</span> {l.defendant}
                              <span className="mx-2" aria-hidden="true">·</span>
                              <span className="font-medium text-foreground">Jurisdiction:</span> {l.jurisdiction}
                            </p>
                          </div>
                          <ArrowRight
                            className="hidden sm:block w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/lawsuits"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Scale className="w-4 h-4" aria-hidden="true" />
                Browse all lawsuits
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
