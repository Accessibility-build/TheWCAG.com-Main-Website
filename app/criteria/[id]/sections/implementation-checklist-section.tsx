"use client"

import { Card } from "@/components/ui/card"
import { CheckSquare, Download, FileText, Code, Palette, Type } from "lucide-react"
import { useState } from "react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface ImplementationChecklistSectionProps {
  checklist: NonNullable<SuccessCriterion["implementationChecklist"]>
  criterionNumber: string
  criterionTitle: string
}

const categoryIcons = {
  HTML: FileText,
  CSS: Palette,
  JavaScript: Code,
  Content: Type,
  General: CheckSquare,
}

const categoryColors = {
  HTML: "text-orange-600",
  CSS: "text-blue-600",
  JavaScript: "text-yellow-600",
  Content: "text-green-600",
  General: "text-primary",
}

export function ImplementationChecklistSection({
  checklist,
  criterionNumber,
  criterionTitle,
}: ImplementationChecklistSectionProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`
    const newChecked = new Set(checkedItems)
    if (newChecked.has(key)) {
      newChecked.delete(key)
    } else {
      newChecked.add(key)
    }
    setCheckedItems(newChecked)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="mb-12" aria-labelledby="checklist-heading">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CheckSquare className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 id="checklist-heading" className="text-3xl font-bold">
            Implementation Checklist
          </h2>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
          aria-label="Print checklist"
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Print
        </button>
      </div>
      <div className="space-y-6">
        {checklist.map((category, categoryIndex) => {
          const Icon = categoryIcons[category.category] || CheckSquare
          const colorClass = categoryColors[category.category] || "text-primary"
          
          return (
            <Card key={categoryIndex} className="p-6 border-2 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-5 h-5 ${colorClass}`} aria-hidden="true" />
                <h3 className="font-semibold text-lg">{category.category}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const key = `${category.category}-${itemIndex}`
                  const isChecked = checkedItems.has(key)
                  
                  return (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <button
                        onClick={() => toggleItem(category.category, itemIndex)}
                        className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-primary border-primary text-white"
                            : "border-primary/30 hover:border-primary/60"
                        }`}
                        aria-label={`${isChecked ? "Uncheck" : "Check"} item: ${item}`}
                        aria-pressed={isChecked}
                      >
                        {isChecked && (
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        className={`flex-1 text-base leading-relaxed ${
                          isChecked ? "text-muted-foreground line-through" : "text-foreground"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </Card>
          )
        })}
      </div>
      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-primary/10">
        <p className="text-sm text-muted-foreground">
          <strong>Tip:</strong> Use this checklist during development and testing to ensure all 
          requirements for <strong>{criterionNumber} {criterionTitle}</strong> are met. 
          Check off items as you complete them.
        </p>
      </div>
    </section>
  )
}

