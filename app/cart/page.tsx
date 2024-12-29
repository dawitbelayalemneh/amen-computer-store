'use client'

import { useCart } from '../context/CartContext'
import Image from 'next/image'
import { Laptop, Monitor, Mouse } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'laptop':
        return <Laptop className="mr-2" />
      case 'desktop':
        return <Monitor className="mr-2" />
      case 'accessory':
        return <Mouse className="mr-2" />
      default:
        return null
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 flex items-center">
                    {getCategoryIcon(item.category)}
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-primary font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-destructive hover:text-destructive/90"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

