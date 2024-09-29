"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const principal = {
  name: 'Mrs. Archana Bhandari',
  image: 'https://images.unsplash.com/photo-1698510561503-a8252790f5d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  message: "Welcome to our school! Our dedicated team of educators and staff are committed to providing a nurturing, creative, and stimulating environment for your children. We believe in fostering a love for learning that will last a lifetime."
}

interface Person{
  name: string;
  role: string;
  image: string;
  description: string;
}

const teachers = [
  { name: 'Aarati Sharma', role: 'Lead Teacher', image: 'https://images.unsplash.com/photo-1713021963717-29ae6ca058fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lcGFsaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D', description: 'Aarati has 10 years of experience in early childhood education.' },
  { name: 'Bijay Thapa', role: 'Assistant Teacher', image: 'https://images.unsplash.com/photo-1592046285097-6cdf4daf0d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Bijay brings creativity to the classroom with his art background.' },
  { name: 'Champa Gurung', role: 'Music Teacher', image: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsaSUyMGdpcmwlMjBzbWFydHxlbnwwfHwwfHx8MA%3D%3D', description: 'Champa introduces children to Nepali music and instruments.' },
  { name: 'Deepak Rai', role: 'Physical Education', image: 'https://plus.unsplash.com/premium_photo-1725576700790-2a0611ee92d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGh5c2ljYWwlMjB0ZWFjaGVyfGVufDB8fDB8fHww', description: 'Deepak ensures students stay active and learn traditional games.' },
]

const caretakers = [
  { name: 'Gita Poudel', role: 'Head Caretaker', image: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Gita ensures a safe and nurturing environment for all children.' },
  { name: 'Hari Karki', role: 'Assistant Caretaker', image: 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Hari assists in maintaining cleanliness and order in the school.' },
  { name: 'Indira Bhattarai', role: 'Nurse', image: 'https://www.collegemagazine.com/wp-content/uploads/2019/11/nurse-2141808_1280.jpg', description: 'Indira provides medical care and health education to our students.' },
  { name: 'Jeevan Shrestha', role: 'Nutritionist', image: 'https://plus.unsplash.com/premium_photo-1661774920238-e8fef8f4a6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8', description: 'Jeevan ensures our students receive balanced and healthy meals.' }
]

const StaffCard = ({ person }: { person: Person}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image src={person.image} alt={person.name} className="w-full h-48 object-cover" />
        <motion.div
          className="absolute inset-0 bg-blue-400 bg-opacity-90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-center p-4">{person.description}</p>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900">{person.name}</h3>
        <p className="text-sm text-blue-700">{person.role}</p>
      </div>
    </motion.div>
  )
}

interface StaffSectionProps {
  title: string;
  staff: Array<{ name: string; role: string; image: string; description: string }>;
  bgColor: string;
}

const StaffSection = ({  title,staff, bgColor }: StaffSectionProps) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
 
        <AnimatePresence>
        <motion.h2 

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
        
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">{title}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StaffCard person={person} />
            </motion.div>
          ))}
             </div>
        
        </AnimatePresence>
        </div>
  </section>
)

export default function SchoolStaff() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 pt-10 overflow-hidden">

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-gradient-to-r from-blue-400 to-blue-600"
      >
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Amazing Team</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Meet the dedicated professionals who nurture and inspire our young learners every day.
          </p>
        </div>
      </motion.header>

      {/* Principal Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-blue-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">Message from Our Principal</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.img
              src={principal.image}
              alt={principal.name}
              className="w-64 h-64 rounded-full object-cover shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{principal.name}</h3>
              <p className="text-blue-800 italic">&quot;{principal.message}&quot;</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Teachers Section */}
      <StaffSection 
        title="Teaching Staff"
        staff={teachers} 
        bgColor="bg-blue-100"
      />

      {/* Caretaking Staff Section */}
      <StaffSection 
        title="Caretaking Staff"
        staff={caretakers} 
        bgColor="bg-blue-200"
      />
    </div>
  )
}