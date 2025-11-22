import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Shield,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react"

export default function IndustryGuidesPage() {
  const industries = [
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      description:
        "E-commerce websites must be accessible to all customers, including those with disabilities. Accessibility is not only a legal requirement but also expands your customer base and improves SEO.",
      requirements: [
        "WCAG 2.1 Level AA compliance (often required by law)",
        "Accessible product images with descriptive alt text",
        "Keyboard-accessible shopping cart and checkout",
        "Accessible forms for account creation and checkout",
        "Screen reader compatible product descriptions",
        "Accessible payment processing",
      ],
      keyCriteria: [
        { id: "1.1.1", title: "Non-text Content", reason: "Product images need alt text" },
        { id: "2.1.1", title: "Keyboard", reason: "All shopping functions must be keyboard accessible" },
        { id: "3.3.2", title: "Labels or Instructions", reason: "Forms must be clearly labeled" },
        { id: "4.1.2", title: "Name, Role, Value", reason: "Interactive elements must be properly identified" },
      ],
      commonIssues: [
        "Missing alt text on product images",
        "Inaccessible shopping cart",
        "Keyboard traps in checkout process",
        "Poor form labels",
        "Inaccessible payment forms",
      ],
      bestPractices: [
        "Provide detailed product descriptions",
        "Ensure all interactive elements are keyboard accessible",
        "Test checkout process with screen readers",
        "Use clear error messages in forms",
        "Provide multiple ways to contact support",
      ],
      legal: "ADA Title III applies to e-commerce sites. Many e-commerce lawsuits have been filed for accessibility violations.",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      color: "bg-green-500/10 text-green-600 border-green-500/20",
      description:
        "Educational institutions must ensure their websites and learning management systems are accessible to all students, including those with disabilities. Section 508 and ADA requirements apply.",
      requirements: [
        "WCAG 2.0 Level AA (Section 508 requirement)",
        "Accessible learning management systems (LMS)",
        "Accessible course materials and documents",
        "Accessible video content with captions",
        "Accessible online assessments and quizzes",
        "Accessible student portals and registration systems",
      ],
      keyCriteria: [
        { id: "1.2.2", title: "Captions (Prerecorded)", reason: "Educational videos need captions" },
        { id: "1.4.3", title: "Contrast (Minimum)", reason: "Text must be readable" },
        { id: "2.4.6", title: "Headings and Labels", reason: "Content structure is critical" },
        { id: "3.3.1", title: "Error Identification", reason: "Forms must clearly identify errors" },
      ],
      commonIssues: [
        "Inaccessible PDF documents",
        "Videos without captions",
        "Inaccessible LMS platforms",
        "Poor heading structure",
        "Inaccessible online exams",
      ],
      bestPractices: [
        "Provide captions for all video content",
        "Ensure PDFs are accessible or provide HTML alternatives",
        "Test LMS with screen readers",
        "Use proper heading hierarchy",
        "Provide alternative formats for course materials",
      ],
      legal: "Section 508 requires federal educational institutions to be accessible. Many states have additional requirements.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      color: "bg-red-500/10 text-red-600 border-red-500/20",
      description:
        "Healthcare websites must be accessible to ensure all patients can access critical health information, schedule appointments, and use patient portals. ADA compliance is essential.",
      requirements: [
        "WCAG 2.1 Level AA (ADA requirement)",
        "Accessible patient portals",
        "Accessible appointment scheduling",
        "Accessible medical forms",
        "Accessible health information and resources",
        "Accessible telemedicine platforms",
      ],
      keyCriteria: [
        { id: "1.3.1", title: "Info and Relationships", reason: "Medical forms must be properly structured" },
        { id: "2.1.1", title: "Keyboard", reason: "All functions must be keyboard accessible" },
        { id: "3.3.2", title: "Labels or Instructions", reason: "Forms must be clearly labeled" },
        { id: "4.1.3", title: "Status Messages", reason: "Important status updates must be announced" },
      ],
      commonIssues: [
        "Inaccessible patient portals",
        "Complex medical forms without proper labels",
        "Inaccessible appointment scheduling",
        "PDF medical forms that aren't accessible",
        "Inaccessible telemedicine platforms",
      ],
      bestPractices: [
        "Ensure patient portals are fully keyboard accessible",
        "Provide clear instructions for medical forms",
        "Test with screen readers regularly",
        "Provide alternative contact methods",
        "Ensure emergency information is accessible",
      ],
      legal: "ADA Title III applies to healthcare providers. Inaccessible healthcare websites can prevent patients from accessing critical services.",
    },
    {
      id: "government",
      name: "Government",
      icon: Shield,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      description:
        "Government websites must comply with Section 508, which requires WCAG 2.0 Level AA compliance. This applies to all federal agencies and many state/local governments.",
      requirements: [
        "WCAG 2.0 Level AA (Section 508 requirement)",
        "Accessible government services and applications",
        "Accessible forms and documents",
        "Accessible voting systems (where applicable)",
        "Accessible public information",
        "Accessible emergency alerts",
      ],
      keyCriteria: [
        { id: "2.4.1", title: "Bypass Blocks", reason: "Skip links are essential" },
        { id: "2.4.6", title: "Headings and Labels", reason: "Clear structure is required" },
        { id: "3.3.1", title: "Error Identification", reason: "Forms must identify errors" },
        { id: "4.1.2", title: "Name, Role, Value", reason: "All components must be accessible" },
      ],
      commonIssues: [
        "Inaccessible PDF documents",
        "Complex forms without proper labels",
        "Missing skip links",
        "Poor heading structure",
        "Inaccessible government portals",
      ],
      bestPractices: [
        "Ensure all PDFs are accessible or provide HTML alternatives",
        "Implement skip links on all pages",
        "Use proper heading hierarchy",
        "Test with multiple assistive technologies",
        "Provide accessible alternatives for complex content",
      ],
      legal: "Section 508 mandates WCAG 2.0 Level AA for all federal agencies. Many states have similar requirements.",
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: DollarSign,
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      description:
        "Financial institutions must ensure their websites and online banking platforms are accessible. ADA compliance is required, and inaccessible banking can prevent customers from managing their finances.",
      requirements: [
        "WCAG 2.1 Level AA (ADA requirement)",
        "Accessible online banking platforms",
        "Accessible account management",
        "Accessible financial forms and applications",
        "Accessible transaction history",
        "Accessible bill payment systems",
      ],
      keyCriteria: [
        { id: "2.1.1", title: "Keyboard", reason: "Banking must be fully keyboard accessible" },
        { id: "3.3.2", title: "Labels or Instructions", reason: "Financial forms must be clear" },
        { id: "4.1.2", title: "Name, Role, Value", reason: "All banking functions must be accessible" },
        { id: "4.1.3", title: "Status Messages", reason: "Transaction status must be announced" },
      ],
      commonIssues: [
        "Inaccessible online banking",
        "Complex forms without proper labels",
        "Keyboard traps in transaction flows",
        "Inaccessible account statements",
        "Security features that block assistive technologies",
      ],
      bestPractices: [
        "Ensure all banking functions are keyboard accessible",
        "Provide clear error messages for failed transactions",
        "Test with screen readers regularly",
        "Ensure security features don't block accessibility",
        "Provide alternative access methods",
      ],
      legal: "ADA Title III applies to financial institutions. Inaccessible banking can result in lawsuits and loss of customers.",
    },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Industry-Specific Accessibility Guides</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Tailored accessibility guides for different industries. Learn industry-specific requirements, common
                issues, and best practices.
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Why Industry-Specific Guides?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  While WCAG applies to all websites, different industries have unique challenges, requirements, and
                  common issues. These guides help you understand what's most important for your specific sector and
                  how to prioritize accessibility improvements.
                </p>
              </CardContent>
            </Card>

            {/* Industry Guides */}
            <div className="space-y-12 mb-12">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <Card key={industry.id} className={`border-2 ${industry.color} hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${industry.color} shrink-0`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{industry.name}</CardTitle>
                          <CardDescription className="text-base">{industry.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Requirements
                        </h3>
                        <ul className="space-y-2">
                          {industry.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Key WCAG Criteria
                          </h3>
                          <div className="space-y-2">
                            {industry.keyCriteria.map((criteria, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <Badge variant="outline" className="shrink-0">
                                  {criteria.id}
                                </Badge>
                                <div>
                                  <div className="font-medium">{criteria.title}</div>
                                  <div className="text-xs text-muted-foreground">{criteria.reason}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                            Common Issues
                          </h3>
                          <ul className="space-y-2">
                            {industry.commonIssues.map((issue, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>{issue}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Best Practices
                        </h3>
                        <ul className="space-y-2">
                          {industry.bestPractices.map((practice, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                              <span>{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Legal Considerations
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{industry.legal}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Legal requirements by region</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Complete compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/testing-guide">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Guide</div>
                        <div className="text-xs text-muted-foreground">How to test for compliance</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/getting-started">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Getting Started</div>
                        <div className="text-xs text-muted-foreground">Beginner's guide</div>
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

