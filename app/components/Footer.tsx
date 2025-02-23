import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Amen Computer</h3>
            <p className="text-gray-600">Your one-stop shop for all your computer needs. We offer a wide range of laptops, desktops, and accessories.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=laptop" className="text-gray-600 hover:text-primary">Laptops</Link></li>
              <li><Link href="/products?category=desktop" className="text-gray-600 hover:text-primary">Desktops</Link></li>
              <li><Link href="/products?category=accessory" className="text-gray-600 hover:text-primary">Accessories</Link></li>
              <li><Link href="/cart" className="text-gray-600 hover:text-primary">Cart</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Twitter /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2025 Amen Computer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

