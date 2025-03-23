import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark")
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
    )
}
export default ThemeContext;
