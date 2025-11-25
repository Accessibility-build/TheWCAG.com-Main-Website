'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, BarChart3, AlertCircle, Users } from "lucide-react"

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
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Accessibility Litigation Trends 2024-2025</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Understanding the evolving landscape of accessibility enforcement and litigation patterns
        </p>
      </div>

      {/* Trend Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend) => {
          const Icon = trend.icon
          return (
            <Card key={trend.title} className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`h-5 w-5 ${trend.color}`} />
                  <CardTitle className="text-lg">{trend.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trend.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="text-sm font-bold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Top Issues */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Most Commonly Cited Technical Issues</CardTitle>
          <CardDescription>Violations appearing in accessibility lawsuits (2024-2025)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topIssues.map((issue) => (
              <div key={issue} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span className="text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Law Firms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Most Active Plaintiff Law Firms (2024)</CardTitle>
            <CardDescription>Cases filed per firm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topFirms.map((firm) => (
                <div key={firm.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{firm.name}</span>
                  <span className="text-sm font-bold text-primary">{firm.cases} cases</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 bg-orange-50/50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="text-orange-900 dark:text-orange-100">Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-orange-900/80 dark:text-orange-200/80">
            <div>
              <strong>41% Repeat Defendant Rate:</strong> Businesses sued in 2024 had often been defendants before, indicating superficial remediation invites renewed litigation.
            </div>
            <div>
              <strong>AI-Assisted Pro Se Filings:</strong> 40% increase in self-represented filings in 2025, enabled by AI tools.
            </div>
            <div>
              <strong>Overlay Widget Shift:</strong> 25%+ of 2024 cases cited accessibility overlays as barriers rather than solutions.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Message */}
      <Card className="border-2 border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Key Takeaway:</strong> Accessibility litigation continues to grow with expanding geographic reach. Organizations in targeted industries (fashion, food, e-commerce) face increased exposure. The 41% repeat defendant rate demonstrates that temporary fixes are insufficient—comprehensive, proactive accessibility implementation is essential to avoid litigation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

