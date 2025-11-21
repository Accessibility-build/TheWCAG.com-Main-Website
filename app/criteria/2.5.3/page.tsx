"use client"

import { CheckCircle2, XCircle, Copy, Check, Tag, Label } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function LabelInNamePage() {
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
        <span className="text-foreground font-medium">2.5.3 Label in Name</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.3 Label in Name</h1>
        <p className="text-xl text-muted-foreground">
          For user interface components with labels that include text or images of text, the name contains the text that is presented visually.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Speech recognition users activate controls by speaking the visible label text. If the accessible name doesn't match the visible label, users cannot activate the control. The accessible name must contain the visible label text (though it can include additional text for context).
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Speech Recognition</h4>
              <p className="text-sm text-muted-foreground">Users speak visible label text</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Label className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Name should match visible label</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Consistent labeling improves UX</p>
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
              <h3 className="font-semibold text-lg">❌ Mismatched Name</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Label className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Visible: "Submit"</p>
                <p className="text-xs text-destructive mt-2">Accessible name: "Send form"</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Visible label "Submit" doesn't match accessible name "Send form"
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<button aria-label="Send form">Submit</button>`}
            </code>
            <p className="text-sm mt-2">Speech user says "Submit" but control doesn't activate</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Matching Name</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Label className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Visible: "Submit"</p>
                <p className="text-xs text-green-600 mt-2">Accessible name: "Submit"</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Accessible name contains visible label text
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<button>Submit</button>`}
            </code>
            <p className="text-sm mt-2">Speech user says "Submit" and control activates</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔘 Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<button aria-label="Close dialog">X</button>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<button aria-label="Close">Close</button>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Visible text should be in accessible name.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Labels</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<label>Email</label>
<input aria-label="Email address">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label for="email">Email</label>
<input id="email" name="email">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Label text should match accessible name.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<a href="/" aria-label="Go to homepage">Home</a>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<a href="/">Home</a>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Link text "Home" should be in accessible name.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">➕ Additional Context</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<button aria-label="Delete">Remove</button>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<button aria-label="Remove item">Remove</button>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Accessible name can include visible text plus context.
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
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
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
                {`<!-- ❌ Bad: Visible text not in accessible name -->
<button aria-label="Send form">Submit</button>
<button aria-label="Close dialog">X</button>
<a href="/" aria-label="Go to homepage">Home</a>

<!-- ✅ Good: Visible text in accessible name -->
<button>Submit</button>
<button aria-label="Close">Close</button>
<a href="/">Home</a>

<!-- ✅ Good: Accessible name contains visible text -->
<button aria-label="Submit form">Submit</button>
<button aria-label="Close dialog">Close</button>
<a href="/" aria-label="Home page">Home</a>

<!-- ✅ Good: Form labels -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- ✅ Good: Icon buttons with text -->
<button aria-label="Close">
  <span aria-hidden="true">×</span>
  Close
</button>

<!-- ✅ Good: Icon-only button with matching aria-label -->
<button aria-label="Close">
  <span aria-hidden="true">×</span>
</button>`}
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
                {`// ❌ Bad: Visible text not in accessible name
function SubmitButton() {
  return <button aria-label="Send form">Submit</button>
}

// ✅ Good: Visible text in accessible name
function SubmitButton() {
  return <button>Submit</button>
}

// ✅ Good: Accessible name contains visible text
function SubmitButton() {
  return <button aria-label="Submit form">Submit</button>
}

// ✅ Good: Icon button with text
function CloseButton() {
  return (
    <button aria-label="Close">
      <span aria-hidden="true">×</span>
      Close
    </button>
  )
}

// ✅ Good: Icon-only with matching label
function CloseButton() {
  return (
    <button aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  )
}

// ✅ Good: Form with proper labels
function EmailForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <button>Submit</button>
    </form>
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
  <!-- ❌ Bad: Visible text not in accessible name -->
  <button aria-label="Send form">Submit</button>

  <!-- ✅ Good: Visible text in accessible name -->
  <button>Submit</button>

  <!-- ✅ Good: Accessible name contains visible text -->
  <button aria-label="Submit form">Submit</button>

  <!-- ✅ Good: Icon button with text -->
  <button aria-label="Close">
    <span aria-hidden="true">×</span>
    Close
  </button>

  <!-- ✅ Good: Form with proper labels -->
  <form>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" />
    <button>Submit</button>
  </form>
</template>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Testing Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Testing code", "testing")}>
                  {copiedCode === "testing" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Check if accessible name contains visible text
function checkLabelInName(element) {
  const visibleText = element.textContent.trim()
  const accessibleName = element.getAttribute('aria-label') || 
                         element.textContent.trim() ||
                         element.getAttribute('title')
  
  if (accessibleName && !accessibleName.includes(visibleText)) {
    console.warn('Accessible name does not contain visible text')
    return false
  }
  return true
}

// Test with speech recognition
// User says visible label text, control should activate

// Test with screen reader
// Accessible name should include visible text`}
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
                  <strong>Speech Recognition:</strong> Say visible label text, control should activate
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Check if accessible name includes visible text
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Inspect Element:</strong> Compare visible text with aria-label
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Accessibility Tree:</strong> Verify accessible name contains visible text
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
                  <strong>axe DevTools:</strong> Detects label in name violations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies mismatched labels
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports label in name issues
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
            <h3 className="font-semibold mb-2">❌ aria-label doesn't contain visible text</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<button aria-label="Send form">Submit</button>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Accessible name should include the visible label text.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Icon-only buttons without matching label</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<button><span>×</span></button>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Icon-only buttons need aria-label that matches what user sees.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Different text in label vs accessible name</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Visible: "Remove" but aria-label: "Delete"
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Accessible name must contain the visible text, though it can include additional context.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Accessible name must contain visible label text</li>
          <li>✓ Accessible name can include additional context</li>
          <li>✓ Test with speech recognition software</li>
          <li>✓ Use visible text as accessible name when possible</li>
          <li>✓ For icon-only buttons, aria-label should match what user sees</li>
          <li>✓ Avoid aria-label when visible text is sufficient</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.4.4">
            <Button variant="outline">2.4.4 Link Purpose</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

