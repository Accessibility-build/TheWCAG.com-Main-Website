import type { SuccessCriterion } from '../types'

// Guideline 1.1: Text Alternatives
export const textAlternativesCriteria: SuccessCriterion[] = [
  {
    id: "1-1-1",
    number: "1.1.1",
    title: "Non-text Content",
    level: "A",
    principle: "perceivable",
    guideline: "Text Alternatives",
    guidelineNumber: "1.1",
    isNew: false,
    description:
      "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.",
    summary:
      "Provide text alternatives for all images, icons, and other non-text content so screen readers can convey the information.",
    whyItMatters:
      "Screen reader users cannot access information presented only in images, videos, or audio without text alternatives.",
    whoBenefits: ["Blind users", "Users with low vision", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This is one of the most fundamental accessibility requirements. It ensures that visual information is accessible to people who cannot see it.",
      intent:
        "The intent is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user.",
    },
    examples: [
      {
        title: "Image without Alt Text",
        description: 'Screen readers will announce this as "image" or read the filename, providing no context.',
        type: "bad",
        code: '<img src="chart.png" />',
      },
      {
        title: "Descriptive Alt Text",
        description: "The alt text describes the content and function of the image.",
        type: "good",
        code: '<img src="chart.png" alt="Bar chart showing 20% increase in sales for Q3" />',
      },
      {
        title: "Decorative Image",
        description: "Decorative images should have an empty alt attribute so screen readers ignore them.",
        type: "good",
        code: '<img src="divider.png" alt="" />',
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Informative Image -->
<img src="logo.png" alt="Acme Corp Home">

<!-- ✅ Good: Decorative Image -->
<img src="decoration.png" alt="">

<!-- ✅ Good: Complex Image -->
<figure>
  <img src="chart.png" alt="Sales chart">
  <figcaption>
    Sales increased by 20% in Q3, driven by...
  </figcaption>
</figure>`,
      react: `// ✅ Good: React Component
const ImageComponent = ({ src, alt, isDecorative }) => (
  <img 
    src={src || "/placeholder.svg"} 
    alt={isDecorative ? "" : alt} 
    role={isDecorative ? "presentation" : undefined}
  />
);`,
    },
    testing: {
      manual: [
        "Inspect every image on the page using browser DevTools.",
        "Check if the image conveys information. If yes, verify the alt text accurately describes it.",
        "Check if the image is decorative. If yes, verify the alt text is empty (alt='').",
        "Turn off images in browser settings and verify text alternatives appear where images were.",
        "Use a screen reader (NVDA/JAWS/VoiceOver) to navigate the page and verify all images are properly announced.",
        "Check that alt text is concise (typically under 150 characters) but descriptive.",
        "Verify that functional images (buttons, links) describe the action, not the appearance.",
        "For complex images (charts, diagrams), verify there's a longer description available via aria-describedby or nearby text.",
      ],
      automated: [
        "Run axe DevTools to find missing alt attributes on images.",
        "Use WAVE browser extension to identify images without alternative text.",
        "Use Lighthouse accessibility audit to check for missing alt attributes.",
        "Use HTML_CodeSniffer or similar tools to detect empty alt attributes on informative images.",
      ],
    },
    complianceRequirements: [
      "All informative images must have descriptive alt text that conveys the same information as the image.",
      "All decorative images must have empty alt attributes (alt='') or be marked with role='presentation'.",
      "Functional images (images used as buttons or links) must have alt text that describes the function, not the appearance.",
      "Complex images (charts, graphs, diagrams) must have alt text plus a longer description via aria-describedby or nearby text.",
      "Images of text must have alt text that matches the text in the image, unless the text is decorative.",
      "Background images that convey information must have text alternatives provided in the content.",
    ],
    beyondCompliance: [
      "Provide context-aware alt text that considers the surrounding content and page purpose.",
      "For images in galleries or carousels, ensure each image has unique, descriptive alt text.",
      "Consider providing extended descriptions for complex images that can be toggled by users who need more detail.",
      "Use semantic HTML elements like <figure> and <figcaption> for images with captions.",
      "Ensure alt text is culturally sensitive and uses inclusive language.",
      "For images that change dynamically (like charts), ensure alt text updates to reflect current state.",
      "Consider providing multiple formats for complex information (e.g., data table alongside chart).",
      "Test alt text with actual screen reader users to ensure clarity and usefulness.",
    ],
    myths: [
      {
        myth: "All images need alt text, so I'll just use 'image' or 'photo' for everything.",
        reality: "Generic alt text like 'image' provides no value. Alt text should be specific and descriptive, or empty for decorative images. Screen readers already announce 'image', so adding 'image' to alt text is redundant.",
      },
      {
        myth: "I can skip alt text if I provide a caption below the image.",
        reality: "Captions are visible to all users but don't replace alt text. Screen readers need the alt attribute to announce images. Use both: descriptive alt text AND captions for complex images.",
      },
      {
        myth: "Decorative images should have descriptive alt text too.",
        reality: "Decorative images that don't convey information should have empty alt attributes (alt='') so screen readers skip them. Adding descriptive text to decorative images creates unnecessary noise.",
      },
      {
        myth: "Alt text should describe every detail in the image.",
        reality: "Alt text should be concise (typically under 150 characters) and focus on the image's purpose in context. Save detailed descriptions for complex images using aria-describedby or longdesc.",
      },
    ],
    commonFailures: [
      {
        failure: "Missing alt attribute entirely on informative images.",
        solution: "Add descriptive alt text that conveys the image's purpose and content. Example: alt='Bar chart showing sales increased 20% in Q3'.",
      },
      {
        failure: "Using filename as alt text (e.g., alt='IMG_1234.jpg').",
        solution: "Replace with meaningful description. Filenames provide no value to users. Example: alt='Product photo: Blue wireless headphones'.",
      },
      {
        failure: "Using generic alt text like 'image', 'photo', or 'picture'.",
        solution: "Use specific, descriptive text or empty alt for decorative images. Screen readers already announce 'image', so generic text is redundant.",
      },
      {
        failure: "Leaving decorative images without empty alt attributes.",
        solution: "Add alt='' and optionally role='presentation' to decorative images so screen readers skip them.",
      },
      {
        failure: "Describing appearance instead of function for functional images (buttons, links).",
        solution: "Describe what happens when activated, not what it looks like. Example: alt='Print this page' not alt='Printer icon'.",
      },
      {
        failure: "Starting alt text with 'image of' or 'picture of'.",
        solution: "Screen readers already announce 'image', so start directly with the description. Use 'Bar chart showing...' not 'Image of a bar chart showing...'.",
      },
      {
        failure: "Using the same alt text for multiple images that serve different purposes.",
        solution: "Each image needs unique alt text that reflects its specific purpose and context on the page.",
      },
    ],
    exampleComponent: "ImageAltTextExample",
  },
]
