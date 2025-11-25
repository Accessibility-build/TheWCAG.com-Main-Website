"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { ExampleSection } from "@/components/examples/ExampleSection"
import { AccessibilityNotes } from "@/components/examples/AccessibilityNotes"

export default function FormsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const step1InputRef = useRef<HTMLInputElement>(null)
  const step2InputRef = useRef<HTMLInputElement>(null)
  
  // Focus first input when step changes
  useEffect(() => {
    if (currentStep === 1) {
      step1InputRef.current?.focus()
    } else if (currentStep === 2) {
      step2InputRef.current?.focus()
    }
  }, [currentStep])

  const validateField = (name: string, value: string | boolean) => {
    const newErrors = { ...errors }
    if (name === "name" && typeof value === "string" && !value.trim()) {
      newErrors.name = "Name is required"
    } else if (name === "email" && typeof value === "string") {
      if (!value.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Please enter a valid email address"
      } else {
        delete newErrors.email
      }
    } else if (name === "message" && typeof value === "string" && !value.trim()) {
      newErrors.message = "Message is required"
    } else if (name === "agree" && !value) {
      newErrors.agree = "You must agree to the terms"
    } else {
      delete newErrors[name]
    }
    setErrors(newErrors)
  }

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
            <span className="font-medium">Forms</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Forms</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible forms with proper labels, error handling, validation, and
            multi-step patterns that meet WCAG 2.2 standards.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              3.3.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              3.3.2
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              3.3.3
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
            </Badge>
          </div>
        </div>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">3.3.1</Badge>
                  Error Identification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Identify which field has the error</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Describe the error in text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Use aria-invalid and aria-describedby</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Badge variant="outline">3.3.2</Badge>
                  Labels or Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Every input must have a label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Provide instructions when needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Indicate required fields clearly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ARIA Form */}
        <ExampleSection
          title="ARIA Form (Custom)"
          description="For custom styled forms that don't use native form elements, use ARIA roles and properties. Use <code>role=&amp;quot;form&amp;quot;</code> on the container, <code>role=&amp;quot;textbox&amp;quot;</code>, <code>role=&amp;quot;combobox&amp;quot;</code>, etc. for inputs. Always provide <code>aria-label</code> or <code>aria-labelledby</code> for each input. This approach is more complex and should only be used when semantic HTML forms are not feasible."
          sectionId="aria-form"
          code={`<div role="form" aria-label="Contact form">
  <div>
    <label id="aria-name-label">Full Name</label>
    <div
      role="textbox"
      contentEditable
      aria-labelledby="aria-name-label"
      aria-required="true"
      aria-invalid="false"
    />
  </div>
  <button type="submit">Submit</button>
</div>`}
          testingGuide={{
            keyboard: ["Tab through form fields", "All inputs must be keyboard accessible", "Focus management is your responsibility"],
            screenReader: [
              "Form role is announced",
              "Input roles and labels are announced",
              "Required state is communicated",
            ],
            visual: ["Verify visual appearance matches intended design", "Ensure focus indicators are visible"],
          }}
        >
          <div role="form" aria-label="Contact form" className="space-y-4 max-w-md border rounded-lg p-4">
            <div className="space-y-2">
              <label id="aria-form-name-label" className="text-sm font-medium">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-labelledby="aria-form-name-label"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label id="aria-form-email-label" className="text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-labelledby="aria-form-email-label"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter your email"
              />
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </ExampleSection>

        {/* Semantic Form */}
        <ExampleSection
          title="Semantic Form"
          description="Use native HTML5 form elements with proper <code>&amp;lt;label&amp;gt;</code> associations. The <code>for</code> attribute on labels should match the <code>id</code> on inputs. Use <code>fieldset</code> and <code>legend</code> to group related fields. Required fields should be indicated with <code>aria-required=&amp;quot;true&amp;quot;</code> and visual indicators (asterisk)."
          sectionId="semantic-form"
          code={`<form noValidate>
  <fieldset>
    <legend>Contact Information</legend>
    <div className="space-y-2">
      <label htmlFor="name">
        Full Name <span className="text-destructive">*</span>
      </label>
      <input
        id="name"
        type="text"
        aria-required="true"
        aria-describedby="name-error"
        aria-invalid={errors.name ? "true" : "false"}
      />
      <p id="name-error" className="text-destructive" role="alert">
        {errors.name}
      </p>
    </div>
  </fieldset>
</form>`}
          testingGuide={{
            keyboard: ["Tab through form fields", "Verify labels are announced", "Check error messages appear"],
            screenReader: ["Labels are announced with inputs", "Errors are announced when they occur", "Required fields are indicated"],
          }}
        >
          <form noValidate className="space-y-4 max-w-md">
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold mb-4">Contact Information</legend>
              <div className="space-y-2">
                <Label htmlFor="semantic-name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="semantic-name"
                  type="text"
                  aria-required="true"
                  aria-describedby={errors.name ? "semantic-name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                  onBlur={(e) => validateField("name", e.target.value)}
                />
                {errors.name && (
                  <p id="semantic-name-error" className="text-xs text-destructive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="semantic-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="semantic-email"
                  type="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "semantic-email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                  onBlur={(e) => validateField("email", e.target.value)}
                />
                {errors.email && (
                  <p id="semantic-email-error" className="text-xs text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </fieldset>
          </form>
        </ExampleSection>

        {/* Multi-step Form */}
        <ExampleSection
          title="Multi-step Form"
          description="Multi-step forms (wizards) require careful focus management. When moving between steps, focus should move to the first field of the new step. Use <code>aria-current=&amp;quot;step&amp;quot;</code> to indicate the current step. Provide a progress indicator and ensure users can navigate back to previous steps. All validation should occur before allowing progression to the next step."
          sectionId="multistep-form"
          code={`<div role="region" aria-label="Multi-step form">
  <nav aria-label="Progress">
    <ol>
      <li aria-current="step">Step 1: Personal Info</li>
      <li>Step 2: Contact Info</li>
      <li>Step 3: Review</li>
    </ol>
  </nav>
  <form>
    {/* Step content */}
    <div role="group" aria-label="Form navigation">
      <button type="button" onClick={previousStep}>Previous</button>
      <button type="button" onClick={nextStep}>Next</button>
    </div>
  </form>
</div>`}
          testingGuide={{
            keyboard: [
              "Tab through current step fields only",
              "Focus moves to first field when step changes",
              "Navigation buttons are keyboard accessible",
            ],
            screenReader: [
              "Current step is announced",
              "Progress is clear",
              "Step changes are announced",
            ],
          }}
        >
          <div role="region" aria-label="Multi-step form" className="max-w-md">
            <nav aria-label="Progress" className="mb-6">
              <ol className="flex gap-2">
                <li
                  className={`px-3 py-1 rounded ${currentStep === 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  aria-current={currentStep === 1 ? "step" : undefined}
                >
                  Step 1
                </li>
                <li
                  className={`px-3 py-1 rounded ${currentStep === 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  aria-current={currentStep === 2 ? "step" : undefined}
                >
                  Step 2
                </li>
                <li
                  className={`px-3 py-1 rounded ${currentStep === 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  aria-current={currentStep === 3 ? "step" : undefined}
                >
                  Step 3
                </li>
              </ol>
            </nav>
            <form className="space-y-4">
              {currentStep === 1 && (
                <div role="group" aria-label="Personal Information">
                  <div className="space-y-2">
                    <Label htmlFor="step1-name">Name</Label>
                    <Input id="step1-name" type="text" ref={step1InputRef} />
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div role="group" aria-label="Contact Information">
                  <div className="space-y-2">
                    <Label htmlFor="step2-email">Email</Label>
                    <Input id="step2-email" type="email" ref={step2InputRef} />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div role="group" aria-label="Review">
                  <p>Review your information</p>
                </div>
              )}
              <div role="group" aria-label="Form navigation" className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  disabled={currentStep === 3}
                >
                  Next
                </Button>
              </div>
            </form>
          </div>
        </ExampleSection>

        {/* Inline Validation */}
        <ExampleSection
          title="Inline Validation"
          description="Real-time validation provides immediate feedback. Use <code>aria-live=&amp;quot;polite&amp;quot;</code> for validation messages so screen readers announce them without interrupting. Validate on blur (when user leaves field) rather than on every keystroke to avoid overwhelming users. Show success states as well as errors. Use <code>aria-invalid</code> to indicate error state and <code>aria-describedby</code> to associate error messages with fields."
          sectionId="inline-validation"
          code={`<div className="space-y-2">
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError ? "true" : "false"}
    aria-describedby="email-error email-hint"
    onBlur={validateEmail}
  />
  <p id="email-hint" className="text-xs text-muted-foreground">
    We'll never share your email
  </p>
  <p 
    id="email-error" 
    className="text-xs text-destructive"
    role="alert"
    aria-live="polite"
  >
    {errorMessage}
  </p>
</div>`}
          testingGuide={{
            keyboard: [
              "Tab to field and leave to trigger validation",
              "Error message should be announced",
              "Success state should also be announced",
            ],
            screenReader: [
              "Validation messages are announced via aria-live",
              "Error state is clear",
              "Field is properly associated with error",
            ],
          }}
        >
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="validation-email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="validation-email"
                type="email"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="validation-email-error validation-email-hint"
                onBlur={(e) => validateField("email", e.target.value)}
              />
              <p id="validation-email-hint" className="text-xs text-muted-foreground">
                We'll never share your email
              </p>
              {errors.email && (
                <p id="validation-email-error" className="text-xs text-destructive" role="alert" aria-live="polite">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </ExampleSection>

        {/* Fieldset Groups */}
        <ExampleSection
          title="Fieldset Groups"
          description="Use <code>&amp;lt;fieldset&amp;gt;</code> and <code>&amp;lt;legend&amp;gt;</code> to group related form fields. This is especially important for radio buttons and checkboxes, but also useful for grouping any related inputs. The legend describes the group and is announced by screen readers when entering the fieldset. This provides crucial context for understanding the relationship between fields."
          sectionId="fieldset-groups"
          code={`<fieldset>
  <legend>Shipping Address</legend>
  <div className="space-y-2">
    <label htmlFor="street">Street Address</label>
    <input id="street" type="text" />
  </div>
  <div className="grid grid-cols-2 gap-2">
    <div>
      <label htmlFor="city">City</label>
      <input id="city" type="text" />
    </div>
    <div>
      <label htmlFor="zip">ZIP Code</label>
      <input id="zip" type="text" />
    </div>
  </div>
</fieldset>

<fieldset>
  <legend>Preferred Contact Method</legend>
  <div role="radiogroup" aria-required="true">
    <div className="flex items-center space-x-2">
      <input type="radio" id="email-contact" name="contact" value="email" />
      <label htmlFor="email-contact">Email</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="phone-contact" name="contact" value="phone" />
      <label htmlFor="phone-contact">Phone</label>
    </div>
  </div>
</fieldset>`}
          testingGuide={{
            keyboard: ["Tab through fields in group", "Legend is announced when entering fieldset"],
            screenReader: [
              "Legend provides context for grouped fields",
              "Radio groups are properly associated",
              "Fieldset boundaries are clear",
            ],
          }}
        >
          <div className="space-y-6 max-w-md">
            <fieldset className="space-y-4 p-4 border rounded-lg">
              <legend className="text-lg font-semibold px-2">Shipping Address</legend>
              <div className="space-y-2">
                <Label htmlFor="fieldset-street">Street Address</Label>
                <Input id="fieldset-street" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="fieldset-city">City</Label>
                  <Input id="fieldset-city" type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fieldset-zip">ZIP Code</Label>
                  <Input id="fieldset-zip" type="text" />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4 p-4 border rounded-lg">
              <legend className="text-lg font-semibold px-2">Preferred Contact Method</legend>
              <div role="radiogroup" aria-required="true" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="email-contact" name="contact" value="email" defaultChecked />
                  <Label htmlFor="email-contact" className="font-normal cursor-pointer">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="phone-contact" name="contact" value="phone" />
                  <Label htmlFor="phone-contact" className="font-normal cursor-pointer">
                    Phone
                  </Label>
                </div>
              </div>
            </fieldset>
          </div>
        </ExampleSection>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <AccessibilityNotes
            notes={[
              "Always associate labels with inputs using 'for' and 'id' attributes",
              "Use fieldset and legend for related field groups",
              "Provide clear, specific error messages",
              "Indicate required fields both visually and programmatically",
              "Validate on blur, not on every keystroke",
              "Provide helpful hints and instructions",
              "Use appropriate input types (email, tel, url, etc.)",
              "Ensure form is keyboard navigable",
              "Provide success feedback, not just errors",
            ]}
            warnings={[
              "Don't use placeholder text as the only label",
              "Avoid generic error messages like 'Invalid input'",
              "Don't rely solely on color to indicate errors",
              "Ensure error messages are visible and persistent until fixed",
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
                    <Link href="/criteria/3.3.1" className="text-primary hover:underline">
                      3.3.1 Error Identification
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/3.3.2" className="text-primary hover:underline">
                      3.3.2 Labels or Instructions
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/3.3.3" className="text-primary hover:underline">
                      3.3.3 Error Suggestion
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
                      href="https://www.w3.org/WAI/WCAG22/Understanding/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      WCAG 2.2 Guidelines
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/tutorials/forms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      W3C Form Tutorial
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

