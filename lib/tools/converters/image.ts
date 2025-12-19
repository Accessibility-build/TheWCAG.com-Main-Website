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
