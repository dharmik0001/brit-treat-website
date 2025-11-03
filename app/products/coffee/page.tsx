"use client"

import Image from "next/image"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import OtherCategories from "@/components/other-categories"
import ProductCardsSwipe from "@/components/product-cards-swipe"

export default function CoffeePage() {
  const products = [
    {
      id: "coffee-jars",
      name: "Premium Coffee Jars",
      image: "/brit-treat-coffee-jars.jpeg",
      description: "Rich and aromatic instant coffee in elegant jars",
      link: "/products/coffee/jars",
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Coffee Collection</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Premium coffee blends with distinctive British character for the perfect cup
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          {/* Mobile Swipe View */}
          <ProductCardsSwipe products={products} />

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-80 bg-gray-50">
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

      <OtherCategories currentCategory="coffee" />
      <Footer />
    </div>
  )
}
