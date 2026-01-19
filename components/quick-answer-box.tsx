import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface QuickAnswerBoxProps {
  question: string
  answer: string
  criterionNumber?: string
}

export function QuickAnswerBox({ question, answer, criterionNumber }: QuickAnswerBoxProps) {
  return (
    <Card className="border-primary/20 bg-primary/5 mb-6">
      <CardContent className="pt-6">
        <div className="flex gap-3">
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-muted-foreground mb-1">Quick Answer</h3>
            <p className="font-medium mb-2">{question}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
            {criterionNumber && (
              <p className="text-xs text-muted-foreground mt-2">
                WCAG 2.2 {criterionNumber}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
