import React, { useContext, useState } from "react";
import { Link } from "react-scroll"; // ✅ from react-scroll
import { ThemeContext } from "../context/themeContext";
import { Menu, X } from "lucide-react";

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${theme === "Dark"
                ? "bg-[#1b263b] text-white border-b border-gray-700"
                : "bg-[#f4f3ee] text-black shadow-md"
                }`}
        >
            <div className="flex items-center justify-between px-6 py-4 md:px-12">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-lg font-semibold tracking-wide cursor-pointer"
                >
                    Khan
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-base font-medium">
                    <Link
                        to="about"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="text-blue-500 font-semibold"
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="text-blue-500 font-semibold"
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                        Skill
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="text-blue-500 font-semibold"
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                        Project
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        activeClass="text-blue-500 font-semibold"
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Theme Toggle & Mobile Button */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "Dark" ? "White" : "Dark")}
                        className="px-3 py-1 border rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        {theme}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className={`md:hidden flex flex-col items-center gap-4 py-4 ${theme === "Dark"
                        ? "bg-[#1b263b] text-white border-t border-gray-700"
                        : "bg-[#f4f3ee] text-black border-t border-gray-300"
                        }`}
                >
                    <Link
                        to="about"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                        onClick={toggleMenu}
                    >
                        Project
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;
