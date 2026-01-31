"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    FileText,
    Download,
    ArrowLeft,
    Copy,
    Check,
    Building2,
    Scale,
    Mail,
    FileIcon
} from "lucide-react"

interface FormData {
    organizationName: string
    websiteName: string
    email: string
    phone: string
    address: string
    responseDays: string
    date: string
    auditorName: string
    conformanceLevel: string
}

function generateStatement(data: FormData): string {
    return `Accessibility Statement for ${data.organizationName || "[Organization Name]"}

${data.organizationName || "[Organization Name]"} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

Conformance Status
------------------
We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level ${data.conformanceLevel || "AA"}. These guidelines explain how to make web content more accessible for people with disabilities.

Measures to Support Accessibility
---------------------------------
${data.organizationName || "[Organization Name]"} takes the following measures to ensure accessibility:
• Include accessibility as part of our mission statement
• Integrate accessibility into our procurement practices
• Appoint an accessibility officer and/or ombudsperson
• Provide continual accessibility training for our staff
• Include people with disabilities in our design personas

Feedback
--------
We welcome your feedback on the accessibility of ${data.websiteName || "[Website Name]"}. Please let us know if you encounter accessibility barriers:

• Email: ${data.email || "[accessibility@example.com]"}
• Phone: ${data.phone || "[phone number]"}
• Mailing Address: ${data.address || "[address]"}

We try to respond to feedback within ${data.responseDays || "[X]"} business days.

Technical Specifications
------------------------
Accessibility of ${data.websiteName || "[Website Name]"} relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
• HTML
• CSS
• JavaScript
• WAI-ARIA

These technologies are relied upon for conformance with the accessibility standards used.

Limitations and Alternatives
----------------------------
Despite our best efforts to ensure accessibility of ${data.websiteName || "[Website Name]"}, there may be some limitations. Below is a description of known limitations:

1. [Description of limitation]: [Reason]. [Alternative solution or contact information].
2. [Add more as needed]

Assessment Approach
-------------------
${data.organizationName || "[Organization Name]"} assessed the accessibility of ${data.websiteName || "[Website Name]"} by the following approaches:
• Self-evaluation
${data.auditorName ? `• External evaluation by ${data.auditorName}` : "• External evaluation by [auditor name] (if applicable)"}

Date
----
This statement was created on ${data.date || "[date]"} using the W3C Accessibility Statement Generator Tool.`
}

