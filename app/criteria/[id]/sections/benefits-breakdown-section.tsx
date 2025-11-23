import { Card } from "@/components/ui/card"
import { Users, Eye, Ear, Brain, Hand } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface BenefitsBreakdownSectionProps {
  whoBenefits: SuccessCriterion["whoBenefits"]
}

// Map common user benefit terms to icons
const getUserIcon = (benefit: string) => {
  const lower = benefit.toLowerCase()
  if (lower.includes("blind") || lower.includes("vision") || lower.includes("visual")) {
    return Eye
  }
  if (lower.includes("deaf") || lower.includes("hearing") || lower.includes("audio")) {
    return Ear
  }
  if (lower.includes("cognitive") || lower.includes("learning") || lower.includes("memory")) {
    return Brain
  }
  if (lower.includes("motor") || lower.includes("mobility") || lower.includes("hand")) {
    return Hand
  }
  return Users
}

export function BenefitsBreakdownSection({ whoBenefits }: BenefitsBreakdownSectionProps) {
  if (!whoBenefits || whoBenefits.length === 0) {
    return null
  }

  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="benefits-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="benefits-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Who Benefits & How
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {whoBenefits.map((benefit, index) => {
          const Icon = getUserIcon(benefit)
          
          return (
            <Card
              key={index}
              className="p-4 sm:p-6 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-md"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base mb-2 text-foreground">
                    {benefit}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    This criterion ensures that {benefit.toLowerCase()} can access and 
                    understand the content, improving their overall experience and ability 
                    to use the website effectively.
                  </p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-xs sm:text-sm text-muted-foreground">
          <strong>Impact:</strong> When this criterion is properly implemented, it removes 
          barriers for these user groups and creates a more inclusive web experience for everyone.
        </p>
      </div>
    </section>
  )
}

