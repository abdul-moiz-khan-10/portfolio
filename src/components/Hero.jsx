import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";

function Hero() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`flex flex-col md:flex-row justify-around items-center text-center md:text-left p-8 md:p-16 gap-8 transition-all duration-300 ${theme === "Dark"
                ? "bg-[#1b263b] text-white border-b shadow-2xl"
                : "bg-white text-black shadow"
                }`}
        >
            {/* Profile Image */}
            <div className="flex justify-center items-center">
                <img
                    src="/profile.jpg"
                    alt="Hero"
                    width={300}
                    className="rounded-full shadow-lg w-[200px] md:w-[300px] border-4 border-blue-500"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center md:items-start max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold pb-3 mt-10">
                    Welcome to My Portfolio
                </h1>

                <p className="font-medium text-base md:text-lg">
                    I am <span className="text-blue-500 font-semibold">Abdul Moiz Khan</span>, a passionate full stack developer.
                </p>

                <p className="font-medium text-base md:text-lg mt-2">
                    Building robust backend solutions with <strong>JavaScript</strong>, <strong>Node.js</strong>, and modern technologies. Passionate about creating scalable systems and solving complex problems.
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center md:justify-start mt-6 gap-4">
                    <a
                        href="https://github.com/abdul-moiz-khan-10"
                        target="_blank"
                        className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-transparent border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Contact Section */}
                <div className="mt-4 text-center md:text-left">
                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        {/* GitHub */}
                        <a
                            href="https://github.com/abdul-moiz-khan-10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                        >
                            <Github size={22} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/abdul-moiz-khan-10a810296"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                        >
                            <Linkedin size={22} />
                        </a>

                        {/* Email */}
                        <a
                            href="ab.moizkhan10@gmail.com"
                            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                    <p className="text-sm md:text-base font-medium pt-3 flex gap-5">
                        <span className="text-blue-500">ab.moizkhan10@gmail.com.com</span>
                        <span className="text-blue-500">9804000568</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
