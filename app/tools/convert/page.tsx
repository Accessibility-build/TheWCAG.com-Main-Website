import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Image,
  FileText,
  Code,
  Database,
  Terminal,
  Archive,
  Wrench,
} from "lucide-react"
import type { Metadata } from "next"
import { TOOLS, TOOL_CATEGORIES, getAllCategories, getToolsByCategory } from "@/lib/tools/constants"

export const metadata: Metadata = {
  title: "Free Online Conversion Tools - Image, PDF, Text, Data Converters | TheWCAG",
  description:
    "50+ free online conversion tools. Convert images, PDFs, documents, data formats, and more. Client-side processing for privacy. No signup required.",
  keywords: [
    "free online converter",
    "image converter",
    "pdf converter",
    "json formatter",
    "file converter",
    "base64 encoder",
    "qr code generator",
    "hash generator",
    "online tools",
    "free conversion tools",
  ],
  openGraph: {
    title: "Free Online Conversion Tools",
    description:
      "50+ free tools for converting images, documents, data formats, and more. Fast, secure, and completely free.",
    url: "https://thewcag.com/tools/convert",
    type: "website",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free Online Conversion Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Conversion Tools",
    description: "50+ free tools for converting images, documents, data formats, and more.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools/convert",
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

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  image: Image,
  document: FileText,
  text: Code,
  data: Database,
  developer: Terminal,
  archive: Archive,
  utility: Wrench,
}

export default function ConvertToolsPage() {
  const categories = getAllCategories()
  const currentDate = new Date().toISOString().split("T")[0]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Online Conversion Tools",
    description:
      "50+ free online tools for converting images, documents, data formats, and more.",
    url: "https://thewcag.com/tools/convert",
    dateModified: currentDate,
    numberOfItems: TOOLS.length,
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
          name: "Tools",
          item: "https://thewcag.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Convert",
          item: "https://thewcag.com/tools/convert",
        },
      ],
    },
  }

  // ItemList structured data for all tools
  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Online Conversion Tools",
    description: "A collection of free online tools for converting images, documents, and data formats.",
    numberOfItems: TOOLS.length,
    itemListElement: TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      description: tool.shortDescription,
      url: `https://thewcag.com/tools/convert/${tool.slug}`,
      item: {
        "@type": "WebApplication",
        name: tool.name,
        description: tool.description,
        url: `https://thewcag.com/tools/convert/${tool.slug}`,
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Tools", href: "/tools" },
                { label: "Convert", href: "/tools/convert" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Free Online Conversion Tools
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                {TOOLS.length}+ free tools to convert images, documents, data formats, and more.
                All processing happens in your browser for maximum privacy and speed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-1">
                  No signup required
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  100% free
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  Client-side processing
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  No file uploads
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold mb-4">Jump to Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((categoryKey) => {
                  const category = TOOL_CATEGORIES[categoryKey]
                  const Icon = categoryIcons[categoryKey]
                  return (
                    <Button key={categoryKey} variant="outline" size="sm" asChild>
                      <a href={`#${categoryKey}`}>
                        {Icon && <Icon className="h-4 w-4 mr-1.5" />}
                        {category.name}
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Tool Categories */}
            <div className="space-y-16">
              {categories.map((categoryKey) => {
                const category = TOOL_CATEGORIES[categoryKey]
                const tools = getToolsByCategory(categoryKey)
                const Icon = categoryIcons[categoryKey]

                if (tools.length === 0) return null

                return (
                  <section key={categoryKey} id={categoryKey}>
                    <div className="flex items-center gap-3 mb-6">
                      {Icon && (
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h2 className="text-2xl font-bold">{category.name}</h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {tools.map((tool) => (
                        <Card
                          key={tool.slug}
                          className="hover:shadow-md transition-shadow h-full flex flex-col"
                        >
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                            <CardDescription className="line-clamp-2">
                              {tool.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0 mt-auto">
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={`/tools/convert/${tool.slug}`}>
                                Use Tool
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <section className="mt-16 text-center py-12 border-t">
              <h2 className="text-2xl font-bold mb-4">Need an Accessibility Tool?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out our accessibility testing tools including color contrast checkers,
                WCAG validators, and more.
              </p>
              <Button asChild>
                <Link href="/tools">
                  View Accessibility Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
