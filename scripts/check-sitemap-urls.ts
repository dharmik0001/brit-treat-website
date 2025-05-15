import fetch from "node-fetch"
import * as cheerio from "cheerio"

// Configuration
const SITEMAP_URL = "https://www.brit-treat.co.uk/sitemap.xml"

/**
 * Check if URLs in sitemap actually exist
 */
async function checkSitemapUrls() {
  console.log(`Checking URLs in sitemap: ${SITEMAP_URL}`)

  try {
    const response = await fetch(SITEMAP_URL)

    if (!response.ok) {
      console.log(`Error fetching sitemap: ${response.status} ${response.statusText}`)
      return
    }

    const xml = await response.text()
    const $ = cheerio.load(xml, { xmlMode: true })

    // Find all URLs in sitemap
    const urls = $("url > loc")
      .map((_, el) => $(el).text())
      .get()

    console.log(`Found ${urls.length} URLs in sitemap`)
    console.log("Checking each URL for accessibility...")

    const results = {
      accessible: [] as string[],
      notAccessible: [] as string[],
    }

    // Check each URL
    for (const url of urls) {
      try {
        const urlResponse = await fetch(url, { method: "HEAD" })

        if (urlResponse.ok) {
          results.accessible.push(url)
          console.log(`✅ ${url}`)
        } else {
          results.notAccessible.push(url)
          console.log(`❌ ${url} - Status: ${urlResponse.status}`)
        }
      } catch (error) {
        results.notAccessible.push(url)
        console.log(`❌ ${url} - Error: ${error}`)
      }
    }

    // Summary
    console.log("\n--- SUMMARY ---")
    console.log(`Total URLs: ${urls.length}`)
    console.log(`Accessible: ${results.accessible.length}`)
    console.log(`Not Accessible: ${results.notAccessible.length}`)

    if (results.notAccessible.length > 0) {
      console.log("\nURLs that are not accessible:")
      results.notAccessible.forEach((url) => {
        console.log(`- ${url}`)
      })
      console.log("\nThese URLs should be removed from your sitemap or fixed.")
    }
  } catch (error) {
    console.error("Error checking sitemap URLs:", error)
  }
}

// Run the check
checkSitemapUrls().catch(console.error)
