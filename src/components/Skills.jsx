import { skills, additionalSkills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3 relative inline-block text-gray-800 after:content-[''] after:block after:absolute after:-bottom-3.5 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1.5 after:bg-gradient-to-r after:from-indigo-600 after:to-amber-500 after:rounded-full"
            data-aos="fade-up"
          >
            My Skills
          </h2>
          <p
            className="text-gray-500 mt-8 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200/70 text-center transition-all duration-300 hover:transform hover:-translate-y-2 p-6"
              data-aos="zoom-in-up"
              data-aos-delay={100 * (index + 1)}
            >
              <i
                className={`${skill.icon} text-6xl mb-4 mx-auto bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent`}
              ></i>
              <h4 className="font-semibold text-lg text-gray-800">
                {skill.name}
              </h4>
              <div className="w-full bg-gray-200/70 rounded-full h-2 mt-3">
                <div
                  className={`bg-gradient-to-r from-indigo-600 to-amber-500 ${skill.level} h-2 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Also Proficient With:
          </h3>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {additionalSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-white px-5 py-2.5 rounded-full border border-gray-200/80 flex items-center shadow-md hover:shadow-lg hover:border-indigo-600/50 transition-all duration-300 cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              <i
                className={`${skill.icon} ${skill.iconColor} mr-2.5 text-lg`}
              ></i>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
