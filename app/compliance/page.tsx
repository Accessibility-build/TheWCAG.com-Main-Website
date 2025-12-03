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
  Scale,
  Globe,
  Building2,
  FileText,
  Shield,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Compliance Laws & Regulations - ADA, Section 508, WCAG | TheWCAG",
  description:
    "Complete guide to digital accessibility compliance laws worldwide. Understand ADA, Section 508, EN 301 549, AODA, European Accessibility Act, and WCAG legal requirements for websites and apps.",
  openGraph: {
    title: "Accessibility Compliance Laws & Regulations Guide",
    description:
      "Navigate global accessibility laws: ADA, Section 508, EN 301 549, AODA, and European regulations. Learn compliance requirements and avoid legal issues.",
    url: "https://thewcag.com/compliance",
    type: "article",
  },
}

export default function CompliancePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Accessibility Compliance - Laws & Regulations Guide",
    description:
      "Comprehensive guide to digital accessibility laws and regulations including ADA, Section 508, EN 301 549, AODA, and European Accessibility Act.",
    url: "https://thewcag.com/compliance",
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
          name: "Accessibility Compliance",
          item: "https://thewcag.com/compliance",
        },
      ],
    },
  }

  const complianceLaws = [
    {
      id: "ada",
      name: "Americans with Disabilities Act (ADA)",
      region: "United States",
      level: "WCAG 2.0/2.1 Level AA",
      effectiveDate: "1990 (Title III applies to websites)",
      icon: Shield,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      description:
        "The ADA is a civil rights law that prohibits discrimination against individuals with disabilities. Title III requires places of public accommodation, including websites, to be accessible.",
      requirements: [
        "WCAG 2.0 or 2.1 Level AA compliance recommended",
        "Applies to businesses open to the public",
        "No specific technical standard mandated, but courts reference WCAG",
        "Applies to websites, mobile apps, and digital services",
        "Enforced through private lawsuits and DOJ actions",
      ],
      whoMustComply: [
        "Private businesses (Title III)",
        "State and local governments (Title II)",
        "Places of public accommodation",
        "E-commerce websites",
        "Educational institutions",
      ],
      penalties: [
        "Private lawsuits seeking damages and injunctive relief",
        "DOJ enforcement actions",
        "Legal fees and settlement costs",
        "Reputational damage",
      ],
      resources: [
        {
          title: "ADA.gov Official Website",
          url: "https://www.ada.gov",
        },
        {
          title: "DOJ ADA Technical Assistance",
          url: "https://www.ada.gov/resources/",
        },
      ],
      status: "Active",
    },
    {
      id: "section508",
      name: "Section 508",
      region: "United States (Federal)",
      level: "WCAG 2.0 Level AA",
      effectiveDate: "1998 (Updated 2018)",
      icon: Building2,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      description:
        "Section 508 of the Rehabilitation Act requires federal agencies to make their electronic and information technology accessible to people with disabilities.",
      requirements: [
        "WCAG 2.0 Level AA compliance required",
        "Applies to all federal agencies",
        "Applies to contractors working for federal agencies",
        "Covers websites, software, hardware, and documentation",
        "Requires accessible procurement standards",
      ],
      whoMustComply: [
        "All federal agencies",
        "Federal contractors",
        "Recipients of federal funding (in some cases)",
        "Organizations providing services to federal agencies",
      ],
      penalties: [
        "Complaints to federal agencies",
        "Legal action through federal courts",
        "Contract termination",
        "Loss of federal contracts",
      ],
      resources: [
        {
          title: "Section508.gov",
          url: "https://www.section508.gov",
        },
        {
          title: "IT Accessibility Laws and Policies",
          url: "https://www.section508.gov/manage/laws-and-policies",
        },
      ],
      status: "Active",
    },
    {
      id: "en301549",
      name: "EN 301 549",
      region: "European Union",
      level: "WCAG 2.1 Level AA",
      effectiveDate: "2014 (Updated 2021)",
      icon: Globe,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      description:
        "EN 301 549 is a European standard that specifies requirements for making ICT products and services accessible to people with disabilities. It references WCAG 2.1 Level AA.",
      requirements: [
        "WCAG 2.1 Level AA compliance required",
        "Applies to ICT products and services",
        "Covers websites, software, hardware, and documentation",
        "Mandatory for public procurement in EU member states",
        "Updated regularly to align with latest WCAG version",
      ],
      whoMustComply: [
        "Public sector organizations (mandatory)",
        "Organizations providing services to public sector",
        "ICT manufacturers and service providers",
        "Organizations seeking public contracts",
      ],
      penalties: [
        "Exclusion from public procurement",
        "Contract termination",
        "Legal action in member states",
        "Financial penalties (varies by country)",
      ],
      resources: [
        {
          title: "ETSI EN 301 549 Standard",
          url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/",
        },
        {
          title: "European Accessibility Act",
          url: "https://ec.europa.eu/social/main.jsp?catId=1202",
        },
      ],
      status: "Active",
    },
    {
      id: "aoda",
      name: "AODA (Accessibility for Ontarians with Disabilities Act)",
      region: "Ontario, Canada",
      level: "WCAG 2.0 Level AA",
      effectiveDate: "2005 (Web requirements: 2021)",
      icon: MapPin,
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      description:
        "AODA requires organizations in Ontario to identify, remove, and prevent barriers for people with disabilities. The Information and Communications Standards mandate WCAG 2.0 Level AA compliance for websites.",
      requirements: [
        "WCAG 2.0 Level AA compliance required",
        "Applies to organizations with 50+ employees (public sector) or 20+ employees (private sector)",
        "Deadline: January 1, 2021 for public sector, January 1, 2024 for private sector",
        "Requires accessibility policies and training",
        "Must file accessibility compliance reports",
      ],
      whoMustComply: [
        "Public sector organizations (50+ employees)",
        "Private sector organizations (20+ employees)",
        "Non-profit organizations (20+ employees)",
        "Large organizations (50+ employees) regardless of sector",
      ],
      penalties: [
        "Fines up to $100,000 for corporations",
        "Fines up to $50,000 for individuals",
        "Director liability",
        "Compliance orders",
      ],
      resources: [
        {
          title: "AODA.ca Official Resource",
          url: "https://www.aoda.ca",
        },
        {
          title: "Ontario.ca AODA Information",
          url: "https://www.ontario.ca/page/about-accessibility-laws",
        },
      ],
      status: "Active",
    },
    {
      id: "eaa",
      name: "European Accessibility Act (EAA)",
      region: "European Union",
      level: "EN 301 549 (WCAG 2.1 Level AA)",
      effectiveDate: "2025 (Full enforcement)",
      icon: FileText,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      description:
        "The European Accessibility Act is an EU directive that requires certain products and services to be accessible. It applies to websites, mobile applications, e-commerce, banking services, and more.",
      requirements: [
        "EN 301 549 compliance (WCAG 2.1 Level AA)",
        "Applies to specific products and services",
        "Member states must implement by June 28, 2025",
        "Covers websites, mobile apps, e-commerce platforms",
        "Applies to both public and private sector",
      ],
      whoMustComply: [
        "E-commerce platforms",
        "Banking and financial services",
        "Transportation services",
        "Telecommunications services",
        "Audiovisual media services",
        "Public sector websites",
      ],
      penalties: [
        "Fines determined by member states",
        "Legal action through national courts",
        "Exclusion from public procurement",
        "Reputational damage",
      ],
      resources: [
        {
          title: "European Accessibility Act - EU",
          url: "https://ec.europa.eu/social/main.jsp?catId=1202",
        },
        {
          title: "EAA Implementation Guide",
          url: "https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=4800",
        },
      ],
      status: "Active (2025)",
    },
    {
      id: "cvaa",
      name: "CVAA (21st Century Communications and Video Accessibility Act)",
      region: "United States",
      level: "WCAG 2.0 Level AA (for web)",
      effectiveDate: "2010",
      icon: Shield,
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
      description:
        "CVAA requires advanced communications services and equipment to be accessible to people with disabilities. It covers telecommunications, video programming, and internet-based services.",
      requirements: [
        "Accessible advanced communications services",
        "Accessible video programming",
        "Accessible user interfaces",
        "Compatible with assistive technologies",
        "WCAG 2.0 Level AA for web-based services",
      ],
      whoMustComply: [
        "Telecommunications service providers",
        "Video programming distributors",
        "Manufacturers of communications equipment",
        "Internet-based communications services",
      ],
      penalties: [
        "FCC enforcement actions",
        "Fines up to $100,000 per violation",
        "License revocation",
        "Legal action",
      ],
      resources: [
        {
          title: "FCC CVAA Information",
          url: "https://www.fcc.gov/general/21st-century-communications-and-video-accessibility-act-0",
        },
      ],
      status: "Active",
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
                { label: "Compliance", href: "/compliance" },
              ]}
            />
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Compliance</h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-4">
                Navigating accessibility laws and regulations for digital compliance. Understand the requirements,
                deadlines, and penalties for major accessibility laws around the world.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">
                Many countries have adopted WCAG standards into their legal frameworks. Understanding these requirements helps ensure your digital products comply with applicable laws and regulations.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Understanding Digital Accessibility Laws</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Digital accessibility laws and regulations vary by region and jurisdiction. While many laws reference
                  WCAG (Web Content Accessibility Guidelines) as the technical standard, each law has specific
                  requirements, deadlines, and enforcement mechanisms. This guide provides an overview of major
                  accessibility laws and their implications for digital products and services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Important:</strong> This information is for educational purposes. Always consult with legal
                  counsel for specific compliance advice related to your organization and jurisdiction.
                </p>
              </CardContent>
            </Card>

            {/* Compliance Laws Grid */}
            <div className="space-y-8 mb-12">
              {complianceLaws.map((law) => {
                const Icon = law.icon
                return (
                  <Card key={law.id} className={`border-2 ${law.color}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${law.color} shrink-0`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl mb-2">{law.name}</CardTitle>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{law.region}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{law.effectiveDate}</span>
                              </div>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {law.level}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {law.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{law.description}</p>
                      </div>

                      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                            Requirements
                          </h3>
                          <ul className="space-y-2">
                            {law.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1 shrink-0">•</span>
                                <span className="break-words">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-base sm:text-lg mb-3 flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-blue-600 shrink-0" />
                            Who Must Comply
                          </h3>
                          <ul className="space-y-2">
                            {law.whoMustComply.map((entity, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1 shrink-0">•</span>
                                <span className="break-words">{entity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-orange-600" />
                          Penalties & Enforcement
                        </h3>
                        <ul className="space-y-2">
                          {law.penalties.map((penalty, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-destructive mt-1">•</span>
                              <span>{penalty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {law.resources && law.resources.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <ExternalLink className="h-5 w-5 text-primary" />
                            Resources
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {law.resources.map((resource, index) => (
                              <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                              >
                                {resource.title}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Reference */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Quick Reference: WCAG Levels by Law</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 sm:p-3 font-semibold sticky left-0 bg-background z-10 min-w-[150px]">Law/Regulation</th>
                        <th className="text-left p-2 sm:p-3 font-semibold hidden sm:table-cell min-w-[120px]">Region</th>
                        <th className="text-left p-2 sm:p-3 font-semibold min-w-[140px]">WCAG Level</th>
                        <th className="text-left p-2 sm:p-3 font-semibold min-w-[80px]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceLaws.map((law) => (
                        <tr key={law.id} className="border-b hover:bg-muted/50">
                          <td className="p-2 sm:p-3 font-medium sticky left-0 bg-background z-10">
                            <span className="break-words">{law.name}</span>
                          </td>
                          <td className="p-2 sm:p-3 text-muted-foreground hidden sm:table-cell">{law.region}</td>
                          <td className="p-2 sm:p-3">
                            <Badge variant="outline" className="text-xs">{law.level}</Badge>
                          </td>
                          <td className="p-2 sm:p-3">
                            <Badge variant="secondary" className="text-xs">{law.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Compliance Checklist */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>General Compliance Checklist</CardTitle>
                <CardDescription>
                  While specific requirements vary by law, most accessibility regulations require:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">WCAG Compliance</p>
                        <p className="text-sm text-muted-foreground">
                          Meet WCAG 2.0 or 2.1 Level AA standards (most common requirement)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Accessibility Policy</p>
                        <p className="text-sm text-muted-foreground">
                          Document your accessibility commitment and approach
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Regular Testing</p>
                        <p className="text-sm text-muted-foreground">
                          Conduct automated and manual accessibility testing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Training</p>
                        <p className="text-sm text-muted-foreground">
                          Train staff on accessibility best practices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Accessibility Statement</p>
                        <p className="text-sm text-muted-foreground">
                          Publish an accessibility statement on your website
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Ongoing Maintenance</p>
                        <p className="text-sm text-muted-foreground">
                          Continuously monitor and improve accessibility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/ada-compliance-risks">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">ADA Compliance Risks</div>
                        <div className="text-xs text-muted-foreground">Understand legal, financial & business risks</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Interactive compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Accessibility Tools</div>
                        <div className="text-xs text-muted-foreground">Testing and validation tools</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/learn">
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Learn Accessibility</div>
                        <div className="text-xs text-muted-foreground">Educational resources and guides</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/accessibility">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Our Accessibility Statement</div>
                        <div className="text-xs text-muted-foreground">See our commitment to accessibility</div>
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
                  legal advice. Laws and regulations are subject to change, and enforcement may vary by jurisdiction.
                  Always consult with qualified legal counsel familiar with accessibility laws in your specific
                  jurisdiction to ensure compliance with applicable requirements.
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

