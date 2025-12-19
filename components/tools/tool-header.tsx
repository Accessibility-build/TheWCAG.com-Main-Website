import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tool, TOOL_CATEGORIES } from "@/lib/tools/constants"

interface ToolHeaderProps {
  tool: Tool
}

export function ToolHeader({ tool }: ToolHeaderProps) {
  const category = TOOL_CATEGORIES[tool.category]
  const isEditingTool = tool.category === "editing"
  const basePath = isEditingTool ? "/tools/edit" : "/tools/convert"
  const baseLabel = isEditingTool ? "Edit" : "Convert"

  return (
    <div className="mb-6 sm:mb-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="hover:text-foreground transition-colors inline-flex items-center"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="flex items-center text-muted-foreground/60">
            <span className="mx-0.5">/</span>
          </li>
          <li className="flex items-center">
            <Link 
              href="/tools" 
              className="hover:text-foreground transition-colors inline-flex items-center"
            >
              Tools
            </Link>
          </li>
          <li aria-hidden="true" className="flex items-center text-muted-foreground/60">
            <span className="mx-0.5">/</span>
          </li>
          <li className="flex items-center">
            <Link 
              href={basePath} 
              className="hover:text-foreground transition-colors inline-flex items-center"
            >
              {baseLabel}
            </Link>
          </li>
          <li aria-hidden="true" className="flex items-center text-muted-foreground/60">
            <span className="mx-0.5">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-foreground font-medium" aria-current="page">
              {tool.name}
            </span>
          </li>
        </ol>
      </nav>

      {/* Title and description */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="text-xs sm:text-sm">{category.name}</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm">Free</Badge>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{tool.name}</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {tool.description}
        </p>
      </div>

      {/* Features */}
      {tool.features.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <ul className="flex flex-wrap gap-1.5 sm:gap-2" role="list" aria-label="Tool features">
            {tool.features.map((feature) => (
              <li key={feature}>
                <Badge variant="outline" className="font-normal text-xs sm:text-sm py-1 px-2 sm:px-3">
                  {feature}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
