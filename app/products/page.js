import Login from "@/lib/components/Login";
import Logout from "@/lib/components/Logout";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL)
  const data = await res.json()
  const formattedData = data?.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
  }))

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 shadow-lg">
        <div className="flex items-center gap-2">
          <Link href="/products">
            <span className="text-2xl font-extrabold text-yellow-400 tracking-wide cursor-pointer">🛒 StoreApp</span>
          </Link>
        </div>
      </nav>
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {formattedData?.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ aspectRatio: "1 / 1" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-60"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div className="p-4 flex-1 flex flex-col w-full">
                  <h2 className="text-lg font-bold text-yellow-400 mb-2 text-center">{product.title}</h2>
                  <p className="text-gray-300 text-sm text-center line-clamp-4">{product.description}</p>
                </div>
                {/* Logout button at the bottom, full width, styled */}
            
              </div>
            </Link>

          ))}
        </div>
        <div>
          <Logout />
        </div>

      </div>
    </div>
  )
}