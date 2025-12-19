import { PDFDocument, rgb } from "pdf-lib"
import { jsPDF } from "jspdf"
import { readFileAsArrayBuffer, readFileAsText } from "../utils"

/**
 * Extract text from PDF
 */
export async function extractTextFromPdf(file: File): Promise<string> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdfDoc = await PDFDocument.load(arrayBuffer)
  const pages = pdfDoc.getPages()
  
  // Note: pdf-lib doesn't have built-in text extraction
  // This is a basic implementation - for full text extraction,
  // consider using pdf.js or a server-side solution
  let text = ""
  
  for (let i = 0; i < pages.length; i++) {
    text += `--- Page ${i + 1} ---\n`
    // pdf-lib doesn't support text extraction directly
    // This would need pdf.js for proper implementation
    text += "[Text extraction requires pdf.js library]\n\n"
  }
  
  return text
}

/**
 * Convert text to PDF
 */
export async function textToPdf(
  text: string,
  options: {
    fontSize?: number
    fontFamily?: string
    pageSize?: "a4" | "letter" | "legal"
    margins?: { top: number; right: number; bottom: number; left: number }
  } = {}
): Promise<Blob> {
  const {
    fontSize = 12,
    pageSize = "a4",
    margins = { top: 20, right: 20, bottom: 20, left: 20 },
  } = options

  const doc = new jsPDF({
    unit: "mm",
    format: pageSize,
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const maxWidth = pageWidth - margins.left - margins.right
  const maxHeight = pageHeight - margins.top - margins.bottom

  doc.setFontSize(fontSize)
  
  const lines = doc.splitTextToSize(text, maxWidth)
  const lineHeight = fontSize * 0.35 // Approximate line height in mm
  
  let y = margins.top
  
  for (const line of lines) {
    if (y + lineHeight > pageHeight - margins.bottom) {
      doc.addPage()
      y = margins.top
    }
    doc.text(line, margins.left, y)
    y += lineHeight
  }

  return doc.output("blob")
}

/**
 * Merge multiple PDFs
 */
export async function mergePdfs(files: File[]): Promise<Blob> {
  const mergedPdf = await PDFDocument.create()
  
  for (const file of files) {
    const arrayBuffer = await readFileAsArrayBuffer(file)
    const pdf = await PDFDocument.load(arrayBuffer)
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
    pages.forEach((page) => mergedPdf.addPage(page))
  }
  
  const pdfBytes = await mergedPdf.save()
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
}

/**
 * Split PDF by page ranges
 */
export async function splitPdf(
  file: File,
  pageRanges: Array<{ start: number; end: number }>
): Promise<Blob[]> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdf = await PDFDocument.load(arrayBuffer)
  const results: Blob[] = []
  
  for (const range of pageRanges) {
    const newPdf = await PDFDocument.create()
    const pageIndices: number[] = []
    
    for (let i = range.start - 1; i < range.end && i < pdf.getPageCount(); i++) {
      pageIndices.push(i)
    }
    
    const pages = await newPdf.copyPages(pdf, pageIndices)
    pages.forEach((page) => newPdf.addPage(page))
    
    const pdfBytes = await newPdf.save()
    results.push(new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" }))
  }
  
  return results
}

/**
 * Extract specific pages from PDF
 */
export async function extractPdfPages(file: File, pageNumbers: number[]): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdf = await PDFDocument.load(arrayBuffer)
  const newPdf = await PDFDocument.create()
  
  const validPages = pageNumbers
    .map((p) => p - 1) // Convert to 0-indexed
    .filter((p) => p >= 0 && p < pdf.getPageCount())
  
  const pages = await newPdf.copyPages(pdf, validPages)
  pages.forEach((page) => newPdf.addPage(page))
  
  const pdfBytes = await newPdf.save()
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
}

/**
 * Get PDF page count
 */
export async function getPdfPageCount(file: File): Promise<number> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdf = await PDFDocument.load(arrayBuffer)
  return pdf.getPageCount()
}

/**
 * Convert images to PDF
 */
export async function imagesToPdf(
  imageFiles: File[],
  options: {
    pageSize?: "a4" | "letter" | "legal" | "fit"
    orientation?: "portrait" | "landscape"
  } = {}
): Promise<Blob> {
  const { pageSize = "a4", orientation = "portrait" } = options
  
  const doc = new jsPDF({
    unit: "mm",
    format: pageSize === "fit" ? "a4" : pageSize,
    orientation,
  })
  
  for (let i = 0; i < imageFiles.length; i++) {
    if (i > 0) {
      doc.addPage()
    }
    
    const file = imageFiles[i]
    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.readAsDataURL(file)
    })
    
    const img = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = dataUrl
    })
    
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    
    const imgRatio = img.width / img.height
    const pageRatio = pageWidth / pageHeight
    
    let imgWidth, imgHeight
    if (imgRatio > pageRatio) {
      imgWidth = pageWidth - 20
      imgHeight = imgWidth / imgRatio
    } else {
      imgHeight = pageHeight - 20
      imgWidth = imgHeight * imgRatio
    }
    
    const x = (pageWidth - imgWidth) / 2
    const y = (pageHeight - imgHeight) / 2
    
    doc.addImage(dataUrl, "JPEG", x, y, imgWidth, imgHeight)
  }
  
  return doc.output("blob")
}

// PDF Editing Functions

export interface PDFEdit {
  type: "text" | "image" | "shape" | "annotation"
  page: number
  x: number
  y: number
  content?: string
  imageFile?: File
  shapeType?: "rectangle" | "circle" | "line"
  color?: string
  fontSize?: number
  width?: number
  height?: number
  opacity?: number
}

