"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { logger } from "@/lib/logger"
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
  Shield,
  MapPin,
  Clock
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
      // Ensure all required fields are present
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
        return
      }

      // Create FormData with proper field names for Formspree
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("_replyto", formData.email) // Formspree uses this for auto-reply
      formDataToSend.append("subject", formData.subject)
      formDataToSend.append("message", formData.message)

      const response = await fetch("https://formspree.io/f/xpwndkoe", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        // If response is not JSON, log the text response
        const textResponse = await response.text()
        logger.error("Formspree non-JSON response", jsonError, { textResponse })
        data = {}
      }

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        logger.error("Formspree error response", undefined, {
          status: response.status,
          statusText: response.statusText,
          data: data,
        })
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      logger.error("Form submission error", error)
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
      <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
        <Header />
        <main id="main-content" className="flex-1 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -z-10" />

          <div className="container py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6 animate-in fade-in zoom-in duration-500">
                <MessageSquare className="h-5 w-5 text-primary mr-2" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Let's Start a Conversation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                Have a question about accessibility? Need help with WCAG compliance? 
                Or just want to say hello? We're here to help you build a more inclusive web.
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden flex flex-col lg:flex-row min-h-[600px] animate-in slide-in-from-bottom-8 duration-700 delay-150">
              
              {/* Left Side - Contact Info */}
              <div className="lg:w-5/12 bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                    <p className="text-primary-foreground/80">
                      Fill out the form and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Email Us</p>
                        <a href="mailto:contact@thewcag.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                          contact@thewcag.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors shrink-0">
                        <HelpCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Support</p>
                        <a href="mailto:info@thewcag.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                          info@thewcag.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors shrink-0">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg mb-1">Legal</p>
                        <a href="mailto:privacy@thewcag.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                          privacy@thewcag.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-12">
                  <p className="font-medium mb-4">Connect with us</p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-7/12 p-8 md:p-12 bg-card">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-8 h-full flex flex-col justify-center"
                  noValidate
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-secondary/20 border-border/50 focus:bg-background h-12 transition-all"
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-secondary/20 border-border/50 focus:bg-background h-12 transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-foreground/80">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="bg-secondary/20 border-border/50 focus:bg-background h-12 transition-all"
                      aria-required="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      className="bg-secondary/20 border-border/50 focus:bg-background min-h-[150px] resize-y transition-all"
                      rows={6}
                      aria-required="true"
                    />
                  </div>

                  <div className="pt-2">
                    {status === "success" && (
                      <div className="flex items-center gap-2 p-4 mb-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-in fade-in slide-in-from-top-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                          Message sent successfully! We'll be in touch soon.
                        </p>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="flex items-start gap-2 p-4 mb-4 bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-2">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm text-destructive font-medium mb-1">
                            Something went wrong. Please try again.
                          </p>
                          <p className="text-xs text-destructive/70">
                            If the problem persists, please email us directly at{" "}
                            <a href="mailto:contact@thewcag.com" className="underline hover:text-destructive">
                              contact@thewcag.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-6">
                      <Clock className="inline h-3 w-3 mr-1" />
                      Typical response time: 24-48 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Quick Links Footer - Optional or keep minimal */}
            <div className="mt-12 text-center">
               <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
                 <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                 <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                 <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility Statement</Link>
               </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
