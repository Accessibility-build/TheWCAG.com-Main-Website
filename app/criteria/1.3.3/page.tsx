"use client"

import { CheckCircle2, XCircle, Copy, Check, Eye, Ear } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function SensoryCharacteristicsPage() {
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
        <span className="text-foreground font-medium">1.3.3 Sensory Characteristics</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Adaptable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.3.3 Sensory Characteristics</h1>
        <p className="text-xl text-muted-foreground">
          Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, visual location, orientation, or sound.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Instructions that rely on sensory characteristics exclude users who cannot perceive those characteristics. Blind users cannot see shapes, colors, or locations. Deaf users cannot hear sound cues. Users with cognitive disabilities may not understand spatial references.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Blind Users</h4>
              <p className="text-sm text-muted-foreground">Cannot see shapes, colors, or visual locations</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Ear className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Deaf Users</h4>
              <p className="text-sm text-muted-foreground">Cannot hear sound-based instructions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">May struggle with spatial references</p>
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
              <h3 className="font-semibold text-lg">❌ Incorrect</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-3">
              <div className="p-3 bg-background rounded border-2 border-destructive/30">
                <p className="text-sm font-semibold mb-2">Instruction:</p>
                <p className="text-sm">"Click the round button"</p>
              </div>
              <div className="p-3 bg-background rounded">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full">
                  Submit
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Relies on shape (round) which blind users cannot perceive
            </p>
            <p className="text-sm mt-2">Screen reader users cannot identify which button is "round"</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-3">
              <div className="p-3 bg-background rounded border-2 border-green-500/30">
                <p className="text-sm font-semibold mb-2">Instruction:</p>
                <p className="text-sm">"Click the Submit button"</p>
              </div>
              <div className="p-3 bg-background rounded">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full">
                  Submit
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Uses button name/label instead of shape
            </p>
            <p className="text-sm mt-2">All users can identify the button by its accessible name</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Relying on Color</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Click the red button to delete"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Click the Delete button"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Color blind and blind users cannot identify by color alone.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📍 Relying on Location</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Use the button on the right"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Use the Search button"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Screen reader users cannot see visual layout.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔊 Relying on Sound</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "When you hear a beep, press continue"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "When the status indicator shows 'Ready', press Continue"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Deaf users cannot hear audio cues.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📐 Relying on Shape</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Click the square icon"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Click the Settings icon"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Blind users cannot perceive visual shapes.
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
                {`<!-- ❌ Bad: Instruction relies on color -->
<p>Click the red button to delete</p>
<button style="background: red;">Delete</button>

<!-- ✅ Good: Instruction uses button name -->
<p>Click the Delete button</p>
<button style="background: red;">Delete</button>

<!-- ❌ Bad: Instruction relies on location -->
<p>Use the button on the right</p>
<div>
  <button>Cancel</button>
  <button>Submit</button>
</div>

<!-- ✅ Good: Instruction uses button name -->
<p>Use the Submit button</p>
<div>
  <button>Cancel</button>
  <button>Submit</button>
</div>

<!-- ❌ Bad: Instruction relies on shape -->
<p>Click the round button</p>
<button class="round">Submit</button>

<!-- ✅ Good: Instruction uses label -->
<p>Click the Submit button</p>
<button class="round">Submit</button>`}
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
                {`/* Note: CSS cannot fix instruction text issues */
/* The fix must be in the HTML/content */

/* ✅ Good: Visual styling that doesn't affect instructions */
.button-primary {
  background-color: red;
  border-radius: 50%;
  padding: 1rem;
}

/* Ensure instructions reference button names, not styles */
/* Example: "Click the Submit button" not "Click the red round button" */`}
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
                {`// ❌ Bad: Instruction relies on color
function DeleteButton() {
  return (
    <>
      <p>Click the red button to delete</p>
      <button style={{ background: 'red' }}>Delete</button>
  )
}

// ✅ Good: Instruction uses button name
function DeleteButton() {
  return (
    <>
      <p>Click the Delete button</p>
      <button 
        style={{ background: 'red' }}
        aria-label="Delete item"
      >
        Delete
      </button>
  )
}

// ✅ Good: Using accessible names
function FormActions() {
  return (
    <>
      <p>Use the Submit button to save your changes</p>
      <div>
        <button>Cancel</button>
        <button aria-label="Submit form">Submit</button>
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
  <!-- ❌ Bad: Instruction relies on color -->
  <div>
    <p>Click the red button to delete</p>
    <button style="background: red;">Delete</button>
  </div>

  <!-- ✅ Good: Instruction uses button name -->
  <div>
    <p>Click the Delete button</p>
    <button 
      style="background: red;"
      aria-label="Delete item"
    >
      Delete
    </button>
  </div>

  <!-- ✅ Good: Using accessible names -->
  <div>
    <p>Use the Submit button to save</p>
    <div>
      <button>Cancel</button>
      <button aria-label="Submit form">Submit</button>
    </div>
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
                  <strong>Read Instructions:</strong> Review all instructions on the page for sensory references
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Check References:</strong> Look for mentions of shape, color, size, location, or sound
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader Test:</strong> Use NVDA/JAWS to verify instructions make sense without visual context
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Blindfold Test:</strong> Try following instructions without looking at the screen
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
                  <strong>Note:</strong> Cannot be fully automated - requires manual review of instruction text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Text Analysis:</strong> Some tools can flag common patterns like "click the red button"
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Accessibility Linters:</strong> May detect some sensory characteristic references
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
            <h3 className="font-semibold mb-2">❌ "Click the round button"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Instruction relies on shape which blind users cannot perceive
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use: "Click the Submit button" instead
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ "Use the button on the right"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Instruction relies on visual location which screen reader users cannot see
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use: "Use the Search button" instead
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ "When you hear a beep, continue"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Instruction relies on sound which deaf users cannot hear
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use: "When the status shows 'Ready', click Continue" instead
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ "Click the red button"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Instruction relies on color which color blind and blind users cannot identify
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use: "Click the Delete button" instead (color can be used as additional cue)
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use component names, labels, or text instead of sensory characteristics</li>
          <li>✓ Color, shape, and location can be used as additional cues, but not the only cue</li>
          <li>✓ Test instructions with screen readers to ensure they make sense</li>
          <li>✓ Review all instructional text for sensory references</li>
          <li>✓ Use ARIA labels to provide accessible names for components</li>
          <li>✓ When describing components, use their function or label, not appearance</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.4.1">
            <Button variant="outline">1.4.1 Use of Color</Button>
          </Link>
          <Link href="/criteria/2.4.4">
            <Button variant="outline">2.4.4 Link Purpose</Button>
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

