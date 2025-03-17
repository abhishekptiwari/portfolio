import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import NavBar from './NavBar';

const projects = [
  {
    title: "DocuBay",
    description: "A global membership video-on-demand platform for documentaries.",
    tech: "React.js, Node.js, MongoDB, Redis, AWS",
    link: "https://docubay.com",
  },
  {
    title: "Content Recommendation Engine",
    description: "Built an automated content recommendation engine using NLP techniques.",
    tech: "Python, Pandas, NLTK, Flask",
    link: "https://your-recommendation-engine-link.com",
  },
  {
    title: "rePUSHTI",
    description: "A cloud platform that automates the booking re-verification process.",
    tech: "Node.js, Express.js, MongoDB, MySQL, AWS",
    link: "https://repushti.com",
  }
];

const skills = [
  "JavaScript",
  "Node.js",
  "REST APIs",
  "Grafana",
  "Microservices",
  "Amazon Web Services (AWS)",
];

const ProjectCard = ({ title, description, tech, link }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center bg-[#002B5B] text-white shadow-lg rounded-2xl p-6 border border-[#004080] w-full"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{description}</p>
      <p className="text-sm font-semibold">Tech Used: <span className="opacity-80">{tech}</span></p>
    </div>

    <div className="flex items-center justify-center md:justify-start gap-4 mt-4 md:mt-0 ml-0 md:ml-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
      </a>
    </div>
  </motion.div>
);

const TopSkills = () => (
  <div className="bg-[#002B5B] text-white rounded-2xl shadow-md p-6 flex items-center gap-4 border-l-4 border-blue-500">
    <BadgeCheck className="text-yellow-400 w-8 h-8" />
    <div>
      <h3 className="text-lg font-bold">Top Skills</h3>
      <p className="text-sm text-[#A9B9C3]">
        {skills.join(" • ")}
      </p>
    </div>
  </div>
);

const Projects = () => (
  <div className="min-h-screen bg-[#001F3F] text-white font-mono">
    <NavBar />
    <section className="flex flex-col items-center px-4 md:px-12 pt-10 md:pt-20">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-[#c1e7ff] tracking-wide">
        Projects
      </h1>

      {/* Skills Section */}
      <div className="mb-8 md:mb-12 w-full max-w-4xl">
        <TopSkills />
      </div>

      {/* Projects List (Responsive Grid Display) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  </div>
);

export default Projects;
