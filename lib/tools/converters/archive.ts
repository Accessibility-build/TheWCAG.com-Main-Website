import JSZip from "jszip"
import pako from "pako"
import { readFileAsArrayBuffer } from "../utils"

export interface ZipEntry {
  name: string
  path: string
  size: number
  compressedSize: number
  isDirectory: boolean
  date: Date
}

/**
 * Extract ZIP file contents
 */
export async function extractZip(file: File): Promise<{
  entries: ZipEntry[]
  getFileContent: (path: string) => Promise<Blob>
}> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const zip = await JSZip.loadAsync(arrayBuffer)
  
  const entries: ZipEntry[] = []
  
  zip.forEach((relativePath, zipEntry) => {
    entries.push({
      name: zipEntry.name.split("/").pop() || zipEntry.name,
      path: relativePath,
      size: 0, // Size will be determined when extracting
      compressedSize: 0,
      isDirectory: zipEntry.dir,
      date: zipEntry.date,
    })
  })
  
  const getFileContent = async (path: string): Promise<Blob> => {
    const file = zip.file(path)
    if (!file) throw new Error(`File not found: ${path}`)
    const content = await file.async("blob")
    return content
  }
  
  return { entries, getFileContent }
}

/**
 * Create ZIP from files
 */
export async function createZip(files: File[]): Promise<Blob> {
  const zip = new JSZip()
  
  for (const file of files) {
    const content = await readFileAsArrayBuffer(file)
    zip.file(file.name, content)
  }
  
  return zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  })
}

/**
 * Add files to existing ZIP
 */
export async function addToZip(zipFile: File, newFiles: File[]): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(zipFile)
  const zip = await JSZip.loadAsync(arrayBuffer)
  
  for (const file of newFiles) {
    const content = await readFileAsArrayBuffer(file)
    zip.file(file.name, content)
  }
  
  return zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  })
}

/**
 * Extract all files from ZIP as downloadable blobs
 */
export async function extractAllFromZip(file: File): Promise<Map<string, Blob>> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const zip = await JSZip.loadAsync(arrayBuffer)
  const files = new Map<string, Blob>()
  
  const promises: Promise<void>[] = []
  
  zip.forEach((relativePath, zipEntry) => {
    if (!zipEntry.dir) {
      promises.push(
        zipEntry.async("blob").then((content) => {
          files.set(relativePath, content)
        })
      )
    }
  })
  
  await Promise.all(promises)
  return files
}

/**
 * GZIP compress data
 */
export function gzipCompress(data: string | Uint8Array): Uint8Array {
  const input = typeof data === "string" ? new TextEncoder().encode(data) : data
  return pako.gzip(input)
}

/**
 * GZIP decompress data
 */
export function gzipDecompress(data: Uint8Array): Uint8Array {
  return pako.ungzip(data)
}

/**
 * GZIP compress file
 */
export async function gzipCompressFile(file: File): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const compressed = pako.gzip(new Uint8Array(arrayBuffer))
  return new Blob([compressed], { type: "application/gzip" })
}

/**
 * GZIP decompress file
 */
export async function gzipDecompressFile(file: File): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const decompressed = pako.ungzip(new Uint8Array(arrayBuffer))
  // Try to determine original type from filename
  const originalName = file.name.replace(/\.gz$/, "")
  const extension = originalName.split(".").pop()?.toLowerCase()
  
  let mimeType = "application/octet-stream"
  const mimeTypes: Record<string, string> = {
    txt: "text/plain",
    json: "application/json",
    xml: "application/xml",
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    csv: "text/csv",
  }
  if (extension && mimeTypes[extension]) {
    mimeType = mimeTypes[extension]
  }
  
  return new Blob([decompressed], { type: mimeType })
}

/**
 * Get compression ratio
 */
export function getCompressionRatio(originalSize: number, compressedSize: number): number {
  return Math.round((1 - compressedSize / originalSize) * 100)
}
