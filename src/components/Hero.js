import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Abhishek Tiwari</h1>
        <p className="text-lg mb-6">
          Senior Software Engineer | Node.js Expert | System Design Specialist
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/the-abhishek-tiwari/"
            className="bg-white text-indigo-500 py-2 px-6 rounded-full font-medium shadow-md hover:bg-indigo-100 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abhishekptiwari"
            className="bg-white text-indigo-500 py-2 px-6 rounded-full font-medium shadow-md hover:bg-indigo-100 transition"
          >
            GitHub
          </a>
          <a
            href="/Abhishek-Tiwari-CV.pdf"
            className="bg-white text-indigo-500 py-2 px-6 rounded-full font-medium shadow-md hover:bg-indigo-100 transition"
          >
            Resume
          </a>
          <a
            href="https://x.com/abhishekCloud7"
            className="bg-white text-indigo-500 py-2 px-6 rounded-full font-medium shadow-md hover:bg-indigo-100 transition"
          >
            Twitter (X)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
