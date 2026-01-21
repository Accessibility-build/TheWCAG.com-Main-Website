import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Outfit, Pacifico } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QuizWelcomeDialog } from "@/components/quiz/quiz-welcome-dialog"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
})
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
})

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for WCAG guide
  title: {
    default: "TheWCAG - An Accessibility Guide",
    template: "%s | TheWCAG",
  },
  description:
    "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
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
  authors: [{ name: "TheWCAG - An accessibility Guide" }],
  creator: "TheWCAG - An accessibility Guide",
  publisher: "TheWCAG - An accessibility Guide",
  generator: "Next.js",
  applicationName: "TheWCAG - An accessibility Guide",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://thewcag.com"),
  alternates: {
    canonical: "https://thewcag.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thewcag.com",
    title: "TheWCAG - An Accessibility Guide",
    description:
      "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "TheWCAG - An accessibility Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheWCAG - An Accessibility Guide",
    description:
      "Master WCAG 2.2 accessibility with interactive guides, code examples, and tools. Complete reference for developers and designers building accessible websites.",
    images: ["https://thewcag.com/Logo.png"],
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
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        {/* Resource hints for external services - Non-blocking */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        {/* Preconnect only for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${outfit.variable} ${pacifico.variable} antialiased`}>
        {/* Google tag (gtag.js) - Loaded lazily to avoid render blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WQ5PHRJ4K"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WQ5PHRJ4K');
          `}
        </Script>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="GuHTbuOe41iZIoXX/DWD0Q"
          strategy="afterInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light" disableTransitionOnChange>
          {children}
          <QuizWelcomeDialog />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

