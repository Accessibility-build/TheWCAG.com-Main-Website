import { cn } from "@/lib/utils"

interface LevelBadgeProps {
  level: "A" | "AA" | "AAA"
  className?: string
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold",
        level === "A" && "bg-accent/20 text-accent-foreground border border-accent/40",
        level === "AA" && "bg-secondary/20 text-secondary-foreground border border-secondary/40",
        level === "AAA" && "bg-primary/20 text-primary-foreground border border-primary/40",
        className,
      )}
      aria-label={`Level ${level}`}
    >
      {level}
    </span>
  )
}
