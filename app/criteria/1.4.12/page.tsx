"use client"

import { CheckCircle2, XCircle, Copy, Check, Type, Spacing } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function TextSpacingPage() {
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
        <span className="text-foreground font-medium">1.4.12 Text Spacing</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.12 Text Spacing</h1>
        <p className="text-xl text-muted-foreground">
          In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with dyslexia often increase text spacing to improve readability. If content breaks or becomes unusable when spacing is increased, these users cannot access the information.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that content remains functional and readable when users apply increased text spacing, which is a common accommodation for users with reading disabilities.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Type className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Dyslexia</h4>
              <p className="text-sm text-muted-foreground">Benefit from increased spacing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Spacing className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need spacing adjustments</p>
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
              <h3 className="font-semibold text-lg">❌ Fixed Height Container</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30" style={{ height: '200px', overflow: 'hidden' }}>
              <p className="text-sm">Text that gets cut off with increased spacing...</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Fixed height prevents expansion
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div style="height: 200px; overflow: hidden;">`}
            </code>
            <p className="text-sm mt-2">Content is cut off when spacing increases</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Flexible Container</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30" style={{ minHeight: '200px' }}>
              <p className="text-sm">Text that adapts to increased spacing...</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Use min-height instead of fixed height
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<div style="min-height: 200px;">`}
            </code>
            <p className="text-sm mt-2">Content expands to accommodate spacing</p>
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
                  onClick={() => copyCode(`<!-- ✅ Good: Flexible text container -->
<div class="text-content">
  <p>This text will adapt to increased spacing.</p>
</div>

<!-- ❌ Bad: Fixed height container -->
<div style="height: 200px; overflow: hidden;">
  <p>Text that gets cut off.</p>
</div>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Flexible text container -->
<div class="text-content">
  <p>This text will adapt to increased spacing.</p>
</div>

<!-- ❌ Bad: Fixed height container -->
<div style="height: 200px; overflow: hidden;">
  <p>Text that gets cut off.</p>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Allow spacing adjustments */
.text-content {
  min-height: auto; /* Allows expansion */
  padding: 1rem;
}

/* Don't use fixed heights that prevent expansion */
/* ❌ Bad */
.fixed-container {
  height: 200px;
  overflow: hidden;
}

/* ✅ Good: Use min-height instead */
.flexible-container {
  min-height: 200px;
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Allow spacing adjustments */
.text-content {
  min-height: auto; /* Allows expansion */
  padding: 1rem;
}

/* Don't use fixed heights that prevent expansion */
/* ❌ Bad */
.fixed-container {
  height: 200px;
  overflow: hidden;
}

/* ✅ Good: Use min-height instead */
.flexible-container {
  min-height: 200px;
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Flexible text component
function TextContent() {
  return (
    <div className="min-h-auto p-4">
      <p>Text that adapts to spacing changes.</p>
    </div>
  )
}

// ❌ Bad: Fixed height component
function TextContent() {
  return (
    <div style={{ height: '200px', overflow: 'hidden' }}>
      <p>Text that gets cut off.</p>
    </div>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Flexible text component
function TextContent() {
  return (
    <div className="min-h-auto p-4">
      <p>Text that adapts to spacing changes.</p>
    </div>
  )
}

// ❌ Bad: Fixed height component
function TextContent() {
  return (
    <div style={{ height: '200px', overflow: 'hidden' }}>
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
                <span>Apply increased text spacing using browser extensions or user styles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Set line-height to 1.5 times font size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Set paragraph spacing to 2 times font size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Set letter-spacing to 0.12 times font size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Set word-spacing to 0.16 times font size</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify no content is cut off or hidden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that all functionality still works</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check for fixed heights but cannot fully test spacing adaptations. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for fixed height values in CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Look for overflow: hidden on text containers</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

