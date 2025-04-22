import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>

        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/images/our story.webp"
            alt="Our Story - Preserving Tradition, Creating Beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preserving Tradition, Creating Beauty
              </h2>
              <p className="text-lg">
                For generations, our family has been crafting furniture that
                tells the story of Ghana&apos;s rich cultural heritage.
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-600 mb-4">
              Our journey began in a small workshop in Accra, where our founder
              learned the art of furniture making from his father. What started
              as a family tradition has grown into a celebration of Ghanaian
              craftsmanship on the global stage.
            </p>
            <p className="text-gray-600">
              Each piece we create carries the legacy of our ancestors and the
              stories of our culture. The patterns and designs we use are
              inspired by Ghana&lsquo;s rich history, natural beauty, and the
              vibrant spirit of our people.
            </p>
          </div>
          <div className="relative h-80">
            <Image
              src="/heritage.jpg"
              alt="Traditional workshop"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Craftsmanship Section */}
        <div className="bg-gray-100 p-12 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Craftsmanship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Traditional Techniques
              </h3>
              <p className="text-gray-600">
                We use time-honored methods passed down through generations,
                ensuring each piece carries authentic Ghanaian craftsmanship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
              <p className="text-gray-600">
                While honoring tradition, we incorporate contemporary design
                elements to create pieces that fit modern living spaces.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We source the finest local woods and materials, ensuring each
                piece is built to last for generations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Meet Our Artisans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/artisan1.jpg"
                  alt="Master Craftsman"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kwame Mensah</h3>
              <p className="text-gray-600">Master Craftsman</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/artisan2.jpg"
                  alt="Design Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ama Osei</h3>
              <p className="text-gray-600">Design Specialist</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/artisan3.jpg"
                  alt="Wood Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Yaw Boateng</h3>
              <p className="text-gray-600">Wood Specialist</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/process"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition"
          >
            See Our Process
          </Link>
        </div>
      </div>
    </div>
  );
}
