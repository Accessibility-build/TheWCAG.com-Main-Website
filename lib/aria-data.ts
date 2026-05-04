/**
 * Static ARIA reference data for /aria-cheatsheet.
 * Sourced from the W3C WAI-ARIA 1.2 spec and the ARIA Authoring Practices.
 */

export interface AriaRole {
  name: string
  category: AriaRoleCategory
  description: string
  /** Native HTML equivalent the role aliases, if any (per ARIA in HTML). */
  htmlEquivalent?: string
  /** Common required/supported states & properties. */
  supportedStates?: string[]
  example?: string
}

export type AriaRoleCategory =
  | "Landmark"
  | "Document Structure"
  | "Widget"
  | "Composite Widget"
  | "Live Region"
  | "Window"
  | "Abstract"

export interface AriaAttribute {
  name: string
  kind: "state" | "property"
  appliesTo: string
  description: string
  values: string
}

export const ARIA_ROLES: AriaRole[] = [
  // Landmark roles
  {
    name: "banner",
    category: "Landmark",
    description: "Site-wide header that contains site-oriented content (logo, search, primary navigation).",
    htmlEquivalent: "<header> (when scoped to <body>)",
    example: '<header role="banner">…</header>',
  },
  {
    name: "navigation",
    category: "Landmark",
    description: "A collection of navigational elements (links) for navigating the document or related documents.",
    htmlEquivalent: "<nav>",
    supportedStates: ["aria-label", "aria-labelledby"],
    example: '<nav aria-label="Primary">…</nav>',
  },
  {
    name: "main",
    category: "Landmark",
    description: "The primary content of a page; one per page.",
    htmlEquivalent: "<main>",
    example: '<main id="main-content">…</main>',
  },
  {
    name: "complementary",
    category: "Landmark",
    description: "Content that complements but is meaningful alone (sidebars, related links).",
    htmlEquivalent: "<aside>",
    example: '<aside aria-label="Related articles">…</aside>',
  },
  {
    name: "contentinfo",
    category: "Landmark",
    description: "Footer information about the parent document (copyright, contact, links).",
    htmlEquivalent: "<footer> (when scoped to <body>)",
    example: '<footer role="contentinfo">…</footer>',
  },
  {
    name: "search",
    category: "Landmark",
    description: "A region containing a search facility.",
    htmlEquivalent: "<search>",
    example: '<form role="search">…</form>',
  },
  {
    name: "form",
    category: "Landmark",
    description:
      "A region with associated form controls. Only treated as a landmark when it has an accessible name.",
    htmlEquivalent: "<form aria-label=…>",
  },
  {
    name: "region",
    category: "Landmark",
    description: "A perceivable section of content. Must have an accessible name.",
    htmlEquivalent: "<section aria-labelledby=…>",
    supportedStates: ["aria-label", "aria-labelledby"],
  },

  // Document structure
  {
    name: "article",
    category: "Document Structure",
    description: "Self-contained composition independent of the rest of the page.",
    htmlEquivalent: "<article>",
  },
  {
    name: "list / listitem",
    category: "Document Structure",
    description: "Group of non-interactive list items.",
    htmlEquivalent: "<ul>/<ol> + <li>",
  },
  {
    name: "heading",
    category: "Document Structure",
    description: "Heading for a section of the page. Use aria-level when not a native h1–h6.",
    htmlEquivalent: "<h1>–<h6>",
    supportedStates: ["aria-level"],
    example: '<div role="heading" aria-level="2">Section title</div>',
  },
  {
    name: "img",
    category: "Document Structure",
    description: "Container for one or more images that are intended to be combined into a single graphic.",
    htmlEquivalent: "<img>",
    supportedStates: ["aria-label", "aria-labelledby"],
  },
  {
    name: "presentation / none",
    category: "Document Structure",
    description: "Removes the implicit semantics of an element (use sparingly).",
    example: '<table role="presentation">',
  },

  // Widgets
  {
    name: "button",
    category: "Widget",
    description: "A clickable element that performs an action.",
    htmlEquivalent: "<button>",
    supportedStates: ["aria-pressed", "aria-expanded", "aria-disabled", "aria-haspopup"],
  },
  {
    name: "link",
    category: "Widget",
    description: "An interactive reference to a resource.",
    htmlEquivalent: "<a href=…>",
    supportedStates: ["aria-current"],
  },
  {
    name: "checkbox",
    category: "Widget",
    description: "Tri-state checkable input.",
    htmlEquivalent: '<input type="checkbox">',
    supportedStates: ["aria-checked (true|false|mixed)", "aria-disabled"],
  },
  {
    name: "radio",
    category: "Widget",
    description: "A checkable input within a radiogroup.",
    htmlEquivalent: '<input type="radio">',
    supportedStates: ["aria-checked", "aria-disabled"],
  },
  {
    name: "switch",
    category: "Widget",
    description: "Two-state switchable control (on/off).",
    supportedStates: ["aria-checked"],
    example: '<button role="switch" aria-checked="true">Wi-Fi</button>',
  },
  {
    name: "slider",
    category: "Widget",
    description: "User input for a value within a range.",
    htmlEquivalent: '<input type="range">',
    supportedStates: ["aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"],
  },
  {
    name: "spinbutton",
    category: "Widget",
    description: "Numeric input where the user can type or use up/down arrows.",
    htmlEquivalent: '<input type="number">',
    supportedStates: ["aria-valuemin", "aria-valuemax", "aria-valuenow"],
  },
  {
    name: "textbox",
    category: "Widget",
    description: "Single- or multi-line input that allows free-form text.",
    htmlEquivalent: "<input type=text> / <textarea>",
    supportedStates: ["aria-multiline", "aria-required", "aria-invalid", "aria-readonly"],
  },
  {
    name: "searchbox",
    category: "Widget",
    description: "Type of textbox intended for entering search criteria.",
    htmlEquivalent: '<input type="search">',
  },
  {
    name: "progressbar",
    category: "Widget",
    description: "Element that displays the progress status of a task.",
    htmlEquivalent: "<progress>",
    supportedStates: ["aria-valuenow", "aria-valuemin", "aria-valuemax"],
  },

  // Composite widgets
  {
    name: "menu / menuitem / menubar",
    category: "Composite Widget",
    description: "An offer of a list of common actions, often associated with a menu button.",
    supportedStates: ["aria-haspopup", "aria-expanded"],
  },
  {
    name: "tablist / tab / tabpanel",
    category: "Composite Widget",
    description: "Set of layered sections of content (tabs) where only one is visible at a time.",
    supportedStates: ["aria-selected", "aria-controls", "aria-labelledby"],
  },
  {
    name: "combobox / listbox / option",
    category: "Composite Widget",
    description:
      "Composite widget combining a single-line input and a popup that lets the user choose a value.",
    supportedStates: ["aria-expanded", "aria-controls", "aria-activedescendant", "aria-autocomplete"],
  },
  {
    name: "tree / treeitem",
    category: "Composite Widget",
    description: "Hierarchically organized list, like a file system.",
    supportedStates: ["aria-expanded", "aria-selected", "aria-level"],
  },
  {
    name: "grid / gridcell / row",
    category: "Composite Widget",
    description: "Composite widget containing tabular data with full keyboard navigation.",
    htmlEquivalent: "<table>",
    supportedStates: ["aria-rowindex", "aria-colindex", "aria-rowcount", "aria-colcount"],
  },
  {
    name: "dialog",
    category: "Window",
    description: "Application window separated from the main content. Requires focus management.",
    htmlEquivalent: "<dialog>",
    supportedStates: ["aria-modal", "aria-labelledby"],
    example: '<div role="dialog" aria-modal="true" aria-labelledby="t1">…</div>',
  },
  {
    name: "alertdialog",
    category: "Window",
    description: "Dialog containing an alert message that requires user response.",
    supportedStates: ["aria-modal", "aria-labelledby", "aria-describedby"],
  },
  {
    name: "tooltip",
    category: "Widget",
    description: "Contextual popup describing an element.",
    supportedStates: ["aria-describedby (on the trigger)"],
  },

  // Live regions
  {
    name: "alert",
    category: "Live Region",
    description: "Important, time-sensitive information. Implicit aria-live=assertive.",
    example: '<div role="alert">Saved.</div>',
  },
  {
    name: "status",
    category: "Live Region",
    description: "Advisory information that does not require user action. Implicit aria-live=polite.",
  },
  {
    name: "log",
    category: "Live Region",
    description: "Live region for chat-style updates where new entries are appended.",
  },
  {
    name: "marquee",
    category: "Live Region",
    description: "Non-essential, scrolling info (think stock tickers).",
  },
  {
    name: "timer",
    category: "Live Region",
    description: "Numerical countdown or count-up timer.",
  },
]

