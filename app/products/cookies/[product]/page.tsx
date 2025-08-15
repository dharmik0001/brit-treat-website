import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

// Expanded product data with the new blue tin product
const productData = {
  "butter-cookies-blue-tin": {
    id: "butter-cookies-blue-tin",
    name: "Brit Treat Butter Cookies - Classic Blue Tin",
    description: "Traditional butter cookies in a classic blue tin featuring British Guard and Big Ben imagery.",
    longDescription:
      "Experience the authentic taste of British tradition with our Classic Blue Tin Butter Cookies. This beautifully designed blue tin features iconic British imagery including the famous London Guard and Big Ben, making it a perfect representation of British heritage.\n\nInside this classic tin, you'll discover our finest selection of butter cookies, each crafted using traditional recipes that have been perfected over generations. Made with the finest ingredients and 100% pure butter, these cookies deliver the rich, authentic taste that Brit Treat is renowned for.\n\nThe elegant blue tin design with its British Guard and Big Ben imagery makes this not just a delicious treat, but also a beautiful collectible. Perfect for gifting or as a special treat for yourself, this classic collection embodies the phrase 'Taste the Richness of Tradition' with every bite.",
    images: ["/brit-treat-blue-butter-cookies-tin.jpeg", "/butter-cookies-assortment.png"],
    features: [
      "Classic blue decorative tin",
      "British Guard and Big Ben imagery",
      "Made with 100% pure butter",
      "Traditional British recipes",
      "No artificial preservatives",
      "Perfect collectible tin",
    ],
    category: "Cookies",
    price: "£11.99",
    relatedProducts: ["butter-cookies-red-tin", "assorted-cookies-gift-box"],
  },
  "butter-cookies-red-tin": {
    id: "butter-cookies-red-tin",
    name: "Brit Treat Butter Cookies - Premium Red Tin",
    description: "Exquisite butter cookies in an elegant red decorative tin, perfect for gifting.",
    longDescription:
      "Our Premium Red Tin Butter Cookies represent the pinnacle of British baking excellence. This stunning red tin features classic British imagery and contains an assortment of our finest butter cookies, each crafted with 100% pure butter and traditional recipes.\n\nThe elegant red tin design makes this the perfect gift for any occasion, from holidays to corporate gifts. Inside, you'll find a carefully curated selection of butter cookies in various shapes and textures, all sharing the rich, buttery flavor that Brit Treat is renowned for.\n\nEach cookie is baked to golden perfection using only the finest ingredients - pure butter, premium flour, and just the right amount of sugar. No artificial preservatives or colors are added, ensuring you taste only the authentic, traditional flavors of British baking heritage.",
    images: ["/brit-treat-butter-cookies-tin-red.png", "/butter-cookies-assortment.png"],
    features: [
      "Premium red decorative tin",
      "Made with 100% pure butter",
      "No artificial preservatives or colors",
      "Perfect for gifting",
      "Traditional British recipe",
      "Reusable collectible tin",
    ],
    category: "Cookies",
    price: "£12.99",
    relatedProducts: ["butter-cookies-blue-tin", "assorted-cookies-gift-box"],
  },
  "assorted-cookies-gift-box": {
    id: "assorted-cookies-gift-box",
    name: "Brit Treat Assorted Cookies - London Gift Box",
    description: "Premium assorted cookies in a beautiful London-themed gift box featuring iconic British landmarks.",
    longDescription:
      "Experience the taste of Britain with our London Gift Box Assorted Cookies. This beautifully designed box features iconic British landmarks including Big Ben and the London skyline, making it a perfect souvenir or gift that captures the essence of British culture.\n\nInside this elegant gift box, you'll discover a wonderful assortment of traditional British cookies, each representing different regional specialties and time-honored recipes. From buttery shortbread to classic digestives, every cookie tells a story of British baking tradition.\n\nThe box itself is a work of art, featuring detailed illustrations of London's most famous landmarks against a warm, inviting background. It's not just a cookie collection - it's a celebration of British heritage that makes for an unforgettable gift or a special treat to share with family and friends.",
    images: ["/brit-treat-assorted-cookies-box.png", "/cookie-variants.jpeg"],
    features: [
      "Beautiful London landmarks design",
      "Assorted traditional British cookies",
      "Perfect gift box presentation",
      "Authentic British recipes",
      "No artificial preservatives",
      "Collectible gift box",
    ],
    category: "Cookies",
    price: "£10.99",
    relatedProducts: ["butter-cookies-red-tin", "mini-chocochip-cookies"],
  },
  "mini-chocochip-cookies": {
    id: "mini-chocochip-cookies",
    name: "Brit Treat Mini Chocolate Chip Cookies",
    description: "Bite-sized chocolate chip cookies in a convenient resealable container, perfect for snacking.",
    longDescription:
      "Our Mini Chocolate Chip Cookies bring you all the delicious taste of traditional chocolate chip cookies in perfectly bite-sized portions. Packed in a convenient, resealable brown container, these mini treats are perfect for on-the-go snacking, lunchboxes, or sharing with friends.\n\nEach mini cookie is loaded with premium chocolate chips and baked to achieve the perfect balance of crispy edges and soft centers. Despite their small size, these cookies pack a big flavor punch, delivering the same quality and taste you expect from Brit Treat in a more convenient format.\n\nThe resealable container keeps the cookies fresh and makes them perfect for portion control or sharing. Whether you're at work, school, or traveling, these mini chocolate chip cookies provide a satisfying treat that's always within reach. Made with the same high-quality ingredients and traditional baking methods as our full-sized cookies.",
    images: ["/brit-treat-mini-chocochip-cookies.png", "/placeholder.svg?height=600&width=600&text=Mini+Cookies+Detail"],
    features: [
      "Bite-sized convenience",
      "Premium chocolate chips",
      "Resealable container",
      "Perfect for snacking",
      "Traditional recipe in mini form",
      "Great for sharing",
    ],
    category: "Cookies",
    price: "£5.99",
    relatedProducts: ["chocolate-chip-cookies", "assorted-cookies-gift-box"],
  },
  "assorted-cookies": {
    id: "assorted-cookies",
    name: "Brit Treat Assorted Cookies",
    description: "Taste the richness of tradition with our finest assorted butter cookies selection.",
    longDescription:
      "Our Brit Treat Assorted Cookies bring the authentic taste of British tradition to your home. This premium selection features a variety of delicious butter cookies, each crafted with care using traditional recipes.\n\nPackaged in an attractive box featuring iconic British landmarks, these cookies make the perfect gift or a special treat for yourself. The assortment includes different shapes and textures, all with the rich, buttery flavor that Brit Treat is known for.\n\nEach cookie is made with high-quality ingredients and no artificial preservatives or colors, ensuring you enjoy the pure, authentic taste of premium British cookies.",
    images: ["/cookie-variants.jpeg", "/brit-treat-cookie-variants.jpeg"],
    features: [
      "Authentic British recipe",
      "No artificial preservatives",
      "No artificial colors",
      "Made with real butter",
      "Perfect for gifting",
    ],
    category: "Cookies",
    price: "£8.99",
    relatedProducts: ["butter-cookies", "chocolate-chip-cookies"],
  },
  "butter-cookies": {
    id: "butter-cookies",
    name: "Brit Treat Butter Cookies",
    description: "Premium butter cookies made with 100% pure butter in a decorative tin.",
    longDescription:
      "Our Brit Treat Butter Cookies are crafted following traditional British recipes that have been perfected over generations. Made with 100% pure butter and the finest ingredients, these cookies offer a rich, melt-in-your-mouth experience that's simply irresistible.\n\nEach cookie is carefully baked to achieve the perfect golden color and delicate texture. The decorative blue tin features classic British imagery, making it not just a delicious treat but also a beautiful gift.\n\nWith no preservatives or artificial coloring added, you can enjoy the authentic taste of premium British butter cookies. Perfect for afternoon tea, special occasions, or simply enjoying with a cup of tea or coffee.",
    images: ["/butter-cookies-tin.png", "/butter-cookies-assortment.png"],
    features: [
      "Made with 100% Pure Butter",
      "No Preservatives or coloring added",
      "Authentic British recipe",
      "Decorative reusable tin",
      "Perfect with tea or coffee",
    ],
    category: "Cookies",
    price: "£9.99",
    relatedProducts: ["butter-cookies-red-tin", "shortbread-cookies"],
  },
  "chocolate-chip-cookies": {
    id: "chocolate-chip-cookies",
    name: "Brit Treat Chocolate Chip Cookies",
    description: "Indulgent chocolate chip cookies with premium Belgian chocolate chips.",
    longDescription:
      "Experience the perfect balance of crispy edges and chewy centers with our Brit Treat Chocolate Chip Cookies. Made with premium Belgian chocolate chips and traditional British baking techniques, these cookies deliver an exceptional taste experience.\n\nEach cookie is generously loaded with high-quality chocolate chips that melt beautifully in your mouth. The dough is crafted using our signature recipe that combines the finest flour, real butter, and brown sugar for that perfect texture.\n\nPerfect for sharing with family and friends, or enjoying as a special treat with a glass of milk or cup of tea. These cookies represent the perfect fusion of British baking tradition with everyone's favorite chocolate chip indulgence.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Chocolate+Chip+Cookies",
      "/placeholder.svg?height=600&width=600&text=Chocolate+Chip+Detail",
    ],
    features: [
      "Premium Belgian chocolate chips",
      "Traditional British recipe",
      "Perfect crispy-chewy texture",
      "Made with real butter",
      "No artificial flavors",
    ],
    category: "Cookies",
    price: "£7.99",
    relatedProducts: ["mini-chocochip-cookies", "digestive-cookies"],
  },
  "shortbread-cookies": {
    id: "shortbread-cookies",
    name: "Brit Treat Traditional Shortbread",
    description: "Classic Scottish shortbread cookies with a rich, buttery flavor.",
    longDescription:
      "Our Traditional Shortbread cookies are made following an authentic Scottish recipe that has been treasured for generations. These delicate, crumbly cookies are made with just three simple ingredients: butter, sugar, and flour - but the magic is in the perfect proportions and traditional baking methods.\n\nEach shortbread cookie melts in your mouth, delivering a rich, buttery flavor that's both satisfying and elegant. The classic rectangular shape and traditional scoring make these cookies as beautiful as they are delicious.\n\nPerfect for afternoon tea, special occasions, or as a sophisticated gift. Our shortbread represents the pinnacle of British baking tradition, offering an authentic taste of Scotland in every bite.",
    images: ["/shortbread-cookies.png", "/placeholder.svg?height=600&width=600&text=Shortbread+Detail"],
    features: [
      "Authentic Scottish recipe",
      "Made with premium butter",
      "Traditional three-ingredient recipe",
      "Melt-in-your-mouth texture",
      "Classic rectangular shape",
    ],
    category: "Cookies",
    price: "£8.49",
    relatedProducts: ["butter-cookies", "digestive-cookies"],
  },
  "digestive-cookies": {
    id: "digestive-cookies",
    name: "Brit Treat Digestive Biscuits",
    description: "Traditional British digestive biscuits with a wholesome oat flavor.",
    longDescription:
      "Our Digestive Biscuits are a true British classic, made with wholesome oats and wheat flour for a satisfying crunch and nutty flavor. These semi-sweet biscuits have been a staple of British tea time for over a century.\n\nPerfect for dunking in tea or coffee, our digestives have the ideal texture - firm enough to hold their shape but with just the right amount of crumble. Made with natural ingredients and no artificial additives, they offer a wholesome treat you can feel good about.\n\nWhether enjoyed on their own, with cheese, or as the base for a classic British cheesecake, these digestive biscuits are versatile and delicious. Experience the authentic taste of Britain with every bite.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Digestive+Biscuits",
      "/placeholder.svg?height=600&width=600&text=Digestive+Stack",
    ],
    features: [
      "Traditional British recipe",
      "Made with wholesome oats",
      "Perfect for dunking",
      "No artificial additives",
      "Versatile and satisfying",
    ],
    category: "Cookies",
    price: "£6.99",
    relatedProducts: ["shortbread-cookies", "ginger-cookies"],
  },
  "ginger-cookies": {
    id: "ginger-cookies",
    name: "Brit Treat Ginger Snap Cookies",
    description: "Spiced ginger cookies with a perfect snap and warming spices.",
    longDescription:
      "Our Ginger Snap Cookies deliver the perfect balance of sweet and spice, made with real ground ginger, cinnamon, and a hint of cloves. These traditional British cookies have a satisfying snap when you bite into them, followed by a warm, spicy flavor that's both comforting and invigorating.\n\nBaked to golden perfection, each cookie has a crispy texture that makes them ideal for enjoying with tea or coffee. The warming spices not only provide delicious flavor but also evoke the cozy feeling of a traditional British kitchen.\n\nPerfect for autumn and winter months, or any time you crave something with a bit of spice. These ginger snaps are made with natural spices and traditional methods, ensuring an authentic taste that's been loved for generations.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Ginger+Snap+Cookies",
      "/placeholder.svg?height=600&width=600&text=Ginger+Spices",
    ],
    features: [
      "Made with real ground ginger",
      "Traditional British spices",
      "Perfect crispy snap texture",
      "Warming and comforting",
      "Natural ingredients only",
    ],
    category: "Cookies",
    price: "£7.49",
    relatedProducts: ["digestive-cookies", "oatmeal-cookies"],
  },
  "oatmeal-cookies": {
    id: "oatmeal-cookies",
    name: "Brit Treat Oatmeal Cookies",
    description: "Hearty oatmeal cookies with a chewy texture and wholesome flavor.",
    longDescription:
      "Our Oatmeal Cookies combine the wholesome goodness of rolled oats with traditional British baking expertise. These hearty cookies have a wonderfully chewy texture and a satisfying, nutty flavor that comes from premium quality oats.\n\nMade with real butter, brown sugar, and a touch of cinnamon, these cookies offer a perfect balance of sweetness and warmth. The oats provide not only great texture but also make these cookies a more substantial and satisfying treat.\n\nIdeal for breakfast with coffee, as an afternoon snack, or packed in lunchboxes. These oatmeal cookies represent comfort food at its finest - simple, wholesome, and utterly delicious. Each bite delivers the hearty satisfaction that only a well-made oatmeal cookie can provide.",
    images: [
      "/placeholder.svg?height=600&width=600&text=Oatmeal+Cookies",
      "/placeholder.svg?height=600&width=600&text=Oats+Texture",
    ],
    features: [
      "Made with premium rolled oats",
      "Chewy, satisfying texture",
      "Real butter and brown sugar",
      "Touch of warming cinnamon",
      "Wholesome and hearty",
    ],
    category: "Cookies",
    price: "£7.99",
    relatedProducts: ["ginger-cookies", "chocolate-chip-cookies"],
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
            href="/products/cookies"
            className="bg-[#1a1a50] text-white px-6 py-3 rounded hover:bg-[#2a2a60] transition-colors"
          >
            Back to Cookies Collection
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

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 mt-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#F7941D]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products/cookies" className="hover:text-[#F7941D]">
              Cookies Collection
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

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
                <p className="text-gray-700 text-lg">{product.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-[#F7941D]">{product.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[#1a1a50]">Key Features</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <Link
                  href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7941D] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#e68a1c] transition-colors font-bold inline-block rounded"
                >
                  Buy on Amazon UK
                </Link>
                <p className="text-sm text-gray-600">Free delivery available</p>
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
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a1a50] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProductId) => {
                const relatedProduct = productData[relatedProductId]
                if (!relatedProduct) return null

                return (
                  <Link key={relatedProductId} href={`/products/cookies/${relatedProductId}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md border">
                      <div className="aspect-square relative">
                        <Image
                          src={relatedProduct.images?.[0] || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#1a1a50] font-medium group-hover:text-[#F7941D] transition-colors mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{relatedProduct.description}</p>
                        <span className="text-lg font-bold text-[#F7941D]">{relatedProduct.price}</span>
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
