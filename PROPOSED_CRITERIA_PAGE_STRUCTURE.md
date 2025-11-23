# Proposed Criteria Page Structure

## Page Sections (in order):

### 1. **Criteria Heading**
- Criterion number (e.g., "1.1.1")
- Title
- Level badge (A/AA/AAA)
- Principle and Guideline breadcrumb

### 2. **Official Explanation**
- Official WCAG description from the official site
- Source: `criterion.description` (already exists)
- Display as official/formal text

### 3. **Simple English Explanation**
- Plain language explanation
- Source: `criterion.summary` (already exists)
- Display as easy-to-understand text

### 4. **Real World Examples**
- Real-world scenarios showing the criterion in practice
- Source: `criterion.examples` (already exists, but may need enhancement)
- Show good/bad examples side by side

### 5. **Affected Users**
- What type of users can this criteria affect
- Source: `criterion.whoBenefits` (already exists)
- Display as a list with icons/descriptions

### 6. **How to Test Properly**
- Manual testing steps
- Automated testing tools/methods
- Source: `criterion.testing` (already exists)
- Split into Manual and Automated sections

### 7. **Compliance Requirements**
- What is needed from this criteria to make it compliant
- Clear checklist of requirements
- NEW FIELD NEEDED: `complianceRequirements?: string[]`

### 8. **Going Beyond Compliance**
- What things you can consider beyond just meeting the minimum
- Best practices and enhancements
- NEW FIELD NEEDED: `beyondCompliance?: string[]`

### 9. **Real Example Component** (Conditional)
- Interactive component example
- Only show if component exists in data
- NEW FIELD NEEDED: `exampleComponent?: string` (component name)
- Component will be dynamically imported if it exists
- If no component, don't show this section

### 10. **Myths Around Success Criteria**
- Common misconceptions
- Debunking myths
- NEW FIELD NEEDED: `myths?: Array<{ myth: string; reality: string }>`

### 11. **Common Failures**
- Most common ways this criterion fails
- What to avoid
- NEW FIELD NEEDED: `commonFailures?: Array<{ failure: string; solution: string }>`

### 12. **Code Examples & Custom Solutions**
- Detailed code examples (if available)
- Note: "Code examples vary by site (library, plugin, theme, pattern)"
- Message: "For custom code or remediation solutions, contact us via email or contact form"
- Source: `criterion.codeExamples` (already exists)
- Add contact CTA at the end

---

## Updated SuccessCriterion Interface

```typescript
export interface SuccessCriterion {
  // Existing fields...
  id: string
  number: string
  title: string
  level: "A" | "AA" | "AAA"
  principle: "perceivable" | "operable" | "understandable" | "robust"
  guideline: string
  guidelineNumber: string
  isNew: boolean
  description: string  // Official explanation
  summary: string     // Simple English explanation
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
  
  // NEW FIELDS:
  complianceRequirements?: string[]  // What's needed for compliance
  beyondCompliance?: string[]        // Going beyond minimum
  exampleComponent?: string          // Component name (e.g., "ImageAltTextExample")
  myths?: Array<{                    // Common myths
    myth: string
    reality: string
  }>
  commonFailures?: Array<{           // Common failures
    failure: string
    solution: string
  }>
}
```

---

## Component Structure

### Dynamic Component Loading
- Components will be in: `components/criteria-examples/[component-name].tsx`
- Example: `components/criteria-examples/ImageAltTextExample.tsx`
- Only render if `criterion.exampleComponent` exists

### Page Layout Component
- New file: `app/criteria/[id]/page.tsx` (update existing)
- Each section as a separate component for maintainability

---

## Questions for Verification:

1. **Official Explanation**: Should we fetch this from W3C API or maintain it manually in the data file?

2. **Example Components**: Should these be interactive demos, or static examples? Any specific requirements?

3. **Contact Form**: Should the "contact us" CTA link to `/contact` or open a modal?

4. **Code Examples**: Should we keep the existing code examples section, or replace it entirely with the contact message?

5. **Section Order**: Is the order I've listed correct, or would you like any changes?

6. **Styling**: Any specific design requirements for each section?

Please review and confirm before I start implementation!

