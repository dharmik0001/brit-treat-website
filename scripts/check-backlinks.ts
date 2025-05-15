import fetch from "node-fetch"

// Configuration
const GOOGLE_SEARCH_URL = "https://www.google.com/search"
const INCORRECT_PATTERNS = [
  "site:brit-treat.co.uk/cookies/",
  "site:brit-treat.co.uk/drinks/",
  "site:brit-treat.co.uk/peanut-butter/",
  "site:brit-treat.co.uk/coffee/",
]

/**
 * Check if Google has indexed any pages with incorrect URL patterns
 * Note: This is a simple check and might be rate-limited by Google
 */
async function checkGoogleIndex(pattern: string): Promise<boolean> {
  const url = `${GOOGLE_SEARCH_URL}?q=${encodeURIComponent(pattern)}`
  console.log(`Checking Google index for: ${pattern}`)

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      console.log(`Error checking Google index: ${response.status} ${response.statusText}`)
      return false
    }

    const html = await response.text()

    // Very simple check - if "No results found" appears in the response
    const hasResults = !html.includes("did not match any documents") && !html.includes("did not return any results")

    return hasResults
  } catch (error) {
    console.error("Error checking Google index:", error)
    return false
  }
}

/**
 * Main function
 */
async function main() {
  console.log("Checking for incorrect URLs in Google index")

  for (const pattern of INCORRECT_PATTERNS) {
    const hasResults = await checkGoogleIndex(pattern)

    if (hasResults) {
      console.log(`❌ Found indexed pages matching: ${pattern}`)
      console.log(`   Check Google Search Console for these URLs and request removal`)
    } else {
      console.log(`✅ No indexed pages found matching: ${pattern}`)
    }

    // Add a delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  console.log("\nCheck complete! Remember to verify results in Google Search Console.")
}

main().catch(console.error)
