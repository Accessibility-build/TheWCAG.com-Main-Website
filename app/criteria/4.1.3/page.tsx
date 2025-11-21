"use client"

import { CheckCircle2, XCircle, Copy, Check, MessageSquare, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function StatusMessagesPage() {
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
        <span className="text-foreground font-medium">4.1.3 Status Messages</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Robust → Compatible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">4.1.3 Status Messages</h1>
        <p className="text-xl text-muted-foreground">
          In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Status messages like success notifications, error alerts, or loading indicators need to be announced to screen reader users without moving focus. If status messages aren't properly marked up, screen reader users miss important feedback about their actions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Need status announcements</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from clear feedback</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Form Users</h4>
              <p className="text-sm text-muted-foreground">Need validation feedback</p>
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
              <h3 className="font-semibold text-lg">❌ Status Not Announced</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Form submitted</p>
                <p className="text-xs text-destructive mt-2">No role="alert"</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Status message not announced to screen readers
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`<div>Form submitted successfully</div>`}
            </code>
            <p className="text-sm mt-2">Screen reader doesn't announce the message</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Status Announced</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Form submitted</p>
                <p className="text-xs text-green-600 mt-2">role="alert"</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Status message uses role="alert" or aria-live
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`<div role="alert">Form submitted successfully</div>`}
            </code>
            <p className="text-sm mt-2">Screen reader announces the message</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">✅ Success Messages</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div>Form submitted successfully</div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div role="alert">Form submitted successfully</div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Success messages should be announced.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">❌ Error Messages</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div>Invalid email address</div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div role="alert" aria-live="assertive">Invalid email address</div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Errors should be immediately announced.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⏳ Loading Indicators</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div>Loading...</div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div role="status" aria-live="polite">Loading...</div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Loading status should be announced.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Progress Updates</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  {`<div>3 of 10 items processed</div>`}
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  {`<div role="status" aria-live="polite">3 of 10 items processed</div>`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Progress updates should be announced.
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
                {`<!-- ❌ Bad: Status not announced -->
<div>Form submitted successfully</div>
<div>Error: Invalid email</div>
<div>Loading...</div>

<!-- ✅ Good: Success message with role="alert" -->
<div role="alert" aria-live="polite">
  Form submitted successfully
</div>

<!-- ✅ Good: Error message with role="alert" -->
<div role="alert" aria-live="assertive">
  Error: Invalid email address
</div>

<!-- ✅ Good: Loading status -->
<div role="status" aria-live="polite">
  Loading...
</div>

<!-- ✅ Good: Progress update -->
<div role="status" aria-live="polite" aria-atomic="true">
  3 of 10 items processed
</div>

<!-- ✅ Good: Form validation error -->
<label for="email">Email</label>
<input type="email" id="email" aria-invalid="true" aria-describedby="email-error">
<span id="email-error" role="alert" aria-live="assertive">
  Invalid email format
</span>

<!-- ✅ Good: Success notification -->
<div role="alert" aria-live="polite" aria-atomic="true">
  <h2>Success</h2>
  <p>Your changes have been saved.</p>
</div>`}
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
                {`// ✅ Good: Show success message
function showSuccessMessage(message) {
  const alert = document.createElement('div')
  alert.setAttribute('role', 'alert')
  alert.setAttribute('aria-live', 'polite')
  alert.setAttribute('aria-atomic', 'true')
  alert.textContent = message
  document.body.appendChild(alert)
  
  // Remove after 5 seconds
  setTimeout(() => {
    alert.remove()
  }, 5000)
}

// ✅ Good: Show error message
function showErrorMessage(message) {
  const errorDiv = document.getElementById('error-message')
  errorDiv.setAttribute('role', 'alert')
  errorDiv.setAttribute('aria-live', 'assertive')
  errorDiv.setAttribute('aria-atomic', 'true')
  errorDiv.textContent = message
  errorDiv.style.display = 'block'
}

// ✅ Good: Update loading status
function updateLoadingStatus(message) {
  const statusDiv = document.getElementById('status')
  statusDiv.setAttribute('role', 'status')
  statusDiv.setAttribute('aria-live', 'polite')
  statusDiv.textContent = message
}

// ✅ Good: Progress update
function updateProgress(current, total) {
  const progressDiv = document.getElementById('progress')
  progressDiv.setAttribute('role', 'status')
  progressDiv.setAttribute('aria-live', 'polite')
  progressDiv.setAttribute('aria-atomic', 'true')
  progressDiv.textContent = \`\${current} of \${total} items processed\`
}

// ✅ Good: Form validation with status
function validateForm() {
  const email = document.getElementById('email').value
  const errorDiv = document.getElementById('email-error')
  
  if (!isValidEmail(email)) {
    errorDiv.setAttribute('role', 'alert')
    errorDiv.setAttribute('aria-live', 'assertive')
    errorDiv.textContent = 'Invalid email format'
    errorDiv.style.display = 'block'
    return false
  } else {
    errorDiv.style.display = 'none'
    return true
  }
}

// ✅ Good: Dynamic status updates
function createStatusRegion() {
  const statusRegion = document.createElement('div')
  statusRegion.setAttribute('role', 'status')
  statusRegion.setAttribute('aria-live', 'polite')
  statusRegion.setAttribute('aria-atomic', 'true')
  statusRegion.id = 'status-region'
  document.body.appendChild(statusRegion)
  return statusRegion
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
                {`// ✅ Good: Success message component
import { useState, useEffect } from 'react'

function SuccessMessage({ message }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div role="alert" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  )
}

// ✅ Good: Error message component
function ErrorMessage({ message }) {
  return (
    <div role="alert" aria-live="assertive" aria-atomic="true">
      {message}
    </div>
  )
}

// ✅ Good: Loading status component
function LoadingStatus({ message }) {
  return (
    <div role="status" aria-live="polite">
      {message}
    </div>
  )
}

// ✅ Good: Progress component
function Progress({ current, total }) {
  return (
    <div role="status" aria-live="polite" aria-atomic="true">
      {current} of {total} items processed
    </div>
  )
}

// ✅ Good: Form with status messages
function ContactForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isValidEmail(email)) {
      setError('Invalid email format')
      setSuccess('')
      return
    }

    try {
      await submitForm(email)
      setSuccess('Form submitted successfully')
      setError('')
    } catch (err) {
      setError('Submission failed. Please try again.')
      setSuccess('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      
      {error && (
        <div
          id="email-error"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
      
      {success && (
        <SuccessMessage message={success} />
      )}
      
      <button type="submit">Submit</button>
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
  <!-- ✅ Good: Success message -->
  <div
    v-if="successMessage"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  >
    {{ successMessage }}
  </div>

  <!-- ✅ Good: Error message -->
  <div
    v-if="errorMessage"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    {{ errorMessage }}
  </div>

  <!-- ✅ Good: Loading status -->
  <div
    v-if="isLoading"
    role="status"
    aria-live="polite"
  >
    Loading...
  </div>

  <!-- ✅ Good: Progress update -->
  <div
    role="status"
    aria-live="polite"
    aria-atomic="true"
  >
    {{ current }} of {{ total }} items processed
  </div>

  <!-- ✅ Good: Form with status -->
  <form @submit.prevent="handleSubmit">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      v-model="email"
      :aria-invalid="errorMessage ? 'true' : 'false'"
      :aria-describedby="errorMessage ? 'email-error' : undefined"
    />
    
    <div
      v-if="errorMessage"
      id="email-error"
      role="alert"
      aria-live="assertive"
    >
      {{ errorMessage }}
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)
const current = ref(0)
const total = ref(10)

const handleSubmit = async () => {
  if (!isValidEmail(email.value)) {
    errorMessage.value = 'Invalid email format'
    successMessage.value = ''
    return
  }

  try {
    isLoading.value = true
    await submitForm(email.value)
    successMessage.value = 'Form submitted successfully'
    errorMessage.value = ''
    
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (err) {
    errorMessage.value = 'Submission failed. Please try again.'
    successMessage.value = ''
  } finally {
    isLoading.value = false
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
                  <strong>Screen Reader:</strong> Use NVDA/JAWS, verify status messages are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus Test:</strong> Verify status doesn't move focus
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Timing Test:</strong> Check if messages are announced at right time
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Role Check:</strong> Verify role="alert" or role="status" is used
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
                  <strong>axe DevTools:</strong> Can detect some status message issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies missing ARIA roles for status
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual screen reader testing is most reliable
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
            <h3 className="font-semibold mb-2">❌ Status message without role</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<div>Form submitted successfully</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use role="alert" or role="status" so screen readers can announce the message.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Moving focus to status message</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Status message receives focus, disrupting user workflow
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Status messages should be announced without moving focus.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Using wrong aria-live value</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`<div role="alert" aria-live="polite">Critical error!</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use aria-live="assertive" for urgent messages, "polite" for non-urgent.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use role="alert" for important messages (errors, success)</li>
          <li>✓ Use role="status" for progress and loading updates</li>
          <li>✓ Use aria-live="assertive" for urgent messages</li>
          <li>✓ Use aria-live="polite" for non-urgent updates</li>
          <li>✓ Don't move focus to status messages</li>
          <li>✓ Use aria-atomic="true" for complete message announcements</li>
          <li>✓ Test with screen readers to verify announcements</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.1">
            <Button variant="outline">3.3.1 Error Identification</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
          <Link href="/criteria/3.3.3">
            <Button variant="outline">3.3.3 Error Suggestion</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

