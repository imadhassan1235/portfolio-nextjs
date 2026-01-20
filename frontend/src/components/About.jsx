import React from "react";

export default function About(){
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I build clean and efficient full-stack apps using React, Node.js, and MongoDB.
        I focus on performance, accessibility and clean UI.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#0f1724] rounded-lg">React.js</div>
        <div className="p-4 bg-[#0f1724] rounded-lg">Node.js & Express</div>
        <div className="p-4 bg-[#0f1724] rounded-lg">MongoDB</div>
        <div className="p-4 bg-[#0f1724] rounded-lg">REST APIs</div>
      </div>
    </section>
  );
}
