import { useState, useRef, useEffect } from "react";
import {
  Home as HomeIcon,
  User,
  Briefcase,
  Linkedin,
  Github,
  Compass,
  Sparkles,
  Code,
  Layout,
  TrendingUp,
  Mail,
  Phone,
  Send,
} from "lucide-react";

// A reusable component for scroll-based animations.
const AnimatedSection = ({ children, className }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// A small, reusable component for a navigation link button.
const NavLink = ({ label, onClick }) => {
  return (
    <button
      className="text-gray-400 hover:text-teal-500 transition-colors duration-200 focus:outline-none font-medium px-2 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:hover:w-full after:hover:left-0"
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
};

const Header = ({ scrollToSection, refs }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <button
          className="text-2xl font-extrabold text-teal-500 hover:text-teal-400 transition-colors duration-300 focus:outline-none"
          onClick={() => scrollToSection(refs.home)}
        >
          {/* Header is reverted to the original text-based title */}
          Orogun Samuel
        </button>

        <div className="flex space-x-2 md:space-x-4">
          <NavLink label="Home" onClick={() => scrollToSection(refs.home)} />
          <NavLink label="About" onClick={() => scrollToSection(refs.about)} />
          <NavLink
            label="Projects"
            onClick={() => scrollToSection(refs.projects)}
          />
          <NavLink
            label="Contact"
            onClick={() => scrollToSection(refs.contact)}
          />
        </div>
      </nav>
    </header>
  );
};

const Home = ({ scrollToSection }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-8 text-center md:text-left animate-fade-in">
      <AnimatedSection className="md:w-1/2 md:pr-16">
        <p className="text-xl font-medium text-gray-400 mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2">
          Orogun Samuel
        </h1>
        <p className="text-lg md:text-xl font-semibold text-teal-500 mb-4 tracking-wider">
          FULL-STACK DEVELOPER
        </p>
        <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed mb-6">
          I'm a passionate full-stack developer with a focus on building robust
          and scalable web applications. My expertise spans the entire
          development lifecycle, from designing user interfaces to architecting
          powerful back-end systems.
        </p>
        <button
          onClick={scrollToSection}
          className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
        >
          Hire Me
        </button>
      </AnimatedSection>
      <AnimatedSection className="md:w-1/2 mb-8 md:mb-0 md:pl-16">
        {/* Placeholder for hero image. Replace the src value with your image URL. */}
        <img
          src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1757021437/IMG_0350_krtqd0.png"
          alt="Orogun Samuel profile"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-700 shadow-2xl mx-auto animate-pulse-light"
        />
      </AnimatedSection>
    </div>
  );
};

const SkillItem = ({ label }) => {
  return (
    <li className="bg-gray-700/50 text-teal-400 font-medium px-4 py-2 rounded-full text-center text-sm shadow-sm transition-all duration-300 hover:bg-teal-500 hover:text-white transform hover:scale-105 border border-gray-600">
      {label}
    </li>
  );
};

