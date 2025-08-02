import Link from "next/link"
import Script from "next/script"


export default function Header() {
    return <>
    {/* <Script src="test.js" strategy="lazyOnload">

    </Script> */}
        <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold"><Link href="/home">My Blog</Link></h1>
              <nav>
                <ul className="flex gap-4">
                  <li><Link href="/home">Home</Link></li>
                  <li><Link href="/add-blog">Add Blog</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </header>
        </>
}