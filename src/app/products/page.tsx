import Image from 'next/image';

export default function Products() {
  const products = [
    {
      title: "Wisdom AI for Searchie",
      description: "Wisdom AI is an innovative AI-powered solution that transforms how businesses handle their content. It enables intelligent content analysis, search, and insights generation.",
      link: "https://www.producthunt.com/products/searchie#wisdomai-by-searchie",
      image: "/wisdomai.png", // You'll need to add this image to your public folder
      features: [
        "AI-powered content analysis",
        "Intelligent search capabilities",
        "Automated insights generation"
      ]
    },
    {
      title: "Searchie Copilot",
      description: "Searchie Copilot is an AI assistant that helps users navigate and interact with their content more effectively, providing intelligent suggestions and automated workflows.",
      link: "https://www.producthunt.com/products/searchie#searchie-copilot",
      image: "/copilot.png", // You'll need to add this image to your public folder
      features: [
        "AI-assisted content navigation",
        "Automated workflow suggestions",
        "Intelligent content interaction"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Products
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          I've had the privilege of working on innovative AI-powered products that transform how businesses handle their content and data.
          Check out my work on <a href="https://www.producthunt.com/@wkm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">Product Hunt</a>.
        </p>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.title}
                  </h2>
                  
                  <p className="text-gray-600">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a 
                      href={product.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Product Hunt →
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[200px] bg-gray-100 rounded-lg">
                  {/* Add actual product images here */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Product Screenshot
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in discussing new products and innovations in the AI and SaaS space.
            Feel free to connect with me on professional platforms:
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.producthunt.com/@wkm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500"
            >
              Product Hunt Profile
            </a>
            <a 
              href="https://www.linkedin.com/in/will-mcarthur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
