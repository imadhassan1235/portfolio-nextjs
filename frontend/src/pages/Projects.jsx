import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 text-white min-h-screen pt-24 px-4"
        >
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                    <p className="text-gray-400">
                        Here are some of the projects I've worked on.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {/* Placeholder Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors cursor-pointer"
                    >
                        <h3 className="text-xl font-bold mb-2 text-cyan-400">Portfolio Website</h3>
                        <p className="text-gray-400 mb-4">You are looking at it right now!</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-cyan-900 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                            <span className="bg-green-900 text-green-300 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
