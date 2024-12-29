'use client'

import { useParams } from 'next/navigation'
import { products } from '../../data/products'
import Image from 'next/image'
import { useCart } from '../../context/CartContext'
import { Laptop, Monitor, Mouse } from 'lucide-react'

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id as string))

  if (!product) {
    return <div>Product not found</div>
  }

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
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image src={product.image} alt={product.name} width={600} height={400} className="w-full rounded-lg object-cover" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4 flex items-center">
          {getCategoryIcon(product.category)}
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

