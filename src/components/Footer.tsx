export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            {new Date().getFullYear()} Will McArthur. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/will-mcarthur/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-700"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.producthunt.com/@wkm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Product Hunt
            </a>
            <a 
              href="mailto:willkmcarthur@gmail.com" 
              className="text-gray-500 hover:text-gray-700"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
