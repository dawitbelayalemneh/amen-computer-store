'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { products } from './data/products'
import { sendEmail } from './actions/sendEmail'

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)
    setFormStatus(result)
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Amen Computer</h1>
          <p className="text-xl mb-8">Your one-stop shop for computers and accessories</p>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="About Amen Computer"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              At Amen Computer, we're passionate about technology and committed to providing our customers with the best computing solutions. Founded in 2023, we've quickly become a trusted name in the industry.
            </p>
            <p className="text-lg mb-4">
              Our team of experts carefully selects each product in our inventory, ensuring that we offer only the highest quality laptops, desktops, and accessories. We believe in the power of technology to transform lives and businesses, and we're here to help you find the perfect tech solutions for your needs.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Showcase */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary/10 hover:bg-primary/20">
            <CardContent className="p-6 flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Laptops"
                width={200}
                height={200}
                className="mb-4 rounded-md object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Laptops</h3>
              <p className="text-center mb-4">Powerful and portable computing solutions</p>
              <Button asChild variant="outline">
                <Link href="/products?category=laptop">View Laptops</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 hover:bg-primary/20">
            <CardContent className="p-6 flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80"
                alt="Desktops"
                width={200}
                height={200}
                className="mb-4 rounded-md object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Desktops</h3>
              <p className="text-center mb-4">High-performance computers for work and play</p>
              <Button asChild variant="outline">
                <Link href="/products?category=desktop">View Desktops</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 hover:bg-primary/20">
            <CardContent className="p-6 flex flex-col items-center">
              <Image
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
                alt="Accessories"
                width={200}
                height={200}
                className="mb-4 rounded-md object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Accessories</h3>
              <p className="text-center mb-4">Enhance your setup with our range of accessories</p>
              <Button asChild variant="outline">
                <Link href="/products?category=accessory">View Accessories</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <Textarea id="message" name="message" rows={4} required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        {formStatus && (
          <div className={`mt-4 p-4 rounded ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {formStatus.message}
          </div>
        )}
      </section>
    </div>
  )
}

