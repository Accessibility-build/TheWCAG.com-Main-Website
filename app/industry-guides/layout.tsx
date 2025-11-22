import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industry-Specific Accessibility Guides - WCAG for E-commerce, Education, Healthcare | TheWCAG",
  description:
    "Industry-specific accessibility guides for e-commerce, education, healthcare, government & finance. Learn WCAG requirements & best practices for your sector. Get started!",
  keywords: [
    "e-commerce accessibility",
    "education accessibility",
    "healthcare accessibility",
    "government accessibility",
    "finance accessibility",
    "industry accessibility guide",
    "sector-specific WCAG",
    "accessible e-commerce",
  ],
  openGraph: {
    title: "Industry-Specific Accessibility Guides - WCAG for Different Sectors",
    description:
      "Accessibility guides tailored for e-commerce, education, healthcare, government, and finance industries.",
    type: "website",
    url: "https://thewcag.com/industry-guides",
    siteName: "TheWCAG",
    images: [
      {
        url: "https://thewcag.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industry-Specific Accessibility Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Accessibility Guides - WCAG for Different Sectors",
    description: "Accessibility guides tailored for specific industries and sectors.",
    images: ["https://thewcag.com/og-image.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/industry-guides",
  },
}

export default function IndustryGuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

