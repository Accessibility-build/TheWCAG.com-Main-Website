"use client"

import { CheckCircle2, XCircle, Copy, Check, Code, List } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function InfoAndRelationshipsPage() {
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
        <Link href="/principles/perceivable" className="hover:text-foreground transition-colors">
          Perceivable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">1.3.1 Info and Relationships</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Adaptable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.3.1 Info and Relationships</h1>
        <p className="text-xl text-muted-foreground">
          Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen readers and other assistive technologies rely on semantic HTML to understand the structure and relationships of content. When you use proper HTML elements (headings, lists, tables, form labels), assistive technologies can navigate and present information in meaningful ways.
        </p>
        <p className="text-lg leading-relaxed">
          Without semantic markup, users cannot understand how content is organized, what relationships exist between elements, or how to efficiently navigate the page.
        </p>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Incorrect</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div className="text-2xl font-bold mb-2">About Us</div>
              <div className="text-xl font-bold mb-2">Our Team</div>
              <div className="mb-2">• John Doe - CEO</div>
              <div className="mb-2">• Jane Smith - CTO</div>
              <div className="text-xl font-bold mb-2">Contact</div>
              <div>Email: info@example.com</div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Using divs and styling to look like headings
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div style="font-size: 2xl; font-weight: bold">About Us</div>`}
            </code>
            <p className="text-sm mt-2">Screen reader: No heading structure detected</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h1 className="text-2xl font-bold mb-2">About Us</h1>
              <h2 className="text-xl font-bold mb-2">Our Team</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>John Doe - CEO</li>
                <li>Jane Smith - CTO</li>
              </ul>
              <h2 className="text-xl font-bold mb-2">Contact</h2>
              <p>Email: info@example.com</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Using semantic HTML elements
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<h1>About Us</h1>
<h2>Our Team</h2>
<ul><li>John Doe - CEO</li></ul>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Heading level 1, About Us"</p>
          </Card>
        </div>
      </section>

      {/* Semantic Elements Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Essential Semantic Elements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Headings (h1-h6)
            </h3>
            <p className="mb-4">Use heading elements to create a document outline:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Screen readers can navigate by headings, creating a table of contents
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <List className="w-5 h-5" />
              Lists (ul, ol, dl)
            </h3>
            <p className="mb-4">Use list elements for related items:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Screen readers announce list length and current position
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Form Labels</h3>
            <p className="mb-4">Associate labels with form inputs:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<label htmlFor="email">
  Email Address
</label>
<input 
  type="email" 
  id="email" 
  name="email"
/>`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Screen readers announce the label when the input receives focus
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Tables</h3>
            <p className="mb-4">Use proper table structure:</p>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<table>
  <caption>Sales Data</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$5,000</td>
    </tr>
  </tbody>
</table>`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">
              Screen readers can navigate cells and understand relationships
            </p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Semantic HTML Structure</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Proper heading hierarchy -->
<article>
  <header>
    <h1>Article Title</h1>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
  </header>
  
  <section>
    <h2>Introduction</h2>
    <p>Content here...</p>
  </section>
  
  <section>
    <h2>Main Content</h2>
    <h3>Subsection</h3>
    <p>More content...</p>
  </section>
  
  <footer>
    <p>Author: John Doe</p>
  </footer>
</article>

<!-- ✅ Good: Proper list structure -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React/Next.js Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Semantic React components
export function Article({ title, content }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        {content.map((section, index) => (
          <section key={index}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </main>
    </article>
  )
}

// ✅ Good: Navigation with semantic HTML
export function Navigation({ items }) {
  return (
    <nav aria-label="Main navigation">
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Form Relationships</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Form code", "forms")}>
                  {copiedCode === "forms" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Label associated with input -->
<form>
  <div>
    <label htmlFor="username">
      Username
    </label>
    <input 
      type="text" 
      id="username" 
      name="username"
      required
    />
  </div>
  
  <fieldset>
    <legend>Choose your plan</legend>
    <div>
      <input 
        type="radio" 
        id="plan-basic" 
        name="plan" 
        value="basic"
      />
      <label htmlFor="plan-basic">Basic</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="plan-premium" 
        name="plan" 
        value="premium"
      />
      <label htmlFor="plan-premium">Premium</label>
    </div>
  </fieldset>
</form>`}
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
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Checks for proper semantic HTML usage
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies missing headings, lists, and form labels
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>HTML Validator:</strong> Ensures valid HTML structure
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to navigate by headings and lists
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Keyboard Navigation:</strong> Tab through form fields and verify labels are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Inspect Element:</strong> Check that semantic elements are used, not styled divs
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
            <h3 className="font-semibold mb-2">❌ Using divs styled as headings</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div className="text-2xl font-bold">Heading</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Screen readers cannot identify this as a heading. Use &lt;h1&gt; through &lt;h6&gt; instead.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Using spans for lists</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<span>• Item 1</span><span>• Item 2</span>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use &lt;ul&gt; or &lt;ol&gt; elements so screen readers can navigate the list structure.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Missing form labels</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<input type="text" placeholder="Enter email" />`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Placeholders disappear when typing. Always use &lt;label&gt; elements associated with inputs.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Skipping heading levels</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<h1>Title</h1><h3>Subtitle</h3>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Don't skip from h1 to h3. Use h2 between them to maintain proper hierarchy.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use heading elements (h1-h6) to create document structure</li>
          <li>✓ Use list elements (ul, ol, dl) for related items</li>
          <li>✓ Always associate form labels with inputs using htmlFor/id</li>
          <li>✓ Use semantic HTML5 elements (article, section, nav, header, footer)</li>
          <li>✓ Maintain proper heading hierarchy (don't skip levels)</li>
          <li>✓ Use table elements (table, thead, tbody, th, td) for tabular data</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.2">
            <Button variant="outline">1.3.2 Meaningful Sequence</Button>
          </Link>
          <Link href="/criteria/2.4.6">
            <Button variant="outline">2.4.6 Headings and Labels</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

