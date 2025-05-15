import { personalInfo, aboutData } from "../data";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3 relative inline-block text-gray-800 after:content-[''] after:block after:absolute after:-bottom-3.5 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1.5 after:bg-gradient-to-r after:from-indigo-600 after:to-amber-500 after:rounded-full"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <p
            className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {aboutData.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          <div
            className="lg:w-1/3 flex justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative group">
              <img
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                className="rounded-full shadow-2xl w-60 h-60 md:w-72 md:h-72 object-cover border-4 border-white group-hover:border-amber-500 transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8">
            <div
              className="md:w-1/2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200/70 transition-all duration-300 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-indigo-600">
                <i className="fas fa-user-tie mr-3"></i>Who I Am
              </h3>
              {aboutData.whoAmI.map((paragraph, index) => (
                <p
                  key={index}
                  className={`${
                    index !== aboutData.whoAmI.length - 1 ? "mb-5" : "mb-6"
                  } text-gray-500 leading-relaxed`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3">
                {aboutData.attributes.map((attr, index) => (
                  <span
                    key={index}
                    className="bg-indigo-600/10 text-indigo-600 font-medium px-4 py-2 rounded-full flex items-center text-sm hover:bg-indigo-600/20 transition-all duration-200"
                  >
                    <i className={`${attr.icon} mr-2`}></i>
                    {attr.text}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="md:w-1/2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200/70 transition-all duration-300 hover:transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-indigo-600">
                <i className="fas fa-graduation-cap mr-3"></i>Education & Certs
              </h3>
              <ol className="list-none">
                {aboutData.education.map((edu, index) => (
                  <li
                    key={index}
                    className="relative pl-10 pb-8 last:after:hidden after:content-[''] after:absolute after:left-[9px] after:top-6 after:bottom-0 after:w-0.5 after:bg-gray-200 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-gradient-to-r before:from-indigo-600 before:to-amber-500 before:rounded-full before:z-10 before:shadow-md before:border-2 before:border-white"
                  >
                    <h4 className="font-semibold text-lg text-gray-800">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      <i className={`${edu.icon} mr-2 text-indigo-600/80`}></i>
                      {edu.details}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
