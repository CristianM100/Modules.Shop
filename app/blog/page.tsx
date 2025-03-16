const BlogPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-1.jpg" 
            alt="Blog post 1" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Getting Started with Online Learning</h3>
            <p className="text-gray-600 mb-4">
              Tips and strategies to make the most of your online learning journey and achieve your goals.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">June 15, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-2.jpg" 
            alt="Blog post 2" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Top Programming Languages in 2023</h3>
            <p className="text-gray-600 mb-4">
              Explore the most in-demand programming languages and their career prospects.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">June 10, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-3.jpg" 
            alt="Blog post 3" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Building Your Tech Career</h3>
            <p className="text-gray-600 mb-4">
              Essential skills and certifications to advance your career in technology.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">June 5, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-4.jpg" 
            alt="Blog post 4" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">The Future of AI in Education</h3>
            <p className="text-gray-600 mb-4">
              How artificial intelligence is transforming the learning experience.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">June 1, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-5.jpg" 
            alt="Blog post 5" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Remote Learning Best Practices</h3>
            <p className="text-gray-600 mb-4">
              Maximize your productivity and success while learning from home.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">May 28, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/blog-6.jpg" 
            alt="Blog post 6" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Industry Insights: Tech Trends</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest developments in the tech industry.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">May 25, 2023</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
