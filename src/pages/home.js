import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css"
import Head from "next/head";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const fetchBlogs = await fetch("/api/blog");
    const allBlogs = await fetchBlogs.json();
    setBlogs(allBlogs);
  }
  useEffect(() => {
    getBlogs();
  }, [blogs])

  return (
          <main className="flex-grow bg-gray-50 py-8 px-4 w-1/2 mx-auto text-center">
            <Head>
              <title>Title Goes here</title>
              <meta name="description" content="content goes here"></meta>
              <link rel="icon" href="ak.png" type="image/png"></link>
            </Head>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
              <p className={`text-lg  ${styles.mytag}`}>
                Latest articles and insights from our team
              </p>
            </header>
            {/* Blog List */}
            <div className="space-y-8">
              {/* Blog Post 1 */}
              { blogs && blogs.map((value) => 
              // {
              
               (<article key={value.shortDescription+value.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {value.title}
                    </h2>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {value.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-user text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{value.name}</p>
                        <p className="text-sm text-gray-500">{value.email}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <i className="far fa-calendar-alt mr-1" /> May 15, 2023 <Link href={`blog/${value.slug}`} className="text-blue-600">Read More</Link>
                    </div>
                  </div>
                </div>
              </article>)
              
              // }
            )}
            </div>
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">2</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">3</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-200">
                  <i className="fas fa-chevron-right" />
                </button>
              </nav>
            </div>
          </main>
  );
}
