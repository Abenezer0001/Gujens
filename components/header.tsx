"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.95)"])

  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        position: "fixed",
        width: "100%",
        zIndex: 50,
        transition: "all 300ms",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 m-0 p-0">
        <div className="flex justify-between items-center py-2 transition-all duration-300" style={{ padding: scrolled ? '0.5rem 0' : '0.6rem 0', height: scrolled ? '80px' : '90px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              flexShrink: 0,
              paddingLeft: 0,
              flexGrow: 0,
              transition: "all 300ms",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Link href="/">
              <div 
                className="relative" 
                style={{
                  height: scrolled ? '90px' : '100px',
                  width: 'auto',
                  maxWidth: '236px',
                  aspectRatio: '3/1',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <Image 
                  src="https://res.cloudinary.com/dnizoc474/image/upload/v1746176108/guens_logo_bvaesn.jpg" 
                  alt="Gujens & Associates" 
                  fill
                  className="object-contain object-left-center"
                  style={{ 
                    color: 'transparent',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  priority
                />
              </div>
            </Link>
          </motion.div>
          
          {/* Mobile hamburger menu button - moved to right side */}
          <div className="block md:hidden order-last" style={{ zIndex: 50, marginRight: '0' }}>
            <button
              type="button"
              className="text-black hover:text-gray-800 transition-colors p-2 bg-white bg-opacity-80 rounded-md shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-black" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-black" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                gap: "2.5rem"
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-black hover:text-gray-800 font-medium transition-colors text-lg hover:border-b-2 hover:border-current pb-1"
                    style={{ color: '#000' }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Mobile menu - adjusted for better visibility */}
      {mobileMenuOpen && (
        <div className="block md:hidden" style={{ zIndex: 40, width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white bg-opacity-95 shadow-lg rounded-b-lg w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-lg font-medium text-black hover:bg-gray-100 rounded-md"
                    style={{ color: '#000' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </motion.header>
  )
}
