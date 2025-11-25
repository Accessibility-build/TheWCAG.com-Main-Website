import { Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestingGuideProps {
  keyboard?: string[]
  screenReader?: string[]
  visual?: string[]
}

export function TestingGuide({ keyboard, screenReader, visual }: TestingGuideProps) {
  if (!keyboard && !screenReader && !visual) return null

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
      <p className="text-sm font-medium mb-3 flex items-center gap-2">
        <Info className="h-4 w-4 text-primary" aria-hidden="true" />
        Testing Guide
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        {keyboard && keyboard.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-2">Keyboard Navigation</h4>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              {keyboard.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {screenReader && screenReader.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold mb-2">Screen Reader</h4>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              {screenReader.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {visual && visual.length > 0 && (
          <div className={keyboard || screenReader ? "md:col-span-2" : ""}>
            <h4 className="text-xs font-semibold mb-2">Visual Testing</h4>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              {visual.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

