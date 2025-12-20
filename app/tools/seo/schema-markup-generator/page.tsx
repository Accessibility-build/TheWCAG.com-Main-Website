"use client"

import { useState, useCallback, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { ToolHeader } from "@/components/tools/tool-header"
import { ToolFooter } from "@/components/tools/tool-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, RefreshCw, Plus, Trash2, FileText, Building, Package, HelpCircle, Navigation, Globe } from "lucide-react"
import { getToolBySlug } from "@/lib/tools/constants"
import { copyToClipboard } from "@/lib/tools/utils"
import { generateToolStructuredData, generateToolFAQStructuredData, generateHowToStructuredData, getDefaultToolSteps } from "@/lib/tools/metadata"
import {
  SCHEMA_TYPES,
  generateJsonLd,
  generateArticleSchema,
  generateOrganizationSchema,
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  type SchemaType,
  type ArticleSchema,
  type OrganizationSchema,
  type ProductSchema,
  type FAQSchema,
  type BreadcrumbSchema,
  type WebSiteSchema,
} from "@/lib/tools/seo/schema"

const tool = getToolBySlug("schema-markup-generator")!

const schemaIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Article: FileText,
  Organization: Building,
  Product: Package,
  FAQPage: HelpCircle,
  BreadcrumbList: Navigation,
  WebSite: Globe,
}

