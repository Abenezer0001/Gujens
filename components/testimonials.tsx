'use client'

import { motion } from "framer-motion"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700">"Gujens & Associates secured my assets quickly and professionally."</p>
            <p className="mt-4 font-bold">- Jane Doe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700">"Their tracking services were outstanding."</p>
            <p className="mt-4 font-bold">- John Smith</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700">"Highly recommend for legal advisory."</p>
            <p className="mt-4 font-bold">- Alice Johnson</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}