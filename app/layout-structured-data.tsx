"use client"

import { useEffect } from "react"

export default function LayoutStructuredData() {
  useEffect(() => {
    // Organization schema
    const organizationScript = document.createElement("script")
    organizationScript.type = "application/ld+json"
    organizationScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Brit Treat",
      url: "https://www.brit-treat.co.uk",
      logo: "https://www.brit-treat.co.uk/brit-treat-logo.png",
      sameAs: [
        "https://www.instagram.com/brit_treat/",
        "https://www.facebook.com/profile.php?id=100090802361398",
        "https://www.linkedin.com/company/astha-group-uk-ltd/",
      ],
    })

    document.head.appendChild(organizationScript)

    return () => {
      document.head.removeChild(organizationScript)
    }
  }, [])

  return null
}
