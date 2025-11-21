"use client"

import { CheckCircle2, XCircle, Copy, Check, MousePointer, Hand } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function PointerCancellationPage() {
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
        <span className="text-foreground font-medium">2.5.2 Pointer Cancellation</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Input Modalities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.5.2 Pointer Cancellation</h1>
        <p className="text-xl text-muted-foreground">
          For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event, Abort or Undo, Up Reversal, Essential.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Users with motor disabilities, tremors, or limited dexterity may accidentally press buttons or links. If actions trigger on the "mousedown" or "touchstart" event, users cannot cancel by moving their pointer away before releasing. Actions should trigger on "mouseup" or "touchend" so users can cancel by releasing outside the target.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">May press buttons accidentally</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MousePointer className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Tremors</h4>
              <p className="text-sm text-muted-foreground">Unintentional pointer movements</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Hand className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Limited Dexterity</h4>
              <p className="text-sm text-muted-foreground">Difficulty with precise clicks</p>
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
              <h3 className="font-semibold text-lg">❌ Triggers on Down</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <MousePointer className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Delete Button</p>
                <p className="text-xs text-destructive mt-2">Action triggers on mousedown</p>
                <p className="text-xs text-destructive">Cannot cancel</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Action triggers immediately on press, no way to cancel
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`button.addEventListener('mousedown', deleteItem)`}
            </code>
            <p className="text-sm mt-2">Users cannot move pointer away to cancel</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Triggers on Up</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <MousePointer className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Delete Button</p>
                <p className="text-xs text-green-600 mt-2">Action triggers on mouseup</p>
                <p className="text-xs text-green-600">Can cancel by releasing outside</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Action triggers on release, user can move away to cancel
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`button.addEventListener('mouseup', deleteItem)`}
            </code>
            <p className="text-sm mt-2">Users can cancel by releasing outside button</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🗑️ Delete Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Delete triggers on mousedown/touchstart
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Delete triggers on mouseup/touchend, or has confirmation
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to cancel accidental deletions.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📤 Submit Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Form submits on mousedown
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Form submits on mouseup or click event
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to cancel form submission.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔘 Toggle Buttons</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Toggle state changes on touchstart
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Toggle changes on touchend or click
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to cancel toggle actions.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">↩️ Undo Functionality</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Action triggers on down, no undo available
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Action triggers on up, or undo option available
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to reverse accidental actions.
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
                {`<!-- ✅ Good: Use click event (triggers on up) -->
<button onclick="deleteItem()">Delete</button>

<!-- ✅ Good: Form with submit on click -->
<form onsubmit="handleSubmit(event)">
  <input type="text" name="email">
  <button type="submit">Submit</button>
</form>

<!-- ✅ Good: Toggle with click -->
<button onclick="toggleFeature()">Toggle Feature</button>

<!-- Note: onclick and form submit naturally trigger on mouseup/touchend -->`}
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
                {`// ❌ Bad: Triggers on mousedown
button.addEventListener('mousedown', () => {
  deleteItem() // Triggers immediately, cannot cancel
})

// ✅ Good: Triggers on mouseup/click
button.addEventListener('click', () => {
  deleteItem() // User can move pointer away before release
})

// ✅ Good: Track pointer position
let pointerDown = false
let pointerOnButton = false

button.addEventListener('mousedown', (e) => {
  pointerDown = true
  pointerOnButton = true
})

button.addEventListener('mouseleave', () => {
  if (pointerDown) {
    pointerOnButton = false // User moved away
  }
})

button.addEventListener('mouseup', () => {
  if (pointerDown && pointerOnButton) {
    deleteItem() // Only trigger if still on button
  }
  pointerDown = false
  pointerOnButton = false
})

// ✅ Good: Touch events
button.addEventListener('touchstart', (e) => {
  pointerDown = true
  pointerOnButton = true
})

button.addEventListener('touchend', (e) => {
  if (pointerDown && pointerOnButton) {
    deleteItem()
  }
  pointerDown = false
  pointerOnButton = false
})

button.addEventListener('touchcancel', () => {
  pointerDown = false
  pointerOnButton = false
})

// ✅ Good: With undo functionality
let lastAction = null

function deleteItem() {
  lastAction = { type: 'delete', item: currentItem }
  // Perform delete
}

function undo() {
  if (lastAction) {
    // Restore deleted item
    lastAction = null
  }
}

// ✅ Good: Confirmation dialog
button.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete?')) {
    deleteItem()
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
                {`// ✅ Good: Using onClick (triggers on mouseup)
function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete}>
      Delete
    </button>
  )
}

