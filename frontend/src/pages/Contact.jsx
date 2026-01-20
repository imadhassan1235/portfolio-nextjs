import React, { useState } from 'react';
import API from '../api';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await API.post('/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (error) {
            console.error(error);
            setStatus('error');
            alert('Failed to send message. Is the backend running?');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 text-white min-h-screen pt-24 px-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="max-w-screen-md mx-auto bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                        <motion.input
                            whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                            type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 transition-all" placeholder="Imad Hassan" required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                        <motion.input
                            whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                            type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 transition-all" placeholder="imadhassan@example.com" required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                        <motion.textarea
                            whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                            id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 transition-all" placeholder="Let me know how I can help you..." required
                        ></motion.textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit" disabled={status === 'sending'} className="w-full text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-cyan-500/30 disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </motion.button>
                    {status === 'success' && <p className="text-green-500 text-center animate-pulse">Message sent!</p>}
                    {status === 'error' && <p className="text-red-500 text-center">Something went wrong.</p>}
                </form>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
