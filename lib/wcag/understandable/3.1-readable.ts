import type { SuccessCriterion } from '../types'

// Guideline 3.1: Readable
export const readableCriteria: SuccessCriterion[] = [
{
    id: "3-1-1",
    number: "3.1.1",
    title: "Language of Page",
    level: "A",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description: "The default human language of each Web page can be programmatically determined.",
    summary: "Set the language attribute on the html tag (e.g., <html lang='en'>).",
    whyItMatters: "Screen readers need to know the language to pronounce words correctly.",
    whoBenefits: ["Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires that the default language of each web page is programmatically identified, typically using the lang attribute on the html element.",
      intent:
        "The intent is to ensure that screen readers and other assistive technologies can use the correct language pronunciation and rules when reading content.",
    },
    examples: [
      {
        title: "Page Without Language",
        description: "HTML tag has no lang attribute, so screen reader doesn't know the language.",
        type: "bad",
        code: '<html>',
      },
      {
        title: "Page With Language",
        description: "HTML tag has lang attribute, so screen reader uses correct pronunciation.",
        type: "good",
        code: '<html lang="en">',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: No language attribute -->
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>Content</body>
</html>

<!-- ✅ Good: Language attribute on html -->
<html lang="en">
  <head>
    <title>My Page</title>
  </head>
  <body>Content</body>
</html>

<!-- ✅ Good: Different languages -->
<html lang="es">
  <!-- Spanish page -->
</html>

<html lang="fr">
  <!-- French page -->
</html>`,
      react: `// ✅ Good: Language in Next.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// ✅ Good: Dynamic language
function Layout({ language = 'en' }) {
  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  )
}`,
    },
    testing: {
      manual: [
        "Check the <html> tag for lang attribute.",
        "Verify the lang value is a valid language code (e.g., 'en', 'es', 'fr').",
        "Test with screen reader to verify correct pronunciation.",
        "Check that lang attribute is present on all pages.",
        "Verify lang attribute matches the page's primary language.",
      ],
      automated: [
        "Use W3C HTML Validator to check for lang attribute.",
        "Use axe DevTools to detect missing lang attributes.",
        "Use WAVE to identify language issues.",
      ],
    },
    complianceRequirements: [
      "The <html> element must have a lang attribute.",
      "The lang value must be a valid language code (ISO 639-1 or BCP 47).",
      "The lang value must match the page's primary language.",
      "All pages must have the lang attribute set.",
      "The lang attribute must be programmatically determinable.",
    ],
    beyondCompliance: [
      "Use specific language codes when appropriate (e.g., 'en-US' vs 'en-GB').",
      "Ensure lang attribute is set correctly in all templates and frameworks.",
      "Test with multiple screen readers to verify pronunciation.",
      "Consider providing language switcher for multilingual sites.",
      "Document language requirements for content creators.",
    ],
    myths: [
      {
        myth: "If the page is in English, I don't need to set lang='en'.",
        reality: "Screen readers need the lang attribute to know how to pronounce words. Without it, they may use incorrect pronunciation rules.",
      },
      {
        myth: "The lang attribute is just for SEO, not accessibility.",
        reality: "While lang helps SEO, it's primarily an accessibility requirement. Screen readers rely on it for correct pronunciation.",
      },
    ],
    commonFailures: [
      {
        failure: "Missing lang attribute on <html> element.",
        solution: "Add lang attribute to <html> tag. Example: <html lang='en'> for English pages.",
      },
      {
        failure: "Incorrect or invalid language code.",
        solution: "Use valid ISO 639-1 or BCP 47 language codes. Examples: 'en' for English, 'es' for Spanish, 'fr' for French.",
      },
      {
        failure: "Lang attribute doesn't match page content language.",
        solution: "Ensure lang attribute matches the primary language of the page content. Update it if content language changes.",
      },
    ],
    officialDefinition:
      "The default human language of each Web page can be programmatically determined.",
    detailedSummary:
      "What This Means: This success criterion requires that the default human language of each web page is programmatically identified. This is typically done using the lang attribute on the <html> element. The language code should match the primary language of the page content.\n\nWhy It's Important: Screen readers and other assistive technologies need to know the language of the content to use the correct pronunciation rules and language-specific features. Without the lang attribute, screen readers may mispronounce words or use incorrect language rules, making content difficult or impossible to understand for users who rely on audio output.\n\nIn Practice: Add the lang attribute to the <html> element with a valid language code (ISO 639-1 or BCP 47). For example, <html lang='en'> for English, <html lang='es'> for Spanish, or <html lang='fr'> for French. Use more specific codes when appropriate (e.g., 'en-US' for American English vs 'en-GB' for British English). The lang attribute must be present on every page and must match the primary language of the content.",
    keyTerms: [
      {
        term: "Default Human Language",
        definition: "The primary language in which the content of a web page is written.",
        context: "The default language must be programmatically determinable through the lang attribute.",
      },
      {
        term: "Programmatically Determined",
        definition: "Determined by software from author-supplied data provided in a way that different user agents, including assistive technologies, can extract and present this information to users.",
        context: "The language must be identifiable by assistive technologies through the lang attribute.",
      },
      {
        term: "Language Code",
        definition: "A code that identifies a human language, typically using ISO 639-1 or BCP 47 standards.",
        context: "Valid language codes must be used in the lang attribute (e.g., 'en', 'es', 'fr').",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.2",
        title: "Language of Parts",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add lang attribute to <html> element",
          "Use valid language codes (ISO 639-1 or BCP 47)",
          "Ensure lang matches page's primary language",
          "Set lang on all pages",
        ],
      },
      {
        category: "General",
        items: [
          "Verify lang attribute is present",
          "Test with screen readers",
          "Check language code validity",
          "Ensure consistency across pages",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Language of Page",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html",
        type: "Understanding",
      },
      {
        title: "H57: Using the language attribute on the HTML element",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H57",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-1-2",
    number: "3.1.2",
    title: "Language of Parts",
    level: "AA",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description:
      "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediate surrounding text.",
    summary: "Mark up changes in language within the page (e.g., <span lang='fr'>).",
    whyItMatters: "Ensures correct pronunciation of foreign words by screen readers.",
    whoBenefits: ["Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires that any text in a different language from the page's default language be marked up with the appropriate language attribute so screen readers can pronounce it correctly.",
      intent:
        "The intent is to ensure that screen readers can switch to the correct language pronunciation when encountering text in a different language. This is especially important for multilingual content.",
    },
    examples: [
      {
        title: "Unmarked Foreign Text",
        description: "French text in an English page is not marked, so the screen reader pronounces it with English rules.",
        type: "bad",
        code: `<p>Welcome to our site. Bienvenue sur notre site.</p>`,
      },
      {
        title: "Properly Marked Foreign Text",
        description: "French text is marked with lang='fr', so the screen reader switches to French pronunciation.",
        type: "good",
        code: `<p>Welcome to our site. <span lang="fr">Bienvenue sur notre site.</span></p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Unmarked language change -->
<p>Hello, <em>bonjour</em>, hola!</p>

<!-- âœ… Good: Properly marked language changes -->
<p>Hello, <span lang="fr">bonjour</span>, <span lang="es">hola</span>!</p>

<!-- âœ… Good: Block-level language change -->
<div lang="fr">
  <h2>Bienvenue</h2>
  <p>Ce contenu est en franÃ§ais.</p>
</div>

<!-- âœ… Good: Using lang attribute on elements -->
<blockquote lang="de">
  "Das Leben ist schÃ¶n"
</blockquote>`,
      react: `// âœ… Good: Language markup in React
function MultilingualContent() {
  return (
    <div>
      <p>
        Welcome to our site.{' '}
        <span lang="fr">Bienvenue sur notre site.</span>
      </p>
      
      <div lang="es">
        <h2>Bienvenido</h2>
        <p>Este contenido estÃ¡ en espaÃ±ol.</p>
      </div>
    </div>
  )
}

// âœ… Good: Dynamic language content
function Quote({ text, language }) {
  return (
    <blockquote lang={language}>
      {text}
    </blockquote>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all text in languages other than the page default.",
        "Check that lang attributes are present on foreign text.",
        "Test with screen reader to verify correct pronunciation.",
        "Verify proper names and technical terms are handled correctly.",
        "Check that language changes are programmatically determinable.",
        "Test pronunciation of foreign words with screen reader.",
        "Verify lang attributes use correct language codes.",
      ],
      automated: [
        "Tools can detect lang attributes but cannot verify pronunciation accuracy.",
        "Use WAVE or axe to check for missing lang attributes on foreign text.",
      ],
    },
    complianceRequirements: [
      "Text in languages other than the page default must have lang attributes.",
      "Lang attributes must use valid language codes.",
      "Proper names, technical terms, and words in common use are exempt.",
      "Language changes must be programmatically determinable.",
      "Block-level language changes should use lang on container elements.",
    ],
    beyondCompliance: [
      "Mark all foreign text, even if it seems obvious.",
      "Provide pronunciation guides for difficult foreign words.",
      "Test with native speakers to verify correct language codes.",
      "Consider providing translations for foreign phrases.",
      "Document language markup requirements for content creators.",
    ],
    myths: [
      {
        myth: "If it's just one word, I don't need to mark it.",
        reality: "Even single words in different languages should be marked with lang attributes so screen readers pronounce them correctly.",
      },
      {
        myth: "Proper names don't need language markup.",
        reality: "While proper names are technically exempt, it's still good practice to mark them if they're clearly from a different language.",
      },
    ],
    commonFailures: [
      {
        failure: "Foreign words or phrases without lang attributes.",
        solution: "Add lang attributes to all text in languages other than the page default. Use <span lang='fr'> for French, <span lang='es'> for Spanish, etc.",
      },
      {
        failure: "Block-level language changes without lang on container.",
        solution: "Add lang attribute to container elements (div, section, article) when entire blocks are in different languages.",
      },
      {
        failure: "Incorrect language codes on foreign text.",
        solution: "Use correct language codes. Verify codes match the actual language of the text.",
      },
    ],
    officialDefinition:
      "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediate surrounding text.",
    detailedSummary:
      "What This Means: This success criterion requires that any text in a different language from the page's default language be marked up with the appropriate language attribute. This allows screen readers to switch to the correct language pronunciation when encountering foreign text. Proper names, technical terms, words of indeterminate language, and words that have become part of the vernacular are exempt.\n\nWhy It's Important: When content contains text in multiple languages, screen readers need to know which parts are in which language to pronounce them correctly. Without proper language markup, a screen reader might pronounce French text using English pronunciation rules, or Spanish text using French rules, making it incomprehensible to users.\n\nIn Practice: Use the lang attribute on elements containing text in a different language. For inline text, use <span lang='fr'> for French, <span lang='es'> for Spanish, etc. For block-level content, add lang to container elements like <div lang='fr'>. The lang attribute should match the actual language of the text, not just the page default.",
    keyTerms: [
      {
        term: "Language of Parts",
        definition: "The human language of specific passages or phrases within content that differ from the default page language.",
        context: "Language changes within a page must be programmatically determinable through lang attributes.",
      },
      {
        term: "Proper Names",
        definition: "Names of people, places, organizations, or other entities that are exempt from language markup requirements.",
        context: "Proper names don't require lang attributes even if they're from a different language.",
      },
      {
        term: "Vernacular",
        definition: "Words or phrases that have become part of the everyday language of the surrounding text.",
        context: "Words that have been adopted into the local language don't require separate language markup.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.1",
        title: "Language of Page",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add lang attribute to foreign text elements",
          "Use <span lang='xx'> for inline language changes",
          "Use lang on container elements for block-level changes",
          "Ensure language codes are correct",
        ],
      },
      {
        category: "General",
        items: [
          "Identify all text in languages other than page default",
          "Mark up language changes appropriately",
          "Test with screen readers",
          "Verify correct pronunciation",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Language of Parts",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html",
        type: "Understanding",
      },
      {
        title: "H58: Using language attributes to identify changes in the human language",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H58",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-1-3",
    number: "3.1.3",
    title: "Unusual Words",
    level: "AAA",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description:
      "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    summary: "Explain idioms, jargon, and unusual words.",
    whyItMatters: "Helps users with cognitive disabilities understand complex language.",
    whoBenefits: ["Users with cognitive disabilities", "Non-native speakers"],
    details: {
      introduction:
        "This criterion requires providing definitions or explanations for words or phrases used in unusual or restricted ways, including idioms, jargon, and technical terms.",
      intent:
        "The intent is to help users understand content by providing access to definitions of words that may be unfamiliar or used in specialized ways.",
    },
    examples: [
      {
        title: "Unusual Word Without Definition",
        description: "Technical jargon is used without explanation, making content hard to understand.",
        type: "bad",
        code: `<p>The API uses RESTful endpoints for CRUD operations.</p>`,
      },
      {
        title: "Unusual Word With Definition",
        description: "Technical terms are linked to definitions or explained inline.",
        type: "good",
        code: `<p>The API uses <dfn>RESTful</dfn> endpoints for <abbr title="Create, Read, Update, Delete">CRUD</abbr> operations.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Using dfn and abbr elements -->
<p>
  The <dfn>API</dfn> (Application Programming Interface) uses 
  <abbr title="Representational State Transfer">RESTful</abbr> endpoints.
</p>

<!-- âœ… Good: Inline definitions -->
<p>
  The system uses <span title="A software component that provides a service">microservices</span> 
  architecture.
</p>

<!-- âœ… Good: Glossary link -->
<p>
  Learn about <a href="/glossary#api">APIs</a> in our glossary.
</p>`,
      react: `// âœ… Good: Component with definitions
function TechnicalContent() {
  return (
    <p>
      The <dfn>API</dfn> (Application Programming Interface) uses{' '}
      <abbr title="Representational State Transfer">RESTful</abbr> endpoints.
    </p>
  )
}

// âœ… Good: Tooltip definitions
function TermWithTooltip({ term, definition }) {
  return (
    <span title={definition}>
      {term}
    </span>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all unusual words, idioms, and jargon.",
        "Check that definitions or explanations are available.",
        "Verify definitions are accessible (not hidden).",
        "Test that definitions can be accessed by assistive technologies.",
        "Check that technical terms are explained.",
        "Verify definitions are clear and helpful.",
        "Test with users who may not understand the terms.",
      ],
      automated: [
        "Tools can detect dfn and abbr elements but cannot verify definition quality.",
        "Use accessibility testing tools to check for definition mechanisms.",
      ],
    },
    complianceRequirements: [
      "Unusual words, idioms, and jargon must have definitions or explanations available.",
      "Definitions must be accessible (not hidden or require special knowledge to find).",
      "Definitions can be provided inline, via tooltips, or through links to glossaries.",
      "Technical terms must be explained when they're not commonly understood.",
      "Idioms must be explained or rephrased in plain language.",
    ],
    beyondCompliance: [
      "Provide definitions for all technical terms, not just unusual ones.",
      "Use plain language explanations that are easy to understand.",
      "Consider providing a comprehensive glossary.",
      "Test definitions with actual users to ensure clarity.",
      "Provide multiple ways to access definitions (tooltips, glossary links, inline explanations).",
    ],
    myths: [
      {
        myth: "If it's a common technical term in my field, I don't need to explain it.",
        reality: "What's common in your field may not be common to your users. Explain technical terms or provide definitions.",
      },
      {
        myth: "Idioms are fine - everyone understands them.",
        reality: "Idioms can be confusing for non-native speakers and users with cognitive disabilities. Explain or rephrase them.",
      },
    ],
    commonFailures: [
      {
        failure: "Technical jargon without explanations.",
        solution: "Provide definitions using <dfn> elements, tooltips, or glossary links. Explain terms on first use.",
      },
      {
        failure: "Idioms used without explanation.",
        solution: "Rephrase idioms in plain language, or provide explanations. Example: Instead of 'hit the nail on the head', use 'exactly right'.",
      },
      {
        failure: "Definitions that are hidden or hard to find.",
        solution: "Make definitions easily accessible. Use visible tooltips, inline explanations, or clearly labeled glossary links.",
      },
    ],
    officialDefinition:
      "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    detailedSummary:
      "What This Means: This success criterion requires that words or phrases used in unusual or restricted ways (including idioms, jargon, and technical terms) have definitions or explanations available. Users should be able to access these definitions to understand the content.\n\nWhy It's Important: Users with cognitive disabilities, non-native speakers, and those unfamiliar with specialized terminology may struggle to understand content that uses unusual words, idioms, or jargon. Providing definitions helps ensure that all users can understand the content, regardless of their background or cognitive abilities.\n\nIn Practice: Use <dfn> elements for defined terms, <abbr> elements with title attributes for abbreviations, tooltips for inline definitions, or links to glossaries. Provide definitions on first use of unusual terms. Idioms should be explained or rephrased in plain language. Technical terms should have clear explanations accessible to users.",
    keyTerms: [
      {
        term: "Unusual Words",
        definition: "Words or phrases used in a restricted or specialized way that may not be familiar to all users.",
        context: "Unusual words must have definitions or explanations available to help users understand them.",
      },
      {
        term: "Idioms",
        definition: "Expressions whose meanings cannot be understood from the individual words (e.g., 'hit the nail on the head').",
        context: "Idioms should be explained or rephrased in plain language for clarity.",
      },
      {
        term: "Jargon",
        definition: "Specialized terminology used within a particular field or profession.",
        context: "Jargon should be explained or defined to ensure all users can understand the content.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.4",
        title: "Abbreviations",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use <dfn> elements for defined terms",
          "Use <abbr> with title for abbreviations",
          "Provide tooltips for technical terms",
          "Link to glossary when appropriate",
        ],
      },
      {
        category: "Content",
        items: [
          "Identify unusual words and idioms",
          "Provide definitions on first use",
          "Explain technical terms clearly",
          "Rephrase idioms in plain language",
        ],
      },
      {
        category: "General",
        items: [
          "Test definitions are accessible",
          "Verify definitions are clear",
          "Check with users if possible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Unusual Words",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html",
        type: "Understanding",
      },
      {
        title: "G101: Providing the definition of a word or phrase used in an unusual or restricted way",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G101",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-1-4",
    number: "3.1.4",
    title: "Abbreviations",
    level: "AAA",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description: "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
    summary: "Provide the full meaning of abbreviations.",
    whyItMatters: "Abbreviations can be confusing for many users.",
    whoBenefits: ["Users with cognitive disabilities", "Non-native speakers"],
    details: {
      introduction:
        "This criterion requires providing the expanded form or meaning of abbreviations, typically using the abbr element with a title attribute.",
      intent:
        "The intent is to help users understand abbreviations by providing access to their full expanded forms or meanings.",
    },
    examples: [
      {
        title: "Abbreviation Without Expansion",
        description: "An abbreviation is used without providing its full form.",
        type: "bad",
        code: `<p>Visit our FAQ for more information.</p>`,
      },
      {
        title: "Abbreviation With Expansion",
        description: "An abbreviation includes its expanded form using the abbr element.",
        type: "good",
        code: `<p>Visit our <abbr title="Frequently Asked Questions">FAQ</abbr> for more information.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Abbreviation without expansion -->
<p>Visit our FAQ for more information.</p>

<!-- âœ… Good: Using abbr element -->
<p>
  Visit our <abbr title="Frequently Asked Questions">FAQ</abbr> for more information.
</p>

<!-- âœ… Good: First occurrence expanded -->
<p>
  Visit our Frequently Asked Questions (<abbr title="Frequently Asked Questions">FAQ</abbr>) 
  for more information.
</p>

<!-- âœ… Good: Glossary link -->
<p>
  Learn about <a href="/glossary#api"><abbr title="Application Programming Interface">API</abbr></a> 
  in our glossary.
</p>`,
      react: `// âœ… Good: Abbreviation component
function Abbreviation({ abbr, title }) {
  return <abbr title={title}>{abbr}</abbr>
}

function Content() {
  return (
    <p>
      Visit our <Abbreviation abbr="FAQ" title="Frequently Asked Questions" /> 
      for more information.
    </p>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all abbreviations on the page.",
        "Check that abbreviations have expanded forms available.",
        "Verify that abbr elements have title attributes.",
        "Test that screen readers announce the expanded form.",
        "Check that first occurrences are expanded inline.",
        "Verify abbreviations are consistently marked throughout the site.",
      ],
      automated: [
        "Tools can detect abbr elements and check for title attributes.",
        "Use HTML validators to verify abbr elements have title attributes.",
      ],
    },
    complianceRequirements: [
      "All abbreviations must have expanded forms available.",
      "Abbreviations should use <abbr> elements with title attributes.",
      "First occurrence of an abbreviation should be expanded inline.",
      "Expanded forms must be accessible to assistive technologies.",
      "Common abbreviations (like 'etc.', 'i.e.') may not need expansion if widely understood.",
    ],
    beyondCompliance: [
      "Expand all abbreviations on first use, even common ones.",
      "Provide glossary entries for abbreviations.",
      "Use consistent abbreviation markup throughout the site.",
      "Test with screen readers to verify expanded forms are announced.",
      "Consider providing a list of abbreviations used on the site.",
    ],
    myths: [
      {
        myth: "Everyone knows what FAQ means, so I don't need to expand it.",
        reality: "While some abbreviations are common, it's best practice to expand them on first use. Not all users will know all abbreviations.",
      },
      {
        myth: "I can just write out the full form once and use abbreviations after that.",
        reality: "You should expand abbreviations on first use, but also mark them with <abbr> elements throughout so screen readers can announce the expansion.",
      },
    ],
    commonFailures: [
      {
        failure: "Abbreviations without expanded forms.",
        solution: "Add <abbr title='Full Expanded Form'>ABBR</abbr> elements. Expand abbreviations on first use.",
      },
      {
        failure: "Abbr elements without title attributes.",
        solution: "Always include title attribute with the expanded form. Example: <abbr title='Frequently Asked Questions'>FAQ</abbr>.",
      },
      {
        failure: "Inconsistent abbreviation markup.",
        solution: "Use consistent markup for all abbreviations. Establish a pattern and follow it throughout the site.",
      },
    ],
    officialDefinition:
      "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
    detailedSummary:
      "What This Means: This success criterion requires that abbreviations have their expanded forms or meanings available to users. This is typically done using the <abbr> element with a title attribute containing the full expansion, or by expanding the abbreviation inline on first use.\n\nWhy It's Important: Abbreviations can be confusing for users who are unfamiliar with them, including non-native speakers and users with cognitive disabilities. Providing expanded forms helps ensure that all users can understand the content. Screen readers can announce the expanded form when the abbreviation is marked up properly.\n\nIn Practice: Use <abbr title='Full Expanded Form'>ABBR</abbr> to mark abbreviations. Expand abbreviations inline on first use (e.g., 'Frequently Asked Questions (FAQ)'). The title attribute provides the expansion for screen readers and tooltips. Common abbreviations that are widely understood (like 'etc.', 'i.e.') may not require expansion, but it's still good practice to provide it.",
    keyTerms: [
      {
        term: "Abbreviation",
        definition: "A shortened form of a word, phrase, or name.",
        context: "Abbreviations must have expanded forms available to help users understand them.",
      },
      {
        term: "Expanded Form",
        definition: "The full form of an abbreviation (e.g., 'FAQ' expands to 'Frequently Asked Questions').",
        context: "Expanded forms should be provided through <abbr> elements with title attributes or inline expansion.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.3",
        title: "Unusual Words",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Use <abbr> elements for abbreviations",
          "Include title attribute with expanded form",
          "Expand abbreviations on first use",
          "Mark abbreviations consistently",
        ],
      },
      {
        category: "Content",
        items: [
          "Identify all abbreviations",
          "Provide expanded forms",
          "Expand on first use",
          "Consider glossary entries",
        ],
      },
      {
        category: "General",
        items: [
          "Test with screen readers",
          "Verify expanded forms are announced",
          "Check consistency of markup",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Abbreviations",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html",
        type: "Understanding",
      },
      {
        title: "H28: Providing definitions for abbreviations by using the abbr element",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H28",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-1-5",
    number: "3.1.5",
    title: "Reading Level",
    level: "AAA",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description:
      "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
    summary: "Write clearly and simply (aim for lower secondary education level).",
    whyItMatters: "Complex text excludes users with reading disabilities or lower literacy.",
    whoBenefits: ["Users with cognitive disabilities", "Users with low literacy"],
    details: {
      introduction:
        "This criterion requires that text is written at a reading level no higher than lower secondary education (approximately 7th-9th grade), or that a simplified version is provided.",
      intent:
        "The intent is to ensure that content is accessible to users with lower reading abilities by using simple, clear language or providing simplified alternatives.",
    },
    examples: [
      {
        title: "Complex Text",
        description: "Text uses advanced vocabulary and complex sentence structures.",
        type: "bad",
        code: `<p>The implementation of this methodology necessitates a comprehensive 
understanding of the underlying theoretical framework.</p>`,
      },
      {
        title: "Simple Text",
        description: "Text uses simple words and short sentences that are easy to understand.",
        type: "good",
        code: `<p>To use this method, you need to understand the basic ideas behind it.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Complex text -->
<p>
  The implementation of this methodology necessitates a comprehensive 
  understanding of the underlying theoretical framework.
</p>

<!-- âœ… Good: Simple text -->
<p>
  To use this method, you need to understand the basic ideas behind it.
</p>

<!-- âœ… Good: Simplified version link -->
<article>
  <h1>Complex Article</h1>
  <p>Complex content here...</p>
  <p>
    <a href="/simplified-version">Read a simpler version</a>
  </p>
</article>`,
      react: `// âœ… Good: Simple language component
function SimpleContent() {
  return (
    <article>
      <h1>How to Use This Tool</h1>
      <p>
        To use this tool, you need to understand the basic ideas behind it.
        Follow these simple steps to get started.
      </p>
      <p>
        <a href="/simplified">Read a simpler version</a>
      </p>
    </article>
  )
}`,
    },
    testing: {
      manual: [
        "Review text for reading level complexity.",
        "Check that sentences are short and clear.",
        "Verify that vocabulary is simple and common.",
        "Test with reading level analysis tools (Flesch-Kincaid, etc.).",
        "Check if simplified versions are available for complex content.",
        "Test simplified versions with users who have reading difficulties.",
        "Verify simplified versions cover all important information.",
      ],
      automated: [
        "Tools can analyze reading level but cannot verify if simplified versions are provided.",
        "Use reading level analysis tools to check text complexity.",
      ],
    },
    complianceRequirements: [
      "Text must be written at lower secondary education level (approximately 7th-9th grade), OR",
      "A simplified version must be provided that meets the reading level requirement.",
      "Simplified versions must contain the same essential information.",
      "Simplified versions must be easily accessible.",
      "Proper names, titles, and technical terms are exempt from reading level requirements.",
    ],
    beyondCompliance: [
      "Write all content at the appropriate reading level when possible.",
      "Provide simplified versions even for content that meets the reading level.",
      "Test reading level with actual users.",
      "Use plain language principles throughout.",
      "Consider providing multiple reading level options.",
    ],
    myths: [
      {
        myth: "I need to dumb down my content to meet reading level requirements.",
        reality: "You can write clearly and simply without losing meaning. Use plain language, short sentences, and common words. Complex ideas can be explained simply.",
      },
      {
        myth: "If I provide a simplified version, the main content can be as complex as I want.",
        reality: "While simplified versions are acceptable, it's better to write clearly from the start. Simplified versions should be easily accessible and contain all essential information.",
      },
    ],
    commonFailures: [
      {
        failure: "Complex text without simplified versions.",
        solution: "Either rewrite content at appropriate reading level, or provide a clearly accessible simplified version with the same essential information.",
      },
      {
        failure: "Simplified versions that are hard to find or incomplete.",
        solution: "Make simplified versions prominent and easy to access. Ensure they contain all essential information from the original.",
      },
      {
        failure: "Using unnecessarily complex vocabulary when simpler words would work.",
        solution: "Use plain language. Choose simple, common words over complex ones. Break long sentences into shorter ones.",
      },
    ],
    officialDefinition:
      "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
    detailedSummary:
      "What This Means: This success criterion requires that text is written at a reading level no higher than lower secondary education (approximately 7th-9th grade), OR that a simplified version is provided that meets this requirement. The simplified version must contain the same essential information as the original.\n\nWhy It's Important: Complex text with advanced vocabulary and sentence structures can be difficult or impossible for users with reading disabilities, lower literacy levels, or cognitive disabilities to understand. By writing at an appropriate reading level or providing simplified versions, content becomes accessible to a wider audience.\n\nIn Practice: Write using plain language principles: short sentences, common words, clear structure. Use reading level analysis tools to check complexity. If content must be complex, provide a clearly accessible simplified version. The simplified version should be easy to find and contain all essential information. Proper names, titles, and technical terms are exempt from reading level calculations.",
    keyTerms: [
      {
        term: "Lower Secondary Education Level",
        definition: "Approximately 7th to 9th grade reading level, typically ages 12-15.",
        context: "Text should be written at this reading level or a simplified version should be provided.",
      },
      {
        term: "Reading Ability",
        definition: "The level of reading skill required to understand text, measured by factors like sentence length, vocabulary complexity, and sentence structure.",
        context: "Reading ability requirements should not exceed lower secondary education level.",
      },
      {
        term: "Simplified Version",
        definition: "An alternative version of content written at a lower reading level that contains the same essential information.",
        context: "Simplified versions must be easily accessible and contain all essential information from the original.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.3",
        title: "Unusual Words",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Write at appropriate reading level",
          "Use plain language",
          "Keep sentences short and clear",
          "Use common vocabulary",
          "Provide simplified versions when needed",
        ],
      },
      {
        category: "General",
        items: [
          "Test reading level with analysis tools",
          "Verify simplified versions are accessible",
          "Ensure simplified versions contain essential information",
          "Test with users if possible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Reading Level",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html",
        type: "Understanding",
      },
      {
        title: "G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G103",
        type: "Techniques",
      },
    ],
  },
  {
    id: "3-1-6",
    number: "3.1.6",
    title: "Pronunciation",
    level: "AAA",
    principle: "understandable",
    guideline: "Readable",
    guidelineNumber: "3.1",
    isNew: false,
    description:
      "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
    summary: "Provide pronunciation for ambiguous words (e.g., 'desert' vs 'desert').",
    whyItMatters: "Screen readers may mispronounce words, changing the meaning.",
    whoBenefits: ["Screen reader users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires providing pronunciation guidance for words that have multiple meanings depending on pronunciation, helping screen readers pronounce them correctly.",
      intent:
        "The intent is to ensure that words with ambiguous pronunciation are correctly pronounced by assistive technologies, preventing misunderstanding.",
    },
    examples: [
      {
        title: "Ambiguous Word Without Pronunciation",
        description: "A word with multiple pronunciations is used without guidance.",
        type: "bad",
        code: `<p>I live in the desert.</p>`,
      },
      {
        title: "Ambiguous Word With Pronunciation",
        description: "Pronunciation is provided using phonetic spelling or IPA.",
        type: "good",
        code: `<p>I live in the <span title="pronounced: DEZ-ert">desert</span>.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Using title for pronunciation -->
<p>
  I live in the <span title="pronounced: DEZ-ert">desert</span>.
</p>

<!-- âœ… Good: Using phonetic spelling -->
<p>
  The word <span title="pronounced: rih-KORD">record</span> can be a noun or verb.
</p>

<!-- âœ… Good: Using IPA notation -->
<p>
  The word <span title="IPA: /ËˆdezÉ™rt/">desert</span> means a dry area.
</p>`,
      react: `// âœ… Good: Pronunciation component
function WordWithPronunciation({ word, pronunciation }) {
  return (
    <span title={'pronounced: ' + pronunciation}>
      {word}
    </span>
  )
}

function Content() {
  return (
    <p>
      I live in the{' '}
      <WordWithPronunciation word="desert" pronunciation="DEZ-ert" />.
    </p>
  )
}`,
    },
    testing: {
      manual: [
        "Identify words with ambiguous pronunciation.",
        "Check that pronunciation guidance is provided.",
        "Verify pronunciation is accessible to screen readers.",
        "Test with screen readers to verify correct pronunciation.",
        "Check that pronunciation guidance is clear and helpful.",
        "Verify pronunciation uses standard notation (phonetic spelling or IPA).",
      ],
      automated: [
        "Tools can detect title attributes but cannot verify pronunciation accuracy.",
        "Use accessibility testing tools to check for pronunciation mechanisms.",
      ],
    },
    complianceRequirements: [
      "Words with ambiguous pronunciation must have pronunciation guidance available.",
      "Pronunciation must be accessible to assistive technologies.",
      "Pronunciation guidance should use standard notation (phonetic spelling, IPA, or clear descriptions).",
      "Only words where meaning depends on pronunciation need guidance.",
      "Pronunciation can be provided via title attributes, tooltips, or inline explanations.",
    ],
    beyondCompliance: [
      "Provide pronunciation for all potentially ambiguous words.",
      "Use consistent pronunciation notation throughout the site.",
      "Test pronunciation with multiple screen readers.",
      "Consider providing audio pronunciation when helpful.",
      "Document pronunciation requirements for content creators.",
    ],
    myths: [
      {
        myth: "Screen readers will figure out the pronunciation from context.",
        reality: "Screen readers may mispronounce ambiguous words, changing the meaning. Provide explicit pronunciation guidance for clarity.",
      },
      {
        myth: "I need to provide pronunciation for every word.",
        reality: "Only words where meaning is ambiguous without pronunciation need guidance. Common words with clear pronunciation don't need it.",
      },
    ],
    commonFailures: [
      {
        failure: "Ambiguous words without pronunciation guidance.",
        solution: "Add pronunciation using title attributes, phonetic spelling, or IPA notation. Example: <span title='pronounced: DEZ-ert'>desert</span>.",
      },
      {
        failure: "Pronunciation guidance that's not accessible to screen readers.",
        solution: "Use title attributes or visible text for pronunciation. Ensure screen readers can access the guidance.",
      },
      {
        failure: "Inconsistent or unclear pronunciation notation.",
        solution: "Use standard notation consistently. Consider using phonetic spelling (DEZ-ert) or IPA notation (/ˈdezərt/).",
      },
    ],
    officialDefinition:
      "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
    detailedSummary:
      "What This Means: This success criterion requires that words with ambiguous pronunciation (words that can be pronounced differently with different meanings, like 'desert' vs 'desert', 'record' vs 'record') have pronunciation guidance available. This helps screen readers pronounce them correctly and prevents misunderstanding.\n\nWhy It's Important: Screen readers may mispronounce words with multiple possible pronunciations, which can change the meaning and make content confusing or incorrect. For example, 'I live in the desert' could be misunderstood if 'desert' is pronounced as 'de-ZERT' (to abandon) instead of 'DEZ-ert' (dry area). Providing pronunciation guidance ensures screen readers pronounce words correctly.\n\nIn Practice: Use title attributes, phonetic spelling, or IPA (International Phonetic Alphabet) notation to provide pronunciation. For example: <span title='pronounced: DEZ-ert'>desert</span> or using IPA: <span title='IPA: /ˈdezərt/'>desert</span>. Only words where meaning is ambiguous without pronunciation need guidance. Common words with clear pronunciation don't require it.",
    keyTerms: [
      {
        term: "Pronunciation",
        definition: "The way in which a word is spoken or pronounced.",
        context: "Pronunciation guidance must be provided for words where meaning depends on pronunciation.",
      },
      {
        term: "Ambiguous Pronunciation",
        definition: "Words that can be pronounced in multiple ways with different meanings (e.g., 'desert' can mean to abandon or a dry area).",
        context: "Only words with ambiguous pronunciation require pronunciation guidance.",
      },
      {
        term: "Phonetic Spelling",
        definition: "A way of representing pronunciation using familiar letters and symbols (e.g., 'DEZ-ert' for desert).",
        context: "Phonetic spelling can be used to provide pronunciation guidance in an accessible way.",
      },
    ],
    relatedCriteria: [
      {
        number: "3.1.1",
        title: "Language of Page",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add title attributes with pronunciation",
          "Use phonetic spelling or IPA notation",
          "Ensure pronunciation is accessible",
        ],
      },
      {
        category: "Content",
        items: [
          "Identify ambiguous words",
          "Provide pronunciation guidance",
          "Use consistent notation",
        ],
      },
      {
        category: "General",
        items: [
          "Test with screen readers",
          "Verify pronunciation is announced",
          "Check notation consistency",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Pronunciation",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html",
        type: "Understanding",
      },
      {
        title: "G102: Providing the expansion or explanation of an abbreviation",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G102",
        type: "Techniques",
      },
    ],
  },
]