import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  XCircle,
  Code,
  Lightbulb,
  Eye,
  Keyboard,
  FileText,
  Image,
  Palette,
  MousePointer,
  Volume2,
  Shield,
  ArrowRight,
  BookOpen,
  Target,
  Search,
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Best Practices 2026 - Essential WCAG 2.2 Implementation Guide | TheWCAG",
  description:
    "Master web accessibility with proven best practices. Learn do's and don'ts for semantic HTML, ARIA, forms, images, navigation, multimedia, and WCAG 2.2 compliance across all components. Free code examples included.",
  keywords: [
    "accessibility best practices",
    "WCAG 2.2 best practices",
    "web accessibility practices",
    "accessible design patterns",
    "accessibility do's and don'ts",
    "WCAG implementation",
    "accessible code examples",
    "a11y best practices",
  ],
  openGraph: {
    title: "Accessibility Best Practices 2025 - Essential WCAG 2.2 Implementation Guide",
    description:
      "Complete guide to accessibility best practices with practical WCAG 2.2 examples. Learn what works and what to avoid for semantic HTML, ARIA, forms, and more.",
    url: "https://thewcag.com/best-practices",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Best Practices 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Best Practices 2025 - Essential WCAG 2.2 Implementation Guide",
    description: "Complete guide to accessibility best practices with practical WCAG 2.2 examples. Learn what works and what to avoid.",
    images: ["https://thewcag.com/Logo.png"],
  },
  alternates: {
    canonical: "https://thewcag.com/best-practices",
  },
}

