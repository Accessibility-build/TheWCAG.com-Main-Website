# WCAG Criteria Data Completion Guide

This guide helps ensure all criteria have complete, accurate data for the new layout structure.

## Required Fields for Each Criterion

### Core Fields (Always Required)
- ✅ `id` - Unique identifier (e.g., "1-1-1")
- ✅ `number` - Criterion number (e.g., "1.1.1")
- ✅ `title` - Criterion title
- ✅ `level` - "A", "AA", or "AAA"
- ✅ `principle` - "perceivable", "operable", "understandable", or "robust"
- ✅ `guideline` - Guideline name
- ✅ `guidelineNumber` - Guideline number (e.g., "1.1")
- ✅ `isNew` - Boolean indicating if new in WCAG 2.2
- ✅ `description` - Official WCAG explanation
- ✅ `summary` - Simple English explanation
- ✅ `whyItMatters` - Why this criterion is important
- ✅ `whoBenefits` - Array of user groups who benefit

### Optional but Recommended Fields
- `details` - Object with `introduction` and `intent`
- `examples` - Array of good/bad examples
- `codeExamples` - Object with html, css, js, react, vue examples
- `testing` - Object with `manual` and `automated` testing steps

### New Fields (Required for Complete Layout)
- ✅ `complianceRequirements` - Array of specific requirements for compliance
- ✅ `beyondCompliance` - Array of best practices beyond minimum
- ✅ `myths` - Array of common myths with reality explanations
- ✅ `commonFailures` - Array of common failures with solutions
- `exampleComponent` - Component name for interactive examples (optional)

## Data Quality Standards

### complianceRequirements
- Should be specific, actionable requirements
- Focus on what MUST be done for compliance
- Use clear, direct language
- Typically 4-8 items

### beyondCompliance
- Should suggest enhancements beyond minimum requirements
- Focus on user experience improvements
- Can include advanced techniques
- Typically 4-8 items

### myths
- Should address common misconceptions
- Each myth should have a clear reality explanation
- Focus on misunderstandings that lead to poor implementation
- Typically 2-4 myths per criterion

### commonFailures
- Should list the most frequent implementation mistakes
- Each failure should have a specific solution
- Focus on actionable fixes
- Typically 4-7 failures per criterion

### testing.manual
- Should be comprehensive step-by-step instructions
- Include specific tools or techniques when relevant
- Should be actionable and clear
- Typically 5-10 steps

### testing.automated
- Should list specific tools that can help
- Note limitations of automated testing
- Include tool names and what they check
- Typically 2-5 tools/methods

## Example Template

```typescript
{
  id: "X-Y-Z",
  number: "X.Y.Z",
  title: "Criterion Title",
  level: "A",
  principle: "perceivable",
  guideline: "Guideline Name",
  guidelineNumber: "X.Y",
  isNew: false,
  description: "Official WCAG description...",
  summary: "Simple English explanation...",
  whyItMatters: "Why this matters...",
  whoBenefits: ["User group 1", "User group 2"],
  details: {
    introduction: "Introduction text...",
    intent: "Intent explanation...",
  },
  examples: [
    {
      title: "Bad Example",
      description: "Why it's bad...",
      type: "bad",
      code: "Code example...",
    },
    {
      title: "Good Example",
      description: "Why it's good...",
      type: "good",
      code: "Code example...",
    },
  ],
  codeExamples: {
    html: "HTML example...",
    react: "React example...",
  },
  testing: {
    manual: [
      "Step 1...",
      "Step 2...",
    ],
    automated: [
      "Tool 1...",
      "Tool 2...",
    ],
  },
  complianceRequirements: [
    "Requirement 1...",
    "Requirement 2...",
  ],
  beyondCompliance: [
    "Enhancement 1...",
    "Enhancement 2...",
  ],
  myths: [
    {
      myth: "Common misconception...",
      reality: "The actual truth...",
    },
  ],
  commonFailures: [
    {
      failure: "Common mistake...",
      solution: "How to fix it...",
    },
  ],
  exampleComponent: "ComponentName", // Optional
}
```

## Completion Status

### ✅ Completed
- 1.1.1 Non-text Content
- 1.2.1 Audio-only and Video-only (Prerecorded)
- 1.2.2 Captions (Prerecorded)
- 2.1.1 Keyboard

### 🔄 In Progress
- All other criteria need the new fields added

## Priority Order

1. **Level A criteria** (highest priority - required for basic compliance)
2. **Level AA criteria** (high priority - required for most compliance standards)
3. **Level AAA criteria** (lower priority - enhanced accessibility)

