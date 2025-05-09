import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

// Cookie products data
const cookieProducts = [
  {
    id: "assorted-cookies",
    name: "Brit Treat Assorted Cookies",
    description: "Taste the richness of tradition with our finest assorted butter cookies selection.",
    price: "£12.99",
    image: "/cookie-variants.jpeg",
    weight: "12 x 300g",
  },
  {
    id: "butter-cookies",
    name: "Brit Treat Butter Cookies",
    description: "Premium butter cookies made with 100% pure butter in a decorative tin.",
    price: "£14.99",
    image: "/butter-cookies-tin.png",
    weight: "300g",
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a50]"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6 drop-shadow-lg text-center">
            COOKIES COLLECTION
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl text-center drop-shadow-md">
            Discover our premium range of authentic British cookies, crafted with the finest ingredients and traditional
            recipes.
          </p>
        </div>
      </section>

      {/* Featured Product Images */}
      <section className="py-12 bg-[#f9f5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-[#0A3281] mb-8 font-bold">Our Cookie Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  src="/cookieTin.png"
                  alt="Brit Treat Butter Cookies Tin"
                  width={600}
                  height={600}
                  style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Premium Butter Cookies</h3>
                <p className="text-gray-700 mt-2 line-clamp-2">
                  Made with 100% pure butter and no preservatives or coloring added. Our authentic British recipe
                  creates a rich, melt-in-your-mouth texture.
                </p>
              </div>
            </div>

            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  src="/CookieVariant.png"
                  alt="Brit Treat Cookie Varieties"
                  width={600}
                  height={600}
                  style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Complete Cookie Collection</h3>
                <p className="text-gray-700 mt-2 line-clamp-2">
                  Our complete range includes assorted, butter, and chocochip cookies - all baked with British
                  brilliance. Perfect for sharing or gifting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-[#0A3281]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl text-white mb-3 font-bold tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-lg mb-4 max-w-2xl mx-auto">
            Our premium British treats are available on Amazon UK. Order now for fast delivery!
          </p>
          <Link
            href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-white px-6 py-2 uppercase text-base tracking-wider hover:bg-[#FF5252] transition-colors font-bold inline-block"
          >
            Shop Now on Amazon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
