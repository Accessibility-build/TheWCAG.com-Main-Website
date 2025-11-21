"use client"

import { CheckCircle2, XCircle, Copy, Check, Contrast, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function NonTextContrastPage() {
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
        <span className="text-foreground font-medium">1.4.11 Non-text Contrast</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.11 Non-text Contrast</h1>
        <p className="text-xl text-muted-foreground">
          UI components and graphical objects have a contrast ratio of at least 3:1 against adjacent colors.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with low vision need sufficient contrast to identify interactive elements like buttons, form controls, and icons. Without adequate contrast, these elements may be invisible or difficult to distinguish.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion extends contrast requirements to non-text elements, ensuring that all UI components and meaningful graphics are visible and distinguishable from their backgrounds.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need contrast to see elements</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Contrast className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Color Blind Users</h4>
              <p className="text-sm text-muted-foreground">Rely on contrast differences</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Older Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from higher contrast</p>
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
              <h3 className="font-semibold text-lg">❌ Low Contrast Button</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 flex items-center justify-center">
              <button style={{ background: '#e0e0e0', color: '#f5f5f5', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>
                Submit
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Insufficient contrast (1.5:1)
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`background: #e0e0e0; color: #f5f5f5;`}
            </code>
            <p className="text-sm mt-2">Button is barely visible</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ High Contrast Button</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30 flex items-center justify-center">
              <button style={{ background: '#0066cc', color: '#ffffff', padding: '8px 16px', border: '2px solid #004499', borderRadius: '4px' }}>
                Submit
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Meets 3:1 contrast requirement
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`background: #0066cc; color: #ffffff;`}
            </code>
            <p className="text-sm mt-2">Button is clearly visible</p>
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
                  onClick={() => copyCode(`<!-- ❌ Bad: Low contrast button -->
<button style="background: #e0e0e0; color: #f5f5f5;">Submit</button>

<!-- ✅ Good: High contrast button -->
<button style="background: #0066cc; color: #ffffff;">Submit</button>

<!-- ✅ Good: Icon with sufficient contrast -->
<svg fill="#000000" aria-label="Search">
  <path d="..."/>
</svg>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Low contrast button -->
<button style="background: #e0e0e0; color: #f5f5f5;">Submit</button>

<!-- ✅ Good: High contrast button -->
<button style="background: #0066cc; color: #ffffff;">Submit</button>

<!-- ✅ Good: Icon with sufficient contrast -->
<svg fill="#000000" aria-label="Search">
  <path d="..."/>
</svg>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Sufficient contrast for UI components */
.button {
  background-color: #0066cc; /* 4.5:1 contrast with white */
  color: #ffffff;
  border: 2px solid #004499; /* 3:1 contrast for border */
}

.icon {
  color: #333333; /* 12:1 contrast with white */
}

/* ❌ Bad: Insufficient contrast */
.button {
  background-color: #e0e0e0; /* 1.5:1 contrast */
  color: #f5f5f5;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Sufficient contrast for UI components */
.button {
  background-color: #0066cc; /* 4.5:1 contrast with white */
  color: #ffffff;
  border: 2px solid #004499; /* 3:1 contrast for border */
}

.icon {
  color: #333333; /* 12:1 contrast with white */
}

/* ❌ Bad: Insufficient contrast */
.button {
  background-color: #e0e0e0; /* 1.5:1 contrast */
  color: #f5f5f5;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: High contrast button
function Button() {
  return (
    <button 
      className="bg-blue-600 text-white"
      style={{ border: '2px solid #004499' }}
    >
      Submit
    </button>
  )
}

// ❌ Bad: Low contrast button
function Button() {
  return (
    <button 
      className="bg-gray-300 text-gray-200"
    >
      Submit
    </button>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: High contrast button
function Button() {
  return (
    <button 
      className="bg-blue-600 text-white"
      style={{ border: '2px solid #004499' }}
    >
      Submit
    </button>
  )
}

// ❌ Bad: Low contrast button
function Button() {
  return (
    <button 
      className="bg-gray-300 text-gray-200"
    >
      Submit
    </button>
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
                <span>Check all interactive elements (buttons, links, form controls)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify contrast ratio is at least 3:1 against adjacent colors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test icons and graphics for sufficient contrast</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Use a contrast checker tool to measure ratios</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test with different color vision simulations</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools like axe can check contrast ratios for UI components.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Use axe DevTools to check contrast</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for WCAG contrast violations</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

