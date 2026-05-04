import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ARIA_GLOBAL_ATTRIBUTES, ARIA_ROLES, type AriaRoleCategory } from "@/lib/aria-data"

export const metadata: Metadata = {
  title: "ARIA Cheatsheet — Roles, States & Properties (WAI-ARIA 1.2) | TheWCAG",
  description:
    "Complete WAI-ARIA 1.2 cheatsheet: every landmark, widget, document-structure, and live-region role plus the global states and properties (aria-label, aria-describedby, aria-expanded, aria-live, and more). With native HTML equivalents and code examples.",
  keywords: [
    "ARIA cheatsheet",
    "WAI-ARIA",
    "ARIA roles",
    "ARIA attributes",
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-expanded",
    "aria-live",
    "ARIA reference",
    "screen reader",
    "accessibility",
  ],
  openGraph: {
    title: "ARIA Cheatsheet — Roles, States & Properties (WAI-ARIA 1.2)",
    description:
      "Single-page reference for every common WAI-ARIA role, state, and property with HTML equivalents and code examples.",
    url: "https://thewcag.com/aria-cheatsheet",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
  },
  twitter: { card: "summary_large_image", title: "ARIA Cheatsheet | TheWCAG" },
  alternates: { canonical: "https://thewcag.com/aria-cheatsheet" },
  robots: { index: true, follow: true },
}

const ROLE_CATEGORIES: AriaRoleCategory[] = [
  "Landmark",
  "Document Structure",
  "Widget",
  "Composite Widget",
  "Window",
  "Live Region",
]

