"use client"

import { CheckCircle2, XCircle, Copy, Check, MousePointer, Hand } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function MotionActuationPage() {
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
        <span className="text-foreground font-medium">2.5.4 Motion Actuation</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.4 Motion Actuation</h1>
        <p className="text-xl text-muted-foreground">
          Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when the motion is used for input that is essential to the function and not using it would invalidate the activity.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Device motion (like shaking or tilting) can trigger actions accidentally, especially for users with motor disabilities, tremors, or those using devices in moving vehicles. Users should be able to disable motion-based controls and use alternative interface controls instead.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Unintentional device movement</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MousePointer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Tremors</h4>
              <p className="text-sm text-muted-foreground">Accidental motion triggers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Moving Vehicles</h4>
              <p className="text-sm text-muted-foreground">Device motion from travel</p>
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
              <h3 className="font-semibold text-lg">❌ Motion Only</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <MousePointer className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Shake to undo</p>
                <p className="text-xs text-destructive mt-2">No button alternative</p>
                <p className="text-xs text-destructive">Cannot disable</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Only motion control, no UI alternative or disable option
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Motion-only control, no alternative
            </code>
            <p className="text-sm mt-2">Users cannot disable or use alternative</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Alternative</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <MousePointer className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Undo</p>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-xs mt-2">
                  Undo Button
                </button>
                <p className="text-xs text-green-600 mt-2">Or shake to undo</p>
                <p className="text-xs text-green-600">Can disable motion</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Button alternative and option to disable motion
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Button control + motion disable option
            </code>
            <p className="text-sm mt-2">All users can access functionality</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📱 Shake to Undo</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Only shake gesture, no undo button
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Undo button available, motion can be disabled
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should have button alternative.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎮 Tilt to Control</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Game only controlled by tilting device
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Arrow buttons provide alternative, motion can be disabled
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need non-motion controls.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Rotate to Navigate</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Rotate device to change view, no buttons
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Previous/Next buttons, motion optional
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Motion should be optional enhancement.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⚙️ Settings to Disable</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Motion controls always active, no disable option
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Settings toggle to enable/disable motion controls
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control motion activation.
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
                {`<!-- ✅ Good: Button alternative for motion -->
<div class="undo-controls">
  <button onclick="undo()" id="undo-btn">Undo</button>
  <label>
    <input type="checkbox" id="motion-enabled" checked>
    Enable shake to undo
  </label>
</div>

<!-- ✅ Good: Game with button controls -->
<div class="game-controls">
  <button onclick="moveLeft()">←</button>
  <button onclick="moveRight()">→</button>
  <button onclick="moveUp()">↑</button>
  <button onclick="moveDown()">↓</button>
  <label>
    <input type="checkbox" id="tilt-enabled">
    Enable tilt controls
  </label>
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
                {`// ✅ Good: Motion with button alternative and disable option
let motionEnabled = true
let lastShakeTime = 0

// Button control (always available)
document.getElementById('undo-btn').addEventListener('click', () => {
  undo()
})

// Motion control (optional)
if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', (e) => {
    if (!motionEnabled) return
    
    const acceleration = e.accelerationIncludingGravity
    const shakeThreshold = 15
    
    if (acceleration) {
      const totalForce = Math.abs(acceleration.x) + 
                        Math.abs(acceleration.y) + 
                        Math.abs(acceleration.z)
      
      if (totalForce > shakeThreshold) {
        const currentTime = Date.now()
        if (currentTime - lastShakeTime > 1000) {
          undo()
          lastShakeTime = currentTime
        }
      }
    }
  })
}

// Toggle motion
document.getElementById('motion-enabled').addEventListener('change', (e) => {
  motionEnabled = e.target.checked
  localStorage.setItem('motionEnabled', motionEnabled)
})

// Load preference
motionEnabled = localStorage.getItem('motionEnabled') !== 'false'

// ✅ Good: Tilt controls with buttons
let tiltEnabled = false

function moveLeft() {
  // Move left logic
}

function moveRight() {
  // Move right logic
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (e) => {
    if (!tiltEnabled) return
    
    const beta = e.beta // Front-to-back tilt
    const gamma = e.gamma // Left-to-right tilt
    
    if (gamma < -30) {
      moveLeft()
    } else if (gamma > 30) {
      moveRight()
    }
  })
}

