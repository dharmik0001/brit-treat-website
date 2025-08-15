"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"
import OtherCategories from "@/components/other-categories"

export default function CookiesPage() {
  const [clickedProduct, setClickedProduct] = useState<string | null>(null)

  const handleProductClick = (productId: string) => {
    setClickedProduct(productId)
    setTimeout(() => setClickedProduct(null), 200)
  }

  // Cookie products data
  const cookieProducts = [
    {
      id: "butter-cookies-tin-red",
      imageSrc: "/brit-treat-butter-cookies-tin-red.png",
      imageAlt: "Butter Cookies Tin - Red",
      title: "Butter Cookies Tin - Red",
      description: "Classic butter cookies in an elegant red tin, perfect for gifting or enjoying at home.",
    },
    {
      id: "assorted-cookies-box",
      imageSrc: "/brit-treat-assorted-cookies-box.png",
      imageAlt: "Assorted Cookies Box",
      title: "Assorted Cookies Box",
      description: "A delightful selection of our finest cookies in a beautiful presentation box.",
    },
    {
      id: "mini-chocochip-cookies",
      imageSrc: "/brit-treat-mini-chocochip-cookies.png",
      imageAlt: "Mini Chocolate Chip Cookies",
      title: "Mini Chocolate Chip Cookies",
      description: "Bite-sized chocolate chip cookies, perfect for snacking and sharing.",
    },
    {
      id: "blue-butter-cookies-tin",
      imageSrc: "/brit-treat-blue-butter-cookies-tin.jpeg",
      imageAlt: "Butter Cookies Tin - Blue",
      title: "Butter Cookies Tin - Blue",
      description: "Premium butter cookies in a sophisticated blue tin with traditional British styling.",
    },
  ]

  // Mobile gallery items
  const cookieGalleryItems = cookieProducts.map((product) => ({
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">OUR COOKIES COLLECTION</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Delicious premium cookies crafted with traditional British recipes and the finest ingredients
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
            <span className="text-gray-600">Cookies</span>
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
            <MobileSwipeGallery items={cookieGalleryItems} />
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookieProducts.map((product) => (
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
      <OtherCategories currentCategory="cookies" />

      <Footer />
    </div>
  )
}
