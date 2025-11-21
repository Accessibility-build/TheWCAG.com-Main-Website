"use client"

import { CheckCircle2, XCircle, Copy, Check, Clock, Timer } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function TimingAdjustablePage() {
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
        <span className="text-foreground font-medium">2.2.1 Timing Adjustable</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Enough Time</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.2.1 Timing Adjustable</h1>
        <p className="text-xl text-muted-foreground">
          For each time limit that is set by the content, at least one of the following is true: Turn off, Adjust, Extend, Real-time Exception, Essential Exception, 20 Hour Exception.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with disabilities often need more time to read, understand, or interact with content. Cognitive disabilities may require extra time to process information. Motor disabilities may slow down typing or clicking. Low vision users may need time to read content with screen magnification.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need more time to read and understand</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Timer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Slower typing or clicking speed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Low Vision</h4>
              <p className="text-sm text-muted-foreground">Need time to read with magnification</p>
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
              <h3 className="font-semibold text-lg">❌ Fixed Time Limit</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Timer className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Session expires in: 5:00</p>
                <p className="text-xs text-destructive mt-2">No way to extend time</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Fixed 5-minute timeout with no extension option
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Timeout cannot be adjusted or extended
            </code>
            <p className="text-sm mt-2">Users who need more time lose their work</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Adjustable Time Limit</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Timer className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Session expires in: 5:00</p>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-xs mt-2">
                  Extend Time
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Users can extend time limit or adjust it in settings
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Time limit can be extended or turned off
            </code>
            <p className="text-sm mt-2">Users control their time limits</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⏱️ Session Timeouts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Session expires after 15 minutes, no extension
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Extend session" button or adjustable timeout in settings
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need time to complete forms or read content.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Submission</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Form auto-submits after 2 minutes
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  User controls when to submit, or can extend time
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control when forms are submitted.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎮 Interactive Quizzes</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  30-second limit per question, no extension
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Option to extend time or turn off timer
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Some users need more time to read and answer questions.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💳 Payment Forms</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Payment page expires after 10 minutes
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Warning before timeout, option to extend or save progress
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users shouldn't lose payment information due to time limits.
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
                {`<!-- ✅ Good: Timeout with extension option -->
<div id="timeout-warning" style="display: none;">
  <p>Your session will expire in <span id="time-remaining">5:00</span></p>
  <button onclick="extendSession()">Extend Session</button>
  <button onclick="turnOffTimeout()">Turn Off Timeout</button>
</div>

<!-- ✅ Good: Adjustable timeout settings -->
<label>
  Session timeout (minutes):
  <input type="number" id="timeout-setting" min="5" max="120" value="15">
</label>
<button onclick="saveTimeoutSetting()">Save</button>`}
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
                {`// ✅ Good: Adjustable timeout with extension
let timeoutDuration = 15 * 60 * 1000 // 15 minutes
let timeoutId = null
let timeRemaining = timeoutDuration

function startTimeout() {
  clearTimeout(timeoutId)
  timeRemaining = timeoutDuration
  
  // Show warning 2 minutes before timeout
  const warningTime = timeoutDuration - (2 * 60 * 1000)
  
  setTimeout(() => {
    showTimeoutWarning()
  }, warningTime)
  
  timeoutId = setTimeout(() => {
    if (confirm('Your session is about to expire. Extend session?')) {
      extendSession()
    } else {
      logout()
    }
  }, timeoutDuration)
}

function extendSession() {
  startTimeout() // Restart timer
  document.getElementById('timeout-warning').style.display = 'none'
}

function turnOffTimeout() {
  clearTimeout(timeoutId)
  document.getElementById('timeout-warning').style.display = 'none'
  // Save preference to not timeout
  localStorage.setItem('timeoutDisabled', 'true')
}

function adjustTimeout(minutes) {
  timeoutDuration = minutes * 60 * 1000
  startTimeout()
  // Save preference
  localStorage.setItem('timeoutDuration', minutes)
}

// Reset timeout on user activity
document.addEventListener('mousedown', () => resetTimeout())
document.addEventListener('keydown', () => resetTimeout())

function resetTimeout() {
  if (!localStorage.getItem('timeoutDisabled')) {
    startTimeout()
  }
}

// Load user preferences
window.addEventListener('load', () => {
  const disabled = localStorage.getItem('timeoutDisabled')
  const duration = localStorage.getItem('timeoutDuration')
  
  if (disabled === 'true') {
    return // Timeout disabled
  }
  
  if (duration) {
    timeoutDuration = parseInt(duration) * 60 * 1000
  }
  
  startTimeout()
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
                {`// ✅ Good: Adjustable timeout component
import { useState, useEffect, useRef } from 'react'

function SessionTimeout() {
  const [timeRemaining, setTimeRemaining] = useState(15 * 60) // 15 minutes in seconds
  const [showWarning, setShowWarning] = useState(false)
  const [timeoutDisabled, setTimeoutDisabled] = useState(false)
  const timeoutRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Load user preference
    const disabled = localStorage.getItem('timeoutDisabled') === 'true'
    setTimeoutDisabled(disabled)
    
    if (disabled) return

    const duration = parseInt(localStorage.getItem('timeoutDuration') || '15')
    setTimeRemaining(duration * 60)

    // Show warning 2 minutes before timeout
    const warningTime = (duration * 60) - 120
    
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= warningTime && !showWarning) {
          setShowWarning(true)
        }
        if (prev <= 0) {
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Reset on user activity
    const resetTimeout = () => {
      setTimeRemaining(duration * 60)
      setShowWarning(false)
    }
    
    document.addEventListener('mousedown', resetTimeout)
    document.addEventListener('keydown', resetTimeout)

    return () => {
      clearInterval(intervalRef.current)
      document.removeEventListener('mousedown', resetTimeout)
      document.removeEventListener('keydown', resetTimeout)
    }
  }, [showWarning])

  const extendSession = () => {
    const duration = parseInt(localStorage.getItem('timeoutDuration') || '15')
    setTimeRemaining(duration * 60)
    setShowWarning(false)
  }

  const turnOffTimeout = () => {
    setTimeoutDisabled(true)
    localStorage.setItem('timeoutDisabled', 'true')
    setShowWarning(false)
  }

  const adjustTimeout = (minutes) => {
    localStorage.setItem('timeoutDuration', minutes.toString())
    setTimeRemaining(minutes * 60)
    setShowWarning(false)
  }

  const handleTimeout = () => {
    if (window.confirm('Your session is about to expire. Extend session?')) {
      extendSession()
    } else {
      // Logout user
    }
  }

  if (timeoutDisabled) return null

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60

  return (
    <>
      {showWarning && (
        <div className="timeout-warning">
          <p>Your session will expire in {minutes}:{seconds.toString().padStart(2, '0')}</p>
          <button onClick={extendSession}>Extend Session</button>
          <button onClick={turnOffTimeout}>Turn Off Timeout</button>
        </div>
      )}
      <div className="timeout-settings">
        <label>
          Session timeout (minutes):
          <input
            type="number"
            min="5"
            max="120"
            defaultValue={15}
            onChange={(e) => adjustTimeout(parseInt(e.target.value))}
          />
        </label>
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
  <div v-if="!timeoutDisabled">
    <div v-if="showWarning" class="timeout-warning">
      <p>Your session will expire in {{ formatTime(timeRemaining) }}</p>
      <button @click="extendSession">Extend Session</button>
      <button @click="turnOffTimeout">Turn Off Timeout</button>
    </div>
    
    <div class="timeout-settings">
      <label>
        Session timeout (minutes):
        <input
          type="number"
          min="5"
          max="120"
          v-model.number="timeoutMinutes"
          @change="adjustTimeout"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeRemaining = ref(15 * 60)
const showWarning = ref(false)
const timeoutDisabled = ref(false)
const timeoutMinutes = ref(15)
let intervalId = null

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return \`\${mins}:\${secs.toString().padStart(2, '0')}\`
}

const extendSession = () => {
  timeRemaining.value = timeoutMinutes.value * 60
  showWarning.value = false
}

const turnOffTimeout = () => {
  timeoutDisabled.value = true
  localStorage.setItem('timeoutDisabled', 'true')
  showWarning.value = false
  if (intervalId) clearInterval(intervalId)
}

const adjustTimeout = () => {
  localStorage.setItem('timeoutDuration', timeoutMinutes.value.toString())
  timeRemaining.value = timeoutMinutes.value * 60
  showWarning.value = false
}

const resetTimeout = () => {
  timeRemaining.value = timeoutMinutes.value * 60
  showWarning.value = false
}

onMounted(() => {
  const disabled = localStorage.getItem('timeoutDisabled') === 'true'
  timeoutDisabled.value = disabled
  
  if (disabled) return

  const duration = parseInt(localStorage.getItem('timeoutDuration') || '15')
  timeoutMinutes.value = duration
  timeRemaining.value = duration * 60

  intervalId = setInterval(() => {
    timeRemaining.value--
    
    if (timeRemaining.value <= (duration * 60) - 120 && !showWarning.value) {
      showWarning.value = true
    }
    
    if (timeRemaining.value <= 0) {
      if (confirm('Your session is about to expire. Extend session?')) {
        extendSession()
      } else {
        // Logout
      }
    }
  }, 1000)

  document.addEventListener('mousedown', resetTimeout)
  document.addEventListener('keydown', resetTimeout)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  document.removeEventListener('mousedown', resetTimeout)
  document.removeEventListener('keydown', resetTimeout)
})
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
                  <strong>Check Time Limits:</strong> Identify all time limits on the page
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Extension Test:</strong> Verify users can extend time limits
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Turn Off Test:</strong> Check if timeouts can be disabled
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Adjust Test:</strong> Verify users can change timeout duration
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Warning Test:</strong> Check if warnings appear before timeout
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
                  <strong>Manual Review:</strong> Requires manual testing of timeout behavior
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
            <h3 className="font-semibold mb-2">❌ Fixed timeouts with no extension</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Session expires after fixed time, no way to extend
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always provide option to extend, adjust, or turn off timeouts.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No warning before timeout</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Users lose work without warning
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Warn users before timeout occurs so they can extend or save work.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Timeout cannot be turned off</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              No user control over timeout behavior
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide settings to disable timeouts for users who need unlimited time.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide option to extend, adjust, or turn off time limits</li>
          <li>✓ Warn users before timeout occurs</li>
          <li>✓ Save user preferences for timeout settings</li>
          <li>✓ Reset timeout on user activity</li>
          <li>✓ Consider exceptions for real-time events or essential functions</li>
          <li>✓ Test with users who need more time</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.2.2">
            <Button variant="outline">2.2.2 Pause, Stop, Hide</Button>
          </Link>
          <Link href="/criteria/2.2.5">
            <Button variant="outline">2.2.5 Re-authenticating</Button>
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

