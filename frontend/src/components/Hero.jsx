import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [showCV, setShowCV] = useState(false);

  return (
    <section className="py-20 flex justify-center relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600"
          >
            Imad Hassan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 mt-4 text-xl lg:text-2xl"
          >
            Full Stack Developer • React & Node.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start"
          >
            {/* Contact Me Button */}
            <div className="flex flex-col gap-2 relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContact(!showContact)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Contact Me
              </motion.button>

              {/* Contact Info Text Reveal */}
              <AnimatePresence>
                {showContact && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="absolute top-full left-0 mt-2 p-4 bg-gray-800/90 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl min-w-[200px] z-20"
                  >
                    <p className="flex items-center gap-3 text-gray-200 mb-2">
                      <span className="text-cyan-400 text-xl">📞</span> +92 329 6623668
                    </p>
                    <p className="flex items-center gap-3 text-gray-200">
                      <span className="text-cyan-400 text-xl">📧</span> imadhassan668@gmail.com
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* My CV Button */}
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCV(true)}
              className="px-8 py-3 rounded-full border-2 border-gray-600 text-gray-200 font-semibold hover:text-white hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              <span>My Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            src="/profile.jpg"
            alt="Imad Hassan"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top border-4 border-gray-800 shadow-2xl relative z-10"
          />
        </motion.div>
      </div>

      {/* CV Image Modal Overlay */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col"
            >
              <div className="flex justify-end p-4 bg-gray-800 border-b border-gray-700">
                <button
                  onClick={() => setShowCV(false)}
                  className="p-2 text-gray-400 hover:text-white bg-gray-700 hover:bg-red-500 rounded-full transition-all"
                  title="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="overflow-auto p-4 md:p-8 bg-gray-900">
                <img
                  src="/cv_image.png"
                  alt="My CV"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
