import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface AffectedUsersSectionProps {
  whoBenefits: string[]
}

export function AffectedUsersSection({ whoBenefits }: AffectedUsersSectionProps) {
  return (
    <section className="mb-8 sm:mb-12" aria-labelledby="affected-users-heading">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" aria-hidden="true" />
        <h2 id="affected-users-heading" className="text-xl sm:text-2xl md:text-3xl font-bold">
          Who This Affects
        </h2>
      </div>
      <Card className="p-4 sm:p-6 md:p-8 bg-primary/5 border-primary/20">
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
          This success criterion benefits the following user groups:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {whoBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-background rounded-lg border">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

