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
    officialDefinition:
      "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: (Level A) Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content. Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.",
    summary: "Provide transcripts for audio-only content and descriptions or transcripts for video-only content.",
    detailedSummary:
      "What This Means: This success criterion requires that prerecorded audio-only content (like podcasts or audio interviews) must have a text transcript, and prerecorded video-only content (like silent animations or video without audio) must have either a text description or an audio track that describes the visual content. This ensures that users who cannot hear audio or see video can still access the information.\n\nWhy It's Important: Users who are deaf or hard of hearing cannot access information presented only in audio. Similarly, users who are blind cannot access information presented only in video. By providing text alternatives or audio descriptions, we make time-based media accessible to everyone, regardless of their sensory abilities.\n\nIn Practice: For audio-only content, provide a complete text transcript that includes all dialogue, speaker identification when relevant, and descriptions of important sounds. For video-only content, provide either a text description that covers all important visual information or an audio track that narrates what's happening visually. The alternative must convey equivalent information to what's in the original media.",
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
    keyTerms: [
      {
        term: "Alternative for Time-based Media",
        definition: "Document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction.",
        context: "For audio-only content, this is typically a transcript. For video-only content, this can be a text description or audio track describing the visuals.",
      },
      {
        term: "Prerecorded",
        definition: "Information that is not live. Prerecorded content has been recorded and stored before being presented to users.",
        context: "This criterion applies only to prerecorded media, not live broadcasts or streams.",
      },
      {
        term: "Audio-only",
        definition: "A time-based presentation that contains only audio (no video and no interaction).",
        context: "Examples include podcasts, audio interviews, music tracks, and audio recordings.",
      },
      {
        term: "Video-only",
        definition: "A time-based presentation that contains only video (no audio and no interaction).",
        context: "Examples include silent animations, video demonstrations without narration, and visual-only presentations.",
      },
      {
        term: "Media Alternative for Text",
        definition: "Media that presents no more information than is already presented in text (directly or via text alternatives).",
        context: "If media is an alternative for text that's already on the page, it must be clearly labeled as such and doesn't need additional alternatives.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.1.1",
        title: "Non-text Content",
        relationship: "Complements",
      },
      {
        number: "1.2.2",
        title: "Captions (Prerecorded)",
        relationship: "Often implemented together with",
      },
      {
        number: "1.2.3",
        title: "Audio Description or Media Alternative (Prerecorded)",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Create complete transcripts for all prerecorded audio-only content",
          "Include all dialogue and speaker identification in transcripts",
          "Describe important sounds and non-speech audio in transcripts",
          "For video-only content, create text descriptions covering all visual information",
          "Ensure alternatives are equivalent to the original media content",
          "Make alternatives easily accessible and clearly labeled",
        ],
      },
      {
        category: "HTML",
        items: [
          "Link to transcripts using clear, descriptive link text",
          "Place transcript links near the media player",
          "Use semantic HTML for transcript content",
          "Provide transcripts in accessible formats (HTML preferred)",
        ],
      },
      {
        category: "General",
        items: [
          "Verify transcript accuracy by comparing with original media",
          "Test that alternatives are easy to find and access",
          "Ensure alternatives are properly formatted and readable",
          "Check that alternatives convey equivalent information",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Audio-only and Video-only (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G158: Providing an alternative for time-based media for audio-only content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G158",
        type: "Techniques",
      },
      {
        title: "G159: Providing an alternative for time-based media for video-only content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G159",
        type: "Techniques",
      },
      {
        title: "H96: Using the track element to provide audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H96",
        type: "Techniques",
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
    officialDefinition:
      "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
    summary: "Provide captions for all prerecorded videos with sound.",
    detailedSummary:
      "What This Means: This success criterion requires that all prerecorded video content with audio must have synchronized captions. Captions are text versions of the spoken words and important sounds that appear on screen in sync with the audio. They must include all dialogue, speaker identification when necessary, and descriptions of meaningful sound effects.\n\nWhy It's Important: Users who are deaf or hard of hearing cannot access information presented through audio. Captions make video content accessible by providing a text representation of all audio information. This allows deaf and hard of hearing users to understand dialogue, follow the narrative, and catch important sound cues that contribute to understanding the content.\n\nIn Practice: Captions should be synchronized with the audio track, appear on screen in a readable format, and include all spoken dialogue. They should also identify speakers when multiple people are talking and describe important non-speech sounds like [door slams], [music playing], or [phone ringing]. Captions can be provided as closed captions (user can toggle on/off) or open captions (always visible), and should be available through the video player controls.",
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
    keyTerms: [
      {
        term: "Captions",
        definition: "Synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content.",
        context: "Captions are specifically designed for users who are deaf or hard of hearing and include all audio information, not just dialogue.",
      },
      {
        term: "Synchronized Media",
        definition: "Audio or video synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a media alternative for text that is clearly labeled as such.",
        context: "This includes videos with audio tracks, where captions must be synchronized with the audio.",
      },
      {
        term: "Prerecorded",
        definition: "Information that is not live. Prerecorded content has been recorded and stored before being presented to users.",
        context: "This criterion applies to prerecorded content only. Live content is covered by 1.2.4.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Often implemented together with",
      },
      {
        number: "1.2.4",
        title: "Captions (Live)",
        relationship: "Similar requirement for",
      },
      {
        number: "1.2.3",
        title: "Audio Description or Media Alternative (Prerecorded)",
        relationship: "Complements",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add <track> element with kind='captions' to video elements",
          "Specify src, srclang, and label attributes for caption tracks",
          "Use WebVTT (.vtt) format for caption files",
          "Provide multiple language options if content is multilingual",
        ],
      },
      {
        category: "Content",
        items: [
          "Create accurate captions that match all dialogue",
          "Include speaker identification when multiple speakers",
          "Describe important sound effects and non-speech audio",
          "Ensure captions are synchronized with audio timing",
          "Format captions for readability (proper line breaks, punctuation)",
        ],
      },
      {
        category: "General",
        items: [
          "Test captions with video player to ensure they display correctly",
          "Verify caption accuracy by comparing with original audio",
          "Ensure captions can be toggled on/off in video player",
          "Check that captions are readable (good contrast, appropriate size)",
          "Verify captions don't obscure important visual content",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Captions (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G93: Providing open (always visible) captions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G93",
        type: "Techniques",
      },
      {
        title: "G87: Providing closed captions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G87",
        type: "Techniques",
      },
      {
        title: "H95: Using the track element to provide captions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H95",
        type: "Techniques",
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
    officialDefinition:
      "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
    summary: "Provide a transcript or audio description for prerecorded video content.",
    detailedSummary:
      "What This Means: This success criterion requires that prerecorded video content must have either a text transcript (media alternative) that includes descriptions of visual information, or an audio description track that narrates important visual details. This ensures that blind users can access visual information that isn't conveyed through the audio track alone.\n\nWhy It's Important: Videos often contain important visual information that isn't mentioned in the audio track. For example, a character might find a key, read a sign, or perform an action silently. Blind users would miss this information without audio descriptions or a detailed transcript. This criterion ensures that all important visual information is accessible through alternative formats.\n\nIn Practice: You can meet this requirement in two ways: (1) Provide an audio description track that narrates visual information during pauses in dialogue, or (2) Provide a complete text transcript that includes descriptions of all important visual elements in addition to dialogue and sounds. The alternative must cover all visual information that's important for understanding the content.",
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
    keyTerms: [
      {
        term: "Audio Description",
        definition: "Narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.",
        context: "Audio descriptions are inserted during natural pauses in dialogue to describe visual information without interfering with the original audio.",
      },
      {
        term: "Media Alternative for Text",
        definition: "Media that presents no more information than is already presented in text (directly or via text alternatives).",
        context: "A complete text transcript that includes visual descriptions serves as a media alternative.",
      },
      {
        term: "Synchronized Media",
        definition: "Audio or video synchronized with another format for presenting information and/or with time-based interactive components.",
        context: "This criterion applies to video content with audio tracks where visual information needs to be described.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Complements",
      },
      {
        number: "1.2.5",
        title: "Audio Description (Prerecorded)",
        relationship: "Similar requirement at higher level",
      },
      {
        number: "1.2.2",
        title: "Captions (Prerecorded)",
        relationship: "Often implemented together with",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Identify all important visual information in video content",
          "Create audio description track or detailed transcript with visual descriptions",
          "Ensure descriptions cover actions, scene changes, on-screen text, and important visual elements",
          "For audio description, insert narration during natural pauses in dialogue",
          "For transcripts, include visual descriptions alongside dialogue and sounds",
        ],
      },
      {
        category: "HTML",
        items: [
          "Add <track> element with kind='descriptions' for audio description",
          "Link to transcript with visual descriptions if using text alternative",
          "Ensure alternatives are easily accessible near video player",
        ],
      },
      {
        category: "General",
        items: [
          "Test by watching video with eyes closed to identify missing information",
          "Verify all important visual information is covered in alternative",
          "Ensure audio descriptions don't interfere with original audio",
          "Check that alternatives are clearly labeled and easy to find",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Audio Description or Media Alternative (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G69: Providing an alternative for time-based media",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G69",
        type: "Techniques",
      },
      {
        title: "G78: Providing a second, user-selectable, audio track that includes audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G78",
        type: "Techniques",
      },
      {
        title: "H96: Using the track element to provide audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H96",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "Captions are provided for all live audio content in synchronized media.",
    summary: "Provide captions for live videos with sound.",
    detailedSummary:
      "What This Means: This success criterion requires that all live video content with audio must have real-time captions. Unlike prerecorded content, live captions must be generated and synchronized in real-time as the event is happening. This typically requires human captioners (CART services) or advanced speech-to-text technology.\n\nWhy It's Important: Live events like webinars, news broadcasts, sports events, and live streams are inaccessible to deaf and hard of hearing users without real-time captions. Unlike prerecorded content where captions can be prepared in advance, live content requires immediate captioning to ensure equal access to information as it happens.\n\nIn Practice: Live captions should appear with minimal delay (ideally within a few seconds of the spoken words), be synchronized with the audio, and include all dialogue and important sounds. They can be provided through professional CART (Communication Access Real-time Translation) services, AI-powered speech-to-text systems, or a combination of both. The captions should be clearly visible and accessible through the streaming platform.",
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
    keyTerms: [
      {
        term: "Live",
        definition: "Information captured from a real-world event and transmitted to the user with no more than a broadcast delay.",
        context: "Live content is happening in real-time and cannot be edited or captioned in advance.",
      },
      {
        term: "CART",
        definition: "Communication Access Real-time Translation. A service that provides real-time captioning by a trained professional.",
        context: "CART services are commonly used for live events to provide accurate, real-time captions.",
      },
      {
        term: "Real-time Captions",
        definition: "Captions that are generated and displayed as the event is happening, with minimal delay.",
        context: "Live captions must keep up with the pace of the live event, typically appearing within seconds of the spoken words.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.2",
        title: "Captions (Prerecorded)",
        relationship: "Similar requirement for",
      },
      {
        number: "1.2.9",
        title: "Audio-only (Live)",
        relationship: "Related requirement for live content",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Arrange for live captioning service (CART or AI-powered)",
          "Ensure captions appear with minimal delay (within seconds)",
          "Include all dialogue and important sounds in live captions",
          "Provide speaker identification when multiple speakers",
          "Test caption accuracy and synchronization before going live",
        ],
      },
      {
        category: "General",
        items: [
          "Set up captioning infrastructure before live event",
          "Test caption display and visibility on streaming platform",
          "Have backup captioning method in case primary fails",
          "Monitor caption quality during live event",
          "Ensure captions are accessible and can be toggled on/off",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Captions (Live)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html",
        type: "Understanding",
      },
      {
        title: "G9: Creating captions for live synchronized media",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G9",
        type: "Techniques",
      },
      {
        title: "G150: Providing text based alternatives for live audio-only content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G150",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "Audio description is provided for all prerecorded video content in synchronized media.",
    summary: "Provide audio descriptions for all prerecorded videos.",
    detailedSummary:
      "What This Means: This success criterion requires that all prerecorded video content must have an audio description track. Audio descriptions narrate important visual information during natural pauses in the original audio, ensuring that blind users can understand visual elements that aren't mentioned in the dialogue or soundtrack.\n\nWhy It's Important: Videos contain visual information that's essential for understanding the content but may not be conveyed through audio alone. Actions, scene changes, on-screen text, facial expressions, and other visual cues are often critical to comprehension. Without audio descriptions, blind users miss this information, making the content incomplete or confusing.\n\nIn Practice: Audio descriptions should be inserted during natural pauses in dialogue or soundtrack. They should describe all important visual information including actions, scene changes, on-screen text, character expressions, and other visual elements that contribute to understanding. The descriptions should be clear, concise, and synchronized with the video. They can be provided as a separate audio track that users can enable, or integrated into the main audio track.",
    whyItMatters: "Blind users need to hear descriptions of important visual details in videos.",
    whoBenefits: ["Blind users", "Users with low vision"],
    keyTerms: [
      {
        term: "Audio Description",
        definition: "Narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone.",
        context: "Audio descriptions are inserted during natural pauses in dialogue to describe visual information without interfering with the original audio.",
      },
      {
        term: "Prerecorded",
        definition: "Information that is not live. Prerecorded content has been recorded and stored before being presented to users.",
        context: "This criterion applies to prerecorded content only, allowing time for creating quality audio descriptions.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.3",
        title: "Audio Description or Media Alternative (Prerecorded)",
        relationship: "Higher level requirement",
      },
      {
        number: "1.2.7",
        title: "Extended Audio Description (Prerecorded)",
        relationship: "Enhanced version for complex content",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Identify all important visual information in video",
          "Create audio description script covering actions, scenes, and visual elements",
          "Record audio descriptions during natural pauses in original audio",
          "Ensure descriptions don't interfere with dialogue or important sounds",
          "Synchronize audio descriptions with video timing",
        ],
      },
      {
        category: "HTML",
        items: [
          "Add <track> element with kind='descriptions' to video",
          "Provide user control to enable/disable audio descriptions",
          "Ensure audio description track is properly labeled",
        ],
      },
      {
        category: "General",
        items: [
          "Test audio descriptions with blind users for clarity",
          "Verify all important visual information is covered",
          "Check that descriptions fit within natural pauses",
          "Ensure audio descriptions are synchronized correctly",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Audio Description (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G78: Providing a second, user-selectable, audio track that includes audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G78",
        type: "Techniques",
      },
      {
        title: "H96: Using the track element to provide audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/html/H96",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
    summary: "Provide sign language interpretation for prerecorded videos.",
    detailedSummary:
      "What This Means: This success criterion requires that prerecorded video content must have sign language interpretation available. Sign language is the primary language for many deaf users and provides better comprehension than text captions alone. The interpretation should be clearly visible and synchronized with the video content.\n\nWhy It's Important: While captions provide text access to audio content, sign language is the native language for many deaf users. Some deaf users have better comprehension in sign language than in written text, especially for complex concepts, emotional content, or when the user's first language is sign language. Providing sign language interpretation ensures the best possible access for this user group.\n\nIn Practice: Sign language interpretation can be provided as a picture-in-picture video overlay, a separate video track, or a dedicated area on the screen. The interpreter should be clearly visible, well-lit, and positioned so they don't obscure important visual content. The interpretation should be synchronized with the video and cover all important audio information.",
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
    keyTerms: [
      {
        term: "Sign Language",
        definition: "A language that uses manual communication and body language to convey meaning, used primarily by deaf communities.",
        context: "Common sign languages include American Sign Language (ASL), British Sign Language (BSL), and others specific to different regions.",
      },
      {
        term: "Sign Language Interpretation",
        definition: "Translation of spoken or written content into sign language, typically performed by a qualified sign language interpreter.",
        context: "Sign language interpretation provides an alternative to captions for deaf users whose primary language is sign language.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.2",
        title: "Captions (Prerecorded)",
        relationship: "Alternative to",
      },
      {
        number: "1.2.5",
        title: "Audio Description (Prerecorded)",
        relationship: "Often provided together with",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Arrange for qualified sign language interpreter",
          "Record sign language interpretation synchronized with video",
          "Ensure interpreter is clearly visible and well-lit",
          "Position interpreter so they don't obscure important content",
          "Provide interpretation for all important audio information",
        ],
      },
      {
        category: "HTML",
        items: [
          "Add sign language track or picture-in-picture overlay",
          "Provide user control to show/hide sign language",
          "Ensure sign language is properly labeled and accessible",
        ],
      },
      {
        category: "General",
        items: [
          "Test sign language visibility and clarity",
          "Verify interpretation covers all important content",
          "Ensure sign language doesn't interfere with video viewing",
          "Consider providing multiple sign languages for international content",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Sign Language (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G54: Providing sign language interpretation for synchronized media",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G54",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
    summary: "Provide extended audio descriptions when natural pauses aren't long enough.",
    detailedSummary:
      "What This Means: This success criterion requires extended audio descriptions for videos where standard audio descriptions cannot fit into natural pauses in the audio. Extended audio descriptions pause the video playback to insert longer, more detailed descriptions of complex visual scenes, then resume playback. This ensures that blind users receive all important visual information even in fast-paced or visually complex content.\n\nWhy It's Important: Some videos have very little dialogue or fast-paced action where natural pauses are too short for adequate audio descriptions. Standard audio descriptions might miss important visual details because they must fit into brief pauses. Extended audio descriptions solve this by pausing the video, providing detailed descriptions, then resuming, ensuring nothing is missed.\n\nIn Practice: Extended audio descriptions work by temporarily pausing the video at appropriate points to insert longer descriptions. The video then resumes after the description is complete. This technique is particularly important for educational content, complex narratives, or videos with rapid visual changes where standard descriptions would be insufficient.",
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
    keyTerms: [
      {
        term: "Extended Audio Description",
        definition: "Audio description that is added to an audiovisual presentation by pausing the video so that there is time to add additional description.",
        context: "Extended descriptions pause the video to allow for longer, more detailed descriptions of complex visual scenes.",
      },
      {
        term: "Foreground Audio",
        definition: "The primary audio track containing dialogue, narration, and important sounds that are essential to understanding the content.",
        context: "When foreground audio has insufficient pauses, extended audio description is needed.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.5",
        title: "Audio Description (Prerecorded)",
        relationship: "Enhanced version for complex content",
      },
      {
        number: "1.2.3",
        title: "Audio Description or Media Alternative (Prerecorded)",
        relationship: "Higher level requirement",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Identify videos where standard audio description is insufficient",
          "Create extended audio description script with detailed visual descriptions",
          "Determine appropriate pause points in video for extended descriptions",
          "Record extended descriptions that pause and resume video playback",
          "Ensure extended descriptions cover all important visual information",
        ],
      },
      {
        category: "HTML",
        items: [
          "Implement video pausing mechanism for extended descriptions",
          "Add extended audio description track to video element",
          "Provide user control to enable/disable extended descriptions",
        ],
      },
      {
        category: "General",
        items: [
          "Test extended descriptions with blind users for completeness",
          "Verify video pauses and resumes correctly",
          "Ensure extended descriptions don't disrupt narrative flow",
          "Check that all complex visual information is adequately described",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Extended Audio Description (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G8: Providing a movie with extended audio descriptions",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G8",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
    summary: "Provide a full text transcript for all prerecorded video content.",
    detailedSummary:
      "What This Means: This success criterion requires a complete text transcript for all prerecorded video content. The transcript must include all dialogue, speaker identification, sound effects, and descriptions of important visual information. This provides a comprehensive text alternative that users can read at their own pace, search, and access with assistive technologies.\n\nWhy It's Important: While captions and audio descriptions provide synchronized access to video content, a complete transcript offers additional benefits. Users can read at their own pace, search for specific content, copy and paste text, and use assistive technologies more effectively. This is especially valuable for deaf-blind users, users with cognitive disabilities, and anyone who prefers reading over watching/listening.\n\nIn Practice: The transcript should be a complete, searchable text document that includes all audio information (dialogue, sounds, music descriptions) and all important visual information (actions, scene descriptions, on-screen text). It should be well-formatted, easy to read, and easily accessible from the video page. Timestamps are helpful but not required.",
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
    keyTerms: [
      {
        term: "Alternative for Time-based Media",
        definition: "Document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction.",
        context: "A complete transcript serves as an alternative for time-based media, providing all information in text format.",
      },
      {
        term: "Prerecorded Synchronized Media",
        definition: "Audio or video that is prerecorded and synchronized with another format for presenting information.",
        context: "This includes videos with audio tracks that need complete transcripts.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Similar requirement at higher level",
      },
      {
        number: "1.2.2",
        title: "Captions (Prerecorded)",
        relationship: "Complements",
      },
      {
        number: "1.2.3",
        title: "Audio Description or Media Alternative (Prerecorded)",
        relationship: "Enhanced version",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Create complete transcript including all dialogue",
          "Include speaker identification when multiple speakers",
          "Describe all important sound effects and audio cues",
          "Include descriptions of all important visual information",
          "Format transcript for readability with proper structure",
          "Add timestamps if helpful (optional but recommended)",
        ],
      },
      {
        category: "HTML",
        items: [
          "Link to transcript with clear, descriptive link text",
          "Place transcript link prominently near video player",
          "Provide transcript in accessible format (HTML preferred)",
          "Make transcript searchable and downloadable",
        ],
      },
      {
        category: "General",
        items: [
          "Verify transcript completeness by comparing with video",
          "Test transcript accessibility with screen readers",
          "Ensure transcript is easy to find and access",
          "Check that transcript includes all necessary information",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Media Alternative (Prerecorded)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html",
        type: "Understanding",
      },
      {
        title: "G69: Providing an alternative for time-based media",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G69",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
    summary: "Provide a live transcript or captions for live audio-only content.",
    detailedSummary:
      "What This Means: This success criterion requires real-time text alternatives for live audio-only content, such as live radio broadcasts, webinars, live podcasts, or audio streams. The alternative must be provided as the content is happening, presenting equivalent information to what's in the audio.\n\nWhy It's Important: Live audio-only content is completely inaccessible to deaf and hard of hearing users without real-time text alternatives. Unlike prerecorded content where transcripts can be prepared in advance, live content requires immediate captioning or transcription to ensure equal access. This is especially critical for news, emergency broadcasts, educational webinars, and other time-sensitive audio content.\n\nIn Practice: Live audio-only content needs real-time captions or transcripts that update as the audio plays. This typically requires professional captioning services, advanced speech-to-text technology, or a combination of both. The text alternative should appear with minimal delay, be synchronized with the audio, and include all spoken content and important sounds. It should be clearly visible and accessible through the audio player interface.",
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
    keyTerms: [
      {
        term: "Live Audio-only",
        definition: "Audio content that is captured and transmitted in real-time, such as live radio broadcasts, webinars, or live audio streams.",
        context: "Live content requires real-time captioning or transcription as it happens.",
      },
      {
        term: "Real-time Alternative",
        definition: "Text alternative that is generated and updated as the live content is happening, with minimal delay.",
        context: "Real-time alternatives must keep up with the pace of live audio content.",
      },
    ],
    relatedCriteria: [
      {
        number: "1.2.1",
        title: "Audio-only and Video-only (Prerecorded)",
        relationship: "Similar requirement for live content",
      },
      {
        number: "1.2.4",
        title: "Captions (Live)",
        relationship: "Related requirement for live synchronized media",
      },
    ],
    implementationChecklist: [
      {
        category: "Content",
        items: [
          "Arrange for real-time captioning or transcription service",
          "Ensure text alternative updates in real-time with minimal delay",
          "Include all spoken content and important sounds",
          "Provide speaker identification when multiple speakers",
          "Test caption accuracy and synchronization before going live",
        ],
      },
      {
        category: "HTML",
        items: [
          "Implement live caption display area with aria-live region",
          "Update caption text in real-time via WebSocket or similar",
          "Ensure captions are clearly visible and readable",
          "Provide caption display controls if needed",
        ],
      },
      {
        category: "General",
        items: [
          "Set up live captioning infrastructure before broadcast",
          "Test real-time captioning system thoroughly",
          "Have backup captioning method in case primary fails",
          "Monitor caption quality during live broadcast",
          "Ensure captions are accessible and properly formatted",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Audio-only (Live)",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html",
        type: "Understanding",
      },
      {
        title: "G150: Providing text based alternatives for live audio-only content",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G150",
        type: "Techniques",
      },
      {
        title: "G9: Creating captions for live synchronized media",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G9",
        type: "Techniques",
      },
    ],
  },
]