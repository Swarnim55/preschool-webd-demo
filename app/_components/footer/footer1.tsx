import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react'
const Footer1 = () => {
  return (
    
    <footer className="bg-blue-800 h-full text-white pt-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 font-bubblegum">Kids Paradise</h3>
          <p className="mb-4">Nurturing young minds for a brighter future.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><Facebook /></a>
            <a href="#" className="hover:text-blue-300"><TwitterLogoIcon /></a>
            <a href="#" className="hover:text-blue-300"><InstagramLogoIcon/></a>
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
            <li className="flex items-center"><Phone className="mr-2 w-4 h-4" /> +977 - (01) - 5639559</li>
            <li className="flex items-center"><Mail className="mr-2 w-4 h-4" /> info@paradisekids678@gmail.com</li>
            <li className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> Jatigal, Sanothimi, Bhaktapur, Nepal</li>
            <li className="flex items-center"><Clock className="mr-2 w-4 h-4" /> Sun-Fri: 10AM-4PM</li>
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
    <div className="bg-blue-900 text-white mt-5  py-6 text-center">
        <p>&copy; 2024 Kidz Paradise. All rights reserved.</p>
        <p> Crafted by: VizTech Soutions</p>
      </div>
  </footer>
  )
}

export default Footer1