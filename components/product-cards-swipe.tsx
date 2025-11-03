"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  image: string
  description: string
  link: string
}

interface ProductCardsSwipeProps {
  products: Product[]
}

export default function ProductCardsSwipe({ products }: ProductCardsSwipeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [clickedProduct, setClickedProduct] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleProductClick = (productId: string, link: string) => {
    setClickedProduct(productId)
    setTimeout(() => {
      window.location.href = link
    }, 200)
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="md:hidden" ref={containerRef}>
      {/* Main Swipe Gallery */}
      <div
        className="relative overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 px-2">
              <button
                onClick={() => handleProductClick(product.id, product.link)}
                className={`w-full bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                  clickedProduct === product.id ? "scale-90" : ""
                }`}
              >
                <div className="relative h-80 bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-[#0A3281] mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <span className="text-[#FF6B6B] font-semibold inline-flex items-center gap-2 mt-4">
                    View Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {products.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3281] p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3281] p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Next product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {products.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#0A3281] w-8" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} / {products.length}
      </div>
    </div>
  )
}
