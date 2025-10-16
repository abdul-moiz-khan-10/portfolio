import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import { Element } from 'react-scroll'
import Contact from '../components/Contact'
import { useContext } from 'react'
import { ThemeContext } from "../context/themeContext";

function Home() {
	const { theme } = useContext(ThemeContext)
	return (

		<div className={` ${theme === "Dark" ? "bg-[#0b132b] text-white" : "bg-[#f8f9fa] text-black"
			}`}>
			<div>
				<Hero />
			</div>
			<Element name="about">
				<About />
			</Element>
			<Element name="skills">
				<Skills />
			</Element>
			<Element name="project">
				<Projects />
			</Element>

			<Element name="contact">
				<Contact />
			</Element>
		</div>
	)
}

export default Home