export default function AccessibilityStatementTemplatePage() {
    const [copied, setCopied] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        organizationName: "",
        websiteName: "",
        email: "",
        phone: "",
        address: "",
        responseDays: "5",
        date: new Date().toLocaleDateString(),
        auditorName: "",
        conformanceLevel: "AA"
    })

    const statement = generateStatement(formData)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(statement)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const downloadAsWord = () => {
        // Create Word-compatible HTML
        const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
      <head><meta charset="utf-8"><title>Accessibility Statement</title></head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1>Accessibility Statement for ${formData.organizationName || "[Organization Name]"}</h1>
        <p>${formData.organizationName || "[Organization Name]"} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
        
        <h2>Conformance Status</h2>
        <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level ${formData.conformanceLevel || "AA"}. These guidelines explain how to make web content more accessible for people with disabilities.</p>
        
        <h2>Measures to Support Accessibility</h2>
        <p>${formData.organizationName || "[Organization Name]"} takes the following measures to ensure accessibility:</p>
        <ul>
          <li>Include accessibility as part of our mission statement</li>
          <li>Integrate accessibility into our procurement practices</li>
          <li>Appoint an accessibility officer and/or ombudsperson</li>
          <li>Provide continual accessibility training for our staff</li>
          <li>Include people with disabilities in our design personas</li>
        </ul>
        
        <h2>Feedback</h2>
        <p>We welcome your feedback on the accessibility of ${formData.websiteName || "[Website Name]"}. Please let us know if you encounter accessibility barriers:</p>
        <ul>
          <li>Email: ${formData.email || "[accessibility@example.com]"}</li>
          <li>Phone: ${formData.phone || "[phone number]"}</li>
          <li>Mailing Address: ${formData.address || "[address]"}</li>
        </ul>
        <p>We try to respond to feedback within ${formData.responseDays || "[X]"} business days.</p>
        
        <h2>Technical Specifications</h2>
        <p>Accessibility of ${formData.websiteName || "[Website Name]"} relies on the following technologies:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>WAI-ARIA</li>
        </ul>
        
        <h2>Limitations and Alternatives</h2>
        <p>Despite our best efforts to ensure accessibility, there may be some limitations. Known limitations:</p>
        <ol>
          <li>[Description of limitation]: [Reason]. [Alternative solution].</li>
          <li>[Add more as needed]</li>
        </ol>
        
        <h2>Assessment Approach</h2>
        <p>${formData.organizationName || "[Organization Name]"} assessed the accessibility by:</p>
        <ul>
          <li>Self-evaluation</li>
          ${formData.auditorName ? `<li>External evaluation by ${formData.auditorName}</li>` : "<li>External evaluation (if applicable)</li>"}
        </ul>
        
        <h2>Date</h2>
        <p>This statement was created on ${formData.date || "[date]"}.</p>
      </body>
      </html>
    `

        const blob = new Blob([html], { type: 'application/msword' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'accessibility-statement.doc'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1">
                    <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Resources", href: "/resources" },
                                { label: "Templates", href: "/resources/templates" },
                                { label: "Accessibility Statement", href: "/resources/templates/accessibility-statement" },
                            ]}
                        />

                        <Link
                            href="/resources/templates"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Templates
                        </Link>

                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                    <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <Badge variant="secondary">Word Document</Badge>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                Accessibility Statement Template
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Fill in your organization's details below and download a ready-to-use accessibility statement
                                for your website. The preview updates in real-time as you type.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <Tabs defaultValue="fill" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="fill">Fill Details</TabsTrigger>
                                        <TabsTrigger value="preview">Preview Statement</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="fill" className="mt-4">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">Your Organization Details</CardTitle>
                                                <CardDescription>Fill in these fields to customize your statement</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="orgName">Organization Name *</Label>
                                                        <Input
                                                            id="orgName"
                                                            placeholder="Acme Corporation"
                                                            value={formData.organizationName}
                                                            onChange={(e) => updateField("organizationName", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="webName">Website Name *</Label>
                                                        <Input
                                                            id="webName"
                                                            placeholder="Acme.com"
                                                            value={formData.websiteName}
                                                            onChange={(e) => updateField("websiteName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Accessibility Email *</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            placeholder="accessibility@acme.com"
                                                            value={formData.email}
                                                            onChange={(e) => updateField("email", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Contact Phone</Label>
                                                        <Input
                                                            id="phone"
                                                            placeholder="+1 (555) 123-4567"
                                                            value={formData.phone}
                                                            onChange={(e) => updateField("phone", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="address">Mailing Address</Label>
                                                    <Textarea
                                                        id="address"
                                                        placeholder="123 Main St, City, State 12345"
                                                        value={formData.address}
                                                        onChange={(e) => updateField("address", e.target.value)}
                                                        rows={2}
                                                    />
                                                </div>

                                                <div className="grid sm:grid-cols-3 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="level">Conformance Level</Label>
                                                        <select
                                                            id="level"
                                                            className="w-full h-10 px-3 rounded-md border bg-background"
                                                            value={formData.conformanceLevel}
                                                            onChange={(e) => updateField("conformanceLevel", e.target.value)}
                                                        >
                                                            <option value="A">Level A</option>
                                                            <option value="AA">Level AA</option>
                                                            <option value="AAA">Level AAA</option>
                                                        </select>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="days">Response Days</Label>
                                                        <Input
                                                            id="days"
                                                            type="number"
                                                            placeholder="5"
                                                            value={formData.responseDays}
                                                            onChange={(e) => updateField("responseDays", e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="date">Statement Date</Label>
                                                        <Input
                                                            id="date"
                                                            type="date"
                                                            value={formData.date}
                                                            onChange={(e) => updateField("date", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="auditor">External Auditor (Optional)</Label>
                                                    <Input
                                                        id="auditor"
                                                        placeholder="Accessibility Audit Inc."
                                                        value={formData.auditorName}
                                                        onChange={(e) => updateField("auditorName", e.target.value)}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="preview" className="mt-4">
                                        <Card>
                                            <CardHeader className="flex flex-row items-center justify-between">
                                                <CardTitle className="text-lg">Statement Preview</CardTitle>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={copyToClipboard}
                                                    className="gap-2"
                                                >
                                                    {copied ? (
                                                        <>
                                                            <Check className="h-4 w-4 text-green-600" />
                                                            Copied!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="h-4 w-4" />
                                                            Copy Text
                                                        </>
                                                    )}
                                                </Button>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="bg-muted/50 rounded-lg p-4 max-h-[500px] overflow-y-auto">
                                                    <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
                                                        {statement}
                                                    </pre>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>

                                {/* Why You Need This */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Scale className="h-5 w-5" />
                                            Why You Need an Accessibility Statement
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="p-4 rounded-lg bg-muted/50">
                                                <Building2 className="h-6 w-6 text-primary mb-2" />
                                                <h3 className="font-semibold mb-1">Legal Compliance</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Required under ADA, Section 508, EAA, and other accessibility laws.
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-lg bg-muted/50">
                                                <Mail className="h-6 w-6 text-primary mb-2" />
                                                <h3 className="font-semibold mb-1">Feedback Channel</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Provides a way for users to report issues and get help.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div>
                                <Card className="sticky top-6">
                                    <CardHeader>
                                        <CardTitle>Download Statement</CardTitle>
                                        <CardDescription>Get your customized statement</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Button
                                            size="lg"
                                            onClick={downloadAsWord}
                                            className="w-full gap-2"
                                        >
                                            <FileIcon className="h-5 w-5" />
                                            Download Word (.doc)
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={copyToClipboard}
                                            className="w-full gap-2"
                                        >
                                            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                                            {copied ? "Copied!" : "Copy to Clipboard"}
                                        </Button>
                                        <div className="text-xs text-muted-foreground space-y-1">
                                            <p>• Fill in your details above</p>
                                            <p>• Preview updates in real-time</p>
                                            <p>• Download as Word document</p>
                                        </div>
                                        <hr />
                                        <div className="text-sm">
                                            <p className="font-medium mb-2">Related Resources</p>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li>
                                                    <Link href="/wcag-2-2" className="hover:text-primary transition-colors">
                                                        → WCAG 2.2 Overview
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/checklist" className="hover:text-primary transition-colors">
                                                        → WCAG Checklist
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
