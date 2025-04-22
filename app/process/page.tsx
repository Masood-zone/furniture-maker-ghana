"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock video data - in a real app, this would come from an API or database
const videos = [
  {
    id: 1,
    title: "Wood Selection & Preparation",
    description:
      "Learn how we select and prepare the finest local woods for our furniture",
    thumbnail: "/process1.jpg",
    duration: "5:23",
  },
  {
    id: 2,
    title: "Traditional Carving Techniques",
    description:
      "Watch our master craftsmen demonstrate traditional Ghanaian carving methods",
    thumbnail: "/process2.jpg",
    duration: "7:45",
  },
  {
    id: 3,
    title: "Finishing & Detailing",
    description:
      "See how we apply traditional finishes and add final details to each piece",
    thumbnail: "/process3.jpg",
    duration: "4:12",
  },
];

export default function Process() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Craftsmanship Process
        </h1>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              src="/videos/Furniture Making on the roadside Ghana-style.mp4"
              controls
              className="w-full h-full"
              poster="/images/process.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={() => {
                  const video = document.querySelector("video");
                  if (video) {
                    video.play();
                  }
                }}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-gray-600">
            Watch our skilled artisans create beautiful furniture using
            traditional Ghanaian techniques
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            Each piece of furniture we create is a testament to Ghana&lsquo;s
            rich woodworking heritage. Our process combines traditional
            techniques with modern craftsmanship to create unique, high-quality
            pieces that tell a story.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            Shop Our Collection
          </Link>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>

        {/* Cultural Context */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cultural Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Preserving Tradition, Creating Beauty
              </h3>
              <p className="text-gray-600 mb-4">
                Our furniture making tradition dates back centuries in Ghana.
                Each piece we create carries the legacy of our ancestors and the
                stories of our culture. The patterns and designs we use are
                inspired by Ghana&apos;s rich history and natural beauty.
              </p>
              <p className="text-gray-600">
                We believe in preserving these traditions while adapting them to
                modern living spaces. This fusion of old and new creates
                furniture that is both timeless and contemporary.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/our story.webp"
                alt="Our story - Preserving Tradition, Creating Beauty"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Workshop Tour */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Visit Our Workshop
          </h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/visit us.jpeg"
              alt="Visit our workshop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
