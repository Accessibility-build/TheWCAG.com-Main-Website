"use client"

import { CheckCircle2, XCircle, Copy, Check, Video, Subtitles } from "lucide-react"
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
        <span className="text-foreground font-medium">1.2.5 Audio Description</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <LevelBadge level="AA" />
          <span className="text-sm text-muted-foreground">Perceivable → Time-based Media</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">1.2.5 Audio Description</h1>
        <p className="text-xl text-muted-foreground">
          Audio description is provided for all prerecorded video content in synchronized media.
        </p>
      </div>

      {/* Why It Matters */}
      <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed mb-4">
          Blind and visually impaired users cannot see visual information in videos. Audio description narrates important visual details, actions, scene changes, and on-screen text that aren't conveyed through dialogue. This makes video content fully accessible to users who cannot see the screen.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <Video className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Blind Users</h4>
              <p className="text-sm text-muted-foreground">Cannot see visual content</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Subtitles className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Low Vision Users</h4>
              <p className="text-sm text-muted-foreground">May miss visual details</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Video className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">All Users</h4>
              <p className="text-sm text-muted-foreground">Benefit from enhanced understanding</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Interactive Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interactive Examples</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Bad Example */}
          <Card className="p-6 border-destructive/50">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-lg">❌ No Audio Description</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-dashed border-destructive/30">
              <div className="text-center">
                <Video className="w-16 h-16 mx-auto mb-2 text-destructive/50" />
                <p className="text-sm text-muted-foreground">Video with dialogue only</p>
                <p className="text-xs text-destructive mt-2">No description of visual content</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Problem:</strong> Visual information not described
            </p>
            <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mt-2">
              Only dialogue, no audio description track
            </code>
            <p className="text-sm mt-2">Blind users miss important visual information</p>
          </Card>

          {/* Good Example */}
          <Card className="p-6 border-green-500/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-lg">✓ With Audio Description</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg mb-4 min-h-[200px] flex items-center justify-center border-2 border-green-500/30">
              <div className="text-center">
                <Video className="w-16 h-16 mx-auto mb-2 text-green-600/50" />
                <p className="text-sm font-semibold">Video with dialogue</p>
                <p className="text-xs text-green-600 mt-2">+ Audio description track</p>
                <p className="text-xs text-green-600">Visual content narrated</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Solution:</strong> Audio description narrates visual content
            </p>
            <code className="text-xs bg-green-500/10 px-2 py-1 rounded block mt-2">
              Audio description track available
            </code>
            <p className="text-sm mt-2">Blind users understand all content</p>
          </Card>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Real-World Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">🎬 Instructional Videos</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Video shows steps without describing what's happening
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Audio description: "Instructor clicks the Settings button..."
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Users need to understand actions shown on screen.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📺 Storytelling Videos</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Scene changes and character expressions not described
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Audio description: "Sarah's face shows surprise as she opens the door..."
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Visual storytelling needs to be conveyed audibly.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📊 Data Visualizations</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Charts and graphs shown without description
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Audio description: "A bar chart shows sales increased 25% from Q1 to Q2..."
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> Data visualizations must be described.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">📝 On-Screen Text</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">❌ Bad:</p>
                <code className="text-xs bg-destructive/10 px-2 py-1 rounded block mb-2">
                  Text appears on screen but isn't read aloud
                </code>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">✓ Good:</p>
                <code className="text-xs bg-green-500/10 px-2 py-1 rounded block">
                  Audio description: "Text reads: 'Welcome to our website'..."
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Why:</strong> On-screen text must be narrated.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Code Implementation</h2>

        <Tabs defaultValue="html" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="webvtt">WebVTT</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="vue">Vue</TabsTrigger>
          </TabsList>

          <TabsContent value="html" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">HTML Implementation</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode("HTML code", "html")}
                >
                  {copiedCode === "html" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<!-- ✅ Good: Video with audio description track -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track 
    kind="descriptions" 
    src="audio-description.vtt" 
    srclang="en" 
    label="Audio Description"
    default
  >
  <track 
    kind="captions" 
    src="captions.vtt" 
    srclang="en" 
    label="English Captions"
  >
</video>

<!-- ✅ Good: Multiple audio description tracks -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track 
    kind="descriptions" 
    src="audio-desc-en.vtt" 
    srclang="en" 
    label="English Audio Description"
  >
  <track 
    kind="descriptions" 
    src="audio-desc-es.vtt" 
    srclang="es" 
    label="Spanish Audio Description"
  >
</video>

<!-- ✅ Good: Extended audio description (separate audio track) -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video-with-ad.mp4" type="video/mp4" data-kind="descriptions">
  <track 
    kind="captions" 
    src="captions.vtt" 
    srclang="en"
  >
</video>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="webvtt" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">WebVTT Format</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("WebVTT code", "webvtt")}>
                  {copiedCode === "webvtt" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`WEBVTT

00:00:00.000 --> 00:00:05.000
[Music playing]

00:00:05.000 --> 00:00:10.000
Sarah walks into the room and looks around.

00:00:10.000 --> 00:00:15.000
She notices a letter on the table and picks it up.

00:00:15.000 --> 00:00:20.000
Sarah's expression changes to surprise as she reads.

00:00:20.000 --> 00:00:25.000
The camera zooms in on the text which reads "Welcome Home".

00:00:25.000 --> 00:00:30.000
Sarah smiles and places the letter back on the table.

NOTE
Audio description should be inserted during natural pauses
in dialogue or narration, or extend the video duration.

NOTE
Describe only what is essential for understanding.
Don't describe every single visual detail.`}
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
                {`// ✅ Good: Video component with audio description
function VideoPlayer({ src, audioDescriptionSrc, captionsSrc }) {
  return (
    <video controls>
      <source src={src} type="video/mp4" />
      <track
        kind="descriptions"
        src={audioDescriptionSrc}
        srcLang="en"
        label="Audio Description"
        default
      />
      <track
        kind="captions"
        src={captionsSrc}
        srcLang="en"
        label="English Captions"
      />
    </video>
  )
}

// ✅ Good: With multiple language options
function AccessibleVideo({ video }) {
  return (
    <video controls>
      <source src={video.src} type="video/mp4" />
      {video.audioDescriptions.map(ad => (
        <track
          key={ad.lang}
          kind="descriptions"
          src={ad.src}
          srcLang={ad.lang}
          label={ad.label}
        />
      ))}
      {video.captions.map(caption => (
        <track
          key={caption.lang}
          kind="captions"
          src={caption.src}
          srcLang={caption.lang}
          label={caption.label}
        />
      ))}
    </video>
  )
}

// Usage
<VideoPlayer
  src="/videos/tutorial.mp4"
  audioDescriptionSrc="/tracks/audio-desc.vtt"
  captionsSrc="/tracks/captions.vtt"
/>`}
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="vue" className="mt-4">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Vue Implementation</h3>
                <Button variant="outline" size="sm" onClick={() => copyCode("Vue code", "vue")}>
                  {copiedCode === "vue" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`<template>
  <!-- ✅ Good: Video with audio description -->
  <video controls>
    <source :src="videoSrc" type="video/mp4" />
    <track
      kind="descriptions"
      :src="audioDescriptionSrc"
      srcLang="en"
      label="Audio Description"
      default
    />
    <track
      kind="captions"
      :src="captionsSrc"
      srcLang="en"
      label="English Captions"
    />
  </video>

  <!-- ✅ Good: With multiple tracks -->
  <video controls>
    <source :src="video.src" type="video/mp4" />
    <track
      v-for="ad in video.audioDescriptions"
      :key="ad.lang"
      kind="descriptions"
      :src="ad.src"
      :srcLang="ad.lang"
      :label="ad.label"
    />
    <track
      v-for="caption in video.captions"
      :key="caption.lang"
      kind="captions"
      :src="caption.src"
      :srcLang="caption.lang"
      :label="caption.label"
    />
  </video>
</template>

<script setup>
const videoSrc = ref('/videos/tutorial.mp4')
const audioDescriptionSrc = ref('/tracks/audio-desc.vtt')
const captionsSrc = ref('/tracks/captions.vtt')

const video = ref({
  src: '/videos/tutorial.mp4',
  audioDescriptions: [
    { lang: 'en', src: '/tracks/audio-desc-en.vtt', label: 'English Audio Description' },
    { lang: 'es', src: '/tracks/audio-desc-es.vtt', label: 'Spanish Audio Description' }
  ],
  captions: [
    { lang: 'en', src: '/tracks/captions-en.vtt', label: 'English Captions' }
  ]
})
</script>`}
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
            <h3 className="text-xl font-semibold mb-4">Manual Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Play Video:</strong> Play video and listen for audio description
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Track Selection:</strong> Verify audio description track is available
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Content Check:</strong> Verify visual content is described
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Blind User Test:</strong> Test with screen reader or eyes closed
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Automated Testing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>axe DevTools:</strong> Can detect missing audio description tracks
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>WAVE:</strong> Identifies videos without audio description
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <strong>Note:</strong> Manual review of content quality is needed
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ No audio description track</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Video only has dialogue, no description of visual content
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Provide audio description track for all prerecorded video content.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Confusing audio description with captions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only captions provided, no audio description
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Captions are for dialogue, audio description is for visual content. Both are needed.
            </p>
          </Card>

          <Card className="p-6 border-destructive/50">
            <h3 className="font-semibold mb-2">❌ Incomplete descriptions</h3>
            <code className="text-sm bg-destructive/10 px-2 py-1 rounded block mb-2">
              Only some visual content described, important details missing
            </code>
            <p className="text-sm mt-2 text-muted-foreground">
              Describe all essential visual information needed to understand the content.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Tips */}
      <Card className="p-6 bg-primary/5 border-primary/20 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
        <ul className="space-y-2">
          <li>✓ Provide audio description for all prerecorded video</li>
          <li>✓ Use WebVTT format for description tracks</li>
          <li>✓ Describe essential visual information only</li>
          <li>✓ Insert descriptions during natural pauses</li>
          <li>✓ Include on-screen text in descriptions</li>
          <li>✓ Test with screen reader or eyes closed</li>
          <li>✓ Consider extended audio description for complex visuals</li>
        </ul>
      </Card>

      {/* Related Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Success Criteria</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/criteria/1.2.1">
            <Button variant="outline">1.2.1 Audio-only and Video-only</Button>
          </Link>
          <Link href="/criteria/1.2.2">
            <Button variant="outline">1.2.2 Captions</Button>
          </Link>
          <Link href="/criteria/1.2.7">
            <Button variant="outline">1.2.7 Extended Audio Description</Button>
          </Link>
        </div>
      </section>
      </div>
    </CriteriaPageLayout>
  )
}

