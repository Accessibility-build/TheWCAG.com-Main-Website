"use client"

import { CheckCircle2, XCircle, Copy, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function MeaningfulSequencePage() {
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
        <span className="text-foreground font-medium">1.3.2 Meaningful Sequence</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Adaptable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.3.2 Meaningful Sequence</h1>
        <p className="text-xl text-muted-foreground">
          When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen readers and keyboard navigation follow the DOM (Document Object Model) order, not the visual layout. When content order matters—like instructions, steps in a process, or sequential information—the DOM order must match the logical reading order.
        </p>
        <p className="text-lg leading-relaxed">
          If CSS is used to visually reorder content (like flexbox row-reverse), screen reader users will hear content in the wrong sequence, making it confusing or impossible to understand.
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
              <div className="text-sm font-semibold mb-2">Visual Order (what users see):</div>
              <div className="space-y-2">
                <div className="p-2 bg-background rounded">Step 1: Gather ingredients</div>
                <div className="p-2 bg-background rounded">Step 2: Mix together</div>
                <div className="p-2 bg-background rounded">Step 3: Bake for 30 minutes</div>
              </div>
              <div className="text-sm font-semibold mt-4 mb-2 text-destructive">DOM Order (what screen readers hear):</div>
              <div className="space-y-2">
                <div className="p-2 bg-destructive/10 rounded">Step 3: Bake for 30 minutes</div>
                <div className="p-2 bg-destructive/10 rounded">Step 1: Gather ingredients</div>
                <div className="p-2 bg-destructive/10 rounded">Step 2: Mix together</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> CSS flexbox row-reverse changes visual order but not DOM order
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div style="display: flex; flex-direction: row-reverse;">`}
            </code>
            <p className="text-sm mt-2">Screen reader users hear steps in wrong order: 3, 1, 2</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div className="text-sm font-semibold mb-2">Both Visual and DOM Order:</div>
              <div className="space-y-2">
                <div className="p-2 bg-background rounded">Step 1: Gather ingredients</div>
                <div className="p-2 bg-background rounded">Step 2: Mix together</div>
                <div className="p-2 bg-background rounded">Step 3: Bake for 30 minutes</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> DOM order matches visual order
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<ol>
  <li>Step 1: Gather ingredients</li>
  <li>Step 2: Mix together</li>
  <li>Step 3: Bake for 30 minutes</li>
</ol>`}
            </code>
            <p className="text-sm mt-2">Screen reader users hear steps in correct order: 1, 2, 3</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Instructions or Steps</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Using CSS to reverse order of numbered steps
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Using &lt;ol&gt; with steps in correct DOM order
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Instructions must be read in the correct sequence for users to follow them.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📊 Data Tables</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Using CSS to swap column order visually
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Table structure matches visual presentation
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Table data relationships depend on correct reading order.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Labels</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Label appears after input in DOM but before visually
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Label comes before input in both DOM and visually
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Screen readers announce labels before inputs for context.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Responsive Layouts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Using order property to reorder content for mobile
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Restructure HTML or use CSS Grid with logical flow
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Content should maintain logical order across all screen sizes.
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
                {`<!-- ✅ Good: Logical DOM order -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- ✅ Good: Form with label before input -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email">

<!-- ❌ Bad: Using CSS to reorder -->
<div style="display: flex; flex-direction: row-reverse;">
  <div>Step 3</div>
  <div>Step 1</div>
  <div>Step 2</div>
</div>

<!-- ✅ Good: Table with logical structure -->
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>`}
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
                {`/* ✅ Good: Visual styling without changing order */
.steps {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.step {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 0.5rem;
}

/* ❌ Bad: Reordering with CSS */
.steps {
  display: flex;
  flex-direction: row-reverse; /* Changes visual order */
}

/* ✅ Good: Responsive without reordering */
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

/* ❌ Bad: Using order property */
.item-1 { order: 3; }
.item-2 { order: 1; }
.item-3 { order: 2; }`}
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
                {`// ✅ Good: Logical order in JSX
function Steps() {
  const steps = [
    "First step: Gather ingredients",
    "Second step: Mix together",
    "Third step: Bake for 30 minutes"
  ]

  return (
    <ol>
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  )
}

// ✅ Good: Form with proper label order
function ContactForm() {
  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      
      <button type="submit">Submit</button>
    </form>
  )
}

// ❌ Bad: Reordered array
function Steps() {
  const steps = ["Step 3", "Step 1", "Step 2"]
  return (
    <div>
      {steps.map(step => <div key={step}>{step}</div>)}
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
  <!-- ✅ Good: Logical order -->
  <ol>
    <li v-for="(step, index) in steps" :key="index">
      {{ step }}
    </li>
  </ol>

  <!-- ✅ Good: Form with label before input -->
  <form>
    <label for="email">Email Address</label>
    <input type="email" id="email" v-model="email" />
    
    <label for="message">Message</label>
    <textarea id="message" v-model="message" />
    
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
const steps = [
  "First step: Gather ingredients",
  "Second step: Mix together",
  "Third step: Bake for 30 minutes"
]
</script>`}
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
                  <strong>Tab Navigation:</strong> Use Tab key to navigate through content and verify order makes sense
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to read page and verify sequence is logical
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>CSS Inspection:</strong> Check if CSS transforms or flexbox reordering changes visual vs DOM order
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Instructions:</strong> Verify instructions or sequential content reads in correct order
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
                  <strong>axe DevTools:</strong> Can detect some CSS reordering issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Highlights potential reading order issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Tools can check DOM order but cannot verify if it matches intended meaning
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
            <h3 className="font-semibold mb-2">❌ Using CSS flex-direction: row-reverse or column-reverse</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`.container { display: flex; flex-direction: row-reverse; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              This visually reverses content but doesn't change DOM order, confusing screen reader users.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Using CSS order property to reorder content</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`.item-1 { order: 3; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              The order property changes visual order but not the reading order for assistive technologies.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Placing labels after inputs in DOM</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input type="text" id="name">
<label for="name">Name</label>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Screen readers announce labels before inputs. If label comes after, users miss context.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Ensure DOM order matches visual order for sequential content</li>
          <li>✓ Use semantic HTML elements (ol, ul, table) that maintain order</li>
          <li>✓ Place labels before inputs in the DOM</li>
          <li>✓ Avoid CSS properties that change visual order (row-reverse, order)</li>
          <li>✓ Test with keyboard navigation and screen readers</li>
          <li>✓ For responsive layouts, restructure HTML rather than using CSS reordering</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.1">
            <Button variant="outline">1.3.1 Info and Relationships</Button>
          </Link>
          <Link href="/criteria/2.4.3">
            <Button variant="outline">2.4.3 Focus Order</Button>
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

