"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Something went wrong!</h1>
            <p className="text-muted-foreground">
              We encountered an error while loading this page. Please try again later.
            </p>
          </div>
          <div className="flex justify-center">
            <Button onClick={() => reset()} size="lg">
              Try again
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
