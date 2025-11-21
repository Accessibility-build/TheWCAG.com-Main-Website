"use client"

import { CheckCircle2, XCircle, Copy, Check, Lock, Unlock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function NoKeyboardTrapPage() {
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
        <span className="text-foreground font-medium">2.1.2 No Keyboard Trap</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Keyboard Accessible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.1.2 No Keyboard Trap</h1>
        <p className="text-xl text-muted-foreground">
          If keyboard focus can be moved to a component, focus can be moved away from that component using only a keyboard interface.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Keyboard traps occur when users can tab into a component but cannot tab out of it. This is a critical accessibility issue that completely blocks keyboard users from accessing the rest of the page. Common causes include modals, dropdowns, or custom widgets that don't properly handle focus management.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Keyboard Users</h4>
              <p className="text-sm text-muted-foreground">Cannot escape trapped components</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Unlock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Screen Reader Users</h4>
              <p className="text-sm text-muted-foreground">Rely entirely on keyboard navigation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Cannot use mouse to escape</p>
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
              <h3 className="font-semibold text-lg">❌ Keyboard Trap</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Lock className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Modal dialog</p>
                <p className="text-xs text-destructive mt-2">Tab key doesn't escape</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Focus trapped inside modal, no way to close with keyboard
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Missing Escape key handler or focus trap release
            </code>
            <p className="text-sm mt-2">Users must refresh page to escape</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ No Keyboard Trap</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Unlock className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Modal dialog</p>
                <p className="text-xs text-green-600 mt-2">Escape key closes, Tab cycles within</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Escape key closes modal, Tab cycles within, Shift+Tab works
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Proper focus management with Escape handler
            </code>
            <p className="text-sm mt-2">Users can always navigate away</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🔒 Modal Dialogs</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Modal opens but Tab key doesn't work, no Escape handler
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Escape closes modal, Tab cycles within, focus returns on close
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users must be able to close modals and return to page content.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📋 Dropdown Menus</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Dropdown opens, Tab key trapped inside menu
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Escape closes dropdown, Tab moves to next page element
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should navigate away from dropdowns easily.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎨 Custom Widgets</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Custom slider or date picker traps focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Tab moves focus out, Escape closes widget if applicable
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> All widgets must allow keyboard navigation away.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🖼️ Embedded Content</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  iframe or embedded content traps focus
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Tab moves focus out of iframe to parent page
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Embedded content should not prevent page navigation.
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
                {`<!-- ✅ Good: Modal with proper focus management -->
<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Action</h2>
  <p>Are you sure you want to continue?</p>
  <button onclick="closeModal()">Cancel</button>
  <button onclick="confirmAction()">Confirm</button>
  <button onclick="closeModal()" aria-label="Close dialog">×</button>
</div>

<!-- Ensure Escape key and Tab work properly via JavaScript -->`}
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
                {`// ✅ Good: Modal with proper focus management
let previousFocus = null

function openModal() {
  const modal = document.getElementById('modal')
  previousFocus = document.activeElement
  modal.style.display = 'block'
  modal.focus()
  
  // Trap focus within modal
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  // Handle Tab key
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
    
    // Handle Escape key
    if (e.key === 'Escape') {
      closeModal()
    }
  })
}

function closeModal() {
  const modal = document.getElementById('modal')
  modal.style.display = 'none'
  if (previousFocus) {
    previousFocus.focus()
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
                {`// ✅ Good: Modal with focus trap
import { useEffect, useRef } from 'react'

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      const modal = modalRef.current
      
      // Focus first element
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
      
      // Handle Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      // Handle Tab key (focus trap)
      const handleTab = (e) => {
        if (e.key !== 'Tab') return
        const focusableElements = Array.from(modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ))
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
      
      modal.addEventListener('keydown', handleEscape)
      modal.addEventListener('keydown', handleTab)
      
      return () => {
        modal.removeEventListener('keydown', handleEscape)
        modal.removeEventListener('keydown', handleTab)
        if (previousFocusRef.current) {
          previousFocusRef.current.focus()
        }
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      className="modal"
    >
      {children}
      <button onClick={onClose} aria-label="Close dialog">×</button>
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
  <div
    v-if="isOpen"
    ref="modalRef"
    role="dialog"
    aria-modal="true"
    class="modal"
    @keydown.esc="closeModal"
    @keydown.tab="handleTab"
  >
    <slot></slot>
    <button @click="closeModal" aria-label="Close dialog">×</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const modalRef = ref(null)
const previousFocus = ref(null)

const closeModal = () => {
  emit('close')
  if (previousFocus.value) {
    previousFocus.value.focus()
  }
}

const handleTab = (e) => {
  const modal = modalRef.value
  const focusableElements = Array.from(modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ))
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    }
  } else {
    if (document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    previousFocus.value = document.activeElement
    const modal = modalRef.value
    const focusableElements = Array.from(modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ))
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
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
                  <strong>Tab Navigation:</strong> Tab into component, then try to Tab out
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Escape Key:</strong> Press Escape to see if component closes or releases focus
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Shift+Tab:</strong> Test reverse navigation works
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus Return:</strong> After closing, verify focus returns to trigger element
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
                  <strong>axe DevTools:</strong> Can detect some keyboard trap patterns
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies potential focus trap issues
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual testing is most reliable for keyboard traps
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
            <h3 className="font-semibold mb-2">❌ Modal without Escape key handler</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Users cannot close modal with keyboard
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Always implement Escape key to close modals and release focus.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Focus not returned after closing</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Focus disappears or goes to wrong element
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Return focus to the element that opened the component.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Tab key doesn't cycle within modal</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Tab moves focus outside modal unexpectedly
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Implement focus trap so Tab cycles within modal, Escape closes it.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Always provide Escape key handler to close modals/dropdowns</li>
          <li>✓ Implement focus trap for modals (Tab cycles within, Escape closes)</li>
          <li>✓ Return focus to trigger element when component closes</li>
          <li>✓ Test with keyboard only (no mouse)</li>
          <li>✓ Ensure Tab and Shift+Tab work in all components</li>
          <li>✓ Use focus management libraries for complex widgets</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/2.4.3">
            <Button variant="outline">2.4.3 Focus Order</Button>
          </Link>
          <Link href="/criteria/2.4.7">
            <Button variant="outline">2.4.7 Focus Visible</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

