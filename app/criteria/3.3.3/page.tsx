"use client"

import { CheckCircle2, XCircle, Copy, Check, AlertCircle, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ErrorSuggestionPage() {
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
        <span className="text-foreground font-medium">3.3.3 Error Suggestion</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.3 Error Suggestion</h1>
        <p className="text-xl text-muted-foreground">
          If an input error is automatically detected, suggestions for correction are provided to the user, unless it would jeopardize the security or purpose of the content.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          When users make input errors, they need help understanding what went wrong and how to fix it. Providing suggestions helps users correct errors quickly and successfully complete forms. This is especially important for users with cognitive disabilities who may struggle to identify and fix errors on their own.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need help fixing errors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from helpful suggestions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Form Completion</h4>
              <p className="text-sm text-muted-foreground">Reduces frustration and abandonment</p>
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
              <h3 className="font-semibold text-lg">❌ Error Without Suggestion</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center w-full">
                <AlertCircle className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-destructive">Invalid email format</p>
                <p className="text-xs text-destructive mt-2">No suggestion provided</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Error message doesn't suggest how to fix it
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Only error message, no correction suggestion
            </code>
            <p className="text-sm mt-2">User doesn't know how to fix the error</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Error With Suggestion</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center w-full">
                <Lightbulb className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm text-destructive">Invalid email format</p>
                <p className="text-xs text-green-600 mt-2">Suggestion: Use format like user@example.com</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Error message includes correction suggestion
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Error message + correction suggestion
            </code>
            <p className="text-sm mt-2">User knows how to fix the error</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📧 Email Format</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Invalid email"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Invalid email. Use format: name@example.com"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> User needs to know the correct format.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔒 Password Requirements</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Password too weak"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Password must be at least 8 characters and include a number"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> User needs specific requirements.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📅 Date Format</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Invalid date"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Invalid date. Use format: MM/DD/YYYY (e.g., 12/25/2023)"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> User needs format example.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔢 Number Range</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  "Invalid number"
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Number must be between 1 and 100"
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> User needs to know valid range.
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
                {`<!-- ✅ Good: Error with suggestion -->
<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" aria-invalid="false" aria-describedby="email-error">
  <span id="email-error" role="alert" class="error-message" style="display: none;">
    Invalid email format. Use format: name@example.com
  </span>
</form>

<!-- ✅ Good: Password with requirements -->
<form>
  <label for="password">Password</label>
  <input type="password" id="password" name="password" aria-invalid="false" aria-describedby="password-error password-requirements">
  <div id="password-requirements">Must be at least 8 characters with a number</div>
  <span id="password-error" role="alert" class="error-message" style="display: none;">
    Password too short. Add at least 3 more characters and include a number.
  </span>
</form>

<!-- ✅ Good: Date with format suggestion -->
<form>
  <label for="date">Date of Birth</label>
  <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" aria-invalid="false" aria-describedby="date-error">
  <span id="date-error" role="alert" class="error-message" style="display: none;">
    Invalid date format. Use MM/DD/YYYY (e.g., 12/25/2023)
  </span>
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
                {`// ✅ Good: Email validation with suggestion
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  
  if (!email) {
    return { valid: false, message: 'Email is required' }
  }
  
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      message: 'Invalid email format. Use format: name@example.com'
    }
  }
  
  return { valid: true }
}

function showEmailError(input, error) {
  input.setAttribute('aria-invalid', 'true')
  const errorElement = document.getElementById('email-error')
  errorElement.textContent = error.message
  errorElement.style.display = 'block'
}

