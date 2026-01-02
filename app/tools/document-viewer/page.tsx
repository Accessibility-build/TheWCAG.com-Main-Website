"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { 
  DocumentSidebar, 
  MarkdownContent, 
  TableOfContents 
} from "@/components/tools/document-viewer"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { getToolBySlug } from "@/lib/tools/constants"
import { 
  Document, 
  loadDocuments, 
  addDocument, 
  removeDocument as removeDocumentFromStorage,
  clearAllDocuments,
  searchDocuments,
} from "@/lib/tools/document-viewer"
import { 
  generateToolStructuredData, 
  generateToolFAQStructuredData, 
  generateHowToStructuredData, 
  getDefaultToolSteps 
} from "@/lib/tools/metadata"
import { PanelLeft, PanelRight, X, Maximize2, Minimize2, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const tool = getToolBySlug("document-viewer")!

export default function DocumentViewerPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [tocOpen, setTocOpen] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Load documents from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedDocs = loadDocuments()
    setDocuments(savedDocs)
    if (savedDocs.length > 0) {
      setSelectedDocumentId(savedDocs[0].id)
    }
  }, [])

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen])

  // Filter documents based on search query
  const filteredDocuments = useMemo(() => {
    return searchDocuments(documents, searchQuery)
  }, [documents, searchQuery])

  // Get the currently selected document
  const selectedDocument = useMemo(() => {
    return documents.find(d => d.id === selectedDocumentId) || null
  }, [documents, selectedDocumentId])

  // Handle adding new documents
  const handleAddDocuments = useCallback((newDocs: Document[]) => {
    setError(null)
    
    // Add each document to storage
    for (const doc of newDocs) {
      const result = addDocument(doc)
      if (!result.success) {
        setError(result.error || "Failed to save documents")
        return
      }
    }
    
    // Reload from storage to get updated list
    const updatedDocs = loadDocuments()
    setDocuments(updatedDocs)
    
    // Select the first new document
    if (newDocs.length > 0) {
      setSelectedDocumentId(newDocs[0].id)
    }
  }, [])

  // Handle removing a document
  const handleRemoveDocument = useCallback((id: string) => {
    const result = removeDocumentFromStorage(id)
    if (result.success) {
      const updatedDocs = loadDocuments()
      setDocuments(updatedDocs)
      
      // If the removed document was selected, select another one
      if (selectedDocumentId === id) {
        setSelectedDocumentId(updatedDocs.length > 0 ? updatedDocs[0].id : null)
      }
    } else {
      setError(result.error || "Failed to remove document")
    }
  }, [selectedDocumentId])

  // Handle clearing all documents
  const handleClearAll = useCallback(() => {
    if (window.confirm("Are you sure you want to remove all documents? This cannot be undone.")) {
      const result = clearAllDocuments()
      if (result.success) {
        setDocuments([])
        setSelectedDocumentId(null)
        setSearchQuery("")
      } else {
        setError(result.error || "Failed to clear documents")
      }
    }
  }, [])

  const structuredData = generateToolStructuredData(tool)
  const faqData = generateToolFAQStructuredData(tool)
  const howToData = generateHowToStructuredData(tool, getDefaultToolSteps(tool))

  // Responsive breakpoint check
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  // Fullscreen view
  if (isFullscreen && selectedDocument) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col">
        {/* Fullscreen header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium text-sm truncate max-w-[200px] sm:max-w-none">
              {selectedDocument.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {selectedDocument.headings.length > 0 && (
              <Button
                variant={tocOpen ? "default" : "outline"}
                size="sm"
                onClick={() => setTocOpen(!tocOpen)}
                className="text-xs hidden sm:flex"
              >
                <PanelRight className="h-4 w-4 mr-1" />
                Contents
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(false)}
              className="text-xs"
            >
              <Minimize2 className="h-4 w-4 mr-1" />
              Exit
            </Button>
          </div>
        </div>

        {/* Fullscreen content */}
        <div className="flex-1 flex overflow-hidden">
          <div className={cn(
            "flex-1 overflow-auto",
            tocOpen && selectedDocument.headings.length > 0 && "lg:mr-64"
          )}>
            <div className="max-w-4xl mx-auto">
              <MarkdownContent document={selectedDocument} isFullscreen />
            </div>
          </div>
          
          {/* Floating TOC */}
          {tocOpen && selectedDocument.headings.length > 0 && (
            <div className="hidden lg:block fixed right-0 top-[57px] bottom-0 w-64 border-l bg-background/95 backdrop-blur-sm overflow-auto">
              <TableOfContents headings={selectedDocument.headings} />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex items-center justify-between">
                <p className="text-sm text-destructive">{error}</p>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setError(null)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Main viewer area */}
            <div className="border rounded-lg overflow-hidden bg-background shadow-sm" style={{ height: "calc(100vh - 400px)", minHeight: "500px" }}>
              {mounted && (
                <>
                  {/* Toolbar */}
                  <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/30">
                    <div className="flex items-center gap-2">
                      {/* Mobile toggle buttons */}
                      <div className="lg:hidden flex items-center gap-2">
                        <Button
                          variant={sidebarOpen ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className="text-xs"
                        >
                          <PanelLeft className="h-4 w-4 mr-1" />
                          Documents
                        </Button>
                        {selectedDocument && selectedDocument.headings.length > 0 && (
                          <Button
                            variant={tocOpen ? "default" : "outline"}
                            size="sm"
                            onClick={() => setTocOpen(!tocOpen)}
                            className="text-xs"
                          >
                            <PanelRight className="h-4 w-4 mr-1" />
                            Contents
                          </Button>
                        )}
                      </div>
                      {/* Document count indicator for desktop */}
                      <div className="hidden lg:flex items-center gap-1.5 text-xs text-muted-foreground px-2">
                        <FileText className="h-3.5 w-3.5" />
                        <span>{documents.length} document{documents.length !== 1 ? "s" : ""}</span>
                      </div>
                    </div>
                    
                    {/* Fullscreen button */}
                    {selectedDocument && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsFullscreen(true)}
                        className="text-xs"
                      >
                        <Maximize2 className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Full Page</span>
                      </Button>
                    )}
                  </div>

                  {isDesktop ? (
                    // Desktop: Resizable panels
                    <ResizablePanelGroup direction="horizontal" className="h-[calc(100%-41px)]">
                      <ResizablePanel 
                        defaultSize={22} 
                        minSize={15} 
                        maxSize={35}
                        collapsible
                        collapsedSize={0}
                      >
                        <DocumentSidebar
                          documents={filteredDocuments}
                          selectedDocumentId={selectedDocumentId}
                          searchQuery={searchQuery}
                          onSearchChange={setSearchQuery}
                          onSelectDocument={setSelectedDocumentId}
                          onAddDocuments={handleAddDocuments}
                          onRemoveDocument={handleRemoveDocument}
                          onClearAll={handleClearAll}
                        />
                      </ResizablePanel>
                      <ResizableHandle withHandle />
                      <ResizablePanel defaultSize={58} minSize={30}>
                        <div className="h-full overflow-auto">
                          <MarkdownContent document={selectedDocument} />
                        </div>
                      </ResizablePanel>
                      {selectedDocument && selectedDocument.headings.length > 0 && (
                        <>
                          <ResizableHandle withHandle />
                          <ResizablePanel 
                            defaultSize={20} 
                            minSize={12} 
                            maxSize={30}
                            collapsible
                            collapsedSize={0}
                          >
                            <div className="h-full overflow-auto border-l">
                              <TableOfContents headings={selectedDocument.headings} />
                            </div>
                          </ResizablePanel>
                        </>
                      )}
                    </ResizablePanelGroup>
                  ) : (
                    // Mobile: Conditional panels
                    <div className="h-[calc(100%-41px)] flex">
                      {sidebarOpen && (
                        <div className={cn(
                          "border-r overflow-auto",
                          selectedDocumentId ? "w-64" : "w-full"
                        )}>
                          <DocumentSidebar
                            documents={filteredDocuments}
                            selectedDocumentId={selectedDocumentId}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            onSelectDocument={(id) => {
                              setSelectedDocumentId(id)
                              setSidebarOpen(false) // Close sidebar on mobile after selection
                            }}
                            onAddDocuments={handleAddDocuments}
                            onRemoveDocument={handleRemoveDocument}
                            onClearAll={handleClearAll}
                          />
                        </div>
                      )}
                      {(!sidebarOpen || selectedDocumentId) && (
                        <div className="flex-1 flex">
                          <div className="flex-1 overflow-auto">
                            <MarkdownContent document={selectedDocument} />
                          </div>
                          {tocOpen && selectedDocument && selectedDocument.headings.length > 0 && (
                            <div className="w-48 border-l overflow-auto hidden sm:block">
                              <TableOfContents headings={selectedDocument.headings} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

