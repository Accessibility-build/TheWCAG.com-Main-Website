"use client"

import { useState, useCallback, useRef } from "react"
import { Upload, File, X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatFileSize, validateFileType, validateFileSize } from "@/lib/tools/utils"

interface FileUploadProps {
  accept?: string
  allowedExtensions?: string[]
  maxSizeMB?: number
  multiple?: boolean
  onFileSelect: (files: File[]) => void
  onError?: (error: string) => void
  label?: string
  description?: string
  className?: string
}

export function FileUpload({
  accept,
  allowedExtensions = [],
  maxSizeMB = 50,
  multiple = false,
  onFileSelect,
  onError,
  label = "Upload File",
  description = "Drag and drop your file here, or click to browse",
  className = "",
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const validateFiles = useCallback(
    (files: File[]): { valid: File[]; errors: string[] } => {
      const valid: File[] = []
      const errors: string[] = []

      for (const file of files) {
        if (allowedExtensions.length > 0 && !validateFileType(file, allowedExtensions)) {
          errors.push(`${file.name}: Invalid file type. Allowed: ${allowedExtensions.join(", ")}`)
          continue
        }
        if (!validateFileSize(file, maxSizeMB)) {
          errors.push(`${file.name}: File too large. Maximum size: ${maxSizeMB}MB`)
          continue
        }
        valid.push(file)
      }

      return { valid, errors }
    },
    [allowedExtensions, maxSizeMB]
  )

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files || files.length === 0) return

      const fileArray = Array.from(files)
      const { valid, errors } = validateFiles(fileArray)

      if (errors.length > 0) {
        const errorMessage = errors.join("\n")
        setError(errorMessage)
        onError?.(errorMessage)
      } else {
        setError(null)
      }

      if (valid.length > 0) {
        const newFiles = multiple ? [...selectedFiles, ...valid] : valid
        setSelectedFiles(newFiles)
        onFileSelect(newFiles)
      }
    },
    [validateFiles, multiple, selectedFiles, onFileSelect, onError]
  )

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

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles]
  )

  const handleClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files)
      // Reset input so same file can be selected again
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    },
    [handleFiles]
  )

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = selectedFiles.filter((_, i) => i !== index)
      setSelectedFiles(newFiles)
      onFileSelect(newFiles)
      if (newFiles.length === 0) {
        setError(null)
      }
    },
    [selectedFiles, onFileSelect]
  )

  const clearAll = useCallback(() => {
    setSelectedFiles([])
    setError(null)
    onFileSelect([])
  }, [onFileSelect])

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        className="hidden"
        aria-label={label}
      />

      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleClick()
          }
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center cursor-pointer
          transition-colors duration-200 min-h-[120px] sm:min-h-[150px] flex items-center justify-center
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"}
          ${error ? "border-destructive/50" : ""}
        `}
        aria-describedby="upload-description"
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <div className={`p-3 sm:p-4 rounded-full ${isDragging ? "bg-primary/10" : "bg-muted"}`}>
            <Upload className={`h-6 w-6 sm:h-8 sm:w-8 ${isDragging ? "text-primary" : "text-muted-foreground"}`} aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-base sm:text-lg">{label}</p>
            <p id="upload-description" className="text-xs sm:text-sm text-muted-foreground">
              {description}
            </p>
            {allowedExtensions.length > 0 && (
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">
                Supported: {allowedExtensions.join(", ").toUpperCase()}
              </p>
            )}
            <p className="text-[10px] sm:text-xs text-muted-foreground">Max size: {maxSizeMB}MB</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20" role="alert">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-destructive whitespace-pre-line">{error}</p>
          </div>
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="mt-3 sm:mt-4 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-medium">
              {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected
            </p>
            {selectedFiles.length > 1 && (
              <Button variant="ghost" size="sm" onClick={clearAll} className="text-xs sm:text-sm h-8 px-2 sm:px-3">
                Clear all
              </Button>
            )}
          </div>
          <ul className="space-y-2 max-h-[200px] overflow-y-auto" aria-label="Selected files">
            {selectedFiles.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50 border gap-2"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <File className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-xs sm:text-sm truncate">{file.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                  className="shrink-0 h-8 w-8 sm:h-9 sm:w-9 min-h-[44px] min-w-[44px]"
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
