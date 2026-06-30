export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-black">Welcome Back!</h1>

      <p className="text-gray-500 mt-2">Here's what's happening today.</p>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="border rounded-xl p-6">
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-gray-500 mt-2">Blogs</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-3xl font-bold">2</h2>
          <p className="text-gray-500 mt-2">Teams</p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-3xl font-bold">5</h2>
          <p className="text-gray-500 mt-2">Environments</p>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-black">Recent Activity</h2>

        <div className="border rounded-xl p-6 mt-4 bg-white">
          <p className="text-gray-500">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
