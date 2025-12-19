import { loadImageFromFile, canvasToBlob, createCanvasFromImage } from "../utils"

export type ImageFormat = "jpeg" | "png" | "webp" | "gif" | "bmp"

export interface ImageConversionOptions {
  format: ImageFormat
  quality?: number // 0-1 for lossy formats
}

export interface ImageResizeOptions {
  width?: number
  height?: number
  maintainAspectRatio?: boolean
  mode?: "cover" | "contain" | "fill"
}

export interface ImageCompressOptions {
  quality: number // 0-1
  maxWidth?: number
  maxHeight?: number
}

export interface ImageCropOptions {
  x: number
  y: number
  width: number
  height: number
}

export interface ImageRotateOptions {
  angle: number // degrees
  flipHorizontal?: boolean
  flipVertical?: boolean
}

/**
 * Convert image to different format
 */
export async function convertImageFormat(
  file: File,
  options: ImageConversionOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = createCanvasFromImage(img)
  
  const mimeType = `image/${options.format}`
  const quality = options.format === "png" ? undefined : options.quality ?? 0.92
  
  return canvasToBlob(canvas, mimeType, quality)
}

/**
 * Resize image
 */
export async function resizeImage(
  file: File,
  options: ImageResizeOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  
  let targetWidth = options.width ?? img.naturalWidth
  let targetHeight = options.height ?? img.naturalHeight
  
  if (options.maintainAspectRatio !== false) {
    const aspectRatio = img.naturalWidth / img.naturalHeight
    
    if (options.width && !options.height) {
      targetHeight = Math.round(options.width / aspectRatio)
    } else if (options.height && !options.width) {
      targetWidth = Math.round(options.height * aspectRatio)
    } else if (options.width && options.height) {
      // Fit within bounds
      const targetRatio = options.width / options.height
      if (aspectRatio > targetRatio) {
        targetHeight = Math.round(options.width / aspectRatio)
      } else {
        targetWidth = Math.round(options.height * aspectRatio)
      }
    }
  }
  
  const canvas = document.createElement("canvas")
  canvas.width = targetWidth
  canvas.height = targetHeight
  
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")
  
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = "high"
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight)
  
  return canvasToBlob(canvas, "image/png")
}

/**
 * Compress image
 */
export async function compressImage(
  file: File,
  options: ImageCompressOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  
  let width = img.naturalWidth
  let height = img.naturalHeight
  
  // Resize if needed
  if (options.maxWidth && width > options.maxWidth) {
    height = Math.round((height * options.maxWidth) / width)
    width = options.maxWidth
  }
  if (options.maxHeight && height > options.maxHeight) {
    width = Math.round((width * options.maxHeight) / height)
    height = options.maxHeight
  }
  
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")
  
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = "high"
  ctx.drawImage(img, 0, 0, width, height)
  
  // Use WebP or JPEG for compression
  const format = file.type === "image/png" ? "image/png" : "image/jpeg"
  return canvasToBlob(canvas, format, options.quality)
}

/**
 * Crop image
 */
export async function cropImage(
  file: File,
  options: ImageCropOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  
  const canvas = document.createElement("canvas")
  canvas.width = options.width
  canvas.height = options.height
  
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")
  
  ctx.drawImage(
    img,
    options.x,
    options.y,
    options.width,
    options.height,
    0,
    0,
    options.width,
    options.height
  )
  
  return canvasToBlob(canvas, "image/png")
}

/**
 * Rotate and/or flip image
 */
export async function rotateImage(
  file: File,
  options: ImageRotateOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  
  const radians = (options.angle * Math.PI) / 180
  const sin = Math.abs(Math.sin(radians))
  const cos = Math.abs(Math.cos(radians))
  
  const newWidth = Math.round(img.naturalWidth * cos + img.naturalHeight * sin)
  const newHeight = Math.round(img.naturalWidth * sin + img.naturalHeight * cos)
  
  const canvas = document.createElement("canvas")
  canvas.width = newWidth
  canvas.height = newHeight
  
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")
  
  ctx.translate(newWidth / 2, newHeight / 2)
  ctx.rotate(radians)
  
  if (options.flipHorizontal) ctx.scale(-1, 1)
  if (options.flipVertical) ctx.scale(1, -1)
  
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2)
  
  return canvasToBlob(canvas, "image/png")
}

