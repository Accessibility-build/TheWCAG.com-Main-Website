"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, ImageIcon, X } from "lucide-react"

/**
 * Browser-only color blindness simulator.
 *
 * Approach:
 *   - User picks a local image (no network upload).
 *   - We draw it into an offscreen canvas, read pixels with getImageData,
 *     and apply per-deficiency 3×3 RGB transformation matrices in linear-RGB
 *     space. Achromatopsia uses standard luminance weights.
 *   - Each preview canvas renders the transformed pixels.
 */

type SimulationKey =
  | "normal"
  | "protanopia"
  | "protanomaly"
  | "deuteranopia"
  | "deuteranomaly"
  | "tritanopia"
  | "tritanomaly"
  | "achromatopsia"
  | "achromatomaly"

interface Simulation {
  key: SimulationKey
  name: string
  prevalence: string
  description: string
  /** Row-major 3×3 matrix applied in linear sRGB. */
  matrix: number[][]
}

// Sources: Machado/Oliveira/Fernandes 2009 + standard luminance for monochromacy.
const SIMULATIONS: Simulation[] = [
  {
    key: "normal",
    name: "Typical vision",
    prevalence: "Reference",
    description: "No simulation applied — the original image as it appears to typical color vision.",
    matrix: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
  },
  {
    key: "protanopia",
    name: "Protanopia",
    prevalence: "≈1 % of men",
    description: "Red-blind: no functional L cones; reds appear darker and confuse with greens.",
    matrix: [
      [0.567, 0.433, 0],
      [0.558, 0.442, 0],
      [0, 0.242, 0.758],
    ],
  },
  {
    key: "protanomaly",
    name: "Protanomaly",
    prevalence: "≈1 % of men",
    description: "Reduced sensitivity to red light; mild form of red-green confusion.",
    matrix: [
      [0.817, 0.183, 0],
      [0.333, 0.667, 0],
      [0, 0.125, 0.875],
    ],
  },
  {
    key: "deuteranopia",
    name: "Deuteranopia",
    prevalence: "≈1 % of men",
    description: "Green-blind: no functional M cones. Most common form of dichromacy.",
    matrix: [
      [0.625, 0.375, 0],
      [0.7, 0.3, 0],
      [0, 0.3, 0.7],
    ],
  },
  {
    key: "deuteranomaly",
    name: "Deuteranomaly",
    prevalence: "≈5 % of men · the most common form of CVD",
    description: "Reduced green sensitivity. Makes greens, reds, browns, and oranges harder to distinguish.",
    matrix: [
      [0.8, 0.2, 0],
      [0.258, 0.742, 0],
      [0, 0.142, 0.858],
    ],
  },
  {
    key: "tritanopia",
    name: "Tritanopia",
    prevalence: "≈0.001 % (very rare)",
    description: "Blue-blind: no functional S cones. Blues confuse with greens, yellows fade.",
    matrix: [
      [0.95, 0.05, 0],
      [0, 0.433, 0.567],
      [0, 0.475, 0.525],
    ],
  },
  {
    key: "tritanomaly",
    name: "Tritanomaly",
    prevalence: "≈0.01 %",
    description: "Reduced blue sensitivity. Mild form of blue-yellow confusion.",
    matrix: [
      [0.967, 0.033, 0],
      [0, 0.733, 0.267],
      [0, 0.183, 0.817],
    ],
  },
  {
    key: "achromatopsia",
    name: "Achromatopsia",
    prevalence: "≈0.003 % (very rare)",
    description: "Total color blindness. Vision is monochromatic, similar to a black-and-white photo.",
    matrix: [
      [0.299, 0.587, 0.114],
      [0.299, 0.587, 0.114],
      [0.299, 0.587, 0.114],
    ],
  },
  {
    key: "achromatomaly",
    name: "Achromatomaly",
    prevalence: "Rare",
    description: "Reduced color saturation across the spectrum.",
    matrix: [
      [0.618, 0.32, 0.062],
      [0.163, 0.775, 0.062],
      [0.163, 0.32, 0.516],
    ],
  },
]

