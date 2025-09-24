"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex flex-col items-center justify-center p-10">
      <img src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4=" alt=""
      className="w-90 rounded-3xl shadow-2xl hover:scale-110 mb-7"
      />
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Kickstart Your Career 
      </h1>
      <p className="text-lg max-w-2xl text-center mb-10">
        Learn web development step by step with hands-on tutorials. From HTML,
        CSS, and JavaScript basics to advanced frameworks like React and
        Next.js, we provide everything you need to build real-world projects and
        kickstart your career as a developer.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Jobs for Freshers</h2>
          <p className="text-sm">
            Find entry-level openings tailored for students & graduates to get
            started in the industry.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Resume Tips</h2>
          <p className="text-sm">
            Learn how to build a professional resume that grabs recruiter
            attention instantly.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Interview Prep</h2>
          <p className="text-sm">
            Practice common interview questions & boost your confidence with
            real-world examples.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <button
        className="mt-10 px-6 py-3 bg-white  text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:scale-110 transition duration-300"
        onClick={() => {
          alert("fill the form!");
          router.push("/about");
        }}
      >
        Get enrolled
      </button>
    </div>
  );
};

export default page;
