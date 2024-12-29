'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react'

const Header = () => {
  const { cart } = useCart()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-primary flex items-center">
              Amen Computer
            </Link>
          </li>
          <li className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-primary">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-primary relative">
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

