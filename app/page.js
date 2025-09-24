"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Fetch images from API
  const getImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  // Handle search input
  const handleSearch = () => {
    const courseMap = {
      "next.js basics,next,nextjs": 1,
      "react advanced,react,r": 2,
      "fullstack with node.js,node,nodejs": 3,
    };

    // Convert search to lowercase and check for multiple keywords
    const searchKey = search.toLowerCase().trim();
    const courseId = Object.entries(courseMap).find(([keys]) =>
      keys.split(",").includes(searchKey)
    )?.[1];

    if (courseId) {
      router.push(`/courses/${courseId}`);
    } else {
      alert("Course not found!");
    }
  };

  return (
    <div className="px-7 py-7 bg-gradient-to-r from-cyan-400 to-blue-500 min-h-screen flex flex-col justify-between">

      {/* Heading */}
      <div className="flex flex-col items-center mt-2 space-y-4">
        <h1 className="text-6xl text-white text-center hover:scale-105 transition duration-300">
          Turn Ideas into Real Projects
        </h1>

        {/* Search */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 shadow-md 
                       focus:outline-none focus:ring-2 cursor-pointer hover:bg-amber-50 hover:text-zinc-700 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded shadow-md cursor-pointer 
                       hover:bg-blue-500 hover:scale-105 transition duration-300 ml-2"
          >
            Search
          </button>
        </div>

        {/* Course Suggestions */}
        <div className="mt-4 w-full max-w-3xl flex justify-center items-center gap-2 flex-wrap">
          <span
            className="text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 hover:scale-105 cursor-pointer transition duration-300"
            onClick={() => router.push("/courses/1")}
          >
            Next.js Basics
          </span>
          <span
            className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 hover:scale-105 cursor-pointer transition duration-300"
            onClick={() => router.push("/courses/2")}
          >
            React Advanced
          </span>
          <span
            className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 hover:scale-105 cursor-pointer transition duration-300"
            onClick={() => router.push("/courses/3")}
          >
            Fullstack with Node.js
          </span>
        </div>
      </div>

      {/* Course Images Section */}
      <div className="w-full max-w-7xl backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-10 mx-auto">
        <h2 className="text-3xl font-bold text-amber-50 mb-6 text-center">
          Course Images
        </h2>

        <div className="flex gap-6 overflow-x-auto py-4 px-2">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-72 h-44 bg-gray-300/30 rounded-2xl animate-pulse shadow-lg"
                  />
                ))
            : images.map((elem, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={elem.download_url}
                    alt={elem.author}
                    width={300}
                    height={200}
                    className="rounded-t-2xl"
                  />
                  <p className="mt-2 text-gray-700 font-medium text-center px-2">
                    explore
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
