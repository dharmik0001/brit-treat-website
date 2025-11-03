"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

interface Category {
  id: string
  name: string
  description: string
  image: string
  link: string
}

interface OtherCategoriesProps {
  currentCategory: string
}

export default function OtherCategories({ currentCategory }: OtherCategoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const allCategories: Category[] = [
    {
      id: "cookies",
      name: "Cookies Collection",
      description: "Traditional British cookies and biscuits",
      image: "/butter-cookies-assortment.png",
      link: "/products/cookies#products",
    },
    {
      id: "drinks",
      name: "Non-Alcoholic Drinks",
      description: "Refreshing grape drinks and beverage selections",
      image: "/brit-treat-drinks.png",
      link: "/products/drinks#products",
    },
    {
      id: "peanut-butter",
      name: "Delicious Spreads",
      description: "Premium peanut butter and spreads",
      image: "/brit-treat-peanut-butter.png",
      link: "/products/peanut-butter#products",
    },
    {
      id: "coffee",
      name: "Coffee Range",
      description: "Premium coffee blends and instant coffee selections",
      image: "/brit-treat-coffee.png",
      link: "/products/coffee#products",
    },
  ]

  // Filter out the current category
  const otherCategories = allCategories.filter((category) => category.id !== currentCategory)

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % otherCategories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + otherCategories.length) % otherCategories.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-[#0A3281] mb-4 font-bold">Explore Our Other Collections</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover more delicious products from our premium British food range
        </p>

        {/* Mobile Swipe View */}
        <div className="md:hidden" ref={containerRef}>
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
              {otherCategories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link href={category.link} className="block">
                      <div className="relative h-64 bg-gray-100">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-[#0A3281] mb-2">{category.name}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <span className="text-[#FF6B6B] font-medium hover:underline inline-flex items-center">
                          View Collection
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {otherCategories.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3281] p-3 rounded-full shadow-lg transition-all z-10"
                  aria-label="Previous collection"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0A3281] p-3 rounded-full shadow-lg transition-all z-10"
                  aria-label="Next collection"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {otherCategories.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {otherCategories.map((_, index) => (
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
            {currentIndex + 1} / {otherCategories.length}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={category.link} className="block">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0A3281] mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-[#FF6B6B] font-medium hover:underline inline-flex items-center">
                    View Collection
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
