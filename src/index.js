import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { FontProvider } from "./FontContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <FontProvider>
                <App />
            </FontProvider>
        </ThemeProvider>
    </React.StrictMode>
);
