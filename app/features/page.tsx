
export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Programming Course Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Hands-on Coding Projects</h3>
          <p className="text-gray-600">
            Build real-world applications and projects to practice your coding skills in a hands-on way.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Expert Programmers</h3>
          <p className="text-gray-600">
            Learn from experienced developers and industry experts who teach the latest coding languages and techniques.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Learn at Your Own Pace</h3>
          <p className="text-gray-600">
            Enjoy flexible learning that fits your schedule with lifetime access to course materials and coding exercises.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Developer Community</h3>
          <p className="text-gray-600">
            Get support, collaborate, and network with other aspiring developers in our vibrant community.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Certifications for Developers</h3>
          <p className="text-gray-600">
            Receive certificates upon completion of each course, showcasing your programming skills to potential employers.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Up-to-Date Course Content</h3>
          <p className="text-gray-600">
            Stay on top of industry trends with courses that are frequently updated to include the latest in programming languages.
          </p>
        </div>
      </div>
    </div>
  );
};




