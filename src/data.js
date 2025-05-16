// data.js
export const personalInfo = {
  name: "Bach Duc Canh",
  title: "Intern Developer",
  phone: "+84 964 486 0387",
  email: "cbd1708@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/BachCanh",
  imageUrl: "./profile.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/12qT7xacjd5s3OgEYP5MOohii3FjwqhU4/view?usp=sharing", // Update this with the actual path to your CV
};

export const aboutData = {
  description:
    "Passionate about building innovative digital solutions that solve real-world problems.",
  whoAmI: [
    "I am a third-year IT student passionate about crafting efficient, scalable backend systems and intuitive front-end interfaces.",
    "I thrive in collaborative environments, enjoy complex challenges, and constantly seek to learn and apply new technologies to create impactful solutions.",
  ],
  attributes: [
    { icon: "fas fa-bolt-lightning", text: "Fast Learner" },
    { icon: "fas fa-puzzle-piece", text: "Problem Solver" },
    { icon: "fas fa-users", text: "Team Player" },
  ],
  education: [
    {
      institution: "Ho Chi Minh City University of Technology and Education",
      details: "IT, GPA: 3.21/4.0 (2022 - Present)",
      icon: "fas fa-calendar-alt",
    },
    {
      institution: "TOEIC",
      details: "Score: 700",
      icon: "fas fa-language",
    },
  ],
};

export const skills = [
  { name: "HTML5", icon: "fab fa-html5", level: "w-4/12" },
  { name: "CSS3", icon: "fab fa-css3-alt", level: "w-4/12" },
  { name: "JavaScript", icon: "fab fa-js-square", level: "w-5/12" },
  { name: "React JS", icon: "fab fa-react", level: "w-4/12" },
  { name: "Node.js", icon: "fab fa-node-js", level: "w-6/12" },
  { name: "Express.js", icon: "fas fa-server", level: "w-6/12" },
  { name: "MongoDB", icon: "fas fa-database", level: "w-5/12" },
  { name: "C#/.NET", icon: "fab fa-windows", level: "w-8/12" },
];

export const additionalSkills = [
  {
    name: "Git & GitHub",
    icon: "fab fa-git-alt",
    iconColor: "text-orange-600",
  },
  {
    name: "RESTful APIs",
    icon: "fas fa-network-wired",
    iconColor: "text-green-500",
  },
  { name: "Tailwind CSS", icon: "fas fa-wind", iconColor: "text-sky-500" },
];

export const projects = [
  {
    title: "6P Bank",
    image: "./6PBank.png",
    description:
      "Modern banking app with secure account management and real-time transactions.",
    technologies: ["React JS", "Tailwind CSS", "Express.js", "MongoDB"],
    link: "https://github.com/TuanWoox/6P_FrontEnd",
    linkType: "repo",
  },
  {
    title: "4P News",
    image: "./4PNews.png",
    description:
      "Responsive news platform with article browsing, rich text uploads, and tag-based search.",
    technologies: ["Handlebars", "Bootstrap", "Express.js", "MongoDB"],
    link: "https://github.com/TuanWoox/4PNews",
    linkType: "repo",
  },
  {
    title: "Finding Job",
    image: "./FindingJob.png",
    description:
      "C# WinForms app for searching, filtering, and managing job listings locally.",
    technologies: ["C#", "WinForms", "SQLite/XML"],
    link: "https://github.com/BachCanh/FindingJob",
    linkType: "repo",
  },
];

export const socialLinks = [
  {
    platform: "LinkedIn",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/BachCanh/",
  },
  {
    platform: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/BachCanh",
  },
  {
    platform: "Facebook",
    icon: "fab fa-facebook-f",
    url: "https://facebook.com/BachCanh2811",
  },
];
