// src/ThemeContext.js
import React, { createContext, useState } from "react";
import themes from "./Utils/themes";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.black);
    const changeTheme = (themeName) => {
        setTheme(themes[themeName]);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
