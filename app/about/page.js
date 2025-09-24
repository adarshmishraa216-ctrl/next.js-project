"use client";
import React, { useState } from "react";

const About = () => {
  const [form, setForm] = useState({
    name: "",
    course: "",
    contact: "",
    bio: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Form submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 min-h-screen flex flex-col items-center p-10">
      
      {/* Heading at the top */}
      <h1
        className="mb-10 text-4xl md:text-5xl font-extrabold text-center 
               text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-400 to-pink-800 
               drop-shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Let’s Connect
      </h1>

      {/* Image + Form */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16 w-full max-w-4xl">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Contact Us"
            style={{ width: "500px" }}
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-6 rounded-xl shadow-lg bg-white/20 backdrop-blur-md text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Fill the Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="course"
              placeholder="Course"
              value={form.course}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="bio"
              placeholder="Bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default About;
