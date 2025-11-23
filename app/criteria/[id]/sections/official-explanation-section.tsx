import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"

interface OfficialExplanationSectionProps {
  description: string
}

export function OfficialExplanationSection({ description }: OfficialExplanationSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="official-explanation-heading">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="official-explanation-heading" className="text-3xl font-bold">
          Official Explanation
        </h2>
      </div>
      <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
              WCAG Official
            </span>
            <span>Official definition from W3C Web Content Accessibility Guidelines</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground">
            {description}
          </p>
        </div>
      </Card>
    </section>
  )
}

