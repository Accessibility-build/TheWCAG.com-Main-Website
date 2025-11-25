"use client"

import { useState, ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Code2, Play } from "lucide-react"
import { CodeBlock } from "./CodeBlock"
import { TestingGuide } from "./TestingGuide"

interface ExampleSectionProps {
  title: string
  description: string
  code: string
  children: ReactNode
  sectionId: string
  testingGuide?: {
    keyboard?: string[]
    screenReader?: string[]
    visual?: string[]
  }
  notes?: string
}

export function ExampleSection({
  title,
  description,
  code,
  children,
  sectionId,
  testingGuide,
  notes,
}: ExampleSectionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      
      {description && (
        <div className="mb-6">
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: description }} />
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-4 w-4 text-primary" aria-hidden="true" />
            Interactive Example
          </CardTitle>
          <CardDescription>Test the accessible {title.toLowerCase()} implementation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {testingGuide && <TestingGuide {...testingGuide} />}
          <div className="border rounded-lg p-4 bg-background">
            {children}
          </div>
        </CardContent>
      </Card>

      {notes && (
        <Card className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm text-blue-900 dark:text-blue-100">{notes}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
                Code Implementation
              </CardTitle>
              <CardDescription className="mt-1">Accessible {title.toLowerCase()} implementation</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="gap-2"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  Collapse Code
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  Show Code
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        {expanded && (
          <CardContent>
            <CodeBlock code={code} id={sectionId} />
          </CardContent>
        )}
      </Card>
    </section>
  )
}

