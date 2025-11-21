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
        // Level A: Dark blue background with white text (high contrast)
        level === "A" && "bg-blue-700 text-white border border-blue-800 dark:bg-blue-600 dark:text-white dark:border-blue-700",
        // Level AA: Darker blue/purple background with white text (high contrast)
        level === "AA" && "bg-indigo-700 text-white border border-indigo-800 dark:bg-indigo-600 dark:text-white dark:border-indigo-700",
        // Level AAA: Dark purple background with white text (high contrast)
        level === "AAA" && "bg-purple-700 text-white border border-purple-800 dark:bg-purple-600 dark:text-white dark:border-purple-700",
        className,
      )}
      aria-label={`Level ${level}`}
    >
      {level}
    </span>
  )
}
