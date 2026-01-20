import React, { useState } from "react";
import API from "../api";

export default function Contact(){
  const [form, setForm] = useState({ name:"", email:"", message:""});
  const [ok, setOk] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/contact", form);
      setOk(true);
      setForm({ name:"", email:"", message:"" });
    } catch (err) {
      setOk(false);
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={submit} className="max-w-xl">
        <input className="w-full p-3 mb-3 bg-[#0b1220] rounded" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
        <input className="w-full p-3 mb-3 bg-[#0b1220] rounded" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
        <textarea className="w-full p-3 mb-3 bg-[#0b1220] rounded" placeholder="Message" rows="5" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required/>
        <button className="px-4 py-2 rounded bg-[#06b6d4] text-black font-semibold" type="submit">Send Message</button>
        {ok === true && <div className="mt-3 text-green-400">Message sent — thank you!</div>}
        {ok === false && <div className="mt-3 text-red-400">Error — try again later.</div>}
      </form>
    </section>
  );
}
