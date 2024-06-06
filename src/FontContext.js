import React from "react";
import fonts from "./Utils/fonts";
const FontContext = React.createContext();

const FontProvider = ({ children }) => {
    const [font, setFont] = React.useState(fonts.Monospace);
    const changeFont = (fontName) => {
        setFont(fonts[fontName]);
    };

    return (
        <FontContext.Provider value={{ font, changeFont }}>
            {children}
        </FontContext.Provider>
    );
};

export { FontContext, FontProvider };
