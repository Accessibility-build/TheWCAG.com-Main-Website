"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { AlertCircle, RefreshCw, Home, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // logErrorToService(error)
      console.error('Production error:', error)
    } else {
      console.error('Development error:', error)
    }
  }, [error])

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="container max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-10 w-10 text-destructive" />
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Something went wrong!</h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                We encountered an unexpected error while loading this page. This has been logged and we'll look into it.
              </p>
              {process.env.NODE_ENV === 'development' && error.message && (
                <Card className="border-destructive/50 bg-destructive/5 max-w-md mx-auto text-left">
                  <CardHeader>
                    <CardTitle className="text-sm">Error Details (Development Only)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs overflow-auto">
                      {error.message}
                      {error.stack && `\n\n${error.stack}`}
                    </pre>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button onClick={() => reset()} size="lg" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </a>
              </Button>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                If this problem persists, please contact support or try again later.
              </p>
              <Button asChild variant="link" size="sm" className="gap-2">
                <a href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
