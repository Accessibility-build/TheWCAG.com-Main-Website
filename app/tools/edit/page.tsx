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
  Scissors,
  Eraser,
  X,
  EyeOff,
  Maximize2,
  Paintbrush,
  Palette,
  RefreshCw,
  Shield,
  FileX,
  Copy,
  FileEdit,
} from "lucide-react"
import type { Metadata } from "next"
import { TOOLS, getToolsByCategory } from "@/lib/tools/constants"

export const metadata: Metadata = {
  title: "Free Online Editing Tools - Image & PDF Editors | TheWCAG",
  description:
    "Professional image and document editing tools. Remove backgrounds, watermarks, objects. Upscale, colorize, restore images. Edit PDFs. All free and private.",
  keywords: [
    "background remover",
    "watermark remover",
    "object remover",
    "image upscaler",
    "image colorizer",
    "photo restoration",
    "face blur",
    "pdf editor",
    "image editing tools",
    "free image editor",
  ],
  openGraph: {
    title: "Free Online Editing Tools",
    description:
      "Professional image and document editing tools. Remove backgrounds, watermarks, objects. Upscale, colorize, restore images. All free.",
    url: "https://thewcag.com/tools/edit",
    type: "website",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Free Online Editing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Editing Tools",
    description: "Professional image and document editing tools. All free and private.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/tools/edit",
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
  "background-remover": Scissors,
  "watermark-remover": Eraser,
  "object-remover": X,
  "face-blur": EyeOff,
  "image-upscaler": Maximize2,
  "image-inpainting": Paintbrush,
  "image-colorizer": Palette,
  "image-restoration": RefreshCw,
  "image-anonymizer": Shield,
  "image-metadata-remover": FileX,
  "image-duplicate-finder": Copy,
  "pdf-editor": FileEdit,
}

export default function EditToolsPage() {
  const editingTools = getToolsByCategory("editing")
  const currentDate = new Date().toISOString().split("T")[0]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Online Editing Tools",
    description:
      "Professional image and document editing tools. Remove backgrounds, watermarks, objects. Upscale, colorize, restore images.",
    url: "https://thewcag.com/tools/edit",
    dateModified: currentDate,
    numberOfItems: editingTools.length,
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
          name: "Edit",
          item: "https://thewcag.com/tools/edit",
        },
      ],
    },
  }

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Online Editing Tools",
    description: "A collection of professional image and document editing tools.",
    numberOfItems: editingTools.length,
    itemListElement: editingTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      description: tool.shortDescription,
      url: `https://thewcag.com/tools/edit/${tool.slug}`,
      item: {
        "@type": "WebApplication",
        name: tool.name,
        description: tool.description,
        url: `https://thewcag.com/tools/edit/${tool.slug}`,
        applicationCategory: "MultimediaApplication",
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
                { label: "Edit", href: "/tools/edit" },
              ]}
            />

            {/* Hero Section */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Free Online Editing Tools
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                Professional-grade image and document editing tools. Remove backgrounds, 
                watermarks, and objects. Upscale, colorize, and restore photos. Edit PDFs. 
                All processing happens in your browser for maximum privacy.
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
                  Privacy-focused
                </Badge>
              </div>
            </div>

            {/* Tool Categories */}
            <div className="space-y-8">
              {/* Image Editing Tools */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Image Editing Tools</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {editingTools
                    .filter(tool => tool.slug !== "pdf-editor")
                    .map((tool) => {
                      const Icon = toolIcons[tool.slug]
                      return (
                        <Card
                          key={tool.slug}
                          className="hover:shadow-md transition-shadow h-full flex flex-col"
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              {Icon && (
                                <div className="p-1.5 rounded-md bg-primary/10">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                              )}
                              <CardTitle className="text-lg">{tool.name}</CardTitle>
                            </div>
                            <CardDescription className="line-clamp-2">
                              {tool.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0 mt-auto">
                            <div className="flex flex-wrap gap-1 mb-3">
                              {tool.features.slice(0, 2).map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={`/tools/edit/${tool.slug}`}>
                                Use Tool
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </section>

              {/* Document Editing Tools */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Document Editing Tools</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {editingTools
                    .filter(tool => tool.slug === "pdf-editor")
                    .map((tool) => {
                      const Icon = toolIcons[tool.slug]
                      return (
                        <Card
                          key={tool.slug}
                          className="hover:shadow-md transition-shadow h-full flex flex-col"
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              {Icon && (
                                <div className="p-1.5 rounded-md bg-primary/10">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                              )}
                              <CardTitle className="text-lg">{tool.name}</CardTitle>
                            </div>
                            <CardDescription className="line-clamp-2">
                              {tool.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0 mt-auto">
                            <div className="flex flex-wrap gap-1 mb-3">
                              {tool.features.slice(0, 2).map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={`/tools/edit/${tool.slug}`}>
                                Use Tool
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </section>
            </div>

            {/* Bottom CTA */}
            <section className="mt-16 text-center py-12 border-t">
              <h2 className="text-2xl font-bold mb-4">Need Conversion Tools?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out our conversion tools for image formats, PDFs, documents, 
                data formats, and more.
              </p>
              <Button asChild>
                <Link href="/tools/convert">
                  View Conversion Tools
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
