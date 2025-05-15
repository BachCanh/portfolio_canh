import { socialLinks } from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-800 text-gray-400 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-5 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label={social.platform}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-sm">
          © {currentYear} Bach Duc Canh. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed with <i className="fas fa-heart text-amber-500 mx-1"></i> and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
