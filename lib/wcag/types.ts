export interface SuccessCriterion {
  id: string
  number: string
  title: string
  level: "A" | "AA" | "AAA"
  principle: "perceivable" | "operable" | "understandable" | "robust"
  guideline: string
  guidelineNumber: string
  isNew: boolean
  description: string // Official explanation from WCAG
  summary: string // Simple English explanation
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
  }
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

