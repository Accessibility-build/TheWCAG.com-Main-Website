"use client"

import { CheckCircle2, XCircle, Copy, Check, Languages, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function LanguageOfPartsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/principles/understandable" className="hover:text-foreground transition-colors">
          Understandable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">3.1.2 Language of Parts</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Understandable → Readable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.1.2 Language of Parts</h1>
        <p className="text-xl text-muted-foreground">
          The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediate surrounding text.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen readers need to know the language of text to pronounce it correctly. If foreign text is not marked up with the appropriate language attribute, screen readers will use the default page language, resulting in incorrect pronunciation.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion requires that any text in a different language from the page's default language be marked up with the appropriate language attribute so screen readers can pronounce it correctly.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Languages className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Need correct pronunciation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Benefit from clear language</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Unmarked Foreign Text</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30">
              <p className="text-sm">Welcome to our site. Bienvenue sur notre site.</p>
              <p className="text-xs text-destructive mt-2">French text not marked</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Screen reader uses English pronunciation
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<p>Welcome to our site. Bienvenue sur notre site.</p>`}
            </code>
            <p className="text-sm mt-2">French text mispronounced</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Properly Marked Foreign Text</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30">
              <p className="text-sm">Welcome to our site. <span lang="fr">Bienvenue sur notre site.</span></p>
              <p className="text-xs text-green-600 mt-2">French text marked with lang="fr"</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Use lang attribute for language changes
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<span lang="fr">Bienvenue sur notre site.</span>`}
            </code>
            <p className="text-sm mt-2">Screen reader switches to French</p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(`<!-- ❌ Bad: Unmarked language change -->
<p>Hello, <em>bonjour</em>, hola!</p>

<!-- ✅ Good: Properly marked language changes -->
<p>Hello, <span lang="fr">bonjour</span>, <span lang="es">hola</span>!</p>

<!-- ✅ Good: Block-level language change -->
<div lang="fr">
  <h2>Bienvenue</h2>
  <p>Ce contenu est en français.</p>
</div>

<!-- ✅ Good: Using lang attribute on elements -->
<blockquote lang="de">
  "Das Leben ist schön"
</blockquote>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Unmarked language change -->
<p>Hello, <em>bonjour</em>, hola!</p>

<!-- ✅ Good: Properly marked language changes -->
<p>Hello, <span lang="fr">bonjour</span>, <span lang="es">hola</span>!</p>

<!-- ✅ Good: Block-level language change -->
<div lang="fr">
  <h2>Bienvenue</h2>
  <p>Ce contenu est en français.</p>
</div>

<!-- ✅ Good: Using lang attribute on elements -->
<blockquote lang="de">
  "Das Leben ist schön"
</blockquote>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* CSS doesn't affect language markup */
/* Language is marked in HTML using lang attribute */

/* Optional: Style language-specific content */
[lang="fr"] {
  font-style: italic;
}

[lang="ar"] {
  direction: rtl;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* CSS doesn't affect language markup */
/* Language is marked in HTML using lang attribute */

/* Optional: Style language-specific content */
[lang="fr"] {
  font-style: italic;
}

[lang="ar"] {
  direction: rtl;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Language markup in React
function MultilingualContent() {
  return (
    <div>
      <p>
        Welcome to our site.{' '}
        <span lang="fr">Bienvenue sur notre site.</span>
      </p>
      
      <div lang="es">
        <h2>Bienvenido</h2>
        <p>Este contenido está en español.</p>
      </div>
    </div>
  )
}

// ✅ Good: Dynamic language content
function Quote({ text, language }) {
  return (
    <blockquote lang={language}>
      {text}
    </blockquote>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Language markup in React
function MultilingualContent() {
  return (
    <div>
      <p>
        Welcome to our site.{' '}
        <span lang="fr">Bienvenue sur notre site.</span>
      </p>
      
      <div lang="es">
        <h2>Bienvenido</h2>
        <p>Este contenido está en español.</p>
      </div>
    </div>
  )
}

// ✅ Good: Dynamic language content
function Quote({ text, language }) {
  return (
    <blockquote lang={language}>
      {text}
    </blockquote>
  )
}`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Identify all text in languages other than the page default</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that lang attributes are present on foreign text</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test with screen reader to verify correct pronunciation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify proper names and technical terms are handled correctly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that language changes are programmatically determinable</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can detect lang attributes but cannot verify pronunciation accuracy. Manual testing with screen readers is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for lang attributes on elements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Verify language codes are valid</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

