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
  Map,
  Bot,
  Tags,
  Braces,
  Share2,
  Search,
} from "lucide-react"
import type { Metadata } from "next"
import { TOOLS, getToolsByCategory } from "@/lib/tools/constants"

export const metadata: Metadata = {
  title: "Free SEO Tools - Sitemap, Robots.txt, Meta Tags, Schema Generator | TheWCAG",
  description:
    "Free SEO tools: XML sitemap generator, robots.txt creator, meta tag generator, schema markup generator, and Open Graph tag generator. Boost your search rankings.",
  keywords: [
    "seo tools",
    "sitemap generator",
    "robots.txt generator",
    "meta tag generator",
    "schema markup generator",
    "json-ld generator",
    "open graph generator",
    "free seo tools",
    "search engine optimization",
    "structured data generator",
  ],
  openGraph: {
    title: "Free SEO Tools - Sitemap, Meta Tags, Schema Generator",
    description:
      "Generate XML sitemaps, robots.txt files, meta tags, schema markup, and Open Graph tags. Free tools for better search rankings.",
    url: "https://thewcag.com/tools/seo",
    type: "website",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free SEO Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Tools - Sitemap, Meta Tags, Schema Generator",
    description: "Generate XML sitemaps, robots.txt files, meta tags, and schema markup for better SEO.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools/seo",
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

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "sitemap-generator": Map,
  "robots-txt-generator": Bot,
  "meta-tag-generator": Tags,
  "schema-markup-generator": Braces,
  "open-graph-generator": Share2,
}

export default function SeoToolsPage() {
  const seoTools = getToolsByCategory("seo")
  const currentDate = new Date().toISOString().split("T")[0]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free SEO Tools",
    description:
      "Free SEO tools for generating sitemaps, robots.txt files, meta tags, schema markup, and Open Graph tags.",
    url: "https://thewcag.com/tools/seo",
    dateModified: currentDate,
    numberOfItems: seoTools.length,
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
          name: "SEO Tools",
          item: "https://thewcag.com/tools/seo",
        },
      ],
    },
  }

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free SEO Tools",
    description: "A collection of free SEO tools for better search engine rankings.",
    numberOfItems: seoTools.length,
    itemListElement: seoTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      description: tool.shortDescription,
      url: `https://thewcag.com/tools/seo/${tool.slug}`,
      item: {
        "@type": "WebApplication",
        name: tool.name,
        description: tool.description,
        url: `https://thewcag.com/tools/seo/${tool.slug}`,
        applicationCategory: "DeveloperApplication",
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
                { label: "SEO Tools", href: "/tools/seo" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Free SEO Tools
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                Generate XML sitemaps, robots.txt files, meta tags, schema markup, and Open Graph tags.
                Improve your search engine rankings with these free, client-side SEO tools.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm py-1">
                  No signup required
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  Client-side processing
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  Privacy-focused
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  100% Free
                </Badge>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {seoTools.map((tool) => {
                const Icon = toolIcons[tool.slug] || Search
                return (
                  <Card key={tool.slug} className="group hover:shadow-lg transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {tool.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tool.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {tool.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tool.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={`/tools/seo/${tool.slug}`}>
                          Use Tool
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* SEO Benefits Section */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Why Use SEO Tools?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Improve Search Rankings</h3>
                    <p className="text-sm text-muted-foreground">
                      Properly configured sitemaps, meta tags, and structured data help search engines 
                      understand and index your content better.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Rich Search Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Schema markup enables rich snippets in search results, including star ratings, 
                      FAQs, breadcrumbs, and more.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Better Social Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Open Graph and Twitter Card tags ensure your content looks great when shared 
                      on social media platforms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How Our Tools Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Easy to Use</h3>
                    <p className="text-sm text-muted-foreground">
                      Simple forms and intuitive interfaces make generating SEO markup straightforward, 
                      even without technical knowledge.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Valid Output</h3>
                    <p className="text-sm text-muted-foreground">
                      All generated markup follows current standards and best practices for 
                      maximum compatibility with search engines.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">
                      All processing happens in your browser. Your data never leaves your device, 
                      ensuring complete privacy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

