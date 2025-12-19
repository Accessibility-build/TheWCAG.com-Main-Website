import type { Metadata } from "next"
import { getToolBySlug } from "@/lib/tools/constants"
import { generateToolMetadata } from "@/lib/tools/metadata"

const tool = getToolBySlug("pdf-to-text")!

export const metadata: Metadata = generateToolMetadata(tool)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
