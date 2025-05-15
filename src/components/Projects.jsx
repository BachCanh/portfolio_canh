import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3 relative inline-block text-gray-800 after:content-[''] after:block after:absolute after:-bottom-3.5 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1.5 after:bg-gradient-to-r after:from-indigo-600 after:to-amber-500 after:rounded-full"
            data-aos="fade-up"
          >
            My Projects
          </h2>
          <p
            className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Showcasing my recent work and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/70 overflow-hidden relative"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white">
                <h4 className="font-semibold text-2xl mb-2">{project.title}</h4>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white/20 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-500 font-semibold hover:underline group"
                >
                  <i
                    className={`${getIconForLinkType(project.linkType)} mr-2`}
                  ></i>
                  {getLinkTextByType(project.linkType)}
                  <span className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper functions
function getIconForLinkType(type) {
  switch (type) {
    case "repo":
      return "fab fa-github";
    case "demo":
      return "fas fa-globe";
    case "download":
      return "fas fa-download";
    default:
      return "fas fa-link";
  }
}

function getLinkTextByType(type) {
  switch (type) {
    case "repo":
      return "View Repo";
    case "demo":
      return "Live Demo";
    case "download":
      return "Download App";
    default:
      return "Learn More";
  }
}

export default Projects;
