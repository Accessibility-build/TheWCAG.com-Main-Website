import type { Metadata } from "next"
import { Tool, TOOL_CATEGORIES } from "./constants"

// Helper function to truncate description properly
function truncateDescription(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return lastSpace > 0 ? truncated.slice(0, lastSpace) + "..." : truncated + "..."
}

export function generateToolMetadata(tool: Tool): Metadata {
  const title = `${tool.name} - Free Online Tool | TheWCAG`
  const description = truncateDescription(tool.description, 155)
  const url = `https://thewcag.com/tools/convert/${tool.slug}`
  const imageUrl = "https://thewcag.com/Logo.png"

  return {
    title,
    description,
    keywords: tool.keywords,
    authors: [{ name: "TheWCAG", url: "https://thewcag.com" }],
    creator: "TheWCAG",
    publisher: "TheWCAG",
    openGraph: {
      title: `${tool.name} - Free Online Tool`,
      description: tool.shortDescription,
      url,
      type: "website",
      siteName: "TheWCAG",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${tool.name} - Free online conversion tool`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - Free Online Tool`,
      description: tool.shortDescription,
      images: [imageUrl],
      creator: "@thewcag",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: TOOL_CATEGORIES[tool.category].name,
  }
}

export function generateToolStructuredData(tool: Tool) {
  const category = TOOL_CATEGORIES[tool.category]
  const currentDate = new Date().toISOString().split("T")[0]
  
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `https://thewcag.com/tools/convert/${tool.slug}`,
    applicationCategory: "UtilityApplication",
    applicationSubCategory: category.name,
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works in all modern browsers.",
    softwareVersion: "1.0",
    datePublished: "2024-01-01",
    dateModified: currentDate,
    inLanguage: "en",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: tool.features.join(", "),
    screenshot: "https://thewcag.com/Logo.png",
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
        width: 512,
        height: 512,
      },
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
          name: "Tools",
          item: "https://thewcag.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Convert",
          item: "https://thewcag.com/tools/convert",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: tool.name,
          item: `https://thewcag.com/tools/convert/${tool.slug}`,
        },
      ],
    },
  }
}

export function generateToolFAQStructuredData(tool: Tool) {
  if (!tool.faq || tool.faq.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function generateHowToStructuredData(tool: Tool, steps: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${tool.name}`,
    description: tool.shortDescription,
    totalTime: "PT1M",
    image: "https://thewcag.com/Logo.png",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    tool: {
      "@type": "HowToTool",
      name: "Web Browser",
    },
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
      url: `https://thewcag.com/tools/convert/${tool.slug}#step-${index + 1}`,
    })),
  }
}

// Generate default HowTo steps based on tool type
export function getDefaultToolSteps(tool: Tool): string[] {
  // Tool-specific steps for better SEO and accuracy
  const toolSpecificSteps: Record<string, string[]> = {
    "lorem-ipsum-generator": [
      "Choose output type: paragraphs, sentences, or words",
      "Set the quantity you need",
      "Click Generate to create placeholder text",
      "Copy the text to your clipboard",
    ],
    "password-generator": [
      "Set your desired password length",
      "Select character types to include (uppercase, lowercase, numbers, symbols)",
      "Click Generate to create a secure password",
      "Copy the password to your clipboard",
    ],
    "uuid-generator": [
      "Choose UUID version (v4 random or v1 time-based)",
      "Set how many UUIDs to generate",
      "Click Generate to create unique identifiers",
      "Copy the UUIDs to your clipboard",
    ],
    "hash-generator": [
      "Enter or paste your text in the input field",
      "Select the hash algorithm (MD5, SHA-1, SHA-256, SHA-512)",
      "View the generated hash instantly",
      "Copy the hash value to your clipboard",
    ],
    "color-converter": [
      "Enter a color value in any format (HEX, RGB, HSL) or use the picker",
      "View the color converted to all formats automatically",
      "Copy any color format value you need",
    ],
    "qr-code-generator": [
      "Enter the URL, text, or data to encode",
      "Customize size and colors if needed",
      "Generate and preview the QR code",
      "Download as PNG or SVG image",
    ],
    "json-formatter": [
      "Paste your JSON data in the input area",
      "Choose to format (beautify) or minify the JSON",
      "View the formatted result with syntax highlighting",
      "Copy or download the formatted JSON",
    ],
    "base64-encoder-decoder": [
      "Enter or paste text in the input field",
      "Choose encode or decode operation",
      "View the result instantly",
      "Copy the encoded or decoded output",
    ],
    "url-encoder-decoder": [
      "Enter your URL or text to process",
      "Select encode or decode operation",
      "View the processed result",
      "Copy the encoded or decoded URL",
    ],
  }

  // Return tool-specific steps if available
  if (toolSpecificSteps[tool.slug]) {
    return toolSpecificSteps[tool.slug]
  }

  // Category-based default steps
  const category = tool.category
  
  switch (category) {
    case "image":
      return [
        "Upload your image by dragging and dropping or clicking the upload area",
        "Select your desired output format and adjust quality settings if needed",
        "Click the convert button to process your image",
        "Preview the result and download your converted file",
      ]
    case "document":
      return [
        "Upload your document file using drag-and-drop or the file browser",
        "Configure any available options for the conversion",
        "Click process to start the conversion",
        "Download your converted document when ready",
      ]
    case "text":
    case "data":
      return [
        "Paste or type your input text/data in the input area",
        "Select any formatting options if available",
        "Click convert to transform your data",
        "Copy or download the converted result",
      ]
    case "developer":
      return [
        "Enter or paste your code in the input field",
        "Choose your preferred options and settings",
        "Click the process button to transform your code",
        "Copy the result or download it as a file",
      ]
    case "archive":
      return [
        "Upload your file(s) by dragging and dropping or browsing",
        "Configure compression options if available",
        "Click process to create or extract the archive",
        "Download your processed file(s)",
      ]
    case "utility":
      return [
        "Configure the generator settings or enter input",
        "Adjust options to customize the output",
        "Click generate to create your result",
        "Copy the result to clipboard",
      ]
    default:
      return [
        "Upload or enter your input data",
        "Configure any available options",
        "Click process to convert",
        "Download or copy your result",
      ]
  }
}
