import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy Practices | TheWCAG",
  description:
    "TheWCAG.com Privacy Policy. Learn how we collect, use, protect, and manage your data. We're committed to protecting your privacy and complying with data protection regulations.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy practices",
    "GDPR compliance",
    "data security",
    "cookies policy",
  ],
  openGraph: {
    title: "Privacy Policy - Data Protection & Privacy Practices",
    description:
      "Learn how TheWCAG.com protects your privacy. Our privacy policy explains data collection, usage, and protection practices.",
    url: "https://thewcag.com/privacy",
    type: "website",
    siteName: "TheWCAG - An accessibility Guide",
  },
  alternates: {
    canonical: "https://thewcag.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
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
                <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Privacy Policy</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  At TheWCAG.com, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>thewcag.com</strong>.
                </p>
                <p>
                  By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground mb-2">
                      When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Date and time of visits</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Analytics Data</h3>
                    <p className="text-muted-foreground">
                      We use Vercel Analytics to understand how visitors interact with our website. This service collects anonymized usage data to help us improve our content and user experience. No personally identifiable information is collected through this service.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Information You Provide</h3>
                    <p className="text-muted-foreground">
                      Currently, we do not collect personal information through forms or user accounts. If we add features that require personal information in the future, we will update this policy accordingly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To provide and maintain our website</li>
                    <li>To analyze website usage and improve user experience</li>
                    <li>To ensure website security and prevent fraud</li>
                    <li>To comply with legal obligations</li>
                    <li>To respond to inquiries or support requests (if provided)</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Data Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      <strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and maintenance. These providers are contractually obligated to protect your information.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You can control cookies through your browser settings. However, disabling cookies may affect some website functionality.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to object to processing of your information</li>
                    <li>The right to data portability</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us using the information provided in the Contact section below.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
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
                    If you have any questions about this Privacy Policy, please contact us:
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