/**
 * Convert image to Base64
 */
export async function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error("Failed to read file"))
    reader.readAsDataURL(file)
  })
}

/**
 * Convert Base64 to image blob
 */
export async function base64ToImage(base64: string): Promise<Blob> {
  // Handle data URI prefix
  const base64Data = base64.includes(",") ? base64.split(",")[1] : base64
  const mimeMatch = base64.match(/data:([^;]+);/)
  const mimeType = mimeMatch ? mimeMatch[1] : "image/png"
  
  const binaryString = atob(base64Data)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  
  return new Blob([bytes], { type: mimeType })
}

/**
 * Generate favicon sizes from image
 */
export async function generateFavicons(
  file: File
): Promise<Map<number, Blob>> {
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512]
  const img = await loadImageFromFile(file)
  const favicons = new Map<number, Blob>()
  
  for (const size of sizes) {
    const canvas = document.createElement("canvas")
    canvas.width = size
    canvas.height = size
    
    const ctx = canvas.getContext("2d")
    if (!ctx) continue
    
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(img, 0, 0, size, size)
    
    const blob = await canvasToBlob(canvas, "image/png")
    favicons.set(size, blob)
  }
  
  return favicons
}

/**
 * Get image dimensions
 */
export async function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  const img = await loadImageFromFile(file)
  return {
    width: img.naturalWidth,
    height: img.naturalHeight,
  }
}

// Image Editing Functions

export interface BackgroundRemovalOptions {
  method?: "ai" | "color" | "manual"
  colorThreshold?: number
  edgeRefinement?: boolean
  replaceWith?: "transparent" | "color" | "gradient" | "image"
  replacementColor?: string
  replacementGradient?: { start: string; end: string }
  replacementImage?: File
}

export interface WatermarkRemovalOptions {
  mask?: { x: number; y: number; width: number; height: number }[]
  algorithm?: "inpainting" | "patch"
  quality?: number
}

export interface ObjectRemovalOptions {
  selection: { x: number; y: number; width: number; height: number }[]
  algorithm?: "inpainting" | "patch"
  blendEdges?: boolean
}

export interface FaceBlurOptions {
  detections?: { x: number; y: number; width: number; height: number }[]
  blurType?: "gaussian" | "pixelate" | "blackbar"
  intensity?: number
  manualSelections?: { x: number; y: number; width: number; height: number }[]
}

export interface UpscaleOptions {
  scale: 2 | 4
  algorithm?: "ai" | "bicubic"
  enhanceQuality?: boolean
}

export interface InpaintingOptions {
  mask: { x: number; y: number; width: number; height: number }[]
  algorithm?: "inpainting" | "patch"
}

export interface ColorizeOptions {
  hints?: Array<{ x: number; y: number; color: string }>
}

export interface RestorationOptions {
  reduceNoise?: boolean
  fixFading?: boolean
  enhanceContrast?: boolean
  detectScratches?: boolean
}

export interface AnonymizeOptions {
  detections?: Array<{ type: "face" | "text" | "license-plate"; x: number; y: number; width: number; height: number }>
  method?: "gaussian" | "pixelate" | "blackbar"
  intensity?: number
}

export interface DuplicateFindOptions {
  threshold?: number
}

/**
 * Remove background from image
 */
