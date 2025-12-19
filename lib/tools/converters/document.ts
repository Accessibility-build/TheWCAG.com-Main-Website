import { PDFDocument } from "pdf-lib"
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
