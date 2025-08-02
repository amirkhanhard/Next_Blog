export default function Home() {
  
  return (
    <div>
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Have questions or feedback? We'd love to hear from you. Fill out the
        form below or reach out through our other contact methods.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Send us a message
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                required=""
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
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required=""
              defaultValue={""}
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
      <div className="lg:w-1/3">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Our Location</h3>
                <p className="text-gray-600">
                  123 Business Avenue
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <i className="fas fa-phone-alt text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone Number</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri, 9am-5pm PST
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <i className="fas fa-envelope text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email Address</h3>
                <p className="text-gray-600">
                  info@yourbrand.com
                  <br />
                  support@yourbrand.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="max-w-6xl mx-auto px-4 mb-12">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538962143897!2d-122.4199064846824!3d37.77492997975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height={400}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="w-full h-96"
      ></iframe>
    </div>
  </div>
</div>


  );
}
