export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Welcome to our platform! We are dedicated to connecting skilled professionals with meaningful opportunities in the gig economy.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To empower professionals by providing a seamless platform that enables them to find flexible work opportunities while helping businesses
              access top talent on demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">For Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find flexible opportunities that match your skills and schedule. Take control of your career with our platform.
              </p>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access a pool of talented professionals ready to contribute to your projects. Scale your workforce efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
