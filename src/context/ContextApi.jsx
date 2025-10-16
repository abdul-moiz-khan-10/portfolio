// import { useState } from "react"
// import { ThemeContext } from "./themeContext"

// export function ThemeProvider({ children }) {
//     const [theme, setTheme] = useState("light")

//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

import { ThemeContext } from "./themeContext"
import { useState } from "react"

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("Dark")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