document.getElementById('tilt-enabled').addEventListener('change', (e) => {
  tiltEnabled = e.target.checked
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
                {`// ✅ Good: Motion with button and disable option
import { useState, useEffect } from 'react'

function UndoControls() {
  const [motionEnabled, setMotionEnabled] = useState(true)

  useEffect(() => {
    // Load preference
    const saved = localStorage.getItem('motionEnabled')
    if (saved !== null) {
      setMotionEnabled(saved === 'true')
    }
  }, [])

  useEffect(() => {
    if (!motionEnabled) return

    const handleDeviceMotion = (e) => {
      const acceleration = e.accelerationIncludingGravity
      const shakeThreshold = 15
      
      if (acceleration) {
        const totalForce = Math.abs(acceleration.x) + 
                          Math.abs(acceleration.y) + 
                          Math.abs(acceleration.z)
        
        if (totalForce > shakeThreshold) {
          undo()
        }
      }
    }

    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleDeviceMotion)
      return () => {
        window.removeEventListener('devicemotion', handleDeviceMotion)
      }
    }
  }, [motionEnabled])

  const handleToggle = (e) => {
    const enabled = e.target.checked
    setMotionEnabled(enabled)
    localStorage.setItem('motionEnabled', enabled.toString())
  }

  return (
    <div>
      <button onClick={undo}>Undo</button>
      <label>
        <input
          type="checkbox"
          checked={motionEnabled}
          onChange={handleToggle}
        />
        Enable shake to undo
      </label>
    </div>
  )
}

// ✅ Good: Game with button controls
function GameControls() {
  const [tiltEnabled, setTiltEnabled] = useState(false)

  useEffect(() => {
    if (!tiltEnabled) return

    const handleOrientation = (e) => {
      const gamma = e.gamma
      if (gamma < -30) moveLeft()
      if (gamma > 30) moveRight()
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation)
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation)
      }
    }
  }, [tiltEnabled])

  return (
    <div>
      <button onClick={moveLeft}>←</button>
      <button onClick={moveRight}>→</button>
      <button onClick={moveUp}>↑</button>
      <button onClick={moveDown}>↓</button>
      <label>
        <input
          type="checkbox"
          checked={tiltEnabled}
          onChange={(e) => setTiltEnabled(e.target.checked)}
        />
        Enable tilt controls
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
  <!-- ✅ Good: Motion with button and disable -->
  <div>
    <button @click="undo">Undo</button>
    <label>
      <input
        type="checkbox"
        v-model="motionEnabled"
        @change="savePreference"
      >
      Enable shake to undo
    </label>
  </div>

  <!-- ✅ Good: Game with buttons -->
  <div>
    <button @click="moveLeft">←</button>
    <button @click="moveRight">→</button>
    <button @click="moveUp">↑</button>
    <button @click="moveDown">↓</button>
    <label>
      <input type="checkbox" v-model="tiltEnabled">
      Enable tilt controls
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const motionEnabled = ref(true)
const tiltEnabled = ref(false)

// Load preference
onMounted(() => {
  const saved = localStorage.getItem('motionEnabled')
  if (saved !== null) {
    motionEnabled.value = saved === 'true'
  }
})

// Motion handler
watch(motionEnabled, (enabled) => {
  if (enabled && window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleDeviceMotion)
  } else {
    window.removeEventListener('devicemotion', handleDeviceMotion)
  }
})

const handleDeviceMotion = (e) => {
  const acceleration = e.accelerationIncludingGravity
  const shakeThreshold = 15
  
  if (acceleration) {
    const totalForce = Math.abs(acceleration.x) + 
                      Math.abs(acceleration.y) + 
                      Math.abs(acceleration.z)
    
    if (totalForce > shakeThreshold) {
      undo()
    }
  }
}

const savePreference = () => {
  localStorage.setItem('motionEnabled', motionEnabled.value.toString())
}

// Tilt handler
watch(tiltEnabled, (enabled) => {
  if (enabled && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation)
  } else {
    window.removeEventListener('deviceorientation', handleOrientation)
  }
})

const handleOrientation = (e) => {
  const gamma = e.gamma
  if (gamma < -30) moveLeft()
  if (gamma > 30) moveRight()
}

onUnmounted(() => {
  window.removeEventListener('devicemotion', handleDeviceMotion)
  window.removeEventListener('deviceorientation', handleOrientation)
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
                  <strong>Button Test:</strong> Verify button controls work without motion
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Disable Test:</strong> Check if motion can be disabled
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Motion Test:</strong> Verify motion works when enabled
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Preference Test:</strong> Check if preference is saved
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
                  <strong>Manual Review:</strong> Requires manual testing of motion controls
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
            <h3 className="font-semibold mb-2">❌ Motion-only controls</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only shake/tilt controls, no button alternative
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always provide button or UI controls as alternative to motion.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No way to disable motion</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Motion controls always active, no disable option
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide settings to disable motion-based controls.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Motion required for essential functions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Critical functions only work with motion
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Essential functions must have non-motion alternatives.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide button/UI alternatives for all motion controls</li>
          <li>✓ Allow users to disable motion-based controls</li>
          <li>✓ Save user preference for motion settings</li>
          <li>✓ Motion should be optional enhancement, not required</li>
          <li>✓ Test on actual devices with motion sensors</li>
          <li>✓ Consider users in moving vehicles</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/2.5.1">
            <Button variant="outline">2.5.1 Pointer Gestures</Button>
          </Link>
          <Link href="/criteria/2.5.2">
            <Button variant="outline">2.5.2 Pointer Cancellation</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

