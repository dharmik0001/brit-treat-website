import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-[#0A3281] mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-[#0A3281] mb-4">Looking for our products?</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/products/cookies" className="text-[#F7941D] hover:underline">
                  Cookies Collection
                </Link>
              </li>
              <li>
                <Link href="/products/drinks" className="text-[#F7941D] hover:underline">
                  Non-Alcoholic Drinks
                </Link>
              </li>
              <li>
                <Link href="/products/peanut-butter" className="text-[#F7941D] hover:underline">
                  Delicious Spreads
                </Link>
              </li>
              <li>
                <Link href="/products/coffee" className="text-[#F7941D] hover:underline">
                  Coffee Collection
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="bg-[#0A3281] text-white px-6 py-3 rounded-md hover:bg-[#072566] transition-colors inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
