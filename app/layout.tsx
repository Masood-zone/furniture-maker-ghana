import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghanaian Furniture Artisan",
  description: "Discover authentic Ghanaian furniture craftsmanship and shop unique handmade pieces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <nav className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/images/logo.jpg"
                        alt="God is Good Furnitures Logo"
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <span className="text-2xl font-bold text-gray-900">God is Good Furnitures</span>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Home
                    </Link>
                    <Link href="/shop" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Shop
                    </Link>
                    <Link href="/process" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Process
                    </Link>
                    <Link href="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      About
                    </Link>
                    <Link href="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Contact
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href="/cart" className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View cart</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="pt-16">
        {children}
          </main>
          <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/logo.jpg"
                      alt="God is Good Furnitures Logo"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <h3 className="text-lg font-semibold">About Us</h3>
                  </div>
                  <p className="text-gray-300">Bringing authentic Ghanaian craftsmanship to the world.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
                    <li><Link href="/process" className="text-gray-300 hover:text-white">Our Process</Link></li>
                    <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <p className="text-gray-300">Email: godisgood@gmail.com</p>
                  <p className="text-gray-300">Phone: +233 544 616094</p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8">
                <p className="text-center text-gray-300">&copy; 2024 God is Good Furnitures. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
