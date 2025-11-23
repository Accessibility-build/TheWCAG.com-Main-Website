import type { SuccessCriterion } from '../types'

// Guideline 1.2: Time-based Media
export const timeBasedMediaCriteria: SuccessCriterion[] = [
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
      html: `<!-- âœ… Good: Audio with Transcript Link -->
<audio controls src="podcast.mp3"></audio>
<a href="transcript.html">Read Transcript</a>

<!-- âœ… Good: Video with Description -->
<video controls src="animation.mp4"></video>
<p>Description: A graph animates to show the rising trend...</p>`,
    },
    testing: {
      manual: [
        "Check for audio-only content. Is a transcript available?",
        "Check for video-only content. Is a text description or audio track available?",
        "Verify the transcript/description matches the media content accurately.",
        "Test that transcripts are easily accessible (visible link or inline).",
        "Verify transcripts include all spoken dialogue and identify speakers when relevant.",
        "For video-only content, verify descriptions cover all important visual information.",
        "Check that alternatives are clearly labeled and easy to find.",
      ],
      automated: [
        "Automated tools can detect <audio> or <video> tags but cannot verify the quality of alternatives.",
        "Use WAVE to identify media elements and check for associated transcript links.",
      ],
    },
    complianceRequirements: [
      "All prerecorded audio-only content must have a text transcript available.",
      "All prerecorded video-only content must have either a text description or an audio track describing the visual content.",
      "Transcripts must include all dialogue and identify speakers when necessary.",
      "For video-only content, descriptions must cover all important visual information.",
      "Alternatives must be clearly labeled and easily accessible.",
      "If media is an alternative for text, it must be clearly labeled as such.",
    ],
    beyondCompliance: [
      "Provide transcripts in multiple formats (HTML, PDF, plain text) for user preference.",
      "Make transcripts searchable and downloadable.",
      "Include timestamps in transcripts to help users navigate to specific sections.",
      "For video-only content, consider providing both text descriptions and audio descriptions.",
      "Ensure transcripts are well-formatted and easy to read.",
      "Provide transcripts in multiple languages for multilingual content.",
      "Consider providing interactive transcripts that highlight text as media plays.",
    ],
    myths: [
      {
        myth: "If I provide captions, I don't need a transcript for audio-only content.",
        reality: "Captions are for synchronized media (video with audio). Audio-only content needs a separate transcript that users can read at their own pace.",
      },
      {
        myth: "Video-only content doesn't need alternatives if it's just decorative.",
        reality: "If video-only content conveys information (even if subtle), it needs a description. Only purely decorative video can be exempt.",
      },
      {
        myth: "A brief summary is enough for video-only content.",
        reality: "The description must convey equivalent information. A brief summary may miss important details that users need to understand the content.",
      },
    ],
    commonFailures: [
      {
        failure: "Audio-only content (podcasts, interviews) without transcripts.",
        solution: "Provide a complete text transcript that includes all dialogue, speaker identification, and important sounds. Make it easily accessible near the audio player.",
      },
      {
        failure: "Video-only content (animations, silent videos) without descriptions.",
        solution: "Provide either a text description or an audio track that describes all important visual information, including actions, scene changes, and on-screen text.",
      },
      {
        failure: "Transcripts that are hard to find or buried in the page.",
        solution: "Place transcripts prominently near the media player with clear labeling. Consider inline expandable transcripts or clearly labeled links.",
      },
      {
        failure: "Incomplete transcripts that miss dialogue or important sounds.",
        solution: "Ensure transcripts are complete and accurate, including all spoken words, speaker identification when relevant, and descriptions of important non-speech sounds.",
      },
    ],
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
      html: `<!-- âœ… Good: Video with Captions Track -->
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
        "Verify captions are accurate and match the spoken words.",
        "Test that captions can be toggled on/off in the video player.",
        "Check that captions are readable (good contrast, appropriate font size).",
        "Verify captions don't obscure important visual content.",
      ],
      automated: [
        "Tools can check for the presence of <track kind='captions'> but cannot verify accuracy.",
        "Use WAVE or axe to detect video elements and verify caption tracks are present.",
      ],
    },
    complianceRequirements: [
      "All prerecorded video content with audio must have synchronized captions.",
      "Captions must include all dialogue and identify speakers when necessary.",
      "Captions must include important sound effects and non-speech audio information.",
      "Captions must be synchronized with the audio track.",
      "Captions must be available and can be turned on/off by users.",
      "If media is an alternative for text, it must be clearly labeled as such.",
    ],
    beyondCompliance: [
      "Provide captions in multiple languages for multilingual content.",
      "Ensure captions are styled for readability (good contrast, appropriate positioning).",
      "Provide options for caption customization (font size, color, position).",
      "Include music and lyrics descriptions when relevant to understanding content.",
      "Use proper caption formatting (line breaks, punctuation) for clarity.",
      "Consider providing extended captions with additional context when helpful.",
      "Test captions with actual deaf and hard of hearing users for accuracy and clarity.",
    ],
    myths: [
      {
        myth: "Auto-generated captions are good enough for compliance.",
        reality: "Auto-generated captions often have errors and may not meet accuracy requirements. Manual review and correction are typically needed for quality captions.",
      },
      {
        myth: "I only need captions if my video has dialogue.",
        reality: "Captions should include all important audio information, including sound effects, music cues, and non-speech sounds that convey meaning.",
      },
      {
        myth: "Subtitles and captions are the same thing.",
        reality: "Subtitles assume viewers can hear audio and only translate dialogue. Captions are for deaf/hard of hearing users and include all audio information including sound effects.",
      },
    ],
    commonFailures: [
      {
        failure: "Videos without any captions.",
        solution: "Add synchronized captions using <track> elements with kind='captions' or provide captions through the video player's built-in functionality.",
      },
      {
        failure: "Captions that are out of sync with the audio.",
        solution: "Ensure caption timing is precisely synchronized. Use proper caption file formats (WebVTT, SRT) with accurate timestamps.",
      },
      {
        failure: "Captions missing important sound effects or non-speech audio.",
        solution: "Include descriptions of meaningful sounds in brackets, e.g., [door slams], [music playing], [phone ringing].",
      },
      {
        failure: "No speaker identification when multiple people are speaking.",
        solution: "Identify speakers in captions when it's important for understanding, especially in interviews or conversations with multiple participants.",
      },
      {
        failure: "Captions that are hard to read (poor contrast, small text).",
        solution: "Ensure captions have sufficient contrast against the video background and are appropriately sized. Consider providing caption styling options.",
      },
    ],
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
      html: `<!-- âœ… Good: Link to Transcript/Alternative -->
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
      html: `<!-- âœ… Good: Live Stream Container -->
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
      html: `<!-- âœ… Good: Video with sign language interpretation -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English" default>
  <track kind="sign" src="sign-language.vtt" srclang="asl" label="American Sign Language">
</video>

<!-- Sign language can be provided as a picture-in-picture overlay or separate video track -->`,
      react: `// âœ… Good: Video component with sign language
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
      html: `<!-- âœ… Good: Video with extended audio description -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="descriptions" src="extended-descriptions.vtt" srclang="en" label="Extended Audio Description">
</video>

<!-- Extended audio description pauses video to insert detailed descriptions -->`,
      react: `// âœ… Good: Video with extended audio description
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
      html: `<!-- âœ… Good: Video with transcript link -->
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
      react: `// âœ… Good: Video component with transcript
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
      html: `<!-- âœ… Good: Live audio with real-time captions -->
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
      react: `// âœ… Good: Live audio component with real-time captions
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
]