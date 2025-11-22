"use client"

import { CheckCircle2, XCircle, Copy, Check, Keyboard, Mouse } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function KeyboardPage() {
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
        <span className="text-foreground font-medium">2.1.1 Keyboard</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Keyboard Accessible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.1.1 Keyboard</h1>
        <p className="text-xl text-muted-foreground">
          All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Many users cannot use a mouse due to motor disabilities, tremors, or blindness. Keyboard navigation is essential for screen reader users, who rely on keyboard commands to interact with content.
        </p>
        <p className="text-lg leading-relaxed">
          Every interactive element must be accessible via keyboard, including buttons, links, form controls, and custom widgets. Users should be able to tab through all interactive elements and activate them using Enter or Space.
        </p>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Not Keyboard Accessible</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div 
                onClick={() => alert('Clicked!')}
                className="cursor-pointer p-3 bg-blue-500 text-white rounded text-center"
                style={{ userSelect: 'none' }}
              >
                Click me (mouse only)
              </div>
              <div className="mt-4">
                <div 
                  onMouseEnter={() => {
                    // Interactive example - no action needed
                  }}
                  className="p-2 border rounded"
                >
                  Hover to see menu (mouse only)
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Uses only mouse events (onClick, onMouseEnter)
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div onClick={handleClick}>Click me</div>`}
            </code>
            <p className="text-sm mt-2">Keyboard users cannot interact with these elements</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Keyboard Accessible</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <button 
                className="w-full p-3 bg-blue-600 text-white rounded text-center font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => alert('Activated!')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    alert('Activated!')
                  }
                }}
              >
                Press me (keyboard accessible)
              </button>
              <div className="mt-4">
                <button 
                  className="w-full p-2 border rounded text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => {
                    // Interactive example - no action needed
                  }}
                >
                  Tab to focus (keyboard accessible)
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Using proper button elements with keyboard support
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<button onClick={handleClick}>Click me</button>`}
            </code>
            <p className="text-sm mt-2">Keyboard users can tab to and activate these elements</p>
          </Card>
        </div>
      </section>

      {/* Keyboard Navigation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Keyboard Navigation Basics</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Keyboard className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Standard Keys</h3>
            </div>
            <ul className="space-y-2">
              <li><strong>Tab:</strong> Move forward through interactive elements</li>
              <li><strong>Shift + Tab:</strong> Move backward through elements</li>
              <li><strong>Enter:</strong> Activate buttons and links</li>
              <li><strong>Space:</strong> Activate buttons, toggle checkboxes</li>
              <li><strong>Arrow Keys:</strong> Navigate within components (menus, lists)</li>
              <li><strong>Escape:</strong> Close modals, cancel actions</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mouse className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">What Must Work</h3>
            </div>
            <ul className="space-y-2">
              <li>✓ All buttons must be focusable and activatable</li>
              <li>✓ All links must be keyboard accessible</li>
              <li>✓ All form controls must be keyboard operable</li>
              <li>✓ Custom widgets need keyboard handlers</li>
              <li>✓ Dropdowns and menus must be keyboard navigable</li>
              <li>✓ Modals must be keyboard accessible</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="custom">Custom Widgets</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Semantic HTML Elements</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Native button element -->
<button type="button" onclick="handleClick()">
  Submit Form
</button>

<!-- ✅ Good: Native link -->
<a href="/page">Go to Page</a>

<!-- ✅ Good: Form controls -->
<input type="text" id="email" />
<label for="email">Email</label>

<select id="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

<!-- ❌ Bad: Div with click handler -->
<div onclick="handleClick()">Click me</div>

<!-- ✅ Good: Convert to button -->
<button type="button" onclick="handleClick()">
  Click me
</button>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Keyboard Support</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`import { useState } from 'react'

// ✅ Good: Button with keyboard support
export function AccessibleButton({ onClick, children }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  )
}

// ✅ Good: Custom component with tabIndex
export function CustomButton({ onClick, children }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className="cursor-pointer focus:outline-none focus:ring-2"
    >
      {children}
    </div>
  )
}

// ❌ Bad: Mouse-only interaction
export function BadButton({ onClick, children }) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Custom Widgets</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Custom code", "custom")}>
                  {copiedCode === "custom" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Dropdown menu with keyboard support
export function DropdownMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        setIsOpen(!isOpen)
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => 
          prev < items.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : items.length - 1
        )
        break
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Menu
      </button>
      {isOpen && (
        <ul role="menu">
          {items.map((item, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  item.onClick()
                  setIsOpen(false)
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}`}
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
                  <strong>Tab Navigation:</strong> Unplug your mouse and try to navigate the entire page using only Tab
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Activation:</strong> Press Enter or Space on all interactive elements
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus Indicators:</strong> Verify visible focus indicators on all elements
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>No Mouse Required:</strong> Complete all tasks without using a mouse
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
                  <strong>axe DevTools:</strong> Detects elements that aren't keyboard accessible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies keyboard accessibility issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Checks keyboard accessibility in audit
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Test with NVDA/JAWS to verify keyboard navigation
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
            <h3 className="font-semibold mb-2">❌ Using divs with onClick instead of buttons</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div onClick={handleClick}>Click me</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Divs are not keyboard focusable. Use &lt;button&gt; elements or add tabIndex and keyboard handlers.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Hover-only interactions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div onMouseEnter={showMenu}>Hover me</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Keyboard users cannot hover. Provide focus handlers or click/tap alternatives.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Removing focus indicators</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`button:focus { outline: none; }`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always provide visible focus indicators. Use outline or custom focus styles.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Custom widgets without keyboard support</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div role="button" onClick={handleClick}>Custom Button</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add tabIndex, keyboard handlers, and proper ARIA attributes for custom widgets.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use native HTML elements (button, a, input) whenever possible</li>
          <li>✓ All interactive elements must be keyboard focusable</li>
          <li>✓ Support Enter and Space keys for activation</li>
          <li>✓ Provide visible focus indicators</li>
          <li>✓ Test by unplugging your mouse and using only keyboard</li>
          <li>✓ Custom widgets need tabIndex, keyboard handlers, and ARIA</li>
          <li>✓ Ensure logical tab order matches visual order</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.2">
            <Button variant="outline">2.1.2 No Keyboard Trap</Button>
          </Link>
          <Link href="/criteria/2.4.3">
            <Button variant="outline">2.4.3 Focus Order</Button>
          </Link>
          <Link href="/criteria/2.4.7">
            <Button variant="outline">2.4.7 Focus Visible</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

