import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // For hamburger and close icons

const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Track menu state

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex justify-between items-center p-4 bg-[#020C1B] text-gray-300">
            <motion.div 
                className="text-lg font-bold text-yellow-500 cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                onClick={() => navigate('/')}
            >
                Abhishek Tiwari
            </motion.div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                {isOpen ? (
                    <X className="text-yellow-500 w-8 h-8 cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <Menu className="text-yellow-500 w-8 h-8 cursor-pointer" onClick={toggleMenu} />
                )}
            </div>

            {/* Menu Links (Desktop View) */}
            <ul className="hidden md:flex gap-6">
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

            {/* Mobile Menu (Visible only when opened) */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-[#020C1B] flex flex-col gap-4 p-4 md:hidden">
                    {['Home', 'About', 'Projects', 'Blogs', 'Contact'].map((item) => (
                        <li
                            key={item}
                            className="hover:text-yellow-500 cursor-pointer"
                            onClick={() => {
                                navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
                                toggleMenu(); // Close menu on click
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
