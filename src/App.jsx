import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Atom,
  Triangle,
  Server,
  Database,
  Braces,
  Wind,
  Send,
  ArrowRight,
  Twitter,
  Download,
  FileText,
} from "lucide-react";

// --- Import your PNG Images Here ---
import profileImg from "./assets/IMG_0350.PNG";
import ticketingImg from "./assets/ticketing-app.png";
import nisImg from "./assets/nis-project.png";
import audiophileImg from "./assets/audiophile.png";
import eggysImg from "./assets/eggys.png";

// --- Animation Variants ---
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const textLetter = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

// --- Classic Minimalist Project Component ---
const ProjectCard = ({ title, description, image, link, tags, reverse }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`relative flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-center mb-32 group`}
  >
    <div
      className={`md:w-[50%] relative z-10 ${
        reverse ? "md:-ml-12" : "md:-mr-12"
      } mb-8 md:mb-0`}
    >
      <div className="p-8 md:p-12 rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_rgba(44,42,37,0.04)] transition-all duration-500 group-hover:bg-white group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(44,42,37,0.08)]">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#EFECE5] text-[#8A7D6B] border border-[#E5E0D5]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-[#2C2A25] text-3xl font-bold mb-4 tracking-tight">
          {title}
        </h4>
        <p className="text-[#6B655C] text-sm leading-relaxed mb-8">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2C2A25] hover:bg-[#C46B47] text-white text-sm font-semibold transition-colors duration-300"
        >
          View Project <ArrowRight size={16} />
        </a>
      </div>
    </div>

    <div className="md:w-[55%] relative">
      <div className="absolute inset-0 bg-[#C46B47] blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity duration-700 rounded-[2rem]"></div>
      <div className="relative aspect-[16/10] rounded-[2rem] bg-[#EBE7DF] overflow-hidden border border-white/60 transition-all duration-500 shadow-sm flex items-center justify-center p-4 md:p-8">
        {image ? (
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-xl shadow-[0_10px_20px_rgba(44,42,37,0.1)]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#E6E1D6] rounded-xl">
            <p className="text-[#A39B8E] font-medium text-sm tracking-widest uppercase">
              [ Image Placeholder ]
            </p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Triangle },
    { name: "TypeScript", icon: Braces },
    { name: "Node.js", icon: Server },
    { name: "Tailwind CSS", icon: Wind },
    { name: "MongoDB", icon: Database },
    { name: "Postman", icon: Send },
  ];

  const heroTitle = "Hi, I'm Samuel.";

  return (
    <div className="bg-[#F4F1EA] min-h-screen text-[#2C2A25] font-sans selection:bg-[#C46B47]/20 selection:text-[#2C2A25] overflow-x-hidden relative pt-32">
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white blur-[150px] rounded-full pointer-events-none z-0 opacity-80"></div>
      <div className="fixed bottom-[-10%] right-[10%] w-[60vw] h-[60vw] bg-[#E8E1D5] blur-[150px] rounded-full pointer-events-none z-0"></div>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl transition-all duration-500 rounded-full flex justify-between items-center text-sm ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(44,42,37,0.08)] px-4 py-2"
            : "bg-transparent border-transparent px-2 py-4"
        }`}
      >
        {/* --- Custom Geometric SO Logo --- */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="relative flex items-center justify-center w-9 h-9">
            {/* Back Accent Square */}
            <div className="absolute inset-0 bg-[#C46B47] rounded-xl rotate-6 transition-transform duration-500 group-hover:rotate-12 opacity-90"></div>
            {/* Front Charcoal Square */}
            <div className="absolute inset-0 bg-[#2C2A25] rounded-xl -rotate-3 transition-transform duration-500 group-hover:-rotate-6 flex items-center justify-center shadow-md">
              <span className="text-[#F4F1EA] font-black text-sm tracking-tighter">
                SO
              </span>
            </div>
          </div>
          <span className="text-[#2C2A25] font-bold tracking-tight text-lg hidden sm:block">
            Samuel<span className="text-[#C46B47]">.</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-[#6B655C] font-medium px-6 py-2">
          <a href="#" className="hover:text-[#C46B47] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#C46B47] transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-[#C46B47] transition-colors">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-2 pr-1">
          <a
            href="/Samuel_Orogun.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full text-[#6B655C] font-semibold hover:bg-white hover:text-[#2C2A25] transition-all duration-300"
          >
            <FileText size={16} /> Resume
          </a>
          <a
            href="mailto:oroguns28@gmail.com"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2C2A25] text-[#F4F1EA] font-semibold hover:bg-[#C46B47] transition-all duration-300 shadow-sm"
          >
            Let's Talk <Mail size={16} />
          </a>
        </div>
      </motion.nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-10 pb-24 flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center relative mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-white/80 text-[#6B655C] text-xs font-semibold tracking-widest uppercase mb-10 shadow-sm backdrop-blur-sm"
          >
            <MapPin size={14} className="text-[#C46B47]" /> Lagos, Nigeria
          </motion.div>

          <motion.h1
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#2C2A25] tracking-tighter z-10 leading-[1.05] flex flex-wrap justify-center gap-x-4 mb-2"
          >
            {heroTitle.split(" ").map((word, i) => (
              <span key={i} className="flex">
                {word.split("").map((char, j) => (
                  <motion.span key={j} variants={textLetter}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl md:text-4xl text-[#A39B8E] font-medium italic mb-12"
          >
            Software Engineer.
          </motion.h2>

          <div className="relative flex items-center justify-center gap-6 mb-10 w-full max-w-2xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-2 bg-white shadow-[0_10px_30px_rgba(44,42,37,0.08)] z-10"
            >
              <div className="w-full h-full rounded-full bg-[#EBE7DF] overflow-hidden">
                <img
                  src={profileImg}
                  alt="Samuel"
                  className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              animate={floatAnimation}
              className="absolute -right-4 md:-right-4 -top-8 md:-top-12 w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none drop-shadow-2xl opacity-90"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png"
                alt="3D Dev"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-2xl text-[#6B655C] text-lg md:text-xl leading-relaxed mb-10 font-normal"
          >
            I craft clean, robust digital products. Specializing in modern web
            architecture, I turn complex logic into intuitive, tactile
            experiences that feel{" "}
            <span className="text-[#C46B47] font-semibold italic">
              effortless.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:oroguns28@gmail.com"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#2C2A25] text-white font-semibold hover:bg-[#C46B47] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start a Project <ArrowRight size={18} />
            </a>
            <a
              href="/Samuel_Orogun.pdf"
              download="Samuel_Orogun.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/60 border border-white/80 text-[#2C2A25] font-semibold hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 backdrop-blur-sm"
            >
              <Download size={18} className="text-[#6B655C]" /> Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full flex flex-col items-center mb-40 relative"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-[#2C2A25] text-sm font-bold uppercase tracking-widest mb-10 text-[#8A7D6B]"
          >
            Core Technologies
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl w-full">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/50 border border-white/80 shadow-sm hover:bg-white hover:shadow-md transition-all cursor-default group backdrop-blur-sm"
              >
                <tech.icon
                  size={18}
                  className="text-[#A39B8E] group-hover:text-[#C46B47] transition-colors"
                />
                <span className="text-[#2C2A25] font-semibold text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div id="work" className="w-full text-left pt-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2C2A25] text-4xl md:text-5xl font-black mb-24 text-center tracking-tight"
          >
            Selected Works.
          </motion.h3>

          <ProjectCard
            title="Event Ticketing Platform"
            description="A fully functional event ticketing application featuring comprehensive CRUD operations and secure user authentication. Engineered to seamlessly manage event creation, secure purchasing, and digital ticket distribution."
            tags={["Vue.js", "PHP & Twig", "Tailwind CSS"]}
            link="https://ticket-webapp-rosy.vercel.app/"
            image={ticketingImg}
            reverse={false}
          />

          <ProjectCard
            title="Nigeria Immigration Service"
            description="A comprehensive full-stack platform designed for managing internal NIS tasks efficiently. Engineered to handle complex data workflows, state management, and strict user authentication."
            tags={["React", "Node.js", "Enterprise UI"]}
            link="https://nigeria-immigration-service.vercel.app/"
            image={nisImg}
            reverse={true}
          />

          <ProjectCard
            title="Audiophile E-commerce"
            description="A premium, high-performance e-commerce platform featuring complex state management for shopping carts, secure checkout flows, and flawless translation of Figma UI designs."
            tags={["Next.js", "TypeScript", "Tailwind"]}
            link="https://audiophile-nu-tawny.vercel.app/"
            image={audiophileImg}
            reverse={false}
          />

          <ProjectCard
            title="Eggys Place"
            description="A beautiful digital storefront for a modern restaurant, showcasing an interactive digital menu and seamless, intuitive online ordering functionality."
            tags={["Frontend", "UI/UX", "Web Design"]}
            link="https://eggys-place-project-flame.vercel.app/"
            image={eggysImg}
            reverse={true}
          />
        </div>
      </main>

      <footer className="relative z-10 w-full pt-32 pb-12 px-6 text-center border-t border-[#EAE4D9] bg-gradient-to-t from-white/50 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-[#2C2A25] text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Let's build something.
          </h3>
          <p className="text-[#6B655C] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Open for new opportunities and interesting freelance projects.
          </p>

          <a
            href="mailto:oroguns28@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#2C2A25] text-[#F4F1EA] rounded-full font-bold text-lg hover:bg-[#C46B47] transition-all hover:scale-105 active:scale-95 mb-16 shadow-[0_10px_30px_rgba(44,42,37,0.15)]"
          >
            Say Hello <ArrowRight size={20} />
          </a>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://x.com/Ade_ola00"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white border border-[#EAE4D9] flex items-center justify-center text-[#6B655C] hover:text-[#C46B47] hover:border-[#C46B47]/30 hover:-translate-y-1 transition-all shadow-sm"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://github.com/samadeola1"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white border border-[#EAE4D9] flex items-center justify-center text-[#6B655C] hover:text-[#C46B47] hover:border-[#C46B47]/30 hover:-translate-y-1 transition-all shadow-sm"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-orogun-59ba87362/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white border border-[#EAE4D9] flex items-center justify-center text-[#6B655C] hover:text-[#C46B47] hover:border-[#C46B47]/30 hover:-translate-y-1 transition-all shadow-sm"
            >
              <Linkedin size={22} />
            </a>
          </div>
          <p className="text-[#A39B8E] text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Samuel Orogun
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
