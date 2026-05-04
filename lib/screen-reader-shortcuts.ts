/**
 * Reference shortcut tables for the most common screen readers.
 * Curated from each vendor's official documentation. Modifier names follow
 * the readers' conventions (NVDA key = Insert by default, JAWS key = Insert,
 * VoiceOver = Control + Option, abbreviated as VO).
 */

export interface ShortcutGroup {
  name: string
  shortcuts: Array<{
    keys: string
    action: string
  }>
}

export interface ScreenReader {
  slug: string
  name: string
  platform: string
  description: string
  modifierNote?: string
  groups: ShortcutGroup[]
  resources: Array<{ label: string; url: string }>
}

export const SCREEN_READERS: ScreenReader[] = [
  {
    slug: "nvda",
    name: "NVDA",
    platform: "Windows · free, open source",
    description:
      "NVDA (NonVisual Desktop Access) is a free Windows screen reader from NV Access. Default modifier (the NVDA key) is Insert; users can switch it to CapsLock in NVDA preferences.",
    modifierNote: "NVDA = Insert (or CapsLock if remapped)",
    groups: [
      {
        name: "General",
        shortcuts: [
          { keys: "NVDA + N", action: "Open the NVDA menu" },
          { keys: "NVDA + Q", action: "Quit NVDA" },
          { keys: "NVDA + Ctrl + S", action: "Cycle synthesizer / speech mode" },
          { keys: "NVDA + S", action: "Cycle speech mode (talk / beeps / off)" },
          { keys: "NVDA + 1", action: "Toggle Input Help (announces what each key does)" },
          { keys: "NVDA + F1", action: "Show NVDA Help" },
        ],
      },
      {
        name: "Reading",
        shortcuts: [
          { keys: "NVDA + Down Arrow", action: "Read from current location to end" },
          { keys: "NVDA + Up Arrow", action: "Read current line" },
          { keys: "NVDA + Left/Right Arrow", action: "Read previous / next word" },
          { keys: "NVDA + Tab", action: "Read currently focused element" },
          { keys: "NVDA + T", action: "Read the title bar" },
          { keys: "NVDA + B", action: "Read the entire window" },
          { keys: "Ctrl", action: "Stop speech" },
        ],
      },
      {
        name: "Browse mode (web pages)",
        shortcuts: [
          { keys: "H / Shift + H", action: "Next / previous heading" },
          { keys: "1 – 6", action: "Next heading at level 1–6" },
          { keys: "K / Shift + K", action: "Next / previous link" },
          { keys: "F / Shift + F", action: "Next / previous form field" },
          { keys: "T / Shift + T", action: "Next / previous table" },
          { keys: "L / Shift + L", action: "Next / previous list" },
          { keys: "I / Shift + I", action: "Next / previous list item" },
          { keys: "B / Shift + B", action: "Next / previous button" },
          { keys: "G / Shift + G", action: "Next / previous graphic" },
          { keys: "D / Shift + D", action: "Next / previous landmark" },
          { keys: "R / Shift + R", action: "Next / previous radio button" },
          { keys: "X / Shift + X", action: "Next / previous checkbox" },
          { keys: "C / Shift + C", action: "Next / previous combo box" },
          { keys: "NVDA + F7", action: "Open the Elements List (links / headings / landmarks / buttons)" },
        ],
      },
      {
        name: "Forms & focus",
        shortcuts: [
          { keys: "Enter / Space", action: "Activate the focused control" },
          { keys: "NVDA + Space", action: "Toggle focus / browse mode" },
          { keys: "NVDA + F5", action: "Reload current document" },
          { keys: "Tab / Shift + Tab", action: "Move focus to next / previous control" },
        ],
      },
    ],
    resources: [
      { label: "NVDA User Guide", url: "https://www.nvaccess.org/files/nvda/documentation/userGuide.html" },
    ],
  },
  {
    slug: "jaws",
    name: "JAWS",
    platform: "Windows · commercial (Freedom Scientific)",
    description:
      "JAWS (Job Access With Speech) is the most widely deployed enterprise screen reader on Windows. Default modifier (the JAWS key) is Insert.",
    modifierNote: "JAWS = Insert (Desktop layout). Laptop layout uses CapsLock.",
    groups: [
      {
        name: "General",
        shortcuts: [
          { keys: "JAWS + F1", action: "Open JAWS context-sensitive help" },
          { keys: "JAWS + J", action: "Bring focus to the JAWS application window" },
          { keys: "JAWS + F4", action: "Close JAWS" },
          { keys: "JAWS + Z", action: "Toggle echo (off / words / characters / both)" },
          { keys: "Ctrl", action: "Stop speech" },
        ],
      },
      {
        name: "Reading",
        shortcuts: [
          { keys: "JAWS + Down Arrow (Insert + Down)", action: "Say all (read continuously)" },
          { keys: "JAWS + Up Arrow", action: "Read current line" },
          { keys: "JAWS + Left / Right Arrow", action: "Previous / next word" },
          { keys: "JAWS + Tab", action: "Speak focused control" },
          { keys: "JAWS + T", action: "Read the title bar" },
          { keys: "JAWS + B", action: "Read the entire window" },
        ],
      },
      {
        name: "Web navigation (Virtual PC Cursor)",
        shortcuts: [
          { keys: "H / Shift + H", action: "Next / previous heading" },
          { keys: "1 – 6", action: "Next heading at level 1–6" },
          { keys: "Insert + F6", action: "List of headings" },
          { keys: "Insert + F7", action: "List of links" },
          { keys: "Insert + F5", action: "List of form fields" },
          { keys: "Insert + Ctrl + R", action: "List of regions / landmarks" },
          { keys: "F / Shift + F", action: "Next / previous form field" },
          { keys: "B / Shift + B", action: "Next / previous button" },
          { keys: "T / Shift + T", action: "Next / previous table" },
          { keys: "L / Shift + L", action: "Next / previous list" },
          { keys: "G / Shift + G", action: "Next / previous graphic" },
          { keys: "R / Shift + R", action: "Next / previous region" },
          { keys: "Q / Shift + Q", action: "Next / previous main region" },
          { keys: "Tab", action: "Next focusable element" },
        ],
      },
    ],
    resources: [
      { label: "Freedom Scientific — JAWS Keystrokes Reference", url: "https://support.freedomscientific.com/Downloads/JAWS" },
    ],
  },
  {
    slug: "voiceover-mac",
    name: "VoiceOver (macOS)",
    platform: "macOS · built-in",
    description:
      "VoiceOver is the screen reader built into every Mac. The VoiceOver modifier is Control + Option (abbreviated VO). You can enable a single key (CapsLock) as the VO modifier in VoiceOver Utility.",
    modifierNote: "VO = Control + Option",
    groups: [
      {
        name: "Starting & basic control",
        shortcuts: [
          { keys: "Cmd + F5", action: "Toggle VoiceOver on / off" },
          { keys: "VO + ;", action: "Lock the VO keys (so you don't have to hold them)" },
          { keys: "VO + F1", action: "Open the VoiceOver menu" },
          { keys: "VO + H, H", action: "Open VoiceOver Help" },
          { keys: "Control", action: "Pause / resume speech" },
        ],
      },
      {
        name: "Reading & moving the cursor",
        shortcuts: [
          { keys: "VO + A", action: "Read everything from VO cursor to the end" },
          { keys: "VO + L", action: "Read current line" },
          { keys: "VO + W", action: "Read current word (press again to spell it)" },
          { keys: "VO + Right / Left Arrow", action: "Move VO cursor right / left" },
          { keys: "VO + Down / Up Arrow", action: "Interact with item below / above" },
          { keys: "VO + Shift + Down", action: "Interact with the current item (enter group)" },
          { keys: "VO + Shift + Up", action: "Stop interacting (exit group)" },
        ],
      },
      {
        name: "Web navigation",
        shortcuts: [
          { keys: "VO + U", action: "Open the Web Rotor (headings, links, form controls, landmarks…)" },
          { keys: "VO + Cmd + H", action: "Next heading" },
          { keys: "VO + Cmd + Shift + H", action: "Previous heading" },
          { keys: "VO + Cmd + L", action: "Next link" },
          { keys: "VO + Cmd + J", action: "Next form control" },
          { keys: "VO + Cmd + G", action: "Next graphic / image" },
          { keys: "VO + Cmd + T", action: "Next table" },
          { keys: "VO + Cmd + X", action: "Next list" },
        ],
      },
      {
        name: "Windows & focus",
        shortcuts: [
          { keys: "VO + F2", action: "Speak the focused window's title" },
          { keys: "VO + F2, F2", action: "Window chooser" },
          { keys: "VO + F1, F1", action: "Application chooser" },
          { keys: "VO + M", action: "Move VO cursor to the menu bar" },
          { keys: "VO + Space", action: "Activate the item under the VO cursor" },
        ],
      },
    ],
    resources: [
      { label: "Apple — VoiceOver User Guide", url: "https://support.apple.com/guide/voiceover/welcome/mac" },
    ],
  },
  {
    slug: "voiceover-ios",
    name: "VoiceOver (iOS / iPadOS)",
    platform: "iPhone & iPad · built-in",
    description:
      "VoiceOver on iOS uses touch gestures rather than a hardware keyboard. The Rotor lets you cycle navigation modes (headings, links, form controls, etc.) by twisting two fingers on the screen.",
    groups: [
      {
        name: "Reading by touch",
        shortcuts: [
          { keys: "Single tap", action: "Speak the touched item (do not activate)" },
          { keys: "Double tap (anywhere)", action: "Activate the selected item" },
          { keys: "Two-finger tap", action: "Pause / resume speech" },
          { keys: "Two-finger swipe up", action: "Read everything from the top of the screen" },
          { keys: "Two-finger swipe down", action: "Read everything from current position" },
          { keys: "Three-finger swipe up / down", action: "Scroll the screen" },
        ],
      },
      {
        name: "Moving focus",
        shortcuts: [
          { keys: "Swipe right / left (one finger)", action: "Next / previous element" },
          { keys: "Two-finger Z (scrub)", action: "Dismiss / go back" },
          { keys: "Three-finger triple-tap", action: "Toggle Screen Curtain (hide screen visually)" },
        ],
      },
      {
        name: "The Rotor",
        shortcuts: [
          { keys: "Two fingers, twist on screen", action: "Open the Rotor and pick navigation mode" },
          { keys: "Swipe up / down (one finger)", action: "Move by current Rotor unit (e.g. heading)" },
          { keys: "Settings → VoiceOver → Rotor", action: "Customize available Rotor items" },
        ],
      },
    ],
    resources: [
      { label: "Apple — VoiceOver gestures on iPhone", url: "https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios" },
    ],
  },
  {
    slug: "talkback",
    name: "TalkBack",
    platform: "Android · built-in",
    description:
      "TalkBack is the Google screen reader built into Android. It supports an explore-by-touch model and a Reading Control similar to VoiceOver's Rotor.",
    groups: [
      {
        name: "Reading by touch",
        shortcuts: [
          { keys: "Single tap", action: "Read the touched item (do not activate)" },
          { keys: "Double tap", action: "Activate the focused item" },
          { keys: "Drag one finger", action: "Explore by touch — read items as you go" },
          { keys: "Two-finger tap", action: "Pause / resume speech" },
        ],
      },
      {
        name: "Moving focus",
        shortcuts: [
          { keys: "Swipe right / left", action: "Next / previous item" },
          { keys: "Swipe up + right", action: "Open TalkBack menu" },
          { keys: "Swipe down + left (back)", action: "System back" },
          { keys: "Swipe down + right (home)", action: "Go home" },
          { keys: "Two-finger swipe", action: "Scroll" },
        ],
      },
      {
        name: "Reading Control",
        shortcuts: [
          { keys: "Swipe up / down (one finger)", action: "Move by current Reading Control unit" },
          { keys: "Swipe right + up / left + up", action: "Cycle Reading Control (headings, links…)" },
          { keys: "Settings → Accessibility → TalkBack → Customize", action: "Configure Reading Control items" },
        ],
      },
    ],
    resources: [
      { label: "Google — TalkBack gestures", url: "https://support.google.com/accessibility/android/answer/6151827" },
    ],
  },
]
