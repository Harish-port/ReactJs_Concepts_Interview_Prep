import React, { useContext } from 'react'
import ThemeContext from './themeContext'

function ThemeSwitcher() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light" : "Dark"}</button>
        </div>
    )
}

export default ThemeSwitcher