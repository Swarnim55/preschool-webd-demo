"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460995081_1068244768636880_613704042115508009_n-mlfl0W46qDRooSRYTZCRujvfaUzpyL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460889775_1068245408636816_7540189376744517888_n-3npnfjw4ppswWkFk3vKS8pmjJ7INtE.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460890598_1068245581970132_5795100644429349181_n-mPmGlgCpTM5ePp52DGT6Ar8aQQD7F5.jpg"
]

const featuredImages = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

export default function Home1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const headerClass = scrollY > 50 ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:wght@400;700&display=swap');

        body {
          font-family: 'Nunito', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bubblegum Sans', cursive;
        }
      `}</style>

      <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-blue-600 font-bubblegum"
            >
              Umang Academy
            </motion.div>
            <nav className="hidden md:flex space-x-6">
              {['Home', 'About', 'Classes', 'Teachers', 'Pages', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                  {['Classes', 'Pages'].includes(item) && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
                </motion.a>
              ))}
            </nav>
            <Button
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bubblegum"
              size="sm"
            >
              Enroll Now
            </Button>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-20"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Classes', 'Teachers', 'Pages', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bubblegum">
              Enroll Now
            </Button>
          </nav>
        </motion.div>
      )}

      <main>
        <section className="relative min-h-screen">
          <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
              >
                Welcome to Umang Academy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8"
              >
                Where little minds grow big dreams!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold font-bubblegum">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expert Teachers", icon: "👩‍🏫" },
                { title: "Quality Education", icon: "📚" },
                { title: "Safe Environment", icon: "🏫" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-blue-800 mb-4">About Our Academy</h2>
                <p className="text-gray-600 mb-6">
                  Umang Academy is dedicated to providing a nurturing environment where children can learn, grow, and explore. Our experienced teachers and innovative curriculum ensure that every child receives the best possible start in their educational journey.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bubblegum">Discover More</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children in classroom"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Featured Moments</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featuredImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`Featured image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg font-semibold">Moment {index + 1}</h3>
                      <p className="text-white text-sm">A brief description of this wonderful moment at Umang Academy.</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Enroll Your Child Today</h2>
            <p className="text-xl mb-8">Give your child the best start in life with our comprehensive programs.</p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold font-bubblegum">
              Start Enrollment
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-bubblegum">Umang Academy</h3>
              <p className="mb-4">Nurturing young minds for a brighter future.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300"><Facebook /></a>
                <a href="#" className="hover:text-blue-300"><Twitter /></a>
                <a href="#" className="hover:text-blue-300"><Instagram /></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-bubblegum">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Classes', 'Our Teachers', 'Contact Us'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-blue-300">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-bubblegum">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="mr-2 w-4 h-4" /> +1 (123) 456-7890</li>
                <li className="flex items-center"><Mail className="mr-2 w-4 h-4" /> info@umangacademy.com</li>
                <li className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> 123 Education St, City, State 12345</li>
                <li className="flex items-center"><Clock className="mr-2 w-4 h-4" /> Mon-Fri: 8AM-5PM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-bubblegum">Newsletter</h4>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <form className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-blue-700 border-blue-600 text-white placeholder-blue-300"
                />
                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bubblegum">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2023 Umang Academy. All rights reserved.</p>
      </div>
    </div>
  )
}