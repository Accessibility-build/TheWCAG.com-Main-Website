"use client"

import { CheckCircle2, XCircle, Copy, Check, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ErrorIdentificationPage() {
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
        <span className="text-foreground font-medium">3.3.1 Error Identification</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.1 Error Identification</h1>
        <p className="text-xl text-muted-foreground">
          If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          When form errors occur, users need to know what went wrong and where to fix it. Screen reader users cannot see visual indicators like red borders or icons alone. All error information must be available in text that assistive technologies can access.
        </p>
        <p className="text-lg leading-relaxed">
          Clear, descriptive error messages help all users correct mistakes quickly and successfully complete forms, reducing frustration and abandonment.
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
              <h3 className="font-semibold text-lg">❌ Visual Only Error</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-4">
              <div>
                <label className="block mb-1">Email Address</label>
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-red-500 rounded"
                  style={{ outline: '2px solid red' }}
                />
                <div className="mt-1">
                  <span className="text-red-500 text-2xl">⚠️</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Error indicated only by red border and icon
            </p>
            <p className="text-sm mt-2">Screen reader: No error message announced</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Accessible Error</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 space-y-4">
              <div>
                <label htmlFor="email-good" className="block mb-1">Email Address</label>
                <input 
                  id="email-good"
                  type="text" 
                  className="w-full p-2 border-2 border-red-500 rounded"
                  aria-invalid="true"
                  aria-describedby="email-error"
                />
                <div id="email-error" className="mt-1 flex items-center gap-2 text-red-600" role="alert">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-semibold">Error: Please enter a valid email address</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Text error message with aria-invalid and aria-describedby
            </p>
            <p className="text-sm mt-2">Screen reader: "Email Address, edit text, invalid entry. Error: Please enter a valid email address"</p>
          </Card>
        </div>
      </section>

      {/* Error Message Requirements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Error Message Requirements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Identify the Field
            </h3>
            <p className="mb-4">Clearly indicate which field has the error:</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Place error message near the field</li>
              <li>✓ Associate error with field using aria-describedby</li>
              <li>✓ Use aria-invalid="true" on the input</li>
              <li>✓ Visually highlight the field (border, background)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Describe the Error
            </h3>
            <p className="mb-4">Provide clear, helpful error text:</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Explain what went wrong</li>
              <li>✓ Suggest how to fix it</li>
              <li>✓ Use plain language</li>
              <li>✓ Be specific (not just "Invalid input")</li>
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
            <TabsTrigger value="validation">Form Validation</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML with ARIA</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Accessible error message -->
<div class="form-group">
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email"
    name="email"
    aria-invalid="true"
    aria-describedby="email-error"
    class="error"
  />
  <div id="email-error" class="error-message" role="alert">
    <span aria-hidden="true">⚠️</span>
    <strong>Error:</strong> Please enter a valid email address
  </div>
</div>

<!-- ✅ Good: Multiple errors -->
<div class="form-group">
  <label for="password">Password</label>
  <input 
    type="password" 
    id="password"
    aria-invalid="true"
    aria-describedby="password-error"
  />
  <ul id="password-error" class="error-list" role="alert">
    <li>Password must be at least 8 characters</li>
    <li>Password must contain a number</li>
  </ul>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Form with Errors</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

export function EmailForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (value) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    if (!value) {
      setError('Email is required')
      return false
    }
    if (!emailRegex.test(value)) {
      setError('Please enter a valid email address')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      // Submit form
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) validateEmail(e.target.value)
          }}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
          className={error ? "error" : ""}
        />
        {error && (
          <div id="email-error" className="error-message" role="alert">
            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="validation" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Form Validation Library</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Validation code", "validation")}>
                  {copiedCode === "validation" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`// ✅ Good: Using react-hook-form with accessibility
import { useForm } from 'react-hook-form'

export function AccessibleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
              message: 'Please enter a valid email address'
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <div id="email-error" role="alert">
            <strong>Error:</strong> {errors.email.message}
          </div>
        )}
      </div>
    </form>
  )
}

// ✅ Good: HTML5 validation with custom messages
<input
  type="email"
  required
  onInvalid={(e) => {
    e.target.setCustomValidity('Please enter a valid email address')
  }}
  onInput={(e) => {
    e.target.setCustomValidity('')
  }}
/>`}
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
                  <strong>NVDA/JAWS:</strong> Submit form with errors - verify error messages are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus:</strong> Check that focus moves to first error field
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>aria-invalid:</strong> Verify aria-invalid="true" is set on error fields
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>aria-describedby:</strong> Check error message is associated with field
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Visual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Error Visibility:</strong> Error messages are clearly visible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Field Highlighting:</strong> Error fields are visually distinct
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Message Clarity:</strong> Error messages are specific and helpful
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Multiple Errors:</strong> All errors are displayed, not just the first
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
            <h3 className="font-semibold mb-2">❌ Color-only error indication</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<input className="border-red-500" />`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Red border alone doesn't help screen reader users. Add text error message.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Generic error messages</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<div>Error</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Be specific: "Email is required" not just "Error" or "Invalid input"
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Error not associated with field</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<input id="email" />
<div>Error message</div>`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use aria-describedby to link error message to the input field.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Error in title attribute only</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block">
              {`<input title="Error message" />`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Title attributes are not reliably announced. Use visible text with aria-describedby.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Always provide error messages in text, not just visual indicators</li>
          <li>✓ Use aria-invalid="true" on fields with errors</li>
          <li>✓ Associate error messages with fields using aria-describedby</li>
          <li>✓ Use role="alert" on error message containers</li>
          <li>✓ Place error messages near the field, ideally immediately after</li>
          <li>✓ Be specific: "Email is required" not "Error"</li>
          <li>✓ Show all errors at once, not just the first one</li>
          <li>✓ Clear errors when user corrects the input</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
          <Link href="/criteria/3.3.3">
            <Button variant="outline">3.3.3 Error Suggestion</Button>
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

