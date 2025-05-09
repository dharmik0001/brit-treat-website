import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
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
    price: "£12.99",
    weight: "300g",
    packageSize: "12 x 300g",
    images: ["/cookie-variants.jpeg", "/placeholder.svg?key=msuvb"],
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
    features: [
      "Authentic British recipe",
      "No artificial preservatives",
      "No artificial colors",
      "Made with real butter",
    ],
    category: "Cookies",
    relatedProducts: ["butter-cookies", "chocochip-cookies"],
  },
  "butter-cookies": {
    id: "butter-cookies",
    name: "Brit Treat Butter Cookies",
    description: "Premium butter cookies made with 100% pure butter in a decorative tin.",
    longDescription:
      "Our Brit Treat Butter Cookies are crafted following traditional British recipes that have been perfected over generations. Made with 100% pure butter and the finest ingredients, these cookies offer a rich, melt-in-your-mouth experience that's simply irresistible.\n\nEach cookie is carefully baked to achieve the perfect golden color and delicate texture. The decorative blue tin features classic British imagery, making it not just a delicious treat but also a beautiful gift.\n\nWith no preservatives or artificial coloring added, you can enjoy the authentic taste of premium British butter cookies. Perfect for afternoon tea, special occasions, or simply enjoying with a cup of tea or coffee.",
    price: "£14.99",
    weight: "300g",
    images: ["/butter-cookies-tin.png", "/placeholder.svg?key=2ep61"],
    ingredients: "Wheat flour, butter (30%), sugar, eggs, salt, natural flavoring.",
    allergens: ["Contains: Wheat, Milk, Eggs", "May contain traces of nuts"],
    nutritionalInfo: {
      servingSize: "2 cookies (30g)",
      calories: 160,
      fat: "9g",
      saturatedFat: "6g",
      carbohydrates: "17g",
      sugar: "6g",
      protein: "2g",
      salt: "0.2g",
    },
    features: [
      "Made with 100% Pure Butter",
      "No Preservatives or coloring added",
      "Authentic British recipe",
      "Decorative reusable tin",
    ],
    category: "Cookies",
    relatedProducts: ["assorted-cookies", "chocochip-cookies"],
  },
  "chocochip-cookies": {
    id: "chocochip-cookies",
    name: "Brit Treat Chocochip Cookies",
    description: "Delicious chocolate chip cookies made with the finest ingredients.",
    longDescription:
      "Our Brit Treat Chocochip Cookies combine a buttery cookie base with generous chunks of premium chocolate. Each bite delivers the perfect balance of sweetness and rich chocolate flavor.\n\nCrafted with the same attention to quality that defines all Brit Treat products, these chocolate chip cookies are made with real butter and high-quality chocolate chips. The attractive packaging features iconic British landmarks, making these cookies a perfect gift or special treat.\n\nWith no artificial preservatives or colors, you can enjoy the authentic taste of premium British chocolate chip cookies. Ideal for sharing with friends and family or indulging in a moment of sweet pleasure.",
    price: "£12.99",
    weight: "300g",
    packageSize: "12 x 300g",
    images: [
      "/cookie-variants.jpeg",
      "/placeholder.svg?height=600&width=600&query=chocolate%20chip%20cookies%20close%20up",
    ],
    ingredients: "Wheat flour, butter, sugar, chocolate chips (15%), eggs, vanilla extract, baking soda, salt.",
    allergens: ["Contains: Wheat, Milk, Eggs, Soy", "May contain traces of nuts"],
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
    features: [
      "Made with real butter",
      "Premium chocolate chips",
      "No artificial preservatives",
      "Authentic British recipe",
    ],
    category: "Cookies",
    relatedProducts: ["assorted-cookies", "butter-cookies"],
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

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#F7941D]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-[#F7941D]">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products#cookies" className="hover:text-[#F7941D]">
              Cookies
            </Link>
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
                <h3 className="text-lg font-medium text-[#1a1a50]">Features</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {product.weight && (
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[#1a1a50]">Weight</h3>
                  <p className="text-gray-700">{product.weight}</p>
                  {product.packageSize && <p className="text-gray-700">Package Size: {product.packageSize}</p>}
                </div>
              )}

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

      {/* Ingredients */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">Ingredients</h2>
          <p className="text-gray-700">{product.ingredients}</p>
        </div>
      </section>

      {/* Nutritional Information */}
      <section className="py-12 bg-gray-50">
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
                        src={relatedProduct.images[0] || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-4"
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
