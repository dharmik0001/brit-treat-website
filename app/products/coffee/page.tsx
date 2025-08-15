"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"
import OtherCategories from "@/components/other-categories"

export default function CoffeePage() {
  const [clickedProduct, setClickedProduct] = useState<string | null>(null)

  const handleProductClick = (productId: string) => {
    setClickedProduct(productId)
    setTimeout(() => setClickedProduct(null), 200)
  }

  // Coffee products data
  const coffeeProducts = [
    {
      id: "premium-coffee-jars",
      imageSrc: "/brit-treat-coffee-jars.jpeg",
      imageAlt: "Premium Coffee Jars",
      title: "Premium Coffee Jars",
      description: "Rich, aromatic coffee blends in convenient jar packaging for the perfect cup every time.",
    },
  ]

  // Mobile gallery items
  const coffeeGalleryItems = coffeeProducts.map((product) => ({
    imageSrc: product.imageSrc,
    imageAlt: product.imageAlt,
    title: product.title,
    description: product.description,
  }))

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A3281] to-[#1E4498] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">OUR COFFEE RANGE</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Premium coffee blends with distinctive British character for the perfect cup
            </p>
            <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#0A3281] hover:text-[#FF6B6B] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-[#0A3281] hover:text-[#FF6B6B] transition-colors">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Coffee</span>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/products"
          className="inline-flex items-center text-[#0A3281] hover:text-[#FF6B6B] transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Products
        </Link>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Mobile Swipe Gallery */}
          <div className="md:hidden">
            <MobileSwipeGallery items={coffeeGalleryItems} />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.imageAlt}
                    fill
                    className={`object-contain transition-all duration-200 ${
                      clickedProduct === product.id ? "scale-90" : "hover:scale-105"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A3281] mb-3">{product.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <OtherCategories currentCategory="coffee" />

      <Footer />
    </div>
  )
}
