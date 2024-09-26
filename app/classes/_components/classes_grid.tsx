'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users } from "lucide-react"
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Program {
  id: number
  name: string
  description: string
  grade: string
  timing: string
  capacity: number
  color: string
  icon: string
}

const programs: Program[] = [
  {
    id: 1,
    name: "Pre-Nursery",
    description: "Discover the world through play and hands-on activities.",
    grade: "Pre-Nursery",
    timing: "10:00 AM - 1:00 PM",
    capacity: 12,
    color: "bg-blue-100",
    icon: "🔍",
  },
  {
    id: 2,
    name: "Nursery",
    description: "Observations through fun experiments and classes.",
    grade: "Nursery",
    timing: "10:00 AM - 2:00 PM",
    capacity: 15,
    color: "bg-green-100",
    icon: "🧪",
  },
  {
    id: 3,
    name: "Junior Kindergartern",
    description: "Develop creativity through art, music, and storytelling.",
    grade: "LKG",
    timing: "10:00 AM - 3:00 PM",
    capacity: 18,
    color: "bg-yellow-100",
    icon: "🎨",
  },
  {
    id: 4,
    name: "UKG",
    description: "Build physical skills and confidence through movement and games.",
    grade: "UKG",
    timing: "9:00 AM - 3:00 PM",
    capacity: 20,
    color: "bg-red-100",
    icon: "🏃‍♂️",
  },
]

export default function ProgramGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {programs.map((program) => (
        <motion.div
          key={program.id}
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: program.id * 0.1 }}
          onHoverStart={() => setHoveredId(program.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <div className={`${program.color} p-6 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg ${hoveredId === program.id ? 'scale-105' : ''}`}>
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl"
              animate={{ rotate: hoveredId === program.id ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {program.icon}
            </motion.div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-300 rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
                {program.name}
              </h3>
              <p className="text-gray-700 mb-4 text-center" style={{ fontFamily: "'Quicksand', sans-serif" }}>{program.description}</p>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span style={{ fontFamily: "'Quicksand', sans-serif" }}>{program.grade}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span style={{ fontFamily: "'Quicksand', sans-serif" }}>{program.timing}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <BookOpen className="w-5 h-5 mr-2" />
                <span style={{ fontFamily: "'Quicksand', sans-serif" }}>Capacity: {program.capacity} children</span>
              </div>
              <Button 
              onClick={()=>router.push('classes/detail/') }
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors" style={{ fontFamily: "'Fredoka One', cursive" }}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gray-200 rounded-full shadow-md"></div>
        </motion.div>
      ))}
    </div>
  )
}