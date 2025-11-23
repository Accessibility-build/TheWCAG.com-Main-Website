import type { SuccessCriterion } from '../types'

// Guideline 3.2: Predictable
export const predictableCriteria: SuccessCriterion[] = [
{
    id: "3-2-1",
    number: "3.2.1",
    title: "On Focus",
    level: "A",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: false,
    description: "When any user interface component receives focus, it does not initiate a change of context.",
    summary: "Focusing on an element should not automatically trigger navigation or form submission.",
    whyItMatters: "Unexpected changes confuse users and disrupt their workflow.",
    whoBenefits: ["Users with cognitive disabilities", "Keyboard users", "Screen reader users"],
    details: {
      introduction:
        "This criterion ensures that simply focusing on an element (like tabbing to it) doesn't trigger unexpected actions like navigation or form submission.",
      intent:
        "The intent is to prevent disorientation and confusion that occurs when context changes unexpectedly. Users should be in control of when actions occur.",
    },
    examples: [
      {
        title: "Auto-Navigation on Focus",
        description: "Focusing on a link automatically navigates to a new page, disrupting keyboard navigation.",
        type: "bad",
        code: '<a href="/page" onfocus="window.location = this.href">Link</a>',
      },
      {
        title: "No Action on Focus",
        description: "Focusing on a link only highlights it; navigation requires activation (click or Enter).",
        type: "good",
        code: '<a href="/page">Link</a>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Navigation on focus -->
<a href="/page" onfocus="window.location = this.href">Link</a>

<!-- ✅ Good: No action on focus -->
<a href="/page">Link</a>

<!-- ❌ Bad: Form submission on focus -->
<input type="text" onfocus="this.form.submit()">

<!-- ✅ Good: Form submission on button click -->
<form>
  <input type="text" name="search">
  <button type="submit">Search</button>
</form>`,
      react: `// ❌ Bad: Navigation on focus
function Link() {
  return (
    <a 
      href="/page"
      onFocus={() => window.location = '/page'}
    >
      Link
    </a>
  )
}

// ✅ Good: No action on focus
function Link() {
  return <a href="/page">Link</a>
}

// ✅ Good: Action on click/activation
function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit form
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Tab through all interactive elements on the page.",
        "Verify that focusing on elements doesn't trigger navigation or form submission.",
        "Check that actions only occur on explicit activation (click, Enter, Space).",
        "Test with keyboard navigation to ensure no unexpected changes.",
        "Verify that focus indicators appear without triggering actions.",
        "Test with screen reader to ensure focus doesn't cause context changes.",
      ],
      automated: [
        "Use axe DevTools to check for onfocus handlers that cause context changes.",
        "Use browser DevTools to identify focus event handlers.",
        "Use accessibility testing tools to detect problematic focus handlers.",
      ],
    },
    complianceRequirements: [
      "Focusing on an element must not trigger navigation or form submission.",
      "Focusing on an element must not change the page context.",
      "Actions must only occur on explicit user activation (click, Enter, Space key).",
      "Focus indicators should appear without triggering any actions.",
      "Keyboard navigation should not cause unexpected context changes.",
    ],
    beyondCompliance: [
      "Avoid any actions on focus events, even non-navigation actions.",
      "Provide clear visual focus indicators that don't trigger actions.",
      "Test focus behavior with keyboard-only users.",
      "Document focus behavior requirements for developers.",
      "Consider providing focus management best practices.",
    ],
    myths: [
      {
        myth: "If I warn users that focus will trigger navigation, it's okay.",
        reality: "Focus should never trigger navigation, even with warnings. Navigation must require explicit activation (click or Enter key).",
      },
      {
        myth: "Auto-submitting forms on focus is a time-saver.",
        reality: "Auto-submission on focus is a violation. Forms should only submit when users explicitly click a submit button or press Enter in a form field.",
      },
    ],
    commonFailures: [
      {
        failure: "Links or buttons that navigate on focus instead of on click.",
        solution: "Remove onfocus handlers that cause navigation. Use onclick or let default browser behavior handle activation.",
      },
      {
        failure: "Form fields that submit forms when focused.",
        solution: "Remove onfocus handlers that submit forms. Forms should only submit when users click submit button or press Enter in a form field.",
      },
      {
        failure: "Dropdown menus that open on focus without user activation.",
        solution: "Dropdowns should open on click/activation, not on focus. Focus should only highlight the element.",
      },
    ],
    officialDefinition:
      "When any user interface component receives focus, it does not initiate a change of context.",
    detailedSummary:
      "What This Means: This success criterion requires that simply focusing on an element (like tabbing to it with the keyboard) does not trigger unexpected actions like navigation, form submission, or other context changes. Users must explicitly activate elements (click, press Enter, etc.) for actions to occur.\n\nWhy It's Important: Unexpected context changes when focusing on elements can be disorienting and disruptive, especially for keyboard users and users with cognitive disabilities. When users tab through a page, they expect to be able to review all interactive elements before activating them. Auto-navigation or auto-submission on focus prevents users from having control over when actions occur.\n\nIn Practice: Remove any onfocus handlers that cause navigation, form submission, or other context changes. Focus should only highlight elements visually. Actions should only occur when users explicitly activate elements (click, press Enter, etc.). Dropdown menus should open on click/activation, not on focus. Form fields should not submit forms when focused.",
    keyTerms: [
      {
        term: "Focus",
        definition: "The state in which a user interface component receives keyboard input focus, typically indicated by a visual focus indicator.",
        context: "Focusing on an element should not trigger actions; only activation should.",
      },
      {
        term: "Change of Context",
        definition: "Major changes to content that, if made without user awareness, can disorient users who are unable to see the entire page simultaneously.",
        context: "Context changes should not occur automatically when elements receive focus.",
      },
      {
        term: "Activation",
        definition: "The explicit action by a user to trigger a component's function (e.g., clicking, pressing Enter).",
        context: "Actions should only occur on explicit activation, not on focus.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.2",
        title: "On Input",
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
        category: "JavaScript",
        items: [
          "Remove onfocus handlers that cause navigation",
          "Remove onfocus handlers that submit forms",
          "Ensure focus only highlights elements",
          "Use onclick or onkeydown for actions",
        ],
      },
      {
        category: "General",
        items: [
          "Test keyboard navigation",
          "Verify no auto-navigation on focus",
          "Check dropdown behavior",
          "Test form submission behavior",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding On Focus",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html",
        type: "Understanding",
      },
      {
        title: "G107: Using 'activate' rather than 'focus' as a trigger for changes of context",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G107",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-2-2",
    number: "3.2.2",
    title: "On Input",
    level: "A",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: false,
    description:
      "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
    summary: "Changing a setting (like a checkbox) shouldn't unexpectedly change the page context.",
    whyItMatters: "Users need to be in control of context changes.",
    whoBenefits: ["Users with cognitive disabilities", "Screen reader users"],
    details: {
      introduction:
        "This criterion ensures that changing form controls (checkboxes, radio buttons, selects) doesn't automatically trigger context changes like navigation or form submission, unless users are warned beforehand.",
      intent:
        "The intent is to prevent unexpected context changes when users interact with form controls. Users should be able to change settings without triggering actions they didn't intend.",
    },
    examples: [
      {
        title: "Auto-Navigation on Select Change",
        description: "Changing a select dropdown automatically navigates to a new page without warning.",
        type: "bad",
        code: '<select onchange="window.location = this.value"><option value="/page1">Page 1</option></select>',
      },
      {
        title: "Warned Auto-Navigation",
        description: "Select dropdown has clear label indicating it will navigate, and navigation occurs on change.",
        type: "good",
        code: '<label>Select page to navigate: <select onchange="window.location = this.value"><option value="/page1">Page 1</option></select></label>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Unexpected navigation on change -->
<select onchange="window.location = this.value">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>

<!-- ✅ Good: User-initiated navigation -->
<select id="page-select">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>
<button onclick="navigate()">Go</button>

<!-- ✅ Good: Warned auto-navigation -->
<label>
  Select page to navigate:
  <select onchange="window.location = this.value">
    <option value="/page1">Page 1</option>
    <option value="/page2">Page 2</option>
  </select>
</label>`,
      react: `// ❌ Bad: Unexpected navigation
function PageSelector() {
  return (
    <select onChange={(e) => window.location = e.target.value}>
      <option value="/page1">Page 1</option>
      <option value="/page2">Page 2</option>
    </select>
  )
}

// ✅ Good: User-initiated
function PageSelector() {
  const [selected, setSelected] = useState('')
  
  return (
    <>
      <select 
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select a page</option>
        <option value="/page1">Page 1</option>
        <option value="/page2">Page 2</option>
      </select>
      <button onClick={() => window.location = selected}>
        Go
      </button>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Change all form controls (checkboxes, radio buttons, selects).",
        "Verify that changing settings doesn't trigger unexpected navigation or form submission.",
        "Check that context changes are only triggered when users are warned beforehand.",
        "Test with screen reader to ensure changes are predictable.",
        "Verify that form controls work as expected without unexpected side effects.",
      ],
      automated: [
        "Use axe DevTools to check for onchange handlers that cause context changes.",
        "Use browser DevTools to identify change event handlers.",
      ],
    },
    complianceRequirements: [
      "Changing form control settings must not automatically cause context changes.",
      "If context changes are necessary, users must be warned before using the component.",
      "Warnings must be clear and visible, not hidden.",
      "Form submissions should require explicit button clicks, not automatic triggers.",
      "Navigation should require explicit user action, not automatic triggers from form changes.",
    ],
    beyondCompliance: [
      "Avoid automatic context changes entirely when possible.",
      "Always require explicit user action for navigation or form submission.",
      "Provide clear labels indicating behavior when auto-changes are necessary.",
      "Test with users who have cognitive disabilities.",
      "Consider providing settings to disable automatic behaviors.",
    ],
    myths: [
      {
        myth: "If I add a label saying 'this will navigate', that's enough warning.",
        reality: "While warnings help, it's better practice to avoid automatic navigation entirely. Require explicit user action (like a 'Go' button) for navigation.",
      },
      {
        myth: "Auto-submitting forms on select change is convenient.",
        reality: "Auto-submission can cause data loss and confusion. Always require explicit form submission via a submit button.",
      },
    ],
    commonFailures: [
      {
        failure: "Select dropdowns that automatically navigate on change.",
        solution: "Remove automatic navigation. Add a 'Go' or 'Submit' button that users must click to navigate. Or clearly warn users that selection will navigate.",
      },
      {
        failure: "Checkboxes or radio buttons that auto-submit forms.",
        solution: "Remove auto-submission. Require users to click a submit button to submit forms. Auto-submission can cause accidental submissions.",
      },
      {
        failure: "Form controls that trigger context changes without warning.",
        solution: "Either remove automatic context changes, or provide clear, visible warnings before users interact with the control.",
      },
    ],
    officialDefinition:
      "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
    detailedSummary:
      "What This Means: This success criterion requires that changing the setting of a user interface component (like selecting an option from a dropdown, checking a checkbox, or changing a radio button) does not automatically cause a change of context (like navigation or form submission) unless users have been clearly warned about this behavior before they interact with the component.\n\nWhy It's Important: Unexpected context changes when users interact with form controls can be disorienting and cause users to lose their place or accidentally trigger actions they didn't intend. Users should be in control of when navigation or other major changes occur. If a control will cause a context change, users must be clearly informed beforehand.\n\nIn Practice: Remove automatic navigation or form submission when users change form control settings. If automatic context changes are necessary, provide clear, visible warnings before users interact with the control. For example, a language selector dropdown should not automatically navigate to a new page unless users are clearly warned. Instead, provide a 'Go' button or clearly indicate that selection will navigate.",
    keyTerms: [
      {
        term: "Change of Setting",
        definition: "The act of changing the value or state of a user interface component (e.g., selecting an option, checking a box).",
        context: "Changing settings should not automatically cause context changes unless users are warned.",
      },
      {
        term: "Change of Context",
        definition: "Major changes to content that, if made without user awareness, can disorient users.",
        context: "Context changes should not occur automatically when users change component settings.",
      },
      {
        term: "User Interface Component",
        definition: "A part of the content that is perceived by users as a single control for a distinct function.",
        context: "Changing settings of UI components should not automatically trigger context changes.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.1",
        title: "On Focus",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Remove automatic navigation on form control changes",
          "Remove auto-submission on checkbox/radio changes",
          "Provide clear warnings if context changes are necessary",
          "Use explicit buttons for actions",
        ],
      },
      {
        category: "General",
        items: [
          "Test all form controls for unexpected behavior",
          "Verify warnings are clear and visible",
          "Check that users are informed before context changes",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding On Input",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/on-input.html",
        type: "Understanding",
      },
      {
        title: "G80: Providing a submit button to initiate a change of context",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G80",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-2-3",
    number: "3.2.3",
    title: "Consistent Navigation",
    level: "AA",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: false,
    description:
      "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    summary: "Keep navigation consistent across pages.",
    whyItMatters: "Consistent navigation helps users learn and predict how to move around the site.",
    whoBenefits: ["Users with cognitive disabilities", "Blind users"],
    details: {
      introduction:
        "This criterion requires that navigation elements (menus, links, buttons) appear in the same order and location across all pages of a website, making the site predictable and easier to navigate.",
      intent:
        "The intent is to encourage consistent presentation and behavior across pages. When navigation is consistent, users can learn the site structure and navigate more efficiently, especially important for users with cognitive disabilities or those using screen readers.",
    },
    examples: [
      {
        title: "Inconsistent Navigation",
        description: "Navigation items appear in different orders on different pages, confusing users.",
        type: "bad",
        code: `<!-- Page 1 -->
<nav><a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a></nav>

<!-- Page 2 -->
<nav><a href="/contact">Contact</a> <a href="/">Home</a> <a href="/about">About</a></nav>`,
      },
      {
        title: "Consistent Navigation",
        description: "Navigation items always appear in the same order across all pages.",
        type: "good",
        code: `<!-- All pages -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Consistent navigation component -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Use same structure on all pages -->
<!-- âŒ Bad: Different order on different pages -->`,
      react: `// âœ… Good: Reusable navigation component
function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav aria-label="Main navigation">
      <ul>
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Use this component on all pages for consistency`,
      css: `/* âœ… Good: Consistent navigation styling */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

/* Same styling applied consistently across pages */`,
    },
    testing: {
      manual: [
        "Navigate through multiple pages on the site.",
        "Check that navigation items appear in the same order.",
        "Verify navigation location is consistent.",
        "Test that navigation structure doesn't change unexpectedly.",
        "Check that user-initiated changes (like expanding menus) are preserved.",
        "Test with screen reader to verify consistent navigation structure.",
        "Verify that navigation is predictable across all pages.",
      ],
      automated: [
        "Tools can check for consistent HTML structure but cannot verify user experience.",
        "Use accessibility testing tools to verify consistent navigation markup.",
      ],
    },
    complianceRequirements: [
      "Navigation elements must appear in the same relative order on all pages.",
      "Navigation location must be consistent across pages.",
      "Navigation structure must not change unless user initiates the change.",
      "User-initiated navigation changes (like expanding menus) should be preserved.",
      "Navigation should be predictable and easy to learn.",
    ],
    beyondCompliance: [
      "Keep navigation structure identical across all pages when possible.",
      "Use consistent navigation components throughout the site.",
      "Test navigation consistency with users who have cognitive disabilities.",
      "Document navigation patterns for consistency.",
      "Consider providing navigation customization options.",
    ],
    myths: [
      {
        myth: "I can rearrange navigation on different page types (home vs. content pages).",
        reality: "Navigation should be consistent across all pages. Users learn the navigation structure and expect it to remain the same.",
      },
      {
        myth: "Navigation can change if I keep it in the same general area.",
        reality: "Both order and location must be consistent. Changing either breaks user expectations and makes navigation unpredictable.",
      },
    ],
    commonFailures: [
      {
        failure: "Navigation items in different orders on different pages.",
        solution: "Use the same navigation component on all pages. Keep navigation order consistent throughout the site.",
      },
      {
        failure: "Navigation that moves to different locations on different pages.",
        solution: "Keep navigation in the same location (top, side, bottom) on all pages. Use consistent layout templates.",
      },
      {
        failure: "Navigation structure that changes based on page type.",
        solution: "Maintain consistent navigation structure across all pages. Don't change navigation based on page content or type.",
      },
    ],
    officialDefinition:
      "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    detailedSummary:
      "What This Means: This success criterion requires that navigation elements (menus, links, buttons) that appear on multiple pages within a website appear in the same relative order and location each time they are repeated. This makes the site predictable and easier to navigate.\n\nWhy It's Important: Consistent navigation helps users learn the site structure and navigate more efficiently. Users with cognitive disabilities, blind users using screen readers, and all users benefit from predictable navigation. When navigation changes between pages, users must relearn the layout on every page, increasing cognitive load and making navigation difficult.\n\nIn Practice: Use consistent navigation components across all pages. Keep navigation items in the same order (e.g., Home, About, Services, Contact). Keep navigation in the same location (top, side, bottom). Use the same navigation structure and styling. Only change navigation when users explicitly request it (e.g., through a settings option).",
    keyTerms: [
      {
        term: "Navigational Mechanisms",
        definition: "UI components that enable users to navigate within a set of web pages (e.g., menus, navigation bars, breadcrumbs).",
        context: "Navigational mechanisms must appear in the same relative order across pages.",
      },
      {
        term: "Relative Order",
        definition: "The sequence in which navigation items appear relative to each other.",
        context: "Navigation items must maintain the same relative order across all pages.",
      },
      {
        term: "Set of Web Pages",
        definition: "A collection of web pages that share the same navigation structure.",
        context: "Within a set of pages, navigation must be consistent.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.4",
        title: "Consistent Identification",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use consistent navigation components",
          "Keep navigation items in same order",
          "Maintain same navigation location",
          "Use consistent navigation structure",
        ],
      },
      {
        category: "General",
        items: [
          "Test navigation across all pages",
          "Verify consistent order and location",
          "Check navigation structure consistency",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Consistent Navigation",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html",
        type: "Understanding",
      },
      {
        title: "G61: Presenting repeated components in the same relative order each time they appear",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G61",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-2-4",
    number: "3.2.4",
    title: "Consistent Identification",
    level: "AA",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: false,
    description: "Components that have the same functionality within a set of Web pages are identified consistently.",
    summary: "Use consistent icons and labels for the same functions (e.g., search icon).",
    whyItMatters: "Reduces cognitive load by making the interface predictable.",
    whoBenefits: ["Users with cognitive disabilities", "All users"],
    details: {
      introduction:
        "This criterion requires that components with the same functionality use consistent labels, icons, and text across all pages, making the interface predictable and reducing cognitive load.",
      intent:
        "The intent is to ensure that users can identify and understand components based on consistent presentation. When the same functionality appears with different labels or icons, users must relearn what each component does on every page.",
    },
    examples: [
      {
        title: "Inconsistent Search Labels",
        description: "Search functionality is labeled differently on different pages: 'Search', 'Find', 'Lookup'.",
        type: "bad",
        code: `<!-- Page 1 -->
<button>Search</button>

<!-- Page 2 -->
<button>Find</button>

<!-- Page 3 -->
<button>Lookup</button>`,
      },
      {
        title: "Consistent Search Labels",
        description: "Search functionality always uses the same label and icon across all pages.",
        type: "good",
        code: `<!-- All pages -->
<button aria-label="Search">
  <SearchIcon />
  Search
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Consistent component identification -->
<!-- All pages use same structure for search -->
<form role="search">
  <label for="search">Search</label>
  <input type="search" id="search" name="q">
  <button type="submit" aria-label="Search">
    <svg><!-- Search icon --></svg>
    Search
  </button>
</form>

<!-- âŒ Bad: Different labels for same function -->
<!-- Page 1: <button>Search</button> -->
<!-- Page 2: <button>Find</button> -->
<!-- Page 3: <button>Lookup</button> -->`,
      react: `// âœ… Good: Reusable component with consistent identification
function SearchButton() {
  return (
    <button type="submit" aria-label="Search">
      <SearchIcon />
      Search
    </button>
  )
}

// Use this component everywhere search is needed

// âœ… Good: Consistent icon component
function IconButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label}>
      {icon}
      {label}
    </button>
  )
}

// Use consistent icons for same functions
<IconButton icon={<SearchIcon />} label="Search" />
<IconButton icon={<HomeIcon />} label="Home" />`,
      css: `/* âœ… Good: Consistent styling for same components */
.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

/* Same styling applied consistently */
.home-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}`,
    },
    testing: {
      manual: [
        "Review all pages on the site.",
        "Identify components with the same functionality.",
        "Check that labels, icons, and text are consistent.",
        "Verify that similar components use the same visual design.",
        "Test that users can predict component behavior based on consistent identification.",
        "Check that search, home, and other common functions use consistent icons/labels.",
        "Verify that component styling is consistent across pages.",
      ],
      automated: [
        "Tools can check for consistent HTML structure but cannot verify semantic consistency.",
        "Use accessibility testing tools to verify consistent component markup.",
      ],
    },
    complianceRequirements: [
      "Components with the same functionality must use consistent labels, icons, and text.",
      "Visual design of similar components must be consistent.",
      "Component behavior must be predictable based on consistent identification.",
      "Icons for the same function must be the same across all pages.",
      "Labels for the same function must be identical across all pages.",
    ],
    beyondCompliance: [
      "Use a design system to ensure component consistency.",
      "Create reusable components for common functionality.",
      "Document component usage patterns for consistency.",
      "Test component identification with users.",
      "Consider providing a component library or style guide.",
    ],
    myths: [
      {
        myth: "I can use different icons as long as they're similar.",
        reality: "Icons for the same function must be identical. Even similar icons can confuse users who rely on visual consistency.",
      },
      {
        myth: "Labels can vary slightly (e.g., 'Search' vs 'Find').",
        reality: "Labels must be identical. 'Search' and 'Find' are different labels and violate this criterion. Use the same label everywhere.",
      },
    ],
    commonFailures: [
      {
        failure: "Search functionality labeled differently on different pages ('Search', 'Find', 'Lookup').",
        solution: "Use the same label everywhere. Choose one label (e.g., 'Search') and use it consistently across all pages.",
      },
      {
        failure: "Home icon that looks different on different pages.",
        solution: "Use the same icon design for the same function. Create a consistent icon library and use it throughout the site.",
      },
      {
        failure: "Buttons with the same function that look different.",
        solution: "Use consistent styling for buttons with the same function. Apply the same CSS classes or component styles.",
      },
    ],
    officialDefinition:
      "Components that have the same functionality within a set of Web pages are identified consistently.",
    detailedSummary:
      "What This Means: This success criterion requires that components with the same functionality use consistent labels, icons, and text across all pages within a website. This makes the interface predictable and reduces cognitive load by allowing users to recognize and understand components based on consistent presentation.\n\nWhy It's Important: When the same functionality appears with different labels or icons on different pages, users must relearn what each component does on every page. This increases cognitive load and makes the interface difficult to use, especially for users with cognitive disabilities. Consistent identification helps users predict component behavior and navigate more efficiently.\n\nIn Practice: Use the same labels, icons, and text for components with the same functionality. For example, if a search function appears on multiple pages, it should always use the same label ('Search'), the same icon, and the same styling. Create a design system or component library to ensure consistency. Document component usage patterns and apply them consistently across all pages.",
    keyTerms: [
      {
        term: "Component",
        definition: "A part of the content that is perceived by users as a single control for a distinct function.",
        context: "Components with the same functionality must be identified consistently.",
      },
      {
        term: "Consistent Identification",
        definition: "Using the same labels, icons, and text to identify components with the same functionality.",
        context: "Consistent identification helps users recognize and understand components across pages.",
      },
      {
        term: "Same Functionality",
        definition: "Components that perform the same action or provide the same feature.",
        context: "Components with the same functionality must use consistent identification.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.3",
        title: "Consistent Navigation",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Use consistent labels for same functionality",
          "Use consistent icons for same functionality",
          "Maintain consistent component styling",
          "Create component library or design system",
        ],
      },
      {
        category: "General",
        items: [
          "Review all pages for component consistency",
          "Test component identification",
          "Document component usage patterns",
          "Verify consistent visual design",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Consistent Identification",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html",
        type: "Understanding",
      },
      {
        title: "G197: Using labels, names, and text alternatives consistently for content that has the same functionality",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G197",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-2-5",
    number: "3.2.5",
    title: "Change on Request",
    level: "AAA",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: false,
    description:
      "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
    summary: "Don't change context automatically; let the user request it.",
    whyItMatters: "Automatic changes can be disorienting.",
    whoBenefits: ["Users with cognitive disabilities", "Screen reader users"],
    details: {
      introduction:
        "This criterion requires that context changes (like page navigation, focus changes, or content updates) only occur when the user explicitly requests them, or that users can disable automatic changes.",
      intent:
        "The intent is to ensure that users maintain control over context changes, preventing disorientation that can occur when content changes unexpectedly.",
    },
    examples: [
      {
        title: "Automatic Context Change",
        description: "Selecting an option automatically navigates to a new page without user confirmation.",
        type: "bad",
        code: `<select onchange="window.location = this.value">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>`,
      },
      {
        title: "User-Requested Context Change",
        description: "Selecting an option requires clicking a button to navigate.",
        type: "good",
        code: `<select id="page-select">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>
<button onclick="navigate()">Go</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Automatic navigation -->
<select onchange="window.location = this.value">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>

<!-- âœ… Good: User-initiated navigation -->
<select id="page-select">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>
<button onclick="navigate()">Go to Page</button>

<!-- âœ… Good: Option to disable auto-updates -->
<label>
  <input type="checkbox" id="auto-update" checked>
  Enable automatic updates
</label>`,
      react: `// âœ… Good: User-controlled navigation
function PageSelector() {
  const [selectedPage, setSelectedPage] = useState('')
  const [autoUpdate, setAutoUpdate] = useState(false)

  const handleNavigate = () => {
    if (selectedPage) {
      window.location = selectedPage
    }
  }

  return (
    <div>
      <select 
        value={selectedPage}
        onChange={(e) => {
          setSelectedPage(e.target.value)
          if (autoUpdate) {
            window.location = e.target.value
          }
        }}
      >
        <option value="">Select a page</option>
        <option value="/page1">Page 1</option>
        <option value="/page2">Page 2</option>
      </select>
      <button onClick={handleNavigate}>Go</button>
      <label>
        <input
          type="checkbox"
          checked={autoUpdate}
          onChange={(e) => setAutoUpdate(e.target.checked)}
        />
        Enable automatic navigation
      </label>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that context changes only occur on user request.",
        "Verify that automatic updates can be disabled.",
        "Test that form submissions require explicit button clicks.",
        "Check that navigation requires user action.",
        "Verify that users are warned before context changes.",
        "Test that disabling automatic updates actually prevents changes.",
        "Verify that user-initiated changes work as expected.",
      ],
      automated: [
        "Tools can detect automatic navigation but cannot verify user control mechanisms.",
        "Use browser DevTools to check for automatic context change handlers.",
      ],
    },
    complianceRequirements: [
      "Context changes must only occur when users explicitly request them, OR",
      "Users must be able to disable automatic context changes.",
      "Automatic updates must be controllable by users.",
      "Form submissions must require explicit user action.",
      "Navigation must require explicit user action.",
    ],
    beyondCompliance: [
      "Avoid automatic context changes entirely when possible.",
      "Make disabling automatic updates easy and discoverable.",
      "Provide clear settings for controlling automatic behaviors.",
      "Test with users who have cognitive disabilities.",
      "Consider making manual control the default, with automatic as an option.",
    ],
    myths: [
      {
        myth: "If I provide a way to disable auto-updates, I can have automatic changes.",
        reality: "While providing disable options is acceptable, it's better practice to avoid automatic changes entirely. Make manual control the default.",
      },
      {
        myth: "Auto-refreshing content is fine if it's just updating data.",
        reality: "Even data updates can be disorienting. Provide controls to pause or disable auto-updates, or make updates user-initiated.",
      },
    ],
    commonFailures: [
      {
        failure: "Automatic page refreshes or content updates without disable option.",
        solution: "Add controls to pause or disable automatic updates. Allow users to refresh manually when they choose.",
      },
      {
        failure: "Form submissions that occur automatically without user action.",
        solution: "Require explicit submit button clicks. Never auto-submit forms without clear user intent.",
      },
      {
        failure: "Navigation that occurs automatically without user request.",
        solution: "Require explicit user action for navigation. Add 'Go' buttons or require Enter key presses.",
      },
    ],
    officialDefinition:
      "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
    detailedSummary:
      "What This Means: This success criterion requires that context changes (like page navigation, focus changes, or content updates) only occur when users explicitly request them, OR that users can disable automatic context changes. This gives users control over when major changes happen.\n\nWhy It's Important: Automatic context changes can be disorienting and disruptive, especially for users with cognitive disabilities or those using screen readers. When content changes unexpectedly, users can lose their place, become confused, or accidentally trigger actions they didn't intend. By requiring explicit user request or providing controls to disable automatic changes, users maintain control over their experience.\n\nIn Practice: Remove automatic navigation, form submission, or content updates. If automatic updates are necessary (like live data feeds), provide controls to pause or disable them. Require explicit user action (button clicks, Enter key presses) for navigation and form submission. Make disabling automatic updates easy and discoverable. Provide clear settings for controlling automatic behaviors.",
    keyTerms: [
      {
        term: "Change of Context",
        definition: "Major changes to content that, if made without user awareness, can disorient users.",
        context: "Context changes should only occur on user request or be controllable by users.",
      },
      {
        term: "User Request",
        definition: "An explicit action by a user to trigger a change (e.g., clicking a button, pressing Enter).",
        context: "Context changes should only occur when users explicitly request them.",
      },
      {
        term: "Mechanism to Turn Off",
        definition: "A control that allows users to disable automatic context changes.",
        context: "If automatic context changes are necessary, users must be able to disable them.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.1",
        title: "On Focus",
        relationship: "Related to",
      },
      {
        number: "3.2.2",
        title: "On Input",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Remove automatic context changes",
          "Add controls to disable automatic updates",
          "Require explicit user action for navigation",
          "Require explicit user action for form submission",
        ],
      },
      {
        category: "General",
        items: [
          "Test that context changes only occur on user request",
          "Verify automatic updates can be disabled",
          "Check that disabling actually prevents changes",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Change on Request",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html",
        type: "Understanding",
      },
      {
        title: "G198: Providing a way for the user to turn the time limit off",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G198",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-2-6",
    number: "3.2.6",
    title: "Consistent Help",
    level: "A",
    principle: "understandable",
    guideline: "Predictable",
    guidelineNumber: "3.2",
    isNew: true,
    description: "If a Web page contains help mechanisms, they are in the same relative order on each Web page.",
    summary: "Help links and contact information should appear in consistent locations across pages.",
    whyItMatters: "Consistent help location reduces cognitive load and helps users find assistance quickly.",
    whoBenefits: ["Users with cognitive disabilities", "All users", "Users with memory impairments"],
    details: {
      introduction:
        "This criterion requires that help mechanisms (like help links, contact information, or support options) appear in the same relative order and location across all pages where they appear.",
      intent:
        "The intent is to make help easily findable by keeping it in consistent locations. When help is in the same place on every page, users can quickly locate it when needed.",
    },
    examples: [
      {
        title: "Inconsistent Help Location",
        description: "Help link appears in different locations on different pages, making it hard to find.",
        type: "bad",
        code: `<!-- Page 1: Help in header -->
<header><a href="/help">Help</a></header>

<!-- Page 2: Help in footer -->
<footer><a href="/help">Help</a></footer>`,
      },
      {
        title: "Consistent Help Location",
        description: "Help link always appears in the same location (e.g., top right) on all pages.",
        type: "good",
        code: `<!-- All pages: Help in same location -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/help">Help</a>
    <a href="/contact">Contact</a>
  </nav>
</header>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Consistent help location -->
<!-- All pages use same header structure -->
<header>
  <nav aria-label="Main navigation">
    <a href="/">Home</a>
    <a href="/help">Help</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<!-- ✅ Good: Help in consistent footer -->
<footer>
  <nav aria-label="Help and support">
    <a href="/help">Help</a>
    <a href="/contact">Contact Us</a>
    <a href="/faq">FAQ</a>
  </nav>
</footer>`,
      react: `// ✅ Good: Consistent help component
function HelpLinks() {
  return (
    <nav aria-label="Help and support">
      <a href="/help">Help</a>
      <a href="/contact">Contact Us</a>
      <a href="/faq">FAQ</a>
    </nav>
  )
}

// Use this component in the same location on all pages
function Layout({ children }) {
  return (
    <>
      <header>
        <HelpLinks />
      </header>
      <main>{children}</main>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Review all pages on the site.",
        "Identify help mechanisms (help links, contact info, support options).",
        "Check that help appears in the same relative order on all pages.",
        "Verify that help location is consistent across pages.",
        "Test that users can easily find help on any page.",
        "Check that help mechanisms are accessible and functional.",
      ],
      automated: [
        "Tools can check for consistent HTML structure but cannot verify help consistency.",
        "Use accessibility testing tools to verify help mechanism markup.",
      ],
    },
    complianceRequirements: [
      "Help mechanisms must appear in the same relative order on all pages where they appear.",
      "Help location must be consistent across pages.",
      "Help mechanisms must be easily findable.",
      "If help appears on some pages, it should appear in the same location on all pages.",
      "Help mechanisms must be accessible and functional.",
    ],
    beyondCompliance: [
      "Include help mechanisms on all pages, not just some.",
      "Make help prominent and easy to find.",
      "Provide multiple help options (help link, contact form, FAQ, live chat).",
      "Test help discoverability with users.",
      "Consider providing contextual help where appropriate.",
    ],
    myths: [
      {
        myth: "Help only needs to be on some pages, not all.",
        reality: "While help doesn't need to be on every page, when it does appear, it must be in the same location. It's better practice to include help on all pages.",
      },
      {
        myth: "I can have different help mechanisms on different pages.",
        reality: "Help mechanisms should be consistent. If you have a help link on one page, use the same help link in the same location on all pages.",
      },
    ],
    commonFailures: [
      {
        failure: "Help link in different locations on different pages.",
        solution: "Place help in the same location (e.g., top navigation, footer) on all pages. Use consistent layout templates.",
      },
      {
        failure: "Help mechanisms that appear in different orders on different pages.",
        solution: "Keep help mechanisms in the same relative order. For example, always show Help before Contact, or always in alphabetical order.",
      },
      {
        failure: "Help that's only available on some pages.",
        solution: "Include help mechanisms on all pages, or at least ensure they appear in consistent locations when present.",
      },
    ],
    officialDefinition:
      "If a Web page contains help mechanisms, they are in the same relative order on each Web page.",
    detailedSummary:
      "What This Means: This success criterion requires that help mechanisms (like help links, contact information, FAQ links, or support options) appear in the same relative order and location across all pages where they appear. This makes help easily findable and reduces cognitive load.\n\nWhy It's Important: Consistent help location helps users quickly find assistance when needed. When help mechanisms appear in different locations or orders on different pages, users must search for them each time, increasing cognitive load and frustration. This is especially important for users with cognitive disabilities or memory impairments who rely on consistent patterns to navigate.\n\nIn Practice: Place help mechanisms in the same location (e.g., top navigation, footer) on all pages. Keep help mechanisms in the same relative order (e.g., always show Help before Contact, or maintain alphabetical order). Use consistent layout templates to ensure help appears in the same location. Include help mechanisms on all pages when possible, or at least ensure they appear in consistent locations when present.",
    keyTerms: [
      {
        term: "Help Mechanisms",
        definition: "UI components that provide assistance to users (e.g., help links, contact information, FAQ links, support options).",
        context: "Help mechanisms must appear in the same relative order across pages.",
      },
      {
        term: "Relative Order",
        definition: "The sequence in which help mechanisms appear relative to each other.",
        context: "Help mechanisms must maintain the same relative order across all pages.",
      },
      {
        term: "Consistent Location",
        definition: "The same position on the page where help mechanisms appear.",
        context: "Help mechanisms must appear in consistent locations across pages.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.2.3",
        title: "Consistent Navigation",
        relationship: "Related to",
      },
      {
        number: "3.2.4",
        title: "Consistent Identification",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Place help in consistent location",
          "Keep help in same relative order",
          "Use consistent layout templates",
          "Include help on all pages when possible",
        ],
      },
      {
        category: "General",
        items: [
          "Review all pages for help consistency",
          "Test help discoverability",
          "Verify consistent location and order",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Consistent Help",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html",
        type: "Understanding",
      },
    ],
  },
]