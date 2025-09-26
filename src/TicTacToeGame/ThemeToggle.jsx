import React, { useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? "white" : "black";
        document.body.style.color = darkMode ? "black" : "white";
    };

    return (
        <button 
            onClick={toggleTheme} 
            style={{
                margin: "10px",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: darkMode ? "white" : "black",
                color: darkMode ? "black" : "white"
            }}
        >
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default ThemeToggle;