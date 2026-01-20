import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 text-white min-h-screen py-20 px-4 sm:px-8"
        >
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400">IMAD HASSAN</h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">Full‑Stack Web & Mobile Application Developer</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm sm:text-base">
                        <span>📍 Faisalabad, Pakistan</span>
                        <span>•</span>
                        <a href="mailto:imadhassan668@gmail.com" className="hover:text-cyan-400 transition-colors">📧 imadhassan668@gmail.com</a>
                        <span>•</span>
                        <a href="tel:+923296623668" className="hover:text-cyan-400 transition-colors">📞 +92 329 6623668</a>
                    </div>
                </motion.div>

                {/* Professional Summary */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 transition-transform"
                >
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400 border-b border-gray-700 pb-2">Professional Summary</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Results‑driven and detail‑oriented Full‑Stack Developer with solid hands‑on experience in modern JavaScript frameworks, backend development, and content management systems. Completed one year of professional Web and Mobile Application Development training at Saylani Mass IT Training (SMIT), Faisalabad, and gained practical exposure through hackathon‑based development. Adept at building scalable, responsive, and performance‑optimized web applications using Next.js, React.js, Node.js, MongoDB, and Prismic CMS. Highly proficient in leveraging AI tools and prompt engineering to accelerate frontend development, improve UI quality, and enhance overall productivity.
                    </p>
                </motion.div>

                {/* Technical Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Frontend Development", color: "text-purple-400", skills: ["Next.js", "React.js", "HTML5, CSS3, JavaScript (ES6+)", "Responsive and Mobile‑First UI Development"] },
                        { title: "Backend Development", color: "text-green-400", skills: ["Node.js", "Express.js", "RESTful API Development"] },
                        { title: "Database & CMS", color: "text-yellow-400", skills: ["MongoDB", "Prismic CMS", "Git & GitHub"] },
                        { title: "AI & Productivity Tools", color: "text-pink-400", skills: ["AI Prompt Engineering", "AI Chat‑Based Development Assistance", "AI‑Assisted Frontend Design"] }
                    ].map((skillSet, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
                        >
                            <h3 className={`text-xl font-bold mb-4 ${skillSet.color}`}>{skillSet.title}</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {skillSet.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
                >
                    <h3 className="text-2xl font-bold mb-6 text-cyan-400 border-b border-gray-700 pb-2">Education</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-bold text-white">Intermediate (ICS – Computer Science)</h4>
                            <p className="text-gray-400">Workers Welfare Higher Secondary School for Boys, Faisalabad</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Web & Mobile Application Development</h4>
                            <p className="text-gray-400">1‑Year Professional Program • Saylani Mass IT Training (SMIT), Faisalabad</p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects & Experience */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
                >
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400 border-b border-gray-700 pb-2">Projects & Practical Experience</h3>
                    <ul className="space-y-3 text-gray-300 list-disc list-inside">
                        <li>Designed and developed multiple frontend and full‑stack applications using <strong className="text-white">Next.js</strong> and <strong className="text-white">React.js</strong>.</li>
                        <li>Implemented backend services and APIs using <strong className="text-white">Node.js</strong>, <strong className="text-white">Express.js</strong>, and <strong className="text-white">MongoDB</strong>.</li>
                        <li>Built content‑driven and CMS‑based websites using <strong className="text-white">Prismic CMS</strong>.</li>
                        <li>Actively participated in a <strong className="text-white">hackathon</strong>, collaborating in a fast‑paced, deadline‑driven team environment.</li>
                        <li>Regularly utilize AI tools and prompt engineering to rapidly prototype interfaces and deliver clean, maintainable UI components.</li>
                    </ul>
                </motion.div>

                {/* Footer / Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6 pt-8 border-t border-gray-800"
                >
                    <h3 className="text-xl font-bold text-gray-200">Connect with Me</h3>
                    <div className="flex justify-center gap-8">
                        {[
                            { href: "https://github.com/imadhassan1235", icon: "🐙", label: "GitHub" },
                            { href: "https://www.linkedin.com/in/imad-hassan-1235", icon: "💼", label: "LinkedIn" },
                            { href: "https://x.com/Imadhassan_1235", icon: "🐦", label: "Twitter" }
                        ].map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
                                className="flex items-center gap-2 text-gray-400 transition-colors"
                            >
                                <span className="text-2xl">{link.icon}</span> {link.label}
                            </motion.a>
                        ))}
                    </div>
                    <div className="bg-cyan-900/30 text-cyan-200 py-4 px-6 rounded-lg inline-block mt-4">
                        <p className="font-semibold">Open to internships, junior‑level developer roles, and freelance opportunities.</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
