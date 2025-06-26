export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <nav className="flex items-center justify-between px-8 py-5 bg-gray-950 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-yellow-400 tracking-wide animate-pulse">🛒 StoreApp</span>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-yellow-400/20 max-w-2xl w-full flex flex-col md:flex-row overflow-hidden animate-pulse">
          <div className="flex-1 flex items-center justify-center bg-gray-900 p-6">
            <div className="rounded-xl w-72 h-72 bg-gray-700" />
          </div>
          <div className="flex-1 flex flex-col justify-center p-8 space-y-4">
            <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
            <div className="flex gap-4 mt-4">
              <div className="h-8 w-24 bg-yellow-400/60 rounded-lg" />
              <div className="h-8 w-20 bg-gray-700 rounded-lg" />
            </div>
            <div className="h-10 w-40 bg-yellow-400/60 rounded-lg mx-auto mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}