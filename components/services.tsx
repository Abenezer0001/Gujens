"use client"

import { motion } from "framer-motion"
import { Scale, Search, BarChart2, BookOpen, Handshake, FileSearch } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const services = [
  {
    title: "Debt Recovery",
    description: "Professional debt recovery via legal avenues and to secure the financial interest of our clients.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Tracking Services",
    description:
      "Provide professional tracking services in allocating the debtor and to maintain his/her current location profile.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Financial Profiling",
    description:
      "Provide a comprehensive debtor's profiling for the client including the individual nett asset value, revealing hidden assets and offshore funds.",
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "Legal Advisory",
    description:
      "Provide legal advise to clients on all the legal remedies available to recover the debt from the debtor without inccuring high legal cost.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Achieving Settlement",
    description:
      "Represent our client to achieve the settlement of the case in swiftly manner. To safeguard the best interest of our client without having to go through lengthy and costly legal proceeding in court.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Accounting Forensic",
    description: "Conduct forensic report into debtor's account and to build a strong case in making recovery.",
    icon: FileSearch,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function Services() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section id="services" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We provide comprehensive debt recovery and legal services to protect your financial interests.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="mb-4 inline-block p-3 bg-gray-100 rounded-full">
                <service.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">{service.description}</p>
              <div
                className="w-full h-32 md:h-40 mt-4 rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
