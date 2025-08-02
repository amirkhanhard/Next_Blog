import Image from "next/image";

export default function Home() {

  return (
    <>
    {/* Blog Content */}
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Understanding Modern Web Development
        </h1>
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <i className="fas fa-user text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="mr-4">
            <i className="far fa-calendar-alt mr-1" /> October 15, 2023
          </span>
          <span>
            <i className="far fa-clock mr-1" /> 5 min read
          </span>
        </div>
      </div>
      {/* Short Description */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-lg font-medium text-gray-800">
          This article explores the fundamental concepts of modern web
          development, including frontend frameworks, responsive design, and
          performance optimization techniques.
        </p>
      </div>
      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Web Development"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
      {/* Long Description */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Introduction to Modern Web Development
        </h2>
        <p className="mb-4 text-gray-700">
          Web development has evolved significantly over the past decade. What
          once was a simple combination of HTML, CSS, and JavaScript has now
          become a complex ecosystem of frameworks, tools, and methodologies.
        </p>
        <p className="mb-4 text-gray-700">
          The modern web developer needs to understand not just how to write code,
          but how to optimize performance, ensure accessibility, and create
          responsive designs that work across all devices.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
          Frontend Frameworks
        </h3>
        <p className="mb-4 text-gray-700">
          Frameworks like React, Vue, and Angular have revolutionized how we build
          user interfaces. They provide component-based architectures that make
          code more reusable and maintainable.
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-2">
            React - A JavaScript library for building user interfaces
          </li>
          <li className="mb-2">Vue - The progressive JavaScript framework</li>
          <li className="mb-2">
            Angular - A platform for building mobile and desktop web applications
          </li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
          Responsive Design
        </h3>
        <p className="mb-4 text-gray-700">
          With the variety of devices accessing the web today, responsive design
          is no longer optional. CSS frameworks like Tailwind CSS and Bootstrap
          make it easier to create designs that adapt to different screen sizes.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-mono text-sm text-gray-800">
            /* Example of responsive design with Tailwind */
            <br />
            &lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
            <br />
            &nbsp;&nbsp;&lt;!-- Content --&gt;
            <br />
            &lt;/div&gt;
          </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Conclusion</h2>
        <p className="mb-4 text-gray-700">
          Modern web development is an exciting field with constant innovation. By
          understanding these core concepts, developers can create better, faster,
          and more accessible web experiences.
        </p>
      </div>
      {/* Author Bio */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-start">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <i className="fas fa-user text-blue-600 text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              About the Author
            </h3>
            <p className="text-gray-600 mb-2">
              John Doe is a senior web developer with 10 years of experience
              building modern web applications.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-github" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Comments Section */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Comments (3)</h3>
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <i className="fas fa-user text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Sarah Johnson</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  Great article! Really helped me understand the current landscape
                  of web development.
                </p>
              </div>
            </div>
          </div>
          {/* Comment 2 */}
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <i className="fas fa-user text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">Mike Chen</span>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-700">
                  Would love to see a follow-up article diving deeper into
                  performance optimization techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Comment Form */}
        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-800 mb-4">
            Leave a comment
          </h4>
          <form>
            <div className="mb-4">
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Write your comment here..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  
  );
}
