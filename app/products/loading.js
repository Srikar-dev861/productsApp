import React from 'react'

const skeletons = Array.from({ length: 8 })

const shimmerStyle = {
  background: 'linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s infinite',
}

export default function Loading() {
  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-yellow-400 tracking-wide">🎬 MoviesApp</span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled
            />
            <button
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-md cursor-not-allowed"
              disabled
            >
              Search
            </button>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto px-8 py-10">
          <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">All Movies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skeletons.map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div
                  className="w-full h-60 rounded-t-xl"
                  style={{ ...shimmerStyle, aspectRatio: "1 / 1" }}
                />
                <div className="p-4 flex-1 flex flex-col w-full items-center">
                  <div className="h-6 rounded w-3/4 mb-2" style={shimmerStyle} />
                  <div className="h-4 rounded w-full mb-1" style={shimmerStyle} />
                  <div className="h-4 rounded w-5/6" style={shimmerStyle} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
