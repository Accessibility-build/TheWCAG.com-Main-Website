// Robust only has one guideline, so we can keep it simple
import type { SuccessCriterion } from '../types'

// Guideline 4.1: Compatible
export const robustCriteria: SuccessCriterion[] = [
  {
    id: "4-1-1",
    number: "4.1.1",
    title: "Parsing",
    level: "A",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique.",
    summary: "Ensure HTML is well-formed with no parsing errors.",
    whyItMatters: "Assistive technologies rely on valid markup to interpret content correctly.",
    whoBenefits: ["Screen reader users", "All assistive technology users"],
    details: {
      introduction:
        "This criterion ensures that HTML markup is well-formed and valid, which is essential for assistive technologies to correctly parse and interpret the content.",
      intent:
        "The intent is to ensure that user agents, including assistive technologies, can reliably parse the markup. Invalid HTML can cause assistive technologies to misinterpret or skip content.",
    },
    examples: [
      {
        title: "Unclosed HTML Tag",
        description: "A div tag is opened but never closed, causing parsing errors.",
        type: "bad",
        code: '<div><p>Content</p>',
      },
      {
        title: "Well-Formed HTML",
        description: "All tags are properly opened and closed, nested correctly.",
        type: "good",
        code: '<div><p>Content</p></div>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Unclosed tag -->
<div>
  <p>Content</p>

<!-- ✅ Good: Properly closed -->
<div>
  <p>Content</p>
</div>

<!-- ❌ Bad: Duplicate ID -->
<div id="header">Header</div>
<div id="header">Another Header</div>

<!-- ✅ Good: Unique IDs -->
<div id="main-header">Header</div>
<div id="sub-header">Another Header</div>`,
    },
    testing: {
      manual: [
        "Use W3C HTML Validator to check for parsing errors.",
        "Check browser console for HTML parsing errors.",
        "Verify all elements have matching start and end tags.",
        "Check that all IDs are unique on the page.",
        "Verify no duplicate attributes exist on elements.",
        "Test with multiple browsers to ensure consistent parsing.",
        "Use assistive technologies to verify content is interpreted correctly.",
      ],
      automated: [
        "Use W3C HTML Validator or similar tools to check markup validity.",
        "Use axe DevTools to detect parsing issues.",
        "Use browser DevTools to check for console errors.",
        "Use HTML_CodeSniffer to detect markup problems.",
      ],
    },
    complianceRequirements: [
      "All HTML elements must have complete start and end tags (or be self-closing).",
      "Elements must be nested according to HTML specifications (no invalid nesting).",
      "No element may have duplicate attributes.",
      "All ID attributes must be unique within the page.",
      "HTML must be valid and well-formed according to HTML specifications.",
      "Markup must not contain parsing errors that prevent assistive technologies from interpreting content.",
    ],
    beyondCompliance: [
      "Use semantic HTML5 elements for better structure and meaning.",
      "Validate HTML regularly during development to catch errors early.",
      "Use a linter or validator in your build process.",
      "Ensure HTML is valid across different HTML versions if supporting multiple standards.",
      "Test with various assistive technologies to verify correct interpretation.",
      "Keep HTML structure clean and maintainable.",
      "Document any intentional deviations from standard HTML.",
    ],
    myths: [
      {
        myth: "Browsers fix HTML errors automatically, so validation doesn't matter.",
        reality: "While browsers may render invalid HTML, assistive technologies may not handle it correctly. Invalid HTML can cause screen readers to misinterpret or skip content.",
      },
      {
        myth: "Duplicate IDs are fine if they're in different sections.",
        reality: "IDs must be unique across the entire page, not just within sections. Duplicate IDs can cause assistive technologies to malfunction.",
      },
      {
        myth: "Self-closing tags like <img> don't need closing tags.",
        reality: "Self-closing tags are correct, but unclosed tags that should be closed (like <div>) are invalid and can cause parsing issues.",
      },
    ],
    commonFailures: [
      {
        failure: "Unclosed HTML tags (missing closing tags).",
        solution: "Ensure all opened tags are properly closed. Use HTML validators to catch unclosed tags. Example: <div> needs </div>.",
      },
      {
        failure: "Duplicate ID attributes on the same page.",
        solution: "Ensure all ID values are unique. Use classes for styling that applies to multiple elements. Rename duplicate IDs to be unique.",
      },
      {
        failure: "Invalid element nesting (e.g., <p> inside <p>).",
        solution: "Follow HTML nesting rules. Some elements cannot contain certain other elements. Use validators to check nesting.",
      },
      {
        failure: "Duplicate attributes on the same element.",
        solution: "Remove duplicate attributes. Each attribute should appear only once per element.",
      },
      {
        failure: "Missing required attributes (e.g., alt on images, type on inputs).",
        solution: "While not always a parsing error, missing required attributes can cause issues. Ensure all required attributes are present.",
      },
    ],
  },
  {
    id: "4-1-2",
    number: "4.1.2",
    title: "Name, Role, Value",
    level: "A",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "For all user interface components, the name and role can be programmatically determined; states, properties, and values can be programmatically set; and notification of changes is available to user agents.",
    summary: "Use proper ARIA attributes and semantic HTML so assistive technologies understand component purpose.",
    whyItMatters: "Screen readers need to know what each element is and how to interact with it.",
    whoBenefits: ["Screen reader users", "Keyboard users", "Voice control users"],
    details: {
      introduction:
        "This criterion ensures that assistive technologies can understand what each UI component is (role), what it's called (name), its current state, and how to interact with it.",
      intent:
        "The intent is to ensure that assistive technologies can programmatically determine the name, role, state, and value of all UI components, enabling users to understand and interact with them effectively.",
    },
    examples: [
      {
        title: "Custom Button Without Role",
        description: "A div styled as a button has no role or accessible name, so screen readers don't know it's a button.",
        type: "bad",
        code: '<div onclick="submit()" class="button">Submit</div>',
      },
      {
        title: "Properly Labeled Button",
        description: "A button element with proper role and accessible name.",
        type: "good",
        code: '<button onclick="submit()">Submit</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Custom component without role/name -->
<div onclick="handleClick()" class="button">Click me</div>

<!-- ✅ Good: Semantic button -->
<button onclick="handleClick()">Click me</button>

<!-- ✅ Good: Custom component with proper ARIA -->
<div 
  role="button" 
  tabindex="0"
  aria-label="Submit form"
  onclick="handleClick()"
  class="button"
>
  Submit
</div>`,
      react: `// ✅ Good: Accessible custom component
function CustomButton({ children, onClick, ariaLabel }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className="button"
    >
      {children}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Use a screen reader to navigate the page and verify all interactive elements are announced correctly.",
        "Check that each component's role is announced (button, link, checkbox, etc.).",
        "Verify that component names are clear and descriptive.",
        "Test that component states are announced (checked, expanded, disabled, etc.).",
        "Use browser DevTools to inspect accessibility tree and verify name, role, value.",
        "Test with keyboard navigation to ensure all components are accessible.",
        "Verify that dynamic changes to components are announced to screen readers.",
      ],
      automated: [
        "Use axe DevTools to check for missing roles, names, or values.",
        "Use WAVE to identify components with accessibility issues.",
        "Use browser accessibility inspector to verify accessibility tree.",
      ],
    },
    complianceRequirements: [
      "All UI components must have a programmatically determinable role.",
      "All UI components must have a programmatically determinable name (accessible name).",
      "Component states (checked, expanded, disabled, etc.) must be programmatically determinable.",
      "Component values (current selection, input value, etc.) must be programmatically determinable.",
      "Changes to component state or value must be announced to assistive technologies.",
      "Custom components must use proper ARIA attributes or semantic HTML.",
    ],
    beyondCompliance: [
      "Use semantic HTML elements whenever possible instead of custom components with ARIA.",
      "Provide detailed accessible descriptions when helpful (aria-describedby).",
      "Ensure component names are clear and descriptive, not just functional.",
      "Test with multiple assistive technologies to ensure compatibility.",
      "Provide keyboard shortcuts for complex components when appropriate.",
      "Document custom component accessibility patterns for consistency.",
      "Use ARIA live regions appropriately to announce dynamic changes.",
    ],
    myths: [
      {
        myth: "If it looks like a button, assistive technologies will know it's a button.",
        reality: "Assistive technologies rely on programmatic information (role, name), not visual appearance. A div that looks like a button needs role='button' and proper keyboard handling.",
      },
      {
        myth: "I can use any ARIA role I want for custom components.",
        reality: "ARIA roles must match the component's actual behavior. Don't use role='button' for something that behaves like a link, or role='checkbox' for something that behaves differently.",
      },
      {
        myth: "Screen readers automatically know what custom components do.",
        reality: "Screen readers only know what you tell them through semantic HTML or ARIA attributes. Custom components require explicit role, name, and state information.",
      },
    ],
    commonFailures: [
      {
        failure: "Custom components without role attributes.",
        solution: "Add appropriate role attributes to custom components. Use role='button', role='checkbox', role='tab', etc., based on the component's function.",
      },
      {
        failure: "Components without accessible names (missing labels or aria-label).",
        solution: "Provide accessible names using <label>, aria-label, aria-labelledby, or visible text. Icon-only buttons need aria-label.",
      },
      {
        failure: "Component states not communicated (e.g., expanded/collapsed, checked/unchecked).",
        solution: "Use appropriate ARIA attributes: aria-expanded for expandable content, aria-checked for checkboxes, aria-selected for options, etc.",
      },
      {
        failure: "Dynamic changes not announced to screen readers.",
        solution: "Use aria-live regions or role='alert' to announce important changes. Ensure state changes are programmatically updated.",
      },
      {
        failure: "Using wrong ARIA roles that don't match component behavior.",
        solution: "Ensure ARIA roles accurately reflect component behavior. Don't use role='button' for links, or role='checkbox' for radio buttons.",
      },
    ],
  },
  {
    id: "4-1-3",
    number: "4.1.3",
    title: "Status Messages",
    level: "AA",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "Status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
    summary: "Use ARIA live regions to announce status messages without moving keyboard focus.",
    whyItMatters: "Screen reader users need to know about status updates without focus interruption.",
    whoBenefits: ["Screen reader users", "Keyboard users", "Users with attention disorders"],
    details: {
      introduction:
        "This criterion ensures that status messages (like form submission success, error notifications, or loading states) are announced to screen reader users without requiring keyboard focus to move to the message.",
      intent:
        "The intent is to ensure that important status information is communicated to users of assistive technologies without disrupting their workflow by moving focus away from their current task.",
    },
    examples: [
      {
        title: "Status Message Without Announcement",
        description: "A success message appears on screen but screen readers don't announce it because it doesn't have proper ARIA attributes.",
        type: "bad",
        code: '<div class="success-message">Form submitted successfully</div>',
      },
      {
        title: "Status Message with ARIA Live Region",
        description: "A success message is announced to screen readers using aria-live without moving focus.",
        type: "good",
        code: '<div role="status" aria-live="polite">Form submitted successfully</div>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Status message without announcement -->
<div class="message">Form submitted successfully</div>

<!-- ✅ Good: Status message with aria-live -->
<div role="status" aria-live="polite" aria-atomic="true">
  Form submitted successfully
</div>

<!-- ✅ Good: Error message with alert -->
<div role="alert" aria-live="assertive">
  Error: Please correct the form fields
</div>`,
      react: `// ✅ Good: Status message component
function StatusMessage({ message, type = 'success' }) {
  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      className={'message message-' + type}
    >
      {message}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Trigger status messages (form submission, errors, success notifications).",
        "Use a screen reader to verify messages are announced without focus moving.",
        "Check that status messages use appropriate ARIA roles (status, alert).",
        "Verify that aria-live is set appropriately (polite for non-urgent, assertive for urgent).",
        "Test that messages are announced even when user is focused elsewhere.",
        "Verify that status messages are programmatically determinable.",
      ],
      automated: [
        "Use axe DevTools to check for proper status message implementation.",
        "Use WAVE to verify ARIA live regions are properly configured.",
        "Use browser accessibility inspector to check status message roles.",
      ],
    },
    complianceRequirements: [
      "Status messages must be programmatically determinable through role or properties.",
      "Status messages must be announced to assistive technologies without requiring focus.",
      "Use role='status' for non-urgent status messages (form success, info updates).",
      "Use role='alert' for urgent, important messages (errors, warnings).",
      "Set aria-live='polite' for non-urgent messages or aria-live='assertive' for urgent ones.",
      "Status messages must be in the DOM when they occur (not just visually displayed).",
    ],
    beyondCompliance: [
      "Use aria-atomic='true' to ensure entire message is announced, not just changes.",
      "Consider using aria-relevant to control what parts of messages are announced.",
      "Provide clear, concise status messages that are easy to understand.",
      "Test status messages with actual screen reader users to ensure clarity.",
      "Ensure status messages don't create excessive noise (don't announce every keystroke).",
      "Use appropriate urgency levels (polite vs assertive) based on message importance.",
      "Consider providing visual indicators in addition to screen reader announcements.",
    ],
    myths: [
      {
        myth: "If a message appears on screen, screen readers will automatically announce it.",
        reality: "Screen readers only announce content that's in the DOM and has appropriate ARIA attributes. Visual-only messages may not be announced.",
      },
      {
        myth: "I can use aria-live on any element to make it announce.",
        reality: "While aria-live can help, you should also use appropriate roles (status, alert) and ensure the element is in the DOM when the message occurs.",
      },
      {
        myth: "All status messages should use aria-live='assertive'.",
        reality: "Assertive interrupts the user. Use 'polite' for most status messages and 'assertive' only for urgent errors that need immediate attention.",
      },
    ],
    commonFailures: [
      {
        failure: "Status messages that aren't announced to screen readers.",
        solution: "Add role='status' or role='alert' and aria-live='polite' or 'assertive'. Ensure messages are in the DOM when they occur.",
      },
      {
        failure: "Moving focus to status messages instead of using live regions.",
        solution: "Use aria-live regions so messages are announced without moving focus. Only move focus for critical errors that require immediate action.",
      },
      {
        failure: "Using wrong aria-live value (assertive for non-urgent messages).",
        solution: "Use aria-live='polite' for most status messages (success, info). Reserve 'assertive' for urgent errors that need immediate attention.",
      },
      {
        failure: "Status messages that appear and disappear too quickly.",
        solution: "Ensure status messages remain in the DOM long enough for screen readers to announce them. Consider keeping them visible until dismissed or until a new message appears.",
      },
      {
        failure: "Not using appropriate roles (status vs alert).",
        solution: "Use role='status' for informational messages. Use role='alert' for error messages that require immediate attention.",
      },
    ],
  },
]

