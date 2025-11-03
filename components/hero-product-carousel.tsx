"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CarouselProduct {
  imageSrc: string
  imageAlt: string
  tagline: string
  description: string
  price?: string
}

interface HeroProductCarouselProps {
  products: CarouselProduct[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
  opacity: number
  velocityX: number
  velocityY: number
  life: number
  maxLife: number
}

export default function HeroProductCarousel({
  products,
  autoPlay = true,
  autoPlayInterval = 2000,
}: HeroProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMouseInside, setIsMouseInside] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const particleIdRef = useRef(0)
  const animationFrameRef = useRef<number>()

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, products.length])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })

        // Create new particles at cursor position
        if (isMouseInside && Math.random() > 0.7) {
          // Only create particles 30% of the time to avoid too many
          createParticle(x, y)
        }
      }
    }

    const handleMouseEnter = () => setIsMouseInside(true)
    const handleMouseLeave = () => setIsMouseInside(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMouseInside])

  // Create particle function
  const createParticle = (x: number, y: number) => {
    const colors = [
      "#FFD700", // Gold
      "#FFA500", // Orange
      "#FF6B6B", // Red
      "#4ECDC4", // Cyan
      "#45B7D1", // Blue
      "#96CEB4", // Green
      "#FFEAA7", // Light Yellow
      "#DDA0DD", // Plum
      "#87CEEB", // Sky Blue
      "#F0E68C", // Khaki
    ]

    const newParticle: Particle = {
      id: particleIdRef.current++,
      x: x + (Math.random() - 0.5) * 20, // Add some randomness
      y: y + (Math.random() - 0.5) * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2, // 2-6px
      opacity: 1,
      velocityX: (Math.random() - 0.5) * 2, // Random horizontal velocity
      velocityY: (Math.random() - 0.5) * 2 - 1, // Slight upward bias
      life: 0,
      maxLife: 60 + Math.random() * 40, // 60-100 frames
    }

    setParticles((prev) => [...prev, newParticle])
  }

  // Particle animation loop
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) => {
        return prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            life: particle.life + 1,
            opacity: Math.max(0, 1 - particle.life / particle.maxLife),
            velocityY: particle.velocityY + 0.02, // Gravity effect
          }))
          .filter((particle) => particle.life < particle.maxLife) // Remove dead particles
      })

      animationFrameRef.current = requestAnimationFrame(animateParticles)
    }

    animationFrameRef.current = requestAnimationFrame(animateParticles)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  if (products.length === 0) return null

  const currentProduct = products[currentIndex]

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto cursor-none">
      {/* Custom Cursor */}
      {isMouseInside && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-80 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-ping opacity-50"></div>
          </div>
        </div>
      )}

      {/* Particle Trail System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none transition-all duration-75 ease-out"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
              transform: `scale(${particle.opacity})`,
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${particle.color}80 0%, transparent 70%)`,
                transform: `scale(${1 + (1 - particle.opacity) * 2})`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Main Product Display Area with Enhanced Decorative Elements */}
      <div className="flex items-center justify-center min-h-[500px] mb-8 relative">
        {/* Enhanced Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Stars */}
          <div className="absolute top-16 left-16 w-4 h-4 text-yellow-400 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <div className="absolute top-24 right-20 w-3 h-3 text-yellow-300 animate-pulse delay-1000">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <div className="absolute bottom-32 left-24 w-5 h-5 text-yellow-400 animate-pulse delay-500">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <div className="absolute top-40 right-32 w-2 h-2 text-yellow-300 animate-pulse delay-700">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          {/* Diamond Shapes */}
          <div className="absolute top-20 right-16 w-4 h-4 bg-orange-400 transform rotate-45 animate-pulse delay-300"></div>
          <div className="absolute bottom-40 right-40 w-3 h-3 bg-yellow-400 transform rotate-45 animate-pulse delay-800"></div>
          <div className="absolute top-60 left-32 w-2 h-2 bg-orange-300 transform rotate-45 animate-pulse delay-1200"></div>
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-yellow-500 transform rotate-45 animate-pulse delay-400"></div>

          {/* Circles and Dots */}
          <div className="absolute top-32 left-40 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-600"></div>
          <div className="absolute bottom-36 right-24 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-48 right-48 w-4 h-4 bg-pink-300 rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-48 left-48 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1100"></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-28 left-60 w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-28 right-60 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-pulse delay-700"></div>

          {/* Hexagon Shapes */}
          <div className="absolute top-36 right-36 w-3 h-3 animate-pulse delay-1000">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-cyan-400">
              <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
            </svg>
          </div>

          <div className="absolute bottom-44 left-36 w-4 h-4 animate-pulse delay-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-pink-400">
              <path d="M17.5 3.5L22 12l-4.5 8.5h-11L2 12l4.5-8.5h11z" />
            </svg>
          </div>

          {/* Plus Signs */}
          <div className="absolute top-44 left-28 w-3 h-3 text-green-400 animate-pulse delay-800">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>

          <div className="absolute bottom-32 right-28 w-2 h-2 text-blue-400 animate-pulse delay-400">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>

          {/* Triangular Elements */}
          <div className="absolute top-52 right-20 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-yellow-400 animate-pulse delay-600"></div>
          <div className="absolute bottom-52 left-16 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-orange-400 animate-pulse delay-1000"></div>

          {/* Sparkle Effects */}
          <div className="absolute top-12 left-52 w-2 h-2 animate-pulse delay-200">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
            </div>
          </div>

          <div className="absolute bottom-12 right-52 w-3 h-3 animate-pulse delay-900">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-yellow-300 transform -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-8 left-44 w-1 h-1 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-56 right-44 w-1 h-1 bg-yellow-200 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-8 left-56 w-1 h-1 bg-blue-200 rounded-full animate-bounce delay-1100"></div>
          <div className="absolute bottom-56 right-56 w-1 h-1 bg-pink-200 rounded-full animate-bounce delay-500"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 left-72 w-8 h-8 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-pulse delay-400"></div>
          <div className="absolute bottom-20 right-72 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-pulse delay-800"></div>
          <div className="absolute top-72 left-20 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm animate-pulse delay-1200"></div>

          {/* Animated Rings */}
          <div className="absolute top-16 right-72 w-6 h-6 border-2 border-yellow-400/50 rounded-full animate-ping delay-600"></div>
          <div className="absolute bottom-16 left-72 w-4 h-4 border-2 border-blue-400/50 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* 3D Product Display */}
        <div className="relative w-[500px] h-[400px] perspective-1000">
          <div className="relative w-full h-full transform-gpu transition-all duration-1000 ease-out hover:scale-105">
            {/* Enhanced Product shadow/glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent blur-3xl transform scale-150"></div>
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent blur-2xl transform scale-125"></div>

            {/* Main product image with 3D transform */}
            <div className="relative w-full h-full transform rotate-y-12 hover:rotate-y-6 transition-transform duration-700">
              <Image
                src={currentProduct.imageSrc || "/placeholder.svg"}
                alt={currentProduct.imageAlt}
                fill
                className="object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                style={{
                  filter:
                    "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.2)) drop-shadow(0 0 15px rgba(251, 191, 36, 0.1))",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src =
                    "/placeholder.svg?height=400&width=500&text=" + encodeURIComponent(currentProduct.imageAlt)
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Thumbnail Navigation */}
      <div className="relative">
        {/* Navigation Container */}
        <div className="flex items-center justify-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            className="group p-3 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Previous product"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Thumbnail Grid */}
          <div className="flex space-x-3">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative overflow-hidden transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? "w-20 h-20 scale-110 bg-gradient-to-br from-blue-500/30 to-purple-500/30 ring-2 ring-yellow-400/60 shadow-lg shadow-blue-500/25"
                    : "w-16 h-16 bg-white/10 hover:bg-white/20 opacity-60 hover:opacity-100 hover:scale-105 border border-white/20"
                } rounded-xl backdrop-blur-sm`}
                aria-label={`Go to ${product.imageAlt}`}
              >
                {/* Product thumbnail */}
                <div className="relative w-full h-full p-2">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.imageAlt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=64&width=64&text=" + encodeURIComponent(product.imageAlt)
                    }}
                  />
                </div>

                {/* Active indicator glow */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-blue-500/20 rounded-xl"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="group p-3 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 border border-white/20"
            aria-label="Next product"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Elegant Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? "w-10 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg shadow-yellow-400/30"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125 border border-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
