import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-6 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 text-white text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Contact</h1>
        <p className="text-sm sm:text-base opacity-90 mb-6">
          For any queries, feel free to reach out and we will get back to you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide opacity-80">Email</p>
            <p className="font-semibold">support@example.com</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wide opacity-80">Phone</p>
            <p className="font-semibold">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page