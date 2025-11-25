import Link from "next/link"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Calendar,
  DollarSign,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react"
import { getLawsuitBySlug, getAllLawsuits } from "@/lib/lawsuits-data"
import { notFound } from "next/navigation"
import { StructuredData } from "@/components/structured-data"
import { getLawsuitOGImage } from "@/lib/og-image"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lawsuit = getLawsuitBySlug(slug)

  if (!lawsuit) {
    return {
      title: "Lawsuit Not Found | TheWCAG",
    }
  }

  return {
    title: `${lawsuit.title} - Accessibility Lawsuit | TheWCAG`,
    description: lawsuit.summary,
    keywords: [
      "accessibility lawsuit",
      "ADA lawsuit",
      "web accessibility case",
      lawsuit.defendant,
      lawsuit.title,
      lawsuit.jurisdiction,
    ],
    openGraph: {
      title: `${lawsuit.title} - Accessibility Lawsuit`,
      description: lawsuit.summary,
      type: "article",
      url: `https://thewcag.com/lawsuits/${lawsuit.slug}`,
      publishedTime: lawsuit.dateFiled,
      modifiedTime: lawsuit.dateResolved || lawsuit.dateFiled,
      images: [
        {
          url: getLawsuitOGImage(lawsuit.title, lawsuit.summary),
          width: 1200,
          height: 630,
          alt: lawsuit.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: lawsuit.title,
      description: lawsuit.summary,
      images: [getLawsuitOGImage(lawsuit.title, lawsuit.summary)],
    },
    alternates: {
      canonical: `https://thewcag.com/lawsuits/${lawsuit.slug}`,
    },
  }
}

export default async function LawsuitPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lawsuit = getLawsuitBySlug(slug)

  if (!lawsuit) {
    notFound()
  }

  const allLawsuits = getAllLawsuits()
  const relatedLawsuits = allLawsuits
    .filter((l) => l.slug !== lawsuit.slug && (l.defendant === lawsuit.defendant || l.jurisdiction === lawsuit.jurisdiction))
    .slice(0, 3)

  const statusConfig = {
    settled: { label: "Settled", icon: CheckCircle2, className: "bg-green-600 text-white" },
    ongoing: { label: "Ongoing", icon: Clock, className: "bg-blue-600 text-white" },
    dismissed: { label: "Dismissed", icon: XCircle, className: "bg-gray-600 text-white" },
    won: { label: "Won", icon: CheckCircle2, className: "bg-green-600 text-white" },
  }

  const statusInfo = statusConfig[lawsuit.status]
  const StatusIcon = statusInfo.icon

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: lawsuit.title,
    description: lawsuit.summary,
    url: `https://thewcag.com/lawsuits/${lawsuit.slug}`,
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
    datePublished: lawsuit.dateFiled,
    dateModified: lawsuit.dateResolved || lawsuit.dateFiled,
    articleSection: "Accessibility Lawsuits",
    keywords: [
      lawsuit.title,
      "accessibility lawsuit",
      "ADA lawsuit",
      lawsuit.defendant,
      "website accessibility case",
      lawsuit.jurisdiction,
      lawsuit.wcagLevel ? `WCAG ${lawsuit.wcagLevel}` : "",
    ].filter(Boolean),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thewcag.com/lawsuits/${lawsuit.slug}`,
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
          name: "Accessibility Lawsuits",
          item: "https://thewcag.com/lawsuits",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: lawsuit.title,
          item: `https://thewcag.com/lawsuits/${lawsuit.slug}`,
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/lawsuits" className="hover:text-foreground">
                    Lawsuits
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium">{lawsuit.title}</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" aria-hidden="true" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{lawsuit.title}</h1>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{lawsuit.summary}</p>
                </div>
                <Badge className={`${statusInfo.className} text-xs sm:text-sm shrink-0`}>
                  <StatusIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  {statusInfo.label}
                </Badge>
              </div>
            </div>

            {/* Key Information */}
            <Card className="mb-6 sm:mb-8">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Case Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold">Plaintiff</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{lawsuit.plaintiff}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold">Defendant</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{lawsuit.defendant}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold">Date Filed</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{formatDate(lawsuit.dateFiled)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {lawsuit.dateResolved && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-semibold">Date Resolved</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{formatDate(lawsuit.dateResolved)}</p>
                        </div>
                      </div>
                    )}
                    {lawsuit.settlementAmount && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-semibold">Settlement Amount</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{lawsuit.settlementAmount}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold">Jurisdiction</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{lawsuit.jurisdiction}</p>
                      </div>
                    </div>
                    {lawsuit.caseNumber && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-semibold">Case Number</p>
                          <p className="text-xs sm:text-sm text-muted-foreground break-words">{lawsuit.caseNumber}</p>
                        </div>
                      </div>
                    )}
                    {lawsuit.wcagLevel && (
                      <div className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm font-semibold">WCAG Level</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            Level {lawsuit.wcagLevel}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Details */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Case Details</h2>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">{lawsuit.details}</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility Issues */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Accessibility Issues Identified</h2>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {lawsuit.issues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Key Takeaways */}
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Key Takeaways</h2>
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {lawsuit.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <Card className="mb-6 sm:mb-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{lawsuit.impact}</p>
              </CardContent>
            </Card>

            {/* Official References & Court Documents */}
            {(lawsuit.officialLinks && lawsuit.officialLinks.length > 0) || (lawsuit.unofficialLinks && lawsuit.unofficialLinks.length > 0) || (lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0) ? (
              <>
                {/* Official Links */}
                {((lawsuit.officialLinks && lawsuit.officialLinks.length > 0) || (lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0 && !lawsuit.officialLinks)) && (
                  <Card className="mb-6 sm:mb-8 border-primary/30 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" aria-hidden="true" />
                        Official References & Court Documents
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Links to official court documents, government records (.gov), and official organization sources
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {lawsuit.officialLinks && lawsuit.officialLinks.length > 0 ? (
                        <ul className="space-y-2 sm:space-y-3">
                          {lawsuit.officialLinks.map((link, index) => (
                            <li key={index}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-2 font-medium text-sm sm:text-base group break-words"
                              >
                                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-primary group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                <span className="break-words">{link.title}</span>
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0 ? (
                        <ul className="space-y-2 sm:space-y-3">
                          {lawsuit.relatedLinks
                            .filter((link) => {
                              const url = link.url.toLowerCase()
                              return (
                                url.includes(".gov") ||
                                url.includes(".uscourts.gov") ||
                                url.includes("nfb.org") ||
                                url.includes("nad.org") ||
                                url.includes("ada.gov") ||
                                url.includes("justice.gov") ||
                                link.title.toLowerCase().includes("official")
                              )
                            })
                            .map((link, index) => (
                              <li key={index}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline inline-flex items-center gap-2 font-medium text-sm sm:text-base group break-words"
                                >
                                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-primary group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                  <span className="break-words">{link.title}</span>
                                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
                                </a>
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <div className="text-xs sm:text-sm text-muted-foreground p-3 sm:p-4 bg-background/50 rounded-lg border border-dashed">
                          <p>Official court documents and references are not currently available for this case.</p>
                          <p className="mt-2 text-xs">
                            For official records, please search PACER (Public Access to Court Electronic Records) or contact the relevant court directly.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Unofficial Links */}
                {((lawsuit.unofficialLinks && lawsuit.unofficialLinks.length > 0) || (lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0)) && (
                  <Card className="mb-6 sm:mb-8 border-secondary/30 bg-secondary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-secondary shrink-0" aria-hidden="true" />
                        Unofficial References & Public Sources
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Links to public legal databases, news articles, and other non-government sources referencing this case
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {lawsuit.unofficialLinks && lawsuit.unofficialLinks.length > 0 ? (
                        <ul className="space-y-2 sm:space-y-3">
                          {lawsuit.unofficialLinks.map((link, index) => (
                            <li key={index}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:underline inline-flex items-center gap-2 font-medium text-sm sm:text-base group break-words"
                              >
                                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-secondary group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                <span className="break-words">{link.title}</span>
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0 ? (
                        <ul className="space-y-2 sm:space-y-3">
                          {lawsuit.relatedLinks
                            .filter((link) => {
                              const url = link.url.toLowerCase()
                              return (
                                !url.includes(".gov") &&
                                !url.includes(".uscourts.gov") &&
                                !url.includes("nfb.org") &&
                                !url.includes("nad.org") &&
                                !url.includes("ada.gov") &&
                                !url.includes("justice.gov") &&
                                !link.title.toLowerCase().includes("official")
                              )
                            })
                            .map((link, index) => (
                              <li key={index}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-secondary hover:underline inline-flex items-center gap-2 font-medium text-sm sm:text-base group break-words"
                                >
                                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-secondary group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                  <span className="break-words">{link.title}</span>
                                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform shrink-0" aria-hidden="true" />
                                </a>
                              </li>
                            ))}
                        </ul>
                      ) : null}
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card className="mb-6 sm:mb-8 border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" aria-hidden="true" />
                    Official References & Court Documents
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Links to official court documents, government records, and legal references for this case
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs sm:text-sm text-muted-foreground p-3 sm:p-4 bg-background/50 rounded-lg border border-dashed">
                    <p>Official court documents and references are not currently available for this case.</p>
                    <p className="mt-2 text-xs">
                      For official records, please search PACER (Public Access to Court Electronic Records) using the case number or contact the relevant court directly. You may also find information on public legal databases like Justia or CourtListener.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Cases */}
            {relatedLawsuits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Related Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    {relatedLawsuits.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/lawsuits/${related.slug}`}
                        className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 sm:gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base mb-1">{related.title}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{related.summary}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <Link
                href="/lawsuits"
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                <ArrowRight className="h-4 w-4 mr-1 rotate-180" aria-hidden="true" />
                Back to All Lawsuits
              </Link>
              <Link
                href="/compliance"
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Learn About Compliance
                <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

