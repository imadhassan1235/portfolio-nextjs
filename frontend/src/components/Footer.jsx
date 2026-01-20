import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white py-8 mt-auto">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-semibold whitespace-nowrap">
                        ImadHassan<span className="text-cyan-500">.</span>
                    </span>
                    <p className="text-gray-400 text-sm mt-2">
                        © {new Date().getFullYear()} Imad Hassan. All Rights Reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/imadhassan1235" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/imad-hassan-1235/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://x.com/Imadhassan_1235" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        Twitter
                    </a>
                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
