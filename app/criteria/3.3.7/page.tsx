"use client"

import { CheckCircle2, XCircle, Copy, Check, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function RedundantEntryPage() {
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
        <span className="text-foreground font-medium">3.3.7 Redundant Entry</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.7 Redundant Entry</h1>
        <p className="text-xl text-muted-foreground">
          Information previously entered by or provided to the user that is required to be entered again in the same process is either: auto-populated, or available for the user to select.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Requiring users to re-enter the same information multiple times increases errors, frustration, and time to complete tasks. Users with motor disabilities, cognitive disabilities, or memory impairments are particularly affected. Auto-populating or allowing selection of previously entered information improves efficiency and reduces errors.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Reduces typing effort</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Reduces memory burden</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Improves efficiency</p>
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
              <h3 className="font-semibold text-lg">❌ Re-enter Information</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Step 1: Enter email</p>
                <p className="text-sm text-muted-foreground">Step 2: Enter email again</p>
                <p className="text-xs text-destructive mt-2">Must type twice</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> User must re-enter same information
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              No auto-population or selection
            </code>
            <p className="text-sm mt-2">Increases errors and frustration</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Auto-Populated</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Step 1: Enter email</p>
                <p className="text-sm font-semibold">Step 2: Email auto-filled</p>
                <p className="text-xs text-green-600 mt-2">Can edit if needed</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Information auto-populated from previous step
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Auto-population or selection available
            </code>
            <p className="text-sm mt-2">Reduces errors and improves efficiency</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📧 Email Confirmation</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  User enters email, then must type it again to confirm
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Email auto-populated in confirmation field, user can edit
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Reduces typing and errors.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Multi-Step Forms</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  User enters name/address in step 1, must re-enter in step 2
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Information from step 1 auto-populated in step 2
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Maintains data across steps.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💳 Payment Forms</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  User enters billing address, must enter shipping address separately
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Same as billing" checkbox auto-fills shipping address
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Allows quick selection when addresses match.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Account Creation</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  User creates account, then must enter same info for profile
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Profile pre-filled from account creation, user can edit
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Reuses information already provided.
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
                {`<!-- ✅ Good: Email confirmation auto-populated -->
<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" onchange="copyToConfirm(this.value)">
  
  <label for="email-confirm">Confirm Email</label>
  <input type="email" id="email-confirm" name="email-confirm">
</form>

<!-- ✅ Good: Multi-step form with data persistence -->
<form id="multi-step">
  <!-- Step 1 -->
  <div class="step" data-step="1">
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name">
  </div>
  
  <!-- Step 2 -->
  <div class="step" data-step="2" style="display: none;">
    <label for="name-review">Full Name</label>
    <input type="text" id="name-review" name="name-review">
  </div>
</form>

<!-- ✅ Good: Billing/Shipping address -->
<form>
  <fieldset>
    <legend>Billing Address</legend>
    <label for="billing-street">Street</label>
    <input type="text" id="billing-street" name="billing-street">
  </fieldset>
  
  <fieldset>
    <legend>Shipping Address</legend>
    <label>
      <input type="checkbox" id="same-as-billing" onchange="copyBillingAddress()">
      Same as billing address
    </label>
    <label for="shipping-street">Street</label>
    <input type="text" id="shipping-street" name="shipping-street">
  </fieldset>
</form>`}
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
                {`// ✅ Good: Auto-populate email confirmation
function copyToConfirm(email) {
  document.getElementById('email-confirm').value = email
}

// ✅ Good: Multi-step form with data persistence
const formData = {}

function saveStepData(step) {
  const inputs = document.querySelectorAll(\`[data-step="\${step}"] input\`)
  inputs.forEach(input => {
    formData[input.name] = input.value
  })
}

function loadStepData(step) {
  const inputs = document.querySelectorAll(\`[data-step="\${step}"] input\`)
  inputs.forEach(input => {
    if (formData[input.name]) {
      input.value = formData[input.name]
    }
  })
}

function nextStep(currentStep, nextStep) {
  saveStepData(currentStep)
  document.querySelector(\`[data-step="\${currentStep}"]\`).style.display = 'none'
  document.querySelector(\`[data-step="\${nextStep}"]\`).style.display = 'block'
  loadStepData(nextStep)
}

// ✅ Good: Copy billing to shipping
function copyBillingAddress() {
  const sameAsBilling = document.getElementById('same-as-billing').checked
  
  if (sameAsBilling) {
    const billingStreet = document.getElementById('billing-street').value
    const billingCity = document.getElementById('billing-city').value
    
    document.getElementById('shipping-street').value = billingStreet
    document.getElementById('shipping-city').value = billingCity
  }
}

// ✅ Good: Store form data in sessionStorage
function saveFormData(formId) {
  const form = document.getElementById(formId)
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  sessionStorage.setItem('formData', JSON.stringify(data))
}

function loadFormData(formId) {
  const saved = sessionStorage.getItem('formData')
  if (saved) {
    const data = JSON.parse(saved)
    const form = document.getElementById(formId)
    Object.keys(data).forEach(key => {
      const input = form.querySelector(\`[name="\${key}"]\`)
      if (input) {
        input.value = data[key]
      }
    })
  }
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
                {`// ✅ Good: Email confirmation auto-populated
function EmailForm() {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    setEmailConfirm(value) // Auto-populate confirmation
  }

  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      
      <label htmlFor="email-confirm">Confirm Email</label>
      <input
        type="email"
        id="email-confirm"
        value={emailConfirm}
        onChange={(e) => setEmailConfirm(e.target.value)}
      />
    </form>
  )
}

// ✅ Good: Multi-step form with state
function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form>
      {step === 1 && (
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <label htmlFor="name-review">Full Name</label>
          <input
            type="text"
            id="name-review"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>
      )}
    </form>
  )
}

