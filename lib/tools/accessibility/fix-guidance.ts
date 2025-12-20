/**
 * Fix Guidance for Accessibility Violations
 * Provides step-by-step instructions, code examples, and testing checklists
 */

export interface FixStep {
  step: number
  title: string
  description: string
  codeExample?: {
    before: string
    after: string
    language: string
  }
}

export interface TestingStep {
  method: string
  description: string
  tool?: string
}

export interface FixGuidance {
  ruleId: string
  title: string
  summary: string
  steps: FixStep[]
  testingChecklist: TestingStep[]
  resources: Array<{
    title: string
    url: string
  }>
  commonMistakes: string[]
  quickTip?: string
}

// Comprehensive fix guidance for common violations
export const FIX_GUIDANCE_DATABASE: Record<string, FixGuidance> = {
  'color-contrast': {
    ruleId: 'color-contrast',
    title: 'Color Contrast',
    summary: 'Ensure text has sufficient color contrast against its background for readability.',
    steps: [
      {
        step: 1,
        title: 'Identify the contrast ratio',
        description: 'Use a contrast checker tool to measure the current contrast ratio between text and background colors.',
      },
      {
        step: 2,
        title: 'Adjust colors to meet requirements',
        description: 'For normal text, aim for at least 4.5:1 contrast ratio. For large text (18px+ or 14px+ bold), aim for at least 3:1.',
        codeExample: {
          before: `.low-contrast {\n  color: #767676;\n  background: #ffffff;\n  /* Contrast ratio: 4.48:1 (fails for small text) */\n}`,
          after: `.good-contrast {\n  color: #595959;\n  background: #ffffff;\n  /* Contrast ratio: 7:1 (passes AA and AAA) */\n}`,
          language: 'css',
        },
      },
      {
        step: 3,
        title: 'Test with different themes',
        description: 'If your site has dark mode, ensure contrast works in all color schemes.',
      },
    ],
    testingChecklist: [
      { method: 'Automated', description: 'Run axe-core or similar tool to verify contrast ratios', tool: 'axe DevTools' },
      { method: 'Manual', description: 'Use WebAIM Contrast Checker for specific color pairs', tool: 'WebAIM Contrast Checker' },
      { method: 'Visual', description: 'Review with simulated vision impairments', tool: 'Chrome DevTools' },
    ],
    resources: [
      { title: 'WebAIM Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/' },
      { title: 'Understanding SC 1.4.3', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum' },
    ],
    commonMistakes: [
      'Only checking text contrast, not UI components',
      'Forgetting to check hover/focus states',
      'Not accounting for text over images or gradients',
    ],
    quickTip: 'Use CSS custom properties for colors to make contrast fixes easier to maintain.',
  },

  'image-alt': {
    ruleId: 'image-alt',
    title: 'Image Alternative Text',
    summary: 'All images must have alternative text that describes their content or purpose.',
    steps: [
      {
        step: 1,
        title: 'Determine image purpose',
        description: 'Decide if the image is informative (conveys information), decorative (purely visual), or functional (serves as a link or button).',
      },
      {
        step: 2,
        title: 'Add appropriate alt text',
        description: 'For informative images, describe the content. For decorative images, use empty alt (alt=""). For functional images, describe the action.',
        codeExample: {
          before: `<img src="chart.png">\n<img src="decorative-border.png">\n<a href="/home"><img src="logo.png"></a>`,
          after: `<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024">\n<img src="decorative-border.png" alt="">\n<a href="/home"><img src="logo.png" alt="Company Name - Go to homepage"></a>`,
          language: 'html',
        },
      },
      {
        step: 3,
        title: 'Keep alt text concise',
        description: 'Aim for brief, meaningful descriptions. Avoid starting with "Image of" or "Picture of".',
      },
    ],
    testingChecklist: [
      { method: 'Automated', description: 'Run accessibility checker to find missing alt attributes', tool: 'axe DevTools' },
      { method: 'Screen Reader', description: 'Navigate images with a screen reader to verify alt text makes sense', tool: 'NVDA/VoiceOver' },
      { method: 'Manual', description: 'Review each image type and verify appropriate alt text strategy', tool: 'None' },
    ],
    resources: [
      { title: 'Alt Text Decision Tree', url: 'https://www.w3.org/WAI/tutorials/images/decision-tree/' },
      { title: 'Understanding SC 1.1.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content' },
    ],
    commonMistakes: [
      'Using filename as alt text',
      'Adding alt text to purely decorative images',
      'Describing the image type instead of content ("photo of...")',
      'Making alt text too long (over 125 characters)',
    ],
    quickTip: 'Think about what you would say if reading the page to someone over the phone.',
  },

  'button-name': {
    ruleId: 'button-name',
    title: 'Button Accessible Name',
    summary: 'All buttons must have an accessible name that describes their purpose.',
    steps: [
      {
        step: 1,
        title: 'Identify buttons without accessible names',
        description: 'Look for buttons that only contain icons, images, or are empty.',
      },
      {
        step: 2,
        title: 'Add accessible name using appropriate method',
        description: 'Use visible text, aria-label, or aria-labelledby to provide a name.',
        codeExample: {
          before: `<button><svg>...</svg></button>\n<button></button>\n<button><img src="save.png"></button>`,
          after: `<button aria-label="Close dialog"><svg>...</svg></button>\n<button>Submit Form</button>\n<button><img src="save.png" alt="Save document"></button>`,
          language: 'html',
        },
      },
      {
        step: 3,
        title: 'Ensure name describes the action',
        description: 'The name should tell users what happens when they activate the button.',
      },
    ],
    testingChecklist: [
      { method: 'Automated', description: 'Scan for buttons without accessible names', tool: 'axe DevTools' },
      { method: 'Screen Reader', description: 'Tab through all buttons and verify announcements make sense', tool: 'NVDA/VoiceOver' },
      { method: 'Keyboard', description: 'Ensure all buttons are focusable and activatable with Enter/Space', tool: 'Keyboard' },
    ],
    resources: [
      { title: 'Accessible Name Computation', url: 'https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/' },
      { title: 'Understanding SC 4.1.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value' },
    ],
    commonMistakes: [
      'Using "Click here" or "Submit" without context',
      'Duplicating visible text in aria-label',
      'Using title attribute instead of aria-label',
    ],
    quickTip: 'Prefer visible text labels when possible. Use aria-label only for icon-only buttons.',
  },

  'link-name': {
    ruleId: 'link-name',
    title: 'Link Accessible Name',
    summary: 'All links must have an accessible name that describes their destination or purpose.',
    steps: [
      {
        step: 1,
        title: 'Find links without accessible names',
        description: 'Look for links with only images, icons, or whitespace.',
      },
      {
        step: 2,
        title: 'Add descriptive link text',
        description: 'The link text should describe where the link goes or what it does.',
        codeExample: {
          before: `<a href="/report.pdf"><img src="pdf-icon.png"></a>\n<a href="/about">Click here</a>\n<a href="https://twitter.com"><i class="fa fa-twitter"></i></a>`,
          after: `<a href="/report.pdf"><img src="pdf-icon.png" alt="Download Annual Report (PDF)"></a>\n<a href="/about">Learn more about our company</a>\n<a href="https://twitter.com" aria-label="Follow us on Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>`,
          language: 'html',
        },
      },
    ],
    testingChecklist: [
      { method: 'Screen Reader', description: 'Navigate links using the links list (Insert+F7 in NVDA)', tool: 'NVDA' },
      { method: 'Automated', description: 'Check for empty or generic link text', tool: 'axe DevTools' },
      { method: 'Manual', description: 'Review link text out of context - does it still make sense?', tool: 'None' },
    ],
    resources: [
      { title: 'Link Purpose (In Context)', url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context' },
    ],
    commonMistakes: [
      'Using "click here" or "read more" without context',
      'Having multiple links with the same text going to different places',
      'Not indicating file type for downloads',
    ],
    quickTip: 'Write link text that would make sense in a list of all links on the page.',
  },

  'label': {
    ruleId: 'label',
    title: 'Form Input Labels',
    summary: 'All form inputs must have associated labels that describe their purpose.',
    steps: [
      {
        step: 1,
        title: 'Identify unlabeled inputs',
        description: 'Find form inputs without associated <label> elements or aria-label attributes.',
      },
      {
        step: 2,
        title: 'Add labels using the appropriate method',
        description: 'Use the <label> element with for/id matching, or aria-label for inputs without visible labels.',
        codeExample: {
          before: `<input type="text" placeholder="Enter email">\n<input type="search">`,
          after: `<label for="email">Email Address</label>\n<input type="text" id="email" placeholder="Enter email">\n\n<input type="search" aria-label="Search products">`,
          language: 'html',
        },
      },
      {
        step: 3,
        title: 'Verify label association',
        description: 'Clicking the label should focus the input. Test this for each form field.',
      },
    ],
    testingChecklist: [
      { method: 'Manual', description: 'Click each label and verify the input receives focus', tool: 'Browser' },
      { method: 'Screen Reader', description: 'Focus each input and verify the label is announced', tool: 'NVDA/VoiceOver' },
      { method: 'Automated', description: 'Scan for inputs without programmatic labels', tool: 'axe DevTools' },
    ],
    resources: [
      { title: 'Labeling Controls', url: 'https://www.w3.org/WAI/tutorials/forms/labels/' },
      { title: 'Understanding SC 3.3.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions' },
    ],
    commonMistakes: [
      'Using placeholder as the only label',
      'Mismatching for and id attributes',
      'Wrapping input in label but also using for attribute',
    ],
    quickTip: 'The <label> element is the most robust method - use it whenever possible.',
  },

  'html-has-lang': {
    ruleId: 'html-has-lang',
    title: 'HTML Language Attribute',
    summary: 'The page must have a lang attribute on the <html> element.',
    steps: [
      {
        step: 1,
        title: 'Add lang attribute to html element',
        description: 'Add the lang attribute with the appropriate language code.',
        codeExample: {
          before: `<!DOCTYPE html>\n<html>\n  <head>...`,
          after: `<!DOCTYPE html>\n<html lang="en">\n  <head>...`,
          language: 'html',
        },
      },
      {
        step: 2,
        title: 'Use correct language code',
        description: 'Use ISO 639-1 language codes (en, es, fr, de, etc.) or more specific codes (en-US, en-GB).',
      },
    ],
    testingChecklist: [
      { method: 'Automated', description: 'Verify lang attribute exists and is valid', tool: 'axe DevTools' },
      { method: 'Screen Reader', description: 'Confirm correct pronunciation for the page language', tool: 'NVDA/VoiceOver' },
    ],
    resources: [
      { title: 'Language Tags', url: 'https://www.w3.org/International/articles/language-tags/' },
      { title: 'Understanding SC 3.1.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page' },
    ],
    commonMistakes: [
      'Using incorrect language codes',
      'Not updating lang when page content is in a different language',
    ],
    quickTip: 'For multilingual sites, also use the lang attribute on elements with different languages.',
  },

  'document-title': {
    ruleId: 'document-title',
    title: 'Document Title',
    summary: 'Every page must have a descriptive <title> element.',
    steps: [
      {
        step: 1,
        title: 'Add or update the title element',
        description: 'Include a descriptive title that identifies the page content and website.',
        codeExample: {
          before: `<head>\n  <meta charset="utf-8">\n</head>`,
          after: `<head>\n  <meta charset="utf-8">\n  <title>Contact Us | Company Name</title>\n</head>`,
          language: 'html',
        },
      },
      {
        step: 2,
        title: 'Make titles unique and descriptive',
        description: 'Each page should have a unique title that describes its specific content.',
      },
    ],
    testingChecklist: [
      { method: 'Browser', description: 'Check browser tab for descriptive title', tool: 'Browser' },
      { method: 'Automated', description: 'Verify title element exists and is not empty', tool: 'axe DevTools' },
    ],
    resources: [
      { title: 'Understanding SC 2.4.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled' },
    ],
    commonMistakes: [
      'Using the same title for all pages',
      'Making titles too generic ("Home")',
      'Not including the site name',
    ],
    quickTip: 'Format: "Page Name | Site Name" or "Page Name - Site Name"',
  },

  'heading-order': {
    ruleId: 'heading-order',
    title: 'Heading Order',
    summary: 'Headings must follow a logical order without skipping levels.',
    steps: [
      {
        step: 1,
        title: 'Review heading structure',
        description: 'Examine all headings on the page and their hierarchy.',
      },
      {
        step: 2,
        title: 'Fix skipped heading levels',
        description: 'Ensure headings descend in order (h1 → h2 → h3) without skipping.',
        codeExample: {
          before: `<h1>Page Title</h1>\n<h3>Section</h3> <!-- Skipped h2 -->\n<h5>Subsection</h5> <!-- Skipped h4 -->`,
          after: `<h1>Page Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>`,
          language: 'html',
        },
      },
      {
        step: 3,
        title: 'Use CSS for visual styling',
        description: 'Use CSS to adjust heading appearance rather than choosing heading levels for visual reasons.',
      },
    ],
    testingChecklist: [
      { method: 'Browser Extension', description: 'Use headings outline tool to visualize structure', tool: 'HeadingsMap' },
      { method: 'Screen Reader', description: 'Navigate by headings (H key in NVDA) to verify logical order', tool: 'NVDA' },
    ],
    resources: [
      { title: 'Headings Tutorial', url: 'https://www.w3.org/WAI/tutorials/page-structure/headings/' },
      { title: 'Understanding SC 1.3.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships' },
    ],
    commonMistakes: [
      'Using headings for visual styling instead of structure',
      'Multiple h1 elements on a page',
      'Starting content with h3 or h4',
    ],
    quickTip: 'Think of headings as a table of contents for the page.',
  },
}

/**
 * Get fix guidance for a specific rule
 */
export function getFixGuidance(ruleId: string): FixGuidance | null {
  return FIX_GUIDANCE_DATABASE[ruleId] || null
}

/**
 * Get quick tip for a rule
 */
export function getQuickTip(ruleId: string): string | null {
  const guidance = FIX_GUIDANCE_DATABASE[ruleId]
  return guidance?.quickTip || null
}

/**
 * Get all available fix guidance rule IDs
 */
export function getAvailableGuidanceRules(): string[] {
  return Object.keys(FIX_GUIDANCE_DATABASE)
}

/**
 * Check if fix guidance is available for a rule
 */
export function hasFixGuidance(ruleId: string): boolean {
  return ruleId in FIX_GUIDANCE_DATABASE
}

/**
 * Generate fix steps as markdown
 */
export function formatFixGuidanceAsMarkdown(guidance: FixGuidance): string {
  let md = `# ${guidance.title}\n\n`
  md += `${guidance.summary}\n\n`
  
  md += `## Steps to Fix\n\n`
  guidance.steps.forEach(step => {
    md += `### ${step.step}. ${step.title}\n\n`
    md += `${step.description}\n\n`
    if (step.codeExample) {
      md += `**Before:**\n\`\`\`${step.codeExample.language}\n${step.codeExample.before}\n\`\`\`\n\n`
      md += `**After:**\n\`\`\`${step.codeExample.language}\n${step.codeExample.after}\n\`\`\`\n\n`
    }
  })
  
  md += `## Testing Checklist\n\n`
  guidance.testingChecklist.forEach(item => {
    md += `- [ ] **${item.method}:** ${item.description}`
    if (item.tool) md += ` (${item.tool})`
    md += `\n`
  })
  
  md += `\n## Common Mistakes to Avoid\n\n`
  guidance.commonMistakes.forEach(mistake => {
    md += `- ${mistake}\n`
  })
  
  if (guidance.quickTip) {
    md += `\n> **💡 Quick Tip:** ${guidance.quickTip}\n`
  }
  
  md += `\n## Resources\n\n`
  guidance.resources.forEach(resource => {
    md += `- [${resource.title}](${resource.url})\n`
  })
  
  return md
}

