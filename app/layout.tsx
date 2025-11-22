import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for WCAG guide
  title: {
    default: "TheWCAG.com - Complete WCAG 2.2 Accessibility Guidelines",
    template: "%s | TheWCAG.com",
  },
  description:
    "Comprehensive guide to Web Content Accessibility Guidelines (WCAG) 2.2 with interactive examples, tools, and resources for developers, designers, and content creators. Learn accessibility best practices with code examples and testing guides.",
  keywords: [
    "WCAG",
    "accessibility",
    "a11y",
    "WCAG 2.2",
    "web accessibility",
    "POUR principles",
    "accessible web design",
    "accessibility guidelines",
    "WCAG compliance",
    "web accessibility standards",
    "ADA compliance",
    "Section 508",
    "accessibility testing",
    "screen reader",
    "keyboard navigation",
  ],
  authors: [{ name: "TheWCAG.com" }],
  creator: "TheWCAG.com",
  publisher: "TheWCAG.com",
  generator: "Next.js",
  applicationName: "TheWCAG.com",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://thewcag.com"),
  alternates: {
    canonical: "https://thewcag.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thewcag.com",
    title: "TheWCAG.com - Complete WCAG 2.2 Guidelines",
    description:
      "Master web accessibility with our comprehensive WCAG 2.2 guide. Interactive examples, tools, and resources for developers and designers.",
    siteName: "TheWCAG.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheWCAG.com - WCAG 2.2 Accessibility Guidelines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheWCAG.com - Complete WCAG 2.2 Guidelines",
    description:
      "Master web accessibility with our comprehensive WCAG 2.2 guide. Interactive examples, tools, and resources.",
    images: ["/og-image.png"],
    creator: "@thewcag",
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
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
    ],
  },
  verification: {
    // Google Search Console verification
    // To verify your site:
    // 1. Go to https://search.google.com/search-console
    // 2. Add your property (thewcag.com)
    // 3. Choose "HTML tag" verification method
    // 4. Copy the content value from the meta tag
    // 5. Replace "your-google-verification-code" below with that value
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFDF9" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1E" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WQ5PHRJ4K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WQ5PHRJ4K');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

