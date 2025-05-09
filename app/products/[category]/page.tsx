import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  // Map of category IDs to their display names, background colors, and content
  const categoryInfo: Record<
    string,
    {
      name: string
      bgColor: string
      description: string
      images: { src: string; alt: string; description: string }[]
      callToAction: string
    }
  > = {
    cookies: {
      name: "Cookies Collection",
      bgColor: "#1a1a50",
      description:
        "Discover our premium range of authentic British cookies, crafted with the finest ingredients and traditional recipes.",
      images: [
        {
          src: "/cookieTin.png",
          alt: "Brit Treat Butter Cookies Tin",
          description:
            "Premium Butter Cookies made with 100% pure butter and no preservatives or coloring added. Our authentic British recipe creates a rich, melt-in-your-mouth texture.",
        },
        {
          src: "/CookieVariant.png",
          alt: "Brit Treat Cookie Varieties",
          description:
            "Our complete range includes assorted, butter, and chocochip cookies - all baked with British brilliance. Perfect for sharing or gifting.",
        },
      ],
      callToAction: "Our premium British treats are available on Amazon UK. Order now for fast delivery!",
    },
    drinks: {
      name: "Non-Alcoholic Drinks",
      bgColor: "#0A3281",
      description: "Premium sparkling celebration drinks made with 100% fruit juice and no added sugar.",
      images: [
        {
          src: "/brit-treat-red-grape-drink.jpeg",
          alt: "Brit Treat Sparkling Red Grape Drink",
          description:
            "Premium non-alcoholic celebration drink made with 100% red grape juice. No added sugar and Halal certified.",
        },
        {
          src: "/brit-treat-white-grape-drink.jpeg",
          alt: "Brit Treat Sparkling White Grape Drink",
          description:
            "Premium non-alcoholic celebration drink made with 100% white grape juice. No added sugar and Halal certified.",
        },
      ],
      callToAction: "Our premium non-alcoholic drinks are available on Amazon UK. Order now for fast delivery!",
    },
    "peanut-butter": {
      name: "Delicious Spreads",
      bgColor: "#E67E22",
      description: "100% natural peanut butter with no added sugar or salt, available in creamy and crunchy varieties.",
      images: [
        {
          src: "/brit-treat-peanut-butter-jars.jpeg",
          alt: "Brit Treat Peanut Butter Jars",
          description: "Premium peanut butter in convenient jars with distinctive blue and red lids.",
        },
        {
          src: "/brit-treat-peanut-butter-tubs.jpeg",
          alt: "Brit Treat Peanut Butter Tubs",
          description: "100% natural peanut butter in larger tubs, available in both creamy and crunchy varieties.",
        },
      ],
      callToAction: "Our premium spreads are available on Amazon UK. Order now for fast delivery!",
    },
    coffee: {
      name: "Coffee Collection",
      bgColor: "#6F4E37",
      description: "Premium 100% instant coffee available in multiple sizes for your perfect cup.",
      images: [
        {
          src: "/brit-treat-coffee-jars.jpeg",
          alt: "Brit Treat Coffee Collection",
          description:
            "Our premium instant coffee is available in three convenient sizes: 50g, 100g, and 200g. Made from carefully selected coffee beans for a rich, aromatic experience with every cup.",
        },
      ],
      callToAction: "Our premium coffee is available on Amazon UK. Order now for fast delivery!",
    },
  }

  // Get category info or use defaults if category not found
  const category = categoryInfo[params.category] || {
    name: "Products",
    bgColor: "#0A3281",
    description: "Explore our range of premium British products.",
    images: [],
    callToAction: "Our premium British treats are available on Amazon UK. Order now for fast delivery!",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: category.bgColor }}></div>
        <div className="relative container mx-auto px-4 py-12 md:py-20 flex flex-col items-center z-10 mt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider mb-6 drop-shadow-lg text-center hero-text">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl text-center drop-shadow-md">
            {category.description}
          </p>
        </div>
      </section>

      {/* Featured Product Images */}
      <section className="py-12 bg-[#f9f5eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-[#0A3281] mb-8 font-bold">Our {category.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.images.map((image, index) => (
              <div key={index}>
                <div
                  className="bg-[#f9f5eb] rounded-lg overflow-hidden"
                  style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={800}
                    style={{ maxHeight: "100%", width: "auto", maxWidth: "100%" }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-[#0A3281]">{image.alt}</h3>
                  <p className="text-gray-700 mt-2 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-[#0A3281]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl text-white mb-3 font-bold tracking-wider">READY TO ORDER?</h2>
          <p className="text-white text-lg mb-4 max-w-2xl mx-auto">{category.callToAction}</p>
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
