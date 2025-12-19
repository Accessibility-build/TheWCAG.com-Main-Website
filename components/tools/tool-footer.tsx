import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Tool, getRelatedTools } from "@/lib/tools/constants"

interface ToolFooterProps {
  tool: Tool
}

// Get tool-specific steps based on the tool slug or category
function getToolSteps(tool: Tool): { title: string; description: string }[] {
  // Tool-specific steps for better accuracy
  const toolSpecificSteps: Record<string, { title: string; description: string }[]> = {
    "lorem-ipsum-generator": [
      { title: "Choose Output Type", description: "Select whether you want paragraphs, sentences, or words." },
      { title: "Set the Amount", description: "Specify how many paragraphs, sentences, or words you need." },
      { title: "Copy the Text", description: "Click generate and copy the placeholder text to your clipboard." },
    ],
    "password-generator": [
      { title: "Set Password Length", description: "Choose how long your password should be (8-128 characters)." },
      { title: "Select Character Types", description: "Include uppercase, lowercase, numbers, and special characters." },
      { title: "Copy Your Password", description: "Click generate and copy your secure password to clipboard." },
    ],
    "uuid-generator": [
      { title: "Choose UUID Version", description: "Select UUID v4 (random) or v1 (time-based) format." },
      { title: "Set Quantity", description: "Choose how many UUIDs you want to generate at once." },
      { title: "Copy UUIDs", description: "Click generate and copy the unique identifiers to clipboard." },
    ],
    "hash-generator": [
      { title: "Enter Your Text", description: "Type or paste the text you want to hash." },
      { title: "Select Algorithm", description: "Choose MD5, SHA-1, SHA-256, or SHA-512 hash algorithm." },
      { title: "Copy the Hash", description: "View and copy the generated hash value to clipboard." },
    ],
    "color-converter": [
      { title: "Enter a Color", description: "Input a color in HEX, RGB, HSL, or use the color picker." },
      { title: "View Conversions", description: "See the color converted to all supported formats instantly." },
      { title: "Copy Values", description: "Click to copy any color format value to your clipboard." },
    ],
    "qr-code-generator": [
      { title: "Enter Content", description: "Type the URL, text, or data you want to encode." },
      { title: "Customize Style", description: "Adjust size, colors, and error correction level if needed." },
      { title: "Download QR Code", description: "Save your QR code as PNG or SVG image." },
    ],
    "json-formatter": [
      { title: "Paste JSON", description: "Enter or paste your JSON data in the input field." },
      { title: "Format or Minify", description: "Choose to beautify with indentation or minify to one line." },
      { title: "Copy Result", description: "Copy the formatted JSON or download as a file." },
    ],
    "base64-encoder-decoder": [
      { title: "Enter Text", description: "Type or paste the text you want to encode or decode." },
      { title: "Choose Operation", description: "Select whether to encode to Base64 or decode from Base64." },
      { title: "Copy Result", description: "Copy the encoded or decoded result to clipboard." },
    ],
    "url-encoder-decoder": [
      { title: "Enter URL/Text", description: "Paste the URL or text you want to encode or decode." },
      { title: "Choose Operation", description: "Select URL encode or decode operation." },
      { title: "Copy Result", description: "Copy the processed URL to your clipboard." },
    ],
  }

  // Check for tool-specific steps first
  if (toolSpecificSteps[tool.slug]) {
    return toolSpecificSteps[tool.slug]
  }

  // Category-based default steps
  switch (tool.category) {
    case "image":
      return [
        { title: "Upload Image", description: "Drag and drop your image or click to browse supported formats." },
        { title: "Adjust Settings", description: "Configure output format, quality, or dimensions as needed." },
        { title: "Download Result", description: "Preview and download your processed image." },
      ]
    case "document":
      return [
        { title: "Upload Document", description: "Select your PDF or document file to process." },
        { title: "Configure Options", description: "Set any available options for the conversion." },
        { title: "Download Result", description: "Download your converted or processed document." },
      ]
    case "text":
    case "data":
      return [
        { title: "Enter Input", description: "Paste or type your text/data in the input area." },
        { title: "Choose Format", description: "Select output format and any conversion options." },
        { title: "Copy or Download", description: "Copy the result to clipboard or download as file." },
      ]
    case "archive":
      return [
        { title: "Select Files", description: "Upload files to compress or an archive to extract." },
        { title: "Configure Options", description: "Set compression level or extraction preferences." },
        { title: "Download Files", description: "Download your compressed archive or extracted files." },
      ]
    default:
      return [
        { title: "Provide Input", description: "Enter your data or upload a file to get started." },
        { title: "Configure Options", description: "Adjust settings to customize the output." },
        { title: "Get Result", description: "Copy or download your processed result." },
      ]
  }
}

export function ToolFooter({ tool }: ToolFooterProps) {
  const relatedTools = getRelatedTools(tool.slug)
  const steps = getToolSteps(tool)

  return (
    <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
      {/* How to use */}
      <section aria-labelledby="how-to-use-heading">
        <h2 id="how-to-use-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          How to Use {tool.name}
        </h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className={index === steps.length - 1 ? "sm:col-span-2 md:col-span-1" : ""}>
              <CardHeader className="pb-2 sm:pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {tool.faq.length > 0 && (
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {tool.faq.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <CardTitle className="text-base sm:text-lg leading-snug">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <p className="text-sm sm:text-base text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Related tools */}
      {relatedTools.length > 0 && (
        <section aria-labelledby="related-tools-heading">
          <h2 id="related-tools-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Related Tools</h2>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((relatedTool) => (
              <Card key={relatedTool.slug} className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2 px-4 sm:px-6">
                  <CardTitle className="text-base sm:text-lg">{relatedTool.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm line-clamp-2">
                    {relatedTool.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto px-4 sm:px-6">
                  <Button variant="outline" className="w-full min-h-[44px]" asChild>
                    <Link href={`/tools/convert/${relatedTool.slug}`}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All tools link */}
      <section className="text-center py-6 sm:py-8 border-t">
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
          Looking for more tools? Browse our complete collection of free conversion tools.
        </p>
        <Button asChild className="min-h-[44px]">
          <Link href="/tools/convert">
            View All Tools
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
