"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black text-white pt-12 md:pt-16 pb-6 md:pb-8 w-full">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-3 md:mb-4">About Us</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Professional debt recovery and legal services to secure the financial interests of our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-3 md:mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Debt Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Tracking Services
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Financial Profiling
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Legal Advisory
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-3 md:mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2 text-sm md:text-base">
              <p>
                L-07-01, LEVEL 7, BLOCK L<br />
                SOLARIS MONT KIARA
                <br />
                50480 KUALA LUMPUR
              </p>
              <p>Phone: +60 3 1234 5678</p>
              <p>Email: info@gujensassociates.com</p>
            </address>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Gujens & Associates Sdn. Bhd. 202501008325 (1609739 - D). All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
