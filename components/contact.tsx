"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-3 md:mb-4">Contact Us</h2>
          <div className="w-16 md:w-20 h-1 bg-black mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
            Get in touch with our team of professionals to discuss how we can help you recover your debts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-6 xl:pl-12"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium">Our Office</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">
                    L-07-01, LEVEL 7, BLOCK L<br />
                    SOLARIS MONT KIARA
                    <br />
                    NO.2, JALAN SOLARIS MONT KIARA
                    <br />
                    50480 KUALA LUMPUR
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium">Phone</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">+60 3 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base md:text-lg font-medium">Email</h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base">info@gujensassociates.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 bg-gray-100 p-4 md:p-6 rounded-lg">
              <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
