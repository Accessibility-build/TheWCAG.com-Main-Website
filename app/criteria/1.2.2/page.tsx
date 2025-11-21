"use client"

import { CheckCircle2, XCircle, Copy, Check, Subtitles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"

export default function CaptionsPrerecordedPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="container py-8 max-w-6xl">
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
        <span className="text-foreground font-medium">1.2.2 Captions (Prerecorded)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Time-based Media</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.2.2 Captions (Prerecorded)</h1>
        <p className="text-xl text-muted-foreground">
          Captions are provided for all prerecorded audio content in synchronized media, except when the media is a
          media alternative for text and is clearly labeled as such.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Captions allow people who are deaf or hard of hearing to watch videos and understand the spoken content and
          important sound effects.
        </p>
        <p className="text-lg leading-relaxed">
          They also benefit people in noisy environments, people watching without sound, and non-native speakers who
          read better than they understand spoken language.
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
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <p className="font-medium mb-2">Video Player</p>
                <p className="text-xs text-muted-foreground">(No CC button)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Video without captions
            </p>
            <p className="text-sm mt-2">Users cannot access the spoken content.</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted aspect-video rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="text-center w-full h-full flex flex-col justify-between p-4">
                <p className="font-medium">Video Player</p>
                <div className="bg-black/70 text-white p-2 rounded text-sm mx-auto mb-8">
                  [Upbeat music plays] <br />
                  Welcome to our tutorial!
                </div>
                <div className="flex justify-end">
                  <Button size="sm" variant="secondary" className="h-6 text-xs">
                    <Subtitles className="w-3 h-3 mr-1" /> CC
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Synchronized captions available
            </p>
            <p className="text-sm mt-2">Captions show dialogue and sounds.</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          {/* Creating Captions */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 Creating Caption Files</h3>
            <p className="mb-4">Use standard formats like WebVTT (.vtt) or SRT (.srt):</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm mb-4">
              {`WEBVTT

00:00:01.000 --> 00:00:04.000
- Welcome to our accessibility course.
- [Upbeat intro music fades out]

00:00:04.500 --> 00:00:08.000
Today we'll be discussing WCAG 2.2.`}
            </pre>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include all dialogue.</li>
              <li>Identify speakers when necessary.</li>
              <li>Describe significant sound effects (e.g., [phone ringing], [glass breaking]).</li>
              <li>Ensure captions are synchronized with the audio.</li>
            </ul>
          </Card>

          {/* Adding to Video */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📺 Adding to HTML5 Video</h3>
            <p className="mb-4">
              Use the <code>&lt;track&gt;</code> element inside the video tag.
            </p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="html">HTML5 Video</TabsTrigger>
            <TabsTrigger value="react">React/Next.js</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML5 Video with Track</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("HTML code", "html")}>
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  
  <!-- English Captions -->
  <track 
    label="English" 
    kind="captions" 
    srclang="en" 
    src="captions-en.vtt" 
    default
  >
  
  <!-- Spanish Captions -->
  <track 
    label="Español" 
    kind="captions" 
    srclang="es" 
    src="captions-es.vtt"
  >
  
  Your browser does not support the video tag.
</video>`}
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
                {`export function VideoPlayer() {
  return (
    <video controls className="w-full rounded-lg shadow-lg">
      <source src="/videos/tutorial.mp4" type="video/mp4" />
      <track
        kind="captions"
        src="/captions/tutorial-en.vtt"
        srcLang="en"
        label="English"
        default
      />
    </video>
  )
}`}
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testing Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Test</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Manual Verification</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Play the video and enable captions.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Check if captions are synchronized with the audio.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Verify that all dialogue and important sounds are included.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Ensure captions don't obscure important visual information.</div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Tools</h3>
            <p className="text-muted-foreground mb-4">
              Automated tools can detect the presence of the <code>&lt;track&gt;</code> element but cannot verify the
              accuracy or synchronization of the captions. Manual testing is required.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.2.4">
            <Button variant="outline">1.2.4 Captions (Live)</Button>
          </Link>
          <Link href="/criteria/1.2.1">
            <Button variant="outline">1.2.1 Audio-only and Video-only</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
