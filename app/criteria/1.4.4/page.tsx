"use client"

import { CheckCircle2, XCircle, Copy, Check, ZoomIn, Type } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ResizeTextPage() {
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
        <span className="text-foreground font-medium">1.4.4 Resize text</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.4 Resize text</h1>
        <p className="text-xl text-muted-foreground">
          Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with low vision need to enlarge text to read it comfortably. If text cannot be zoomed to 200% without breaking the layout or hiding content, these users cannot access the information.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that text-based content remains readable and functional when users use browser zoom controls to enlarge text up to 200%.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <ZoomIn className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need to enlarge text to read</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Type className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Older Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from larger text sizes</p>
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
              <h3 className="font-semibold text-lg">❌ Fixed Width Container</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30">
              <div style={{ width: '300px', overflow: 'hidden' }}>
                <p className="text-sm">This text gets cut off when zoomed to 200% because the container has a fixed width and overflow hidden.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Fixed width prevents text from reflowing
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div style="width: 300px; overflow: hidden;">`}
            </code>
            <p className="text-sm mt-2">Text is cut off when zoomed</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Responsive Container</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30">
              <div style={{ maxWidth: '100%' }}>
                <p className="text-sm">This text reflows properly when zoomed to 200% because the container uses max-width instead of fixed width.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Use responsive units and max-width
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<div style="max-width: 100%;">`}
            </code>
            <p className="text-sm mt-2">Text remains readable at all zoom levels</p>
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
                  onClick={() => copyCode(`<!-- ✅ Good: Responsive text container -->
<div style="max-width: 100%; padding: 1rem;">
  <h1>Heading</h1>
  <p>Text that can be zoomed without breaking layout.</p>
</div>

<!-- ❌ Bad: Fixed width with overflow -->
<div style="width: 300px; overflow: hidden;">
  <p>Text that gets cut off when zoomed.</p>
</div>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Responsive text container -->
<div style="max-width: 100%; padding: 1rem;">
  <h1>Heading</h1>
  <p>Text that can be zoomed without breaking layout.</p>
</div>

<!-- ❌ Bad: Fixed width with overflow -->
<div style="width: 300px; overflow: hidden;">
  <p>Text that gets cut off when zoomed.</p>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Use relative units and max-width */
.container {
  max-width: 100%;
  padding: 1rem;
}

.text {
  font-size: 1rem; /* Can be zoomed by browser */
}

/* ❌ Bad: Fixed sizes prevent zooming */
.container {
  width: 300px;
  overflow: hidden;
}

.text {
  font-size: 12px; /* Too small, hard to zoom */
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Use relative units and max-width */
.container {
  max-width: 100%;
  padding: 1rem;
}

.text {
  font-size: 1rem; /* Can be zoomed by browser */
}

/* ❌ Bad: Fixed sizes prevent zooming */
.container {
  width: 300px;
  overflow: hidden;
}

.text {
  font-size: 12px; /* Too small, hard to zoom */
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Responsive text component
function TextContent() {
  return (
    <div className="max-w-full p-4">
      <h1 className="text-2xl">Heading</h1>
      <p className="text-base">Text that scales properly.</p>
    </div>
  )
}

// ❌ Bad: Fixed width component
function TextContent() {
  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <p>Text that gets cut off.</p>
    </div>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Responsive text component
function TextContent() {
  return (
    <div className="max-w-full p-4">
      <h1 className="text-2xl">Heading</h1>
      <p className="text-base">Text that scales properly.</p>
    </div>
  )
}

// ❌ Bad: Fixed width component
function TextContent() {
  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <p>Text that gets cut off.</p>
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
                <span>Use browser zoom to increase text size to 200%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that all text remains visible and readable</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify that no content is cut off or hidden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test that functionality still works at 200% zoom</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check on different screen sizes</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check for fixed widths but cannot verify zoom behavior. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Use browser DevTools to check for fixed widths</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for overflow: hidden on text containers</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

