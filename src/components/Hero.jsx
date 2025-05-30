import { Link } from "react-scroll";
import { personalInfo } from "../data";
import useParticles from "../hooks/useParticles";

const Hero = () => {
  useParticles(".bg-particles");

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-600 to-amber-500 text-white min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="bg-particles absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Particles will be generated by useParticles hook */}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate__animated animate__fadeInDown animate__faster">
            Hi, I'm{" "}
            <span className="sparkle relative">
              <span className="text-amber-500">{personalInfo.name}</span>
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-10 animate__animated animate__fadeInUp animate__delay-0.5s">
            <span className="text-white/90">{personalInfo.title}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate__animated animate__fadeInUp animate__delay-1s">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-gradient-to-r from-indigo-600 to-amber-500 text-white font-semibold py-3.5 px-10 rounded-full shadow-lg 
                       hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 ease-in-out
                       flex items-center justify-center gap-2 pulse cursor-pointer"
            >
              <i className="fas fa-code mr-2"></i>View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="backdrop-blur-md bg-white/20 border border-white/30 text-white font-semibold py-3.5 px-10 rounded-full 
                       hover:bg-white/30 transition-all duration-300 ease-in-out
                       flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fas fa-paper-plane mr-2"></i>Contact Me
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 font-semibold py-3.5 px-10 rounded-full shadow-lg 
                       hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 ease-in-out
                       flex items-center justify-center gap-2"
            >
              <i className="fas fa-file-alt mr-2"></i>View CV
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate__animated animate__fadeIn animate__delay-2s"
        style={{ animation: "bounce 2s infinite" }}
      >
        <span className="text-sm mb-2">Scroll down</span>
        <i className="fas fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;
