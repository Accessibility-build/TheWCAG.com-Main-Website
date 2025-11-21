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
    details: {
      introduction:
        "This criterion requires providing sign language interpretation for prerecorded synchronized media. Sign language is the primary language for many deaf users and provides better comprehension than text captions alone.",
      intent:
        "The intent is to provide sign language interpretation as an alternative to captions, recognizing that sign language is the native language for many deaf users and may provide better comprehension than written text.",
    },
    examples: [
      {
        title: "Video Without Sign Language",
        description: "A video has captions but no sign language interpretation.",
        type: "bad",
        code: `<video controls>
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>`,
      },
      {
        title: "Video With Sign Language",
        description: "A video includes sign language interpretation as an additional track.",
        type: "good",
        code: `<video controls>
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  <track kind="sign" src="sign-language.vtt" srclang="asl" label="American Sign Language">
</video>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Video with sign language interpretation -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English" default>
  <track kind="sign" src="sign-language.vtt" srclang="asl" label="American Sign Language">
</video>

<!-- Sign language can be provided as a picture-in-picture overlay or separate video track -->`,
      react: `// ✅ Good: Video component with sign language
function VideoWithSignLanguage() {
  return (
    <video controls>
      <source src="/video.mp4" type="video/mp4" />
      <track
        kind="captions"
        src="/captions.vtt"
        srcLang="en"
        label="English"
        default
      />
      <track
        kind="sign"
        src="/sign-language.vtt"
        srcLang="asl"
        label="American Sign Language"
      />
    </video>
  )
}`,
    },
    testing: {
      manual: [
        "Check that sign language interpretation is available for all prerecorded video content",
        "Verify sign language interpretation is synchronized with the video",
        "Test that users can select sign language as an option",
        "Check that sign language interpretation covers all important audio content",
        "Verify sign language is clearly visible and not obscured",
      ],
      automated: ["Tools can detect track elements but cannot verify sign language quality"],
    },
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
    details: {
      introduction:
        "Extended audio description pauses the video to insert additional audio description when natural pauses in the audio are too short to adequately describe important visual information.",
      intent:
        "The intent is to ensure that blind users receive all important visual information, even in fast-paced videos where standard audio description cannot fit into natural pauses.",
    },
    examples: [
      {
        title: "Fast-Paced Video Without Extended Description",
        description: "A fast-paced video has standard audio description that misses important visual details.",
        type: "bad",
        code: `<video>
  <track kind="descriptions" src="standard-descriptions.vtt">
</video>`,
      },
      {
        title: "Video With Extended Audio Description",
        description: "A video includes extended audio description that pauses the video to describe important visual elements.",
        type: "good",
        code: `<video>
  <track kind="descriptions" src="extended-descriptions.vtt">
  <!-- Extended description pauses video to describe complex scenes -->
</video>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Video with extended audio description -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="descriptions" src="extended-descriptions.vtt" srclang="en" label="Extended Audio Description">
</video>

<!-- Extended audio description pauses video to insert detailed descriptions -->`,
      react: `// ✅ Good: Video with extended audio description
function VideoWithExtendedDescription() {
  return (
    <video controls>
      <source src="/video.mp4" type="video/mp4" />
      <track
        kind="descriptions"
        src="/extended-descriptions.vtt"
        srcLang="en"
        label="Extended Audio Description"
      />
    </video>
  )
}`,
    },
    testing: {
      manual: [
        "Check that extended audio description is available for fast-paced videos",
        "Verify that extended descriptions pause the video when needed",
        "Test that all important visual information is described",
        "Check that extended descriptions don't interfere with understanding the narrative",
        "Verify extended descriptions are synchronized correctly",
      ],
      automated: ["Tools can detect track elements but cannot verify description quality or timing"],
    },
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
    details: {
      introduction:
        "This criterion requires providing a complete text alternative (transcript) for all prerecorded video content. The transcript should include all dialogue, sound effects, and descriptions of important visual information.",
      intent:
        "The intent is to provide a text-based alternative that allows users to access all information from the video at their own pace, search the content, and use assistive technologies effectively.",
    },
    examples: [
      {
        title: "Video Without Transcript",
        description: "A video has captions but no full transcript available.",
        type: "bad",
        code: `<video controls>
  <track kind="captions" src="captions.vtt">
</video>
<!-- No transcript link provided -->`,
      },
      {
        title: "Video With Full Transcript",
        description: "A video includes a link to a complete transcript with all dialogue and descriptions.",
        type: "good",
        code: `<video controls>
  <track kind="captions" src="captions.vtt">
</video>
<a href="transcript.txt">View Full Transcript</a>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Video with transcript link -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>
<div>
  <a href="transcript.html" aria-label="Full transcript of video content">
    View Full Transcript
  </a>
</div>

<!-- Transcript should include:
- All dialogue
- Speaker identification
- Sound effects
- Descriptions of important visual information
- Timestamps (optional but helpful) -->`,
      react: `// ✅ Good: Video component with transcript
function VideoWithTranscript() {
  return (
    <div>
      <video controls>
        <source src="/video.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/captions.vtt"
          srcLang="en"
          label="English"
        />
      </video>
      <div className="mt-4">
        <a href="/transcript" aria-label="Full transcript of video content">
          View Full Transcript
        </a>
      </div>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that a full transcript is available for all prerecorded video content",
        "Verify transcript includes all dialogue and important audio information",
        "Check that transcript includes descriptions of important visual information",
        "Test that transcript is accessible (properly formatted, readable)",
        "Verify transcript link is clearly labeled and easy to find",
      ],
      automated: ["Tools can detect links but cannot verify transcript completeness or quality"],
    },
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
    details: {
      introduction:
        "This criterion requires providing real-time captions or transcripts for live audio-only content, such as live radio broadcasts, webinars, or live podcasts.",
      intent:
        "The intent is to ensure that deaf and hard of hearing users can access live audio content through real-time text alternatives, which may require human captioners or advanced speech-to-text technology.",
    },
    examples: [
      {
        title: "Live Audio Without Captions",
        description: "A live audio stream has no real-time captions or transcript.",
        type: "bad",
        code: `<audio controls>
  <source src="live-stream.mp3" type="audio/mpeg">
</audio>
<!-- No live captions available -->`,
      },
      {
        title: "Live Audio With Real-Time Captions",
        description: "A live audio stream includes real-time captions that update as the audio plays.",
        type: "good",
        code: `<audio controls>
  <source src="live-stream.mp3" type="audio/mpeg">
</audio>
<div id="live-captions" aria-live="polite">
  <!-- Real-time captions appear here -->
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Live audio with real-time captions -->
<audio controls id="live-audio">
  <source src="live-stream.mp3" type="audio/mpeg">
</audio>
<div id="live-captions" aria-live="polite" role="log" aria-label="Live captions">
  <!-- Captions updated in real-time via WebSocket or similar -->
</div>

<!-- Implementation typically requires:
- WebSocket connection for real-time caption data
- Speech-to-text service or human captioner
- Synchronization with audio playback -->`,
      react: `// ✅ Good: Live audio component with real-time captions
function LiveAudioWithCaptions() {
  const [captions, setCaptions] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    // Connect to live caption service
    const ws = new WebSocket('wss://caption-service.com/live')
    
    ws.onmessage = (event) => {
      const captionData = JSON.parse(event.data)
      setCaptions(captionData.text)
    }

    return () => ws.close()
  }, [])

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src="/live-stream.mp3" type="audio/mpeg" />
      </audio>
      <div
        id="live-captions"
        aria-live="polite"
        role="log"
        aria-label="Live captions"
        className="mt-4 p-4 bg-gray-100 rounded"
      >
        {captions}
      </div>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that live captions or transcript are available for live audio content",
        "Verify captions update in real-time with minimal delay",
        "Test that captions are synchronized with the audio",
        "Check that captions are accurate and complete",
        "Verify captions are accessible (properly formatted, readable)",
      ],
      automated: ["Tools cannot verify real-time caption accuracy or synchronization"],
    },
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
    details: {
      introduction:
        "This criterion ensures that when content order matters (like instructions or a sequence of steps), the programmatic order matches the visual order.",
      intent:
        "The intent is to ensure that any meaning that depends on the order of content is preserved when the content is presented in a different modality or style. Screen readers read content in DOM order, not visual order.",
    },
    examples: [
      {
        title: "Instructions with Wrong DOM Order",
        description: "Visual layout shows steps 1-2-3, but DOM order is 3-1-2, confusing screen reader users.",
        type: "bad",
        code: `<div style="display: flex; flex-direction: row-reverse;">
  <div>Step 3</div>
  <div>Step 1</div>
  <div>Step 2</div>
</div>`,
      },
      {
        title: "Correct DOM Order",
        description: "DOM order matches visual order, so screen readers read steps in the correct sequence.",
        type: "good",
        code: `<div>
  <div>Step 1: First, gather ingredients</div>
  <div>Step 2: Then, mix them together</div>
  <div>Step 3: Finally, bake for 30 minutes</div>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Logical DOM order -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- ❌ Bad: Using CSS to reorder -->
<div style="display: flex; flex-direction: row-reverse;">
  <div>Step 3</div>
  <div>Step 1</div>
  <div>Step 2</div>
</div>`,
      css: `/* ✅ Good: Visual styling without changing order */
.steps {
  display: flex;
  gap: 1rem;
}

/* ❌ Bad: Reordering with CSS */
.steps {
  display: flex;
  flex-direction: row-reverse; /* Changes visual order */
}`,
      react: `// ✅ Good: Logical order in JSX
function Steps() {
  return (
    <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  )
}

// ❌ Bad: Reordered array
function Steps() {
  const steps = ["Step 3", "Step 1", "Step 2"]
  return (
    <div>
      {steps.map(step => <div key={step}>{step}</div>)}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Use Tab key to navigate through content and verify order makes sense",
        "Use screen reader (NVDA/JAWS) to read page and verify sequence is logical",
        "Check if CSS transforms or flexbox reordering changes visual vs DOM order",
        "Verify instructions or sequential content reads in correct order",
      ],
      automated: ["Tools can check DOM order but cannot verify if it matches intended meaning"],
    },
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
    details: {
      introduction:
        "This criterion ensures that instructions don't require users to perceive sensory characteristics that some users cannot access.",
      intent:
        "The intent is to ensure that all users can access instructions. Instructions should use labels, names, or text descriptions rather than relying on visual or auditory characteristics alone.",
    },
    examples: [
      {
        title: "Relying on Shape",
        description: "Instruction says 'click the round button' - blind users can't see shapes.",
        type: "bad",
        code: `<!-- Instruction: "Click the round button" -->
<button>Submit</button>`,
      },
      {
        title: "Using Label",
        description: "Instruction says 'click the Submit button' - accessible to all users.",
        type: "good",
        code: `<!-- Instruction: "Click the Submit button" -->
<button>Submit</button>`,
      },
      {
        title: "Relying on Location",
        description: "Instruction says 'use the button on the right' - screen reader users can't see layout.",
        type: "bad",
      },
      {
        title: "Using Name",
        description: "Instruction says 'use the Search button' - accessible by name.",
        type: "good",
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Instruction relies on visual location -->
<p>Click the button on the right</p>
<button>Submit</button>

<!-- ✅ Good: Instruction uses button name -->
<p>Click the Submit button</p>
<button>Submit</button>

<!-- ❌ Bad: Instruction relies on color -->
<p>Click the red button</p>
<button style="background: red;">Delete</button>

<!-- ✅ Good: Instruction uses label -->
<p>Click the Delete button</p>
<button style="background: red;">Delete</button>`,
      react: `// ❌ Bad: Instruction relies on shape
function Form() {
  return (
    <>
      <p>Click the round button</p>
      <button className="round">Submit</button>
    </>
  )
}

// ✅ Good: Instruction uses accessible name
function Form() {
  return (
    <>
      <p>Click the Submit button</p>
      <button className="round" aria-label="Submit form">Submit</button>
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Read all instructions on the page",
        "Check if any instructions rely on shape, color, size, or location",
        "Verify instructions can be followed without seeing or hearing the interface",
        "Test with screen reader to ensure instructions make sense",
      ],
      automated: ["Cannot be fully automated - requires manual review of instruction text"],
    },
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
    details: {
      introduction:
        "This criterion requires using semantic markup and ARIA attributes to identify the purpose of UI components, icons, and regions, enabling personalization tools to adapt the interface to user needs.",
      intent:
        "The intent is to support personalization by making component purposes programmatically determinable, allowing tools to replace icons with text, change colors, or modify layouts based on user preferences.",
    },
    examples: [
      {
        title: "Icon Without Semantic Purpose",
        description: "An icon button has no semantic indication of its purpose.",
        type: "bad",
        code: `<button><img src="search-icon.png" alt=""></button>`,
      },
      {
        title: "Icon With Semantic Purpose",
        description: "An icon button uses ARIA attributes to identify its purpose.",
        type: "good",
        code: `<button aria-label="Search" data-purpose="search">
  <img src="search-icon.png" alt="">
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Components with identified purpose -->
<nav aria-label="Main navigation" data-purpose="navigation">
  <ul>
    <li>
      <a href="/search" data-purpose="search" aria-label="Search">
        <svg aria-hidden="true"><!-- Search icon --></svg>
      </a>
    </li>
  </ul>
</nav>

<button data-purpose="submit" aria-label="Submit form">
  Submit
</button>

<!-- Use data-purpose or ARIA attributes to identify component purpose -->`,
      react: `// ✅ Good: Components with semantic purpose
function SearchButton() {
  return (
    <button
      aria-label="Search"
      data-purpose="search"
      onClick={handleSearch}
    >
      <SearchIcon aria-hidden="true" />
    </button>
  )
}

function Navigation() {
  return (
    <nav aria-label="Main navigation" data-purpose="navigation">
      {/* Navigation items */}
    </nav>
  )
}`,
    },
    testing: {
      manual: [
        "Check that UI components have identifiable purposes using semantic markup",
        "Verify icons have data-purpose attributes or ARIA labels",
        "Test that regions are properly identified with landmarks",
        "Check that personalization tools can identify component purposes",
        "Verify that purpose identification is programmatically determinable",
      ],
      automated: ["Tools can check for ARIA attributes and data attributes but cannot verify personalization compatibility"],
    },
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
      html: `<!-- ❌ Bad: Auto-playing without controls -->
<audio src="music.mp3" autoplay loop></audio>

<!-- ✅ Good: Audio with controls -->
<audio src="music.mp3" controls></audio>

<!-- ✅ Good: Auto-play with pause button -->
<audio id="bgAudio" src="music.mp3" autoplay loop></audio>
<button onclick="document.getElementById('bgAudio').pause()">
  Pause Background Music
</button>`,
      react: `// ✅ Good: Controlled audio playback
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
      html: `<!-- ✅ Good: Responsive text container -->
<div style="max-width: 100%; padding: 1rem;">
  <h1>Heading</h1>
  <p>Text that can be zoomed without breaking layout.</p>
</div>

<!-- ❌ Bad: Fixed width with overflow -->
<div style="width: 300px; overflow: hidden;">
  <p>Text that gets cut off when zoomed.</p>
</div>`,
      css: `/* ✅ Good: Use relative units and max-width */
.container {
  max-width: 100%;
  padding: 1rem;
}

.text {
  font-size: 1rem; /* Can be zoomed by browser */
}

/* ❌ Bad: Fixed sizes prevent zooming */
.container {
  width: 300px;
  overflow: hidden;
}

.text {
  font-size: 12px; /* Too small, hard to zoom */
}`,
      react: `// ✅ Good: Responsive text component
function TextContent() {
  return (
    <div className="max-w-full p-4">
      <h1 className="text-2xl">Heading</h1>
      <p className="text-base">Text that scales properly.</p>
    </div>
  )
}

// ❌ Bad: Fixed width component
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
      html: `<!-- ❌ Bad: Image of text for heading -->
<img src="heading.png" alt="Welcome">

<!-- ✅ Good: Real text with CSS styling -->
<h1 class="custom-heading">Welcome</h1>
<style>
  .custom-heading {
    font-family: 'Custom Font', sans-serif;
    font-size: 2rem;
    color: #333;
  }
</style>

<!-- ✅ Good: Logo (exception - visual presentation is essential) -->
<img src="logo.png" alt="Company Name">`,
      css: `/* ✅ Good: Use CSS for text styling */
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
      react: `// ❌ Bad: Using image for text
function Heading() {
  return <img src="/heading.png" alt="Welcome" />
}

// ✅ Good: Using real text with styling
function Heading() {
  return (
    <h1 className="custom-heading">
      Welcome
    </h1>
  )
}

// ✅ Good: Logo exception
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
      html: `<!-- ✅ Good: High contrast text (7:1) -->
<p style="color: #000000; background: #ffffff;">
  Normal text with 7:1 contrast ratio
</p>

<!-- ✅ Good: Large text with 4.5:1 contrast -->
<h1 style="color: #333333; background: #ffffff;">
  Large text with 4.5:1 contrast ratio
</h1>

<!-- ❌ Bad: Insufficient contrast -->
<p style="color: #999999; background: #ffffff;">
  Text with only 2.5:1 contrast
</p>`,
      css: `/* ✅ Good: High contrast for normal text */
.text {
  color: #000000; /* 21:1 contrast with white */
  background-color: #ffffff;
}

/* ✅ Good: Large text with adequate contrast */
.large-text {
  color: #333333; /* 12.6:1 contrast with white */
  font-size: 18pt; /* Large text */
  background-color: #ffffff;
}

/* ❌ Bad: Insufficient contrast */
.low-contrast {
  color: #999999; /* 2.5:1 contrast */
  background-color: #ffffff;
}`,
      react: `// ✅ Good: High contrast text component
function HighContrastText({ children }) {
  return (
    <p style={{ color: '#000000', backgroundColor: '#ffffff' }}>
      {children}
    </p>
  )
}

// ✅ Good: Large text with adequate contrast
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
      html: `<!-- ✅ Good: Audio with background control -->
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
      react: `// ✅ Good: Audio player with background control
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
      html: `<!-- ✅ Good: Text with customization controls -->
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
      react: `// ✅ Good: Customizable text component
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
      html: `<!-- ❌ Bad: Image of text for heading -->
<img src="heading.png" alt="Welcome">

<!-- ✅ Good: Real text with CSS styling -->
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

<!-- ✅ Good: Logo (exception - visual presentation is essential) -->
<img src="logo.png" alt="Company Name">

<!-- ✅ Good: Decorative text image -->
<img src="decorative-text.png" alt="" role="presentation">`,
      css: `/* ✅ Good: Use CSS for all text styling */
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
      react: `// ❌ Bad: Using image for text
function Heading() {
  return <img src="/heading.png" alt="Welcome" />
}

// ✅ Good: Using real text with styling
function Heading() {
  return (
    <h1 className="custom-heading">
      Welcome
    </h1>
  )
}

// ✅ Good: Logo exception
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
      html: `<!-- ✅ Good: Responsive container -->
<div style="max-width: 100%; overflow-x: auto;">
  <table>
    <tr><th>Header 1</th><th>Header 2</th></tr>
  </table>
</div>

<!-- ❌ Bad: Fixed width -->
<div style="width: 800px;">
  <p>Content that requires horizontal scrolling</p>
</div>`,
      css: `/* ✅ Good: Responsive design */
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

/* ❌ Bad: Fixed widths */
.container {
  width: 1200px; /* Too wide for 320px viewport */
}`,
      react: `// ✅ Good: Responsive component
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

// ❌ Bad: Fixed width component
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
      html: `<!-- ❌ Bad: Low contrast button -->
<button style="background: #e0e0e0; color: #f5f5f5;">Submit</button>

<!-- ✅ Good: High contrast button -->
<button style="background: #0066cc; color: #ffffff;">Submit</button>

<!-- ✅ Good: Icon with sufficient contrast -->
<svg fill="#000000" aria-label="Search">
  <path d="..."/>
</svg>`,
      css: `/* ✅ Good: Sufficient contrast for UI components */
.button {
  background-color: #0066cc; /* 4.5:1 contrast with white */
  color: #ffffff;
  border: 2px solid #004499; /* 3:1 contrast for border */
}

.icon {
  color: #333333; /* 12:1 contrast with white */
}

/* ❌ Bad: Insufficient contrast */
.button {
  background-color: #e0e0e0; /* 1.5:1 contrast */
  color: #f5f5f5;
}`,
      react: `// ✅ Good: High contrast button
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

// ❌ Bad: Low contrast button
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
      html: `<!-- ✅ Good: Flexible text container -->
<div class="text-content">
  <p>This text will adapt to increased spacing.</p>
</div>

<!-- ❌ Bad: Fixed height container -->
<div style="height: 200px; overflow: hidden;">
  <p>Text that gets cut off.</p>
</div>`,
      css: `/* ✅ Good: Allow spacing adjustments */
.text-content {
  min-height: auto; /* Allows expansion */
  padding: 1rem;
}

/* Don't use fixed heights that prevent expansion */
/* ❌ Bad */
.fixed-container {
  height: 200px;
  overflow: hidden;
}

/* ✅ Good: Use min-height instead */
.flexible-container {
  min-height: 200px;
}`,
      react: `// ✅ Good: Flexible text component
function TextContent() {
  return (
    <div className="min-h-auto p-4">
      <p>Text that adapts to spacing changes.</p>
    </div>
  )
}

// ❌ Bad: Fixed height component
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
      html: `<!-- ❌ Bad: Tooltip that disappears immediately -->
<button onmouseenter="show()" onmouseleave="hide()">
  Hover me
</button>

<!-- ✅ Good: Dismissible tooltip -->
<button aria-describedby="tooltip" id="trigger">
  Hover me
</button>
<div id="tooltip" role="tooltip" aria-hidden="true">
  <p>Helpful information</p>
  <button onclick="dismissTooltip()">Close</button>
</div>

<!-- ✅ Good: Persistent dropdown -->
<div class="dropdown">
  <button aria-expanded="false" aria-haspopup="true">Menu</button>
  <ul role="menu" aria-hidden="true">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>`,
      css: `/* ✅ Good: Tooltip that can be hovered */
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
      react: `// ✅ Good: Accessible tooltip component
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
    details: {
      introduction:
        "This criterion is stricter than Level A 2.1.1, requiring that ALL functionality is keyboard accessible with no exceptions, and without requiring specific timings for keystrokes.",
      intent:
        "The intent is to ensure complete keyboard access for users who cannot use pointing devices, with no exceptions for any functionality.",
    },
    examples: [
      {
        title: "Mouse-Only Functionality",
        description: "Some functionality can only be accessed with a mouse, violating this criterion.",
        type: "bad",
        code: `<div onmouseover="showMenu()" onmouseout="hideMenu()">
  Menu
</div>`,
      },
      {
        title: "Fully Keyboard Accessible",
        description: "All functionality is accessible via keyboard, including focus and keyboard events.",
        type: "good",
        code: `<div onfocus="showMenu()" onblur="hideMenu()" tabindex="0">
  Menu
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Mouse-only functionality -->
<div onmouseover="showMenu()" onmouseout="hideMenu()">
  Menu
</div>

<!-- ✅ Good: Keyboard accessible -->
<div 
  onfocus="showMenu()" 
  onblur="hideMenu()" 
  onkeydown="handleKeyDown(event)"
  tabindex="0"
  role="button"
  aria-haspopup="true"
>
  Menu
</div>`,
      react: `// ✅ Good: Fully keyboard accessible component
function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      Menu
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Test all functionality using only keyboard (Tab, Enter, Space, Arrow keys)",
        "Verify no functionality requires mouse or pointer",
        "Check that all interactive elements are keyboard accessible",
        "Test that keyboard navigation works without timing requirements",
        "Verify that complex interactions can be completed with keyboard only",
      ],
      automated: ["Tools can check for keyboard accessibility but cannot verify all functionality"],
    },
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
    details: {
      introduction:
        "This criterion requires that no time limits are imposed on user interactions, except for non-interactive synchronized media (like videos) and real-time events (like auctions).",
      intent:
        "The intent is to ensure that users can complete tasks at their own pace without pressure from time limits, which is especially important for users with cognitive or motor disabilities.",
    },
    examples: [
      {
        title: "Form With Time Limit",
        description: "A form automatically submits after 5 minutes, causing data loss.",
        type: "bad",
        code: `<form onsubmit="submitForm()">
  <!-- Form auto-submits after 5 minutes -->
</form>`,
      },
      {
        title: "Form Without Time Limit",
        description: "A form allows users to take as long as needed to complete it.",
        type: "good",
        code: `<form>
  <!-- No time limit, users can take as long as needed -->
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Form with time limit -->
<form id="timed-form">
  <!-- Auto-submits after timeout -->
</form>
<script>
  setTimeout(() => {
    document.getElementById('timed-form').submit()
  }, 300000) // 5 minutes
</script>

<!-- ✅ Good: No time limit -->
<form>
  <!-- Users can take as long as needed -->
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      react: `// ❌ Bad: Component with time limit
function TimedForm() {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit() // Auto-submit after timeout
    }, 300000)
    return () => clearTimeout(timer)
  }, [])

  return <form>{/* Form content */}</form>
}

