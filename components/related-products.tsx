import Image from "next/image"
import Link from "next/link"

interface RelatedProductsProps {
  category: string
  currentProductId: string
}

// This would typically come from a CMS or API
const relatedProductsData = [
  {
    id: "farmhouse-sourdough",
    name: "Farmhouse® Sourdough Bread",
    price: "$4.99",
    image: "/placeholder.svg?height=300&width=300",
    category: "Breads",
  },
  {
    id: "farmhouse-oatmeal",
    name: "Farmhouse® Oatmeal Bread",
    price: "$4.99",
    image: "/placeholder.svg?height=300&width=300",
    category: "Breads",
  },
  {
    id: "farmhouse-honey-wheat",
    name: "Farmhouse® Honey Wheat Bread",
    price: "$4.99",
    image: "/placeholder.svg?height=300&width=300",
    category: "Breads",
  },
  {
    id: "farmhouse-buttermilk",
    name: "Farmhouse® Buttermilk Bread",
    price: "$4.99",
    image: "/placeholder.svg?height=300&width=300",
    category: "Breads",
  },
]

export default function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  // Filter out the current product and get products from the same category
  const relatedProducts = relatedProductsData
    .filter((product) => product.id !== currentProductId && product.category === category)
    .slice(0, 4)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light text-[#4A2328] mb-8 text-center">You May Also Like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#4A2328] font-medium group-hover:text-[#6B0F1A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B0F1A] font-semibold mt-1">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
