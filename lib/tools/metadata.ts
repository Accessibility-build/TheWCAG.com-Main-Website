import type { Metadata } from "next"
import { Tool, TOOL_CATEGORIES } from "./constants"

// Helper function to truncate description properly
function truncateDescription(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return lastSpace > 0 ? truncated.slice(0, lastSpace) + "..." : truncated + "..."
}

// Helper function to get correct URL path based on tool category
function getToolBasePath(tool: Tool): string {
  if (tool.category === "editing") return "/tools/edit"
  if (tool.category === "seo") return "/tools/seo"
  if (tool.category === "accessibility") return "/tools/accessibility"
  return "/tools/convert"
}

export function generateToolMetadata(tool: Tool): Metadata {
  const title = `${tool.name} - Free Online Tool | TheWCAG`
  const description = truncateDescription(tool.description, 155)
  const basePath = getToolBasePath(tool)
  const url = `https://thewcag.com${basePath}/${tool.slug}`
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
  const basePath = getToolBasePath(tool)
  const isEditingTool = tool.category === "editing"
  const sectionName = isEditingTool ? "Edit" : "Convert"
  
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `https://thewcag.com${basePath}/${tool.slug}`,
    applicationCategory: isEditingTool ? "MultimediaApplication" : "UtilityApplication",
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
          name: sectionName,
          item: `https://thewcag.com${basePath}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: tool.name,
          item: `https://thewcag.com${basePath}/${tool.slug}`,
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
  const basePath = getToolBasePath(tool)
  
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
      url: `https://thewcag.com${basePath}/${tool.slug}#step-${index + 1}`,
    })),
  }
}

// Generate default HowTo steps based on tool type
export function getDefaultToolSteps(tool: Tool): string[] {
  // Tool-specific steps for better SEO and accuracy
  const toolSpecificSteps: Record<string, string[]> = {
    // Utility tools
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
    // Editing tools
    "background-remover": [
      "Upload your image by dragging and dropping or clicking the upload area",
      "Select removal method: color-based for simple backgrounds or AI for complex scenes",
      "Adjust the color threshold for better edge detection if needed",
      "Choose background replacement: transparent, solid color, or gradient",
      "Click Remove Background and download your processed image",
    ],
    "watermark-remover": [
      "Upload the image containing the watermark you want to remove",
      "Select the watermark area using the brush or selection tool",
      "Choose the inpainting algorithm for best results",
      "Click Remove Watermark to process the image",
      "Preview the result and download the clean image",
    ],
    "object-remover": [
      "Upload your photo with unwanted objects",
      "Use the brush tool to paint over objects you want to remove",
      "Adjust brush size for precise selection",
      "Click Remove Objects to apply smart inpainting",
      "Download your cleaned photo",
    ],
    "face-blur": [
      "Upload an image containing faces you want to blur",
      "Choose blur method: Gaussian blur, pixelation, or black bar",
      "Adjust the blur intensity using the slider",
      "Select faces manually or use automatic detection",
      "Click Apply Blur and download the privacy-protected image",
    ],
    "image-upscaler": [
      "Upload the image you want to upscale and enhance",
      "Select upscaling factor: 2x or 4x resolution",
      "Choose algorithm: AI-powered or bicubic interpolation",
      "Click Upscale Image to process",
      "Download your high-resolution enhanced image",
    ],
    "image-inpainting": [
      "Upload an image with areas you want to fill or repair",
      "Use the brush to mark damaged or missing areas",
      "Select the inpainting algorithm for best results",
      "Click Inpaint to fill the selected areas intelligently",
      "Download your restored image",
    ],
    "image-colorizer": [
      "Upload a black and white or grayscale photo",
      "Optionally add color hints by clicking on areas and selecting colors",
      "Click Colorize to apply AI-powered colorization",
      "Preview the colorized result",
      "Download your colorized photo",
    ],
    "image-restoration": [
      "Upload your old or damaged photo",
      "Select restoration options: noise reduction, fade correction, contrast enhancement",
      "Enable scratch detection for automatic repair",
      "Click Restore Image to process",
      "Download your restored and enhanced photo",
    ],
    "image-anonymizer": [
      "Upload an image with sensitive information to anonymize",
      "Select anonymization method: Gaussian blur, pixelation, or black bar",
      "Adjust intensity for the desired level of anonymization",
      "Mark sensitive areas manually or use automatic detection",
      "Click Anonymize and download the protected image",
    ],
    "image-metadata-remover": [
      "Upload an image to strip metadata from",
      "Preview all metadata including EXIF, GPS, and camera information",
      "Click Remove Metadata to strip all private data",
      "Download the clean image without any metadata",
    ],
    "image-duplicate-finder": [
      "Upload multiple images to compare for duplicates",
      "Adjust the similarity threshold percentage",
      "Click Find Duplicates to analyze all images",
      "Review grouped similar images with similarity scores",
      "Identify and manage duplicate files",
    ],
    "pdf-editor": [
      "Upload the PDF document you want to edit",
      "Select the page where you want to add content",
      "Choose edit type: add text, insert image, or draw shape",
      "Position and customize your content",
      "Click Apply Edits and download your modified PDF",
    ],
    // SEO Tools
    "sitemap-generator": [
      "Enter or paste your website URLs (one per line or comma-separated)",
      "Set priority, change frequency, and last modified date for each URL",
      "Click Generate to create your XML sitemap",
      "Download the sitemap.xml file and upload it to your website root",
    ],
    "robots-txt-generator": [
      "Select a preset or start from scratch",
      "Add user-agent rules with allow/disallow paths",
      "Set crawl delay and sitemap URL if needed",
      "Generate and download your robots.txt file",
    ],
    "meta-tag-generator": [
      "Enter your page title and meta description",
      "Fill in Open Graph and Twitter Card details",
      "Add additional meta tags like canonical URL and robots",
      "Copy the generated HTML meta tags to your website",
    ],
    "schema-markup-generator": [
      "Select the schema type for your content (Article, Product, FAQ, etc.)",
      "Fill in the required and optional fields for your schema",
      "Preview the generated JSON-LD structured data",
      "Copy the script tag and add it to your webpage",
    ],
    "open-graph-generator": [
      "Enter your content title, description, and URL",
      "Add your og:image URL and set dimensions",
      "Configure Twitter Card settings",
      "Preview how your link will appear on social media and copy the tags",
    ],
    "accessibility-tester": [
      "Enter a URL to test or click 'Test Current Page'",
      "Wait for the accessibility scan to complete",
      "Review violations, passed checks, and incomplete items",
      "Export results in JSON, CSV, or HTML format",
    ],
    "document-viewer": [
      "Upload markdown files by dragging and dropping or using the file picker",
      "Optionally upload entire folders containing markdown documentation",
      "Select a document from the sidebar to view it",
      "Use the table of contents to navigate within the document",
      "Search across all documents using the search bar",
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
    case "editing":
      return [
        "Upload your image or document by dragging and dropping or clicking the upload area",
        "Select your editing options and adjust settings as needed",
        "Click the process button to apply your edits",
        "Preview the result and download your edited file",
      ]
    case "seo":
      return [
        "Fill in the required fields for your SEO element",
        "Configure optional settings and customize the output",
        "Click generate to create your SEO markup or file",
        "Copy or download the result for use on your website",
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
