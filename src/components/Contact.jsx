import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

function Contact() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="contact"
            className={`min-h-screen py-16 px-6 transition-all duration-300 ${theme === "Dark" ? "bg-[#1b263b] text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                    Let’s <span>Connect</span>
                </h2>
                <p className="text-gray-400">
                    Ready to bring your ideas to life? Let’s discuss your next project.
                </p>
            </div>

            {/* Main Contact Section */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
                {/* Left Side: Contact Info */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        I’m always interested in new opportunities and exciting projects.
                        Whether you’re a company hiring or just want to connect, I’d love to hear from you.
                    </p>

                    <div
                        className={`flex flex-col gap-4 ${theme === "Dark" ? "text-white" : "text-black"
                            }`}
                    >
                        <div
                            className={`flex items-center gap-4 p-4 rounded-xl border shadow-md ${theme === "Dark"
                                ? "bg-[#0d1b2a] border-gray-700"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <Mail size={22} />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm text-gray-400">
                                    ab.moizkhan10@gmail.com
                                </p>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-4 p-4 rounded-xl border shadow-md ${theme === "Dark"
                                ? "bg-[#0d1b2a] border-gray-700"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <Phone size={22} />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p className="text-sm text-gray-400">
                                    +91 9804000568
                                </p>
                            </div>
                        </div>

                        <div
                            className={`flex items-center gap-4 p-4 rounded-xl border shadow-md ${theme === "Dark"
                                ? "bg-[#0d1b2a] border-gray-700"
                                : "bg-white border-gray-200"
                                }`}
                        >
                            <MapPin size={22} />
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-sm text-gray-400">
                                    Pune, Maharashtra, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <p className="font-semibold mb-2">Connect With Me</p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/abdul-moiz-khan-10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-md border shadow-md text-sm hover:text-gray-400 transition"
                            >
                                <Github size={18} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdul-moiz-khan-10a810296"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-md border shadow-md text-sm hover:text-gray-400 transition"
                            >
                                <Linkedin size={18} /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form
                <div
                    className={`w-full md:w-1/2 p-6 rounded-2xl border shadow-md ${theme === "Dark"
                        ? "bg-[#0d1b2a] border-gray-700"
                        : "bg-white border-gray-200"
                        }`}
                >
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`w-full p-3 rounded-md border outline-none ${theme === "Dark"
                                    ? "bg-[#0d1b2a] border-gray-700 text-white"
                                    : "bg-gray-100 border-gray-300 text-black"
                                    }`}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={`w-full p-3 rounded-md border outline-none ${theme === "Dark"
                                    ? "bg-[#0f1c2e] border-gray-700 text-white"
                                    : "bg-gray-100 border-gray-300 text-black"
                                    }`}
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className={`w-full p-3 rounded-md border outline-none ${theme === "Dark"
                                ? "bg-[#0f1c2e] border-gray-700 text-white"
                                : "bg-gray-100 border-gray-300 text-black"
                                }`}
                            required
                        />

                        <textarea
                            placeholder="Tell me about your project..."
                            rows="5"
                            className={`w-full p-3 rounded-md border outline-none ${theme === "Dark"
                                ? "bg-[#0f1c2e] border-gray-700 text-white"
                                : "bg-gray-100 border-gray-300 text-black"
                                }`}
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-md hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div> */}
            </div>

            {/* Bottom Call-to-Action */}
            <div className="text-center mt-16">
                <h3 className="text-xl font-semibold mb-3">
                    Ready to start your project?
                </h3>
                <p className="text-gray-400 mb-6">
                    Let’s build something amazing together. I’m always excited to work on
                    innovative ideas and help bring them to life.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="ab.moizkhan10@gmail.com"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Email Me Directly
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className={`px-6 py-3 rounded-md border ${theme === "Dark"
                            ? "border-gray-700 hover:bg-[#1b263b]"
                            : "border-gray-300 hover:bg-gray-100"
                            } transition`}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
