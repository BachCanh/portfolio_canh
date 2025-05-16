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
            Showcasing my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/70 overflow-hidden relative flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-semibold text-xl text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors mt-2"
                >
                  <i
                    className={`${getIconForLinkType(project.linkType)} mr-1.5`}
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

        {/* See More Projects Button */}
        <div
          className="flex justify-center mt-16"
          data-aos="fade-up"
          data-aos-delay={100 * (projects.length + 1)}
        >
          <a
            href="https://github.com/BachCanh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-amber-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <i className="fab fa-github text-lg"></i>
            <span className="font-medium">See More Projects</span>
            <i className="fas fa-chevron-right opacity-70 transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
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
