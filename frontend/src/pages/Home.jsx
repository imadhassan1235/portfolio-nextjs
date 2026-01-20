import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen flex flex-col"
        >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/80 z-10"></div>
                <img
                    src="/cover.png"
                    alt="Background"
                    className="w-full h-full object-cover blur-sm block"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex-grow">
                <Hero />
                <section className="text-white py-16 lg:py-24 relative overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                    <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link to="/projects" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-300 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700 hover:border-gray-600" role="alert">
                                <span className="text-xs bg-cyan-600 rounded-full text-white px-4 py-1.5 mr-3 shadow-lg shadow-cyan-500/30">New</span> <span className="text-sm font-medium">Check out my latest projects</span>
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </Link>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl drop-shadow-lg"
                        >
                            Full Stack Developer <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">UI/UX Designer</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-10 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 max-w-4xl mx-auto drop-shadow-md"
                        >
                            I build accessible, pixel-perfect, and performant web applications using the MERN stack. Let's turn your ideas into reality.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="inline-flex justify-center items-center py-4 px-8 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-900 shadow-lg shadow-cyan-500/30">
                                    Hire Me
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/projects" className="inline-flex justify-center items-center py-4 px-8 text-base font-medium text-center text-white rounded-lg border border-gray-600 hover:bg-gray-800/80 backdrop-blur-sm transition-colors focus:ring-4 focus:ring-gray-700">
                                    View Work
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Home;
