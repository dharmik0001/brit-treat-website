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
    <section className="py-6 md:py-8 bg-white"> {/* Changed background to white */}
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
              className="group bg-transparent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg" /* Matched card styling */
            >
              <div
                className="bg-transparent rounded-lg overflow-hidden" /* Matched image container styling */
                style={{
                  height: "350px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400} /* Matched image width */
                  height={400} /* Matched image height */
                  style={{ maxHeight: "90%", width: "auto", maxWidth: "90%" }} /* Matched image style */
                  className="object-contain transition-transform duration-300 group-hover:scale-105" /* Matched image hover effect */
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#0A3281] mb-2"> {/* Matched heading size and color */}
                  {category.name}
                </h3>
                <p className="text-gray-700 text-sm">{category.description}</p> {/* Matched description size and color */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
