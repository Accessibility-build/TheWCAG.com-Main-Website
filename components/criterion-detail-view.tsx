"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { LevelBadge } from "@/components/level-badge"
import { NewBadge } from "@/components/new-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Info, BookOpen, Code2 } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag-data"

interface CriterionDetailViewProps {
  criterion: SuccessCriterion
}

export function CriterionDetailView({ criterion }: CriterionDetailViewProps) {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/principles" className="hover:text-foreground">
                    Principles
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href={`/principles/${criterion.principle}`} className="hover:text-foreground capitalize">
                    {criterion.principle}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium">{criterion.number}</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {criterion.number} {criterion.title}
                </h1>
                <div className="flex items-center gap-2">
                  {criterion.isNew && <NewBadge />}
                  <LevelBadge level={criterion.level} className="text-sm px-3 py-1" />
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="outline" className="capitalize">
                  {criterion.principle}
                </Badge>
                <span>•</span>
                <span>{criterion.guideline}</span>
              </div>
            </div>

            {/* Definition */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                    Official Definition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">{criterion.description}</p>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="font-medium mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                      Plain Language
                    </p>
                    <p className="leading-relaxed">{criterion.summary}</p>
                  </div>
                  {criterion.details && (
                    <div className="mt-6 space-y-4">
                      <h3 className="font-semibold text-lg">Introduction</h3>
                      <p className="leading-relaxed text-muted-foreground">{criterion.details.introduction}</p>
                      <h3 className="font-semibold text-lg">Intent</h3>
                      <p className="leading-relaxed text-muted-foreground">{criterion.details.intent}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            {/* Why It Matters */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="leading-relaxed mb-4">{criterion.whyItMatters}</p>
                  <div>
                    <p className="font-semibold mb-2">Who Benefits:</p>
                    <ul className="space-y-2">
                      {criterion.whoBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Examples */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Examples</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {criterion.examples ? (
                  criterion.examples.map((example, index) => (
                    <Card
                      key={index}
                      className={example.type === "bad" ? "border-destructive/50" : "border-primary/50"}
                    >
                      <CardHeader>
                        <CardTitle
                          className={`flex items-center gap-2 ${
                            example.type === "bad" ? "text-destructive" : "text-primary"
                          }`}
                        >
                          {example.type === "bad" ? (
                            <XCircle className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                          )}
                          {example.title}
                        </CardTitle>
                        <CardDescription>
                          {example.type === "bad" ? "What NOT to do" : "Correct implementation"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {example.code && (
                            <div className="p-4 bg-muted rounded-lg overflow-x-auto">
                              <code className="text-sm">{example.code}</code>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{example.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 p-8 text-center text-muted-foreground bg-muted/30 rounded-lg border border-dashed">
                    Detailed examples coming soon for this criterion.
                  </div>
                )}
              </div>
            </section>

            {/* Code Examples */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="h-6 w-6" aria-hidden="true" />
                Code Examples
              </h2>
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="grid w-full grid-cols-5 max-w-2xl">
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="css">CSS</TabsTrigger>
                  <TabsTrigger value="js">JavaScript</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="vue">Vue</TabsTrigger>
                </TabsList>

                {["html", "css", "js", "react", "vue"].map((lang) => (
                  <TabsContent key={lang} value={lang} className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="uppercase">{lang} Implementation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                          <code className="text-sm">
                            {criterion.codeExamples?.[lang as keyof typeof criterion.codeExamples] ||
                              `// ${lang.toUpperCase()} implementation for ${criterion.number}\n// Refer to W3C documentation for specific patterns`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </section>

            {/* Testing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How to Test</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Manual Testing</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {criterion.testing?.manual ? (
                          criterion.testing.manual.map((step, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{step}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Manually verify compliance with {criterion.number} requirements</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Automated Testing</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {criterion.testing?.automated ? (
                          criterion.testing.automated.map((tool, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{tool}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Use automated accessibility tools to check for violations</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
