/**
 * Schema Markup Generator Utilities
 */

export type SchemaType =
  | "Article"
  | "Organization"
  | "Product"
  | "FAQPage"
  | "BreadcrumbList"
  | "WebSite"
  | "LocalBusiness"
  | "Person"
  | "Event"
  | "Recipe"
  | "VideoObject"
  | "HowTo"

export interface SchemaTypeInfo {
  type: SchemaType
  label: string
  description: string
  icon: string
}

/**
 * Available schema types with metadata
 */
export const SCHEMA_TYPES: SchemaTypeInfo[] = [
  {
    type: "Article",
    label: "Article",
    description: "Blog posts, news articles, and other written content",
    icon: "FileText",
  },
  {
    type: "Organization",
    label: "Organization",
    description: "Company, non-profit, or other organization",
    icon: "Building",
  },
  {
    type: "Product",
    label: "Product",
    description: "Physical or digital products for sale",
    icon: "Package",
  },
  {
    type: "FAQPage",
    label: "FAQ Page",
    description: "Frequently asked questions page",
    icon: "HelpCircle",
  },
  {
    type: "BreadcrumbList",
    label: "Breadcrumbs",
    description: "Navigation breadcrumb trail",
    icon: "Navigation",
  },
  {
    type: "WebSite",
    label: "Website",
    description: "Website with sitelinks search box",
    icon: "Globe",
  },
  {
    type: "LocalBusiness",
    label: "Local Business",
    description: "Physical business location",
    icon: "MapPin",
  },
  {
    type: "Person",
    label: "Person",
    description: "Individual person profile",
    icon: "User",
  },
  {
    type: "Event",
    label: "Event",
    description: "Scheduled event or happening",
    icon: "Calendar",
  },
  {
    type: "Recipe",
    label: "Recipe",
    description: "Cooking or food recipe",
    icon: "ChefHat",
  },
  {
    type: "VideoObject",
    label: "Video",
    description: "Video content",
    icon: "Video",
  },
  {
    type: "HowTo",
    label: "How-To",
    description: "Step-by-step instructions",
    icon: "ListOrdered",
  },
]

// Schema field definitions
export interface ArticleSchema {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  publisherName: string
  publisherLogo: string
}

export interface OrganizationSchema {
  name: string
  url: string
  logo: string
  description?: string
  email?: string
  phone?: string
  address?: {
    streetAddress?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
  }
  sameAs?: string[]
}

export interface ProductSchema {
  name: string
  description: string
  image: string
  sku?: string
  brand?: string
  price: string
  priceCurrency: string
  availability: "InStock" | "OutOfStock" | "PreOrder" | "Discontinued"
  reviewCount?: number
  ratingValue?: number
  url?: string
}

export interface FAQSchema {
  questions: Array<{
    question: string
    answer: string
  }>
}

export interface BreadcrumbSchema {
  items: Array<{
    name: string
    url: string
  }>
}

export interface WebSiteSchema {
  name: string
  url: string
  description?: string
  searchUrl?: string
  searchQueryInput?: string
}

export interface LocalBusinessSchema {
  name: string
  description?: string
  image?: string
  url?: string
  phone?: string
  priceRange?: string
  address: {
    streetAddress: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  openingHours?: string[]
  geo?: {
    latitude: number
    longitude: number
  }
}

export interface PersonSchema {
  name: string
  url?: string
  image?: string
  jobTitle?: string
  worksFor?: string
  email?: string
  sameAs?: string[]
}

export interface EventSchema {
  name: string
  description?: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address?: string
  }
  image?: string
  url?: string
  performer?: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
    url: string
  }
}

export interface RecipeSchema {
  name: string
  description: string
  image: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  recipeYield?: string
  recipeIngredient: string[]
  recipeInstructions: string[]
  author?: string
  nutrition?: {
    calories?: string
  }
}

export interface VideoSchema {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
}

export interface HowToSchema {
  name: string
  description: string
  image?: string
  totalTime?: string
  estimatedCost?: {
    currency: string
    value: string
  }
  supply?: string[]
  tool?: string[]
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
}

/**
 * Generate JSON-LD script tag
 */
export function generateJsonLd(schema: Record<string, unknown>): string {
  const json = JSON.stringify(schema, null, 2)
  return `<script type="application/ld+json">\n${json}\n</script>`
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(data: ArticleSchema): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Person",
      name: data.authorName,
      url: data.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisherName,
      logo: {
        "@type": "ImageObject",
        url: data.publisherLogo,
      },
    },
  }
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(data: OrganizationSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
  }

  if (data.description) schema.description = data.description
  if (data.email) schema.email = data.email
  if (data.phone) schema.telephone = data.phone
  if (data.sameAs && data.sameAs.length > 0) schema.sameAs = data.sameAs

  if (data.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    }
  }

  return schema
}

