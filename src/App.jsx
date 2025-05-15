import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// Import FontAwesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import animation CSS library
import "animate.css";

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-quad",
    });
  }, []);

  return (
    <div className="font-['Poppins'] bg-gray-50 text-gray-800 antialiased">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
