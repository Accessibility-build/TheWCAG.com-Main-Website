import type { SuccessCriterion } from '../types'

// Guideline 2.4: Navigable
export const navigableCriteria: SuccessCriterion[] = [
{
    id: "2-4-1",
    number: "2.4.1",
    title: "Bypass Blocks",
    level: "A",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description: "A mechanism is available to bypass blocks of content that are repeated on multiple web pages.",
    officialDefinition:
      "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
    summary: "Provide skip links to allow users to bypass repetitive navigation and jump to main content.",
    detailedSummary:
      "What This Means: This success criterion requires that a mechanism (typically a 'skip link' or 'skip navigation' link) must be available to allow users to bypass blocks of content that are repeated on multiple pages, such as navigation menus, headers, or sidebars. This allows users to jump directly to the main content without having to navigate through repetitive elements on every page.\n\nWhy It's Important: Keyboard and screen reader users must navigate through all content sequentially. If navigation menus and headers appear on every page, these users must listen to or tab through the same repetitive content on every single page before reaching the main content. This is time-consuming and frustrating. Skip links allow users to bypass this repetitive content and jump directly to what they're looking for.\n\nIn Practice: Provide a 'Skip to main content' link at the top of each page. The link should be visible when it receives keyboard focus, or always visible. Use proper HTML structure with ARIA landmarks (like <main>) that the skip link can target. Ensure the skip link is the first focusable element on the page and works with keyboard navigation.",
    whyItMatters: "Keyboard and screen reader users need to skip past navigation on every page.",
    whoBenefits: ["Blind users", "Keyboard users", "Users with motor disabilities"],
    keyTerms: [
      {
        term: "Bypass Blocks",
        definition: "A mechanism that allows users to skip past repeated content blocks (like navigation) to reach the main content.",
        context: "Skip links are the most common mechanism for bypassing repeated content blocks.",
      },
      {
        term: "Repeated Content",
        definition: "Content that appears on multiple pages, such as navigation menus, headers, footers, or sidebars.",
        context: "Repeated content blocks must be bypassable to improve navigation efficiency.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.6",
        title: "Headings and Labels",
        relationship: "Complements",
      },
      {
        number: "1.3.1",
        title: "Info and Relationships",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add skip link as first focusable element",
          "Link skip link to main content area (using id)",
          "Use semantic HTML5 elements (<main>, <nav>)",
          "Ensure skip link is visible on focus",
        ],
      },
      {
        category: "CSS",
        items: [
          "Style skip link to be visible on focus",
          "Position skip link at top of page",
          "Ensure skip link is accessible",
        ],
      },
      {
        category: "General",
        items: [
          "Test skip link with keyboard navigation",
          "Verify skip link works on all pages",
          "Check that skip link targets main content",
          "Test with screen readers",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Bypass Blocks",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
        type: "Understanding",
      },
      {
        title: "G1: Adding a link at the top of each page that goes directly to the main content area",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G1",
        type: "Techniques",
      },
      {
        title: "G123: Adding a link at the beginning of a block of repeated content to go to the end of the block",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G123",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-2",
    number: "2.4.2",
    title: "Page Titled",
    level: "A",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description: "Web pages have titles that describe topic or purpose.",
    officialDefinition:
      "Web pages have titles that describe topic or purpose.",
    summary: "Every page must have a unique, descriptive title.",
    detailedSummary:
      "What This Means: This success criterion requires that every web page must have a title (in the <title> element) that describes the topic or purpose of the page. The title should be unique for each page and clearly identify what the page contains or what function it serves.\n\nWhy It's Important: Page titles help users understand where they are, especially when they have multiple tabs open. Screen reader users rely on page titles to identify pages. Search engines use titles for indexing. Users with cognitive disabilities benefit from clear, descriptive titles that help them navigate. Without descriptive titles, users may become disoriented or unable to find the content they need.\n\nIn Practice: Use descriptive, unique titles for each page. Include the page topic or purpose in the title. For multi-page sites, consider including the site name and page name (e.g., 'Contact Us - Site Name'). Keep titles concise but descriptive. Avoid generic titles like 'Page 1' or 'Untitled'. Test that titles are unique across all pages.",
    whyItMatters: "Helps users understand where they are and find content.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
    keyTerms: [
      {
        term: "Page Title",
        definition: "The text contained in the <title> element of an HTML document, displayed in the browser tab and used by screen readers and search engines.",
        context: "Page titles must describe the topic or purpose of the page and be unique for each page.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.6",
        title: "Headings and Labels",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add <title> element to every page",
          "Make titles descriptive and unique",
          "Include page purpose in title",
          "Keep titles concise but informative",
        ],
      },
      {
        category: "General",
        items: [
          "Verify all pages have titles",
          "Check that titles are unique",
          "Test that titles describe page content",
          "Verify titles are helpful for navigation",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Page Titled",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html",
        type: "Understanding",
      },
      {
        title: "H25: Providing a title using the title element",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H25",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-3",
    number: "2.4.3",
    title: "Focus Order",
    level: "A",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description:
      "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
    officialDefinition:
      "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
    summary: "Tab order must follow a logical sequence that matches visual layout.",
    detailedSummary:
      "What This Means: This success criterion requires that when users navigate through a page sequentially (using Tab key), the focus order must follow a logical sequence that preserves the meaning and operability of the content. The focus order should match the visual layout and reading order, ensuring that users encounter content in a way that makes sense.\n\nWhy It's Important: Keyboard users navigate by moving focus from one element to the next. If the focus order doesn't match the visual layout or logical reading order, users become confused and may miss important content or functionality. For example, if a form's submit button receives focus before the form fields, users cannot complete the form logically.\n\nIn Practice: Ensure the DOM order matches the visual order. Use semantic HTML structure to create logical focus order. Avoid using tabindex values greater than 0 (which can disrupt natural focus order). Only use tabindex='-1' to remove elements from focus order when necessary. Test by tabbing through the entire page and verifying the order makes sense.",
    whyItMatters: "Illogical tab order confuses keyboard users and disrupts workflow.",
    whoBenefits: ["Keyboard users", "Blind users", "Users with cognitive disabilities"],
    keyTerms: [
      {
        term: "Focus Order",
        definition: "The order in which focusable elements receive keyboard focus when users navigate sequentially (using Tab key).",
        context: "Focus order must preserve meaning and operability, matching logical reading order.",
      },
      {
        term: "Sequential Navigation",
        definition: "Navigation through content in a linear order, typically using the Tab key to move forward and Shift+Tab to move backward.",
        context: "When sequential navigation affects meaning, focus order must be logical.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.3.2",
        title: "Meaningful Sequence",
        relationship: "Complements",
      },
      {
        number: "2.4.7",
        title: "Focus Visible",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Structure HTML in logical reading order",
          "Avoid tabindex values greater than 0",
          "Use semantic HTML to create natural focus order",
          "Ensure DOM order matches visual order",
        ],
      },
      {
        category: "General",
        items: [
          "Test focus order by tabbing through page",
          "Verify order matches visual layout",
          "Check that order preserves meaning",
          "Test with screen readers",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Focus Order",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
        type: "Understanding",
      },
      {
        title: "G59: Placing the interactive elements in an order that follows sequences and relationships within the content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G59",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-4",
    number: "2.4.4",
    title: "Link Purpose (In Context)",
    level: "A",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description:
      "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.",
    officialDefinition:
      "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, unless the purpose of the link would be ambiguous to users in general.",
    summary: "Link text should make sense on its own or within its context.",
    detailedSummary:
      "What This Means: This success criterion requires that the purpose of each link must be determinable from the link text alone, or from the link text together with its programmatically determined context (like surrounding text, heading, list item, or table cell). Users should be able to understand where a link goes or what it does without having to follow it.\n\nWhy It's Important: Screen reader users often navigate by jumping from link to link, reading only the link text. If link text is generic ('click here', 'more', 'read more'), users cannot determine the link's purpose without additional context. This makes navigation difficult and time-consuming. Users with cognitive disabilities also benefit from clear, descriptive link text.\n\nIn Practice: Use descriptive link text that makes sense on its own (e.g., 'Download WCAG 2.2 guide' instead of 'Download'). If generic text is necessary, ensure surrounding text provides context. Use aria-label or aria-labelledby to provide additional context when needed. Avoid links that say only 'here', 'more', 'click here', or 'read more' without context.",
    whyItMatters: "Users need to know where a link goes before clicking it.",
    whoBenefits: ["Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that users can understand the purpose of links from the link text itself or from the surrounding context, helping them decide whether to follow the link.",
      intent:
        "The intent is to help users understand the purpose of each link so they can decide whether they want to follow it. Link text can be descriptive on its own, or it can work together with surrounding text to provide context.",
    },
    examples: [
      {
        title: "Generic Link in Context",
        description: "Link text 'click here' is generic, but works because surrounding text provides context.",
        type: "good",
        code: '<p>To learn more about our services, <a href="/services">click here</a>.</p>',
      },
      {
        title: "Descriptive Link Text",
        description: "Link text is descriptive and makes sense on its own.",
        type: "good",
        code: '<p>Learn more about our <a href="/services">web accessibility services</a>.</p>',
      },
      {
        title: "Generic Link Without Context",
        description: "Link text 'here' or 'more' without surrounding context is not accessible.",
        type: "bad",
        code: '<a href="/services">here</a>',
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Link text with context -->
<p>Read our <a href="/accessibility-guide">accessibility guide</a> for best practices.</p>

<!-- ✅ Good: Descriptive link text -->
<a href="/contact">Contact our accessibility team</a>

<!-- ✅ Good: Using aria-label for additional context -->
<a href="/download" aria-label="Download the WCAG 2.2 compliance checklist PDF">
  Download checklist
</a>

<!-- ❌ Bad: Generic link without context -->
<a href="/services">click here</a>
<a href="/about">more</a>`,
      react: `// ✅ Good: Descriptive link text
function ServiceLink() {
  return (
    <p>
      Learn about our <a href="/services">web accessibility services</a>.
    </p>
  )
}

// ✅ Good: Using aria-label for context
function DownloadLink() {
  return (
    <a 
      href="/download" 
      aria-label="Download the accessibility guide PDF"
    >
      Download
    </a>
  )
}`,
    },
    testing: {
      manual: [
        "Review all links on the page and check if their purpose is clear.",
        "Read link text out of context (as screen readers do when listing links).",
        "Verify that generic links like 'click here' or 'read more' have sufficient surrounding context.",
        "Test with a screen reader's links list feature to see if links make sense.",
        "Check that links with the same text go to the same destination (or are clearly differentiated).",
        "Verify that icon-only links have accessible names (aria-label or text).",
      ],
      automated: [
        "Use axe DevTools to identify links with generic or duplicate text.",
        "Use WAVE to check for links that may not have clear purposes.",
        "Use HTML_CodeSniffer to detect potentially problematic link text.",
      ],
    },
    complianceRequirements: [
      "Link text must be descriptive on its own, OR have sufficient programmatically determined context.",
      "Generic link text (like 'click here', 'read more', 'here') must have surrounding text that provides context.",
      "Links with the same text must go to the same destination, or be clearly differentiated.",
      "Icon-only links must have accessible names via aria-label, aria-labelledby, or visible text.",
      "Link purposes must be determinable programmatically (not just visually).",
      "Links in navigation menus must have clear, descriptive text.",
    ],
    beyondCompliance: [
      "Make all link text descriptive enough to be understood out of context (even if context is available).",
      "Use consistent link text for links that go to the same destination across the site.",
      "Provide additional context through aria-label when helpful, but don't rely on it alone.",
      "Test links with screen reader users to ensure clarity.",
      "Consider providing link previews or descriptions for complex destinations.",
      "Use semantic HTML and proper heading structure to provide context for links.",
      "Ensure link text is concise but descriptive (avoid overly long link text).",
    ],
    myths: [
      {
        myth: "If I use 'click here' but the paragraph explains it, that's fine.",
        reality: "While this can work for Level A if context is programmatically available, it's better practice to make link text descriptive on its own. Screen reader users often browse by links list, missing surrounding context.",
      },
      {
        myth: "All links need to be descriptive on their own, no context allowed.",
        reality: "Level A allows link text to work with surrounding context. However, Level AA (2.4.9) requires links to be understandable from link text alone.",
      },
      {
        myth: "I can use aria-label to fix any link text issue.",
        reality: "Aria-label can help, but the visible link text should still be meaningful. Don't rely solely on aria-label for context that should be visible.",
      },
    ],
    commonFailures: [
      {
        failure: "Generic link text like 'click here', 'read more', 'here' without sufficient context.",
        solution: "Make link text descriptive. Instead of 'click here', use 'read our accessibility guide' or 'view product details'.",
      },
      {
        failure: "Multiple links with the same generic text going to different destinations.",
        solution: "Make each link unique and descriptive. If you must use similar text, add context: 'Read more about services' vs 'Read more about products'.",
      },
      {
        failure: "Icon-only links without accessible names.",
        solution: "Add aria-label, aria-labelledby, or visible text to icon links. Example: <a href='/search' aria-label='Search'><Icon /></a>",
      },
      {
        failure: "Links that rely on visual context (like 'this' pointing to an image).",
        solution: "Include the relevant information in the link text itself. Instead of 'click this', use 'view the product image' or 'download the accessibility report'.",
      },
      {
        failure: "Using URLs as link text.",
        solution: "Use descriptive text instead of URLs. Instead of 'https://example.com/about', use 'About our company'.",
      },
    ],
    keyTerms: [
      {
        term: "Link Purpose",
        definition: "The destination or function of a link, which should be determinable from the link text or its context.",
        context: "Link purpose must be clear from link text alone or from programmatically determined context.",
      },
      {
        term: "Programmatically Determined Link Context",
        definition: "Context that can be determined by software from the markup, such as surrounding text, heading, list item, or table cell.",
        context: "Link context must be programmatically available, not just visually apparent.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.9",
        title: "Link Purpose (Link Only)",
        relationship: "Stricter version",
      },
      {
        number: "4.1.2",
        title: "Name, Role, Value",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Use descriptive link text that makes sense on its own",
          "Ensure generic links have sufficient surrounding context",
          "Make link text unique for different destinations",
          "Avoid using URLs as link text",
        ],
      },
      {
        category: "HTML",
        items: [
          "Use aria-label for icon-only links",
          "Ensure link context is programmatically available",
          "Provide visible text for all links",
        ],
      },
      {
        category: "General",
        items: [
          "Test links with screen reader links list",
          "Verify link purposes are clear",
          "Check that generic links have context",
          "Ensure all links are accessible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Link Purpose (In Context)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html",
        type: "Understanding",
      },
      {
        title: "H30: Providing link text that describes the purpose of a link for anchor elements",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H30",
        type: "Techniques",
      },
      {
        title: "H33: Supplementing link text with the title attribute",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H33",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-5",
    number: "2.4.5",
    title: "Multiple Ways",
    level: "AA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description:
      "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
    officialDefinition:
      "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
    summary: "Provide multiple ways to find pages (e.g., search, sitemap, navigation).",
    detailedSummary:
      "What This Means: This success criterion requires that users must have more than one way to locate a web page within a set of pages (like a website). Common methods include navigation menus, site maps, search functionality, breadcrumbs, or related links. Pages that are part of a process (like checkout steps) are exempt from this requirement.\n\nWhy It's Important: Different users have different preferences and abilities for navigation. Some users prefer search, others prefer browsing menus, and some rely on site maps. Users with cognitive disabilities may find one navigation method easier than another. By providing multiple ways to find content, we accommodate different user needs and preferences.\n\nIn Practice: Provide at least two different ways to locate pages, such as: (1) A navigation menu, (2) A search function, (3) A site map, (4) Breadcrumbs, (5) Related links, or (6) A table of contents. Ensure these navigation methods are accessible (keyboard accessible, screen reader friendly). Pages that are steps in a process (like multi-step forms) don't need multiple navigation methods.",
    whyItMatters: "Different users prefer different navigation methods.",
    whoBenefits: ["All users", "Users with cognitive disabilities"],
    keyTerms: [
      {
        term: "Set of Web Pages",
        definition: "A collection of web pages that share a common purpose and are controlled by the same entity.",
        context: "Multiple navigation methods must be available within a set of web pages.",
      },
      {
        term: "Process",
        definition: "A series of user actions where each action is required to complete an activity, such as a checkout process or multi-step form.",
        context: "Pages that are steps in a process are exempt from the multiple ways requirement.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.1",
        title: "Bypass Blocks",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Provide navigation menu",
          "Add search functionality",
          "Create site map",
          "Use breadcrumbs where appropriate",
          "Provide related links",
        ],
      },
      {
        category: "General",
        items: [
          "Ensure at least two navigation methods",
          "Verify all methods are accessible",
          "Test that users can find pages using different methods",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Multiple Ways",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html",
        type: "Understanding",
      },
      {
        title: "G63: Providing a site map",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G63",
        type: "Techniques",
      },
      {
        title: "G64: Providing a table of contents",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G64",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-6",
    number: "2.4.6",
    title: "Headings and Labels",
    level: "AA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description: "Headings and labels describe topic or purpose.",
    officialDefinition:
      "Headings and labels describe topic or purpose.",
    summary: "Headings and labels must be descriptive and clear.",
    detailedSummary:
      "What This Means: This success criterion requires that headings and labels must describe the topic or purpose of the content they identify. Headings should clearly indicate what section they introduce, and labels should clearly describe what form controls or interactive elements do.\n\nWhy It's Important: Screen reader users often navigate by headings to understand page structure and find content. If headings are generic or unclear, users cannot effectively navigate or understand the content. Labels help users understand what form fields require and what interactive elements do. Clear headings and labels benefit all users, especially those with cognitive disabilities.\n\nIn Practice: Use descriptive headings that clearly indicate the content of each section (e.g., 'Contact Information' instead of 'Section 2'). Ensure form labels clearly describe what information is required (e.g., 'Email address' instead of 'Field 1'). Use proper heading hierarchy (h1, h2, h3) and ensure labels are associated with their form controls. Test by reading headings and labels out of context to verify they're clear.",
    whyItMatters: "Helps users understand the structure and content of the page.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
    keyTerms: [
      {
        term: "Headings",
        definition: "Text that serves as a title or label for a section of content, typically using <h1> through <h6> elements.",
        context: "Headings must describe the topic or purpose of the content they introduce.",
      },
      {
        term: "Labels",
        definition: "Text or components that identify the purpose of form controls or interactive elements.",
        context: "Labels must clearly describe what form controls require or what interactive elements do.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.3.1",
        title: "Info and Relationships",
        relationship: "Complements",
      },
      {
        number: "3.3.2",
        title: "Labels or Instructions",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use descriptive heading text",
          "Ensure form labels are clear and descriptive",
          "Associate labels with form controls",
          "Use proper heading hierarchy",
        ],
      },
      {
        category: "General",
        items: [
          "Review all headings for clarity",
          "Check that labels describe purpose",
          "Test headings and labels out of context",
          "Verify headings help navigation",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Headings and Labels",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
        type: "Understanding",
      },
      {
        title: "G130: Providing descriptive headings",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G130",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-7",
    number: "2.4.7",
    title: "Focus Visible",
    level: "AA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description:
      "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
    officialDefinition:
      "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
    summary: "Keyboard focus must be clearly visible with sufficient contrast and size.",
    detailedSummary:
      "What This Means: This success criterion requires that when users navigate using the keyboard, there must be a visible indicator showing which element currently has keyboard focus. This focus indicator (often a border, outline, or highlight) must be clearly visible with sufficient contrast and size so users can easily see where they are on the page.\n\nWhy It's Important: Keyboard users rely entirely on the focus indicator to know which element they're currently on. Without a visible focus indicator, keyboard users cannot tell where they are or which element will be activated. This makes navigation impossible. Users with low vision also need clear, high-contrast focus indicators to see where they are.\n\nIn Practice: Ensure all focusable elements have a visible focus indicator. Use CSS :focus pseudo-class to style focus indicators with sufficient contrast (at least 3:1 for non-text contrast per 1.4.11). Make focus indicators clearly visible - common styles include 2px solid borders, outlines, or background color changes. Never remove focus indicators with outline: none without providing an alternative. Test by tabbing through the page and verifying focus is always visible.",
    whyItMatters: "Users need to see which element has focus to know where they are on the page.",
    whoBenefits: ["Keyboard users", "Users with low vision", "Users with attention disorders"],
    keyTerms: [
      {
        term: "Keyboard Focus Indicator",
        definition: "A visual indication of which element currently has keyboard focus, typically shown as a border, outline, or highlight.",
        context: "Focus indicators must be visible when elements receive keyboard focus.",
      },
      {
        term: "Focusable",
        definition: "Able to receive keyboard focus, such as links, buttons, form controls, and elements with tabindex.",
        context: "All focusable elements must have visible focus indicators.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.11",
        title: "Non-text Contrast",
        relationship: "Complements",
      },
      {
        number: "2.4.3",
        title: "Focus Order",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Style :focus pseudo-class for all focusable elements",
          "Ensure focus indicators have sufficient contrast (3:1 minimum)",
          "Make focus indicators clearly visible (2px border or similar)",
          "Never use outline: none without providing alternative",
        ],
      },
      {
        category: "General",
        items: [
          "Test by tabbing through entire page",
          "Verify focus is always visible",
          "Check focus indicators on all interactive elements",
          "Ensure focus indicators are high contrast",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Focus Visible",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
        type: "Understanding",
      },
      {
        title: "G149: Using user interface components that are highlighted by the user agent when they receive focus",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G149",
        type: "Techniques",
      },
      {
        title: "C15: Using CSS to change the presentation of a user interface component when it receives focus",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C15",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-8",
    number: "2.4.8",
    title: "Location",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description: "Information about the user's location within a set of Web pages is available.",
    officialDefinition:
      "Information about the user's location within a set of Web pages is available.",
    summary: "Tell users where they are in the site structure (e.g., breadcrumbs).",
    detailedSummary:
      "What This Means: This success criterion requires that information about the user's current location within a set of web pages must be available. This helps users understand where they are in the website's structure and how to navigate to other areas. Common methods include breadcrumbs, site maps, or clear navigation indicators.\n\nWhy It's Important: Users can become disoriented when navigating complex websites, especially if they arrive via deep links or search results. Users with cognitive disabilities or memory impairments may have difficulty remembering how they got to a page. By providing location information, we help users understand their position in the site structure and navigate more effectively.\n\nIn Practice: Provide breadcrumb navigation showing the path from home to current page. Use clear page titles and headings that indicate location. Provide site maps or navigation menus that show current location. Ensure location information is programmatically available (not just visually) so screen reader users can access it. Test that users can easily determine their location within the site.",
    whyItMatters: "Helps users stay oriented within complex sites.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments"],
    details: {
      introduction:
        "This criterion requires providing information about the user's current location within the website structure, typically through breadcrumbs, site maps, or other navigation aids.",
      intent:
        "The intent is to help users understand where they are in a website's hierarchy, reducing disorientation and helping them navigate effectively.",
    },
    examples: [
      {
        title: "No Location Information",
        description: "A page provides no indication of where it is in the site structure.",
        type: "bad",
        code: `<h1>Product Details</h1>
<!-- No breadcrumbs or location indicator -->`,
      },
      {
        title: "Breadcrumb Navigation",
        description: "A page includes breadcrumbs showing the current location.",
        type: "good",
        code: `<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li>Product Details</li>
  </ol>
</nav>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/electronics">Electronics</a></li>
    <li aria-current="page">Product Details</li>
  </ol>
</nav>

<!-- âœ… Good: Site map link -->
<nav>
  <a href="/sitemap">Site Map</a>
</nav>`,
      react: `// âœ… Good: Breadcrumb component
function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <a href={item.url}>{item.name}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}`,
    },
    testing: {
      manual: [
        "Check that location information is available on each page",
        "Verify breadcrumbs accurately reflect the page hierarchy",
        "Test that breadcrumbs are accessible to screen readers",
        "Check that location information is clear and understandable",
        "Verify that users can navigate using location information",
      ],
      automated: ["Tools can detect breadcrumb navigation but cannot verify accuracy"],
    },
    keyTerms: [
      {
        term: "Location Information",
        definition: "Information that indicates where a user is within a set of web pages, such as breadcrumbs, site maps, or navigation indicators.",
        context: "Location information helps users understand their position in the website structure.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.5",
        title: "Multiple Ways",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Provide breadcrumb navigation",
          "Use semantic HTML for breadcrumbs (<nav>, <ol>)",
          "Mark current page with aria-current='page'",
          "Ensure location information is programmatically available",
        ],
      },
      {
        category: "General",
        items: [
          "Test that users can determine their location",
          "Verify breadcrumbs are accessible",
          "Check that location information is clear",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Location",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/location.html",
        type: "Understanding",
      },
      {
        title: "G65: Providing a breadcrumb trail",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G65",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-9",
    number: "2.4.9",
    title: "Link Purpose (Link Only)",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description:
      "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
    officialDefinition:
      "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
    summary: "Link text must be descriptive on its own (no 'click here').",
    detailedSummary:
      "What This Means: This success criterion is a stricter version of 2.4.4 (Level A). At Level AAA, the purpose of each link must be identifiable from the link text alone, without needing surrounding context. This means link text must be descriptive and self-contained, avoiding generic phrases like 'click here', 'read more', or 'here'.\n\nWhy It's Important: Screen reader users often navigate by jumping from link to link, reading only the link text in a list. If link text is generic or relies on context, users cannot determine the link's purpose when reading it in isolation. This makes navigation difficult and time-consuming. By requiring descriptive link text, we ensure links are understandable out of context.\n\nIn Practice: Use descriptive link text that makes sense on its own (e.g., 'Download WCAG 2.2 guide' instead of 'Download' or 'click here'). Avoid generic phrases. If multiple links have similar purposes, make each one unique and descriptive. Use aria-label to provide additional context when necessary, but ensure the visible link text is still meaningful.",
    whyItMatters: "Screen reader users often browse by links list, so links need to make sense out of context.",
    whoBenefits: ["Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion is stricter than Level A 2.4.4, requiring that link purposes can be determined from the link text alone, without needing surrounding context.",
      intent:
        "The intent is to ensure that links make sense when read out of context, which is how screen reader users often navigate by browsing a list of links.",
    },
    examples: [
      {
        title: "Generic Link Text",
        description: "Link text like 'click here' or 'read more' doesn't describe the purpose.",
        type: "bad",
        code: `<p>For more information, <a href="/about">click here</a>.</p>`,
      },
      {
        title: "Descriptive Link Text",
        description: "Link text clearly describes the destination or action.",
        type: "good",
        code: `<p>For more information, see our <a href="/about">about page</a>.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Generic link text -->
<p>To learn more, <a href="/products">click here</a>.</p>
<p><a href="/article">Read more</a> about this topic.</p>

<!-- âœ… Good: Descriptive link text -->
<p>To learn more, visit our <a href="/products">products page</a>.</p>
<p><a href="/article">Read more about accessibility guidelines</a>.</p>

<!-- âœ… Good: Using aria-label for additional context -->
<a href="/download" aria-label="Download the accessibility guide PDF">
  Download
</a>`,
      react: `// âŒ Bad: Generic link text
function Link() {
  return (
    <p>
      For more information, <a href="/about">click here</a>.
    </p>
  )
}

// âœ… Good: Descriptive link text
function Link() {
  return (
    <p>
      For more information, visit our <a href="/about">about page</a>.
    </p>
  )
}

// âœ… Good: Using aria-label when needed
function DownloadLink() {
  return (
    <a 
      href="/download" 
      aria-label="Download the accessibility guide PDF"
    >
      Download
    </a>
  )
}`,
    },
    testing: {
      manual: [
        "Extract all links from the page (as screen readers do)",
        "Read each link text out of context",
        "Verify that each link's purpose is clear from the text alone",
        "Check that links don't rely on surrounding text for meaning",
        "Test that screen reader users can understand link purposes",
      ],
      automated: ["Tools can detect generic link text like 'click here' or 'read more'"],
    },
    keyTerms: [
      {
        term: "Link Text Alone",
        definition: "The visible text content of a link, without surrounding context or programmatically associated text.",
        context: "At Level AAA, link purposes must be determinable from link text alone.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.4",
        title: "Link Purpose (In Context)",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Make all link text descriptive and self-contained",
          "Avoid generic phrases like 'click here' or 'read more'",
          "Ensure link text makes sense out of context",
          "Make each link unique and descriptive",
        ],
      },
      {
        category: "General",
        items: [
          "Test links by reading text alone",
          "Verify link purposes are clear",
          "Check with screen reader links list",
          "Ensure no reliance on context",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Link Purpose (Link Only)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html",
        type: "Understanding",
      },
      {
        title: "H30: Providing link text that describes the purpose of a link for anchor elements",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H30",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-10",
    number: "2.4.10",
    title: "Section Headings",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: false,
    description: "Section headings are used to organize the content.",
    summary: "Use headings to break up content into logical sections.",
    whyItMatters: "Makes content easier to scan and understand.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires using heading elements (h1-h6) to organize content into logical sections, making it easier to navigate and understand.",
      intent:
        "The intent is to ensure content is well-structured with clear headings that help users navigate and understand the page organization.",
    },
    examples: [
      {
        title: "No Headings",
        description: "Content has no headings, making it hard to navigate.",
        type: "bad",
        code: `<div>
  <p>Introduction text...</p>
  <p>Main content...</p>
  <p>Conclusion...</p>
</div>`,
      },
      {
        title: "Proper Headings",
        description: "Content uses proper heading hierarchy to organize sections.",
        type: "good",
        code: `<h1>Main Title</h1>
<h2>Introduction</h2>
<p>Introduction text...</p>
<h2>Main Content</h2>
<p>Main content...</p>
<h2>Conclusion</h2>
<p>Conclusion...</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: No headings -->
<div>
  <p>Introduction text...</p>
  <p>Main content...</p>
</div>

<!-- âœ… Good: Proper heading hierarchy -->
<article>
  <h1>Article Title</h1>
  <section>
    <h2>Introduction</h2>
    <p>Introduction text...</p>
  </section>
  <section>
    <h2>Main Content</h2>
    <h3>Subsection 1</h3>
    <p>Content...</p>
    <h3>Subsection 2</h3>
    <p>Content...</p>
  </section>
  <section>
    <h2>Conclusion</h2>
    <p>Conclusion text...</p>
  </section>
</article>`,
      react: `// âœ… Good: Proper heading structure
function Article() {
  return (
    <article>
      <h1>Article Title</h1>
      <section>
        <h2>Introduction</h2>
        <p>Introduction text...</p>
      </section>
      <section>
        <h2>Main Content</h2>
        <h3>Subsection 1</h3>
        <p>Content...</p>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>Conclusion text...</p>
      </section>
    </article>
  )
}`,
    },
    testing: {
      manual: [
        "Check that content is organized with heading elements",
        "Verify heading hierarchy is logical (h1, h2, h3, etc.)",
        "Test that headings accurately describe their sections",
        "Check that screen readers can navigate by headings",
        "Verify that all major sections have headings",
      ],
      automated: ["Tools can check for heading elements and hierarchy"],
    },
    officialDefinition:
      "Section headings are used to organize the content.",
    detailedSummary:
      "What This Means: This success criterion requires that content is organized using section headings (h1-h6 elements) to create a logical structure. Headings help break up long blocks of text and create a clear hierarchy that makes content easier to navigate and understand.\n\nWhy It's Important: Well-structured headings benefit all users by making content scannable and easier to digest. Screen reader users can navigate by headings to quickly jump to sections of interest. Users with cognitive disabilities benefit from clear organization that reduces cognitive load. Visual users can scan headings to understand the page structure at a glance.\n\nIn Practice: Use heading elements (h1-h6) in a logical hierarchy. The h1 should represent the main topic, h2 for major sections, h3 for subsections, and so on. Don't skip heading levels (e.g., don't go from h2 to h4). Headings should be descriptive and accurately represent the content that follows. Avoid using headings purely for visual styling use CSS for that instead.",
    keyTerms: [
      {
        term: "Section Heading",
        definition: "A heading element (h1-h6) that introduces and organizes a section of content.",
        context: "Headings create a document outline that helps users navigate and understand content structure.",
      },
      {
        term: "Heading Hierarchy",
        definition: "The logical order of heading levels (h1, h2, h3, etc.) that reflects the document structure.",
        context: "Proper hierarchy means not skipping levels and using headings to represent the actual structure of the content.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.3.1",
        title: "Info and Relationships",
        relationship: "Complements",
      },
      {
        number: "2.4.6",
        title: "Headings and Labels",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use heading elements (h1-h6) to organize content",
          "Maintain logical heading hierarchy",
          "Don't skip heading levels",
          "Use one h1 per page",
          "Make headings descriptive and meaningful",
        ],
      },
      {
        category: "Content",
        items: [
          "Organize content into logical sections",
          "Ensure each section has an appropriate heading",
          "Review heading structure for clarity",
          "Verify headings accurately represent content",
        ],
      },
      {
        category: "General",
        items: [
          "Test with screen reader heading navigation",
          "Verify heading hierarchy is logical",
          "Check that headings aren't used for styling only",
          "Ensure content is well-organized",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Section Headings",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html",
        type: "Understanding",
      },
      {
        title: "H69: Providing heading elements at the beginning of each section of content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H69",
        type: "Techniques",
      },
    ],
  },
  // New in WCAG 2.2 - Operable
  {
    id: "2-4-11",
    number: "2.4.11",
    title: "Focus Not Obscured (Minimum)",
    level: "AA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: true,
    description:
      "When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.",
    summary: "Focused elements must not be completely hidden by sticky headers, footers, or other overlays.",
    whyItMatters: "Users need to see the element that has keyboard focus to interact with it effectively.",
    whoBenefits: ["Keyboard users", "Users with low vision", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion ensures that when an element receives keyboard focus, it is not completely hidden by other content like sticky headers, fixed footers, or modal overlays.",
      intent:
        "The intent is to ensure that focused elements remain at least partially visible so keyboard users can see where they are and interact with focused elements. This is especially important for elements near the top or bottom of the viewport.",
    },
    examples: [
      {
        title: "Sticky Header Hides Focus",
        description: "A sticky header completely covers a focused link at the top of the page.",
        type: "bad",
        code: `<header style="position: fixed; top: 0; z-index: 1000; height: 80px;">
  Navigation
</header>
<a href="#" style="margin-top: 60px;">Link that gets hidden</a>`,
      },
      {
        title: "Scroll Adjustment",
        description: "The page automatically scrolls to keep focused elements visible above sticky headers.",
        type: "good",
        code: `/* CSS ensures focus is visible */
:focus {
  scroll-margin-top: 100px; /* Accounts for sticky header */
}`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Scroll margin for focus -->
<style>
  :focus {
    scroll-margin-top: 100px; /* Accounts for sticky header */
  }
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link that stays visible when focused</a>

<!-- âŒ Bad: No scroll adjustment -->
<header style="position: fixed; top: 0; z-index: 1000;">Navigation</header>
<a href="#" style="margin-top: 60px;">Link that gets hidden</a>`,
      css: `/* âœ… Good: Ensure focus visibility */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  scroll-margin-top: 100px; /* For sticky headers */
  scroll-margin-bottom: 50px; /* For sticky footers */
}

/* Ensure sticky elements don't cover focus */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100; /* Lower than focus indicators */
}

/* âŒ Bad: No scroll margin */
:focus {
  outline: 2px solid blue;
  /* No scroll-margin, focus can be hidden */
}`,
      react: `// âœ… Good: Focus management with scroll
function FocusableComponent() {
  const handleFocus = (e) => {
    e.target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest',
      inline: 'nearest'
    })
  }

  return (
    <>
      <header className="sticky top-0">Navigation</header>
      <a 
        href="#" 
        onFocus={handleFocus}
        className="focus:scroll-mt-24"
      >
        Link
      </a>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Tab through all interactive elements on the page",
        "Check that focused elements are not completely hidden",
        "Verify elements near sticky headers/footers remain visible",
        "Test with different viewport sizes",
        "Check that scroll adjustments work correctly",
      ],
      automated: ["Tools can check for scroll-margin but cannot fully verify visibility"],
    },
    officialDefinition:
      "When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.",
    detailedSummary:
      "What This Means: This success criterion requires that when a user interface component receives keyboard focus, it must not be completely hidden by other content created by the author. This includes sticky headers, fixed footers, modal overlays, or any other positioned elements that might cover focused components.\n\nWhy It's Important: Keyboard users rely on visual focus indicators to know which element they're interacting with. If a focused element is completely hidden, users cannot see what they're about to activate, leading to confusion and errors. This is especially problematic for elements near the top or bottom of the viewport where sticky headers or footers might cover them.\n\nIn Practice: Use CSS scroll-margin properties to ensure focused elements scroll into view with enough space above and below. For sticky headers, add scroll-margin-top. For sticky footers, add scroll-margin-bottom. Test keyboard navigation to ensure all focused elements remain at least partially visible. Consider the z-index of sticky elements to ensure they don't cover focus indicators.",
    keyTerms: [
      {
        term: "Keyboard Focus",
        definition: "The state of a user interface component when it receives focus through keyboard navigation (e.g., Tab key).",
        context: "Focused elements must remain visible so users can see what they're interacting with.",
      },
      {
        term: "Author-Created Content",
        definition: "Content that is created by the author of the web page, as opposed to user agent (browser) content.",
        context: "This criterion only applies to content created by the author, not browser UI elements.",
      },
      {
        term: "Scroll Margin",
        definition: "A CSS property that defines the margin of the scroll snap area, used to create space around focused elements.",
        context: "scroll-margin-top and scroll-margin-bottom help ensure focused elements remain visible when scrolling.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.7",
        title: "Focus Visible",
        relationship: "Complements",
      },
      {
        number: "2.4.12",
        title: "Focus Not Obscured (Enhanced)",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Add scroll-margin-top for elements near sticky headers",
          "Add scroll-margin-bottom for elements near sticky footers",
          "Ensure focus indicators are visible",
          "Check z-index of sticky elements",
          "Test with different viewport sizes",
        ],
      },
      {
        category: "JavaScript",
        items: [
          "Implement scrollIntoView for dynamically focused elements",
          "Ensure focus management in modals and overlays",
          "Test keyboard navigation flow",
        ],
      },
      {
        category: "General",
        items: [
          "Tab through all interactive elements",
          "Verify no focused elements are completely hidden",
          "Test with sticky headers and footers",
          "Check modal and overlay behavior",
          "Test on different screen sizes",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Focus Not Obscured (Minimum)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
        type: "Understanding",
      },
      {
        title: "C43: Using CSS scroll-margin to un-obscure content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C43",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-12",
    number: "2.4.12",
    title: "Focus Not Obscured (Enhanced)",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: true,
    description:
      "When a user interface component receives keyboard focus, no part of the component is hidden by author-created content.",
    summary: "Focused elements must be fully visible without any part being obscured.",
    whyItMatters: "Enhanced visibility ensures optimal focus indication for all users.",
    whoBenefits: ["Keyboard users", "Users with low vision", "Users with attention disorders"],
    details: {
      introduction:
        "This criterion is stricter than Level AA 2.4.11, requiring that no part of a focused element is hidden, not just that it's not completely hidden.",
      intent:
        "The intent is to ensure that focused elements are fully visible, providing optimal focus indication for all users, especially those with low vision.",
    },
    examples: [
      {
        title: "Partially Obscured Focus",
        description: "A focused element is partially covered by a sticky header.",
        type: "bad",
        code: `<header style="position: fixed; top: 0; z-index: 1000;">
  Navigation
</header>
<a href="#" style="margin-top: 50px;">Link (partially hidden when focused)</a>`,
      },
      {
        title: "Fully Visible Focus",
        description: "A focused element is completely visible with proper scroll margins.",
        type: "good",
        code: `<style>
:focus {
  scroll-margin-top: 100px;
}
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link (fully visible when focused)</a>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Scroll margin ensures full visibility -->
<style>
:focus {
  scroll-margin-top: 100px;
  scroll-margin-bottom: 50px;
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link that stays fully visible when focused</a>`,
      css: `/* âœ… Good: Ensure full focus visibility */
:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  scroll-margin-top: 100px; /* For sticky headers */
  scroll-margin-bottom: 50px; /* For sticky footers */
}

/* Ensure sticky elements don't cover any part of focus */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
}`,
      react: `// âœ… Good: Full focus visibility
function FocusableComponent() {
  const handleFocus = (e) => {
    e.target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center', // Center the element
      inline: 'nearest'
    })
  }

  return (
    <>
      <header className="sticky top-0">Navigation</header>
      <a 
        href="#" 
        onFocus={handleFocus}
        className="focus:scroll-mt-24 focus:scroll-mb-12"
      >
        Link
      </a>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Tab through all interactive elements",
        "Verify that no part of focused elements is hidden",
        "Check elements near sticky headers/footers",
        "Test with different viewport sizes",
        "Verify that scroll adjustments keep elements fully visible",
      ],
      automated: ["Tools can check for scroll-margin but cannot fully verify visibility"],
    },
    officialDefinition:
      "When a user interface component receives keyboard focus, no part of the component is hidden by author-created content.",
    detailedSummary:
      "What This Means: This success criterion is stricter than Level AA 2.4.11. It requires that when a user interface component receives keyboard focus, absolutely no part of the component can be hidden by author-created content. This means the entire focused element, including its focus indicator, must be fully visible.\n\nWhy It's Important: For users with low vision or attention disorders, even partial obscuring of focused elements can make it difficult or impossible to see what they're interacting with. Full visibility ensures optimal focus indication and reduces the cognitive load of trying to identify partially visible elements. This enhanced requirement provides the best possible experience for keyboard navigation.\n\nIn Practice: Implement more generous scroll margins than the minimum requirement. Use scroll-margin-top and scroll-margin-bottom to create adequate spacing. Consider centering focused elements in the viewport when possible. Test thoroughly to ensure no part of any focused element is ever obscured, even by sticky headers, footers, or other positioned content. Pay special attention to focus indicators and ensure they're fully visible.",
    keyTerms: [
      {
        term: "No Part Hidden",
        definition: "The requirement that absolutely no portion of a focused component can be obscured by author-created content.",
        context: "This is stricter than Level AA, which only requires the component not be entirely hidden.",
      },
      {
        term: "Full Visibility",
        definition: "The state where the entire focused element, including its focus indicator, is completely visible in the viewport.",
        context: "At Level AAA, full visibility is required for optimal accessibility.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.11",
        title: "Focus Not Obscured (Minimum)",
        relationship: "Stricter version",
      },
      {
        number: "2.4.7",
        title: "Focus Visible",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use generous scroll-margin values",
          "Ensure scroll-margin-top accounts for sticky headers",
          "Ensure scroll-margin-bottom accounts for sticky footers",
          "Consider centering focused elements",
          "Test that no part of focus indicators is hidden",
        ],
      },
      {
        category: "JavaScript",
        items: [
          "Use scrollIntoView with block: 'center' for better visibility",
          "Implement focus handlers that ensure full visibility",
          "Test dynamic focus management",
        ],
      },
      {
        category: "General",
        items: [
          "Tab through all interactive elements",
          "Verify absolutely no part of focused elements is hidden",
          "Test with various sticky elements",
          "Check on different screen sizes and orientations",
          "Verify focus indicators are fully visible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Focus Not Obscured (Enhanced)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html",
        type: "Understanding",
      },
      {
        title: "C43: Using CSS scroll-margin to un-obscure content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C43",
        type: "Techniques",
      },
    ],
  },
  {
    id: "2-4-13",
    number: "2.4.13",
    title: "Focus Appearance",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: true, // Verified: One of the 9 new criteria in WCAG 2.2
    description:
      "When the keyboard focus indicator is visible, an area of the focus indicator meets specific size and contrast requirements.",
    summary: "Focus indicators must meet enhanced size and contrast requirements for maximum visibility.",
    whyItMatters: "Strong focus indicators help users with low vision track their position.",
    whoBenefits: ["Users with low vision", "Keyboard users", "Older users"],
    details: {
      introduction:
        "This criterion requires that focus indicators meet specific size and contrast requirements: at least 2 CSS pixels thick, with a contrast ratio of at least 3:1, and an area of at least the size of a 1 CSS pixel border around the component.",
      intent:
        "The intent is to ensure that focus indicators are highly visible to users with low vision, making it easy to track keyboard focus position.",
    },
    examples: [
      {
        title: "Weak Focus Indicator",
        description: "Focus indicator is thin (1px) with low contrast, hard to see.",
        type: "bad",
        code: `<style>
:focus {
  outline: 1px solid #ccc; /* Too thin, low contrast */
}
</style>`,
      },
      {
        title: "Strong Focus Indicator",
        description: "Focus indicator is thick (2px+) with high contrast, clearly visible.",
        type: "good",
        code: `<style>
:focus {
  outline: 3px solid #0066cc; /* Thick, high contrast */
  outline-offset: 2px;
}
</style>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Strong focus indicator -->
<style>
:focus {
  outline: 3px solid #0066cc; /* 2px+ thick */
  outline-offset: 2px;
  /* Contrast ratio: 4.5:1 (meets requirement) */
}

:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}
</style>
<a href="#">Link with strong focus</a>`,
      css: `/* âœ… Good: Meets AAA focus appearance requirements */
:focus {
  outline: 3px solid #0066cc; /* At least 2px thick */
  outline-offset: 2px;
  /* Contrast: #0066cc on white = 4.5:1 (meets 3:1 requirement) */
}

/* Alternative: Box shadow focus */
:focus {
  box-shadow: 0 0 0 3px #0066cc;
  outline: none;
}

/* âŒ Bad: Too thin, low contrast */
:focus {
  outline: 1px solid #ccc; /* Only 1px, low contrast */
}`,
      react: `// âœ… Good: Strong focus indicator
function Link() {
  return (
    <a 
      href="#"
      className="focus:outline-3 focus:outline-blue-600 focus:outline-offset-2"
    >
      Link
    </a>
  )
}

// CSS:
// .focus:outline-3:focus {
//   outline: 3px solid;
// }
// .focus:outline-blue-600:focus {
//   outline-color: #2563eb; /* High contrast */
// }`,
    },
    testing: {
      manual: [
        "Check that focus indicators are at least 2 CSS pixels thick",
        "Verify focus indicators have at least 3:1 contrast ratio",
        "Test that focus indicators are clearly visible",
        "Check that focus indicators meet size requirements",
        "Test with different background colors",
      ],
      automated: ["Tools can check outline thickness and contrast ratios"],
    },
    officialDefinition:
      "When the keyboard focus indicator is visible, an area of the focus indicator meets all the following: is at least as large as the area of a 2 CSS pixel thick perimeter of the unfocused component or sub-component, and has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.",
    detailedSummary:
      "What This Means: This success criterion requires that when a keyboard focus indicator is visible, it must meet specific size and contrast requirements. The focus indicator must be at least as large as a 2 CSS pixel thick perimeter around the unfocused component, and it must have a contrast ratio of at least 3:1 between the focused and unfocused states.\n\nWhy It's Important: Users with low vision need highly visible focus indicators to track their keyboard position. Weak or thin focus indicators can be difficult or impossible to see, especially against certain backgrounds. This enhanced requirement ensures that focus indicators are prominent enough to be easily detected by users with visual impairments.\n\nIn Practice: Use focus indicators that are at least 2 CSS pixels thick. Ensure the contrast ratio between the focused and unfocused states is at least 3:1. This can be achieved with outline, border, or background color changes. Test focus indicators against various background colors to ensure they meet contrast requirements. Consider using outline-offset to create more visible focus indicators.",
    keyTerms: [
      {
        term: "Focus Indicator",
        definition: "A visual indication that a user interface component has keyboard focus.",
        context: "At Level AAA, focus indicators must meet specific size and contrast requirements.",
      },
      {
        term: "2 CSS Pixel Perimeter",
        definition: "An area equivalent to a 2 CSS pixel thick border around the component.",
        context: "The focus indicator must be at least this large to meet the size requirement.",
      },
      {
        term: "Contrast Ratio",
        definition: "The ratio of the relative luminance of the lighter color to the darker color.",
        context: "Focus indicators must have at least a 3:1 contrast ratio between focused and unfocused states.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.4.7",
        title: "Focus Visible",
        relationship: "Stricter version",
      },
      {
        number: "1.4.11",
        title: "Non-text Contrast",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use focus indicators that are at least 2 CSS pixels thick",
          "Ensure contrast ratio of at least 3:1 between focused and unfocused states",
          "Use outline, border, or background changes for focus",
          "Consider outline-offset for better visibility",
          "Test against various background colors",
        ],
      },
      {
        category: "General",
        items: [
          "Measure focus indicator thickness",
          "Calculate contrast ratios",
          "Test with different component sizes",
          "Verify focus indicators are clearly visible",
          "Test on various backgrounds",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Focus Appearance",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html",
        type: "Understanding",
      },
      {
        title: "G195: Using an author-supplied, highly visible focus indicator",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G195",
        type: "Techniques",
      },
    ],
  },
]