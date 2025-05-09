"use client"

import { useState, useEffect } from "react"

export default function ProductCategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Function to handle category click
  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      // Get the height of the fixed header plus some padding
      const headerHeight = 120 // Increased to provide more space at the top

      // Calculate the target position with offset for the header
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight

      // Scroll to the target position with smooth behavior
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      setActiveCategory(categoryId)
    }
  }

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Add offset for better UX

      // Check which category is in view
      const categories = ["cookies", "drinks", "peanut-butter", "coffee"]

      for (const categoryId of categories) {
        const element = document.getElementById(categoryId)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 150 && bottom >= 150) {
            setActiveCategory(categoryId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if we have a hash in the URL and scroll to that section after component mounts
  useEffect(() => {
    if (window.location.hash) {
      const categoryId = window.location.hash.substring(1)
      setTimeout(() => {
        handleCategoryClick(categoryId)
      }, 500) // Delay to ensure page is fully loaded
    }
  }, [])

  return (
    <div className="bg-white shadow-sm py-4 sticky top-24 z-30">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 md:space-x-6 overflow-x-auto pb-2">
          <button
            onClick={() => handleCategoryClick("cookies")}
            className={`px-3 md:px-4 py-2 whitespace-nowrap font-medium transition-colors ${
              activeCategory === "cookies"
                ? "text-brit-gold border-b-2 border-brit-gold"
                : "text-gray-600 hover:text-brit-gold"
            }`}
          >
            Cookies Collection
          </button>
          <button
            onClick={() => handleCategoryClick("drinks")}
            className={`px-3 md:px-4 py-2 whitespace-nowrap font-medium transition-colors ${
              activeCategory === "drinks"
                ? "text-brit-gold border-b-2 border-brit-gold"
                : "text-gray-600 hover:text-brit-gold"
            }`}
          >
            Non-Alcoholic Drinks
          </button>
          <button
            onClick={() => handleCategoryClick("peanut-butter")}
            className={`px-3 md:px-4 py-2 whitespace-nowrap font-medium transition-colors ${
              activeCategory === "peanut-butter"
                ? "text-brit-gold border-b-2 border-brit-gold"
                : "text-gray-600 hover:text-brit-gold"
            }`}
          >
            Delicious Spreads
          </button>
          <button
            onClick={() => handleCategoryClick("coffee")}
            className={`px-3 md:px-4 py-2 whitespace-nowrap font-medium transition-colors ${
              activeCategory === "coffee"
                ? "text-brit-gold border-b-2 border-brit-gold"
                : "text-gray-600 hover:text-brit-gold"
            }`}
          >
            Coffee Collection
          </button>
        </div>
      </div>
    </div>
  )
}
