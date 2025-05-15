import fetch from "node-fetch"
import * as cheerio from "cheerio"

// Configuration
const BASE_URL = "https://www.brit-treat.co.uk"
const START_URL = BASE_URL
const INCORRECT_PATTERNS = ["/cookies/", "/drinks/", "/peanut-butter/", "/coffee/"]
const CORRECT_PATTERNS = ["/products/cookies/", "/products/drinks/", "/products/peanut-butter/", "/products/coffee/"]

// Track visited URLs to avoid duplicates
const visitedUrls = new Set<string>()
const incorrectLinks = new Map<string, string[]>() // page URL -> incorrect links found
const brokenLinks = new Map<string, string[]>() // page URL -> broken links found

/**
 * Normalize URL to avoid duplicates
 */
function normalizeUrl(url: string): string {
  // Remove trailing slash
  url = url.endsWith("/") ? url.slice(0, -1) : url
  // Remove hash
  url = url.split("#")[0]
  // Remove query parameters
  url = url.split("?")[0]
  return url
}

/**
 * Check if URL is internal
 */
function isInternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname === new URL(BASE_URL).hostname
  } catch (e) {
    // Relative URL
    return !url.startsWith("http") && !url.startsWith("//")
  }
}

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
 * Crawl a page and extract links
 */
async function crawlPage(url: string, referrer = ""): Promise<void> {
  const normalizedUrl = normalizeUrl(url)

  if (visitedUrls.has(normalizedUrl)) {
    return
  }

  visitedUrls.add(normalizedUrl)
  console.log(`Crawling: ${url}`)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      if (referrer) {
        if (!brokenLinks.has(referrer)) {
          brokenLinks.set(referrer, [])
        }
        brokenLinks.get(referrer)!.push(url)
      }
      console.log(`Error fetching ${url}: ${response.status} ${response.statusText}`)
      return
    }

    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("text/html")) {
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
    const incorrectLinksOnPage = links.filter(hasIncorrectPattern).map((link) => resolveUrl(url, link))

    if (incorrectLinksOnPage.length > 0) {
      incorrectLinks.set(url, incorrectLinksOnPage)
    }

    // Queue internal links for crawling
    const internalLinks = links.filter((link) => isInternalUrl(link)).map((link) => resolveUrl(url, link))

    for (const link of internalLinks) {
      await crawlPage(link, url)
    }
  } catch (error) {
    console.error(`Error crawling ${url}:`, error)
  }
}

/**
 * Main function
 */
async function main() {
  console.log(`Starting crawl from ${START_URL}`)
  await crawlPage(START_URL)

  console.log("\n--- SCAN RESULTS ---\n")

  if (incorrectLinks.size === 0) {
    console.log("✅ No incorrect links found!")
  } else {
    console.log(`❌ Found ${incorrectLinks.size} pages with incorrect links:`)
    incorrectLinks.forEach((links, page) => {
      console.log(`\nOn page: ${page}`)
      links.forEach((link) => {
        const correctLink = link.replace(/\/(cookies|drinks|peanut-butter|coffee)\//, "/products/$1/")
        console.log(`  - ${link} → should be ${correctLink}`)
      })
    })
  }

  if (brokenLinks.size > 0) {
    console.log("\n--- BROKEN LINKS ---\n")
    console.log(`Found ${brokenLinks.size} pages with broken links:`)
    brokenLinks.forEach((links, page) => {
      console.log(`\nOn page: ${page}`)
      links.forEach((link) => {
        console.log(`  - ${link}`)
      })
    })
  }

  console.log(`\nTotal pages crawled: ${visitedUrls.size}`)
}

main().catch(console.error)
