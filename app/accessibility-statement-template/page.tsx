import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Shield,
  BookOpen,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { TemplateDisplay } from "@/components/accessibility-statement-template-display"

export default function AccessibilityStatementTemplatePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Accessibility Statement Template - Free Generator & Examples",
    description: "Free accessibility statement template and generator. Create a WCAG 2.2 compliant accessibility statement for your website",
    url: "https://thewcag.com/accessibility-statement-template",
  }

  const template = `[Your Company/Organization Name] is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.

## Conformance Status

The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.

[Your Website Name] is partially conformant with WCAG 2.2 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.

## Feedback

We welcome your feedback on the accessibility of [Your Website Name]. Please let us know if you encounter accessibility barriers:

- Email: [your-email@example.com]
- Phone: [your-phone-number]
- Address: [your-address]

We try to respond to feedback within [X] business days.

## Known Issues

We are aware of the following accessibility issues on our website:

1. [Issue description and planned fix date]
2. [Issue description and planned fix date]

## Assessment Approach

[Your Company/Organization Name] assessed the accessibility of [Your Website Name] by the following approaches:

- Self-evaluation
- External evaluation (if applicable)

## Date

This statement was created on [Date] and last updated on [Date].`

  const sections = [
    {
      title: "Commitment Statement",
      description: "Express your organization's commitment to accessibility",
      required: true,
      example: "[Your Company] is committed to ensuring digital accessibility for people with disabilities.",
    },
    {
      title: "Conformance Status",
      description: "State your WCAG compliance level (A, AA, or AAA)",
      required: true,
      example: "[Your Website] is partially conformant with WCAG 2.2 level AA.",
    },
    {
      title: "Feedback Mechanism",
      description: "Provide ways for users to report accessibility issues",
      required: true,
      example: "Email: accessibility@example.com | Phone: (555) 123-4567",
    },
    {
      title: "Known Issues",
      description: "List any known accessibility barriers and remediation plans",
      required: false,
      example: "We are aware that some PDF documents are not fully accessible. We are working to remediate these.",
    },
    {
      title: "Assessment Approach",
      description: "Describe how you evaluated accessibility",
      required: false,
      example: "We assessed accessibility through self-evaluation and automated testing tools.",
    },
    {
      title: "Date Information",
      description: "Include creation and last updated dates",
      required: true,
      example: "Created: January 1, 2024 | Last Updated: March 15, 2024",
    },
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Accessibility Statement Template</h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground">
                Free accessibility statement template and guide. Create a WCAG 2.2 compliant accessibility statement
                for your website.
              </p>
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>What is an Accessibility Statement?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An accessibility statement is a public declaration of your website's accessibility status. It
                  demonstrates your commitment to accessibility and provides users with information about:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Your WCAG compliance level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>How users can report accessibility issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Known accessibility barriers and remediation plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Your assessment approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Free Template</h2>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Accessibility Statement Template</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Use the copy button to copy the entire template, then customize it with your organization's information.
                  </p>
                </CardHeader>
                <CardContent>
                  <TemplateDisplay template={template} />
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Required Sections</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {sections.map((section, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        {section.required && (
                          <Badge variant="destructive" className="text-xs">
                            Required
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-3 rounded text-sm text-muted-foreground">
                        {section.example}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Card className="mb-12 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Be honest:</strong> Don't claim full compliance if you have
                      known issues. Transparency builds trust.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Update regularly:</strong> Review and update your statement
                      quarterly or after major changes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Make it accessible:</strong> Ensure the statement page itself
                      is accessible and easy to find.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Link prominently:</strong> Include a link to your
                      accessibility statement in the footer.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/accessibility">
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Our Accessibility Statement</div>
                        <div className="text-xs text-muted-foreground">See our example</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Verify compliance</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/accessibility-audit-guide">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Audit Guide</div>
                        <div className="text-xs text-muted-foreground">Conduct accessibility audit</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
