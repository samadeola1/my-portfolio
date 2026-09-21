import React from "react";

// Import images from your src/assets directory
import audiophileImg from "./assets/audiophile.png";
import eggysImg from "./assets/eggys.png";
import ticketingAppImg from "./assets/ticketing-app.png";
import nisImg from "./assets/nis-project.png";
import heroImg from "./assets/sam_potrait.PNG";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-6 py-8 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      {/* Navigation Header */}
      <nav className="flex justify-between items-center mb-24">
        <div className="text-xl font-medium tracking-tight">Samuel Orogun</div>

        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-800">
          <a href="#work" className="hover:text-gray-500 transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-gray-500 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">
            Contact
          </a>
        </div>

        {/* PDF is in the public folder, so it uses an absolute path */}
        <a
          href="/Samuel_Orogun.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          View Resume
        </a>
      </nav>

      {/* Hero Section */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
        {/* Left Column: Status and Headline */}
        <div className="md:col-span-4 flex flex-col gap-6 z-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for engineering roles
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-gray-900">
            Samuel is solving problems through modern frontend engineering and
            robust solutions.
          </h1>
        </div>

        {/* Center Column: Faded Portrait */}
        <div className="md:col-span-4 relative flex justify-center mt-12 md:mt-0 z-0">
          <div className="relative w-full max-w-sm">
            <img
              src={heroImg}
              alt="Samuel Orogun"
              className="w-full h-auto object-cover scale-110"
            />
            {/* White gradient fade applied to the bottom of the image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pb-10"></div>
          </div>
        </div>

        {/* Right Column: Bio and CTA */}
        <div className="md:col-span-4 flex flex-col items-start gap-8 z-10 mt-8 md:mt-32 px-4 md:px-0">
          <p className="text-gray-600 leading-relaxed text-base max-w-sm">
            As a full-stack software developer with a strong focus on React,
            Next.js, and scalable architectures, I collaborate closely with
            cross-functional teams to craft seamless, user-centered web
            applications. A reliable engineering partner in bringing complex
            ideas to life.
          </p>
          <a
            href="#contact"
            className="bg-black text-white px-8 py-4 rounded-[2rem] text-sm font-medium hover:bg-gray-800 transition-transform hover:scale-105 shadow-xl"
          >
            Email Me
          </a>
        </div>
      </main>

      {/* Work Section */}
      <section
        id="work"
        className="mt-40 pt-20 border-t border-gray-100 scroll-mt-24"
      >
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Selected Work
          </h2>
          <span className="text-gray-500 text-sm font-medium">04 Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {/* Project 1: Audiophile */}
          <div className="group cursor-pointer flex flex-col gap-5">
            <a
              href="https://audiophile-nu-tawny.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <img
                src={audiophileImg}
                alt="Audiophile E-commerce"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                Audiophile
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                A premium e-commerce web application featuring complex layout
                architectures and state management. Built with Next.js,
                TypeScript, Tailwind CSS, and Convex.
              </p>
            </div>
          </div>

          {/* Project 2: Eggy's Place */}
          <div className="group cursor-pointer flex flex-col gap-5 md:mt-20">
            <a
              href="https://eggys-place-project-flame.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <img
                src={eggysImg}
                alt="Eggy's Place"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                Eggy's Place
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                A full-stack burger e-commerce platform handling dynamic product
                displays and user orders. Developed utilizing React, Node.js,
                Express, and MongoDB.
              </p>
            </div>
          </div>

          {/* Project 3: Ticketing App */}
          <div className="group cursor-pointer flex flex-col gap-5">
            <a
              href="https://ticket-webapp-react.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <img
                src={ticketingAppImg}
                alt="Ticketing App"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                Event Ticketing App
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                A modern digital platform for seamless event discovery and
                ticket management. Features a scalable backend to handle dynamic
                bookings and real-time inventory.
              </p>
            </div>
          </div>

          {/* Project 4: NIS Redesign */}
          <div className="group cursor-pointer flex flex-col gap-5 md:mt-20">
            <a
              href="https://nigeria-immigration-service.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                <div className="bg-white text-black p-4 rounded-full opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <img
                src={nisImg}
                alt="Nigeria Immigration Service Redesign"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                Nigeria Immigration Service
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                A website interface modernization project focusing on
                accessibility and structural redesign. Engineered modular React
                components including Hero, Directorate, and Contact elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mt-40 pt-20 border-t border-gray-100 scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-8"
      >
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 sticky top-24">
            About Me
          </h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-8 text-gray-600 leading-relaxed text-lg">
          <p>
            I hold a degree in Chemical Engineering from the University of
            Ilorin, which fundamentally shaped my analytical approach to
            problem-solving. Today, I apply that same rigorous logic to
            full-stack software development, specializing in modern frontend web
            engineering.
          </p>
          <p>
            Serving as an intern team lead at Tech Studio Consult, I guide
            cross-functional collaboration between engineering and design. My
            day-to-day involves modernizing legacy codebases, architecting
            scalable solutions, and accelerating development workflows using AI
            tooling like Cursor IDE and Claude.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-100">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-5 uppercase tracking-wider">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-5 uppercase tracking-wider">
                Backend & Database
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express", "MongoDB", "REST APIs", "Convex"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-40 pt-32 pb-40 border-t border-gray-100 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
          Let's build something.
        </h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto text-lg">
          Currently open to discussing new engineering roles, collaborative
          projects, or full-stack opportunities.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-black text-white px-10 py-5 rounded-[2rem] text-base font-medium hover:bg-gray-800 transition-transform hover:scale-105 shadow-xl inline-flex items-center gap-3"
        >
          Get in Touch
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </section>

      {/* Footer / Made in Tag */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white border border-gray-200 shadow-sm text-xs font-medium px-4 py-2 rounded-md flex items-center gap-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Built with React
        </div>
      </div>
    </div>
  );
}
