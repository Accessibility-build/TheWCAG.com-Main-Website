import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Lawsuits 2026 - Legal Cases, Archive & Trends | TheWCAG",
  description:
    "Comprehensive collection of accessibility lawsuits, legal cases & settlements. Explore recent ADA compliance cases, historical lawsuit archive (2000-2017), litigation trends, and digital accessibility legal outcomes. Learn from real-world WCAG violations.",
  keywords: [
    "accessibility lawsuits",
    "ADA lawsuits",
    "website accessibility cases",
    "accessibility settlements",
    "digital accessibility legal cases",
    "WCAG compliance lawsuits",
    "ADA website compliance",
    "accessibility legal precedent",
    "accessibility litigation trends",
    "ADA Title III lawsuits",
    "accessibility lawsuit archive",
    "web accessibility legal cases",
    "accessibility enforcement",
    "ADA compliance statistics",
    "accessibility lawsuit database",
  ],
  openGraph: {
    title: "Accessibility Lawsuits - Legal Cases, Archive & Trends 2024-2025",
    description:
      "Comprehensive collection of accessibility lawsuits, legal cases, and settlements. Explore recent ADA compliance cases, historical lawsuit archive, and litigation trends.",
    type: "website",
    url: "https://thewcag.com/lawsuits",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Lawsuits - Legal Cases & Trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Lawsuits - Legal Cases, Archive & Trends 2024-2025",
    description: "Explore accessibility lawsuits, historical archive, and litigation trends. Learn from real-world ADA compliance cases.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/lawsuits",
  },
}

export default function LawsuitsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Accessibility Lawsuits Database",
    description: "Comprehensive collection of accessibility lawsuits, legal cases, and settlements. Explore recent ADA compliance cases, historical lawsuit archive, and litigation trends.",
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {children}
    </>
  )
}

