"use client"

import { CheckCircle2, XCircle, Copy, Check, Code, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ParsingPage() {
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
        <Link href="/principles/robust" className="hover:text-foreground transition-colors">
          Robust
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">4.1.1 Parsing</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Robust → Compatible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">4.1.1 Parsing</h1>
        <p className="text-xl text-muted-foreground">
          In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Valid HTML is essential for assistive technologies to correctly parse and interpret content. Invalid markup can cause screen readers to skip content, misread structure, or fail entirely. Browsers may render invalid HTML inconsistently, breaking functionality for users.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Code className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Assistive Technologies</h4>
              <p className="text-sm text-muted-foreground">Need valid markup to parse content</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Readers</h4>
              <p className="text-sm text-muted-foreground">May skip or misread invalid HTML</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Code className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Browsers</h4>
              <p className="text-sm text-muted-foreground">Render invalid HTML inconsistently</p>
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
              <h3 className="font-semibold text-lg">❌ Invalid HTML</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Code className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block">
                  {`<div><p>Text</div>`}
                </code>
                <p className="text-xs text-destructive mt-2">Missing closing tag</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Missing closing tag, invalid nesting
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div><p>Text</div>`}
            </code>
            <p className="text-sm mt-2">Assistive technologies may fail to parse</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Valid HTML</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Code className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div><p>Text</p></div>`}
                </code>
                <p className="text-xs text-green-600 mt-2">Properly nested and closed</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> All tags properly closed and nested
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<div><p>Text</p></div>`}
            </code>
            <p className="text-sm mt-2">Assistive technologies can parse correctly</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🏷️ Missing Closing Tags</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div><p>Text</div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div><p>Text</p></div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> All tags must be properly closed.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Invalid Nesting</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<p><div>Text</div></p>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div><p>Text</p></div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Elements must nest according to HTML spec.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🆔 Duplicate IDs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div id="header"></div>
<div id="header"></div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div id="header"></div>
<div id="footer"></div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> IDs must be unique on the page.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Duplicate Attributes</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="text" class="input" class="form-input">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input type="text" class="input form-input">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Attributes must not be duplicated.
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
            <TabsTrigger value="validation">Validation</TabsTrigger>
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
                {`<!-- ❌ Bad: Missing closing tag -->
<div>
  <p>Text
</div>

<!-- ✅ Good: Properly closed -->
<div>
  <p>Text</p>
</div>

<!-- ❌ Bad: Invalid nesting -->
<p>
  <div>Text</div>
</p>

<!-- ✅ Good: Valid nesting -->
<div>
  <p>Text</p>
</div>

<!-- ❌ Bad: Duplicate ID -->
<div id="header">Header</div>
<div id="header">Another Header</div>

<!-- ✅ Good: Unique IDs -->
<div id="header">Header</div>
<div id="footer">Footer</div>

<!-- ❌ Bad: Duplicate attributes -->
<input type="text" class="input" class="form-input">

<!-- ✅ Good: Single attribute with multiple values -->
<input type="text" class="input form-input">

<!-- ❌ Bad: Unclosed self-closing tag (old HTML) -->
<img src="image.jpg">

<!-- ✅ Good: Properly closed (HTML5 allows both) -->
<img src="image.jpg" alt="Description">
<!-- Or in XHTML: <img src="image.jpg" alt="Description" /> -->`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="validation" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Validation Tools</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Validation code", "validation")}>
                  {copiedCode === "validation" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Use HTML validator
// Online: https://validator.w3.org/
// Or use command line tools

// ✅ Good: Check for duplicate IDs
function checkDuplicateIds() {
  const ids = document.querySelectorAll('[id]')
  const idMap = {}
  ids.forEach(el => {
    const id = el.id
    if (idMap[id]) {
      console.error(\`Duplicate ID: \${id}\`)
    }
    idMap[id] = true
  })
}

// ✅ Good: Validate HTML structure
function validateHTML() {
  // Check for unclosed tags
  const html = document.documentElement.outerHTML
  const openTags = html.match(/<[^/][^>]*>/g) || []
  const closeTags = html.match(/<\/[^>]+>/g) || []
  
  // Basic validation (simplified)
  if (openTags.length !== closeTags.length) {
    console.warn('Mismatched tags detected')
  }
}

// ✅ Good: Use linters
// ESLint with html plugin
// HTMLHint
// W3C Validator API`}
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
                {`// ✅ Good: React ensures valid JSX
function Component() {
  return (
    <div>
      <p>Text</p>
    </div>
  )
}

// ✅ Good: Proper nesting
function Component() {
  return (
    <div>
      <p>Text</p>
    </div>
  )
}

// ✅ Good: Unique keys (not IDs, but similar concept)
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

// ❌ Bad: Duplicate keys
function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li> // May cause issues
      ))}
    </ul>
  )
}

// ✅ Good: Use ESLint to catch issues
// eslint-plugin-react
// eslint-plugin-jsx-a11y`}
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
  <!-- ✅ Good: Vue ensures valid template -->
  <div>
    <p>Text</p>
  </div>

  <!-- ✅ Good: Proper nesting -->
  <div>
    <p>Text</p>
  </div>

  <!-- ✅ Good: Unique keys -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>

  <!-- ❌ Bad: Duplicate IDs (if using IDs) -->
  <div id="header">Header</div>
  <div id="header">Another</div>

  <!-- ✅ Good: Unique IDs -->
  <div id="header">Header</div>
  <div id="footer">Footer</div>
</template>

<!-- ✅ Good: Use linters -->
<!-- ESLint with vue plugin -->
<!-- Vetur or Volar for VS Code -->`}
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
                  <strong>HTML Validator:</strong> Use W3C HTML Validator
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Browser DevTools:</strong> Check for parsing errors in console
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Test with NVDA/JAWS for parsing issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>ID Check:</strong> Verify no duplicate IDs on page
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
                  <strong>W3C Validator:</strong> Online or API validation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>HTMLHint:</strong> Linter for HTML validation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Can detect some parsing issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports HTML validation errors
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
            <h3 className="font-semibold mb-2">❌ Missing closing tags</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<div><p>Text</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              All opening tags must have corresponding closing tags (or be self-closing).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Invalid nesting</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<p><div>Text</div></p>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Elements must nest according to HTML specifications (block elements can't be inside inline elements like p).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Duplicate IDs</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Multiple elements with same ID
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              IDs must be unique on the page. Use classes for reusable styles.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Duplicate attributes</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input class="input" class="form-input">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Combine multiple values in a single attribute: class="input form-input".
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Always close all HTML tags properly</li>
          <li>✓ Follow HTML nesting rules (block elements can't be in inline elements)</li>
          <li>✓ Ensure all IDs are unique on the page</li>
          <li>✓ Don't duplicate attributes on same element</li>
          <li>✓ Use HTML validator to check markup</li>
          <li>✓ Test with screen readers to verify parsing</li>
          <li>✓ Use linters in development workflow</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
          <Link href="/criteria/4.1.3">
            <Button variant="outline">4.1.3 Status Messages</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

