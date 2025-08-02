export default function Home() {
  
  return (
    <>
    {/* Hero Section */}
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
        <p className="text-xl max-w-2xl mx-auto">
          We're dedicated to providing innovative solutions for our clients
        </p>
      </div>
    </div>
    {/* Main Content */}
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2010, YourCompany started as a small team with a big
              vision. We believed that technology could solve real-world problems
              in innovative ways.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown into a trusted partner for businesses
              across multiple industries, helping them transform their operations
              and achieve their goals.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve clients in over 20 countries with a team
              of dedicated professionals who are passionate about making a
              difference.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Our team working together"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* Our Mission */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <div className="bg-blue-50 rounded-lg p-8">
          <p className="text-xl text-gray-700 mb-4 font-medium">
            "To empower businesses through innovative technology solutions that
            drive growth, efficiency, and success."
          </p>
          <p className="text-gray-600">
            We achieve this by combining cutting-edge technology with deep
            industry expertise to deliver solutions that are tailored to each
            client's unique needs.
          </p>
        </div>
      </div>
      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-lightbulb text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly push boundaries to develop creative solutions that
              solve real problems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-handshake text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We build trust through transparency, honesty, and ethical business
              practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-users text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe the best results come from working together with clients
              and colleagues.
            </p>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Meet Our Leadership
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="CEO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-blue-600 mb-2">CEO &amp; Founder</p>
              <p className="text-gray-600 text-sm">
                Alex founded the company with a vision to revolutionize the
                industry through technology.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="CTO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Sarah Williams</h3>
              <p className="text-blue-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our engineering team with a focus on innovation and
                quality.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="CMO"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Chief Marketing Officer</p>
              <p className="text-gray-600 text-sm">
                Michael drives our brand strategy and customer engagement
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}