export const ARIA_GLOBAL_ATTRIBUTES: AriaAttribute[] = [
  {
    name: "aria-label",
    kind: "property",
    appliesTo: "Most roles missing a visible label",
    description: "Defines a string value that labels the current element.",
    values: "string",
  },
  {
    name: "aria-labelledby",
    kind: "property",
    appliesTo: "Most roles",
    description: "IDs of elements that label the current element. Wins over aria-label.",
    values: "ID reference list",
  },
  {
    name: "aria-describedby",
    kind: "property",
    appliesTo: "Most roles",
    description: "IDs of elements that describe the current element (e.g., help text).",
    values: "ID reference list",
  },
  {
    name: "aria-hidden",
    kind: "state",
    appliesTo: "Any element",
    description: "Hides the element from the accessibility tree (and thus from screen readers).",
    values: "true | false",
  },
  {
    name: "aria-disabled",
    kind: "state",
    appliesTo: "Most widgets",
    description: "Marks an element as perceivable but disabled. Prefer the disabled HTML attribute when possible.",
    values: "true | false",
  },
  {
    name: "aria-current",
    kind: "state",
    appliesTo: "Links, buttons",
    description: "Marks the element representing the current item in a set.",
    values: "page | step | location | date | time | true | false",
  },
  {
    name: "aria-expanded",
    kind: "state",
    appliesTo: "button, combobox, menuitem, etc.",
    description: "Whether a control with a popup is open.",
    values: "true | false | undefined",
  },
  {
    name: "aria-pressed",
    kind: "state",
    appliesTo: "button (toggle)",
    description: "Indicates the current pressed state of a toggle button.",
    values: "true | false | mixed | undefined",
  },
  {
    name: "aria-selected",
    kind: "state",
    appliesTo: "tab, option, treeitem, gridcell, row",
    description: "Indicates the current selected state of selectable items.",
    values: "true | false | undefined",
  },
  {
    name: "aria-checked",
    kind: "state",
    appliesTo: "checkbox, radio, switch, menuitemcheckbox",
    description: "Indicates the current checked state.",
    values: "true | false | mixed",
  },
  {
    name: "aria-controls",
    kind: "property",
    appliesTo: "tab, combobox, button (toggling content)",
    description: "IDs of elements whose contents the current element controls.",
    values: "ID reference list",
  },
  {
    name: "aria-haspopup",
    kind: "property",
    appliesTo: "button, menuitem, etc.",
    description: "Indicates the type of popup the element triggers.",
    values: "false | true | menu | listbox | tree | grid | dialog",
  },
  {
    name: "aria-live",
    kind: "property",
    appliesTo: "Live regions",
    description: "Politeness with which assistive tech announces updates.",
    values: "off | polite | assertive",
  },
  {
    name: "aria-atomic",
    kind: "property",
    appliesTo: "Live regions",
    description: "Whether the entire region should be announced when any descendant changes.",
    values: "true | false",
  },
  {
    name: "aria-busy",
    kind: "state",
    appliesTo: "Most roles",
    description: "Element is being modified — defer announcements until false.",
    values: "true | false",
  },
  {
    name: "aria-required",
    kind: "property",
    appliesTo: "form fields",
    description: "User input is required before submission. Prefer the required HTML attribute.",
    values: "true | false",
  },
  {
    name: "aria-invalid",
    kind: "state",
    appliesTo: "form fields",
    description: "Entered value does not conform to expected format.",
    values: "true | false | grammar | spelling",
  },
  {
    name: "aria-readonly",
    kind: "property",
    appliesTo: "form fields",
    description: "User cannot modify the value, but it's still focusable.",
    values: "true | false",
  },
  {
    name: "aria-multiline",
    kind: "property",
    appliesTo: "textbox",
    description: "Whether the textbox accepts multi-line input.",
    values: "true | false",
  },
  {
    name: "aria-modal",
    kind: "property",
    appliesTo: "dialog, alertdialog",
    description: "Whether content outside the dialog is inert.",
    values: "true | false",
  },
  {
    name: "aria-orientation",
    kind: "property",
    appliesTo: "scrollbar, slider, separator, tablist, toolbar, tree",
    description: "Orientation of the element.",
    values: "horizontal | vertical | undefined",
  },
  {
    name: "aria-valuemin / valuemax / valuenow / valuetext",
    kind: "property",
    appliesTo: "range widgets",
    description: "Numeric range for sliders, progressbars, spinbuttons.",
    values: "number / string",
  },
  {
    name: "aria-keyshortcuts",
    kind: "property",
    appliesTo: "Any focusable",
    description: "Keyboard shortcut(s) the element will respond to.",
    values: "string",
  },
  {
    name: "aria-roledescription",
    kind: "property",
    appliesTo: "Any element",
    description: "Human-readable description of the element's role. Use sparingly.",
    values: "string",
  },
]
