import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`py-10 px-4 sm:px-6 md:px-12 lg:px-20 ${theme === "Dark"
                ? "bg-[#1b263b] text-white shadow-2xl border-b border-gray-700"
                : "bg-white text-black shadow border-b border-gray-300"
                }`}
        >
            <h4 className="text-center text-3xl sm:text-4xl font-bold mb-2">About Me</h4>
            <p className="text-center text-gray-400 mb-10">
                Passionate developer focused on creating effcient backend solutions.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image (optional) */}
                {/* 
                <div className="flex-shrink-0 w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div> 
                */}

                {/* Text Content */}
                <div className="text-center md:text-left space-y-4 leading-relaxed flex-1">
                    <p>
                        My name is <span className="font-semibold">Abdul Moiz Khan</span>, and I am from Pune, Maharashtra, India.
                        I recently completed my Bachelor's Degree in Computer Science from
                        <span className="font-semibold"> Savitribai Phule Pune University, Pune</span>.
                        I have also completed a web development training course from YouTube and Udemy.
                    </p>

                    <p>
                        In terms of technical skills, I am proficient in
                        <span className="font-semibold"> C, Python, JavaScript, HTML, CSS, and MySQL</span>,
                        as well as frameworks and libraries such as
                        <span className="font-semibold"> React.js, Next.js, Bootstrap, Redux, and Tailwind CSS</span>.
                        My toolset includes
                        <span className="font-semibold"> Git, VS Code, and Postman</span>.
                    </p>

                    <div>
                        <h5 className="font-semibold text-lg mt-4 mb-2">What Drives Me</h5>
                        <p>
                            I love solving complex problems and turning ideas into functional applications.
                            My approach combines technical expertise with creative problem-solving
                            to deliver impactful, high-quality solutions.
                        </p>
                    </div>

                    {/* Focus Area Section */}
                    <div className="md:w-1/3 space-y-2">
                        <h4 className="font-semibold text-lg mb-2">Currently Focused On</h4>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Python with LLMs</li>
                            <li>Building scalable REST APIs</li>
                            <li>Microservices Architecture</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
