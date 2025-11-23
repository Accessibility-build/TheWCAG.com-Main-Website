"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface CodeExamplesSectionProps {
  codeExamples: NonNullable<SuccessCriterion["codeExamples"]>
}

export function CodeExamplesSection({ codeExamples }: CodeExamplesSectionProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const availableTabs = Object.keys(codeExamples).filter(key => codeExamples[key as keyof typeof codeExamples])

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>
      <Tabs defaultValue={availableTabs[0]} className="w-full">
        <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${availableTabs.length}, 1fr)` }}>
          {codeExamples.html && <TabsTrigger value="html">HTML</TabsTrigger>}
          {codeExamples.css && <TabsTrigger value="css">CSS</TabsTrigger>}
          {codeExamples.js && <TabsTrigger value="js">JavaScript</TabsTrigger>}
          {codeExamples.react && <TabsTrigger value="react">React</TabsTrigger>}
          {codeExamples.vue && <TabsTrigger value="vue">Vue</TabsTrigger>}
        </TabsList>
        {codeExamples.html && (
          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Example</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(codeExamples.html!, "html")}>
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{codeExamples.html}</code>
              </pre>
            </Card>
          </TabsContent>
        )}
        {codeExamples.css && (
          <TabsContent value="css" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">CSS Example</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(codeExamples.css!, "css")}>
                  {copiedCode === "css" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{codeExamples.css}</code>
              </pre>
            </Card>
          </TabsContent>
        )}
        {codeExamples.js && (
          <TabsContent value="js" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">JavaScript Example</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(codeExamples.js!, "js")}>
                  {copiedCode === "js" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{codeExamples.js}</code>
              </pre>
            </Card>
          </TabsContent>
        )}
        {codeExamples.react && (
          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Example</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(codeExamples.react!, "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{codeExamples.react}</code>
              </pre>
            </Card>
          </TabsContent>
        )}
        {codeExamples.vue && (
          <TabsContent value="vue" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Vue Example</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode(codeExamples.vue!, "vue")}>
                  {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{codeExamples.vue}</code>
              </pre>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </section>
  )
}

