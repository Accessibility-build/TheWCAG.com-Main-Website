"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  FileText,
  Shield
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    
    try {
      const form = e.currentTarget
      const formDataToSend = new FormData(form)
      
      const response = await fetch("https://formspree.io/f/xpwndkoe", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        form.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        const data = await response.json()
        if (data.errors) {
          console.error("Formspree errors:", data.errors)
        }
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-6xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question, suggestion, or feedback? We'd love to hear from you. Get in touch with us using the form below or through our contact information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form 
                      onSubmit={handleSubmit} 
                      action="https://formspree.io/f/xpwndkoe"
                      method="POST"
                      className="space-y-6"
                      noValidate
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            aria-required="true"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Subject <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          aria-required="true"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message..."
                          rows={6}
                          aria-required="true"
                        />
                      </div>

                      {status === "success" && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <p className="text-sm text-green-800 dark:text-green-200">
                            Thank you! Your message has been sent. We'll get back to you soon.
                          </p>
                        </div>
                      )}

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <AlertCircle className="h-5 w-5 text-destructive" />
                          <p className="text-sm text-destructive">
                            Something went wrong. Please try again or email us directly.
                          </p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a 
                          href="mailto:contact@thewcag.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          contact@thewcag.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">General Inquiries</p>
                        <a 
                          href="mailto:info@thewcag.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          info@thewcag.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Privacy & Legal</p>
                        <a 
                          href="mailto:privacy@thewcag.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          privacy@thewcag.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Accessibility</p>
                        <a 
                          href="mailto:accessibility@thewcag.com" 
                          className="text-primary hover:underline text-sm"
                        >
                          accessibility@thewcag.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link 
                      href="/privacy" 
                      className="block text-sm text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block text-sm text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>
                    <Link 
                      href="/accessibility" 
                      className="block text-sm text-primary hover:underline"
                    >
                      Accessibility Statement
                    </Link>
                    <Link 
                      href="/about" 
                      className="block text-sm text-primary hover:underline"
                    >
                      About Us
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Response Time */}
            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
                  </p>
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

