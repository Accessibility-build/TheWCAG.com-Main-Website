export interface SuccessCriterion {
  id: string
  number: string
  title: string
  level: "A" | "AA" | "AAA"
  principle: "perceivable" | "operable" | "understandable" | "robust"
  guideline: string
  guidelineNumber: string
  isNew: boolean
  description: string
  summary: string
  whyItMatters: string
  whoBenefits: string[]
  details?: {
    introduction: string
    intent: string
  }
  examples?: {
    title: string
    description: string
    type: "good" | "bad"
    image?: string
    code?: string
  }[]
  codeExamples?: {
    html?: string
    css?: string
    js?: string
    react?: string
    vue?: string
  }
  testing?: {
    manual: string[]
    automated: string[]
  }
}

export const principles = {
  perceivable: {
    title: "Perceivable",
    description: "Information and user interface components must be presentable to users in ways they can perceive.",
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
    icon: "🔧",
    guidelines: [{ number: "4.1", title: "Compatible" }],
  },
}

// Sample criteria data - will expand in next task
export const successCriteria: SuccessCriterion[] = [
  // Principle 1: Perceivable
  // Guideline 1.1 Text Alternatives
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
        "Inspect every image on the page.",
        "Check if the image conveys information. If yes, does the alt text describe it?",
        "Check if the image is decorative. If yes, is the alt text empty?",
        "Turn off images in the browser and verify text alternatives appear.",
      ],
      automated: ["Run axe DevTools to find missing alt attributes."],
    },
  },
  // Guideline 1.2 Time-based Media
  {
    id: "1-2-1",
    number: "1.2.1",
    title: "Audio-only and Video-only (Prerecorded)",
    level: "A",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "For prerecorded audio-only and video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: Prerecorded Audio-only: An alternative for time-based media is provided. Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided.",
    summary: "Provide transcripts for audio-only content and descriptions or transcripts for video-only content.",
    whyItMatters:
      "Users who are deaf or hard of hearing need text alternatives for audio. Blind users need audio descriptions for video.",
    whoBenefits: ["Deaf users", "Hard of hearing users", "Blind users"],
    details: {
      introduction:
        "This criterion ensures that information in audio-only (like podcasts) or video-only (like silent animations) content is accessible to all users.",
      intent:
        "The intent is to make information conveyed by time-based media accessible. For audio-only content, a transcript allows deaf users to read the content. For video-only content, a text description or audio track allows blind users to understand the visual information.",
    },
    examples: [
      {
        title: "Podcast without Transcript",
        description: "Deaf users cannot access the content of the podcast.",
        type: "bad",
      },
      {
        title: "Podcast with Transcript",
        description: "A full text transcript is provided immediately below the audio player.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Audio with Transcript Link -->
<audio controls src="podcast.mp3"></audio>
<a href="transcript.html">Read Transcript</a>

<!-- ✅ Good: Video with Description -->
<video controls src="animation.mp4"></video>
<p>Description: A graph animates to show the rising trend...</p>`,
    },
    testing: {
      manual: [
        "Check for audio-only content. Is a transcript available?",
        "Check for video-only content. Is a text description or audio track available?",
        "Verify the transcript/description matches the media content accurately.",
      ],
      automated: ["Automated tools can detect <audio> or <video> tags but cannot verify the quality of alternatives."],
    },
  },
  {
    id: "1-2-2",
    number: "1.2.2",
    title: "Captions (Prerecorded)",
    level: "A",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
    summary: "Provide captions for all prerecorded videos with sound.",
    whyItMatters: "Users who are deaf or hard of hearing rely on captions to understand spoken content in videos.",
    whoBenefits: ["Deaf users", "Hard of hearing users", "Non-native speakers"],
    details: {
      introduction: "Captions provide a text version of spoken words and important sounds in video content.",
      intent:
        "The intent is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.",
    },
    examples: [
      {
        title: "Video without Captions",
        description: "Users who cannot hear the audio miss all the dialogue and sound effects.",
        type: "bad",
      },
      {
        title: "Closed Captions (CC)",
        description: "The video player has a CC button that toggles synchronized text captions.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Video with Captions Track -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>`,
    },
    testing: {
      manual: [
        "Play the video and turn on captions.",
        "Check if captions are synchronized with the audio.",
        "Check if captions include all dialogue and important sound effects.",
        "Check if speaker identification is provided when necessary.",
      ],
      automated: ["Tools can check for the presence of <track kind='captions'> but cannot verify accuracy."],
    },
  },
  {
    id: "1-2-3",
    number: "1.2.3",
    title: "Audio Description or Media Alternative (Prerecorded)",
    level: "A",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
    summary: "Provide a transcript or audio description for prerecorded video content.",
    whyItMatters: "Blind users need descriptions of visual information in videos that isn't conveyed through audio.",
    whoBenefits: ["Blind users", "Users with low vision", "Deaf-blind users"],
    details: {
      introduction:
        "This criterion ensures that visual information in videos (like actions, scene changes, or on-screen text) is accessible to blind users.",
      intent:
        "The intent is to provide people who are blind or visually impaired with access to the visual information in a synchronized media presentation. This can be done via a separate audio track (Audio Description) or a text transcript that includes visual descriptions (Media Alternative).",
    },
    examples: [
      {
        title: "Video with Visual-Only Info",
        description:
          "A video shows a character finding a hidden key, but no one speaks about it. Blind users miss this plot point.",
        type: "bad",
      },
      {
        title: "Audio Description",
        description: 'During a pause in dialogue, a narrator says "She reaches under the mat and finds a silver key."',
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Link to Transcript/Alternative -->
<video controls src="movie.mp4"></video>
<a href="movie-transcript.html">Read Transcript with Visual Descriptions</a>`,
    },
    testing: {
      manual: [
        "Watch the video with your eyes closed.",
        "Do you miss important information?",
        "If yes, check if there is an audio description track or a text transcript that describes the visuals.",
      ],
      automated: ["Cannot be automated."],
    },
  },
  {
    id: "1-2-4",
    number: "1.2.4",
    title: "Captions (Live)",
    level: "AA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description: "Captions are provided for all live audio content in synchronized media.",
    summary: "Provide captions for live videos with sound.",
    whyItMatters: "Users who are deaf or hard of hearing need real-time access to live audio content.",
    whoBenefits: ["Deaf users", "Hard of hearing users"],
    details: {
      introduction: "Live events like webinars and news broadcasts must have real-time captions.",
      intent:
        "The intent is to enable people who are deaf or hard of hearing to watch real-time presentations. Live captions are typically generated by a human stenographer or high-quality AI in real-time.",
    },
    examples: [
      {
        title: "Live Stream without Captions",
        description: "A live press conference is streamed, but deaf users cannot understand what is being said.",
        type: "bad",
      },
      {
        title: "Live CART Services",
        description: "A live stream includes a window with real-time text captions provided by a CART service.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Live Stream Container -->
<div class="live-player">
  <video id="live-stream"></video>
  <div id="caption-container" aria-live="polite">
    <!-- Real-time captions appear here -->
  </div>
</div>`,
    },
    testing: {
      manual: [
        "Check if the live event has a captioning service enabled.",
        "Verify that captions appear with minimal delay.",
        "Verify accuracy of the live captions.",
      ],
      automated: ["Cannot be automated."],
    },
  },
  {
    id: "1-2-5",
    number: "1.2.5",
    title: "Audio Description (Prerecorded)",
    level: "AA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description: "Audio description is provided for all prerecorded video content in synchronized media.",
    summary: "Provide audio descriptions for all prerecorded videos.",
    whyItMatters: "Blind users need to hear descriptions of important visual details in videos.",
    whoBenefits: ["Blind users", "Users with low vision"],
  },
  {
    id: "1-2-6",
    number: "1.2.6",
    title: "Sign Language (Prerecorded)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description: "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
    summary: "Provide sign language interpretation for prerecorded videos.",
    whyItMatters: "Some deaf users prefer sign language over text captions for comprehension.",
    whoBenefits: ["Deaf users", "Sign language users"],
  },
  {
    id: "1-2-7",
    number: "1.2.7",
    title: "Extended Audio Description (Prerecorded)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
    summary: "Provide extended audio descriptions when natural pauses aren't long enough.",
    whyItMatters: "Ensures blind users get all necessary visual information even in fast-paced videos.",
    whoBenefits: ["Blind users", "Users with low vision"],
  },
  {
    id: "1-2-8",
    number: "1.2.8",
    title: "Media Alternative (Prerecorded)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
    summary: "Provide a full text transcript for all prerecorded video content.",
    whyItMatters: "Allows users to read the content at their own pace and search the text.",
    whoBenefits: ["Deaf-blind users", "Users with cognitive disabilities", "All users"],
  },
  {
    id: "1-2-9",
    number: "1.2.9",
    title: "Audio-only (Live)",
    level: "AAA",
    principle: "perceivable",
    guideline: "Time-based Media",
    guidelineNumber: "1.2",
    isNew: false,
    description:
      "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
    summary: "Provide a live transcript or captions for live audio-only content.",
    whyItMatters: "Ensures deaf and hard of hearing users can access live audio broadcasts.",
    whoBenefits: ["Deaf users", "Hard of hearing users"],
  },
  // Guideline 1.3 Adaptable
  {
    id: "1-3-1",
    number: "1.3.1",
    title: "Info and Relationships",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
    summary:
      "Use proper HTML elements (headings, lists, tables) so assistive technologies understand the page structure.",
    whyItMatters: "Screen readers rely on semantic HTML to navigate and understand content relationships.",
    whoBenefits: ["Blind users", "Users with cognitive disabilities", "Keyboard users"],
  },
  {
    id: "1-3-2",
    number: "1.3.2",
    title: "Meaningful Sequence",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
    summary: "Ensure the DOM order matches the visual order so content makes sense when read linearly.",
    whyItMatters: "Screen readers and keyboard navigation follow DOM order, not visual layout.",
    whoBenefits: ["Blind users", "Keyboard users", "Users with cognitive disabilities"],
  },
  {
    id: "1-3-3",
    number: "1.3.3",
    title: "Sensory Characteristics",
    level: "A",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, visual location, orientation, or sound.",
    summary: "Don't rely on shape, size, or location alone for instructions (e.g., 'click the round button').",
    whyItMatters: "Blind users cannot see shapes or locations. Deaf users cannot hear sound cues.",
    whoBenefits: ["Blind users", "Deaf users", "Users with cognitive disabilities"],
  },
  {
    id: "1-3-4",
    number: "1.3.4",
    title: "Orientation",
    level: "AA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
    summary: "Content must work in both portrait and landscape orientations.",
    whyItMatters: "Some users have their devices mounted in a fixed orientation (e.g., on a wheelchair).",
    whoBenefits: ["Users with motor disabilities", "Mobile users"],
  },
  {
    id: "1-3-5",
    number: "1.3.5",
    title: "Identify Input Purpose",
    level: "AA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "The purpose of each input field collecting information about the user can be programmatically determined when the field serves a purpose identified in the Input Purposes for User Interface Components section.",
    summary: "Use HTML autocomplete attributes on form fields collecting user data.",
    whyItMatters:
      "Allows browsers and assistive tools to auto-fill forms, helping users with memory or motor impairments.",
    whoBenefits: ["Users with cognitive disabilities", "Users with motor disabilities"],
  },
  {
    id: "1-3-6",
    number: "1.3.6",
    title: "Identify Purpose",
    level: "AAA",
    principle: "perceivable",
    guideline: "Adaptable",
    guidelineNumber: "1.3",
    isNew: false,
    description:
      "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.",
    summary: "Use ARIA landmarks and personalization semantics to identify regions and components.",
    whyItMatters: "Enables users to personalize the interface (e.g., swap icons for text) based on their needs.",
    whoBenefits: ["Users with cognitive disabilities"],
  },
  // Guideline 1.4 Distinguishable
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
    summary: "Never rely on color alone to convey information. Add icons, text labels, or patterns.",
    whyItMatters: "Color blind users and screen reader users cannot perceive color differences.",
    whoBenefits: ["Color blind users", "Blind users", "Users with low vision"],
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
    summary: "Don't auto-play audio for more than 3 seconds without a way to stop it.",
    whyItMatters: "Auto-playing audio interferes with screen reader speech output.",
    whoBenefits: ["Screen reader users", "Users with attention disorders"],
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
    summary: "Text must have at least 4.5:1 contrast ratio with its background (3:1 for large text).",
    whyItMatters: "Low contrast makes text difficult or impossible to read for users with low vision.",
    whoBenefits: ["Users with low vision", "Users with color blindness", "Older users"],
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
    summary: "Ensure text can be zoomed to 200% without breaking the layout or hiding content.",
    whyItMatters: "Users with low vision need to enlarge text to read it.",
    whoBenefits: ["Users with low vision", "Older users"],
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
    summary: "Use real text instead of images of text whenever possible.",
    whyItMatters: "Real text scales better and can be customized by users (font, color, spacing).",
    whoBenefits: ["Users with low vision", "Screen reader users"],
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
    summary: "Text must have at least 7:1 contrast ratio (4.5:1 for large text).",
    whyItMatters: "Higher contrast benefits users with more severe vision loss.",
    whoBenefits: ["Users with low vision", "Older users"],
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
    summary: "Ensure background audio is low or can be turned off so speech is clear.",
    whyItMatters: "Background noise makes it hard for hard of hearing users to distinguish speech.",
    whoBenefits: ["Hard of hearing users", "Users with cognitive disabilities"],
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
    summary: "Allow users to customize text appearance (colors, width, line height, spacing).",
    whyItMatters: "Users with reading disabilities need specific text settings to read effectively.",
    whoBenefits: ["Users with dyslexia", "Users with low vision", "Users with cognitive disabilities"],
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
    summary: "Don't use images of text at all, unless essential (e.g., logos).",
    whyItMatters: "Ensures all text is fully accessible and customizable.",
    whoBenefits: ["Users with low vision", "Screen reader users"],
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
    summary: "Content must reflow to fit 320px width without horizontal scrolling.",
    whyItMatters:
      "Users with low vision who zoom in need content to reflow so they don't have to scroll horizontally to read.",
    whoBenefits: ["Users with low vision", "Mobile users"],
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
    summary: "Interactive elements and meaningful graphics need 3:1 minimum contrast.",
    whyItMatters: "Users with low vision need sufficient contrast to identify interactive elements.",
    whoBenefits: ["Users with low vision", "Users with color blindness", "Older users"],
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
    summary: "Content must adapt to increased text spacing without breaking.",
    whyItMatters: "Users with dyslexia often increase text spacing to improve readability.",
    whoBenefits: ["Users with dyslexia", "Users with low vision"],
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
    summary: "Popups (like tooltips) must be dismissible, hoverable, and persistent.",
    whyItMatters:
      "Users need to be able to read hover content without it disappearing and dismiss it if it obscures other content.",
    whoBenefits: ["Users with low vision", "Keyboard users", "Users with motor disabilities"],
  },
  // Principle 2: Operable
  // Guideline 2.1 Keyboard Accessible
  {
    id: "2-1-1",
    number: "2.1.1",
    title: "Keyboard",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description: "All functionality of the content is operable through a keyboard interface.",
    summary: "Every interactive element must be usable with just a keyboard (no mouse required).",
    whyItMatters: "Many users cannot use a mouse due to motor disabilities or blindness.",
    whoBenefits: ["Blind users", "Users with motor disabilities", "Power users"],
  },
  {
    id: "2-1-2",
    number: "2.1.2",
    title: "No Keyboard Trap",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "If keyboard focus can be moved to a component, focus can be moved away from that component using only a keyboard interface.",
    summary: "Users must be able to navigate away from any element using only the keyboard.",
    whyItMatters: "Keyboard users can become trapped in components, unable to access the rest of the page.",
    whoBenefits: ["Keyboard users", "Blind users", "Users with motor disabilities"],
  },
  {
    id: "2-1-3",
    number: "2.1.3",
    title: "Keyboard (No Exception)",
    level: "AAA",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
    summary: "Everything must be keyboard accessible, with no exceptions.",
    whyItMatters: "Ensures complete access for users who rely solely on keyboards.",
    whoBenefits: ["Blind users", "Users with motor disabilities"],
  },
  {
    id: "2-1-4",
    number: "2.1.4",
    title: "Character Key Shortcuts",
    level: "A",
    principle: "operable",
    guideline: "Keyboard Accessible",
    guidelineNumber: "2.1",
    isNew: false,
    description:
      "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, numbers, or symbol characters, then at least one of the following is true: Turn off, Remap, Active only on focus.",
    summary: "Single-key shortcuts must be turn-off-able or remappable.",
    whyItMatters: "Prevents accidental activation of shortcuts by speech input users or prone typists.",
    whoBenefits: ["Speech recognition users", "Users with motor disabilities"],
  },
  // Guideline 2.2 Enough Time
  {
    id: "2-2-1",
    number: "2.2.1",
    title: "Timing Adjustable",
    level: "A",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "For each time limit that is set by the content, at least one of the following is true: Turn off, Adjust, Extend, Real-time Exception, Essential Exception, 20 Hour Exception.",
    summary: "Users must be able to turn off, adjust, or extend time limits.",
    whyItMatters: "Users with disabilities may need more time to read or interact with content.",
    whoBenefits: ["Users with cognitive disabilities", "Users with motor disabilities", "Users with low vision"],
  },
  {
    id: "2-2-2",
    number: "2.2.2",
    title: "Pause, Stop, Hide",
    level: "A",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "For moving, blinking, scrolling, or auto-updating information, all of the following are true: Moving, blinking, scrolling: Can be paused, stopped, or hidden. Auto-updating: Can be paused, stopped, or hidden.",
    summary: "Users must be able to pause, stop, or hide moving or auto-updating content.",
    whyItMatters: "Moving content can be distracting or cause nausea for some users.",
    whoBenefits: ["Users with attention disorders", "Users with vestibular disorders"],
  },
  {
    id: "2-2-3",
    number: "2.2.3",
    title: "No Timing",
    level: "AAA",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    summary: "No time limits on content interaction.",
    whyItMatters: "Removes pressure and ensures all users can complete tasks at their own pace.",
    whoBenefits: ["Users with cognitive disabilities", "Users with motor disabilities"],
  },
  {
    id: "2-2-4",
    number: "2.2.4",
    title: "Interruptions",
    level: "AAA",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
    summary: "Users can postpone or suppress interruptions (like alerts).",
    whyItMatters: "Helps users with attention disorders stay focused.",
    whoBenefits: ["Users with attention disorders", "Users with cognitive disabilities"],
  },
  {
    id: "2-2-5",
    number: "2.2.5",
    title: "Re-authenticating",
    level: "AAA",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
    summary: "If a session expires, users can log back in and continue where they left off without losing data.",
    whyItMatters: "Prevents data loss for users who take longer to complete tasks.",
    whoBenefits: ["All users", "Users with motor disabilities", "Users with cognitive disabilities"],
  },
  {
    id: "2-2-6",
    number: "2.2.6",
    title: "Timeouts",
    level: "AAA",
    principle: "operable",
    guideline: "Enough Time",
    guidelineNumber: "2.2",
    isNew: false,
    description:
      "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
    summary: "Warn users about timeouts to prevent data loss.",
    whyItMatters: "Helps users manage their time and avoid losing work.",
    whoBenefits: ["Users with cognitive disabilities", "Users with attention disorders"],
  },
  // Guideline 2.3 Seizures and Physical Reactions
  {
    id: "2-3-1",
    number: "2.3.1",
    title: "Three Flashes or Below Threshold",
    level: "A",
    principle: "operable",
    guideline: "Seizures and Physical Reactions",
    guidelineNumber: "2.3",
    isNew: false,
    description:
      "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
    summary: "No content should flash more than 3 times per second.",
    whyItMatters: "Flashing content can trigger seizures in users with photosensitive epilepsy.",
    whoBenefits: ["Users with epilepsy"],
  },
  {
    id: "2-3-2",
    number: "2.3.2",
    title: "Three Flashes",
    level: "AAA",
    principle: "operable",
    guideline: "Seizures and Physical Reactions",
    guidelineNumber: "2.3",
    isNew: false,
    description: "Web pages do not contain anything that flashes more than three times in any one second period.",
    summary: "Strictly no flashing more than 3 times per second (no exceptions).",
    whyItMatters: "Provides maximum safety for users with photosensitive epilepsy.",
    whoBenefits: ["Users with epilepsy"],
  },
  {
    id: "2-3-3",
    number: "2.3.3",
    title: "Animation from Interactions",
    level: "AAA",
    principle: "operable",
    guideline: "Seizures and Physical Reactions",
    guidelineNumber: "2.3",
    isNew: false,
    description:
      "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
    summary: "Users can disable motion animations triggered by interaction.",
    whyItMatters: "Motion can cause vestibular disorders (dizziness, nausea).",
    whoBenefits: ["Users with vestibular disorders"],
  },
  // Guideline 2.4 Navigable
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
  },
  {
    id: "2-4-13",
    number: "2.4.13",
    title: "Focus Appearance",
    level: "AAA",
    principle: "operable",
    guideline: "Navigable",
    guidelineNumber: "2.4",
    isNew: true,
    description:
      "When the keyboard focus indicator is visible, an area of the focus indicator meets specific size and contrast requirements.",
    summary: "Focus indicators must meet enhanced size and contrast requirements for maximum visibility.",
    whyItMatters: "Strong focus indicators help users with low vision track their position.",
    whoBenefits: ["Users with low vision", "Keyboard users", "Older users"],
  },
  // Guideline 2.5 Input Modalities
  {
    id: "2-5-1",
    number: "2.5.1",
    title: "Pointer Gestures",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    summary: "Don't require complex gestures (like pinch-to-zoom) without simple alternatives.",
    whyItMatters: "Users with motor disabilities may not be able to perform complex gestures.",
    whoBenefits: ["Users with motor disabilities", "Users with cognitive disabilities"],
  },
  {
    id: "2-5-2",
    number: "2.5.2",
    title: "Pointer Cancellation",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event, Abort or Undo, Up Reversal, Essential.",
    summary: "Actions should trigger on the 'up' event, not the 'down' event, to allow cancellation.",
    whyItMatters: "Prevents accidental clicks/taps.",
    whoBenefits: ["Users with motor disabilities", "Users with tremors"],
  },
  {
    id: "2-5-3",
    number: "2.5.3",
    title: "Label in Name",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    summary: "The accessible name (for screen readers) must match the visible label.",
    whyItMatters:
      "Speech recognition users say the visible label to interact. If the code name is different, it won't work.",
    whoBenefits: ["Speech recognition users", "Screen reader users"],
  },
  {
    id: "2-5-4",
    number: "2.5.4",
    title: "Motion Actuation",
    level: "A",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.",
    summary: "Don't require device motion (shaking, tilting) without an alternative.",
    whyItMatters: "Users with motor disabilities may not be able to move the device.",
    whoBenefits: ["Users with motor disabilities", "Device mounted users"],
  },
  {
    id: "2-5-5",
    number: "2.5.5",
    title: "Target Size",
    level: "AAA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: Equivalent, Inline, User Agent Control, Essential.",
    summary: "Touch targets should be at least 44x44 pixels.",
    whyItMatters: "Larger targets are easier to tap for everyone.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Older users"],
  },
  {
    id: "2-5-6",
    number: "2.5.6",
    title: "Concurrent Input Mechanisms",
    level: "AAA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: false,
    description:
      "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
    summary: "Allow users to switch between input methods (mouse, keyboard, touch) at any time.",
    whyItMatters: "Users may need to switch input methods depending on the task or fatigue.",
    whoBenefits: ["All users", "Users with motor disabilities"],
  },
  {
    id: "2-5-7",
    number: "2.5.7",
    title: "Dragging Movements",
    level: "AA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: true,
    description:
      "All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging.",
    summary: "Provide alternatives to drag-and-drop interactions like buttons or direct input.",
    whyItMatters: "Users with motor disabilities may struggle with precise dragging movements.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Users with tremors"],
  },
  {
    id: "2-5-8",
    number: "2.5.8",
    title: "Target Size (Minimum)",
    level: "AA",
    principle: "operable",
    guideline: "Input Modalities",
    guidelineNumber: "2.5",
    isNew: true,
    description: "The size of the target for pointer inputs is at least 24 by 24 CSS pixels.",
    summary: "Touch targets must be at least 24x24 pixels to be easily tappable.",
    whyItMatters: "Small targets are difficult to tap for users with motor disabilities or on mobile devices.",
    whoBenefits: ["Users with motor disabilities", "Mobile users", "Older users"],
  },
  // Principle 3: Understandable
  // Guideline 3.1 Readable
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
  },
  // Guideline 3.2 Predictable
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
  },
  // Guideline 3.3 Input Assistance
  {
    id: "3-3-1",
    number: "3.3.1",
    title: "Error Identification",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
    summary: "Clearly identify form errors and describe them in text that screen readers can access.",
    whyItMatters: "Users need to know what went wrong and where to fix it.",
    whoBenefits: ["All users", "Screen reader users", "Users with cognitive disabilities"],
  },
  {
    id: "3-3-2",
    number: "3.3.2",
    title: "Labels or Instructions",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description: "Labels or instructions are provided when content requires user input.",
    summary: "Every form field needs a clear label or instruction explaining what to enter.",
    whyItMatters: "Users need to understand what information is required in each field.",
    whoBenefits: ["All users", "Users with cognitive disabilities", "Screen reader users"],
  },
  {
    id: "3-3-3",
    number: "3.3.3",
    title: "Error Suggestion",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
    summary: "Suggest fixes for errors when possible (e.g., 'Did you mean...?').",
    whyItMatters: "Helps users correct mistakes quickly and easily.",
    whoBenefits: ["Users with cognitive disabilities", "All users"],
  },
  {
    id: "3-3-4",
    number: "3.3.4",
    title: "Error Prevention (Legal, Financial, Data)",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Reversible, Checked, Confirmed.",
    summary: "Prevent serious errors by allowing reversal, checking, or confirmation.",
    whyItMatters: "Prevents costly or irreversible mistakes.",
    whoBenefits: ["All users", "Users with motor disabilities"],
  },
  {
    id: "3-3-5",
    number: "3.3.5",
    title: "Help",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description: "Context-sensitive help is available.",
    summary: "Provide help text relevant to the current task.",
    whyItMatters: "Helps users understand complex forms or tasks.",
    whoBenefits: ["Users with cognitive disabilities", "All users"],
  },
  {
    id: "3-3-6",
    number: "3.3.6",
    title: "Error Prevention (All)",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: false,
    description:
      "For Web pages that require the user to submit information, at least one of the following is true: Reversible, Checked, Confirmed.",
    summary: "Prevent errors on ALL forms, not just legal/financial ones.",
    whyItMatters: "Prevents mistakes on any type of form submission.",
    whoBenefits: ["All users"],
  },
  {
    id: "3-3-7",
    number: "3.3.7",
    title: "Redundant Entry",
    level: "A",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description:
      "Information previously entered by or provided to the user is auto-populated or available for selection.",
    summary: "Don't make users re-enter information they've already provided in the same session.",
    whyItMatters: "Re-entering data increases cognitive load and error potential.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "All users"],
  },
  {
    id: "3-3-8",
    number: "3.3.8",
    title: "Accessible Authentication (Minimum)",
    level: "AA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description:
      "A cognitive function test is not required for authentication unless alternative methods are provided.",
    summary:
      "Provide authentication methods that don't require solving puzzles, remembering passwords, or transcribing text.",
    whyItMatters: "CAPTCHAs and memory tests exclude users with cognitive disabilities.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "Older users"],
  },
  {
    id: "3-3-9",
    number: "3.3.9",
    title: "Accessible Authentication (Enhanced)",
    level: "AAA",
    principle: "understandable",
    guideline: "Input Assistance",
    guidelineNumber: "3.3",
    isNew: true,
    description: "A cognitive function test is not required for authentication.",
    summary: "No cognitive tests required for authentication at all - provide fully accessible alternatives.",
    whyItMatters: "Enhanced protection ensures maximum accessibility for authentication.",
    whoBenefits: ["Users with cognitive disabilities", "Users with memory impairments", "All users"],
  },
  // Principle 4: Robust
  // Guideline 4.1 Compatible
  {
    id: "4-1-1",
    number: "4.1.1",
    title: "Parsing",
    level: "A",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
    summary: "Ensure HTML is valid and error-free (Note: Obsolete in WCAG 2.2 but kept for reference).",
    whyItMatters: "Ensures browsers and assistive technologies can parse the code correctly.",
    whoBenefits: ["All users"],
  },
  {
    id: "4-1-2",
    number: "4.1.2",
    title: "Name, Role, Value",
    level: "A",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "For all user interface components, the name and role can be programmatically determined; states, properties, and values can be programmatically set; and notification of changes is available to user agents.",
    summary: "Use proper ARIA attributes and semantic HTML so assistive technologies understand component purpose.",
    whyItMatters: "Screen readers need to know what each element is and how to interact with it.",
    whoBenefits: ["Screen reader users", "Keyboard users", "Voice control users"],
  },
  {
    id: "4-1-3",
    number: "4.1.3",
    title: "Status Messages",
    level: "AA",
    principle: "robust",
    guideline: "Compatible",
    guidelineNumber: "4.1",
    isNew: false,
    description:
      "Status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
    summary: "Use ARIA live regions to announce status messages without moving keyboard focus.",
    whyItMatters: "Screen reader users need to know about status updates without focus interruption.",
    whoBenefits: ["Screen reader users", "Keyboard users", "Users with attention disorders"],
  },
]

export function getCriteriaByPrinciple(principle: string) {
  return successCriteria.filter((c) => c.principle === principle)
}

export function getCriterionById(id: string) {
  return successCriteria.find((c) => c.id === id)
}

export function getNewCriteria() {
  return successCriteria.filter((c) => c.isNew)
}

export function getCriteriaByLevel(level: "A" | "AA" | "AAA") {
  if (level === "AAA") {
    return successCriteria // All criteria
  } else if (level === "AA") {
    return successCriteria.filter((c) => c.level === "A" || c.level === "AA")
  } else {
    return successCriteria.filter((c) => c.level === "A")
  }
}
