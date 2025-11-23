import type { SuccessCriterion } from '../types'

// Guideline 2.2: Enough Time
export const enoughTimeCriteria: SuccessCriterion[] = [
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
    officialDefinition:
      "For each time limit that is set by the content, at least one of the following is true: (Level A) Turn off: The user is allowed to turn off the time limit before encountering it; or Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, 'press the space bar'), and the user is allowed to extend the time limit at least ten times; or Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or Essential Exception: The time limit is essential and extending it would invalidate the activity; or 20 Hour Exception: The time limit is longer than 20 hours.",
    summary: "Users must be able to turn off, adjust, or extend time limits.",
    detailedSummary:
      "What This Means: This success criterion requires that any time limit set by content must allow users to either turn it off, adjust it (to at least 10x the default), or extend it (with at least 20 seconds warning and ability to extend at least 10 times). Exceptions exist for real-time events (like auctions), essential time limits (where extending would invalidate the activity), and time limits longer than 20 hours.\n\nWhy It's Important: Users with disabilities may need more time to read content, fill out forms, or complete tasks. Cognitive disabilities, motor disabilities, or low vision can all require additional time. If time limits cannot be controlled, these users are excluded from accessing the content or completing tasks.\n\nIn Practice: For session timeouts, provide warnings before expiration and allow users to extend. For form timeouts, allow users to adjust or extend the time limit. For timed tests or activities, provide options to turn off or adjust timing. Only use fixed time limits when they're essential to the function (like real-time events) or when the limit is longer than 20 hours.",
    whyItMatters: "Users with disabilities may need more time to read or interact with content.",
    whoBenefits: ["Users with cognitive disabilities", "Users with motor disabilities", "Users with low vision"],
    details: {
      introduction:
        "This criterion ensures that users have control over time limits, allowing them to turn off, adjust, or extend time limits to accommodate their needs.",
      intent:
        "The intent is to ensure that users who need more time to read or interact with content are not prevented from doing so by arbitrary time limits. Users must be able to control time limits unless they are essential to the function.",
    },
    examples: [
      {
        title: "Session Timeout Without Extension",
        description: "A session times out after 15 minutes with no way to extend it, causing data loss.",
        type: "bad",
        code: 'setTimeout(() => { logout(); }, 900000);',
      },
      {
        title: "Session With Extension Option",
        description: "A session warns users before timeout and allows them to extend the session.",
        type: "good",
        code: 'setTimeout(() => { showExtensionDialog(); }, 840000);',
      },
    ],
    codeExamples: {
      html: `<!-- ✅ Good: Time limit with extension option -->
<div id="timeout-warning" style="display: none;">
  <p>Your session will expire in 2 minutes.</p>
  <button onclick="extendSession()">Extend Session</button>
</div>

<script>
let sessionTimer;
function startSession() {
  sessionTimer = setTimeout(() => {
    showTimeoutWarning();
  }, 13 * 60 * 1000); // Warn at 13 minutes
}

function extendSession() {
  clearTimeout(sessionTimer);
  startSession(); // Restart timer
}
</script>`,
      react: `// ✅ Good: Session with extension
function SessionManager() {
  const [timeRemaining, setTimeRemaining] = useState(15 * 60) // 15 minutes
  const [showWarning, setShowWarning] = useState(false)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 120) { // 2 minutes left
          setShowWarning(true)
        }
        if (prev <= 0) {
          handleLogout()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const extendSession = () => {
    setTimeRemaining(15 * 60)
    setShowWarning(false)
  }
  
  return (
    <>
      {showWarning && (
        <div role="alert">
          <p>Your session will expire in {timeRemaining} seconds.</p>
          <button onClick={extendSession}>Extend Session</button>
        </div>
      )}
    </>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all time limits on the page (session timeouts, form submission deadlines, etc.).",
        "Verify users can turn off, adjust, or extend each time limit.",
        "Test that extension mechanisms are clearly visible and accessible.",
        "Check that warnings appear before time limits expire.",
        "Verify time limits can be extended multiple times if needed.",
        "Test with keyboard navigation to ensure controls are accessible.",
        "Check that essential time limits (like auctions) are clearly marked as exceptions.",
      ],
      automated: [
        "Use browser DevTools to check for setTimeout/setInterval calls.",
        "Use accessibility testing tools to verify time limit controls are accessible.",
      ],
    },
    complianceRequirements: [
      "Users must be able to turn off, adjust, or extend time limits before they expire.",
      "Time limit warnings must be provided with sufficient notice (at least 20 seconds before expiration).",
      "Extension mechanisms must be clearly visible and accessible.",
      "Time limits can only be essential if they're required for the function (e.g., real-time events, auctions).",
      "Users must be able to extend time limits at least 10 times the original duration.",
    ],
    beyondCompliance: [
      "Provide clear, prominent warnings well before time limits expire.",
      "Allow users to set their own preferred timeout durations.",
      "Save user work automatically to prevent data loss.",
      "Provide multiple ways to extend time limits (button, keyboard shortcut).",
      "Test time limit controls with actual users to ensure usability.",
      "Consider providing options to disable time limits entirely when possible.",
    ],
    myths: [
      {
        myth: "If I warn users about time limits, that's enough.",
        reality: "Warnings alone are not sufficient. Users must be able to actually extend or turn off the time limit, not just be warned about it.",
      },
      {
        myth: "Time limits are necessary for security, so they can't be extended.",
        reality: "While some time limits may be essential, most can be extended. Security concerns should be balanced with accessibility needs. Consider longer default timeouts or user-adjustable limits.",
      },
    ],
    commonFailures: [
      {
        failure: "Session timeouts without extension options.",
        solution: "Provide a way to extend sessions. Show warnings before timeout and allow users to extend. Save work automatically to prevent data loss.",
      },
      {
        failure: "Form submission deadlines without extension.",
        solution: "Allow users to extend deadlines or remove them entirely. If deadlines are essential, clearly explain why and provide alternatives.",
      },
      {
        failure: "Time limits that cannot be turned off or adjusted.",
        solution: "Provide controls to turn off or adjust time limits. Only keep essential time limits that cannot be changed, and clearly mark them as such.",
      },
    ],
    keyTerms: [
      {
        term: "Time Limit",
        definition: "Any limit that is set by the content and that requires the user to perform an action within a specified period of time.",
        context: "Time limits must be controllable by users unless they meet specific exception criteria.",
      },
      {
        term: "Extend",
        definition: "To increase the time limit, typically with a warning before expiration and a simple action to extend.",
        context: "Users must be able to extend time limits at least 10 times, with at least 20 seconds warning.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.2",
        title: "Pause, Stop, Hide",
        relationship: "Complements",
      },
      {
        number: "2.2.3",
        title: "No Timing",
        relationship: "Higher level requirement",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Provide mechanism to turn off time limits",
          "Allow users to adjust time limits (at least 10x default)",
          "Show warnings before time expires (at least 20 seconds)",
          "Allow users to extend time limits (at least 10 times)",
          "Save work automatically to prevent data loss",
        ],
      },
      {
        category: "General",
        items: [
          "Identify all time limits in content",
          "Provide user controls for time limits",
          "Test that time limits can be controlled",
          "Verify exceptions are valid (real-time, essential, 20+ hours)",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Timing Adjustable",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
        type: "Understanding",
      },
      {
        title: "G198: Providing a way for the user to turn the time limit off",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G198",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "For moving, blinking, scrolling, or auto-updating information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and for any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.",
    summary: "Users must be able to pause, stop, or hide moving or auto-updating content.",
    detailedSummary:
      "What This Means: This success criterion requires that moving, blinking, scrolling, or auto-updating content that starts automatically and lasts more than 5 seconds must have controls to pause, stop, or hide it. This applies to carousels, news tickers, auto-updating feeds, animated banners, and similar content. The controls must be easy to find and use.\n\nWhy It's Important: Moving or blinking content can be distracting, especially for users with attention disorders or cognitive disabilities. It can also cause motion sickness or vestibular disorders for some users. Auto-updating content can be disruptive and make it difficult to read or interact with other content. By providing controls, users can manage their experience according to their needs.\n\nIn Practice: Add pause/play buttons to carousels and sliders. Provide stop controls for auto-updating content like news tickers or live feeds. Ensure controls are clearly visible and keyboard accessible. Content that lasts 5 seconds or less, or that is essential to the activity, is exempt from this requirement.",
    whyItMatters: "Moving content can be distracting or cause nausea for some users.",
    whoBenefits: ["Users with attention disorders", "Users with vestibular disorders"],
    details: {
      introduction:
        "This criterion ensures that users can control moving, blinking, scrolling, or auto-updating content, allowing them to pause, stop, or hide it to prevent distraction or motion sickness.",
      intent:
        "The intent is to give users control over animated or auto-updating content that could be distracting or cause vestibular disorders (dizziness, nausea). Users must be able to pause, stop, or hide such content.",
    },
    examples: [
      {
        title: "Unstoppable Carousel",
        description: "A carousel auto-rotates with no pause button, causing distraction and potential motion sickness.",
        type: "bad",
        code: '<div class="carousel" data-autoplay="true"></div>',
      },
      {
        title: "Carousel With Controls",
        description: "A carousel has pause/play buttons allowing users to stop the animation.",
        type: "good",
        code: '<div class="carousel"><button aria-label="Pause carousel">⏸</button></div>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Auto-updating without controls -->
<div id="news-ticker" class="scrolling">Latest news...</div>
<script>
  setInterval(() => updateTicker(), 5000);
</script>

<!-- ✅ Good: With pause/stop controls -->
<div id="news-ticker" class="scrolling">Latest news...</div>
<button onclick="pauseTicker()" aria-label="Pause news ticker">⏸ Pause</button>
<button onclick="stopTicker()" aria-label="Stop news ticker">⏹ Stop</button>

<script>
let tickerInterval;
function pauseTicker() {
  clearInterval(tickerInterval);
}
function stopTicker() {
  clearInterval(tickerInterval);
  document.getElementById('news-ticker').style.display = 'none';
}
</script>`,
      react: `// ✅ Good: Carousel with pause controls
function Carousel() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isPlaying])
  
  return (
    <div className="carousel">
      <div className="slides">{/* Slides */}</div>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  )
}`,
    },
    testing: {
      manual: [
        "Identify all moving, blinking, scrolling, or auto-updating content.",
        "Verify pause, stop, or hide controls are present and functional.",
        "Test that controls are keyboard accessible.",
        "Check that content can be paused, stopped, or hidden.",
        "Verify controls are clearly labeled and easy to find.",
        "Test with users who have vestibular disorders if possible.",
        "Check that auto-updating content (like live feeds) can be paused.",
      ],
      automated: [
        "Use browser DevTools to identify animated or auto-updating content.",
        "Use accessibility testing tools to verify controls are present and accessible.",
      ],
    },
    complianceRequirements: [
      "Moving, blinking, or scrolling content must have pause, stop, or hide controls.",
      "Auto-updating content (like live feeds, stock tickers) must have pause, stop, or hide controls.",
      "Controls must be keyboard accessible.",
      "Controls must be clearly labeled and easy to find.",
      "Content must actually pause, stop, or hide when controls are activated.",
    ],
    beyondCompliance: [
      "Provide prominent, easy-to-find controls for animated content.",
      "Consider pausing animations by default and requiring user activation.",
      "Respect prefers-reduced-motion media query to automatically pause animations.",
      "Provide multiple control options (pause, stop, hide) for user preference.",
      "Test controls with actual users to ensure usability.",
      "Consider providing settings to disable all animations site-wide.",
    ],
    myths: [
      {
        myth: "If content moves slowly, it doesn't need pause controls.",
        reality: "Even slow-moving content can be distracting or cause motion sickness. All moving content must have pause/stop controls, regardless of speed.",
      },
      {
        myth: "Auto-updating content like live feeds is essential, so it can't be paused.",
        reality: "Even essential auto-updating content must have pause controls. Users can choose to pause it if it causes issues, then resume when ready.",
      },
    ],
    commonFailures: [
      {
        failure: "Carousels or sliders that auto-rotate without pause controls.",
        solution: "Add pause/play buttons to carousels. Ensure controls are keyboard accessible and clearly labeled.",
      },
      {
        failure: "Scrolling news tickers or marquees without stop controls.",
        solution: "Add pause/stop buttons. Consider using static content instead of scrolling when possible.",
      },
      {
        failure: "Auto-updating content (live feeds, stock prices) without pause controls.",
        solution: "Add pause/refresh controls. Allow users to control when content updates.",
      },
      {
        failure: "Animated GIFs or CSS animations that cannot be stopped.",
        solution: "Provide controls to pause animations, or respect prefers-reduced-motion. Consider using static images with play buttons instead.",
      },
    ],
    keyTerms: [
      {
        term: "Moving, Blinking, Scrolling",
        definition: "Content that changes position, flashes, or scrolls automatically, typically for more than 5 seconds.",
        context: "Such content must have controls to pause, stop, or hide it unless it's essential to the activity.",
      },
      {
        term: "Auto-updating",
        definition: "Content that updates automatically without user interaction, such as live feeds, stock tickers, or news updates.",
        context: "Auto-updating content must have controls to pause, stop, or hide it, or to control update frequency.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.1",
        title: "Timing Adjustable",
        relationship: "Complements",
      },
      {
        number: "2.3.1",
        title: "Three Flashes or Below Threshold",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add pause/play buttons to carousels and sliders",
          "Add stop controls to scrolling content",
          "Provide controls for auto-updating content",
          "Ensure controls are keyboard accessible",
          "Label controls clearly",
        ],
      },
      {
        category: "CSS",
        items: [
          "Respect prefers-reduced-motion media query",
          "Allow animations to be paused",
        ],
      },
      {
        category: "General",
        items: [
          "Identify all moving/auto-updating content",
          "Verify controls are present and functional",
          "Test that content actually pauses/stops",
          "Check controls are easy to find",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Pause, Stop, Hide",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
        type: "Understanding",
      },
      {
        title: "G4: Allowing the content to be paused and restarted from where it was paused",
        url: "https://www.w3.org/WAI/WCAG22/Techniques/general/G4",
        type: "Techniques",
      },
    ],
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
    officialDefinition:
      "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    summary: "No time limits on content interaction.",
    detailedSummary:
      "What This Means: This success criterion is a stricter version of 2.2.1 (Level A). At Level AAA, no time limits should be imposed on user interactions, except for non-interactive synchronized media (like videos that play automatically) and real-time events (like auctions or live games where timing is essential). Users must be able to take as long as they need to read, understand, and interact with content.\n\nWhy It's Important: Time limits create pressure and can prevent users with disabilities from completing tasks. Users with cognitive disabilities may need more time to process information. Users with motor disabilities may need more time to interact. By removing time limits entirely (except where essential), we ensure that all users can complete tasks at their own pace without pressure.\n\nIn Practice: Remove all time limits from forms, reading content, and interactive activities. Allow users to take as long as needed. Only keep time limits for real-time events (like auctions) or non-interactive media (like videos). For session management, use very long timeouts (20+ hours) or provide clear warnings with easy extension options.",
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
      html: `<!-- âŒ Bad: Form with time limit -->
<form id="timed-form">
  <!-- Auto-submits after timeout -->
</form>
<script>
  setTimeout(() => {
    document.getElementById('timed-form').submit()
  }, 300000) // 5 minutes
</script>

<!-- âœ… Good: No time limit -->
<form>
  <!-- Users can take as long as needed -->
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>`,
      react: `// âŒ Bad: Component with time limit
function TimedForm() {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit() // Auto-submit after timeout
    }, 300000)
    return () => clearTimeout(timer)
  }, [])

  return <form>{/* Form content */}</form>
}

// âœ… Good: No time limit
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
        "Check that no time limits are imposed on user interactions.",
        "Verify forms don't auto-submit after a timeout.",
        "Test that users can take as long as needed to complete tasks.",
        "Check that data is preserved if users take a long time.",
        "Verify exceptions are only for non-interactive media or real-time events.",
        "Test that users can pause and resume tasks without time pressure.",
        "Check that no countdown timers or deadlines are enforced.",
      ],
      automated: [
        "Tools can detect setTimeout/setInterval but cannot verify if timing is essential.",
        "Use browser DevTools to check for timer functions.",
      ],
    },
    complianceRequirements: [
      "No time limits may be imposed on user interactions, except for non-interactive synchronized media (videos) and real-time events (auctions, games).",
      "Forms must not auto-submit after a timeout.",
      "Users must be able to take as long as needed to complete tasks.",
      "Data must be preserved regardless of how long users take.",
      "Real-time events (like auctions) are exempt but should be clearly marked.",
    ],
    beyondCompliance: [
      "Provide clear indication when timing is essential (e.g., 'This is a timed auction').",
      "Save user progress automatically to prevent data loss.",
      "Allow users to pause and resume tasks at any time.",
      "Provide clear information about any essential timing requirements upfront.",
      "Consider providing practice modes or untimed alternatives when possible.",
    ],
    myths: [
      {
        myth: "All time limits are bad and must be removed.",
        reality: "Time limits for non-interactive media (videos) and real-time events (auctions) are acceptable. The issue is with time limits on user interactions like forms or reading content.",
      },
    ],
    commonFailures: [
      {
        failure: "Forms that auto-submit after a timeout.",
        solution: "Remove auto-submit timeouts. Allow users to take as long as needed. Save progress automatically.",
      },
      {
        failure: "Reading time limits or deadlines on content consumption.",
        solution: "Remove time limits on reading or viewing content. Users should be able to take as long as needed.",
      },
    ],
    keyTerms: [
      {
        term: "Non-interactive Synchronized Media",
        definition: "Time-based media that does not require user interaction, such as automatically playing videos.",
        context: "Time limits for non-interactive synchronized media are acceptable exceptions.",
      },
      {
        term: "Real-time Events",
        definition: "Events where timing is essential to the activity, such as auctions, live games, or real-time competitions.",
        context: "Time limits for real-time events are acceptable exceptions.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.1",
        title: "Timing Adjustable",
        relationship: "Stricter version",
      },
    ],
    implementationChecklist: [
      {
        category: "General",
        items: [
          "Remove all time limits from user interactions",
          "Allow users to take as long as needed",
          "Save progress automatically",
          "Only keep time limits for real-time events or non-interactive media",
          "Test that users can complete tasks without time pressure",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding No Timing",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html",
        type: "Understanding",
      },
    ],
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
    officialDefinition:
      "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
    summary: "Users can postpone or suppress interruptions (like alerts).",
    detailedSummary:
      "What This Means: This success criterion requires that interruptions like alerts, notifications, updates, or other content that appears automatically must be able to be postponed or suppressed by users. This allows users to control when they receive interruptions, helping them stay focused on their current task. Only emergency interruptions (like critical security alerts) are exempt.\n\nWhy It's Important: Users with attention disorders or cognitive disabilities can be easily distracted by interruptions. Unexpected alerts or notifications can disrupt their focus and make it difficult to complete tasks. By allowing users to postpone or suppress interruptions, we give them control over their experience and help them maintain focus.\n\nIn Practice: Provide controls to postpone or suppress alerts and notifications. Allow users to set preferences for when they receive interruptions. Provide 'Do not disturb' modes or quiet hours. Only show emergency interruptions immediately, and clearly mark them as emergencies. For non-emergency interruptions, provide options to 'Remind me later' or 'Dismiss'.",
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
      html: `<!-- âŒ Bad: Unstoppable interruptions -->
<div id="notification" class="notification">
  New message received
</div>
<script>
  // Cannot be postponed or suppressed
  setInterval(showNotification, 30000)
</script>

<!-- âœ… Good: Controllable interruptions -->
<div id="notification" class="notification">
  New message received
  <button onclick="postponeNotification()">Postpone</button>
  <button onclick="dismissNotification()">Dismiss</button>
</div>

<!-- âœ… Good: Settings to suppress interruptions -->
<label>
  <input type="checkbox" id="suppress-notifications">
  Suppress notifications
</label>`,
      react: `// âœ… Good: Controllable notifications
function Notification({ message, onPostpone, onDismiss }) {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onPostpone}>Postpone</button>
      <button onClick={onDismiss}>Dismiss</button>
    </div>
  )
}

