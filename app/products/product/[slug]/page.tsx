import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

// Sample product data - in a real app, this would come from a database or API
const productData = {
  cookies: {
    "butter-cookies": {
      id: "butter-cookies",
      name: "Butter Cookies",
      description:
        "Traditional British butter cookies in a decorative tin. Our butter cookies are made with the finest ingredients, including real butter, to create a rich and delicious treat that's perfect for any occasion.",
      longDescription:
        "Our premium Butter Cookies are crafted following traditional British recipes that have been perfected over generations. Made with real butter and the finest ingredients, these cookies offer a rich, melt-in-your-mouth experience that's simply irresistible.\n\nEach cookie is carefully baked to achieve the perfect golden color and delicate texture. The decorative tin features classic British imagery, making it not just a delicious treat but also a beautiful gift.\n\nPerfect for afternoon tea, special occasions, or simply enjoying with a cup of tea or coffee.",
      price: "£12.99",
      images: ["/butter-cookies-hero.png", "/butter-cookies-closeup.png", "/decorative-cookie-tin.png"],
      ingredients: "Wheat flour, butter (25%), sugar, eggs, salt, natural flavoring.",
      allergens: ["Contains: Wheat, Milk, Eggs", "May contain traces of nuts"],
      nutritionalInfo: {
        servingSize: "2 cookies (30g)",
        calories: 150,
        fat: "8g",
        saturatedFat: "5g",
        carbohydrates: "18g",
        sugar: "7g",
        protein: "2g",
        salt: "0.2g",
      },
      category: "Cookies",
      relatedProducts: ["chocolate-chip", "shortbread"],
    },
    "chocolate-chip": {
      id: "chocolate-chip",
      name: "Chocolate Chip Cookies",
      description: "Classic cookies with rich chocolate chips.",
      longDescription:
        "Our Chocolate Chip Cookies combine a buttery cookie base with generous chunks of premium chocolate. Each bite delivers the perfect balance of sweetness and rich chocolate flavor.",
      price: "£9.99",
      images: [
        "/chocolate-chip-cookies.png",
        "/chocolate-chip-cookies-stack.png",
        "/chocolate-chip-cookies-package.png",
      ],
      ingredients: "Wheat flour, butter, sugar, chocolate chips (15%), eggs, vanilla extract, baking soda, salt.",
      allergens: ["Contains: Wheat, Milk, Eggs", "May contain traces of nuts"],
      nutritionalInfo: {
        servingSize: "2 cookies (30g)",
        calories: 160,
        fat: "8g",
        saturatedFat: "5g",
        carbohydrates: "20g",
        sugar: "12g",
        protein: "2g",
        salt: "0.3g",
      },
      category: "Cookies",
      relatedProducts: ["butter-cookies", "shortbread"],
    },
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch this data from an API or database
  // For now, we'll just check if the product exists in our sample data
  let product = null
  let category = ""

  // Search for the product in all categories
  Object.entries(productData).forEach(([cat, products]) => {
    if (products[params.slug]) {
      product = products[params.slug]
      category = cat
    }
  })

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
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
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
                <p className="text-2xl font-semibold text-[#F7941D] mb-4">{product.price}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1a1a50]">Ingredients</h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1a1a50]">Allergens</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.allergens.map((allergen, index) => (
                    <li key={index}>{allergen}</li>
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

      {/* Nutritional Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">Nutritional Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="text-sm">
                <span className="font-bold">Serving Size:</span> {product.nutritionalInfo.servingSize}
              </p>
            </div>

            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-bold">Calories</td>
                  <td className="py-2 text-right">{product.nutritionalInfo.calories}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold">Total Fat</span> {product.nutritionalInfo.fat}
                  </td>
                  <td className="py-2 text-right">12%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pl-4">Saturated Fat {product.nutritionalInfo.saturatedFat}</td>
                  <td className="py-2 text-right">25%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold">Total Carbohydrate</span> {product.nutritionalInfo.carbohydrates}
                  </td>
                  <td className="py-2 text-right">7%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pl-4">Sugars {product.nutritionalInfo.sugar}</td>
                  <td className="py-2 text-right"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold">Protein</span> {product.nutritionalInfo.protein}
                  </td>
                  <td className="py-2 text-right">4%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">
                    <span className="font-bold">Salt</span> {product.nutritionalInfo.salt}
                  </td>
                  <td className="py-2 text-right">3%</td>
                </tr>
              </tbody>
            </table>

            <div className="pt-4 text-xs text-gray-600">* Percent Daily Values are based on a 2,000 calorie diet.</div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {product.relatedProducts.map((relatedProductId) => {
              const relatedProduct = productData[category]?.[relatedProductId]
              if (!relatedProduct) return null

              return (
                <Link key={relatedProductId} href={`/products/product/${relatedProductId}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.images[0] || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[#1a1a50] font-medium group-hover:text-[#F7941D] transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-[#F7941D] font-semibold mt-1">{relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
