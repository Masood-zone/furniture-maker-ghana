'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'

export default function OrderSuccess() {
  const { clearCart } = useCart()
  const router = useRouter()

  useEffect(() => {
    // Clear the cart when the success page loads
    clearCart()
  }, [clearCart])

  const handleContinueShopping = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/shop')
  }

  const handleContactUs = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/contact')
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We will process it and contact you shortly with delivery details.
        </p>
        <div className="space-y-4">
          <button
            onClick={handleContinueShopping}
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Continue Shopping
          </button>
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <button
              onClick={handleContactUs}
              className="text-amber-600 hover:text-amber-700"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </div>
  )
} 