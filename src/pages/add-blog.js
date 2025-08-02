import { useState } from "react";


export default function AddBlog() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");

    const [response, setResponse] = useState("");
    const [errors, setErrors] = useState([]);

    const isValid = (key, value) => {
        if (value == undefined || value.trim().length == 0) {
            setErrors((prev) => [...prev,`${key.toUpperCase()} is empty\n`])
        }
    }
    const handleSubmit = async (e) => {
        setErrors([]);
        e.preventDefault();
        try {
            const blogData = { name,email,title,shortDescription,description };
            isValid("name", name);
            isValid("email", email);
            isValid("title", title);
            isValid("shortDescription", shortDescription);
            isValid("description", description);

            if (errors.length > 0 || blogData.name.length == 0) {
                throw "error occurred";
                return;
            }
            
            console.log(blogData);
            let result = await fetch("http://localhost:3000/api/blog/", {
                method: "POST",
                body: JSON.stringify(blogData)
            })
            
            if (result.ok) {
                setName("");
                setEmail("");
                setTitle("");
                setShortDescription("");
                setDescription("");
                setResponse("The blog data has been saved")
            } else {
                setResponse("Something went wrong while adding blog.")
            }

        } catch(err) {
            console.log(err);
        }

    }
    return (
      <div>
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Blog</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are ready to publish your blogs
                </p>
            </div>
            <div className="flex flex-col ">
                <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Lets create a new blog
                </h2>
                <center className="text-2xl font-semibold text-gray-800 mb-6 text-red-500">
                    {
                        errors && errors.map((val)=> {
                            return <div key={val}>{val}</div>;
                        })
                    }
                </center>
                <center className="text-2xl font-semibold text-gray-800 mb-6 text-red-500">
                { response }
                </center>
                <form onSubmit={handleSubmit} method="post">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                        Author Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                        required=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's this about?"
                        required=""
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Short Description
                    </label>
                    <input
                        type="text"
                        id="short-description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Short description goes here"
                        required=""
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                    />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type your message here..."
                        required=""
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                    >
                    Send Message
                    </button>
                </form>
                </div>
            </div>
        </div>
    </div>
    );
  }
  