"use client"

import { CheckCircle2, XCircle, Copy, Check, Link as LinkIcon, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function LinkPurposeInContextPage() {
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
        <Link href="/principles/operable" className="hover:text-foreground transition-colors">
          Operable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">2.4.4 Link Purpose (In Context)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.4 Link Purpose (In Context)</h1>
        <p className="text-xl text-muted-foreground">
          The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen reader users often navigate by jumping from link to link. If link text is vague or generic (like "click here" or "read more"), users don't know where the link goes without reading surrounding context. This makes navigation slow and frustrating.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <LinkIcon className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Navigate by links list</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need clear link purpose</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LinkIcon className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from descriptive links</p>
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
              <h3 className="font-semibold text-lg">❌ Vague Link Text</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <LinkIcon className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground mb-2">Article about accessibility</p>
                <p className="text-sm text-destructive">"Click here" to read more</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Link text "Click here" provides no context
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<a href="/article">Click here</a>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Click here, link" - no purpose</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Descriptive Link Text</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <LinkIcon className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm text-muted-foreground mb-2">Article about accessibility</p>
                <p className="text-sm font-semibold text-green-600">"Read full accessibility article"</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Link text describes destination
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<a href="/article">Read full accessibility article</a>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Read full accessibility article, link" - clear purpose</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📰 "Read More" Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<a href="/article">Read more</a>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<a href="/article">Read more about web accessibility</a>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Include what they're reading more about.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 "Click Here" Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<a href="/download">Click here</a> to download`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<a href="/download">Download the accessibility guide</a>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Describe the action, not the instruction.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📄 Multiple "Learn More" Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Multiple links all saying "Learn more"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Learn more about pricing", "Learn more about features"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Each link should be distinguishable.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 Links with Context</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<a href="/product">View</a>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<a href="/product" aria-label="View wireless headphones product page">View</a>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Use aria-label when link text alone isn't descriptive.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Vague link text -->
<a href="/article">Click here</a>
<a href="/download">Read more</a>
<a href="/product">View</a>

<!-- ✅ Good: Descriptive link text -->
<a href="/article">Read full accessibility article</a>
<a href="/download">Download the accessibility guide (PDF)</a>
<a href="/product">View wireless headphones product page</a>

<!-- ✅ Good: Using aria-label for context -->
<a href="/product" aria-label="View wireless headphones product page">
  View
</a>

<!-- ✅ Good: Link with surrounding context -->
<article>
  <h3>Web Accessibility Guide</h3>
  <p>Learn about WCAG 2.2 guidelines...</p>
  <a href="/guide">Read the complete accessibility guide</a>
</article>

<!-- ✅ Good: Multiple links with unique text -->
<div>
  <a href="/pricing">Learn more about pricing</a>
  <a href="/features">Learn more about features</a>
  <a href="/support">Learn more about support</a>
</div>

<!-- ✅ Good: Icon link with accessible name -->
<a href="/settings" aria-label="Go to settings page">
  <svg aria-hidden="true">...</svg>
  Settings
</a>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* Note: CSS cannot fix link text issues */
/* The fix must be in the HTML/content */

/* ✅ Good: Visual styling that doesn't affect accessibility */
.read-more-link {
  color: #0066cc;
  text-decoration: underline;
  font-weight: 500;
}

.read-more-link:hover {
  color: #0052a3;
  text-decoration: none;
}

/* Ensure link text is descriptive, not just styled */
/* Example: "Read more about accessibility" not "Read more" */`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ❌ Bad: Vague link text
function ArticleCard({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <a href={article.url}>Read more</a>
    </div>
  )
}

// ✅ Good: Descriptive link text
function ArticleCard({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <a href={article.url}>
        Read more about {article.title}
      </a>
    </div>
  )
}

// ✅ Good: Using aria-label
function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <a 
        href={\`/products/\${product.id}\`}
        aria-label={\`View \${product.name} product page\`}
      >
        View
      </a>
    </div>
  )
}

// ✅ Good: Link with context
function ArticlePreview({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <Link href={\`/articles/\${article.slug}\`}>
        Read the complete {article.title} article
      </Link>
    </article>
  )
}

// ✅ Good: Multiple unique links
function FeatureList({ features }) {
  return (
    <div>
      {features.map(feature => (
        <div key={feature.id}>
          <h4>{feature.name}</h4>
          <a href={\`/features/\${feature.id}\`}>
            Learn more about {feature.name}
          </a>
        </div>
      ))}
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="vue" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Vue Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Vue code", "vue")}>
                  {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<template>
  <!-- ❌ Bad: Vague link text -->
  <div>
    <h3>{{ article.title }}</h3>
    <p>{{ article.excerpt }}</p>
    <a :href="article.url">Read more</a>
  </div>

  <!-- ✅ Good: Descriptive link text -->
  <div>
    <h3>{{ article.title }}</h3>
    <p>{{ article.excerpt }}</p>
    <a :href="article.url">
      Read more about {{ article.title }}
    </a>
  </div>

  <!-- ✅ Good: Using aria-label -->
  <div>
    <h3>{{ product.name }}</h3>
    <a 
      :href="\`/products/\${product.id}\`"
      :aria-label="\`View \${product.name} product page\`"
    >
      View
    </a>
  </div>

  <!-- ✅ Good: Link with context -->
  <article>
    <h3>{{ article.title }}</h3>
    <p>{{ article.excerpt }}</p>
    <router-link :to="\`/articles/\${article.slug}\`">
      Read the complete {{ article.title }} article
    </router-link>
  </article>

  <!-- ✅ Good: Multiple unique links -->
  <div v-for="feature in features" :key="feature.id">
    <h4>{{ feature.name }}</h4>
    <a :href="\`/features/\${feature.id}\`">
      Learn more about {{ feature.name }}
    </a>
  </div>
</template>`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Test</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to read links list
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Links List:</strong> Check if link purpose is clear out of context
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Context Check:</strong> Verify link makes sense with surrounding text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Multiple Links:</strong> Check if similar links are distinguishable
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Icon Links:</strong> Verify icon links have accessible names
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Detects vague link text like "click here"
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies links with non-descriptive text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports links with vague text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual review is needed to verify context
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ "Click here" or "Read more"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<a href="/article">Click here</a>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Describe what the link does or where it goes, not the action of clicking.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Multiple links with same text</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Multiple "Learn more" links going to different pages
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Each link should be unique and descriptive of its destination.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Icon-only links without accessible name</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<a href="/settings"><svg>...</svg></a>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add aria-label or text to describe the link purpose.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ URL as link text</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<a href="/article">https://example.com/article</a>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use descriptive text, not the URL, as link text.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Link text should describe destination or action</li>
          <li>✓ Avoid generic text like "click here", "read more", "view"</li>
          <li>✓ Make each link unique and distinguishable</li>
          <li>✓ Use aria-label when link text alone isn't descriptive</li>
          <li>✓ Test with screen reader links list</li>
          <li>✓ Include context in link text when needed</li>
          <li>✓ Don't use URLs as link text</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.4.9">
            <Button variant="outline">2.4.9 Link Purpose (Link Only)</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
          <Link href="/criteria/2.5.3">
            <Button variant="outline">2.5.3 Label in Name</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