// ✅ Good: Track pointer position
import { useState, useRef } from 'react'

function CancelableButton({ onAction }) {
  const [pointerDown, setPointerDown] = useState(false)
  const [pointerOnButton, setPointerOnButton] = useState(false)
  const buttonRef = useRef(null)

  const handleMouseDown = () => {
    setPointerDown(true)
    setPointerOnButton(true)
  }

  const handleMouseLeave = () => {
    if (pointerDown) {
      setPointerOnButton(false)
    }
  }

  const handleMouseUp = () => {
    if (pointerDown && pointerOnButton) {
      onAction()
    }
    setPointerDown(false)
    setPointerOnButton(false)
  }

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchCancel={() => {
        setPointerDown(false)
        setPointerOnButton(false)
      }}
    >
      Action
    </button>
  )
}

// ✅ Good: With undo
function ActionButton() {
  const [lastAction, setLastAction] = useState(null)

  const handleAction = () => {
    setLastAction({ type: 'action', data: '...' })
    performAction()
  }

  const undo = () => {
    if (lastAction) {
      reverseAction(lastAction)
      setLastAction(null)
    }
  }

  return (
    <>
      <button onClick={handleAction}>Action</button>
      {lastAction && (
        <button onClick={undo}>Undo</button>
      )}
  )
}

// ✅ Good: Confirmation
function DeleteButton({ onDelete }) {
  const handleClick = () => {
    if (confirm('Are you sure?')) {
      onDelete()
    }
  }

  return <button onClick={handleClick}>Delete</button>
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
  <!-- ✅ Good: Using @click (triggers on mouseup) -->
  <button @click="deleteItem">Delete</button>

  <!-- ✅ Good: Track pointer position -->
  <button
    @mousedown="handleMouseDown"
    @mouseleave="handleMouseLeave"
    @mouseup="handleMouseUp"
    @touchstart="handleMouseDown"
    @touchend="handleMouseUp"
    @touchcancel="handleCancel"
  >
    Action
  </button>

  <!-- ✅ Good: With undo -->
  <div>
    <button @click="performAction">Action</button>
    <button v-if="lastAction" @click="undo">Undo</button>
  </div>

  <!-- ✅ Good: Confirmation -->
  <button @click="handleDelete">Delete</button>
</template>

<script setup>
import { ref } from 'vue'

// Simple click handler
const deleteItem = () => {
  // Delete logic
}

// Track pointer position
const pointerDown = ref(false)
const pointerOnButton = ref(false)

const handleMouseDown = () => {
  pointerDown.value = true
  pointerOnButton.value = true
}

const handleMouseLeave = () => {
  if (pointerDown.value) {
    pointerOnButton.value = false
  }
}

const handleMouseUp = () => {
  if (pointerDown.value && pointerOnButton.value) {
    performAction()
  }
  pointerDown.value = false
  pointerOnButton.value = false
}

const handleCancel = () => {
  pointerDown.value = false
  pointerOnButton.value = false
}

// With undo
const lastAction = ref(null)

const performAction = () => {
  lastAction.value = { type: 'action', data: '...' }
  // Action logic
}

const undo = () => {
  if (lastAction.value) {
    reverseAction(lastAction.value)
    lastAction.value = null
  }
}

// Confirmation
const handleDelete = () => {
  if (confirm('Are you sure?')) {
    deleteItem()
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
                  <strong>Press and Drag:</strong> Press button, drag pointer away, release
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Cancel Test:</strong> Verify action doesn't trigger if released outside
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Touch Test:</strong> Test on touch devices with touchstart/touchend
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Undo Test:</strong> Check if undo is available for critical actions
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
                  <strong>Manual Review:</strong> Requires manual testing of pointer events
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
            <h3 className="font-semibold mb-2">❌ Triggering on mousedown/touchstart</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`button.addEventListener('mousedown', action)`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use click, mouseup, or touchend events instead.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No way to cancel actions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Critical actions trigger immediately with no undo
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide undo functionality or confirmation dialogs for critical actions.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Not handling touchcancel</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Touch events don't handle cancellation
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Handle touchcancel event to reset state when touch is interrupted.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use click, mouseup, or touchend events instead of mousedown/touchstart</li>
          <li>✓ Track pointer position to allow cancellation</li>
          <li>✓ Provide undo functionality for critical actions</li>
          <li>✓ Handle touchcancel event for touch interactions</li>
          <li>✓ Test by pressing and dragging away before releasing</li>
          <li>✓ Consider confirmation dialogs for destructive actions</li>
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
          <Link href="/criteria/3.3.4">
            <Button variant="outline">3.3.4 Error Prevention</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