// âœ… Good: Settings to suppress interruptions
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
        "Check that interruptions can be postponed or suppressed.",
        "Verify users can control when they receive notifications.",
        "Test that suppression settings persist.",
        "Check that emergency interruptions are still shown.",
        "Verify that postponed interruptions can be viewed later.",
        "Test that users can configure notification preferences.",
        "Check that interruption controls are keyboard accessible.",
      ],
      automated: [
        "Tools can detect notification elements but cannot verify postponement functionality.",
        "Use accessibility testing tools to verify controls are present.",
      ],
    },
    complianceRequirements: [
      "Users must be able to postpone or suppress interruptions (alerts, notifications, updates).",
      "Interruption controls must be accessible and easy to use.",
      "Emergency interruptions are exempt but should be clearly marked.",
      "Suppression settings must persist across sessions.",
      "Postponed interruptions must be accessible later.",
    ],
    beyondCompliance: [
      "Provide comprehensive notification settings for users to control all interruptions.",
      "Allow users to set quiet hours or focus modes.",
      "Provide clear options to postpone, dismiss, or suppress different types of interruptions.",
      "Test interruption controls with users who have attention disorders.",
      "Consider providing a notification center where users can review postponed interruptions.",
    ],
    myths: [
      {
        myth: "All notifications are important, so users shouldn't be able to suppress them.",
        reality: "Users need control over interruptions to maintain focus. Only emergency interruptions should be non-suppressible.",
      },
    ],
    commonFailures: [
      {
        failure: "Notifications that cannot be postponed or suppressed.",
        solution: "Add controls to postpone, dismiss, or suppress notifications. Provide settings for users to control notification preferences.",
      },
      {
        failure: "Interruption controls that are hard to find or use.",
        solution: "Make interruption controls prominent and easy to access. Provide clear labels and keyboard accessibility.",
      },
    ],
    keyTerms: [
      {
        term: "Interruptions",
        definition: "Content that appears automatically and disrupts the user's current activity, such as alerts, notifications, or updates.",
        context: "Interruptions must be able to be postponed or suppressed by users, except for emergencies.",
      },
      {
        term: "Emergency",
        definition: "A situation that poses an immediate risk to health, safety, property, or environment.",
        context: "Emergency interruptions are exempt from the requirement to be postponable or suppressible.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.2",
        title: "Pause, Stop, Hide",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "HTML",
        items: [
          "Add postpone/dismiss buttons to interruptions",
          "Provide settings to suppress interruptions",
          "Ensure controls are keyboard accessible",
          "Label controls clearly",
        ],
      },
      {
        category: "General",
        items: [
          "Identify all automatic interruptions",
          "Provide controls to postpone or suppress",
          "Test that interruptions can be controlled",
          "Verify settings persist across sessions",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Interruptions",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html",
        type: "Understanding",
      },
    ],
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
    officialDefinition:
      "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
    summary: "If a session expires, users can log back in and continue where they left off without losing data.",
    detailedSummary:
      "What This Means: This success criterion requires that when a user's authenticated session expires (times out), they must be able to re-authenticate (log back in) and continue their work without losing any data they had entered. All form data, progress, and work must be preserved and restored after re-authentication.\n\nWhy It's Important: Users with disabilities may take longer to complete tasks, making them more likely to encounter session timeouts. If data is lost when a session expires, these users lose their work and must start over, which is frustrating and may prevent them from completing tasks. By preserving data across session expiration, we ensure users don't lose their progress.\n\nIn Practice: Save all user input and progress automatically, either to the server or local storage. When a session expires, show a clear message and allow re-authentication. After re-authentication, restore all saved data so users can continue exactly where they left off. Test by letting a session expire and verifying that all data is preserved and restored after logging back in.",
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
      html: `<!-- âœ… Good: Auto-save form data -->
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
      react: `// âœ… Good: Auto-save and restore form data
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
        "Start filling out a form or entering data.",
        "Let the session expire (or simulate expiration).",
        "Re-authenticate.",
        "Verify that all entered data is preserved and restored.",
        "Check that users can continue where they left off.",
        "Test that data is saved automatically as users type.",
        "Verify that file uploads or complex data are preserved.",
      ],
      automated: [
        "Tools cannot verify session expiration and data preservation.",
        "Use browser DevTools to check for auto-save functionality.",
      ],
    },
    complianceRequirements: [
      "When a session expires, users must be able to re-authenticate and continue without data loss.",
      "All user-entered data must be preserved during session expiration.",
      "Data must be automatically saved as users interact with forms.",
      "Users must be able to resume their work exactly where they left off.",
      "Re-authentication must be straightforward and not require re-entering data.",
    ],
    beyondCompliance: [
      "Provide clear messaging about session expiration and data preservation.",
      "Auto-save data frequently to prevent any potential loss.",
      "Provide visual indicators that data is being saved.",
      "Allow users to manually save their work at any time.",
      "Test data preservation with complex forms and file uploads.",
    ],
    myths: [
      {
        myth: "Session expiration is a security feature, so data loss is acceptable.",
        reality: "Security and accessibility can coexist. Data should be preserved even when sessions expire, allowing users to re-authenticate and continue.",
      },
    ],
    commonFailures: [
      {
        failure: "Session expiration causes complete data loss.",
        solution: "Implement auto-save functionality. Preserve form data in localStorage or server-side. Restore data after re-authentication.",
      },
      {
        failure: "Users must re-enter all data after session expiration.",
        solution: "Auto-save data as users type. Restore all data automatically after re-authentication. Provide clear messaging about data preservation.",
      },
    ],
    keyTerms: [
      {
        term: "Authenticated Session",
        definition: "A period during which a user is logged in and authenticated to access protected content or functionality.",
        context: "When authenticated sessions expire, users must be able to re-authenticate without losing data.",
      },
      {
        term: "Re-authenticating",
        definition: "The process of logging back in after a session has expired.",
        context: "Users must be able to re-authenticate and continue their work without data loss.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.1",
        title: "Timing Adjustable",
        relationship: "Complements",
      },
      {
        number: "2.2.6",
        title: "Timeouts",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Implement auto-save functionality for all user input",
          "Save data to localStorage or server-side storage",
          "Restore data after re-authentication",
          "Preserve form state and progress",
        ],
      },
      {
        category: "General",
        items: [
          "Test session expiration scenarios",
          "Verify all data is preserved",
          "Test re-authentication flow",
          "Ensure users can continue where they left off",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Re-authenticating",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html",
        type: "Understanding",
      },
    ],
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
    officialDefinition:
      "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
    summary: "Warn users about timeouts to prevent data loss.",
    detailedSummary:
      "What This Means: This success criterion requires that users must be warned about inactivity timeouts that could cause data loss. The warning should inform users how long they have before the timeout occurs. This allows users to take action to prevent data loss. If data is preserved for more than 20 hours of inactivity, warnings are not required.\n\nWhy It's Important: Users with cognitive disabilities or attention disorders may need to take breaks or may become distracted. Without warnings about upcoming timeouts, they may lose their work unexpectedly. By providing clear warnings, users can save their work, extend their session, or take other actions to prevent data loss.\n\nIn Practice: Show warnings before inactivity timeouts occur. Provide clear information about how much time remains and what will happen if the timeout occurs. Allow users to extend the session or save their work. Warnings should be prominent and easy to understand. If data is automatically preserved for more than 20 hours, warnings are not needed.",
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
      html: `<!-- âœ… Good: Timeout warning -->
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
      react: `// âœ… Good: Timeout warning component
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
        "Check that users are warned before inactivity timeouts.",
        "Verify warning appears with sufficient time before timeout.",
        "Test that users can extend the session from the warning.",
        "Check that users can save data before timeout.",
        "Verify that warnings are clear and actionable.",
        "Test that timeout duration is clearly communicated.",
        "Verify warnings are accessible to screen readers.",
      ],
      automated: [
        "Tools cannot verify timeout warnings or timing.",
        "Use browser DevTools to check for timeout warning implementations.",
      ],
    },
    complianceRequirements: [
      "Users must be warned about inactivity timeouts that could cause data loss.",
      "Warnings must appear with sufficient time before timeout (at least 20 seconds).",
      "Timeout duration must be clearly communicated to users.",
      "Users must be able to extend the session from the warning.",
      "Data must be preserved for more than 20 hours if no warning is provided.",
    ],
    beyondCompliance: [
      "Provide clear, prominent warnings well before timeout.",
      "Allow users to configure their preferred timeout duration.",
      "Provide multiple ways to extend sessions (button, keyboard shortcut).",
      "Auto-save data before timeout to prevent loss.",
      "Test timeout warnings with actual users to ensure clarity.",
    ],
    myths: [
      {
        myth: "If I preserve data for 20 hours, I don't need to warn users.",
        reality: "While 20-hour preservation is an exception, it's better practice to warn users about timeouts regardless. Warnings help users manage their time and prevent unexpected data loss.",
      },
    ],
    commonFailures: [
      {
        failure: "No warning before inactivity timeout causes data loss.",
        solution: "Implement timeout warnings that appear at least 20 seconds before expiration. Allow users to extend the session. Auto-save data to prevent loss.",
      },
      {
        failure: "Timeout warnings appear too late or are unclear.",
        solution: "Show warnings well in advance (at least 20 seconds). Use clear, actionable language. Provide prominent buttons to extend the session.",
      },
    ],
    keyTerms: [
      {
        term: "User Inactivity",
        definition: "A period during which the user does not interact with the content, such as not moving the mouse, typing, or clicking.",
        context: "Users must be warned about inactivity timeouts that could cause data loss.",
      },
      {
        term: "Timeout",
        definition: "An automatic termination of a session or activity after a period of inactivity.",
        context: "Timeouts that could cause data loss must be preceded by warnings to users.",
      },
    ],
    relatedCriteria: [
      {
        number: "2.2.1",
        title: "Timing Adjustable",
        relationship: "Complements",
      },
      {
        number: "2.2.5",
        title: "Re-authenticating",
        relationship: "Related to",
      },
    ],
    implementationChecklist: [
      {
        category: "JavaScript",
        items: [
          "Show warnings before inactivity timeouts",
          "Display countdown timer showing time remaining",
          "Allow users to extend session from warning",
          "Auto-save data before timeout",
          "Provide clear messaging about timeout consequences",
        ],
      },
      {
        category: "General",
        items: [
          "Test timeout warning functionality",
          "Verify warnings appear with sufficient time",
          "Check that users can extend sessions",
          "Verify warnings are accessible",
        ],
      },
    ],
    officialResources: [
      {
        title: "Understanding Timeouts",
        url: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html",
        type: "Understanding",
      },
    ],
  },
]