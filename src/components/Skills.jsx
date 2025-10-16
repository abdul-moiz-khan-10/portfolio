import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
                { name: "C", level: "Intermediate" },
                { name: "Java", level: "Beginner" },
            ],
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React.js", level: "Beginner" },
                { name: "Next.js", level: "Beginner" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Express.js", level: "Intermediate" },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", level: "Beginner" },
                { name: "MongoDB", level: "Intermediate" },
            ],
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "Postman", level: "Intermediate" },
                { name: "Git", level: "Beginner" },
                { name: "VS Code", level: "Intermediate" },
            ],
        },
    ];

    return (
        <section
            className={`py-12 px-6 transition-all duration-300 ${theme === "Dark"
                ? "bg-[#1b263b] text-white border-b border-gray-700"
                : "bg-white text-black border-b border-gray-300"
                }`}
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
                Skills & <span >Technologies</span>
            </h2>
            <p className="text-center text-gray-400 mb-10">
                Technologies and tools I use to build robust applications
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 shadow-lg transition-all duration-300 ${theme === "Dark"
                            ? "bg-[#0d1b2a] hover:bg-[#243b55]"
                            : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            {category.title}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill, i) => (
                                <li key={i} className="flex justify-between">
                                    <span>{skill.name}</span>
                                    <span
                                        className={`text-sm ${theme === "Dark" ? "text-gray-400" : "text-gray-500"
                                            }`}
                                    >
                                        {skill.level}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
