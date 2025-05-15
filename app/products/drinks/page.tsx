import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import OtherCategories from "@/components/other-categories"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"

export const metadata = {
  title: "Premium Non-Alcoholic Drinks | Brit Treat",
  description:
    "Premium sparkling celebration drinks made with 100% fruit juice and no added sugar. Perfect for special occasions.",
  openGraph: {
    title: "Premium Non-Alcoholic Drinks | Brit Treat",
    description: "Premium sparkling celebration drinks made with 100% fruit juice and no added sugar.",
    images: [{ url: "/brit-treat-red-grape-drink.jpeg" }],
  },
  // Add canonical URL
  alternates: {
    canonical: "https://www.brit-treat.co.uk/products/drinks",
  },
}

export default function DrinksPage() {
  const drinksGalleryItems = [
    {
      imageSrc: "/brit-treat-red-grape-drink.jpeg",
      imageAlt: "Brit Treat Sparkling Red Grape Drink",
      title: "Sparkling Red Grape",
      description:
        "Premium non-alcoholic celebration drink made with 100% red grape juice. No added sugar and Halal certified.",
    },
    {
      imageSrc: "/brit-treat-white-grape-drink.jpeg",
      imageAlt: "Brit Treat Sparkling White Grape Drink",
      title: "Sparkling White Grape",
      description:
        "Premium non-alcoholic celebration drink made with 100% white grape juice. No added sugar and Halal certified.",
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
        <div className="absolute inset-0 bg-[#0A3281]"></div>
        <div className="relative container mx-auto px-4 py-8 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4 md:mb-6 drop-shadow-lg text-center hero-text">
            NON-ALCOHOLIC DRINKS
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 md:mb-8 max-w-2xl text-center drop-shadow-md">
            Premium sparkling celebration drinks made with 100% fruit juice and no added sugar
          </p>
        </div>
      </section>

      {/* Featured Product Images */}
      <section className="py-8 md:py-12 bg-[#f9f5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center text-[#0A3281] mb-6 md:mb-8 font-bold">
            Our Sparkling Range
          </h2>

          {/* Mobile Swipe Gallery - Only visible on mobile */}
          <MobileSwipeGallery items={drinksGalleryItems} />

          {/* Desktop Grid Layout - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            <div>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/brit-treat-red-grape-drink.jpeg"
                  alt="Brit Treat Sparkling Red Grape Drink"
                  width={600}
                  height={800}
                  style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Sparkling Red Grape</h3>
                <p className="text-gray-900 mt-2">
                  Premium non-alcoholic celebration drink made with 100% red grape juice. No added sugar and Halal
                  certified.
                </p>
              </div>
            </div>

            <div>
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/brit-treat-white-grape-drink.jpeg"
                  alt="Brit Treat Sparkling White Grape Drink"
                  width={600}
                  height={800}
                  style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Sparkling White Grape</h3>
                <p className="text-gray-900 mt-2">
                  Premium non-alcoholic celebration drink made with 100% white grape juice. No added sugar and Halal
                  certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Section */}
      <OtherCategories currentCategory="drinks" />

      {/* Call to Action */}
      <section className="py-6 md:py-16 bg-[#0A3281]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl text-white mb-2 md:mb-6 font-bold tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-base md:text-xl mb-4 md:mb-8 max-w-2xl mx-auto">
            Our premium non-alcoholic drinks are available on Amazon UK. Order now for fast delivery!
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
