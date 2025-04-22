'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Mock cart data - in a real app, this would come from a cart context or state management
const initialCartItems = [
  {
    id: 1,
    name: 'Traditional Ghanaian Chair',
    price: 299.99,
    image: '/furniture-maker-ghana/public/images/traditional chair.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    price: 399.99,
    image: '/furniture-maker-ghana/public/images/coffee table.jpg',
    quantity: 1,
  },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const shipping = 50 // Mock shipping cost
  const total = subtotal + shipping

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg"
                  >
                    <div className="relative w-full sm:w-32 h-32">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-amber-600 font-bold mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition mt-6 inline-block text-center"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-2">Shipping Information:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Free shipping on orders over $1000</li>
                    <li>International shipping available</li>
                    <li>Estimated delivery: 2-4 weeks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 