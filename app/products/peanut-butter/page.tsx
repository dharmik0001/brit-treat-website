import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

export default function PeanutButterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E67E22]"></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6 drop-shadow-lg text-center hero-text">
            DELICIOUS SPREADS
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl text-center drop-shadow-md">
            100% natural peanut butter with no added sugar or salt, available in creamy and crunchy varieties
          </p>
        </div>
      </section>

      {/* Featured Product Images */}
      <section className="py-12 bg-[#f9f5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-[#0A3281] mb-8 font-bold">Our Spreads Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  src="/brit-treat-peanut-butter-jars.jpeg"
                  alt="Brit Treat Peanut Butter Jars"
                  width={600}
                  height={800}
                  style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Crunchy & Creamy Jars</h3>
                <p className="text-gray-700 mt-2">
                  Premium peanut butter in convenient jars with distinctive blue and red lids.
                </p>
              </div>
            </div>

            <div>
              <div
                className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  src="/brit-treat-peanut-butter-tubs.jpeg"
                  alt="Brit Treat Peanut Butter Tubs"
                  width={600}
                  height={800}
                  style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281]">Family Size Tubs</h3>
                <p className="text-gray-700 mt-2">
                  100% natural peanut butter in larger tubs, available in both creamy and crunchy varieties.
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
            Our premium spreads are available on Amazon UK. Order now for fast delivery!
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
