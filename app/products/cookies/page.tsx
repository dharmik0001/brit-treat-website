import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import OtherCategories from "@/components/other-categories"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"

export const metadata = {
  title: "Premium British Cookies Collection | Brit Treat",
  description:
    "Discover our range of authentic British cookies, crafted with traditional recipes and premium ingredients. Butter cookies, chocolate chip, and assorted varieties.",
  openGraph: {
    title: "Premium British Cookies Collection | Brit Treat",
    description:
      "Discover our range of authentic British cookies, crafted with traditional recipes and premium ingredients.",
    images: [{ url: "/butter-cookies-hero.png" }],
  },
  // Add canonical URL
  alternates: {
    canonical: "https://www.brit-treat.co.uk/products/cookies",
  },
}

export default function CookiesPage() {
  const cookieGalleryItems = [
    {
      imageSrc: "/cookieTin.png",
      imageAlt: "Brit Treat Butter Cookies Tin",
      title: "Premium Butter Cookies",
      description:
        "Made with 100% pure butter and no preservatives or coloring added. Our authentic British recipe creates a rich, melt-in-your-mouth texture.",
    },
    {
      imageSrc: "/CookieVariant.png",
      imageAlt: "Brit Treat Cookie Varieties",
      title: "Complete Cookie Collection",
      description:
        "Our complete range includes assorted, butter, and chocochip cookies - all baked with British brilliance. Perfect for sharing or gifting.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a50]"></div>
        <div className="relative container mx-auto px-4 py-8 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4 md:mb-6 drop-shadow-lg text-center">
            COOKIES COLLECTION
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 md:mb-8 max-w-2xl text-center drop-shadow-md">
            Discover our premium range of authentic British cookies, crafted with the finest ingredients and traditional
            recipes.
          </p>
        </div>
      </section>

      {/* Featured Product Images - Keep this section for visual appeal */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center text-[#0A3281] mb-6 md:mb-8 font-bold">Premium Quality</h2>

          {/* Mobile Swipe Gallery - Only visible on mobile */}
          <MobileSwipeGallery items={cookieGalleryItems} />

          {/* Desktop Grid Layout - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/cookieTin.png"
                  alt="Brit Treat Butter Cookies Tin"
                  width={600}
                  height={600}
                  style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Premium Butter Cookies</h3>
                <p className="text-gray-700 mt-2">
                  Made with 100% pure butter and no preservatives or coloring added. Our authentic British recipe
                  creates a rich, melt-in-your-mouth texture.
                </p>
              </div>
            </div>

            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/CookieVariant.png"
                  alt="Brit Treat Cookie Varieties"
                  width={600}
                  height={600}
                  style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Complete Cookie Collection</h3>
                <p className="text-gray-700 mt-2">
                  Our complete range includes assorted, butter, and chocochip cookies - all baked with British
                  brilliance. Perfect for sharing or gifting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Section */}
      <OtherCategories currentCategory="cookies" />

      {/* Call to Action */}
      <section className="py-6 md:py-8 bg-[#0A3281]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl text-white mb-2 md:mb-3 font-bold tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-base md:text-lg mb-4 max-w-2xl mx-auto">
            Our premium British treats are available on Amazon UK. Order now for fast delivery!
          </p>
          <Link
            href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-white px-6 py-3 uppercase text-base tracking-wider hover:bg-[#FF5252] transition-colors font-bold inline-block rounded-md"
          >
            Shop Now on Amazon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
