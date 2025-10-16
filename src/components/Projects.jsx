import React, { useContext } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/themeContext";

function Projects() {
    const { theme } = useContext(ThemeContext);

    // Small helper for theme styling
    // const cardBg = 
    // const textColor = theme === "Dark" ? "text-white" : "text-[#353535]";

    return (
        <div
            className={`${theme === "Dark"
                ? "bg-[#1b263b] text-white border-b border-gray-700"
                : "bg-white text-[#353535] border-b border-gray-300"
                } py-10 px-4 md:px-16`}
        >
            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-2">Projects</h3>
            <p className="text-gray-400 text-center mb-10">Real-world applications crafted using full-stack technologies and best practices.</p>

            {/* Projects Container */}
            <div className="grid gap-8 md:grid-cols-2">
                {/* Project Card 1 */}
                <div
                    className={`flex flex-col md:flex-row items-center md:items-start p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${theme === "Dark" ? "bg-[#0d1b2a]" : "bg-white"}`}
                >
                    {/* Image */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            src="/video.png"
                            alt="Project 1"
                            className="rounded-2xl w-full md:w-48 h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">Video Platform</h3>
                        <p className="text-sm md:text-base leading-relaxed mb-3">
                            A YouTube-like video platform built with full authentication, uploads, and streaming capabilities.
                        </p>

                        {/* 🧠 Tech Stack Section */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"].map((tech, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full font-medium ${theme === "Dark"
                                        ? "bg-[#1b263b] text-gray-200 border border-gray-500"
                                        : "bg-[#f4f3ee] text-gray-800 border border-gray-300"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-2 flex justify-center md:justify-start gap-4 flex-wrap">
                            <a
                                href="http://github.com/abdul-moiz-khan-10/YouTube-Clone-Backend-Project"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                GitHub
                            </a>
                            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                View
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div
                    className={`flex flex-col md:flex-row items-center md:items-start p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${theme === "Dark" ? "bg-[#0d1b2a]" : "bg-white"}`}
                >
                    {/* Image */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            src="/ecommerce.jpg"
                            alt="Project 2"
                            className="rounded-2xl w-full md:w-48 h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">E-Commerce App</h3>
                        <p className="text-sm md:text-base leading-relaxed mb-3">
                            An e-commerce application with product listings, shopping cart, and secure payment gateway integration.
                        </p>

                        {/* 🧠 Tech Stack Section */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {["React", "Node.js", "Express.js", "MongoDB", "Stripe API"].map((tech, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full font-medium ${theme === "Dark"
                                        ? "bg-[#1b263b] text-gray-200 border border-gray-500"
                                        : "bg-gray-100 text-gray-800 border border-gray-300"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-2 flex justify-center md:justify-start gap-4 flex-wrap">
                            <a
                                href="#"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                GitHub
                            </a>
                            {/* <Link
                                to="#"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                GitHub
                            </Link> */}
                        </div>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div
                    className={`flex flex-col md:flex-row items-center md:items-start p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${theme === "Dark" ? "bg-[#0d1b2a]" : "bg-white"}`}
                >
                    {/* Image */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            src="/flight.png"
                            alt="Project 3"
                            className="rounded-2xl w-full md:w-48 h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2">Flight Booking System</h3>
                        <p className="text-sm md:text-base leading-relaxed mb-3">
                            A flight booking web app for searching, scheduling, and booking flights with live availability.
                        </p>

                        {/* 🧠 Tech Stack Section */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {["Node.js", "Express.js", "MySQL", "REST API"].map((tech, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1 text-sm rounded-full font-medium ${theme === "Dark"
                                        ? "bg-[#1b263b] text-gray-200 border border-gray-500"
                                        : "bg-gray-100 text-gray-800 border border-gray-300"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-2 flex justify-center md:justify-start gap-4 flex-wrap">
                            <Link
                                href="#"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                GitHub
                            </Link>
                            {/* <Link
                                to="#"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                GitHub
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Projects;
