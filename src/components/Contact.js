import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaChessKing, FaCode, FaPhone } from 'react-icons/fa';
import NavBar from './NavBar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#001F3F] text-white font-mono">
      <NavBar />
      <section className="flex flex-col items-center px-12 pt-20">
        <h1 className="text-4xl font-extrabold mb-8 text-[#c1e7ff] tracking-wide">
          Let's Get In Touch
        </h1>

        <motion.p
          className="text-[#A9B9C3] text-lg w-full max-w-5xl text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          As of now, I'm not looking for any new job opportunities, but my inbox 
          is always open if you want to communicate with me. Hit me up if you 
          have some questions, want a collaboration, or just play a game of chess. 
          I'll try to get back to you as soon as I can.
        </motion.p>

        <h3 className="mt-12 text-2xl text-[#c1e7ff] tracking-wide">
          Here are my Socials
        </h3>

        <div className="flex gap-8 mt-6">
          <a href="mailto:abhishektiwariaman@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://x.com/abhishekCloud7" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/the-abhishek-tiwari/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://github.com/abhishekptiwari" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://www.chess.com/member/abhishek-tiwari-07" target="_blank" rel="noopener noreferrer">
            <FaChessKing className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://leetcode.com/u/abhishek_tiwari_coder/" target="_blank" rel="noopener noreferrer">
            <FaCode className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="tel:+919579202967" target="_blank" rel="noopener noreferrer">
            <FaPhone className="text-yellow-400 text-4xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
