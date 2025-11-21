"use client"

import { CheckCircle2, XCircle, Copy, Check, Keyboard, Mic } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function CharacterKeyShortcutsPage() {
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
        <span className="text-foreground font-medium">2.1.4 Character Key Shortcuts</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Operable → Keyboard Accessible</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">2.1.4 Character Key Shortcuts</h1>
        <p className="text-xl text-muted-foreground">
          If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, numbers, or symbol characters, then at least one of the following is true: Turn off, Remap, Active only on focus.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Single-character keyboard shortcuts can be accidentally activated by speech recognition users who speak commands, or by users with motor disabilities who may press keys unintentionally. These shortcuts can interfere with typing, form filling, or other interactions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Mic className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Speech Recognition Users</h4>
              <p className="text-sm text-muted-foreground">Speaking letters can trigger shortcuts accidentally</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Keyboard className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Unintentional key presses activate shortcuts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Keyboard className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Typing Interference</h4>
              <p className="text-sm text-muted-foreground">Shortcuts trigger while typing in forms</p>
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
              <h3 className="font-semibold text-lg">❌ Problematic Shortcut</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Keyboard className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Press 'S' to save</p>
                <p className="text-xs text-destructive mt-2">Triggers while typing in input fields</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Single-key shortcut 'S' triggers while typing "Save" in a form
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              {`document.addEventListener('keydown', (e) => {
  if (e.key === 's') saveDocument()
})`}
            </code>
            <p className="text-sm mt-2">Speech recognition users saying "S" also triggers it</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Accessible Shortcut</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Keyboard className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Ctrl+S to save</p>
                <p className="text-xs text-green-600 mt-2">Only active when focused, or can be turned off</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Use modifier keys (Ctrl+S) or make shortcut only active on focus
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              {`if (e.ctrlKey && e.key === 's') saveDocument()`}
            </code>
            <p className="text-sm mt-2">Won't trigger accidentally while typing</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⌨️ Single-Key Shortcuts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Press 'E' to edit, 'D' to delete
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Ctrl+E to edit, or shortcut only active when focused
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Single keys trigger accidentally during typing or speech input.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎤 Speech Recognition</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Saying "S" triggers save shortcut
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Provide option to turn off shortcuts or use modifier keys
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Speech recognition users speak commands that may match shortcut keys.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Form Input</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Typing in input field triggers shortcuts
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Shortcuts only active when not in input fields
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users typing in forms shouldn't accidentally trigger actions.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">⚙️ Remappable Shortcuts</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Hard-coded shortcuts with no way to change
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Settings allow users to remap or disable shortcuts
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to customize shortcuts to avoid conflicts.
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
                {`<!-- ✅ Good: Shortcut with modifier key -->
<button onclick="saveDocument()" accesskey="s">
  Save (Ctrl+S)
</button>

<!-- ✅ Good: Shortcut only active when focused -->
<div tabindex="0" onkeydown="handleShortcut(event)">
  Press 'E' to edit (only when this element is focused)
</div>

<!-- ✅ Good: Settings to disable shortcuts -->
<label>
  <input type="checkbox" id="disableShortcuts">
  Disable keyboard shortcuts
</label>`}
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
                {`// ✅ Good: Using modifier key (Ctrl+S)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault()
    saveDocument()
  }
})

// ✅ Good: Only active when specific element is focused
const editor = document.getElementById('editor')
editor.addEventListener('keydown', (e) => {
  if (document.activeElement === editor) {
    if (e.key === 'e' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault()
      editDocument()
    }
  }
})

// ✅ Good: Check if shortcuts are disabled
let shortcutsEnabled = true

document.addEventListener('keydown', (e) => {
  if (!shortcutsEnabled) return
  
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault()
    saveDocument()
  }
})

// Toggle shortcuts
document.getElementById('disableShortcuts').addEventListener('change', (e) => {
  shortcutsEnabled = !e.target.checked
})

// ✅ Good: Check if user is typing in input
document.addEventListener('keydown', (e) => {
  const activeElement = document.activeElement
  const isInput = activeElement.tagName === 'INPUT' || 
                  activeElement.tagName === 'TEXTAREA' ||
                  activeElement.isContentEditable
  
  if (isInput) return // Don't trigger shortcuts while typing
  
  if (e.key === 's' && !e.ctrlKey && !e.altKey && !e.metaKey) {
    e.preventDefault()
    saveDocument()
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
                {`// ✅ Good: Using modifier keys
import { useEffect } from 'react'

function DocumentEditor() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Use Ctrl+S instead of just 'S'
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        saveDocument()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  return <div>Editor content</div>
}

// ✅ Good: Shortcut only active when component focused
function EditableComponent() {
  const handleKeyDown = (e) => {
    // Only trigger if this component is focused
    if (e.key === 'e' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault()
      editMode()
    }
  }
  
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      Press 'E' to edit (only when focused)
    </div>
  )
}

