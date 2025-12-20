import type { Metadata } from "next"
import { generateToolMetadata } from "@/lib/tools/metadata"
import { getToolBySlug } from "@/lib/tools/constants"

const tool = getToolBySlug("accessibility-tester")!

export const metadata: Metadata = generateToolMetadata(tool)

export default function AccessibilityTesterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

