import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function ProductDetailPreview() {
  // This is a preview component to show how the page would look
  const product = {
    id: "butter-cookies",
    name: "Brit Treat Butter Cookies",
    description: "Premium butter cookies made with 100% pure butter in a decorative tin.",
    longDescription:
      "Our Brit Treat Butter Cookies are crafted following traditional British recipes that have been perfected over generations. Made with 100% pure butter and the finest ingredients, these cookies offer a rich, melt-in-your-mouth experience that's simply irresistible.\n\nEach cookie is carefully baked to achieve the perfect golden color and delicate texture. The decorative blue tin features classic British imagery, making it not just a delicious treat but also a beautiful gift.\n\nWith no preservatives or artificial coloring added, you can enjoy the authentic taste of premium British butter cookies. Perfect for afternoon tea, special occasions, or simply enjoying with a cup of tea or coffee.",
    images: ["/butter-cookies-tin.png", "/placeholder.svg?key=r0232"],
    features: [
      "Made with 100% Pure Butter",
      "No Preservatives or coloring added",
      "Authentic British recipe",
      "Decorative reusable tin",
    ],
    category: "Cookies",
    relatedProducts: ["assorted-cookies"],
  }

  const relatedProduct = {
    id: "assorted-cookies",
    name: "Brit Treat Assorted Cookies",
    description: "Taste the richness of tradition with our finest assorted butter cookies selection.",
    images: ["/cookie-variants.jpeg"],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header placeholder */}
      <div className="bg-[#0A3281] h-20 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-white font-bold">Brit Treat</div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-[#F7941D] cursor-pointer">Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="hover:text-[#F7941D] cursor-pointer">Products</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="hover:text-[#F7941D] cursor-pointer">Cookies</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-[#F7941D]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden bg-white">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden w-20 h-20">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button className="bg-[#F7941D] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#e68a1c] transition-colors font-bold inline-block">
                  Buy on Amazon
                </button>
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

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md">
              <div className="aspect-square relative">
                <Image
                  src={relatedProduct.images[0] || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="text-[#1a1a50] font-medium hover:text-[#F7941D] transition-colors">
                  {relatedProduct.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-[#0A3281] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">© {new Date().getFullYear()} Brit Treat. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
