"use client"

import { CheckCircle2, XCircle, Copy, Check, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ReflowPage() {
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
        <span className="text-foreground font-medium">1.4.10 Reflow</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.10 Reflow</h1>
        <p className="text-xl text-muted-foreground">
          Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with low vision who zoom in need content to reflow so they don't have to scroll horizontally to read. Content that requires horizontal scrolling at 320px width creates barriers for these users.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that content adapts to narrow viewports (320px width) by reflowing vertically, allowing users to read content without constantly scrolling left and right.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need to zoom in to read</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Monitor className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Mobile Users</h4>
              <p className="text-sm text-muted-foreground">View content on narrow screens</p>
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
              <h3 className="font-semibold text-lg">❌ Fixed Width Table</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 overflow-x-auto">
              <div style={{ width: '800px' }}>
                <table className="w-full border">
                  <tr><th className="border p-2">Column 1</th><th className="border p-2">Column 2</th><th className="border p-2">Column 3</th></tr>
                </table>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Requires horizontal scrolling at 320px width
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<table style="width: 800px;">`}
            </code>
            <p className="text-sm mt-2">Content breaks at narrow widths</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Responsive Table</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30">
              <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                <table style={{ minWidth: '100%' }} className="border">
                  <tr><th className="border p-2">Column 1</th><th className="border p-2">Column 2</th><th className="border p-2">Column 3</th></tr>
                </table>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Responsive container with overflow handling
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<div style="overflow-x: auto;"><table style="min-width: 100%;"></table></div>`}
            </code>
            <p className="text-sm mt-2">Content adapts to narrow widths</p>
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
                  onClick={() => copyCode(`<!-- ✅ Good: Responsive container -->
<div style="max-width: 100%; overflow-x: auto;">
  <table>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </table>
</div>

<!-- ❌ Bad: Fixed width -->
<div style="width: 800px;">
  <p>Content that requires horizontal scrolling</p>
</div>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Responsive container -->
<div style="max-width: 100%; overflow-x: auto;">
  <table>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </table>
</div>

<!-- ❌ Bad: Fixed width -->
<div style="width: 800px;">
  <p>Content that requires horizontal scrolling</p>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Responsive design */
.container {
  max-width: 100%;
  padding: 1rem;
}

/* Use CSS Grid or Flexbox for responsive layouts */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* ❌ Bad: Fixed widths */
.container {
  width: 1200px; /* Too wide for 320px viewport */
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Responsive design */
.container {
  max-width: 100%;
  padding: 1rem;
}

/* Use CSS Grid or Flexbox for responsive layouts */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* ❌ Bad: Fixed widths */
.container {
  width: 1200px; /* Too wide for 320px viewport */
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Responsive component
function ResponsiveContent() {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </div>
    </div>
  )
}

// ❌ Bad: Fixed width component
function FixedContent() {
  return (
    <div style={{ width: '1200px' }}>
      <p>Content that breaks at narrow widths</p>
    </div>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Responsive component
function ResponsiveContent() {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </div>
    </div>
  )
}

// ❌ Bad: Fixed width component
function FixedContent() {
  return (
    <div style={{ width: '1200px' }}>
      <p>Content that breaks at narrow widths</p>
    </div>
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
                <span>Resize browser window to 320px width</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that no horizontal scrolling is required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify all content is accessible and functional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test with browser zoom at 200%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that tables and wide content adapt properly</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check viewport width but cannot verify all reflow scenarios. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Use browser DevTools responsive mode</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for fixed widths in CSS</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

