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
    summary: "Every interactive element must be usable with just a keyboard (no mouse required).",
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
    summary: "Users must be able to navigate away from any element using only the keyboard.",
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
    summary: "Everything must be keyboard accessible, with no exceptions.",
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
    summary: "Single-key shortcuts must be turn-off-able or remappable.",
    whyItMatters: "Prevents accidental activation of shortcuts by speech input users or prone typists.",
    whoBenefits: ["Speech recognition users", "Users with motor disabilities"],
  },
]