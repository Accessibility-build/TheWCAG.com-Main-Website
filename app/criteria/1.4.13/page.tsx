"use client"

import { CheckCircle2, XCircle, Copy, Check, MousePointer, Focus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ContentOnHoverOrFocusPage() {
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
        <span className="text-foreground font-medium">1.4.13 Content on Hover or Focus</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Distinguishable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.4.13 Content on Hover or Focus</h1>
        <p className="text-xl text-muted-foreground">
          Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: Dismissable, Hoverable, Persistent.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users need to be able to read hover content without it disappearing and dismiss it if it obscures other content. Tooltips and popovers that disappear immediately are inaccessible.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that hover and focus-triggered content (like tooltips, popovers, and dropdowns) can be accessed and controlled by all users, including those using keyboards or assistive technologies.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <MousePointer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need time to read content</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Focus className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Need keyboard access</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MousePointer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Users with Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need dismissible content</p>
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
              <h3 className="font-semibold text-lg">❌ Tooltip That Disappears</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-dashed border-destructive/30 flex items-center justify-center">
              <div className="text-center">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                  Hover me
                </button>
                <p className="text-xs text-destructive mt-2">Disappears immediately</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Content disappears when mouse moves away
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`onmouseenter="show()" onmouseleave="hide()"`}
            </code>
            <p className="text-sm mt-2">Users cannot read the content</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Persistent Tooltip</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[150px] border-2 border-green-500/30 flex items-center justify-center">
              <div className="text-center">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                  Hover me
                </button>
                <div className="mt-2 p-2 bg-popover border rounded">
                  <p className="text-xs">Helpful information</p>
                  <button className="text-xs mt-1">Close</button>
                </div>
                <p className="text-xs text-green-600 mt-2">Stays visible, dismissible</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Persistent, hoverable, and dismissible
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`role="tooltip" with close button`}
            </code>
            <p className="text-sm mt-2">Users can read and dismiss content</p>
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
                  onClick={() => copyCode(`<!-- ❌ Bad: Tooltip that disappears immediately -->
<button onmouseenter="show()" onmouseleave="hide()">
  Hover me
</button>

<!-- ✅ Good: Dismissible tooltip -->
<button aria-describedby="tooltip" id="trigger">
  Hover me
</button>
<div id="tooltip" role="tooltip" aria-hidden="true">
  <p>Helpful information</p>
  <button onclick="dismissTooltip()">Close</button>
</div>

<!-- ✅ Good: Persistent dropdown -->
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true">Menu</button>
  <ul role="menu" aria-hidden="true">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>`, "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ❌ Bad: Tooltip that disappears immediately -->
<button onmouseenter="show()" onmouseleave="hide()">
  Hover me
</button>

<!-- ✅ Good: Dismissible tooltip -->
<button aria-describedby="tooltip" id="trigger">
  Hover me
</button>
<div id="tooltip" role="tooltip" aria-hidden="true">
  <p>Helpful information</p>
  <button onclick="dismissTooltip()">Close</button>
</div>

<!-- ✅ Good: Persistent dropdown -->
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true">Menu</button>
  <ul role="menu" aria-hidden="true">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`/* ✅ Good: Tooltip that can be hovered */
.tooltip {
  position: absolute;
  pointer-events: auto; /* Allows hovering */
  z-index: 1000;
}

.tooltip::after {
  content: '';
  position: absolute;
  /* Creates hoverable area */
}`, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ✅ Good: Tooltip that can be hovered */
.tooltip {
  position: absolute;
  pointer-events: auto; /* Allows hovering */
  z-index: 1000;
}

.tooltip::after {
  content: '';
  position: absolute;
  /* Creates hoverable area */
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(`// ✅ Good: Accessible tooltip component
function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          if (!isHovered) setIsVisible(false)
        }, 100)
      }}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsVisible(false)
          }}
        >
          {content}
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
    </div>
  )
}`, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Accessible tooltip component
function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          if (!isHovered) setIsVisible(false)
        }, 100)
      }}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsVisible(false)
          }}
        >
          {content}
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
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
                <span>Hover over elements that trigger additional content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify content remains visible when moving mouse to it</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that content can be dismissed (close button or Escape key)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Test with keyboard focus to ensure content appears</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Verify content doesn't disappear unexpectedly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span>Check that content doesn't obscure important information</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <p className="text-muted-foreground mb-4">
              Tools can check for ARIA attributes but cannot fully test hover behavior. Manual testing is essential.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Check for role="tooltip" attributes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                <span>Verify aria-describedby relationships</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