// ✅ Good: No time limit
function Form() {
  return (
    <form>
      {/* Users can take as long as needed */}
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check that no time limits are imposed on user interactions",
        "Verify forms don't auto-submit after a timeout",
        "Test that users can take as long as needed to complete tasks",
        "Check that data is preserved if users take a long time",
        "Verify exceptions are only for non-interactive media or real-time events",
      ],
      automated: ["Tools can detect setTimeout/setInterval but cannot verify if timing is essential"],
    },
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
    details: {
      introduction:
        "This criterion requires that users can postpone or suppress interruptions like alerts, notifications, or updates, except for emergency situations.",
      intent:
        "The intent is to allow users to control when they receive interruptions, helping them maintain focus and complete tasks without distraction.",
    },
    examples: [
      {
        title: "Unstoppable Alerts",
        description: "Alerts appear automatically and cannot be postponed or suppressed.",
        type: "bad",
        code: `<div id="alert" class="alert">
  Important notification
</div>
<script>
  setInterval(() => {
    document.getElementById('alert').style.display = 'block'
  }, 30000)
</script>`,
      },
      {
        title: "Controllable Alerts",
        description: "Alerts can be postponed or suppressed by the user.",
        type: "good",
        code: `<div id="alert" class="alert">
  Important notification
  <button onclick="postponeAlert()">Postpone</button>
  <button onclick="dismissAlert()">Dismiss</button>
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Unstoppable interruptions -->
<div id="notification" class="notification">
  New message received
</div>
<script>
  // Cannot be postponed or suppressed
  setInterval(showNotification, 30000)
</script>

<!-- ✅ Good: Controllable interruptions -->
<div id="notification" class="notification">
  New message received
  <button onclick="postponeNotification()">Postpone</button>
  <button onclick="dismissNotification()">Dismiss</button>
</div>

<!-- ✅ Good: Settings to suppress interruptions -->
<label>
  <input type="checkbox" id="suppress-notifications">
  Suppress notifications
</label>`,
      react: `// ✅ Good: Controllable notifications
function Notification({ message, onPostpone, onDismiss }) {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onPostpone}>Postpone</button>
      <button onClick={onDismiss}>Dismiss</button>
    </div>
  )
}

// ✅ Good: Settings to suppress interruptions
function NotificationSettings() {
  const [suppressNotifications, setSuppressNotifications] = useState(false)

  return (
    <label>
      <input
        type="checkbox"
        checked={suppressNotifications}
        onChange={(e) => setSuppressNotifications(e.target.checked)}
      />
      Suppress notifications
    </label>
  )
}`,
    },
    testing: {
      manual: [
        "Check that interruptions can be postponed or suppressed",
        "Verify users can control when they receive notifications",
        "Test that suppression settings persist",
        "Check that emergency interruptions are still shown",
        "Verify that postponed interruptions can be viewed later",
      ],
      automated: ["Tools can detect notification elements but cannot verify postponement functionality"],
    },
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
    details: {
      introduction:
        "This criterion requires that when a user's session expires, they can re-authenticate and continue their work without losing any data they had entered.",
      intent:
        "The intent is to prevent data loss for users who take longer to complete tasks, ensuring that session expiration doesn't result in lost work.",
    },
    examples: [
      {
        title: "Session Expiration Loses Data",
        description: "When session expires, all form data is lost and cannot be recovered.",
        type: "bad",
        code: `<form>
  <input type="text" name="data">
  <!-- Data lost on session expiration -->
</form>`,
      },
      {
        title: "Session Expiration Preserves Data",
        description: "When session expires, data is saved and restored after re-authentication.",
        type: "good",
        code: `<form onchange="saveDraft()">
  <input type="text" name="data">
  <!-- Data saved and restored after re-auth -->
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Auto-save form data -->
<form id="user-form" onchange="saveDraft()">
  <input type="text" name="name" id="name">
  <textarea name="message" id="message"></textarea>
  <button type="submit">Submit</button>
</form>

<script>
function saveDraft() {
  const formData = {
    name: document.getElementById('name').value,
    message: document.getElementById('message').value
  }
  localStorage.setItem('formDraft', JSON.stringify(formData))
}

// Restore data after re-authentication
window.addEventListener('load', () => {
  const draft = localStorage.getItem('formDraft')
  if (draft) {
    const formData = JSON.parse(draft)
    document.getElementById('name').value = formData.name
    document.getElementById('message').value = formData.message
  }
})
</script>`,
      react: `// ✅ Good: Auto-save and restore form data
function FormWithAutoSave() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // Auto-save to localStorage
  useEffect(() => {
    const draft = { name, message }
    localStorage.setItem('formDraft', JSON.stringify(draft))
  }, [name, message])

  // Restore on mount
  useEffect(() => {
    const draft = localStorage.getItem('formDraft')
    if (draft) {
      const formData = JSON.parse(draft)
      setName(formData.name)
      setMessage(formData.message)
    }
  }, [])

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Start filling out a form or entering data",
        "Let the session expire (or simulate expiration)",
        "Re-authenticate",
        "Verify that all entered data is preserved and restored",
        "Check that users can continue where they left off",
        "Test that data is saved automatically as users type",
      ],
      automated: ["Tools cannot verify session expiration and data preservation"],
    },
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
    details: {
      introduction:
        "This criterion requires warning users about inactivity timeouts that could cause data loss, unless data is preserved for more than 20 hours.",
      intent:
        "The intent is to help users manage their time and prevent unexpected data loss by providing warnings about upcoming timeouts.",
    },
    examples: [
      {
        title: "Unexpected Timeout",
        description: "Session expires without warning, causing data loss.",
        type: "bad",
        code: `<form>
  <!-- No warning before timeout -->
</form>`,
      },
      {
        title: "Timeout With Warning",
        description: "Users are warned before session expires, allowing them to extend or save data.",
        type: "good",
        code: `<form>
  <!-- Warning shown before timeout -->
</form>
<div id="timeout-warning" class="warning">
  Your session will expire in 2 minutes. Click to extend.
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Timeout warning -->
<div id="timeout-warning" class="warning" style="display: none;">
  <p>Your session will expire in <span id="countdown">2</span> minutes.</p>
  <button onclick="extendSession()">Extend Session</button>
  <button onclick="saveAndLogout()">Save and Logout</button>
</div>

<script>
let timeoutWarning = null
let sessionTimeout = null

function startSessionTimer() {
  // Show warning 2 minutes before timeout
  timeoutWarning = setTimeout(() => {
    document.getElementById('timeout-warning').style.display = 'block'
    startCountdown()
  }, 13 * 60 * 1000) // 13 minutes (15 min session - 2 min warning)

  // Actual timeout after 15 minutes
  sessionTimeout = setTimeout(() => {
    logout()
  }, 15 * 60 * 1000)
}

function extendSession() {
  clearTimeout(timeoutWarning)
  clearTimeout(sessionTimeout)
  document.getElementById('timeout-warning').style.display = 'none'
  startSessionTimer() // Restart timer
}
</script>`,
      react: `// ✅ Good: Timeout warning component
function TimeoutWarning({ onExtend, onSave }) {
  const [timeRemaining, setTimeRemaining] = useState(120) // 2 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeRemaining === 0) return null

  return (
    <div className="warning">
      <p>Your session will expire in {timeRemaining} seconds.</p>
      <button onClick={onExtend}>Extend Session</button>
      <button onClick={onSave}>Save and Logout</button>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that users are warned before inactivity timeouts",
        "Verify warning appears with sufficient time before timeout",
        "Test that users can extend the session from the warning",
        "Check that users can save data before timeout",
        "Verify that warnings are clear and actionable",
      ],
      automated: ["Tools cannot verify timeout warnings or timing"],
    },
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
    details: {
      introduction:
        "This criterion is stricter than Level A 2.3.1, requiring that content does not flash more than 3 times per second with no exceptions, providing maximum safety for users with photosensitive epilepsy.",
      intent:
        "The intent is to prevent seizures by ensuring no content flashes more than 3 times per second, with no threshold exceptions.",
    },
    examples: [
      {
        title: "Fast Flashing Content",
        description: "Content flashes 5 times per second, exceeding the limit.",
        type: "bad",
        code: `<div class="flashing" style="animation: flash 0.2s infinite;">
  Flashing content
</div>`,
      },
      {
        title: "Slow Flashing Content",
        description: "Content flashes at most 3 times per second, meeting the requirement.",
        type: "good",
        code: `<div class="flashing" style="animation: flash 0.4s infinite;">
  Slow flashing content
</div>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Fast flashing (5 times per second) -->
<div class="flashing" style="animation: flash 0.2s infinite;">
  Flashing content
</div>

<!-- ✅ Good: Slow flashing (2 times per second) -->
<div class="flashing" style="animation: flash 0.5s infinite;">
  Slow flashing content
</div>

<!-- ✅ Good: No flashing -->
<div class="static">
  Static content
</div>`,
      css: `/* ❌ Bad: Fast flash animation */
@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.flashing {
  animation: flash 0.2s infinite; /* 5 flashes per second */
}

/* ✅ Good: Slow flash animation */
@keyframes slow-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.flashing {
  animation: slow-flash 0.5s infinite; /* 2 flashes per second */
}`,
      react: `// ❌ Bad: Fast flashing component
function FlashingContent() {
  return (
    <div
      style={{
        animation: 'flash 0.2s infinite'
      }}
    >
      Flashing content
    </div>
  )
}

// ✅ Good: Slow flashing or no flashing
function SafeContent() {
  return (
    <div
      style={{
        animation: 'slow-flash 0.5s infinite' // 2 flashes per second
      }}
    >
      Safe flashing content
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check all animated or flashing content on the page",
        "Verify no content flashes more than 3 times per second",
        "Test animations and transitions for flash frequency",
        "Check video content for flashing sequences",
        "Verify that all flashing content meets the 3-flash limit",
      ],
      automated: ["Tools can detect animations but cannot accurately measure flash frequency"],
    },
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
    details: {
      introduction:
        "This criterion requires that motion animations triggered by user interactions can be disabled, respecting the prefers-reduced-motion media query, unless the animation is essential.",
      intent:
        "The intent is to allow users with vestibular disorders to disable motion animations that could cause dizziness or nausea, while still allowing essential animations.",
    },
    examples: [
      {
        title: "Non-Disableable Animation",
        description: "Page transitions always animate, even when user prefers reduced motion.",
        type: "bad",
        code: `<div class="page-transition" style="animation: slide 0.5s;">
  Content
</div>`,
      },
      {
        title: "Respects Reduced Motion",
        description: "Animations are disabled when user prefers reduced motion.",
        type: "good",
        code: `<div class="page-transition">
  Content
</div>
<style>
@media (prefers-reduced-motion: reduce) {
  .page-transition {
    animation: none;
  }
}
</style>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Respects prefers-reduced-motion -->
<div class="animated-content">
  Content
</div>

<style>
.animated-content {
  animation: slide 0.5s;
}

@media (prefers-reduced-motion: reduce) {
  .animated-content {
    animation: none;
  }
}
</style>`,
      css: `/* ✅ Good: Respect user motion preferences */
.animated-element {
  transition: transform 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
    animation: none;
  }
}

/* ❌ Bad: Always animates */
.always-animated {
  animation: slide 0.5s;
  /* No respect for prefers-reduced-motion */
}`,
      react: `// ✅ Good: Respects prefers-reduced-motion
function AnimatedComponent() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  return (
    <div
      className={prefersReducedMotion ? 'static' : 'animated'}
      style={prefersReducedMotion ? {} : { animation: 'slide 0.5s' }}
    >
      Content
    </div>
  )
}

// ✅ Good: Using CSS media query
function Component() {
  return (
    <div className="animated-content">
      Content
    </div>
  )
}

// CSS:
// @media (prefers-reduced-motion: reduce) {
//   .animated-content { animation: none; }
// }`,
    },
    testing: {
      manual: [
        "Enable 'prefers-reduced-motion' in browser settings",
        "Check that motion animations are disabled",
        "Verify that essential animations still work if needed",
        "Test page transitions, hover effects, and scroll animations",
        "Check that reduced motion preference is respected",
      ],
      automated: ["Tools can check for prefers-reduced-motion CSS but cannot verify animation behavior"],
    },
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
      html: `<!-- ✅ Good: Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/electronics">Electronics</a></li>
    <li aria-current="page">Product Details</li>
  </ol>
</nav>

<!-- ✅ Good: Site map link -->
<nav>
  <a href="/sitemap">Site Map</a>
</nav>`,
      react: `// ✅ Good: Breadcrumb component
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
      html: `<!-- ❌ Bad: Generic link text -->
<p>To learn more, <a href="/products">click here</a>.</p>
<p><a href="/article">Read more</a> about this topic.</p>

<!-- ✅ Good: Descriptive link text -->
<p>To learn more, visit our <a href="/products">products page</a>.</p>
<p><a href="/article">Read more about accessibility guidelines</a>.</p>

<!-- ✅ Good: Using aria-label for additional context -->
<a href="/download" aria-label="Download the accessibility guide PDF">
  Download
</a>`,
      react: `// ❌ Bad: Generic link text
function Link() {
  return (
    <p>
      For more information, <a href="/about">click here</a>.
    </p>
  )
}

// ✅ Good: Descriptive link text
function Link() {
  return (
    <p>
      For more information, visit our <a href="/about">about page</a>.
    </p>
  )
}

// ✅ Good: Using aria-label when needed
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
      html: `<!-- ❌ Bad: No headings -->
<div>
  <p>Introduction text...</p>
  <p>Main content...</p>
</div>

<!-- ✅ Good: Proper heading hierarchy -->
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
      react: `// ✅ Good: Proper heading structure
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
      html: `<!-- ✅ Good: Scroll margin for focus -->
<style>
  :focus {
    scroll-margin-top: 100px; /* Accounts for sticky header */
  }
</style>
<header style="position: sticky; top: 0;">Navigation</header>
<a href="#">Link that stays visible when focused</a>

<!-- ❌ Bad: No scroll adjustment -->
<header style="position: fixed; top: 0; z-index: 1000;">Navigation</header>
<a href="#" style="margin-top: 60px;">Link that gets hidden</a>`,
      css: `/* ✅ Good: Ensure focus visibility */
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

/* ❌ Bad: No scroll margin */
:focus {
  outline: 2px solid blue;
  /* No scroll-margin, focus can be hidden */
}`,
      react: `// ✅ Good: Focus management with scroll
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
      html: `<!-- ✅ Good: Scroll margin ensures full visibility -->
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
      css: `/* ✅ Good: Ensure full focus visibility */
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
      react: `// ✅ Good: Full focus visibility
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
    isNew: true,
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
      html: `<!-- ✅ Good: Strong focus indicator -->
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
      css: `/* ✅ Good: Meets AAA focus appearance requirements */
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

/* ❌ Bad: Too thin, low contrast */
:focus {
  outline: 1px solid #ccc; /* Only 1px, low contrast */
}`,
      react: `// ✅ Good: Strong focus indicator
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
    details: {
      introduction:
        "This criterion requires that touch targets are at least 44x44 CSS pixels, which is larger than the Level AA requirement of 24x24 pixels, making them easier to tap for users with motor disabilities.",
      intent:
        "The intent is to ensure that interactive elements are large enough to be easily activated by users with motor disabilities or those using touch devices.",
    },
    examples: [
      {
        title: "Small Touch Target",
        description: "A button is only 20x20 pixels, too small to tap easily.",
        type: "bad",
        code: `<button style="width: 20px; height: 20px;">X</button>`,
      },
      {
        title: "Large Touch Target",
        description: "A button is 44x44 pixels, meeting the AAA requirement.",
        type: "good",
        code: `<button style="width: 44px; height: 44px; padding: 8px;">X</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Small touch target -->
<button style="width: 20px; height: 20px;">X</button>

<!-- ✅ Good: Large touch target (44x44px) -->
<button style="width: 44px; height: 44px; padding: 8px;">X</button>

<!-- ✅ Good: Using padding to increase target size -->
<button style="padding: 12px; min-width: 44px; min-height: 44px;">
  Click me
</button>`,
      css: `/* ✅ Good: Large touch targets */
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

.icon-button {
  width: 44px;
  height: 44px;
  padding: 8px;
}

/* ❌ Bad: Small touch targets */
.small-button {
  width: 20px;
  height: 20px;
}`,
      react: `// ✅ Good: Large touch target
function Button() {
  return (
    <button
      style={{
        minWidth: '44px',
        minHeight: '44px',
        padding: '12px'
      }}
    >
      Click me
    </button>
  )
}

// ✅ Good: Icon button with adequate size
function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '44px',
        height: '44px',
        padding: '8px'
      }}
      aria-label="Close"
    >
      {icon}
    </button>
  )
}`,
    },
    testing: {
      manual: [
        "Measure all interactive elements (buttons, links, form controls)",
        "Verify that touch targets are at least 44x44 CSS pixels",
        "Check that padding is included in target size calculations",
        "Test on touch devices to ensure targets are easily tappable",
        "Verify that exceptions (inline links, etc.) are appropriate",
      ],
      automated: ["Tools can measure element sizes but cannot verify touch target adequacy"],
    },
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
    details: {
      introduction:
        "This criterion requires that web content doesn't restrict users from switching between different input methods (mouse, keyboard, touch, etc.) unless the restriction is essential for security or functionality.",
      intent:
        "The intent is to allow users to use whatever input method works best for them at any given time, accommodating different needs and preferences.",
    },
    examples: [
      {
        title: "Restricted Input Method",
        description: "A form only accepts touch input and disables keyboard input.",
        type: "bad",
        code: `<form ontouchstart="enableForm()" onkeydown="disableForm()">
  <!-- Form only works with touch -->
</form>`,
      },
      {
        title: "Flexible Input Methods",
        description: "A form accepts input from any method (mouse, keyboard, touch).",
        type: "good",
        code: `<form>
  <!-- Form works with any input method -->
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Accepts all input methods -->
<form>
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>

<!-- ✅ Good: Drag and drop with keyboard alternative -->
<div>
  <div draggable="true">Item 1</div>
  <button onclick="moveUp()">Move Up</button>
  <button onclick="moveDown()">Move Down</button>
</div>

<!-- ❌ Bad: Restricts input method -->
<div onmouseover="enable()" onkeydown="disable()">
  Only works with mouse
</div>`,
      react: `// ✅ Good: Supports all input methods
function Form() {
  return (
    <form>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}

// ✅ Good: Drag with keyboard alternative
function SortableList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} draggable>
          {item.name}
          <button onClick={() => moveUp(index)}>↑</button>
          <button onClick={() => moveDown(index)}>↓</button>
        </div>
      ))}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Test all functionality with mouse",
        "Test all functionality with keyboard",
        "Test all functionality with touch (if available)",
        "Verify that users can switch between input methods",
        "Check that no functionality is restricted to a single input method",
      ],
      automated: ["Tools cannot verify input method restrictions"],
    },
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
    details: {
      introduction:
        "This criterion requires that any functionality using drag-and-drop must also be available through alternative methods that don't require dragging, such as buttons, form inputs, or other single-click interactions.",
      intent:
        "The intent is to ensure that users who cannot perform dragging movements (due to motor disabilities, tremors, or device limitations) can still access all functionality through alternative means.",
    },
    examples: [
      {
        title: "Drag-Only Slider",
        description: "A slider that can only be adjusted by dragging, with no alternative input method.",
        type: "bad",
        code: `<div class="slider" onmousedown="startDrag(event)"></div>`,
      },
      {
        title: "Slider with Input",
        description: "A slider that can be adjusted by dragging OR by typing a value in an input field.",
        type: "good",
        code: `<div class="slider" onmousedown="startDrag(event)"></div>
<input type="number" min="0" max="100" value="50" onchange="updateSlider(this.value)">`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Drag-only interface -->
<div class="sortable-list">
  <div draggable="true">Item 1</div>
  <div draggable="true">Item 2</div>
</div>

<!-- ✅ Good: Drag with alternative buttons -->
<div class="sortable-list">
  <div draggable="true">
    Item 1
    <button onclick="moveUp(this)">↑</button>
    <button onclick="moveDown(this)">↓</button>
  </div>
</div>

<!-- ✅ Good: Slider with input -->
<div class="slider-container">
  <input type="range" min="0" max="100" value="50" id="slider">
  <input type="number" min="0" max="100" value="50" id="value-input">
</div>`,
      react: `// ✅ Good: Drag with alternative controls
function SortableList({ items }) {
  const [items, setItems] = useState(items)

  const moveUp = (index) => {
    if (index > 0) {
      const newItems = [...items]
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]]
      setItems(newItems)
    }
  }

  const moveDown = (index) => {
    if (index < items.length - 1) {
      const newItems = [...items]
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
      setItems(newItems)
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id} draggable>
          {item.name}
          <button onClick={() => moveUp(index)}>↑</button>
          <button onClick={() => moveDown(index)}>↓</button>
        </div>
      ))}
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all drag-and-drop functionality",
        "Verify alternative methods exist (buttons, inputs, etc.)",
        "Test that alternatives provide the same functionality",
        "Check that alternatives are keyboard accessible",
        "Test on touch devices to ensure alternatives work",
      ],
      automated: ["Tools can detect draggable elements but cannot verify alternatives"],
    },
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
    details: {
      introduction:
        "This criterion requires that all interactive elements (buttons, links, form controls) have a minimum target size of 24x24 CSS pixels to ensure they are easily tappable, especially on touch devices.",
      intent:
        "The intent is to ensure that targets are large enough for users to easily activate them, particularly on touch devices. Small targets are difficult to tap accurately, especially for users with motor disabilities or tremors.",
    },
    examples: [
      {
        title: "Small Icon Button",
        description: "A 16x16 pixel icon button is too small to tap accurately.",
        type: "bad",
        code: `<button style="width: 16px; height: 16px;">
  <img src="icon.png" alt="Delete">
</button>`,
      },
      {
        title: "Adequate Size Button",
        description: "A button with at least 24x24 pixels is easily tappable.",
        type: "good",
        code: `<button style="min-width: 24px; min-height: 24px; padding: 8px;">
  <img src="icon.png" alt="Delete">
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Too small -->
<button style="width: 16px; height: 16px;">×</button>

<!-- ✅ Good: Minimum 24x24 pixels -->
<button style="min-width: 24px; min-height: 24px; padding: 8px;">×</button>

<!-- ✅ Good: Link with adequate padding -->
<a href="#" style="display: inline-block; min-height: 24px; padding: 8px 12px;">
  Link text
</a>`,
      css: `/* ✅ Good: Minimum target size */
.button {
  min-width: 24px;
  min-height: 24px;
  padding: 8px 12px; /* Increases clickable area */
}

.icon-button {
  width: 24px;
  height: 24px;
  padding: 4px; /* Ensures minimum size */
}

/* Use padding to increase target size without visual change */
.link {
  display: inline-block;
  min-height: 24px;
  padding: 4px 0; /* Vertical padding increases target */
}

/* ❌ Bad: Too small */
.small-button {
  width: 16px;
  height: 16px;
}`,
      react: `// ✅ Good: Adequate target size
function IconButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="min-w-[24px] min-h-[24px] p-2"
    >
      {icon}
    </button>
  )
}

// ✅ Good: Link with padding
function Link({ href, children }) {
  return (
    <a 
      href={href}
      className="inline-block min-h-[24px] py-2 px-3"
    >
      {children}
    </a>
  )
}`,
    },
    testing: {
      manual: [
        "Measure all interactive elements (buttons, links, form controls)",
        "Verify minimum size is 24x24 CSS pixels",
        "Test on touch devices to ensure easy tapping",
        "Check that padding increases target size appropriately",
        "Verify targets are not too close together (minimum 8px spacing)",
      ],
      automated: ["Tools can measure element sizes but may not account for padding"],
    },
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
      html: `<!-- ❌ Bad: Unmarked language change -->
<p>Hello, <em>bonjour</em>, hola!</p>

<!-- ✅ Good: Properly marked language changes -->
<p>Hello, <span lang="fr">bonjour</span>, <span lang="es">hola</span>!</p>

<!-- ✅ Good: Block-level language change -->
<div lang="fr">
  <h2>Bienvenue</h2>
  <p>Ce contenu est en français.</p>
</div>

<!-- ✅ Good: Using lang attribute on elements -->
<blockquote lang="de">
  "Das Leben ist schön"
</blockquote>`,
      react: `// ✅ Good: Language markup in React
function MultilingualContent() {
  return (
    <div>
      <p>
        Welcome to our site.{' '}
        <span lang="fr">Bienvenue sur notre site.</span>
      </p>
      
      <div lang="es">
        <h2>Bienvenido</h2>
        <p>Este contenido está en español.</p>
      </div>
    </div>
  )
}

// ✅ Good: Dynamic language content
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
        "Identify all text in languages other than the page default",
        "Check that lang attributes are present on foreign text",
        "Test with screen reader to verify correct pronunciation",
        "Verify proper names and technical terms are handled correctly",
        "Check that language changes are programmatically determinable",
      ],
      automated: ["Tools can detect lang attributes but cannot verify pronunciation accuracy"],
    },
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
      html: `<!-- ✅ Good: Using dfn and abbr elements -->
<p>
  The <dfn>API</dfn> (Application Programming Interface) uses 
  <abbr title="Representational State Transfer">RESTful</abbr> endpoints.
</p>

<!-- ✅ Good: Inline definitions -->
<p>
  The system uses <span title="A software component that provides a service">microservices</span> 
  architecture.
</p>

<!-- ✅ Good: Glossary link -->
<p>
  Learn about <a href="/glossary#api">APIs</a> in our glossary.
</p>`,
      react: `// ✅ Good: Component with definitions
function TechnicalContent() {
  return (
    <p>
      The <dfn>API</dfn> (Application Programming Interface) uses{' '}
      <abbr title="Representational State Transfer">RESTful</abbr> endpoints.
    </p>
  )
}

// ✅ Good: Tooltip definitions
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
        "Identify all unusual words, idioms, and jargon",
        "Check that definitions or explanations are available",
        "Verify definitions are accessible (not hidden)",
        "Test that definitions can be accessed by assistive technologies",
        "Check that technical terms are explained",
      ],
      automated: ["Tools can detect dfn and abbr elements but cannot verify definition quality"],
    },
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
      html: `<!-- ❌ Bad: Abbreviation without expansion -->
<p>Visit our FAQ for more information.</p>

<!-- ✅ Good: Using abbr element -->
<p>
  Visit our <abbr title="Frequently Asked Questions">FAQ</abbr> for more information.
</p>

<!-- ✅ Good: First occurrence expanded -->
<p>
  Visit our Frequently Asked Questions (<abbr title="Frequently Asked Questions">FAQ</abbr>) 
  for more information.
</p>

<!-- ✅ Good: Glossary link -->
<p>
  Learn about <a href="/glossary#api"><abbr title="Application Programming Interface">API</abbr></a> 
  in our glossary.
</p>`,
      react: `// ✅ Good: Abbreviation component
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
        "Identify all abbreviations on the page",
        "Check that abbreviations have expanded forms available",
        "Verify that abbr elements have title attributes",
        "Test that screen readers announce the expanded form",
        "Check that first occurrences are expanded inline",
      ],
      automated: ["Tools can detect abbr elements and check for title attributes"],
    },
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
      html: `<!-- ❌ Bad: Complex text -->
<p>
  The implementation of this methodology necessitates a comprehensive 
  understanding of the underlying theoretical framework.
</p>

<!-- ✅ Good: Simple text -->
<p>
  To use this method, you need to understand the basic ideas behind it.
</p>

<!-- ✅ Good: Simplified version link -->
<article>
  <h1>Complex Article</h1>
  <p>Complex content here...</p>
  <p>
    <a href="/simplified-version">Read a simpler version</a>
  </p>
</article>`,
      react: `// ✅ Good: Simple language component
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
        "Review text for reading level complexity",
        "Check that sentences are short and clear",
        "Verify that vocabulary is simple and common",
        "Test with reading level analysis tools",
        "Check if simplified versions are available for complex content",
      ],
      automated: ["Tools can analyze reading level but cannot verify if simplified versions are provided"],
    },
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
      html: `<!-- ✅ Good: Using title for pronunciation -->
