import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ReactNode } from "react"

interface CriteriaPageLayoutProps {
  children: ReactNode
}

export function CriteriaPageLayout({ children }: CriteriaPageLayoutProps) {
  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

