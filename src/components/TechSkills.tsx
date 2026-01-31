interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

const skillGroups: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "SQL", icon: "🗄️" },
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "TailwindCSS", icon: "🌈" },
      { name: "Streamlit", icon: "🎈" },
      { name: "Vite", icon: "⚡" },
      { name: "Astro", icon: "🚀" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Supabase", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "VSCode", icon: "💻" },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "REST APIs", icon: "🔌" },
      { name: "OOP", icon: "🧱" },
      { name: "Agile", icon: "🔄" },
    ],
  },
];

export default function TechSkills() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Tech Skills</h2>
          <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {group.items.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-[#1F1F1F] border border-[#404040] rounded-md p-3 hover:border-orange-600 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}