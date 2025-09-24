"use client";
import { useParams } from "next/navigation";

export default function CourseDetail() {
  const params = useParams();
  const { id } = params;

  // Fake course data
  const courseData = {
    1: {
      title: "Next.js Basics",
      description:
        "Learn routing, pages, and SSR. In this Next.js course, you'll get hands-on experience building modern web applications. Learn how to create dynamic routes, organize your pages, and implement Server-Side Rendering (SSR) for faster performance and SEO-friendly websites. This course is perfect for developers looking to master Next.js fundamentals.",
    },
    2: {
      title: "React Advanced",
      description:
        "Hooks, Context API, and optimization. In this advanced React course, you'll dive deep into modern React features. Learn how to efficiently manage state using Hooks, share data across components with the Context API, and optimize your applications for speed and performance. This course is perfect for developers who want to build scalable and maintainable React projects.",
    },
    3: {
      title: "Fullstack with Node.js",
      description:
        "Backend + API + DB integration. This comprehensive fullstack course guides you through building modern web applications using Node.js for the backend. You'll learn how to create robust APIs, connect to databases, and integrate the frontend with dynamic data. Perfect for developers who want hands-on experience building scalable fullstack projects from scratch.",
    },
  };

  const course = courseData[id];

  if (!course)
    return (
      <div className="w-screen h-screen overflow-hidden">
        <img
          src="https://userway.org/blog/wp-content/uploads/2024/03/The-404-Page_-How-To-Turn-a-404-Error-Into-a-Win-for-Your-Website.jpg"
          alt="404"
          className="w-full h-full object-cover"
        />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-6">
      {/* Card with description and back button */}
      <div className="max-w-4xl w-full p-6 md:p-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-blue-200 mb-6">
          {course.title}
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl">{course.description}</p>

        <button
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition transform duration-300"
          onClick={() => history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
