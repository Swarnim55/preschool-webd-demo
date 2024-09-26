'use client'

import f1 from "@/public/p1.jpg"
import f2 from "@/public/p2.jpg"
import { default as f3 } from "@/public/p3.jpg"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight, FaBook, FaCalculator, FaClock, FaGraduationCap, FaLanguage, FaPalette, FaTimes, FaUser } from 'react-icons/fa'


export default function ClassDetail() {
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null)



  const teachersAndOutcomes = [
    { icon: FaGraduationCap, title: "Ms. Susila", description: "Lead Teacher" },
    { icon: FaUser, title: "Ms. Anita", description: "Assistant Teacher" },
    { icon: FaPalette, title: "Art Skills", description: "Creative Expression" },
    { icon: FaCalculator, title: "Math Skills", description: "Number Recognition" },
    { icon: FaLanguage, title: "Language", description: "Vocabulary Building" },
    { icon: FaBook, title: "Reading", description: "Letter Recognition" },
    { icon: FaClock, title: "Time Management", description: "Daily Routines" },
    { icon: FaUser, title: "Social Skills", description: "Friendship Building" },
  ]

  const marqueeImages = [
    f1,
    f2,
   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460890598_1068245581970132_5795100644429349181_n-mPmGlgCpTM5ePp52DGT6Ar8aQQD7F5.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460995081_1068244768636880_613704042115508009_n-mlfl0W46qDRooSRYTZCRujvfaUzpyL.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460889775_1068245408636816_7540189376744517888_n-3npnfjw4ppswWkFk3vKS8pmjJ7INtE.jpg",
    f3,
  ]

  const otherClasses = [
    { name: "Pre-Nursery", description: "For ages 2-3 years" },
    { name: "Junior Kindergarten", description: "For ages 4-5 years" },
    { name: "Senior Kindergarten", description: "For ages 5-6 years" },
  ]

  return (
    <div className="min-h-screen  bg-blue-50 font-quicksand p-4 sm:p-8">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 py-20">
          <motion.div 
            className="bg-blue-100 rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Moving vectors background */}
            <div className="absolute inset-0 z-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full"
                animate={{
                  x: [0, -150, 0],
                  y: [0, -100, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-blue-800">Nursery</h2>
              <Image 
                src={f3} 
                alt="Nursery Class" 
                width={400} 
                height={300} 
                className="rounded-2xl shadow-md mb-4 sm:mb-6 mx-auto"
              />
              <ul className="space-y-3 sm:space-y-4">
                <motion.li 
                  className="flex items-center text-base sm:text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaUser className="text-blue-600 mr-2" /> Age Group: 3-4 years
                </motion.li>
                <motion.li 
                  className="flex items-center text-base sm:text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <FaClock className="text-blue-600 mr-2" /> Class Duration: 2 hours
                </motion.li>
                <motion.li 
                  className="flex items-center text-base sm:text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaBook className="text-blue-600 mr-2" /> Subjects: Early Math, Language, Art
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-blue-200 rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Moving vectors background for class description */}
            <div className="absolute inset-0 z-0 opacity-10">
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-blue-300 rounded-full"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-36 h-36 bg-blue-400 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -70, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 23,
                  ease: "linear"
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800">Class Description</h3>
              <p className="text-base sm:text-lg mb-4 text-blue-900">
                Join our Nursery class for a fun-filled learning adventure! Our experienced teachers use 
                engaging activities and games to introduce early math concepts, language skills, and artistic 
                expression. Your little ones will make new friends, develop social skills, and build a strong 
                foundation for future learning.
              </p>
              <motion.button 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
              <div className="overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{
                    x: [0, -2400],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex">
                      {marqueeImages.map((src, index) => (
                        <motion.div 
                          key={`${i}-${index}`} 
                          className="flex-shrink-0 w-48 h-48 mx-2 cursor-pointer overflow-hidden rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(src.toString())}
                        >
                          <Image src={src} alt={`Activity ${index + 1}`} width={200} height={200} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-blue-300 rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden h-full flex flex-col lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Moving vectors background for teachers & outcomes */}
            <div className="absolute inset-0 z-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full"
                animate={{
                  x: [0, 200, 0],
                  y: [0, 100, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-full"
                animate={{
                  x: [0, -250, 0],
                  y: [0, -150, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear"
                }}
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-900 text-center relative z-10">Teachers & Learning Outcomes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow relative z-10">
              {teachersAndOutcomes.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-100 p-3 sm:p-4 rounded-xl text-center flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <item.icon className="text-blue-600 text-2xl sm:text-3xl mb-2 mx-auto" />
                  <h4 className="font-bold text-blue-800 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-blue-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-blue-400 rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Explore Other Classes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherClasses.map((cls, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-300 p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-bold text-blue-900 text-lg mb-2">{cls.name}</h4>
                  <p className="text-blue-800 text-sm mb-3">{cls.description}</p>
                  <motion.button
                    className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative"
            >
              <Image
                src={selectedImage}
                alt="Full-screen preview"
                width={800}
                height={600}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 text-white bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition duration-300"
              >
                <FaTimes size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}