/**
 * Generate Product schema
 */
export function generateProductSchema(data: ProductSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: data.priceCurrency,
      availability: `https://schema.org/${data.availability}`,
    },
  }

  if (data.sku) schema.sku = data.sku
  if (data.brand) schema.brand = { "@type": "Brand", name: data.brand }
  if (data.url) (schema.offers as Record<string, unknown>).url = data.url

  if (data.reviewCount && data.ratingValue) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: data.ratingValue,
      reviewCount: data.reviewCount,
    }
  }

  return schema
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(data: FAQSchema): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(data: BreadcrumbSchema): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(data: WebSiteSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
  }

  if (data.description) schema.description = data.description

  if (data.searchUrl && data.searchQueryInput) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: data.searchUrl,
      },
      "query-input": data.searchQueryInput,
    }
  }

  return schema
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(data: LocalBusinessSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    },
  }

  if (data.description) schema.description = data.description
  if (data.image) schema.image = data.image
  if (data.url) schema.url = data.url
  if (data.phone) schema.telephone = data.phone
  if (data.priceRange) schema.priceRange = data.priceRange
  if (data.openingHours) schema.openingHoursSpecification = data.openingHours

  if (data.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    }
  }

  return schema
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(data: PersonSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
  }

  if (data.url) schema.url = data.url
  if (data.image) schema.image = data.image
  if (data.jobTitle) schema.jobTitle = data.jobTitle
  if (data.worksFor) schema.worksFor = { "@type": "Organization", name: data.worksFor }
  if (data.email) schema.email = data.email
  if (data.sameAs && data.sameAs.length > 0) schema.sameAs = data.sameAs

  return schema
}

/**
 * Generate Event schema
 */
export function generateEventSchema(data: EventSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: data.name,
    startDate: data.startDate,
    location: {
      "@type": "Place",
      name: data.location.name,
      address: data.location.address,
    },
  }

  if (data.description) schema.description = data.description
  if (data.endDate) schema.endDate = data.endDate
  if (data.image) schema.image = data.image
  if (data.url) schema.url = data.url
  if (data.performer) {
    schema.performer = { "@type": "Person", name: data.performer }
  }
  if (data.offers) {
    schema.offers = {
      "@type": "Offer",
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: `https://schema.org/${data.offers.availability}`,
      url: data.offers.url,
    }
  }

  return schema
}

/**
 * Generate Recipe schema
 */
export function generateRecipeSchema(data: RecipeSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: data.name,
    description: data.description,
    image: data.image,
    recipeIngredient: data.recipeIngredient,
    recipeInstructions: data.recipeInstructions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  }

  if (data.prepTime) schema.prepTime = data.prepTime
  if (data.cookTime) schema.cookTime = data.cookTime
  if (data.totalTime) schema.totalTime = data.totalTime
  if (data.recipeYield) schema.recipeYield = data.recipeYield
  if (data.author) schema.author = { "@type": "Person", name: data.author }
  if (data.nutrition?.calories) {
    schema.nutrition = {
      "@type": "NutritionInformation",
      calories: data.nutrition.calories,
    }
  }

  return schema
}

/**
 * Generate Video schema
 */
export function generateVideoSchema(data: VideoSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
  }

  if (data.duration) schema.duration = data.duration
  if (data.contentUrl) schema.contentUrl = data.contentUrl
  if (data.embedUrl) schema.embedUrl = data.embedUrl

  return schema
}

/**
 * Generate HowTo schema
 */
export function generateHowToSchema(data: HowToSchema): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    step: data.steps.map((step, index) => {
      const stepSchema: Record<string, unknown> = {
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
      }
      if (step.image) stepSchema.image = step.image
      return stepSchema
    }),
  }

  if (data.image) schema.image = data.image
  if (data.totalTime) schema.totalTime = data.totalTime
  if (data.estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: data.estimatedCost.currency,
      value: data.estimatedCost.value,
    }
  }
  if (data.supply && data.supply.length > 0) {
    schema.supply = data.supply.map((s) => ({ "@type": "HowToSupply", name: s }))
  }
  if (data.tool && data.tool.length > 0) {
    schema.tool = data.tool.map((t) => ({ "@type": "HowToTool", name: t }))
  }

  return schema
}

/**
 * Validate JSON-LD structure
 */
export function validateJsonLd(json: string): { valid: boolean; error?: string } {
  try {
    const parsed = JSON.parse(json)
    if (!parsed["@context"]) {
      return { valid: false, error: "Missing @context property" }
    }
    if (!parsed["@type"]) {
      return { valid: false, error: "Missing @type property" }
    }
    return { valid: true }
  } catch (e) {
    return { valid: false, error: (e as Error).message }
  }
}

