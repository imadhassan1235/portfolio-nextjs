import React, { useEffect, useState } from "react";
import API from "../api";

export default function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(()=> {
    API.get("/projects").then(res => setProjects(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.length === 0 && <div className="text-gray-400">No projects yet — add via backend.</div>}
        {projects.map(p => (
          <div key={p._id} className="p-4 bg-[#0f1724] rounded-lg">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{p.description}</p>
            <div className="mt-3 text-xs text-gray-400">{p.tech?.join(" • ")}</div>
            <div className="mt-4 flex gap-2">
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm underline">Repo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
