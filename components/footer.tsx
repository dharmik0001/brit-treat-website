import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, PhoneIcon as WhatsApp, Linkedin, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A3281] to-[#072566] text-white relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-12 text-white/10 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-2 relative z-10">
        {/* Logo and Navigation in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label="Home" className="transform transition-transform hover:scale-105 duration-300">
              <Image
                src="/brit-treat-logo.png"
                alt="Brit Treat"
                width={160}
                height={65}
                className="h-auto brightness-125 drop-shadow-md"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/" className="text-white hover:text-brit-gold font-medium text-sm relative group">
              <span>HOME</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brit-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#our-story" className="text-white hover:text-brit-gold font-medium text-sm relative group">
              <span>OUR STORY</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brit-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://www.amazon.co.uk/BRIT-TREAT-Luxury-Cookies-Selection/dp/B0F3XZWBR5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold font-medium text-sm relative group"
            >
              <span>BUY NOW</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brit-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact-us" className="text-white hover:text-brit-gold font-medium text-sm relative group">
              <span>CONTACT US</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brit-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end space-x-4">
            <Link
              href="https://www.instagram.com/brit_treat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100090802361398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://wa.me/447979405646"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="WhatsApp"
            >
              <WhatsApp size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/astha-group-uk-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brit-gold bg-white/10 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-3"></div>

        {/* Legal Links and Copyright in one row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2 md:mb-0">
            <Link
              href="https://astha-group.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs flex items-center group"
            >
              <ChevronRight className="w-3 h-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              <span>Astha Group UK Ltd</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Astha Group UK Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
