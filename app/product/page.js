import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    
    <div className="flex flex-col md:flex-row relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white">

      
      <section className="w-full md:w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 text-center">
  <div className="flex flex-col items-center space-y-6"> 
    {/* Image */}
    <img
      src="https://jecrcuniversity.edu.in/wp-content/uploads/2023/02/7-THINGS-TO-MAKE-STUDENTS-LIFE-EASIER.jpg"
      alt="student"
      className="w-full max-w-xl rounded-lg shadow-lg"
    />

    {/* Link */}
    <Link
      href="/product/mens"
      className="text-4xl font-extrabold text-sky-500 px-8 py-4 
           rounded-2xl shadow-xl bg-white/90 backdrop-blur-md 
           hover:bg-gradient-to-r hover:from-sky-100 hover:to-gray-200 
           hover:scale-105 hover:shadow-2xl transition-transform 
           duration-300 ease-in-out"
    >
      Seeking for job
    </Link>

    {/* Description */}
    <p className="text-lg font-semibold">For Fresher</p>
  </div>
</section>


      
      <section className="w-full md:w-1/2 bg-sky-400 text-white flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 text-center">
  <div className="flex flex-col items-center space-y-6">
    
    <img
      src="https://dynamicmedia.accenture.com/is/image/accenture/hero-experienced-professional-careers?ts=1738594385794&$1024-PNG$&fit=constrain&dpr=off"
      alt="experienced"
      className="w-full max-w-xl rounded-lg shadow-lg"
    />

    
    <Link
      href="/product/women"
      className="text-4xl font-extrabold text-sky-500 px-8 py-4 
           rounded-2xl shadow-xl bg-white/90 backdrop-blur-md 
           hover:bg-gradient-to-r hover:from-sky-100 hover:to-gray-200 
           hover:scale-105 hover:shadow-2xl transition-transform 
           duration-300 ease-in-out"
    >
      Upgrade in job
    </Link>

   
    <p className="text-lg font-semibold"> For Experencied</p>
  </div>
</section>


      
      <div className="md:absolute md:top-1/10 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 p-4 sm:p-6 bg rounded-lg shadow-2xl text-blue-600 bg-white font-bold text-lg md:text-xl mx-auto mt-4 md:mt-0">
        Choose any one
      </div>
  
    </div>
  );
};

export default Page;