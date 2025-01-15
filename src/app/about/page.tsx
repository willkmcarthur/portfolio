export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          About Me
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Dynamic Product Manager with 5+ years in self-funded SaaS, leading global teams to deliver 40+ releases. 
            Outside of work, I'm a dedicated rugby coach, referee, and board member with 16+ years contributing to 
            the sport's growth across multiple continents.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Product Manager at Membership.io</h3>
              <p className="text-gray-600">Brantford, ON | 2021 - Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Drove a 20% annual revenue boost through strategic pricing and onboarding initiatives</li>
                <li>Led major projects including API development and billing migration</li>
                <li>Delivered 40+ product releases with high NPS scores</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Customer Experience Lead</h3>
              <p className="text-gray-600">Membership.io | 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Led remote support team and mentored 7 new specialists</li>
                <li>Hosted webinars for 500+ attendees</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Sales Engineer</h3>
              <p className="text-gray-600">Membership.io | 2019 - 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Contributed to multiple 7-figure launches</li>
                <li>Conducted 600+ onboarding calls with 80% retention rate</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Applied Science, Computer Engineering</h3>
              <p className="text-gray-600">Queen's University, Kingston, Ontario | 2015 - 2019</p>
              <p className="text-gray-600">Dean's Scholar and Varsity Men's Rugby player</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Certificate in Business</h3>
              <p className="text-gray-600">Queen's University, Kingston, Ontario | 2019 - 2020</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'C++', 'C#', 'PHP', 'ASP.NET'].map((skill) => (
              <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
