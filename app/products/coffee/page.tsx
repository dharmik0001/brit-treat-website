import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

export default function CoffeePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#6F4E37]"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6 drop-shadow-lg text-center hero-text">
            COFFEE COLLECTION
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl text-center drop-shadow-md">
            Premium 100% instant coffee available in multiple sizes for your perfect cup
          </p>
        </div>
      </section>

      {/* Featured Product Images */}
      <section className="py-12 bg-[#f9f5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-[#0A3281] mb-8 font-bold">Our Coffee Range</h2>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden mx-auto"
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "600px",
                }}
              >
                <Image
                  src="/brit-treat-coffee-jars.jpeg"
                  alt="Brit Treat Coffee Collection"
                  width={800}
                  height={1000}
                  style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">100% Instant Coffee</h3>
                <p className="text-gray-900 mt-2 max-w-2xl mx-auto">
                  Our premium instant coffee is available in three convenient sizes: 50g, 100g, and 200g. Made from
                  carefully selected coffee beans for a rich, aromatic experience with every cup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0A3281]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-6 font-bold tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Our premium coffee is available on Amazon UK. Order now for fast delivery!
          </p>
          <Link
            href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B6B] text-white px-8 py-3 uppercase text-lg tracking-wider hover:bg-[#FF5252] transition-colors font-bold inline-block"
          >
            Shop Now on Amazon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
