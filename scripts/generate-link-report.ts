import fs from "fs"
import path from "path"
import fetch from "node-fetch"
import * as cheerio from "cheerio"

// Configuration
const BASE_URL = "https://www.brit-treat.co.uk"
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`
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

// Results storage
const results = {
  incorrectInternalLinks: [] as { page: string; link: string; corrected: string }[],
  incorrectSitemapUrls: [] as { url: string; corrected: string }[],
  brokenLinks: [] as { page: string; link: string }[],
  pagesChecked: 0,
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
 * Check a specific page for incorrect links
 */
async function checkPage(path: string): Promise<void> {
  const url = `${BASE_URL}${path}`
  console.log(`Checking: ${url}`)

  try {
    const response = await fetch(url)
    results.pagesChecked++

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
    links.filter(hasIncorrectPattern).forEach((link) => {
      const fullUrl = resolveUrl(url, link)
      const correctedUrl = fullUrl.replace(/\/(cookies|drinks|peanut-butter|coffee)\//, "/products/$1/")

      results.incorrectInternalLinks.push({
        page: url,
        link: fullUrl,
        corrected: correctedUrl,
      })
    })

    // Check for broken links
    for (const link of links) {
      if (link.startsWith("http") || link.startsWith("//")) {
        // Skip external links for now
        continue
      }

      const fullUrl = resolveUrl(url, link)

      try {
        const linkResponse = await fetch(fullUrl, { method: "HEAD" })

        if (!linkResponse.ok) {
          results.brokenLinks.push({
            page: url,
            link: fullUrl,
          })
        }
      } catch (error) {
        results.brokenLinks.push({
          page: url,
          link: fullUrl,
        })
      }
    }
  } catch (error) {
    console.error(`Error checking ${url}:`, error)
  }
}

/**
 * Check sitemap for incorrect URLs
 */
async function checkSitemap(): Promise<void> {
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
    urls.filter(hasIncorrectPattern).forEach((url) => {
      const correctedUrl = url.replace(/\/(cookies|drinks|peanut-butter|coffee)\//, "/products/$1/")

      results.incorrectSitemapUrls.push({
        url,
        corrected: correctedUrl,
      })
    })
  } catch (error) {
    console.error("Error checking sitemap:", error)
  }
}

/**
 * Generate HTML report
 */
function generateReport(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brit Treat Website Link Scan Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #0A3281;
    }
    .summary {
      background-color: #f9f5eb;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 30px;
    }
    .success {
      color: #2e7d32;
    }
    .warning {
      color: #f57c00;
    }
    .error {
      color: #c62828;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    th, td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #0A3281;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .container {
      margin-bottom: 40px;
    }
  </style>
</head>
<body>
  <h1>Brit Treat Website Link Scan Report</h1>
  <p>Generated on ${new Date().toLocaleString()}</p>
  
  <div class="summary">
    <h2>Summary</h2>
    <p>Pages checked: <strong>${results.pagesChecked}</strong></p>
    <p class="${results.incorrectInternalLinks.length > 0 ? "error" : "success"}">
      Incorrect internal links: <strong>${results.incorrectInternalLinks.length}</strong>
    </p>
    <p class="${results.incorrectSitemapUrls.length > 0 ? "error" : "success"}">
      Incorrect sitemap URLs: <strong>${results.incorrectSitemapUrls.length}</strong>
    </p>
    <p class="${results.brokenLinks.length > 0 ? "warning" : "success"}">
      Broken links: <strong>${results.brokenLinks.length}</strong>
    </p>
  </div>
  
  <div class="container">
    <h2>Incorrect Internal Links</h2>
    ${
      results.incorrectInternalLinks.length > 0
        ? `
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Incorrect Link</th>
            <th>Corrected Link</th>
          </tr>
        </thead>
        <tbody>
          ${results.incorrectInternalLinks
            .map(
              (item) => `
            <tr>
              <td>${item.page}</td>
              <td>${item.link}</td>
              <td>${item.corrected}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    `
        : '<p class="success">No incorrect internal links found!</p>'
    }
  </div>
  
  <div class="container">
    <h2>Incorrect Sitemap URLs</h2>
    ${
      results.incorrectSitemapUrls.length > 0
        ? `
      <table>
        <thead>
          <tr>
            <th>Incorrect URL</th>
            <th>Corrected URL</th>
          </tr>
        </thead>
        <tbody>
          ${results.incorrectSitemapUrls
            .map(
              (item) => `
            <tr>
              <td>${item.url}</td>
              <td>${item.corrected}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    `
        : '<p class="success">No incorrect sitemap URLs found!</p>'
    }
  </div>
  
  <div class="container">
    <h2>Broken Links</h2>
    ${
      results.brokenLinks.length > 0
        ? `
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Broken Link</th>
          </tr>
        </thead>
        <tbody>
          ${results.brokenLinks
            .map(
              (item) => `
            <tr>
              <td>${item.page}</td>
              <td>${item.link}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    `
        : '<p class="success">No broken links found!</p>'
    }
  </div>
  
  <div class="container">
    <h2>Next Steps</h2>
    <ol>
      <li>Fix all incorrect internal links by updating them to use the correct URL structure with the '/products/' prefix.</li>
      <li>Update your sitemap.xml file to only include the correct URLs.</li>
      <li>Fix any broken links found on your website.</li>
      <li>Implement the middleware redirect to handle any external links that might be using the incorrect URL structure.</li>
      <li>Submit URL removal requests in Google Search Console for any incorrect URLs that have been indexed.</li>
      <li>Request indexing of the correct URLs in Google Search Console.</li>
    </ol>
  </div>
</body>
</html>
  `
}

/**
 * Main function
 */
async function main() {
  console.log("Starting comprehensive link check")

  // Check sitemap first
  await checkSitemap()

  // Check specific pages
  for (const page of PAGES_TO_CHECK) {
    await checkPage(page)
  }

  // Generate report
  const report = generateReport()

  // Save report to file
  const reportPath = path.join(process.cwd(), "link-report.html")
  fs.writeFileSync(reportPath, report)

  console.log(`\nLink check complete! Report saved to: ${reportPath}`)
}

main().catch(console.error)
