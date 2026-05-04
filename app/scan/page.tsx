import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { ScanForm } from "./scan-form"

export const metadata: Metadata = {
  title: "Free Accessibility Scanner — Test any URL in seconds | TheWCAG",
  description:
    "Free accessibility scanner powered by axe-core. Paste a URL and get a categorized report of WCAG violations, severity, and the exact selectors that need fixing. No login, no signup, no upload.",
  keywords: [
    "accessibility scanner",
    "free accessibility checker",
    "axe-core",
    "WCAG checker",
    "ADA website checker",
    "url accessibility test",
    "accessibility audit tool",
  ],
  openGraph: {
    title: "Free Accessibility Scanner — axe-core powered",
    description:
      "Paste any URL and get a categorized accessibility report — violation severity, WCAG tags, and selectors to fix.",
    url: "https://thewcag.com/scan",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "Free Accessibility Scanner | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/scan" },
  robots: { index: true, follow: true },
}

export default function ScanPage() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TheWCAG Accessibility Scanner",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any browser",
    description:
      "Server-side accessibility scanner that runs axe-core against any public URL and returns categorized violations.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://thewcag.com/scan",
  }

  return (
    <>
      <StructuredData data={json} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Accessibility Scanner", href: "/scan" }]} />

            <header className="mb-8 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Free accessibility scanner
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Paste a public URL. We&apos;ll fetch the rendered HTML, run the same{" "}
                <a className="text-primary hover:underline" href="https://github.com/dequelabs/axe-core" target="_blank" rel="noopener noreferrer">
                  axe-core
                </a>{" "}
                rules used by the major auditing tools, and return a categorized report with
                severity, WCAG tags, and the selectors you need to fix.
              </p>
            </header>

            <ScanForm />

            <section className="mt-12 grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-2xl border-2 p-5">
                <h2 className="font-bold mb-2">What this catches</h2>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Missing alt text on informative images</li>
                  <li>Color contrast below WCAG thresholds</li>
                  <li>Form fields without accessible names</li>
                  <li>Improper heading order &amp; landmark structure</li>
                  <li>Inaccessible link text and ambiguous targets</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 p-5">
                <h2 className="font-bold mb-2">What it can&apos;t catch</h2>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Whether your alt text is meaningful (only that it exists)</li>
                  <li>Behavior gated behind login or interaction</li>
                  <li>Most cognitive-accessibility issues</li>
                  <li>Subtle screen-reader announcement bugs</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  Automated tools surface roughly 30–40 % of real accessibility issues. Pair this
                  with manual testing — see our{" "}
                  <a className="text-primary hover:underline" href="/testing-guide">
                    testing guide
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
