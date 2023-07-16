import React from "react";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Search from "./Components/Search";
import themes from "./Utils/themes";
import fonts from "./Utils/fonts";

function App() {
    const [data, setData] = React.useState([]);
    const [theme, setTheme] = React.useState(themes.black);
    const [font, setFont] = React.useState(fonts[0].value);
    const handleThemeChange = () => {
        setTheme(theme === themes.white ? themes.black : themes.white);
    };

    const handleFontChange = (selectedFont) => {
        console.log(`Changing the font to ${selectedFont}`);
        setFont(selectedFont);
    };

    const refCallback = (node) => {
        if (node) {
            theme &&
                Object.keys(theme).forEach((element) => {
                    node.style.setProperty(
                        element,
                        theme[element],
                        "important"
                    );
                    if (
                        element === "background-color" ||
                        element === "background"
                    ) {
                        //? apply the same background mentioned for theme to the body of the website
                        document.body.style.background = theme[element];
                    }
                });
            node.style.fontFamily = font;
        }
    };

    return (
        <main ref={refCallback}>
            <Navbar
                handleThemeChange={handleThemeChange}
                handleFontChange={handleFontChange}
                theme={theme}
            />
            <Search data={data} setData={setData} />
            <Container data={data} />
        </main>
    );
}

export default App;
