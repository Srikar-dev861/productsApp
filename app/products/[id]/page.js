import React from 'react'
import Link from "next/link";

export const dynamic = 'force-dynamic';

const  ProductItem = async({params}) => {
    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`)
    const product = await res.json()
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 shadow-lg">
        <div className="flex items-center gap-2">
          <Link href="/products">
            <span className="text-2xl font-extrabold text-yellow-400 tracking-wide cursor-pointer">🛒 StoreApp</span>
          </Link>
        </div>
      </nav>

      {/* Product Details */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-yellow-400/20 max-w-2xl w-full flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-gray-900 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl object-contain w-72 h-72 shadow-lg border-4 border-yellow-400/10 bg-white"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4 text-center md:text-left drop-shadow-lg">{product.title}</h1>
            <p className="text-gray-300 text-base mb-4 text-center md:text-left">{product.description}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
              <span className="inline-block bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-lg text-lg shadow">
                ${product.price}
              </span>
              <span className="inline-block bg-gray-700 text-yellow-300 px-4 py-2 rounded-lg text-sm uppercase tracking-wider shadow">
                {product.category}
              </span>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-8 rounded-lg shadow-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default  ProductItem
