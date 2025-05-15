import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

// Define all product categories and their products
const productCategories = [
  {
    id: "cookies",
    name: "Cookies Collection",
    products: [
      { id: "butter-cookies", name: "Brit Treat Butter Cookies" },
      { id: "assorted-cookies", name: "Brit Treat Assorted Cookies" },
    ],
  },
  {
    id: "drinks",
    name: "Non-Alcoholic Drinks",
    products: [], // Remove products that don't exist in the UI
  },
  {
    id: "peanut-butter",
    name: "Delicious Spreads",
    products: [], // Remove products that don't exist in the UI
  },
  {
    id: "coffee",
    name: "Coffee Collection",
    products: [], // Remove products that don't exist in the UI
  },
]

export const metadata = {
  title: "Product Sitemap | Brit Treat",
  description: "Browse all Brit Treat products organized by category.",
  alternates: {
    canonical: "https://www.brit-treat.co.uk/products/sitemap",
  },
}

export default function ProductSitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A3281]"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-16 flex flex-col items-center z-10 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4 drop-shadow-lg text-center">
            PRODUCT SITEMAP
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 max-w-2xl text-center drop-shadow-md">
            Browse all Brit Treat products organized by category
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-[#0A3281] mb-6">All Products</h2>

              {productCategories.map((category) => (
                <div key={category.id} className="mb-8">
                  <h3 className="text-xl font-bold text-[#0A3281] mb-4 flex items-center">
                    <span className="w-2 h-8 bg-[#F7941D] mr-3 rounded-sm"></span>
                    <Link href={`/products/${category.id}`} className="hover:underline">
                      {category.name}
                    </Link>
                  </h3>

                  <ul className="pl-5 space-y-2">
                    {category.products.map((product) => (
                      <li key={product.id} className="flex items-center">
                        <span className="text-[#F7941D] mr-2">•</span>
                        <Link
                          href={`/products/${category.id}/${product.id}`}
                          className="text-gray-700 hover:text-[#F7941D] hover:underline"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/products"
                className="bg-[#0A3281] text-white px-6 py-3 rounded-md hover:bg-[#072566] transition-colors inline-block"
              >
                Back to Products Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