// ✅ Good: Billing/Shipping address
function AddressForm() {
  const [sameAsBilling, setSameAsBilling] = useState(false)
  const [billing, setBilling] = useState({ street: '', city: '' })
  const [shipping, setShipping] = useState({ street: '', city: '' })

  const handleSameAsBilling = (e) => {
    const checked = e.target.checked
    setSameAsBilling(checked)
    if (checked) {
      setShipping(billing) // Copy billing to shipping
    }
  }

  return (
    <form>
      <fieldset>
        <legend>Billing Address</legend>
        <input
          type="text"
          value={billing.street}
          onChange={(e) => {
            const newBilling = { ...billing, street: e.target.value }
            setBilling(newBilling)
            if (sameAsBilling) {
              setShipping(newBilling)
            }
          }}
        />
      </fieldset>
      
      <fieldset>
        <legend>Shipping Address</legend>
        <label>
          <input
            type="checkbox"
            checked={sameAsBilling}
            onChange={handleSameAsBilling}
          />
          Same as billing address
        </label>
        <input
          type="text"
          value={shipping.street}
          onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
          disabled={sameAsBilling}
        />
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
  <!-- ✅ Good: Email confirmation auto-populated -->
  <form>
    <label for="email">Email Address</label>
    <input
      type="email"
      id="email"
      v-model="email"
      @input="emailConfirm = email"
    />
    
    <label for="email-confirm">Confirm Email</label>
    <input
      type="email"
      id="email-confirm"
      v-model="emailConfirm"
    />
  </form>

  <!-- ✅ Good: Multi-step form -->
  <form>
    <div v-if="step === 1">
      <label for="name">Full Name</label>
      <input type="text" id="name" v-model="formData.name" />
      <button @click="step = 2">Next</button>
    </div>
    
    <div v-if="step === 2">
      <label for="name-review">Full Name</label>
      <input type="text" id="name-review" v-model="formData.name" />
    </div>
  </form>

  <!-- ✅ Good: Billing/Shipping address -->
  <form>
    <fieldset>
      <legend>Billing Address</legend>
      <input type="text" v-model="billing.street" />
    </fieldset>
    
    <fieldset>
      <legend>Shipping Address</legend>
      <label>
        <input
          type="checkbox"
          v-model="sameAsBilling"
          @change="updateShipping"
        >
        Same as billing address
      </label>
      <input
        type="text"
        v-model="shipping.street"
        :disabled="sameAsBilling"
      />
    </fieldset>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const email = ref('')
const emailConfirm = ref('')

watch(email, (newValue) => {
  emailConfirm.value = newValue
})

const step = ref(1)
const formData = ref({ name: '' })

const sameAsBilling = ref(false)
const billing = ref({ street: '', city: '' })
const shipping = ref({ street: '', city: '' })

const updateShipping = () => {
  if (sameAsBilling.value) {
    shipping.value = { ...billing.value }
  }
}

watch(billing, () => {
  if (sameAsBilling.value) {
    shipping.value = { ...billing.value }
  }
}, { deep: true })
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
                  <strong>Multi-Step:</strong> Enter info in step 1, verify auto-populated in step 2
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Selection:</strong> Check if user can select previously entered info
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Edit Test:</strong> Verify user can edit auto-populated fields
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Checkbox Test:</strong> Test "same as" checkboxes work correctly
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
                  <strong>Manual Review:</strong> Requires manual testing of form flows
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
            <h3 className="font-semibold mb-2">❌ Requiring re-entry of same information</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              User must type email twice, address twice, etc.
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Auto-populate or allow selection of previously entered information.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Not allowing edits to auto-populated fields</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Auto-populated fields are read-only
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Users should be able to edit auto-populated information if needed.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Losing data between steps</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Information entered in step 1 not available in step 2
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Persist form data across steps using state management or storage.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Auto-populate previously entered information</li>
          <li>✓ Allow users to select from previously entered data</li>
          <li>✓ Provide "same as" checkboxes for similar fields</li>
          <li>✓ Allow editing of auto-populated fields</li>
          <li>✓ Persist form data across multi-step processes</li>
          <li>✓ Use sessionStorage or state management for data persistence</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
          <Link href="/criteria/3.3.4">
            <Button variant="outline">3.3.4 Error Prevention</Button>
          </Link>
          <Link href="/criteria/3.3.8">
            <Button variant="outline">3.3.8 Accessible Authentication</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

