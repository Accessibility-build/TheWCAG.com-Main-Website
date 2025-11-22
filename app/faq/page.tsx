import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Shield,
  Code,
  FileText,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"

export default function FAQPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WCAG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG (Web Content Accessibility Guidelines) is a set of international standards developed by the W3C to make web content accessible to people with disabilities. WCAG 2.2 is the latest version, providing guidelines organized into four principles: Perceivable, Operable, Understandable, and Robust (POUR).",
        },
      },
      {
        "@type": "Question",
        name: "What are the WCAG compliance levels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG has three compliance levels: Level A (minimum), Level AA (recommended for most websites), and Level AAA (highest). Most organizations aim for Level AA compliance, which balances accessibility improvements with practical implementation.",
        },
      },
      {
        "@type": "Question",
        name: "Is WCAG compliance required by law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG itself is not a law, but many countries have incorporated WCAG standards into their legal frameworks. In the US, ADA and Section 508 reference WCAG. In the EU, EN 301 549 requires WCAG compliance. Many jurisdictions require WCAG 2.0 or 2.1 Level AA compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between WCAG 2.1 and WCAG 2.2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WCAG 2.2 builds upon WCAG 2.1 by adding new success criteria, particularly for mobile accessibility, low vision users, and users with cognitive disabilities. WCAG 2.2 includes 9 new success criteria while maintaining backward compatibility with 2.1.",
        },
      },
      {
        "@type": "Question",
        name: "How do I test my website for WCAG compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Testing involves both automated tools (like axe DevTools, WAVE, Lighthouse) and manual testing (keyboard navigation, screen reader testing). A comprehensive approach includes automated scans, manual testing with assistive technologies, and user testing with people with disabilities.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to make a website WCAG compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The time varies significantly based on website size, complexity, and current accessibility state. A small website might take weeks, while a large enterprise site could take months. It's best to integrate accessibility from the start of development rather than retrofitting.",
        },
      },
      {
        "@type": "Question",
        name: "Do accessibility overlays make websites compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Accessibility overlays are controversial and often don't provide true compliance. Many accessibility experts recommend fixing issues at the code level rather than relying on overlay widgets, as overlays may not work with all assistive technologies and can create additional barriers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum color contrast ratio for WCAG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Level AA: 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). For Level AAA: 7:1 for normal text and 4.5:1 for large text. These ratios ensure text is readable for users with low vision.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to provide captions for all videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for Level A compliance, all pre-recorded audio content in synchronized media (videos) must have captions. For Level AA, live captions are also required for live audio content. This ensures deaf and hard-of-hearing users can access video content.",
        },
      },
      {
        "@type": "Question",
        name: "What is alt text and when is it required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alt text (alternative text) is a text description of images that screen readers announce. It's required for all informative images (Level A). Decorative images should have empty alt attributes. Alt text should be concise, descriptive, and convey the image's purpose and content.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use JavaScript and still be WCAG compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, JavaScript is allowed in WCAG-compliant websites. However, you must ensure keyboard accessibility, proper ARIA labels, focus management, and that content is accessible without JavaScript when possible. Progressive enhancement is recommended.",
        },
      },
      {
        "@type": "Question",
        name: "What is ARIA and when should I use it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ARIA (Accessible Rich Internet Applications) is a set of attributes that enhance HTML for assistive technologies. Use ARIA when semantic HTML isn't sufficient, such as for custom widgets, dynamic content, or complex interactions. However, prefer semantic HTML over ARIA when possible.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I audit my website for accessibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regular audits are essential. Conduct automated scans regularly (weekly or monthly), manual testing quarterly, and comprehensive audits annually or when making major changes. Accessibility should be part of your continuous development process, not a one-time check.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common WCAG violations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common violations include: missing alt text, insufficient color contrast, missing form labels, keyboard navigation issues, missing focus indicators, improper heading hierarchy, missing ARIA labels, and inaccessible PDFs. Most can be fixed with proper HTML semantics and CSS.",
        },
      },
      {
        "@type": "Question",
        name: "Does mobile accessibility differ from desktop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the same WCAG principles apply, mobile has specific considerations: touch target sizes (minimum 24x24px for Level AA, 44x44px for Level AAA), orientation support, gesture alternatives, and mobile screen reader compatibility. WCAG 2.2 added criteria specifically for mobile accessibility.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my website isn't WCAG compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-compliance can result in legal action (lawsuits under ADA, Section 508, etc.), loss of customers, exclusion from government contracts, reputational damage, and missed business opportunities. Many organizations face accessibility lawsuits each year.",
        },
      },
    ],
  }

  const faqs = [
    {
      category: "WCAG Basics",
      questions: [
        {
          q: "What is WCAG?",
          a: "WCAG (Web Content Accessibility Guidelines) is a set of international standards developed by the W3C to make web content accessible to people with disabilities. WCAG 2.2 is the latest version, providing guidelines organized into four principles: Perceivable, Operable, Understandable, and Robust (POUR).",
        },
        {
          q: "What are the WCAG compliance levels?",
          a: "WCAG has three compliance levels: Level A (minimum), Level AA (recommended for most websites), and Level AAA (highest). Most organizations aim for Level AA compliance, which balances accessibility improvements with practical implementation.",
        },
        {
          q: "What's the difference between WCAG 2.1 and WCAG 2.2?",
          a: "WCAG 2.2 builds upon WCAG 2.1 by adding new success criteria, particularly for mobile accessibility, low vision users, and users with cognitive disabilities. WCAG 2.2 includes 9 new success criteria while maintaining backward compatibility with 2.1.",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      questions: [
        {
          q: "Is WCAG compliance required by law?",
          a: "WCAG itself is not a law, but many countries have incorporated WCAG standards into their legal frameworks. In the US, ADA and Section 508 reference WCAG. In the EU, EN 301 549 requires WCAG compliance. Many jurisdictions require WCAG 2.0 or 2.1 Level AA compliance.",
        },
        {
          q: "What happens if my website isn't WCAG compliant?",
          a: "Non-compliance can result in legal action (lawsuits under ADA, Section 508, etc.), loss of customers, exclusion from government contracts, reputational damage, and missed business opportunities. Many organizations face accessibility lawsuits each year.",
        },
        {
          q: "Do accessibility overlays make websites compliant?",
          a: "No. Accessibility overlays are controversial and often don't provide true compliance. Many accessibility experts recommend fixing issues at the code level rather than relying on overlay widgets, as overlays may not work with all assistive technologies and can create additional barriers.",
        },
      ],
    },
    {
      category: "Testing & Implementation",
      questions: [
        {
          q: "How do I test my website for WCAG compliance?",
          a: "Testing involves both automated tools (like axe DevTools, WAVE, Lighthouse) and manual testing (keyboard navigation, screen reader testing). A comprehensive approach includes automated scans, manual testing with assistive technologies, and user testing with people with disabilities.",
        },
        {
          q: "How long does it take to make a website WCAG compliant?",
          a: "The time varies significantly based on website size, complexity, and current accessibility state. A small website might take weeks, while a large enterprise site could take months. It's best to integrate accessibility from the start of development rather than retrofitting.",
        },
        {
          q: "How often should I audit my website for accessibility?",
          a: "Regular audits are essential. Conduct automated scans regularly (weekly or monthly), manual testing quarterly, and comprehensive audits annually or when making major changes. Accessibility should be part of your continuous development process, not a one-time check.",
        },
        {
          q: "What are the most common WCAG violations?",
          a: "Common violations include: missing alt text, insufficient color contrast, missing form labels, keyboard navigation issues, missing focus indicators, improper heading hierarchy, missing ARIA labels, and inaccessible PDFs. Most can be fixed with proper HTML semantics and CSS.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "What is the minimum color contrast ratio for WCAG?",
          a: "For Level AA: 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). For Level AAA: 7:1 for normal text and 4.5:1 for large text. These ratios ensure text is readable for users with low vision.",
        },
        {
          q: "What is alt text and when is it required?",
          a: "Alt text (alternative text) is a text description of images that screen readers announce. It's required for all informative images (Level A). Decorative images should have empty alt attributes. Alt text should be concise, descriptive, and convey the image's purpose and content.",
        },
        {
          q: "Can I use JavaScript and still be WCAG compliant?",
          a: "Yes, JavaScript is allowed in WCAG-compliant websites. However, you must ensure keyboard accessibility, proper ARIA labels, focus management, and that content is accessible without JavaScript when possible. Progressive enhancement is recommended.",
        },
        {
          q: "What is ARIA and when should I use it?",
          a: "ARIA (Accessible Rich Internet Applications) is a set of attributes that enhance HTML for assistive technologies. Use ARIA when semantic HTML isn't sufficient, such as for custom widgets, dynamic content, or complex interactions. However, prefer semantic HTML over ARIA when possible.",
        },
      ],
    },
    {
      category: "Content & Media",
      questions: [
        {
          q: "Do I need to provide captions for all videos?",
          a: "Yes, for Level A compliance, all pre-recorded audio content in synchronized media (videos) must have captions. For Level AA, live captions are also required for live audio content. This ensures deaf and hard-of-hearing users can access video content.",
        },
        {
          q: "Does mobile accessibility differ from desktop?",
          a: "While the same WCAG principles apply, mobile has specific considerations: touch target sizes (minimum 44x44px), orientation support, gesture alternatives, and mobile screen reader compatibility. WCAG 2.2 added criteria specifically for mobile accessibility.",
        },
      ],
    },
  ]

  return (
    <>
      <StructuredData data={faqData} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about WCAG, web accessibility, compliance, and best practices.
              </p>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <section key={categoryIndex} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg md:text-xl flex items-start gap-3">
                            <HelpCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                            <span>{faq.q}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed pl-8">{faq.a}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Related Resources */}
            <Card className="mt-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Explore our comprehensive resources to learn more about web accessibility and WCAG compliance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Interactive compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/learn">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Learn Accessibility</div>
                        <div className="text-xs text-muted-foreground">Educational resources</div>
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
                    <Link href="/tools">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Testing Tools</div>
                        <div className="text-xs text-muted-foreground">Accessibility testing tools</div>
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

