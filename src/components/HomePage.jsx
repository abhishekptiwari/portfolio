import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'; // Importing NavBar component

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#001F3F] text-white font-mono">
            <NavBar /> {/* NavBar imported here */}
            <section className="flex flex-col md:flex-row items-center justify-between p-10 space-y-8 md:space-y-0">
                
                {/* Text Content */}
                <motion.div 
                    className="max-w-lg text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hi there,</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-500 mb-4">
                        My name is Abhishek Tiwari
                    </h2>
                    <p className="text-lg text-[#A9B9C3] mb-6">
                        I am a Senior Software Engineer | Node.js Expert | System Design Specialist
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button 
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>

                        <motion.a 
                            href="/resume.pdf" 
                            download
                            className="border-2 border-yellow-500 text-yellow-500 px-5 py-3 rounded-xl shadow-lg bg-transparent hover:bg-yellow-500 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                    className="w-full md:w-1/3 transform -translate-x-0 md:-translate-x-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                >
                    <img 
                        src="/4110955.jpg" 
                        alt="Developer Illustration" 
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
