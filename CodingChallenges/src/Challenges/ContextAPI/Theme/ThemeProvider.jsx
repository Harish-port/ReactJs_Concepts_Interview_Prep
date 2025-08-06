import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : "light"))
    };
    useEffect(() => {
        document.body.classname = theme;
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider