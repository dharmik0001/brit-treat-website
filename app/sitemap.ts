import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.brit-treat.co.uk"
  const currentDate = new Date().toISOString()

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Main Sections
    {
      url: `${baseUrl}/#our-story`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Product Category Pages (excluding /products/cookies as requested)
    {
      url: `${baseUrl}/products/drinks`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/peanut-butter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/coffee`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Removed as requested:
    // - ${baseUrl}/products
    // - ${baseUrl}/products/sitemap
    // - ${baseUrl}/products/cookies
    // - ${baseUrl}/products/cookies/butter-cookies
    // - ${baseUrl}/products/cookies/assorted-cookies
  ]
}
