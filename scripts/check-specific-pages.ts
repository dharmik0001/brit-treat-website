import fetch from "node-fetch"
import * as cheerio from "cheerio"

// Configuration
const BASE_URL = "https://www.brit-treat.co.uk"
const INCORRECT_PATTERNS = ["/cookies/", "/drinks/", "/peanut-butter/", "/coffee/"]

// Pages to check
const PAGES_TO_CHECK = [
  "/",
  "/products",
  "/products/cookies",
  "/products/drinks",
  "/products/peanut-butter",
  "/products/coffee",
  "/products/cookies/butter-cookies",
  "/products/cookies/assorted-cookies",
]

/**
 * Resolve relative URL
 */
function resolveUrl(baseUrl: string, relativeUrl: string): string {
  try {
    return new URL(relativeUrl, baseUrl).href
  } catch (e) {
    console.error(`Error resolving URL: ${relativeUrl} relative to ${baseUrl}`)
    return ""
  }
}

/**
 * Check if URL matches incorrect pattern
 */
function hasIncorrectPattern(url: string): boolean {
  return INCORRECT_PATTERNS.some((pattern) => url.includes(pattern))
}

/**
 * Check a specific page for incorrect links
 */
async function checkPage(path: string): Promise<void> {
  const url = `${BASE_URL}${path}`
  console.log(`Checking: ${url}`)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.log(`Error fetching ${url}: ${response.status} ${response.statusText}`)
      return
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    // Find all links
    const links = $("a[href]")
      .map((_, el) => $(el).attr("href"))
      .get()
      .filter(Boolean)

    // Check for incorrect links
    const incorrectLinksOnPage = links.filter(hasIncorrectPattern).map((link) => {
      const fullUrl = resolveUrl(url, link)
      const correctLink = fullUrl.replace(/\/(cookies|drinks|peanut-butter|coffee)\//, "/products/$1/")
      return { original: fullUrl, corrected: correctLink }
    })

    if (incorrectLinksOnPage.length > 0) {
      console.log(`\n❌ Found ${incorrectLinksOnPage.length} incorrect links on ${url}:`)
      incorrectLinksOnPage.forEach(({ original, corrected }) => {
        console.log(`  - ${original} → should be ${corrected}`)
      })
    } else {
      console.log(`✅ No incorrect links found on ${url}`)
    }
  } catch (error) {
    console.error(`Error checking ${url}:`, error)
  }
}

/**
 * Main function
 */
async function main() {
  console.log("Starting link check for specific pages")

  for (const page of PAGES_TO_CHECK) {
    await checkPage(page)
  }

  console.log("\nLink check complete!")
}

main().catch(console.error)
