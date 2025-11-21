import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">404</h1>
            <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/overview">View Overview</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
