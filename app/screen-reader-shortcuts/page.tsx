import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { SCREEN_READERS } from "@/lib/screen-reader-shortcuts"

export const metadata: Metadata = {
  title: "Screen Reader Keyboard Shortcuts — NVDA, JAWS, VoiceOver, TalkBack | TheWCAG",
  description:
    "Complete reference of keyboard shortcuts and gestures for the most-used screen readers: NVDA, JAWS, VoiceOver (macOS / iOS), and Android TalkBack. Reading commands, web navigation, forms, and the Rotor.",
  keywords: [
    "screen reader shortcuts",
    "NVDA shortcuts",
    "JAWS shortcuts",
    "VoiceOver shortcuts",
    "VoiceOver gestures",
    "TalkBack gestures",
    "accessibility testing",
    "screen reader keyboard commands",
    "NVDA cheat sheet",
    "JAWS cheat sheet",
  ],
  openGraph: {
    title: "Screen Reader Keyboard Shortcuts — NVDA, JAWS, VoiceOver, TalkBack",
    description:
      "Hands-on reference for the most-used screen reader commands across desktop and mobile.",
    url: "https://thewcag.com/screen-reader-shortcuts",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "Screen Reader Shortcuts | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/screen-reader-shortcuts" },
  robots: { index: true, follow: true },
}

export default function ScreenReaderShortcutsPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Screen Reader Keyboard Shortcuts — NVDA, JAWS, VoiceOver, TalkBack",
    description:
      "Reference page collecting the most useful shortcuts for the major screen readers across Windows, macOS, iOS, and Android.",
    url: "https://thewcag.com/screen-reader-shortcuts",
    author: { "@type": "Organization", name: "TheWCAG.com" },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      logo: { "@type": "ImageObject", url: "https://thewcag.com/Logo.png" },
    },
  }

  return (
    <>
      <StructuredData data={articleJson} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Screen Reader Shortcuts", href: "/screen-reader-shortcuts" }]} />

            <header className="mb-10 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                Screen reader keyboard shortcuts
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                The shortcuts and gestures you actually need to test your site with NVDA, JAWS,
                VoiceOver, and TalkBack. Want to know <em>why</em> testing with a real screen
                reader matters? It catches problems automated tools miss — landmark structure,
                live-region politeness, focus order, label clarity.
              </p>
            </header>

            {/* Jump nav */}
            <nav aria-label="Screen readers" className="mb-10">
              <ul className="flex flex-wrap gap-2 text-sm">
                {SCREEN_READERS.map((sr) => (
                  <li key={sr.slug}>
                    <a
                      href={`#${sr.slug}`}
                      className="inline-flex items-center rounded-full border bg-card px-3 py-1.5 font-medium hover:border-primary/50 hover:bg-muted transition-colors"
                    >
                      {sr.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {SCREEN_READERS.map((sr) => (
              <section key={sr.slug} id={sr.slug} className="mb-14 scroll-mt-24">
                <Card className="border-2 mb-6">
                  <CardHeader>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <CardTitle className="text-2xl sm:text-3xl">{sr.name}</CardTitle>
                      <Badge variant="secondary" className="text-[11px]">{sr.platform}</Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed mt-2">
                      {sr.description}
                    </CardDescription>
                    {sr.modifierNote && (
                      <p className="text-xs mt-2 inline-flex items-center gap-2 rounded-md bg-muted px-2.5 py-1 font-mono">
                        <span className="font-semibold not-italic">Modifier:</span> {sr.modifierNote}
                      </p>
                    )}
                  </CardHeader>
                </Card>

                {sr.groups.map((group) => (
                  <div key={group.name} className="mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{group.name}</h3>
                    <div className="overflow-x-auto rounded-2xl border-2">
                      <table className="w-full text-sm">
                        <caption className="sr-only">
                          {sr.name} shortcuts — {group.name}
                        </caption>
                        <thead className="bg-muted/50 text-xs uppercase tracking-wide">
                          <tr>
                            <th scope="col" className="text-left px-3 py-2 font-semibold w-1/3">Keys / gesture</th>
                            <th scope="col" className="text-left px-3 py-2 font-semibold">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.shortcuts.map((s) => (
                            <tr key={s.keys + s.action} className="border-t">
                              <td className="px-3 py-2 font-mono text-xs sm:text-sm whitespace-nowrap">
                                {s.keys}
                              </td>
                              <td className="px-3 py-2">{s.action}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                {sr.resources.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Official docs:</span>{" "}
                    {sr.resources.map((r, i) => (
                      <span key={r.url}>
                        <a
                          className="text-primary hover:underline inline-flex items-center gap-1"
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {r.label}
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                        {i < sr.resources.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}

            <section className="rounded-2xl border-2 bg-muted/30 p-5 sm:p-6 text-sm">
              <h2 className="text-lg font-bold mb-2">Where to go next</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  <Link className="text-primary hover:underline" href="/testing-guide">
                    Manual accessibility testing guide
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/aria-cheatsheet">
                    ARIA cheatsheet — what every role announces
                  </Link>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/criteria/tag/screen-reader">
                    WCAG criteria related to screen reader support
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
