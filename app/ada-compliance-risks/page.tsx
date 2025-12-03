import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  DollarSign,
  Scale,
  TrendingDown,
  FileX,
  Shield,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Building2,
  Briefcase,
  Target,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ADA Compliance Risks - Legal, Financial & Business Risks | TheWCAG",
  description:
    "Comprehensive guide to ADA compliance risks including lawsuits, financial penalties, reputational damage, and business losses. Learn how to mitigate accessibility compliance risks and protect your organization.",
  keywords: [
    "ADA compliance risks",
    "ADA lawsuit risks",
    "accessibility compliance risks",
    "website accessibility risks",
    "ADA legal risks",
    "accessibility financial risks",
    "ADA penalties",
    "accessibility lawsuit costs",
    "ADA compliance consequences",
    "digital accessibility risks",
    "WCAG compliance risks",
    "ADA violation risks",
  ],
  openGraph: {
    title: "ADA Compliance Risks - Legal, Financial & Business Impact",
    description:
      "Understand the comprehensive risks of ADA non-compliance: lawsuits, financial penalties, reputational damage, and lost business opportunities. Learn mitigation strategies.",
    url: "https://thewcag.com/ada-compliance-risks",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "ADA Compliance Risks Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/ada-compliance-risks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function ADAComplianceRisksPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ADA Compliance Risks - Legal, Financial & Business Impact",
    description:
      "Comprehensive guide to understanding and mitigating ADA compliance risks including legal action, financial penalties, reputational damage, and business losses.",
    url: "https://thewcag.com/ada-compliance-risks",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
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
          name: "ADA Compliance Risks",
          item: "https://thewcag.com/ada-compliance-risks",
        },
      ],
    },
  }

  const riskCategories = [
    {
      id: "legal",
      title: "Legal Risks",
      icon: Scale,
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      description: "Lawsuits, court orders, and legal enforcement actions",
      risks: [
        {
          title: "Private Lawsuits",
          description:
            "Individuals with disabilities can file lawsuits against businesses for ADA violations. These lawsuits have been increasing dramatically in recent years.",
          impact: "High",
          examples: [
            "Thousands of ADA website lawsuits filed annually in the US",
            "No notice required before filing - businesses can be sued without warning",
            "Lawsuits can target any business with an online presence",
          ],
        },
        {
          title: "DOJ Enforcement Actions",
          description:
            "The Department of Justice can investigate and take enforcement action against organizations that violate the ADA.",
          impact: "High",
          examples: [
            "DOJ can file lawsuits on behalf of individuals with disabilities",
            "Can result in consent decrees requiring comprehensive accessibility improvements",
            "May include monetary penalties and ongoing monitoring",
          ],
        },
        {
          title: "Class Action Lawsuits",
          description:
            "Multiple plaintiffs can join together to file class action lawsuits, significantly increasing potential liability.",
          impact: "Very High",
          examples: [
            "Single lawsuit can represent hundreds or thousands of affected individuals",
            "Settlement amounts can reach millions of dollars",
            "Requires comprehensive remediation affecting entire organization",
          ],
        },
        {
          title: "Court Orders and Injunctions",
          description:
            "Courts can order businesses to make their websites accessible, often with strict deadlines and monitoring.",
          impact: "High",
          examples: [
            "Mandatory accessibility improvements with court oversight",
            "Failure to comply can result in contempt of court",
            "Ongoing compliance monitoring and reporting requirements",
          ],
        },
      ],
    },
    {
      id: "financial",
      title: "Financial Risks",
      icon: DollarSign,
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      description: "Settlement costs, legal fees, and remediation expenses",
      risks: [
        {
          title: "Settlement Costs",
          description:
            "Most ADA website lawsuits settle out of court, often requiring significant monetary payments to plaintiffs.",
          impact: "High",
          examples: [
            "Typical settlements range from $5,000 to $150,000+ per case",
            "Multiple lawsuits can result in cumulative costs of hundreds of thousands",
            "Settlement amounts have been increasing over time",
          ],
        },
        {
          title: "Legal Fees",
          description:
            "Defending against ADA lawsuits requires hiring attorneys, which can be expensive even if you win.",
          impact: "High",
          examples: [
            "Legal defense costs can exceed $50,000 per case",
            "Complex cases may require specialized accessibility attorneys",
            "Ongoing legal consultation for compliance can add up",
          ],
        },
        {
          title: "Remediation Costs",
          description:
            "Fixing accessibility issues after a lawsuit is typically more expensive than building accessibility in from the start.",
          impact: "Very High",
          examples: [
            "Retrofitting can cost 2-10x more than building accessible from the start",
            "May require complete website redesigns or rebuilds",
            "Ongoing maintenance and testing costs",
          ],
        },
        {
          title: "Penalties and Fines",
          description:
            "Some jurisdictions impose statutory penalties for ADA violations, which can add to settlement costs.",
          impact: "Medium",
          examples: [
            "State and local laws may include additional penalties",
            "Repeated violations can result in increased penalties",
            "Government contracts may include penalty clauses",
          ],
        },
        {
          title: "Lost Revenue During Remediation",
          description:
            "While fixing accessibility issues, websites may need to be taken offline or have limited functionality.",
          impact: "Medium",
          examples: [
            "Temporary loss of online sales and customer access",
            "Reduced functionality during remediation period",
            "Potential customer migration to competitors",
          ],
        },
      ],
    },
    {
      id: "reputational",
      title: "Reputational Risks",
      icon: TrendingDown,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      description: "Brand damage, negative publicity, and public relations issues",
      risks: [
        {
          title: "Negative Publicity",
          description:
            "ADA lawsuits often receive media attention, especially when involving well-known brands or large settlements.",
          impact: "High",
          examples: [
            "News coverage of accessibility lawsuits can damage brand reputation",
            "Social media amplification of accessibility issues",
            "Long-term impact on brand perception",
          ],
        },
        {
          title: "Loss of Customer Trust",
          description:
            "Customers may lose trust in brands that appear to exclude people with disabilities.",
          impact: "High",
          examples: [
            "Perception of discrimination can drive customers away",
            "Accessibility advocates may boycott non-compliant businesses",
            "Negative reviews and word-of-mouth damage",
          ],
        },
        {
          title: "Investor and Stakeholder Concerns",
          description:
            "Accessibility lawsuits and compliance issues can raise concerns among investors and stakeholders.",
          impact: "Medium",
          examples: [
            "ESG (Environmental, Social, Governance) investors may divest",
            "Board of directors may question management",
            "Potential impact on company valuation",
          ],
        },
        {
          title: "Industry Standing",
          description:
            "Organizations known for accessibility issues may face challenges in industry recognition and partnerships.",
          impact: "Medium",
          examples: [
            "Exclusion from industry awards and recognition",
            "Difficulty forming partnerships with accessibility-conscious organizations",
            "Reduced credibility in professional communities",
          ],
        },
      ],
    },
    {
      id: "business",
      title: "Business Risks",
      icon: Briefcase,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      description: "Lost customers, market exclusion, and competitive disadvantages",
      risks: [
        {
          title: "Lost Customer Base",
          description:
            "Inaccessible websites exclude approximately 15-20% of the population who have disabilities, representing a significant market segment.",
          impact: "Very High",
          examples: [
            "Over 1 billion people worldwide have disabilities",
            "Disability market represents $8 trillion in annual disposable income",
            "Accessible websites can increase market reach by 15-20%",
          ],
        },
        {
          title: "Exclusion from Government Contracts",
          description:
            "Many government contracts require Section 508 compliance, excluding non-compliant businesses from lucrative opportunities.",
          impact: "High",
          examples: [
            "Federal contracts require Section 508 compliance",
            "State and local governments increasingly require accessibility",
            "International contracts may require EN 301 549 compliance",
          ],
        },
        {
          title: "Competitive Disadvantage",
          description:
            "Competitors with accessible websites may gain market share from businesses with accessibility barriers.",
          impact: "High",
          examples: [
            "Accessible competitors can capture excluded customer segments",
            "Better SEO performance from accessible websites",
            "Improved user experience benefits all users, not just those with disabilities",
          ],
        },
        {
          title: "Reduced Innovation Opportunities",
          description:
            "Organizations focused on legal defense may have fewer resources for innovation and growth.",
          impact: "Medium",
          examples: [
            "Resources diverted to legal defense and remediation",
            "Reduced focus on product development and improvement",
            "Missed opportunities for market expansion",
          ],
        },
        {
          title: "Employee Retention Issues",
          description:
            "Organizations with accessibility issues may struggle to attract and retain diverse talent, including employees with disabilities.",
          impact: "Medium",
          examples: [
            "Difficulty recruiting employees with disabilities",
            "Current employees with disabilities may face barriers",
            "Reduced diversity and inclusion in the workplace",
          ],
        },
      ],
    },
    {
      id: "operational",
      title: "Operational Risks",
      icon: Building2,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      description: "Disruption to business operations and increased management burden",
      risks: [
        {
          title: "Business Disruption",
          description:
            "Responding to lawsuits and implementing remediation can disrupt normal business operations.",
          impact: "High",
          examples: [
            "Management time diverted to legal matters",
            "Development teams focused on remediation instead of new features",
            "Potential website downtime during major accessibility fixes",
          ],
        },
        {
          title: "Resource Allocation",
          description:
            "Accessibility remediation requires significant resources that could be used for other business priorities.",
          impact: "High",
          examples: [
            "Budget allocation to accessibility fixes instead of growth initiatives",
            "Developer time spent on retrofitting rather than innovation",
            "Ongoing compliance monitoring and maintenance costs",
          ],
        },
        {
          title: "Compliance Monitoring Burden",
          description:
            "After settling a lawsuit, organizations often face ongoing compliance monitoring and reporting requirements.",
          impact: "Medium",
          examples: [
            "Regular accessibility audits and testing required",
            "Compliance reporting to courts or oversight bodies",
            "Ongoing training and process changes",
          ],
        },
        {
          title: "Vendor and Partner Issues",
          description:
            "Third-party vendors and partners may also need to be accessible, creating additional complexity.",
          impact: "Medium",
          examples: [
            "Requiring accessibility compliance from vendors",
            "Auditing partner websites and services",
            "Potential need to replace non-compliant vendors",
          ],
        },
      ],
    },
  ]

  const mitigationStrategies = [
    {
      title: "Proactive Accessibility Implementation",
      description:
        "Build accessibility into your website from the start rather than retrofitting after issues arise.",
      actions: [
        "Follow WCAG 2.1 Level AA guidelines during development",
        "Include accessibility requirements in design and development processes",
        "Train development teams on accessibility best practices",
        "Conduct accessibility testing throughout the development lifecycle",
      ],
    },
    {
      title: "Regular Accessibility Audits",
      description:
        "Conduct regular audits to identify and fix accessibility issues before they become legal problems.",
      actions: [
        "Perform automated accessibility testing regularly",
        "Conduct manual testing with assistive technologies",
        "Engage users with disabilities in testing",
        "Address issues promptly as they are discovered",
      ],
    },
    {
      title: "Accessibility Policy and Statement",
      description:
        "Establish clear accessibility policies and publish an accessibility statement demonstrating your commitment.",
      actions: [
        "Create and publish an accessibility statement",
        "Establish internal accessibility policies and procedures",
        "Designate accessibility champions within your organization",
        "Provide clear contact methods for accessibility feedback",
      ],
    },
    {
      title: "Legal Compliance Review",
      description:
        "Work with legal counsel to understand your specific compliance obligations and develop a compliance strategy.",
      actions: [
        "Consult with accessibility and ADA legal experts",
        "Understand which laws apply to your organization",
        "Develop a compliance roadmap and timeline",
        "Document compliance efforts and improvements",
      ],
    },
    {
      title: "Ongoing Monitoring and Maintenance",
      description:
        "Accessibility is not a one-time fix - it requires ongoing attention and maintenance.",
      actions: [
        "Implement continuous accessibility monitoring",
        "Train content creators on accessibility",
        "Review and update accessibility practices regularly",
        "Stay informed about accessibility law changes",
      ],
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "ADA Compliance Risks", href: "/ada-compliance-risks" },
              ]}
            />

            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  ADA Compliance Risks
                </h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-4">
                Understanding the comprehensive risks of ADA non-compliance is essential for protecting your organization.
                From legal action and financial penalties to reputational damage and lost business opportunities, the
                consequences of accessibility violations can be severe.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">
                This guide covers all major risk categories and provides actionable strategies to mitigate these risks
                before they become costly problems.
              </p>
            </div>

            {/* Key Statistics Alert */}
            <Card className="mb-12 border-amber-500/30 bg-amber-50 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                  The Growing Risk Landscape
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                      Thousands of Lawsuits Annually
                    </p>
                    <p className="text-amber-800 dark:text-amber-200">
                      ADA website lawsuits have increased dramatically, with thousands filed each year in the United
                      States alone.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                      $5K - $150K+ Per Settlement
                    </p>
                    <p className="text-amber-800 dark:text-amber-200">
                      Typical settlement costs range from thousands to hundreds of thousands of dollars, plus legal fees
                      and remediation costs.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                      15-20% of Population Excluded
                    </p>
                    <p className="text-amber-800 dark:text-amber-200">
                      Inaccessible websites exclude a significant portion of potential customers, representing billions
                      in lost revenue.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Categories */}
            <div className="space-y-12 mb-12">
              {riskCategories.map((category) => {
                const Icon = category.icon
                return (
                  <section key={category.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${category.color} shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">{category.title}</h2>
                        <p className="text-muted-foreground mt-1">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      {category.risks.map((risk, index) => (
                        <Card key={index} className="border-2">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                              <CardTitle className="text-xl">{risk.title}</CardTitle>
                              <Badge
                                variant={
                                  risk.impact === "Very High"
                                    ? "destructive"
                                    : risk.impact === "High"
                                      ? "default"
                                      : "secondary"
                                }
                              >
                                {risk.impact} Impact
                              </Badge>
                            </div>
                            <CardDescription className="text-base mt-2">{risk.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Key Examples:</h4>
                              <ul className="space-y-2">
                                {risk.examples.map((example, exampleIndex) => (
                                  <li key={exampleIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    <span className="break-words">{example}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* Mitigation Strategies */}
            <section className="mb-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-bold">Mitigation Strategies</h2>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  Proactive measures can significantly reduce your organization's exposure to ADA compliance risks. Here
                  are key strategies to implement:
                </p>
              </div>

              <div className="grid gap-6">
                {mitigationStrategies.map((strategy, index) => (
                  <Card key={index} className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      <CardDescription className="text-base">{strategy.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm">Recommended Actions:</h4>
                      <ul className="space-y-2">
                        {strategy.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                            <span className="break-words">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Cost Comparison */}
            <Card className="mb-12 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Cost Comparison: Proactive vs. Reactive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-green-600 dark:text-green-500">
                      Building Accessible from the Start
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                        <span>Typically 5-10% additional development cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                        <span>No legal fees or settlement costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                        <span>Access to full market including customers with disabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                        <span>Better SEO and user experience for all users</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-500">
                      Retrofitting After a Lawsuit
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                        <span>2-10x more expensive than building accessible initially</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                        <span>$5,000 - $150,000+ in settlement costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                        <span>$50,000+ in legal defense fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                        <span>Reputational damage and lost customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                        <span>Business disruption during remediation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
                <CardDescription>Explore these resources to learn more about ADA compliance and accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Scale className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Laws & Regulations</div>
                        <div className="text-xs text-muted-foreground">Learn about ADA, Section 508, and more</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/lawsuits">
                      <FileX className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Lawsuits Database</div>
                        <div className="text-xs text-muted-foreground">Real-world examples of legal cases</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Compliance Checklist</div>
                        <div className="text-xs text-muted-foreground">Ensure your website meets standards</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/accessibility-audit-guide">
                      <Target className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Audit Guide</div>
                        <div className="text-xs text-muted-foreground">Learn how to audit your website</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started with Accessibility</div>
                        <div className="text-xs text-muted-foreground">Begin your accessibility journey</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Tools</div>
                        <div className="text-xs text-muted-foreground">Testing and validation resources</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Card className="mt-12 border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  Legal Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This information is provided for educational and informational purposes only and does not constitute
                  legal advice. The risks and costs mentioned are based on general trends and may vary significantly
                  based on specific circumstances, jurisdiction, and other factors. Laws and regulations are subject to
                  change, and enforcement may vary. Always consult with qualified legal counsel familiar with
                  accessibility laws in your specific jurisdiction to understand your compliance obligations and develop
                  an appropriate risk mitigation strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

