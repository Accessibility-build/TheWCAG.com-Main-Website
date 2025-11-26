import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"
import { getAllLawsuits, getLawsuitsByStatus, getRecentLawsuitsByYears } from "@/lib/lawsuits-data"
import { StructuredData } from "@/components/structured-data"
import { LitigationTrends } from "@/components/litigation-trends"
import { LawsuitArchiveTable } from "@/components/lawsuit-archive-table"
import { PaginatedLawsuitsList } from "@/components/paginated-lawsuits-list"

export const metadata: Metadata = {
  title: "Accessibility Lawsuits Database - ADA & WCAG Legal Cases | TheWCAG",
  description:
    "Comprehensive database of accessibility lawsuits, ADA compliance legal cases, and website accessibility settlements. Learn from real-world litigation trends and avoid common violations.",
  keywords: [
    "accessibility lawsuits",
    "ADA lawsuits",
    "website accessibility legal cases",
    "WCAG lawsuits",
    "accessibility settlements",
    "ADA compliance litigation",
  ],
  openGraph: {
    title: "Accessibility Lawsuits Database - Legal Cases & Settlements",
    description:
      "Track recent accessibility lawsuits and ADA compliance legal cases. Learn from settlements and understand litigation trends to protect your business.",
    url: "https://thewcag.com/lawsuits",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Lawsuits Database",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/lawsuits",
  },
}

export default function LawsuitsPage() {
  // Get lawsuits from the last 3 years (current year, last year, and year before)
  const recentLawsuits = getRecentLawsuitsByYears(3)
  const allLawsuits = getAllLawsuits()
  
  // Calculate statistics from recent lawsuits only
  const settledLawsuits = recentLawsuits.filter((l) => l.status === "settled")
  const ongoingLawsuits = recentLawsuits.filter((l) => l.status === "ongoing")
  
  // Get current year and previous years for display
  const currentYear = new Date().getFullYear()
  const lastYear = currentYear - 1
  const yearBeforeLast = currentYear - 2

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Recent Accessibility Lawsuits - Legal Cases & Settlements",
    description: "A comprehensive collection of recent accessibility lawsuits, legal cases, and settlements related to website accessibility and ADA compliance.",
    url: "https://thewcag.com/lawsuits",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Recent Accessibility Lawsuits",
      description: "Collection of recent digital accessibility legal cases from the last 3 years",
      numberOfItems: recentLawsuits.length,
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
                  <div className="text-3xl font-bold">{recentLawsuits.length}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cases from {yearBeforeLast}, {lastYear}, and {currentYear}
                  </p>
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

            {/* Recent Lawsuits with Pagination */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Recent Cases ({yearBeforeLast} - {currentYear})
              </h2>
              <p className="text-muted-foreground mb-6">
                Showing lawsuits filed in the last 3 years ({yearBeforeLast}, {lastYear}, and {currentYear}).
              </p>
              <PaginatedLawsuitsList lawsuits={recentLawsuits} />
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

            {/* Historical Lawsuit Archive Section */}
            <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Historical Lawsuit Archive</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  Browse our comprehensive archive of historical accessibility lawsuits and settlements from 2000 to 2017.
                  This archive includes detailed case information with citations to original sources.
                </p>
              </div>
              <LawsuitArchiveTable />
            </div>

            {/* Litigation Trends Section */}
            <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t">
              <LitigationTrends />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

