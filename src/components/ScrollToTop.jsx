import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-indigo-600 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg z-40 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </Link>
  );
};

export default ScrollToTop;
