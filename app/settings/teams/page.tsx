import Link from "next/link";

function Teams() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Back Button */}
      <Link href="/settings" className="text-gray-500 text-sm">
        ← Settings
      </Link>

      {/* Heading */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <h1 className="text-4xl font-bold text-black">Teams</h1>

          <p className="text-gray-500 mt-2">Manage your teams.</p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Team
        </button>
      </div>

      {/* Team List */}
      <div className="border border-gray-200 rounded-xl mt-8">
        {/* Team 1 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">Design Team</h2>

            <p className="text-sm text-gray-500 mt-1">3 members</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

        {/* Team 2 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">Development Team</h2>

            <p className="text-sm text-gray-500 mt-1">5 members</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>

        {/* Team 3 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-black">Marketing Team</h2>

            <p className="text-sm text-gray-500 mt-1">2 members</p>
          </div>

          <span className="text-gray-400 text-xl">{">"}</span>
        </div>
      </div>
    </div>
  );
}

export default Teams;
