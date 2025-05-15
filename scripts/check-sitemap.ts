import fetch from "node-fetch"
import * as cheerio from "cheerio"

// Configuration
const SITEMAP_URL = "https://www.brit-treat.co.uk/sitemap.xml"
const INCORRECT_PATTERNS = ["/cookies/", "/drinks/", "/peanut-butter/", "/coffee/"]

/**
 * Check if URL matches incorrect pattern
 */
function hasIncorrectPattern(url: string): boolean {
  return INCORRECT_PATTERNS.some((pattern) => url.includes(pattern))
}

/**
 * Main function
 */
async function main() {
  console.log(`Checking sitemap: ${SITEMAP_URL}`)

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

    // Check for incorrect URLs
    const incorrectUrls = urls.filter(hasIncorrectPattern)

    if (incorrectUrls.length > 0) {
      console.log(`\n❌ Found ${incorrectUrls.length} incorrect URLs in sitemap:`)
      incorrectUrls.forEach((url) => {
        const correctUrl = url.replace(/\/(cookies|drinks|peanut-butter|coffee)\//, "/products/$1/")
        console.log(`  - ${url} → should be ${correctUrl}`)
      })
    } else {
      console.log("✅ No incorrect URLs found in sitemap!")
    }
  } catch (error) {
    console.error("Error checking sitemap:", error)
  }
}

main().catch(console.error)
