"use client"

import { CheckCircle2, XCircle, Copy, Check, Hand, Mouse } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function PointerGesturesPage() {
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
        <span className="text-foreground font-medium">2.5.1 Pointer Gestures</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.1 Pointer Gestures</h1>
        <p className="text-xl text-muted-foreground">
          All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Complex gestures like pinch-to-zoom, swipe, or multi-touch gestures are difficult or impossible for users with motor disabilities, users with limited dexterity, or those using assistive technologies like head pointers or eye tracking. Every function should be accessible with a simple single-pointer action (like a click or tap).
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Cannot perform complex gestures</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mouse className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Assistive Technologies</h4>
              <p className="text-sm text-muted-foreground">Head pointers, eye trackers need simple actions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Limited Dexterity</h4>
              <p className="text-sm text-muted-foreground">Struggle with precise multi-touch</p>
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
              <h3 className="font-semibold text-lg">❌ Complex Gesture Only</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Hand className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Pinch to zoom</p>
                <p className="text-xs text-destructive mt-2">No alternative provided</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Only pinch-to-zoom available, no button alternative
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Requires two-finger pinch gesture
            </code>
            <p className="text-sm mt-2">Users with motor disabilities cannot access</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Simple Alternative</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Mouse className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Zoom Controls</p>
                <div className="flex gap-2 mt-3 justify-center">
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">+</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">-</button>
                </div>
                <p className="text-xs text-green-600 mt-2">Or pinch to zoom</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Zoom buttons provide single-pointer alternative
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Both gesture and button controls available
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
            <h3 className="text-xl font-semibold mb-3">📱 Swipe Gestures</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Carousel only works with swipe gesture
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Previous/Next buttons provide single-tap alternative
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should navigate with buttons, not just swipes.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔍 Pinch to Zoom</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Image zoom only works with pinch gesture
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Zoom in/out buttons or double-tap to zoom
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Single-pointer alternatives must be available.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔄 Drag and Drop</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Reordering items requires drag gesture
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Up/Down arrow buttons to reorder
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Provide button controls for drag operations.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">👆 Multi-Touch</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Requires two-finger tap or three-finger swipe
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Single-tap button provides same functionality
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> All functions should work with single pointer.
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
                {`<!-- ✅ Good: Carousel with button controls -->
<div class="carousel">
  <div class="slides">...</div>
  <button onclick="previousSlide()" aria-label="Previous slide">←</button>
  <button onclick="nextSlide()" aria-label="Next slide">→</button>
</div>
<!-- Swipe gesture also works, but buttons provide alternative -->

<!-- ✅ Good: Zoom with buttons -->
<div class="image-viewer">
  <img src="image.jpg" alt="Product photo">
  <div class="zoom-controls">
    <button onclick="zoomIn()" aria-label="Zoom in">+</button>
    <button onclick="zoomOut()" aria-label="Zoom out">-</button>
    <button onclick="resetZoom()" aria-label="Reset zoom">Reset</button>
  </div>
</div>
<!-- Pinch gesture also works, but buttons provide alternative -->

<!-- ✅ Good: Drag and drop with buttons -->
<div class="sortable-list">
  <div class="item">
    Item 1
    <button onclick="moveUp()" aria-label="Move up">↑</button>
    <button onclick="moveDown()" aria-label="Move down">↓</button>
  </div>
</div>
<!-- Drag also works, but buttons provide alternative -->`}
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
                {`// ✅ Good: Carousel with both gesture and buttons
let currentSlide = 0

// Button controls (single pointer)
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  updateCarousel()
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  updateCarousel()
}

// Swipe gesture (optional enhancement)
let touchStartX = 0
let touchEndX = 0

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX
})

carousel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide() // Swipe left
  }
  if (touchEndX > touchStartX + 50) {
    previousSlide() // Swipe right
  }
}

// ✅ Good: Zoom with buttons
let zoomLevel = 1

function zoomIn() {
  zoomLevel = Math.min(zoomLevel + 0.1, 3)
  updateZoom()
}

function zoomOut() {
  zoomLevel = Math.max(zoomLevel - 0.1, 0.5)
  updateZoom()
}

function resetZoom() {
  zoomLevel = 1
  updateZoom()
}

function updateZoom() {
  image.style.transform = \`scale(\${zoomLevel})\`
}

// Pinch gesture (optional enhancement)
let initialDistance = 0

image.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    initialDistance = getDistance(e.touches[0], e.touches[1])
  }
})

image.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2) {
    const currentDistance = getDistance(e.touches[0], e.touches[1])
    const scale = currentDistance / initialDistance
    zoomLevel = scale
    updateZoom()
  }
})

// ✅ Good: Drag and drop with buttons
function moveUp(index) {
  if (index > 0) {
    swapItems(index, index - 1)
  }
}

function moveDown(index) {
  if (index < items.length - 1) {
    swapItems(index, index + 1)
  }
}

// Drag (optional enhancement)
let draggedElement = null

item.addEventListener('dragstart', (e) => {
  draggedElement = e.target
})

item.addEventListener('drop', (e) => {
  if (draggedElement) {
    swapItems(draggedElement.index, e.target.index)
  }
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
                {`// ✅ Good: Carousel with button controls
import { useState } from 'react'

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length)
  }

  // Swipe gesture (optional)
  const handleSwipe = (direction) => {
    if (direction === 'left') nextSlide()
    if (direction === 'right') previousSlide()
  }

  return (
    <div className="carousel">
      <div className="slide">{slides[currentIndex]}</div>
      <button onClick={previousSlide} aria-label="Previous slide">
        ←
      </button>
      <button onClick={nextSlide} aria-label="Next slide">
        →
      </button>
    </div>
  )
}

