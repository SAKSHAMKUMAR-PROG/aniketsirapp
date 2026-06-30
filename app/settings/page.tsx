import Link from "next/link";

function Settings() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black">Settings</h1>

      <p className="text-black-500 mt-2">Manage your apps setting.</p>

      {/* Options */}
      <div className="mt-8 border border-black-200 rounded-xl">
        {/* Environment */}
        <Link
          href="/settings/env"
          className="flex justify-between items-center p-6 border-b border-black-200 hover:bg-gray-50"
        >
          <div>
            <h2 className="font-semibold text-black">Environments</h2>

            <p className="text-sm text-black-500 mt-1">
              Manage your environments.
            </p>
          </div>

          <span className="text-xl text-black-400">{">"}</span>
        </Link>

        {/* Teams */}
        <Link
          href="/settings/teams"
          className="flex justify-between items-center p-6 border-b border-black-200 hover:bg-gray-50"
        >
          <div>
            <h2 className="font-semibold text-black">Teams</h2>

            <p className="text-sm text-black-500 mt-1">Manage your teams.</p>
          </div>

          <span className="text-xl text-black-400">{">"}</span>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
