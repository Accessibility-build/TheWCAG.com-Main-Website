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
  AlertCircle,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  ExternalLink,
  TrendingUp,
} from "lucide-react"
import { getAllLawsuits, getLawsuitsByStatus, getRecentLawsuits } from "@/lib/lawsuits-data"
import { StructuredData } from "@/components/structured-data"

export default function LawsuitsPage() {
  const allLawsuits = getAllLawsuits()
  const recentLawsuits = getRecentLawsuits(6)
  const settledLawsuits = getLawsuitsByStatus("settled")
  const ongoingLawsuits = getLawsuitsByStatus("ongoing")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Recent Accessibility Lawsuits",
    description: "A collection of recent accessibility lawsuits, legal cases, and settlements related to website accessibility and ADA compliance.",
    url: "https://thewcag.com/lawsuits",
  }

  const statusConfig = {
    settled: { label: "Settled", icon: CheckCircle2, className: "bg-green-600 text-white" },
    ongoing: { label: "Ongoing", icon: Clock, className: "bg-blue-600 text-white" },
    dismissed: { label: "Dismissed", icon: XCircle, className: "bg-gray-600 text-white" },
    won: { label: "Won", icon: CheckCircle2, className: "bg-green-600 text-white" },
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Recent Accessibility Lawsuits</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                Explore real-world accessibility lawsuits, legal cases, and settlements. Learn from these cases to
                understand the legal requirements for digital accessibility and avoid similar issues.
              </p>
              
              {/* Important Disclaimer */}
              <Card className="border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-amber-900 dark:text-amber-100">Important Disclaimer</h3>
                      <div className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
                        <p>
                          <strong>This is not a comprehensive or accurate count of all accessibility lawsuits.</strong> The cases shown here represent only a small sample of documented cases and are provided for educational and informational purposes only.
                        </p>
                        <p>
                          <strong>Please do not treat this information as a source of legal authority or security.</strong> The data presented here may contain inaccuracies, omissions, or outdated information. Settlement amounts, case statuses, and other details should be verified through official court records.
                        </p>
                        <p>
                          <strong>Before using any information from this page in legal documents, research, or professional work, you must:</strong>
                        </p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>Conduct your own independent research and verification</li>
                          <li>Consult official court records (PACER, court websites, or legal databases)</li>
                          <li>Verify all case numbers, dates, and settlement amounts through primary sources</li>
                          <li>Consult with qualified legal professionals for legal advice</li>
                        </ul>
                        <p className="pt-2 border-t border-amber-300 dark:border-amber-800">
                          This information is provided "as is" without warranty of any kind. TheWCAG.com is not responsible for any errors, omissions, or consequences arising from the use of this information.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Total Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{allLawsuits.length}</div>
                  <p className="text-sm text-muted-foreground mt-1">Documented cases</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Settled
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{settledLawsuits.length}</div>
                  <p className="text-sm text-muted-foreground mt-1">Cases resolved</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Ongoing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{ongoingLawsuits.length}</div>
                  <p className="text-sm text-muted-foreground mt-1">Active cases</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Insights */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">ADA applies to websites:</strong> Courts have consistently
                      ruled that websites are "places of public accommodation" under the ADA
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">WCAG 2.0/2.1 Level AA is the standard:</strong> Most
                      settlements require compliance with WCAG 2.0 or 2.1 Level AA
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Settlements can be costly:</strong> Beyond monetary
                      settlements, companies must invest in accessibility remediation and ongoing compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">Prevention is key:</strong> Implementing accessibility from
                      the start is far less expensive than retrofitting after a lawsuit
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Lawsuits */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Recent Cases</h2>
              <div className="space-y-6">
                {recentLawsuits.map((lawsuit) => {
                  const statusInfo = statusConfig[lawsuit.status]
                  const StatusIcon = statusInfo.icon
                  return (
                    <Card key={lawsuit.slug} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg sm:text-xl mb-2">
                              <Link
                                href={`/lawsuits/${lawsuit.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {lawsuit.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base mb-3">{lawsuit.summary}</CardDescription>
                          </div>
                          <Badge className={`${statusInfo.className} shrink-0`}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {statusInfo.label}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="flex items-start gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                            <div>
                              <span className="text-muted-foreground">Filed: </span>
                              <span className="font-medium">{formatDate(lawsuit.dateFiled)}</span>
                            </div>
                          </div>
                          {lawsuit.dateResolved && (
                            <div className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                              <div>
                                <span className="text-muted-foreground">Resolved: </span>
                                <span className="font-medium">{formatDate(lawsuit.dateResolved)}</span>
                              </div>
                            </div>
                          )}
                          {lawsuit.settlementAmount && (
                            <div className="flex items-start gap-2 text-sm">
                              <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                              <div>
                                <span className="text-muted-foreground">Settlement: </span>
                                <span className="font-medium">{lawsuit.settlementAmount}</span>
                              </div>
                            </div>
                          )}
                          <div className="flex items-start gap-2 text-sm">
                            <Scale className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                            <div>
                              <span className="text-muted-foreground">Jurisdiction: </span>
                              <span className="font-medium">{lawsuit.jurisdiction}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {lawsuit.issues.slice(0, 3).map((issue, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {issue}
                            </Badge>
                          ))}
                          {lawsuit.issues.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{lawsuit.issues.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <Link
                          href={`/lawsuits/${lawsuit.slug}`}
                          className="inline-flex items-center text-sm sm:text-base text-primary hover:underline font-medium"
                        >
                          Read full case details
                          <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Learn More */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Learn More About Accessibility Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Link
                    href="/compliance"
                    className="p-3 sm:p-4 rounded-lg border hover:bg-muted transition-colors flex items-center gap-2 sm:gap-3"
                  >
                    <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base">Accessibility Laws</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Learn about ADA, Section 508, and more</div>
                    </div>
                  </Link>
                  <Link
                    href="/getting-started"
                    className="p-3 sm:p-4 rounded-lg border hover:bg-muted transition-colors flex items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base">Getting Started</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Begin your accessibility journey</div>
                    </div>
                  </Link>
                  <Link
                    href="/checklist"
                    className="p-3 sm:p-4 rounded-lg border hover:bg-muted transition-colors flex items-center gap-2 sm:gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base">WCAG Checklist</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Ensure compliance with our checklist</div>
                    </div>
                  </Link>
                  <Link
                    href="/accessibility-audit-guide"
                    className="p-3 sm:p-4 rounded-lg border hover:bg-muted transition-colors flex items-center gap-2 sm:gap-3"
                  >
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-sm sm:text-base">Audit Guide</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Learn how to audit your website</div>
                    </div>
                  </Link>
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

