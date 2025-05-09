"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-4 z-50 p-2 text-white"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-brit-blue z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/#our-story"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide"
              onClick={toggleMenu}
            >
              Our Story
            </Link>
            <Link
              href="/#products"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide"
              onClick={toggleMenu}
            >
              Our Products
            </Link>
            <Link
              href="/#peanut-butter"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide"
              onClick={toggleMenu}
            >
              Delicious Spreads
            </Link>
            <Link
              href="/#contact-us"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
