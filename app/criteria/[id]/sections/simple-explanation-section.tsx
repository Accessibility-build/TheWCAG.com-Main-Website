import { Card } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface SimpleExplanationSectionProps {
  summary: string
}

export function SimpleExplanationSection({ summary }: SimpleExplanationSectionProps) {
  return (
    <section className="mb-12" aria-labelledby="simple-explanation-heading">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="simple-explanation-heading" className="text-3xl font-bold">
          Simple English Explanation
        </h2>
      </div>
      <Card className="p-8 bg-muted/30 border-l-4 border-l-primary">
        <p className="text-lg leading-relaxed text-foreground">
          {summary}
        </p>
      </Card>
    </section>
  )
}

