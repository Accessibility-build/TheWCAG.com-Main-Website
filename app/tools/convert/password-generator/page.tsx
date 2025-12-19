"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Check, RefreshCw } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generatePassword, calculatePasswordStrength } from "@/lib/tools/converters/utility"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("password-generator")!

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false)
  const [copied, setCopied] = useState(false)
  const [strength, setStrength] = useState({ score: 0, feedback: "" })

  const generate = () => {
    try {
      const newPassword = generatePassword({
        length,
        uppercase,
        lowercase,
        numbers,
        symbols,
        excludeAmbiguous,
      })
      setPassword(newPassword)
      setStrength(calculatePasswordStrength(newPassword))
    } catch (e) {
      // At least one option must be selected
    }
  }

  useEffect(() => {
    generate()
  }, [])

  const handleCopy = async () => {
    const success = await copyToClipboard(password)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-lime-500", "bg-green-500"]

  const structuredData = generateToolStructuredData(tool)
  const faqData = generateToolFAQStructuredData(tool)
  const howToData = generateHowToStructuredData(tool, getDefaultToolSteps(tool))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Password Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Length: {length} characters</Label>
                    <input
                      type="range"
                      min="8"
                      max="64"
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>8</span>
                      <span>64</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Character Types</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="uppercase"
                          checked={uppercase}
                          onCheckedChange={(checked) => setUppercase(checked as boolean)}
                        />
                        <label htmlFor="uppercase" className="text-sm">
                          Uppercase (A-Z)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="lowercase"
                          checked={lowercase}
                          onCheckedChange={(checked) => setLowercase(checked as boolean)}
                        />
                        <label htmlFor="lowercase" className="text-sm">
                          Lowercase (a-z)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="numbers"
                          checked={numbers}
                          onCheckedChange={(checked) => setNumbers(checked as boolean)}
                        />
                        <label htmlFor="numbers" className="text-sm">
                          Numbers (0-9)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="symbols"
                          checked={symbols}
                          onCheckedChange={(checked) => setSymbols(checked as boolean)}
                        />
                        <label htmlFor="symbols" className="text-sm">
                          Symbols (!@#$%^&*)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="excludeAmbiguous"
                      checked={excludeAmbiguous}
                      onCheckedChange={(checked) => setExcludeAmbiguous(checked as boolean)}
                    />
                    <label htmlFor="excludeAmbiguous" className="text-sm">
                      Exclude ambiguous characters (0, O, l, 1, I)
                    </label>
                  </div>

                  <Button onClick={generate} className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate Password
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Generated Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted break-all font-mono text-lg">
                    {password || "Click generate to create a password"}
                  </div>

                  {password && (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Strength:</span>
                          <span className="font-medium">{strength.feedback}</span>
                        </div>
                        <div className="flex gap-1">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`h-2 flex-1 rounded ${i <= strength.score ? strengthColors[strength.score] : "bg-muted"}`}
                            />
                          ))}
                        </div>
                      </div>

                      <Button onClick={handleCopy} className="w-full">
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied to Clipboard
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Password
                          </>
                        )}
                      </Button>
                    </>
                  )}

                  <div className="p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                    <p>Generated using cryptographically secure randomness. Never share your passwords.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
