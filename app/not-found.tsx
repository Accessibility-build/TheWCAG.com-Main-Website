import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Home, Search, BookOpen, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "404 - Page Not Found | TheWCAG",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="container max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
                <span className="text-5xl font-bold text-primary">404</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Page Not Found</h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Go Home
                  </CardTitle>
                  <CardDescription>Return to the homepage</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/">Home</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    WCAG Overview
                  </CardTitle>
                  <CardDescription>Learn about WCAG</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/overview">Overview</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 pt-8">
              <h2 className="text-xl font-semibold">Popular Pages</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/principles">Principles</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/checklist">Checklist</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/learn">Learn</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/tools">Tools</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/resources">Resources</Link>
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild variant="link" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
