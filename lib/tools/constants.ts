// Tool categories and their metadata
export const TOOL_CATEGORIES = {
  image: {
    name: "Image Tools",
    description: "Convert, resize, compress, and manipulate images",
    icon: "Image",
  },
  document: {
    name: "Document Tools",
    description: "Convert and process PDF, Word, and other documents",
    icon: "FileText",
  },
  text: {
    name: "Text & Code Tools",
    description: "Convert between text formats and code",
    icon: "Code",
  },
  data: {
    name: "Data Format Tools",
    description: "Convert between data formats like JSON, CSV, XML",
    icon: "Database",
  },
  developer: {
    name: "Developer Tools",
    description: "Minifiers, formatters, and code utilities",
    icon: "Terminal",
  },
  archive: {
    name: "Archive Tools",
    description: "Compress and extract ZIP, GZIP files",
    icon: "Archive",
  },
  utility: {
    name: "Utility Tools",
    description: "Hash generators, UUID, passwords, and more",
    icon: "Wrench",
  },
} as const

export type ToolCategory = keyof typeof TOOL_CATEGORIES

export interface Tool {
  slug: string
  name: string
  description: string
  shortDescription: string
  category: ToolCategory
  keywords: string[]
  icon: string
  features: string[]
  relatedTools: string[]
  faq: Array<{ question: string; answer: string }>
}

