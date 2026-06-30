import Link from "next/link";

function Environment() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Back Button */}
      <Link href="/settings" className="text-gray-500 text-sm">
        ← Settings
      </Link>

      {/* Heading */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <h1 className="text-4xl font-bold text-black">Environments</h1>

          <p className="text-gray-500 mt-2">Manage your environments.</p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Environment
        </button>
      </div>

      {/* Environment List */}
      <div className="border border-gray-200 rounded-xl mt-8">
        {/* Development */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="font-semibold text-black">Development</h2>

          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Active
            </span>

            <span className="text-gray-400">{">"}</span>
          </div>
        </div>

        {/* Staging */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="font-semibold text-black">Staging</h2>

          <div className="flex items-center gap-4">
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
              Inactive
            </span>

            <span className="text-gray-400">{">"}</span>
          </div>
        </div>

        {/* Production */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="font-semibold text-black">Production</h2>

          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Active
            </span>

            <span className="text-gray-400">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Environment;
