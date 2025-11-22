"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Scale,
  Zap,
  Eye,
  Shield,
  Code,
  Palette,
  Globe,
  CheckCircle2,
  XCircle,
  ExternalLink,
  DollarSign,
  Star,
  AlertCircle,
  Info,
  Building2,
  FileText,
} from "lucide-react"
import { useState } from "react"

export default function ComparePage() {
  const [selectedCategory, setSelectedCategory] = useState("testing")

  // Automated Testing Tools
  const testingTools = [
    {
      name: "axe DevTools",
      type: "Browser Extension & API",
      pricing: "Free / Paid",
      price: "Free (extension), Paid (enterprise)",
      wcag: "WCAG 2.1, 2.2",
      features: [
        "Browser extension (Chrome, Edge, Firefox)",
        "CI/CD integration",
        "Detailed violation reports",
        "React, Vue, Angular support",
        "Command-line interface",
        "API access",
      ],
      pros: [
        "Free browser extension",
        "Excellent developer integration",
        "Comprehensive testing",
        "Active community support",
        "Regular updates",
      ],
      cons: [
        "Enterprise features require paid plan",
        "Can be overwhelming for beginners",
        "Requires technical knowledge",
      ],
      bestFor: "Developers and development teams",
      url: "https://www.deque.com/axe/devtools/",
      rating: 5,
    },
    {
      name: "WAVE",
      type: "Browser Extension & Online Tool",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.1",
      features: [
        "Browser extension (Chrome, Firefox, Edge)",
        "Online evaluation tool",
        "Visual feedback overlay",
        "Detailed error reports",
        "Contrast checking",
        "ARIA evaluation",
      ],
      pros: [
        "Completely free",
        "Visual, easy-to-understand feedback",
        "Beginner-friendly",
        "No installation needed (online version)",
        "Educational resources included",
      ],
      cons: [
        "Limited to single-page testing",
        "No API access",
        "Less suitable for automated testing",
        "May miss some complex issues",
      ],
      bestFor: "Designers, content creators, beginners",
      url: "https://wave.webaim.org/",
      rating: 4,
    },
    {
      name: "Lighthouse",
      type: "Built-in DevTools",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.1",
      features: [
        "Built into Chrome DevTools",
        "Command-line tool",
        "CI/CD integration",
        "Performance + Accessibility",
        "Mobile testing",
        "Automated reports",
      ],
      pros: [
        "Free and built-in",
        "Part of Chrome ecosystem",
        "Performance + accessibility together",
        "Easy CI/CD integration",
        "Regular updates",
      ],
      cons: [
        "Chrome/Chromium only",
        "Less detailed than specialized tools",
        "Limited manual testing features",
      ],
      bestFor: "Web developers using Chrome",
      url: "https://developer.chrome.com/docs/lighthouse/accessibility/",
      rating: 4,
    },
    {
      name: "Accessibility Insights",
      type: "Browser Extension",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.1",
      features: [
        "FastPass automated checks",
        "Assessment manual testing",
        "Tab stops visualization",
        "Landmarks visualization",
        "Chrome and Edge support",
        "Windows app available",
      ],
      pros: [
        "Completely free",
        "Microsoft-backed",
        "Great for manual testing",
        "Visual tab stops",
        "Comprehensive assessment mode",
      ],
      cons: [
        "Windows-focused",
        "Limited browser support",
        "Less automation than axe",
      ],
      bestFor: "Manual testing and assessments",
      url: "https://accessibilityinsights.io/",
      rating: 4,
    },
    {
      name: "Tenon.io",
      type: "API Service",
      pricing: "Paid",
      price: "Custom pricing",
      wcag: "WCAG 2.0, 2.1, 2.2",
      features: [
        "RESTful API",
        "Batch testing",
        "Detailed reports",
        "CI/CD integration",
        "Custom rules",
        "Priority scoring",
      ],
      pros: [
        "Powerful API",
        "Flexible integration",
        "Detailed reporting",
        "Good for automation",
        "Custom rule support",
      ],
      cons: [
        "Paid service",
        "Requires API knowledge",
        "Less user-friendly interface",
      ],
      bestFor: "Enterprise automation",
      url: "https://tenon.io/",
      rating: 4,
    },
    {
      name: "AChecker",
      type: "Online Tool",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.0, 2.1, 2.2",
      features: [
        "Online accessibility checker",
        "Multiple standard support",
        "Detailed reports",
        "Source code analysis",
        "HTML/CSS validation",
      ],
      pros: [
        "Free",
        "Multiple WCAG versions",
        "No installation needed",
        "Open source",
      ],
      cons: [
        "Online only",
        "Less modern interface",
        "Limited automation",
      ],
      bestFor: "Quick checks and validation",
      url: "https://achecker.ca/",
      rating: 3,
    },
  ]

  // Accessibility Services/Overlays
  const accessibilityServices = [
    {
      name: "UserWay",
      type: "Accessibility Widget & Services",
      pricing: "Free / Paid",
      price: "Free (Lite) / $49+/month",
      wcag: "WCAG 2.1 Level AA",
      features: [
        "AI-powered accessibility widget",
        "Real-time adjustments",
        "Screen reader optimization",
        "Keyboard navigation",
        "Customizable interface",
        "Accessibility audits",
      ],
      pros: [
        "Free tier available",
        "Easy installation",
        "Quick implementation",
        "Customizable widget",
        "Multiple service tiers",
      ],
      cons: [
        "Overlay solution (controversial)",
        "May not fix underlying issues",
        "Paid plans can be expensive",
        "Limited code-level fixes",
      ],
      bestFor: "Small to medium businesses",
      url: "https://userway.org/",
      rating: 3,
    },
    {
      name: "accessiBe",
      type: "Automated Compliance Platform",
      pricing: "Paid",
      price: "$49-$149/month",
      wcag: "WCAG 2.1 Level AA",
      features: [
        "AI-powered scanning",
        "Automated remediation",
        "Screen reader optimization",
        "Keyboard navigation",
        "Compliance monitoring",
        "Legal documentation",
      ],
      pros: [
        "Quick setup",
        "Automated daily scans",
        "Legal documentation",
        "Multiple integrations",
        "Continuous monitoring",
      ],
      cons: [
        "Overlay solution (controversial)",
        "Expensive",
        "May not address root causes",
        "Limited manual control",
      ],
      bestFor: "Businesses needing quick compliance",
      url: "https://accessibe.com/",
      rating: 3,
    },
    {
      name: "AudioEye",
      type: "Hybrid Solution",
      pricing: "Paid",
      price: "Custom pricing",
      wcag: "WCAG 2.1 Level AA",
      features: [
        "Automated scanning",
        "Human expert audits",
        "Code-level remediation",
        "Continuous monitoring",
        "Compliance dashboard",
        "Training services",
      ],
      pros: [
        "Combines automation + human review",
        "Code-level fixes",
        "Comprehensive solution",
        "Expert support",
        "Ongoing monitoring",
      ],
      cons: [
        "Expensive",
        "Custom pricing",
        "May require longer implementation",
      ],
      bestFor: "Enterprise organizations",
      url: "https://www.audioeye.com/",
      rating: 4,
    },
    {
      name: "Level Access",
      type: "Enterprise Services",
      pricing: "Paid",
      price: "Custom pricing",
      wcag: "WCAG 2.0, 2.1, 2.2",
      features: [
        "Comprehensive audits",
        "Manual testing",
        "Remediation services",
        "Training programs",
        "Legal support",
        "Compliance tracking",
      ],
      pros: [
        "Industry leader",
        "Comprehensive services",
        "Expert team",
        "Legal support",
        "Government contracts",
      ],
      cons: [
        "Very expensive",
        "Enterprise-focused",
        "Long sales cycles",
      ],
      bestFor: "Large enterprises and government",
      url: "https://www.levelaccess.com/",
      rating: 5,
    },
    {
      name: "Deque Systems",
      type: "Tools & Services",
      pricing: "Free / Paid",
      price: "Free (axe) / Paid (services)",
      wcag: "WCAG 2.1, 2.2",
      features: [
        "axe testing tools (free)",
        "Professional services",
        "Training programs",
        "Consulting",
        "Remediation services",
        "Compliance audits",
      ],
      pros: [
        "Free tools available",
        "Industry expertise",
        "Comprehensive services",
        "Strong developer focus",
      ],
      cons: [
        "Services are expensive",
        "Enterprise-focused",
      ],
      bestFor: "Development teams and enterprises",
      url: "https://www.deque.com/",
      rating: 5,
    },
    {
      name: "Siteimprove",
      type: "Enterprise Platform",
      pricing: "Paid",
      price: "Custom pricing",
      wcag: "WCAG 2.0, 2.1",
      features: [
        "Accessibility + SEO + Analytics",
        "Site-wide crawling",
        "Policy compliance",
        "Reporting dashboard",
        "CMS integrations",
        "Training resources",
      ],
      pros: [
        "All-in-one platform",
        "Comprehensive reporting",
        "Multi-site management",
        "Enterprise features",
      ],
      cons: [
        "Very expensive",
        "Complex setup",
        "Enterprise-only",
      ],
      bestFor: "Large organizations with multiple sites",
      url: "https://www.siteimprove.com/",
      rating: 4,
    },
  ]

  // Screen Readers
  const screenReaders = [
    {
      name: "NVDA",
      type: "Windows Screen Reader",
      pricing: "Free",
      price: "Free (open source)",
      wcag: "N/A",
      features: [
        "Free and open source",
        "Windows support",
        "Multiple languages",
        "Braille display support",
        "Regular updates",
        "Active community",
      ],
      pros: [
        "Completely free",
        "Open source",
        "Regular updates",
        "Good performance",
        "Active development",
      ],
      cons: [
        "Windows only",
        "Requires learning curve",
        "Less polished than JAWS",
      ],
      bestFor: "Windows users, developers, testing",
      url: "https://www.nvaccess.org/",
      rating: 5,
    },
    {
      name: "JAWS",
      type: "Windows Screen Reader",
      pricing: "Paid",
      price: "$90/year (home), $1200/year (professional)",
      wcag: "N/A",
      features: [
        "Professional screen reader",
        "Advanced features",
        "Braille support",
        "OCR capabilities",
        "Multiple languages",
        "Enterprise support",
      ],
      pros: [
        "Industry standard",
        "Most features",
        "Excellent support",
        "Professional quality",
        "Widely used",
      ],
      cons: [
        "Very expensive",
        "Windows only",
        "Steep learning curve",
      ],
      bestFor: "Professional users, enterprise",
      url: "https://www.freedomscientific.com/products/software/jaws/",
      rating: 5,
    },
    {
      name: "VoiceOver",
      type: "Built-in Screen Reader",
      pricing: "Free",
      price: "Free (built-in)",
      wcag: "N/A",
      features: [
        "Built into macOS and iOS",
        "Gesture controls",
        "Braille support",
        "Voice control",
        "Multiple languages",
        "Regular updates",
      ],
      pros: [
        "Free and built-in",
        "Excellent integration",
        "Modern interface",
        "Regular updates",
        "iOS and macOS",
      ],
      cons: [
        "Apple ecosystem only",
        "Different from Windows readers",
        "Learning curve",
      ],
      bestFor: "Mac/iOS users, developers",
      url: "https://www.apple.com/accessibility/vision/",
      rating: 5,
    },
    {
      name: "TalkBack",
      type: "Android Screen Reader",
      pricing: "Free",
      price: "Free (built-in)",
      wcag: "N/A",
      features: [
        "Built into Android",
        "Gesture navigation",
        "Braille support",
        "Multiple languages",
        "Regular updates",
      ],
      pros: [
        "Free and built-in",
        "Android integration",
        "Regular updates",
        "Good performance",
      ],
      cons: [
        "Android only",
        "Varies by device",
        "Learning curve",
      ],
      bestFor: "Android users, mobile testing",
      url: "https://support.google.com/accessibility/android/answer/6283677",
      rating: 4,
    },
    {
      name: "Narrator",
      type: "Windows Built-in",
      pricing: "Free",
      price: "Free (built-in)",
      wcag: "N/A",
      features: [
        "Built into Windows",
        "Basic screen reading",
        "Multiple languages",
        "Regular updates",
      ],
      pros: [
        "Free and built-in",
        "No installation",
        "Windows integration",
      ],
      cons: [
        "Limited features",
        "Less powerful than JAWS/NVDA",
        "Basic functionality",
      ],
      bestFor: "Basic testing, Windows users",
      url: "https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1",
      rating: 3,
    },
  ]

  // Color Contrast Tools
  const contrastTools = [
    {
      name: "WebAIM Contrast Checker",
      type: "Online Tool",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.1",
      features: [
        "Color picker",
        "Contrast ratio calculation",
        "WCAG AA/AAA compliance",
        "Large text support",
        "Multiple color formats",
      ],
      pros: [
        "Free",
        "Simple interface",
        "Accurate calculations",
        "No installation",
      ],
      cons: [
        "Online only",
        "Basic features",
      ],
      bestFor: "Quick contrast checks",
      url: "https://webaim.org/resources/contrastchecker/",
      rating: 4,
    },
    {
      name: "Colour Contrast Analyser",
      type: "Desktop App",
      pricing: "Free",
      price: "Free",
      wcag: "WCAG 2.1",
      features: [
        "Desktop application",
        "Color picker",
        "Contrast ratio",
        "WCAG compliance",
        "Windows/Mac/Linux",
      ],
      pros: [
        "Free",
        "Works offline",
        "Cross-platform",
        "Eye dropper tool",
      ],
      cons: [
        "Requires installation",
        "Basic interface",
      ],
      bestFor: "Designers, offline use",
      url: "https://www.tpgi.com/color-contrast-checker/",
      rating: 4,
    },
    {
      name: "Contrast",
      type: "macOS App",
      pricing: "Paid",
      price: "$4.99",
      wcag: "WCAG 2.1",
      features: [
        "Native macOS app",
        "Color picker",
        "Real-time contrast",
        "WCAG compliance",
        "Multiple formats",
      ],
      pros: [
        "Native macOS experience",
        "Real-time updates",
        "Beautiful interface",
      ],
      cons: [
        "Paid",
        "macOS only",
      ],
      bestFor: "macOS designers",
      url: "https://usecontrast.com/",
      rating: 4,
    },
  ]

  const renderComparisonTable = (items: typeof testingTools) => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2">
              <th className="text-left p-3 font-semibold sticky left-0 bg-background z-10">Tool</th>
              <th className="text-left p-3 font-semibold">Type</th>
              <th className="text-left p-3 font-semibold">Pricing</th>
              <th className="text-left p-3 font-semibold">WCAG Support</th>
              <th className="text-left p-3 font-semibold">Best For</th>
              <th className="text-left p-3 font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-muted/50">
                <td className="p-3 font-medium sticky left-0 bg-background z-10">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
                <td className="p-3 text-muted-foreground">{item.type}</td>
                <td className="p-3">
                  <Badge variant={item.pricing === "Free" ? "default" : "secondary"}>
                    {item.pricing}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">{item.price}</div>
                </td>
                <td className="p-3">
                  <Badge variant="outline">{item.wcag}</Badge>
                </td>
                <td className="p-3 text-muted-foreground">{item.bestFor}</td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderToolCard = (item: typeof testingTools[0]) => {
    return (
      <Card key={item.name} className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl mb-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  {item.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardTitle>
              <CardDescription>{item.type}</CardDescription>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Pricing:</span>
              <Badge variant={item.pricing === "Free" ? "default" : "secondary"}>
                {item.pricing}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{item.price}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">WCAG Support:</span>
            </div>
            <Badge variant="outline">{item.wcag}</Badge>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="font-medium">Features:</span>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="font-medium">Pros:</span>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {item.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-4 w-4 text-orange-600" />
              <span className="font-medium">Cons:</span>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {item.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm">
              <span className="font-medium">Best for:</span>{" "}
              <span className="text-muted-foreground">{item.bestFor}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-8 md:py-12 max-w-7xl">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-8 w-8 text-primary" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold">Accessibility Tools Comparison</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Compare popular web accessibility tools, services, screen readers, and testing solutions. Find the best
                tools for your specific needs, budget, and technical requirements.
              </p>
            </div>

            {/* Important Note */}
            <Card className="mb-12 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Important Note About Accessibility Overlays
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While accessibility overlay widgets (like UserWay, accessiBe) may seem like quick solutions, they are
                  controversial in the accessibility community. Many experts recommend{" "}
                  <strong>fixing accessibility issues at the code level</strong> rather than relying on overlays, as
                  overlays may not work with all assistive technologies and can create additional barriers. Always
                  prioritize proper implementation over overlay solutions.
                </p>
              </CardContent>
            </Card>

            {/* Comparison Tabs */}
            <Tabs defaultValue="testing" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="testing">Testing Tools</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="readers">Screen Readers</TabsTrigger>
                <TabsTrigger value="contrast">Contrast Tools</TabsTrigger>
              </TabsList>

              {/* Testing Tools */}
              <TabsContent value="testing" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Automated Testing Tools</h2>
                  <p className="text-muted-foreground mb-6">
                    Tools for developers and testers to identify accessibility issues in code and websites.
                  </p>
                </div>

                {/* Table View */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Quick Comparison Table</CardTitle>
                  </CardHeader>
                  <CardContent>{renderComparisonTable(testingTools)}</CardContent>
                </Card>

                {/* Detailed Cards */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {testingTools.map((tool) => renderToolCard(tool))}
                  </div>
                </div>
              </TabsContent>

              {/* Services */}
              <TabsContent value="services" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Accessibility Services & Platforms</h2>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive services and platforms that offer accessibility audits, remediation, and compliance
                    solutions.
                  </p>
                </div>

                {/* Table View */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Quick Comparison Table</CardTitle>
                  </CardHeader>
                  <CardContent>{renderComparisonTable(accessibilityServices)}</CardContent>
                </Card>

                {/* Detailed Cards */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {accessibilityServices.map((service) => renderToolCard(service))}
                  </div>
                </div>
              </TabsContent>

              {/* Screen Readers */}
              <TabsContent value="readers" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Screen Readers</h2>
                  <p className="text-muted-foreground mb-6">
                    Screen reading software used by people with visual impairments. Essential for testing your
                    website&apos;s accessibility.
                  </p>
                </div>

                {/* Table View */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Quick Comparison Table</CardTitle>
                  </CardHeader>
                  <CardContent>{renderComparisonTable(screenReaders)}</CardContent>
                </Card>

                {/* Detailed Cards */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {screenReaders.map((reader) => renderToolCard(reader))}
                  </div>
                </div>
              </TabsContent>

              {/* Contrast Tools */}
              <TabsContent value="contrast" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Color Contrast Checkers</h2>
                  <p className="text-muted-foreground mb-6">
                    Tools specifically designed for checking color contrast ratios against WCAG requirements.
                  </p>
                </div>

                {/* Table View */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Quick Comparison Table</CardTitle>
                  </CardHeader>
                  <CardContent>{renderComparisonTable(contrastTools)}</CardContent>
                </Card>

                {/* Detailed Cards */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Detailed Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {contrastTools.map((tool) => renderToolCard(tool))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Recommendations */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Quick Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      For Developers
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Start with:</strong> axe DevTools (free browser extension)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>For CI/CD:</strong> axe CLI or Lighthouse CI
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>For testing:</strong> NVDA (free) or VoiceOver (built-in)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-primary" />
                      For Designers
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Quick checks:</strong> WAVE browser extension
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Contrast:</strong> WebAIM Contrast Checker or Colour Contrast Analyser
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Visual testing:</strong> Accessibility Insights for tab stops
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      For Enterprises
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Comprehensive:</strong> Level Access or Deque Systems
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>All-in-one:</strong> Siteimprove (accessibility + SEO)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Hybrid approach:</strong> AudioEye (automation + human audits)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5 text-primary" />
                      For Beginners
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Start simple:</strong> WAVE (free, visual feedback)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Learn basics:</strong> Lighthouse in Chrome DevTools
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <strong>Screen reader:</strong> NVDA (free) or Narrator (built-in)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Related Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/tools">
                      <Code className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">All Tools</div>
                        <div className="text-xs text-muted-foreground">Browse all accessibility tools</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/compliance">
                      <Shield className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Compliance Laws</div>
                        <div className="text-xs text-muted-foreground">Understand legal requirements</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/checklist">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">WCAG Checklist</div>
                        <div className="text-xs text-muted-foreground">Interactive compliance checklist</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start h-auto py-4">
                    <Link href="/learn">
                      <FileText className="h-5 w-5 mr-2" />
                      <div className="text-left">
                        <div className="font-semibold">Learn Accessibility</div>
                        <div className="text-xs text-muted-foreground">Educational resources</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

