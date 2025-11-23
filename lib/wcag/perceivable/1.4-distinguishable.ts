import type { SuccessCriterion } from '../types'

// Guideline 1.4: Distinguishable
export const distinguishableCriteria: SuccessCriterion[] = [
{
    id: "1-4-1",
    number: "1.4.1",
    title: "Use of Color",
    level: "A",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
    officialDefinition:
      "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
    summary: "Never rely on color alone to convey information. Add icons, text labels, or patterns.",
    detailedSummary:
      "What This Means: This success criterion requires that color cannot be the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. Information must be available through additional means such as icons, text labels, patterns, shapes, or other visual indicators.\n\nWhy It's Important: Approximately 8% of men and 0.5% of women have some form of color vision deficiency (color blindness). These users cannot distinguish between certain colors, making color-only information inaccessible. Additionally, screen reader users cannot perceive color at all. By providing multiple visual indicators, we ensure that all users can access the information regardless of their ability to perceive color.\n\nIn Practice: When using color to convey information (like red for errors, green for success, or colored status indicators), always add additional indicators. Use icons (⚠️ for errors, ✓ for success), text labels ('Error:', 'Required:', 'Status:'), patterns, shapes, or other visual cues. For links, ensure they're distinguishable by more than just color (underline, bold, or icons). For form validation, use icons and text in addition to color coding.",
    whyItMatters: "Color blind users and screen reader users cannot perceive color differences.",
    whoBenefits: ["Color blind users", "Blind users", "Users with low vision"],
    details: {
      introduction:
        "This criterion ensures that information conveyed through color is also available through other means, making it accessible to users who cannot perceive color.",
      intent:
        "The intent is to ensure that all users can access information that is conveyed through color. This includes using icons, text labels, patterns, or other visual indicators in addition to color.",
    },
    examples: [
      {
        title: "Error Message Using Only Red Color",
        description: "An error is indicated only by red text, with no other indicator. Color blind users may not see the difference.",
        type: "bad",
        code: '<span style="color: red;">Error occurred</span>',
      },
      {
        title: "Error Message with Icon and Color",
        description: "An error is indicated by both red color and an error icon, making it accessible to all users.",
        type: "good",
        code: '<span style="color: red;"><span aria-label="Error">⚠️</span> Error occurred</span>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Color only -->
<p style="color: red;">Required field</p>
<button style="background: red;">Delete</button>

<!-- ✅ Good: Color + icon -->
<p><span aria-label="Required">*</span> <span style="color: red;">Required field</span></p>
<button style="background: red;" aria-label="Delete item">🗑️ Delete</button>

<!-- ✅ Good: Color + text label -->
<p><strong>Required:</strong> <span style="color: red;">This field is required</span></p>`,
      react: `// ❌ Bad: Color only
function ErrorMessage() {
  return <p style={{ color: 'red' }}>Error occurred</p>
}

// ✅ Good: Color + icon + text
function ErrorMessage() {
  return (
    <p>
      <span aria-label="Error">⚠️</span>{' '}
      <span style={{ color: 'red' }}>Error occurred</span>
    </p>
  )
}`,
    },
    testing: {
      manual: [
        "Review all content that uses color to convey information.",
        "Check if the information is also available through other means (icons, text, patterns).",
        "Use a color blindness simulator to view the page and verify information is still accessible.",
        "Turn off CSS or view in grayscale to test if information is still conveyed.",
        "Use a screen reader to verify that color-coded information has text alternatives.",
        "Check form validation messages, status indicators, and links for color-only information.",
      ],
      automated: [
        "Use axe DevTools to detect color-only information.",
        "Use WAVE to identify potential color contrast and color-only issues.",
        "Use browser extensions to simulate color blindness and test accessibility.",
      ],
    },
    complianceRequirements: [
      "Information conveyed through color must also be available through other visual means (icons, text, patterns).",
      "Links must be distinguishable by more than just color (underline, bold, or icon in addition to color).",
      "Form validation errors must include text or icons, not just color changes.",
      "Status indicators (success, error, warning) must use icons or text labels in addition to color.",
      "Charts and graphs must use patterns, labels, or other indicators in addition to color.",
      "Required form fields must be indicated by more than just color (asterisk, text label, or icon).",
    ],
    beyondCompliance: [
      "Use multiple visual indicators (color + icon + text) for important information.",
      "Ensure color choices work for different types of color blindness (protanopia, deuteranopia, tritanopia).",
      "Provide high contrast alternatives for color-coded information.",
      "Use patterns or textures in addition to color for charts and data visualizations.",
      "Test with actual color blind users to verify accessibility.",
      "Consider providing a color-blind friendly mode or theme.",
      "Use semantic HTML and ARIA attributes to convey information programmatically.",
    ],
    myths: [
      {
        myth: "If I use green for success and red for error, that's accessible.",
        reality: "Color alone is not sufficient. Users with color blindness may not distinguish these colors. Add icons, text labels, or other indicators.",
      },
      {
        myth: "Links are always blue, so they're accessible.",
        reality: "If links are only distinguished by color (even if it's the default blue), they may not be accessible to color blind users. Add underlines or other visual indicators.",
      },
      {
        myth: "I can use color if I also provide a text description somewhere else on the page.",
        reality: "The alternative must be immediately associated with the color-coded element. Users shouldn't have to search elsewhere to understand the information.",
      },
    ],
    commonFailures: [
      {
        failure: "Links distinguished only by color (no underline or other indicator).",
        solution: "Add underlines, bold text, or icons to links. Ensure links are distinguishable even in grayscale.",
      },
      {
        failure: "Form validation errors shown only with red color.",
        solution: "Add error icons (⚠️) and explicit error text messages. Use aria-invalid and aria-describedby for screen readers.",
      },
      {
        failure: "Required fields indicated only with red asterisk or red text.",
        solution: "Add text labels like 'Required' or use multiple indicators (asterisk + text + color).",
      },
      {
        failure: "Charts and graphs using only color to distinguish data series.",
        solution: "Add patterns, textures, labels, or different shapes in addition to color. Provide a legend with multiple indicators.",
      },
      {
        failure: "Status indicators (online/offline, active/inactive) using only color.",
        solution: "Add icons, text labels, or other visual indicators. Use semantic HTML and ARIA attributes.",
      },
    ],
    keyTerms: [
      {
        term: "Visual Means",
        definition: "A means of conveying information through visual presentation, such as color, size, shape, or position.",
        context: "Color cannot be the only visual means of conveying information.",
      },
      {
        term: "Color Vision Deficiency",
        definition: "A condition where a person cannot distinguish between certain colors, commonly called color blindness.",
        context: "Approximately 8% of men and 0.5% of women have some form of color vision deficiency.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.3.3",
        title: "Sensory Characteristics",
        relationship: "Related to",
      },
      {
        number: "1.4.3",
        title: "Contrast (Minimum)",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Add icons to color-coded information",
          "Add text labels to color indicators",
          "Use patterns or shapes in addition to color",
          "Ensure links have underlines or other indicators",
          "Add error icons and text to form validation",
        ],
      },
      {
        category: "HTML",
        items: [
          "Use semantic HTML for status indicators",
          "Add aria-label or aria-labelledby for color-coded elements",
          "Use aria-invalid for form errors",
          "Ensure all interactive elements have accessible names",
        ],
      },
      {
        category: "General",
        items: [
          "Test with color blindness simulators",
          "View content in grayscale to verify accessibility",
          "Test with screen readers to verify text alternatives",
          "Verify information is accessible without color",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Use of Color",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
        type: "Understanding",
      },
      {
        title: "G14: Ensuring that information conveyed by color differences is also available in text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G14",
        type: "Techniques",
      },
      {
        title: "G205: Including a text cue whenever color cues are used",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G205",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-2",
    number: "1.4.2",
    title: "Audio Control",
    level: "A",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
    officialDefinition:
      "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
    summary: "Don't auto-play audio for more than 3 seconds without a way to stop it.",
    detailedSummary:
      "What This Means: This success criterion requires that if audio content plays automatically for more than 3 seconds, users must have a way to pause, stop, or control the volume independently from the system volume. This prevents auto-playing audio from interfering with assistive technologies and allows users to control their audio environment.\n\nWhy It's Important: Auto-playing audio can interfere with screen reader speech output, making it difficult or impossible for screen reader users to access content. It can also be disruptive for users with attention disorders, cognitive disabilities, or anyone who needs to control their audio environment. Providing controls allows users to manage audio according to their needs.\n\nIn Practice: If you include auto-playing audio (background music, narration, sound effects), provide visible pause/stop controls that are easy to find and use. Alternatively, provide independent volume control that doesn't affect the system volume. Audio that plays for 3 seconds or less is exempt, as is audio that the user initiates. Ensure controls are keyboard accessible and clearly labeled.",
    whyItMatters: "Auto-playing audio interferes with screen reader speech output.",
    whoBenefits: ["Screen reader users", "Users with attention disorders"],
    details: {
      introduction:
        "This criterion prevents auto-playing audio from interfering with assistive technologies like screen readers.",
      intent:
        "The intent is to ensure that users can control any audio that plays automatically. Audio that plays for more than 3 seconds must have a pause/stop control or independent volume control.",
    },
    examples: [
      {
        title: "Auto-playing Background Music",
        description: "Background music starts automatically and plays continuously with no way to stop it.",
        type: "bad",
        code: `<audio src="background-music.mp3" autoplay loop></audio>`,
      },
      {
        title: "Audio with Controls",
        description: "Audio has visible controls allowing users to pause, stop, or adjust volume.",
        type: "good",
        code: `<audio src="background-music.mp3" controls></audio>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Auto-playing without controls -->
<audio src="music.mp3" autoplay loop></audio>

<!-- âœ… Good: Audio with controls -->
<audio src="music.mp3" controls></audio>

<!-- âœ… Good: Auto-play with pause button -->
<audio id="bgAudio" src="music.mp3" autoplay loop></audio>
<button onclick="document.getElementById('bgAudio').pause()">
  Pause Background Music
</button>`,
      react: `// âœ… Good: Controlled audio playback
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'} Background Music
      </button>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Check if any audio plays automatically on page load",
        "If audio plays for more than 3 seconds, verify pause/stop control exists",
        "Test that controls actually stop the audio",
        "Verify controls are keyboard accessible",
      ],
      automated: ["Tools can detect <audio> tags with autoplay but cannot verify control functionality"],
    },
    keyTerms: [
      {
        term: "Audio Control",
        definition: "A mechanism that allows users to pause, stop, or control the volume of audio content.",
        context: "Audio that plays automatically for more than 3 seconds must have controls available.",
      },
      {
        term: "Independent Volume Control",
        definition: "A volume control that affects only the audio on the web page, not the overall system volume.",
        context: "Providing independent volume control is an alternative to pause/stop controls.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.2",
        title: "Pause, Stop, Hide",
        relationship: "Related to",
      },
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add controls attribute to <audio> elements",
          "Provide visible pause/stop buttons for auto-playing audio",
          "Ensure controls are keyboard accessible",
          "Label controls clearly (e.g., 'Pause Background Music')",
        ],
      },
      {
        category: "General",
        items: [
          "Identify any audio that plays automatically",
          "Verify audio controls work correctly",
          "Test that controls are easy to find and use",
          "Ensure controls don't require mouse interaction",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Audio Control",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html",
        type: "Understanding",
      },
      {
        title: "G60: Playing a sound that turns off automatically within three seconds",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G60",
        type: "Techniques",
      },
      {
        title: "G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G170",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-3",
    number: "1.4.3",
    title: "Contrast (Minimum)",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description: "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.",
    officialDefinition:
      "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: (Level AA) Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement; Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.",
    summary: "Text must have at least 4.5:1 contrast ratio with its background (3:1 for large text).",
    detailedSummary:
      "What This Means: This success criterion requires that text and images of text must have a minimum contrast ratio of 4.5:1 with their background. Large text (18pt or larger, or 14pt bold or larger) must have at least 3:1 contrast ratio. This ensures text is readable by users with low vision or in various lighting conditions.\n\nWhy It's Important: Low contrast text is difficult or impossible to read for users with low vision, color blindness, or in bright sunlight. Approximately 1 in 12 men and 1 in 200 women have some form of color vision deficiency, and many users have low vision due to aging or other conditions. Sufficient contrast makes text readable for a wider audience.\n\nIn Practice: Use contrast checking tools to verify text meets the 4.5:1 ratio (3:1 for large text). Common compliant combinations include dark text on light backgrounds or light text on dark backgrounds. Avoid light gray text on white, yellow text on white, or similar low-contrast combinations. Test with actual users when possible, as some combinations may technically meet the ratio but still be difficult to read.",
    whyItMatters: "Low contrast makes text difficult or impossible to read for users with low vision.",
    whoBenefits: ["Users with low vision", "Users with color blindness", "Older users"],
    details: {
      introduction:
        "This criterion ensures that text has sufficient contrast with its background to be readable by users with low vision or in various lighting conditions.",
      intent:
        "The intent is to provide enough contrast between text and its background so that it can be read by people with moderately low vision. The 4.5:1 ratio applies to normal text, while 3:1 applies to large text (18pt+ or 14pt+ bold).",
    },
    examples: [
      {
        title: "Low Contrast Text",
        description: "Light gray text (#CCCCCC) on white background has only 1.6:1 contrast ratio, making it hard to read.",
        type: "bad",
        code: '<p style="color: #CCCCCC; background: #FFFFFF;">Hard to read text</p>',
      },
      {
        title: "Sufficient Contrast Text",
        description: "Dark gray text (#333333) on white background has 12.6:1 contrast ratio, meeting AA requirements.",
        type: "good",
        code: '<p style="color: #333333; background: #FFFFFF;">Easy to read text</p>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Low contrast -->
<p style="color: #999999; background: #ffffff;">Low contrast text</p>

<!-- ✅ Good: Sufficient contrast -->
<p style="color: #333333; background: #ffffff;">High contrast text</p>

<!-- ✅ Good: Large text with 3:1 contrast -->
<h1 style="color: #666666; background: #ffffff; font-size: 24pt;">Large heading</h1>`,
      css: `/* ❌ Bad: Insufficient contrast */
.low-contrast {
  color: #cccccc; /* 1.6:1 contrast */
  background: #ffffff;
}

/* ✅ Good: Sufficient contrast for normal text */
.normal-text {
  color: #333333; /* 12.6:1 contrast */
  background: #ffffff;
}

/* ✅ Good: Large text with adequate contrast */
.large-text {
  color: #666666; /* 5.7:1 contrast */
  font-size: 18pt;
  background: #ffffff;
}`,
    },
    testing: {
      manual: [
        "Use a contrast checker tool (WebAIM Contrast Checker, Colour Contrast Analyser) to measure text contrast ratios.",
        "Verify normal text (under 18pt, or under 14pt bold) has at least 4.5:1 contrast ratio.",
        "Verify large text (18pt+ or 14pt+ bold) has at least 3:1 contrast ratio.",
        "Test text on all background colors it appears on (including gradients, images).",
        "Check text in different states (hover, focus, disabled) for sufficient contrast.",
        "View the page in different lighting conditions or on different monitors.",
        "Test with browser zoom at different levels to ensure contrast remains adequate.",
      ],
      automated: [
        "Use axe DevTools to check contrast ratios and flag AA violations.",
        "Use WAVE to identify low contrast text issues.",
        "Use Lighthouse accessibility audit to check contrast compliance.",
        "Use Colour Contrast Analyser (CCA) browser extension for detailed analysis.",
      ],
    },
    complianceRequirements: [
      "Normal text (under 18pt, or under 14pt bold) must have at least 4.5:1 contrast ratio with its background.",
      "Large text (18pt or larger, or 14pt+ bold) must have at least 3:1 contrast ratio with its background.",
      "Text on images or gradients must meet contrast requirements on all parts of the background.",
      "Text in different states (hover, focus, active) must maintain sufficient contrast.",
      "Placeholder text in form fields must meet contrast requirements if it's the only label.",
      "Text that is part of a logo or brand name is exempt from this requirement.",
    ],
    beyondCompliance: [
      "Aim for 7:1 contrast ratio (AAA level) for better readability, especially for users with more severe vision loss.",
      "Test contrast in various lighting conditions and on different display types.",
      "Consider providing a high contrast mode or theme for users who need it.",
      "Ensure contrast ratios are maintained when users customize text colors.",
      "Use tools that check contrast in real-time during design and development.",
      "Test with actual users with low vision to verify readability.",
      "Consider the contrast of text on complex backgrounds (images, gradients, patterns).",
    ],
    myths: [
      {
        myth: "If text is readable to me, it has enough contrast.",
        reality: "What's readable to you may not be readable to users with low vision. Always use a contrast checker tool to verify the exact ratio.",
      },
      {
        myth: "White text on any dark background always meets contrast requirements.",
        reality: "White (#FFFFFF) on light gray (#CCCCCC) only has 1.6:1 contrast. Always verify with a contrast checker.",
      },
      {
        myth: "I can use any color combination as long as it looks good.",
        reality: "Aesthetic choices must meet contrast requirements. You may need to adjust colors to ensure accessibility while maintaining design quality.",
      },
    ],
    commonFailures: [
      {
        failure: "Light gray text on white background (insufficient contrast).",
        solution: "Use darker text colors. For white backgrounds, use at least #767676 for normal text or #595959 for better contrast.",
      },
      {
        failure: "Text on images or gradients that doesn't meet contrast on all parts.",
        solution: "Add a semi-transparent background behind text, use text shadows, or ensure the image/gradient has sufficient contrast throughout.",
      },
      {
        failure: "Placeholder text that's too light and serves as the only label.",
        solution: "Ensure placeholder text meets 4.5:1 contrast, or provide visible labels in addition to placeholders.",
      },
      {
        failure: "Links that don't meet contrast requirements, especially when not underlined.",
        solution: "Ensure link colors meet contrast requirements. Consider adding underlines or using darker link colors.",
      },
      {
        failure: "Disabled form fields with low contrast text.",
        solution: "Disabled fields should still meet contrast requirements, or clearly indicate they're disabled through other means.",
      },
    ],
    keyTerms: [
      {
        term: "Contrast Ratio",
        definition: "The relative luminance of the lighter of the colors (foreground or background) compared to the relative luminance of the darker of the colors.",
        context: "Contrast ratio is calculated using a formula that compares the relative luminance of text and background colors. A ratio of 4.5:1 is required for normal text.",
      },
      {
        term: "Large Text",
        definition: "Text that is at least 18 point (typically 24px) or 14 point (typically 18.67px) bold or larger.",
        context: "Large text requires a minimum contrast ratio of 3:1, which is lower than the 4.5:1 required for normal text.",
      },
      {
        term: "Images of Text",
        definition: "Text that has been rendered into a non-text format (such as an image).",
        context: "Images of text must meet the same contrast requirements as regular text, unless the image is essential or the text is part of a logo.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.6",
        title: "Contrast (Enhanced)",
        relationship: "Higher level requirement",
      },
      {
        number: "1.4.1",
        title: "Use of Color",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use contrast checking tools to verify all text meets 4.5:1 ratio",
          "Ensure large text (18pt+ or 14pt+ bold) meets 3:1 ratio",
          "Test text on all background colors including gradients",
          "Verify contrast in all text states (normal, hover, focus, disabled)",
          "Check text on images and complex backgrounds",
        ],
      },
      {
        category: "Content",
        items: [
          "Avoid light gray text on white backgrounds",
          "Use darker text colors for better contrast",
          "Ensure placeholder text meets contrast if used as label",
          "Verify link colors meet contrast requirements",
        ],
      },
      {
        category: "General",
        items: [
          "Use WebAIM Contrast Checker or similar tools",
          "Test with browser zoom at different levels",
          "Verify contrast in different lighting conditions",
          "Consider providing high contrast mode",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Contrast (Minimum)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
        type: "Understanding",
      },
      {
        title: "G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G18",
        type: "Techniques",
      },
      {
        title: "G145: Ensuring that a contrast ratio of at least 3:1 exists for large text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G145",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-4",
    number: "1.4.4",
    title: "Resize text",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    officialDefinition:
      "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    summary: "Ensure text can be zoomed to 200% without breaking the layout or hiding content.",
    detailedSummary:
      "What This Means: This success criterion requires that text must be resizable up to 200% using browser zoom controls (not assistive technology) without losing content or functionality. This means layouts must be flexible enough to accommodate larger text sizes, and content must not be cut off, hidden, or become unusable when text is enlarged.\n\nWhy It's Important: Users with low vision often need to enlarge text to read it comfortably. If layouts break or content gets cut off when text is zoomed, these users cannot access the information. Fixed-width containers, overflow:hidden, and non-responsive designs often fail this criterion because they don't adapt to larger text sizes.\n\nIn Practice: Use responsive design techniques with relative units (em, rem, %) instead of fixed pixels. Avoid fixed-width containers that don't expand. Use max-width instead of width for containers. Ensure horizontal scrolling doesn't occur at 200% zoom. Test by zooming the browser to 200% and verifying all content remains accessible and functional. Avoid using images of text when possible, as they don't scale well.",
    whyItMatters: "Users with low vision need to enlarge text to read it.",
    whoBenefits: ["Users with low vision", "Older users"],
    details: {
      introduction:
        "This criterion ensures that text can be enlarged up to 200% using browser zoom controls without losing content or functionality.",
      intent:
        "The intent is to ensure that visually rendered text, including text-based controls, can be scaled successfully so that it can be read directly by people with mild visual disabilities without requiring the use of assistive technology such as a screen magnifier.",
    },
    examples: [
      {
        title: "Fixed Width Container",
        description: "Text in a fixed-width container gets cut off when zoomed to 200%.",
        type: "bad",
        code: `<div style="width: 300px; overflow: hidden;">
  <p>This text will be cut off when zoomed...</p>
</div>`,
      },
      {
        title: "Responsive Container",
        description: "Text in a responsive container reflows and remains readable at 200% zoom.",
        type: "good",
        code: `<div style="max-width: 100%;">
  <p>This text will reflow and remain readable when zoomed.</p>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Responsive text container -->
<div style="max-width: 100%; padding: 1rem;">
  <h1>Heading</h1>
  <p>Text that can be zoomed without breaking layout.</p>
</div>

<!-- âŒ Bad: Fixed width with overflow -->
<div style="width: 300px; overflow: hidden;">
  <p>Text that gets cut off when zoomed.</p>
</div>`,
      css: `/* âœ… Good: Use relative units and max-width */
.container {
  max-width: 100%;
  padding: 1rem;
}

.text {
  font-size: 1rem; /* Can be zoomed by browser */
}

/* âŒ Bad: Fixed sizes prevent zooming */
.container {
  width: 300px;
  overflow: hidden;
}

.text {
  font-size: 12px; /* Too small, hard to zoom */
}`,
      react: `// âœ… Good: Responsive text component
function TextContent() {
  return (
    <div className="max-w-full p-4">
      <h1 className="text-2xl">Heading</h1>
      <p className="text-base">Text that scales properly.</p>
    </div>
  )
}

// âŒ Bad: Fixed width component
function TextContent() {
  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <p>Text that gets cut off.</p>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Use browser zoom to increase text size to 200%",
        "Check that all text remains visible and readable",
        "Verify that no content is cut off or hidden",
        "Test that functionality still works at 200% zoom",
        "Check on different screen sizes",
      ],
      automated: ["Tools can check for fixed widths but cannot verify zoom behavior"],
    },
    keyTerms: [
      {
        term: "Resize Text",
        definition: "The ability to increase text size using browser zoom controls without requiring assistive technology.",
        context: "Text must be resizable up to 200% without losing content or functionality.",
      },
      {
        term: "Assistive Technology",
        definition: "Hardware and/or software that acts as a user agent, or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities.",
        context: "This criterion requires text to be resizable without assistive technology, using standard browser zoom.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.10",
        title: "Reflow",
        relationship: "Complements",
      },
      {
        number: "1.4.12",
        title: "Text Spacing",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use relative units (em, rem, %) instead of fixed pixels",
          "Use max-width instead of fixed width for containers",
          "Avoid overflow: hidden that cuts off content",
          "Ensure layouts are responsive and flexible",
          "Test at 200% browser zoom",
        ],
      },
      {
        category: "HTML",
        items: [
          "Avoid fixed-width containers",
          "Use responsive design principles",
          "Ensure content reflows properly when zoomed",
        ],
      },
      {
        category: "General",
        items: [
          "Test by zooming browser to 200%",
          "Verify no horizontal scrolling occurs",
          "Check that all functionality works at 200% zoom",
          "Verify content is not cut off or hidden",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Resize text",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
        type: "Understanding",
      },
      {
        title: "G142: Using a technology that has commonly-available user agents that support zoom",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G142",
        type: "Techniques",
      },
      {
        title: "C28: Specifying the size of text containers using em units",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C28",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-5",
    number: "1.4.5",
    title: "Images of Text",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text.",
    officialDefinition:
      "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text, except for the following: (Level AA) Customizable: The image of text can be visually customized to the user's requirements; Essential: A particular presentation of text is essential to the information being conveyed.",
    summary: "Use real text instead of images of text whenever possible.",
    detailedSummary:
      "What This Means: This success criterion requires using actual text (styled with CSS) instead of images containing text, except when the text appearance is essential (like logos) or when the image can be customized by users. Real text can be resized, recolored, and customized, while images of text are static and cannot be modified by users.\n\nWhy It's Important: Users with low vision often need to customize text appearance (size, color, spacing, font) to read comfortably. Images of text cannot be customized, making them inaccessible to users who need different text presentations. Real text also scales better, works better with screen readers, and can be translated more easily.\n\nIn Practice: Use CSS to style text instead of creating images of text. If you need a specific font or visual effect, use web fonts and CSS properties. Logos are an exception because the visual presentation is essential to the brand. If you must use images of text, ensure they can be customized or provide text alternatives that can be customized.",
    whyItMatters: "Real text scales better and can be customized by users (font, color, spacing).",
    whoBenefits: ["Users with low vision", "Screen reader users"],
    details: {
      introduction:
        "This criterion requires using actual text instead of images containing text, except when the text appearance is essential (like logos or custom fonts that cannot be replicated with CSS).",
      intent:
        "The intent is to encourage authors to use text that can be styled with CSS rather than images of text. Real text can be resized, recolored, and customized by users, while images of text cannot.",
    },
    examples: [
      {
        title: "Image of Heading",
        description: "A heading is created as an image, preventing users from customizing it.",
        type: "bad",
        code: `<img src="heading.png" alt="Welcome to Our Site" />`,
      },
      {
        title: "Styled Text Heading",
        description: "A heading uses real text with CSS styling, allowing full customization.",
        type: "good",
        code: `<h1 style="font-family: 'Custom Font'; color: #333;">Welcome to Our Site</h1>`,
      },
      {
        title: "Logo Exception",
        description: "A company logo is an image of text, which is acceptable as the visual presentation is essential.",
        type: "good",
        code: `<img src="logo.png" alt="Company Name" />`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Image of text for heading -->
<img src="heading.png" alt="Welcome">

<!-- âœ… Good: Real text with CSS styling -->
<h1 class="custom-heading">Welcome</h1>
<style>
  .custom-heading {
    font-family: 'Custom Font', sans-serif;
    font-size: 2rem;
    color: #333;
  }
</style>

<!-- âœ… Good: Logo (exception - visual presentation is essential) -->
<img src="logo.png" alt="Company Name">`,
      css: `/* âœ… Good: Use CSS for text styling */
.heading {
  font-family: 'Custom Font', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Use CSS instead of images for decorative text effects */
.decorative-text {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
      react: `// âŒ Bad: Using image for text
function Heading() {
  return <img src="/heading.png" alt="Welcome" />
}

// âœ… Good: Using real text with styling
function Heading() {
  return (
    <h1 className="custom-heading">
      Welcome
    </h1>
  )
}

// âœ… Good: Logo exception
function Logo() {
  return <img src="/logo.png" alt="Company Name" />
}`,
    },
    testing: {
      manual: [
        "Check all images on the page",
        "Identify images that contain text",
        "Determine if the text appearance is essential (like logos)",
        "If not essential, verify that real text with CSS is used instead",
        "Test that text can be zoomed and customized",
      ],
      automated: ["Tools can detect images but cannot determine if text appearance is essential"],
    },
    keyTerms: [
      {
        term: "Images of Text",
        definition: "Text that has been rendered into a non-text format (such as an image) where the text cannot be programmatically determined.",
        context: "Images of text should be avoided in favor of real text that can be customized by users.",
      },
      {
        term: "Essential",
        definition: "If removed, would fundamentally change the information or functionality of the content, and information and functionality cannot be achieved in another way that would conform.",
        context: "Logos and brand names are examples where the visual presentation of text is essential.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.1.1",
        title: "Non-text Content",
        relationship: "Related to",
      },
      {
        number: "1.4.4",
        title: "Resize text",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Use real text with CSS styling instead of images of text",
          "Use web fonts for custom typography",
          "Reserve images of text only for logos or essential visual presentation",
          "Ensure text can be customized by users",
        ],
      },
      {
        category: "CSS",
        items: [
          "Use CSS for text styling and effects",
          "Use web fonts for custom fonts",
          "Avoid creating images for text effects that can be done with CSS",
        ],
      },
      {
        category: "General",
        items: [
          "Review all images to identify text content",
          "Replace images of text with real text where possible",
          "Test that text can be zoomed and customized",
          "Verify logos are properly marked as essential",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Images of Text",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html",
        type: "Understanding",
      },
      {
        title: "G140: Separating information and structure from presentation to enable different presentations",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G140",
        type: "Techniques",
      },
      {
        title: "C30: Using CSS to replace text with images of text and providing user interface controls to switch",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C30",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-6",
    number: "1.4.6",
    title: "Contrast (Enhanced)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description: "The visual presentation of text and images of text has a contrast ratio of at least 7:1.",
    officialDefinition:
      "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: (Level AAA) Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement; Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.",
    summary: "Text must have at least 7:1 contrast ratio (4.5:1 for large text).",
    detailedSummary:
      "What This Means: This success criterion requires a higher contrast ratio than Level AA - 7:1 for normal text and 4.5:1 for large text. This enhanced contrast provides better visibility for users with more severe vision loss or in challenging viewing conditions.\n\nWhy It's Important: While 4.5:1 contrast (Level AA) is sufficient for many users, those with more severe low vision, certain types of color blindness, or users viewing content in bright sunlight need higher contrast to read comfortably. The 7:1 ratio ensures text is readable for a wider range of users and viewing conditions.\n\nIn Practice: Use contrast checking tools to verify text meets the 7:1 ratio (4.5:1 for large text). This typically means using darker text colors on light backgrounds or very light text on dark backgrounds. Common compliant combinations include black text on white, or white text on very dark backgrounds. Test in various lighting conditions and consider providing this enhanced contrast as an option even if you're targeting AA compliance.",
    whyItMatters: "Higher contrast benefits users with more severe vision loss.",
    whoBenefits: ["Users with low vision", "Older users"],
    details: {
      introduction:
        "This criterion requires a higher contrast ratio (7:1 for normal text, 4.5:1 for large text) than Level AA, providing better visibility for users with more severe vision loss.",
      intent:
        "The intent is to provide enhanced contrast that benefits users with low vision who need higher contrast ratios to read text effectively.",
    },
    examples: [
      {
        title: "Low Contrast Text",
        description: "Text has 4.5:1 contrast, meeting AA but not AAA requirements.",
        type: "bad",
        code: `<p style="color: #666; background: #fff;">Text with 4.5:1 contrast</p>`,
      },
      {
        title: "High Contrast Text",
        description: "Text has 7:1 contrast, meeting AAA requirements.",
        type: "good",
        code: `<p style="color: #000; background: #fff;">Text with 7:1 contrast</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: High contrast text (7:1) -->
<p style="color: #000000; background: #ffffff;">
  Normal text with 7:1 contrast ratio
</p>

<!-- âœ… Good: Large text with 4.5:1 contrast -->
<h1 style="color: #333333; background: #ffffff;">
  Large text with 4.5:1 contrast ratio
</h1>

<!-- âŒ Bad: Insufficient contrast -->
<p style="color: #999999; background: #ffffff;">
  Text with only 2.5:1 contrast
</p>`,
      css: `/* âœ… Good: High contrast for normal text */
.text {
  color: #000000; /* 21:1 contrast with white */
  background-color: #ffffff;
}

/* âœ… Good: Large text with adequate contrast */
.large-text {
  color: #333333; /* 12.6:1 contrast with white */
  font-size: 18pt; /* Large text */
  background-color: #ffffff;
}

/* âŒ Bad: Insufficient contrast */
.low-contrast {
  color: #999999; /* 2.5:1 contrast */
  background-color: #ffffff;
}`,
      react: `// âœ… Good: High contrast text component
function HighContrastText({ children }) {
  return (
    <p style={{ color: '#000000', backgroundColor: '#ffffff' }}>
      {children}
    </p>
  )
}

// âœ… Good: Large text with adequate contrast
function LargeText({ children }) {
  return (
    <h1 style={{ 
      color: '#333333', 
      backgroundColor: '#ffffff',
      fontSize: '18pt'
    }}>
      {children}
    </h1>
  )
}`,
    },
    testing: {
      manual: [
        "Use a contrast checker tool to measure text contrast ratios",
        "Verify normal text has at least 7:1 contrast ratio",
        "Check that large text (18pt+ or 14pt+ bold) has at least 4.5:1 contrast",
        "Test with different background colors and text colors",
        "Verify contrast meets AAA requirements across all text on the page",
      ],
      automated: ["Tools like axe can check contrast ratios and flag AAA violations"],
    },
    keyTerms: [
      {
        term: "Contrast Ratio",
        definition: "The relative luminance of the lighter of the colors (foreground or background) compared to the relative luminance of the darker of the colors.",
        context: "Level AAA requires 7:1 contrast ratio for normal text, which is higher than the 4.5:1 required for Level AA.",
      },
      {
        term: "Enhanced Contrast",
        definition: "Higher contrast ratios that provide better visibility for users with more severe vision loss.",
        context: "7:1 contrast provides enhanced visibility compared to the 4.5:1 minimum for Level AA.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.3",
        title: "Contrast (Minimum)",
        relationship: "Higher level requirement",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use contrast checking tools to verify 7:1 ratio for normal text",
          "Ensure large text (18pt+ or 14pt+ bold) meets 4.5:1 ratio",
          "Test text on all background colors",
          "Verify contrast in all text states",
        ],
      },
      {
        category: "General",
        items: [
          "Use WebAIM Contrast Checker or similar tools",
          "Test in various lighting conditions",
          "Consider providing high contrast mode",
          "Verify all text meets AAA requirements",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Contrast (Enhanced)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html",
        type: "Understanding",
      },
      {
        title: "G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G17",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-7",
    number: "1.4.7",
    title: "Low or No Background Audio",
    level: "AAA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: No Background: The audio does not contain background sounds. Turn Off: The background sounds can be turned off. 20 dB: The background sounds are at least 20 decibels lower than the foreground speech content.",
    officialDefinition:
      "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: (Level AAA) No Background: The audio does not contain background sounds. Turn Off: The background sounds can be turned off. 20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.",
    summary: "Ensure background audio is low or can be turned off so speech is clear.",
    detailedSummary:
      "What This Means: This success criterion requires that for prerecorded audio content that is primarily speech (not music, singing, or rapping), the background audio must either be absent, can be turned off by users, or is at least 20 decibels lower than the foreground speech. This ensures that speech is clearly audible and not masked by background noise.\n\nWhy It's Important: Background audio can interfere with speech comprehension, especially for users who are hard of hearing or have auditory processing difficulties. Loud background music, sound effects, or ambient noise can make it difficult or impossible to understand the speech content. By minimizing or allowing control of background audio, we ensure that speech content is accessible to all users.\n\nIn Practice: When creating audio content with speech, either eliminate background sounds entirely, provide a control to turn off background audio, or ensure background sounds are mixed at least 20dB lower than speech. This applies to podcasts, narrated content, instructional audio, and similar speech-focused media. Musical content, singing, and rapping are exempt as they are primarily musical expression rather than speech.",
    whyItMatters: "Background noise makes it hard for hard of hearing users to distinguish speech.",
    whoBenefits: ["Hard of hearing users", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires that background audio in speech content is either absent, can be turned off, or is at least 20 decibels lower than the foreground speech to ensure clarity for hard of hearing users.",
      intent:
        "The intent is to ensure that speech content is clearly audible by minimizing or eliminating background noise that can interfere with speech comprehension, especially for users with hearing impairments.",
    },
    examples: [
      {
        title: "Audio With Loud Background",
        description: "Audio has background music that is only 10dB lower than speech, making it hard to understand.",
        type: "bad",
        code: `<audio controls>
  <source src="speech-with-loud-background.mp3">
</audio>
<!-- Background is too loud, no control to turn it off -->`,
      },
      {
        title: "Audio With Background Control",
        description: "Audio allows users to turn off background sounds or has background at least 20dB lower.",
        type: "good",
        code: `<audio controls>
  <source src="speech-with-quiet-background.mp3">
</audio>
<button onclick="toggleBackground()">Toggle Background Music</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Audio with background control -->
<audio controls id="audio-player">
  <source src="speech.mp3" type="audio/mpeg">
  <track kind="descriptions" src="descriptions.vtt">
</audio>
<div>
  <label>
    <input type="checkbox" id="background-toggle" onchange="toggleBackground()">
    Enable Background Music
  </label>
</div>

<script>
function toggleBackground() {
  // Implementation to toggle background audio track
}
</script>`,
      react: `// âœ… Good: Audio player with background control
function AudioPlayerWithBackgroundControl() {
  const [backgroundEnabled, setBackgroundEnabled] = useState(false)
  const audioRef = useRef(null)

  const toggleBackground = () => {
    setBackgroundEnabled(!backgroundEnabled)
    // Adjust audio mix or toggle background track
  }

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src="/speech.mp3" type="audio/mpeg" />
      </audio>
      <div className="mt-4">
        <label>
          <input
            type="checkbox"
            checked={backgroundEnabled}
            onChange={toggleBackground}
          />
          Enable Background Music
        </label>
      </div>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that background audio is at least 20dB lower than foreground speech",
        "Verify users can turn off background audio if present",
        "Test that speech remains clear with background audio",
        "Check that background audio doesn't interfere with speech comprehension",
        "Verify controls are accessible and clearly labeled",
      ],
      automated: ["Tools cannot measure audio levels or verify background audio control functionality"],
    },
    keyTerms: [
      {
        term: "Background Sounds",
        definition: "Audio that plays behind the primary audio content, such as background music, ambient noise, or sound effects.",
        context: "Background sounds must be at least 20dB lower than foreground speech or be controllable by users.",
      },
      {
        term: "Decibel (dB)",
        definition: "A unit of measurement for sound intensity. 20 decibels represents a significant reduction in volume.",
        context: "Background sounds must be at least 20dB lower than foreground speech to meet this criterion.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Complements",
      },
      {
        number: "1.4.2",
        title: "Audio Control",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Mix background audio at least 20dB lower than speech",
          "Provide control to turn off background audio",
          "Test audio clarity with background sounds",
          "Ensure speech remains clear and understandable",
        ],
      },
      {
        category: "General",
        items: [
          "Measure audio levels to verify 20dB difference",
          "Test with users who are hard of hearing",
          "Provide clear controls for background audio",
          "Verify controls are accessible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Low or No Background Audio",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html",
        type: "Understanding",
      },
      {
        title: "G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G56",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-8",
    number: "1.4.8",
    title: "Visual Presentation",
    level: "AAA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "For the visual presentation of blocks of text, a mechanism is available to achieve specific visual characteristics (colors, width, spacing, etc.).",
    officialDefinition:
      "For the visual presentation of blocks of text, a mechanism is available to achieve the following: (Level AAA) Foreground and background colors can be selected by the user. Width is no more than 80 characters or glyphs (40 if CJK). Text is not justified (aligned to both the left and the right margins). Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing. Text can be resized without assistive technology up to 200 percent without requiring horizontal scrolling.",
    summary: "Allow users to customize text appearance (colors, width, line height, spacing).",
    detailedSummary:
      "What This Means: This success criterion requires providing mechanisms for users to customize the visual presentation of text blocks. Users must be able to select foreground and background colors, control text width (max 80 characters, or 40 for CJK), avoid justified text, adjust line spacing to at least 1.5x, adjust paragraph spacing, and resize text up to 200% without horizontal scrolling.\n\nWhy It's Important: Users with dyslexia, reading disabilities, or low vision often need specific text presentation settings to read effectively. Some users need specific color combinations, wider line spacing, or narrower text columns. Justified text can create uneven spacing that makes reading difficult. By allowing customization, we enable users to create an optimal reading environment for their needs.\n\nIn Practice: Provide user controls or preferences to customize text appearance. This can be done through a settings panel, browser extensions, or CSS that respects user preferences. Ensure text width doesn't exceed 80 characters (40 for CJK languages), avoid justified text alignment, provide at least 1.5x line spacing, and allow text resizing up to 200% without horizontal scrolling.",
    whyItMatters: "Users with reading disabilities need specific text settings to read effectively.",
    whoBenefits: ["Users with dyslexia", "Users with low vision", "Users with cognitive disabilities"],
    details: {
      introduction:
        "This criterion requires providing mechanisms for users to customize text presentation, including foreground and background colors, text width, line height, and spacing, to meet their individual reading needs.",
      intent:
        "The intent is to enable users with reading disabilities to adjust text presentation to their specific needs, such as using specific color combinations, wider line spacing, or narrower text columns.",
    },
    examples: [
      {
        title: "Fixed Text Presentation",
        description: "Text appearance is fixed with no customization options available.",
        type: "bad",
        code: `<p style="color: #000; background: #fff; width: 800px; line-height: 1.2;">
  Fixed text presentation
</p>`,
      },
      {
        title: "Customizable Text Presentation",
        description: "Text appearance can be customized through user preferences or controls.",
        type: "good",
        code: `<div class="text-content" data-customizable="true">
  <p>Text that can be customized</p>
</div>
<div class="text-controls">
  <button onclick="changeTextColor()">Change Colors</button>
  <button onclick="adjustLineHeight()">Adjust Spacing</button>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Text with customization controls -->
<div class="text-content" id="customizable-text">
  <p>This text can be customized by users.</p>
</div>

<div class="text-controls">
  <label>
    Text Color:
    <input type="color" id="text-color" onchange="updateTextColor()">
  </label>
  <label>
    Background Color:
    <input type="color" id="bg-color" onchange="updateBgColor()">
  </label>
  <label>
    Line Height:
    <input type="range" id="line-height" min="1" max="3" step="0.1" onchange="updateLineHeight()">
  </label>
  <label>
    Text Width:
    <input type="range" id="text-width" min="200" max="1200" onchange="updateTextWidth()">
  </label>
</div>`,
      react: `// âœ… Good: Customizable text component
function CustomizableText({ children }) {
  const [textColor, setTextColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [lineHeight, setLineHeight] = useState(1.5)
  const [textWidth, setTextWidth] = useState(800)

  return (
    <div>
      <div
        className="text-content"
        style={{
          color: textColor,
          backgroundColor: bgColor,
          lineHeight: lineHeight,
          maxWidth: textWidth + 'px',
        }}
      >
        {children}
      </div>
      <div className="text-controls mt-4">
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        <label>
          Background Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
        <label>
          Line Height: {lineHeight}
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Text Width: {textWidth}px
          <input
            type="range"
            min="200"
            max="1200"
            value={textWidth}
            onChange={(e) => setTextWidth(parseInt(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that text customization controls are available",
        "Verify users can change text and background colors",
        "Test that line height can be adjusted",
        "Check that text width can be customized",
        "Verify that customization settings persist or can be saved",
        "Test that customization doesn't break page layout or functionality",
      ],
      automated: ["Tools can detect customization controls but cannot verify functionality"],
    },
    keyTerms: [
      {
        term: "Visual Presentation",
        definition: "The way text appears visually, including colors, width, spacing, alignment, and size.",
        context: "Users must be able to customize visual presentation characteristics to meet their reading needs.",
      },
      {
        term: "Justified Text",
        definition: "Text that is aligned to both the left and right margins, creating uneven spacing between words.",
        context: "Justified text should be avoided as it can make reading difficult for users with reading disabilities.",
      },
      {
        term: "Line Spacing (Leading)",
        definition: "The vertical space between lines of text, typically measured as a multiple of the font size.",
        context: "Line spacing must be at least 1.5x (space-and-a-half) to meet this criterion.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.4",
        title: "Resize text",
        relationship: "Complements",
      },
      {
        number: "1.4.12",
        title: "Text Spacing",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Allow users to customize foreground and background colors",
          "Limit text width to 80 characters (40 for CJK)",
          "Avoid justified text alignment",
          "Provide at least 1.5x line spacing",
          "Ensure text can resize to 200% without horizontal scrolling",
        ],
      },
      {
        category: "HTML",
        items: [
          "Provide user controls for text customization",
          "Use CSS that respects user preferences",
          "Avoid fixed text widths",
        ],
      },
      {
        category: "General",
        items: [
          "Test text customization controls",
          "Verify all customization options work",
          "Ensure customization doesn't break layout",
          "Test with users who have reading disabilities",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Visual Presentation",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html",
        type: "Understanding",
      },
      {
        title: "C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C23",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-9",
    number: "1.4.9",
    title: "Images of Text (No Exception)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    officialDefinition:
      "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    summary: "Don't use images of text at all, unless essential (e.g., logos).",
    detailedSummary:
      "What This Means: This success criterion is a stricter version of 1.4.5 (Level AA). At Level AAA, images of text should only be used for pure decoration or when the specific visual presentation is essential to the information (like logos or text that cannot be replicated with CSS). Unlike Level AA, there's no exception for customizable images of text.\n\nWhy It's Important: Real text provides the best accessibility because it can be resized, recolored, customized, and read by screen readers. Images of text are static and cannot be modified by users. At the AAA level, we aim for the highest accessibility, which means minimizing or eliminating images of text except when absolutely necessary.\n\nIn Practice: Use real text with CSS styling instead of images of text. Only use images of text for logos, brand names, or when the specific visual presentation is essential and cannot be achieved with CSS. Even then, ensure the images have proper alt text and consider providing text alternatives when possible.",
    whyItMatters: "Ensures all text is fully accessible and customizable.",
    whoBenefits: ["Users with low vision", "Screen reader users"],
    details: {
      introduction:
        "This criterion is stricter than Level AA 1.4.5, requiring that images of text are only used for decoration or when the visual presentation is essential (like logos or text that cannot be replicated with CSS).",
      intent:
        "The intent is to ensure maximum accessibility by using real text whenever possible, allowing full customization and ensuring screen readers can access all text content.",
    },
    examples: [
      {
        title: "Image of Text for Heading",
        description: "A heading is created as an image, even though it could be styled with CSS.",
        type: "bad",
        code: `<img src="heading.png" alt="Welcome to Our Site" />`,
      },
      {
        title: "Real Text with CSS Styling",
        description: "A heading uses real text with CSS, allowing full customization.",
        type: "good",
        code: `<h1 style="font-family: 'Custom Font'; color: #333; font-size: 2rem;">
  Welcome to Our Site
</h1>`,
      },
      {
        title: "Logo Exception",
        description: "A company logo is an image of text, which is acceptable as the visual presentation is essential.",
        type: "good",
        code: `<img src="logo.png" alt="Company Name" />`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Image of text for heading -->
<img src="heading.png" alt="Welcome">

<!-- âœ… Good: Real text with CSS styling -->
<h1 class="custom-heading">Welcome</h1>
<style>
  .custom-heading {
    font-family: 'Custom Font', sans-serif;
    font-size: 2rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
</style>

<!-- âœ… Good: Logo (exception - visual presentation is essential) -->
<img src="logo.png" alt="Company Name">

<!-- âœ… Good: Decorative text image -->
<img src="decorative-text.png" alt="" role="presentation">`,
      css: `/* âœ… Good: Use CSS for all text styling */
.heading {
  font-family: 'Custom Font', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Use CSS instead of images for decorative text effects */
.decorative-text {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
      react: `// âŒ Bad: Using image for text
function Heading() {
  return <img src="/heading.png" alt="Welcome" />
}

// âœ… Good: Using real text with styling
function Heading() {
  return (
    <h1 className="custom-heading">
      Welcome
    </h1>
  )
}

// âœ… Good: Logo exception
function Logo() {
  return <img src="/logo.png" alt="Company Name" />
}`,
    },
    testing: {
      manual: [
        "Check all images on the page",
        "Identify images that contain text",
        "Determine if the text appearance is essential (like logos) or decorative",
        "If not essential or decorative, verify that real text with CSS is used instead",
        "Test that all text can be zoomed and customized",
        "Verify that screen readers can access all text content",
      ],
      automated: ["Tools can detect images but cannot determine if text appearance is essential"],
    },
    keyTerms: [
      {
        term: "Images of Text",
        definition: "Text that has been rendered into a non-text format (such as an image) where the text cannot be programmatically determined.",
        context: "At Level AAA, images of text should only be used for decoration or when essential (like logos).",
      },
      {
        term: "Pure Decoration",
        definition: "Content that serves no informational purpose and is used only for visual formatting or aesthetic purposes.",
        context: "Decorative images of text are acceptable at Level AAA.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.5",
        title: "Images of Text",
        relationship: "Stricter version",
      },
      {
        number: "1.1.1",
        title: "Non-text Content",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Replace all images of text with real text where possible",
          "Use CSS for text styling and effects",
          "Reserve images of text only for logos or essential visual presentation",
          "Mark decorative images of text with alt=''",
        ],
      },
      {
        category: "General",
        items: [
          "Review all images to identify text content",
          "Verify all text is real text, not images",
          "Test that text can be customized and zoomed",
          "Ensure screen readers can access all text",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Images of Text (No Exception)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html",
        type: "Understanding",
      },
      {
        title: "G140: Separating information and structure from presentation to enable different presentations",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G140",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-10",
    number: "1.4.10",
    title: "Reflow",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels.",
    officialDefinition:
      "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: (Level AA) Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for parts of the content which require two-dimensional layout for usage or meaning.",
    summary: "Content must reflow to fit 320px width without horizontal scrolling.",
    detailedSummary:
      "What This Means: This success criterion requires that content can be presented at a width of 320 CSS pixels (equivalent to a small mobile device) without requiring horizontal scrolling. Content should reflow vertically to fit the narrow width, ensuring users who zoom in or view on small screens don't need to scroll horizontally to read.\n\nWhy It's Important: Users with low vision often zoom in significantly, which effectively creates a narrow viewport. If content doesn't reflow, they must constantly scroll horizontally to read, which is difficult and frustrating. Mobile users also benefit from content that reflows properly on small screens. This criterion ensures a better experience for all users who need to view content in narrow spaces.\n\nIn Practice: Use responsive design techniques with flexible layouts. Avoid fixed-width containers that exceed 320px. Use CSS media queries to adjust layouts for narrow widths. For wide content like tables, provide horizontal scrolling within a container rather than requiring page-level horizontal scrolling. Test by resizing the browser to 320px width and verifying no horizontal scrolling is needed.",
    whyItMatters:
      "Users with low vision who zoom in need content to reflow so they don't have to scroll horizontally to read.",
    whoBenefits: ["Users with low vision", "Mobile users"],
    details: {
      introduction:
        "This criterion ensures that content can be presented at a width of 320 CSS pixels without requiring horizontal scrolling, allowing users who zoom in to read content without constantly scrolling left and right.",
      intent:
        "The intent is to support people with low vision who need to enlarge text and view content in a narrow window. Content should reflow vertically to fit the available width.",
    },
    examples: [
      {
        title: "Fixed Width Table",
        description: "A wide table requires horizontal scrolling at 320px width, breaking the layout.",
        type: "bad",
        code: `<table style="width: 800px;">
  <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
</table>`,
      },
      {
        title: "Responsive Table",
        description: "A table that stacks or scrolls horizontally within a container at narrow widths.",
        type: "good",
        code: `<div style="overflow-x: auto;">
  <table style="min-width: 100%;">
    <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
  </table>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Responsive container -->
<div style="max-width: 100%; overflow-x: auto;">
  <table>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </table>
</div>

<!-- âŒ Bad: Fixed width -->
<div style="width: 800px;">
  <p>Content that requires horizontal scrolling</p>
</div>`,
      css: `/* âœ… Good: Responsive design */
.container {
  max-width: 100%;
  padding: 1rem;
}

/* Use CSS Grid or Flexbox for responsive layouts */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* âŒ Bad: Fixed widths */
.container {
  width: 1200px; /* Too wide for 320px viewport */
}`,
      react: `// âœ… Good: Responsive component
function ResponsiveContent() {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </div>
    </div>
  )
}

// âŒ Bad: Fixed width component
function FixedContent() {
  return (
    <div style={{ width: '1200px' }}>
      <p>Content that breaks at narrow widths</p>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Resize browser window to 320px width",
        "Check that no horizontal scrolling is required",
        "Verify all content is accessible and functional",
        "Test with browser zoom at 200%",
        "Check that tables and wide content adapt properly",
      ],
      automated: ["Tools can check viewport width but cannot verify all reflow scenarios"],
    },
    keyTerms: [
      {
        term: "Reflow",
        definition: "The ability of content to adapt its layout to fit different viewport widths by rearranging elements vertically.",
        context: "Content must reflow to fit 320px width without requiring horizontal scrolling.",
      },
      {
        term: "Two-dimensional Scrolling",
        definition: "Scrolling in both horizontal and vertical directions simultaneously.",
        context: "Content should not require two-dimensional scrolling at 320px width, except for content that requires two-dimensional layout.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.4",
        title: "Resize text",
        relationship: "Complements",
      },
      {
        number: "1.4.12",
        title: "Text Spacing",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Use responsive design with flexible layouts",
          "Avoid fixed-width containers exceeding 320px",
          "Use max-width instead of width for containers",
          "Use CSS Grid and Flexbox for flexible layouts",
          "Test at 320px viewport width",
        ],
      },
      {
        category: "HTML",
        items: [
          "Use responsive design principles",
          "Ensure content adapts to narrow widths",
          "Provide horizontal scrolling for wide tables within containers",
        ],
      },
      {
        category: "General",
        items: [
          "Test by resizing browser to 320px width",
          "Verify no horizontal scrolling is required",
          "Test with browser zoom at 200%",
          "Check that all functionality works at narrow widths",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Reflow",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
        type: "Understanding",
      },
      {
        title: "C31: Using CSS Flexbox to reflow content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C31",
        type: "Techniques",
      },
      {
        title: "C32: Using CSS media queries to swap margins and padding",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C32",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-11",
    number: "1.4.11",
    title: "Non-text Contrast",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description: "UI components and graphical objects have a contrast ratio of at least 3:1 against adjacent colors.",
    officialDefinition:
      "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): (Level AA) User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation is essential to the information being conveyed.",
    summary: "Interactive elements and meaningful graphics need 3:1 minimum contrast.",
    detailedSummary:
      "What This Means: This success criterion extends contrast requirements beyond text to include user interface components (buttons, form controls, icons) and graphical objects (charts, graphs, diagrams). These elements must have at least 3:1 contrast ratio with their adjacent colors to be distinguishable by users with low vision.\n\nWhy It's Important: Users with low vision need sufficient contrast to identify interactive elements like buttons, form controls, and icons. Low contrast makes it difficult or impossible to see where elements are, what they do, or what state they're in. This criterion ensures that all interactive elements and meaningful graphics are visible and distinguishable.\n\nIn Practice: Ensure buttons, form controls, icons, and meaningful graphics have at least 3:1 contrast with their backgrounds. This includes button borders, focus indicators, icons, and parts of charts or graphs that convey information. Test with contrast checking tools and verify that all interactive elements are clearly visible. Inactive or disabled components are exempt from this requirement.",
    whyItMatters: "Users with low vision need sufficient contrast to identify interactive elements.",
    whoBenefits: ["Users with low vision", "Users with color blindness", "Older users"],
    details: {
      introduction:
        "This criterion extends contrast requirements to non-text elements like buttons, form controls, icons, and meaningful graphics to ensure they are distinguishable from their backgrounds.",
      intent:
        "The intent is to ensure that all user interface components and graphical objects are visible to users with low vision. This includes buttons, form controls, icons, and graphics that convey information.",
    },
    examples: [
      {
        title: "Low Contrast Button",
        description: "A light gray button on a white background has insufficient contrast (1.5:1).",
        type: "bad",
        code: `<button style="background: #e0e0e0; color: #ffffff;">Submit</button>`,
      },
      {
        title: "High Contrast Button",
        description: "A dark blue button on a white background meets the 3:1 contrast requirement.",
        type: "good",
        code: `<button style="background: #0066cc; color: #ffffff;">Submit</button>`,
      },
      {
        title: "Icon Without Contrast",
        description: "A light gray icon on a white background is barely visible.",
        type: "bad",
      },
      {
        title: "Icon With Sufficient Contrast",
        description: "A dark icon on a light background is clearly visible.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Low contrast button -->
<button style="background: #e0e0e0; color: #f5f5f5;">Submit</button>

<!-- âœ… Good: High contrast button -->
<button style="background: #0066cc; color: #ffffff;">Submit</button>

<!-- âœ… Good: Icon with sufficient contrast -->
<svg fill="#000000" aria-label="Search">
  <path d="..."/>
</svg>`,
      css: `/* âœ… Good: Sufficient contrast for UI components */
.button {
  background-color: #0066cc; /* 4.5:1 contrast with white */
  color: #ffffff;
  border: 2px solid #004499; /* 3:1 contrast for border */
}

.icon {
  color: #333333; /* 12:1 contrast with white */
}

/* âŒ Bad: Insufficient contrast */
.button {
  background-color: #e0e0e0; /* 1.5:1 contrast */
  color: #f5f5f5;
}`,
      react: `// âœ… Good: High contrast button
function Button() {
  return (
    <button 
      className="bg-blue-600 text-white"
      style={{ border: '2px solid #004499' }}
    >
      Submit
    </button>
  )
}

// âŒ Bad: Low contrast button
function Button() {
  return (
    <button 
      className="bg-gray-300 text-gray-200"
    >
      Submit
    </button>
  )
}`,
    },
    testing: {
      manual: [
        "Check all interactive elements (buttons, links, form controls)",
        "Verify contrast ratio is at least 3:1 against adjacent colors",
        "Test icons and graphics for sufficient contrast",
        "Use a contrast checker tool to measure ratios",
        "Test with different color vision simulations",
      ],
      automated: ["Tools like axe can check contrast ratios for UI components"],
    },
    keyTerms: [
      {
        term: "User Interface Components",
        definition: "A part of the content that is perceived by users as a single control for a distinct function.",
        context: "UI components like buttons, form controls, and icons must have 3:1 contrast with adjacent colors.",
      },
      {
        term: "Graphical Objects",
        definition: "Parts of graphics required to understand the content, such as icons, charts, graphs, or diagrams.",
        context: "Graphical objects that convey information must have 3:1 contrast with adjacent colors.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.3",
        title: "Contrast (Minimum)",
        relationship: "Extends contrast requirements to non-text elements",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Ensure buttons have 3:1 contrast with background",
          "Verify form controls have sufficient contrast",
          "Check icons have 3:1 contrast",
          "Test focus indicators meet contrast requirements",
          "Verify graphics and charts have sufficient contrast",
        ],
      },
      {
        category: "General",
        items: [
          "Use contrast checking tools for UI components",
          "Test all interactive elements for visibility",
          "Verify icons are distinguishable",
          "Check graphics convey information clearly",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Non-text Contrast",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
        type: "Understanding",
      },
      {
        title: "G207: Ensuring that a contrast ratio of 3:1 is provided for icons",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G207",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-12",
    number: "1.4.12",
    title: "Text Spacing",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size.",
    officialDefinition:
      "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: (Level AA) Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size.",
    summary: "Content must adapt to increased text spacing without breaking.",
    detailedSummary:
      "What This Means: This success criterion requires that content must remain functional and readable when users apply increased text spacing. Specifically, content must work when line height is set to 1.5x font size, paragraph spacing is 2x font size, letter spacing is 0.12x font size, and word spacing is 0.16x font size. Content should not be cut off, hidden, or become unusable with these spacing adjustments.\n\nWhy It's Important: Users with dyslexia and reading disabilities often benefit from increased spacing between letters, words, lines, and paragraphs. This spacing helps reduce visual crowding and makes text easier to read. If content breaks or becomes unusable when spacing is increased, these users cannot access the content effectively.\n\nIn Practice: Design layouts that are flexible and can accommodate increased spacing. Avoid fixed-height containers that cut off content. Use min-height instead of height. Ensure text containers can expand vertically. Test by applying the specified spacing values and verifying that all content remains accessible and functional. Avoid using overflow:hidden on text containers.",
    whyItMatters: "Users with dyslexia often increase text spacing to improve readability.",
    whoBenefits: ["Users with dyslexia", "Users with low vision"],
    details: {
      introduction:
        "This criterion ensures that content remains functional and readable when users apply increased text spacing, which is a common accommodation for users with dyslexia and reading disabilities.",
      intent:
        "The intent is to ensure that text can be adapted to the spacing needs of users without losing content or functionality. Users with dyslexia often benefit from increased spacing between letters, words, lines, and paragraphs.",
    },
    examples: [
      {
        title: "Fixed Height Container",
        description: "Text in a fixed-height container gets cut off when spacing is increased.",
        type: "bad",
        code: `<div style="height: 200px; overflow: hidden;">
  <p>Text that gets cut off with increased spacing...</p>
</div>`,
      },
      {
        title: "Flexible Container",
        description: "Text container adapts to increased spacing without cutting off content.",
        type: "good",
        code: `<div style="min-height: 200px;">
  <p>Text that adapts to increased spacing...</p>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- âœ… Good: Flexible text container -->
<div class="text-content">
  <p>This text will adapt to increased spacing.</p>
</div>

<!-- âŒ Bad: Fixed height container -->
<div style="height: 200px; overflow: hidden;">
  <p>Text that gets cut off.</p>
</div>`,
      css: `/* âœ… Good: Allow spacing adjustments */
.text-content {
  min-height: auto; /* Allows expansion */
  padding: 1rem;
}

/* Don't use fixed heights that prevent expansion */
/* âŒ Bad */
.fixed-container {
  height: 200px;
  overflow: hidden;
}

/* âœ… Good: Use min-height instead */
.flexible-container {
  min-height: 200px;
}`,
      react: `// âœ… Good: Flexible text component
function TextContent() {
  return (
    <div className="min-h-auto p-4">
      <p>Text that adapts to spacing changes.</p>
    </div>
  )
}

// âŒ Bad: Fixed height component
function TextContent() {
  return (
    <div style={{ height: '200px', overflow: 'hidden' }}>
      <p>Text that gets cut off.</p>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Apply increased text spacing using browser extensions or user styles",
        "Set line-height to 1.5 times font size",
        "Set paragraph spacing to 2 times font size",
        "Set letter-spacing to 0.12 times font size",
        "Set word-spacing to 0.16 times font size",
        "Verify no content is cut off or hidden",
        "Check that all functionality still works",
      ],
      automated: ["Tools can check for fixed heights but cannot fully test spacing adaptations"],
    },
    keyTerms: [
      {
        term: "Line Height (Line Spacing)",
        definition: "The vertical space between lines of text, typically measured as a multiple of the font size.",
        context: "Line height must be adjustable to at least 1.5 times the font size without breaking content.",
      },
      {
        term: "Letter Spacing (Tracking)",
        definition: "The space between individual characters in text.",
        context: "Letter spacing must be adjustable to at least 0.12 times the font size.",
      },
      {
        term: "Word Spacing",
        definition: "The space between words in text.",
        context: "Word spacing must be adjustable to at least 0.16 times the font size.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.4.4",
        title: "Resize text",
        relationship: "Complements",
      },
      {
        number: "1.4.8",
        title: "Visual Presentation",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "CSS",
        items: [
          "Avoid fixed-height containers for text",
          "Use min-height instead of height",
          "Avoid overflow: hidden on text containers",
          "Ensure containers can expand vertically",
          "Test with increased spacing values",
        ],
      },
      {
        category: "General",
        items: [
          "Test by applying 1.5x line height",
          "Test with 2x paragraph spacing",
          "Test with 0.12x letter spacing",
          "Test with 0.16x word spacing",
          "Verify no content is cut off or hidden",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Text Spacing",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
        type: "Understanding",
      },
      {
        title: "C35: Allowing for text spacing override",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/css/C35",
        type: "Techniques",
      },
    ],
  },
  {
    id: "1-4-13",
    number: "1.4.13",
    title: "Content on Hover or Focus",
    level: "AA",
    principle: "perceivable",
    guideline: "Distinguishable",
    guidelineNumber: "1.4",
    isNew: false,
    description:
      "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: Dismissable, Hoverable, Persistent.",
    officialDefinition:
      "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: (Level AA) Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.",
    summary: "Popups (like tooltips) must be dismissible, hoverable, and persistent.",
    detailedSummary:
      "What This Means: This success criterion requires that when hover or focus triggers additional content (like tooltips, popovers, or dropdowns), the content must be: (1) Dismissible - users can close it without moving the pointer or focus, (2) Hoverable - pointer users can move the mouse over the additional content without it disappearing, and (3) Persistent - the content stays visible until dismissed, focus moves away, or the information is no longer valid.\n\nWhy It's Important: Users need time to read and interact with hover/focus content. If content disappears immediately when the mouse moves, users cannot read it. Keyboard users need a way to dismiss content that might obscure other content. Users with motor disabilities may have difficulty keeping the pointer in a precise position, so content must be persistent and hoverable.\n\nIn Practice: Implement tooltips and popovers that remain visible until explicitly dismissed or focus moves away. Provide a close button or Escape key to dismiss. Ensure the additional content area is large enough to move the pointer over without triggering dismissal. Test with both mouse and keyboard interaction to ensure all users can access and dismiss the content.",
    whyItMatters:
      "Users need to be able to read hover content without it disappearing and dismiss it if it obscures other content.",
    whoBenefits: ["Users with low vision", "Keyboard users", "Users with motor disabilities"],
    details: {
      introduction:
        "This criterion ensures that hover and focus-triggered content (like tooltips, popovers, and dropdowns) can be accessed and controlled by all users, including those using keyboards or assistive technologies.",
      intent:
        "The intent is to ensure that additional content that appears on hover or focus can be: 1) Dismissed without moving pointer hover or keyboard focus, 2) Hovered over (for pointer users), and 3) Remains visible until dismissed or focus is moved away.",
    },
    examples: [
      {
        title: "Tooltip That Disappears",
        description: "A tooltip disappears immediately when the mouse moves away, making it impossible to read.",
        type: "bad",
        code: `<button onmouseenter="showTooltip()" onmouseleave="hideTooltip()">
  Hover me
</button>`,
      },
      {
        title: "Persistent Tooltip",
        description: "A tooltip that stays visible until dismissed or focus moves away.",
        type: "good",
        code: `<button aria-describedby="tooltip" onfocus="showTooltip()" onblur="hideTooltip()">
  Hover me
  <span id="tooltip" role="tooltip">Helpful information</span>
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- âŒ Bad: Tooltip that disappears immediately -->
<button onmouseenter="show()" onmouseleave="hide()">
  Hover me
</button>

<!-- âœ… Good: Dismissible tooltip -->
<button aria-describedby="tooltip" id="trigger">
  Hover me
</button>
<div id="tooltip" role="tooltip" aria-hidden="true">
  <p>Helpful information</p>
  <button onclick="dismissTooltip()">Close</button>
</div>

<!-- âœ… Good: Persistent dropdown -->
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true">Menu</button>
  <ul role="menu" aria-hidden="true">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>`,
      css: `/* âœ… Good: Tooltip that can be hovered */
.tooltip {
  position: absolute;
  pointer-events: auto; /* Allows hovering */
  z-index: 1000;
}

.tooltip::after {
  content: '';
  position: absolute;
  /* Creates hoverable area */
}`,
      react: `// âœ… Good: Accessible tooltip component
function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          if (!isHovered) setIsVisible(false)
        }, 100)
      }}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsVisible(false)
          }}
        >
          {content}
          <button onClick={() => setIsVisible(false)}>Close</button>
        </div>
      )}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Hover over elements that trigger additional content",
        "Verify content remains visible when moving mouse to it",
        "Check that content can be dismissed (close button or Escape key)",
        "Test with keyboard focus to ensure content appears",
        "Verify content doesn't disappear unexpectedly",
        "Check that content doesn't obscure important information",
      ],
      automated: ["Tools can check for ARIA attributes but cannot fully test hover behavior"],
    },
    keyTerms: [
      {
        term: "Dismissable",
        definition: "Able to be closed or removed without moving pointer hover or keyboard focus.",
        context: "Additional content triggered by hover or focus must be dismissible, typically via a close button or Escape key.",
      },
      {
        term: "Hoverable",
        definition: "Able to be moved over with a pointer without the content disappearing.",
        context: "If pointer hover triggers additional content, users must be able to move the pointer over that content without it disappearing.",
      },
      {
        term: "Persistent",
        definition: "Remaining visible until explicitly dismissed, focus moves away, or the information is no longer valid.",
        context: "Additional content must remain visible long enough for users to read and interact with it.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.1.1",
        title: "Keyboard",
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
          "Provide close button or Escape key to dismiss content",
          "Use role='tooltip' for tooltip content",
          "Use aria-describedby to associate trigger with content",
          "Ensure content area is large enough to hover over",
        ],
      },
      {
        category: "JavaScript",
        items: [
          "Implement dismiss functionality (close button, Escape key)",
          "Ensure content persists until dismissed or focus moves",
          "Allow pointer to move over content without hiding",
          "Handle both mouse and keyboard interactions",
        ],
      },
      {
        category: "General",
        items: [
          "Test with mouse hover to verify persistence",
          "Test with keyboard focus to verify appearance",
          "Verify content can be dismissed",
          "Check that content doesn't obscure other content",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Content on Hover or Focus",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html",
        type: "Understanding",
      },
      {
        title: "G201: Giving users advanced warning when opening a new window",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G201",
        type: "Techniques",
      },
    ],
  },
]