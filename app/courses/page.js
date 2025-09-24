// app/courses/page.jsx
"use client";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  const courses = [
    { id: "1", title: "Next.js Basics" },
    { id: "2", title: "React Advanced" },
    { id: "3", title: "Fullstack with Node.js" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 p-8 flex flex-col items-center">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-10">
        All Courses
      </h1>

      {/* Courses List */}
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span className="text-lg md:text-xl font-semibold text-white">
              {course.title}
            </span>
            <button
              onClick={() => router.push(`/courses/${course.id}`)}
              className="px-5 py-2 bg-gradient-to-r from-white/80 via-blue-100 to-purple-100 
                         text-gray-800 font-semibold rounded-xl shadow-lg 
                         hover:scale-105 hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 
                         transition-transform duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <p className="text-white text-center m-10 font-bold  bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 animate-pulse ">
         More courses are coming soon! Stay tuned for updates.
      </p>
      <button className="bg-white text-3xl rounded-3xl px-6 py-4 text-blue-600 font-semibold hover:bg-zinc-300 hover:scale-110" onClick={()=>{
        router.push("/about")
      }}>click for updates</button>
    </div>
  );
}
