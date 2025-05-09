import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToSection from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brit Treat",
  description: "Quality British baked treats",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToSection />
        {children}
      </body>
    </html>
  )
}
