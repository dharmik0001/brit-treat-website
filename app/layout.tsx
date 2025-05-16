import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToSection from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brit Treat",
  description: "TASTE THE RICHNESS OF TRADITION",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <ScrollToSection />
        {children}
      </body>
    </html>
  )
}
