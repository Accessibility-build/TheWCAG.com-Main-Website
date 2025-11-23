"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsletterSubscriptionProps {
  variant?: "default" | "compact" | "footer"
  className?: string
}

export function NewsletterSubscription({ variant = "default", className }: NewsletterSubscriptionProps) {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")
  const formRef = React.useRef<HTMLFormElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      inputRef.current?.focus()
      return
    }

    try {
      const formData = new FormData()
      formData.append("email", email)
      formData.append("_subject", "Newsletter Subscription")

      const response = await fetch("https://formspree.io/f/xyzvqlal", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus("idle")
        }, 5000)
      } else {
        const data = await response.json()
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        inputRef.current?.focus()
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
      inputRef.current?.focus()
    }
  }

  const isCompact = variant === "compact" || variant === "footer"
  const isFooter = variant === "footer"

  if (isFooter) {
    return (
      <div className={cn("w-full", className)}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xyzvqlal"
          method="POST"
          className="flex flex-col sm:flex-row gap-2 w-full"
          noValidate
        >
          <div className="flex-1 min-w-0">
            <Label htmlFor="newsletter-email-footer" className="sr-only">
              Email address
            </Label>
            <Input
              id="newsletter-email-footer"
              ref={inputRef}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className={cn(
                "h-10 sm:h-11 bg-background/10 border-background/20 text-background placeholder:text-background/50",
                "focus-visible:bg-background/20 focus-visible:border-background/40",
                status === "error" && "border-red-400 focus-visible:border-red-400",
                status === "success" && "border-green-400 focus-visible:border-green-400"
              )}
              aria-invalid={status === "error"}
              aria-describedby={
                status === "error"
                  ? "newsletter-error-footer"
                  : status === "success"
                  ? "newsletter-success-footer"
                  : undefined
              }
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={cn(
              "h-10 sm:h-11 px-4 sm:px-6 bg-primary text-primary-foreground hover:bg-primary/90",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "shrink-0"
            )}
            aria-label="Subscribe to newsletter"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                <span className="hidden sm:inline">Subscribing...</span>
                <span className="sm:hidden">...</span>
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
                <span className="hidden sm:inline">Subscribed!</span>
                <span className="sm:hidden">Done</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                <span>Subscribe</span>
              </>
            )}
          </Button>
        </form>
        {status === "error" && (
          <p
            id="newsletter-error-footer"
            className="mt-2 text-xs text-red-300 flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
        {status === "success" && (
          <p
            id="newsletter-success-footer"
            className="mt-2 text-xs text-green-300 flex items-center gap-1"
            role="status"
          >
            <CheckCircle2 className="h-3 w-3 shrink-0" aria-hidden="true" />
            Successfully subscribed! Check your email.
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xyzvqlal"
        method="POST"
        className={cn(
          "space-y-4",
          isCompact && "space-y-3"
        )}
        noValidate
      >
        <div>
          <Label
            htmlFor={isCompact ? "newsletter-email-compact" : "newsletter-email"}
            className={cn(
              "text-sm font-medium mb-2 block",
              isCompact && "text-xs mb-1.5"
            )}
          >
            {isCompact ? "Email" : "Email Address"}
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id={isCompact ? "newsletter-email-compact" : "newsletter-email"}
              ref={inputRef}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              disabled={status === "loading"}
              className={cn(
                "pl-10 h-11",
                isCompact && "h-10 text-sm",
                status === "error" && "border-destructive focus-visible:border-destructive",
                status === "success" && "border-green-500 focus-visible:border-green-500"
              )}
              aria-invalid={status === "error"}
              aria-describedby={
                status === "error"
                  ? isCompact
                  ? "newsletter-error-compact"
                  : "newsletter-error"
                  : status === "success"
                  ? isCompact
                  ? "newsletter-success-compact"
                  : "newsletter-success"
                  : undefined
              }
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "w-full",
            isCompact && "h-10 text-sm"
          )}
          aria-label="Subscribe to newsletter"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
              Successfully Subscribed!
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
              Subscribe to Newsletter
            </>
          )}
        </Button>

        {status === "error" && (
          <p
            id={isCompact ? "newsletter-error-compact" : "newsletter-error"}
            className="text-sm text-destructive flex items-center gap-1.5"
            role="alert"
          >
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
        )}

        {status === "success" && (
          <p
            id={isCompact ? "newsletter-success-compact" : "newsletter-success"}
            className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5"
            role="status"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            Successfully subscribed! Please check your email to confirm.
          </p>
        )}
      </form>
    </div>
  )
}

