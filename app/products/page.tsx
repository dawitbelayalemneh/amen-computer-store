'use client' // Ensure this is present at the top

import { Suspense } from 'react'
import ProductsContent from './productsContent'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
