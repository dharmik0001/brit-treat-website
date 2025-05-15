"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface CanonicalUrlProps {
  baseUrl?: string
}

export default function CanonicalUrl({ baseUrl = "https://www.brit-treat.co.uk" }: CanonicalUrlProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Check if there's already a canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

    // If no canonical link exists, create one
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      document.head.appendChild(canonicalLink)
    }

    // Set the canonical URL
    canonicalLink.href = `${baseUrl}${pathname}`
  }, [pathname, baseUrl])

  return null
}
