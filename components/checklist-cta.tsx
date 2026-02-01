import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ChecklistCTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container relative px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Typography & Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            <span>Start building today</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-balance">
                            Make the web <br />
                            <span className="text-primary">accessible</span> for <br />
                            everyone.
                        </h2>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Don't just meet compliance—create experiences that include everyone. Our guides and checklists make it simple.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                            <Link href="/learn" className="group w-full sm:w-auto">
                                <div className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-1">
                                    Start Learning
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>

                            <Link href="/checklist" className="group w-full sm:w-auto">
                                <div className="px-8 py-4 bg-background border border-border text-foreground rounded-full font-medium text-lg hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-1">
                                    View Checklist
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Interactive Cards */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        {/* Decorative card stack effect */}
                        <div className="relative z-10 grid gap-6">

                            {/* Card 1 */}
                            <Card className="p-6 md:p-8 border-muted bg-background/60 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group cursor-default">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <Badge variant="secondary" className="bg-muted text-muted-foreground font-normal">WCAG 2.2 AA</Badge>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Actionable Checklist</h3>
                                <p className="text-muted-foreground mb-6">
                                    Track your progress with our interactive checklist designed for developers and designers.
                                </p>
                                <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[72%] rounded-full" />
                                </div>
                                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                                    <span>Progress</span>
                                    <span>72%</span>
                                </div>
                            </Card>

                            {/* Card 2 - Offset */}
                            <Card className="absolute -z-10 top-12 -right-8 md:-right-12 w-full p-6 md:p-8 border-muted bg-card/40 backdrop-blur-sm opacity-60 scale-95 blur-[1px]">
                                {/* Placeholder content for depth */}
                                <div className="h-12 w-12 rounded-xl bg-primary/10 mb-6" />
                                <div className="h-8 w-3/4 bg-foreground/5 rounded mb-4" />
                                <div className="h-4 w-full bg-foreground/5 rounded mb-2" />
                                <div className="h-4 w-2/3 bg-foreground/5 rounded" />
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