// ✅ Good: Password validation with suggestions
function validatePassword(password) {
  const errors = []
  
  if (password.length < 8) {
    errors.push(\`Add at least \${8 - password.length} more characters\`)
  }
  
  if (!/\\d/.test(password)) {
    errors.push('Include at least one number')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Include at least one uppercase letter')
  }
  
  if (errors.length > 0) {
    return {
      valid: false,
      message: \`Password requirements: \${errors.join(', ')}\`
    }
  }
  
  return { valid: true }
}

// ✅ Good: Date validation with format suggestion
function validateDate(dateString) {
  const dateRegex = /^\\d{2}\\/\\d{2}\\/\\d{4}$/
  
  if (!dateRegex.test(dateString)) {
    return {
      valid: false,
      message: 'Invalid date format. Use MM/DD/YYYY (e.g., 12/25/2023)'
    }
  }
  
  const [month, day, year] = dateString.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  
  if (date.getMonth() !== month - 1 || date.getDate() !== day) {
    return {
      valid: false,
      message: 'Invalid date. Check month and day values.'
    }
  }
  
  return { valid: true }
}

// ✅ Good: Form validation with suggestions
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const email = document.getElementById('email').value
  const emailValidation = validateEmail(email)
  
  if (!emailValidation.valid) {
    showEmailError(document.getElementById('email'), emailValidation)
    return
  }
  
  // Continue with form submission
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
                {`// ✅ Good: Email validation with suggestion
import { useState } from 'react'

function EmailForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (value) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    
    if (!value) {
      return 'Email is required'
    }
    
    if (!emailRegex.test(value)) {
      return 'Invalid email format. Use format: name@example.com'
    }
    
    return ''
  }

  const handleBlur = () => {
    const errorMessage = validateEmail(email)
    setError(errorMessage)
  }

  return (
    <div>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      {error && (
        <span id="email-error" role="alert" className="error-message">
          {error}
        </span>
      )}
    </div>
  )
}

// ✅ Good: Password with suggestions
function PasswordForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validatePassword = (value) => {
    const errors = []
    
    if (value.length < 8) {
      errors.push(\`Add at least \${8 - value.length} more characters\`)
    }
    
    if (!/\\d/.test(value)) {
      errors.push('Include at least one number')
    }
    
    if (!/[A-Z]/.test(value)) {
      errors.push('Include at least one uppercase letter')
    }
    
    if (errors.length > 0) {
      return \`Password requirements: \${errors.join(', ')}\`
    }
    
    return ''
  }

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setError(validatePassword(e.target.value))
        }}
        aria-invalid={!!error}
        aria-describedby={error ? 'password-error' : undefined}
      />
      {error && (
        <span id="password-error" role="alert" className="error-message">
          {error}
        </span>
      )}
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
  <!-- ✅ Good: Email validation with suggestion -->
  <div>
    <label for="email">Email Address</label>
    <input
      type="email"
      id="email"
      v-model="email"
      @blur="validateEmail"
      :aria-invalid="emailError ? 'true' : 'false'"
      :aria-describedby="emailError ? 'email-error' : undefined"
    />
    <span
      v-if="emailError"
      id="email-error"
      role="alert"
      class="error-message"
    >
      {{ emailError }}
    </span>
  </div>

  <!-- ✅ Good: Password with suggestions -->
  <div>
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      @input="validatePassword"
      :aria-invalid="passwordError ? 'true' : 'false'"
      :aria-describedby="passwordError ? 'password-error' : undefined"
    />
    <span
      v-if="passwordError"
      id="password-error"
      role="alert"
      class="error-message"
    >
      {{ passwordError }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const emailError = ref('')
const password = ref('')
const passwordError = ref('')

const validateEmail = () => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  
  if (!email.value) {
    emailError.value = 'Email is required'
    return
  }
  
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Invalid email format. Use format: name@example.com'
    return
  }
  
  emailError.value = ''
}

const validatePassword = () => {
  const errors = []
  
  if (password.value.length < 8) {
    errors.push(\`Add at least \${8 - password.value.length} more characters\`)
  }
  
  if (!/\\d/.test(password.value)) {
    errors.push('Include at least one number')
  }
  
  if (errors.length > 0) {
    passwordError.value = \`Password requirements: \${errors.join(', ')}\`
  } else {
    passwordError.value = ''
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
                  <strong>Error Trigger:</strong> Enter invalid data, verify error appears
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Suggestion Check:</strong> Verify error message includes correction suggestion
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Test with NVDA/JAWS, verify suggestions are announced
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Helpfulness:</strong> Check if suggestions are actually helpful
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
                  <strong>Manual Review:</strong> Requires manual testing of error messages
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
            <h3 className="font-semibold mb-2">❌ Error without suggestion</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              "Invalid email" (no format example)
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always provide suggestions for how to correct the error.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Vague suggestions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              "Fix the error" (not helpful)
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Suggestions should be specific and actionable.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Suggestions not accessible</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Suggestion only in tooltip, not announced to screen readers
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use aria-describedby to associate suggestions with inputs.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide specific correction suggestions for all errors</li>
          <li>✓ Include format examples (e.g., "Use format: name@example.com")</li>
          <li>✓ Explain what's missing or incorrect</li>
          <li>✓ Use aria-describedby to associate suggestions with inputs</li>
          <li>✓ Make suggestions clear and actionable</li>
          <li>✓ Test with screen readers to verify suggestions are announced</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.1">
            <Button variant="outline">3.3.1 Error Identification</Button>
          </Link>
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
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

