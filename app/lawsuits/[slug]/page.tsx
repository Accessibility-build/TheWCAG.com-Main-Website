import Link from "next/link"
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
    },
    datePublished: lawsuit.dateFiled,
    dateModified: lawsuit.dateResolved || lawsuit.dateFiled,
    articleSection: "Accessibility Lawsuits",
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
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
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h1 className="text-3xl md:text-4xl font-bold">{lawsuit.title}</h1>
                  </div>
                  <p className="text-lg text-muted-foreground">{lawsuit.summary}</p>
                </div>
                <Badge className={`${statusInfo.className} text-sm`}>
                  <StatusIcon className="h-4 w-4 mr-1" />
                  {statusInfo.label}
                </Badge>
              </div>
            </div>

            {/* Key Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Case Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Plaintiff</p>
                        <p className="text-sm text-muted-foreground">{lawsuit.plaintiff}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Defendant</p>
                        <p className="text-sm text-muted-foreground">{lawsuit.defendant}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Date Filed</p>
                        <p className="text-sm text-muted-foreground">{formatDate(lawsuit.dateFiled)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {lawsuit.dateResolved && (
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Date Resolved</p>
                          <p className="text-sm text-muted-foreground">{formatDate(lawsuit.dateResolved)}</p>
                        </div>
                      </div>
                    )}
                    {lawsuit.settlementAmount && (
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Settlement Amount</p>
                          <p className="text-sm text-muted-foreground">{lawsuit.settlementAmount}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Scale className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Jurisdiction</p>
                        <p className="text-sm text-muted-foreground">{lawsuit.jurisdiction}</p>
                      </div>
                    </div>
                    {lawsuit.caseNumber && (
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">Case Number</p>
                          <p className="text-sm text-muted-foreground">{lawsuit.caseNumber}</p>
                        </div>
                      </div>
                    )}
                    {lawsuit.wcagLevel && (
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">WCAG Level</p>
                          <Badge variant="outline" className="mt-1">
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
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Case Details</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{lawsuit.details}</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility Issues */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Accessibility Issues Identified</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {lawsuit.issues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Key Takeaways */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {lawsuit.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <Card className="mb-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{lawsuit.impact}</p>
              </CardContent>
            </Card>

            {/* Official References & Related Links */}
            <Card className="mb-8 border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                  Official References & Court Documents
                </CardTitle>
                <CardDescription>
                  Links to official court documents, government records, and legal references for this case
                </CardDescription>
              </CardHeader>
              <CardContent>
                {lawsuit.relatedLinks && lawsuit.relatedLinks.length > 0 ? (
                  <ul className="space-y-3">
                    {lawsuit.relatedLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-2 font-medium text-base group"
                        >
                          <FileText className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                          {link.title}
                          <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-muted-foreground p-4 bg-background/50 rounded-lg border border-dashed">
                    <p>Official court documents and references are not currently available for this case.</p>
                    <p className="mt-2 text-xs">
                      For official records, please search PACER (Public Access to Court Electronic Records) or contact the relevant court directly.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Related Cases */}
            {relatedLawsuits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {relatedLawsuits.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/lawsuits/${related.slug}`}
                        className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{related.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{related.summary}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
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

