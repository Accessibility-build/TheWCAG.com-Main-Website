import type { SuccessCriterion } from '../types'

// Guideline 3.3: Input Assistance
export const inputAssistanceCriteria: SuccessCriterion[] = [
{
    id: "3-3-1",
    number: "3.3.1",
    title: "Error Identification",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
    summary: "Clearly identify form errors and describe them in text that screen readers can access.",
    whyItMatters: "Users need to know what went wrong and where to fix it.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that when form validation detects errors, users are clearly informed about which fields have errors and what the errors are.",
      intent:
        "The intent is to ensure that users are aware of errors and can identify which fields need correction. Error messages must be in text format so they're accessible to screen readers.",
    },
    examples: [
      {
        title: "Error Shown Only in Red",
        description: "A form field turns red when there's an error, but no text message explains what's wrong.",
        type: "bad",
        code: '<input type="email" style="border: 2px solid red;">',
      },
      {
        title: "Error with Text Description",
        description: "An error is indicated by both visual styling and a clear text message.",
        type: "good",
        code: '<input type="email" aria-invalid="true" aria-describedby="email-error"><span id="email-error">Please enter a valid email address</span>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Error only indicated visually -->
<input type="email" style="border: 2px solid red;">

<!-- ✅ Good: Error with text description -->
<label for="email">Email</label>
<input 
  type="email" 
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>`,
      react: `// ✅ Good: Error identification component
function EmailInput() {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')
  
  const validate = (email: string) => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address')
      return false
    }
    setError('')
    return true
  }
  
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          validate(e.target.value)
        }}
        aria-invalid={!!error}
        aria-describedby={error ? "email-error" : undefined}
      />
      {error && (
        <span id="email-error" role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Submit a form with invalid data and verify errors are identified.",
        "Check that error messages are in text format (not just visual indicators).",
        "Verify that error messages clearly describe what's wrong.",
        "Test with a screen reader to ensure errors are announced.",
        "Check that fields with errors are programmatically identified (aria-invalid='true').",
        "Verify that error messages are associated with their fields (aria-describedby).",
        "Test that errors are visible and readable (good contrast, appropriate size).",
      ],
      automated: [
        "Use axe DevTools to check for proper error identification.",
        "Use WAVE to verify error messages are accessible.",
        "Use form validation testing tools to check error handling.",
      ],
    },
    complianceRequirements: [
      "When an input error is detected, the field in error must be programmatically identified.",
      "Error descriptions must be provided in text format (not just visual indicators).",
      "Error messages must clearly describe what's wrong and which field has the error.",
      "Error messages must be associated with their fields using aria-describedby or similar.",
      "Fields with errors should be marked with aria-invalid='true'.",
      "Error messages should be announced to screen readers (use role='alert' or aria-live).",
    ],
    beyondCompliance: [
      "Provide inline error messages near the field for immediate feedback.",
      "Use clear, user-friendly language in error messages (avoid technical jargon).",
      "Provide error messages in real-time as users type (when appropriate).",
      "Use consistent error message styling and placement across the site.",
      "Consider providing examples of correct input format in error messages.",
      "Test error messages with actual users to ensure clarity.",
      "Provide error summaries at the top of forms with many fields.",
    ],
    myths: [
      {
        myth: "If the field turns red, that's enough to identify the error.",
        reality: "Visual indicators alone are not sufficient. Error messages must be in text format so screen readers can announce them. Color-blind users may also miss color-only indicators.",
      },
      {
        myth: "I can show errors in a popup or alert box.",
        reality: "While alerts can work, inline error messages associated with fields are more accessible. Errors should be programmatically associated with their fields using aria-describedby.",
      },
      {
        myth: "Error messages only need to appear after form submission.",
        reality: "Errors can be shown in real-time as users interact with fields, which is often more helpful. However, they must still meet the identification requirements.",
      },
    ],
    commonFailures: [
      {
        failure: "Errors indicated only by color change (red border) without text.",
        solution: "Add text error messages. Use aria-invalid='true' and aria-describedby to associate errors with fields. Include visible error text, not just visual styling.",
      },
      {
        failure: "Generic error messages that don't identify the specific field or issue.",
        solution: "Provide specific error messages that identify the field and describe the problem. Example: 'Email field: Please enter a valid email address' instead of just 'Error'.",
      },
      {
        failure: "Error messages not associated with their fields programmatically.",
        solution: "Use aria-describedby to link error messages to their fields. Ensure error messages are in the DOM and accessible to assistive technologies.",
      },
      {
        failure: "Error messages that aren't announced to screen readers.",
        solution: "Use role='alert' or aria-live='polite' for error messages so screen readers announce them. Ensure errors are in the DOM when they occur.",
      },
      {
        failure: "Error messages placed far from the fields they describe.",
        solution: "Place error messages near their associated fields. Use aria-describedby to programmatically associate them even if visually separated.",
      },
    ],
    officialDefinition:
      "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
    detailedSummary:
      "What This Means: This success criterion requires that when form validation automatically detects an input error, the system must identify which field has the error and describe the error in text format. Error identification cannot rely solely on visual indicators like color changes or icons.\n\nWhy It's Important: Users need to know what went wrong and where to fix it. Visual-only error indicators (like red borders) are not accessible to screen reader users or users who cannot perceive color differences. Text-based error messages ensure that all users can understand what errors occurred and how to fix them.\n\nIn Practice: Provide clear, specific error messages in text format. Use aria-invalid='true' to mark fields with errors. Use aria-describedby to associate error messages with their fields. Place error messages near their associated fields. Use role='alert' or aria-live='polite' so screen readers announce errors. Ensure error messages are in the DOM and accessible to assistive technologies. Make error messages specific and actionable (e.g., 'Email field: Please enter a valid email address' instead of just 'Error').",
    keyTerms: [
      {
        term: "Input Error",
        definition: "Information provided by the user that is not accepted by the system (e.g., invalid format, missing required field).",
        context: "Input errors must be automatically detected, identified, and described in text.",
      },
      {
        term: "Error Identification",
        definition: "The process of indicating which field or component has an error.",
        context: "Error identification must be in text format, not just visual indicators.",
      },
      {
        term: "Error Description",
        definition: "Text that explains what the error is and how to fix it.",
        context: "Error descriptions must be in text format and accessible to assistive technologies.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.3",
        title: "Error Suggestion",
        relationship: "Complements",
      },
      {
        number: "3.3.4",
        title: "Error Prevention (Legal, Financial, Data)",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add aria-invalid='true' to fields with errors",
          "Use aria-describedby to link errors to fields",
          "Include visible error text messages",
          "Use role='alert' for error messages",
        ],
      },
      {
        category: "Content",
        items: [
          "Provide specific error descriptions",
          "Identify which field has the error",
          "Make error messages actionable",
          "Place errors near their fields",
        ],
      },
      {
        category: "General",
        items: [
          "Test with screen readers",
          "Verify errors are announced",
          "Check error text is accessible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Error Identification",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
        type: "Understanding",
      },
      {
        title: "G83: Providing text descriptions to identify required fields that were not completed",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G83",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-3-2",
    number: "3.3.2",
    title: "Labels or Instructions",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description: "Labels or instructions are provided when content requires user input.",
    summary: "Every form field needs a clear label or instruction explaining what to enter.",
    whyItMatters: "Users need to understand what information is required in each field.",
    whoBenefits: ["All users", "Users with cognitive disabilities", "Screen reader users"],
    officialDefinition:
      "Labels or instructions are provided when content requires user input.",
    detailedSummary:
      "What This Means: This success criterion requires that when content requires user input (like form fields), labels or instructions must be provided to help users understand what information is required. Labels should be clear, descriptive, and associated with their input fields.\n\nWhy It's Important: Users need to understand what information is required in each field to complete forms successfully. Without clear labels or instructions, users may not know what to enter, leading to errors, frustration, and form abandonment. This is especially important for users with cognitive disabilities who may need clear guidance, and for screen reader users who rely on labels to understand form fields.\n\nIn Practice: Provide clear, descriptive labels for all form fields using <label> elements or aria-label attributes. Associate labels with their input fields using the 'for' attribute or by nesting inputs within labels. Provide instructions when input format is required (e.g., 'Date format: MM/DD/YYYY'). Use placeholder text as a supplement to labels, not a replacement. Ensure labels are visible and accessible to all users.",
    keyTerms: [
      {
        term: "Label",
        definition: "Text or other component with a text alternative that is presented to a user to identify a component within Web content.",
        context: "Labels must be provided for all form fields that require user input.",
      },
      {
        term: "Instructions",
        definition: "Text that provides guidance on how to complete a form field or what format is required.",
        context: "Instructions should be provided when input format or requirements are not obvious.",
      },
      {
        term: "User Input",
        definition: "Information provided by the user through form fields, controls, or other input mechanisms.",
        context: "All fields requiring user input must have labels or instructions.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.1",
        title: "Error Identification",
        relationship: "Complements",
      },
      {
        number: "4.1.2",
        title: "Name, Role, Value",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use <label> elements for all form fields",
          "Associate labels with inputs using 'for' attribute",
          "Provide instructions when format is required",
          "Use aria-label if label cannot be visible",
        ],
      },
      {
        category: "General",
        items: [
          "Test that all fields have labels",
          "Verify labels are clear and descriptive",
          "Check that instructions are helpful",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Labels or Instructions",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
        type: "Understanding",
      },
      {
        title: "H44: Using label elements to associate text labels with form controls",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H44",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-3-3",
    number: "3.3.3",
    title: "Error Suggestion",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
    summary: "Suggest fixes for errors when possible (e.g., 'Did you mean...?').",
    whyItMatters: "Helps users correct mistakes quickly and easily.",
    whoBenefits: ["Users with cognitive disabilities", "All users"],
    officialDefinition:
      "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
    detailedSummary:
      "What This Means: This success criterion requires that when form validation detects an input error and the system knows how to correct it, suggestions for correction should be provided to the user. For example, if a user enters an invalid email address, the system might suggest 'Did you mean example@email.com?' This helps users correct mistakes quickly and easily.\n\nWhy It's Important: Providing error suggestions helps users understand what went wrong and how to fix it, reducing frustration and form abandonment. This is especially helpful for users with cognitive disabilities who may struggle to identify and correct errors. Error suggestions can also help all users by providing clear guidance on expected formats or valid values.\n\nIn Practice: When errors are detected and correction suggestions are known, provide them to users. For example, suggest valid email formats, correct spelling, or valid date formats. Use clear, helpful language like 'Did you mean...?' or 'Please use the format: MM/DD/YYYY'. However, don't provide suggestions if they would compromise security (e.g., password hints) or the purpose of the content.",
    keyTerms: [
      {
        term: "Error Suggestion",
        definition: "A recommendation provided to the user on how to correct an input error.",
        context: "Error suggestions should be provided when errors are detected and corrections are known.",
      },
      {
        term: "Automatically Detected",
        definition: "An error that is identified by the system without requiring user action to check.",
        context: "When errors are automatically detected and suggestions are known, they should be provided.",
      },
      {
        term: "Security or Purpose",
        definition: "The protection of sensitive information or the intended function of the content.",
        context: "Suggestions should not be provided if they would compromise security or the content's purpose.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.1",
        title: "Error Identification",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Provide error suggestions when possible",
          "Use clear, helpful language",
          "Suggest valid formats or values",
          "Don't compromise security",
        ],
      },
      {
        category: "General",
        items: [
          "Test error suggestions are helpful",
          "Verify suggestions don't compromise security",
          "Check that suggestions are clear",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Error Suggestion",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
        type: "Understanding",
      },
      {
        title: "G83: Providing text descriptions to identify required fields that were not completed",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G83",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-3-4",
    number: "3.3.4",
    title: "Error Prevention (Legal, Financial, Data)",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Reversible, Checked, Confirmed.",
    summary: "Prevent serious errors by allowing reversal, checking, or confirmation.",
    whyItMatters: "Prevents costly or irreversible mistakes.",
    whoBenefits: ["All users", "Users with motor disabilities"],
    officialDefinition:
      "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: (Reversible) Submissions are reversible. (Checked) Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. (Confirmed) A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
    detailedSummary:
      "What This Means: This success criterion requires that for actions with serious consequences (legal commitments, financial transactions, data modifications/deletions, test submissions), at least one of three safeguards must be in place: (1) Submissions are reversible (can be undone), (2) Data is checked for errors and users can correct them, or (3) Users can review, confirm, and correct information before finalizing.\n\nWhy It's Important: Serious actions like financial transactions or legal commitments can have costly or irreversible consequences if made in error. Users with motor disabilities may accidentally click buttons, and all users can make mistakes. Providing safeguards like reversibility, error checking, or confirmation helps prevent serious errors and gives users confidence in completing important actions.\n\nIn Practice: For financial transactions, provide a confirmation step before processing. For data modifications, allow users to undo changes. For form submissions, check for errors and allow corrections. Implement at least one of these safeguards for serious actions. Make confirmation steps clear and easy to understand. Provide clear information about what action will be taken.",
    keyTerms: [
      {
        term: "Legal Commitments",
        definition: "Actions that create legal obligations for the user (e.g., signing contracts, agreeing to terms).",
        context: "Legal commitments require error prevention safeguards.",
      },
      {
        term: "Financial Transactions",
        definition: "Actions that involve money (e.g., purchases, payments, transfers).",
        context: "Financial transactions require error prevention safeguards.",
      },
      {
        term: "Reversible",
        definition: "An action that can be undone or cancelled after it has been completed.",
        context: "Submissions can be reversible as one form of error prevention.",
      },
      {
        term: "Confirmed",
        definition: "An action that requires explicit user confirmation before being finalized.",
        context: "Confirmation mechanisms provide error prevention for serious actions.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.1",
        title: "Error Identification",
        relationship: "Related to",
      },
      {
        number: "3.3.3",
        title: "Error Suggestion",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Identify serious actions (legal, financial, data)",
          "Implement at least one safeguard (reversible, checked, confirmed)",
          "Provide clear confirmation steps",
          "Allow error correction before finalizing",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Error Prevention (Legal, Financial, Data)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html",
        type: "Understanding",
      },
      {
        title: "G164: Providing a stated time within which an online request (or transaction) may be amended or cancelled by the user after making the request",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G164",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-3-5",
    number: "3.3.5",
    title: "Help",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description: "Context-sensitive help is available.",
    summary: "Provide help text relevant to the current task.",
    whyItMatters: "Helps users understand complex forms or tasks.",
    whoBenefits: ["Users with cognitive disabilities", "All users"],
    details: {
      introduction:
        "This criterion requires providing context-sensitive help that is relevant to the current task or form field, making it easier for users to complete tasks successfully.",
      intent:
        "The intent is to ensure that users have access to helpful information when they need it, reducing confusion and errors, especially for complex forms or tasks.",
    },
    examples: [
      {
        title: "No Help Available",
        description: "A complex form has no help text or instructions.",
        type: "bad",
        code: `<form>
  <input type="text" name="tax-id">
  <button type="submit">Submit</button>
</form>`,
      },
      {
        title: "Context-Sensitive Help",
        description: "A form field includes help text explaining what information is needed.",
        type: "good",
        code: `<form>
  <label for="tax-id">Tax ID</label>
  <input type="text" id="tax-id" name="tax-id" 
         aria-describedby="tax-id-help">
  <div id="tax-id-help">
    Enter your 9-digit Tax Identification Number (TIN).
  </div>
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Context-sensitive help -->
<form>
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    aria-describedby="email-help"
  >
  <div id="email-help">
    Enter your email address. We'll use this to send you updates.
  </div>
  
  <label for="password">Password</label>
  <input 
    type="password" 
    id="password" 
    name="password"
    aria-describedby="password-help"
  >
  <div id="password-help">
    Password must be at least 8 characters and include uppercase, 
    lowercase, and numbers.
  </div>
  
  <button type="submit">Submit</button>
</form>`,
      react: `// âœ… Good: Help component
function FormField({ label, id, helpText, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-describedby={id + '-help'}
        {...props}
      />
      <div id={id + '-help'} className="help-text">
        {helpText}
      </div>
    </div>
  )
}

function Form() {
  return (
    <form>
      <FormField
        label="Email Address"
        id="email"
        type="email"
        helpText="Enter your email address. We'll use this to send you updates."
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        helpText="Password must be at least 8 characters and include uppercase, lowercase, and numbers."
      />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check that help text is available for complex forms",
        "Verify that help text is contextually relevant",
        "Test that help text is accessible to screen readers",
        "Check that help is easy to find and understand",
        "Verify that help text appears near relevant fields",
      ],
      automated: ["Tools can detect aria-describedby but cannot verify help text quality"],
    },
    officialDefinition:
      "Context-sensitive help is available.",
    detailedSummary:
      "What This Means: This success criterion requires that context-sensitive help is available to users. Context-sensitive help provides information that is relevant to the current task or form field, making it easier for users to complete tasks successfully.\n\nWhy It's Important: Complex forms or tasks can be confusing, especially for users with cognitive disabilities. Context-sensitive help provides relevant information exactly when and where users need it, reducing confusion and errors. This helps users understand what information is required, what format to use, or how to complete a task.\n\nIn Practice: Provide help text that is relevant to the current context. Use aria-describedby to associate help text with form fields. Place help text near the relevant fields. Make help text clear, concise, and easy to understand. Provide help for complex fields, required formats, or tasks that may be unfamiliar to users. Ensure help text is accessible to screen readers and other assistive technologies.",
    keyTerms: [
      {
        term: "Context-Sensitive Help",
        definition: "Help information that is relevant to the current task, form field, or context in which the user is working.",
        context: "Context-sensitive help must be available and relevant to the current task.",
      },
      {
        term: "Available",
        definition: "Help that is accessible to users when they need it, either visible on the page or easily accessible through a help mechanism.",
        context: "Help must be available and accessible to all users, including those using assistive technologies.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.2",
        title: "Labels or Instructions",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use aria-describedby to associate help with fields",
          "Place help text near relevant fields",
          "Make help text accessible",
        ],
      },
      {
        category: "Content",
        items: [
          "Provide contextually relevant help",
          "Make help clear and concise",
          "Provide help for complex fields",
        ],
      },
      {
        category: "General",
        items: [
          "Test help is accessible",
          "Verify help is contextually relevant",
          "Check help is easy to find",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Help",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/help.html",
        type: "Understanding",
      },
    ],
  },
  {
    id: "3-3-6",
    number: "3.3.6",
    title: "Error Prevention (All)",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "For Web pages that require the user to submit information, at least one of the following is true: Reversible, Checked, Confirmed.",
    summary: "Prevent errors on ALL forms, not just legal/financial ones.",
    whyItMatters: "Prevents mistakes on any type of form submission.",
    whoBenefits: ["All users"],
    details: {
      introduction:
        "This criterion is stricter than Level AA 3.3.4, requiring error prevention mechanisms (reversible, checked, or confirmed) for ALL forms, not just legal or financial ones.",
      intent:
        "The intent is to prevent errors on all form submissions by providing mechanisms to reverse actions, check input, or confirm submissions.",
    },
    examples: [
      {
        title: "Form Without Error Prevention",
        description: "A form submits immediately without confirmation or ability to undo.",
        type: "bad",
        code: `<form onsubmit="submitForm()">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
      {
        title: "Form With Confirmation",
        description: "A form requires confirmation before submission.",
        type: "good",
        code: `<form onsubmit="return confirm('Are you sure you want to submit?')">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Confirmation before submission -->
<form onsubmit="return confirmSubmission()">
  <input type="text" name="name" required>
  <button type="submit">Submit</button>
</form>

<script>
function confirmSubmission() {
  return confirm('Are you sure you want to submit this form?')
}
</script>

<!-- âœ… Good: Undo option after submission -->
<form id="myForm">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
<div id="success-message" style="display: none;">
  Form submitted! <button onclick="undoSubmission()">Undo</button>
</div>`,
      react: `// âœ… Good: Form with confirmation
function Form() {
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowConfirm(true)
  }

  const confirmSubmit = () => {
    setSubmitted(true)
    setShowConfirm(false)
    // Submit form
  }

  const undoSubmit = () => {
    setSubmitted(false)
    // Undo submission
  }

  if (submitted) {
    return (
      <div>
        <p>Form submitted successfully!</p>
        <button onClick={undoSubmit}>Undo</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {showConfirm && (
        <div>
          <p>Are you sure you want to submit?</p>
          <button onClick={confirmSubmit}>Yes, Submit</button>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
      )}
      <input type="text" name="name" required />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check that all forms have error prevention mechanisms",
        "Verify that forms can be reversed, checked, or confirmed",
        "Test confirmation dialogs before submission",
        "Check that users can undo submissions",
        "Verify that input validation occurs before submission",
      ],
      automated: ["Tools can detect form submission handlers but cannot verify error prevention mechanisms"],
    },
    officialDefinition:
      "For Web pages that require the user to submit information, at least one of the following is true: (Reversible) Submissions are reversible. (Checked) Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. (Confirmed) A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
    detailedSummary:
      "What This Means: This success criterion requires that for ALL forms (not just legal or financial ones), at least one of three error prevention mechanisms must be in place: (1) Submissions are reversible (can be undone), (2) Data is checked for errors and users can correct them, or (3) Users can review, confirm, and correct information before finalizing.\n\nWhy It's Important: This is a stricter version of 3.3.4 (Error Prevention for Legal, Financial, Data), requiring error prevention for all forms, not just those with serious consequences. Preventing errors on all forms helps all users, especially those with motor disabilities who may accidentally submit forms, and reduces frustration from mistakes.\n\nIn Practice: Implement at least one error prevention mechanism for all forms. Provide confirmation steps before submission. Allow users to undo submissions. Check for input errors and allow corrections. Make confirmation steps clear and easy to understand. Provide clear information about what will happen when the form is submitted.",
    keyTerms: [
      {
        term: "Reversible",
        definition: "An action that can be undone or cancelled after it has been completed.",
        context: "Submissions can be reversible as one form of error prevention.",
      },
      {
        term: "Checked",
        definition: "Data that is validated for errors before submission, with opportunities for users to correct them.",
        context: "Checking data for errors provides error prevention.",
      },
      {
        term: "Confirmed",
        definition: "An action that requires explicit user confirmation before being finalized.",
        context: "Confirmation mechanisms provide error prevention for all forms.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.4",
        title: "Error Prevention (Legal, Financial, Data)",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Implement at least one safeguard for all forms",
          "Provide confirmation steps",
          "Allow error correction",
          "Make safeguards clear and accessible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Error Prevention (All)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html",
        type: "Understanding",
      },
    ],
  },
  {
    id: "3-3-7",
    number: "3.3.7",
    title: "Redundant Entry",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description:
      "Information previously entered by or provided to the user is auto-populated or available for selection.",
    summary: "Don't make users re-enter information they've already provided in the same session.",
    whyItMatters: "Re-entering data increases cognitive load and error potential.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "All users"],
    officialDefinition:
      "Information previously entered by or provided to the user is auto-populated or available for selection.",
    detailedSummary:
      "What This Means: This success criterion requires that information that users have already entered or provided in the same session should be auto-populated or available for selection, rather than requiring users to re-enter it. This reduces cognitive load and the potential for errors.\n\nWhy It's Important: Requiring users to re-enter information they've already provided increases cognitive load, takes more time, and increases the likelihood of errors. This is especially problematic for users with cognitive disabilities or memory impairments who may struggle to remember what they've already entered. Auto-populating or making previously entered information available for selection improves the user experience and reduces errors.\n\nIn Practice: Auto-populate form fields with information users have already provided in the same session. Make previously entered information available for selection (e.g., dropdown lists of previous entries). Use browser autocomplete features. Store and reuse information within the same session. Don't require users to re-enter information unnecessarily.",
    keyTerms: [
      {
        term: "Auto-Populated",
        definition: "Information that is automatically filled into form fields without requiring user input.",
        context: "Previously entered information should be auto-populated when possible.",
      },
      {
        term: "Available for Selection",
        definition: "Information that users can select from a list or dropdown rather than typing again.",
        context: "Previously entered information should be available for selection.",
      },
      {
        term: "Previously Entered",
        definition: "Information that the user has already provided in the current session.",
        context: "Information previously entered should not require re-entry.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.2",
        title: "Labels or Instructions",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Auto-populate fields with previous entries",
          "Provide selection lists for previous entries",
          "Use browser autocomplete",
          "Store information within session",
        ],
      },
      {
        category: "General",
        items: [
          "Test auto-population works",
          "Verify information is available for selection",
          "Check that re-entry is not required",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Redundant Entry",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html",
        type: "Understanding",
      },
    ],
  },
  {
    id: "3-3-8",
    number: "3.3.8",
    title: "Accessible Authentication (Minimum)",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description:
      "A cognitive function test is not required for authentication unless alternative methods are provided.",
    summary:
      "Provide authentication methods that don't require solving puzzles, remembering passwords, or transcribing text.",
    whyItMatters: "CAPTCHAs and memory tests exclude users with cognitive disabilities.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "Older users"],
    officialDefinition:
      "A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of the following: (Alternative) Another authentication method that does not rely on a cognitive function test. (Mechanism) A mechanism is available to assist the user in completing the cognitive function test. (Object Recognition) The cognitive function test is to recognize objects. (Personal Content) The cognitive function test is to identify non-text content the user provided to the Web site.",
    detailedSummary:
      "What This Means: This success criterion requires that authentication processes do not require cognitive function tests (like CAPTCHAs, password memorization, or puzzle-solving) unless alternative accessible methods are provided. Cognitive function tests can exclude users with cognitive disabilities, memory impairments, or other conditions that affect cognitive function.\n\nWhy It's Important: Traditional authentication methods like CAPTCHAs, complex password requirements, or puzzle-solving can create barriers for users with cognitive disabilities. These users may be unable to complete cognitive function tests, effectively preventing them from accessing services. Providing alternative authentication methods ensures that all users can authenticate successfully.\n\nIn Practice: Provide alternative authentication methods that don't require cognitive function tests. Use methods like biometric authentication, hardware tokens, or email/SMS verification. If cognitive function tests are necessary, provide accessible alternatives. Use object recognition or personal content recognition as alternatives to text-based CAPTCHAs. Provide mechanisms to assist users in completing cognitive function tests when they are required.",
    keyTerms: [
      {
        term: "Cognitive Function Test",
        definition: "A test that requires users to use cognitive abilities like memory, problem-solving, or pattern recognition (e.g., CAPTCHAs, password memorization, puzzles).",
        context: "Cognitive function tests should not be required for authentication unless alternatives are provided.",
      },
      {
        term: "Authentication",
        definition: "The process of verifying a user's identity.",
        context: "Authentication should not require cognitive function tests unless alternatives are available.",
      },
      {
        term: "Alternative Method",
        definition: "An authentication method that does not rely on cognitive function tests.",
        context: "Alternative authentication methods must be provided when cognitive function tests are required.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.9",
        title: "Accessible Authentication (Enhanced)",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Provide alternative authentication methods",
          "Avoid cognitive function tests when possible",
          "Use accessible alternatives to CAPTCHAs",
          "Provide assistance mechanisms if tests are required",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Accessible Authentication (Minimum)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html",
        type: "Understanding",
      },
    ],
  },
  {
    id: "3-3-9",
    number: "3.3.9",
    title: "Accessible Authentication (Enhanced)",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description: "A cognitive function test is not required for authentication.",
    summary: "No cognitive tests required for authentication at all - provide fully accessible alternatives.",
    whyItMatters: "Enhanced protection ensures maximum accessibility for authentication.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "All users"],
    details: {
      introduction:
        "This criterion is stricter than Level AA 3.3.8, requiring that no cognitive function tests (like CAPTCHAs, puzzles, or memory tests) are required for authentication, with fully accessible alternatives provided.",
      intent:
        "The intent is to ensure that authentication is fully accessible to all users, including those with cognitive disabilities, by eliminating cognitive function tests entirely.",
    },
    examples: [
      {
        title: "CAPTCHA Required",
        description: "Users must solve a CAPTCHA to authenticate, excluding users with cognitive disabilities.",
        type: "bad",
        code: `<form>
  <input type="text" name="username">
  <input type="password" name="password">
  <div class="captcha">Solve this puzzle to continue</div>
  <button type="submit">Login</button>
</form>`,
      },
      {
        title: "No Cognitive Tests",
        description: "Authentication uses accessible methods like biometrics or email verification.",
        type: "good",
        code: `<form>
  <input type="email" name="email">
  <button type="submit">Send Login Link</button>
</form>
<p>We'll send you a secure link to log in.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: CAPTCHA required -->
<form>
  <input type="text" name="username">
  <input type="password" name="password">
  <div class="captcha">
    <img src="captcha.png" alt="CAPTCHA">
    <input type="text" name="captcha">
  </div>
  <button type="submit">Login</button>
</form>

<!-- âœ… Good: Email-based authentication -->
<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Send Login Link</button>
</form>
<p>We'll send you a secure link to log in. No password required.</p>

<!-- âœ… Good: Biometric authentication -->
<button onclick="authenticateWithBiometric()">
  Login with Fingerprint
</button>`,
      react: `// âœ… Good: Accessible authentication
function LoginForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send magic link to email
    sendMagicLink(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Login Link</button>
      <p>We'll send you a secure link to log in. No password or CAPTCHA required.</p>
    </form>
  )
}

// âœ… Good: Biometric authentication option
function BiometricLogin() {
  const handleBiometric = async () => {
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          // WebAuthn configuration
        }
      })
      // Authenticate with credential
    } catch (error) {
      console.error('Biometric authentication failed')
    }
  }

  return (
    <button onClick={handleBiometric}>
      Login with Biometric
    </button>
  )
}`,
    },
    testing: {
      manual: [
        "Check that no CAPTCHAs or puzzles are required for authentication",
        "Verify that no memory tests are required",
        "Test that accessible authentication methods are available",
        "Check that alternatives work for users with cognitive disabilities",
        "Verify that authentication is fully accessible",
      ],
      automated: ["Tools can detect CAPTCHA elements but cannot verify accessible alternatives"],
    },
    officialDefinition:
      "A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process.",
    detailedSummary:
      "What This Means: This success criterion requires that authentication processes do not require any cognitive function tests (like CAPTCHAs, password memorization, or puzzle-solving). This is a stricter version of Level AA 3.3.8, which allows cognitive function tests if alternatives are provided. At Level AAA, cognitive function tests must be eliminated entirely.\n\nWhy It's Important: Cognitive function tests can create insurmountable barriers for users with cognitive disabilities, memory impairments, or other conditions that affect cognitive function. By eliminating these tests entirely, authentication becomes fully accessible to all users. This ensures that no user is excluded from accessing services due to their cognitive abilities.\n\nIn Practice: Eliminate all cognitive function tests from authentication processes. Use fully accessible alternatives like biometric authentication, hardware tokens, email/SMS verification, or other methods that don't require cognitive function. Provide multiple accessible authentication options. Ensure that authentication is possible for users with any type of disability, including cognitive disabilities.",
    keyTerms: [
      {
        term: "Cognitive Function Test",
        definition: "A test that requires users to use cognitive abilities like memory, problem-solving, or pattern recognition (e.g., CAPTCHAs, password memorization, puzzles).",
        context: "Cognitive function tests must not be required for authentication at Level AAA.",
      },
      {
        term: "Authentication",
        definition: "The process of verifying a user's identity.",
        context: "Authentication must not require cognitive function tests at Level AAA.",
      },
      {
        term: "Fully Accessible",
        definition: "Accessible to users with all types of disabilities, including cognitive disabilities.",
        context: "Authentication must be fully accessible without requiring cognitive function tests.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.3.8",
        title: "Accessible Authentication (Minimum)",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Eliminate all cognitive function tests",
          "Provide fully accessible authentication methods",
          "Use biometric, token, or other accessible methods",
          "Test with users with cognitive disabilities",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Accessible Authentication (Enhanced)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html",
        type: "Understanding",
      },
    ],
  },
]