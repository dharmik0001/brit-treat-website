"use client"

import Image from "next/image"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import OtherCategories from "@/components/other-categories"
import ProductCardsSwipe from "@/components/product-cards-swipe"

export default function CookiesPage() {
  const products = [
    {
      id: "butter-cookies",
      name: "Butter Cookies Tin",
      image: "/brit-treat-butter-cookies-tin-red.png",
      description: "Classic butter cookies in elegant red tin",
      link: "/products/cookies/butter-cookies",
    },
    {
      id: "assorted-cookies",
      name: "Assorted Cookies Box",
      image: "/brit-treat-assorted-cookies-box.png",
      description: "Premium assorted cookies selection",
      link: "/products/cookies/assorted-cookies",
    },
    {
      id: "chocochip-cookies",
      name: "Chocolate Chip Cookies",
      image: "/brit-treat-chocochip-cookies-box.png",
      description: "Delicious chocolate chip cookies",
      link: "/products/cookies/chocochip-cookies",
    },
    {
      id: "mini-cookies",
      name: "Mini Chocolate Chip Cookies",
      image: "/brit-treat-mini-chocochip-cookies.png",
      description: "Perfect bite-sized treats",
      link: "/products/cookies/mini-cookies",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A3281] to-[#1E4498] overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Cookies Collection</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Traditional British cookies crafted with premium ingredients and time-honored recipes
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          {/* Mobile Swipe View */}
          <ProductCardsSwipe products={products} />

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 bg-gray-50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A3281] mb-2 group-hover:text-[#FF6B6B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherCategories currentCategory="cookies" />
      <Footer />
    </div>
  )
}
