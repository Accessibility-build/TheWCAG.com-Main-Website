import { Card } from "@/components/ui/card"
import { Code2 } from "lucide-react"
import { Suspense } from "react"

interface ExampleComponentSectionProps {
  componentName: string
}

async function loadExampleComponent(componentName: string) {
  try {
    // Dynamic import with error handling - component may not exist
    const Component = await import(`@/components/criteria-examples/${componentName}`)
    return Component.default || Component[componentName]
  } catch (error) {
    // Component doesn't exist - this is expected for most criteria
    // Silently return null - the section won't render if component is null
    return null
  }
}

export async function ExampleComponentSection({ componentName }: ExampleComponentSectionProps) {
  const Component = await loadExampleComponent(componentName)

  if (!Component) {
    return null
  }

  return (
    <section className="mb-12" aria-labelledby="example-component-heading">
      <div className="flex items-center gap-3 mb-6">
        <Code2 className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="example-component-heading" className="text-3xl font-bold">
          Interactive Example
        </h2>
      </div>
      <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <p className="text-muted-foreground mb-6">
          Try this interactive example to see how this success criterion works in practice:
        </p>
        <div className="bg-background rounded-lg p-6 border">
          <Suspense fallback={<div className="text-muted-foreground">Loading example...</div>}>
            <Component />
          </Suspense>
        </div>
      </Card>
    </section>
  )
}

