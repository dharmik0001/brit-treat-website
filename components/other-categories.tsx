import Image from "next/image"
import Link from "next/link"
import MobileSwipeGallery from "@/components/mobile-swipe-gallery"

interface CategoryInfo {
  id: string
  name: string
  image: string
  description: string
}

interface OtherCategoriesProps {
  currentCategory: string
}

export default function OtherCategories({ currentCategory }: OtherCategoriesProps) {
  // Define all categories
  const allCategories: CategoryInfo[] = [
    {
      id: "cookies",
      name: "Cookies Collection",
      image: "/butter-cookies-assortment.png",
      description: "Delicious premium cookies crafted with traditional British recipes.",
    },
    {
      id: "drinks",
      name: "Non-Alcoholic Drinks",
      image: "/brit-treat-drinks.png",
      description: "Refreshing premium beverages for all occasions and celebrations.",
    },
    {
      id: "peanut-butter",
      name: "Delicious Spreads",
      image: "/brit-treat-peanut-butter.png",
      description: "Premium spreads made with high-quality ingredients.",
    },
    {
      id: "coffee",
      name: "Coffee Collection",
      image: "/brit-treat-coffee.png",
      description: "Premium coffee blends with distinctive British character.",
    },
  ]

  // Filter out the current category
  const otherCategories = allCategories.filter((category) => category.id !== currentCategory)

  // Format categories for the mobile swipe gallery
  const swipeGalleryItems = otherCategories.map((category) => ({
    imageSrc: category.image,
    imageAlt: category.name,
    title: category.name,
    description: category.description,
    link: `/products/${category.id}`,
  }))

  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center text-[#0A3281] mb-4 md:mb-6 font-bold">
          Explore Our Other Products
        </h2>

        {/* Mobile Swipe Gallery - Only visible on mobile */}
        <div className="md:hidden">
          <MobileSwipeGallery items={swipeGalleryItems} />
        </div>

        {/* Desktop Grid Layout - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {otherCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-full"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-[#0A3281] mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
