"use client"

import { CheckCircle2, XCircle, Copy, Check, RefreshCw, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function OnFocusPage() {
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
        <Link href="/principles/understandable" className="hover:text-foreground transition-colors">
          Understandable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">3.2.1 On Focus</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Predictable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.2.1 On Focus</h1>
        <p className="text-xl text-muted-foreground">
          When any user interface component receives focus, it does not initiate a change of context.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Keyboard users navigate by moving focus from element to element. If focusing on an element automatically triggers navigation, form submission, or other context changes, users lose control and may become disoriented. Focus should not cause unexpected changes.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Navigate by moving focus</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Unexpected changes cause confusion</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Accidental focus triggers actions</p>
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
              <h3 className="font-semibold text-lg">❌ Auto-Submit on Focus</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <RefreshCw className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Form field</p>
                <p className="text-xs text-destructive mt-2">Submits on focus</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Form submits when field receives focus
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`input.addEventListener('focus', submitForm)`}
            </code>
            <p className="text-sm mt-2">User cannot tab through form without submitting</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ No Change on Focus</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <RefreshCw className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Form field</p>
                <p className="text-xs text-green-600 mt-2">No action on focus</p>
                <p className="text-xs text-green-600">Submit button required</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Focus doesn't trigger actions, user controls submission
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`button.addEventListener('click', submitForm)`}
            </code>
            <p className="text-sm mt-2">User can navigate without triggering actions</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Fields</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Form submits when any field receives focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Form only submits when user clicks submit button
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control when forms submit.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔗 Links</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Page navigates when link receives focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Link only navigates when user activates it (click/Enter)
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control navigation.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Auto-Refresh</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Page refreshes when element receives focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Refresh only happens on user action (button click)
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Focus should not trigger page changes.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📱 Modal Dialogs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Modal opens when button receives focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Modal opens when user clicks/activates button
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Modals should open on user activation, not focus.
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
            <TabsTrigger value="js">JavaScript</TabsTrigger>
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
                {`<!-- ❌ Bad: Form submits on focus -->
<form>
  <input type="text" onfocus="submitForm()">
  <input type="email" onfocus="submitForm()">
</form>

<!-- ✅ Good: Form submits on button click -->
<form onsubmit="handleSubmit(event)">
  <input type="text" name="name">
  <input type="email" name="email">
  <button type="submit">Submit</button>
</form>

<!-- ❌ Bad: Link navigates on focus -->
<a href="/page" onfocus="window.location.href='/page'">Link</a>

<!-- ✅ Good: Link navigates on click -->
<a href="/page">Link</a>

<!-- ❌ Bad: Modal opens on focus -->
<button onfocus="openModal()">Open Modal</button>

<!-- ✅ Good: Modal opens on click -->
<button onclick="openModal()">Open Modal</button>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="js" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">JavaScript Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("JS code", "js")}>
                  {copiedCode === "js" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ❌ Bad: Submit on focus
const input = document.querySelector('input')
input.addEventListener('focus', () => {
  document.querySelector('form').submit()
})

// ✅ Good: Submit on button click
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Handle form submission
})

// Or
const submitButton = document.querySelector('button[type="submit"]')
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  // Handle form submission
})

// ❌ Bad: Navigate on focus
const link = document.querySelector('a')
link.addEventListener('focus', () => {
  window.location.href = link.href
})

// ✅ Good: Navigate on click (default behavior)
// Links naturally navigate on click/Enter, no code needed

// ❌ Bad: Open modal on focus
const button = document.querySelector('button')
button.addEventListener('focus', () => {
  openModal()
})

// ✅ Good: Open modal on click
button.addEventListener('click', () => {
  openModal()
})

// ✅ Good: Focus can change visual state (not context)
input.addEventListener('focus', () => {
  input.classList.add('focused') // Visual change OK
})

input.addEventListener('blur', () => {
  input.classList.remove('focused')
})`}
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
                {`// ❌ Bad: Submit on focus
function Form() {
  const handleFocus = () => {
    // Submit form - BAD!
  }

  return (
    <form>
      <input onFocus={handleFocus} />
    </form>
  )
}

// ✅ Good: Submit on button click
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" />
      <button type="submit">Submit</button>
    </form>
  )
}

// ❌ Bad: Navigate on focus
function Link() {
  const handleFocus = () => {
    window.location.href = '/page'
  }

  return <a onFocus={handleFocus}>Link</a>
}

// ✅ Good: Navigate on click
function Link() {
  return <a href="/page">Link</a>
}

// ❌ Bad: Open modal on focus
function ModalButton() {
  const handleFocus = () => {
    setModalOpen(true)
  }

  return <button onFocus={handleFocus}>Open</button>
}

// ✅ Good: Open modal on click
function ModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
  )
}

// ✅ Good: Visual change on focus (OK)
function Input() {
  const [focused, setFocused] = useState(false)

  return (
    <input
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={focused ? 'focused' : ''}
    />
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
  <!-- ❌ Bad: Submit on focus -->
  <form>
    <input @focus="submitForm" />
  </form>

  <!-- ✅ Good: Submit on button click -->
  <form @submit.prevent="handleSubmit">
    <input v-model="email" />
    <button type="submit">Submit</button>
  </form>

  <!-- ❌ Bad: Navigate on focus -->
  <a @focus="navigate">Link</a>

  <!-- ✅ Good: Navigate on click -->
  <a href="/page">Link</a>

  <!-- ❌ Bad: Open modal on focus -->
  <button @focus="openModal">Open</button>

  <!-- ✅ Good: Open modal on click -->
  <button @click="openModal">Open</button>

  <!-- ✅ Good: Visual change on focus (OK) -->
  <input
    @focus="focused = true"
    @blur="focused = false"
    :class="{ focused }"
  />
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const focused = ref(false)
const isModalOpen = ref(false)

const handleSubmit = () => {
  // Handle form submission
}

const openModal = () => {
  isModalOpen.value = true
}
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
                  <strong>Tab Navigation:</strong> Tab through page, verify no unexpected changes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus Test:</strong> Focus on elements, check for context changes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Form Test:</strong> Tab through form fields, verify form doesn't submit
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Link Test:</strong> Focus on links, verify no navigation
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
                  <strong>axe DevTools:</strong> Can detect some focus-triggered changes
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
            <h3 className="font-semibold mb-2">❌ Form submits on focus</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`input.addEventListener('focus', submitForm)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Forms should only submit when user clicks submit button or presses Enter in submit context.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Navigation on focus</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`link.addEventListener('focus', navigate)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Links should only navigate when user activates them (click or Enter).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Modal opens on focus</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`button.addEventListener('focus', openModal)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Modals should only open when user clicks or activates the button.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Never trigger actions on focus events</li>
          <li>✓ Use click/submit events for user actions</li>
          <li>✓ Visual changes on focus are OK (highlighting, etc.)</li>
          <li>✓ Test by tabbing through page with keyboard</li>
          <li>✓ Ensure forms don't submit when fields receive focus</li>
          <li>✓ Verify links don't navigate on focus</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.2.2">
            <Button variant="outline">3.2.2 On Input</Button>
          </Link>
          <Link href="/criteria/3.2.5">
            <Button variant="outline">3.2.5 Change on Request</Button>
          </Link>
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

