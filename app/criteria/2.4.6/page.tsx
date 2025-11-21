"use client"

import { CheckCircle2, XCircle, Copy, Check, Tag, Heading } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function HeadingsAndLabelsPage() {
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
        <span className="text-foreground font-medium">2.4.6 Headings and Labels</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Operable → Navigable</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.4.6 Headings and Labels</h1>
        <p className="text-xl text-muted-foreground">
          Headings and labels describe topic or purpose.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Descriptive headings and labels help users understand content structure and form requirements. Screen reader users navigate by headings and rely on labels to understand form fields. Clear, descriptive headings and labels improve usability for all users.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Heading className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Navigate by headings</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Tag className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Form Users</h4>
              <p className="text-sm text-muted-foreground">Need clear labels</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Heading className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from clarity</p>
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
              <h3 className="font-semibold text-lg">❌ Vague Heading</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Heading className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block">
                  {`<h2>Section</h2>`}
                </code>
                <p className="text-xs text-destructive mt-2">Not descriptive</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Heading "Section" doesn't describe content
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<h2>Section</h2>`}
            </code>
            <p className="text-sm mt-2">User doesn't know what section contains</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Descriptive Heading</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Heading className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<h2>Contact Information</h2>`}
                </code>
                <p className="text-xs text-green-600 mt-2">Clear and descriptive</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Heading describes the section content
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<h2>Contact Information</h2>`}
            </code>
            <p className="text-sm mt-2">User knows what the section is about</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Labels</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<label>Field 1</label>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<label>Email Address</label>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Labels should describe what information is needed.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📑 Page Headings</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<h1>Page</h1>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<h1>Product Catalog</h1>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Headings should describe page content.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Section Headings</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<h2>More Info</h2>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<h2>Shipping and Delivery Information</h2>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Section headings should be specific.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🏷️ Button Labels</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<button>Click</button>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<button>Add to Cart</button>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Buttons should describe their action.
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
                {`<!-- ❌ Bad: Vague headings -->
<h1>Page</h1>
<h2>Section</h2>
<h3>Info</h3>

<!-- ✅ Good: Descriptive headings -->
<h1>Product Catalog</h1>
<h2>Electronics</h2>
<h3>Laptops and Computers</h3>

<!-- ❌ Bad: Vague labels -->
<label>Field</label>
<input type="text">
<label>Data</label>
<input type="email">

<!-- ✅ Good: Descriptive labels -->
<label for="name">Full Name</label>
<input type="text" id="name" name="name">
<label for="email">Email Address</label>
<input type="email" id="email" name="email">

<!-- ❌ Bad: Generic button text -->
<button>Submit</button>
<button>Click</button>

<!-- ✅ Good: Descriptive button text -->
<button type="submit">Submit Order</button>
<button>Add to Cart</button>

<!-- ✅ Good: Form with clear labels -->
<form>
  <fieldset>
    <legend>Shipping Address</legend>
    <label for="street">Street Address</label>
    <input type="text" id="street" name="street">
    
    <label for="city">City</label>
    <input type="text" id="city" name="city">
  </fieldset>
</form>`}
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
                {`// ❌ Bad: Vague headings
function Page() {
  return (
    <div>
      <h1>Page</h1>
      <h2>Section</h2>
    </div>
  )
}

// ✅ Good: Descriptive headings
function ProductPage() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <h2>Electronics Category</h2>
      <h3>Laptops and Computers</h3>
    </div>
  )
}

// ❌ Bad: Vague labels
function Form() {
  return (
    <form>
      <label>Field</label>
      <input type="text" />
    </form>
  )
}

// ✅ Good: Descriptive labels
function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" />
      
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" />
      
      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" />
      
      <button type="submit">Send Message</button>
    </form>
  )
}

// ✅ Good: Fieldset with legend
function AddressForm() {
  return (
    <form>
      <fieldset>
        <legend>Shipping Address</legend>
        <label htmlFor="street">Street Address</label>
        <input type="text" id="street" name="street" />
      </fieldset>
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
  <!-- ❌ Bad: Vague headings -->
  <div>
    <h1>Page</h1>
    <h2>Section</h2>
  </div>

  <!-- ✅ Good: Descriptive headings -->
  <div>
    <h1>Product Catalog</h1>
    <h2>Electronics Category</h2>
    <h3>Laptops and Computers</h3>
  </div>

  <!-- ❌ Bad: Vague labels -->
  <form>
    <label>Field</label>
    <input type="text" />
  </form>

  <!-- ✅ Good: Descriptive labels -->
  <form>
    <label for="name">Full Name</label>
    <input type="text" id="name" v-model="name" />
    
    <label for="email">Email Address</label>
    <input type="email" id="email" v-model="email" />
    
    <label for="message">Your Message</label>
    <textarea id="message" v-model="message" />
    
    <button type="submit">Send Message</button>
  </form>

  <!-- ✅ Good: Fieldset with legend -->
  <form>
    <fieldset>
      <legend>Shipping Address</legend>
      <label for="street">Street Address</label>
      <input type="text" id="street" v-model="street" />
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const street = ref('')
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
                {`<!-- ✅ Good: aria-label for headings when needed -->
<div role="region" aria-labelledby="section-heading">
  <h2 id="section-heading">Product Features</h2>
  <!-- Content -->
</div>

<!-- ✅ Good: aria-label for buttons -->
<button aria-label="Add product to shopping cart">
  <span aria-hidden="true">🛒</span>
</button>

<!-- ✅ Good: aria-labelledby for form groups -->
<div role="group" aria-labelledby="address-label">
  <h3 id="address-label">Shipping Address</h3>
  <label for="street">Street</label>
  <input type="text" id="street">
</div>

<!-- ✅ Good: aria-label for icon buttons -->
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

<!-- Note: Prefer visible labels/headings over aria-label when possible -->`}
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
                  <strong>Headings Review:</strong> Check if headings describe content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Labels Review:</strong> Verify labels describe required information
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Navigate by headings, verify they're descriptive
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Button Labels:</strong> Check if buttons describe their action
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
                  <strong>Manual Review:</strong> Requires manual inspection of headings and labels
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
            <h3 className="font-semibold mb-2">❌ Vague headings like "Section" or "Info"</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<h2>Section</h2>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use specific, descriptive headings that explain the content topic.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Generic form labels</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<label>Field 1</label>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Labels should clearly describe what information is required.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Non-descriptive button text</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<button>Click</button>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Button labels should describe the action, not the instruction.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use descriptive headings that explain content</li>
          <li>✓ Write clear labels that describe required information</li>
          <li>✓ Make button text describe the action</li>
          <li>✓ Avoid generic terms like "Section", "Info", "Click"</li>
          <li>✓ Test with screen reader heading navigation</li>
          <li>✓ Ensure labels are associated with form controls</li>
          <li>✓ Use fieldset/legend for related form fields</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.3.1">
            <Button variant="outline">1.3.1 Info and Relationships</Button>
          </Link>
          <Link href="/criteria/2.4.2">
            <Button variant="outline">2.4.2 Page Titled</Button>
          </Link>
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

