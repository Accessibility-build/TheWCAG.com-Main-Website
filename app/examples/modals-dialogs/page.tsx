"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink, X } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"
import { CodeComparison } from "@/components/examples/code-comparison"

export default function ModalsDialogsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const alertDialogRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      // Prevent body scroll
      document.body.style.overflow = "hidden"
      previousFocusRef.current = document.activeElement as HTMLElement
      const firstFocusable = dialogRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      firstFocusable?.focus()

      // Trap focus within dialog
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return

        const focusableElements = dialogRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>

        if (!focusableElements || focusableElements.length === 0) return

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

      document.addEventListener("keydown", handleTab)
      return () => {
        document.removeEventListener("keydown", handleTab)
        document.body.style.overflow = ""
      }
    } else if (!isOpen && previousFocusRef.current) {
      document.body.style.overflow = ""
      previousFocusRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isAlertOpen && alertDialogRef.current) {
      // Prevent body scroll
      document.body.style.overflow = "hidden"
      previousFocusRef.current = document.activeElement as HTMLElement
      const firstFocusable = alertDialogRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      firstFocusable?.focus()

      // Trap focus within alert dialog
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return

        const focusableElements = alertDialogRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>

        if (!focusableElements || focusableElements.length === 0) return

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

      document.addEventListener("keydown", handleTab)
      return () => {
        document.removeEventListener("keydown", handleTab)
        document.body.style.overflow = ""
      }
    } else if (!isAlertOpen && previousFocusRef.current && !isOpen) {
      document.body.style.overflow = ""
      previousFocusRef.current.focus()
    }
  }, [isAlertOpen, isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (isOpen || isAlertOpen)) {
        setIsOpen(false)
        setIsAlertOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, isAlertOpen])

  return (
    <CriteriaPageLayout>
      <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Link
              href="/examples"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Modals & Dialogs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Modals & Dialogs</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible modals and dialogs with proper focus management, keyboard
            trapping, and ARIA patterns.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.1.2
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              2.4.3
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
            </Badge>
          </div>
        </div>

        {/* Why It Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  Screen Reader Users
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When a modal opens, focus must move into it immediately. If it doesn't, screen reader users might not realize a dialog has appeared, continuing to browse the underlying page which should be inert.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                  Keyboard Users
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Without a "focus trap", pressing "Tab" on the last element of the modal might move focus back to the page background (e.g., the URL bar or footer), causing users to lose their place and struggle to close the dialog.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.1.2</Badge>
                  No Keyboard Trap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Focus must be trapped within modal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Escape key must close modal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">2.4.3</Badge>
                  Focus Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Focus moves to modal when opened</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Focus returns to trigger when closed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">4.1.2</Badge>
                  Name, Role, Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Dialog must have accessible name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Role must be properly set</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Native Dialog */}
        <ExampleSection
          title="Native Dialog (HTML5)"
          description="The HTML5 <code>&amp;lt;dialog&amp;gt;</code> element provides built-in accessibility features. Use <code>showModal()</code> to open and <code>close()</code> to close. The dialog automatically traps focus and handles Escape key. Use <code>&amp;lt;form method=&amp;quot;dialog&amp;quot;&amp;gt;</code> to close dialog on form submission. Always provide a visible close button."
          sectionId="native-dialog"
          code={`<button onClick={() => dialogRef.current?.showModal()}>
  Open Dialog
</button>

<dialog ref={dialogRef} aria-labelledby="dialog-title">
  <h2 id="dialog-title">Dialog Title</h2>
  <p>Dialog content</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>`}
          testingGuide={{
            keyboard: [
              "Tab cycles through dialog elements only",
              "Escape closes dialog",
              "Focus returns to trigger button",
            ],
            screenReader: ["Dialog role is announced", "Title is announced", "Backdrop is indicated"],
          }}
        >
          <div>
            <Button onClick={() => setIsOpen(true)}>Open Native Dialog</Button>
            {isOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
                ref={dialogRef}
              >
                <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} aria-hidden="true" />
                <div className="relative bg-background border rounded-lg p-6 max-w-md w-full mx-4">
                  <h2 id="dialog-title" className="text-xl font-bold mb-4">
                    Dialog Title
                  </h2>
                  <p className="mb-4">This is a native dialog implementation. Press Escape to close.</p>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close dialog"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ExampleSection>

        {/* ARIA Dialog */}
        <ExampleSection
          title="ARIA Dialog (Custom)"
          description="For custom dialogs, use <code>role=&amp;quot;dialog&amp;quot;</code> or <code>role=&amp;quot;alertdialog&amp;quot;</code>. Set <code>aria-modal=&amp;quot;true&amp;quot;</code> to indicate modal behavior. Trap focus within the dialog using JavaScript. Provide <code>aria-labelledby</code> pointing to the dialog title. Use <code>aria-describedby</code> for additional description. Ensure backdrop is properly handled."
          sectionId="aria-dialog"
          code={`<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-description">Dialog description</p>
  <button onClick={closeDialog}>Close</button>
</div>

{/* Backdrop */}
<div
  className="backdrop"
  onClick={closeDialog}
  aria-hidden="true"
/>`}
          testingGuide={{
            keyboard: [
              "Focus is trapped within dialog",
              "Escape key closes dialog",
              "Tab cycles through dialog only",
            ],
            screenReader: [
              "Dialog role and title are announced",
              "Modal state is communicated",
              "Description is read if provided",
            ],
          }}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The example above demonstrates the ARIA dialog pattern. Focus management and keyboard trapping are
              implemented.
            </p>
          </div>
        </ExampleSection>

        {/* Alert Dialog */}
        <ExampleSection
          title="Alert Dialog"
          description="Alert dialogs use <code>role=&amp;quot;alertdialog&amp;quot;</code> for critical messages requiring immediate attention. They should have a clear, concise message and typically one or two action buttons. The alertdialog role causes screen readers to interrupt current reading to announce the message. Use for confirmations, warnings, or critical errors."
          sectionId="alert-dialog"
          code={`<div
  role="alertdialog"
  aria-modal="true"
  aria-labelledby="alert-title"
  aria-describedby="alert-message"
>
  <h2 id="alert-title">Confirm Action</h2>
  <p id="alert-message">Are you sure you want to delete this item?</p>
  <div>
    <button onClick={handleConfirm}>Delete</button>
    <button onClick={handleCancel}>Cancel</button>
  </div>
</div>`}
          testingGuide={{
            keyboard: ["Focus moves to alert dialog immediately", "Actions are keyboard accessible"],
            screenReader: [
              "Alert dialog interrupts current reading",
              "Message is announced immediately",
              "Actions are clear",
            ],
          }}
        >
          <div>
            <Button onClick={() => setIsAlertOpen(true)} variant="destructive">
              Delete Item
            </Button>
            {isAlertOpen && (
              <div
                ref={alertDialogRef}
                className="fixed inset-0 z-50 flex items-center justify-center"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="alert-title"
                aria-describedby="alert-message"
              >
                <div className="fixed inset-0 bg-black/50" onClick={() => setIsAlertOpen(false)} aria-hidden="true" />
                <div className="relative bg-background border rounded-lg p-6 max-w-md w-full mx-4">
                  <h2 id="alert-title" className="text-xl font-bold mb-4">
                    Confirm Deletion
                  </h2>
                  <p id="alert-message" className="mb-4">
                    Are you sure you want to delete this item? This action cannot be undone.
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setIsAlertOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={() => setIsAlertOpen(false)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ExampleSection>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. Non-accessible Trigger Elements</h3>
            <p className="text-muted-foreground mb-4">Using generic <code>div</code> or <code>span</code> elements for buttons prevents keyboard users from opening the modal.</p>
            <CodeComparison
              badCode={`<div 
  onClick={openModal} 
  className="btn"
>
  Open Settings
</div>`}
              goodCode={`<button 
  onClick={openModal} 
  className="btn"
  type="button"
>
  Open Settings
</button>`}
              badDescription="Divs are not focusable by default and don't support Enter/Space keys."
              goodDescription="Buttons are natively focusable and trigger on both click and keypress."
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. Missing Focus Management</h3>
            <p className="text-muted-foreground mb-4">Failing to move focus to the modal when it opens leaves keyboard users lost.</p>
            <CodeComparison
              badCode={`const openModal = () => {
  setIsOpen(true);
  // No focus management
}`}
              goodCode={`const openModal = () => {
  setIsOpen(true);
  // Wait for render, then focus
  setTimeout(() => {
    modalRef.current?.focus();
  }, 0);
}`}
              badDescription="User focus remains on the trigger button (now behind the backdrop)."
              goodDescription="Programmatically moving focus ensures the user context switches to the modal."
            />
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Always trap focus within modal dialogs",
              "Provide visible close button",
              "Escape key must close dialog",
              "Focus should return to trigger when closed",
              "Use aria-labelledby for dialog title",
              "Use aria-describedby for additional context",
              "Backdrop should be clickable to close (optional)",
              "Initial focus should be on first interactive element",
              "Prevent body scroll when modal is open",
            ]}
            warnings={[
              "Don't trap focus outside the dialog",
              "Avoid opening dialogs automatically without user action",
              "Don't use dialogs for non-critical information",
              "Ensure dialogs are keyboard accessible",
            ]}
          />
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Related WCAG Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/criteria/2.1.2" className="text-primary hover:underline">
                      2.1.2 No Keyboard Trap
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/2.4.3" className="text-primary hover:underline">
                      2.4.3 Focus Order
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/4.1.2" className="text-primary hover:underline">
                      4.1.2 Name, Role, Value
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Dialog Pattern
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </CriteriaPageLayout>
  )
}

