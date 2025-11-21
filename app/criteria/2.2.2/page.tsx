"use client"

import { CheckCircle2, XCircle, Copy, Check, Pause, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function PauseStopHidePage() {
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
        <span className="text-foreground font-medium">2.2.2 Pause, Stop, Hide</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Enough Time</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.2.2 Pause, Stop, Hide</h1>
        <p className="text-xl text-muted-foreground">
          For moving, blinking, scrolling, or auto-updating information, all of the following are true: Moving, blinking, scrolling: Can be paused, stopped, or hidden. Auto-updating: Can be paused, stopped, or hidden.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Moving, blinking, or auto-updating content can be distracting, cause motion sickness, or interfere with reading. Users with attention disorders, vestibular disorders, or cognitive disabilities need to control this content to use the website effectively.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Pause className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Attention Disorders</h4>
              <p className="text-sm text-muted-foreground">Moving content is distracting</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Play className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Vestibular Disorders</h4>
              <p className="text-sm text-muted-foreground">Motion can cause dizziness or nausea</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Pause className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Reading Difficulties</h4>
              <p className="text-sm text-muted-foreground">Auto-updating content disrupts reading</p>
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
              <h3 className="font-semibold text-lg">❌ No Controls</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <div className="animate-bounce w-16 h-16 mx-auto mb-2 bg-destructive/50 rounded"></div>
                <p className="text-sm text-muted-foreground">Auto-updating content</p>
                <p className="text-xs text-destructive mt-2">No pause/stop button</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Content updates automatically with no way to pause or stop
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              No pause/stop controls provided
            </code>
            <p className="text-sm mt-2">Users cannot control distracting content</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Controls</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-green-600/50 rounded"></div>
                <p className="text-sm font-semibold">Auto-updating content</p>
                <div className="flex gap-2 mt-3 justify-center">
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Pause</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Stop</button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Pause and Stop buttons allow users to control content
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Controls provided for pause/stop/hide
            </code>
            <p className="text-sm mt-2">Users can control when content updates</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Auto-Updating News</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  News ticker updates every 5 seconds, no pause button
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Pause button stops updates, user can resume when ready
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need to read content without interruptions.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📊 Live Data Feeds</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Stock prices update continuously, no way to pause
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Pause/Resume button controls auto-updates
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control when data refreshes.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎬 Carousel/Slideshow</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Images rotate automatically, no pause control
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Pause button stops rotation, users can navigate manually
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need time to read each slide.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💬 Chat Messages</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  New messages appear automatically, no pause option
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Option to pause auto-updates or disable notifications
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should control when new content appears.
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
                {`<!-- ✅ Good: Auto-updating content with controls -->
<div id="news-ticker">
  <div id="ticker-content">Latest news updates...</div>
  <div class="controls">
    <button id="pause-btn" onclick="pauseTicker()" aria-label="Pause updates">Pause</button>
    <button id="stop-btn" onclick="stopTicker()" aria-label="Stop updates">Stop</button>
  </div>
</div>

<!-- ✅ Good: Carousel with pause -->
<div class="carousel">
  <div class="slides">...</div>
  <button onclick="pauseCarousel()" aria-label="Pause slideshow">Pause</button>
</div>

<!-- ✅ Good: Auto-updating data with controls -->
<div id="live-data">
  <div id="data-content">Loading...</div>
  <button onclick="toggleAutoUpdate()">Toggle Auto-Update</button>
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
                {`// ✅ Good: Auto-updating content with pause/stop
let updateInterval = null
let isPaused = false

function startAutoUpdate() {
  if (updateInterval) return
  
  updateInterval = setInterval(() => {
    if (!isPaused) {
      updateContent()
    }
  }, 5000) // Update every 5 seconds
}

function pauseTicker() {
  isPaused = true
  document.getElementById('pause-btn').textContent = 'Resume'
  document.getElementById('pause-btn').onclick = resumeTicker
  document.getElementById('pause-btn').setAttribute('aria-label', 'Resume updates')
}

function resumeTicker() {
  isPaused = false
  document.getElementById('pause-btn').textContent = 'Pause'
  document.getElementById('pause-btn').onclick = pauseTicker
  document.getElementById('pause-btn').setAttribute('aria-label', 'Pause updates')
}

function stopTicker() {
  if (updateInterval) {
    clearInterval(updateInterval)
    updateInterval = null
  }
  isPaused = false
  document.getElementById('pause-btn').disabled = true
  document.getElementById('stop-btn').disabled = true
}

function hideContent() {
  document.getElementById('ticker-content').style.display = 'none'
  pauseTicker()
}

// Start on page load
window.addEventListener('load', () => {
  startAutoUpdate()
})

// ✅ Good: Carousel with pause
let carouselInterval = null
let carouselPaused = false

function startCarousel() {
  carouselInterval = setInterval(() => {
    if (!carouselPaused) {
      nextSlide()
    }
  }, 3000)
}

function pauseCarousel() {
  carouselPaused = true
  const btn = document.getElementById('carousel-pause')
  btn.textContent = 'Resume'
  btn.onclick = resumeCarousel
}

function resumeCarousel() {
  carouselPaused = false
  const btn = document.getElementById('carousel-pause')
  btn.textContent = 'Pause'
  btn.onclick = pauseCarousel
}

// ✅ Good: Respect prefers-reduced-motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  pauseTicker()
  pauseCarousel()
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
                {`// ✅ Good: Auto-updating component with controls
import { useState, useEffect, useRef } from 'react'

function AutoUpdatingContent() {
  const [content, setContent] = useState('Loading...')
  const [isPaused, setIsPaused] = useState(false)
  const [isStopped, setIsStopped] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isStopped) return

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        fetchContent().then(setContent)
      }
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, isStopped])

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsPaused(true)
    }
  }, [])

  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)
  const stop = () => {
    setIsStopped(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div>
      <div>{content}</div>
      <div>
        <button 
          onClick={isPaused ? resume : pause}
          aria-label={isPaused ? 'Resume updates' : 'Pause updates'}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          onClick={stop}
          aria-label="Stop updates"
          disabled={isStopped}
        >
          Stop
        </button>
      </div>
    </div>
  )
}

// ✅ Good: Carousel with pause
function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isPaused) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, slides.length])

  return (
    <div>
      <div className="slide">{slides[currentIndex]}</div>
      <button 
        onClick={() => setIsPaused(!isPaused)}
        aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
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
  <!-- ✅ Good: Auto-updating with controls -->
  <div>
    <div>{{ content }}</div>
    <div>
      <button 
        @click="togglePause"
        :aria-label="isPaused ? 'Resume updates' : 'Pause updates'"
      >
        {{ isPaused ? 'Resume' : 'Pause' }}
      </button>
      <button 
        @click="stop"
        aria-label="Stop updates"
        :disabled="isStopped"
      >
        Stop
      </button>
    </div>
  </div>

  <!-- ✅ Good: Carousel with pause -->
  <div class="carousel">
    <div class="slide">{{ slides[currentIndex] }}</div>
    <button 
      @click="togglePause"
      :aria-label="isPaused ? 'Resume slideshow' : 'Pause slideshow'"
    >
      {{ isPaused ? 'Resume' : 'Pause' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const content = ref('Loading...')
const isPaused = ref(false)
const isStopped = ref(false)
const currentIndex = ref(0)
const slides = ref([...])
let updateInterval = null

const fetchContent = async () => {
  // Fetch logic
  content.value = 'New content'
}

const togglePause = () => {
  isPaused.value = !isPaused.value
}

const stop = () => {
  isStopped.value = true
  if (updateInterval) {
    clearInterval(updateInterval)
  }
}

onMounted(() => {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isPaused.value = true
  }

  updateInterval = setInterval(() => {
    if (!isPaused.value && !isStopped.value) {
      fetchContent()
    }
  }, 5000)

  // Carousel auto-advance
  setInterval(() => {
    if (!isPaused.value) {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length
    }
  }, 3000)
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
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
                  <strong>Pause Test:</strong> Verify pause button stops content updates
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Stop Test:</strong> Check that stop button permanently stops updates
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Resume Test:</strong> Verify resume button restarts updates
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Keyboard Access:</strong> Ensure controls are keyboard accessible
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Reduced Motion:</strong> Test with prefers-reduced-motion enabled
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
                  <strong>axe DevTools:</strong> Can detect some auto-updating content issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies moving/blinking content
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual testing is most reliable for this criterion
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
            <h3 className="font-semibold mb-2">❌ No pause/stop controls</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Auto-updating content with no way to control it
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always provide pause, stop, or hide controls for auto-updating content.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Controls not keyboard accessible</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Pause button only works with mouse
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Ensure all controls are keyboard accessible and have proper ARIA labels.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Not respecting prefers-reduced-motion</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Content moves even when user prefers reduced motion
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Check prefers-reduced-motion media query and pause content automatically.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide pause, stop, or hide controls for all auto-updating content</li>
          <li>✓ Ensure controls are keyboard accessible</li>
          <li>✓ Respect prefers-reduced-motion media query</li>
          <li>✓ Use clear labels (Pause/Resume, Stop)</li>
          <li>✓ Make controls visible and easy to find</li>
          <li>✓ Test with users who have motion sensitivity</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.2.1">
            <Button variant="outline">2.2.1 Timing Adjustable</Button>
          </Link>
          <Link href="/criteria/2.3.1">
            <Button variant="outline">2.3.1 Three Flashes</Button>
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