export default function SchemaMarkupGeneratorPage() {
  const [selectedType, setSelectedType] = useState<SchemaType>("Article")
  const [copied, setCopied] = useState(false)

  // Article schema state
  const [articleData, setArticleData] = useState<ArticleSchema>({
    headline: "",
    description: "",
    image: "",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    authorName: "",
    authorUrl: "",
    publisherName: "",
    publisherLogo: "",
  })

  // Organization schema state
  const [orgData, setOrgData] = useState<OrganizationSchema>({
    name: "",
    url: "",
    logo: "",
    description: "",
    email: "",
    phone: "",
    sameAs: [],
  })
  const [newSocialUrl, setNewSocialUrl] = useState("")

  // Product schema state
  const [productData, setProductData] = useState<ProductSchema>({
    name: "",
    description: "",
    image: "",
    sku: "",
    brand: "",
    price: "",
    priceCurrency: "USD",
    availability: "InStock",
  })

  // FAQ schema state
  const [faqData, setFaqData] = useState<FAQSchema>({
    questions: [{ question: "", answer: "" }],
  })

  // Breadcrumb schema state
  const [breadcrumbData, setBreadcrumbData] = useState<BreadcrumbSchema>({
    items: [{ name: "Home", url: "" }],
  })

  // WebSite schema state
  const [websiteData, setWebsiteData] = useState<WebSiteSchema>({
    name: "",
    url: "",
    description: "",
    searchUrl: "",
    searchQueryInput: "required name=search_term_string",
  })

  const result = useMemo(() => {
    try {
      let schema: Record<string, unknown>

      switch (selectedType) {
        case "Article":
          if (!articleData.headline) return null
          schema = generateArticleSchema(articleData)
          break
        case "Organization":
          if (!orgData.name || !orgData.url) return null
          schema = generateOrganizationSchema(orgData)
          break
        case "Product":
          if (!productData.name || !productData.price) return null
          schema = generateProductSchema(productData)
          break
        case "FAQPage":
          if (faqData.questions.length === 0 || !faqData.questions[0].question) return null
          schema = generateFAQSchema(faqData)
          break
        case "BreadcrumbList":
          if (breadcrumbData.items.length === 0 || !breadcrumbData.items[0].url) return null
          schema = generateBreadcrumbSchema(breadcrumbData)
          break
        case "WebSite":
          if (!websiteData.name || !websiteData.url) return null
          schema = generateWebSiteSchema(websiteData)
          break
        default:
          return null
      }

      return generateJsonLd(schema)
    } catch {
      return null
    }
  }, [selectedType, articleData, orgData, productData, faqData, breadcrumbData, websiteData])

  const handleCopy = useCallback(async () => {
    if (result) {
      await copyToClipboard(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [result])

  const handleReset = useCallback(() => {
    switch (selectedType) {
      case "Article":
        setArticleData({
          headline: "",
          description: "",
          image: "",
          datePublished: new Date().toISOString().split("T")[0],
          dateModified: new Date().toISOString().split("T")[0],
          authorName: "",
          authorUrl: "",
          publisherName: "",
          publisherLogo: "",
        })
        break
      case "Organization":
        setOrgData({
          name: "",
          url: "",
          logo: "",
          description: "",
          email: "",
          phone: "",
          sameAs: [],
        })
        break
      case "Product":
        setProductData({
          name: "",
          description: "",
          image: "",
          sku: "",
          brand: "",
          price: "",
          priceCurrency: "USD",
          availability: "InStock",
        })
        break
      case "FAQPage":
        setFaqData({ questions: [{ question: "", answer: "" }] })
        break
      case "BreadcrumbList":
        setBreadcrumbData({ items: [{ name: "Home", url: "" }] })
        break
      case "WebSite":
        setWebsiteData({
          name: "",
          url: "",
          description: "",
          searchUrl: "",
          searchQueryInput: "required name=search_term_string",
        })
        break
    }
  }, [selectedType])

  const structuredData = generateToolStructuredData(tool)
  const faqStructuredData = generateToolFAQStructuredData(tool)
  const howToData = generateHowToStructuredData(tool, getDefaultToolSteps(tool))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
          <div className="container py-6 sm:py-8 md:py-12 max-w-5xl px-4 sm:px-6 lg:px-8">
            <ToolHeader tool={tool} />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                {/* Schema Type Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Schema Type</CardTitle>
                    <CardDescription>Choose the type of structured data to generate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {SCHEMA_TYPES.slice(0, 6).map((type) => {
                        const Icon = schemaIcons[type.type] || FileText
                        return (
                          <button
                            key={type.type}
                            onClick={() => setSelectedType(type.type)}
                            className={`p-3 rounded-lg border text-left transition-all ${
                              selectedType === type.type
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="h-4 w-4" />
                              <span className="font-medium text-sm">{type.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {type.description}
                            </p>
                          </button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Schema Fields */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{SCHEMA_TYPES.find((t) => t.type === selectedType)?.label} Schema</CardTitle>
                        <CardDescription>Fill in the required fields</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleReset}>
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Article Schema Fields */}
                    {selectedType === "Article" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="headline">Headline *</Label>
                          <Input
                            id="headline"
                            value={articleData.headline}
                            onChange={(e) => setArticleData((prev) => ({ ...prev, headline: e.target.value }))}
                            placeholder="Article headline"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="articleDesc">Description *</Label>
                          <Textarea
                            id="articleDesc"
                            value={articleData.description}
                            onChange={(e) => setArticleData((prev) => ({ ...prev, description: e.target.value }))}
                            placeholder="Article description"
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="articleImage">Image URL *</Label>
                          <Input
                            id="articleImage"
                            value={articleData.image}
                            onChange={(e) => setArticleData((prev) => ({ ...prev, image: e.target.value }))}
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="datePublished">Date Published *</Label>
                            <Input
                              id="datePublished"
                              type="date"
                              value={articleData.datePublished}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, datePublished: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dateModified">Date Modified</Label>
                            <Input
                              id="dateModified"
                              type="date"
                              value={articleData.dateModified}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, dateModified: e.target.value }))}
                            />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="authorName">Author Name *</Label>
                            <Input
                              id="authorName"
                              value={articleData.authorName}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, authorName: e.target.value }))}
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="authorUrl">Author URL</Label>
                            <Input
                              id="authorUrl"
                              value={articleData.authorUrl}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, authorUrl: e.target.value }))}
                              placeholder="https://example.com/author"
                            />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="publisherName">Publisher Name *</Label>
                            <Input
                              id="publisherName"
                              value={articleData.publisherName}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, publisherName: e.target.value }))}
                              placeholder="Publisher Inc."
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="publisherLogo">Publisher Logo URL *</Label>
                            <Input
                              id="publisherLogo"
                              value={articleData.publisherLogo}
                              onChange={(e) => setArticleData((prev) => ({ ...prev, publisherLogo: e.target.value }))}
                              placeholder="https://example.com/logo.png"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Organization Schema Fields */}
                    {selectedType === "Organization" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="orgName">Organization Name *</Label>
                          <Input
                            id="orgName"
                            value={orgData.name}
                            onChange={(e) => setOrgData((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="orgUrl">Website URL *</Label>
                          <Input
                            id="orgUrl"
                            value={orgData.url}
                            onChange={(e) => setOrgData((prev) => ({ ...prev, url: e.target.value }))}
                            placeholder="https://example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="orgLogo">Logo URL *</Label>
                          <Input
                            id="orgLogo"
                            value={orgData.logo}
                            onChange={(e) => setOrgData((prev) => ({ ...prev, logo: e.target.value }))}
                            placeholder="https://example.com/logo.png"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="orgDesc">Description</Label>
                          <Textarea
                            id="orgDesc"
                            value={orgData.description}
                            onChange={(e) => setOrgData((prev) => ({ ...prev, description: e.target.value }))}
                            placeholder="Organization description"
                            rows={2}
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="orgEmail">Email</Label>
                            <Input
                              id="orgEmail"
                              type="email"
                              value={orgData.email}
                              onChange={(e) => setOrgData((prev) => ({ ...prev, email: e.target.value }))}
                              placeholder="contact@example.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="orgPhone">Phone</Label>
                            <Input
                              id="orgPhone"
                              value={orgData.phone}
                              onChange={(e) => setOrgData((prev) => ({ ...prev, phone: e.target.value }))}
                              placeholder="+1-555-555-5555"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Social Profiles</Label>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {orgData.sameAs?.map((url, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() =>
                                  setOrgData((prev) => ({
                                    ...prev,
                                    sameAs: prev.sameAs?.filter((_, i) => i !== index),
                                  }))
                                }
                              >
                                {new URL(url).hostname} ×
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              value={newSocialUrl}
                              onChange={(e) => setNewSocialUrl(e.target.value)}
                              placeholder="https://facebook.com/yourpage"
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && newSocialUrl.trim()) {
                                  setOrgData((prev) => ({
                                    ...prev,
                                    sameAs: [...(prev.sameAs || []), newSocialUrl.trim()],
                                  }))
                                  setNewSocialUrl("")
                                }
                              }}
                            />
                            <Button
                              variant="outline"
                              onClick={() => {
                                if (newSocialUrl.trim()) {
                                  setOrgData((prev) => ({
                                    ...prev,
                                    sameAs: [...(prev.sameAs || []), newSocialUrl.trim()],
                                  }))
                                  setNewSocialUrl("")
                                }
                              }}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Product Schema Fields */}
                    {selectedType === "Product" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="productName">Product Name *</Label>
                          <Input
                            id="productName"
                            value={productData.name}
                            onChange={(e) => setProductData((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="Product Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="productDesc">Description *</Label>
                          <Textarea
                            id="productDesc"
                            value={productData.description}
                            onChange={(e) => setProductData((prev) => ({ ...prev, description: e.target.value }))}
                            placeholder="Product description"
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="productImage">Image URL *</Label>
                          <Input
                            id="productImage"
                            value={productData.image}
                            onChange={(e) => setProductData((prev) => ({ ...prev, image: e.target.value }))}
                            placeholder="https://example.com/product.jpg"
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="productSku">SKU</Label>
                            <Input
                              id="productSku"
                              value={productData.sku}
                              onChange={(e) => setProductData((prev) => ({ ...prev, sku: e.target.value }))}
                              placeholder="ABC123"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productBrand">Brand</Label>
                            <Input
                              id="productBrand"
                              value={productData.brand}
                              onChange={(e) => setProductData((prev) => ({ ...prev, brand: e.target.value }))}
                              placeholder="Brand Name"
                            />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div className="space-y-2">
                            <Label htmlFor="productPrice">Price *</Label>
                            <Input
                              id="productPrice"
                              value={productData.price}
                              onChange={(e) => setProductData((prev) => ({ ...prev, price: e.target.value }))}
                              placeholder="99.99"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productCurrency">Currency</Label>
                            <select
                              id="productCurrency"
                              value={productData.priceCurrency}
                              onChange={(e) => setProductData((prev) => ({ ...prev, priceCurrency: e.target.value }))}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            >
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                              <option value="CAD">CAD</option>
                              <option value="AUD">AUD</option>
                              <option value="INR">INR</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productAvailability">Availability</Label>
                            <select
                              id="productAvailability"
                              value={productData.availability}
                              onChange={(e) =>
                                setProductData((prev) => ({
                                  ...prev,
                                  availability: e.target.value as ProductSchema["availability"],
                                }))
                              }
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            >
                              <option value="InStock">In Stock</option>
                              <option value="OutOfStock">Out of Stock</option>
                              <option value="PreOrder">Pre-Order</option>
                              <option value="Discontinued">Discontinued</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {/* FAQ Schema Fields */}
                    {selectedType === "FAQPage" && (
                      <div className="space-y-4">
                        {faqData.questions.map((item, index) => (
                          <div key={index} className="p-3 border rounded-lg space-y-3">
                            <div className="flex items-start justify-between">
                              <Label>Question {index + 1}</Label>
                              {faqData.questions.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 text-destructive"
                                  onClick={() =>
                                    setFaqData((prev) => ({
                                      questions: prev.questions.filter((_, i) => i !== index),
                                    }))
                                  }
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                            <Input
                              value={item.question}
                              onChange={(e) =>
                                setFaqData((prev) => ({
                                  questions: prev.questions.map((q, i) =>
                                    i === index ? { ...q, question: e.target.value } : q
                                  ),
                                }))
                              }
                              placeholder="What is your question?"
                            />
                            <Textarea
                              value={item.answer}
                              onChange={(e) =>
                                setFaqData((prev) => ({
                                  questions: prev.questions.map((q, i) =>
                                    i === index ? { ...q, answer: e.target.value } : q
                                  ),
                                }))
                              }
                              placeholder="The answer to the question..."
                              rows={2}
                            />
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          onClick={() =>
                            setFaqData((prev) => ({
                              questions: [...prev.questions, { question: "", answer: "" }],
                            }))
                          }
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Question
                        </Button>
                      </div>
                    )}

                    {/* Breadcrumb Schema Fields */}
                    {selectedType === "BreadcrumbList" && (
                      <div className="space-y-4">
                        {breadcrumbData.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground w-6">{index + 1}.</span>
                            <Input
                              value={item.name}
                              onChange={(e) =>
                                setBreadcrumbData((prev) => ({
                                  items: prev.items.map((b, i) =>
                                    i === index ? { ...b, name: e.target.value } : b
                                  ),
                                }))
                              }
                              placeholder="Page name"
                              className="flex-1"
                            />
                            <Input
                              value={item.url}
                              onChange={(e) =>
                                setBreadcrumbData((prev) => ({
                                  items: prev.items.map((b, i) =>
                                    i === index ? { ...b, url: e.target.value } : b
                                  ),
                                }))
                              }
                              placeholder="https://example.com/page"
                              className="flex-1"
                            />
                            {breadcrumbData.items.length > 1 && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive"
                                onClick={() =>
                                  setBreadcrumbData((prev) => ({
                                    items: prev.items.filter((_, i) => i !== index),
                                  }))
                                }
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          onClick={() =>
                            setBreadcrumbData((prev) => ({
                              items: [...prev.items, { name: "", url: "" }],
                            }))
                          }
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Breadcrumb
                        </Button>
                      </div>
                    )}

                    {/* WebSite Schema Fields */}
                    {selectedType === "WebSite" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="websiteName">Website Name *</Label>
                          <Input
                            id="websiteName"
                            value={websiteData.name}
                            onChange={(e) => setWebsiteData((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="My Website"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="websiteUrl">Website URL *</Label>
                          <Input
                            id="websiteUrl"
                            value={websiteData.url}
                            onChange={(e) => setWebsiteData((prev) => ({ ...prev, url: e.target.value }))}
                            placeholder="https://example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="websiteDesc">Description</Label>
                          <Textarea
                            id="websiteDesc"
                            value={websiteData.description}
                            onChange={(e) => setWebsiteData((prev) => ({ ...prev, description: e.target.value }))}
                            placeholder="Website description"
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="searchUrl">Search URL (for sitelinks search box)</Label>
                          <Input
                            id="searchUrl"
                            value={websiteData.searchUrl}
                            onChange={(e) => setWebsiteData((prev) => ({ ...prev, searchUrl: e.target.value }))}
                            placeholder="https://example.com/search?q={search_term_string}"
                          />
                          <p className="text-xs text-muted-foreground">
                            Use {"{search_term_string}"} as the placeholder for search queries
                          </p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Generated Output */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Generated JSON-LD</CardTitle>
                        <CardDescription>Copy and paste into your HTML</CardDescription>
                      </div>
                      {result && (
                        <Button variant="outline" size="sm" onClick={handleCopy}>
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs font-mono max-h-[600px] overflow-y-auto whitespace-pre-wrap">
                      {result || "<!-- Fill in the required fields to generate JSON-LD -->"}
                    </pre>
                  </CardContent>
                </Card>

                {/* Implementation Guide */}
                <Card>
                  <CardHeader>
                    <CardTitle>How to Implement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-1">1. Copy the JSON-LD code</h4>
                      <p className="text-muted-foreground">
                        Click the copy button above to copy the generated structured data.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">2. Add to your HTML</h4>
                      <p className="text-muted-foreground">
                        Paste the code inside the <code className="px-1 bg-muted rounded">&lt;head&gt;</code> or{" "}
                        <code className="px-1 bg-muted rounded">&lt;body&gt;</code> section of your HTML.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">3. Test your markup</h4>
                      <p className="text-muted-foreground">
                        Use{" "}
                        <a
                          href="https://search.google.com/test/rich-results"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Google&apos;s Rich Results Test
                        </a>{" "}
                        to validate your structured data.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <ToolFooter tool={tool} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

