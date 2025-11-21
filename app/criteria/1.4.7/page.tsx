"use client"

import { CheckCircle2, XCircle, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { getCriterionById } from "@/lib/wcag-data"

export default function CriterionPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const criterion = getCriterionById("1-4-7")

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  if (!criterion) return null

  const principleName = criterion.principle.charAt(0).toUpperCase() + criterion.principle.slice(1)

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href={`/principles/${criterion.principle}`} className="hover:text-foreground transition-colors">
          {principleName}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{criterion.number} {criterion.title}</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level={criterion.level} />
          <span className="text-sm text-muted-foreground">{principleName} → {criterion.guideline}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{criterion.number} {criterion.title}</h1>
        <p className="text-xl text-muted-foreground">
          {criterion.description}
        </p>
      </div>

      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          {criterion.whyItMatters}
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {criterion.whoBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{benefit}</h4>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {criterion.details && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Details</h2>
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Introduction</h3>
            <p className="leading-relaxed text-muted-foreground mb-6">
              {criterion.details.introduction}
            </p>
            <h3 className="text-xl font-semibold mb-3">Intent</h3>
            <p className="leading-relaxed text-muted-foreground">
              {criterion.details.intent}
            </p>
          </Card>
        </section>
      )}

      {criterion.examples && criterion.examples.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {criterion.examples.map((example, index) => (
              <Card key={index} className={`p-6 ${example.type === "bad" ? "border-destructive/50" : "border-green-500/50"}`}>
                <div className="flex items-center gap-2 mb-4">
                  {example.type === "bad" ? (
                    <XCircle className="w-5 h-5 text-destructive" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  <h3 className="font-semibold text-lg">
                    {example.type === "bad" ? "❌" : "✓"} {example.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
                {example.code && (
                  <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}

      {criterion.codeExamples && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>
          <Tabs defaultValue={Object.keys(criterion.codeExamples)[0]} className="w-full">
            <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${Object.keys(criterion.codeExamples).length}, 1fr)` }}>
              {criterion.codeExamples.html && <TabsTrigger value="html">HTML</TabsTrigger>}
              {criterion.codeExamples.css && <TabsTrigger value="css">CSS</TabsTrigger>}
              {criterion.codeExamples.js && <TabsTrigger value="js">JavaScript</TabsTrigger>}
              {criterion.codeExamples.react && <TabsTrigger value="react">React</TabsTrigger>}
              {criterion.codeExamples.vue && <TabsTrigger value="vue">Vue</TabsTrigger>}
            </TabsList>
            {criterion.codeExamples.html && (
              <TabsContent value="html" className="mt-4">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">HTML Example</h3>
                    <Button variant="outline" size="sm" onClick={() => copyCode(criterion.codeExamples!.html!, "html")}>
                      {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{criterion.codeExamples.html}</code>
                  </pre>
                </Card>
              </TabsContent>
            )}
            {criterion.codeExamples.css && (
              <TabsContent value="css" className="mt-4">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">CSS Example</h3>
                    <Button variant="outline" size="sm" onClick={() => copyCode(criterion.codeExamples!.css!, "css")}>
                      {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{criterion.codeExamples.css}</code>
                  </pre>
                </Card>
              </TabsContent>
            )}
            {criterion.codeExamples.js && (
              <TabsContent value="js" className="mt-4">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">JavaScript Example</h3>
                    <Button variant="outline" size="sm" onClick={() => copyCode(criterion.codeExamples!.js!, "js")}>
                      {copiedCode === "js" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{criterion.codeExamples.js}</code>
                  </pre>
                </Card>
              </TabsContent>
            )}
            {criterion.codeExamples.react && (
              <TabsContent value="react" className="mt-4">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">React Example</h3>
                    <Button variant="outline" size="sm" onClick={() => copyCode(criterion.codeExamples!.react!, "react")}>
                      {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{criterion.codeExamples.react}</code>
                  </pre>
                </Card>
              </TabsContent>
            )}
            {criterion.codeExamples.vue && (
              <TabsContent value="vue" className="mt-4">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Vue Example</h3>
                    <Button variant="outline" size="sm" onClick={() => copyCode(criterion.codeExamples!.vue!, "vue")}>
                      {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{criterion.codeExamples.vue}</code>
                  </pre>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </section>
      )}

      {criterion.testing && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Testing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
              <ul className="space-y-2">
                {criterion.testing.manual.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
              <ul className="space-y-2">
                {criterion.testing.automated.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      )}
      </div>
    </CriteriaPageLayout>
  )
}
