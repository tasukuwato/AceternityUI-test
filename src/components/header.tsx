// src/components/header.tsx
"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">wato App</h1>
            <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded"
            >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
        </header>
    );
};

export default Header;
