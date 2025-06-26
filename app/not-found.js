import React from 'react'
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 border border-yellow-400/40 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg">
        <div className="text-7xl mb-4 animate-bounce">🔍</div>
        <h1 className="text-4xl font-bold text-yellow-400 mb-2 text-center drop-shadow-lg">404 - Not Found</h1>
        <p className="text-gray-300 text-center mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/products">
          <span className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-8 rounded-lg shadow-lg transition cursor-pointer">
            Go to StoreApp Home
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
