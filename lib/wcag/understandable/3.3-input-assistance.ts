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
  },
]