export interface PDFTextOptions {
  fontSize?: number
  fontFamily?: string
  color?: string
  rotation?: number
}

export interface PDFImageOptions {
  width?: number
  height?: number
  rotation?: number
  opacity?: number
}

export interface PDFAnnotationOptions {
  type: "highlight" | "underline" | "strikethrough" | "note"
  color?: string
  note?: string
}

function parseColorToRgb(color: string) {
  // Parse hex color
  if (color.startsWith("#")) {
    const hex = color.slice(1)
    const r = parseInt(hex.slice(0, 2), 16) / 255
    const g = parseInt(hex.slice(2, 4), 16) / 255
    const b = parseInt(hex.slice(4, 6), 16) / 255
    return rgb(r, g, b)
  }
  // Default to black
  return rgb(0, 0, 0)
}

/**
 * Edit PDF document
 */
export async function editPDF(
  file: File,
  edits: PDFEdit[]
): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdfDoc = await PDFDocument.load(arrayBuffer)

  for (const edit of edits) {
    const pages = pdfDoc.getPages()
    if (edit.page < 1 || edit.page > pages.length) continue
    const page = pages[edit.page - 1]
    const { width, height } = page.getSize()

    if (edit.type === "text" && edit.content) {
      page.drawText(edit.content, {
        x: edit.x,
        y: height - edit.y, // PDF coordinates are bottom-up
        size: edit.fontSize || 12,
        color: edit.color ? parseColorToRgb(edit.color) : undefined,
      })
    } else if (edit.type === "image" && edit.imageFile) {
      const imageBytes = await readFileAsArrayBuffer(edit.imageFile)
      let image
      if (edit.imageFile.type === "image/png") {
        image = await pdfDoc.embedPng(imageBytes)
      } else {
        image = await pdfDoc.embedJpg(imageBytes)
      }
      page.drawImage(image, {
        x: edit.x,
        y: height - edit.y - (edit.height || image.height),
        width: edit.width || image.width,
        height: edit.height || image.height,
        opacity: edit.opacity || 1,
      })
    } else if (edit.type === "shape") {
      if (edit.shapeType === "rectangle") {
        page.drawRectangle({
          x: edit.x,
          y: height - edit.y - (edit.height || 50),
          width: edit.width || 100,
          height: edit.height || 50,
          borderColor: edit.color ? parseColorToRgb(edit.color) : undefined,
        })
      } else if (edit.shapeType === "circle") {
        const radius = (edit.width || 50) / 2
        page.drawCircle({
          x: edit.x + radius,
          y: height - edit.y - radius,
          size: radius,
          borderColor: edit.color ? parseColorToRgb(edit.color) : undefined,
        })
      }
    }
  }

  const pdfBytes = await pdfDoc.save()
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
}

/**
 * Add text to PDF
 */
export async function addTextToPDF(
  file: File,
  text: string,
  position: { x: number; y: number; page: number },
  options: PDFTextOptions = {}
): Promise<Blob> {
  return editPDF(file, [
    {
      type: "text",
      page: position.page,
      x: position.x,
      y: position.y,
      content: text,
      fontSize: options.fontSize,
      color: options.color,
    },
  ])
}

/**
 * Add image to PDF
 */
export async function addImageToPDF(
  file: File,
  imageFile: File,
  position: { x: number; y: number; page: number },
  options: PDFImageOptions = {}
): Promise<Blob> {
  return editPDF(file, [
    {
      type: "image",
      page: position.page,
      x: position.x,
      y: position.y,
      imageFile,
      width: options.width,
      height: options.height,
      opacity: options.opacity,
    },
  ])
}

/**
 * Add annotation to PDF
 */
export async function addAnnotation(
  file: File,
  annotation: { x: number; y: number; width: number; height: number; page: number },
  options: PDFAnnotationOptions
): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdfDoc = await PDFDocument.load(arrayBuffer)
  const pages = pdfDoc.getPages()
  if (annotation.page < 1 || annotation.page > pages.length) {
    throw new Error("Invalid page number")
  }
  const page = pages[annotation.page - 1]
  const { height: pageHeight } = page.getSize()

  const color = options.color || "#FFFF00"
  const rgbColor = parseColorToRgb(color)

  if (options.type === "highlight") {
    page.drawRectangle({
      x: annotation.x,
      y: pageHeight - annotation.y - annotation.height,
      width: annotation.width,
      height: annotation.height,
      color: rgbColor,
      opacity: 0.3,
    })
  } else if (options.type === "underline") {
    page.drawLine({
      start: { x: annotation.x, y: pageHeight - annotation.y },
      end: { x: annotation.x + annotation.width, y: pageHeight - annotation.y },
      thickness: 2,
      color: rgbColor,
    })
  }

  const pdfBytes = await pdfDoc.save()
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
}

/**
 * Reorder PDF pages
 */
export async function reorderPages(
  file: File,
  newOrder: number[]
): Promise<Blob> {
  const arrayBuffer = await readFileAsArrayBuffer(file)
  const pdfDoc = await PDFDocument.load(arrayBuffer)
  const pageCount = pdfDoc.getPageCount()

  // Validate new order
  if (newOrder.length !== pageCount) {
    throw new Error("New order must contain all page numbers")
  }
  if (!newOrder.every((p) => p >= 1 && p <= pageCount)) {
    throw new Error("Invalid page numbers in new order")
  }

  const newPdf = await PDFDocument.create()
  const pages = await newPdf.copyPages(
    pdfDoc,
    newOrder.map((p) => p - 1)
  )
  pages.forEach((page) => newPdf.addPage(page))

  const pdfBytes = await newPdf.save()
  return new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
}
