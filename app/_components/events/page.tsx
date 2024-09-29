'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Music, Users, Backpack } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Event {
  id: number
  title: string
  date: string
  time: string
  icon: JSX.Element
  image: string
}

const events: Event[] = [
  { id: 1, title: "Parent-Teacher Meeting", date: "2023-10-15", time: "14:00", icon: <Users className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Music Practice Session", date: "2023-10-18", time: "10:30", icon: <Music className="w-6 h-6" />, image: "https://plus.unsplash.com/premium_photo-1661394973596-adfeaf7cef69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Field Visit to the Zoo", date: "2023-10-22", time: "09:00", icon: <Backpack className="w-6 h-6" />, image: "https://plus.unsplash.com/premium_photo-1726729347553-c7e4d6d1a13b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Art, Craft and Games Day", date: "2023-10-25", time: "11:00", icon: <CalendarDays className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1574704530833-d47190a0d92f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Storytelling Session", date: "2023-10-28", time: "15:00", icon: <CalendarDays className="w-6 h-6" />, image: "https://plus.unsplash.com/premium_photo-1661963138247-4c2409793265?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Science Experiment Day", date: "2023-10-30", time: "10:00", icon: <CalendarDays className="w-6 h-6" />, image: "https://plus.unsplash.com/premium_photo-1661630669472-f74a42131da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc2Nob29sJTIwa2lkcyUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D" },
]

export default function Events() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [isHovered, setIsHovered] = useState(false)
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  
    useEffect(() => {
      resetTimeout()
      if (!isHovered) {
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
        }, 3000) // Adjust the duration as needed
      }
  
      return () => {
        resetTimeout()
      }
    }, [currentIndex, isHovered])
  
    const displayedEvents = [...events, ...events] // Duplicated for infinite scroll
  
    return (
      <section className="w-full py-12 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Upcoming Events</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Nearest Upcoming Event */}
            <Card className="md:w-1/3 bg-yellow-100 bg-opacity-80 border-none shadow-lg">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Next Event</h3>
                  <Image
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center mb-2">
                    {events[currentIndex].icon}
                    <span className="ml-2 font-bold text-blue-700">{events[currentIndex].title}</span>
                  </div>
                  <p className="text-blue-600">{events[currentIndex].date} at {events[currentIndex].time}</p>
                </motion.div>
              </CardContent>
            </Card>
  
            {/* Sliding Events (Next+1) */}
            <div className="md:w-2/3 overflow-hidden relative mt-6">
              <div
                className="flex transition-transform duration-1000"
                style={{ transform: `translateX(-${((currentIndex + 1) * 100) / 2}%)` }} // Adjust for sliding card index
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {displayedEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-1/2 p-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-lg border-none opacity-90 hover:opacity-100">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center mb-2">
                          {event.icon}
                          <p className="ml-2 text-blue-100">{event.date} at {event.time}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
