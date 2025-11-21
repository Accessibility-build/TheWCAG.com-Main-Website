"use client"

import { CheckCircle2, XCircle, Copy, Check, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function ErrorPreventionPage() {
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
        <span className="text-foreground font-medium">3.3.4 Error Prevention</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Understandable → Input Assistance</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">3.3.4 Error Prevention</h1>
        <p className="text-xl text-muted-foreground">
          For Web pages that cause legal commitments or financial transactions, modify or delete user-controllable data, or submit test responses, at least one of the following is true: Reversible, Checked, Confirmed.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Critical actions like financial transactions, legal commitments, or deleting data can have serious consequences if done accidentally. Users need protection from mistakes through reversibility, review opportunities, or confirmation steps. This is especially important for users with motor disabilities, cognitive disabilities, or those using assistive technologies.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Protection from mistakes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Motor Disabilities</h4>
              <p className="text-sm text-muted-foreground">Accidental clicks</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Cognitive Disabilities</h4>
              <p className="text-sm text-muted-foreground">Need review opportunities</p>
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
              <h3 className="font-semibold text-lg">❌ No Protection</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Delete Account</p>
                <button className="px-3 py-1 bg-destructive text-white rounded text-xs mt-2">
                  Delete
                </button>
                <p className="text-xs text-destructive mt-2">No confirmation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Critical action with no confirmation or undo
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Action executes immediately
            </code>
            <p className="text-sm mt-2">User cannot recover from mistake</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Confirmation</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Shield className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Delete Account</p>
                <p className="text-xs text-green-600 mt-2">"Are you sure?"</p>
                <div className="flex gap-2 mt-3 justify-center">
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Yes</button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-xs">Cancel</button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Confirmation dialog prevents accidental actions
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Confirmation required before action
            </code>
            <p className="text-sm mt-2">User can cancel or confirm</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">💳 Financial Transactions</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Payment submits immediately on button click
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Review page shows order summary, then confirmation required
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need to review before committing payment.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🗑️ Delete Actions</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Delete button removes item immediately
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Confirmation dialog or undo option available
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users should be able to recover from mistakes.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Legal Commitments</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Terms accepted and contract signed immediately
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Review page with terms, then separate confirmation step
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Legal commitments need review opportunity.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">↩️ Undo Functionality</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Action cannot be reversed
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  "Undo" button available for 30 seconds after action
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Reversibility provides safety net.
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
                {`<!-- ✅ Good: Confirmation dialog -->
<button onclick="confirmDelete()">Delete Account</button>

<div id="confirm-dialog" role="dialog" aria-labelledby="dialog-title" style="display: none;">
  <h2 id="dialog-title">Confirm Deletion</h2>
  <p>Are you sure you want to delete your account? This action cannot be undone.</p>
  <button onclick="proceedDelete()">Yes, Delete</button>
  <button onclick="cancelDelete()">Cancel</button>
</div>

<!-- ✅ Good: Review page for payment -->
<form id="payment-review">
  <h2>Review Your Order</h2>
  <div id="order-summary">
    <!-- Order details -->
  </div>
  <button type="submit">Confirm Payment</button>
  <a href="/cart">Back to Cart</a>
</form>

<!-- ✅ Good: Undo notification -->
<div id="undo-notification" role="alert" style="display: none;">
  Item deleted. <button onclick="undoDelete()">Undo</button>
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
                {`// ✅ Good: Confirmation dialog
function confirmDelete() {
  const dialog = document.getElementById('confirm-dialog')
  dialog.style.display = 'block'
  dialog.setAttribute('aria-hidden', 'false')
  
  // Focus first button in dialog
  dialog.querySelector('button').focus()
}

function proceedDelete() {
  // Perform deletion
  deleteAccount()
  closeDialog()
}

function cancelDelete() {
  closeDialog()
}

function closeDialog() {
  const dialog = document.getElementById('confirm-dialog')
  dialog.style.display = 'none'
  dialog.setAttribute('aria-hidden', 'true')
}

// ✅ Good: Review before submission
const paymentForm = document.getElementById('payment-review')
paymentForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  // Show final confirmation
  if (confirm('Confirm payment of $' + getTotalAmount() + '?')) {
    processPayment()
  }
})

// ✅ Good: Undo functionality
let deletedItems = []

function deleteItem(itemId) {
  const item = getItem(itemId)
  deletedItems.push({ item, timestamp: Date.now() })
  
  // Remove from UI
  removeItemFromUI(itemId)
  
  // Show undo notification
  showUndoNotification()
  
  // Auto-hide after 30 seconds
  setTimeout(() => {
    permanentlyDelete(itemId)
  }, 30000)
}

function undoDelete() {
  if (deletedItems.length > 0) {
    const lastDeleted = deletedItems.pop()
    restoreItem(lastDeleted.item)
    hideUndoNotification()
  }
}

function showUndoNotification() {
  const notification = document.getElementById('undo-notification')
  notification.style.display = 'block'
  notification.setAttribute('role', 'alert')
}

// ✅ Good: Checked input (review before submit)
function validateBeforeSubmit() {
  const form = document.getElementById('critical-form')
  const reviewSection = document.getElementById('review-section')
  
  // Show review section
  reviewSection.style.display = 'block'
  
  // User must check "I have reviewed" checkbox
  const reviewedCheckbox = document.getElementById('reviewed')
  reviewedCheckbox.required = true
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
                {`// ✅ Good: Confirmation dialog component
import { useState } from 'react'

function DeleteButton() {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleDelete = () => {
    setShowConfirm(true)
  }

  const confirmDelete = () => {
    // Perform deletion
    deleteAccount()
    setShowConfirm(false)
  }

  const cancelDelete = () => {
    setShowConfirm(false)
  }

  return (
    <>
      <button onClick={handleDelete}>Delete Account</button>
      
      {showConfirm && (
        <div role="dialog" aria-labelledby="dialog-title">
          <h2 id="dialog-title">Confirm Deletion</h2>
          <p>Are you sure? This action cannot be undone.</p>
          <button onClick={confirmDelete}>Yes, Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      )}
  )
}

// ✅ Good: Review page for payment
function PaymentReview({ order, onConfirm, onCancel }) {
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmed) {
      onConfirm()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review Your Order</h2>
      <div>
        <h3>Order Summary</h3>
        <p>Total: ${order.total}</p>
      </div>
      
      <label>
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          required
        />
        I have reviewed and confirm this order
      </label>
      
      <button type="submit" disabled={!confirmed}>
        Confirm Payment
      </button>
      <button type="button" onClick={onCancel}>
        Back to Cart
      </button>
    </form>
  )
}

// ✅ Good: Undo functionality
function ItemList() {
  const [items, setItems] = useState([...])
  const [deletedItem, setDeletedItem] = useState(null)

  const deleteItem = (itemId) => {
    const item = items.find(i => i.id === itemId)
    setItems(items.filter(i => i.id !== itemId))
    setDeletedItem({ item, timestamp: Date.now() })
    
    // Auto-hide undo after 30 seconds
    setTimeout(() => {
      setDeletedItem(null)
    }, 30000)
  }

  const undoDelete = () => {
    if (deletedItem) {
      setItems([...items, deletedItem.item])
      setDeletedItem(null)
    }
  }

  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {deletedItem && (
        <div role="alert">
          Item deleted. <button onClick={undoDelete}>Undo</button>
        </div>
      )}
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
  <!-- ✅ Good: Confirmation dialog -->
  <div>
    <button @click="showConfirm = true">Delete Account</button>
    
    <div
      v-if="showConfirm"
      role="dialog"
      aria-labelledby="dialog-title"
    >
      <h2 id="dialog-title">Confirm Deletion</h2>
      <p>Are you sure? This action cannot be undone.</p>
      <button @click="confirmDelete">Yes, Delete</button>
      <button @click="showConfirm = false">Cancel</button>
    </div>
  </div>

  <!-- ✅ Good: Review page -->
  <form @submit.prevent="handleSubmit">
    <h2>Review Your Order</h2>
    <div>
      <h3>Order Summary</h3>
      <p>Total: ${'{order.total}'}</p>
    </div>
    
    <label>
      <input
        type="checkbox"
        v-model="confirmed"
        required
      >
      I have reviewed and confirm this order
    </label>
    
    <button type="submit" :disabled="!confirmed">
      Confirm Payment
    </button>
    <button type="button" @click="cancel">Back to Cart</button>
  </form>

  <!-- ✅ Good: Undo notification -->
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    
    <div v-if="deletedItem" role="alert">
      Item deleted. <button @click="undoDelete">Undo</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showConfirm = ref(false)
const confirmed = ref(false)
const items = ref([...])
const deletedItem = ref(null)

const confirmDelete = () => {
  deleteAccount()
  showConfirm.value = false
}

const deleteItem = (itemId) => {
  const item = items.value.find(i => i.id === itemId)
  items.value = items.value.filter(i => i.id !== itemId)
  deletedItem.value = { item, timestamp: Date.now() }
  
  setTimeout(() => {
    deletedItem.value = null
  }, 30000)
}

const undoDelete = () => {
  if (deletedItem.value) {
    items.value.push(deletedItem.value.item)
    deletedItem.value = null
  }
}

const handleSubmit = () => {
  if (confirmed.value) {
    processPayment()
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
                  <strong>Confirmation Test:</strong> Verify confirmation dialogs appear
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Review Test:</strong> Check if review pages are provided
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Undo Test:</strong> Verify undo functionality works
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Cancel Test:</strong> Check if actions can be cancelled
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
                  <strong>Manual Review:</strong> Requires manual testing of error prevention
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
            <h3 className="font-semibold mb-2">❌ No confirmation for critical actions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Delete or payment actions execute immediately
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide confirmation dialogs for all critical actions.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No review opportunity</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Payment or legal commitment without review page
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide review pages before finalizing critical actions.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No undo option</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Deleted data cannot be recovered
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide undo functionality when possible, or confirmation if undo isn't feasible.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide confirmation dialogs for critical actions</li>
          <li>✓ Show review pages before finalizing transactions</li>
          <li>✓ Offer undo functionality when possible</li>
          <li>✓ Make confirmations clear and accessible</li>
          <li>✓ Ensure cancel/back options are available</li>
          <li>✓ Test with keyboard-only navigation</li>
          <li>✓ Verify screen readers announce confirmations</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/3.3.1">
            <Button variant="outline">3.3.1 Error Identification</Button>
          </Link>
          <Link href="/criteria/3.3.3">
            <Button variant="outline">3.3.3 Error Suggestion</Button>
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

