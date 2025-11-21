"use client"

import { CheckCircle2, XCircle, Copy, Check, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ThreeFlashesPage() {
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
        <span className="text-foreground font-medium">2.3.1 Three Flashes or Below Threshold</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Seizures and Physical Reactions</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.3.1 Three Flashes or Below Threshold</h1>
        <p className="text-xl text-muted-foreground">
          Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Flashing content can trigger seizures in people with photosensitive epilepsy. Even content that flashes less than 3 times per second can be dangerous if it's bright enough or covers a large area. This criterion protects users from potentially life-threatening content.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Photosensitive Epilepsy</h4>
              <p className="text-sm text-muted-foreground">Flashing can trigger seizures</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Vestibular Disorders</h4>
              <p className="text-sm text-muted-foreground">Flashing can cause dizziness</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Migraine Triggers</h4>
              <p className="text-sm text-muted-foreground">Flashing can trigger migraines</p>
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
              <h3 className="font-semibold text-lg">❌ Dangerous Flashing</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-red-600 rounded animate-pulse"></div>
                <p className="text-sm text-muted-foreground">Flashing 5 times per second</p>
                <p className="text-xs text-destructive mt-2">Exceeds 3 flashes/second limit</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Content flashes more than 3 times per second
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`animation: flash 0.2s infinite; // 5 flashes/second`}
            </code>
            <p className="text-sm mt-2">Can trigger seizures in photosensitive users</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Safe Content</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-green-600 rounded"></div>
                <p className="text-sm font-semibold">No flashing</p>
                <p className="text-xs text-green-600 mt-2">Or flashes less than 3/second</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> No flashing, or flashes at safe rate (≤3/second)
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`animation: fade 0.4s infinite; // 2.5 flashes/second`}
            </code>
            <p className="text-sm mt-2">Safe for all users</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⚠️ Alert Animations</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Error message flashes 10 times per second
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Alert pulses slowly (2 times/second) or uses color change
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Flashing alerts can trigger seizures.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎬 Video Content</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Video with rapid flashing scenes
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Warning before flashing content, option to skip
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be warned about flashing content.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Background Effects</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Animated background flashes rapidly
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Subtle animation or static background
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Background flashing affects entire viewport.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔔 Notification Badges</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Notification badge flashes 5 times/second
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Slow pulse (2/second) or static indicator
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Even small flashing elements can be dangerous.
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
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="js">JavaScript</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
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
                {`<!-- ❌ Bad: Rapid flashing -->
<div class="alert flash-fast">Error message</div>

<!-- ✅ Good: Slow pulse (safe rate) -->
<div class="alert pulse-slow">New notification</div>

<!-- ✅ Good: No flashing, just color change -->
<div class="alert color-change">Status update</div>

<!-- ✅ Good: Warning for flashing content -->
<video>
  <source src="video-with-flashing.mp4">
  <p>Warning: This video contains flashing content</p>
</video>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("CSS code", "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`/* ❌ Bad: Flashes 5 times per second (dangerous) */
.flash-fast {
  animation: flash 0.2s infinite;
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ✅ Good: Flashes 2 times per second (safe) */
.pulse-slow {
  animation: pulse 0.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* ✅ Good: No flashing, just color transition */
.color-change {
  transition: background-color 0.3s;
  background-color: blue;
}

.color-change:hover {
  background-color: red;
}

/* ✅ Good: Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .pulse-slow {
    animation: none;
  }
}

/* ✅ Good: Fade instead of flash */
.fade-in-out {
  animation: fade 2s infinite;
}

@keyframes fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`}
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
                {`// ❌ Bad: Rapid flashing (dangerous)
function flashAlert() {
  setInterval(() => {
    element.style.opacity = element.style.opacity === '1' ? '0' : '1'
  }, 200) // 5 flashes per second - DANGEROUS
}

// ✅ Good: Slow pulse (safe)
function pulseAlert() {
  setInterval(() => {
    element.style.opacity = element.style.opacity === '1' ? '0.7' : '1'
  }, 500) // 2 flashes per second - SAFE
}

// ✅ Good: Check flash rate
function checkFlashRate(flashDuration) {
  const flashesPerSecond = 1000 / flashDuration
  if (flashesPerSecond > 3) {
    console.warn('Flash rate exceeds 3/second - may trigger seizures')
    return false
  }
  return true
}

// ✅ Good: Respect prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable all animations
  document.querySelectorAll('[class*="animate"]').forEach(el => {
    el.style.animation = 'none'
  })
}

// ✅ Good: Warning for flashing content
function showVideoWithWarning(videoSrc) {
  if (confirm('This video contains flashing content. Continue?')) {
    playVideo(videoSrc)
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
                {`// ✅ Good: Safe animation component
import { useEffect, useState } from 'react'

function SafeAlert({ message }) {
  const [opacity, setOpacity] = useState(1)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return

    // Safe: 2 flashes per second (0.5s interval)
    const interval = setInterval(() => {
      setOpacity(prev => prev === 1 ? 0.7 : 1)
    }, 500)

    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <div 
      className="alert"
      style={{ opacity }}
    >
      {message}
    </div>
  )
}

// ✅ Good: Video with warning
function VideoWithWarning({ src, hasFlashing }) {
  const [showWarning, setShowWarning] = useState(hasFlashing)

  if (showWarning) {
    return (
      <div>
        <p>Warning: This video contains flashing content</p>
        <button onClick={() => setShowWarning(false)}>Continue</button>
        <button onClick={() => setShowWarning(false)}>Skip</button>
      </div>
    )
  }

  return <video src={src} controls />
}

// ✅ Good: Check animation rate
function useSafeAnimation(duration) {
  const flashesPerSecond = 1000 / duration
  
  if (flashesPerSecond > 3) {
    console.warn('Animation rate exceeds safe limit')
    return duration * 1.5 // Slow it down
  }
  
  return duration
}`}
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
                  <strong>Visual Inspection:</strong> Look for any flashing or blinking content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Count Flashes:</strong> Count flashes in a 1-second period
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Rate Check:</strong> Verify no more than 3 flashes per second
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Area Check:</strong> Verify flashing doesn't cover large area
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Red Flash:</strong> Check for red flashing (stricter limits)
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
                  <strong>PEAT Tool:</strong> Photosensitive Epilepsy Analysis Tool can detect flashing
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Can detect some flashing content issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual visual inspection is most reliable
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
            <h3 className="font-semibold mb-2">❌ Rapid flashing animations</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`animation: flash 0.2s infinite; // 5 flashes/second`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Keep flash rate at 3 per second or less. Use slower animations (0.4s+ intervals).
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Large area flashing</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Entire background or large section flashes
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Even slow flashing over large areas can be dangerous. Avoid flashing backgrounds.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Red flashing content</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Red color flashing has stricter limits
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Red flashing is more dangerous. Use even slower rates or avoid red flashing entirely.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Never exceed 3 flashes per second</li>
          <li>✓ Use fade/pulse effects instead of on/off flashing</li>
          <li>✓ Avoid flashing large areas of the screen</li>
          <li>✓ Be extra careful with red flashing content</li>
          <li>✓ Provide warnings for any flashing content</li>
          <li>✓ Respect prefers-reduced-motion preference</li>
          <li>✓ Test with PEAT tool if available</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.2.2">
            <Button variant="outline">2.2.2 Pause, Stop, Hide</Button>
          </Link>
          <Link href="/criteria/2.3.2">
            <Button variant="outline">2.3.2 Three Flashes (AAA)</Button>
          </Link>
          <Link href="/criteria/2.3.3">
            <Button variant="outline">2.3.3 Animation from Interactions</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

