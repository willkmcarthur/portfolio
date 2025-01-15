export default function Projects() {
  const projects = [
    {
      title: "Revenue Growth Initiative",
      description: "Led a comprehensive revenue growth initiative that transformed our pricing strategy and enterprise client acquisition process.",
      tags: ["Strategy", "Enterprise Sales", "Revenue Growth"],
      achievements: [
        "Implemented new pricing structure resulting in 20% revenue increase",
        "Developed and executed enterprise client acquisition strategy",
        "Streamlined onboarding process for enterprise clients",
        "Enhanced product capabilities based on enterprise feedback"
      ]
    },
    {
      title: "Technical Infrastructure Modernization",
      description: "Spearheaded a major technical infrastructure upgrade to improve system capabilities and user experience.",
      tags: ["Technical Leadership", "System Architecture", "Integration"],
      achievements: [
        "Developed and launched public API for enhanced integrations",
        "Implemented new Chrome extension for improved user workflow",
        "Successfully migrated billing system with zero downtime",
        "Increased trial conversion rate from 10% to 60%"
      ]
    },
    {
      title: "Customer Success Program",
      description: "Designed and implemented a comprehensive customer success program to improve retention and satisfaction.",
      tags: ["Customer Success", "Team Leadership", "Training"],
      achievements: [
        "Achieved 80% retention rate through improved onboarding",
        "Mentored and trained 7 new customer success specialists",
        "Hosted educational webinars reaching 500+ attendees",
        "Streamlined real-time feedback loops for issue resolution"
      ]
    },
    {
      title: "Cross-Functional Team Leadership",
      description: "Led multiple cross-functional teams to deliver complex projects and improve collaboration across departments.",
      tags: ["Leadership", "Project Management", "Collaboration"],
      achievements: [
        "Orchestrated sprints under Scrum methodology",
        "Aligned cross-functional teams (engineering, design, QA)",
        "Delivered 40+ product releases with high NPS scores",
        "Implemented data-driven decision-making processes"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Projects & Initiatives
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Key projects and initiatives I've led to drive business growth, improve user experience, and enhance technical capabilities.
        </p>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Key Achievements:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
