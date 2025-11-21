"use client"

import { CheckCircle2, XCircle, Copy, Check, Key, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function AccessibleAuthenticationPage() {
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
        <span className="text-foreground font-medium">3.3.8 Accessible Authentication</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.8 Accessible Authentication</h1>
        <p className="text-xl text-muted-foreground">
          A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of the following: Alternative, Mechanism, Object Recognition, Personal Content.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          CAPTCHAs, complex password requirements, and cognitive tests can be barriers for users with cognitive disabilities, visual impairments, or motor disabilities. Users should have alternative authentication methods that don't rely solely on cognitive functions like memory or puzzle-solving.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Cannot solve puzzles or remember passwords</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Visual Impairments</h4>
              <p className="text-sm text-muted-foreground">Cannot see visual CAPTCHAs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from accessible authentication</p>
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
              <h3 className="font-semibold text-lg">❌ CAPTCHA Only</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Visual CAPTCHA</p>
                <p className="text-xs text-destructive mt-2">No alternative provided</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Only visual CAPTCHA, no alternative
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Visual puzzle only, no accessible alternative
            </code>
            <p className="text-sm mt-2">Blind users cannot complete authentication</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Multiple Options</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">CAPTCHA</p>
                <p className="text-xs text-green-600 mt-2">+ Audio alternative</p>
                <p className="text-xs text-green-600">+ Email verification</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Multiple authentication options available
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Visual, audio, or email verification options
            </code>
            <p className="text-sm mt-2">All users can authenticate</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🧩 CAPTCHA</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Only visual puzzle CAPTCHA
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Visual CAPTCHA + audio alternative + email verification option
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need alternatives to visual puzzles.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔑 Password Requirements</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Complex password with no alternative (password manager, biometric)
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Password + biometric option + password manager support
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should have alternatives to remembering passwords.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📧 Email Verification</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  CAPTCHA required, email verification not accepted
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Email verification as alternative to CAPTCHA
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Email verification is accessible to all users.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔐 Biometric Authentication</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Only password authentication available
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Password + fingerprint/face recognition option
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Biometric authentication doesn't require memory.
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
                {`<!-- ✅ Good: CAPTCHA with alternatives -->
<form>
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
  
  <!-- CAPTCHA section -->
  <div class="captcha-section">
    <h3>Verification</h3>
    
    <!-- Visual CAPTCHA -->
    <div class="captcha-option">
      <label>
        <input type="radio" name="verification" value="visual" checked>
        Visual CAPTCHA
      </label>
      <div id="visual-captcha">[Visual puzzle]</div>
    </div>
    
    <!-- Audio alternative -->
    <div class="captcha-option">
      <label>
        <input type="radio" name="verification" value="audio">
        Audio CAPTCHA
      </label>
      <button type="button" onclick="playAudioCaptcha()">Play Audio</button>
    </div>
    
    <!-- Email verification alternative -->
    <div class="captcha-option">
      <label>
        <input type="radio" name="verification" value="email">
        Email Verification (no CAPTCHA)
      </label>
      <p>We'll send a verification code to your email</p>
    </div>
  </div>
  
  <button type="submit">Submit</button>
</form>

<!-- ✅ Good: Password with alternatives -->
<form>
  <label for="password">Password</label>
  <input type="password" id="password" name="password">
  
  <div class="auth-alternatives">
    <p>Or use:</p>
    <button type="button" onclick="useBiometric()">Fingerprint</button>
    <button type="button" onclick="usePasswordManager()">Password Manager</button>
  </div>
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
                {`// ✅ Good: CAPTCHA with alternatives
function handleVerificationChange() {
  const selected = document.querySelector('input[name="verification"]:checked').value
  
  if (selected === 'visual') {
    showVisualCaptcha()
  } else if (selected === 'audio') {
    showAudioCaptcha()
  } else if (selected === 'email') {
    showEmailVerification()
  }
}

function showEmailVerification() {
  // Hide CAPTCHA
  document.getElementById('visual-captcha').style.display = 'none'
  document.getElementById('audio-captcha').style.display = 'none'
  
  // Show email verification
  const emailSection = document.getElementById('email-verification')
  emailSection.style.display = 'block'
  
  // Send verification code
  sendVerificationCode()
}

function sendVerificationCode() {
  const email = document.getElementById('email').value
  // Send code to email
  fetch('/api/send-verification', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}

// ✅ Good: Biometric authentication
async function useBiometric() {
  if ('credentials' in navigator && 'get' in navigator.credentials) {
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          allowCredentials: []
        }
      })
      // Handle biometric authentication
      authenticateWithBiometric(credential)
    } catch (error) {
      // Fallback to password
      showPasswordForm()
    }
  }
}

// ✅ Good: Password manager support
function usePasswordManager() {
  // Ensure form is password manager friendly
  const form = document.querySelector('form')
  form.setAttribute('autocomplete', 'on')
  
  // Use proper input types
  const emailInput = document.getElementById('email')
  emailInput.setAttribute('autocomplete', 'email')
  
  const passwordInput = document.getElementById('password')
  passwordInput.setAttribute('autocomplete', 'current-password')
}

