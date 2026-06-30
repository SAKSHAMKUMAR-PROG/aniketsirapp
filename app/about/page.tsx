function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="text-center">
        {/* Logo */}
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto">
          <span className="text-5xl text-gray-700">i</span>
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold text-black mt-8">My App</h1>

        {/* Description */}
        <p className="text-gray-500 mt-4">A simple and clean application</p>

        <p className="text-gray-500">to manage your work efficiently.</p>

        {/* Version */}
        <p className="text-gray-400 mt-12">Version 1.0.0</p>
      </div>
    </div>
  );
}

export default About;
