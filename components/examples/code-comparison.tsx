import { CheckCircle2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeComparisonProps {
    badCode: string
    goodCode: string
    badDescription: string
    goodDescription: string
}

export function CodeComparison({ badCode, goodCode, badDescription, goodDescription }: CodeComparisonProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6 my-8">
            {/* Bad Example */}
            <div className="border border-destructive/30 rounded-xl overflow-hidden bg-destructive/5">
                <div className="bg-destructive/10 px-4 py-3 flex items-center gap-2 border-b border-destructive/20">
                    <XCircle className="w-5 h-5 text-destructive" />
                    <span className="font-semibold text-destructive">Don't Do This</span>
                </div>
                <div className="p-4 space-y-4">
                    <p className="text-sm text-foreground/80">{badDescription}</p>
                    <pre className="bg-background/50 rounded-lg p-3 overflow-x-auto text-xs font-mono border border-border/50">
                        <code>{badCode}</code>
                    </pre>
                </div>
            </div>

            {/* Good Example */}
            <div className="border border-green-500/30 rounded-xl overflow-hidden bg-green-500/5">
                <div className="bg-green-500/10 px-4 py-3 flex items-center gap-2 border-b border-green-500/20">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="font-semibold text-green-700 dark:text-green-300">Do This Instead</span>
                </div>
                <div className="p-4 space-y-4">
                    <p className="text-sm text-foreground/80">{goodDescription}</p>
                    <pre className="bg-background/50 rounded-lg p-3 overflow-x-auto text-xs font-mono border border-border/50">
                        <code>{goodCode}</code>
                    </pre>
                </div>
            </div>
        </div>
    )
}
