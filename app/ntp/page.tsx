"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SkipLink } from "@/components/skip-link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Clock,
  Server,
  Database,
  Monitor,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Layers,
  GitBranch,
  Zap,
  HardDrive,
  Network,
  Timer,
  FileText,
  Settings,
  Activity,
  Lock,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// Password protection component
function PasswordProtection({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ntp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        // Store authentication in sessionStorage
        sessionStorage.setItem("ntp_authenticated", "true")
        onAuthenticated()
      } else {
        setError(data.message || "Invalid password")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1 flex items-center justify-center">
          <div className="container max-w-md px-4 py-12">
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Protected Content</CardTitle>
                <CardDescription>
                  This documentation is password protected. Please enter the password to continue.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="pr-10"
                        disabled={isLoading}
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                      <XCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading || !password}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Access Documentation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-4">
              <Link href="/" className="hover:text-primary transition-colors">
                &larr; Back to Home
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function NTPPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authenticated = sessionStorage.getItem("ntp_authenticated") === "true"
    setIsAuthenticated(authenticated)
    setIsCheckingAuth(false)
  }, [])

  // Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <>
        <SkipLink />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading...</span>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  // Show password form if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  // Show the actual content if authenticated
  const tableOfContents = [
    { id: "system-overview", label: "System Overview", number: 1 },
    { id: "architecture", label: "Architecture", number: 2 },
    { id: "ccs-server", label: "What We Have Built - CCS Server", number: 3 },
    { id: "aig-server", label: "What We Have Built - AIG Server", number: 4 },
    { id: "data-flow", label: "Current Data Flow", number: 5 },
    { id: "chrony-problem", label: "The Chrony Sync Problem", number: 6 },
    { id: "approach-backend", label: "Approach 1: Backend-Driven", number: 7 },
    { id: "approach-frontend", label: "Approach 2: Frontend-Driven", number: 8 },
    { id: "approach-database", label: "Approach 3: Database-Driven", number: 9 },
    { id: "comparison", label: "Comparison and Recommendation", number: 10 },
  ]

  return (
    <>
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="container py-6 sm:py-8 md:py-12 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "NTP Server Sync System", href: "/ntp" },
              ]}
            />

            {/* Header */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  NTP Server Sync System
                </h1>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-4">
                Technical Guide for Time Synchronization between CCS and AIG Servers
              </p>
              <Badge variant="outline" className="text-sm">
                <FileText className="h-3 w-3 mr-1" />
                Technical Documentation
              </Badge>
            </div>

            {/* Table of Contents */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav aria-label="Table of contents">
                  <ol className="grid sm:grid-cols-2 gap-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded">{item.number}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </CardContent>
            </Card>

            {/* Section 1: System Overview */}
            <section id="system-overview" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">1. System Overview</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                We are building an NTP Server Sync system that ensures all servers in our infrastructure have
                synchronized time.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>The Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5 shrink-0">CCS</Badge>
                      <div>
                        <span className="font-semibold">Central Control Server</span>
                        <span className="text-muted-foreground"> - Acts as Stratum 1 local time source (the master clock)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-0.5 shrink-0">AIGs</Badge>
                      <div>
                        <span className="font-semibold">Multiple AIGs</span>
                        <span className="text-muted-foreground"> - Connected to CCS, receive time from CCS (the clients)</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Runs Where</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Server</th>
                          <th className="text-left py-3 px-4 font-semibold">Components</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">
                            <Badge>CCS</Badge>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            Analytic Server, Config UI, Chrony (as server)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">AIG</Badge>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            Config Server, Different UI, Chrony (as client)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Architecture */}
            <section id="architecture" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600">
                  <Network className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">2. Architecture</h2>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* CCS Server Box */}
                    <div className="border-2 border-primary rounded-xl p-6 bg-primary/5">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-primary">CCS</h3>
                        <p className="text-sm text-muted-foreground">(Stratum 1 - Local Time Source)</p>
                      </div>
                      
                      {/* CCS Components */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                          <Server className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold text-sm">Analytic Server</h4>
                          <p className="text-xs text-muted-foreground mt-1">Data Processing</p>
                        </div>
                        <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                          <Monitor className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold text-sm">Config UI</h4>
                          <p className="text-xs text-muted-foreground mt-1">User Interface</p>
                        </div>
                        <div className="bg-background border rounded-lg p-4 text-center shadow-sm">
                          <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <h4 className="font-semibold text-sm">Chrony Server</h4>
                          <p className="text-xs text-muted-foreground mt-1">Time Source</p>
                        </div>
                      </div>
                      
                      {/* APIs */}
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">/gettime</Badge>
                        <Badge variant="outline" className="font-mono text-xs">/settime</Badge>
                        <Badge variant="outline" className="font-mono text-xs">/chronyc/info</Badge>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary to-purple-500"></div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                        <Zap className="h-3 w-3 text-amber-500 shrink-0" />
                        <span className="text-xs font-medium whitespace-nowrap">NTP Sync (UDP 123)</span>
                      </div>
                      <div className="w-0.5 h-4 bg-purple-500"></div>
                      {/* Branching Lines - Hidden on mobile, shown on sm+ */}
                      <div className="hidden sm:block relative w-full max-w-2xl h-8">
                        <div className="absolute left-1/2 top-0 w-0.5 h-4 bg-purple-500 -translate-x-1/2"></div>
                        <div className="absolute top-4 left-[16.67%] right-[16.67%] h-0.5 bg-purple-500"></div>
                        <div className="absolute top-4 left-[16.67%] w-0.5 h-4 bg-purple-500"></div>
                        <div className="absolute top-4 left-1/2 w-0.5 h-4 bg-purple-500 -translate-x-1/2"></div>
                        <div className="absolute top-4 right-[16.67%] w-0.5 h-4 bg-purple-500"></div>
                      </div>
                      {/* Mobile: Simple arrow down */}
                      <div className="sm:hidden w-3 h-3 border-r-2 border-b-2 border-purple-500 transform rotate-45 -mt-1"></div>
                    </div>

                    {/* AIG Servers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["AIG 1", "AIG 2", "AIG N"].map((aig, index) => (
                        <div key={aig} className="border-2 border-purple-500/50 rounded-xl p-4 bg-purple-500/5">
                          <div className="text-center mb-3">
                            <h4 className="font-bold text-purple-600 dark:text-purple-400">{aig}</h4>
                            <Badge variant="secondary" className="text-xs mt-1">NTP Client</Badge>
                          </div>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Settings className="h-3 w-3" />
                              <span>Config Server</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Monitor className="h-3 w-3" />
                              <span>Different UI</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              <span>Chrony Client</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AIG APIs */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">APIs on each AIG:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="font-mono text-xs">/ntp/time</Badge>
                        <Badge variant="outline" className="font-mono text-xs">/ntp/info</Badge>
                        <Badge variant="outline" className="font-mono text-xs">/ntp/makestep</Badge>
                        <Badge variant="outline" className="font-mono text-xs">/ntp/restart</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: CCS Server APIs */}
            <section id="ccs-server" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-green-500/10 text-green-600">
                  <HardDrive className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">3. What We Have Built - CCS Server</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                On the CCS server, we have built the following APIs:
              </p>

              <div className="space-y-6">
                {/* API 1: /gettime */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono">/gettime</Badge>
                      <span className="text-lg">Get Current Time</span>
                    </CardTitle>
                    <CardDescription>Get current time of the CCS server</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Returns the current system time of the CCS server. This is the &quot;master time&quot; that all AIGs should match.
                    </p>
                  </CardContent>
                </Card>

                {/* API 2: /settime */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono">/settime</Badge>
                      <span className="text-lg">Set Time</span>
                    </CardTitle>
                    <CardDescription>Set time of the CCS server</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Allows setting/updating the CCS server&apos;s system time. Used when CCS time needs manual adjustment.
                    </p>
                  </CardContent>
                </Card>

                {/* API 3: /chronyc/info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono">/chronyc/info</Badge>
                      <span className="text-lg">Chrony Information</span>
                    </CardTitle>
                    <CardDescription>Get all information regarding Chrony</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      This API collects information from multiple sources and combines them into a single payload:
                    </p>

                    {/* /chronyc/info Response Flowchart */}
                    <div className="space-y-4">
                      {/* Main Response Box */}
                      <div className="border-2 border-cyan-500 rounded-xl p-6 bg-cyan-500/5">
                        <h4 className="text-center font-bold text-cyan-600 dark:text-cyan-400 mb-4">/chronyc/info Response</h4>
                        
                        {/* Data Sources Grid */}
                        <div className="grid gap-4">
                          {/* Data Source 1 */}
                          <div className="border rounded-lg p-4 bg-background">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                              <Network className="h-5 w-5 text-blue-500" />
                              <h5 className="font-semibold">Data Source 1: chronyc clients</h5>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                List of all AIG clients connected to CCS
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                Each client&apos;s IP address
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                Number of NTP requests from each client
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                Last time each client requested time
                              </li>
                            </ul>
                          </div>

                          {/* Data Source 2 */}
                          <div className="border rounded-lg p-4 bg-background">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                              <Activity className="h-5 w-5 text-green-500" />
                              <h5 className="font-semibold">Data Source 2: chronyc tracking</h5>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Reference ID (time source)
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Stratum level
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                System time offset
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Last offset / RMS offset
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Frequency / Skew
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Root delay and dispersion
                              </li>
                            </ul>
                          </div>

                          {/* Data Source 3 */}
                          <div className="border rounded-lg p-4 bg-background">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                              <Settings className="h-5 w-5 text-orange-500" />
                              <h5 className="font-semibold">Data Source 3: chrony.conf (config file)</h5>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                Allowed subnets
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                Makestep settings
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                Other configuration parameters
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Arrow and Combined Payload */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-cyan-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-cyan-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      <div className="flex justify-center">
                        <div className="border-2 border-purple-500 rounded-lg px-6 py-3 bg-purple-500/10">
                          <div className="flex items-center gap-2">
                            <Layers className="h-5 w-5 text-purple-500" />
                            <span className="font-semibold text-purple-600 dark:text-purple-400">Combined Payload</span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow and Frontend */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-purple-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-purple-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      <div className="flex justify-center">
                        <div className="border-2 border-green-500 rounded-lg px-6 py-3 bg-green-500/10">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-green-500" />
                            <span className="font-semibold text-green-600 dark:text-green-400">CCS Frontend Display</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">The Flow:</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>CCS server runs <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chronyc clients</code> command → gets list of connected AIGs with their IPs</li>
                        <li>CCS server runs <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chronyc tracking</code> command → gets tracking information</li>
                        <li>CCS server reads <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chrony.conf</code> file → extracts configuration parameters</li>
                        <li>All this data is combined into one payload</li>
                        <li>Payload is sent to CCS frontend for display</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: AIG Server APIs */}
            <section id="aig-server" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-600">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">4. What We Have Built - AIG Server</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                On each AIG server, we have built the following APIs:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">/ntp/time</Badge>
                    </CardTitle>
                    <CardDescription>Get current time of the AIG server</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Returns the current system time of that specific AIG. Used to compare with CCS time and calculate difference.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">/ntp/info</Badge>
                    </CardTitle>
                    <CardDescription>Get NTP/Chrony status information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Returns the sync status of the AIG&apos;s chrony client. Shows which server it&apos;s syncing from, offset, delay, and other metrics.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">/ntp/makestep</Badge>
                    </CardTitle>
                    <CardDescription>Force immediate time synchronization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tells Chrony to immediately step (jump) the time. Used when the time difference is too large for gradual adjustment.
                      <span className="text-orange-600 dark:text-orange-400"> May not always work (see Chrony Sync Problem section).</span>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">/ntp/restart</Badge>
                    </CardTitle>
                    <CardDescription>Restart the Chrony service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Stops and starts the Chrony service on the AIG. Used as a fallback when makestep doesn&apos;t work. After restart, Chrony forgets its previous state and syncs fresh.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Current Data Flow */}
            <section id="data-flow" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600">
                  <GitBranch className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">5. Current Data Flow</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                This is how the system currently works:
              </p>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-primary mb-2">Current Flow</h3>
                      <p className="text-sm text-muted-foreground">Step-by-step data flow visualization</p>
                    </div>

                    {/* Step 1 */}
                    <div className="border-2 border-blue-500/50 rounded-xl p-3 sm:p-4 bg-blue-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white font-bold text-xs sm:text-sm shrink-0">1</span>
                        <h4 className="font-semibold text-sm sm:text-base">Frontend requests data</h4>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="border-2 border-blue-500 rounded-lg px-6 py-3 bg-background shadow-sm">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-blue-500" />
                            <span className="font-medium">CCS Frontend</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-blue-500"></div>
                          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30">GET /chronyc/info</Badge>
                          <div className="w-0.5 h-4 bg-blue-500"></div>
                          <div className="w-3 h-3 border-r-2 border-b-2 border-blue-500 transform rotate-45 -mt-1.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="border-2 border-green-500/50 rounded-xl p-3 sm:p-4 bg-green-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 text-white font-bold text-xs sm:text-sm shrink-0">2</span>
                        <h4 className="font-semibold text-sm sm:text-base">CCS Server collects chrony information</h4>
                      </div>
                      <div className="flex justify-center">
                        <div className="border-2 border-green-500 rounded-lg p-4 bg-background shadow-sm max-w-md w-full">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                            <Server className="h-5 w-5 text-green-500" />
                            <span className="font-medium">CCS Server</span>
                          </div>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-green-500" />
                              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chronyc clients</code>
                              <span>→ AIG IPs</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-green-500" />
                              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chronyc tracking</code>
                              <span>→ Tracking</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ArrowRight className="h-3 w-3 text-green-500" />
                              <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chrony.conf</code>
                              <span>→ Config params</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-green-500 to-purple-500"></div>
                      <div className="w-3 h-3 border-r-2 border-b-2 border-purple-500 transform rotate-45 -mt-1.5"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="border-2 border-purple-500/50 rounded-xl p-3 sm:p-4 bg-purple-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500 text-white font-bold text-xs sm:text-sm shrink-0">3</span>
                        <h4 className="font-semibold text-sm sm:text-base">CCS Server fetches time from each AIG</h4>
                      </div>
                      <p className="text-sm text-muted-foreground text-center mb-4">For each client IP from chronyc clients:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {["AIG 1", "AIG 2", "AIG N"].map((aig) => (
                          <div key={aig} className="border-2 border-purple-500 rounded-lg p-3 bg-background shadow-sm text-center">
                            <h5 className="font-medium text-purple-600 dark:text-purple-400">{aig}</h5>
                            <Badge variant="outline" className="font-mono text-xs mt-2">GET /ntp/time</Badge>
                            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                              <ArrowRight className="h-3 w-3" />
                              <span>Returns time</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-orange-500"></div>
                      <div className="w-3 h-3 border-r-2 border-b-2 border-orange-500 transform rotate-45 -mt-1.5"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="border-2 border-orange-500/50 rounded-xl p-3 sm:p-4 bg-orange-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 text-white font-bold text-xs sm:text-sm shrink-0">4</span>
                        <h4 className="font-semibold text-sm sm:text-base">CCS Server calculates time differences</h4>
                      </div>
                      <div className="flex justify-center">
                        <div className="border-2 border-orange-500 rounded-lg p-4 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Timer className="h-5 w-5 text-orange-500" />
                            <span className="font-medium">CCS Server</span>
                          </div>
                          <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                            <span className="text-orange-600 dark:text-orange-400">For each AIG:</span><br />
                            Time Difference = CCS Time - AIG Time
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-orange-500 to-cyan-500"></div>
                      <div className="w-3 h-3 border-r-2 border-b-2 border-cyan-500 transform rotate-45 -mt-1.5"></div>
                    </div>

                    {/* Step 5 */}
                    <div className="border-2 border-cyan-500/50 rounded-xl p-3 sm:p-4 bg-cyan-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-white font-bold text-xs sm:text-sm shrink-0">5</span>
                        <h4 className="font-semibold text-sm sm:text-base">Combined payload sent to frontend</h4>
                      </div>
                      <div className="flex justify-center">
                        <div className="border-2 border-cyan-500 rounded-lg p-4 bg-background shadow-sm max-w-md w-full">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                            <Monitor className="h-5 w-5 text-cyan-500" />
                            <span className="font-medium">CCS Frontend</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">Displays:</p>
                          <ul className="grid sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                              CCS server time
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                              Each AIG client time
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                              Time difference for each AIG
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                              Chrony tracking info
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-red-500"></div>
                      <div className="w-3 h-3 border-r-2 border-b-2 border-red-500 transform rotate-45 -mt-1.5"></div>
                    </div>

                    {/* Step 6 */}
                    <div className="border-2 border-red-500/50 rounded-xl p-3 sm:p-4 bg-red-500/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500 text-white font-bold text-xs sm:text-sm shrink-0">6</span>
                        <h4 className="font-semibold text-sm sm:text-base">If diff &gt; 5s → Trigger sync</h4>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <Badge className="bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30">
                          POST /ntp/restart (to the out-of-sync AIG)
                        </Badge>
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-red-500"></div>
                          <div className="w-3 h-3 border-r-2 border-b-2 border-red-500 transform rotate-45 -mt-1.5"></div>
                        </div>
                        <div className="border-2 border-red-500 rounded-lg p-4 bg-background shadow-sm text-center">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <RefreshCw className="h-5 w-5 text-red-500" />
                            <span className="font-medium text-red-600 dark:text-red-400">AIG (X)</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Chrony Restarts &amp; Syncs Fresh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Summary of Current Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>CCS Frontend calls CCS Server&apos;s <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/chronyc/info</code></li>
                    <li>CCS Server gets client list (with IPs) from <code className="bg-muted px-1.5 py-0.5 rounded text-xs">chronyc clients</code></li>
                    <li>CCS Server calls each AIG&apos;s <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/ntp/time</code> using those IPs</li>
                    <li>CCS Server calculates time difference (CCS time - AIG time)</li>
                    <li>CCS Server sends combined payload to frontend (client info + times + differences)</li>
                    <li>Frontend displays all information</li>
                    <li>If any AIG&apos;s time difference exceeds 5 seconds, system triggers <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/ntp/restart</code> on that AIG</li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: The Chrony Sync Problem */}
            <section id="chrony-problem" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-orange-500/10 text-orange-600">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">6. The Chrony Sync Problem</h2>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                This section explains why syncing isn&apos;t always straightforward.
              </p>

              {/* Normal Behavior */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Normal Chrony Behavior
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Under normal conditions, Chrony automatically keeps time synchronized:
                  </p>
                  {/* Normal Sync Flowchart */}
                  <div className="border-2 border-green-500/50 rounded-xl p-6 bg-green-500/5">
                    <h4 className="text-center font-bold text-green-600 dark:text-green-400 mb-6">Normal Sync (Automatic)</h4>
                    
                    <div className="flex flex-col items-center gap-4">
                      {/* CCS Time Box */}
                      <div className="border-2 border-primary rounded-lg px-6 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <span className="text-sm text-muted-foreground">CCS Time:</span>
                            <span className="font-mono font-bold ml-2">10:00:00.000</span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow with Label */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-green-500"></div>
                        <div className="px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30">
                          <span className="text-xs font-medium text-green-700 dark:text-green-400">Chrony syncs automatically (gradual adjustment)</span>
                        </div>
                        <div className="w-0.5 h-4 bg-green-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      {/* AIG Time Box */}
                      <div className="border-2 border-green-500 rounded-lg px-6 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="h-5 w-5 text-green-500" />
                          <div>
                            <span className="text-sm text-muted-foreground">AIG Time:</span>
                            <span className="font-mono font-bold ml-2">10:00:00.002</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-sm font-medium">Only 2ms difference - ACCEPTABLE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Chrony prefers to &quot;slew&quot; (gradually adjust) time rather than &quot;step&quot; (jump) time. This prevents applications from getting confused by sudden time changes.
                  </p>
                </CardContent>
              </Card>

              {/* The Problem */}
              <Card className="mb-6 border-orange-500/30">
                <CardHeader className="bg-orange-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-orange-600" />
                    The Problem: When makestep Doesn&apos;t Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Chrony has a safety mechanism. If it sees a very large time difference while running, it becomes suspicious.
                    This behavior is documented in the official Chrony documentation.
                  </p>

                  {/* Official Documentation Reference */}
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Official Documentation Reference
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      According to the official Chrony documentation, the <code className="bg-muted px-1.5 py-0.5 rounded text-xs">makestep</code> directive 
                      only allows stepping the clock during the first few updates after start. After that, Chrony will only slew (gradually adjust) 
                      the time to avoid disrupting running applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="https://chrony-project.org/doc/4.3/chrony.conf.html#makestep"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
                      >
                        <ArrowRight className="h-3 w-3" />
                        chrony.conf - makestep directive
                      </a>
                      <a
                        href="https://chrony-project.org/faq.html#_i_keep_getting_the_error_509_no_memory"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
                      >
                        <ArrowRight className="h-3 w-3" />
                        Chrony FAQ - Time Synchronization
                      </a>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Why Chrony Refuses to Sync:</h4>
                  {/* Why Chrony Refuses Flowchart */}
                  <div className="border-2 border-orange-500/50 rounded-xl p-6 bg-orange-500/5 mb-6">
                    <h5 className="text-center font-semibold text-orange-600 dark:text-orange-400 mb-4">
                      Scenario: AIG has been running, time has drifted significantly
                    </h5>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {/* CCS Time */}
                      <div className="border-2 border-primary rounded-lg px-4 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="text-sm text-muted-foreground">CCS Time:</span>
                          <span className="font-mono font-bold">10:00:00</span>
                        </div>
                      </div>
                      {/* AIG Time */}
                      <div className="border-2 border-red-500 rounded-lg px-4 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-red-500" />
                          <span className="text-sm text-muted-foreground">AIG Time:</span>
                          <span className="font-mono font-bold">10:00:15</span>
                          <Badge variant="destructive" className="text-xs">15s behind</Badge>
                        </div>
                      </div>
                    </div>

                    {/* What Chrony Thinks Box */}
                    <div className="border-2 border-amber-500 rounded-xl p-4 bg-amber-500/10 mb-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                        <div>
                          <h6 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">What Chrony thinks:</h6>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            &quot;The server is telling me the time is 15 seconds different. This is too big of a jump. Either:&quot;
                          </p>
                          <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                              The server is <strong>WRONG</strong>, OR
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                              Something <strong>SUSPICIOUS</strong> is happening
                            </li>
                          </ul>
                          <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                            &quot;I will NOT trust this server anymore.&quot;
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Result Box */}
                    <div className="border-2 border-red-500 rounded-lg p-4 bg-red-500/10">
                      <div className="flex items-center gap-3">
                        <XCircle className="h-6 w-6 text-red-500" />
                        <div>
                          <span className="font-semibold text-red-600 dark:text-red-400">RESULT: </span>
                          <span className="text-sm text-muted-foreground">Chrony marks server as untrustworthy and <strong>REFUSES to sync</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">This is why makestep fails:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Situation</th>
                          <th className="text-left py-3 px-4 font-semibold">Chrony&apos;s Response</th>
                          <th className="text-left py-3 px-4 font-semibold">makestep Works?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 text-muted-foreground">Small difference (&lt; 1 second)</td>
                          <td className="py-3 px-4 text-muted-foreground">Normal slew adjustment</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">Yes (not needed)</Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 text-muted-foreground">Medium difference (1-5 seconds)</td>
                          <td className="py-3 px-4 text-muted-foreground">May step if configured</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30">Sometimes</Badge>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 text-muted-foreground">Large difference (&gt; 5 seconds) while running</td>
                          <td className="py-3 px-4 text-muted-foreground">Treats as suspicious</td>
                          <td className="py-3 px-4">
                            <Badge variant="destructive">No</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-muted-foreground">After fresh start</td>
                          <td className="py-3 px-4 text-muted-foreground">No previous state, trusts server</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">Yes</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* The Solution */}
              <Card className="border-green-500/30">
                <CardHeader className="bg-green-500/5">
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-green-600" />
                    The Solution: Restart Chrony
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    When makestep doesn&apos;t work, we restart Chrony:
                  </p>
                  {/* Before/After Restart Comparison */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                    {/* Before Restart */}
                    <div className="border-2 border-red-500/50 rounded-xl p-3 sm:p-4 bg-red-500/5">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-red-500/30">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <h5 className="font-bold text-red-600 dark:text-red-400">BEFORE RESTART</h5>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-sm font-semibold mb-2">Chrony State:</h6>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                              Has been running for hours
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                              Remembers drift history
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                              Has trust with server
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-sm font-semibold mb-2">Sees 15 second jump:</h6>
                          <div className="border-2 border-red-500 rounded-lg p-3 bg-background">
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                              <XCircle className="h-4 w-4" />
                              <span className="font-medium">REFUSES TO SYNC</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow for mobile */}
                    <div className="sm:hidden flex justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                        <RefreshCw className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Restart</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* After Restart */}
                    <div className="border-2 border-green-500/50 rounded-xl p-3 sm:p-4 bg-green-500/5 relative">
                      {/* Desktop Arrow */}
                      <div className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 items-center">
                        <div className="w-4 h-0.5 bg-green-500"></div>
                        <div className="w-2 h-2 border-r-2 border-t-2 border-green-500 transform rotate-45 -ml-1"></div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500/30">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <h5 className="font-bold text-green-600 dark:text-green-400">AFTER RESTART</h5>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h6 className="text-sm font-semibold mb-2">Chrony State:</h6>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                              Fresh start
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                              No memory of past
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                              No trust issues
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-sm font-semibold mb-2">Sees 15 second difference:</h6>
                          <div className="border-2 border-green-500 rounded-lg p-3 bg-background">
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="font-medium">ACCEPTS AND SYNCS</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="font-medium">Uses makestep on first sync</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-4">
                    This is why our flow uses <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/ntp/restart</code> when time difference exceeds 5 seconds.
                  </p>

                  {/* Why Restart Works - Documentation Reference */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Why Restart Works
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      According to the Chrony documentation, the <code className="bg-muted px-1.5 py-0.5 rounded text-xs">makestep</code> directive 
                      specifies a threshold and limit. For example, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">makestep 1 3</code> means 
                      &quot;step the clock if the adjustment is larger than 1 second, but only during the first 3 clock updates.&quot; After these initial 
                      updates, Chrony refuses to step and will only slew. Restarting Chrony resets this counter.
                    </p>
                    <a
                      href="https://chrony-project.org/doc/4.3/chrony.conf.html#makestep"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 underline underline-offset-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      Read the official makestep documentation
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Approach 1 - Backend-Driven */}
            <section id="approach-backend" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600">
                  <Server className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">7. Approach 1: Backend-Driven (Current)</h2>
                  <p className="text-muted-foreground mt-1">This is what we currently have implemented.</p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Backend-Driven Approach Flowchart */}
                  <div className="border-2 border-indigo-500/50 rounded-xl p-6 bg-indigo-500/5 mb-6">
                    <h4 className="text-center font-bold text-indigo-600 dark:text-indigo-400 mb-6">Backend-Driven Approach</h4>
                    
                    <div className="flex flex-col items-center gap-4">
                      {/* CCS Frontend */}
                      <div className="border-2 border-indigo-500 rounded-lg px-6 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-indigo-500" />
                          <span className="font-medium">CCS Frontend</span>
                        </div>
                      </div>

                      {/* Arrow with Label */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-indigo-500"></div>
                        <Badge className="bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-500/30">
                          Single Request: GET /chronyc/info
                        </Badge>
                        <div className="w-0.5 h-4 bg-indigo-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-indigo-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      {/* CCS Server */}
                      <div className="border-2 border-indigo-600 rounded-lg p-4 bg-background shadow-sm text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Server className="h-5 w-5 text-indigo-600" />
                          <span className="font-medium">CCS Server</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Does ALL the work</p>
                      </div>

                      {/* Branching Arrow */}
                      <div className="flex flex-col items-center w-full">
                        <div className="w-0.5 h-4 bg-purple-500"></div>
                        {/* Desktop: Branching lines */}
                        <div className="hidden sm:block relative w-full max-w-lg h-6">
                          <div className="absolute left-1/2 top-0 w-0.5 h-3 bg-purple-500 -translate-x-1/2"></div>
                          <div className="absolute top-3 left-[16.67%] right-[16.67%] h-0.5 bg-purple-500"></div>
                          <div className="absolute top-3 left-[16.67%] w-0.5 h-3 bg-purple-500"></div>
                          <div className="absolute top-3 left-1/2 w-0.5 h-3 bg-purple-500 -translate-x-1/2"></div>
                          <div className="absolute top-3 right-[16.67%] w-0.5 h-3 bg-purple-500"></div>
                        </div>
                        {/* Mobile: Simple arrow */}
                        <div className="sm:hidden w-3 h-3 border-r-2 border-b-2 border-purple-500 transform rotate-45 -mt-1"></div>
                      </div>

                      {/* AIGs */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg">
                        {["AIG 1", "AIG 2", "AIG N"].map((aig) => (
                          <div key={aig} className="border-2 border-purple-500 rounded-lg p-2 sm:p-3 bg-background shadow-sm text-center">
                            <span className="font-medium text-purple-600 dark:text-purple-400 text-sm">{aig}</span>
                            <Badge variant="outline" className="font-mono text-xs mt-1 block">GET /ntp/time</Badge>
                          </div>
                        ))}
                      </div>

                      {/* Returns time labels */}
                      <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3" />
                        <span>Returns time</span>
                      </div>

                      {/* Arrow down */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-cyan-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-cyan-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      {/* Combined Response */}
                      <div className="border-2 border-cyan-500 rounded-lg px-6 py-3 bg-cyan-500/10">
                        <div className="flex items-center gap-2">
                          <Layers className="h-5 w-5 text-cyan-500" />
                          <div>
                            <span className="font-medium text-cyan-600 dark:text-cyan-400">Combined Response</span>
                            <span className="text-xs text-muted-foreground ml-2">(All data in ONE)</span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow down */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-green-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      {/* CCS Frontend Display */}
                      <div className="border-2 border-green-500 rounded-lg px-6 py-3 bg-background shadow-sm">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-green-500" />
                          <div>
                            <span className="font-medium">CCS Frontend</span>
                            <span className="text-sm text-muted-foreground ml-2">Just displays</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Description:</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Frontend makes ONE request to CCS Server</li>
                    <li>CCS Server does ALL the work:
                      <ul className="ml-6 mt-1 space-y-1 list-disc list-inside">
                        <li>Gets chrony information</li>
                        <li>Calls each AIG to get their time</li>
                        <li>Calculates time differences</li>
                        <li>Combines everything into one response</li>
                      </ul>
                    </li>
                    <li>Frontend receives complete data and displays it</li>
                  </ol>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-500/30">
                  <CardHeader className="bg-green-500/5">
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Simple Frontend</td>
                            <td className="py-2 px-2 text-muted-foreground">Frontend only needs to make one API call</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Centralized Logic</td>
                            <td className="py-2 px-2 text-muted-foreground">All calculation and aggregation happens in one place</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">No CORS Issues</td>
                            <td className="py-2 px-2 text-muted-foreground">Server-to-server calls, no browser restrictions</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Frontend doesn&apos;t need AIG IPs</td>
                            <td className="py-2 px-2 text-muted-foreground">Frontend only knows about CCS</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/30">
                  <CardHeader className="bg-red-500/5">
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <XCircle className="h-5 w-5" />
                      Disadvantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">CCS Server Load</td>
                            <td className="py-2 px-2 text-muted-foreground">CCS does all the work, can become a bottleneck</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Sequential Calls</td>
                            <td className="py-2 px-2 text-muted-foreground">If one AIG is slow, entire response is delayed</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Single Point of Failure</td>
                            <td className="py-2 px-2 text-muted-foreground">If CCS Server is overloaded, nothing works</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Scalability</td>
                            <td className="py-2 px-2 text-muted-foreground">Adding more AIGs increases CCS server load proportionally</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 8: Approach 2 - Frontend-Driven */}
            <section id="approach-frontend" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-pink-500/10 text-pink-600">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">8. Approach 2: Frontend-Driven</h2>
                  <p className="text-muted-foreground mt-1">An alternative approach where the frontend does more work.</p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Frontend-Driven Approach Flowchart */}
                  <div className="border-2 border-pink-500/50 rounded-xl p-6 bg-pink-500/5 mb-6">
                    <h4 className="text-center font-bold text-pink-600 dark:text-pink-400 mb-6">Frontend-Driven Approach</h4>
                    
                    <div className="flex flex-col items-center gap-4">
                      {/* CCS Frontend */}
                      <div className="border-2 border-pink-500 rounded-lg px-6 py-3 bg-background shadow-sm text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Monitor className="h-5 w-5 text-pink-500" />
                          <span className="font-medium">CCS Frontend</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Makes N+1 calls</p>
                      </div>

                      {/* Branching - PARALLEL badge */}
                      <Badge className="bg-pink-500/20 text-pink-700 dark:text-pink-400 border-pink-500/30">
                        <Zap className="h-3 w-3 mr-1" />
                        All requests in PARALLEL
                      </Badge>

                      {/* Branching Arrow */}
                      <div className="flex flex-col items-center w-full">
                        <div className="w-0.5 h-2 bg-pink-500"></div>
                        {/* Desktop: Branching lines */}
                        <div className="hidden sm:block relative w-full max-w-xl h-6">
                          <div className="absolute left-1/2 top-0 w-0.5 h-3 bg-pink-500 -translate-x-1/2"></div>
                          <div className="absolute top-3 left-[10%] right-[10%] h-0.5 bg-pink-500"></div>
                          <div className="absolute top-3 left-[10%] w-0.5 h-3 bg-pink-500"></div>
                          <div className="absolute top-3 left-1/2 w-0.5 h-3 bg-pink-500 -translate-x-1/2"></div>
                          <div className="absolute top-3 right-[10%] w-0.5 h-3 bg-pink-500"></div>
                        </div>
                        {/* Mobile: Simple arrow */}
                        <div className="sm:hidden w-3 h-3 border-r-2 border-b-2 border-pink-500 transform rotate-45 -mt-1"></div>
                      </div>

                      {/* Servers Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl">
                        {/* CCS Server */}
                        <div className="border-2 border-indigo-500 rounded-lg p-3 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Server className="h-4 w-4 text-indigo-500" />
                            <span className="font-medium text-sm">CCS Server</span>
                          </div>
                          <Badge variant="outline" className="font-mono text-xs">GET /chronyc/info</Badge>
                          <p className="text-xs text-muted-foreground mt-2">Returns client list &amp; info</p>
                        </div>

                        {/* AIG 1 */}
                        <div className="border-2 border-purple-500 rounded-lg p-3 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <HardDrive className="h-4 w-4 text-purple-500" />
                            <span className="font-medium text-sm text-purple-600 dark:text-purple-400">AIG 1</span>
                          </div>
                          <Badge variant="outline" className="font-mono text-xs">GET /ntp/time</Badge>
                          <p className="text-xs text-muted-foreground mt-2">Returns time</p>
                        </div>

                        {/* AIG N */}
                        <div className="border-2 border-purple-500 rounded-lg p-3 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <HardDrive className="h-4 w-4 text-purple-500" />
                            <span className="font-medium text-sm text-purple-600 dark:text-purple-400">AIG N</span>
                          </div>
                          <Badge variant="outline" className="font-mono text-xs">GET /ntp/time</Badge>
                          <p className="text-xs text-muted-foreground mt-2">Returns time</p>
                        </div>
                      </div>

                      {/* Arrow down */}
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-green-500"></div>
                        <div className="w-3 h-3 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1.5"></div>
                      </div>

                      {/* CCS Frontend Result */}
                      <div className="border-2 border-green-500 rounded-lg p-4 bg-background shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Monitor className="h-5 w-5 text-green-500" />
                          <span className="font-medium">CCS Frontend</span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            Calculates differences
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            Displays all information
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">Description:</h4>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Frontend makes request to CCS Server for client list and chrony info</li>
                    <li>Frontend receives list of AIG IPs from the response</li>
                    <li>Frontend makes PARALLEL requests to each AIG&apos;s <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/ntp/time</code></li>
                    <li>Frontend calculates time differences itself</li>
                    <li>Frontend displays all information</li>
                    <li>If difference &gt; 5 seconds, frontend calls <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/ntp/restart</code> on that AIG</li>
                  </ol>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-500/30">
                  <CardHeader className="bg-green-500/5">
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Parallel Requests</td>
                            <td className="py-2 px-2 text-muted-foreground">All AIG time requests happen simultaneously</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Reduced CCS Load</td>
                            <td className="py-2 px-2 text-muted-foreground">CCS only provides client list, not time fetching</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Faster Response</td>
                            <td className="py-2 px-2 text-muted-foreground">One slow AIG doesn&apos;t block others</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Better Scalability</td>
                            <td className="py-2 px-2 text-muted-foreground">Adding AIGs doesn&apos;t increase CCS load</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/30">
                  <CardHeader className="bg-red-500/5">
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <XCircle className="h-5 w-5" />
                      Disadvantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">CORS Required</td>
                            <td className="py-2 px-2 text-muted-foreground">Browser needs permission to call AIG servers directly</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Frontend Complexity</td>
                            <td className="py-2 px-2 text-muted-foreground">More logic in the frontend</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Security Exposure</td>
                            <td className="py-2 px-2 text-muted-foreground">Frontend knows all AIG IPs</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Multiple Requests</td>
                            <td className="py-2 px-2 text-muted-foreground">Frontend makes N+1 requests instead of 1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 9: Approach 3 - Database-Driven */}
            <section id="approach-database" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">9. Approach 3: Database-Driven</h2>
                  <p className="text-muted-foreground mt-1">This approach introduces a database to store time information.</p>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Database-Driven Approach Flowchart */}
                  <div className="space-y-6">
                    <h4 className="text-center font-bold text-amber-600 dark:text-amber-400">Database-Driven Approach</h4>

                    {/* Part A: Data Collection */}
                    <div className="border-2 border-blue-500/50 rounded-xl p-3 sm:p-4 bg-blue-500/5">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-500/30">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs shrink-0">A</span>
                        <h5 className="font-semibold text-sm sm:text-base">Data Collection (Background Process)</h5>
                      </div>
                      
                      <div className="flex flex-col items-center gap-4">
                        {/* Agents */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                          {[
                            { name: "CCS Agent", color: "primary" },
                            { name: "AIG 1 Agent", color: "purple-500" },
                            { name: "AIG N Agent", color: "purple-500" }
                          ].map((agent) => (
                            <div key={agent.name} className={`border-2 border-${agent.color} rounded-lg p-3 bg-background shadow-sm text-center`}>
                              <div className="flex items-center justify-center gap-2 mb-1">
                                <Settings className={`h-4 w-4 text-${agent.color}`} />
                                <span className="font-medium text-sm">{agent.name}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">Every X sec writes time</p>
                            </div>
                          ))}
                        </div>

                        {/* Arrows converging */}
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-blue-500"></div>
                          <div className="w-3 h-3 border-r-2 border-b-2 border-blue-500 transform rotate-45 -mt-1.5"></div>
                        </div>

                        {/* Database */}
                        <div className="border-2 border-amber-500 rounded-lg p-4 bg-amber-500/10 w-full max-w-sm">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Database className="h-5 w-5 text-amber-500" />
                            <span className="font-semibold text-amber-600 dark:text-amber-400">DATABASE</span>
                          </div>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-amber-500"></span>
                              CCS time, AIG times, Timestamps
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Part B: Data Processing */}
                    <div className="border-2 border-green-500/50 rounded-xl p-3 sm:p-4 bg-green-500/5">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500/30">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white font-bold text-xs shrink-0">B</span>
                        <h5 className="font-semibold text-sm sm:text-base">Data Processing (Background Job)</h5>
                      </div>
                      
                      <div className="flex flex-col items-center gap-3">
                        {/* Database read */}
                        <div className="border-2 border-amber-500 rounded-lg px-4 py-2 bg-background">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-amber-500" />
                            <span className="text-sm font-medium">DATABASE</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-3 bg-green-500"></div>
                          <Badge variant="outline" className="text-xs">Read latest times</Badge>
                          <div className="w-0.5 h-3 bg-green-500"></div>
                          <div className="w-2 h-2 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1"></div>
                        </div>

                        {/* Sync Calculator */}
                        <div className="border-2 border-green-500 rounded-lg p-4 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Activity className="h-5 w-5 text-green-500" />
                            <span className="font-medium">Sync Calculator (Background Job)</span>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              Calculate differences
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              Update sync status
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              Trigger sync if needed
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-3 bg-green-500"></div>
                          <Badge variant="outline" className="text-xs">Write results</Badge>
                          <div className="w-0.5 h-3 bg-green-500"></div>
                          <div className="w-2 h-2 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1"></div>
                        </div>

                        {/* Database write */}
                        <div className="border-2 border-amber-500 rounded-lg px-4 py-2 bg-amber-500/10">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-amber-500" />
                            <span className="text-sm">sync_status table updated</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Part C: Data Display */}
                    <div className="border-2 border-cyan-500/50 rounded-xl p-3 sm:p-4 bg-cyan-500/5">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-500/30">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500 text-white font-bold text-xs shrink-0">C</span>
                        <h5 className="font-semibold text-sm sm:text-base">Data Display (Frontend Request)</h5>
                      </div>
                      
                      <div className="flex flex-col items-center gap-3">
                        {/* Frontend */}
                        <div className="border-2 border-cyan-500 rounded-lg px-4 py-2 bg-background">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-4 w-4 text-cyan-500" />
                            <span className="text-sm font-medium">CCS Frontend</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-2 bg-cyan-500"></div>
                          <Badge className="bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-500/30 text-xs">GET /api/sync-status</Badge>
                          <div className="w-0.5 h-2 bg-cyan-500"></div>
                          <div className="w-2 h-2 border-r-2 border-b-2 border-cyan-500 transform rotate-45 -mt-1"></div>
                        </div>

                        {/* Server */}
                        <div className="border-2 border-indigo-500 rounded-lg px-4 py-2 bg-background">
                          <div className="flex items-center gap-2">
                            <Server className="h-4 w-4 text-indigo-500" />
                            <span className="text-sm font-medium">CCS Server</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-2 bg-indigo-500"></div>
                          <Badge variant="outline" className="text-xs">Single query</Badge>
                          <div className="w-0.5 h-2 bg-indigo-500"></div>
                          <div className="w-2 h-2 border-r-2 border-b-2 border-indigo-500 transform rotate-45 -mt-1"></div>
                        </div>

                        {/* Database */}
                        <div className="border-2 border-amber-500 rounded-lg px-4 py-2 bg-amber-500/10">
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-amber-500" />
                            <span className="text-sm">Pre-computed sync status</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-2 bg-green-500"></div>
                          <Badge variant="outline" className="text-xs">Return data</Badge>
                          <div className="w-0.5 h-2 bg-green-500"></div>
                          <div className="w-2 h-2 border-r-2 border-b-2 border-green-500 transform rotate-45 -mt-1"></div>
                        </div>

                        {/* Frontend Result */}
                        <div className="border-2 border-green-500 rounded-lg p-3 bg-background shadow-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <Monitor className="h-4 w-4 text-green-500" />
                            <span className="font-medium text-sm">CCS Frontend</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Just displays data (no calculations)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge>Part A</Badge> Data Collection
                    </h4>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-4">
                      <li>An &quot;agent&quot; runs on CCS that writes CCS time to database every X seconds</li>
                      <li>An &quot;agent&quot; runs on each AIG that writes AIG time to database every X seconds</li>
                      <li>All time data is continuously stored in the database</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge>Part B</Badge> Data Processing
                    </h4>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-4">
                      <li>A background job reads the latest times from the database</li>
                      <li>Calculates time differences between CCS and each AIG</li>
                      <li>Determines sync status (SYNCED, WARNING, CRITICAL)</li>
                      <li>If difference &gt; 5 seconds, triggers sync action</li>
                      <li>Writes results back to database</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge>Part C</Badge> Data Display
                    </h4>
                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-4">
                      <li>Frontend makes ONE simple request</li>
                      <li>Server queries database for pre-computed results</li>
                      <li>Returns all sync status information</li>
                      <li>Frontend just displays the data (no calculations needed)</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Database Tables */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>What Gets Stored in the Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Table: nodes */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-sm">Table: nodes</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm border">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-3 font-semibold">node_id</th>
                              <th className="text-left py-2 px-3 font-semibold">node_type</th>
                              <th className="text-left py-2 px-3 font-semibold">ip_address</th>
                              <th className="text-left py-2 px-3 font-semibold">hostname</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono">
                            <tr className="border-b">
                              <td className="py-2 px-3">ccs-01</td>
                              <td className="py-2 px-3">CCS</td>
                              <td className="py-2 px-3">192.168.1.1</td>
                              <td className="py-2 px-3">ccs-main</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-01</td>
                              <td className="py-2 px-3">AIG</td>
                              <td className="py-2 px-3">192.168.1.101</td>
                              <td className="py-2 px-3">aig-one</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3">aig-02</td>
                              <td className="py-2 px-3">AIG</td>
                              <td className="py-2 px-3">192.168.1.102</td>
                              <td className="py-2 px-3">aig-two</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Table: time_reports */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-sm">Table: time_reports <span className="text-muted-foreground font-normal">(agents write here every X seconds)</span></h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm border">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-3 font-semibold">node_id</th>
                              <th className="text-left py-2 px-3 font-semibold">reported_time</th>
                              <th className="text-left py-2 px-3 font-semibold">created_at</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono text-xs">
                            <tr className="border-b">
                              <td className="py-2 px-3">ccs-01</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00.000</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-01</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00.002</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-02</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00.015</td>
                              <td className="py-2 px-3">2024-01-15 10:30:00</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 text-muted-foreground">...</td>
                              <td className="py-2 px-3 text-muted-foreground">...</td>
                              <td className="py-2 px-3 text-muted-foreground">...</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Table: sync_status */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-sm">Table: sync_status <span className="text-muted-foreground font-normal">(background job writes here)</span></h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm border">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-3 font-semibold">node_id</th>
                              <th className="text-left py-2 px-3 font-semibold">ccs_time</th>
                              <th className="text-left py-2 px-3 font-semibold">node_time</th>
                              <th className="text-left py-2 px-3 font-semibold">time_diff_ms</th>
                              <th className="text-left py-2 px-3 font-semibold">sync_state</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono text-xs">
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-01</td>
                              <td className="py-2 px-3">10:30:00.000</td>
                              <td className="py-2 px-3">10:30:00.002</td>
                              <td className="py-2 px-3">2</td>
                              <td className="py-2 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400 text-xs">SYNCED</Badge></td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-02</td>
                              <td className="py-2 px-3">10:30:00.000</td>
                              <td className="py-2 px-3">10:30:00.015</td>
                              <td className="py-2 px-3">15</td>
                              <td className="py-2 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400 text-xs">SYNCED</Badge></td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3">aig-03</td>
                              <td className="py-2 px-3">10:30:00.000</td>
                              <td className="py-2 px-3">10:30:06.234</td>
                              <td className="py-2 px-3">6234</td>
                              <td className="py-2 px-3"><Badge variant="destructive" className="text-xs">CRITICAL</Badge></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Table: sync_actions */}
                    <div>
                      <h4 className="font-semibold mb-2 font-mono text-sm">Table: sync_actions <span className="text-muted-foreground font-normal">(audit log)</span></h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs sm:text-sm border">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-3 font-semibold">node_id</th>
                              <th className="text-left py-2 px-3 font-semibold">action_type</th>
                              <th className="text-left py-2 px-3 font-semibold">triggered_by</th>
                              <th className="text-left py-2 px-3 font-semibold">success</th>
                              <th className="text-left py-2 px-3 font-semibold">created_at</th>
                            </tr>
                          </thead>
                          <tbody className="font-mono text-xs">
                            <tr className="border-b">
                              <td className="py-2 px-3">aig-03</td>
                              <td className="py-2 px-3">RESTART</td>
                              <td className="py-2 px-3">SYSTEM</td>
                              <td className="py-2 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400 text-xs">true</Badge></td>
                              <td className="py-2 px-3">2024-01-15 10:30:01</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3">aig-01</td>
                              <td className="py-2 px-3">MAKESTEP</td>
                              <td className="py-2 px-3">USER</td>
                              <td className="py-2 px-3"><Badge variant="destructive" className="text-xs">false</Badge></td>
                              <td className="py-2 px-3">2024-01-15 09:15:00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-500/30">
                  <CardHeader className="bg-green-500/5">
                    <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Fastest Frontend</td>
                            <td className="py-2 px-2 text-muted-foreground">Just reads pre-computed data, no calculations</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Historical Data</td>
                            <td className="py-2 px-2 text-muted-foreground">Can see time drift patterns over days/weeks</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Audit Trail</td>
                            <td className="py-2 px-2 text-muted-foreground">Record of all sync actions taken</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Best Scalability</td>
                            <td className="py-2 px-2 text-muted-foreground">100 or 1000 AIGs, frontend query is the same</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Offline Resilience</td>
                            <td className="py-2 px-2 text-muted-foreground">If AIG is temporarily unreachable, last known state is preserved</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Alerting Capability</td>
                            <td className="py-2 px-2 text-muted-foreground">Can build alerts based on patterns, not just thresholds</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/30">
                  <CardHeader className="bg-red-500/5">
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                      <XCircle className="h-5 w-5" />
                      Disadvantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Additional Infrastructure</td>
                            <td className="py-2 px-2 text-muted-foreground">Need to set up and maintain a database</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Agent Deployment</td>
                            <td className="py-2 px-2 text-muted-foreground">Need to install and run agents on every server</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">Slight Delay</td>
                            <td className="py-2 px-2 text-muted-foreground">Data is X seconds old (not real-time)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-2 font-medium">More Complexity</td>
                            <td className="py-2 px-2 text-muted-foreground">More moving parts to manage</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-2 font-medium">Storage Requirements</td>
                            <td className="py-2 px-2 text-muted-foreground">Database grows over time, needs cleanup strategy</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 10: Comparison and Recommendation */}
            <section id="comparison" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">10. Comparison and Recommendation</h2>
                </div>
              </div>

              {/* Side-by-Side Comparison */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Side-by-Side Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left py-3 px-3 font-semibold">Factor</th>
                          <th className="text-left py-3 px-3 font-semibold">Backend-Driven</th>
                          <th className="text-left py-3 px-3 font-semibold">Frontend-Driven</th>
                          <th className="text-left py-3 px-3 font-semibold">Database-Driven</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Frontend Requests</td>
                          <td className="py-3 px-3">1</td>
                          <td className="py-3 px-3">N+1</td>
                          <td className="py-3 px-3">1</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">CCS Server Load</td>
                          <td className="py-3 px-3"><Badge variant="destructive">HIGH</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">LOW</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">LOW</Badge></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Response Speed</td>
                          <td className="py-3 px-3 text-muted-foreground">Slowest (sequential)</td>
                          <td className="py-3 px-3 text-muted-foreground">Fast (parallel)</td>
                          <td className="py-3 px-3 text-muted-foreground">Fastest (pre-computed)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Real-time Accuracy</td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">HIGH</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">HIGH</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">MEDIUM</Badge></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Scalability</td>
                          <td className="py-3 px-3"><Badge variant="destructive">POOR</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">GOOD</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400">EXCELLENT</Badge></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Historical Data</td>
                          <td className="py-3 px-3 text-muted-foreground">NO</td>
                          <td className="py-3 px-3 text-muted-foreground">NO</td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">YES</Badge></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Audit Trail</td>
                          <td className="py-3 px-3 text-muted-foreground">NO</td>
                          <td className="py-3 px-3 text-muted-foreground">NO</td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">YES</Badge></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Infrastructure Needed</td>
                          <td className="py-3 px-3 text-muted-foreground">None</td>
                          <td className="py-3 px-3 text-muted-foreground">CORS setup</td>
                          <td className="py-3 px-3 text-muted-foreground">Database + Agents</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-3 font-medium">Frontend Complexity</td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">LOW</Badge></td>
                          <td className="py-3 px-3"><Badge variant="destructive">HIGH</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">LOW</Badge></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">Backend Complexity</td>
                          <td className="py-3 px-3"><Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">MEDIUM</Badge></td>
                          <td className="py-3 px-3"><Badge className="bg-green-500/20 text-green-700 dark:text-green-400">LOW</Badge></td>
                          <td className="py-3 px-3"><Badge variant="destructive">HIGH (initial)</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* When to Use Each */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="bg-indigo-500/5">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Server className="h-5 w-5 text-indigo-600" />
                      Backend-Driven
                    </CardTitle>
                    <CardDescription>Use when...</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span>You have few AIGs (3-5)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span>Simple setup is priority</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span>Historical data is not needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                        <span>CCS server has capacity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-pink-500/5">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-pink-600" />
                      Frontend-Driven
                    </CardTitle>
                    <CardDescription>Use when...</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                        <span>Moderate number of AIGs (5-15)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                        <span>Response speed is important</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                        <span>You can configure CORS on all AIGs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                        <span>Frontend team can handle complexity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-amber-500/5">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-amber-600" />
                      Database-Driven
                    </CardTitle>
                    <CardDescription>Use when...</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>You have many AIGs (10+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>Need historical data for analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>Need audit trail of sync actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>Want to build pattern-based alerting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>Slight delay (few seconds) is acceptable</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendation */}
              <Card className="border-emerald-500/30 bg-emerald-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-600" />
                    Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For a production system that will grow over time, the <strong className="text-foreground">Database-Driven approach</strong> is recommended because:
                  </p>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside mb-4">
                    <li><strong className="text-foreground">Scalability</strong> - Adding more AIGs doesn&apos;t impact performance</li>
                    <li><strong className="text-foreground">Historical Analysis</strong> - Can identify patterns and recurring issues</li>
                    <li><strong className="text-foreground">Audit Compliance</strong> - Record of all sync actions</li>
                    <li><strong className="text-foreground">Reduced Load</strong> - CCS server and AIGs have predictable, constant load</li>
                    <li><strong className="text-foreground">Better Monitoring</strong> - Can build dashboards showing trends over time</li>
                  </ol>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Trade-off to Accept:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Data displayed is a few seconds old (not millisecond-accurate real-time)</li>
                      <li>• Requires database infrastructure setup</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Summary Tables */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Summary</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>APIs Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold">Endpoint</th>
                            <th className="text-left py-3 px-4 font-semibold">What It Does</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">CCS /gettime</td>
                            <td className="py-3 px-4 text-muted-foreground">Returns CCS server time</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">CCS /settime</td>
                            <td className="py-3 px-4 text-muted-foreground">Sets CCS server time</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">CCS /chronyc/info</td>
                            <td className="py-3 px-4 text-muted-foreground">Returns combined chrony data (clients + tracking + config)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">AIG /ntp/time</td>
                            <td className="py-3 px-4 text-muted-foreground">Returns AIG server time</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">AIG /ntp/info</td>
                            <td className="py-3 px-4 text-muted-foreground">Returns AIG chrony status</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-mono text-xs">AIG /ntp/makestep</td>
                            <td className="py-3 px-4 text-muted-foreground">Forces time sync (may not work if drift is large)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-mono text-xs">AIG /ntp/restart</td>
                            <td className="py-3 px-4 text-muted-foreground">Restarts chrony (works when makestep fails)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Flow Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold">Step</th>
                            <th className="text-left py-3 px-4 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Step 1</td>
                            <td className="py-3 px-4 text-muted-foreground">Frontend calls CCS <code className="bg-muted px-1 py-0.5 rounded text-xs">/chronyc/info</code></td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Step 2</td>
                            <td className="py-3 px-4 text-muted-foreground">CCS gets client list, calls each AIG&apos;s <code className="bg-muted px-1 py-0.5 rounded text-xs">/ntp/time</code></td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Step 3</td>
                            <td className="py-3 px-4 text-muted-foreground">CCS calculates differences, sends combined response</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Step 4</td>
                            <td className="py-3 px-4 text-muted-foreground">Frontend displays all data</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">Step 5</td>
                            <td className="py-3 px-4 text-muted-foreground">If diff &gt; 5s, trigger <code className="bg-muted px-1 py-0.5 rounded text-xs">/ntp/restart</code> on that AIG</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Approach Options Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold">Approach</th>
                            <th className="text-left py-3 px-4 font-semibold">Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Backend-Driven</td>
                            <td className="py-3 px-4 text-muted-foreground">Simple setups, few AIGs</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Frontend-Driven</td>
                            <td className="py-3 px-4 text-muted-foreground">Medium setups, need speed</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">Database-Driven</td>
                            <td className="py-3 px-4 text-muted-foreground">Large setups, need history and audit</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* End Note */}
            <Card className="border-muted">
              <CardContent className="pt-6">
                <p className="text-center text-sm text-muted-foreground italic">
                  End of Document
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