// ✅ Good: User preference to disable shortcuts
function App() {
  const [shortcutsEnabled, setShortcutsEnabled] = useState(true)
  
  useEffect(() => {
    if (!shortcutsEnabled) return
    
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        saveDocument()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [shortcutsEnabled])
  
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={shortcutsEnabled}
          onChange={(e) => setShortcutsEnabled(e.target.checked)}
        />
        Enable keyboard shortcuts
      </label>
      {/* App content */}
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
  <!-- ✅ Good: Shortcut with modifier -->
  <div @keydown.ctrl.s.prevent="saveDocument">
    Editor content
  </div>
  
  <!-- ✅ Good: Settings to disable -->
  <label>
    <input 
      type="checkbox" 
      v-model="shortcutsEnabled"
    >
    Enable keyboard shortcuts
  </label>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const shortcutsEnabled = ref(true)

const saveDocument = () => {
  // Save logic
}

onMounted(() => {
  const handleKeyDown = (e) => {
    if (!shortcutsEnabled.value) return
    
    // Check if user is typing in input
    const activeElement = document.activeElement
    const isInput = activeElement.tagName === 'INPUT' || 
                    activeElement.tagName === 'TEXTAREA'
    
    if (isInput) return
    
    // Use modifier keys
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault()
      saveDocument()
    }
  }
  
  document.addEventListener('keydown', handleKeyDown)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
  })
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
                  <strong>Type in Input:</strong> Type in form fields and verify shortcuts don't trigger
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Speech Input:</strong> Test with speech recognition if available
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Focus Test:</strong> Verify shortcuts only work when appropriate element is focused
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Disable Option:</strong> Check if shortcuts can be turned off
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
                  <strong>Manual Review:</strong> Requires manual testing of shortcut behavior
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
            <h3 className="font-semibold mb-2">❌ Single-key shortcuts without modifier</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              {`Press 'S' to save`}
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Use modifier keys (Ctrl+S) or make shortcut only active when focused.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Shortcuts active while typing in forms</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Shortcuts trigger while user types in input fields
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Check if user is typing in input/textarea before triggering shortcuts.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No way to disable shortcuts</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Hard-coded shortcuts with no user control
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide settings to disable or remap shortcuts.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Use modifier keys (Ctrl, Alt, Meta) with character keys</li>
          <li>✓ Make single-key shortcuts only active when specific element is focused</li>
          <li>✓ Provide option to disable or remap shortcuts</li>
          <li>✓ Don't trigger shortcuts while user is typing in input fields</li>
          <li>✓ Test with speech recognition software if possible</li>
          <li>✓ Consider user preferences for shortcut behavior</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/2.1.1">
            <Button variant="outline">2.1.1 Keyboard</Button>
          </Link>
          <Link href="/criteria/2.1.2">
            <Button variant="outline">2.1.2 No Keyboard Trap</Button>
          </Link>
          <Link href="/criteria/4.1.2">
            <Button variant="outline">4.1.2 Name, Role, Value</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

