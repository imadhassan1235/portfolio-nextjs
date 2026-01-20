import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const isActive = (path) => pathname === path;

    const getLinkClass = (path) => {
        const baseClass = "block py-2 px-3 rounded md:p-0 transition-colors duration-300";
        const activeClass = "text-cyan-500 font-bold";
        const inactiveClass = "text-gray-300 hover:text-cyan-400";

        return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 top-0 start-0 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm shadow-lg"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-center text-2xl font-semibold whitespace-nowrap text-white"
                    >
                        Portfolio.ImadHassan<span className="text-cyan-500">.</span>
                    </motion.span>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform active:scale-95"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {['/', '/about', '/projects', '/contact'].map((path) => (
                            <li key={path}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <Link
                                        to={path}
                                        className={getLinkClass(path)}
                                        aria-current={isActive(path) ? 'page' : undefined}
                                    >
                                        {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                                    </Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
