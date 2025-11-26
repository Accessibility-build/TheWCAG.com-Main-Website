import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, FileText, AlertCircle, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Website Terms & Conditions | TheWCAG",
  description:
    "TheWCAG.com Terms of Service. Read our terms and conditions governing the use of our website, including permitted use, intellectual property, disclaimers, and limitations of liability.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "website terms",
    "legal terms",
    "user agreement",
    "disclaimer",
  ],
  openGraph: {
    title: "Terms of Service - Website Terms & Conditions",
    description:
      "Read TheWCAG.com's terms and conditions governing website use, intellectual property, and disclaimers.",
    url: "https://thewcag.com/terms",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
  },
  alternates: {
    canonical: "https://thewcag.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Terms of Service</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of TheWCAG.com ("we," "us," or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
                </p>
              </CardContent>
            </Card>

            {/* Use of Website */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Use of Website
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Permitted Use</h3>
                    <p className="text-muted-foreground mb-2">
                      You may use our website for lawful purposes only. You agree to use the website in accordance with all applicable laws and regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Prohibited Activities</h3>
                    <p className="text-muted-foreground mb-2">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Use the website in any way that violates any applicable law or regulation</li>
                      <li>Attempt to gain unauthorized access to any portion of the website</li>
                      <li>Interfere with or disrupt the website or servers connected to the website</li>
                      <li>Use automated systems (bots, scrapers) to access the website without permission</li>
                      <li>Reproduce, duplicate, copy, or exploit any portion of the website for commercial purposes without express written permission</li>
                      <li>Transmit any viruses, malware, or other harmful code</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Intellectual Property
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Content</h3>
                    <p className="text-muted-foreground">
                      All content on TheWCAG.com, including text, graphics, logos, images, and software, is the property of TheWCAG.com or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">WCAG Guidelines</h3>
                    <p className="text-muted-foreground">
                      The Web Content Accessibility Guidelines (WCAG) are published by the World Wide Web Consortium (W3C). Our website provides interpretations, examples, and educational content about WCAG, but the official WCAG guidelines remain the property of W3C.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">License to Use</h3>
                    <p className="text-muted-foreground">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. This license does not include the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                      <li>Resell or make commercial use of our website or its content</li>
                      <li>Collect or use any product listings, descriptions, or prices</li>
                      <li>Make derivative use of our website or its content</li>
                      <li>Use data mining, robots, or similar data gathering tools</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Disclaimer of Warranties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Warranties of merchantability and fitness for a particular purpose</li>
                    <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
                    <li>Warranties regarding the accuracy, reliability, or completeness of information</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We do not warrant that the website will meet your requirements or that any errors will be corrected.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To the fullest extent permitted by law, TheWCAG.com and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the website.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You agree to indemnify, defend, and hold harmless TheWCAG.com and its owners, employees, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the website or violation of these Terms.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Links to Third-Party Sites */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Links to Third-Party Websites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party website.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the appropriate courts.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Website:</strong> <Link href="/contact" className="text-primary hover:underline">Contact Us Page</Link>
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:work@thewcag.com" className="text-primary hover:underline">work@thewcag.com</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