export default function BestPracticesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Web Accessibility Best Practices - Complete Guide 2026",
    description:
      "Comprehensive guide to web accessibility best practices with detailed scenarios, code examples, and strategies that go beyond compliance to create exceptional user experiences.",
    url: "https://thewcag.com/best-practices",
    author: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thewcag.com/best-practices",
    },
    articleSection: "Web Accessibility",
    keywords: [
      "accessibility best practices",
      "WCAG 2.2",
      "web accessibility",
      "accessible design",
      "inclusive design",
      "accessibility guidelines",
    ],
    about: {
      "@type": "Thing",
      name: "Web Content Accessibility Guidelines",
      alternateName: "WCAG 2.2",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Best Practices",
          item: "https://thewcag.com/best-practices",
        },
      ],
    },
  }

  const practices = [
    {
      category: "Images and Media",
      icon: Image,
      slug: "images-and-media",
      articles: [
        {
          title: "Writing Meaningful Alt Text: Beyond the Basics",
          scenario: "You're building an e-commerce product page. The page has product images, decorative banners, infographics, and charts. Each image serves a different purpose and requires a different approach to alt text.",
          compliance: {
            title: "Meeting WCAG Compliance",
            description: "WCAG 2.2 requires that all non-decorative images have alternative text that serves the same purpose as the image. Decorative images should have empty alt attributes.",
            example: `<img src="product.jpg" alt="Blue cotton t-shirt with round neck" />`,
            explanation: "This meets compliance because it provides a text alternative that describes the image content. Screen readers will announce 'Blue cotton t-shirt with round neck' when encountering this image.",
          },
          beyond: {
            title: "Going Beyond Compliance",
            description: "While compliance ensures basic accessibility, exceptional alt text considers context, user intent, and provides actionable information that enhances the user experience.",
            strategies: [
              {
                title: "Context-Aware Descriptions",
                description: "Consider where the image appears and what information the user needs at that moment. A product image in a listing needs different alt text than the same image on a detail page.",
                example: `<!-- In product listing -->
<img src="product.jpg" alt="Blue cotton t-shirt - $29.99" />

<!-- On product detail page -->
<img src="product.jpg" alt="Blue cotton t-shirt, front view showing round neck and short sleeves" />`,
              },
              {
                title: "Functional Descriptions",
                description: "For interactive images (like buttons or links), describe the function, not just the appearance.",
                example: `<!-- Good: Describes function -->
<a href="/cart">
  <img src="cart-icon.svg" alt="View shopping cart (3 items)" />
</a>

<!-- Better: More context -->
<button aria-label="View shopping cart containing 3 items">
  <img src="cart-icon.svg" alt="" aria-hidden="true" />
  <span class="sr-only">3 items</span>
</button>`,
              },
              {
                title: "Complex Content Handling",
                description: "For charts, graphs, and infographics, provide a brief summary in alt text and link to a detailed description or data table.",
                example: `<figure>
  <img 
    src="sales-chart.png" 
    alt="Sales increased 25% from Q1 to Q2, with Q2 reaching $2.5M" 
  />
  <figcaption>
    Quarterly sales comparison. 
    <a href="#sales-data-table">View detailed data table</a>
  </figcaption>
</figure>`,
              },
            ],
          },
          realWorld: {
            title: "Real-World Scenario",
            description: "A news website displays article images. The compliance approach might be:",
            complianceExample: `<img src="breaking-news.jpg" alt="News photo" />`,
            betterExample: `<img 
  src="breaking-news.jpg" 
  alt="Protesters gather outside city hall holding signs demanding climate action" 
/>`,
            impact: "The better example provides context that helps users understand the article even if they can't see the image, making the content more accessible and informative.",
          },
          link: "/criteria/1.1.1",
        },
        {
          title: "Video and Audio Accessibility: Creating Inclusive Media Experiences",
          scenario: "Your organization produces training videos and podcasts. You need to ensure these are accessible to users who are deaf, hard of hearing, blind, or have cognitive disabilities.",
          compliance: {
            title: "Meeting WCAG Compliance",
            description: "WCAG requires captions for all pre-recorded video content and transcripts for audio-only content. Live video must have captions when possible.",
            example: `<video controls>
  <source src="training-video.mp4" type="video/mp4" />
  <track 
    kind="captions" 
    src="captions.vtt" 
    srclang="en" 
    label="English" 
    default 
  />
</video>`,
            explanation: "This meets Level A compliance by providing synchronized captions. The captions must be accurate, synchronized, and identify speakers.",
          },
          beyond: {
            title: "Going Beyond Compliance",
            description: "Exceptional media accessibility includes multiple caption tracks, audio descriptions, interactive transcripts, and user controls for customization.",
            strategies: [
              {
                title: "Multiple Caption Tracks",
                description: "Provide captions in multiple languages and offer different caption styles (standard, descriptive, simplified).",
                example: `<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" default />
  <track kind="captions" src="captions-es.vtt" srclang="es" label="Español" />
  <track kind="captions" src="captions-descriptive.vtt" srclang="en" label="English (Descriptive)" />
</video>`,
              },
              {
                title: "Audio Descriptions",
                description: "For Level AA compliance, provide audio descriptions for video content. Going beyond, offer extended audio descriptions that pause the video when needed.",
                example: `<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  <track kind="descriptions" src="audio-desc.vtt" srclang="en" label="Audio Description" />
</video>`,
              },
              {
                title: "Interactive Transcripts",
                description: "Provide searchable, interactive transcripts that allow users to jump to specific parts of the video by clicking transcript text.",
                example: `<div class="video-container">
  <video id="training-video" controls>
    <source src="video.mp4" type="video/mp4" />
    <track kind="captions" src="captions.vtt" srclang="en" />
  </video>
  <div class="transcript" role="region" aria-label="Video transcript">
    <h3>Transcript</h3>
    <div id="transcript-content">
      <p data-time="0:00" onclick="seekTo(0)">
        Welcome to our training module...
      </p>
      <p data-time="0:15" onclick="seekTo(15)">
        Today we'll cover three main topics...
      </p>
    </div>
  </div>
</div>`,
              },
            ],
          },
          realWorld: {
            title: "Real-World Scenario",
            description: "A university provides online course lectures. The compliance approach includes basic captions:",
            complianceExample: `<video controls>
  <source src="lecture.mp4" type="video/mp4" />
  <track kind="captions" src="lecture-captions.vtt" srclang="en" />
</video>`,
            betterExample: `<video controls>
  <source src="lecture.mp4" type="video/mp4" />
  <track kind="captions" src="lecture-captions.vtt" srclang="en" label="English" default />
  <track kind="descriptions" src="lecture-audio-desc.vtt" srclang="en" />
  <track kind="chapters" src="lecture-chapters.vtt" srclang="en" />
</video>
<div class="media-controls">
  <button onclick="toggleAudioDesc()">Toggle Audio Description</button>
  <button onclick="showTranscript()">View Transcript</button>
  <button onclick="adjustPlaybackSpeed()">Playback Speed</button>
</div>`,
            impact: "The enhanced approach provides multiple ways to access content, benefits users with different needs, and improves the learning experience for everyone, not just those with disabilities.",
          },
          link: "/criteria/1.2.1",
        },
      ],
    },
    {
      category: "Color and Contrast",
      icon: Palette,
      slug: "color-and-contrast",
      articles: [
        {
          title: "Color Contrast: Building Accessible Color Systems",
          scenario: "You're designing a dashboard with status indicators, charts, and data visualizations. You need to ensure information is accessible to users with color vision deficiencies and low vision.",
          compliance: {
            title: "Meeting WCAG Compliance",
            description: "WCAG 2.2 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). UI components and graphical objects need 3:1 contrast.",
            example: `/* Compliant: 4.5:1 contrast ratio */
.error-message {
  color: #d32f2f; /* Red on white background */
  background: #ffffff;
}

/* Compliant: 3:1 for large text */
.heading {
  color: #666666; /* Gray on white - OK for large text */
  background: #ffffff;
  font-size: 24px;
}`,
            explanation: "These examples meet WCAG AA standards. The error message has sufficient contrast for readability, and the large heading meets the lower threshold for large text.",
          },
          beyond: {
            title: "Going Beyond Compliance",
            description: "Exceptional color systems consider multiple factors: not just contrast ratios, but also color independence, context, and user customization options.",
            strategies: [
              {
                title: "Color-Independent Information",
                description: "Never rely solely on color. Use icons, patterns, text labels, or shapes in addition to color to convey information.",
                example: `<!-- Compliance: Uses color + text -->
<span class="status status-success">✓ Active</span>

<!-- Beyond: Multiple indicators -->
<span class="status status-success" aria-label="Status: Active">
  <span class="icon" aria-hidden="true">✓</span>
  <span class="label">Active</span>
  <span class="indicator" aria-hidden="true"></span>
</span>

<style>
.status-success {
  color: #2e7d32; /* Green text */
  border-left: 4px solid #2e7d32; /* Green border */
}
.status-success .indicator {
  background: #2e7d32;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
</style>`,
              },
              {
                title: "Enhanced Contrast for Readability",
                description: "While 4.5:1 meets compliance, 7:1 provides better readability, especially for users with low vision or in challenging lighting conditions.",
                example: `/* Compliance: 4.5:1 */
.body-text {
  color: #666666;
  background: #ffffff;
}

/* Enhanced: 7:1 for better readability */
.body-text-enhanced {
  color: #333333; /* Darker gray */
  background: #ffffff;
}

/* Best: Near maximum contrast */
.body-text-optimal {
  color: #000000;
  background: #ffffff;
}`,
              },
              {
                title: "User Customization",
                description: "Provide options for users to adjust contrast, choose color themes, or customize the interface to their preferences.",
                example: `<div class="accessibility-controls">
  <label>
    <input type="checkbox" id="high-contrast" />
    High Contrast Mode
  </label>
  <label>
    Color Theme:
    <select id="color-theme">
      <option value="default">Default</option>
      <option value="dark">Dark Mode</option>
      <option value="high-contrast">High Contrast</option>
      <option value="sepia">Sepia</option>
    </select>
  </label>
</div>

<script>
document.getElementById('high-contrast').addEventListener('change', (e) => {
  document.body.classList.toggle('high-contrast', e.target.checked);
});

document.getElementById('color-theme').addEventListener('change', (e) => {
  document.body.className = 'theme-' + e.target.value;
});
</script>`,
              },
            ],
          },
          realWorld: {
            title: "Real-World Scenario",
            description: "A financial dashboard shows account status using color coding. The compliance approach:",
            complianceExample: `<div class="account-status">
  <span class="status-active">Active</span>
  <span class="status-suspended" style="color: #ff9800;">Suspended</span>
  <span class="status-closed" style="color: #f44336;">Closed</span>
</div>`,
            betterExample: `<div class="account-status">
  <span class="status status-active">
    <span class="icon" aria-hidden="true">●</span>
    <span class="label">Active</span>
  </span>
  <span class="status status-suspended">
    <span class="icon" aria-hidden="true">⚠</span>
    <span class="label">Suspended</span>
  </span>
  <span class="status status-closed">
    <span class="icon" aria-hidden="true">✕</span>
    <span class="label">Closed</span>
  </span>
</div>

<style>
.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.status-active { color: #2e7d32; border-left: 3px solid #2e7d32; }
.status-suspended { color: #f57c00; border-left: 3px solid #f57c00; }
.status-closed { color: #d32f2f; border-left: 3px solid #d32f2f; }
</style>`,
            impact: "The enhanced approach ensures users can understand status regardless of their ability to perceive color, reduces errors, and provides a more professional, inclusive experience.",
          },
          link: "/criteria/1.4.3",
        },
      ],
    },
    {
      category: "Keyboard Navigation",
      icon: Keyboard,
      slug: "keyboard-navigation",
      articles: [
        {
          title: "Keyboard Accessibility: Empowering All Users",
          scenario: "You're building a complex web application with modals, dropdowns, data tables, and custom interactive components. Users need to navigate everything using only a keyboard.",
          compliance: {
            title: "Meeting WCAG Compliance",
            description: "WCAG requires that all functionality be operable through a keyboard interface without requiring specific timings for individual keystrokes. Focus must be visible and logical.",
            example: `/* Compliant: Visible focus indicator */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Compliant: Keyboard accessible */
<button onclick="submitForm()">Submit</button>
<a href="/next-page">Next</a>`,
            explanation: "These examples meet compliance by providing visible focus indicators and using semantic HTML elements that are keyboard accessible by default.",
          },
          beyond: {
            title: "Going Beyond Compliance",
            description: "Exceptional keyboard navigation includes custom keyboard shortcuts, focus management, skip links, and thoughtful interaction patterns that enhance efficiency.",
            strategies: [
              {
                title: "Custom Keyboard Shortcuts",
                description: "Provide keyboard shortcuts for common actions, but ensure they don't conflict with browser or assistive technology shortcuts.",
                example: `<div class="app-container" 
     onKeyDown={handleKeyboardShortcuts}
     tabIndex={-1}>
  {/* Main content */}
</div>

function handleKeyboardShortcuts(e) {
  // Alt + S: Save
  if (e.altKey && e.key === 's') {
    e.preventDefault();
    saveDocument();
  }
  // Alt + N: New
  if (e.altKey && e.key === 'n') {
    e.preventDefault();
    createNew();
  }
  // Escape: Close modals
  if (e.key === 'Escape') {
    closeAllModals();
  }
}

// Show shortcuts help
<button onClick={showShortcutsHelp}>
  Keyboard Shortcuts (Alt + ?)
</button>`,
              },
              {
                title: "Advanced Focus Management",
                description: "Implement intelligent focus management for modals, dynamic content, and single-page applications.",
                example: `// Modal focus management
function openModal() {
  const modal = document.getElementById('modal');
  const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const lastFocusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const lastElement = lastFocusable[lastFocusable.length - 1];
  
  // Store previous focus
  previousFocus = document.activeElement;
  
  // Focus first element
  firstFocusable.focus();
  
  // Trap focus within modal
  lastElement.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      firstFocusable.focus();
    }
  });
  
  firstFocusable.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      lastElement.focus();
    }
  });
}

function closeModal() {
  // Restore focus to previous element
  if (previousFocus) {
    previousFocus.focus();
  }
}`,
              },
              {
                title: "Skip Links and Landmarks",
                description: "Provide multiple skip links for different sections and use ARIA landmarks to help users navigate efficiently.",
                example: `<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<a href="#navigation" class="skip-link">
  Skip to navigation
</a>
<a href="#search" class="skip-link">
  Skip to search
</a>

<nav id="navigation" role="navigation" aria-label="Main navigation">
  {/* Navigation content */}
</nav>

<main id="main-content" role="main">
  {/* Main content */}
</main>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
</style>`,
              },
            ],
          },
          realWorld: {
            title: "Real-World Scenario",
            description: "A data table with sorting, filtering, and pagination. The compliance approach:",
            complianceExample: `<table>
  <thead>
    <tr>
      <th><button onclick="sort('name')">Name</button></th>
      <th><button onclick="sort('date')">Date</button></th>
    </tr>
  </thead>
  <tbody>
    {/* Rows */}
  </tbody>
</table>`,
            betterExample: `<table role="grid" aria-label="Customer data table">
  <thead>
    <tr>
      <th>
        <button 
          onclick="sort('name')"
          aria-sort={sortColumn === 'name' ? sortDirection : 'none'}
          aria-label="Sort by name"
        >
          Name
          {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </th>
      <th>
        <button 
          onclick="sort('date')"
          aria-sort={sortColumn === 'date' ? sortDirection : 'none'}
          aria-label="Sort by date"
        >
          Date
          {sortColumn === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    {/* Rows with proper ARIA */}
  </tbody>
</table>

<div class="table-controls" role="toolbar" aria-label="Table controls">
  <button onclick="firstPage()" aria-label="First page">⏮</button>
  <button onclick="prevPage()" aria-label="Previous page">⏪</button>
  <span aria-live="polite">Page 1 of 10</span>
  <button onclick="nextPage()" aria-label="Next page">⏩</button>
  <button onclick="lastPage()" aria-label="Last page">⏭</button>
</div>`,
            impact: "The enhanced approach provides clear feedback about table state, makes navigation more efficient, and ensures users understand the current context and available actions.",
          },
          link: "/criteria/2.1.1",
        },
      ],
    },
    {
      category: "Forms",
      icon: FileText,
      slug: "forms",
      articles: [
        {
          title: "Accessible Forms: From Compliance to Excellence",
          scenario: "You're creating a multi-step registration form with validation, error handling, and conditional fields. The form needs to be accessible to users with various disabilities and assistive technologies.",
          compliance: {
            title: "Meeting WCAG Compliance",
            description: "WCAG requires that form inputs have associated labels, error messages are clearly identified and described, and required fields are marked both visually and programmatically.",
            example: `<label for="email">Email</label>
<input 
  type="email" 
  id="email" 
  name="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert" aria-live="polite">
  Please enter a valid email address
</span>`,
            explanation: "This meets compliance by providing a visible label, marking the field as required, and associating error messages with the input using aria-describedby.",
          },
          beyond: {
            title: "Going Beyond Compliance",
            description: "Exceptional forms provide real-time validation feedback, helpful suggestions, progress indicators, and graceful error recovery that enhances the user experience.",
            strategies: [
              {
                title: "Progressive Enhancement",
                description: "Provide helpful hints, examples, and suggestions that guide users before they make errors.",
                example: `<div class="form-field">
  <label for="phone">
    Phone Number <span aria-label="required">*</span>
  </label>
  <input 
    type="tel" 
    id="phone"
    aria-required="true"
    aria-describedby="phone-hint phone-error"
    placeholder="(555) 123-4567"
  />
  <p id="phone-hint" class="hint">
    Include area code. Format: (XXX) XXX-XXXX
  </p>
  <p id="phone-error" class="error" role="alert" aria-live="polite" hidden>
    Please enter a valid phone number
  </p>
</div>`,
              },
              {
                title: "Real-Time Validation with Context",
                description: "Provide immediate, contextual feedback as users type, not just on submit.",
                example: `<input 
  type="password" 
  id="password"
  aria-required="true"
  aria-describedby="password-requirements password-strength password-error"
  onInput={validatePassword}
/>

<div id="password-requirements" class="requirements">
  <p>Password must include:</p>
  <ul>
    <li id="req-length" aria-live="polite">
      <span class={hasLength ? 'met' : ''}>✓</span>
      At least 8 characters
    </li>
    <li id="req-upper" aria-live="polite">
      <span class={hasUpper ? 'met' : ''}>✓</span>
      One uppercase letter
    </li>
    <li id="req-number" aria-live="polite">
      <span class={hasNumber ? 'met' : ''}>✓</span>
      One number
    </li>
  </ul>
</div>

<div id="password-strength" aria-live="polite">
  Strength: <span id="strength-text">{strength}</span>
</div>`,
              },
              {
                title: "Error Recovery and Suggestions",
                description: "When errors occur, provide specific, actionable guidance and help users recover easily.",
                example: `<div class="form-field">
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email"
    aria-invalid={hasError}
    aria-describedby="email-error email-suggestion"
  />
  <div id="email-error" role="alert" aria-live="polite" hidden>
    <span class="error-icon" aria-hidden="true">⚠</span>
    <span class="error-message">Invalid email format</span>
  </div>
  <div id="email-suggestion" class="suggestion" hidden>
    <p>Did you mean:</p>
    <button 
      type="button"
      onclick="applySuggestion('user@example.com')"
      class="suggestion-link"
    >
      user@example.com
    </button>
  </div>
</div>`,
              },
            ],
          },
          realWorld: {
            title: "Real-World Scenario",
            description: "A checkout form with address validation. The compliance approach:",
            complianceExample: `<label for="zip">ZIP Code</label>
<input type="text" id="zip" aria-required="true" />
<span id="zip-error" role="alert" hidden>
  ZIP code is required
</span>`,
            betterExample: `<div class="form-field">
  <label for="zip">
    ZIP Code <span aria-label="required">*</span>
  </label>
  <input 
    type="text" 
    id="zip"
    pattern="[0-9]{5}(-[0-9]{4})?"
    aria-required="true"
    aria-describedby="zip-hint zip-error zip-suggestion"
    aria-invalid={hasError}
    onBlur={validateZip}
  />
  <p id="zip-hint" class="hint">
    Enter 5-digit ZIP code (e.g., 12345) or ZIP+4 (e.g., 12345-6789)
  </p>
  <div id="zip-error" role="alert" aria-live="polite" hidden>
    <span class="error-icon" aria-hidden="true">⚠</span>
    Invalid ZIP code format
  </div>
  <div id="zip-suggestion" class="suggestion" hidden>
    <p>We found a matching address:</p>
    <button 
      type="button"
      onclick="fillAddress(suggestedAddress)"
      class="suggestion-button"
    >
      Use suggested address
    </button>
  </div>
</div>`,
            impact: "The enhanced approach reduces user frustration, prevents errors before they happen, provides helpful context, and creates a smoother, more professional experience that builds user confidence.",
          },
          link: "/criteria/3.3.1",
        },
      ],
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the most important accessibility best practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key best practices include: using semantic HTML, providing proper labels for all form inputs, ensuring keyboard accessibility, maintaining proper heading hierarchy, providing alt text for images, ensuring sufficient color contrast, and testing with assistive technologies."
        }
      },
      {
        "@type": "Question",
        name: "Should I use ARIA or semantic HTML?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always prefer semantic HTML over ARIA when possible. Use button instead of div with role='button', use nav instead of div with role='navigation'. Only use ARIA when semantic HTML doesn't provide the needed functionality or meaning."
        }
      },
      {
        "@type": "Question",
        name: "What are common accessibility mistakes to avoid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common mistakes include: using div/span for interactive elements, missing form labels, poor color contrast, missing alt text, improper heading hierarchy, inaccessible modals, and relying solely on automated testing. Always test manually with keyboard and screen readers."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewcag.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Best Practices",
        item: "https://thewcag.com/best-practices",
      },
    ],
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Best Practices", href: "/best-practices" }]} />

            {/* Article Header */}
            <header className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Accessibility Best Practices
                </h1>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">Last Updated: January 2026</p>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  A comprehensive guide to web accessibility that goes beyond compliance. Learn not just what meets the
                  legal requirements, but how to create exceptional, inclusive experiences that benefit all users.
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Beyond Compliance
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Best Practices
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    User-Centered
                  </Badge>
                </div>
              </div>
            </header>

            {/* Introduction */}
            <section className="mb-12 sm:mb-16 prose prose-lg max-w-none">
              <Card className="bg-primary/5 border-primary/20 mb-8 sm:mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Why Go Beyond Compliance?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base sm:text-lg leading-relaxed">
                  <p>
                    Meeting WCAG 2.2 compliance is essential, it's the law in many jurisdictions and ensures your
                    website is accessible to people with disabilities. But compliance is just the starting point.
                  </p>
                  <p>
                    <strong>Going beyond compliance</strong> means creating experiences that are not just accessible, but
                    genuinely usable and delightful for everyone. It means considering real-world scenarios, user
                    contexts, and edge cases that the guidelines don't explicitly cover.
                  </p>
                  <p>
                    This guide shows you both: <strong>what meets compliance</strong> (the legal minimum) and{" "}
                    <strong>what goes beyond</strong> (the path to excellence). Each practice includes real-world
                    scenarios, code examples, and strategies you can implement today.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Practices by Category */}
            <div className="space-y-16 sm:space-y-20 mb-12 sm:mb-16">
              {practices.map((category, categoryIndex) => {
                const CategoryIcon = category.icon
                return (
                  <section key={categoryIndex} id={category.slug} className="scroll-mt-8 sm:scroll-mt-12">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-primary/20">
                      <CategoryIcon className="h-7 w-7 sm:h-8 sm:w-8 text-primary shrink-0" />
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{category.category}</h2>
                    </div>

                    <div className="space-y-12 sm:space-y-16">
                      {category.articles.map((article, articleIndex) => (
                        <article key={articleIndex} className="space-y-6 sm:space-y-8">
                          {/* Article Title */}
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                              {article.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-4">
                              <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                                <Link href={article.link}>
                                  Related Criterion <ArrowRight className="h-3 w-3 ml-1" />
                                </Link>
                              </Button>
                            </div>
                          </div>

                          {/* Scenario */}
                          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                                <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                                Real-World Scenario
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm sm:text-base leading-relaxed">{article.scenario}</p>
                            </CardContent>
                          </Card>

                          {/* Compliance Section */}
                          <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                                {article.compliance.title}
                              </h4>
                            </div>
                            <Card>
                              <CardContent className="pt-6 space-y-4">
                                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                  {article.compliance.description}
                                </p>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span className="text-sm font-semibold">Compliant Example</span>
                                  </div>
                                  <pre className="bg-green-50 dark:bg-green-950/20 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm border border-green-200 dark:border-green-800">
                                    <code>{article.compliance.example}</code>
                                  </pre>
                                </div>
                                <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                                  <p className="text-xs sm:text-sm leading-relaxed">
                                    <strong>Why this works:</strong> {article.compliance.explanation}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Beyond Compliance Section */}
                          <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                                {article.beyond.title}
                              </h4>
                            </div>
                            <Card className="bg-primary/5 border-primary/20">
                              <CardContent className="pt-6 space-y-6">
                                <p className="text-sm sm:text-base leading-relaxed">
                                  {article.beyond.description}
                                </p>

                                {article.beyond.strategies.map((strategy, strategyIndex) => (
                                  <div key={strategyIndex} className="space-y-3">
                                    <h5 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                                      <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                      {strategy.title}
                                    </h5>
                                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                                      {strategy.description}
                                    </p>
                                    <pre className="bg-background p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm border">
                                      <code>{strategy.example}</code>
                                    </pre>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          </div>

                          {/* Real-World Impact */}
                          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                                {article.realWorld.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <p className="text-sm sm:text-base leading-relaxed">
                                {article.realWorld.description}
                              </p>
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <XCircle className="h-4 w-4 text-red-600" />
                                    <span className="text-xs sm:text-sm font-semibold">Compliance Only</span>
                                  </div>
                                  <pre className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg overflow-x-auto text-xs border border-red-200 dark:border-red-800">
                                    <code>{article.realWorld.complianceExample}</code>
                                  </pre>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span className="text-xs sm:text-sm font-semibold">Beyond Compliance</span>
                                  </div>
                                  <pre className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg overflow-x-auto text-xs border border-green-200 dark:border-green-800">
                                    <code>{article.realWorld.betterExample}</code>
                                  </pre>
                                </div>
                              </div>
                              <div className="bg-background/80 p-3 sm:p-4 rounded-lg mt-4">
                                <p className="text-xs sm:text-sm leading-relaxed">
                                  <strong>Impact:</strong> {article.realWorld.impact}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </article>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>

            {/* Key Takeaways */}
            <section className="mb-12 sm:mb-16">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl flex items-center gap-2">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Compliance is the Foundation</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Meeting WCAG standards ensures legal compliance and basic accessibility. This is essential, not
                          optional.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Excellence Goes Further</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Going beyond compliance creates better experiences for everyone, reduces support costs, and
                          builds user loyalty.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                      <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Test with Real Users</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Automated tools catch about 30% of issues. Testing with people who use assistive technologies
                          reveals the rest.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                      <Zap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">Start Early</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          It's 10x easier to build accessibility in from the start than to retrofit it later. Plan for
                          accessibility from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Related Resources */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Continue Your Learning Journey</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Explore these related resources to deepen your understanding of web accessibility.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button asChild variant="outline" className="justify-start h-auto py-4">
                      <Link href="/how-to-make-website-accessible">
                        <Target className="h-5 w-5 mr-2 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm sm:text-base">How to Make Website Accessible</div>
                          <div className="text-xs text-muted-foreground">Step-by-step implementation guide</div>
                        </div>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start h-auto py-4">
                      <Link href="/checklist">
                        <CheckCircle2 className="h-5 w-5 mr-2 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm sm:text-base">WCAG Checklist</div>
                          <div className="text-xs text-muted-foreground">Complete compliance checklist</div>
                        </div>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start h-auto py-4">
                      <Link href="/testing-guide">
                        <Search className="h-5 w-5 mr-2 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm sm:text-base">Testing Guide</div>
                          <div className="text-xs text-muted-foreground">Comprehensive testing methods</div>
                        </div>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-start h-auto py-4">
                      <Link href="/examples">
                        <Code className="h-5 w-5 mr-2 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm sm:text-base">Code Examples</div>
                          <div className="text-xs text-muted-foreground">Accessible code patterns</div>
                        </div>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
