import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import ProductCategoryNav from "@/components/product-category-nav"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brit-blue"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center z-10 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-6 drop-shadow-lg text-center">
            OUR PRODUCTS
          </h1>
          <p className="text-white text-lg mb-8 max-w-2xl text-center drop-shadow-md">
            Discover our range of premium British treats, from delicious cookies to refreshing drinks and our signature
            peanut butter range.
          </p>
        </div>
      </section>

      {/* Product Category Navigation */}
      <ProductCategoryNav />

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Cookies Collection */}
          <div id="cookies" className="mb-24 scroll-mt-48">
            <h2 className="text-3xl text-center text-brit-blue mb-12 font-light tracking-wider">COOKIES COLLECTION</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="md:flex items-center">
                <div className="md:w-1/2 flex flex-col items-center py-8 space-y-6">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/cookieTin.png"
                      alt="Brit Treat Butter Cookies Tin"
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="relative w-80 h-80">
                    <Image
                      src="/CookieVariant.png"
                      alt="Brit Treat Cookie Variants"
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl text-brit-blue mb-4 font-medium">Premium British Cookies</h3>
                  <p className="text-gray-600 mb-6">
                    Our cookies are crafted following traditional British recipes that have been perfected over
                    generations. Made with the finest ingredients including real butter, these cookies offer a rich,
                    melt-in-your-mouth experience that's simply irresistible.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Made with 100% Pure Butter</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>No Artificial Preservatives</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Authentic British Recipes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Elegant Packaging</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/cookies"
                      className="bg-brit-gold text-white px-6 py-3 rounded-md hover:bg-brit-gold-dark transition-colors inline-block"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Alcoholic Drinks */}
          <div id="drinks" className="mb-24 scroll-mt-48">
            <h2 className="text-3xl text-center text-brit-blue mb-12 font-light tracking-wider">
              NON-ALCOHOLIC DRINKS
            </h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="md:flex flex-row-reverse items-center">
                <div className="md:w-1/2 flex justify-center py-8">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/brit-treat-drinks.png"
                      alt="Non-Alcoholic Drinks"
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl text-brit-blue mb-4 font-medium">Premium Non-Alcoholic Beverages</h3>
                  <p className="text-gray-600 mb-6">
                    Our range of non-alcoholic drinks offers a sophisticated alternative for celebrations and special
                    moments. Crafted with premium ingredients, these beverages provide the perfect accompaniment to any
                    occasion.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Sparkling Red and White Grape Varieties</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>No Artificial Colors or Flavors</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Elegant Bottle Design</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Perfect for All Celebrations</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/drinks"
                      className="bg-brit-gold text-white px-6 py-3 rounded-md hover:bg-brit-gold-dark transition-colors inline-block"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peanut Butter Range */}
          <div id="peanut-butter" className="mb-24 scroll-mt-48">
            <h2 className="text-3xl text-center text-[#0A3281] mb-12 font-light tracking-wider">DELICIOUS SPREADS</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="md:flex items-center">
                <div className="md:w-1/2 flex justify-center py-8">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/brit-treat-peanut-butter.png"
                      alt="Peanut Butter Range"
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl text-brit-blue mb-4 font-medium">Premium Spreads</h3>
                  <p className="text-gray-600 mb-6">
                    Our spreads range is made with high-quality ingredients to deliver authentic flavor and texture.
                    Available in both creamy and crunchy varieties to suit every preference.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Made with High-Quality Nuts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>No Palm Oil</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Creamy and Crunchy Varieties</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>No Added Sugar Options</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/peanut-butter"
                      className="bg-brit-gold text-white px-6 py-3 rounded-md hover:bg-brit-gold-dark transition-colors inline-block"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Collection */}
          <div id="coffee" className="mb-16 scroll-mt-48">
            <h2 className="text-3xl text-center text-brit-blue mb-12 font-light tracking-wider">COFFEE COLLECTION</h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="md:flex flex-row-reverse items-center">
                <div className="md:w-1/2 flex justify-center py-8">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/brit-treat-coffee.png"
                      alt="Coffee Collection"
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl text-brit-blue mb-4 font-medium">Premium British Coffee</h3>
                  <p className="text-gray-600 mb-6">
                    Our coffee collection features premium blends with distinctive British character. Each variety is
                    carefully selected and roasted to perfection, offering rich flavors and aromatic experiences for
                    coffee enthusiasts.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Ethically Sourced Beans</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Multiple Roast Options</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Distinctive Flavor Profiles</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-brit-gold mr-2">✓</span>
                      <span>Perfect for Morning or Afternoon Tea</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/products/coffee"
                      className="bg-brit-gold text-white px-6 py-3 rounded-md hover:bg-brit-gold-dark transition-colors inline-block"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brit-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-6 font-light tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Our premium British treats are available on Amazon UK. Order now for fast delivery!
          </p>
          <Link
            href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brit-gold text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-brit-gold-dark transition-colors font-bold inline-block"
          >
            Shop Now on Amazon
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
