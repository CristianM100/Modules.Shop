
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

{/*
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Start Coding?</h2>
        <Link
          href="/products"
          className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          Browse Courses
        </Link>
      </div>
  */}
    </div>
  );
};






/*
const FeaturesPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Platform Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
          <p className="text-gray-600">
            Engage with hands-on exercises, quizzes, and real-world projects to reinforce your learning and build practical skills.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
          <p className="text-gray-600">
            Learn from industry professionals with years of experience in their respective fields.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
          <p className="text-gray-600">
            Study at your own pace with lifetime access to course materials and mobile-friendly content.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Community Support</h3>
          <p className="text-gray-600">
            Connect with fellow learners, participate in discussions, and get help when you need it.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Certification</h3>
          <p className="text-gray-600">
            Earn recognized certificates upon course completion to showcase your achievements.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
          <p className="text-gray-600">
            Access continuously updated content to stay current with the latest industry trends and technologies.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Start Learning?</h2>
        <Link
          href="/products" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturesPage;
*/