import React from "react";

const AppErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9FF] relative overflow-hidden flex flex-col">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="text-4xl font-black text-[#632EE3]">H</div>

          <h2 className="text-2xl font-bold text-[#1F1F32]">
            HERO<span className="text-[#632EE3]">.IO</span>
          </h2>
        </a>

        {/* Home Icon */}
        <a
          href="/"
          className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-[#1F1F32] hover:bg-purple-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9" />
            <path d="M9 21v-8h6v8" />
          </svg>
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Illustration */}
        <div className="relative mb-10">
          {/* Decorative Warning */}
          <div className="absolute -top-5 -left-12 text-5xl font-bold text-[#632EE3] rotate-[-15deg]">
            !!
          </div>

          {/* Decorative Gear */}
          <div className="absolute top-12 -right-16 text-6xl text-purple-300 animate-spin [animation-duration:15s]">
            ⚙
          </div>

          {/* Decorative Spiral */}
          <div className="absolute -top-16 right-0 text-5xl text-purple-500">
            〰
          </div>

          {/* Error Phone */}
          <div className="relative w-48 h-72 sm:w-56 sm:h-80 bg-gradient-to-br from-[#3D267E] to-[#1F1645] rounded-[35px] p-3 shadow-2xl rotate-[10deg]">
            {/* Phone Screen */}
            <div className="w-full h-full bg-gradient-to-br from-white to-[#E9DFFF] rounded-[26px] flex flex-col items-center justify-center relative">
              {/* Camera */}
              <div className="absolute top-3 w-12 h-1.5 bg-[#3D267E] rounded-full"></div>

              {/* Warning Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 24 24"
                fill="#632EE3"
                stroke="#632EE3"
                strokeWidth="1"
                className="mb-5"
              >
                <path d="M10.3 3.9 1.8 18.5A2 2 0 0 0 3.5 21.5h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                <path
                  d="M12 9v4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="17" r="1" fill="white" />
              </svg>

              {/* Sad Face */}
              <div className="text-5xl font-bold text-[#1F1F32]">☹</div>
            </div>
          </div>

          {/* Left Hand */}
          <div className="absolute top-28 -left-16 text-5xl -rotate-12">👋</div>

          {/* Right Hand */}
          <div className="absolute bottom-20 -right-16 text-5xl rotate-12">
            👋
          </div>

          {/* Traffic Cone */}
          <div className="absolute bottom-0 -left-28 text-7xl">🚧</div>

          {/* Ground Shadow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-10 bg-purple-300/30 blur-xl rounded-full -z-10"></div>
        </div>

        {/* Error Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F1F32]">
          Something Went Wrong!
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-[#696887] max-w-2xl leading-relaxed">
          An unexpected error occurred while loading this app.
          <br className="hidden sm:block" />
          Please try again later.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
          {/* Try Again */}
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-lg font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 7v5h-5" />
              <path d="M4 17v-5h5" />
              <path d="M5.6 9a7 7 0 0 1 11.6-2L20 12" />
              <path d="M4 12l2.8 5a7 7 0 0 0 11.6-2" />
            </svg>
            Try Again
          </button>

          {/* Go Home */}
          <a
            href="/"
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-purple-200 text-[#1F1F32] text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v12h14V9" />
              <path d="M9 21v-8h6v8" />
            </svg>
            Go Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-sm text-gray-400">
        © 2026 HERO.IO. All rights reserved.
      </footer>
    </div>
  );
};

export default AppErrorPage;
