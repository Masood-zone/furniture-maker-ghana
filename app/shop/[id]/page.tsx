'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
  inStock: boolean;
}

export default function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError('Failed to load product. Please try again later.')
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  const handleAddToCart = async () => {
    if (!product) return

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity,
          price: product.price,
          total: product.price * quantity,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to add to cart')
      }

      // Redirect to cart page
      window.location.href = '/cart'
    } catch (err) {
      console.error('Error adding to cart:', err)
      alert('Failed to add item to cart. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
          <Link 
            href="/shop"
            className="text-amber-600 hover:text-amber-700"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/shop"
          className="text-amber-600 hover:text-amber-700 mb-8 inline-block"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-amber-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Materials</h2>
              <ul className="list-disc list-inside text-gray-600">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Dimensions</h2>
              <p className="text-gray-600">{product.dimensions}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Quantity</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 