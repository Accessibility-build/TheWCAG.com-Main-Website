import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { LawsuitArchiveTable } from "@/components/lawsuit-archive-table"
import { ArrowLeft, Archive } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Lawsuit Archive - Historical Cases Database",
  description:
    "Comprehensive archive of web accessibility lawsuits and settlements from 2006 to present. Search and filter historical accessibility cases by year, plaintiff, defendant, and issue.",
  keywords: [
    "accessibility lawsuits",
    "lawsuit archive",
    "historical cases",
    "web accessibility",
    "ADA litigation",
    "settlements",
  ],
  openGraph: {
    title: "Accessibility Lawsuit Archive - Historical Cases Database",
    description: "Search historical accessibility lawsuits and settlements",
    url: "https://thewcag.com/lawsuits/archive",
    type: "website",
    siteName: "TheWCAG",
  },
}

export default function LawsuitArchivePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Lawsuit Archive",
    description: "Historical database of accessibility lawsuits and settlements",
    url: "https://thewcag.com/lawsuits/archive",
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
          name: "Lawsuits",
          item: "https://thewcag.com/lawsuits",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Archive",
          item: "https://thewcag.com/lawsuits/archive",
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
          <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
            <Breadcrumb
              items={[
                { label: "Lawsuits", href: "/lawsuits" },
                { label: "Archive", href: "/lawsuits/archive" },
              ]}
            />

            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Archive className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                    Accessibility Lawsuit Archive
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Historical database of web accessibility lawsuits and settlements from 2006 to present.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 mt-6">
                <p className="text-sm sm:text-base text-blue-900 dark:text-blue-100 leading-relaxed">
                  This archive contains a comprehensive collection of accessibility-related lawsuits and
                  settlements spanning nearly two decades. The data is sourced from multiple resources and
                  provides insights into common accessibility issues, targeted industries, and settlement
                  trends. Use the search and filter tools below to explore cases by year, plaintiff, defendant,
                  or specific accessibility issues.
                </p>
              </div>
            </div>

            {/* Archive Table */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                Search & Filter Cases
              </h2>
              <LawsuitArchiveTable />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">19+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Years of Coverage (2006-2025)</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">Documented Cases</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-6">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Billions
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">In Settlements</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/lawsuits" className="flex-1">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Recent Cases
                </Button>
              </Link>
              <Link href="/lawsuits#trends" className="flex-1">
                <Button variant="secondary" className="w-full">
                  View Litigation Trends
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

