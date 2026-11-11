
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#FAF9FF] overflow-hidden relative">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"></div>

            {/* Logo */}
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
                <Link to="/" className="flex items-center gap-2 w-fit">
                    <span className="text-4xl font-extrabold text-[#632EE3]">
                        H
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                        HERO<span className="text-[#632EE3]">.IO</span>
                    </span>
                </Link>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[80vh] flex items-center">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">

                    {/* Left Content */}
                    <div className="text-center md:text-left order-2 md:order-1">

                        <h1 className="text-8xl sm:text-9xl font-black text-[#1F1F32] tracking-tight">
                            4<span className="text-[#632EE3]">0</span>4
                        </h1>

                        <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F32] mt-5">
                            Page Not Found
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mt-6 max-w-lg mx-auto md:mx-0">
                            Oops! The page you are looking for might
                            have been moved, deleted, or never existed.
                        </p>

                        {/* Home Button */}
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 mt-10 px-10 py-5 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg shadow-lg shadow-purple-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            <ArrowLeft size={22} />
                            Go Back Home
                        </Link>

                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex justify-center items-center order-1 md:order-2">

                        {/* Orbit */}
                        <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] border-2 border-purple-200 rounded-full rotate-[-25deg]"></div>

                        {/* Planet */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#D9C9FF] via-[#A98BFF] to-[#632EE3] shadow-2xl flex items-center justify-center overflow-hidden">

                            <div className="absolute top-12 left-12 w-12 h-6 bg-purple-500/40 rounded-full rotate-[-25deg]"></div>

                            <div className="absolute top-32 right-12 w-8 h-8 bg-purple-600/30 rounded-full"></div>

                            <div className="absolute bottom-16 left-20 w-10 h-10 bg-purple-600/30 rounded-full"></div>

                            {/* Astronaut */}
                            <div className="relative z-10 text-[120px] sm:text-[160px] drop-shadow-2xl">
                                👨‍🚀
                            </div>

                        </div>

                        {/* UFO */}
                        <div className="absolute -top-4 right-4 sm:right-12 text-6xl animate-bounce">
                            🛸
                        </div>

                        {/* Stars */}
                        <Sparkles className="absolute top-10 left-10 text-purple-500" size={30} />

                        <Sparkles className="absolute bottom-20 right-0 text-purple-500" size={25} />

                        <Sparkles className="absolute top-1/2 left-0 text-purple-400" size={20} />

                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="text-center pb-6 text-gray-400 text-sm">
                © 2026 HERO.IO. All rights reserved.
            </footer>

        </div>
    );
};

export default ErrorPage;

