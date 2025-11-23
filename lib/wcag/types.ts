export interface SuccessCriterion {
  id: string
  number: string
  title: string
  level: "A" | "AA" | "AAA"
  principle: "perceivable" | "operable" | "understandable" | "robust"
  guideline: string
  guidelineNumber: string
  isNew: boolean
  description: string // Official explanation from WCAG (kept for backward compatibility)
  officialDefinition: string // Full official WCAG text (exact wording from W3C)
  summary: string // Simple English explanation (kept for backward compatibility)
  detailedSummary: string // Expanded plain-language explanation with comprehensive details
  whyItMatters: string
  whoBenefits: string[]
  details?: {
    introduction: string
    intent: string
  }
  examples?: {
    title: string
    description: string
    type: "good" | "bad"
    image?: string
    code?: string
  }[]
  codeExamples?: {
    html?: string
    css?: string
    js?: string
    react?: string
    vue?: string
  } // Deprecated for display - replaced with CTA section
  keyTerms?: Array<{
    term: string
    definition: string
    context?: string
  }>
  relatedCriteria?: Array<{
    number: string
    title: string
    relationship: string // e.g., "Often implemented together with", "Similar to"
  }>
  implementationChecklist?: Array<{
    category: "HTML" | "CSS" | "JavaScript" | "Content" | "General"
    items: string[]
  }>
  officialResources?: Array<{
    title: string
    url: string
    type: "Understanding" | "Techniques" | "Testing" | "Other"
  }>
  testing?: {
    manual: string[]
    automated: string[]
  }
  // New fields
  complianceRequirements?: string[] // What's needed for compliance
  beyondCompliance?: string[] // Going beyond minimum requirements
  exampleComponent?: string // Component name for real-world example (e.g., "ImageAltTextExample")
  myths?: Array<{
    myth: string
    reality: string
  }>
  commonFailures?: Array<{
    failure: string
    solution: string
  }>
}