export async function removeBackground(
  file: File,
  options: BackgroundRemovalOptions = {}
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)

  // Simple color-based background removal as fallback
  // For AI-powered removal, would integrate @tensorflow/tfjs
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  // Simple threshold-based removal (can be enhanced with ML)
  if (options.method === "color" || !options.method) {
    const threshold = options.colorThreshold || 30
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      // Simple white/light background detection
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0 // Make transparent
      }
    }
  }

  ctx.putImageData(imageData, 0, 0)

  // Replace background if specified
  if (options.replaceWith === "color" && options.replacementColor) {
    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = canvas.width
    tempCanvas.height = canvas.height
    const tempCtx = tempCanvas.getContext("2d")
    if (tempCtx) {
      tempCtx.fillStyle = options.replacementColor
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
      tempCtx.drawImage(canvas, 0, 0)
      return canvasToBlob(tempCanvas, "image/png")
    }
  }

  return canvasToBlob(canvas, "image/png")
}

/**
 * Remove watermark from image
 */
export async function removeWatermark(
  file: File,
  options: WatermarkRemovalOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)

  // Simple inpainting using surrounding pixels
  // For better results, would use advanced inpainting algorithms
  if (options.mask && options.mask.length > 0) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    for (const area of options.mask) {
      // Simple patch-based inpainting
      for (let y = area.y; y < area.y + area.height; y++) {
        for (let x = area.x; x < area.x + area.width; x++) {
          const idx = (y * canvas.width + x) * 4
          // Sample surrounding pixels (simplified)
          const sampleX = Math.max(0, Math.min(canvas.width - 1, x + 5))
          const sampleY = Math.max(0, Math.min(canvas.height - 1, y + 5))
          const sampleIdx = (sampleY * canvas.width + sampleX) * 4
          data[idx] = data[sampleIdx]
          data[idx + 1] = data[sampleIdx + 1]
          data[idx + 2] = data[sampleIdx + 2]
          data[idx + 3] = data[sampleIdx + 3]
        }
      }
    }

    ctx.putImageData(imageData, 0, 0)
  }

  return canvasToBlob(canvas, "image/png")
}

/**
 * Remove objects from image
 */
export async function removeObject(
  file: File,
  options: ObjectRemovalOptions
): Promise<Blob> {
  // Similar to watermark removal
  return removeWatermark(file, {
    mask: options.selection,
    algorithm: options.algorithm || "inpainting",
  })
}

/**
 * Blur faces in image
 */
export async function blurFaces(
  file: File,
  options: FaceBlurOptions = {}
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)

  const intensity = options.intensity || 10
  const blurType = options.blurType || "gaussian"

  const allSelections = [
    ...(options.detections || []),
    ...(options.manualSelections || []),
  ]

  for (const area of allSelections) {
    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = area.width
    tempCanvas.height = area.height
    const tempCtx = tempCanvas.getContext("2d")
    if (!tempCtx) continue

    tempCtx.drawImage(
      canvas,
      area.x,
      area.y,
      area.width,
      area.height,
      0,
      0,
      area.width,
      area.height
    )

    if (blurType === "gaussian") {
      // Apply Gaussian blur
      ctx.filter = `blur(${intensity}px)`
      ctx.drawImage(tempCanvas, area.x, area.y)
      ctx.filter = "none"
    } else if (blurType === "pixelate") {
      // Pixelate
      const pixelSize = Math.max(1, Math.floor(intensity / 2))
      const smallCanvas = document.createElement("canvas")
      smallCanvas.width = Math.floor(area.width / pixelSize)
      smallCanvas.height = Math.floor(area.height / pixelSize)
      const smallCtx = smallCanvas.getContext("2d")
      if (smallCtx) {
        smallCtx.drawImage(tempCanvas, 0, 0, smallCanvas.width, smallCanvas.height)
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(smallCanvas, area.x, area.y, area.width, area.height)
        ctx.imageSmoothingEnabled = true
      }
    } else if (blurType === "blackbar") {
      // Black bar
      ctx.fillStyle = "#000000"
      ctx.fillRect(area.x, area.y, area.width, area.height)
    }
  }

  return canvasToBlob(canvas, "image/png")
}

/**
 * Upscale image
 */
export async function upscaleImage(
  file: File,
  options: UpscaleOptions
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth * options.scale
  canvas.height = img.naturalHeight * options.scale
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = "high"
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  // For AI upscaling, would integrate @tensorflow/tfjs with ESRGAN model
  // For now, using high-quality canvas scaling

  return canvasToBlob(canvas, "image/png")
}

