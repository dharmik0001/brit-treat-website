"use client"

import { useEffect } from "react"

// This component injects structured data for product pages
export default function ProductStructuredData({ product }: { product: any }) {
  useEffect(() => {
    // Create the structured data script element
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `https://www.brit-treat.co.uk${product.images[0]}`,
      brand: {
        "@type": "Brand",
        name: "Brit Treat",
      },
      offers: {
        "@type": "Offer",
        url: `https://www.amazon.co.uk/dp/B0F3XZWBR5/`,
        priceCurrency: "GBP",
        price: product.price.replace("£", ""),
        availability: "https://schema.org/InStock",
      },
    })

    // Add it to the document head
    document.head.appendChild(script)

    // Clean up on unmount
    return () => {
      document.head.removeChild(script)
    }
  }, [product])

  return null
}
