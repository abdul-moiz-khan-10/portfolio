import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../context/themeContext';

function Header() {
    const { themeMode, darkMode, lightMode } = useTheme();

    const themeChange = () => {
        if (themeMode === "light") {
            darkMode()
        } else {
            lightMode()
        }
    }
    return (
        <div className="bg-[#f4f3ee] dark:bg-[#463f3a]" >
            <div className='flex items-center justify-between pl-5 pr-5 dark:text-white'>
                <div>
                    <Link to={'/'}>
                        <h3>Ab.Moiz Khan</h3>
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-6'>
                        <Link to={"/about"}>
                            About
                        </Link>
                        <Link to={"/project"}>
                            Project
                        </Link>
                        <Link to={"/contact"}>
                            Contact
                        </Link>

                        {/* <button>
                            Tpggle
                        </button> */}
                    </ul>

                </div>
                <div>
                    <button onClick={themeChange}>{themeMode}</button>
                </div>
            </div>
        </div>
    )
}

export default Header