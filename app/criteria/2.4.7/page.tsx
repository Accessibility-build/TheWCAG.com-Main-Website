"use client"

import { CheckCircle2, XCircle, Copy, Check, Focus, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function FocusVisiblePage() {
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
        <span className="text-foreground font-medium">2.4.7 Focus Visible</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.7 Focus Visible</h1>
        <p className="text-xl text-muted-foreground">
          Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Keyboard users need to see which element currently has focus to navigate effectively. Without a visible focus indicator, users don't know where they are on the page and cannot interact with elements. A clear, visible focus indicator is essential for keyboard navigation.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Focus className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Need to see focus position</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Rely on keyboard navigation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Focus className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from clear focus</p>
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
              <h3 className="font-semibold text-lg">❌ No Focus Indicator</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Focus className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <button className="px-4 py-2 bg-background border rounded">
                  Button
                </button>
                <p className="text-xs text-destructive mt-2">No visible focus</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Focus indicator removed or invisible
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`button:focus { outline: none; }`}
            </code>
            <p className="text-sm mt-2">Keyboard users cannot see focus position</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Visible Focus Indicator</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Focus className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <button className="px-4 py-2 bg-background border-2 border-green-600 rounded ring-2 ring-green-600">
                  Button
                </button>
                <p className="text-xs text-green-600 mt-2">Clear focus indicator</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Visible focus indicator (outline, border, or ring)
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`button:focus { outline: 2px solid blue; }`}
            </code>
            <p className="text-sm mt-2">Keyboard users can see focus position</p>
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
                  {`button:focus { outline: none; }`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`button:focus { outline: 2px solid blue; }`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Buttons need visible focus indicators.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`a:focus { outline: none; }`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`a:focus { outline: 2px solid blue; }`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Links need visible focus indicators.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Inputs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`input:focus { outline: none; }`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`input:focus { outline: 2px solid blue; border-color: blue; }`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Form inputs need visible focus indicators.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Custom Focus Styles</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Custom focus style that's too subtle or invisible
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`button:focus { 
  outline: 2px solid blue; 
  box-shadow: 0 0 0 4px rgba(0,0,255,0.3);
}`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Custom styles must be clearly visible.
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
                {`<!-- ✅ Good: Focusable elements with visible focus -->
<button>Click me</button>
<a href="/page">Link</a>
<input type="text" placeholder="Enter text">
<select>
  <option>Option 1</option>
</select>
<textarea></textarea>

<!-- Note: CSS is needed to style focus indicators -->`}
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
                {`/* ❌ Bad: Removing focus indicator */
button:focus {
  outline: none;
}

/* ✅ Good: Visible focus indicator */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* ✅ Good: Custom focus style */
button:focus {
  outline: 2px solid #0066cc;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.3);
  border-color: #0066cc;
}

/* ✅ Good: Focus for links */
a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  text-decoration: underline;
}

/* ✅ Good: Focus for form inputs */
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  border-color: #0066cc;
}

/* ✅ Good: Focus-visible (only show for keyboard) */
button:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

button:focus:not(:focus-visible) {
  outline: none; /* Hide for mouse clicks */
}

/* ✅ Good: High contrast focus */
button:focus {
  outline: 3px solid #000;
  outline-offset: 2px;
  background-color: #ffff00;
}

/* ✅ Good: Focus ring utility class */
.focus-ring:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.focus-ring:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}`}
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
                {`// ✅ Good: Components with focus styles
function Button({ children, ...props }) {
  return (
    <button
      className="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2"
      {...props}
    >
      {children}
    </button>
  )
}

// ✅ Good: Using Tailwind focus utilities
function Link({ href, children }) {
  return (
    <a
      href={href}
      className="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2"
    >
      {children}
    </a>
  )
}

// ✅ Good: Custom focus component
function FocusableInput({ ...props }) {
  return (
    <input
      className="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2 focus:border-blue-600"
      {...props}
    />
  )
}

// ✅ Good: Focus ring component
function FocusRing({ children, className = '' }) {
  return (
    <div className={\`focus-within:ring-2 focus-within:ring-blue-600 \${className}\`}>
      {children}
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
  <!-- ✅ Good: Button with focus styles -->
  <button
    class="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2"
  >
    Click me
  </button>

  <!-- ✅ Good: Link with focus styles -->
  <a
    href="/page"
    class="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2"
  >
    Link
  </a>

  <!-- ✅ Good: Input with focus styles -->
  <input
    type="text"
    class="focus:outline-2 focus:outline-blue-600 focus:outline-offset-2 focus:border-blue-600"
  />

  <!-- ✅ Good: Custom focus component -->
  <button
    :class="{
      'focus:outline-2 focus:outline-blue-600': true,
      'focus:outline-offset-2': true
    }"
  >
    Button
  </button>
</template>

<style scoped>
/* ✅ Good: Focus styles in scoped CSS */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

input:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  border-color: #0066cc;
}
</style>`}
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
                  <strong>Tab Navigation:</strong> Tab through page, verify focus is visible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Visual Check:</strong> Focus indicator should be clearly visible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Contrast Check:</strong> Focus indicator should have sufficient contrast
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>All Elements:</strong> Test buttons, links, inputs, selects
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>No Mouse:</strong> Test with keyboard only (no mouse clicks)
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
                  <strong>axe DevTools:</strong> Can detect missing focus indicators
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies elements without visible focus
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports focus visibility issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual keyboard testing is most reliable
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
            <h3 className="font-semibold mb-2">❌ Removing focus outline</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`button:focus { outline: none; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Never remove focus outline without providing an alternative visible indicator.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Focus indicator too subtle</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`button:focus { outline: 1px solid #ccc; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Focus indicator must be clearly visible with sufficient contrast (at least 3:1).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Only showing focus on hover</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`button:hover { outline: 2px solid blue; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Focus indicator must appear on :focus, not just :hover.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Always provide visible focus indicators</li>
          <li>✓ Use outline, border, or box-shadow for focus</li>
          <li>✓ Ensure focus indicator has sufficient contrast (3:1 minimum)</li>
          <li>✓ Test with keyboard only (Tab key)</li>
          <li>✓ Never use outline: none without alternative</li>
          <li>✓ Consider using focus-visible for better UX</li>
          <li>✓ Make focus indicator at least 2px thick</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/2.4.3">
            <Button variant="outline">2.4.3 Focus Order</Button>
          </Link>
          <Link href="/criteria/1.4.11">
            <Button variant="outline">1.4.11 Non-text Contrast</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

