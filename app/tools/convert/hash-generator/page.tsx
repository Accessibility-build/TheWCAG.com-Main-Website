"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { FileUpload } from "@/components/tools/file-upload"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateHash, generateFileHash } from "@/lib/tools/converters/utility"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"

const tool = getToolBySlug("hash-generator")!

type Algorithm = "md5" | "sha1" | "sha256" | "sha512"

export default function HashGeneratorPage() {
  const [text, setText] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [hashes, setHashes] = useState<Record<Algorithm, string>>({
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedHash, setCopiedHash] = useState<string | null>(null)

  const generateAllHashes = async (input: string) => {
    const algorithms: Algorithm[] = ["md5", "sha1", "sha256", "sha512"]
    const results: Record<Algorithm, string> = { md5: "", sha1: "", sha256: "", sha512: "" }
    
    for (const alg of algorithms) {
      results[alg] = generateHash(input, alg)
    }
    
    setHashes(results)
  }

  const generateAllFileHashes = async (file: File) => {
    setIsProcessing(true)
    const algorithms: Algorithm[] = ["md5", "sha1", "sha256", "sha512"]
    const results: Record<Algorithm, string> = { md5: "", sha1: "", sha256: "", sha512: "" }
    
    try {
      for (const alg of algorithms) {
        results[alg] = await generateFileHash(file, alg)
      }
      setHashes(results)
    } catch (e) {
      console.error("Hash generation failed:", e)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleTextChange = (value: string) => {
    setText(value)
    if (value) {
      generateAllHashes(value)
    } else {
      setHashes({ md5: "", sha1: "", sha256: "", sha512: "" })
    }
  }

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0])
      generateAllFileHashes(files[0])
    }
  }

  const handleCopy = async (hash: string) => {
    const success = await copyToClipboard(hash)
    if (success) {
      setCopiedHash(hash)
      setTimeout(() => setCopiedHash(null), 2000)
    }
  }

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
                  <CardTitle>Input</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="text">
                    <TabsList className="mb-4">
                      <TabsTrigger value="text">Text</TabsTrigger>
                      <TabsTrigger value="file">File</TabsTrigger>
                    </TabsList>
                    <TabsContent value="text">
                      <Textarea
                        value={text}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder="Enter text to hash..."
                        className="min-h-[200px] font-mono"
                      />
                    </TabsContent>
                    <TabsContent value="file">
                      <FileUpload
                        maxSizeMB={100}
                        onFileSelect={handleFileSelect}
                        label="Upload File"
                        description="Select any file to generate its hash"
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hash Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isProcessing ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
                    </div>
                  ) : (
                    <>
                      {(["md5", "sha1", "sha256", "sha512"] as Algorithm[]).map((alg) => (
                        <div key={alg} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label className="uppercase font-bold">{alg}</Label>
                            {hashes[alg] && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(hashes[alg])}
                              >
                                {copiedHash === hashes[alg] ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                          </div>
                          <div className="p-3 rounded-lg bg-muted font-mono text-xs break-all">
                            {hashes[alg] || "—"}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
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
