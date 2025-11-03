"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToSection() {
  const pathname = usePathname()

  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const closestAnchor = target.closest("a")

      if (closestAnchor) {
        const href = closestAnchor.getAttribute("href")

        // Handle hash links on the same page or from other pages
        if (href && (href.startsWith("/#") || href.startsWith("#"))) {
          // Only prevent default if we're already on the home page
          if (pathname === "/" || href.startsWith("#")) {
            e.preventDefault()

            const targetId = href.startsWith("/#") ? href.substring(2) : href.substring(1)
            if (!targetId) return

            const targetElement = document.getElementById(targetId)

            if (targetElement) {
              // Get the height of the fixed header
              const headerHeight = 96 // Adjust this value based on your header height

              // Calculate the target position with offset for the header
              const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

              // Scroll to the target position with smooth behavior
              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              })
            }
          }
          // If we're not on the home page, let the link navigate normally
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick)

    // Check if there's a hash in the URL on page load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Delay the scroll slightly to ensure the page is fully loaded
        setTimeout(() => {
          const headerHeight = 96
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [pathname])

  return null
}
