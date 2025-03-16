import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center p-4 bg-[#020C1B] text-gray-300">
            <motion.div 
                className="text-lg font-bold text-yellow-500 cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                onClick={() => navigate('/')}   // <-- Added this for redirect
            >
                Abhishek Tiwari
            </motion.div>

            <ul className="flex gap-6">
                {['Home', 'About', 'Projects', 'Blogs', 'Contact'].map((item, index) => (
                    <motion.li
                        key={item}
                        className="hover:text-yellow-500 cursor-pointer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;

