"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest(".mobile-menu-container") && !target.closest(".mobile-menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setProductsOpen(false)
  }

  const toggleProducts = (e: React.MouseEvent) => {
    e.preventDefault()
    setProductsOpen(!productsOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setProductsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-4 z-50 p-2 text-white mobile-menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-brit-blue z-40 flex flex-col mobile-menu-container">
          <div className="p-4 border-b border-white/10 flex items-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/brit-treat-logo.png"
                alt="Brit Treat"
                width={100}
                height={40}
                className="h-auto brightness-125 contrast-125"
              />
            </Link>
          </div>

          <nav className="flex flex-col p-6 overflow-y-auto flex-grow">
            <Link
              href="/"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide py-4 border-b border-white/10"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              href="/#our-story"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide py-4 border-b border-white/10"
              onClick={closeMenu}
            >
              Our Story
            </Link>

            <div className="py-4 border-b border-white/10">
              <button
                onClick={toggleProducts}
                className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide w-full text-left flex items-center justify-between"
              >
                Our Products
                <ChevronDown className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="mt-2 pl-4 space-y-3">
                  <Link
                    href="/products/cookies"
                    className="text-white/80 hover:text-brit-gold font-medium uppercase text-lg block py-2"
                    onClick={closeMenu}
                  >
                    Cookies Collection
                  </Link>
                  <Link
                    href="/products/drinks"
                    className="text-white/80 hover:text-brit-gold font-medium uppercase text-lg block py-2"
                    onClick={closeMenu}
                  >
                    Non-Alcoholic Drinks
                  </Link>
                  <Link
                    href="/products/peanut-butter"
                    className="text-white/80 hover:text-brit-gold font-medium uppercase text-lg block py-2"
                    onClick={closeMenu}
                  >
                    Delicious Spreads
                  </Link>
                  <Link
                    href="/products/coffee"
                    className="text-white/80 hover:text-brit-gold font-medium uppercase text-lg block py-2"
                    onClick={closeMenu}
                  >
                    Coffee Collection
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#contact-us"
              className="text-white hover:text-brit-gold font-bold uppercase text-xl tracking-wide py-4 border-b border-white/10"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>

          <div className="p-6 border-t border-white/10 flex justify-center space-x-6">
            <Link
              href="https://www.instagram.com/brit_treat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-3 rounded-full"
              aria-label="Instagram"
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100090802361398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-3 rounded-full"
              aria-label="Facebook"
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="https://wa.me/447979405646"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-3 rounded-full"
              aria-label="WhatsApp"
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
