import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"

export default function Home() {
  // Product categories data for swipe gallery
  const productCategories = [
    {
      imageSrc: "/butter-cookies-assortment.png",
      imageAlt: "Cookies Collection",
      title: "Cookies Collection",
      description: "Delicious premium cookies crafted with traditional British recipes and the finest ingredients.",
      link: "/products/cookies",
    },
    {
      imageSrc: "/brit-treat-drinks.png",
      imageAlt: "Non-Alcoholic Drinks",
      title: "Non-Alcoholic Drinks",
      description: "Refreshing premium beverages for all occasions, perfect for celebrations and special moments.",
      link: "/products/drinks",
    },
    {
      imageSrc: "/brit-treat-peanut-butter.png",
      imageAlt: "Peanut Butter Range",
      title: "Delicious Spreads",
      description: "Premium spreads made with high-quality ingredients, available in various delicious flavors.",
      link: "/products/peanut-butter",
    },
    {
      imageSrc: "/brit-treat-coffee.png",
      imageAlt: "Coffee Collection",
      title: "Coffee Collection",
      description:
        "Premium coffee blends with distinctive British character, perfect for starting your day or afternoon tea.",
      link: "/products/coffee",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden min-h-[100svh] md:min-h-screen flex items-center pt-16 md:pt-24 scroll-mt-24"
      >
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/butter-cookies-hero.png"
            alt="Brit Treat Butter Cookies"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-image"
            style={{
              objectPosition: "center 40%", // Default position
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row-reverse items-center z-10">
          <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0 md:pl-8">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white tracking-wider mb-6 drop-shadow-lg uppercase hero-text flex flex-col items-center md:items-end"
              style={{ letterSpacing: "0.05em" }}
            >
              <span>TASTE</span>
              <span>THE RICHNESS</span>
              <span>OF TRADITION</span>
            </h1>
            <p
              className="text-white text-2xl md:text-3xl mb-8 drop-shadow-md font-bold uppercase hero-text text-center md:text-right"
              style={{ letterSpacing: "0.03em", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
            >
              FINEST BUTTER COOKIES SELECTION
            </p>
            <Link
              href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] text-white px-8 py-3 uppercase text-lg tracking-wider font-bold inline-flex items-center gap-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10">Shop Now on Amazon</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11l-4-4m0 0l-4 4m4-4v12"
                  transform="rotate(90, 12, 12)"
                />
              </svg>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start">
            {/* This space is intentionally left empty to balance the layout */}
            {/* The cookie tin is already visible in the background image */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-10 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto font-serif">
            {/* Section Header */}
            <h2 className="text-4xl text-center text-[#0A3281] mb-6 font-bold uppercase">
              OUR STORY
              <div className="w-[175px] h-[3px] bg-[#FF6B6B] mx-auto mt-2"></div>
            </h2>

            {/* Our Beginning */}
            <div className="mb-12">
              <h3 className="text-3xl text-[#0A3281] mb-4 font-bold">Our Beginning</h3>
              <p className="text-gray-900 mb-4 text-lg leading-relaxed">
                Founded in the UK, Brit Treat began with a simple idea: to create premium, accessible delights that
                blend tradition with a modern touch. Our journey started with our iconic Butter Cookies Tins beloved for
                their rich flavour, crisp texture, and elegant packaging.
              </p>
              <div className="border-l-4 border-[#FF6B6B] pl-4 italic text-gray-900 text-lg">
                "We wanted to create treats that capture the essence of British tradition while appealing to modern
                tastes."
              </div>
            </div>

            {/* Our Growing Range */}
            <div className="mb-12 bg-[#F8F9FA] py-8 px-6 rounded-lg">
              <h3 className="text-3xl text-[#0A3281] mb-6 font-bold text-center">Our Growing Range</h3>
              <p className="text-center mb-6 text-lg text-gray-900">
                As demand grew, so did our range. Today, Brit Treat proudly offers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cookies Collection */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="border-t-2 border-[#FF6B6B]"></div>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#FF6B6B] text-xl">+</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0A3281] mb-2">Cookies Collection</h4>
                        <p className="text-gray-900 text-lg">
                          Classic and seasonal editions crafted with traditional recipes and premium ingredients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Non-Alcoholic Drinks */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="border-t-2 border-[#FF6B6B]"></div>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#FF6B6B] text-xl">+</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0A3281] mb-2">Non-Alcoholic Drinks</h4>
                        <p className="text-gray-900 text-lg">
                          Sparkling beverages perfect for celebrations and special moments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Peanut Butter Range */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="border-t-2 border-[#FF6B6B]"></div>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#FF6B6B] text-xl">+</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0A3281] mb-2">Delicious Spreads</h4>
                        <p className="text-gray-900 text-lg">
                          Delicious spreads in classic and bold flavours for every preference.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coffee Collection */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="border-t-2 border-[#FF6B6B]"></div>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-[#FF6B6B] text-xl">+</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0A3281] mb-2">Coffee Collection</h4>
                        <p className="text-gray-900 text-lg">
                          Premium coffee blends with distinctive British character for the perfect cup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-16 bg-[#F8F9FA] py-10 px-6 rounded-lg">
              <h3 className="text-3xl text-[#0A3281] mb-8 font-bold text-center">Our Values</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quality Ingredients */}
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-[#FF6B6B]"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3281] mb-2">Quality Ingredients</h4>
                    <p className="text-gray-900 text-lg">
                      Responsibly sourced, always delicious, with no compromises on quality.
                    </p>
                  </div>
                </div>

                {/* Family-Friendly */}
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-[#FF6B6B]"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3281] mb-2">Family-Friendly</h4>
                    <p className="text-gray-900 text-lg">
                      Loved by kids, trusted by parents, perfect for sharing with the whole family.
                    </p>
                  </div>
                </div>

                {/* Celebration-Ready */}
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-[#FF6B6B]"
                    >
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                      <path d="M2 22h20"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3281] mb-2">Celebration-Ready</h4>
                    <p className="text-gray-900 text-lg">
                      Ideal for holidays, gifting, and creating moments of everyday joy.
                    </p>
                  </div>
                </div>

                {/* Tradition Meets Innovation */}
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-[#FF6B6B]"
                    >
                      <path d="M18 20V10"></path>
                      <path d="M12 20V4"></path>
                      <path d="M6 20v-6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3281] mb-2">Tradition Meets Innovation</h4>
                    <p className="text-gray-900 text-lg">
                      Classic recipes with modern formats and exciting new flavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Sets Brit Treat Apart */}
            <div className="mb-16">
              <h3 className="text-3xl text-[#0A3281] mb-6 font-bold">What Sets Brit Treat Apart</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <p className="text-base text-gray-900 font-medium">UK Heritage, Global Appeal</p>
                </div>

                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🎁</span>
                  </div>
                  <p className="text-base text-gray-900 font-medium">Perfect for Gifting</p>
                </div>

                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <p className="text-base text-gray-900 font-medium">Elegantly Packaged</p>
                </div>

                <div className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <p className="text-base text-gray-900 font-medium">Trusted Worldwide</p>
                </div>
              </div>
            </div>

            {/* Looking Ahead */}
            <div className="mb-16">
              <h3 className="text-3xl text-[#0A3281] mb-6 font-bold">Looking Ahead</h3>
              <p className="text-gray-900 mb-4 text-lg">
                We envision Brit Treat as a global name in joyful indulgence. Our roadmap includes:
              </p>

              <ul className="space-y-4 mb-6">
                {[
                  { text: "New cookie flavours & formats", icon: "🍪" },
                  { text: "Chocolate and confectionery lines", icon: "🍫" },
                  { text: "Organic snacks", icon: "🌱" },
                  { text: "More festive non-alcoholic beverages", icon: "🥂" },
                  { text: "Expanded coffee selection with specialty blends", icon: "☕" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg border-l-4 border-[#FF6B6B] hover:bg-[#F8F9FA] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0A3281] text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-gray-900 font-medium text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-900 text-lg">
                With expanding global reach, we're bringing the taste of tradition and happiness to more families, more
                moments, and more celebrations around the world.
              </p>
            </div>

            {/* Join the Family */}
            <div className="bg-[#0A3281] text-white p-8 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-4">Join the Brit Treat Family</h3>
              <p className="mb-6 text-lg">
                Whether you're a shopper looking for the perfect snack, a retailer seeking premium stock, or a fan of
                timeless flavours — you're welcome here.
              </p>
              <p className="text-[#FF6B6B] font-bold italic text-2xl mb-6">
                Flavour. Joy. Tradition. That's Brit Treat.
              </p>
              <Link
                href="#contact-us"
                className="bg-[#FF6B6B] text-white px-8 py-3 rounded-md hover:bg-[#FF5252] transition-colors inline-block font-bold text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-[#0A3281] mb-12 font-bold tracking-wider">OUR PRODUCTS</h2>

          {/* Mobile Swipe Gallery */}
          <div className="md:hidden mb-8">
            <MobileSwipeGallery items={productCategories} />
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-start">
            {/* Cookies Collection */}
            <div id="cookies" className="text-center scroll-mt-32">
              <div className="mb-4 flex flex-col items-center">
                <Link href="/products/cookies" className="relative w-64 h-64 mb-4 block cursor-pointer">
                  <Image
                    src="/butter-cookies-assortment.png"
                    alt="Cookies Collection"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link href="/products/cookies" className="group">
                  <h3 className="text-2xl text-[#0A3281] font-bold mt-2 group-hover:text-[#FF6B6B] transition-colors">
                    Cookies Collection
                  </h3>
                </Link>
              </div>
              <p className="text-gray-900 mb-4 text-lg">
                Delicious premium cookies crafted with traditional British recipes and the finest ingredients.
              </p>
            </div>

            {/* Non-Alcoholic Drinks */}
            <div id="drinks" className="text-center scroll-mt-32">
              <div className="mb-4 flex flex-col items-center">
                <Link href="/products/drinks" className="relative w-64 h-64 mb-4 block cursor-pointer">
                  <Image
                    src="/brit-treat-drinks.png"
                    alt="Non-Alcoholic Drinks"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link href="/products/drinks" className="group">
                  <h3 className="text-2xl text-[#0A3281] font-bold mt-2 group-hover:text-[#FF6B6B] transition-colors">
                    Non-Alcoholic Drinks
                  </h3>
                </Link>
              </div>
              <p className="text-gray-900 mb-4 text-lg">
                Refreshing premium beverages for all occasions, perfect for celebrations and special moments.
              </p>
            </div>

            {/* Peanut Butter Range */}
            <div id="peanut-butter" className="text-center scroll-mt-32">
              <div className="mb-4 flex flex-col items-center">
                <Link href="/products/peanut-butter" className="relative w-64 h-64 mb-4 block cursor-pointer">
                  <Image
                    src="/brit-treat-peanut-butter.png"
                    alt="Peanut Butter Range"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link href="/products/peanut-butter" className="group">
                  <h3 className="text-2xl text-[#0A3281] font-bold mt-2 group-hover:text-[#FF6B6B] transition-colors">
                    Delicious Spreads
                  </h3>
                </Link>
              </div>
              <p className="text-gray-900 mb-4 text-lg">
                Premium spreads made with high-quality ingredients, available in various delicious flavors.
              </p>
            </div>

            {/* Coffee Collection */}
            <div id="coffee" className="text-center scroll-mt-32">
              <div className="mb-4 flex flex-col items-center">
                <Link href="/products/coffee" className="relative w-64 h-64 mb-4 block cursor-pointer">
                  <Image
                    src="/brit-treat-coffee.png"
                    alt="Coffee Collection"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link href="/products/coffee" className="group">
                  <h3 className="text-2xl text-[#0A3281] font-bold mt-2 group-hover:text-[#FF6B6B] transition-colors">
                    Coffee Collection
                  </h3>
                </Link>
              </div>
              <p className="text-gray-900 mb-4 text-lg">
                Premium coffee blends with distinctive British character, perfect for starting your day or afternoon
                tea.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0A3281] to-[#1E4498] p-10 rounded-xl text-center shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-white/30 blur-xl"></div>
              <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-white/20 blur-xl"></div>
              <div className="absolute -bottom-12 left-1/3 w-40 h-40 rounded-full bg-white/20 blur-xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 text-white/80 mx-auto mb-2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <div className="w-16 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] mx-auto rounded-full"></div>
              </div>

              <h3 className="text-3xl text-white mb-4 font-bold tracking-wide">DISCOVER OUR FULL RANGE</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Explore our complete collection of premium British treats, available on Amazon UK with fast delivery.
              </p>

              <Link
                href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white text-[#0A3281] px-8 py-3 uppercase text-lg tracking-wider font-bold inline-flex items-center gap-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Shop Now on Amazon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center text-[#0A3281] mb-4 font-bold">Contact Us</h2>

            {/* Red underline instead of gold dots */}
            <div className="w-[175px] h-[3px] bg-[#FF6B6B] mx-auto mb-8"></div>

            <div className="text-center mb-12">
              <p className="text-gray-900 text-lg mb-8">
                Thank you for your interest in Brit-Treat! We'd love to hear from you. Whether you have questions about
                our products, need support, want to discuss bulk orders, export exclusivity, or explore partnership
                opportunities, our team is here to help.
              </p>

              <h3 className="text-2xl text-[#0A3281] mb-6 font-bold">Get in Touch</h3>

              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B6B] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:Sales@brit-treat.co.uk"
                    className="text-[#0A3281] text-lg font-medium hover:underline"
                  >
                    Sales@brit-treat.co.uk
                  </a>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B6B] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <a href="https://wa.me/447979405646" className="text-[#0A3281] text-lg font-medium hover:underline">
                    WhatsApp: +44 7979 405646
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
