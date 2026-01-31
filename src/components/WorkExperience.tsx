interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    title: "Web Development Student Assistant",
    company: "UTRGV",
    period: "Nov 2025 - Present",
    responsibilities: [
      "Engineered and maintained university web pages using Cascade CMS, applying HTML, CSS, and WCAG accessibility standards.",
      "Implement responsive layouts and optimize page performance for improved user experience.",
      "Collaborated with developers and designers to enhance site functionality and ensure code consistency.",
    ],
  },
];

export default function WorkExperience({
  experiences = defaultExperiences,
}: WorkExperienceProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
        </div>

        {/* Experiences List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-[#1F1F1F] border border-[#404040] rounded-lg p-6 md:p-8 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/10 cursor-pointer"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-orange-600 font-semibold mt-1">{exp.company}</p>
                </div>
                <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {exp.period}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mt-6">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex gap-3 leading-relaxed"
                  >
                    <span className="text-orange-600 font-bold shrink-0 mt-0.5">
                      •
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Accent */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-lg transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
