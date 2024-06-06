import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCaretDown, faBook, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../ThemeContext";
import { FontContext } from "../FontContext";

function Temp() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef();
    const { theme, changeTheme } = React.useContext(ThemeContext);
    const { changeFont } = React.useContext(FontContext);

    React.useEffect(() => {
        let handler = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    //? toggling theme change
    const toggleChange = () => {
        // handleThemeChange();
        theme['background-color'] === '#000' ? changeTheme('white') : changeTheme('black');

    };

    const handleFontClick = (selectedOption) => {
        changeFont(selectedOption);
        setIsOpen(false);
    };


    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {theme['background-color'] === '#000' ? (<FontAwesomeIcon icon={faBook} className='logo' />) : <FontAwesomeIcon icon={faBook} className='logo' />}

            </div>
            <div className="nav-container" ref={dropdownRef}>
                {theme['background-color'] === '#000' ? <button className="btn dark" id="btn" onClick={() => setIsOpen(!isOpen)}>
                    Fonts
                    <FontAwesomeIcon icon={faCaretDown} className={`bx ${isOpen ? "show arrow" : ""} `}
                        id="arrow" />
                </button> : <button className="btn light" id="btn" onClick={() => setIsOpen(!isOpen)}>
                    Fonts
                    <FontAwesomeIcon icon={faCaretDown} className={`bx ${isOpen ? "show arrow" : ""} `}
                        id="arrow" />
                </button>}

                <div className={`dropdown ${isOpen ? "show" : ""}`} id="dropdown" >
                    <p onClick={() => handleFontClick('Monospace')}>
                        Monospace
                    </p>
                    <p onClick={() => handleFontClick('NotoSerif')}>
                        Serif
                    </p>
                    <p onClick={() => handleFontClick('Roboto')}>
                        Roboto
                    </p>
                </div>
            </div>
            <div className="navbar__theme">
                {theme['background-color'] === '#000' ? (
                    <FontAwesomeIcon
                        icon={faSun}
                        size='xl'
                        className="theme-change-icon"
                        id="sun"
                        onClick={toggleChange}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faMoon}
                        size="xl"
                        style={{ color: "#df64e8", }}
                        className="theme-change-icon "
                        id="moon"
                        onClick={toggleChange}
                    />
                )}
            </div>
        </nav>

    );
}

export default Temp;
