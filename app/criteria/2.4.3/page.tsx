"use client"

import { CheckCircle2, XCircle, Copy, Check, ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function FocusOrderPage() {
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
        <span className="text-foreground font-medium">2.4.3 Focus Order</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.3 Focus Order</h1>
        <p className="text-xl text-muted-foreground">
          If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Keyboard users navigate through focusable elements using the Tab key. If the focus order doesn't match the logical reading order or visual layout, users become confused and may miss important content or functionality. Screen reader users also rely on focus order to understand the page structure.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Tab order must be logical</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowDown className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Focus order affects understanding</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Illogical order causes confusion</p>
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
              <h3 className="font-semibold text-lg">❌ Illogical Focus Order</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center w-full">
                <div className="text-sm font-semibold mb-2">Visual Layout:</div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-background rounded">1. Header</div>
                  <div className="p-2 bg-background rounded">2. Main Content</div>
                  <div className="p-2 bg-background rounded">3. Sidebar</div>
                </div>
                <div className="text-sm font-semibold mt-4 mb-2 text-destructive">Tab Order:</div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-destructive/10 rounded">1. Header</div>
                  <div className="p-2 bg-destructive/10 rounded">3. Sidebar</div>
                  <div className="p-2 bg-destructive/10 rounded">2. Main Content</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Tab order (1, 3, 2) doesn't match visual order (1, 2, 3)
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Using tabindex to change order incorrectly
            </code>
            <p className="text-sm mt-2">Users get confused by jumping focus</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Logical Focus Order</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center w-full">
                <div className="text-sm font-semibold mb-2">Both Visual & Tab Order:</div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-background rounded">1. Header</div>
                  <div className="p-2 bg-background rounded">2. Main Content</div>
                  <div className="p-2 bg-background rounded">3. Sidebar</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Tab order matches visual and reading order
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Natural DOM order matches visual layout
            </code>
            <p className="text-sm mt-2">Users can navigate logically through content</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Forms</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Tab goes: Name → Submit → Email → Message
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Tab goes: Name → Email → Message → Submit
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Form fields should be filled in logical sequence.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 CSS Grid/Flexbox</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Visual order different from DOM order
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  DOM order matches visual order
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Tab order follows DOM, not visual layout.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Modal Dialogs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Focus jumps to background content
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Focus stays within modal, cycles through modal elements
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Focus should be trapped within modal.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📱 Responsive Layouts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Mobile layout changes visual order but not DOM
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  DOM order works logically on all screen sizes
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Tab order should make sense regardless of screen size.
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
                {`<!-- ✅ Good: Logical DOM order matches visual order -->
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
  
  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>
  
  <button type="submit">Submit</button>
</form>

<!-- ❌ Bad: Using tabindex to change order incorrectly -->
<form>
  <input type="text" tabindex="1">
  <button type="submit" tabindex="2">Submit</button>
  <input type="email" tabindex="3">
</form>

<!-- ✅ Good: Only use tabindex for positive values when necessary -->
<div>
  <button tabindex="1">First Action</button>
  <button tabindex="2">Second Action</button>
  <button tabindex="3">Third Action</button>
</div>

<!-- ✅ Good: Use tabindex="-1" to remove from tab order (not change order) -->
<div>
  <button>Visible Button</button>
  <button tabindex="-1">Hidden from tab order</button>
</div>`}
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
                {`/* ✅ Good: Visual styling without changing DOM order */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Visual order matches DOM order */

/* ❌ Bad: Using CSS to visually reorder */
.container {
  display: flex;
  flex-direction: row-reverse; /* Changes visual but not tab order */
}

/* ✅ Good: Responsive without changing order */
.layout {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 2fr 1fr;
  }
}

/* DOM order remains logical on all screen sizes */

/* ✅ Good: Visual positioning without reordering */
.sidebar {
  position: absolute;
  right: 0;
  /* Still in logical DOM position for tab order */
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
                {`// ✅ Good: Logical order in JSX
function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      
      <button type="submit">Submit</button>
    </form>
  )
}

// ✅ Good: Modal with focus trap
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null)
  
  useEffect(() => {
    if (isOpen) {
      // Focus first element in modal
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }
  }, [isOpen])
  
  return (
    <div ref={modalRef} role="dialog">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

// ❌ Bad: Reordered array affects tab order
function FormFields() {
  const fields = ['email', 'name', 'message'] // Wrong order
  return (
    <form>
      {fields.map(field => (
        <input key={field} name={field} />
      ))}
    </form>
  )
}

// ✅ Good: Correct order
function FormFields() {
  const fields = ['name', 'email', 'message'] // Correct order
  return (
    <form>
      {fields.map(field => (
        <input key={field} name={field} />
      ))}
    </form>
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
  <!-- ✅ Good: Logical order in template -->
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="form.name" />
    
    <label for="email">Email</label>
    <input type="email" id="email" v-model="form.email" />
    
    <label for="message">Message</label>
    <textarea id="message" v-model="form.message" />
    
    <button type="submit">Submit</button>
  </form>
  
  <!-- ✅ Good: Modal with proper focus -->
  <div v-if="isOpen" ref="modalRef" role="dialog">
    <slot></slot>
    <button @click="close">Close</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const modalRef = ref(null)
const isOpen = ref(false)

watch(isOpen, (newValue) => {
  if (newValue && modalRef.value) {
    // Focus first element in modal
    const focusableElements = modalRef.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }
})
</script>`}
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
                  <strong>Tab Navigation:</strong> Use Tab key to navigate through page
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Order Check:</strong> Verify focus order matches visual and reading order
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Shift+Tab:</strong> Test reverse navigation works logically
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Forms:</strong> Verify form fields are filled in logical sequence
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Modals:</strong> Check focus stays within modal
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
                  <strong>axe DevTools:</strong> Can detect some focus order issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies potential tab order problems
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
            <h3 className="font-semibold mb-2">❌ Using tabindex to change order incorrectly</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input tabindex="3">
<button tabindex="1">
<input tabindex="2">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Only use positive tabindex values when absolutely necessary. Prefer natural DOM order.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ CSS reordering without updating DOM</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`flex-direction: row-reverse; /* Changes visual but not tab order */`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Tab order follows DOM order, not visual layout. Restructure HTML if needed.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Focus jumps to background content in modals</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Modal opens but Tab moves focus to page behind it
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Implement focus trap so Tab cycles within modal, not to background.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Ensure tab order matches visual and reading order</li>
          <li>✓ Use natural DOM order whenever possible</li>
          <li>✓ Only use positive tabindex when absolutely necessary</li>
          <li>✓ Test with keyboard only (no mouse)</li>
          <li>✓ Implement focus traps for modals</li>
          <li>✓ Verify forms can be filled in logical sequence</li>
          <li>✓ Check focus order on all screen sizes</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.2">
            <Button variant="outline">1.3.2 Meaningful Sequence</Button>
          </Link>
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
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

