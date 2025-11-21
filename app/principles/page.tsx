import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Eye, Keyboard, Lightbulb, Wrench } from "lucide-react"
import { principles } from "@/lib/wcag-data"

export default function PrinciplesPage() {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-5xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">WCAG Principles</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore the four foundational principles of web accessibility and their guidelines
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Eye className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Perceivable</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principles.perceivable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {principles.perceivable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/perceivable#${guideline.number}`}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/perceivable"
                    className="inline-flex items-center text-primary hover:underline font-semibold"
                  >
                    View all 29 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <Keyboard className="h-7 w-7 text-secondary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Operable</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principles.operable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {principles.operable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/operable#${guideline.number}`}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/operable"
                    className="inline-flex items-center text-secondary hover:underline font-semibold"
                  >
                    View all 29 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-7 w-7 text-accent" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Understandable</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principles.understandable.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {principles.understandable.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/understandable#${guideline.number}`}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/understandable"
                    className="inline-flex items-center text-accent hover:underline font-semibold"
                  >
                    View all 17 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Wrench className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Robust</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principles.robust.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {principles.robust.guidelines.map((guideline) => (
                      <Link
                        key={guideline.number}
                        href={`/principles/robust#${guideline.number}`}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-sm">
                          {guideline.number} {guideline.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/principles/robust"
                    className="inline-flex items-center text-primary hover:underline font-semibold"
                  >
                    View all 2 criteria
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
