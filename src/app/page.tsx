import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, I'm Will McArthur
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dynamic Product Manager with 5+ years in self-funded SaaS, leading global teams to deliver 40+ releases. 
            Skilled in agile leadership, data-driven product strategy, and user-centric design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Projects
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="group relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise Client Onboarding</h3>
            <p className="mt-2 text-gray-600">
              Implemented new pricing structure and onboarded 12 new enterprise clients, 
              driving a 20% revenue boost with enhanced product capabilities.
            </p>
            <Link href="/projects" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
              Learn more →
            </Link>
          </div>
          <div className="group relative rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900">Product Migration & API Development</h3>
            <p className="mt-2 text-gray-600">
              Led major projects including public API, Chrome extension, and billing migration that 
              boosted trial conversion from 10% to 60%.
            </p>
            <Link href="/projects" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Product Strategy',
            'Agile/Scrum',
            'User Experience',
            'Data Analysis',
            'Team Leadership',
            'Customer Feedback',
            'Cross-Functional Collaboration',
            'Technical Implementation'
          ].map((skill) => (
            <div key={skill} className="rounded-lg border border-gray-200 p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
