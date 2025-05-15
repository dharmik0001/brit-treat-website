export const metadata = {
  title: "Premium Butter Cookies | Brit Treat",
  description:
    "Our Brit Treat Butter Cookies are crafted following traditional British recipes, made with 100% pure butter in a decorative tin. Perfect for gifting or enjoying with tea.",
  openGraph: {
    title: "Premium Butter Cookies | Brit Treat",
    description: "Authentic British butter cookies made with 100% pure butter in a decorative tin.",
    images: [{ url: "/butter-cookies-tin.png" }],
  },
  // Add canonical URL
  alternates: {
    canonical: "https://www.brit-treat.co.uk/products/cookies/butter-cookies",
  },
}

export default function Page() {
  return (
    <div>
      <h1>Premium Butter Cookies</h1>
      <p>More information about our delicious butter cookies coming soon!</p>
    </div>
  )
}
