export default function OurMission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">
              SoftCamp is dedicated to delivering high-quality education in Java development and software testing. Our bootcamps combine intensive practical training with industry best practices, ensuring our graduates are ready for real-world challenges. We focus on hands-on experience, modern development tools, and comprehensive testing methodologies.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">200+</p>
                  <p className="text-sm text-gray-600">Successful Graduates</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">50+</p>
                  <p className="text-sm text-gray-600">Real Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">90%</p>
                  <p className="text-sm text-gray-600">Job Placement Rate</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">12+</p>
                  <p className="text-sm text-gray-600">Bootcamp Sessions</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">100% </p>
                    <p className="text-sm text-gray-600">Hands-on Training</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">85%</p>
                  <p className="text-sm text-gray-600">Employment Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