// ✅ Good: No CAPTCHA for authenticated users
function showCaptcha() {
  const isAuthenticated = checkAuthentication()
  
  if (isAuthenticated) {
    // Skip CAPTCHA for authenticated users
    return false
  }
  
  // Show CAPTCHA with alternatives
  return true
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
                {`// ✅ Good: CAPTCHA with alternatives
import { useState } from 'react'

function VerificationForm() {
  const [verificationMethod, setVerificationMethod] = useState('visual')
  const [emailCode, setEmailCode] = useState('')

  const handleVerificationChange = (method) => {
    setVerificationMethod(method)
    
    if (method === 'email') {
      sendVerificationCode()
    }
  }

  const sendVerificationCode = async () => {
    const email = document.getElementById('email').value
    await fetch('/api/send-verification', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" autoComplete="email" />
      
      <div className="verification-options">
        <h3>Verification Method</h3>
        
        <label>
          <input
            type="radio"
            name="verification"
            value="visual"
            checked={verificationMethod === 'visual'}
            onChange={() => handleVerificationChange('visual')}
          />
          Visual CAPTCHA
        </label>
        
        <label>
          <input
            type="radio"
            name="verification"
            value="audio"
            checked={verificationMethod === 'audio'}
            onChange={() => handleVerificationChange('audio')}
          />
          Audio CAPTCHA
        </label>
        
        <label>
          <input
            type="radio"
            name="verification"
            value="email"
            checked={verificationMethod === 'email'}
            onChange={() => handleVerificationChange('email')}
          />
          Email Verification
        </label>
      </div>
      
      {verificationMethod === 'email' && (
        <div>
          <label htmlFor="code">Verification Code</label>
          <input
            type="text"
            id="code"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
          />
        </div>
      )}
      
      <button type="submit">Submit</button>
    </form>
  )
}

// ✅ Good: Biometric authentication
function LoginForm() {
  const [useBiometric, setUseBiometric] = useState(false)

  const handleBiometric = async () => {
    if ('credentials' in navigator) {
      try {
        const credential = await navigator.credentials.get({
          publicKey: {
            challenge: new Uint8Array(32),
            allowCredentials: []
          }
        })
        authenticateWithBiometric(credential)
      } catch {
        // Fallback to password
        setUseBiometric(false)
      }
    }
  }

  return (
    <form>
      {!useBiometric ? (
        <>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <button type="button" onClick={handleBiometric}>
            Use Fingerprint
          </button>
      ) : (
        <div>Biometric authentication in progress...</div>
      )}
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
  <!-- ✅ Good: CAPTCHA with alternatives -->
  <form>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" autocomplete="email" />
    
    <div class="verification-options">
      <h3>Verification Method</h3>
      
      <label>
        <input
          type="radio"
          name="verification"
          value="visual"
          v-model="verificationMethod"
          @change="handleVerificationChange"
        >
        Visual CAPTCHA
      </label>
      
      <label>
        <input
          type="radio"
          name="verification"
          value="audio"
          v-model="verificationMethod"
          @change="handleVerificationChange"
        >
        Audio CAPTCHA
      </label>
      
      <label>
        <input
          type="radio"
          name="verification"
          value="email"
          v-model="verificationMethod"
          @change="handleVerificationChange"
        >
        Email Verification
      </label>
    </div>
    
    <div v-if="verificationMethod === 'email'">
      <label for="code">Verification Code</label>
      <input type="text" id="code" v-model="emailCode" />
    </div>
    
    <button type="submit">Submit</button>
  </form>

  <!-- ✅ Good: Biometric option -->
  <form>
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      autocomplete="current-password"
    />
    <button type="button" @click="useBiometric">
      Use Fingerprint
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const verificationMethod = ref('visual')
const emailCode = ref('')
const password = ref('')

const handleVerificationChange = () => {
  if (verificationMethod.value === 'email') {
    sendVerificationCode()
  }
}

const sendVerificationCode = async () => {
  await fetch('/api/send-verification', {
    method: 'POST',
    body: JSON.stringify({ email: email.value })
  })
}

const useBiometric = async () => {
  if ('credentials' in navigator) {
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          allowCredentials: []
        }
      })
      authenticateWithBiometric(credential)
    } catch {
      // Fallback to password
    }
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
                  <strong>Alternative Check:</strong> Verify alternatives to CAPTCHA exist
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Email Option:</strong> Test email verification as alternative
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Biometric Test:</strong> Check if biometric options are available
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Screen Reader:</strong> Test with screen reader, verify alternatives accessible
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
                  <strong>Manual Review:</strong> Requires manual testing of authentication methods
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
            <h3 className="font-semibold mb-2">❌ CAPTCHA without alternatives</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only visual CAPTCHA, no audio or email option
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide at least one alternative to visual CAPTCHA (audio, email verification, etc.).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Complex password with no alternatives</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only password authentication, no biometric or password manager support
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide alternatives like biometric authentication or password manager support.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Alternatives not accessible</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Email verification option exists but not keyboard accessible
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Ensure all authentication alternatives are accessible to all users.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide alternatives to visual CAPTCHAs (audio, email)</li>
          <li>✓ Support biometric authentication when available</li>
          <li>✓ Enable password manager support (autocomplete attributes)</li>
          <li>✓ Offer email verification as alternative</li>
          <li>✓ Skip CAPTCHA for authenticated users</li>
          <li>✓ Make all alternatives keyboard accessible</li>
          <li>✓ Test with screen readers and assistive technologies</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.2">
            <Button variant="outline">3.3.2 Labels or Instructions</Button>
          </Link>
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/1.1.1">
            <Button variant="outline">1.1.1 Non-text Content</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

