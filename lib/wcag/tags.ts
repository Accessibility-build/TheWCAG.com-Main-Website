import { successCriteria } from "./index"
import type { SuccessCriterion } from "./types"

/**
 * Topic tags for grouping WCAG criteria into problem-shaped landing pages
 * (e.g. "color contrast criteria", "keyboard accessibility criteria"). The
 * tags are derived deterministically at build time by matching against a
 * stable set of regex patterns over each criterion's number, title, and
 * summary, so the index updates automatically when new criteria are added.
 */

export interface WcagTag {
  slug: string
  name: string
  description: string
  /** Lowercased regex sources, OR'd together. */
  patterns: RegExp[]
  /** Manual additions for criteria the patterns wouldn't catch. */
  extraCriterionNumbers?: string[]
  /** Manual exclusions even if patterns match. */
  excludeCriterionNumbers?: string[]
}

const tagDefinitions: WcagTag[] = [
  {
    slug: "color-contrast",
    name: "Color & Contrast",
    description:
      "Criteria covering text contrast, non-text contrast, distinguishing information by color, and visual presentation.",
    patterns: [/contrast/i, /\buse of color\b/i, /\bcolor\b.*\b(only|alone)\b/i],
  },
  {
    slug: "keyboard",
    name: "Keyboard Accessibility",
    description:
      "Criteria for full keyboard operability, focus management, focus visibility, and avoiding keyboard traps.",
    patterns: [/\bkeyboard\b/i, /\bfocus\b/i, /no keyboard trap/i, /character key/i],
  },
  {
    slug: "screen-reader",
    name: "Screen Reader & Assistive Tech",
    description:
      "Criteria that determine whether content is conveyed correctly to screen readers and other assistive technology.",
    patterns: [
      /\bname,? role,? value\b/i,
      /\bnon-text content\b/i,
      /info(rmation)? and relationships/i,
      /\bstatus message/i,
      /\bparsing\b/i,
      /\blabels? or instructions\b/i,
    ],
  },
  {
    slug: "forms",
    name: "Forms & Inputs",
    description:
      "Criteria for accessible form labelling, validation, error identification, error suggestions, and error prevention.",
    patterns: [
      /\binput purpose\b/i,
      /\berror identification\b/i,
      /\berror suggestion\b/i,
      /\berror prevention\b/i,
      /\blabels? or instructions\b/i,
      /\bredundant entry\b/i,
      /\bauthenticat/i,
    ],
  },
  {
    slug: "media",
    name: "Audio, Video & Media",
    description:
      "Captions, audio descriptions, transcripts, sign language, and other time-based-media criteria.",
    patterns: [
      /\bcaptions?\b/i,
      /\baudio description\b/i,
      /\bsign language\b/i,
      /\baudio-?only\b/i,
      /\bvideo-?only\b/i,
      /\baudio control\b/i,
      /\bmedia alternative\b/i,
      /\baudio contrast\b/i,
    ],
  },
  {
    slug: "mobile-touch",
    name: "Mobile & Touch",
    description:
      "Criteria for touch-target size, dragging movements, pointer gestures, motion actuation, and reflow.",
    patterns: [
      /\btarget size\b/i,
      /\bdragging movement/i,
      /\bpointer gestures\b/i,
      /\bpointer cancellation\b/i,
      /\bmotion actuation\b/i,
      /\borientation\b/i,
      /\breflow\b/i,
    ],
  },
  {
    slug: "cognitive",
    name: "Cognitive & Reading",
    description:
      "Criteria addressing readability, language identification, consistent navigation, predictable behavior, and help.",
    patterns: [
      /\breading level\b/i,
      /\bunusual words\b/i,
      /\babbreviation/i,
      /\blanguage of (the )?page\b/i,
      /\blanguage of parts\b/i,
      /\bpronunciation\b/i,
      /\bconsistent (navigation|identification|help)\b/i,
      /\bon focus\b/i,
      /\bon input\b/i,
      /\bchange of context/i,
    ],
  },
  {
    slug: "timing-motion",
    name: "Timing & Motion",
    description:
      "Time-limit, pause/stop/hide, animations triggered by interaction, three-flash, and re-authentication criteria.",
    patterns: [
      /\btiming adjustable\b/i,
      /\binterruptions\b/i,
      /\bre-?authentic/i,
      /\btimeouts?\b/i,
      /\bpause,? stop,? hide\b/i,
      /\bthree flashes\b/i,
      /\banimation from interactions\b/i,
    ],
  },
  {
    slug: "navigation",
    name: "Navigation & Wayfinding",
    description:
      "Skip blocks, page titles, headings & labels, link purpose, multiple ways, and breadcrumbs.",
    patterns: [
      /\bbypass blocks\b/i,
      /\bpage titled?\b/i,
      /\bfocus order\b/i,
      /\blink purpose\b/i,
      /\bmultiple ways\b/i,
      /\bheadings? and labels\b/i,
      /\blocation\b/i,
      /\bsection headings\b/i,
    ],
  },
  {
    slug: "images",
    name: "Images, Icons & Graphics",
    description:
      "Criteria for non-text content, alt text, decorative images, complex images, and meaningful graphics.",
    patterns: [/\bnon-text content\b/i, /\bimages? of text\b/i, /\bnon-text contrast\b/i],
  },
]

const ALL_CRITERIA: SuccessCriterion[] = successCriteria

function criterionMatches(c: SuccessCriterion, tag: WcagTag): boolean {
  if (tag.excludeCriterionNumbers?.includes(c.number)) return false
  if (tag.extraCriterionNumbers?.includes(c.number)) return true
  const haystack = `${c.number} ${c.title} ${c.summary}`
  return tag.patterns.some((re) => re.test(haystack))
}

export function getWcagTags(): WcagTag[] {
  return tagDefinitions
}

export function getWcagTag(slug: string): WcagTag | undefined {
  return tagDefinitions.find((t) => t.slug === slug)
}

export function criteriaForTag(slug: string): SuccessCriterion[] {
  const tag = getWcagTag(slug)
  if (!tag) return []
  return ALL_CRITERIA.filter((c) => criterionMatches(c, tag)).sort((a, b) =>
    a.number.localeCompare(b.number, undefined, { numeric: true })
  )
}

export function tagsForCriterion(c: SuccessCriterion): WcagTag[] {
  return tagDefinitions.filter((t) => criterionMatches(c, t))
}
