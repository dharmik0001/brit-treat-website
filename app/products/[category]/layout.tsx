import type React from "react"
import type { Metadata } from "next"
import CanonicalUrl from "@/components/canonical-url"

export default function ProductCategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { category: string }
}) {
  return (
    <>
      <CanonicalUrl />
      {children}
    </>
  )
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category

  // Format the category name for display
  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Customize metadata based on category
  let description = ""
  let image = ""

  switch (category) {
    case "cookies":
      description =
        "Discover our premium range of authentic British cookies, crafted with the finest ingredients and traditional recipes."
      image = "/butter-cookies-hero.png"
      break
    case "drinks":
      description = "Premium sparkling celebration drinks made with 100% fruit juice and no added sugar."
      image = "/brit-treat-red-grape-drink.jpeg"
      break
    case "peanut-butter":
      description = "100% natural peanut butter with no added sugar or salt, available in creamy and crunchy varieties."
      image = "/brit-treat-peanut-butter-jars.jpeg"
      break
    case "coffee":
      description = "Premium 100% instant coffee available in multiple sizes for your perfect cup."
      image = "/brit-treat-coffee-jars.jpeg"
      break
    default:
      description = "Discover our premium range of authentic British products."
      image = "/brit-treat-logo.png"
  }

  return {
    title: `${categoryName} Collection | Brit Treat`,
    description,
    openGraph: {
      title: `${categoryName} Collection | Brit Treat`,
      description,
      images: [{ url: image }],
    },
    alternates: {
      canonical: `https://www.brit-treat.co.uk/products/${category}`,
    },
  }
}
