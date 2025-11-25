import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lawsuit Archive - TheWCAG",
  description: "Historical database of accessibility lawsuits and settlements",
}

export default function LawsuitArchiveLayout({ children }: { children: React.ReactNode }) {
  return children
}

