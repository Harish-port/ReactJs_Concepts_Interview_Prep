import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"} Mode</button>
        </div>

    )
}

export default ThemeToggle