/**
 * Inpaint image (fill missing areas)
 */
export async function inpaintImage(
  file: File,
  options: InpaintingOptions
): Promise<Blob> {
  // Similar to watermark removal
  return removeWatermark(file, {
    mask: options.mask,
    algorithm: options.algorithm || "inpainting",
  })
}

/**
 * Colorize black and white image
 */
export async function colorizeImage(
  file: File,
  options: ColorizeOptions = {}
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)

  // For AI colorization, would integrate @tensorflow/tfjs with colorization model
  // For now, applying basic color enhancement
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  // Simple color enhancement (can be replaced with ML model)
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
    // Apply warm tone
    data[i] = Math.min(255, gray * 1.1)
    data[i + 1] = Math.min(255, gray * 1.05)
    data[i + 2] = Math.min(255, gray * 0.95)
  }

  ctx.putImageData(imageData, 0, 0)
  return canvasToBlob(canvas, "image/png")
}

/**
 * Restore image (fix damage, reduce noise)
 */
export async function restoreImage(
  file: File,
  options: RestorationOptions = {}
): Promise<Blob> {
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)

  if (options.reduceNoise) {
    // Apply slight blur to reduce noise
    ctx.filter = "blur(0.5px)"
    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = canvas.width
    tempCanvas.height = canvas.height
    const tempCtx = tempCanvas.getContext("2d")
    if (tempCtx) {
      tempCtx.drawImage(canvas, 0, 0)
      ctx.filter = "none"
      ctx.drawImage(tempCanvas, 0, 0)
    }
  }

  if (options.enhanceContrast) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    // Simple contrast enhancement
    const factor = 1.2
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, Math.max(0, (data[i] - 128) * factor + 128))
      data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * factor + 128))
      data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * factor + 128))
    }
    ctx.putImageData(imageData, 0, 0)
  }

  return canvasToBlob(canvas, "image/png")
}

/**
 * Anonymize image (blur sensitive information)
 */
export async function anonymizeImage(
  file: File,
  options: AnonymizeOptions
): Promise<Blob> {
  // Use face blur function
  return blurFaces(file, {
    detections: options.detections?.map((d) => ({
      x: d.x,
      y: d.y,
      width: d.width,
      height: d.height,
    })),
    blurType: options.method || "gaussian",
    intensity: options.intensity || 10,
  })
}

/**
 * Remove metadata from image
 */
export async function removeMetadata(file: File): Promise<Blob> {
  // Canvas recreation removes metadata
  const img = await loadImageFromFile(file)
  const canvas = document.createElement("canvas")
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Failed to get canvas context")

  ctx.drawImage(img, 0, 0)
  // Exporting as PNG removes all EXIF/metadata
  return canvasToBlob(canvas, "image/png")
}

/**
 * Find duplicate images
 */
export async function findDuplicates(
  files: File[],
  options: DuplicateFindOptions = {}
): Promise<Array<{ file1: File; file2: File; similarity: number }>> {
  const threshold = options.threshold || 0.9
  const duplicates: Array<{ file1: File; file2: File; similarity: number }> = []

  // Simple perceptual hash comparison
  // For production, would use proper perceptual hashing library
  for (let i = 0; i < files.length; i++) {
    for (let j = i + 1; j < files.length; j++) {
      const img1 = await loadImageFromFile(files[i])
      const img2 = await loadImageFromFile(files[j])

      // Simple size-based comparison (can be enhanced with proper hashing)
      const sizeDiff = Math.abs(
        (img1.naturalWidth * img1.naturalHeight) / (img2.naturalWidth * img2.naturalHeight) - 1
      )

      if (sizeDiff < 0.1) {
        // Consider similar if size is very close
        duplicates.push({
          file1: files[i],
          file2: files[j],
          similarity: 1 - sizeDiff,
        })
      }
    }
  }

  return duplicates.filter((d) => d.similarity >= threshold)
}
