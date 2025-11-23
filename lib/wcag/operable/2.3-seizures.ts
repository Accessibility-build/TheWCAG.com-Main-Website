import type { SuccessCriterion } from '../types'

// Guideline 2.3: Seizures and Physical Reactions
export const seizuresCriteria: SuccessCriterion[] = [
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
    details: {
      introduction:
        "This criterion prevents content that flashes more than 3 times per second, which can trigger seizures in users with photosensitive epilepsy.",
      intent:
        "The intent is to prevent seizures by ensuring that content does not flash more than 3 times per second, or if it does flash, it must be below the general flash and red flash thresholds.",
    },
    examples: [
      {
        title: "Fast Flashing Animation",
        description: "An animation flashes 5 times per second, exceeding the 3-flash limit.",
        type: "bad",
        code: '<div style="animation: flash 0.2s infinite;">Flashing content</div>',
      },
      {
        title: "Slow Flashing or Static Content",
        description: "Content flashes at most 3 times per second or is static.",
        type: "good",
        code: '<div style="animation: flash 0.4s infinite;">Safe content</div>',
      },
    ],
    codeExamples: {
      html: `<!-- ❌ Bad: Fast flashing (5 times per second) -->
<div style="animation: flash 0.2s infinite;">Flashing content</div>

<!-- ✅ Good: Slow flashing (2 times per second) -->
<div style="animation: flash 0.5s infinite;">Safe flashing</div>

<!-- ✅ Good: No flashing -->
<div>Static content</div>`,
      css: `/* ❌ Bad: Fast flash animation */
@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.fast-flash {
  animation: flash 0.2s infinite; /* 5 flashes per second */
}

/* ✅ Good: Slow flash animation */
@keyframes slow-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.slow-flash {
  animation: slow-flash 0.5s infinite; /* 2 flashes per second */
}`,
    },
    testing: {
      manual: [
        "Review all animated or flashing content on the page.",
        "Count flashes per second - must not exceed 3 flashes per second.",
        "Check animations, transitions, and video content for flashing.",
        "Verify that any flashing content is below the general flash threshold (if flashing more than 3 times per second).",
        "Test with photosensitive epilepsy simulation tools if available.",
        "Check that red flashing content is below the red flash threshold.",
      ],
      automated: [
        "Use tools like Photosensitive Epilepsy Analysis Tool (PEAT) to detect flashing content.",
        "Use browser DevTools to analyze animation timing.",
        "Use accessibility testing tools to identify potential flashing issues.",
      ],
    },
    complianceRequirements: [
      "Content must not flash more than 3 times in any one second period.",
      "If content flashes more than 3 times per second, it must be below the general flash threshold (25% screen area, 341 cd/m²).",
      "Red flashing content must be below the red flash threshold (10% screen area, 23 cd/m²).",
      "All animations, transitions, and video content must comply with flash limits.",
      "Content that cannot be made compliant must be removed or replaced.",
    ],
    beyondCompliance: [
      "Avoid flashing content entirely when possible.",
      "Use smooth transitions instead of abrupt flashes.",
      "Provide options to disable animations for users who are sensitive.",
      "Test content with actual users who have photosensitive epilepsy if possible.",
      "Consider providing a reduced-motion mode that eliminates all flashing.",
      "Document any flashing content and provide warnings if necessary.",
    ],
    myths: [
      {
        myth: "If the flash is small, it's okay to flash quickly.",
        reality: "Size matters, but the 3-flash-per-second limit applies regardless. Small flashes can still trigger seizures if they exceed the threshold.",
      },
      {
        myth: "Only bright flashes are dangerous.",
        reality: "Even dim flashes can be dangerous if they exceed 3 per second. The threshold considers both brightness and area.",
      },
    ],
    commonFailures: [
      {
        failure: "Animations that flash more than 3 times per second.",
        solution: "Slow down animations to flash at most 3 times per second. Use smooth transitions instead of abrupt flashes.",
      },
      {
        failure: "Video content with rapid flashing sequences.",
        solution: "Review video content for flashing. Edit or replace sequences that flash more than 3 times per second.",
      },
      {
        failure: "CSS animations with fast flash effects.",
        solution: "Adjust animation timing to ensure flashes occur at most 3 times per second. Use opacity transitions instead of on/off flashes.",
      },
    ],
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
      html: `<!-- âŒ Bad: Fast flashing (5 times per second) -->
<div class="flashing" style="animation: flash 0.2s infinite;">
  Flashing content
</div>

<!-- âœ… Good: Slow flashing (2 times per second) -->
<div class="flashing" style="animation: flash 0.5s infinite;">
  Slow flashing content
</div>

<!-- âœ… Good: No flashing -->
<div class="static">
  Static content
</div>`,
      css: `/* âŒ Bad: Fast flash animation */
@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.flashing {
  animation: flash 0.2s infinite; /* 5 flashes per second */
}

/* âœ… Good: Slow flash animation */
@keyframes slow-flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.flashing {
  animation: slow-flash 0.5s infinite; /* 2 flashes per second */
}`,
      react: `// âŒ Bad: Fast flashing component
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

// âœ… Good: Slow flashing or no flashing
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
        "Check all animated or flashing content on the page.",
        "Verify no content flashes more than 3 times per second.",
        "Test animations and transitions for flash frequency.",
        "Check video content for flashing sequences.",
        "Verify that all flashing content meets the 3-flash limit with no exceptions.",
        "Test with photosensitive epilepsy analysis tools if available.",
      ],
      automated: [
        "Tools can detect animations but cannot accurately measure flash frequency.",
        "Use PEAT (Photosensitive Epilepsy Analysis Tool) to analyze flashing content.",
      ],
    },
    complianceRequirements: [
      "Content must not flash more than 3 times per second, with no exceptions.",
      "This is stricter than Level A 2.3.1, which allows exceptions for content below thresholds.",
      "All animations, transitions, and video content must comply with the strict 3-flash limit.",
      "No content can exceed 3 flashes per second, regardless of size or brightness.",
    ],
    beyondCompliance: [
      "Eliminate all flashing content when possible.",
      "Use static or smoothly transitioning content instead.",
      "Provide options to disable all animations.",
      "Test with users who have photosensitive epilepsy.",
      "Consider this criterion for all content, not just Level AAA pages.",
    ],
    myths: [
      {
        myth: "Level AAA is optional, so I don't need to worry about this.",
        reality: "While Level AAA is optional, flashing content can cause serious harm. It's best practice to avoid rapid flashing regardless of compliance level.",
      },
    ],
    commonFailures: [
      {
        failure: "Content that flashes exactly 3 times per second, which may still be problematic.",
        solution: "Use slower flash rates (2 per second or less) or eliminate flashing entirely. Consider user safety over technical compliance.",
      },
    ],
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
      html: `<!-- âœ… Good: Respects prefers-reduced-motion -->
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
      css: `/* âœ… Good: Respect user motion preferences */
.animated-element {
  transition: transform 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
    animation: none;
  }
}

/* âŒ Bad: Always animates */
.always-animated {
  animation: slide 0.5s;
  /* No respect for prefers-reduced-motion */
}`,
      react: `// âœ… Good: Respects prefers-reduced-motion
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

// âœ… Good: Using CSS media query
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
        "Enable 'prefers-reduced-motion' in browser settings.",
        "Check that motion animations are disabled.",
        "Verify that essential animations still work if needed.",
        "Test page transitions, hover effects, and scroll animations.",
        "Check that reduced motion preference is respected.",
        "Test with users who have vestibular disorders if possible.",
        "Verify that disabling motion doesn't break functionality.",
      ],
      automated: [
        "Tools can check for prefers-reduced-motion CSS but cannot verify animation behavior.",
        "Use browser DevTools to test prefers-reduced-motion media query.",
      ],
    },
    complianceRequirements: [
      "Motion animations triggered by user interaction must be disableable.",
      "Animations must respect the prefers-reduced-motion media query.",
      "Essential animations (required for functionality) are exempt but should be minimal.",
      "Users must be able to disable motion without losing functionality.",
      "Motion animations must not cause vestibular disorders (dizziness, nausea).",
    ],
    beyondCompliance: [
      "Disable all non-essential animations when prefers-reduced-motion is enabled.",
      "Provide a site-wide setting to disable animations.",
      "Test with users who have vestibular disorders.",
      "Consider making reduced motion the default for better accessibility.",
      "Provide clear information about animation controls.",
    ],
    myths: [
      {
        myth: "If an animation is triggered by user interaction, it's essential.",
        reality: "Many interaction-triggered animations are decorative, not essential. Only animations required for functionality (like showing/hiding content) are truly essential.",
      },
      {
        myth: "prefers-reduced-motion only affects CSS animations.",
        reality: "prefers-reduced-motion should affect all motion, including JavaScript animations, transitions, and scroll effects.",
      },
    ],
    commonFailures: [
      {
        failure: "Animations that don't respect prefers-reduced-motion.",
        solution: "Use CSS media query @media (prefers-reduced-motion: reduce) to disable animations. Also check JavaScript animations and disable them when the preference is set.",
      },
      {
        failure: "No way to disable motion animations triggered by interaction.",
        solution: "Respect prefers-reduced-motion for all animations. Provide controls to disable motion if the media query isn't sufficient.",
      },
    ],
  },
]