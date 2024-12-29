import Link from 'next/link'
import { Laptop, Monitor, Mouse } from 'lucide-react'
import { Card, CardContent } from "../components/ui/card"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <Laptop size={48} className="mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Laptops</h2>
            <p className="text-center mb-4">Powerful and portable computing solutions</p>
            <Link 
              href="/products?category=laptop" 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              View Laptops
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <Monitor size={48} className="mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Desktops</h2>
            <p className="text-center mb-4">High-performance computers for work and play</p>
            <Link 
              href="/products?category=desktop" 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              View Desktops
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <Mouse size={48} className="mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Accessories</h2>
            <p className="text-center mb-4">Enhance your setup with our range of accessories</p>
            <Link 
              href="/products?category=accessory" 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              View Accessories
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

