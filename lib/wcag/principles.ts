export interface Principle {
  title: string
  description: string
  detailedDescription: string
  whyItMatters: string
  keyConcepts: string[]
  examples: string[]
  statistics?: string
  icon: string
  guidelines: Array<{ number: string; title: string }>
}

export const principles: Record<string, Principle> = {
  perceivable: {
    title: "Perceivable",
    description: "Information and user interface components must be presentable to users in ways they can perceive.",
    detailedDescription: "The Perceivable principle ensures that all users can perceive the information being presented. This means that information cannot be invisible to all of their senses. Users must be able to perceive the information that is being presented, regardless of which senses they use. This principle addresses the needs of users who are blind, have low vision, are deaf, hard of hearing, or have other sensory disabilities.",
    whyItMatters: "If users cannot perceive content, they cannot use it. This principle is fundamental because perception is the first step in accessing information. Without perceivable content, users with disabilities are completely excluded from the experience. For example, a blind user cannot see images, a deaf user cannot hear audio, and a user with low vision may not be able to read small text or distinguish colors.",
    keyConcepts: [
      "Text alternatives for non-text content (images, icons, charts)",
      "Captions and transcripts for audio and video content",
      "Sufficient color contrast for text and interactive elements",
      "Text that can be resized without loss of functionality",
      "Content that can be presented in different ways without losing meaning",
      "Clear visual and audio presentation of information"
    ],
    examples: [
      "Providing alt text for images so screen readers can describe them",
      "Adding captions to videos for deaf and hard of hearing users",
      "Ensuring text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)",
      "Using semantic HTML so content structure is programmatically determinable",
      "Providing audio descriptions for video content",
      "Making sure information isn't conveyed by color alone"
    ],
    statistics: "According to the World Health Organization, over 2.2 billion people have a vision impairment, and 1.5 billion people have some degree of hearing loss. Making content perceivable is essential for this significant portion of the global population.",
    icon: "👁️",
    guidelines: [
      { number: "1.1", title: "Text Alternatives" },
      { number: "1.2", title: "Time-based Media" },
      { number: "1.3", title: "Adaptable" },
      { number: "1.4", title: "Distinguishable" },
    ],
  },
  operable: {
    title: "Operable",
    description: "User interface components and navigation must be operable.",
    detailedDescription: "The Operable principle ensures that all users can operate interface components and navigate content. This means that users must be able to interact with all functionality using their preferred input method, whether that's a mouse, keyboard, voice control, switch, or other assistive technology. Interface components cannot require interaction that a user cannot perform.",
    whyItMatters: "If users cannot operate the interface, they cannot use the website or application. This principle addresses the needs of users who cannot use a mouse, have limited dexterity, use voice control, or rely on assistive technologies like switch controls. Many accessibility barriers occur when interfaces are designed only for mouse users, excluding keyboard-only users and those using assistive technologies.",
    keyConcepts: [
      "All functionality must be keyboard accessible",
      "Users need enough time to read and use content",
      "Content should not cause seizures or physical reactions",
      "Users must be able to navigate and find content easily",
      "Multiple input methods should be supported (mouse, keyboard, touch, voice)",
      "Interactive elements must be large enough and have sufficient spacing"
    ],
    examples: [
      "Ensuring all interactive elements can be reached and activated with keyboard only",
      "Providing ways to pause, stop, or hide moving, blinking, or scrolling content",
      "Avoiding content that flashes more than 3 times per second",
      "Providing skip links to bypass repetitive navigation",
      "Ensuring touch targets are at least 24x24 CSS pixels",
      "Allowing users to extend time limits when needed"
    ],
    statistics: "Approximately 15% of the world's population lives with some form of disability. Many users rely on keyboard navigation, voice control, or other assistive technologies. Making interfaces operable for all input methods is crucial for universal access.",
    icon: "⌨️",
    guidelines: [
      { number: "2.1", title: "Keyboard Accessible" },
      { number: "2.2", title: "Enough Time" },
      { number: "2.3", title: "Seizures and Physical Reactions" },
      { number: "2.4", title: "Navigable" },
      { number: "2.5", title: "Input Modalities" },
    ],
  },
  understandable: {
    title: "Understandable",
    description: "Information and the operation of user interface must be understandable.",
    detailedDescription: "The Understandable principle ensures that information and the operation of the user interface are clear and comprehensible. This means that users must be able to understand both the information presented and how to operate the interface. Content should be readable and predictable, and users should receive help when they make errors.",
    whyItMatters: "If users cannot understand the content or how to use the interface, they cannot effectively use the website or application. This principle addresses the needs of users with cognitive disabilities, learning disabilities, language barriers, and those who are new to technology. Complex language, unpredictable navigation, and unclear error messages create significant barriers.",
    keyConcepts: [
      "Content should be readable and written in plain language",
      "Web pages should appear and operate in predictable ways",
      "Users should receive help identifying and correcting errors",
      "Language of content should be programmatically determinable",
      "Consistent navigation and functionality across pages",
      "Clear labels, instructions, and error messages"
    ],
    examples: [
      "Using clear, simple language appropriate for the audience",
      "Maintaining consistent navigation and layout patterns",
      "Providing clear error messages that explain what went wrong and how to fix it",
      "Identifying the language of content (e.g., lang='en' attribute)",
      "Avoiding jargon and technical terms without explanation",
      "Providing context-sensitive help and instructions"
    ],
    statistics: "Cognitive disabilities affect millions of people worldwide. Additionally, many users are not native speakers of the content's language. Making content understandable benefits everyone, including users with cognitive disabilities, learning disabilities, and those with limited literacy or technical knowledge.",
    icon: "💡",
    guidelines: [
      { number: "3.1", title: "Readable" },
      { number: "3.2", title: "Predictable" },
      { number: "3.3", title: "Input Assistance" },
    ],
  },
  robust: {
    title: "Robust",
    description:
      "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
    detailedDescription: "The Robust principle ensures that content can be reliably interpreted by a wide variety of user agents, including assistive technologies. This means that as technologies advance, the content should remain accessible. Content should be written using valid, well-formed code and should work with current and future assistive technologies.",
    whyItMatters: "If content is not robust, it may not work with assistive technologies or future technologies. This principle ensures that content remains accessible as technology evolves. Invalid code, missing attributes, and improper markup can cause assistive technologies to fail, completely excluding users who depend on them. Robust content is future-proof and works across different platforms and devices.",
    keyConcepts: [
      "Valid, well-formed HTML and markup",
      "Proper use of semantic HTML elements",
      "Complete and accurate names, roles, and values for all UI components",
      "Compatibility with assistive technologies",
      "Following web standards and best practices",
      "Ensuring content works across different browsers and devices"
    ],
    examples: [
      "Using semantic HTML5 elements (header, nav, main, article, section, footer)",
      "Providing proper ARIA labels and roles when needed",
      "Ensuring all form controls have associated labels",
      "Validating HTML to catch markup errors",
      "Testing with screen readers and other assistive technologies",
      "Following W3C standards and recommendations"
    ],
    statistics: "There are over 1,000 different assistive technologies available, including screen readers, voice recognition software, switch controls, and more. Robust code ensures compatibility with this diverse ecosystem of tools that people with disabilities rely on.",
    icon: "🔧",
    guidelines: [{ number: "4.1", title: "Compatible" }],
  },
}

