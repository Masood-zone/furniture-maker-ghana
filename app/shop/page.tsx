"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

// const products = [
//   {
//     id: 1,
//     name: 'Traditional Chair',
//     price: '$120',
//     image: '/images/traditional chair.jpg',
//     description: 'Handcrafted traditional Ghanaian chair with intricate carvings'
//   },
//   {
//     id: 2,
//     name: 'Dining Set',
//     price: '$550',
//     image: '/images/dinning set.jpg',
//     description: 'Complete dining set with traditional Ghanaian design'
//   },
//   {
//     id: 3,
//     name: 'Coffee Table',
//     price: '$280',
//     image: '/images/coffee table.jpg',
//     description: 'Elegant coffee table with traditional motifs'
//   },
//   {
//     id: 4,
//     name: 'D-Set',
//     price: '$420',
//     image: '/images/d set.jpg',
//     description: 'Modern D-shaped furniture set with traditional elements'
//   },
//   {
//     id: 5,
//     name: 'T-Chair',
//     price: '$150',
//     image: '/images/t chair.jpg',
//     description: 'Contemporary chair with traditional Ghanaian craftsmanship'
//   },
//   {
//     id: 6,
//     name: 'Sofa Set',
//     price: '$680',
//     image: '/images/sofa.jpg',
//     description: 'Luxurious sofa set with traditional Ghanaian patterns'
//   }
// ]

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "chairs", name: "Chairs" },
    { id: "tables", name: "Tables" },
    { id: "dining-sets", name: "Dining Sets" },
    { id: "cabinets", name: "Cabinets" },
    { id: "custom", name: "Custom Orders" },
  ];

  const sortOptions = [
    { id: "featured", name: "Featured" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "newest", name: "Newest First" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Collection</h1>

        {/* Search and Sort */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-gray-600 mb-8 text-center">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Filter Section */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("chairs")}
            className={`px-4 py-2 rounded-full ${
              filter === "chairs"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Chairs
          </button>
          <button
            onClick={() => setFilter("tables")}
            className={`px-4 py-2 rounded-full ${
              filter === "tables"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Tables
          </button>
          <button
            onClick={() => setFilter("sets")}
            className={`px-4 py-2 rounded-full ${
              filter === "sets"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sets
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-amber-600 font-bold mb-4">{product.price}</p>
                <Link
                  href={`/shop/${product.id}`}
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Custom Order Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Looking for Something Special?
          </h2>
          <p className="text-gray-600 mb-6">
            We accept custom orders for unique pieces tailored to your specific
            needs. Our artisans can work with you to create the perfect piece
            for your space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Request a Custom Order
          </Link>
        </div>
      </div>
    </div>
  );
}
