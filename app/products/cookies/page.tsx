"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import OtherCategories from "@/components/other-categories"
import ProductCardsSwipe from "@/components/product-cards-swipe"
import ProductDetailModal from "@/components/product-detail-modal"

interface ProductDetail {
  id: string
  name: string
  image: string
  description: string
  link: string
  weight: string
  packingDetails?: {
    packing: string
    layerQuantity: string
    palletQuantity: string
    innerBarcode: string
    outerBarcode: string
    containerCapacity: string
  }
  features: string[]
}

export default function CookiesPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products: ProductDetail[] = [
    {
      id: "blue-tin-cookies-140gm",
      name: "Brit Treat Cookies Blue Tins 140gm",
      image: "/brit-treat-blue-tin-140gm.jpeg",
      description: "Classic butter cookies in compact blue tin",
      link: "/products/cookies/blue-tin-cookies-140gm",
      weight: "4.9 oz (140g)",
      packingDetails: {
        packing: "24x140g",
        layerQuantity: "12",
        palletQuantity: "84",
        innerBarcode: "5065023723034",
        outerBarcode: "5065023723027",
        containerCapacity: "3360",
      },
      features: [
        "Convenient compact size",
        "Perfect for personal gifting",
        "Same premium quality",
        "Elegant blue tin packaging",
        "Great for travel",
      ],
    },
    {
      id: "red-tin-cookies",
      name: "Brit Treat Cookies Red Tins 140gm",
      image: "/brit-treat-butter-cookies-tin-red.png",
      description: "Classic butter cookies in elegant red tin",
      link: "/products/cookies/red-tin-cookies",
      weight: "4.9 oz (140g)",
      packingDetails: {
        packing: "24x140g",
        layerQuantity: "12",
        palletQuantity: "84",
        innerBarcode: "5065023723140",
        outerBarcode: "5065023723164",
        containerCapacity: "3360",
      },
      features: [
        "Premium quality butter cookies",
        "Traditional British recipe",
        "Perfect for tea time or gifting",
        "Elegant reusable tin packaging",
        "Contains assorted cookie shapes",
      ],
    },
    {
      id: "mini-cookies",
      name: "Mini Chocolate Chip Cookies",
      image: "/brit-treat-mini-chocochip-cookies.png",
      description: "Perfect bite-sized treats",
      link: "/products/cookies/mini-cookies",
      weight: "5.3 oz (150g)",
      packingDetails: {
        packing: "24x125g",
        layerQuantity: "10",
        palletQuantity: "70",
        innerBarcode: "5065023723171",
        outerBarcode: "5065023723188",
        containerCapacity: "2800",
      },
      features: [
        "Convenient bite-sized portions",
        "Perfect for snacking on-the-go",
        "Great for lunch boxes",
        "Individually portioned",
        "Rich chocolate flavor",
      ],
    },
    {
      id: "assorted-cookies",
      name: "Assorted Cookies Box",
      image: "/brit-treat-assorted-cookies-box.png",
      description: "Premium assorted cookies selection",
      link: "/products/cookies/assorted-cookies",
      weight: "10.6 oz (300g)",
      packingDetails: {
        packing: "12x300g",
        layerQuantity: "8",
        palletQuantity: "48",
        innerBarcode: "5065023723218",
        outerBarcode: "5065023723225",
        containerCapacity: "1800",
      },
      features: [
        "Variety pack with multiple flavors",
        "Includes butter, chocolate chip, and cocoa cookies",
        "Perfect for sharing",
        "Individual wrapped portions available",
        "Great value assortment",
      ],
    },
    {
      id: "chocochip-cookies",
      name: "Chocolate Chip Cookies",
      image: "/brit-treat-chocochip-cookies-box.png",
      description: "Delicious chocolate chip cookies",
      link: "/products/cookies/chocochip-cookies",
      weight: "8.8 oz (250g)",
      packingDetails: {
        packing: "12x300g",
        layerQuantity: "8",
        palletQuantity: "48",
        innerBarcode: "5065023723232",
        outerBarcode: "5065023723249",
        containerCapacity: "1800",
      },
      features: [
        "Loaded with premium chocolate chips",
        "Soft and chewy texture",
        "Made with real butter",
        "No artificial preservatives",
        "Perfect for chocolate lovers",
      ],
    },
    {
      id: "blue-tin-cookies",
      name: "Brit Treat Cookies Blue Tins 340gm",
      image: "/brit-treat-blue-tin-340gm.png",
      description: "Premium butter cookies in elegant blue tin",
      link: "/products/cookies/blue-tin-cookies",
      weight: "12 oz (340g)",
      packingDetails: {
        packing: "24x140g",
        layerQuantity: "12",
        palletQuantity: "84",
        innerBarcode: "5065023723140",
        outerBarcode: "5065023723164",
        containerCapacity: "3360",
      },
      features: [
        "Extra butter content for rich flavor",
        "Beautiful blue collector's tin",
        "Perfect gift option",
        "Traditional British recipe",
        "Assorted premium shapes",
      ],
    },
  ]

  const handleProductClick = (product: ProductDetail) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

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
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="group text-left w-full"
              >
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
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <span className="text-[#FF6B6B] font-semibold inline-flex items-center gap-2">
                      View Details
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <OtherCategories currentCategory="cookies" />
      <Footer />

      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
