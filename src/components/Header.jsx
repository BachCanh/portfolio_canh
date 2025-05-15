import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { personalInfo } from "../data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-lg bg-white/85" : "shadow-sm bg-white/70"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 md:p-5">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-2xl font-bold relative group cursor-pointer"
        >
          <span className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">
            {personalInfo.name.split(" ")[2]}
          </span>
          <span className="text-amber-500 font-black">.dev</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-amber-500 group-hover:w-full transition-all duration-500"></span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="bg-white/95 backdrop-blur-md md:hidden shadow-lg">
          <nav className="flex flex-col p-4 space-y-1">
            <MobileNavLink to="home" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="about" onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink to="skills" onClick={() => setIsOpen(false)}>
              Skills
            </MobileNavLink>
            <MobileNavLink to="projects" onClick={() => setIsOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    className="relative text-gray-600 hover:text-indigo-600 font-medium transition duration-300 
             after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-600 after:to-amber-500 
             after:left-0 after:-bottom-1.5 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={onClick}
    className="text-gray-600 hover:text-indigo-600 font-semibold transition duration-300 block py-2.5 px-4 rounded-md hover:bg-indigo-600/10 cursor-pointer"
  >
    {children}
  </Link>
);

export default Header;
