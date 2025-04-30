"use client"

import { useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: 'blur(4px)',
            y,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white">
                <span className="block">Professional</span>
                <span className="block mt-2">Debt Recovery Services</span>
              </h1>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
                Securing the financial interests of our clients through legal expertise and professional services.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              style={{
                width: '4px',
                height: '8px',
                backgroundColor: 'white',
                borderRadius: '9999px',
                marginTop: '8px'
              }}
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
