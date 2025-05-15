"use client"

import { useState, useRef, type TouchEvent } from "react"
import Image from "next/image"
import Link from "next/link"

interface GalleryItem {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link?: string // Optional link for clickable items
}

interface MobileSwipeGalleryProps {
  items: GalleryItem[]
}

export default function MobileSwipeGallery({ items }: MobileSwipeGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)

    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }

    // Reset values
    setTouchStart(0)
    setTouchEnd(0)
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Render the gallery item based on whether it has a link or not
  const renderGalleryItem = (item: GalleryItem) => {
    const content = (
      <>
        <div
          className="rounded-lg overflow-hidden"
          style={{
            height: "350px",
            maxHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={item.imageSrc || "/placeholder.svg"}
            alt={item.imageAlt}
            width={600}
            height={600}
            style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }}
            className="object-contain"
          />
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-lg font-bold text-[#0A3281]">{item.title}</h3>
          <p className="text-gray-700 mt-1 text-sm px-2">{item.description}</p>
        </div>
      </>
    )

    if (item.link) {
      return (
        <Link href={item.link} className="block">
          {content}
        </Link>
      )
    }

    return content
  }

  return (
    <div className="relative md:hidden">
      <div
        ref={galleryRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {renderGalleryItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-r-lg p-2"
          aria-label="Previous item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {currentIndex < items.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-l-lg p-2"
          aria-label="Next item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 mx-2 rounded-full transition-all duration-200 ${
              currentIndex === index ? "bg-[#0A3281] transform scale-125 shadow-sm" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
