import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Home from './pages/Home'
import { ThemeProvider } from './context/themeContext'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }

  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")

    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Contact />} />
            <Route path='/contact' element={<Project />} />

          </Routes>

        </BrowserRouter>

      </ThemeProvider>
    </>
  )
}

export default App