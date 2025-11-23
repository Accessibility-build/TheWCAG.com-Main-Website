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
    summary: "Provide skip links to allow users to bypass repetitive navigation and jump to main content.",
    whyItMatters: "Keyboard and screen reader users need to skip past navigation on every page.",
    whoBenefits: ["Blind users", "Keyboard users", "Users with motor disabilities"],
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
    summary: "Every page must have a unique, descriptive title.",
    whyItMatters: "Helps users understand where they are and find content.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
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
    summary: "Tab order must follow a logical sequence that matches visual layout.",
    whyItMatters: "Illogical tab order confuses keyboard users and disrupts workflow.",
    whoBenefits: ["Keyboard users", "Blind users", "Users with cognitive disabilities"],
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
    summary: "Link text should make sense on its own or within its context.",
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
    summary: "Provide multiple ways to find pages (e.g., search, sitemap, navigation).",
    whyItMatters: "Different users prefer different navigation methods.",
    whoBenefits: ["All users", "Users with cognitive disabilities"],
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
    summary: "Headings and labels must be descriptive and clear.",
    whyItMatters: "Helps users understand the structure and content of the page.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
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
    summary: "Keyboard focus must be clearly visible with sufficient contrast and size.",
    whyItMatters: "Users need to see which element has focus to know where they are on the page.",
    whoBenefits: ["Keyboard users", "Users with low vision", "Users with attention disorders"],
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
    summary: "Tell users where they are in the site structure (e.g., breadcrumbs).",
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
    summary: "Link text must be descriptive on its own (no 'click here').",
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
// .focus\:outline-3:focus {
//   outline: 3px solid;
// }
// .focus\:outline-blue-600:focus {
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
  },
]