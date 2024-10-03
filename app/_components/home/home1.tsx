"use client"

import { Button } from "@/components/ui/button"

import f1 from "@/public/p1.jpg"
import f2 from "@/public/p2.jpg"
import { default as AboutPic, default as f3 } from "@/public/p3.jpg"
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa"
import Events from "../events/page"
import PhilosophySection from "./philoshopy"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460995081_1068244768636880_613704042115508009_n-mlfl0W46qDRooSRYTZCRujvfaUzpyL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460889775_1068245408636816_7540189376744517888_n-3npnfjw4ppswWkFk3vKS8pmjJ7INtE.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460890598_1068245581970132_5795100644429349181_n-mPmGlgCpTM5ePp52DGT6Ar8aQQD7F5.jpg"
]

const featuredImages = [
  f1,
  f2,
 "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460890598_1068245581970132_5795100644429349181_n-mPmGlgCpTM5ePp52DGT6Ar8aQQD7F5.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460995081_1068244768636880_613704042115508009_n-mlfl0W46qDRooSRYTZCRujvfaUzpyL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460889775_1068245408636816_7540189376744517888_n-3npnfjw4ppswWkFk3vKS8pmjJ7INtE.jpg",
  f3,
]

export default function Home1() {
 

  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <>



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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:bg-black/50 pointer"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:bg-black/50 pointer"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute inset-0 flex items-center justify-around " >
            <div className="text-center text-white bg-black/10 p-4 rounded-xl ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-4"
              >
                Welcome to Kids Paradise PreSchool
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
                <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold font-bubblegum">
                  Learn More
                </Button>
                <Button size="lg" onClick={()=>window.open("https://wa.me/9779862597101?text=I'm%20interested%20in%20your%20preschool%20for%20enrollment.")} className="bg-green-600 hover:bg-green-700 text-white font-semibold font-bubblegum">
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  WhatsApp Us 
                </Button>
                </motion.div>
              </motion.div>
            </div>
          {/* A div displaying admission open with enquiry form*/}
            <div className={` bg-white/80 rounded-lg p-5 hidden lg:block`}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Admission Open</h2>
                <p className="text-gray-600 mb-6">
                  Enroll your child today and give them the best start in life with our comprehensive programs.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bubblegum">Enquire Now</Button>
              </motion.div>
             
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
                  Kids Paradise PreSchool is dedicated to providing a nurturing environment where children can learn, grow, and explore. Our experienced teachers and innovative curriculum ensure that every child receives the best possible start in their educational journey.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bubblegum">Discover More</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={AboutPic}
                  alt="Children in classroom"
                  className="rounded-lg shadow-xl hidden lg:block"
            width={600}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Why Choose us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Expert Teachers", desc:"Learn from industry-certified professionals.", icon: "👩‍🏫" },
                { title: "Quality Education", desc:"Delivering excellence through proven teaching methods.", icon: "📚" },
                { title: "Safe Environment",desc:"A secure and supportive space for learning.", icon: "🏫" },
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
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="">
          <Events/>
        </section>
<section className="bg-white">
  <PhilosophySection/>
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
                  <Image
                    src={src}
                    alt={`Featured image ${index + 1}`}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg font-semibold">Moment {index + 1}</h3>
                      <p className="text-white text-sm">A brief description of this wonderful moment.</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bubblegum">View More</Button>  
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
      </>
   
      
  
  )
}