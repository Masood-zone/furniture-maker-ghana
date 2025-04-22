'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/images/furniture.webp"
          alt="Ghanaian furniture craftsmanship"
          fill
          className="object-cover w-full h-full"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">God is Good Furnitures</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Handcrafted Ghanaian furniture that tells a story of tradition, quality, and beauty
            </p>
            <Link 
              href="/shop"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/dinning set.jpg"
                  alt="Dining Set"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dining Set</h3>
                <p className="text-amber-600 mb-4">$550</p>
                <Link 
                  href="/shop"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/sofa.jpg"
                  alt="Sofa Set"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sofa Set</h3>
                <p className="text-amber-600 mb-4">$680</p>
                <Link 
                  href="/shop"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
            <Image
                  src="/images/traditional chair.jpg"
                  alt="Traditional Chair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Traditional Chair</h3>
                <p className="text-amber-600 mb-4">GHC 1,200</p>
                <Link 
                  href="/shop"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/avatars/collins.jpg"
                    alt="Collins Gyan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Collins Gyan</h4>
                  <p className="text-gray-600 text-sm">Accra, Ghana</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The quality of craftsmanship is exceptional. My custom dining table is the centerpiece of our home.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
                    src="/images/avatars/ama.jpg"
                    alt="Ama Serwaa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Ama Serwaa</h4>
                  <p className="text-gray-600 text-sm">Kumasi, Ghana</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;I love how they combine traditional Ghanaian designs with modern functionality. Truly unique pieces!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
                    src="/images/avatars/kwame.jpg"
                    alt="Kwame Boateng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Kwame Boateng</h4>
                  <p className="text-gray-600 text-sm">Takoradi, Ghana</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The attention to detail is remarkable. Every piece tells a story of Ghana&apos;s rich woodworking heritage.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest collections, special offers, and woodworking insights.
          </p>
          {isSubscribed ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg">
              Thank you for subscribing! We'll keep you updated with our latest news.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Process Showcase */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Craftsmanship Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
                src="/images/process.jpg"
                alt="Furniture making process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Traditional Techniques</h3>
              <p className="text-blue-600 mb-6">
                Each piece of furniture we create is a testament to Ghana&apos;s rich woodworking heritage. 
                Our process combines traditional techniques with modern craftsmanship to create unique, 
                high-quality pieces that tell a story.
              </p>
              <Link 
                href="/process"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
