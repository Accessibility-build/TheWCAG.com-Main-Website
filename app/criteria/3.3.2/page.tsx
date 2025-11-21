"use client"

import { CheckCircle2, XCircle, Copy, Check, Tag, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function LabelsOrInstructionsPage() {
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
        <span className="text-foreground font-medium">3.3.2 Labels or Instructions</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.2 Labels or Instructions</h1>
        <p className="text-xl text-muted-foreground">
          Labels or instructions are provided when content requires user input.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users need clear labels and instructions to understand what input is required, what format is expected, and how to complete forms correctly. Without labels, users cannot determine what information to enter, leading to errors and frustration.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Need labels to understand fields</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need clear instructions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from clear labels</p>
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
              <h3 className="font-semibold text-lg">❌ No Label</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center w-full">
                <input type="text" className="w-full p-2 border rounded" />
                <p className="text-xs text-destructive mt-2">No label provided</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Input field has no label or instructions
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<input type="text">`}
            </code>
            <p className="text-sm mt-2">User doesn't know what to enter</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Label</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center w-full">
                <label className="block text-sm mb-1">Email Address</label>
                <input type="email" className="w-full p-2 border rounded" />
                <p className="text-xs text-green-600 mt-2">Clear label provided</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Input field has associated label
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<label>Email Address</label>
<input type="email">`}
            </code>
            <p className="text-sm mt-2">User knows what information to enter</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📧 Email Field</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="email">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label for="email">Email Address</label>
<input type="email" id="email">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Label explains what information is needed.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📅 Date Field</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="date">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label for="birthdate">Date of Birth (MM/DD/YYYY)</label>
<input type="date" id="birthdate">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Label and format instruction help users.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔒 Password Field</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="password">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label for="password">Password (min. 8 characters)</label>
<input type="password" id="password">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Instructions explain requirements.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Textarea</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<textarea></textarea>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label for="message">Message (max. 500 characters)</label>
<textarea id="message"></textarea>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Label and instructions guide users.
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
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
            <TabsTrigger value="aria">ARIA</TabsTrigger>
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
                {`<!-- ❌ Bad: No label -->
<input type="text">
<input type="email">
<textarea></textarea>

<!-- ✅ Good: Explicit label -->
<label for="name">Full Name</label>
<input type="text" id="name" name="name">

<!-- ✅ Good: Implicit label -->
<label>
  Email Address
  <input type="email" name="email">
</label>

<!-- ✅ Good: Label with instructions -->
<label for="password">
  Password
  <span class="instruction">(minimum 8 characters, include numbers)</span>
</label>
<input type="password" id="password" name="password">

<!-- ✅ Good: Fieldset and legend -->
<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street Address</label>
  <input type="text" id="street" name="street">
  
  <label for="city">City</label>
  <input type="text" id="city" name="city">
</fieldset>

<!-- ✅ Good: Placeholder as supplement (not replacement) -->
<label for="phone">Phone Number</label>
<input 
  type="tel" 
  id="phone" 
  name="phone"
  placeholder="(555) 123-4567"
  aria-describedby="phone-hint"
>
<span id="phone-hint" class="hint">Include area code</span>`}
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
                {`// ❌ Bad: No label
function Form() {
  return (
    <form>
      <input type="text" />
      <input type="email" />
    </form>
  )
}

// ✅ Good: Explicit label
function Form() {
  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" />
      
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" />
    </form>
  )
}

// ✅ Good: Label with instructions
function PasswordField() {
  return (
    <div>
      <label htmlFor="password">
        Password
        <span className="instruction">
          (minimum 8 characters, include numbers)
        </span>
      </label>
      <input type="password" id="password" name="password" />
    </div>
  )
}

// ✅ Good: Fieldset and legend
function AddressForm() {
  return (
    <fieldset>
      <legend>Shipping Address</legend>
      <label htmlFor="street">Street Address</label>
      <input type="text" id="street" name="street" />
      
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" />
    </fieldset>
  )
}

// ✅ Good: With aria-describedby
function PhoneField() {
  return (
    <div>
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="(555) 123-4567"
        aria-describedby="phone-hint"
      />
      <span id="phone-hint" className="hint">
        Include area code
      </span>
    </div>
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
  <!-- ❌ Bad: No label -->
  <form>
    <input type="text" />
    <input type="email" />
  </form>

  <!-- ✅ Good: Explicit label -->
  <form>
    <label for="name">Full Name</label>
    <input type="text" id="name" v-model="name" />
    
    <label for="email">Email Address</label>
    <input type="email" id="email" v-model="email" />
  </form>

  <!-- ✅ Good: Label with instructions -->
  <div>
    <label for="password">
      Password
      <span class="instruction">
        (minimum 8 characters, include numbers)
      </span>
    </label>
    <input type="password" id="password" v-model="password" />
  </div>

  <!-- ✅ Good: Fieldset and legend -->
  <fieldset>
    <legend>Shipping Address</legend>
    <label for="street">Street Address</label>
    <input type="text" id="street" v-model="street" />
    
    <label for="city">City</label>
    <input type="text" id="city" v-model="city" />
  </fieldset>

  <!-- ✅ Good: With aria-describedby -->
  <div>
    <label for="phone">Phone Number</label>
    <input
      type="tel"
      id="phone"
      v-model="phone"
      placeholder="(555) 123-4567"
      aria-describedby="phone-hint"
    />
    <span id="phone-hint" class="hint">
      Include area code
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const street = ref('')
const city = ref('')
const phone = ref('')
</script>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="aria" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">ARIA Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("ARIA code", "aria")}>
                  {copiedCode === "aria" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: aria-label when label not visible -->
<input 
  type="text" 
  aria-label="Search query"
  placeholder="Search..."
>

<!-- ✅ Good: aria-labelledby -->
<span id="search-label">Search</span>
<input 
  type="text" 
  aria-labelledby="search-label"
>

<!-- ✅ Good: aria-describedby for instructions -->
<label for="password">Password</label>
<input 
  type="password" 
  id="password"
  aria-describedby="password-requirements"
>
<span id="password-requirements">
  Must be at least 8 characters with numbers
</span>

<!-- ✅ Good: aria-required -->
<label for="email">Email Address</label>
<input 
  type="email" 
  id="email"
  aria-required="true"
  required
>

<!-- Note: Prefer visible labels over aria-label when possible -->`}
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
                  <strong>Visual Check:</strong> Verify all inputs have visible labels
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Use NVDA/JAWS to verify labels are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Instructions:</strong> Check if format requirements are explained
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Placeholder:</strong> Verify placeholder is supplement, not replacement
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
                  <strong>axe DevTools:</strong> Detects missing labels
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies unlabeled form controls
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports missing form labels
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
            <h3 className="font-semibold mb-2">❌ No label on input</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input type="text">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Every input must have an associated label (visible or via aria-label).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Placeholder as only label</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input placeholder="Email">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Placeholders disappear when user types. Use labels, placeholders are supplements.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Label not associated with input</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<label>Email</label>
<input type="email">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use for/id attributes or wrap input in label to associate them.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide labels for all form inputs</li>
          <li>✓ Use for/id attributes to associate labels</li>
          <li>✓ Include format instructions when needed</li>
          <li>✓ Use fieldset/legend for related fields</li>
          <li>✓ Placeholders are supplements, not replacements</li>
          <li>✓ Use aria-label only when label can't be visible</li>
          <li>✓ Test with screen readers to verify labels</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.1">
            <Button variant="outline">3.3.1 Error Identification</Button>
          </Link>
          <Link href="/criteria/3.3.3">
            <Button variant="outline">3.3.3 Error Suggestion</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

