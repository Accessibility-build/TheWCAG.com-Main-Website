"use client"

import { CheckCircle2, XCircle, Copy, Check, Focus, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function FocusNotObscuredMinimumPage() {
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
        <span className="text-foreground font-medium">2.4.11 Focus Not Obscured (Minimum)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.11 Focus Not Obscured (Minimum)</h1>
        <p className="text-xl text-muted-foreground">
          When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users need to see the element that has keyboard focus to interact with it effectively. If focused elements are completely hidden by sticky headers, footers, or other overlays, keyboard users cannot see where they are on the page.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that when an element receives keyboard focus, it is not completely hidden by other content like sticky headers, fixed footers, or modal overlays.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Focus className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Need to see focus</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Rely on visible focus</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Focus className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need clear focus indication</p>
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
              <h3 className="font-semibold text-lg">❌ Sticky Header Hides Focus</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 relative">
              <div className="bg-primary/20 p-2 text-xs mb-2 sticky top-0 z-10">Sticky Header</div>
              <a href="#" className="block mt-2 p-2 bg-destructive/20 rounded">Link that gets hidden</a>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Header covers focused element
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`position: fixed; top: 0; z-index: 1000;`}
            </code>
            <p className="text-sm mt-2">Focused element is completely hidden</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Scroll Adjustment</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30 relative">
              <div className="bg-primary/20 p-2 text-xs mb-2 sticky top-0 z-10">Sticky Header</div>
              <a href="#" className="block mt-20 p-2 bg-green-500/20 rounded focus:outline-2 focus:outline-green-600">Link stays visible</a>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Scroll margin keeps focus visible
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`:focus { scroll-margin-top: 100px; }`}
            </code>
            <p className="text-sm mt-2">Focused element remains visible</p>
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
                  onClick={() => copyCode(`<!-- ✅ Good: Scroll margin for focus -->
<style>
  :focus {
    scroll-margin-top: 100px; /* Accounts for sticky header */
  }
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link that stays visible when focused</a>

<!-- ❌ Bad: No scroll adjustment -->
<header style="position: fixed; top: 0; z-index: 1000;">Navigation</header>
<a href="#" style="margin-top: 60px;">Link that gets hidden</a>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Scroll margin for focus -->
<style>
  :focus {
    scroll-margin-top: 100px; /* Accounts for sticky header */
  }
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link that stays visible when focused</a>

<!-- ❌ Bad: No scroll adjustment -->
<header style="position: fixed; top: 0; z-index: 1000;">Navigation</header>
<a href="#" style="margin-top: 60px;">Link that gets hidden</a>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Ensure focus visibility */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  scroll-margin-top: 100px; /* For sticky headers */
  scroll-margin-bottom: 50px; /* For sticky footers */
}

/* Ensure sticky elements don't cover focus */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100; /* Lower than focus indicators */
}

/* ❌ Bad: No scroll margin */
:focus {
  outline: 2px solid blue;
  /* No scroll-margin, focus can be hidden */
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Ensure focus visibility */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  scroll-margin-top: 100px; /* For sticky headers */
  scroll-margin-bottom: 50px; /* For sticky footers */
}

/* Ensure sticky elements don't cover focus */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100; /* Lower than focus indicators */
}

/* ❌ Bad: No scroll margin */
:focus {
  outline: 2px solid blue;
  /* No scroll-margin, focus can be hidden */
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Focus management with scroll
function FocusableComponent() {
  const handleFocus = (e) => {
    e.target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest',
      inline: 'nearest'
    })
  }

  return (
    <>
      <header className="sticky top-0">Navigation</header>
      <a 
        href="#" 
        onFocus={handleFocus}
        className="focus:scroll-mt-24"
      >
        Link
      </a>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Focus management with scroll
function FocusableComponent() {
  const handleFocus = (e) => {
    e.target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest',
      inline: 'nearest'
    })
  }

  return (
    <>
      <header className="sticky top-0">Navigation</header>
      <a 
        href="#" 
        onFocus={handleFocus}
        className="focus:scroll-mt-24"
      >
        Link
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
                <span>Tab through all interactive elements on the page</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that focused elements are not completely hidden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify elements near sticky headers/footers remain visible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test with different viewport sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that scroll adjustments work correctly</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check for scroll-margin but cannot fully verify visibility. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for scroll-margin CSS properties</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Verify sticky/fixed positioning doesn't cover focus</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

