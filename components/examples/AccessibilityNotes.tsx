import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface AccessibilityNotesProps {
  notes: string[]
  warnings?: string[]
}

export function AccessibilityNotes({ notes, warnings }: AccessibilityNotesProps) {
  return (
    <Card className="bg-muted/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertCircle className="h-5 w-5 text-primary" aria-hidden="true" />
          Accessibility Considerations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notes.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-sm">Key Points:</h4>
              <ul className="space-y-2 text-sm">
                {notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {warnings && warnings.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2 text-sm text-amber-600 dark:text-amber-400">Warnings:</h4>
              <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                {warnings.map((warning, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400 mt-0.5">⚠</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

