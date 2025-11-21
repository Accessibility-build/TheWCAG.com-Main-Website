"use client"

import { useState } from "react"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Info,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Code2,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function AccessibleInputFieldsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/examples"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Examples
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Accessible Input Fields</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessible Input Fields</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Comprehensive guide to creating accessible form inputs with proper labels, error handling, and validation
            that meet WCAG 2.2 standards.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-sm px-3 py-1">
              3.3.1
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              3.3.2
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              4.1.2
            </Badge>
          </div>
        </div>

        {/* WCAG Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">WCAG Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
                    <span>Use aria-invalid="true"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Associate error with field via aria-describedby</span>
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
                    <span>Use &lt;label&gt; element or aria-label</span>
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
                    <span>Name: accessible name via label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Role: use semantic HTML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Value: current value accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>State: aria-invalid, aria-required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Practices Beyond WCAG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices Beyond WCAG</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Enhanced Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">User Experience</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide real-time validation feedback</li>
                    <li>• Show success states, not just errors</li>
                    <li>• Use autocomplete attributes for common fields</li>
                    <li>• Implement smart defaults where appropriate</li>
                    <li>• Group related fields logically</li>
                    <li>• Use placeholder text sparingly (not as labels)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Technical Excellence</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use appropriate input types (email, tel, url, etc.)</li>
                    <li>• Implement proper focus management</li>
                    <li>• Provide keyboard shortcuts for power users</li>
                    <li>• Use aria-live regions for dynamic updates</li>
                    <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
                    <li>• Test with multiple screen readers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Text Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Text Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Text inputs are fundamental form elements that require proper labeling and error handling to meet 
                  WCAG 2.2 standards. Every input field must have an associated label that clearly identifies its 
                  purpose. The label should be programmatically associated using the <code className="bg-background px-1.5 py-0.5 rounded text-sm">for</code> 
                  attribute or by wrapping the input within the label element. Error messages must be clearly 
                  identified, described in text, and associated with the input field using <code className="bg-background px-1.5 py-0.5 rounded text-sm">aria-describedby</code>. 
                  The <code className="bg-background px-1.5 py-0.5 rounded text-sm">aria-invalid</code> attribute 
                  should be set to "true" when validation errors occur. Helpful hints can be provided via 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">aria-describedby</code> to guide 
                  users without cluttering the visual interface.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Example - Full Width */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Interactive Example
              </CardTitle>
              <CardDescription>Test the accessible text input implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Testing Guide
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Use Tab to navigate to the input field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test with a screen reader to hear the label and hint</span>
                    </li>
                  </ul>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Try submitting empty to see error message</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Verify error is announced by screen reader</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-md space-y-2">
                <Label htmlFor="name-input">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name-input"
                  type="text"
                  placeholder="Enter your full name"
                  aria-required="true"
                  aria-describedby="name-hint name-error"
                />
                <p id="name-hint" className="text-xs text-muted-foreground">
                  First and last name as it appears on your ID
                </p>
                <p id="name-error" className="text-xs text-destructive hidden" role="alert" aria-live="polite">
                  Name is required
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Section - Collapsible */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Code Implementation
                  </CardTitle>
                  <CardDescription className="mt-1">Accessible text input implementation</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection("text-input")}
                  className="gap-2"
                >
                  {expandedSections.has("text-input") ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedSections.has("text-input") && (
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="name-input">
    Full Name <span className="text-destructive">*</span>
  </label>
  <input
    id="name-input"
    type="text"
    placeholder="Enter your full name"
    aria-required="true"
    aria-describedby="name-hint name-error"
    aria-invalid="false"
  />
  <p id="name-hint" className="text-xs text-muted-foreground">
    First and last name as it appears on your ID
  </p>
  <p 
    id="name-error" 
    className="text-xs text-destructive"
    role="alert"
    aria-live="polite"
  >
    Name is required
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="name-input">
    Full Name <span className="text-destructive">*</span>
  </label>
  <input
    id="name-input"
    type="text"
    placeholder="Enter your full name"
    aria-required="true"
    aria-describedby="name-hint name-error"
    aria-invalid="false"
  />
  <p id="name-hint" className="text-xs text-muted-foreground">
    First and last name as it appears on your ID
  </p>
  <p 
    id="name-error" 
    className="text-xs text-destructive"
    role="alert"
    aria-live="polite"
  >
    Name is required
  </p>
</div>`, "text-input")}
                  >
                    {copiedCode === "text-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        {/* Email Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Email Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Email input fields require the <code className="bg-background px-1.5 py-0.5 rounded text-sm">type="email"</code> 
                  attribute to enable proper browser validation and mobile keyboard optimization. The 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">autocomplete="email"</code> attribute 
                  allows password managers and browsers to recognize and autofill email addresses, improving user 
                  experience and reducing input errors. Mobile devices will automatically display an email-optimized 
                  keyboard with the @ symbol readily accessible. Browser-level validation provides immediate feedback 
                  for invalid email formats, though server-side validation remains essential for security.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Example - Full Width */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Interactive Example
              </CardTitle>
              <CardDescription>Test the accessible email input implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Testing Guide
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test on mobile to see email keyboard layout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Try invalid email formats to see validation</span>
                    </li>
                  </ul>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test autocomplete with saved email addresses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Verify screen reader announces label and hint</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-md space-y-2">
                <Label htmlFor="email-input">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby="email-hint email-error"
                />
                <p id="email-hint" className="text-xs text-muted-foreground">
                  We'll never share your email with anyone
                </p>
                <p id="email-error" className="text-xs text-destructive hidden" role="alert">
                  Please enter a valid email address
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Section - Collapsible */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Code Implementation
                  </CardTitle>
                  <CardDescription className="mt-1">Email input with type="email" and autocomplete</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection("email-input")}
                  className="gap-2"
                >
                  {expandedSections.has("email-input") ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedSections.has("email-input") && (
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="email-input">
    Email Address <span className="text-destructive">*</span>
  </label>
  <input
    id="email-input"
    type="email"
    placeholder="you@example.com"
    autoComplete="email"
    aria-required="true"
    aria-describedby="email-hint email-error"
    aria-invalid="false"
  />
  <p id="email-hint" className="text-xs text-muted-foreground">
    We'll never share your email with anyone
  </p>
  <p id="email-error" className="text-xs text-destructive" role="alert">
    Please enter a valid email address
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="email-input">
    Email Address <span className="text-destructive">*</span>
  </label>
  <input
    id="email-input"
    type="email"
    placeholder="you@example.com"
    autoComplete="email"
    aria-required="true"
    aria-describedby="email-hint email-error"
    aria-invalid="false"
  />
  <p id="email-hint" className="text-xs text-muted-foreground">
    We'll never share your email with anyone
  </p>
  <p id="email-error" className="text-xs text-destructive" role="alert">
    Please enter a valid email address
  </p>
</div>`, "email-input")}
                  >
                    {copiedCode === "email-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        {/* Password Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Password Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Password input fields require careful attention to autocomplete attributes for proper password manager 
                  integration. Use <code className="bg-background px-1.5 py-0.5 rounded text-sm">autocomplete="new-password"</code> 
                  for registration forms and <code className="bg-background px-1.5 py-0.5 rounded text-sm">autocomplete="current-password"</code> 
                  for login forms. This distinction enables password managers to correctly suggest new passwords or autofill 
                  existing ones. Password requirements should be clearly communicated upfront, and real-time validation 
                  provides immediate feedback. Consider implementing a password strength indicator and a show/hide toggle 
                  for improved usability while maintaining security.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Example - Full Width */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Interactive Example
              </CardTitle>
              <CardDescription>Test the accessible password input implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Testing Guide
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test password visibility toggle functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Verify password manager recognition</span>
                    </li>
                  </ul>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test with invalid passwords to see validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Check screen reader announces requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-md space-y-2">
                <Label htmlFor="password-input">
                  Password <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="password-input"
                  type="password"
                  autoComplete="new-password"
                  aria-required="true"
                  aria-describedby="password-hint password-error"
                />
                <p id="password-hint" className="text-xs text-muted-foreground">
                  Must be at least 8 characters with uppercase, lowercase, and number
                </p>
                <p id="password-error" className="text-xs text-destructive hidden" role="alert">
                  Password must meet requirements
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Section - Collapsible */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Code Implementation
                  </CardTitle>
                  <CardDescription className="mt-1">Password input with proper autocomplete</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection("password-input")}
                  className="gap-2"
                >
                  {expandedSections.has("password-input") ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedSections.has("password-input") && (
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="password-input">
    Password <span className="text-destructive">*</span>
  </label>
  <input
    id="password-input"
    type="password"
    autoComplete="new-password"
    aria-required="true"
    aria-describedby="password-hint password-error"
    aria-invalid="false"
  />
  <p id="password-hint" className="text-xs text-muted-foreground">
    Must be at least 8 characters with uppercase, lowercase, and number
  </p>
  <p id="password-error" className="text-xs text-destructive" role="alert">
    Password must meet requirements
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="password-input">
    Password <span className="text-destructive">*</span>
  </label>
  <input
    id="password-input"
    type="password"
    autoComplete="new-password"
    aria-required="true"
    aria-describedby="password-hint password-error"
    aria-invalid="false"
  />
  <p id="password-hint" className="text-xs text-muted-foreground">
    Must be at least 8 characters with uppercase, lowercase, and number
  </p>
  <p id="password-error" className="text-xs text-destructive" role="alert">
    Password must meet requirements
  </p>
</div>`, "password-input")}
                  >
                    {copiedCode === "password-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        {/* Number Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Number Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Number input fields use <code className="bg-background px-1.5 py-0.5 rounded text-sm">type="number"</code> 
                  to enable numeric input with built-in validation. The <code className="bg-background px-1.5 py-0.5 rounded text-sm">min</code>, 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">max</code>, and 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">step</code> attributes provide 
                  constraints that guide user input and enable browser-level validation. Mobile devices automatically 
                  display a numeric keypad when this input type is focused, significantly improving the user experience. 
                  Always provide clear hints about acceptable value ranges, and ensure error messages are specific and 
                  actionable when validation fails.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Example - Full Width */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Interactive Example
              </CardTitle>
              <CardDescription>Test the accessible number input implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Testing Guide
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test on mobile to see numeric keypad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Try values outside min/max range</span>
                    </li>
                  </ul>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test step increments with arrow keys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Verify screen reader announces constraints</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-md space-y-2">
                <Label htmlFor="age-input">
                  Age <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="age-input"
                  type="number"
                  min="18"
                  max="120"
                  step="1"
                  aria-required="true"
                  aria-describedby="age-hint age-error"
                />
                <p id="age-hint" className="text-xs text-muted-foreground">
                  Must be between 18 and 120
                </p>
                <p id="age-error" className="text-xs text-destructive hidden" role="alert">
                  Age must be between 18 and 120
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Section - Collapsible */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Code Implementation
                  </CardTitle>
                  <CardDescription className="mt-1">Number input with constraints</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection("number-input")}
                  className="gap-2"
                >
                  {expandedSections.has("number-input") ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedSections.has("number-input") && (
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="age-input">
    Age <span className="text-destructive">*</span>
  </label>
  <input
    id="age-input"
    type="number"
    min="18"
    max="120"
    step="1"
    aria-required="true"
    aria-describedby="age-hint age-error"
    aria-invalid="false"
  />
  <p id="age-hint" className="text-xs text-muted-foreground">
    Must be between 18 and 120
  </p>
  <p id="age-error" className="text-xs text-destructive" role="alert">
    Age must be between 18 and 120
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="age-input">
    Age <span className="text-destructive">*</span>
  </label>
  <input
    id="age-input"
    type="number"
    min="18"
    max="120"
    step="1"
    aria-required="true"
    aria-describedby="age-hint age-error"
    aria-invalid="false"
  />
  <p id="age-hint" className="text-xs text-muted-foreground">
    Must be between 18 and 120
  </p>
  <p id="age-error" className="text-xs text-destructive" role="alert">
    Age must be between 18 and 120
  </p>
</div>`, "number-input")}
                  >
                    {copiedCode === "number-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        {/* Tel Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Telephone Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Telephone input fields use <code className="bg-background px-1.5 py-0.5 rounded text-sm">type="tel"</code> 
                  to optimize mobile input by displaying a numeric keypad. Unlike number inputs, tel inputs accept 
                  various formats including dashes, parentheses, and spaces, making them ideal for international phone 
                  numbers. The <code className="bg-background px-1.5 py-0.5 rounded text-sm">autocomplete="tel"</code> 
                  attribute enables browsers and password managers to recognize and autofill phone numbers. Placeholders 
                  can provide format hints, but they should never replace labels as placeholders disappear when users 
                  start typing and may not be announced by screen readers.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Example - Full Width */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                Interactive Example
              </CardTitle>
              <CardDescription>Test the accessible telephone input implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Testing Guide
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test on mobile to see numeric keypad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Try different phone number formats</span>
                    </li>
                  </ul>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Test autocomplete with saved numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>Verify screen reader announces label</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-md space-y-2">
                <Label htmlFor="phone-input">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone-input"
                  type="tel"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  aria-required="true"
                  aria-describedby="phone-hint phone-error"
                />
                <p id="phone-hint" className="text-xs text-muted-foreground">
                  Include area code
                </p>
                <p id="phone-error" className="text-xs text-destructive hidden" role="alert">
                  Please enter a valid phone number
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Code Section - Collapsible */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    Code Implementation
                  </CardTitle>
                  <CardDescription className="mt-1">Tel input with autocomplete</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSection("tel-input")}
                  className="gap-2"
                >
                  {expandedSections.has("tel-input") ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Collapse Code
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Code
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedSections.has("tel-input") && (
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="phone-input">
    Phone Number <span className="text-destructive">*</span>
  </label>
  <input
    id="phone-input"
    type="tel"
    placeholder="(555) 123-4567"
    autoComplete="tel"
    aria-required="true"
    aria-describedby="phone-hint phone-error"
    aria-invalid="false"
  />
  <p id="phone-hint" className="text-xs text-muted-foreground">
    Include area code
  </p>
  <p id="phone-error" className="text-xs text-destructive" role="alert">
    Please enter a valid phone number
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="phone-input">
    Phone Number <span className="text-destructive">*</span>
  </label>
  <input
    id="phone-input"
    type="tel"
    placeholder="(555) 123-4567"
    autoComplete="tel"
    aria-required="true"
    aria-describedby="phone-hint phone-error"
    aria-invalid="false"
  />
  <p id="phone-hint" className="text-xs text-muted-foreground">
    Include area code
  </p>
  <p id="phone-error" className="text-xs text-destructive" role="alert">
    Please enter a valid phone number
  </p>
</div>`, "tel-input")}
                  >
                    {copiedCode === "tel-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        </section>

        {/* Date Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Date Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Dates are tricky! Is it MM/DD/YYYY or DD/MM/YYYY? Are we talking about the 4th of July or July 4th? 
                  This is where <code className="bg-background px-1.5 py-0.5 rounded text-sm">type="date"</code> becomes 
                  your best friend. It provides a native date picker that respects the user's locale and system settings, 
                  eliminating the "which format?" confusion entirely. No more users entering "13/25/2024" and wondering why 
                  it's invalid. The browser handles the formatting, validation, and even provides a nice calendar UI. 
                  It's like having a personal assistant who knows exactly how dates work in your user's part of the world. 
                  Accessibility win? Absolutely. User experience win? You betcha!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Date picker with accessible calendar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date-input">
                    Date of Birth <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="date-input"
                    type="date"
                    aria-required="true"
                    aria-describedby="date-hint date-error"
                  />
                  <p id="date-hint" className="text-xs text-muted-foreground">
                    Format: MM/DD/YYYY
                  </p>
                  <p id="date-error" className="text-xs text-destructive hidden" role="alert">
                    Please enter a valid date
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Date input with proper labeling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="date-input">
    Date of Birth <span className="text-destructive">*</span>
  </label>
  <input
    id="date-input"
    type="date"
    aria-required="true"
    aria-describedby="date-hint date-error"
    aria-invalid="false"
  />
  <p id="date-hint" className="text-xs text-muted-foreground">
    Format: MM/DD/YYYY
  </p>
  <p id="date-error" className="text-xs text-destructive" role="alert">
    Please enter a valid date
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="date-input">
    Date of Birth <span className="text-destructive">*</span>
  </label>
  <input
    id="date-input"
    type="date"
    aria-required="true"
    aria-describedby="date-hint date-error"
    aria-invalid="false"
  />
  <p id="date-hint" className="text-xs text-muted-foreground">
    Format: MM/DD/YYYY
  </p>
  <p id="date-error" className="text-xs text-destructive" role="alert">
    Please enter a valid date
  </p>
</div>`, "date-input")}
                  >
                    {copiedCode === "date-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Textarea */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Textarea</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Textareas are where users pour their hearts out (or at least their feedback). They're the big, 
                  spacious fields for longer content. But here's the thing: just because it's bigger doesn't mean 
                  it needs less attention! Character counters are like friendly reminders - "Hey, you've got 50 more 
                  characters before you hit the limit!" They help users stay within bounds without the frustration of 
                  hitting submit and discovering they're over. Use <code className="bg-background px-1.5 py-0.5 rounded text-sm">aria-live="polite"</code> 
                  on the counter so screen readers announce updates without being disruptive. And that 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">rows</code> attribute? Set it to a 
                  reasonable default (4-5 rows is usually perfect), but let it grow if needed. Nobody likes scrolling 
                  through a tiny box to write their novel-length complaint about shipping delays.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Multi-line text input with character counter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message-input">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message-input"
                    rows={4}
                    aria-required="true"
                    aria-describedby="message-hint message-error message-count"
                  />
                  <div className="flex justify-between items-center">
                    <p id="message-hint" className="text-xs text-muted-foreground">
                      Maximum 500 characters
                    </p>
                    <p id="message-count" className="text-xs text-muted-foreground" aria-live="polite">
                      0 / 500
                    </p>
                  </div>
                  <p id="message-error" className="text-xs text-destructive hidden" role="alert">
                    Message is required
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Textarea with character counter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="message-input">
    Message <span className="text-destructive">*</span>
  </label>
  <textarea
    id="message-input"
    rows={4}
    aria-required="true"
    aria-describedby="message-hint message-error message-count"
    aria-invalid="false"
  />
  <div className="flex justify-between">
    <p id="message-hint" className="text-xs text-muted-foreground">
      Maximum 500 characters
    </p>
    <p id="message-count" className="text-xs text-muted-foreground" aria-live="polite">
      0 / 500
    </p>
  </div>
  <p id="message-error" className="text-xs text-destructive" role="alert">
    Message is required
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="message-input">
    Message <span className="text-destructive">*</span>
  </label>
  <textarea
    id="message-input"
    rows={4}
    aria-required="true"
    aria-describedby="message-hint message-error message-count"
    aria-invalid="false"
  />
  <div className="flex justify-between">
    <p id="message-hint" className="text-xs text-muted-foreground">
      Maximum 500 characters
    </p>
    <p id="message-count" className="text-xs text-muted-foreground" aria-live="polite">
      0 / 500
    </p>
  </div>
  <p id="message-error" className="text-xs text-destructive" role="alert">
    Message is required
  </p>
</div>`, "textarea-input")}
                  >
                    {copiedCode === "textarea-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Select Dropdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Select Dropdown</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Dropdowns are the "choose your adventure" of forms. Country? Dropdown. State? Dropdown. Favorite 
                  pizza topping? You guessed it - dropdown! But here's where many forms go wrong: that first option 
                  that says "Select a country" or "Choose one..." needs to be an empty value, not just placeholder 
                  text. Why? Because when users skip it, you know they haven't made a choice yet. And always, 
                  always label your selects properly. A screen reader user navigating by form controls needs to know 
                  what they're selecting. Pro tip: if you have more than about 10 options, consider adding a search 
                  or grouping them. Nobody wants to scroll through 195 countries to find "Zambia" (though it's a 
                  lovely country, I'm sure). Keep it organized, keep it labeled, and your users will keep coming back!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Accessible select with proper labeling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country-select">
                    Country <span className="text-destructive">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="country-select" aria-required="true" aria-describedby="country-hint country-error">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                  <p id="country-hint" className="text-xs text-muted-foreground">
                    Select your country of residence
                  </p>
                  <p id="country-error" className="text-xs text-destructive hidden" role="alert">
                    Please select a country
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Select with proper ARIA attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="country-select">
    Country <span className="text-destructive">*</span>
  </label>
  <select
    id="country-select"
    aria-required="true"
    aria-describedby="country-hint country-error"
    aria-invalid="false"
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
  <p id="country-hint" className="text-xs text-muted-foreground">
    Select your country of residence
  </p>
  <p id="country-error" className="text-xs text-destructive" role="alert">
    Please select a country
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="country-select">
    Country <span className="text-destructive">*</span>
  </label>
  <select
    id="country-select"
    aria-required="true"
    aria-describedby="country-hint country-error"
    aria-invalid="false"
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
  <p id="country-hint" className="text-xs text-muted-foreground">
    Select your country of residence
  </p>
  <p id="country-error" className="text-xs text-destructive" role="alert">
    Please select a country
  </p>
</div>`, "select-input")}
                  >
                    {copiedCode === "select-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Checkbox */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Checkbox</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Checkboxes are the "yes, I agree" buttons of the web. Terms and conditions? Checkbox. Newsletter 
                  subscription? Checkbox. "Remember me"? You know it - checkbox! But here's the critical part: the 
                  label must be associated with the checkbox using the <code className="bg-background px-1.5 py-0.5 rounded text-sm">for</code> 
                  attribute (or wrap the input in the label). This isn't just for screen readers - it also makes the 
                  entire label clickable, which is a huge usability win. Ever tried to click a tiny checkbox on mobile? 
                  Yeah, not fun. But when the whole label is clickable? That's a much bigger target, and your users 
                  (and their thumbs) will thank you. And please, for the love of all that is good, don't make the 
                  checkbox required without clearly indicating it. A little asterisk and 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">aria-required="true"</code> go a long way!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Checkbox with proper label association</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms-checkbox" aria-required="true" aria-describedby="terms-hint terms-error" />
                  <div className="space-y-1">
                    <label
                      htmlFor="terms-checkbox"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions <span className="text-destructive">*</span>
                    </label>
                    <p id="terms-hint" className="text-xs text-muted-foreground">
                      You must agree to proceed
                    </p>
                    <p id="terms-error" className="text-xs text-destructive hidden" role="alert">
                      You must agree to the terms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Checkbox with label and error handling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="flex items-start space-x-2">
  <input
    type="checkbox"
    id="terms-checkbox"
    aria-required="true"
    aria-describedby="terms-hint terms-error"
    aria-invalid="false"
  />
  <div className="space-y-1">
    <label htmlFor="terms-checkbox" className="text-sm font-medium">
      I agree to the terms and conditions <span className="text-destructive">*</span>
    </label>
    <p id="terms-hint" className="text-xs text-muted-foreground">
      You must agree to proceed
    </p>
    <p id="terms-error" className="text-xs text-destructive" role="alert">
      You must agree to the terms
    </p>
  </div>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="flex items-start space-x-2">
  <input
    type="checkbox"
    id="terms-checkbox"
    aria-required="true"
    aria-describedby="terms-hint terms-error"
    aria-invalid="false"
  />
  <div className="space-y-1">
    <label htmlFor="terms-checkbox" className="text-sm font-medium">
      I agree to the terms and conditions <span className="text-destructive">*</span>
    </label>
    <p id="terms-hint" className="text-xs text-muted-foreground">
      You must agree to proceed
    </p>
    <p id="terms-error" className="text-xs text-destructive" role="alert">
      You must agree to the terms
    </p>
  </div>
</div>`, "checkbox-input")}
                  >
                    {copiedCode === "checkbox-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Radio Buttons */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Radio Buttons</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Radio buttons are like a multiple-choice test where you can only pick one answer. They're perfect for 
                  "choose one" scenarios, but they need to be grouped properly. Enter the <code className="bg-background px-1.5 py-0.5 rounded text-sm">fieldset</code> 
                  and <code className="bg-background px-1.5 py-0.5 rounded text-sm">legend</code> - the dynamic duo 
                  of accessible radio groups! The fieldset groups related options together, and the legend describes 
                  what the group is about. Screen readers announce the legend when users enter the group, giving crucial 
                  context. Think of it like a section header in a document - it tells you what you're about to read. 
                  And here's a fun fact: all radio buttons in a group must share the same <code className="bg-background px-1.5 py-0.5 rounded text-sm">name</code> 
                  attribute. It's how the browser knows "these are related, only one can be selected." It's like a 
                  family dinner where only one person can talk at a time - organized chaos, but it works!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Radio group with fieldset and legend</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <fieldset>
                  <legend className="text-sm font-medium mb-3">
                    Preferred Contact Method <span className="text-destructive">*</span>
                  </legend>
                  <div className="space-y-3" role="radiogroup" aria-required="true" aria-describedby="contact-hint contact-error">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="contact-email" name="contact" value="email" />
                      <label htmlFor="contact-email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="contact-phone" name="contact" value="phone" />
                      <label htmlFor="contact-phone" className="text-sm">
                        Phone
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="contact-mail" name="contact" value="mail" />
                      <label htmlFor="contact-mail" className="text-sm">
                        Mail
                      </label>
                    </div>
                  </div>
                  <p id="contact-hint" className="text-xs text-muted-foreground mt-2">
                    Select your preferred method
                  </p>
                  <p id="contact-error" className="text-xs text-destructive hidden" role="alert">
                    Please select a contact method
                  </p>
                </fieldset>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Radio group with fieldset</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<fieldset>
  <legend className="text-sm font-medium mb-3">
    Preferred Contact Method <span className="text-destructive">*</span>
  </legend>
  <div className="space-y-3" role="radiogroup" aria-required="true">
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-email" name="contact" value="email" />
      <label htmlFor="contact-email">Email</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-phone" name="contact" value="phone" />
      <label htmlFor="contact-phone">Phone</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-mail" name="contact" value="mail" />
      <label htmlFor="contact-mail">Mail</label>
    </div>
  </div>
  <p id="contact-hint" className="text-xs text-muted-foreground">
    Select your preferred method
  </p>
  <p id="contact-error" className="text-xs text-destructive" role="alert">
    Please select a contact method
  </p>
</fieldset>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<fieldset>
  <legend className="text-sm font-medium mb-3">
    Preferred Contact Method <span className="text-destructive">*</span>
  </legend>
  <div className="space-y-3" role="radiogroup" aria-required="true">
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-email" name="contact" value="email" />
      <label htmlFor="contact-email">Email</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-phone" name="contact" value="phone" />
      <label htmlFor="contact-phone">Phone</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="radio" id="contact-mail" name="contact" value="mail" />
      <label htmlFor="contact-mail">Mail</label>
    </div>
  </div>
  <p id="contact-hint" className="text-xs text-muted-foreground">
    Select your preferred method
  </p>
  <p id="contact-error" className="text-xs text-destructive" role="alert">
    Please select a contact method
  </p>
</fieldset>`, "radio-input")}
                  >
                    {copiedCode === "radio-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* File Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">File Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  File uploads are where things can get messy (literally and figuratively). Users might try to upload 
                  a 500MB video when you only accept PDFs under 5MB. The <code className="bg-background px-1.5 py-0.5 rounded text-sm">accept</code> 
                  attribute is your first line of defense - it filters the file picker to show only relevant file types. 
                  But here's the thing: it's a hint, not a security measure. Always validate on the server too! 
                  And those file size limits? Tell users upfront! There's nothing more frustrating than waiting for 
                  a file to upload only to get "file too large" at the end. Be clear about what you accept, how big 
                  it can be, and what happens next. A helpful hint like "Accepted formats: PDF, DOC, DOCX. Maximum 
                  size: 5MB" sets expectations and reduces frustration. It's like putting a "maximum occupancy" sign 
                  on an elevator - everyone knows the rules before they get in!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>File upload with proper labeling and constraints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file-input">
                    Upload Document <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="file-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    aria-required="true"
                    aria-describedby="file-hint file-error"
                  />
                  <p id="file-hint" className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
                  </p>
                  <p id="file-error" className="text-xs text-destructive hidden" role="alert">
                    Please select a valid file
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>File input with accept and constraints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="file-input">
    Upload Document <span className="text-destructive">*</span>
  </label>
  <input
    id="file-input"
    type="file"
    accept=".pdf,.doc,.docx"
    aria-required="true"
    aria-describedby="file-hint file-error"
    aria-invalid="false"
  />
  <p id="file-hint" className="text-xs text-muted-foreground">
    Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
  </p>
  <p id="file-error" className="text-xs text-destructive" role="alert">
    Please select a valid file
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="file-input">
    Upload Document <span className="text-destructive">*</span>
  </label>
  <input
    id="file-input"
    type="file"
    accept=".pdf,.doc,.docx"
    aria-required="true"
    aria-describedby="file-hint file-error"
    aria-invalid="false"
  />
  <p id="file-hint" className="text-xs text-muted-foreground">
    Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
  </p>
  <p id="file-error" className="text-xs text-destructive" role="alert">
    Please select a valid file
  </p>
</div>`, "file-input")}
                  >
                    {copiedCode === "file-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* URL Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">URL Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  URLs are like addresses for the internet - they need to be formatted correctly or you'll end up in 
                  the digital equivalent of a wrong neighborhood. Using <code className="bg-background px-1.5 py-0.5 rounded text-sm">type="url"</code> 
                  helps browsers validate the format and provides helpful hints. But here's where many developers 
                  stumble: validation. "example.com" looks like a URL, but it's missing the protocol (http:// or 
                  https://). Should you auto-add it? Should you require it? That's up to your use case, but whatever 
                  you choose, tell users! A helpful placeholder like "https://example.com" shows the expected format 
                  without being a label. And remember, <code className="bg-background px-1.5 py-0.5 rounded text-sm">autocomplete="url"</code> 
                  helps browsers and password managers recognize this field, making form filling smoother. It's all 
                  about reducing friction and helping users get where they need to go (pun intended)!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>URL input with validation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="url-input">
                    Website URL
                  </Label>
                  <Input
                    id="url-input"
                    type="url"
                    placeholder="https://example.com"
                    autoComplete="url"
                    aria-describedby="url-hint url-error"
                  />
                  <p id="url-hint" className="text-xs text-muted-foreground">
                    Include http:// or https://
                  </p>
                  <p id="url-error" className="text-xs text-destructive hidden" role="alert">
                    Please enter a valid URL
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>URL input with type="url"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="url-input">Website URL</label>
  <input
    id="url-input"
    type="url"
    placeholder="https://example.com"
    autoComplete="url"
    aria-describedby="url-hint url-error"
    aria-invalid="false"
  />
  <p id="url-hint" className="text-xs text-muted-foreground">
    Include http:// or https://
  </p>
  <p id="url-error" className="text-xs text-destructive" role="alert">
    Please enter a valid URL
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="url-input">Website URL</label>
  <input
    id="url-input"
    type="url"
    placeholder="https://example.com"
    autoComplete="url"
    aria-describedby="url-hint url-error"
    aria-invalid="false"
  />
  <p id="url-hint" className="text-xs text-muted-foreground">
    Include http:// or https://
  </p>
  <p id="url-error" className="text-xs text-destructive" role="alert">
    Please enter a valid URL
  </p>
</div>`, "url-input")}
                  >
                    {copiedCode === "url-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Search Input */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Search Input</h2>
          <div className="mb-6">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-left">
                  Search inputs are the "where's Waldo?" helpers of your site. They help users find what they're 
                  looking for without playing hide-and-seek with your navigation. The <code className="bg-background px-1.5 py-0.5 rounded text-sm">role="searchbox"</code> 
                  attribute tells assistive technologies "hey, this is for searching!" It's like putting a sign on 
                  a door that says "Search Here." And here's a neat trick: you can hide the label visually with 
                  <code className="bg-background px-1.5 py-0.5 rounded text-sm">sr-only</code> (screen reader only) 
                  if the search icon and placeholder make it obvious what the field is for. But always keep the label 
                  in the code for screen readers! They need that context. The placeholder can say "Search..." but 
                  the label should say "Search" (or be more specific like "Search products"). It's the difference 
                  between a helpful hint and essential information. Both are important, but they serve different purposes!
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Example</CardTitle>
                <CardDescription>Search input with proper role and labeling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search-input" className="sr-only">
                    Search
                  </Label>
                  <Input
                    id="search-input"
                    type="search"
                    placeholder="Search..."
                    role="searchbox"
                    aria-label="Search"
                    autoComplete="off"
                    aria-describedby="search-hint"
                  />
                  <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                    Search for content on this site
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
                <CardDescription>Search input with role="searchbox"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <label htmlFor="search-input" className="sr-only">
    Search
  </label>
  <input
    id="search-input"
    type="search"
    placeholder="Search..."
    role="searchbox"
    aria-label="Search"
    autoComplete="off"
    aria-describedby="search-hint"
  />
  <p id="search-hint" className="text-xs text-muted-foreground sr-only">
    Search for content on this site
  </p>
</div>`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`<div className="space-y-2">
  <label htmlFor="search-input" className="sr-only">
    Search
  </label>
  <input
    id="search-input"
    type="search"
    placeholder="Search..."
    role="searchbox"
    aria-label="Search"
    autoComplete="off"
    aria-describedby="search-hint"
  />
  <p id="search-hint" className="text-xs text-muted-foreground sr-only">
    Search for content on this site
  </p>
</div>`, "search-input")}
                  >
                    {copiedCode === "search-input" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete Form Example</h2>
          <Card>
            <CardHeader>
              <CardTitle>Accessible Contact Form</CardTitle>
              <CardDescription>
                A complete form demonstrating all best practices for accessible input fields
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="form-name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="form-name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby="form-name-error"
                    />
                    <p id="form-name-error" className="text-xs text-destructive hidden" role="alert">
                      Name is required
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="form-email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="form-email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby="form-email-error"
                    />
                    <p id="form-email-error" className="text-xs text-destructive hidden" role="alert">
                      Valid email is required
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="form-message"
                    rows={5}
                    aria-required="true"
                    aria-describedby="form-message-error"
                  />
                  <p id="form-message-error" className="text-xs text-destructive hidden" role="alert">
                    Message is required
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="form-consent" aria-required="true" aria-describedby="form-consent-error" />
                  <div className="space-y-1">
                    <label
                      htmlFor="form-consent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I consent to being contacted <span className="text-destructive">*</span>
                    </label>
                    <p id="form-consent-error" className="text-xs text-destructive hidden" role="alert">
                      Consent is required
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Submit Form
                </Button>
              </form>
            </CardContent>
          </Card>
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
                    <Link href="/criteria/4.1.2" className="text-primary hover:underline">
                      4.1.2 Name, Role, Value
                    </Link>
                  </li>
                  <li>
                    <Link href="/criteria/3.3.3" className="text-primary hover:underline">
                      3.3.3 Error Suggestion (AA)
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
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/apg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ARIA Authoring Practices
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      MDN ARIA Documentation
                      <ExternalLink className="h-3 w-3" />
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