// ✅ Good: Zoom with buttons
function ImageViewer({ src, alt }) {
  const [zoom, setZoom] = useState(1)

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3))
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5))
  const resetZoom = () => setZoom(1)

  return (
    <div>
      <img 
        src={src} 
        alt={alt}
        style={{ transform: \`scale(\${zoom})\` }}
      />
      <div>
        <button onClick={zoomIn} aria-label="Zoom in">+</button>
        <button onClick={zoomOut} aria-label="Zoom out">-</button>
        <button onClick={resetZoom} aria-label="Reset zoom">Reset</button>
      </div>
    </div>
  )
}

// ✅ Good: Sortable list with buttons
function SortableList({ items }) {
  const [list, setList] = useState(items)

  const moveUp = (index) => {
    if (index > 0) {
      const newList = [...list]
      [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]]
      setList(newList)
    }
  }

  const moveDown = (index) => {
    if (index < list.length - 1) {
      const newList = [...list]
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]]
      setList(newList)
    }
  }

  return (
    <ul>
      {list.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => moveUp(index)} aria-label="Move up">↑</button>
          <button onClick={() => moveDown(index)} aria-label="Move down">↓</button>
        </li>
      ))}
    </ul>
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
  <!-- ✅ Good: Carousel with buttons -->
  <div class="carousel">
    <div class="slide">{{ slides[currentIndex] }}</div>
    <button @click="previousSlide" aria-label="Previous slide">←</button>
    <button @click="nextSlide" aria-label="Next slide">→</button>
  </div>

  <!-- ✅ Good: Zoom with buttons -->
  <div class="image-viewer">
    <img 
      :src="imageSrc" 
      :alt="imageAlt"
      :style="{ transform: \`scale(\${zoom})\` }"
    />
    <div>
      <button @click="zoomIn" aria-label="Zoom in">+</button>
      <button @click="zoomOut" aria-label="Zoom out">-</button>
      <button @click="resetZoom" aria-label="Reset zoom">Reset</button>
    </div>
  </div>

  <!-- ✅ Good: Sortable with buttons -->
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ item.name }}
      <button @click="moveUp(index)" aria-label="Move up">↑</button>
      <button @click="moveDown(index)" aria-label="Move down">↓</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

// Carousel
const currentIndex = ref(0)
const slides = ref([...])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const previousSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

// Zoom
const zoom = ref(1)

const zoomIn = () => {
  zoom.value = Math.min(zoom.value + 0.1, 3)
}

const zoomOut = () => {
  zoom.value = Math.max(zoom.value - 0.1, 0.5)
}

const resetZoom = () => {
  zoom.value = 1
}

// Sortable
const items = ref([...])

const moveUp = (index) => {
  if (index > 0) {
    [items.value[index], items.value[index - 1]] = 
    [items.value[index - 1], items.value[index]]
  }
}

const moveDown = (index) => {
  if (index < items.value.length - 1) {
    [items.value[index], items.value[index + 1]] = 
    [items.value[index + 1], items.value[index]]
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
                  <strong>Single Pointer:</strong> Test all functions with single click/tap
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Button Controls:</strong> Verify buttons exist for gesture functions
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Keyboard:</strong> Test button controls with keyboard
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Mouse Only:</strong> Verify functions work with mouse clicks
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Touch Only:</strong> Test with single-finger tap
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
                  <strong>Manual Review:</strong> Requires manual testing of gesture alternatives
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
            <h3 className="font-semibold mb-2">❌ Requiring pinch-to-zoom without buttons</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Image zoom only works with two-finger pinch
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide zoom in/out buttons or double-tap alternative.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Swipe-only navigation</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Carousel only advances with swipe gesture
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Add Previous/Next buttons for single-pointer access.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Drag-and-drop only</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Reordering requires drag gesture
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide Up/Down arrow buttons or other single-pointer controls.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide single-pointer alternatives for all gesture functions</li>
          <li>✓ Use buttons for zoom, navigation, and reordering</li>
          <li>✓ Gestures can be optional enhancements, but not required</li>
          <li>✓ Test with mouse only and touch only</li>
          <li>✓ Ensure button controls are keyboard accessible</li>
          <li>✓ Consider users with assistive pointing devices</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/2.5.2">
            <Button variant="outline">2.5.2 Pointer Cancellation</Button>
          </Link>
          <Link href="/criteria/2.5.7">
            <Button variant="outline">2.5.7 Dragging Movements</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

