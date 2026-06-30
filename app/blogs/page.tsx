function Blogs() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-black">Blogs</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + New Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="border border-gray-200 rounded-xl">
        {/* Blog 1 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">
              Getting started with My App
            </h2>

            <p className="text-gray-500 text-sm mt-1">May 28, 2025</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

        {/* Blog 2 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">Building a clean UI</h2>

            <p className="text-gray-500 text-sm mt-1">May 20, 2025</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

        {/* Blog 3 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">
              Tips for better productivity
            </h2>

            <p className="text-gray-500 text-sm mt-1">May 15, 2025</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

        {/* Blog 4 */}
        <div className="flex justify-between items-center p-6">
          <div>
            <h2 className="font-semibold text-black">
              Understanding environments
            </h2>

            <p className="text-gray-500 text-sm mt-1">May 10, 2025</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
