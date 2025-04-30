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
        padding: 0
      }}
    >
      <div className="container mx-auto px-0 sm:px-2 md:px-4 lg:px-6 m-0 p-0">
        <div className="flex justify-between items-center py-2 transition-all duration-300" style={{ padding: scrolled ? '0.25rem 0' : '0.5rem 0' }}>
          {/* Mobile hamburger menu button - repositioned for visibility */}
          <div className="block md:hidden order-first" style={{ zIndex: 50, marginLeft: '10px' }}>
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              flexShrink: 0,
              paddingLeft: 0,
              flexGrow: 0,
              transition: "all 300ms"
            }}
          >
            <Link href="/">
              <div className="relative h-24 w-72 sm:h-28 sm:w-80 md:h-32 md:w-[28rem] lg:h-36 lg:w-[32rem]" style={{ 
                height: scrolled ? '120px' : '150px',
                overflow: 'visible'
              }}>
                <div className="absolute left-0 h-full w-1/2" style={{
                  transform: 'scale(2.2)',
                  transformOrigin: 'left center',
                  transition: '0.3s ease-in-out',
                  marginLeft: '-10px', /* Moved further left */
                  marginTop: '40px'
                }}>
                  <Image 
                    src="https://res.cloudinary.com/dnizoc474/image/upload/v1746004579/Untitled_design_qew21v.png" 
                    alt="Gujens & Associates" 
                    fill
                    className="object-contain object-left-center"
                    style={{ 
                      color: 'transparent',
                      transition: '0.3s ease-in-out',
                    }}
                    priority
                  />
                </div>
              </div>
            </Link>
          </motion.div>
          {/* Secondary hamburger button for right side - hidden in this implementation */}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                gap: "2rem"
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
                    className="text-black hover:text-gray-800 font-medium transition-colors text-base hover:border-b-2 hover:border-current pb-1"
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
        <div className="block md:hidden" style={{ zIndex: 40 }}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-95 shadow-lg rounded-b-lg">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md"
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
