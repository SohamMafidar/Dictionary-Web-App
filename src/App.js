import React from "react";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Search from "./Components/Search";
import { ThemeContext } from "./ThemeContext";
import { FontContext } from "./FontContext";

function App() {
    const [data, setData] = React.useState([]);
    const [isDesktop, setIsDesktop] = React.useState(true);
    const { theme } = React.useContext(ThemeContext);
    const { font } = React.useContext(FontContext);
    const appStyles = {
        backgroundColor: theme["background-color"],
        color: theme.color,
        fontFamily: font["font-family"],
    };
    React.useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isMobile = /iphone|ipad|android|mobile|touch/i.test(
                userAgent
            );
            const isSmallScreen = window.innerWidth < 1024; // Change if needed
            setIsDesktop(!isMobile && !isSmallScreen);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    if (!isDesktop) {
        return (
            <div
                style={{
                    textAlign: "center",
                    marginTop: "20vh",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                }}
            >
                <div className="img-div">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOopV5roGUmicCWM64LzkwGFF6jchIYnZdzQ&s"
                        alt="404"
                    />
                </div>
                <div className="no-small-screen">
                    This site is for desktops/laptops only. Please visit from a
                    larger screen
                </div>
            </div>
        );
    }
    return (
        <main style={appStyles}>
            <Navbar />
            <Search data={data} setData={setData} />
            <Container data={data} />
        </main>
    );
}

export default App;