export default function AriaCheatsheetPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "ARIA Cheatsheet — Roles, States & Properties",
    description:
      "Complete WAI-ARIA 1.2 reference for landmarks, widgets, live regions, and global states/properties.",
    url: "https://thewcag.com/aria-cheatsheet",
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
            <Breadcrumb items={[{ label: "ARIA Cheatsheet", href: "/aria-cheatsheet" }]} />

            <header className="mb-10 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                ARIA Cheatsheet
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                A single-page reference for the WAI-ARIA 1.2 roles, states, and properties you will
                actually use. Native HTML elements should always be your first choice — reach for
                ARIA only when no HTML equivalent fits.
              </p>
              <div className="mt-4 rounded-xl border-2 border-amber-500/40 bg-amber-500/5 p-4 text-sm">
                <p className="font-semibold mb-1">First rule of ARIA</p>
                <p className="text-muted-foreground">
                  &ldquo;If you can use a native HTML element or attribute with the semantics and
                  behavior you require already built in, instead of repurposing an element and
                  adding an ARIA role, state, or property to make it accessible, then do so.&rdquo;
                  — <em>WAI-ARIA Authoring Practices</em>
                </p>
              </div>
            </header>

            {/* Quick jump nav */}
            <nav aria-label="Cheatsheet sections" className="mb-10">
              <ul className="flex flex-wrap gap-2 text-sm">
                {ROLE_CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${slugify(cat)}`}
                      className="inline-flex items-center rounded-full border bg-card px-3 py-1.5 font-medium hover:border-primary/50 hover:bg-muted transition-colors"
                    >
                      {cat}s
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#global-attributes"
                    className="inline-flex items-center rounded-full border bg-card px-3 py-1.5 font-medium hover:border-primary/50 hover:bg-muted transition-colors"
                  >
                    Global states &amp; properties
                  </a>
                </li>
              </ul>
            </nav>

            {ROLE_CATEGORIES.map((cat) => {
              const list = ARIA_ROLES.filter((r) => r.category === cat)
              if (list.length === 0) return null
              return (
                <section key={cat} id={slugify(cat)} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{cat} roles</h2>
                  <p className="text-sm text-muted-foreground mb-5">{categoryDescription(cat)}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {list.map((r) => (
                      <Card key={r.name} className="border-2">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-3">
                            <CardTitle className="font-mono text-base sm:text-lg">{r.name}</CardTitle>
                            {r.htmlEquivalent && (
                              <Badge variant="secondary" className="font-mono text-[10px] uppercase">
                                HTML: {r.htmlEquivalent}
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm space-y-3">
                          <p className="text-muted-foreground leading-relaxed">{r.description}</p>
                          {r.supportedStates && r.supportedStates.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                                Common states &amp; properties
                              </p>
                              <ul className="flex flex-wrap gap-1.5">
                                {r.supportedStates.map((s) => (
                                  <li
                                    key={s}
                                    className="font-mono text-[11px] rounded bg-muted px-2 py-0.5"
                                  >
                                    {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {r.example && (
                            <pre className="overflow-x-auto rounded-md bg-muted/60 px-3 py-2 text-[11px] sm:text-xs leading-relaxed">
                              <code>{r.example}</code>
                            </pre>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )
            })}

            {/* Global attributes */}
            <section id="global-attributes" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Global states &amp; properties</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Attributes that work across many roles. <strong>States</strong> change as the user
                interacts; <strong>properties</strong> are usually fixed for the lifetime of the
                element.
              </p>
              <div className="overflow-x-auto rounded-2xl border-2">
                <table className="w-full text-sm">
                  <caption className="sr-only">Common ARIA states and properties</caption>
                  <thead className="bg-muted/50 text-xs uppercase tracking-wide">
                    <tr>
                      <th scope="col" className="text-left px-3 py-2 font-semibold">Attribute</th>
                      <th scope="col" className="text-left px-3 py-2 font-semibold">Kind</th>
                      <th scope="col" className="text-left px-3 py-2 font-semibold">Applies to</th>
                      <th scope="col" className="text-left px-3 py-2 font-semibold">Description</th>
                      <th scope="col" className="text-left px-3 py-2 font-semibold">Values</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARIA_GLOBAL_ATTRIBUTES.map((a) => (
                      <tr key={a.name} className="border-t">
                        <td className="px-3 py-2 font-mono text-xs">{a.name}</td>
                        <td className="px-3 py-2 capitalize">
                          <Badge
                            variant={a.kind === "state" ? "default" : "secondary"}
                            className="text-[10px]"
                          >
                            {a.kind}
                          </Badge>
                        </td>
                        <td className="px-3 py-2 text-muted-foreground">{a.appliesTo}</td>
                        <td className="px-3 py-2">{a.description}</td>
                        <td className="px-3 py-2 font-mono text-xs">{a.values}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-2xl border-2 bg-muted/30 p-5 sm:p-6 text-sm">
              <h2 className="text-lg font-bold mb-2">Further reading</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  <a className="text-primary hover:underline" href="https://www.w3.org/TR/wai-aria-1.2/" target="_blank" rel="noopener noreferrer">
                    W3C WAI-ARIA 1.2 specification
                  </a>
                </li>
                <li>
                  <a className="text-primary hover:underline" href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noopener noreferrer">
                    ARIA Authoring Practices Guide (APG)
                  </a>
                </li>
                <li>
                  <a className="text-primary hover:underline" href="https://www.w3.org/TR/html-aria/" target="_blank" rel="noopener noreferrer">
                    ARIA in HTML — implicit roles and which ARIA you can/can&apos;t add
                  </a>
                </li>
                <li>
                  <Link className="text-primary hover:underline" href="/criteria/4.1.2">
                    WCAG 4.1.2 Name, Role, Value — the underlying success criterion
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

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function categoryDescription(cat: AriaRoleCategory): string {
  switch (cat) {
    case "Landmark":
      return "Top-level page regions screen readers can jump between. Use the native HTML landmark elements when you can."
    case "Document Structure":
      return "Roles that describe the structure of static, non-interactive content."
    case "Widget":
      return "Roles for single interactive controls."
    case "Composite Widget":
      return "Roles that contain multiple focusable child widgets and require keyboard navigation patterns."
    case "Window":
      return "Roles for application-window-style overlays — usually with focus trapping and modal semantics."
    case "Live Region":
      return "Roles whose content changes dynamically and should be announced to assistive technology."
    default:
      return ""
  }
}
