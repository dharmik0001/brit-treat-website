"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Placeholder for gallery images - you can add your images here later
  const galleryImages = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20BOX%2012x300gm%20-Chocochips%20Cookies-TtyyFYrrgHQL5k5kzSGXeZQjcCEMl5.jpg",
      alt: "BRIT TREAT BOX 12x300gm - Chocochip Cookies",
      category: "Cookies",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20Christmas%20Collection%20Tins%2012x340gm-wm3SQ8vMfgJZI6S3MavVKcQjjNbM5O.jpg",
      alt: "BRIT TREAT Christmas Collection Tins 12x340gm",
      category: "Cookies",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB-gjELM7EDSIYQJ1ppmtqR44k2hqr4EZ.jpg",
      alt: "Butter Cookies Tin - Blue",
      category: "Cookies",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20MINI%20CUP%20125gm%20-%20Choco%20Chip%20Cookies-E6HDWfKeOYWSQoR8ZFmI5thaMXWiAZ.jpg",
      alt: "BRIT TREAT Mini Cup 125gm - Choco Chip Cookies",
      category: "Cookies",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20BOX%2012x300gm%20-assorted%20Cookies-wCITZoRlfAK8YKhxlICfJfyMiN8LLh.jpg",
      alt: "BRIT TREAT BOX 12x300gm - Assorted Cookies",
      category: "Cookies",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20Cookies%20Tins%2024x140gm%20%28RED-%20XMAS%29-ZejKibr6LcvB4f1FOQeleTcXxqrFOY.jpg",
      alt: "BRIT TREAT Cookies Tins 24x140gm (Red - Christmas)",
      category: "Cookies",
    },
    {
      id: 7,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BT_COLLECTION%20-c0lTdFewqy1BHZSYWlSn45DohtN4W7.png",
      alt: "Celebrate the Magic of the Season with Brit Treat",
      category: "Featured",
    },
    {
      id: 8,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20Cookies%20Tins%2024x%20140gm-YeZzurOq5Vw2KJ77eJNOlloiHp0Va2.jpg",
      alt: "BRIT TREAT Cookies Tins 24x140gm (Blue - Original)",
      category: "Cookies",
    },
    {
      id: 9,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRIT%20TREAT%20Cookies%20Tins%2012x%20340gm-L8KjOIYYlij5MPcLMBo2zoeDCkmkI6.jpg",
      alt: "BRIT TREAT Cookies Tins 12x340gm (Blue - Original)",
      category: "Cookies",
    },
    {
      id: 10,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BT-RED-vKUlZsUx8VJWbUMJt4zbvmrobYXLjP.png",
      alt: "Red Butter Cookies Tin - Christmas Edition",
      category: "Featured",
    },
    {
      id: 11,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F-6LqmiWkmZ64SBNEfBMKMJTnYfUQpmO.jpg",
      alt: "Mini Cookies - Marketing Banner",
      category: "Featured",
    },
    {
      id: 12,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/L-rBxa5bvrUK7yU6oxCzkmPlEwn1aCxv.jpg",
      alt: "Chocochip Cookies - Lifestyle Scene",
      category: "Featured",
    },
    {
      id: 13,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B-O7bMdwiqozb6sCjNpWJKbT0WmjFHdy.jpg",
      alt: "Butter Cookies - Christmas Holiday Theme",
      category: "Featured",
    },
    {
      id: 14,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB-1J58R5lUDsPfx0lgGE2lCDWkfBoPuW.jpg",
      alt: "Butter Cookies - Premium Product Shot",
      category: "Cookies",
    },
    {
      id: 15,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N-4Pf9TCPUUD5FEel9YTOdEdpBJyFXrX.jpg",
      alt: "Melt-in-Mouth Baked to Buttery Perfection",
      category: "Featured",
    },
    {
      id: 16,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/J-9cpKi4hJ0AnMK66FmD965mxbHQnniM.jpg",
      alt: "Butter Cookies - Breakfast and Picnic Scenes",
      category: "Featured",
    },
    {
      id: 17,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H-Th2Cwt92sVcRpT416nCoeRLVsfXezd.jpg",
      alt: "Butter Cookies - Lifestyle Moments Collection",
      category: "Featured",
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
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our collection of premium British treats through stunning imagery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-[#D4AF37] text-white text-xs font-semibold rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          {galleryImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">Gallery Coming Soon</h3>
              <p className="text-gray-500">We're curating beautiful images to showcase here</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0A3281] to-[#1E4498]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-6 font-bold">Love What You See?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            All our premium products are available on Amazon UK with fast delivery!
          </p>
          <Link
            href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-white px-8 py-3 uppercase text-lg tracking-wider hover:bg-[#FF5252] transition-colors font-bold inline-block rounded-md shadow-lg hover:shadow-xl"
          >
            Shop Now on Amazon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
