import { Card } from "@/components/ui/card"
import { ExternalLink, BookOpen, Code2, TestTube, FileText } from "lucide-react"
import type { SuccessCriterion } from "@/lib/wcag/types"

interface ResourcesSectionProps {
  officialResources: NonNullable<SuccessCriterion["officialResources"]>
  criterionNumber: string
}

const typeIcons = {
  Understanding: BookOpen,
  Techniques: Code2,
  Testing: TestTube,
  Other: FileText,
}

const typeColors = {
  Understanding: "text-blue-600",
  Techniques: "text-green-600",
  Testing: "text-purple-600",
  Other: "text-muted-foreground",
}

export function ResourcesSection({
  officialResources,
  criterionNumber,
}: ResourcesSectionProps) {
  // Group resources by type
  const groupedResources = officialResources.reduce((acc, resource) => {
    if (!acc[resource.type]) {
      acc[resource.type] = []
    }
    acc[resource.type].push(resource)
    return acc
  }, {} as Record<string, typeof officialResources>)

  return (
    <section className="mb-12" aria-labelledby="resources-heading">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 id="resources-heading" className="text-3xl font-bold">
          Official Resources
        </h2>
      </div>
      <div className="space-y-6">
        {Object.entries(groupedResources).map(([type, resources]) => {
          const Icon = typeIcons[type as keyof typeof typeIcons] || FileText
          const colorClass = typeColors[type as keyof typeof typeColors] || "text-muted-foreground"
          
          return (
            <div key={type}>
              <div className="flex items-center gap-2 mb-4">
                <Icon className={`w-5 h-5 ${colorClass}`} aria-hidden="true" />
                <h3 className="font-semibold text-lg">{type}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <Card
                    key={index}
                    className="p-5 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-md group"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-medium text-base mb-1 text-foreground group-hover:text-primary transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {resource.url.replace(/^https?:\/\//, "").split("/")[0]}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> These are official W3C resources for{" "}
          <strong>{criterionNumber}</strong>. For the most up-to-date information and 
          detailed technical guidance, always refer to the official W3C documentation.
        </p>
      </div>
    </section>
  )
}

