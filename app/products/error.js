"use client";
import React from 'react'

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 border border-red-400/40 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg">
        <div className="text-6xl mb-4 animate-bounce">🚫</div>
        <h1 className="text-3xl font-bold text-red-400 mb-2 text-center drop-shadow-lg">Oops! Something went wrong.</h1>
        <p className="text-gray-300 text-center mb-6">
          {error?.message || "An unexpected error occurred while loading products."}
        </p>
        <button
          onClick={reset}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-8 rounded-lg shadow-lg transition"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Error
