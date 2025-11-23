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
    summary: "Users must be able to turn off, adjust, or extend time limits.",
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
  },
]