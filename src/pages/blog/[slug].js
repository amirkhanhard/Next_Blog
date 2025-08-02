import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log("1"+slug);

  const getBlog = async (slug) => {
    let getBlog = await fetch("http://localhost:3000/api/blog?slug="+slug);
    let blogData = await getBlog.json();
    setBlog(blogData[0]);
    setIsLoading(false);
  };

  useEffect(()=> {
    console.log("2"+slug);
    getBlog(slug);

  }, [slug]);

  if (isLoading) return <>
    <div className="mt-4 mb-4">
      <h2>Loading ...</h2>
    </div>
  </>
  else if (!blog || Object.entries(blog).length == 0) return <>
    <div className="mt-4 mb-4">
      <h2>Blog not found</h2>
    </div>
  </>
  else if (!blog || Object.entries(blog).length == 0) return <>
    <div className="mt-4 mb-4">
      <h2>Blog not found</h2>
    </div>
  </>
  return (
    <>
    {/* Blog Content */}
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {blog.title}
        </h1>
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <i className="fas fa-user text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-800">{blog.name}</p>
            <p className="text-sm text-gray-500">{blog.email}</p>
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
          {blog.shortDescription}
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
        
        <div dangerouslySetInnerHTML={{__html: blog.description}}></div>
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
  
  );//hello-world
}
