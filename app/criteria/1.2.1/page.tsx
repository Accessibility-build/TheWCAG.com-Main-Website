"use client"

import { CheckCircle2, XCircle, Copy, Check, FileText, Mic, Headphones, Video } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelBadge } from "@/components/level-badge"
import { CriteriaPageLayout } from "@/components/criteria-page-layout"

export default function AudioVideoOnlyPage() {
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
        <span className="text-foreground font-medium">1.2.1 Audio-only and Video-only (Prerecorded)</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="A" />
          <span className="text-sm text-muted-foreground">Perceivable → Time-based Media</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.2.1 Audio-only and Video-only (Prerecorded)</h1>
        <p className="text-xl text-muted-foreground">
          For prerecorded audio-only and video-only media, an alternative is provided that presents equivalent
          information.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          People who are deaf or hard of hearing cannot access information in audio-only content (like podcasts). People
          who are blind or have low vision cannot access visual information in video-only content (like silent
          animations).
        </p>
        <p className="text-lg leading-relaxed">
          Providing transcripts or text alternatives ensures everyone can access the information, regardless of their
          sensory abilities.
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
            <div className="bg-muted p-8 rounded-lg mb-4 flex flex-col items-center justify-center text-center">
              <Mic className="w-12 h-12 text-muted-foreground mb-2" />
              <p className="font-medium">Podcast Episode 1</p>
              <audio controls className="w-full mt-4" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Audio player without a transcript
            </p>
            <p className="text-sm mt-2">Users who cannot hear miss all the content.</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ Correct</h3>
            </div>
            <div className="bg-muted p-8 rounded-lg mb-4 flex flex-col items-center justify-center text-center">
              <Mic className="w-12 h-12 text-muted-foreground mb-2" />
              <p className="font-medium">Podcast Episode 1</p>
              <audio controls className="w-full mt-4" />
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                <FileText className="w-4 h-4 mr-2" />
                Download Transcript (PDF)
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Providing a full text transcript
            </p>
            <p className="text-sm mt-2">Everyone can read the content of the audio.</p>
          </Card>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Implement</h2>

        <div className="space-y-6">
          {/* Audio Transcripts */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎙️ Audio Transcripts</h3>
            <p className="mb-4">For podcasts, interviews, or sound bites:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Include all spoken dialogue (word-for-word or edited for clarity).</li>
              <li>Identify speakers (e.g., "Host:", "Guest:").</li>
              <li>Describe relevant non-speech sounds (e.g., [laughter], [door slams]).</li>
              <li>Place the transcript immediately below the audio player or provide a clear link.</li>
            </ul>
          </Card>

          {/* Video Alternatives */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📹 Video-only Alternatives</h3>
            <p className="mb-4">For silent videos, animations, or screen recordings:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide a text description of all visual information.</li>
              <li>Describe actions, settings, scene changes, and on-screen text.</li>
              <li>Alternatively, provide an audio track that describes the visual content.</li>
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
                <h3 className="font-semibold">HTML Structure</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("HTML code", "html")}>
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- Audio Player -->
<audio controls src="podcast-episode-1.mp3">
  Your browser does not support the audio element.
</audio>

<!-- Transcript Link -->
<div class="transcript-link">
  <a href="podcast-episode-1-transcript.html">
    Read Transcript
  </a>
</div>

<!-- OR Inline Transcript -->
<details>
  <summary>View Transcript</summary>
  <div class="transcript-content">
    <p><strong>Host:</strong> Welcome to the show...</p>
    <p><strong>Guest:</strong> Thanks for having me.</p>
  </div>
</details>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="react" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">React Component</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("React code", "react")}>
                  {copiedCode === "react" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`import { useState } from 'react'

export function AudioPlayer({ src, transcript }) {
  const [showTranscript, setShowTranscript] = useState(false)

  return (
    <div className="audio-player-container">
      <audio controls src={src} className="w-full mb-4" />
      
      <button 
        onClick={() => setShowTranscript(!showTranscript)}
        className="text-blue-600 hover:underline"
        aria-expanded={showTranscript}
      >
        {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
      </button>

      {showTranscript && (
        <div className="transcript mt-4 p-4 bg-gray-50 rounded">
          {transcript.map((line, i) => (
            <p key={i} className="mb-2">
              <strong>{line.speaker}:</strong> {line.text}
            </p>
          ))}
        </div>
      )}
    </div>
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
            <h3 className="text-xl font-semibold mb-4">Check Audio Content</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Verify that a transcript is available for all prerecorded audio.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Check that the transcript accurately reflects the spoken content.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Ensure speakers are identified and important sounds are described.</div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Check Video-only Content</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Verify that a text description or audio track is available.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>Check that the description covers all important visual information.</div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.2.2">
            <Button variant="outline">1.2.2 Captions (Prerecorded)</Button>
          </Link>
          <Link href="/criteria/1.2.3">
            <Button variant="outline">1.2.3 Audio Description</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}