// All tools configuration
export const TOOLS: Tool[] = [
  // Image Tools
  {
    slug: "image-format-converter",
    name: "Image Format Converter",
    description: "Convert images between formats like JPG, PNG, WebP, GIF, BMP, and more. Free online image converter with instant processing.",
    shortDescription: "Convert images between JPG, PNG, WebP, GIF, and more formats",
    category: "image",
    keywords: ["convert image format", "jpg to png", "webp converter", "image converter online", "png to jpg"],
    icon: "ImageIcon",
    features: ["JPG ↔ PNG ↔ WebP ↔ GIF ↔ BMP conversion", "Batch conversion support", "Quality settings", "Instant download"],
    relatedTools: ["image-compressor", "image-resizer", "image-to-base64"],
    faq: [
      { question: "What image formats can I convert?", answer: "You can convert between JPG, PNG, WebP, GIF, and BMP formats." },
      { question: "Is there a file size limit?", answer: "Client-side processing supports files up to 50MB." },
      { question: "Is my image data secure?", answer: "Yes, all processing happens in your browser. No files are uploaded to our servers." },
    ],
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    description: "Resize images online by dimensions or percentage. Maintain aspect ratio and process multiple images at once.",
    shortDescription: "Resize images by dimensions or percentage with aspect ratio control",
    category: "image",
    keywords: ["resize image online", "image size reducer", "compress image size", "scale image"],
    icon: "Maximize",
    features: ["Resize by pixels or percentage", "Maintain aspect ratio", "Batch resize", "Preview before download"],
    relatedTools: ["image-compressor", "image-cropper", "image-format-converter"],
    faq: [
      { question: "Can I maintain the aspect ratio?", answer: "Yes, you can lock the aspect ratio to prevent distortion." },
      { question: "What's the maximum image size?", answer: "You can resize images up to 50MB in size." },
    ],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress and optimize images to reduce file size while maintaining quality. Perfect for web optimization.",
    shortDescription: "Reduce image file size while maintaining quality",
    category: "image",
    keywords: ["compress image", "reduce image file size", "image optimizer", "compress jpg", "compress png"],
    icon: "Minimize",
    features: ["Quality slider control", "Before/after size comparison", "Multiple format support", "Batch compression"],
    relatedTools: ["image-resizer", "image-format-converter", "image-to-pdf"],
    faq: [
      { question: "How much can I compress an image?", answer: "Depending on the image, you can reduce file size by 50-90% with minimal quality loss." },
      { question: "Which format compresses best?", answer: "WebP generally offers the best compression, followed by JPG for photos and PNG for graphics." },
    ],
  },
  {
    slug: "image-cropper",
    name: "Image Cropper",
    description: "Crop images online with free-form selection or preset aspect ratios. Perfect for social media and profile pictures.",
    shortDescription: "Crop images with custom or preset aspect ratios",
    category: "image",
    keywords: ["crop image online", "image crop tool", "photo cropper", "image cutter"],
    icon: "Crop",
    features: ["Free-form crop", "Preset aspect ratios (1:1, 16:9, 4:3)", "Rotate and flip", "Zoom and pan"],
    relatedTools: ["image-resizer", "image-rotator", "image-format-converter"],
    faq: [
      { question: "Can I crop to specific dimensions?", answer: "Yes, you can enter exact pixel dimensions or use preset ratios." },
      { question: "Can I undo my crop?", answer: "Yes, the original image is preserved until you download the cropped version." },
    ],
  },
  {
    slug: "image-rotator",
    name: "Image Rotator",
    description: "Rotate and flip images online. Fix orientation issues or create creative effects with 90° increments or custom angles.",
    shortDescription: "Rotate images by degrees and flip horizontally or vertically",
    category: "image",
    keywords: ["rotate image", "flip image", "image orientation fixer", "rotate photo"],
    icon: "RotateCw",
    features: ["90° increments", "Custom angle rotation", "Flip horizontal/vertical", "EXIF orientation fix"],
    relatedTools: ["image-cropper", "image-resizer", "image-format-converter"],
    faq: [
      { question: "Can I rotate by any angle?", answer: "Yes, you can rotate by 90° increments or enter a custom angle." },
      { question: "Does rotation affect quality?", answer: "90° rotations are lossless. Custom angles may slightly affect quality." },
    ],
  },
  {
    slug: "image-to-base64",
    name: "Image to Base64",
    description: "Convert images to Base64 encoded strings for embedding in HTML, CSS, or JavaScript. Get data URI format instantly.",
    shortDescription: "Convert images to Base64 data URI format",
    category: "image",
    keywords: ["image to base64", "base64 image encoder", "convert image to data uri", "image base64"],
    icon: "Binary",
    features: ["Instant Base64 conversion", "Data URI format", "Copy to clipboard", "Multiple image support"],
    relatedTools: ["base64-to-image", "image-format-converter", "image-compressor"],
    faq: [
      { question: "What is Base64 encoding?", answer: "Base64 converts binary data to ASCII text, allowing images to be embedded directly in code." },
      { question: "When should I use Base64 images?", answer: "Use for small images, icons, or when you need to embed images in CSS/HTML without separate files." },
    ],
  },
  {
    slug: "base64-to-image",
    name: "Base64 to Image",
    description: "Decode Base64 strings back to downloadable images. Preview and save images from data URIs.",
    shortDescription: "Decode Base64 strings to downloadable images",
    category: "image",
    keywords: ["base64 to image", "base64 decoder", "data uri to image", "decode base64"],
    icon: "Image",
    features: ["Instant decode", "Image preview", "Download as PNG/JPG", "Auto-detect format"],
    relatedTools: ["image-to-base64", "image-format-converter"],
    faq: [
      { question: "What formats are supported?", answer: "Any Base64 encoded image can be decoded, including PNG, JPG, GIF, and WebP." },
      { question: "Can I decode partial Base64?", answer: "The tool validates the input and will show an error for invalid Base64 strings." },
    ],
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    description: "Convert images to PDF documents. Combine multiple images into a single PDF with page size and orientation options.",
    shortDescription: "Convert single or multiple images to PDF documents",
    category: "image",
    keywords: ["image to pdf converter", "jpg to pdf", "convert photos to pdf", "png to pdf"],
    icon: "FileImage",
    features: ["Single/multiple images", "Page size options (A4, Letter)", "Orientation control", "Image positioning"],
    relatedTools: ["pdf-to-image", "image-format-converter", "pdf-merger"],
    faq: [
      { question: "Can I add multiple images?", answer: "Yes, you can add multiple images and each will be placed on a separate page." },
      { question: "What page sizes are available?", answer: "Common sizes like A4, Letter, Legal, and custom dimensions are supported." },
    ],
  },
  {
    slug: "pdf-to-image",
    name: "PDF to Image",
    description: "Extract pages from PDF documents as high-quality images. Choose format, resolution, and specific pages to convert.",
    shortDescription: "Extract PDF pages as JPG, PNG, or WebP images",
    category: "image",
    keywords: ["pdf to image", "pdf to jpg", "extract images from pdf", "pdf to png"],
    icon: "FileOutput",
    features: ["Extract all pages", "Choose specific pages", "Format selection", "DPI/quality options"],
    relatedTools: ["image-to-pdf", "pdf-to-text", "pdf-splitter"],
    faq: [
      { question: "What image formats can I export to?", answer: "You can export to JPG, PNG, or WebP formats." },
      { question: "Can I choose specific pages?", answer: "Yes, you can select individual pages or page ranges to convert." },
    ],
  },
  {
    slug: "favicon-generator",
    name: "Favicon Generator",
    description: "Generate favicons in all required sizes from a single image. Download a complete favicon package for your website.",
    shortDescription: "Create favicon packages with all required sizes",
    category: "image",
    keywords: ["favicon generator", "create favicon", "ico generator", "favicon maker"],
    icon: "Globe",
    features: ["Multiple sizes (16x16 to 512x512)", "ICO format generation", "Web manifest included", "Apple touch icons"],
    relatedTools: ["image-resizer", "image-format-converter", "image-cropper"],
    faq: [
      { question: "What sizes are generated?", answer: "16x16, 32x32, 48x48, 64x64, 128x128, 180x180, 192x192, and 512x512 pixels." },
      { question: "What files are included?", answer: "favicon.ico, multiple PNG sizes, apple-touch-icon, and a web manifest file." },
    ],
  },

  // Document Tools
  {
    slug: "pdf-to-text",
    name: "PDF to Text",
    description: "Extract text content from PDF documents. Copy to clipboard or download as a text file.",
    shortDescription: "Extract all text content from PDF files",
    category: "document",
    keywords: ["pdf to text", "extract text from pdf", "pdf text extractor", "copy text from pdf"],
    icon: "FileText",
    features: ["Extract all text", "Preserve formatting", "Copy to clipboard", "Download as TXT"],
    relatedTools: ["text-to-pdf", "pdf-to-image", "pdf-splitter"],
    faq: [
      { question: "Can it extract text from scanned PDFs?", answer: "No, this tool extracts embedded text only. Scanned images require OCR." },
      { question: "Is formatting preserved?", answer: "Basic paragraph structure is preserved, but complex layouts may vary." },
    ],
  },
  {
    slug: "text-to-pdf",
    name: "Text to PDF",
    description: "Convert plain text to PDF documents. Customize font, size, margins, and page layout.",
    shortDescription: "Create PDF documents from plain text",
    category: "document",
    keywords: ["text to pdf", "txt to pdf converter", "create pdf from text", "text pdf"],
    icon: "FilePlus",
    features: ["Font customization", "Page size options", "Margin control", "Header/footer support"],
    relatedTools: ["pdf-to-text", "markdown-to-html", "image-to-pdf"],
    faq: [
      { question: "Can I customize the font?", answer: "Yes, you can choose from several fonts and adjust the size." },
      { question: "Are custom margins supported?", answer: "Yes, you can set custom margins for all sides of the page." },
    ],
  },
  {
    slug: "pdf-merger",
    name: "PDF Merger",
    description: "Combine multiple PDF files into a single document. Drag and drop to reorder pages before merging.",
    shortDescription: "Merge multiple PDFs into a single document",
    category: "document",
    keywords: ["merge pdf files", "combine pdf", "pdf merger online", "join pdf"],
    icon: "Layers",
    features: ["Merge unlimited PDFs", "Drag & drop reorder", "Page preview", "Instant processing"],
    relatedTools: ["pdf-splitter", "pdf-compressor", "image-to-pdf"],
    faq: [
      { question: "Is there a limit on files?", answer: "No limit on number of files, but total size should be under 100MB for best performance." },
      { question: "Can I reorder the PDFs?", answer: "Yes, drag and drop to change the order before merging." },
    ],
  },
  {
    slug: "pdf-splitter",
    name: "PDF Splitter",
    description: "Split PDF documents by extracting specific pages or page ranges. Create multiple smaller PDFs from one file.",
    shortDescription: "Extract specific pages from PDF documents",
    category: "document",
    keywords: ["split pdf", "extract pages from pdf", "pdf page extractor", "pdf separator"],
    icon: "Scissors",
    features: ["Extract specific pages", "Page range selection", "Split into multiple files", "Preview pages"],
    relatedTools: ["pdf-merger", "pdf-to-image", "pdf-compressor"],
    faq: [
      { question: "Can I extract non-consecutive pages?", answer: "Yes, you can select individual pages like 1, 3, 5-7, 10." },
      { question: "Can I split into equal parts?", answer: "Yes, you can split by page count or into specific number of documents." },
    ],
  },
  {
    slug: "pdf-compressor",
    name: "PDF Compressor",
    description: "Reduce PDF file size while maintaining readability. Perfect for email attachments and web uploads.",
    shortDescription: "Compress PDF files to reduce size",
    category: "document",
    keywords: ["compress pdf", "reduce pdf file size", "pdf optimizer", "shrink pdf"],
    icon: "Minimize2",
    features: ["Quality presets", "Before/after comparison", "Preserve text quality", "Batch compression"],
    relatedTools: ["pdf-merger", "pdf-splitter", "image-compressor"],
    faq: [
      { question: "How much can I compress?", answer: "Typically 30-70% reduction depending on the PDF content (images compress more)." },
      { question: "Will quality be affected?", answer: "Text remains sharp. Images may have slight quality reduction based on settings." },
    ],
  },
  // Text & Code Tools
  {
    slug: "markdown-to-html",
    name: "Markdown to HTML",
    description: "Convert Markdown text to clean HTML code. Live preview and syntax highlighting included.",
    shortDescription: "Convert Markdown syntax to HTML code",
    category: "text",
    keywords: ["markdown to html", "md to html converter", "markdown converter", "markdown html"],
    icon: "FileCode",
    features: ["Live preview", "Syntax highlighting", "Copy HTML", "Download file"],
    relatedTools: ["html-to-markdown", "html-to-text", "json-formatter"],
    faq: [
      { question: "What Markdown features are supported?", answer: "Full CommonMark spec plus tables, code blocks, and task lists." },
      { question: "Is the output clean HTML?", answer: "Yes, semantic HTML5 elements are used throughout." },
    ],
  },
  {
    slug: "html-to-markdown",
    name: "HTML to Markdown",
    description: "Convert HTML code to clean Markdown format. Perfect for migrating content to Markdown-based systems.",
    shortDescription: "Convert HTML to Markdown format",
    category: "text",
    keywords: ["html to markdown", "convert html to md", "html markdown converter", "html md"],
    icon: "FileDown",
    features: ["Clean conversion", "Preserve links and images", "Table support", "Code block handling"],
    relatedTools: ["markdown-to-html", "html-to-text", "text-to-html"],
    faq: [
      { question: "Are tables converted?", answer: "Yes, HTML tables are converted to Markdown table syntax." },
      { question: "What about inline styles?", answer: "Inline styles are stripped, keeping only the content structure." },
    ],
  },
  {
    slug: "html-to-text",
    name: "HTML to Text",
    description: "Strip HTML tags and extract plain text content. Preserve or remove formatting as needed.",
    shortDescription: "Extract plain text from HTML code",
    category: "text",
    keywords: ["html to text", "strip html tags", "html text extractor", "remove html"],
    icon: "FileText",
    features: ["Strip all tags", "Preserve line breaks", "Handle entities", "Link extraction option"],
    relatedTools: ["text-to-html", "html-to-markdown", "markdown-to-html"],
    faq: [
      { question: "Are line breaks preserved?", answer: "Yes, paragraph and line break elements are converted to newlines." },
      { question: "What about special characters?", answer: "HTML entities are converted to their corresponding characters." },
    ],
  },
  {
    slug: "text-to-html",
    name: "Text to HTML",
    description: "Convert plain text to HTML with proper paragraph tags, line breaks, and escaped entities.",
    shortDescription: "Convert plain text to HTML paragraphs",
    category: "text",
    keywords: ["text to html", "plain text to html", "text html converter", "txt to html"],
    icon: "Code",
    features: ["Auto paragraph tags", "Line break handling", "Entity escaping", "List detection"],
    relatedTools: ["html-to-text", "markdown-to-html", "html-to-markdown"],
    faq: [
      { question: "How are paragraphs handled?", answer: "Empty lines create new paragraphs, single line breaks become <br> tags." },
      { question: "Are special characters escaped?", answer: "Yes, <, >, &, and quotes are properly escaped." },
    ],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON data. Minify or pretty-print with customizable indentation.",
    shortDescription: "Format, validate, and beautify JSON data",
    category: "text",
    keywords: ["json formatter", "json beautifier", "format json online", "json validator"],
    icon: "Braces",
    features: ["Pretty print", "Minify", "Syntax validation", "Error highlighting"],
    relatedTools: ["json-to-csv", "json-to-yaml", "xml-to-json"],
    faq: [
      { question: "Does it validate JSON?", answer: "Yes, invalid JSON will show an error with the location of the problem." },
      { question: "Can I customize indentation?", answer: "Yes, choose between 2, 4 spaces or tabs." },
    ],
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV",
    description: "Convert JSON arrays and objects to CSV format. Handle nested data with flattening options.",
    shortDescription: "Convert JSON data to CSV format",
    category: "text",
    keywords: ["json to csv", "convert json to csv", "json csv converter", "json excel"],
    icon: "Table",
    features: ["Array/object support", "Nested data flattening", "Custom delimiter", "Header row"],
    relatedTools: ["csv-to-json", "json-formatter", "json-to-yaml"],
    faq: [
      { question: "How is nested data handled?", answer: "Nested objects are flattened using dot notation (parent.child)." },
      { question: "Can I change the delimiter?", answer: "Yes, choose comma, semicolon, or tab as delimiter." },
    ],
  },
  {
    slug: "csv-to-json",
    name: "CSV to JSON",
    description: "Convert CSV data to JSON format. Auto-detect headers and data types.",
    shortDescription: "Convert CSV data to JSON arrays or objects",
    category: "text",
    keywords: ["csv to json", "convert csv to json", "csv json converter", "csv parser"],
    icon: "Braces",
    features: ["Auto header detection", "Type inference", "Preview results", "Download JSON"],
    relatedTools: ["json-to-csv", "json-formatter", "xml-to-json"],
    faq: [
      { question: "Are data types preserved?", answer: "Numbers and booleans are automatically detected and converted." },
      { question: "What about quoted fields?", answer: "Standard CSV quoting rules are supported." },
    ],
  },
  {
    slug: "xml-to-json",
    name: "XML to JSON",
    description: "Convert XML documents to JSON format. Handle attributes, namespaces, and nested elements.",
    shortDescription: "Convert XML documents to JSON format",
    category: "text",
    keywords: ["xml to json", "convert xml to json", "xml json converter", "xml parser"],
    icon: "FileCode2",
    features: ["Attribute handling", "Namespace support", "Pretty output", "Validation"],
    relatedTools: ["json-formatter", "json-to-yaml", "json-to-csv"],
    faq: [
      { question: "How are attributes handled?", answer: "Attributes are converted to properties with an @ prefix." },
      { question: "Is CDATA supported?", answer: "Yes, CDATA sections are extracted as text content." },
    ],
  },

  // Data Format Tools
  {
    slug: "yaml-to-json",
    name: "YAML to JSON",
    description: "Convert YAML configuration files to JSON format. Validate syntax and format output.",
    shortDescription: "Convert YAML to JSON format",
    category: "data",
    keywords: ["yaml to json", "convert yaml to json", "yaml json converter", "yml to json"],
    icon: "FileJson",
    features: ["Syntax validation", "Pretty output", "Multi-document support", "Error highlighting"],
    relatedTools: ["json-to-yaml", "json-formatter", "xml-to-json"],
    faq: [
      { question: "Are comments preserved?", answer: "No, JSON doesn't support comments so they are stripped." },
      { question: "Multi-document YAML?", answer: "Each document is converted separately." },
    ],
  },
  {
    slug: "json-to-yaml",
    name: "JSON to YAML",
    description: "Convert JSON data to YAML format. Create readable configuration files.",
    shortDescription: "Convert JSON to YAML format",
    category: "data",
    keywords: ["json to yaml", "convert json to yaml", "json yaml converter", "json to yml"],
    icon: "FileText",
    features: ["Clean output", "Indentation control", "Flow/block style", "Large file support"],
    relatedTools: ["yaml-to-json", "json-formatter", "json-to-csv"],
    faq: [
      { question: "What YAML style is used?", answer: "Block style by default for readability, with flow style option." },
      { question: "Are types preserved?", answer: "Yes, numbers, booleans, and nulls are properly typed." },
    ],
  },
  {
    slug: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    description: "Encode or decode URLs and query strings. Handle special characters and Unicode safely.",
    shortDescription: "Encode and decode URLs and query strings",
    category: "data",
    keywords: ["url encoder", "url decoder", "url encode decode", "percent encoding", "urlencode"],
    icon: "Link",
    features: ["Full URL encoding", "Component encoding", "Unicode support", "Batch processing"],
    relatedTools: ["base64-encoder-decoder", "html-to-text", "json-formatter"],
    faq: [
      { question: "What's the difference between full and component?", answer: "Component encoding preserves URL structure characters like / and ?." },
      { question: "Is Unicode supported?", answer: "Yes, all Unicode characters are properly encoded." },
    ],
  },
  {
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder/Decoder",
    description: "Encode text to Base64 or decode Base64 to plain text. Support for UTF-8 and binary data.",
    shortDescription: "Encode and decode Base64 text",
    category: "data",
    keywords: ["base64 encoder", "base64 decoder", "base64 encode decode", "base64 converter"],
    icon: "Binary",
    features: ["Text encoding", "UTF-8 support", "URL-safe variant", "File encoding"],
    relatedTools: ["image-to-base64", "base64-to-image", "url-encoder-decoder"],
    faq: [
      { question: "Is UTF-8 supported?", answer: "Yes, full UTF-8 encoding and decoding is supported." },
      { question: "What about URL-safe Base64?", answer: "Option available to use URL-safe characters (- and _ instead of + and /)." },
    ],
  },

  // Developer Tools
  {
    slug: "html-minifier",
    name: "HTML Minifier",
    description: "Minify HTML code by removing whitespace, comments, and optional tags. Reduce file size for faster loading.",
    shortDescription: "Minify HTML to reduce file size",
    category: "developer",
    keywords: ["html minifier", "minify html", "compress html", "html compressor"],
    icon: "FileCode",
    features: ["Remove whitespace", "Strip comments", "Minify inline CSS/JS", "Safe minification"],
    relatedTools: ["css-minifier", "javascript-minifier", "html-to-text"],
    faq: [
      { question: "Is it safe?", answer: "Yes, only non-essential whitespace and comments are removed." },
      { question: "Are inline scripts minified?", answer: "Optional setting to minify inline CSS and JavaScript." },
    ],
  },
  {
    slug: "css-minifier",
    name: "CSS Minifier",
    description: "Minify CSS code to reduce file size. Remove comments, whitespace, and optimize selectors.",
    shortDescription: "Minify CSS to reduce file size",
    category: "developer",
    keywords: ["css minifier", "minify css", "compress css", "css compressor"],
    icon: "Paintbrush",
    features: ["Remove whitespace", "Strip comments", "Merge rules", "Shorthand optimization"],
    relatedTools: ["html-minifier", "javascript-minifier", "color-converter"],
    faq: [
      { question: "How much size reduction?", answer: "Typically 20-50% reduction depending on original formatting." },
      { question: "Are source maps supported?", answer: "Basic minification without source maps for simplicity." },
    ],
  },
  {
    slug: "javascript-minifier",
    name: "JavaScript Minifier",
    description: "Minify JavaScript code to reduce file size. Remove whitespace, comments, and shorten variable names.",
    shortDescription: "Minify JavaScript to reduce file size",
    category: "developer",
    keywords: ["js minifier", "minify javascript", "compress js", "javascript compressor"],
    icon: "FileCode2",
    features: ["Remove whitespace", "Strip comments", "Variable shortening", "Dead code removal"],
    relatedTools: ["html-minifier", "css-minifier", "json-formatter"],
    faq: [
      { question: "Is the output safe?", answer: "Yes, only safe transformations are applied." },
      { question: "ES6+ support?", answer: "Yes, modern JavaScript syntax is fully supported." },
    ],
  },
  {
    slug: "sql-formatter",
    name: "SQL Formatter",
    description: "Format and beautify SQL queries. Support for multiple SQL dialects with customizable styling.",
    shortDescription: "Format and beautify SQL queries",
    category: "developer",
    keywords: ["sql formatter", "format sql query", "sql beautifier", "sql pretty print"],
    icon: "Database",
    features: ["Multiple dialects", "Keyword casing", "Indentation control", "Comment preservation"],
    relatedTools: ["json-formatter", "html-minifier", "css-minifier"],
    faq: [
      { question: "Which SQL dialects?", answer: "Standard SQL, MySQL, PostgreSQL, SQL Server, and Oracle." },
      { question: "Can I uppercase keywords?", answer: "Yes, choose uppercase, lowercase, or preserve original." },
    ],
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, HSL, and CMYK formats. Visual color picker included.",
    shortDescription: "Convert between HEX, RGB, HSL, and CMYK colors",
    category: "developer",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "color code converter", "hsl converter"],
    icon: "Palette",
    features: ["HEX ↔ RGB ↔ HSL ↔ CMYK", "Visual picker", "Copy all formats", "Color preview"],
    relatedTools: ["css-minifier", "html-minifier"],
    faq: [
      { question: "Is alpha channel supported?", answer: "Yes, RGBA and HSLA formats are supported." },
      { question: "What about named colors?", answer: "CSS named colors are recognized and can be converted." },
    ],
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes for URLs, text, email, WiFi, and more. Download as PNG or SVG.",
    shortDescription: "Generate QR codes for URLs, text, and more",
    category: "developer",
    keywords: ["qr code generator", "create qr code", "qr code maker", "qr generator"],
    icon: "QrCode",
    features: ["Multiple content types", "Size options", "Error correction", "PNG/SVG download"],
    relatedTools: ["url-encoder-decoder", "base64-encoder-decoder"],
    faq: [
      { question: "What can I encode?", answer: "URLs, plain text, email, phone, WiFi credentials, and more." },
      { question: "What's error correction?", answer: "Higher levels allow the QR code to be read even if partially damaged." },
    ],
  },

  // Archive Tools
  {
    slug: "zip-extractor",
    name: "ZIP Extractor",
    description: "Extract files from ZIP archives in your browser. Preview contents and download individual files.",
    shortDescription: "Extract and preview ZIP archive contents",
    category: "archive",
    keywords: ["extract zip", "unzip online", "zip file extractor", "zip opener"],
    icon: "FolderOpen",
    features: ["Preview contents", "Extract all/selected", "Download individual files", "Large file support"],
    relatedTools: ["file-to-zip", "gzip-decompressor", "pdf-splitter"],
    faq: [
      { question: "Is there a size limit?", answer: "Files up to 100MB are supported for best performance." },
      { question: "Are passwords supported?", answer: "Password-protected ZIPs are not currently supported." },
    ],
  },
  {
    slug: "file-to-zip",
    name: "File to ZIP",
    description: "Create ZIP archives from multiple files. Compress and bundle files for easy sharing.",
    shortDescription: "Create ZIP archives from multiple files",
    category: "archive",
    keywords: ["create zip file", "zip files online", "compress to zip", "zip creator"],
    icon: "FolderArchive",
    features: ["Multiple files", "Folder structure", "Compression levels", "Instant download"],
    relatedTools: ["zip-extractor", "gzip-compressor", "pdf-merger"],
    faq: [
      { question: "Can I add folders?", answer: "Files are added to a flat structure in the ZIP." },
      { question: "What compression is used?", answer: "Standard DEFLATE compression for best compatibility." },
    ],
  },
  {
    slug: "gzip-compressor",
    name: "GZIP Compressor",
    description: "Compress text or files using GZIP compression. Reduce size for storage or transfer.",
    shortDescription: "Compress data using GZIP compression",
    category: "archive",
    keywords: ["gzip compress", "compress text gzip", "gzip compressor", "gzip online"],
    icon: "Minimize2",
    features: ["Text compression", "File compression", "Compression ratio display", "Instant download"],
    relatedTools: ["gzip-decompressor", "file-to-zip", "pdf-compressor"],
    faq: [
      { question: "What's the compression ratio?", answer: "Text typically compresses to 20-30% of original size." },
      { question: "Can I compress binary files?", answer: "Yes, any file type can be compressed." },
    ],
  },
  {
    slug: "gzip-decompressor",
    name: "GZIP Decompressor",
    description: "Decompress GZIP compressed files and text. View and download the original content.",
    shortDescription: "Decompress GZIP compressed data",
    category: "archive",
    keywords: ["gzip decompress", "unzip gzip", "gzip extractor", "gunzip online"],
    icon: "Maximize2",
    features: ["File decompression", "Text preview", "Original size display", "Download original"],
    relatedTools: ["gzip-compressor", "zip-extractor", "base64-encoder-decoder"],
    faq: [
      { question: "What files are supported?", answer: "Any .gz or .gzip file can be decompressed." },
      { question: "Is the original filename preserved?", answer: "If stored in the GZIP header, yes." },
    ],
  },

  // Utility Tools
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256, and SHA512 hashes from text or files. Verify data integrity.",
    shortDescription: "Generate cryptographic hashes from text or files",
    category: "utility",
    keywords: ["hash generator", "md5 hash", "sha256 generator", "hash calculator", "checksum"],
    icon: "Hash",
    features: ["MD5, SHA1, SHA256, SHA512", "Text and file hashing", "Copy to clipboard", "Compare hashes"],
    relatedTools: ["uuid-generator", "password-generator", "base64-encoder-decoder"],
    faq: [
      { question: "Which hash should I use?", answer: "SHA256 is recommended for most purposes. MD5 is legacy only." },
      { question: "Can I hash files?", answer: "Yes, upload any file to generate its hash." },
    ],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate unique UUIDs (Universally Unique Identifiers). Support for v4 random and v1 time-based UUIDs.",
    shortDescription: "Generate random or time-based UUIDs",
    category: "utility",
    keywords: ["uuid generator", "generate uuid", "unique id generator", "guid generator"],
    icon: "Fingerprint",
    features: ["UUID v4 (random)", "UUID v1 (time-based)", "Bulk generation", "Copy to clipboard"],
    relatedTools: ["hash-generator", "password-generator", "qr-code-generator"],
    faq: [
      { question: "What's the difference between v1 and v4?", answer: "v4 is random, v1 includes timestamp. v4 is more common." },
      { question: "Are they truly unique?", answer: "Collision probability is astronomically low (1 in 2^122 for v4)." },
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder Lorem Ipsum text. Customize by words, sentences, or paragraphs.",
    shortDescription: "Generate placeholder text for designs",
    category: "utility",
    keywords: ["lorem ipsum generator", "placeholder text", "dummy text generator", "lipsum"],
    icon: "Type",
    features: ["Words/sentences/paragraphs", "Custom length", "Copy to clipboard", "HTML output option"],
    relatedTools: ["text-to-html", "text-to-pdf", "markdown-to-html"],
    faq: [
      { question: "What is Lorem Ipsum?", answer: "Placeholder text used in design to simulate real content." },
      { question: "Can I get it as HTML?", answer: "Yes, option to wrap in paragraph tags." },
    ],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate secure random passwords. Customize length, characters, and strength requirements.",
    shortDescription: "Generate secure random passwords",
    category: "utility",
    keywords: ["password generator", "random password", "secure password generator", "strong password"],
    icon: "Key",
    features: ["Custom length", "Character sets", "Strength indicator", "Bulk generation"],
    relatedTools: ["hash-generator", "uuid-generator", "qr-code-generator"],
    faq: [
      { question: "How secure are the passwords?", answer: "Generated using cryptographic randomness for maximum security." },
      { question: "What characters are included?", answer: "Choose from uppercase, lowercase, numbers, and symbols." },
    ],
  },
]

// Helper functions
export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((tool) => tool.slug === slug)
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((tool) => tool.category === category)
}

export function getAllCategories(): ToolCategory[] {
  return Object.keys(TOOL_CATEGORIES) as ToolCategory[]
}

export function getRelatedTools(slug: string): Tool[] {
  const tool = getToolBySlug(slug)
  if (!tool) return []
  return tool.relatedTools
    .map((relatedSlug) => getToolBySlug(relatedSlug))
    .filter((t): t is Tool => t !== undefined)
}
