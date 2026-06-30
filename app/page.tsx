export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-black">HELLO SIR/MADAM</h1>

      <p className="text-black-500 mt-5">HOW WAS YOUR DAY?</p>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="border rounded-2xl p-6">
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-black-500 mt-2">Blogs</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-black-500 mt-2">Teams</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-black-500 mt-2">Environments</p>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-black">Recent Activity</h2>

        <div className="border rounded-xl p-6 mt-4 bg-white">
          <p className="text-black-500">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
