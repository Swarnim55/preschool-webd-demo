'use client'

import { useEffect, useRef } from 'react'
import ProgramGrid from './_components/classes_grid'

const playfulVectors = [
  "M10 10C30 30 70 30 90 10C70 -10 30 -10 10 10Z",
  "M10 50C30 70 70 70 90 50C70 30 30 30 10 50Z",
  "M50 10C70 30 70 70 50 90C30 70 30 30 50 10Z",
  "M90 50C70 70 30 70 10 50C30 30 70 30 90 50Z"
]

export default function PreschoolPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.2
    function drawSchoolItems() {
      const items = ['📚', '✏️', '🖍️', '🧩', '🎨', '🔢', '🧸', '🍎']
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      items.forEach((item, index) => {
      const x = (index % 4) * (canvas.width / 4) + Math.random() * 50
      const y = Math.floor(index / 4) * (canvas.height / 2) + Math.random() * 50
      ctx.font = '24px Arial'
      ctx.fillText(item, x, y)
      })
    }

    drawSchoolItems()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.2
      drawSchoolItems()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
      <div className="h-[50vh] relative overflow-hidden bg-yellow-100">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-center text-blue-800 animate-bounce" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Discover Our Programs
          </h2>
        </div>
        {playfulVectors.map((path, index) => (
          <svg key={index} className="absolute opacity-10" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
          }} width="100" height="100" viewBox="0 0 100 100">
            <path d={path} fill={`hsl(${Math.random() * 360}, 70%, 70%)`} />
          </svg>
        ))}
      </div>
      <main className="container mx-auto px-4 py-12 relative">
        <ProgramGrid />
        <div className="mt-16 p-8 bg-white rounded-3xl shadow-lg relative overflow-hidden">
          <h3 className="text-3xl font-bold mb-4 text-blue-800" style={{ fontFamily: "'Fredoka One', cursive" }}>Program Summary</h3>
          <p className="text-lg mb-4" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Our programs are designed to nurture young minds and foster a love for learning. Each program runs from 9:00 AM to 3:00 PM, providing a full day of engaging activities and education.
          </p>
          <ul className="list-disc list-inside text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <li>Age-appropriate curriculum for Pre-Nursery to UKG</li>
            <li>Hands-on learning experiences</li>
            <li>Focus on creativity, exploration, and skill development</li>
            <li>Safe and nurturing environment</li>
            <li>Qualified and caring teachers</li>
          </ul>
          {playfulVectors.map((path, index) => (
            <svg key={index} className="absolute opacity-10" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
            }} width="100" height="100" viewBox="0 0 100 100">
              <path d={path} fill={`hsl(${Math.random() * 360}, 70%, 70%)`} />
            </svg>
          ))}
        </div>
      </main>
    </div>
  )
}