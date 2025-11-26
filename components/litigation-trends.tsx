'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, AlertCircle, Users, ExternalLink, BookOpen } from "lucide-react"

export function LitigationTrends() {
  const trends = [
    {
      title: "Federal ADA Title III Filings",
      icon: TrendingUp,
      color: "text-blue-600",
      stats: [
        { label: "2023", value: "8,227 cases" },
        { label: "2024", value: "8,800 cases (+7%)" },
        { label: "2025", value: "~9,100 projected" },
      ],
    },
    {
      title: "Digital/Web Accessibility Suits",
      icon: BarChart3,
      color: "text-purple-600",
      stats: [
        { label: "2023", value: "2,749 cases" },
        { label: "2024", value: "2,452 cases (-13%)" },
        { label: "2025", value: "+37% expected rebound" },
      ],
    },
    {
      title: "Geographic Hotspots",
      icon: AlertCircle,
      color: "text-orange-600",
      stats: [
        { label: "New York", value: "63.7% of filings" },
        { label: "Illinois", value: "+746% increase" },
        { label: "Minnesota", value: "+745%+ in 2025" },
      ],
    },
    {
      title: "Most Targeted Industries",
      icon: Users,
      color: "text-green-600",
      stats: [
        { label: "Fashion & Apparel", value: "35.16% (1,121 cases)" },
        { label: "Food & Beverages", value: "23.78% (758 cases)" },
        { label: "E-commerce Overall", value: "~77% of all suits" },
      ],
    },
  ]

  const topIssues = [
    "Missing alt text for images",
    "Screen reader incompatibility",
    "Keyboard navigation failures",
    "Missing form labels",
    "Empty or redundant links",
    "Missing video captions",
    "Color contrast issues",
    "Inaccessible menus/dropdowns",
  ]

  const topFirms = [
    { name: "So Cal Equal Access Group", cases: "2,598" },
    { name: "Stein Saks, PLLC", cases: "395" },
    { name: "Sconzo Law", cases: "193" },
    { name: "Gottlieb Associates", cases: "190" },
  ]

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-4">
          <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
          Accessibility Litigation Trends 2024-2025
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Understanding the evolving landscape of accessibility enforcement and litigation patterns
        </p>
      </div>

      {/* Trend Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trends.map((trend) => {
          const Icon = trend.icon
          return (
            <Card key={trend.title} className="border-2 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-background to-muted/20 overflow-hidden group">
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`p-1.5 rounded-md bg-gradient-to-br ${trend.color.replace('text-', 'from-')}/20 ${trend.color.replace('text-', 'to-')}/10 group-hover:scale-105 transition-transform`}>
                    <Icon className={`h-4 w-4 ${trend.color}`} />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold leading-tight">{trend.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-2">
                  {trend.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center px-3 py-2 rounded-md bg-gradient-to-r from-muted/60 to-muted/40 hover:from-muted/80 hover:to-muted/60 transition-all border border-border/50">
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {stat.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Top Issues */}
      <Card className="border-2 bg-gradient-to-br from-background via-muted/10 to-background hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-1">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <CardTitle className="text-lg sm:text-xl font-bold">Most Commonly Cited Technical Issues</CardTitle>
          </div>
          <CardDescription className="text-sm">Violations appearing in accessibility lawsuits (2024-2025)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {topIssues.map((issue, idx) => (
              <div
                key={issue}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-orange-50/60 to-orange-50/40 dark:from-orange-950/30 dark:to-orange-950/20 border border-orange-200/60 dark:border-orange-800/60 hover:shadow-md hover:scale-105 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">{issue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Law Firms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-purple-600" />
              <CardTitle className="text-base sm:text-lg font-bold">Most Active Plaintiff Law Firms (2024)</CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm">Cases filed per firm</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="space-y-2">
              {topFirms.map((firm, idx) => (
                <div key={firm.name} className="flex items-center justify-between px-3 py-2 rounded-md bg-gradient-to-r from-purple-50/50 to-purple-50/30 dark:from-purple-950/20 dark:to-purple-950/10 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-sm hover:scale-[1.01] transition-all">
                  <span className="text-xs sm:text-sm font-medium text-foreground truncate pr-2">{firm.name}</span>
                  <span className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                    {firm.cases} cases
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gradient-to-br from-orange-50 via-orange-50/80 to-amber-50 dark:from-orange-950/30 dark:via-orange-950/20 dark:to-amber-950/30 hover:shadow-md transition-all duration-300 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <CardTitle className="text-base sm:text-lg font-bold text-orange-900 dark:text-orange-100">Key Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-2">
            <div className="p-3 rounded-md bg-white/60 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/50">
              <strong className="text-orange-900 dark:text-orange-100 text-xs sm:text-sm block mb-1">41% Repeat Defendant Rate:</strong>
              <p className="text-xs sm:text-sm text-orange-800/90 dark:text-orange-200/90 leading-relaxed">
                Businesses sued in 2024 had often been defendants before, indicating superficial remediation invites renewed litigation.
              </p>
            </div>
            <div className="p-3 rounded-md bg-white/60 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/50">
              <strong className="text-orange-900 dark:text-orange-100 text-xs sm:text-sm block mb-1">AI-Assisted Pro Se Filings:</strong>
              <p className="text-xs sm:text-sm text-orange-800/90 dark:text-orange-200/90 leading-relaxed">
                40% increase in self-represented filings in 2025, enabled by AI tools.
              </p>
            </div>
            <div className="p-3 rounded-md bg-white/60 dark:bg-orange-950/40 border border-orange-200/50 dark:border-orange-800/50">
              <strong className="text-orange-900 dark:text-orange-100 text-xs sm:text-sm block mb-1">Overlay Widget Shift:</strong>
              <p className="text-xs sm:text-sm text-orange-800/90 dark:text-orange-200/90 leading-relaxed">
                25%+ of 2024 cases cited accessibility overlays as barriers rather than solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Message */}
      <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-background hover:shadow-lg transition-all duration-300">
        <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20 shrink-0">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-bold text-foreground">
                Key Takeaway
              </p>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                Accessibility litigation continues to grow with expanding geographic reach. Organizations in targeted industries (fashion, food, e-commerce) face increased exposure. The 41% repeat defendant rate demonstrates that temporary fixes are insufficient comprehensive, proactive accessibility implementation is essential to avoid litigation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources & Verification */}
      <Card className="border-2 bg-gradient-to-br from-blue-50/50 via-background to-purple-50/30 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold">Sources & Verification</CardTitle>
          </div>
          <CardDescription className="text-base">
            Verify these statistics and access detailed reports from the following sources:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Lawsuit Tracking & Statistics
              </h4>
              <ul className="space-y-3">
                <li className="p-3 rounded-lg bg-white/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.adatitleiii.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    ADA Title III News & Insights
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">Comprehensive ADA Title III lawsuit tracking and analysis</p>
                </li>
                <li className="p-3 rounded-lg bg-white/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.seyfarth.com/practices/ada-title-iii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    Seyfarth Shaw ADA Title III Blog
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">Quarterly ADA Title III lawsuit reports and trends</p>
                </li>
                <li className="p-3 rounded-lg bg-white/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.usatoday.com/story/money/2024/01/08/ada-website-lawsuits-hit-record-high/72131280007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    USA Today - ADA Website Lawsuit Report
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">2024 accessibility lawsuit statistics and analysis</p>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Legal Research & Analysis
              </h4>
              <ul className="space-y-3">
                <li className="p-3 rounded-lg bg-white/60 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.lexisnexis.com/legalnewsroom/litigation/b/litigation-blog/posts/ada-title-iii-website-accessibility-lawsuits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    LexisNexis Legal Newsroom
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">Legal analysis of ADA website accessibility cases</p>
                </li>
                <li className="p-3 rounded-lg bg-white/60 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.bloomberg.com/news/articles/2024-03-15/ada-website-lawsuits-surge-as-plaintiffs-target-e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    Bloomberg Law - ADA Litigation Trends
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">Industry analysis of accessibility litigation patterns</p>
                </li>
                <li className="p-3 rounded-lg bg-white/60 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/50 hover:shadow-md transition-all">
                  <a
                    href="https://www.accessibility.com/ada-lawsuits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                  >
                    Accessibility.com Lawsuit Tracker
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 ml-0">Real-time tracking of digital accessibility lawsuits</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/50">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Note:</strong> Statistics are compiled from multiple sources including federal court filings, legal research databases, and industry reports. 
                Numbers may vary slightly between sources due to reporting methodologies and timing. For the most current data, please refer to the sources above.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

