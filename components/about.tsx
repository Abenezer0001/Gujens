"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function About() {
  const { scrollYProgress } = useScroll()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const x1 = useTransform(scrollYProgress, [0.3, 0.6], isMobile ? [0, 0] : [-100, 0])
  const x2 = useTransform(scrollYProgress, [0.3, 0.6], isMobile ? [0, 0] : [100, 0])
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])

  return (
    <section id="about" className="py-20 bg-white overflow-hidden w-full">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div style={{ x: x1, opacity }} className="relative">
            <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-gray-100 rounded-lg z-0"></div>
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                alt="About Gujens & Associates"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-lg z-0"></div>
          </motion.div>

          <motion.div style={{ x: x2, opacity }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-4 md:mb-6">
              About Gujens & Associates
            </h2>
            <div className="w-16 md:w-20 h-1 bg-black mb-4 md:mb-6"></div>

            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Gujens & Associates is a professional debt recovery and legal services firm dedicated to securing the
              financial interests of our clients through legal expertise and professional services.
            </p>

            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Our team of experienced professionals provides comprehensive services including debt recovery, tracking
              services, financial profiling, legal advisory, settlement negotiation, and accounting forensic.
            </p>

            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              We pride ourselves on our ability to deliver results efficiently and effectively, ensuring that our
              clients' financial interests are protected at all times.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  To provide exceptional debt recovery services with integrity and professionalism.
                </p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  To be the leading debt recovery firm, known for our expertise and client satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
