"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex flex-col items-center justify-center p-10">
      <img
        src="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg="
        alt="experienced"
        className="w-90 rounded-3xl shadow-2xl hover:scale-110 mb-7"
      />
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Upgrade Your Career
      </h1>
      <p className="text-lg max-w-2xl text-center mb-10">
        Take your web development career to the next level with advanced
        tutorials and real-world projects. Master frameworks like Next.js,
        explore backend with Node.js, and learn best practices to build scalable
        and high-performance applications.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Advanced Skills</h2>
          <p className="text-sm">
            Deep dive into modern frameworks, backend integration, and advanced
            performance optimization techniques.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Real Projects</h2>
          <p className="text-sm">
            Work on industry-level projects that strengthen your portfolio and
            showcase your expertise to recruiters.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-3"> Career Growth</h2>
          <p className="text-sm">
            Learn strategies for scaling applications, handling teams, and
            upgrading your career path in tech.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <button
        className="mt-10 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:scale-110 transition duration-300"
        onClick={() => {
          alert("fill the form!");
          router.push("/about");
        }}
      >
        Start Learning
      </button>
    </div>
  );
};

export default Page;
