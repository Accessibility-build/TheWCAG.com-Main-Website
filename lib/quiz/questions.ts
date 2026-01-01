/**
 * Quiz question structure
 */
export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  source?: {
    title: string
    url: string
  }
  category?: 'basics' | 'wcag' | 'technical' | 'best-practices' | 'advanced'
  difficulty?: 'easy' | 'medium' | 'hard'
}

/**
 * All quiz questions for the accessibility quiz (30 questions)
 * Includes a mix of difficulty levels and comprehensive WCAG coverage
 */
export const questions: Question[] = [
  // Easy Questions (1-10)
  {
    id: 1,
    question: "What is web accessibility?",
    options: [
      "Making websites look pretty",
      "Making websites usable by everyone, including people with disabilities",
      "Making websites load faster",
      "Making websites work on mobile phones"
    ],
    correctAnswer: 1,
    explanation: "Accessibility is about making websites usable by everyone, including people with disabilities. It's not just about aesthetics or performance.",
    source: {
      title: "Introduction to Web Accessibility - W3C WAI",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
    },
    category: "basics",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What does WCAG stand for?",
    options: [
      "Web Content Accessibility Guidelines",
      "Website Color and Graphics",
      "Web Coding and Graphics",
      "World Content Access Guide"
    ],
    correctAnswer: 0,
    explanation: "WCAG stands for Web Content Accessibility Guidelines, developed by W3C to ensure web content is accessible to all users.",
    source: {
      title: "WCAG 2 Overview - W3C WAI",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
    },
    category: "basics",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Which HTML element is used to provide alternative text for images?",
    options: [
      "title attribute",
      "alt attribute",
      "caption attribute",
      "description attribute"
    ],
    correctAnswer: 1,
    explanation: "The 'alt' attribute provides alternative text for images, which is read by screen readers and displayed when images fail to load.",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.1.1 Non-text Content",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
    },
    category: "technical",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "What is the minimum contrast ratio required by WCAG 2.2 Level AA for normal text?",
    options: [
      "3:1",
      "4.5:1",
      "7:1",
      "2:1"
    ],
    correctAnswer: 1,
    explanation: "WCAG 2.2 Level AA requires a minimum contrast ratio of 4.5:1 for normal text to ensure readability for users with visual impairments.",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.4.3 Contrast (Minimum)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
    },
    category: "wcag",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Which of the following is NOT one of the four main principles of WCAG?",
    options: [
      "Perceivable",
      "Operable",
      "Profitable",
      "Understandable"
    ],
    correctAnswer: 2,
    explanation: "The four main principles of WCAG are: Perceivable, Operable, Understandable, and Robust (POUR). Profitable is not a WCAG principle.",
    source: {
      title: "Understanding the Four Principles of Accessibility - W3C WAI",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility"
    },
    category: "wcag",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What is the purpose of semantic HTML?",
    options: [
      "To make code look prettier",
      "To provide meaning and structure to web content",
      "To reduce file size",
      "To make websites load faster"
    ],
    correctAnswer: 1,
    explanation: "Semantic HTML provides meaning and structure to web content, making it easier for assistive technologies to interpret and navigate.",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
    },
    category: "technical",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Which HTML element should be used for the main navigation of a website?",
    options: [
      "<div id='nav'>",
      "<menu>",
      "<nav>",
      "<navigation>"
    ],
    correctAnswer: 2,
    explanation: "The <nav> element is the semantic HTML5 element specifically designed for major navigation blocks.",
    source: {
      title: "HTML nav element - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
    },
    category: "technical",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Is accessibility only for people with disabilities?",
    options: [
      "Yes, only for disabled people",
      "No, it benefits everyone",
      "Only for blind people",
      "Only for developers"
    ],
    correctAnswer: 1,
    explanation: "Accessibility benefits everyone, including people with temporary impairments, situational limitations, and aging populations.",
    source: {
      title: "Accessibility - W3C WAI",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
    },
    category: "basics",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "What is the recommended maximum number of characters per line for optimal readability?",
    options: [
      "40-50 characters",
      "60-80 characters",
      "100-120 characters",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: "WCAG recommends 60-80 characters per line for optimal readability. Lines that are too long or too short can be difficult to read.",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.4.8 Visual Presentation",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html"
    },
    category: "best-practices",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "Which attribute is used to label form inputs for screen readers?",
    options: [
      "name",
      "id",
      "aria-label or <label>",
      "title"
    ],
    correctAnswer: 2,
    explanation: "The aria-label attribute or associated <label> element provides accessible names for form inputs, helping screen reader users understand the purpose of each field.",
    source: {
      title: "WCAG 2.2 - Success Criterion 3.3.2 Labels or Instructions",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
    },
    category: "technical",
    difficulty: "easy"
  },

  // Medium Questions (11-20)
  {
    id: 11,
    question: "What is the correct way to hide content visually but keep it accessible to screen readers?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "position: absolute; left: -9999px;",
      "opacity: 0;"
    ],
    correctAnswer: 2,
    explanation: "Using position: absolute with a large negative left value hides content visually while keeping it in the DOM and accessible to screen readers. display:none and visibility:hidden remove content from the accessibility tree.",
    source: {
      title: "Invisible Content Just for Screen Reader Users - WebAIM",
      url: "https://webaim.org/techniques/css/invisiblecontent/"
    },
    category: "technical",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "What is the purpose of ARIA landmarks?",
    options: [
      "To style web pages",
      "To help users navigate and understand page structure",
      "To improve SEO",
      "To make pages load faster"
    ],
    correctAnswer: 1,
    explanation: "ARIA landmarks help users of assistive technologies navigate and understand the structure of a web page by identifying key regions like navigation, main content, and complementary areas.",
    source: {
      title: "ARIA Landmarks - W3C WAI",
      url: "https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/"
    },
    category: "wcag",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Which WCAG 2.2 success criterion requires that all functionality be available from a keyboard?",
    options: [
      "1.1.1 Non-text Content",
      "2.1.1 Keyboard",
      "3.2.1 On Focus",
      "4.1.2 Name, Role, Value"
    ],
    correctAnswer: 1,
    explanation: "Success Criterion 2.1.1 Keyboard (Level A) requires that all functionality be available from a keyboard, ensuring users who cannot use a mouse can still access all features.",
    source: {
      title: "WCAG 2.2 - Success Criterion 2.1.1 Keyboard",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
    },
    category: "wcag",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "What is the minimum target size for clickable elements according to WCAG 2.2 Level AA?",
    options: [
      "24x24 pixels",
      "44x44 pixels",
      "48x48 pixels",
      "No minimum specified"
    ],
    correctAnswer: 1,
    explanation: "WCAG 2.2 Level AA requires a minimum target size of 44x44 CSS pixels for clickable elements to ensure they're easy to activate for users with motor impairments.",
    source: {
      title: "WCAG 2.2 - Success Criterion 2.5.8 Target Size (Minimum)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
    },
    category: "wcag",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "What does the 'role' attribute do in ARIA?",
    options: [
      "Defines the visual appearance of an element",
      "Defines the type or purpose of an element for assistive technologies",
      "Defines the JavaScript behavior of an element",
      "Defines the CSS styling of an element"
    ],
    correctAnswer: 1,
    explanation: "The 'role' attribute defines the type or purpose of an element for assistive technologies, helping them understand how to interact with and present the element to users.",
    source: {
      title: "ARIA Roles - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
    },
    category: "technical",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Which of the following is a valid way to provide skip navigation links?",
    options: [
      "Hidden links that only appear on focus",
      "Links that are always visible at the top of the page",
      "Both A and B are valid",
      "Skip links are not necessary"
    ],
    correctAnswer: 2,
    explanation: "Both hidden links that appear on focus and always-visible links are valid approaches to skip navigation. The key is that they must be keyboard accessible and appear early in the tab order.",
    source: {
      title: "WCAG 2.2 - Success Criterion 2.4.1 Bypass Blocks",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html"
    },
    category: "best-practices",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "What is the purpose of the 'aria-live' attribute?",
    options: [
      "To indicate real-time video content",
      "To announce dynamic content changes to screen readers",
      "To show live chat features",
      "To enable live streaming"
    ],
    correctAnswer: 1,
    explanation: "The 'aria-live' attribute announces dynamic content changes to screen readers, ensuring users are aware of updates without needing to navigate to the changed content.",
    source: {
      title: "ARIA Live Regions - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
    },
    category: "technical",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Which heading level should follow an <h2> heading?",
    options: [
      "Another <h2>",
      "An <h3>",
      "Either <h2> or <h3>",
      "Any heading level is fine"
    ],
    correctAnswer: 2,
    explanation: "After an <h2>, you can use either another <h2> (for a sibling section) or an <h3> (for a subsection). Heading levels should not skip (e.g., h2 to h4).",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.3.1 Info and Relationships",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
    },
    category: "best-practices",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "What is the correct ARIA attribute to indicate a required form field?",
    options: [
      "aria-required='true'",
      "aria-mandatory='true'",
      "aria-needed='true'",
      "required='true'"
    ],
    correctAnswer: 0,
    explanation: "The aria-required='true' attribute indicates that a form field must be filled out before submission. The HTML5 'required' attribute can also be used.",
    source: {
      title: "aria-required - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required"
    },
    category: "technical",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "What is focus management in web accessibility?",
    options: [
      "Managing CSS focus styles",
      "Controlling where keyboard focus moves during interactions",
      "Managing browser focus settings",
      "Focusing on important content"
    ],
    correctAnswer: 1,
    explanation: "Focus management involves controlling where keyboard focus moves during interactions, especially in dynamic content like modals, ensuring a logical and predictable user experience.",
    source: {
      title: "Managing Focus - W3C WAI",
      url: "https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/"
    },
    category: "best-practices",
    difficulty: "medium"
  },

  // Hard Questions (21-30)
  {
    id: 21,
    question: "Which WCAG 2.2 success criterion addresses the need for consistent identification of components across pages?",
    options: [
      "3.2.3 Consistent Navigation",
      "3.2.4 Consistent Identification",
      "3.3.2 Labels or Instructions",
      "4.1.2 Name, Role, Value"
    ],
    correctAnswer: 1,
    explanation: "Success Criterion 3.2.4 Consistent Identification (Level AA) requires that components with the same functionality be identified consistently across a set of web pages.",
    source: {
      title: "WCAG 2.2 - Success Criterion 3.2.4 Consistent Identification",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
    },
    category: "wcag",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "What is the correct way to implement a custom accessible dropdown menu?",
    options: [
      "Use <div> elements with click handlers",
      "Use <button> with aria-expanded and aria-controls",
      "Use <a> tags with JavaScript",
      "Use <span> elements with event listeners"
    ],
    correctAnswer: 1,
    explanation: "A custom accessible dropdown should use a <button> element with aria-expanded to indicate state and aria-controls to reference the menu, along with proper keyboard navigation and focus management.",
    source: {
      title: "Disclosure (Show/Hide) Pattern - W3C ARIA Authoring Practices",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "What is the purpose of the 'aria-describedby' attribute?",
    options: [
      "To provide a label for an element",
      "To reference additional descriptive information for an element",
      "To describe the visual appearance",
      "To add metadata to elements"
    ],
    correctAnswer: 1,
    explanation: "The 'aria-describedby' attribute references additional descriptive information (like help text or error messages) that provides more context beyond the accessible name.",
    source: {
      title: "aria-describedby - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 24,
    question: "Which of the following is a new success criterion introduced in WCAG 2.2?",
    options: [
      "2.4.11 Focus Not Obscured (Minimum)",
      "1.4.3 Contrast (Minimum)",
      "2.1.1 Keyboard",
      "4.1.2 Name, Role, Value"
    ],
    correctAnswer: 0,
    explanation: "2.4.11 Focus Not Obscured (Minimum) is one of the new success criteria in WCAG 2.2, ensuring that focused elements are not entirely hidden by other content.",
    source: {
      title: "WCAG 2.2 - Success Criterion 2.4.11 Focus Not Obscured (Minimum)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html"
    },
    category: "wcag",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "What is the correct implementation of a live region for error messages?",
    options: [
      "aria-live='polite' role='alert'",
      "aria-live='assertive' role='status'",
      "aria-live='assertive' role='alert'",
      "aria-live='polite' role='log'"
    ],
    correctAnswer: 2,
    explanation: "Error messages should use aria-live='assertive' with role='alert' to immediately interrupt and announce the error to screen reader users.",
    source: {
      title: "ARIA alert role - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "What is the difference between aria-label and aria-labelledby?",
    options: [
      "They are the same thing",
      "aria-label provides text directly, aria-labelledby references other elements",
      "aria-label is for buttons, aria-labelledby is for inputs",
      "aria-labelledby is deprecated"
    ],
    correctAnswer: 1,
    explanation: "aria-label provides accessible text directly as an attribute value, while aria-labelledby references the ID(s) of other elements whose text content should be used as the label.",
    source: {
      title: "ARIA Labels and Descriptions - W3C WAI",
      url: "https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 27,
    question: "Which WCAG conformance level requires captions for all live audio content?",
    options: [
      "Level A",
      "Level AA",
      "Level AAA",
      "Not required at any level"
    ],
    correctAnswer: 2,
    explanation: "Level AAA requires captions for all live audio content (1.2.9). Level AA only requires captions for prerecorded audio content.",
    source: {
      title: "WCAG 2.2 - Success Criterion 1.2.9 Audio-only (Live)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html"
    },
    category: "wcag",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "What is the correct way to handle focus when opening a modal dialog?",
    options: [
      "Leave focus on the trigger button",
      "Move focus to the first focusable element in the modal",
      "Move focus to the modal container",
      "Move focus to the close button"
    ],
    correctAnswer: 1,
    explanation: "When opening a modal, focus should move to the first focusable element within the modal (often the close button or first form field), and focus should be trapped within the modal until it's closed.",
    source: {
      title: "Dialog (Modal) Pattern - W3C ARIA Authoring Practices",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "What does the 'aria-hidden' attribute do?",
    options: [
      "Hides elements visually",
      "Removes elements from the accessibility tree",
      "Hides elements from search engines",
      "Disables elements"
    ],
    correctAnswer: 1,
    explanation: "The 'aria-hidden' attribute removes elements from the accessibility tree, making them invisible to assistive technologies while keeping them visually present.",
    source: {
      title: "aria-hidden - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden"
    },
    category: "advanced",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "Which WCAG 2.2 success criterion addresses authentication methods that don't rely on cognitive function tests?",
    options: [
      "3.3.7 Redundant Entry",
      "3.3.8 Accessible Authentication (Minimum)",
      "2.5.7 Dragging Movements",
      "2.4.13 Focus Appearance"
    ],
    correctAnswer: 1,
    explanation: "3.3.8 Accessible Authentication (Minimum) is a new WCAG 2.2 criterion that requires authentication methods to not rely on cognitive function tests like memorizing passwords or solving puzzles.",
    source: {
      title: "WCAG 2.2 - Success Criterion 3.3.8 Accessible Authentication (Minimum)",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html"
    },
    category: "wcag",
    difficulty: "hard"
  }
]

/**
 * Get a random subset of questions
 */
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, questions.length))
}

/**
 * Get questions by difficulty
 */
export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return questions.filter(q => q.difficulty === difficulty)
}

/**
 * Get questions by category
 */
export function getQuestionsByCategory(category: Question['category']): Question[] {
  return questions.filter(q => q.category === category)
}
