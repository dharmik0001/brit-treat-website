import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToSection from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brit Treat",
  description: "TASTE THE RICHNESS OF TRADITION",
  openGraph: {
    title: "Brit Treat",
    description: "TASTE THE RICHNESS OF TRADITION",
    url: "https://www.brit-treat.co.uk/",
    siteName: "Brit Treat",
    images: [
      {
        url: "https://www.brit-treat.co.uk/brit-treat-logo.png", // Replace with your actual logo URL
        width: 800,
        height: 600,
        alt: "Brit Treat Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brit Treat",
    description: "TASTE THE RICHNESS OF TRADITION",
    images: ["https://www.brit-treat.co.uk/brit-treat-logo.png"], // Replace with your actual logo URL
  },
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
