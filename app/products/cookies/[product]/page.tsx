import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

// Sample product data - in a real app, this would come from a database or API
const productData = {
  "assorted-cookies": {
    id: "assorted-cookies",
    name: "Brit Treat Assorted Cookies",
    description: "Taste the richness of tradition with our finest assorted butter cookies selection.",
    longDescription:
      "Our Brit Treat Assorted Cookies bring the authentic taste of British tradition to your home. This premium selection features a variety of delicious butter cookies, each crafted with care using traditional recipes.\n\nPackaged in an attractive box featuring iconic British landmarks, these cookies make the perfect gift or a special treat for yourself. The assortment includes different shapes and textures, all with the rich, buttery flavor that Brit Treat is known for.\n\nEach cookie is made with high-quality ingredients and no artificial preservatives or colors, ensuring you enjoy the pure, authentic taste of premium British cookies.",
    images: ["/cookie-variants.jpeg", "/placeholder.svg?key=msuvb"],
    features: [
      "Authentic British recipe",
      "No artificial preservatives",
      "No artificial colors",
      "Made with real butter",
    ],
    category: "Cookies",
    relatedProducts: ["butter-cookies"],
  },
  "butter-cookies": {
    id: "butter-cookies",
    name: "Brit Treat Butter Cookies",
    description: "Premium butter cookies made with 100% pure butter in a decorative tin.",
    longDescription:
      "Our Brit Treat Butter Cookies are crafted following traditional British recipes that have been perfected over generations. Made with 100% pure butter and the finest ingredients, these cookies offer a rich, melt-in-your-mouth experience that's simply irresistible.\n\nEach cookie is carefully baked to achieve the perfect golden color and delicate texture. The decorative blue tin features classic British imagery, making it not just a delicious treat but also a beautiful gift.\n\nWith no preservatives or artificial coloring added, you can enjoy the authentic taste of premium British butter cookies. Perfect for afternoon tea, special occasions, or simply enjoying with a cup of tea or coffee.",
    images: ["/butter-cookies-tin.png", "/placeholder.svg?key=2ep61"],
    features: [
      "Made with 100% Pure Butter",
      "No Preservatives or coloring added",
      "Authentic British recipe",
      "Decorative reusable tin",
    ],
    category: "Cookies",
    relatedProducts: ["assorted-cookies"],
  },
}

export default function ProductDetailPage({ params }: { params: { product: string } }) {
  // In a real app, you would fetch this data from an API or database
  const product = productData[params.product]

  // Fallback if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 mt-16 text-center">
          <h1 className="text-3xl font-bold text-[#1a1a50] mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/products"
            className="bg-[#1a1a50] text-white px-6 py-3 rounded hover:bg-[#2a2a60] transition-colors"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <MobileMenu />
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden bg-white">
                <Image
                  src={product.images?.[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex space-x-4">
                {product.images?.map((image, index) => (
                  <button key={index} className="border rounded-lg overflow-hidden w-20 h-20">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1a1a50] mb-2">{product.name}</h1>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1a1a50]">Features</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7941D] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#e68a1c] transition-colors font-bold inline-block"
                >
                  Buy on Amazon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">Product Description</h2>
          <div className="prose max-w-none">
            {product.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {product.relatedProducts.map((relatedProductId) => {
                const relatedProduct = productData[relatedProductId]
                if (!relatedProduct) return null

                return (
                  <Link key={relatedProductId} href={`/products/cookies/${relatedProductId}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={relatedProduct.images?.[0] || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#1a1a50] font-medium group-hover:text-[#F7941D] transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
