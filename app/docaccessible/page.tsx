import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, ShieldCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "DocAccessible.com - Accessible Document Services | TheWCAG",
  description:
    "Learn about DocAccessible.com, a dedicated platform focused on making PDFs and documents accessible through remediation, audits, and compliance support.",
  keywords: [
    "docaccessible",
    "document accessibility",
    "pdf remediation",
    "accessible documents",
    "pdf accessibility",
    "document compliance",
  ],
  openGraph: {
    title: "DocAccessible.com - Accessible Document Services",
    description:
      "Explore DocAccessible.com for document accessibility support including PDF remediation, accessibility audits, and compliance services.",
    url: "https://thewcag.com/docaccessible",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "DocAccessible.com - Accessible Document Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DocAccessible.com - Accessible Document Services",
    description:
      "A dedicated platform for document accessibility, PDF remediation, and compliance support.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/docaccessible",
  },
}

export default function DocAccessiblePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DocAccessible.com",
    description:
      "Information page for DocAccessible.com, a focused platform for document accessibility and PDF remediation services.",
    url: "https://thewcag.com/docaccessible",
    mainEntity: {
      "@type": "Organization",
      name: "DocAccessible.com",
      url: "https://docaccessible.com",
      sameAs: ["https://docaccessible.com"],
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
          name: "DocAccessible",
          item: "https://thewcag.com/docaccessible",
        },
      ],
    },
  }

  const highlights = [
    "PDF and document remediation aligned with accessibility standards",
    "Compliance-focused support for enterprise and public sector teams",
    "Practical workflows for creating accessible documents from the start",
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "DocAccessible", href: "/docaccessible" },
              ]}
            />

            <section className="mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium mb-4">
                Dedicated Partner Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">DocAccessible.com</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                DocAccessible.com is a dedicated platform focused on document accessibility. If your team needs accessible PDFs, forms,
                and reports, this is where you can get specialized support.
              </p>
              <Button asChild size="lg">
                <a href="https://docaccessible.com" target="_blank" rel="noopener noreferrer">
                  Visit DocAccessible.com
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Document Accessibility Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    While TheWCAG covers web accessibility education, DocAccessible.com focuses specifically on accessible documents and PDF workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    Compliance-Ready Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get document outputs aligned with recognized accessibility standards and practical remediation guidance for long-term compliance.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">What You Can Expect</h2>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border bg-muted/30 p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-3">Need Help with Web + Document Accessibility?</h2>
              <p className="text-muted-foreground mb-6">
                Use TheWCAG for WCAG education and implementation guidance, and use DocAccessible.com for hands-on document accessibility support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://docaccessible.com" target="_blank" rel="noopener noreferrer">
                    Go to DocAccessible.com
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact TheWCAG Team</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
