interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "https://www.linkedin.com/in/jose-ramos-tech/",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/jjose._.ramoss/",
    },
    {
      name: "Github",
      icon: "🐙",
      url: "https://github.com/jjoseramoss",
    },
  ];

  return (
    <footer className="w-full bg-[#1F1F1F] border-t border-[#404040]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Brand */}
        <div className="text-center mb-6">
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold text-white hover:text-orange-600 transition-colors duration-300"
          >
            josemramosjr.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:gap-8 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
              title={link.name}
            >
              <span className="group-hover:text-orange-600 transition-colors duration-300">
                {link.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Resume Link */}
        <div className="text-center mb-6">
          <a
            href="/pdfs/jose-ramos-resume-2026.pdf"
            className="inline-block px-6 py-2 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-[#2B2B2B] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Made with */}
        <div className="text-center pt-8 border-t border-[#404040]">
          <p className="text-sm md:text-base text-gray-400">
            Made with{" "}
            <span className="text-orange-600 font-semibold"><a href="https://astro.build/">Astro</a></span>,{" "}
            <span className="text-orange-600 font-semibold"><a href="https://tailwindcss.com/">Tailwind CSS</a></span>,
            and <span className="text-red-500">❤️</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2026 Jose Martin Ramos Jr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;