import { SkipLink } from "@/components/skip-link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Loading() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" role="status" aria-label="Loading">
                  <span className="sr-only">Loading...</span>
                </div>
                <p className="text-sm text-muted-foreground">Loading content...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
