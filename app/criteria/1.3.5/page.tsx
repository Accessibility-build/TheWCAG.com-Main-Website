"use client"

import { CheckCircle2, XCircle, Copy, Check, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function IdentifyInputPurposePage() {
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
        <span className="text-foreground font-medium">1.3.5 Identify Input Purpose</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Adaptable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.3.5 Identify Input Purpose</h1>
        <p className="text-xl text-muted-foreground">
          The purpose of each input field collecting information about the user can be programmatically determined when: the input field serves a purpose identified in the Input Purposes for User Interface Components section; and the content is implemented using technologies with support for identifying the expected meaning for form input data.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          When form inputs are properly identified with autocomplete attributes, browsers and password managers can auto-fill information, reducing errors and saving time. Users with cognitive disabilities, motor disabilities, or memory impairments benefit significantly from auto-fill functionality.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Password Managers</h4>
              <p className="text-sm text-muted-foreground">Can auto-fill forms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Reduce memory burden</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Faster form completion</p>
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
              <h3 className="font-semibold text-lg">❌ No Autocomplete</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Tag className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block">
                  {`<input type="text" name="email">`}
                </code>
                <p className="text-xs text-destructive mt-2">No autocomplete attribute</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Input purpose not identified
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Password manager cannot auto-fill
            </code>
            <p className="text-sm mt-2">Users must type information manually</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Autocomplete</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Tag className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input type="email" autocomplete="email">`}
                </code>
                <p className="text-xs text-green-600 mt-2">Autocomplete identifies purpose</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Autocomplete attribute identifies input purpose
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Password manager can auto-fill
            </code>
            <p className="text-sm mt-2">Users benefit from auto-fill functionality</p>
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
                  {`<input type="text" name="email">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input type="email" autocomplete="email">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Autocomplete enables email auto-fill.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">👤 Name Fields</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="text" name="name">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input type="text" autocomplete="given-name">
<input type="text" autocomplete="family-name">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Specific autocomplete values enable name auto-fill.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🏠 Address Fields</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="text" name="address">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input autocomplete="street-address">
<input autocomplete="address-line2">
<input autocomplete="address-level1">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Address autocomplete enables full address auto-fill.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💳 Payment Fields</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<input type="text" name="card">`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<input autocomplete="cc-number">
<input autocomplete="cc-exp">
<input autocomplete="cc-csc">`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Payment autocomplete enables secure payment auto-fill.
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
            <TabsTrigger value="list">Common Values</TabsTrigger>
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
                {`<!-- ❌ Bad: No autocomplete -->
<input type="text" name="email">
<input type="text" name="name">
<input type="text" name="phone">

<!-- ✅ Good: With autocomplete -->
<input type="email" autocomplete="email" name="email">
<input type="text" autocomplete="name" name="name">
<input type="tel" autocomplete="tel" name="phone">

<!-- ✅ Good: Name fields -->
<input type="text" autocomplete="given-name" name="first-name">
<input type="text" autocomplete="family-name" name="last-name">
<input type="text" autocomplete="name" name="full-name">

<!-- ✅ Good: Address fields -->
<input type="text" autocomplete="street-address" name="address">
<input type="text" autocomplete="address-line2" name="address2">
<input type="text" autocomplete="address-level1" name="state">
<input type="text" autocomplete="postal-code" name="zip">
<input type="text" autocomplete="country" name="country">

<!-- ✅ Good: Contact information -->
<input type="email" autocomplete="email" name="email">
<input type="tel" autocomplete="tel" name="phone">
<input type="url" autocomplete="url" name="website">

<!-- ✅ Good: Account information -->
<input type="text" autocomplete="username" name="username">
<input type="password" autocomplete="current-password" name="password">
<input type="password" autocomplete="new-password" name="new-password">

<!-- ✅ Good: Payment information -->
<input type="text" autocomplete="cc-name" name="card-name">
<input type="text" autocomplete="cc-number" name="card-number">
<input type="text" autocomplete="cc-exp" name="card-exp">
<input type="text" autocomplete="cc-csc" name="card-cvv">`}
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
                {`// ✅ Good: Form with autocomplete
function ContactForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
      />
      
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        autoComplete="tel"
      />
      
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
      />
    </form>
  )
}

// ✅ Good: Name fields
function NameForm() {
  return (
    <form>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        autoComplete="given-name"
      />
      
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        autoComplete="family-name"
      />
    </form>
  )
}

// ✅ Good: Address form
function AddressForm() {
  return (
    <form>
      <label htmlFor="street">Street Address</label>
      <input
        type="text"
        id="street"
        name="street"
        autoComplete="street-address"
      />
      
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        autoComplete="address-level2"
      />
      
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        autoComplete="address-level1"
      />
      
      <label htmlFor="zip">ZIP Code</label>
      <input
        type="text"
        id="zip"
        name="zip"
        autoComplete="postal-code"
      />
    </form>
  )
}

// ✅ Good: Login form
function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        autoComplete="username"
      />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        autoComplete="current-password"
      />
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
  <!-- ✅ Good: Form with autocomplete -->
  <form>
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="email"
      v-model="email"
    />
    
    <label for="phone">Phone</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      autocomplete="tel"
      v-model="phone"
    />
    
    <label for="name">Full Name</label>
    <input
      type="text"
      id="name"
      name="name"
      autocomplete="name"
      v-model="name"
    />
  </form>

  <!-- ✅ Good: Address form -->
  <form>
    <label for="street">Street Address</label>
    <input
      type="text"
      id="street"
      autocomplete="street-address"
      v-model="street"
    />
    
    <label for="city">City</label>
    <input
      type="text"
      id="city"
      autocomplete="address-level2"
      v-model="city"
    />
    
    <label for="state">State</label>
    <input
      type="text"
      id="state"
      autocomplete="address-level1"
      v-model="state"
    />
    
    <label for="zip">ZIP Code</label>
    <input
      type="text"
      id="zip"
      autocomplete="postal-code"
      v-model="zip"
    />
  </form>

  <!-- ✅ Good: Login form -->
  <form>
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      autocomplete="username"
      v-model="username"
    />
    
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      autocomplete="current-password"
      v-model="password"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const phone = ref('')
const name = ref('')
const street = ref('')
const city = ref('')
const state = ref('')
const zip = ref('')
const username = ref('')
const password = ref('')
</script>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Common Autocomplete Values</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("List code", "list")}>
                  {copiedCode === "list" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* Common autocomplete values */

/* Name */
autocomplete="name"              /* Full name */
autocomplete="given-name"        /* First name */
autocomplete="family-name"       /* Last name */
autocomplete="nickname"          /* Nickname */

/* Contact */
autocomplete="email"             /* Email address */
autocomplete="tel"               /* Phone number */
autocomplete="url"               /* Website URL */

/* Address */
autocomplete="street-address"    /* Street address */
autocomplete="address-line1"     /* Address line 1 */
autocomplete="address-line2"     /* Address line 2 */
autocomplete="address-level1"    /* State/Province */
autocomplete="address-level2"    /* City */
autocomplete="postal-code"       /* ZIP/Postal code */
autocomplete="country"           /* Country */

/* Account */
autocomplete="username"          /* Username */
autocomplete="current-password"  /* Current password */
autocomplete="new-password"      /* New password */

/* Payment */
autocomplete="cc-name"           /* Cardholder name */
autocomplete="cc-number"         /* Card number */
autocomplete="cc-exp"            /* Expiration date */
autocomplete="cc-csc"            /* Security code */
autocomplete="cc-type"           /* Card type */

/* Organization */
autocomplete="organization"      /* Company name */
autocomplete="organization-title" /* Job title */`}
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
                  <strong>Password Manager:</strong> Test if password manager auto-fills forms
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Browser Autofill:</strong> Check if browser suggests values
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Attribute Check:</strong> Verify autocomplete attributes are present
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Value Check:</strong> Ensure autocomplete values are correct
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
                  <strong>axe DevTools:</strong> Can detect missing autocomplete attributes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies inputs without autocomplete
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Lighthouse:</strong> Reports missing autocomplete attributes
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
            <h3 className="font-semibold mb-2">❌ Missing autocomplete attribute</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input type="email" name="email">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add autocomplete attribute to identify input purpose.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Incorrect autocomplete value</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input autocomplete="email-address">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use correct autocomplete values from HTML spec (e.g., "email" not "email-address").
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ autocomplete="off" on user data fields</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<input type="email" autocomplete="off">`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Don't disable autocomplete on fields collecting user information.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Add autocomplete attribute to all user data inputs</li>
          <li>✓ Use correct autocomplete values from HTML spec</li>
          <li>✓ Don't use autocomplete="off" for user data</li>
          <li>✓ Test with password managers and browser autofill</li>
          <li>✓ Use specific values (given-name, family-name) when possible</li>
          <li>✓ Combine with proper input types (email, tel, etc.)</li>
          <li>✓ Verify autocomplete works in different browsers</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
          <Link href="/criteria/3.3.7">
            <Button variant="outline">3.3.7 Redundant Entry</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

