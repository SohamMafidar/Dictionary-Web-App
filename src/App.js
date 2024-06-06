import React from "react";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Search from "./Components/Search";
import { ThemeContext } from "./ThemeContext";
import { FontContext } from "./FontContext";

function App() {
    const [data, setData] = React.useState([]);
    const { theme } = React.useContext(ThemeContext);
    const { font } = React.useContext(FontContext);
    const appStyles = {
        backgroundColor: theme["background-color"],
        color: theme.color,
        fontFamily: font["font-family"],
    };
    //     if (node) {
    //         theme &&
    //             Object.keys(theme).forEach((element) => {
    //                 node.style.setProperty(
    //                     element,
    //                     theme[element],
    //                     "important"
    //                 );
    //                 if (
    //                     element === "background-color" ||
    //                     element === "background"
    //                 ) {
    //                     //? apply the same background mentioned for theme to the body of the website
    //                     document.body.style.background = theme[element];
    //                 }
    //             });
    //         node.style.fontFamily = font;
    //     }
    // };

    return (
        <main style={appStyles}>
            <Navbar />
            <Search data={data} setData={setData} />
            <Container data={data} />
        </main>
    );
}

export default App;
