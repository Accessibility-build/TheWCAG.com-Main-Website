"use client"

import { useCallback, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Upload, 
  FolderOpen, 
  Search, 
  Trash2, 
  FileText,
  X,
  HardDrive
} from "lucide-react"
import { cn } from "@/lib/utils"
import { 
  Document, 
  isMarkdownFile, 
  parseFile, 
  formatFileSize,
  formatDate,
  getStorageInfo
} from "@/lib/tools/document-viewer"

interface DocumentSidebarProps {
  documents: Document[]
  selectedDocumentId: string | null
  searchQuery: string
  onSearchChange: (query: string) => void
  onSelectDocument: (id: string) => void
  onAddDocuments: (docs: Document[]) => void
  onRemoveDocument: (id: string) => void
  onClearAll: () => void
}

export function DocumentSidebar({
  documents,
  selectedDocumentId,
  searchQuery,
  onSearchChange,
  onSelectDocument,
  onAddDocuments,
  onRemoveDocument,
  onClearAll,
}: DocumentSidebarProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const folderInputRef = useRef<HTMLInputElement>(null)

  const storageInfo = getStorageInfo()

  const processFiles = useCallback(async (files: FileList | File[]) => {
    setIsProcessing(true)
    const newDocs: Document[] = []

    const fileArray = Array.from(files)
    
    for (const file of fileArray) {
      if (isMarkdownFile(file)) {
        try {
          // Get relative path from webkitRelativePath or just use filename
          const path = (file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name
          const doc = await parseFile(file, path)
          newDocs.push(doc)
        } catch (error) {
          console.error(`Failed to parse ${file.name}:`, error)
        }
      }
    }

    if (newDocs.length > 0) {
      onAddDocuments(newDocs)
    }
    
    setIsProcessing(false)
  }, [onAddDocuments])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const items = e.dataTransfer.items
    const files: File[] = []

    // Handle folder drops
    const traverseFileTree = async (item: FileSystemEntry): Promise<File[]> => {
      return new Promise((resolve) => {
        if (item.isFile) {
          (item as FileSystemFileEntry).file((file) => {
            // Add webkitRelativePath equivalent
            Object.defineProperty(file, 'webkitRelativePath', {
              value: item.fullPath.slice(1), // Remove leading slash
              writable: false
            })
            resolve([file])
          })
        } else if (item.isDirectory) {
          const dirReader = (item as FileSystemDirectoryEntry).createReader()
          dirReader.readEntries(async (entries) => {
            const subFiles: File[] = []
            for (const entry of entries) {
              const entryFiles = await traverseFileTree(entry)
              subFiles.push(...entryFiles)
            }
            resolve(subFiles)
          })
        } else {
          resolve([])
        }
      })
    }

    if (items) {
      for (const item of Array.from(items)) {
        const entry = item.webkitGetAsEntry()
        if (entry) {
          const entryFiles = await traverseFileTree(entry)
          files.push(...entryFiles)
        }
      }
    }

    if (files.length > 0) {
      await processFiles(files)
    } else if (e.dataTransfer.files.length > 0) {
      await processFiles(e.dataTransfer.files)
    }
  }, [processFiles])

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await processFiles(e.target.files)
      e.target.value = "" // Reset input
    }
  }, [processFiles])

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Upload Area */}
      <div
        className={cn(
          "p-3 border-b transition-colors",
          isDragging && "bg-primary/10 border-primary"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-4 text-center transition-colors",
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25",
            isProcessing && "opacity-50 pointer-events-none"
          )}
        >
          <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-xs text-muted-foreground mb-3">
            {isProcessing ? "Processing..." : "Drag & drop markdown files or folders"}
          </p>
          <div className="flex gap-2 justify-center">
            <Button
              size="sm"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className="text-xs"
            >
              <FileText className="h-3 w-3 mr-1" />
              Files
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => folderInputRef.current?.click()}
              disabled={isProcessing}
              className="text-xs"
            >
              <FolderOpen className="h-3 w-3 mr-1" />
              Folder
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".md,.markdown,.txt"
            multiple
            onChange={handleFileSelect}
          />
          <input
            ref={folderInputRef}
            type="file"
            className="hidden"
            /* @ts-expect-error - webkitdirectory is a valid attribute */
            webkitdirectory=""
            onChange={handleFileSelect}
          />
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 h-8 text-sm"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6"
              onClick={() => onSearchChange("")}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Document List */}
      <div className="flex-1 overflow-auto">
        {documents.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground text-sm">
            <FileText className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p>No documents yet</p>
            <p className="text-xs mt-1">Upload markdown files to get started</p>
          </div>
        ) : (
          <div className="divide-y">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={cn(
                  "group p-3 cursor-pointer hover:bg-muted/50 transition-colors",
                  selectedDocumentId === doc.id && "bg-primary/10 hover:bg-primary/15"
                )}
                onClick={() => onSelectDocument(doc.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onSelectDocument(doc.id)
                  }
                }}
              >
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{doc.name}</p>
                    {doc.path !== doc.name && (
                      <p className="text-xs text-muted-foreground truncate">{doc.path}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {doc.wordCount.toLocaleString()} words
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemoveDocument(doc.id)
                    }}
                    aria-label={`Remove ${doc.name}`}
                  >
                    <Trash2 className="h-3 w-3 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer with storage info and clear button */}
      {documents.length > 0 && (
        <div className="p-3 border-t bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-1.5">
              <HardDrive className="h-3 w-3" />
              <span>
                {formatFileSize(storageInfo.used)} / {formatFileSize(storageInfo.max)}
              </span>
            </div>
            <span>{documents.length} document{documents.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5 mb-2">
            <div
              className={cn(
                "h-1.5 rounded-full transition-all",
                storageInfo.percentage > 80 ? "bg-destructive" : "bg-primary"
              )}
              style={{ width: `${Math.min(storageInfo.percentage, 100)}%` }}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs text-destructive hover:text-destructive"
            onClick={onClearAll}
          >
            <Trash2 className="h-3 w-3 mr-1.5" />
            Clear All Documents
          </Button>
        </div>
      )}
    </div>
  )
}

