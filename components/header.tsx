import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, ChevronDown, PhoneIcon as WhatsApp } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A3281] to-[#1E4498] shadow-lg h-20 flex flex-col justify-center overflow-visible">
      {/* Decorative top border */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#E9C34E] to-[#D4AF37] absolute top-0"></div>

      {/* Change the container to have normal flow and proper spacing */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - aligned with navigation */}
          <div className="transform transition-transform duration-300 hover:scale-105 flex items-center">
            <Link href="/" aria-label="Home" className="block">
              <div className="relative pt-3 mt-1">
                <Image
                  src="/brit-treat-logo.png"
                  alt="Brit Treat"
                  width={130}
                  height={52}
                  className="h-auto brightness-125 contrast-125 drop-shadow-md"
                />
              </div>
            </Link>
          </div>

          {/* Navigation - centered with larger font - hidden on mobile */}
          <nav className="hidden md:flex flex-wrap justify-center gap-x-2 lg:gap-x-4">
            <Link
              href="/"
              className="relative group px-3 py-2 text-white hover:text-brit-gold font-bold uppercase text-base tracking-wide cursor-pointer transition-colors duration-300"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brit-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="/#our-story"
              className="relative group px-3 py-2 text-white hover:text-brit-gold font-bold uppercase text-base tracking-wide cursor-pointer transition-colors duration-300"
            >
              <span>Our Story</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brit-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <div className="relative group">
              <Link
                href="/#products"
                className="flex items-center px-3 py-2 text-white hover:text-brit-gold font-bold uppercase text-base tracking-wide cursor-pointer transition-colors duration-300"
              >
                <span>Our Products</span>
                <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-1 w-72 rounded-lg shadow-xl bg-white/95 backdrop-blur-sm transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 origin-top transition-all duration-300 z-50 overflow-hidden border border-gray-100">
                <div className="py-2 rounded-lg bg-white">
                  <div className="px-4 py-2 bg-gradient-to-r from-[#0A3281]/10 to-transparent border-b border-gray-100">
                    <span className="text-[#0A3281] font-semibold text-sm">Our Collections</span>
                  </div>

                  <Link
                    href="/products/cookies"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0A3281] transition-colors group/item border-b border-gray-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-3 group-hover/item:bg-[#0A3281]/5 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#F7941D]"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="8" cy="9" r="1" fill="currentColor"></circle>
                        <circle cx="15" cy="9" r="1" fill="currentColor"></circle>
                        <circle cx="9" cy="15" r="1" fill="currentColor"></circle>
                        <circle cx="14" cy="15" r="1" fill="currentColor"></circle>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium">Cookies Collection</span>
                      <span className="block text-xs text-gray-500">Premium butter cookies</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    href="/products/drinks"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0A3281] transition-colors group/item border-b border-gray-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-3 group-hover/item:bg-[#0A3281]/5 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#F7941D]"
                      >
                        <path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path>
                        <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium">Non-Alcoholic Drinks</span>
                      <span className="block text-xs text-gray-500">Premium sparkling beverages</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    href="/products/peanut-butter"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0A3281] transition-colors group/item border-b border-gray-50"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-3 group-hover/item:bg-[#0A3281]/5 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#F7941D]"
                      >
                        <path d="M5.5 8.5 9 12l-3.5 3.5"></path>
                        <path d="m12 7 5 5-5 5"></path>
                        <path d="M19 5v14"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium">Delicious Spreads</span>
                      <span className="block text-xs text-gray-500">Premium peanut butter range</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>

                  <Link
                    href="/products/coffee"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0A3281] transition-colors group/item"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center mr-3 group-hover/item:bg-[#0A3281]/5 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-[#F7941D]"
                      >
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                        <line x1="6" x2="6" y1="2" y2="4"></line>
                        <line x1="10" x2="10" y1="2" y2="4"></line>
                        <line x1="14" x2="14" y1="2" y2="4"></line>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-medium">Coffee Collection</span>
                      <span className="block text-xs text-gray-500">Premium instant coffee</span>
                    </div>
                    <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brit-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </div>
            <Link
              href="/#contact-us"
              className="relative group px-3 py-2 text-white hover:text-brit-gold font-bold uppercase text-base tracking-wide transition-colors duration-300"
            >
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brit-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          {/* Social Media Icons - aligned with navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://www.instagram.com/brit_treat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100090802361398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://wa.me/447979405646"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="WhatsApp"
            >
              <WhatsApp size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/astha-group-uk-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
