import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Amen Computer</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=300&width=400"
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
        </div>
      </div>
    </div>
  )
}

