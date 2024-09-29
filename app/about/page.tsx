
'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

const PlayfulVector = ({ color, className }: { color: string, className: string }) => (
  <svg className={`absolute ${className}`} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C70 30 70 70 50 90C30 70 30 30 50 10Z" fill={color} />
  </svg>
)

const FloatingBubble = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-4 h-4 bg-blue-200 rounded-full"
    initial={{ y: 100, opacity: 0 }}
    animate={{
      y: [100, -20],
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 3,
      delay: delay,
      repeat: Infinity,
      repeatType: "loop"
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
)

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className={`py-32 relative overflow-hidden ${className}`}
    >
      {children}
      {[...Array(5)].map((_, index) => (
        <FloatingBubble key={index} delay={index * 0.5} />
      ))}
    </motion.section>
  )
}

const FocusCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <motion.div
    className="bg-white p-6 rounded-3xl shadow-lg text-center relative overflow-hidden"
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4 text-5xl">{icon}</div>
    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Fredoka One', cursive" }}>{title}</h3>
    <p style={{ fontFamily: "'Quicksand', sans-serif" }}>{description}</p>
    <PlayfulVector color="#E3F2FD" className="top-0 right-0 opacity-50 transform rotate-45" />
  </motion.div>
)

export default function AboutUs() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { email, message })
    setEmail('')
    setMessage('')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Section className="bg-blue-50" id="hero">
        <PlayfulVector color="#BBDEFB" className="top-0 left-0 opacity-50" />
        <PlayfulVector color="#E3F2FD" className="bottom-0 right-0 opacity-50 transform rotate-180" />
        <div className="container mx-auto px-4 relative">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-8 text-blue-800" 
            style={{ fontFamily: "'Fredoka One', cursive" }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            About Kids Paradise Preschool
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-blue-600 mb-8" 
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Where young minds bloom and grow in a nurturing environment
          </motion.p>
        </div>
      </Section>

      <Section className="bg-blue-100" id="focus">
        <PlayfulVector color="#BBDEFB" className="top-0 left-1/4 opacity-50 transform -rotate-45" />
        <PlayfulVector color="#E3F2FD" className="bottom-0 right-1/4 opacity-50 transform rotate-45" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800" style={{ fontFamily: "'Fredoka One', cursive" }}>What We Focus On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FocusCard icon="🎨" title="Creative Learning" description="Fostering imagination and innovative thinking" />
            <FocusCard icon="❤️" title="Emotional Growth" description="Nurturing empathy and social skills" />
            <FocusCard icon="🤝" title="Social Development" description="Building friendships and teamwork" />
          </div>
        </div>
      </Section>

      <Section className="bg-blue-200" id="morals">
        <PlayfulVector color="#BBDEFB" className="top-0 right-0 opacity-50 transform rotate-90" />
        <PlayfulVector color="#E3F2FD" className="bottom-0 left-0 opacity-50 transform -rotate-90" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800" style={{ fontFamily: "'Fredoka One', cursive" }}>Our Core Morals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { emoji: "🤗", title: "Respect", description: "We teach children to respect themselves, others, and the environment." },
              { emoji: "😊", title: "Kindness", description: "We encourage acts of kindness and compassion in our daily activities." },
              { emoji: "🦸", title: "Integrity", description: "We promote honesty and doing the right thing, even when no one is watching." },
              { emoji: "🧐", title: "Curiosity", description: "We nurture a love for learning and encourage children to ask questions." }
            ].map((moral, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-lg flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-4xl mr-4">{moral.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-700" style={{ fontFamily: "'Fredoka One', cursive" }}>{moral.title}</h3>
                  <p className="text-blue-600" style={{ fontFamily: "'Quicksand', sans-serif" }}>{moral.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50" id="principal">
        <PlayfulVector color="#BBDEFB" className="top-0 left-0 opacity-50 transform rotate-45" />
        <PlayfulVector color="#E3F2FD" className="bottom-0 right-0 opacity-50 transform -rotate-45" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800" style={{ fontFamily: "'Fredoka One', cursive" }}>From the Principal</h2>
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1698510561503-a8252790f5d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Principal"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300"
            />
            <h3 className="text-xl font-semibold text-center mb-4 text-blue-700" style={{ fontFamily: "'Fredoka One', cursive" }}>Mrs. Archana Bhandari</h3>
            <blockquote className="text-blue-600 text-center italic" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {`At Kids Paradise Preschool, we believe in nurturing each child's unique potential. Our goal is to create a loving and stimulating environment where children can explore, learn, and grow. We're committed to laying a strong foundation for lifelong learning and helping our little ones develop into confident, caring individuals.`}
            </blockquote>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-blue-100" id="contact">
        <PlayfulVector color="#BBDEFB" className="top-0 right-1/4 opacity-50 transform rotate-12" />
        <PlayfulVector color="#E3F2FD" className="bottom-0 left-1/4 opacity-50 transform -rotate-12" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800" style={{ fontFamily: "'Fredoka One', cursive" }}>Get in Touch</h2>
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-full"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-3xl"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                Send Message
              </Button>
            </form>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-4 p-2 bg-green-100 text-green-700 rounded-full text-center"
                >
                  {`Thank you for your message! We'll get back to you soon.`}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}