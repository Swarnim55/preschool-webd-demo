'use client'

import { Button } from '@/components/ui/button'
import logo from '@/public/logo.png'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Nav1 = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerClass = scrollY > 50 ? " bg-white shadow-md" : isMenuOpen ? "py-2 bg-white shadow-md" : "py-2 bg-blue-600"
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
       {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-20"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { label: 'Home', link: '/' },
              { label: 'About', link: '/about' },
              { label: 'Classes', link: '/classes' },
              { label: 'Our Team', link: '/team' },
             
              { label: 'Contact', link: '/contact' },
            ].map((item) => (
              <a key={item.label} href={item.link} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700  font-bubblegum">
              Enroll Now
            </Button>
          </nav>
        </motion.div>
      )}
    
    <header className={`fixed w-screen z-50 transition-all duration-300 ${headerClass}`}>
   

    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
      <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logo}
              alt="Children in classroom"
              className="rounded-lg shadow-xl"
              width={50}
              height={50}
            />
          </motion.div>
        <nav className="hidden md:flex space-x-6">
          {[
            { label: 'Home', link: '/' },
            { label: 'About', link: '/about' },
            { label: 'Classes', link: '/classes' },
            { label: 'Our Team', link: '/team' },
 
            { label: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`  transition-colors text-lg ease-linear transform hover:scale-220 transition duration-100 ${
                scrollY > 50 ? 'text-blue-600 hover:text-yellow-700' : 'text-white hover:text-yellow-200 '
              }`}
            >
              {item.label}
              {/* {['Classes', 'Pages'].includes(item.label) && <ChevronDown className="inline-block ml-1 w-4 h-4" />} */}
            </motion.a>
          ))}
        </nav>
        <motion.button
     
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`bg-yellow-500 p-2 rounded-lg hover:text-white transition-colors hidden md:block `}
            >
       
          Enroll Now
        </motion.button>
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
  </>
  )
}

export default Nav1
