import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface AffectedUsersSectionProps {
  whoBenefits: string[]
}

export function AffectedUsersSection({ whoBenefits }: AffectedUsersSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="affected-users-heading">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="affected-users-heading" className="text-3xl font-bold">
          Who This Affects
        </h2>
      </div>
      <Card className="p-8 bg-primary/5 border-primary/20">
        <p className="text-muted-foreground mb-6">
          This success criterion benefits the following user groups:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {whoBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}