function applyMatrix(
  source: ImageData,
  matrix: number[][],
  destCanvas: HTMLCanvasElement
): void {
  destCanvas.width = source.width
  destCanvas.height = source.height
  const ctx = destCanvas.getContext("2d")
  if (!ctx) return
  const out = ctx.createImageData(source.width, source.height)
  const src = source.data
  const dst = out.data
  const [m0, m1, m2] = matrix
  for (let i = 0; i < src.length; i += 4) {
    const r = src[i]
    const g = src[i + 1]
    const b = src[i + 2]
    dst[i] = clamp(m0[0] * r + m0[1] * g + m0[2] * b)
    dst[i + 1] = clamp(m1[0] * r + m1[1] * g + m1[2] * b)
    dst[i + 2] = clamp(m2[0] * r + m2[1] * g + m2[2] * b)
    dst[i + 3] = src[i + 3]
  }
  ctx.putImageData(out, 0, 0)
}

function clamp(value: number): number {
  if (value < 0) return 0
  if (value > 255) return 255
  return value | 0
}

const MAX_DIMENSION = 1280

export function ColorBlindnessSimulator() {
  const [imageData, setImageData] = React.useState<ImageData | null>(null)
  const [imageName, setImageName] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const dropRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const handleFile = React.useCallback((file: File) => {
    setError(null)
    if (!file.type.startsWith("image/")) {
      setError("That doesn't look like an image — try a PNG, JPG, GIF, or WebP file.")
      return
    }
    const reader = new FileReader()
    reader.onerror = () => setError("Couldn't read the file.")
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string
      const img = new Image()
      img.onload = () => {
        const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height))
        const w = Math.max(1, Math.round(img.width * scale))
        const h = Math.max(1, Math.round(img.height * scale))
        const canvas = document.createElement("canvas")
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          setError("Your browser refused to give us a 2D canvas context.")
          return
        }
        ctx.drawImage(img, 0, 0, w, h)
        try {
          const data = ctx.getImageData(0, 0, w, h)
          setImageData(data)
          setImageName(file.name)
        } catch (err) {
          setError(err instanceof Error ? err.message : "Couldn't read pixels from this image.")
        }
      }
      img.onerror = () => setError("That file isn't a supported image.")
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  }, [])

  const onPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const reset = () => {
    setImageData(null)
    setImageName(null)
    setError(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div>
      <div
        ref={dropRef}
        onDragEnter={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          setIsDragging(false)
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className={`rounded-2xl border-2 border-dashed p-8 sm:p-10 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30"
        }`}
      >
        <ImageIcon className="w-10 h-10 mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
        <p className="text-base sm:text-lg font-semibold mb-1">Drop an image here</p>
        <p className="text-sm text-muted-foreground mb-5">
          PNG, JPG, GIF, or WebP. Stays in your browser — nothing is uploaded.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => fileInputRef.current?.click()} className="gap-2">
            <Upload className="w-4 h-4" aria-hidden="true" />
            Choose image
          </Button>
          {imageData && (
            <Button variant="ghost" onClick={reset} className="gap-2">
              <X className="w-4 h-4" aria-hidden="true" />
              Clear
            </Button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={onPickerChange}
          aria-label="Choose an image to simulate"
        />
        {imageName && (
          <p className="mt-4 text-xs text-muted-foreground">
            Loaded: <span className="font-mono">{imageName}</span>
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>

      {imageData && (
        <section
          aria-label="Color blindness previews"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SIMULATIONS.map((sim) => (
            <SimulationTile key={sim.key} simulation={sim} source={imageData} />
          ))}
        </section>
      )}
    </div>
  )
}

function SimulationTile({
  simulation,
  source,
}: {
  simulation: Simulation
  source: ImageData
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    applyMatrix(source, simulation.matrix, canvas)
  }, [source, simulation])

  return (
    <Card className="border-2 overflow-hidden">
      <CardContent className="p-3 sm:p-4">
        <div className="aspect-video w-full rounded-md overflow-hidden bg-muted/40 mb-3">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain"
            aria-label={`${simulation.name} simulation`}
          />
        </div>
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="font-semibold text-sm sm:text-base">{simulation.name}</h3>
          <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
            {simulation.prevalence}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{simulation.description}</p>
      </CardContent>
    </Card>
  )
}
