export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
          Get in Touch
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong className="text-gray-900">Email:</strong><br />
                your.email@example.com
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">LinkedIn:</strong><br />
                linkedin.com/in/yourusername
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Location:</strong><br />
                City, Country
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-blue-600">
                  LinkedIn
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
