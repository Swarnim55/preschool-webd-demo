"use client"

import { Book, Heart, Users, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Bubble = ({ size, position }: { size: number, position: { left: string, top: string } }) => (
  <motion.div
    className="absolute rounded-full bg-sky-200 opacity-50"
    style={{
      width: size,
      height: size,
      ...position,
    }}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: Math.random() * 2 + 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
)

export default function PhilosophySection() {
  const [bubbles, setBubbles] = useState<{ id: number; size: number; position: { left: string; top: string } }[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      position: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <section className="bg-sky-100 py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} size={bubble.size} position={bubble.position} />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-8">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold text-sky-700 mb-4">We Believe In:</h3>
            <ul className="space-y-4">
              {[
                { icon: Heart, text: "Nurturing each child's unique potential" },
                { icon: Book, text: "Fostering a love for learning through play" },
                { icon: Users, text: "Building strong partnerships with families" },
                { icon: Sun, text: "Creating a safe and inspiring environment" },
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <item.icon className="text-sky-500 mr-2 transition-transform duration-300 group-hover:scale-125" />
                  <span className="transition-colors duration-300 group-hover:text-sky-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-sky-200 bg-opacity-90 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">Our Approach</h3>
            <p className="text-sky-900 mb-4">
              At our preschool, we embrace a holistic approach to early childhood education. We combine the best practices from various educational philosophies to create a unique and enriching experience for your child.
            </p>
            <p className="text-sky-900 mb-4">
              {"Our curriculum is designed to foster creativity, curiosity, and critical thinking skills. We believe that children learn best through hands-on experiences and play-based activities. Our dedicated teachers provide a nurturing and supportive environment where children can explore, discover, and grow."}
            </p>
            <a href="/our-approach" className="inline-block bg-sky-500 text-white font-semibold py-2 px-4 rounded hover:bg-sky-600 transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-sky-800 mb-4">Join Our Preschool Family</h3>
          <p className="text-sky-700 max-w-2xl mx-auto mb-6">
            {"We invite you to visit our preschool and learn more about our programs. Schedule a tour today and see firsthand how we can help your child thrive."}
          </p>
          <a href="/contact" className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors">
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  )
}