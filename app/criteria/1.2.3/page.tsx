"use client"

import { CheckCircle2, XCircle, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function AudioDescriptionPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <CriteriaPageLayout>
      <div className="container py-8 md:py-12 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/principles/perceivable" className="hover:text-foreground transition-colors">
          Perceivable
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">1.2.3 Audio Description or Media Alternative</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Time-based Media</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.2.3 Audio Description or Media Alternative</h1>
        <p className="text-xl text-muted-foreground">
          An alternative for time-based media or audio description of the prerecorded video content is provided for
          synchronized media.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          People who are blind or have low vision miss visual information in videos that isn't spoken, such as text on
          screen, scene changes, or non-verbal actions.
        </p>
        <p className="text-lg leading-relaxed">
          Audio descriptions narrate these visual details during pauses in dialogue. Alternatively, a full text
          transcript (media alternative) allows users to read the visual descriptions.
        </p>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ Incorrect</h3>
            </div>
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center text-center p-4">
              <div>
                <p className="font-medium mb-2">Video: "How to Assemble"</p>
                <p className="text-sm italic">"Connect this part to that part..."</p>
                <p className="text-xs text-muted-foreground mt-2">(Visuals show specific parts, but audio is vague)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Visual information is not described
            </p>
            <p className="text-sm mt-2">Blind users don't know which parts are being referred to.</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center text-center p-4">
              <div>
                <p className="font-medium mb-2">Video with Audio Description</p>
                <p className="text-sm italic">"Connect the blue cable to the rear port..."</p>
                <p className="text-xs text-green-600 mt-2 font-medium">
                  [AD]: "The presenter holds up a blue ethernet cable."
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Audio description fills in visual gaps
            </p>
            <p className="text-sm mt-2">Visual context is narrated for blind users.</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          {/* Option 1: Audio Description */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Option 1: Audio Description (AD)</h3>
            <p className="mb-4">Add a secondary audio track that narrates visual information.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Narrate during natural pauses in dialogue.</li>
              <li>Describe actions, settings, facial expressions, and on-screen text.</li>
              <li>Can be a separate video file or a toggleable audio track.</li>
            </ul>
          </Card>

          {/* Option 2: Media Alternative */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Option 2: Media Alternative (Transcript)</h3>
            <p className="mb-4">Provide a comprehensive text document that includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All spoken dialogue.</li>
              <li>Descriptions of all important visual information.</li>
              <li>Descriptions of sound effects.</li>
              <li>This is often easier to implement than synchronized AD.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="html">HTML Structure</TabsTrigger>
            <TabsTrigger value="react">React Component</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Providing a Transcript</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("HTML code", "html")}>
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- Video Player -->
<video controls src="video.mp4"></video>

<!-- Link to Media Alternative -->
<div class="media-alternative">
  <h3>Accessibility Options</h3>
  <ul>
    <li>
      <a href="video-transcript.html">
        Read Full Transcript (with visual descriptions)
      </a>
    </li>
    <li>
      <a href="video-with-ad.mp4">
        Watch Video with Audio Description
      </a>
    </li>
  </ul>
</div>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`export function AccessibleVideo() {
  return (
    <div className="video-container">
      <video controls src="/video.mp4" className="w-full" />
      
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h4 className="font-bold mb-2">Accessibility</h4>
        <p className="text-sm mb-2">
          This video contains visual information. 
          Choose an accessible format below:
        </p>
        <div className="flex gap-4">
          <a href="/transcripts/video-1.html" className="text-blue-600 underline">
            Text Transcript
          </a>
          <a href="/video-ad.mp4" className="text-blue-600 underline">
            Video with Audio Description
          </a>
        </div>
      </div>
    </div>
  )
}`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.2.5">
            <Button variant="outline">1.2.5 Audio Description (Prerecorded)</Button>
          </Link>
          <Link href="/criteria/1.2.1">
            <Button variant="outline">1.2.1 Audio-only and Video-only</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}
