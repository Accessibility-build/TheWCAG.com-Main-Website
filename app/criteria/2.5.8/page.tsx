"use client"

import { CheckCircle2, XCircle, Copy, Check, Target, MousePointer } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function TargetSizeMinimumPage() {
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
        <span className="text-foreground font-medium">2.5.8 Target Size (Minimum)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.8 Target Size (Minimum)</h1>
        <p className="text-xl text-muted-foreground">
          The size of the target for pointer inputs is at least 24 by 24 CSS pixels.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Small targets are difficult to tap for users with motor disabilities or on mobile devices. Targets smaller than 24x24 pixels are hard to activate accurately, leading to frustration and errors.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion requires that all interactive elements (buttons, links, form controls) have a minimum target size of 24x24 CSS pixels to ensure they are easily tappable, especially on touch devices.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need larger targets</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MousePointer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Mobile Users</h4>
              <p className="text-sm text-muted-foreground">Touch targets must be adequate</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Older Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from larger targets</p>
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
              <h3 className="font-semibold text-lg">❌ Small Icon Button</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 flex items-center justify-center">
              <button style={{ width: '16px', height: '16px', padding: '0', border: '1px solid #ccc', background: '#fff' }}>
                ×
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Too small to tap accurately (16x16px)
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`width: 16px; height: 16px;`}
            </code>
            <p className="text-sm mt-2">Difficult to tap on touch devices</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Adequate Size Button</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30 flex items-center justify-center">
              <button style={{ minWidth: '24px', minHeight: '24px', padding: '8px', border: '1px solid #ccc', background: '#fff' }}>
                ×
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Meets minimum 24x24px requirement
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`min-width: 24px; min-height: 24px; padding: 8px;`}
            </code>
            <p className="text-sm mt-2">Easily tappable on all devices</p>
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
                  onClick={() => copyCode(`<!-- ❌ Bad: Too small -->
<button style="width: 16px; height: 16px;">×</button>

<!-- ✅ Good: Minimum 24x24 pixels -->
<button style="min-width: 24px; min-height: 24px; padding: 8px;">×</button>

<!-- ✅ Good: Link with adequate padding -->
<a href="#" style="display: inline-block; min-height: 24px; padding: 8px 12px;">
  Link text
</a>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Too small -->
<button style="width: 16px; height: 16px;">×</button>

<!-- ✅ Good: Minimum 24x24 pixels -->
<button style="min-width: 24px; min-height: 24px; padding: 8px;">×</button>

<!-- ✅ Good: Link with adequate padding -->
<a href="#" style="display: inline-block; min-height: 24px; padding: 8px 12px;">
  Link text
</a>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Minimum target size */
.button {
  min-width: 24px;
  min-height: 24px;
  padding: 8px 12px; /* Increases clickable area */
}

.icon-button {
  width: 24px;
  height: 24px;
  padding: 4px; /* Ensures minimum size */
}

/* Use padding to increase target size without visual change */
.link {
  display: inline-block;
  min-height: 24px;
  padding: 4px 0; /* Vertical padding increases target */
}

/* ❌ Bad: Too small */
.small-button {
  width: 16px;
  height: 16px;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Minimum target size */
.button {
  min-width: 24px;
  min-height: 24px;
  padding: 8px 12px; /* Increases clickable area */
}

.icon-button {
  width: 24px;
  height: 24px;
  padding: 4px; /* Ensures minimum size */
}

/* Use padding to increase target size without visual change */
.link {
  display: inline-block;
  min-height: 24px;
  padding: 4px 0; /* Vertical padding increases target */
}

/* ❌ Bad: Too small */
.small-button {
  width: 16px;
  height: 16px;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Adequate target size
function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="min-w-[24px] min-h-[24px] p-2"
    >
      {icon}
    </button>
  )
}

// ✅ Good: Link with padding
function Link({ href, children }) {
  return (
    <a 
      href={href}
      className="inline-block min-h-[24px] py-2 px-3"
    >
      {children}
    </a>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Adequate target size
function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="min-w-[24px] min-h-[24px] p-2"
    >
      {icon}
    </button>
  )
}

// ✅ Good: Link with padding
function Link({ href, children }) {
  return (
    <a 
      href={href}
      className="inline-block min-h-[24px] py-2 px-3"
    >
      {children}
    </a>
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
                <span>Measure all interactive elements (buttons, links, form controls)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify minimum size is 24x24 CSS pixels</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test on touch devices to ensure easy tapping</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that padding increases target size appropriately</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify targets are not too close together (minimum 8px spacing)</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can measure element sizes but may not account for padding. Manual verification is recommended.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Use browser DevTools to measure element dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for minimum size requirements</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