const About = () => {
  return (
    <AnimatedSection className="p-8 rounded-3xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="mb-6 md:mb-0 flex-shrink-0">
          {/* Placeholder for about image. Replace the src value with your image URL. */}
          <img
            src="https://res.cloudinary.com/dd9nujmdt/image/upload/v1753978247/heroimg-main_tlb4pf.jpg"
            alt="Orogun Samuel profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-gray-700  shadow-xl mx-auto md:mx-0"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <p className="text-gray-400 leading-relaxed mb-6">
            Hello! My name is Samuel, and I'm a full-stack developer with a
            passion for building interactive web experiences. I specialize in
            modern JavaScript frameworks like React, and I'm always eager to
            learn new technologies.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I've been honing my skills in front-end development, focusing on
            creating responsive and accessible user interfaces. On the backend,
            I have experience with Node.js and various database technologies. My
            goal is to create seamless, end-to-end solutions that deliver value
            to users.
          </p>
          <h3 className="text-2xl font-bold text-white mt-6 mb-4">My Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillItem label="React" />
            <SkillItem label="JavaScript" />
            <SkillItem label="TypeScript" />
            <SkillItem label="Node.js" />
            <SkillItem label="Express.js" />
            <SkillItem label="MongoDB" />
            <SkillItem label="Git" />
            <SkillItem label="GitHub" />
            <SkillItem label="Tailwind CSS" />
            <SkillItem label="Postman" />
            <SkillItem label="Figma" />
            <SkillItem label="RESTful APIs" />
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:bg-gray-600/50 transform hover:-translate-y-1 border border-gray-600">
      <div className="mb-4">{project.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
      <a
        href={project.link}
        className="text-teal-500 hover:text-teal-400 font-medium flex items-center transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-external-link ml-1"
        >
          <path d="M15 3h6v6" />
          <path d="M10 14-7 15" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Nigeria Immigration Service",
      description:
        "A full-stack application for managing Nigeria Immigration Service tasks.",
      link: "https://github.com/samadeola1/Nigeria-Immigration-Service.git",
      icon: <Layout size={48} className="text-teal-500" />,
    },
    {
      title: "Eggys Place",
      description:
        "A website for a restaurant, showcasing menu and online ordering functionality.",
      link: "https://github.com/samadeola1/eggys-place-project.git",
      icon: <Sparkles size={48} className="text-teal-500" />,
    },
    {
      title: "URL Shortener",
      description: "A service to create and manage short links.",
      link: "https://github.com/samadeola1/url-shortener",
      icon: <Code size={48} className="text-teal-500" />,
    },
    {
      title: "Construction Site",
      description:
        "A website for a construction company, detailing services and past projects.",
      link: "https://github.com/samadeola1/Construction-site",
      icon: <Briefcase size={48} className="text-teal-500" />,
    },
  ];

  return (
    <AnimatedSection className="p-8 rounded-3xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

const Contact = () => {
  return (
    <AnimatedSection className="p-8 rounded-3xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-lg text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        I'm always open to new opportunities and collaborations. Feel free to
        get in touch through any of the channels below.
      </p>

      {/* Social and Contact Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
          href="https://www.linkedin.com/in/samuel-orogun-59ba87362/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600/50 transform hover:-translate-y-1 hover:shadow-xl border border-gray-600"
        >
          <Linkedin size={36} className="text-teal-500 mb-2" />
          <span className="text-sm font-semibold text-white">LinkedIn</span>
        </a>
        <a
          href="https://github.com/samadeola1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600/50 transform hover:-translate-y-1 hover:shadow-xl border border-gray-600"
        >
          <Github size={36} className="text-teal-500 mb-2" />
          <span className="text-sm font-semibold text-white">GitHub</span>
        </a>
        <a
          href="mailto:oroguns28@gmail.com"
          className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600/50 transform hover:-translate-y-1 hover:shadow-xl border border-gray-600"
        >
          <Mail size={36} className="text-teal-500 mb-2" />
          <span className="text-sm font-semibold text-white">Email</span>
        </a>
        <a
          href="https://wa.link/d1loxy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600/50 transform hover:-translate-y-1 hover:shadow-xl border border-gray-600"
        >
          <Phone size={36} className="text-teal-500 mb-2" />
          <span className="text-sm font-semibold text-white">WhatsApp</span>
        </a>
      </div>
    </AnimatedSection>
  );
};

// This is the main application component, which handles state and routing for the portfolio.
export default function App() {
  // We'll use refs to reference each section of the single-page layout for smooth scrolling.
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling to a specific section.
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80, // Offset to account for the fixed header
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans antialiased relative overflow-hidden">
      {/* Dynamic background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 100 100"
        >
          <path fill="url(#pattern-circles)" d="M0 0h100v100H0z"></path>
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternContentUnits="objectBoundingBox"
            >
              <circle cx="5" cy="5" r="1.5" fill="#4B5563"></circle>
            </pattern>
          </defs>
        </svg>
      </div>

      {/* The Header component is always visible and handles navigation. */}
      <Header
        scrollToSection={scrollToSection}
        refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />

      {/* The main content area where the different portfolio sections will be rendered. */}
      <main className="relative z-10 container mx-auto p-4 md:p-8">
        <section
          ref={homeRef}
          className="min-h-screen pt-20 flex items-center justify-center"
        >
          <Home scrollToSection={() => scrollToSection(contactRef)} />
        </section>
        <section ref={aboutRef} className="py-20">
          <About />
        </section>
        <section ref={projectsRef} className="py-20">
          <Projects />
        </section>
      </main>

      {/* The contact section is a standalone component, but it's not wrapped in a section because we don't scroll to it. We will however add the ref to it so we can have a scroll effect */}
      <section ref={contactRef} className="py-20">
        <Contact />
      </section>

      {/* A simple, clean footer. */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Orogun Samuel. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
