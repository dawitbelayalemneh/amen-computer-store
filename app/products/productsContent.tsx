'use client'

import { useSearchParams } from 'next/navigation'
import { products } from '../data/products'
import { Laptop, Monitor, Mouse } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Link from 'next/link'
import Image from 'next/image'

function ProductsPage() {
  const { addToCart } = useCart()
  const searchParams = useSearchParams()
  const category = searchParams?.get('category')
  
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products

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
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        {category ? (
          <>
            {getCategoryIcon(category)}
            {category.charAt(0).toUpperCase() + category.slice(1)}s
          </>
        ) : (
          'All Products'
        )}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/products/${product.id}`}>
              <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className="px-4 pb-4">
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
