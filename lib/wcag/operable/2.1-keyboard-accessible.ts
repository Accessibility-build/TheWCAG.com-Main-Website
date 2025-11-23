import type { SuccessCriterion } from '../types'

// Guideline 2.1: Keyboard Accessible
export const keyboardAccessibleCriteria: SuccessCriterion[] = [
{
    id: "2-1-1",
    number: "2.1.1",
    title: "Keyboard",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description: "All functionality of the content is operable through a keyboard interface.",
    officialDefinition:
      "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
    summary: "Every interactive element must be usable with just a keyboard (no mouse required).",
    detailedSummary:
      "What This Means: This success criterion requires that all functionality available through a mouse or other pointing device must also be available through keyboard input. Users must be able to navigate to all interactive elements using Tab, Shift+Tab, arrow keys, and other standard keyboard navigation, and activate them using Enter, Space, or other keyboard commands.\n\nWhy It's Important: Many users cannot use a mouse due to motor disabilities, blindness, or other conditions. Keyboard-only users rely entirely on keyboard navigation to access web content. If functionality is only available through mouse interaction, these users are excluded from using that functionality, making the content inaccessible.\n\nIn Practice: Use semantic HTML elements (button, link, input) that have built-in keyboard support. For custom interactive components, add keyboard event handlers (onKeyDown, onKeyPress) and ensure they're focusable (tabindex). All interactive elements must be reachable via Tab key navigation and activatable via Enter or Space keys. Test by navigating the entire page using only the keyboard to verify all functionality is accessible.",
    whyItMatters: "Many users cannot use a mouse due to motor disabilities or blindness.",
    whoBenefits: ["Blind users", "Users with motor disabilities", "Power users"],
    details: {
      introduction:
        "This is one of the most fundamental accessibility requirements. All interactive functionality must be accessible via keyboard, as many users cannot use pointing devices.",
      intent:
        "The intent is to ensure that all functionality is available through a keyboard interface so that users who cannot use a mouse or other pointing device can access all features.",
    },
    examples: [
      {
        title: "Custom Button Without Keyboard Support",
        description: "A custom-styled button that only responds to mouse clicks, not keyboard activation.",
        type: "bad",
        code: '<div onclick="submitForm()" class="button">Submit</div>',
      },
      {
        title: "Proper Keyboard-Accessible Button",
        description: "A button element that works with both mouse and keyboard (Enter/Space keys).",
        type: "good",
        code: '<button onclick="submitForm()" class="button">Submit</button>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Div with onclick (not keyboard accessible) -->
<div onclick="handleClick()" class="button">Click me</div>

<!-- ✅ Good: Proper button element -->
<button onclick="handleClick()" class="button">Click me</button>

<!-- ✅ Good: Link that looks like a button -->
<a href="#" onclick="handleClick(); return false;" role="button" tabindex="0">Click me</a>`,
      react: `// ❌ Bad: Div with onClick only
function BadButton() {
  return (
    <div onClick={handleClick} className="button">
      Click me
    </div>
  )
}

// ✅ Good: Button element
function GoodButton() {
  return (
    <button onClick={handleClick} className="button">
      Click me
    </button>
  )
}

// ✅ Good: Custom component with keyboard support
function AccessibleButton() {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }
  
  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="button"
    >
      Click me
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Navigate the entire page using only the Tab key (and Shift+Tab to go backwards).",
        "Verify all interactive elements receive keyboard focus (visible focus indicator).",
        "Test that all buttons, links, and form controls can be activated with Enter or Space key.",
        "Verify dropdown menus can be opened and navigated with keyboard.",
        "Check that custom interactive components respond to keyboard events.",
        "Test that focus order is logical and follows the visual layout.",
        "Verify that keyboard focus is visible (focus indicator is present).",
      ],
      automated: [
        "Use axe DevTools to check for keyboard accessibility issues.",
        "Use WAVE to identify elements that may not be keyboard accessible.",
        "Use keyboard navigation testing tools to verify all interactive elements are reachable.",
      ],
    },
    complianceRequirements: [
      "All interactive elements (buttons, links, form controls) must be keyboard accessible.",
      "All functionality available via mouse must also be available via keyboard.",
      "Keyboard focus must be visible on all focusable elements.",
      "Custom interactive components must have proper keyboard event handlers.",
      "Focus order must be logical and follow a meaningful sequence.",
      "All interactive elements must be reachable using only keyboard navigation (Tab, Shift+Tab, Arrow keys, Enter, Space).",
    ],
    beyondCompliance: [
      "Provide keyboard shortcuts for frequently used actions.",
      "Ensure focus indicators are highly visible and meet contrast requirements.",
      "Implement skip links to allow users to jump to main content.",
      "Provide clear focus management in single-page applications.",
      "Consider providing keyboard shortcuts documentation for power users.",
      "Test keyboard navigation with actual keyboard-only users.",
      "Ensure focus doesn't get trapped in modals or overlays.",
    ],
    myths: [
      {
        myth: "If it works with a mouse, it's accessible.",
        reality: "Mouse accessibility doesn't guarantee keyboard accessibility. Many users rely solely on keyboards, and all functionality must work without a mouse.",
      },
      {
        myth: "I can use divs with onClick handlers instead of buttons.",
        reality: "Divs with onClick are not keyboard accessible by default. Use proper semantic elements (button, a) or add keyboard event handlers, ARIA roles, and tabindex.",
      },
      {
        myth: "Keyboard users can just use the mouse if needed.",
        reality: "Many users physically cannot use a mouse due to motor disabilities, blindness, or other conditions. Keyboard access is not optional.",
      },
    ],
    commonFailures: [
      {
        failure: "Custom buttons using divs or spans with only onClick handlers.",
        solution: "Use proper <button> elements or add keyboard event handlers (onKeyDown), role='button', and tabIndex={0} to custom elements.",
      },
      {
        failure: "Interactive elements that don't receive keyboard focus.",
        solution: "Ensure all interactive elements are in the tab order. Use tabIndex={0} for custom elements, or use native focusable elements.",
      },
      {
        failure: "No visible focus indicator on keyboard navigation.",
        solution: "Add visible focus styles using :focus pseudo-class. Don't remove outline without providing an alternative focus indicator.",
      },
      {
        failure: "Functionality that only works with mouse (hover, drag-and-drop without keyboard alternative).",
        solution: "Provide keyboard alternatives for all mouse-only interactions. For example, use click/tap for hover actions, or provide keyboard shortcuts for drag operations.",
      },
      {
        failure: "Illogical focus order that doesn't match visual layout.",
        solution: "Ensure DOM order matches visual order, or use tabIndex to create logical focus sequence. Test focus order by tabbing through the page.",
      },
    ],
    keyTerms: [
      {
        term: "Keyboard Interface",
        definition: "Interface used by software to obtain keystroke input. A keyboard interface allows users to provide keystroke input to programs even if the native support for keyboards is not available.",
        context: "All functionality must be operable through a keyboard interface without requiring mouse interaction.",
      },
      {
        term: "Keyboard Accessible",
        definition: "Able to be operated through a keyboard interface without requiring specific timings for individual keystrokes.",
        context: "All interactive elements must be keyboard accessible, meaning they can be navigated to and activated using only keyboard input.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.1.2",
        title: "No Keyboard Trap",
        relationship: "Complements",
      },
      {
        number: "2.4.3",
        title: "Focus Order",
        relationship: "Related to",
      },
      {
        number: "2.4.7",
        title: "Focus Visible",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use semantic HTML elements (button, link, input) with built-in keyboard support",
          "Ensure all interactive elements are focusable",
          "Add tabindex='0' for custom interactive components",
          "Avoid using div or span for interactive elements without keyboard support",
        ],
      },
      {
        category: "JavaScript",
        items: [
          "Add keyboard event handlers (onKeyDown, onKeyPress) for custom components",
          "Handle Enter and Space keys for activation",
          "Handle arrow keys for navigation in custom components",
          "Ensure all mouse interactions have keyboard equivalents",
        ],
      },
      {
        category: "General",
        items: [
          "Test entire page using only keyboard (Tab, Enter, Space, arrows)",
          "Verify all interactive elements are reachable",
          "Check that all functionality works without mouse",
          "Verify focus order is logical",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Keyboard",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
        type: "Understanding",
      },
      {
        title: "G90: Providing keyboard-triggered event handlers",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G90",
        type: "Techniques",
      },
      {
        title: "H91: Using HTML form controls and links",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H91",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-1-2",
    number: "2.1.2",
    title: "No Keyboard Trap",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "If keyboard focus can be moved to a component, focus can be moved away from that component using only a keyboard interface.",
    officialDefinition:
      "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
    summary: "Users must be able to navigate away from any element using only the keyboard.",
    detailedSummary:
      "What This Means: This success criterion requires that if keyboard focus can be moved to a component (like a modal, menu, or custom widget), users must be able to move focus away from that component using only keyboard input. Users should never get 'trapped' in a component with no way to escape using the keyboard.\n\nWhy It's Important: Keyboard users can become trapped in components like modals, dropdown menus, or custom widgets if there's no keyboard way to exit. This creates a barrier that prevents users from accessing the rest of the page. Users who are blind or have motor disabilities rely entirely on keyboard navigation, so being trapped in a component makes the entire page unusable.\n\nIn Practice: Ensure modals can be closed with Escape key or by focusing and activating a close button. Dropdown menus should close when Escape is pressed or when focus moves away. Custom widgets should provide clear keyboard exit methods. If a non-standard method is required to exit (like a specific key combination), inform users of this method. Test by navigating into components and verifying you can always navigate out using only the keyboard.",
    whyItMatters: "Keyboard users can become trapped in components, unable to access the rest of the page.",
    whoBenefits: ["Keyboard users", "Blind users", "Users with motor disabilities"],
    details: {
      introduction:
        "This criterion prevents keyboard users from getting trapped in interface components like modals, menus, or custom widgets.",
      intent:
        "The intent is to ensure that keyboard users can always navigate away from any component they can navigate into, preventing them from being stuck and unable to access other parts of the page.",
    },
    examples: [
      {
        title: "Modal Without Escape",
        description: "A modal dialog opens but there's no way to close it with keyboard, trapping the user.",
        type: "bad",
        code: '<div class="modal" tabindex="-1">Content</div>',
      },
      {
        title: "Modal With Keyboard Escape",
        description: "A modal can be closed with Escape key or by focusing and activating a close button.",
        type: "good",
        code: '<div class="modal" tabindex="-1" onKeyDown="if(e.key===\'Escape\') closeModal()">Content</div>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Modal without escape -->
<div class="modal" id="trapped-modal">
  <div>Content</div>
</div>

<!-- ✅ Good: Modal with escape -->
<div class="modal" id="accessible-modal" tabindex="-1">
  <button onclick="closeModal()" aria-label="Close">×</button>
  <div>Content</div>
</div>
<script>
document.getElementById('accessible-modal').addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})
</script>`,
      react: `// ✅ Good: Modal with keyboard escape
function AccessibleModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null)
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  
  if (!isOpen) return null
  
  return (
    <div
      ref={modalRef}
      className="modal"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <button onClick={onClose} aria-label="Close">×</button>
      {children}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Navigate to any component that can receive focus (modals, dropdowns, custom widgets).",
        "Verify you can navigate away using Tab, Shift+Tab, or Escape key.",
        "Test that focus doesn't get trapped within the component.",
        "Check that Escape key closes modals, dropdowns, and other overlay components.",
        "Verify that after closing a modal, focus returns to the element that opened it.",
        "Test with screen reader to ensure focus management is announced correctly.",
      ],
      automated: [
        "Use axe DevTools to check for keyboard trap issues.",
        "Use keyboard navigation testing tools to verify focus can escape all components.",
      ],
    },
    complianceRequirements: [
      "Users must be able to move keyboard focus away from any component they can move focus into.",
      "Modal dialogs must be dismissible with Escape key.",
      "Dropdown menus must close when focus moves away or Escape is pressed.",
      "Custom widgets must not trap keyboard focus.",
      "Focus must be able to move to elements outside the component using standard keyboard navigation.",
      "When a modal closes, focus should return to the element that triggered it.",
    ],
    beyondCompliance: [
      "Provide multiple ways to exit components (Escape key, Close button, clicking outside).",
      "Implement proper focus management when opening/closing modals and overlays.",
      "Use focus trapping libraries that handle edge cases properly.",
      "Provide clear visual indicators when focus is within a modal or overlay.",
      "Test keyboard navigation with actual keyboard-only users.",
      "Consider providing keyboard shortcuts for common actions within components.",
    ],
    myths: [
      {
        myth: "If users can click outside to close, keyboard trap is okay.",
        reality: "Keyboard users need keyboard-accessible ways to exit. Clicking outside requires a mouse, which keyboard users don't have.",
      },
      {
        myth: "Focus trapping in modals is always bad.",
        reality: "Temporary focus trapping within modals is acceptable and even recommended, but users must be able to close the modal with Escape key.",
      },
    ],
    commonFailures: [
      {
        failure: "Modal dialogs that can't be closed with keyboard.",
        solution: "Add Escape key handler and ensure close button is keyboard accessible. Use proper ARIA attributes (aria-modal='true').",
      },
      {
        failure: "Custom dropdown menus that trap focus.",
        solution: "Ensure dropdowns close when Escape is pressed or when focus moves outside. Don't prevent default Tab behavior.",
      },
      {
        failure: "Focus trapped in iframes or embedded content.",
        solution: "Ensure iframes have proper tabindex and keyboard navigation. Consider providing a way to exit iframe content.",
      },
      {
        failure: "Focus doesn't return after closing modals.",
        solution: "Store the element that opened the modal and return focus to it when closing. Use focus() method programmatically.",
      },
    ],
    keyTerms: [
      {
        term: "Keyboard Trap",
        definition: "A situation where keyboard focus cannot be moved away from a component using standard keyboard navigation methods.",
        context: "Keyboard traps prevent users from accessing other parts of the page and must be avoided.",
      },
      {
        term: "Standard Exit Methods",
        definition: "Common keyboard methods for exiting components, such as Tab, Shift+Tab, Escape, or arrow keys.",
        context: "Users should be able to exit components using standard keyboard methods without requiring special instructions.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.1.1",
        title: "Keyboard",
        relationship: "Complements",
      },
      {
        number: "2.4.3",
        title: "Focus Order",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Add Escape key handler to close modals and overlays",
          "Ensure dropdowns close when Escape is pressed",
          "Allow Tab to move focus outside components",
          "Implement proper focus management when opening/closing components",
          "Return focus to trigger element after closing modals",
        ],
      },
      {
        category: "HTML",
        items: [
          "Provide close buttons in modals and overlays",
          "Use proper ARIA attributes (aria-modal, aria-label)",
          "Ensure close buttons are keyboard accessible",
        ],
      },
      {
        category: "General",
        items: [
          "Test by navigating into all components",
          "Verify you can always navigate out using keyboard",
          "Test Escape key functionality",
          "Verify focus doesn't get trapped",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding No Keyboard Trap",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
        type: "Understanding",
      },
      {
        title: "G21: Ensuring that users are not trapped in content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G21",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-1-3",
    number: "2.1.3",
    title: "Keyboard (No Exception)",
    level: "AAA",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
    officialDefinition:
      "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
    summary: "Everything must be keyboard accessible, with no exceptions.",
    detailedSummary:
      "What This Means: This success criterion is a stricter version of 2.1.1 (Level A). At Level AAA, ALL functionality must be keyboard accessible with no exceptions, and keystrokes must not require specific timings. This means there can be no mouse-only functionality, no exceptions for complex interactions, and users must be able to take their time with keystrokes without timing out.\n\nWhy It's Important: Some users rely entirely on keyboard input and cannot use pointing devices at all. At the AAA level, we ensure complete access for these users by requiring that every single piece of functionality is keyboard accessible. Additionally, users with motor disabilities may need more time between keystrokes, so timing requirements must be eliminated.\n\nIn Practice: Ensure absolutely every interactive element and function is keyboard accessible. This includes complex interactions like drag-and-drop, which must have keyboard alternatives. Remove any timing requirements for keystrokes - users should be able to take as long as needed between key presses. Test thoroughly with keyboard-only navigation to verify complete access.",
    whyItMatters: "Ensures complete access for users who rely solely on keyboards.",
    whoBenefits: ["Blind users", "Users with motor disabilities"],
    details: {
      introduction:
        "This criterion is stricter than Level A 2.1.1, requiring that ALL functionality is keyboard accessible with no exceptions, and without requiring specific timings for keystrokes.",
      intent:
        "The intent is to ensure complete keyboard access for users who cannot use pointing devices, with no exceptions for any functionality.",
    },
    examples: [
      {
        title: "Mouse-Only Functionality",
        description: "Some functionality can only be accessed with a mouse, violating this criterion.",
        type: "bad",
        code: `<div onmouseover="showMenu()" onmouseout="hideMenu()">
  Menu
</div>`,
      },
      {
        title: "Fully Keyboard Accessible",
        description: "All functionality is accessible via keyboard, including focus and keyboard events.",
        type: "good",
        code: `<div onfocus="showMenu()" onblur="hideMenu()" tabindex="0">
  Menu
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Mouse-only functionality -->
<div onmouseover="showMenu()" onmouseout="hideMenu()">
  Menu
</div>

<!-- âœ… Good: Keyboard accessible -->
<div 
  onfocus="showMenu()" 
  onblur="hideMenu()" 
  onkeydown="handleKeyDown(event)"
  tabindex="0"
  role="button"
  aria-haspopup="true"
>
  Menu
</div>`,
      react: `// âœ… Good: Fully keyboard accessible component
function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      Menu
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Test all functionality using only keyboard (Tab, Enter, Space, Arrow keys)",
        "Verify no functionality requires mouse or pointer",
        "Check that all interactive elements are keyboard accessible",
        "Test that keyboard navigation works without timing requirements",
        "Verify that complex interactions can be completed with keyboard only",
      ],
      automated: ["Tools can check for keyboard accessibility but cannot verify all functionality"],
    },
    keyTerms: [
      {
        term: "Specific Timings",
        definition: "Requirements for keystrokes to be entered within a certain time limit or in rapid succession.",
        context: "At Level AAA, keystrokes must not require specific timings - users must be able to take as long as needed.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.1.1",
        title: "Keyboard",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Ensure absolutely every function is keyboard accessible",
          "Remove all timing requirements for keystrokes",
          "Provide keyboard alternatives for all mouse-only interactions",
          "Test with keyboard-only navigation",
          "Verify no exceptions exist",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Keyboard (No Exception)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html",
        type: "Understanding",
      },
    ],
  },
  {
    id: "2-1-4",
    number: "2.1.4",
    title: "Character Key Shortcuts",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, numbers, or symbol characters, then at least one of the following is true: Turn off, Remap, Active only on focus.",
    officialDefinition:
      "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: (Level A) Turn off: A mechanism is available to turn the shortcut off; Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g., Ctrl, Alt); Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.",
    summary: "Single-key shortcuts must be turn-off-able or remappable.",
    detailedSummary:
      "What This Means: This success criterion addresses keyboard shortcuts that use only printable characters (letters, numbers, punctuation, symbols). If such shortcuts are implemented, at least one of the following must be true: (1) Users can turn the shortcut off, (2) Users can remap the shortcut to use modifier keys (like Ctrl or Alt), or (3) The shortcut is only active when the component has focus.\n\nWhy It's Important: Single-character shortcuts can conflict with speech recognition software, which types characters as users speak. They can also be accidentally activated by users with motor disabilities who may press keys unintentionally. By requiring shortcuts to be turn-off-able, remappable, or only active on focus, we prevent accidental activations while still allowing power users to benefit from shortcuts.\n\nIn Practice: If you implement single-character shortcuts (like 's' for save, 'n' for next), provide a way for users to disable them, allow remapping to include modifier keys (like Ctrl+S), or ensure shortcuts only work when the relevant component has focus. This prevents conflicts with assistive technologies and accidental activations.",
    whyItMatters: "Prevents accidental activation of shortcuts by speech input users or prone typists.",
    whoBenefits: ["Speech recognition users", "Users with motor disabilities"],
    keyTerms: [
      {
        term: "Character Key Shortcut",
        definition: "A keyboard shortcut that uses only printable characters (letters, numbers, punctuation, symbols) without modifier keys.",
        context: "Single-character shortcuts can conflict with speech recognition and cause accidental activations.",
      },
      {
        term: "Remap",
        definition: "To change the key combination that triggers a shortcut, typically to include modifier keys like Ctrl or Alt.",
        context: "Users should be able to remap single-character shortcuts to include modifier keys.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.1.1",
        title: "Keyboard",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Provide mechanism to turn off single-character shortcuts",
          "Allow users to remap shortcuts to include modifier keys",
          "Ensure shortcuts only active when component has focus",
          "Test with speech recognition software",
        ],
      },
      {
        category: "General",
        items: [
          "Identify all single-character shortcuts",
          "Provide user controls to manage shortcuts",
          "Test that shortcuts don't conflict with assistive technologies",
          "Verify shortcuts can be disabled or remapped",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Character Key Shortcuts",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html",
        type: "Understanding",
      },
      {
        title: "G217: Providing a mechanism to allow users to remap or turn off character key shortcuts",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G217",
        type: "Techniques",
      },
    ],
  },
]