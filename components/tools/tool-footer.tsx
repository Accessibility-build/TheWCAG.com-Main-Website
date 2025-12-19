import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Tool, getRelatedTools } from "@/lib/tools/constants"

interface ToolFooterProps {
  tool: Tool
}

export function ToolFooter({ tool }: ToolFooterProps) {
  const relatedTools = getRelatedTools(tool.slug)

  return (
    <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
      {/* How to use */}
      <section aria-labelledby="how-to-use-heading">
        <h2 id="how-to-use-heading" className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          How to Use {tool.name}
        </h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2 sm:pb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                1
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Upload Your File</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Drag and drop your file or click to browse. We support various formats.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2 sm:pb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                2
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Configure Options</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Adjust settings if needed. Preview the result before downloading.
              </p>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-1">
            <CardHeader className="pb-2 sm:pb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                3
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Download Result</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Click download to save your converted file. Processing happens in your browser.
              </p>
            </CardContent>
          </Card>
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
