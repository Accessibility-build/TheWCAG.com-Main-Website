"use client"

import { CheckCircle2, XCircle, Copy, Check, Type, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function OnInputPage() {
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
        <span className="text-foreground font-medium">3.2.2 On Input</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Predictable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.2.2 On Input</h1>
        <p className="text-xl text-muted-foreground">
          Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users should control when context changes occur. Changing a dropdown, checkbox, or radio button should not automatically submit forms, navigate to new pages, or change major page content without user awareness. Users need to be informed about automatic behaviors or have control over when changes happen.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Type className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Form Users</h4>
              <p className="text-sm text-muted-foreground">Unexpected submissions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Unexpected navigation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Type className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Loss of control</p>
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
              <h3 className="font-semibold text-lg">❌ Auto-Submit on Change</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Type className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Select country</p>
                <p className="text-xs text-destructive mt-2">Form submits automatically</p>
                <p className="text-xs text-destructive">No warning</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Changing dropdown submits form without warning
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`select.addEventListener('change', submitForm)`}
            </code>
            <p className="text-sm mt-2">User loses control over form submission</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ User-Controlled Submit</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Type className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Select country</p>
                <p className="text-xs text-green-600 mt-2">No auto-submit</p>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-xs mt-2">
                  Submit
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> User controls when form submits
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`button.addEventListener('click', submitForm)`}
            </code>
            <p className="text-sm mt-2">User has control over submission</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Dropdown Selection</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Changing dropdown submits form automatically
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Dropdown changes value, user clicks submit button
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control when forms submit.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">☑️ Checkbox/Radio</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Checking box navigates to new page
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Checkbox changes state, user clicks button to proceed
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control navigation.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔍 Search Filters</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Changing filter reloads page without warning
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Filter updates results, or user clicks "Apply" button
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be aware of page changes.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">ℹ️ With Warning</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Auto-submit without any indication
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Label says "Form will submit when selection changes"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users must be informed of automatic behavior.
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
                {`<!-- ❌ Bad: Auto-submit on change -->
<select onchange="submitForm()">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

<!-- ✅ Good: User-controlled submit -->
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
<button onclick="submitForm()">Submit</button>

<!-- ✅ Good: With warning if auto-submit needed -->
<label>
  Country (form will submit when changed):
  <select onchange="submitForm()">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
</label>

<!-- ❌ Bad: Checkbox navigates on change -->
<input type="checkbox" onchange="window.location.href='/page'">

<!-- ✅ Good: Checkbox changes state, button navigates -->
<input type="checkbox" id="agree" name="agree">
<label for="agree">I agree</label>
<button onclick="proceed()">Continue</button>`}
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
                {`// ❌ Bad: Auto-submit on change
const select = document.querySelector('select')
select.addEventListener('change', () => {
  document.querySelector('form').submit()
})

// ✅ Good: User-controlled submit
const form = document.querySelector('form')
const submitButton = document.querySelector('button[type="submit"]')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  form.submit()
})

// ✅ Good: Update content without context change
select.addEventListener('change', (e) => {
  updateResults(e.target.value) // Updates content, not context
})

// ✅ Good: With warning if auto-submit needed
const select = document.querySelector('select')
select.addEventListener('change', () => {
  // Label already warns user
  if (confirm('Form will submit. Continue?')) {
    form.submit()
  }
})

// ❌ Bad: Checkbox navigates on change
const checkbox = document.querySelector('input[type="checkbox"]')
checkbox.addEventListener('change', () => {
  window.location.href = '/page'
})

// ✅ Good: Checkbox changes state
checkbox.addEventListener('change', (e) => {
  updateUI(e.target.checked) // Visual change OK
})

// ✅ Good: Radio button with user control
const radios = document.querySelectorAll('input[type="radio"]')
radios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    updateSelection(e.target.value) // Updates selection
    // User clicks button to proceed
  })
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
                {`// ❌ Bad: Auto-submit on change
function CountrySelect() {
  const handleChange = (e) => {
    submitForm() // BAD!
  }

  return (
    <select onChange={handleChange}>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
  )
}

// ✅ Good: User-controlled submit
function CountryForm() {
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(country)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

// ✅ Good: Update content without context change
function FilterSelect() {
  const [filter, setFilter] = useState('')

  return (
    <>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
      </select>
      <Results filter={filter} />
  )
}

// ✅ Good: With warning if auto-submit needed
function AutoSubmitSelect() {
  const handleChange = (e) => {
    if (window.confirm('Form will submit. Continue?')) {
      submitForm()
    }
  }

  return (
    <label>
      Country (form will submit when changed):
      <select onChange={handleChange}>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
      </select>
    </label>
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
  <!-- ❌ Bad: Auto-submit on change -->
  <select @change="submitForm">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>

  <!-- ✅ Good: User-controlled submit -->
  <form @submit.prevent="handleSubmit">
    <select v-model="country">
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
    <button type="submit">Submit</button>
  </form>

  <!-- ✅ Good: Update content without context change -->
  <select v-model="filter">
    <option value="all">All</option>
    <option value="active">Active</option>
  </select>
  <Results :filter="filter" />

  <!-- ✅ Good: With warning if auto-submit needed -->
  <label>
    Country (form will submit when changed):
    <select @change="handleChange">
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const country = ref('')
const filter = ref('all')

const handleSubmit = () => {
  submitForm(country.value)
}

const handleChange = (e) => {
  if (confirm('Form will submit. Continue?')) {
    submitForm()
  }
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
                  <strong>Change Test:</strong> Change dropdowns, checkboxes, radios
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Context Check:</strong> Verify no unexpected navigation or submission
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Warning Check:</strong> If auto-submit, verify user is warned
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Control Test:</strong> Verify user controls when actions happen
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
                  <strong>Note:</strong> Automated testing is limited for this criterion
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Manual Review:</strong> Requires manual testing of input changes
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
            <h3 className="font-semibold mb-2">❌ Auto-submit on dropdown change</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`select.addEventListener('change', submitForm)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Forms should only submit when user clicks submit button.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Navigation on checkbox change</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`checkbox.addEventListener('change', navigate)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Navigation should be user-controlled, not automatic.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Auto-submit without warning</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Form submits on change with no indication
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              If auto-submit is necessary, user must be warned beforehand.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Don't auto-submit forms on input changes</li>
          <li>✓ Don't navigate on checkbox/radio changes</li>
          <li>✓ If auto-behavior is needed, warn user first</li>
          <li>✓ Use buttons for user-initiated actions</li>
          <li>✓ Updating content (not context) is OK</li>
          <li>✓ Test by changing all form inputs</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.2.1">
            <Button variant="outline">3.2.1 On Focus</Button>
          </Link>
          <Link href="/criteria/3.2.5">
            <Button variant="outline">3.2.5 Change on Request</Button>
          </Link>
          <Link href="/criteria/3.3.4">
            <Button variant="outline">3.3.4 Error Prevention</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

