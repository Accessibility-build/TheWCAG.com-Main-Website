"use client"

import { CheckCircle2, XCircle, Copy, Check, Code, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function NameRoleValuePage() {
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
        <Link href="/principles/robust" className="hover:text-foreground transition-colors">
          Robust
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">4.1.2 Name, Role, Value</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Robust → Compatible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">4.1.2 Name, Role, Value</h1>
        <p className="text-xl text-muted-foreground">
          For all user interface components, the name and role can be programmatically determined; states, properties, and values can be programmatically set; and notification of changes is available to user agents.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Screen readers and other assistive technologies need to understand what each UI component is (role), what it's called (name), what state it's in, and what value it has. Without this information, users cannot effectively interact with the interface.
        </p>
        <p className="text-lg leading-relaxed">
          This criterion ensures that custom widgets and components built with JavaScript are as accessible as native HTML elements. Use semantic HTML first, and when you need custom components, provide proper ARIA attributes.
        </p>
      </Card>

      {/* The Three Requirements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">The Three Requirements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Name</h3>
            </div>
            <p className="text-sm mb-4">
              The accessible name that screen readers announce
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Button text</li>
              <li>✓ Label text</li>
              <li>✓ aria-label</li>
              <li>✓ aria-labelledby</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Role</h3>
            </div>
            <p className="text-sm mb-4">
              What type of component it is
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Semantic HTML (button, link)</li>
              <li>✓ aria-role</li>
              <li>✓ Implicit from element</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Value & State</h3>
            </div>
            <p className="text-sm mb-4">
              Current value and state information
            </p>
            <ul className="space-y-2 text-sm">
              <li>✓ Checked/unchecked</li>
              <li>✓ Expanded/collapsed</li>
              <li>✓ Selected value</li>
              <li>✓ aria-* attributes</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Missing ARIA</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <div 
                className="p-3 bg-blue-500 text-white rounded cursor-pointer"
                onClick={() => alert('Clicked')}
              >
                Toggle Menu
              </div>
              <div className="mt-2 p-2 border rounded">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>I agree to terms</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Custom components without proper ARIA
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div onClick={toggle}>Toggle</div>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Toggle" (no role, no state)</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Proper ARIA</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <button
                className="p-3 bg-blue-600 text-white rounded font-semibold"
                aria-expanded="false"
                aria-controls="menu"
                onClick={() => {}}
              >
                Toggle Menu
              </button>
              <div className="mt-2 p-2 border rounded">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    aria-checked="false"
                    aria-label="I agree to terms and conditions"
                  />
                  <span>I agree to terms</span>
                </label>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Proper roles, names, and states
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<button aria-expanded="false">Toggle</button>`}
            </code>
            <p className="text-sm mt-2">Screen reader: "Toggle Menu, button, collapsed"</p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="custom">Custom Widgets</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="dynamic">Dynamic Content</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Button Components</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("Button code", "buttons")}
                >
                  {copiedCode === "buttons" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Native button (has name, role, value automatically)
<button onClick={handleClick}>
  Submit Form
</button>
// Screen reader: "Submit Form, button"

// ✅ Good: Icon button with aria-label
<button aria-label="Close dialog" onClick={handleClose}>
  <XIcon />
</button>
// Screen reader: "Close dialog, button"

// ❌ Bad: Div styled as button
<div onClick={handleClick} className="button">
  Submit
</div>
// Screen reader: "Submit" (no role)

// ✅ Good: Custom button with proper ARIA
<div
  role="button"
  tabIndex={0}
  aria-label="Submit form"
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  Submit
</div>
// Screen reader: "Submit form, button"`}
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
                {`// ✅ Good: Accordion with proper ARIA
export function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={onToggle}
      >
        {title}
      </button>
      <div
        id="accordion-content"
        role="region"
        aria-hidden={!isOpen}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}
// Screen reader: "Section Title, button, expanded"

// ✅ Good: Tabs with ARIA
export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div role="tablist">
      {tabs.map((tab, index) => (
        <button
          key={index}
          role="tab"
          aria-selected={index === activeTab}
          aria-controls={\`tabpanel-\${index}\`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={\`tabpanel-\${index}\`}
          aria-labelledby={\`tab-\${index}\`}
          hidden={index !== activeTab}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="forms" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Form Controls</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Form code", "forms")}>
                  {copiedCode === "forms" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Checkbox with label
<label>
  <input type="checkbox" checked={agreed} />
  I agree to terms
</label>
// Screen reader: "I agree to terms, checkbox, checked"

// ✅ Good: Radio group
<fieldset>
  <legend>Choose plan</legend>
  <label>
    <input type="radio" name="plan" value="basic" />
    Basic
  </label>
  <label>
    <input type="radio" name="plan" value="premium" />
    Premium
  </label>
</fieldset>
// Screen reader: "Choose plan, radio group, Basic, radio button, checked"

// ✅ Good: Select with aria-label
<select aria-label="Country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
// Screen reader: "Country, combobox, United States, selected"

// ✅ Good: Custom slider
<div
  role="slider"
  aria-label="Volume"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={volume}
  tabIndex={0}
>
  Volume: {volume}%
</div>
// Screen reader: "Volume, slider, 50"`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="dynamic" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Dynamic Content</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Dynamic code", "dynamic")}>
                  {copiedCode === "dynamic" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Status updates with aria-live
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
// Screen reader announces changes automatically

// ✅ Good: Progress indicator
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Upload progress"
>
  {progress}%
</div>
// Screen reader: "Upload progress, progressbar, 50%"

// ✅ Good: Alert with role
<div role="alert" aria-live="assertive">
  {errorMessage}
</div>
// Screen reader immediately announces error

// ✅ Good: Loading state
<button aria-busy="true" aria-label="Loading...">
  <Spinner />
  Submit
</button>
// Screen reader: "Loading..., button, busy"`}
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
            <h3 className="text-xl font-semibold mb-4">Screen Reader Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>NVDA/JAWS:</strong> Navigate to each component and verify name, role, and value are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>States:</strong> Check that states (checked, expanded, selected) are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Changes:</strong> Verify state changes are announced (e.g., "checked" when toggling)
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Accessibility Tree:</strong> Inspect element in DevTools to see computed name, role, value
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Detects missing or incorrect ARIA attributes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies components with missing roles or names
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
            <h3 className="font-semibold mb-2">❌ Custom widget without role</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div onClick={handleClick}>Custom Button</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add role="button" so screen readers know it's a button
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Icon button without label</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<button onClick={close}><XIcon /></button>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add aria-label="Close" so screen readers know what the button does
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ State not announced</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div className={isOpen ? 'open' : 'closed'}>Content</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use aria-expanded, aria-checked, or aria-selected to communicate state
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use semantic HTML elements first (button, input, select)</li>
          <li>✓ For custom widgets, add appropriate role attribute</li>
          <li>✓ Provide accessible names using labels, aria-label, or aria-labelledby</li>
          <li>✓ Communicate states with aria-expanded, aria-checked, aria-selected</li>
          <li>✓ Update aria-valuenow when values change dynamically</li>
          <li>✓ Use aria-live regions for dynamic content updates</li>
          <li>✓ Test with screen readers to verify name, role, and value are announced</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.1">
            <Button variant="outline">1.3.1 Info and Relationships</Button>
          </Link>
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/4.1.3">
            <Button variant="outline">4.1.3 Status Messages</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

