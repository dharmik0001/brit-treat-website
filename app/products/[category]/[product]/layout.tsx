import type React from "react"
import type { Metadata } from "next"
import CanonicalUrl from "@/components/canonical-url"

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { category: string; product: string }
}) {
  return (
    <>
      <CanonicalUrl />
      {children}
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; product: string }
}): Promise<Metadata> {
  const { category, product } = params

  // Format the product name for display
  const productName = product
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    alternates: {
      canonical: `https://www.brit-treat.co.uk/products/${category}/${product}`,
    },
  }
}
