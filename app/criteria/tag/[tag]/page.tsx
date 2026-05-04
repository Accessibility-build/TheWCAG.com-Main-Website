import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { LevelBadge } from "@/components/level-badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { criteriaForTag, getWcagTag, getWcagTags } from "@/lib/wcag/tags"

export const dynamicParams = false

interface RouteProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  return getWcagTags().map((t) => ({ tag: t.slug }))
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { tag } = await params
  const meta = getWcagTag(tag)
  if (!meta) return { title: "Tag Not Found | TheWCAG" }
  const list = criteriaForTag(tag)
  const title = `${meta.name} — WCAG Success Criteria | TheWCAG`
  const description = `${list.length} WCAG 2.2 success criteria for ${meta.name.toLowerCase()}. ${meta.description}`
  return {
    title,
    description,
    keywords: [
      meta.name,
      "WCAG criteria",
      "WCAG 2.2",
      "accessibility checklist",
      "web accessibility",
    ],
    openGraph: {
      title,
      description,
      url: `https://thewcag.com/criteria/tag/${tag}`,
      type: "article",
      siteName: "TheWCAG - An accessibility Guide",
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `https://thewcag.com/criteria/tag/${tag}` },
    robots: { index: true, follow: true },
  }
}

export default async function CriteriaByTagPage({ params }: RouteProps) {
  const { tag } = await params
  const meta = getWcagTag(tag)
  if (!meta) notFound()
  const list = criteriaForTag(tag)

  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${meta.name} — WCAG Success Criteria`,
    description: meta.description,
    numberOfItems: list.length,
    itemListElement: list.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://thewcag.com/criteria/${c.number}`,
      name: `${c.number} ${c.title}`,
    })),
  }

  return (
    <>
      <StructuredData data={itemListJson} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Criteria", href: "/principles" },
                { label: `Topic: ${meta.name}`, href: `/criteria/tag/${tag}` },
              ]}
            />
            <header className="mb-8 sm:mb-10 mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
                WCAG criteria for {meta.name}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {meta.description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{list.length}</span>{" "}
                {list.length === 1 ? "criterion" : "criteria"} matched.
              </p>
            </header>

            {list.length === 0 ? (
              <p className="text-muted-foreground">No criteria matched this topic.</p>
            ) : (
              <ul className="grid gap-3 sm:gap-4">
                {list.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/criteria/${c.number}`}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                    >
                      <Card className="border-2 group-hover:border-primary/40 transition-colors">
                        <CardContent className="p-4 sm:p-5 md:p-6 flex items-start gap-4">
                          <LevelBadge level={c.level} />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
                              <span className="text-sm font-mono text-muted-foreground">{c.number}</span>
                              <h2 className="text-base sm:text-lg font-semibold leading-snug group-hover:underline decoration-2 underline-offset-4">
                                {c.title}
                              </h2>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                              {c.summary}
                            </p>
                          </div>
                          <ArrowRight
                            className="hidden sm:block w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition shrink-0 mt-1"
                            aria-hidden="true"
                          />
                        </CardContent>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <section className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Browse by topic</h2>
              <div className="flex flex-wrap gap-2">
                {getWcagTags()
                  .filter((t) => t.slug !== tag)
                  .map((t) => (
                    <Link
                      key={t.slug}
                      href={`/criteria/tag/${t.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs sm:text-sm font-medium hover:border-primary/50 hover:bg-muted transition-colors"
                    >
                      {t.name}
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