<p>
  I live in the <span title="pronounced: DEZ-ert">desert</span>.
</p>

<!-- ✅ Good: Using phonetic spelling -->
<p>
  The word <span title="pronounced: rih-KORD">record</span> can be a noun or verb.
</p>

<!-- ✅ Good: Using IPA notation -->
<p>
  The word <span title="IPA: /ˈdezərt/">desert</span> means a dry area.
</p>`,
      react: `// ✅ Good: Pronunciation component
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
        "Identify words with ambiguous pronunciation",
        "Check that pronunciation guidance is provided",
        "Verify pronunciation is accessible to screen readers",
        "Test that screen readers use the provided pronunciation",
        "Check that pronunciation guidance is clear and helpful",
      ],
      automated: ["Tools cannot verify pronunciation guidance quality"],
    },
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
    details: {
      introduction:
        "This criterion requires that navigation elements (menus, links, buttons) appear in the same order and location across all pages of a website, making the site predictable and easier to navigate.",
      intent:
        "The intent is to encourage consistent presentation and behavior across pages. When navigation is consistent, users can learn the site structure and navigate more efficiently, especially important for users with cognitive disabilities or those using screen readers.",
    },
    examples: [
      {
        title: "Inconsistent Navigation",
        description: "Navigation items appear in different orders on different pages, confusing users.",
        type: "bad",
        code: `<!-- Page 1 -->
<nav><a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a></nav>

<!-- Page 2 -->
<nav><a href="/contact">Contact</a> <a href="/">Home</a> <a href="/about">About</a></nav>`,
      },
      {
        title: "Consistent Navigation",
        description: "Navigation items always appear in the same order across all pages.",
        type: "good",
        code: `<!-- All pages -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Consistent navigation component -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Use same structure on all pages -->
<!-- ❌ Bad: Different order on different pages -->`,
      react: `// ✅ Good: Reusable navigation component
function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav aria-label="Main navigation">
      <ul>
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Use this component on all pages for consistency`,
      css: `/* ✅ Good: Consistent navigation styling */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

/* Same styling applied consistently across pages */`,
    },
    testing: {
      manual: [
        "Navigate through multiple pages on the site",
        "Check that navigation items appear in the same order",
        "Verify navigation location is consistent",
        "Test that navigation structure doesn't change unexpectedly",
        "Check that user-initiated changes (like expanding menus) are preserved",
      ],
      automated: ["Tools can check for consistent HTML structure but cannot verify user experience"],
    },
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
    details: {
      introduction:
        "This criterion requires that components with the same functionality use consistent labels, icons, and text across all pages, making the interface predictable and reducing cognitive load.",
      intent:
        "The intent is to ensure that users can identify and understand components based on consistent presentation. When the same functionality appears with different labels or icons, users must relearn what each component does on every page.",
    },
    examples: [
      {
        title: "Inconsistent Search Labels",
        description: "Search functionality is labeled differently on different pages: 'Search', 'Find', 'Lookup'.",
        type: "bad",
        code: `<!-- Page 1 -->
<button>Search</button>

<!-- Page 2 -->
<button>Find</button>

<!-- Page 3 -->
<button>Lookup</button>`,
      },
      {
        title: "Consistent Search Labels",
        description: "Search functionality always uses the same label and icon across all pages.",
        type: "good",
        code: `<!-- All pages -->
<button aria-label="Search">
  <SearchIcon />
  Search
</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Consistent component identification -->
<!-- All pages use same structure for search -->
<form role="search">
  <label for="search">Search</label>
  <input type="search" id="search" name="q">
  <button type="submit" aria-label="Search">
    <svg><!-- Search icon --></svg>
    Search
  </button>
</form>

<!-- ❌ Bad: Different labels for same function -->
<!-- Page 1: <button>Search</button> -->
<!-- Page 2: <button>Find</button> -->
<!-- Page 3: <button>Lookup</button> -->`,
      react: `// ✅ Good: Reusable component with consistent identification
function SearchButton() {
  return (
    <button type="submit" aria-label="Search">
      <SearchIcon />
      Search
    </button>
  )
}

// Use this component everywhere search is needed

// ✅ Good: Consistent icon component
function IconButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label}>
      {icon}
      {label}
    </button>
  )
}

// Use consistent icons for same functions
<IconButton icon={<SearchIcon />} label="Search" />
<IconButton icon={<HomeIcon />} label="Home" />`,
      css: `/* ✅ Good: Consistent styling for same components */
.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}

/* Same styling applied consistently */
.home-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
}`,
    },
    testing: {
      manual: [
        "Review all pages on the site",
        "Identify components with the same functionality",
        "Check that labels, icons, and text are consistent",
        "Verify that similar components use the same visual design",
        "Test that users can predict component behavior based on consistent identification",
      ],
      automated: ["Tools can check for consistent HTML structure but cannot verify semantic consistency"],
    },
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
    details: {
      introduction:
        "This criterion requires that context changes (like page navigation, focus changes, or content updates) only occur when the user explicitly requests them, or that users can disable automatic changes.",
      intent:
        "The intent is to ensure that users maintain control over context changes, preventing disorientation that can occur when content changes unexpectedly.",
    },
    examples: [
      {
        title: "Automatic Context Change",
        description: "Selecting an option automatically navigates to a new page without user confirmation.",
        type: "bad",
        code: `<select onchange="window.location = this.value">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>`,
      },
      {
        title: "User-Requested Context Change",
        description: "Selecting an option requires clicking a button to navigate.",
        type: "good",
        code: `<select id="page-select">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>
<button onclick="navigate()">Go</button>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Automatic navigation -->
<select onchange="window.location = this.value">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>

<!-- ✅ Good: User-initiated navigation -->
<select id="page-select">
  <option value="/page1">Page 1</option>
  <option value="/page2">Page 2</option>
</select>
<button onclick="navigate()">Go to Page</button>

<!-- ✅ Good: Option to disable auto-updates -->
<label>
  <input type="checkbox" id="auto-update" checked>
  Enable automatic updates
</label>`,
      react: `// ✅ Good: User-controlled navigation
function PageSelector() {
  const [selectedPage, setSelectedPage] = useState('')
  const [autoUpdate, setAutoUpdate] = useState(false)

  const handleNavigate = () => {
    if (selectedPage) {
      window.location = selectedPage
    }
  }

  return (
    <div>
      <select 
        value={selectedPage}
        onChange={(e) => {
          setSelectedPage(e.target.value)
          if (autoUpdate) {
            window.location = e.target.value
          }
        }}
      >
        <option value="">Select a page</option>
        <option value="/page1">Page 1</option>
        <option value="/page2">Page 2</option>
      </select>
      <button onClick={handleNavigate}>Go</button>
      <label>
        <input
          type="checkbox"
          checked={autoUpdate}
          onChange={(e) => setAutoUpdate(e.target.checked)}
        />
        Enable automatic navigation
      </label>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Check that context changes only occur on user request",
        "Verify that automatic updates can be disabled",
        "Test that form submissions require explicit button clicks",
        "Check that navigation requires user action",
        "Verify that users are warned before context changes",
      ],
      automated: ["Tools can detect automatic navigation but cannot verify user control mechanisms"],
    },
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
    details: {
      introduction:
        "This criterion requires providing context-sensitive help that is relevant to the current task or form field, making it easier for users to complete tasks successfully.",
      intent:
        "The intent is to ensure that users have access to helpful information when they need it, reducing confusion and errors, especially for complex forms or tasks.",
    },
    examples: [
      {
        title: "No Help Available",
        description: "A complex form has no help text or instructions.",
        type: "bad",
        code: `<form>
  <input type="text" name="tax-id">
  <button type="submit">Submit</button>
</form>`,
      },
      {
        title: "Context-Sensitive Help",
        description: "A form field includes help text explaining what information is needed.",
        type: "good",
        code: `<form>
  <label for="tax-id">Tax ID</label>
  <input type="text" id="tax-id" name="tax-id" 
         aria-describedby="tax-id-help">
  <div id="tax-id-help">
    Enter your 9-digit Tax Identification Number (TIN).
  </div>
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Context-sensitive help -->
<form>
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    aria-describedby="email-help"
  >
  <div id="email-help">
    Enter your email address. We'll use this to send you updates.
  </div>
  
  <label for="password">Password</label>
  <input 
    type="password" 
    id="password" 
    name="password"
    aria-describedby="password-help"
  >
  <div id="password-help">
    Password must be at least 8 characters and include uppercase, 
    lowercase, and numbers.
  </div>
  
  <button type="submit">Submit</button>
</form>`,
      react: `// ✅ Good: Help component
function FormField({ label, id, helpText, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-describedby={id + '-help'}
        {...props}
      />
      <div id={id + '-help'} className="help-text">
        {helpText}
      </div>
    </div>
  )
}

function Form() {
  return (
    <form>
      <FormField
        label="Email Address"
        id="email"
        type="email"
        helpText="Enter your email address. We'll use this to send you updates."
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        helpText="Password must be at least 8 characters and include uppercase, lowercase, and numbers."
      />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check that help text is available for complex forms",
        "Verify that help text is contextually relevant",
        "Test that help text is accessible to screen readers",
        "Check that help is easy to find and understand",
        "Verify that help text appears near relevant fields",
      ],
      automated: ["Tools can detect aria-describedby but cannot verify help text quality"],
    },
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
    details: {
      introduction:
        "This criterion is stricter than Level AA 3.3.4, requiring error prevention mechanisms (reversible, checked, or confirmed) for ALL forms, not just legal or financial ones.",
      intent:
        "The intent is to prevent errors on all form submissions by providing mechanisms to reverse actions, check input, or confirm submissions.",
    },
    examples: [
      {
        title: "Form Without Error Prevention",
        description: "A form submits immediately without confirmation or ability to undo.",
        type: "bad",
        code: `<form onsubmit="submitForm()">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
      {
        title: "Form With Confirmation",
        description: "A form requires confirmation before submission.",
        type: "good",
        code: `<form onsubmit="return confirm('Are you sure you want to submit?')">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Confirmation before submission -->
<form onsubmit="return confirmSubmission()">
  <input type="text" name="name" required>
  <button type="submit">Submit</button>
</form>

<script>
function confirmSubmission() {
  return confirm('Are you sure you want to submit this form?')
}
</script>

<!-- ✅ Good: Undo option after submission -->
<form id="myForm">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
<div id="success-message" style="display: none;">
  Form submitted! <button onclick="undoSubmission()">Undo</button>
</div>`,
      react: `// ✅ Good: Form with confirmation
function Form() {
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowConfirm(true)
  }

  const confirmSubmit = () => {
    setSubmitted(true)
    setShowConfirm(false)
    // Submit form
  }

  const undoSubmit = () => {
    setSubmitted(false)
    // Undo submission
  }

  if (submitted) {
    return (
      <div>
        <p>Form submitted successfully!</p>
        <button onClick={undoSubmit}>Undo</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {showConfirm && (
        <div>
          <p>Are you sure you want to submit?</p>
          <button onClick={confirmSubmit}>Yes, Submit</button>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
      )}
      <input type="text" name="name" required />
      <button type="submit">Submit</button>
    </form>
  )
}`,
    },
    testing: {
      manual: [
        "Check that all forms have error prevention mechanisms",
        "Verify that forms can be reversed, checked, or confirmed",
        "Test confirmation dialogs before submission",
        "Check that users can undo submissions",
        "Verify that input validation occurs before submission",
      ],
      automated: ["Tools can detect form submission handlers but cannot verify error prevention mechanisms"],
    },
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
    details: {
      introduction:
        "This criterion is stricter than Level AA 3.3.8, requiring that no cognitive function tests (like CAPTCHAs, puzzles, or memory tests) are required for authentication, with fully accessible alternatives provided.",
      intent:
        "The intent is to ensure that authentication is fully accessible to all users, including those with cognitive disabilities, by eliminating cognitive function tests entirely.",
    },
    examples: [
      {
        title: "CAPTCHA Required",
        description: "Users must solve a CAPTCHA to authenticate, excluding users with cognitive disabilities.",
        type: "bad",
        code: `<form>
  <input type="text" name="username">
  <input type="password" name="password">
  <div class="captcha">Solve this puzzle to continue</div>
  <button type="submit">Login</button>
</form>`,
      },
      {
        title: "No Cognitive Tests",
        description: "Authentication uses accessible methods like biometrics or email verification.",
        type: "good",
        code: `<form>
  <input type="email" name="email">
  <button type="submit">Send Login Link</button>
</form>
<p>We'll send you a secure link to log in.</p>`,
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: CAPTCHA required -->
<form>
  <input type="text" name="username">
  <input type="password" name="password">
  <div class="captcha">
    <img src="captcha.png" alt="CAPTCHA">
    <input type="text" name="captcha">
  </div>
  <button type="submit">Login</button>
</form>

<!-- ✅ Good: Email-based authentication -->
<form>
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Send Login Link</button>
</form>
<p>We'll send you a secure link to log in. No password required.</p>

<!-- ✅ Good: Biometric authentication -->
<button onclick="authenticateWithBiometric()">
  Login with Fingerprint
</button>`,
      react: `// ✅ Good: Accessible authentication
function LoginForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send magic link to email
    sendMagicLink(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Login Link</button>
      <p>We'll send you a secure link to log in. No password or CAPTCHA required.</p>
    </form>
  )
}

// ✅ Good: Biometric authentication option
function BiometricLogin() {
  const handleBiometric = async () => {
    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          // WebAuthn configuration
        }
      })
      // Authenticate with credential
    } catch (error) {
      console.error('Biometric authentication failed')
    }
  }

  return (
    <button onClick={handleBiometric}>
      Login with Biometric
    </button>
  )
}`,
    },
    testing: {
      manual: [
        "Check that no CAPTCHAs or puzzles are required for authentication",
        "Verify that no memory tests are required",
        "Test that accessible authentication methods are available",
        "Check that alternatives work for users with cognitive disabilities",
        "Verify that authentication is fully accessible",
      ],
      automated: ["Tools can detect CAPTCHA elements but cannot verify accessible alternatives"],
    },
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
