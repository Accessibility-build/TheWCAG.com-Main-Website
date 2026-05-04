import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { ColorBlindnessSimulator } from "./color-blindness-simulator"

export const metadata: Metadata = {
  title: "Color Blindness Simulator — Test Designs for 8 Vision Types | TheWCAG",
  description:
    "Free color blindness simulator. Drop in an image or paste a URL and instantly see how your design looks to people with deuteranopia, protanopia, tritanopia, achromatopsia, and other forms of color vision deficiency. Runs entirely in your browser — nothing is uploaded.",
  keywords: [
    "color blindness simulator",
    "color blindness checker",
    "deuteranopia",
    "protanopia",
    "tritanopia",
    "achromatopsia",
    "color vision deficiency",
    "accessibility tool",
    "design tool",
  ],
  openGraph: {
    title: "Color Blindness Simulator — 8 vision types, browser-only",
    description:
      "Test how your designs look across the most common color vision deficiencies. No upload, no signup — runs locally in your browser.",
    url: "https://thewcag.com/tools/color-blindness-simulator",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "Color Blindness Simulator | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/tools/color-blindness-simulator" },
  robots: { index: true, follow: true },
}

export default function ColorBlindnessSimulatorPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Color Blindness Simulator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any browser",
    description:
      "Browser-only simulator that previews any image across 8 common color vision deficiencies.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://thewcag.com/tools/color-blindness-simulator",
  }

  return (
    <>
      <StructuredData data={articleJson} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Tools", href: "/tools" },
                { label: "Color Blindness Simulator", href: "/tools/color-blindness-simulator" },
              ]}
            />

            <header className="mb-8 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Color Blindness Simulator
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Drop a screenshot, mockup, or chart in and see how it appears across the most
                common color vision deficiencies. Everything is processed locally in your browser
                — your image never leaves your device.
              </p>
            </header>

            <ColorBlindnessSimulator />

            <section className="mt-10 grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-2xl border-2 p-5">
                <h2 className="font-bold mb-2">What gets simulated</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We apply the Brettel/Viénot/Mollon color confusion matrices used by most
                  accessibility tools. The result is a perceptually plausible approximation, not a
                  medical diagnostic, and individual experience varies.
                </p>
              </div>
              <div className="rounded-2xl border-2 p-5">
                <h2 className="font-bold mb-2">When to use it</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Charts and dashboards, status indicators, error/success styling, form validation,
                  marketing graphics — anywhere meaning rests on color alone. See WCAG{" "}
                  <a className="text-primary hover:underline" href="/criteria/1.4.1">1.4.1 Use of Color</a>{" "}
                  and <a className="text-primary hover:underline" href="/criteria/1.4.11">1.4.11 Non-text Contrast</a>.
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
