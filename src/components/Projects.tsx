interface Project {
  title: string;
  description: string;
  location?: string;
  tools: string[];
  link: string;
}

interface ProjectsProp {
  projects?: Project[];
}

const currentProjects: Project[] = [
  {
    title: "Who Knows Me!?",
    description:
      "Architected and Deployed a real-time multiplayer social party game in a 4-person agile team, synchronizing game state across web and mobile clients using Socket.io and Firebase",
    tools: ["React", "Firebase", "Socket.io"],
    link: "https://github.com/jjoseramoss/swe1-project",
  },
  {
    title: "VibeGen AI Playlist Generator",
    description: "Engineered a backend to generate personalized playlists of up to 30 songs by interfacing with OpenAI and Spotify APIs, transforming user prompts into a structured JSON format to create a Spotify playlist directly in a user’s account.",
    tools: ["Python", "OpenAI API", "Spotify API", "Streamlit"],
    link: "https://github.com/jjoseramoss/VibeGen",
  }
];

const Projects = ({ projects = currentProjects }: ProjectsProp) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Projects
          </h2>
          <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((pro, idx) => (
            <div
              key={idx}
              className="group relative bg-[#1F1F1F] border border-[#404040] rounded-lg p-6 md:p-8 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/10 cursor-pointer flex flex-col min-h-[400px]"
            >
              {/* Header */}
              <div className="flex flex-col mb-4 gap-2 flex-1">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {pro.title}
                  </h3>
                  <p className="text-orange-600 group-hover:text-white font-semibold mt-3 text-sm md:text-base">
                    {pro.description}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-4 mt-auto">
                <ul className="flex flex-wrap gap-2">
                  {pro.tools.map((tool, idx) => (
                    <li
                      key={idx}
                      className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 bg-[#2B2B2B] px-3 py-1 rounded-full"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <a
                  className="inline-block text-orange-500 hover:text-orange-400 transition font-semibold"
                  href={pro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github →
                </a>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/10 rounded-lg transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
